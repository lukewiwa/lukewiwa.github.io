import {
  aws_certificatemanager as acm,
  aws_lambda as lambda,
  aws_lambda_nodejs as lambdajs,
  aws_logs as logs,
  aws_route53 as route53,
  aws_route53_targets as targets,
  aws_s3 as s3,
  aws_apigatewayv2 as apigwv2,
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as origins,
  CfnOutput,
  Duration,
  RemovalPolicy,
  Stack,
  StackProps,
  triggers,
} from "aws-cdk-lib";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { Construct } from "constructs";
import { Architecture } from "aws-cdk-lib/aws-lambda";
import { Platform } from "aws-cdk-lib/aws-ecr-assets";
import { DOMAIN_NAME, FULLY_QUALIFIED_DOMAIN, getEnv } from "./settings";

/**
 * Two very different workloads share one domain:
 *
 *  - The public blog is a pile of static files in S3. CloudFront serves it
 *    directly, so ordinary readers never reach Django at all.
 *  - The CMS is Django on Lambda, reached only through the /blog/cms and
 *    /admin behaviours. It writes to a SQLite file on local disk which
 *    Litestream replicates to S3.
 *
 * Publishing is what connects them: the CMS bakes the database out to static
 * files, uploads them to the site bucket, and invalidates the distribution.
 */
export class InfraStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    certificate: acm.ICertificate,
    props?: StackProps
  ) {
    super(scope, id, props);

    const DJANGO_SECRET_KEY = getEnv("DJANGO_SECRET_KEY");

    const INITIAL_SUPERUSER_USERNAME =
      process.env.INITIAL_SUPERUSER_USERNAME ?? "";
    const INITIAL_SUPERUSER_PASSWORD =
      process.env.INITIAL_SUPERUSER_PASSWORD ?? "";
    const INITIAL_SUPERUSER_EMAIL = process.env.INITIAL_SUPERUSER_EMAIL ?? "";

    const hostedZone = route53.HostedZone.fromLookup(this, "WiwaHostedZone", {
      domainName: FULLY_QUALIFIED_DOMAIN,
    });

    // -------------------------------------------------------------------------
    // Buckets
    // -------------------------------------------------------------------------

    // Litestream's replica. Versioning is the backstop for the one failure mode
    // Litestream cannot protect against on its own: a replica written by two
    // processes at once.
    const dbBucket = new s3.Bucket(this, "WiwaDbBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
      lifecycleRules: [{ noncurrentVersionExpiration: Duration.days(30) }],
    });

    const mediaBucket = new s3.Bucket(this, "WiwaMediaBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
    });

    // The published static site. Private: CloudFront reaches it through an
    // origin access control, so the bucket is never addressable directly.
    const siteBucket = new s3.Bucket(this, "WiwaSiteBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // -------------------------------------------------------------------------
    // Django on Lambda
    // -------------------------------------------------------------------------

    const commonEnvironmentVariables = {
      DJANGO_SECRET_KEY,
      DOMAIN: DOMAIN_NAME,
      SITE_BASE_URL: `https://${DOMAIN_NAME}`,
      AWS_STORAGE_BUCKET_NAME: mediaBucket.bucketName,
      MEDIA_BACKEND: "s3",
      INITIAL_SUPERUSER_USERNAME,
      INITIAL_SUPERUSER_PASSWORD,
      INITIAL_SUPERUSER_EMAIL,
      AWS_LWA_PASS_THROUGH_PATH: "/events/",
      AWS_LWA_READINESS_CHECK_PATH: "/health_check/",

      // Litestream. /tmp is the only writable path on Lambda.
      DB_PATH: "/tmp/db.sqlite3",
      LITESTREAM_CONFIG: "/function/litestream.yml",
      LITESTREAM_SOCKET: "/tmp/litestream.sock",
      LITESTREAM_REPLICA_URL: `s3://${dbBucket.bucketName}/db`,

      // Publishing
      BUILD_DIR: "/tmp/build",
      PUBLISH_TARGET: "s3",
      PUBLISH_RUNNER: "inline",
      PUBLISH_BUCKET_NAME: siteBucket.bucketName,
    };

    const fn = new lambda.DockerImageFunction(this, "WiwaFunction", {
      code: lambda.DockerImageCode.fromImageAsset("..", {
        platform: Platform.LINUX_ARM64,
      }),
      architecture: Architecture.ARM_64,
      environment: {
        ...commonEnvironmentVariables,
        ALLOWED_HOSTS: `${DOMAIN_NAME},127.0.0.1`,
      },
      // A publish bakes every page and uploads the diff, so this needs room to
      // run well past a normal request.
      memorySize: 1536,
      timeout: Duration.minutes(5),
      // The single most important line in this stack. Litestream cannot have
      // two processes replicating the same database, and Django writes on
      // every CMS save. Reads are served from S3, so a concurrency of one
      // costs nothing.
      reservedConcurrentExecutions: 1,
      logRetention: logs.RetentionDays.ONE_MONTH,
    });
    dbBucket.grantReadWrite(fn);
    mediaBucket.grantReadWrite(fn);
    siteBucket.grantReadWrite(fn);

    // -------------------------------------------------------------------------
    // Worker for management commands (migrate, populate_blog)
    // -------------------------------------------------------------------------
    //
    // The worker restores its own copy of the database and may write to it, so
    // it must never run while the CMS is serving. It is only invoked by
    // deploy-time triggers, never on the request path.
    const workerFn = new lambda.DockerImageFunction(
      this,
      "WiwaWorkerFunction",
      {
        code: lambda.DockerImageCode.fromImageAsset("..", {
          platform: Platform.LINUX_ARM64,
        }),
        architecture: Architecture.ARM_64,
        environment: {
          ...commonEnvironmentVariables,
          ALLOWED_HOSTS: "127.0.0.1",
          ROOT_URLCONF: "config.urls.events",
        },
        memorySize: 1536,
        timeout: Duration.minutes(10),
        reservedConcurrentExecutions: 1,
        logRetention: logs.RetentionDays.ONE_MONTH,
      }
    );
    dbBucket.grantReadWrite(workerFn);
    mediaBucket.grantReadWrite(workerFn);
    siteBucket.grantReadWrite(workerFn);

    const invokeWorker = (name: string, command: string) => {
      const invoker = new lambdajs.NodejsFunction(this, name, {
        entry: "./lib/invoke-worker.ts",
        architecture: Architecture.ARM_64,
        timeout: Duration.minutes(10),
        environment: {
          WORKER_FUNCTION_NAME: workerFn.functionName,
          MANAGEMENT_COMMAND: command,
          // Forces the trigger to re-run on every deploy.
          FUNCTION_VERSION: new Date().toISOString(),
        },
        logRetention: logs.RetentionDays.ONE_WEEK,
        runtime: lambda.Runtime.NODEJS_22_X,
        bundling: {
          externalModules: ["@aws-sdk/*"],
        },
      });
      invoker.node.addDependency(workerFn);
      workerFn.grantInvoke(invoker);
      return invoker;
    };

    const migrationFn = invokeWorker("migrations", "migrate --noinput");

    new triggers.Trigger(this, "MigrationsTrigger", {
      handler: migrationFn,
      timeout: Duration.minutes(10),
      invocationType: triggers.InvocationType.REQUEST_RESPONSE,
      executeAfter: [workerFn, dbBucket],
    });

    // -------------------------------------------------------------------------
    // HTTP API in front of Django
    // -------------------------------------------------------------------------

    const integration = new HttpLambdaIntegration("WiwaIntegration", fn);

    const api = new apigwv2.HttpApi(this, "WiwaHttpApi", {
      defaultIntegration: integration,
      createDefaultStage: false,
    });
    api.addStage("WiwaDefaultStage", {
      autoDeploy: true,
      throttle: {
        burstLimit: 50,
        rateLimit: 500,
      },
    });

    const forwardHostHeader = new cloudfront.Function(
      this,
      "WiwaForwardHeaderCfFunction",
      {
        code: cloudfront.FunctionCode.fromFile({
          filePath: "./lib/forwardHostFunction.js",
        }),
        runtime: cloudfront.FunctionRuntime.JS_2_0,
      }
    );

    const lambdaOrigin = new origins.HttpOrigin(
      `${api.apiId}.execute-api.${this.region}.amazonaws.com`,
      {
        // A publish runs inside a request, so the origin has to wait for it.
        readTimeout: Duration.seconds(60),
      }
    );

    const originRequestPolicy = new cloudfront.OriginRequestPolicy(
      this,
      "WiwaOriginPolicy",
      {
        cookieBehavior: cloudfront.OriginRequestCookieBehavior.all(),
        headerBehavior:
          cloudfront.OriginRequestHeaderBehavior.allowList("x-forwarded-host"),
        queryStringBehavior: cloudfront.OriginRequestQueryStringBehavior.all(),
      }
    );

    // Everything the CMS needs. Never cached: these are authenticated,
    // and caching them would leak one editor's session to the next request.
    const dynamicBehavior: cloudfront.BehaviorOptions = {
      origin: lambdaOrigin,
      functionAssociations: [
        {
          function: forwardHostHeader,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
        },
      ],
      cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
      originRequestPolicy,
      allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    const distribution = new cloudfront.Distribution(
      this,
      "WiwaCloudfrontDistribution",
      {
        certificate,
        domainNames: [DOMAIN_NAME],
        defaultRootObject: "index.html",
        // The public site: static files, straight from the bucket.
        defaultBehavior: {
          origin:
            origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          responseHeadersPolicy:
            cloudfront.ResponseHeadersPolicy.SECURITY_HEADERS,
        },
        additionalBehaviors: {
          "/blog/cms/*": dynamicBehavior,
          "/admin/*": dynamicBehavior,
          "/documents/*": dynamicBehavior,
          // Health check for the readiness probe and for uptime monitoring.
          "/health_check/": dynamicBehavior,
        },
        errorResponses: [
          {
            httpStatus: 404,
            responseHttpStatus: 404,
            responsePagePath: "/404.html",
          },
          // S3 returns 403 for a missing key when the bucket is private.
          {
            httpStatus: 403,
            responseHttpStatus: 404,
            responsePagePath: "/404.html",
          },
        ],
      }
    );

    // Broken out of the function's initial environment because the
    // distribution does not exist until after the function it points at.
    fn.addEnvironment("CLOUDFRONT_DISTRIBUTION_ID", distribution.distributionId);
    workerFn.addEnvironment(
      "CLOUDFRONT_DISTRIBUTION_ID",
      distribution.distributionId
    );
    distribution.grantCreateInvalidation(fn);
    distribution.grantCreateInvalidation(workerFn);

    const aRecord = new route53.ARecord(this, "WiwaAliasRecord", {
      zone: hostedZone,
      recordName: DOMAIN_NAME,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    // One-time import of the markdown archive into the database. Safe to leave
    // in: populate_blog skips posts that already exist.
    const populateBlogFn = invokeWorker("populate-blog", "populate_blog");
    new triggers.Trigger(this, "PopulateBlogTrigger", {
      handler: populateBlogFn,
      timeout: Duration.minutes(10),
      invocationType: triggers.InvocationType.REQUEST_RESPONSE,
      executeAfter: [aRecord],
    });

    new CfnOutput(this, "SiteBucketName", { value: siteBucket.bucketName });
    new CfnOutput(this, "DbBucketName", { value: dbBucket.bucketName });
    new CfnOutput(this, "DistributionId", {
      value: distribution.distributionId,
    });
  }
}
