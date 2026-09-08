import {
  aws_certificatemanager as acm,
  aws_events as events,
  aws_events_targets as events_targets,
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
  Stack,
  StackProps,
  triggers,
} from "aws-cdk-lib";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { Construct } from "constructs";
import { Architecture } from "aws-cdk-lib/aws-lambda";
import { Platform } from "aws-cdk-lib/aws-ecr-assets";
import {
  DOMAIN_NAME,
  FULLY_QUALIFIED_DOMAIN,
  getEnv,
  WWW_DOMAIN_NAME,
} from "./settings";

export class InfraStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    certificate: acm.Certificate,
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

    // Litestream continuously replicates the sqlite file here. It is the
    // live replica - it should only ever have a small, bounded number of
    // concurrent writers, which is why both functions below set
    // reservedConcurrentExecutions (see comments there).
    const dbBucket = new s3.Bucket(this, "WiwaDbBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
    });

    // A separate bucket that only ever receives copies of the live replica
    // on a schedule (see WiwaDbBackupFunction below). Kept separate from
    // dbBucket so a bad write/bug in the live replica can't also corrupt the
    // thing you'd restore from, and so it can be pulled down independently
    // via `just db-backup-pull`.
    const dbBackupBucket = new s3.Bucket(this, "WiwaDbBackupBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
      lifecycleRules: [
        {
          noncurrentVersionExpiration: Duration.days(30),
        },
      ],
    });

    const mediaBucket = new s3.Bucket(this, "WiwaMediaBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
    });

    const commonEnvironmentVariables = {
      DJANGO_SECRET_KEY,
      DOMAIN: DOMAIN_NAME,
      AWS_STORAGE_BUCKET_NAME: mediaBucket.bucketName,
      DATABASE_PATH: "/tmp/db.sqlite3",
      LITESTREAM_REPLICA_BUCKET: dbBucket.bucketName,
      LITESTREAM_REPLICA_PATH: "db",
      INITIAL_SUPERUSER_USERNAME,
      INITIAL_SUPERUSER_PASSWORD,
      INITIAL_SUPERUSER_EMAIL,
      AWS_LWA_PASS_THROUGH_PATH: "/events/",
      AWS_LWA_READINESS_CHECK_PATH: "/health_check/",
    };

    const fn = new lambda.DockerImageFunction(this, "WiwaFunction", {
      code: lambda.DockerImageCode.fromImageAsset("..", {
        platform: Platform.LINUX_ARM64,
      }),
      architecture: Architecture.ARM_64,
      environment: {
        ...commonEnvironmentVariables,
        ALLOWED_HOSTS: [DOMAIN_NAME, WWW_DOMAIN_NAME, "127.0.0.1"]
          .filter(Boolean)
          .join(","),
      },
      memorySize: 512,
      timeout: Duration.seconds(30),
      logRetention: logs.RetentionDays.ONE_MONTH,
      // SnapStart is NOT enabled yet: container-image SnapStart requires the
      // Lambda Web Adapter to implement the before-checkpoint/after-restore
      // runtime hooks (https://github.com/aws/aws-lambda-web-adapter/pull/790,
      // merged 2026-07-09), which hasn't shipped in a release yet (still on
      // v1.0.1 from 2026-05-28). Enabling snapStart without that fix crashes
      // the adapter during the init/snapshot phase ("missing
      // lambda-runtime-aws-request-id header"). Revisit once a release
      // containing that PR is out - just add `snapStart:
      // lambda.SnapStartConf.ON_PUBLISHED_VERSIONS` back here and below.
      //
      // Litestream's replica is only safe with a single active writer -
      // concurrent execution environments would each have their own local
      // sqlite file and replication cursor, which could diverge the
      // replica. reservedConcurrentExecutions bounds that, but *don't* set
      // this to 1: if a single environment gets stuck (e.g. a slow cold
      // start that blows Lambda's ~10s init budget and gets retried), 1
      // means there is no other capacity for traffic to fall back to and
      // the entire site goes down until that one environment is recycled -
      // this happened during development. A small headroom here still
      // bounds the blast radius of a genuine concurrent-write race (which
      // needs literal simultaneous admin edits to matter, on a personal
      // blog) while surviving a single bad cold start.
      reservedConcurrentExecutions: 5,
    });
    dbBucket.grantReadWrite(fn);
    mediaBucket.grantReadWrite(fn);

    const fnAlias = new lambda.Alias(this, "WiwaFunctionLiveAlias", {
      aliasName: "live",
      version: fn.currentVersion,
    });

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
        memorySize: 1024,
        timeout: Duration.minutes(5),
        logRetention: logs.RetentionDays.ONE_MONTH,
        // SnapStart not enabled yet - see the comment on WiwaFunction above.
        // Same reasoning as WiwaFunction above - this also writes to the
        // litestream replica (migrations, populate_blog), so it's kept to a
        // single writer too. Note this does not fully rule out a write race
        // between WiwaFunction and WiwaWorkerFunction landing at the same
        // instant (e.g. editing a post while a migration runs) - acceptable
        // risk at this traffic level, but worth knowing about.
        reservedConcurrentExecutions: 1,
      }
    );
    dbBucket.grantReadWrite(workerFn);
    mediaBucket.grantReadWrite(workerFn);

    const workerFnAlias = new lambda.Alias(this, "WiwaWorkerFunctionLiveAlias", {
      aliasName: "live",
      version: workerFn.currentVersion,
    });

    const version = new Date().toISOString();
    const migrationFn = new lambdajs.NodejsFunction(this, "migrations", {
      architecture: Architecture.ARM_64,
      timeout: Duration.minutes(5),
      environment: {
        WORKER_FUNCTION_NAME: workerFnAlias.functionName,
        FUNCTION_VERSION: version,
      },
      logRetention: logs.RetentionDays.ONE_WEEK,
      runtime: lambda.Runtime.NODEJS_22_X,
      bundling: {
        externalModules: [
          "@aws-sdk/*", // Use the AWS SDK for JS v3 available in the Lambda runtime
        ],
      },
    });
    migrationFn.node.addDependency(workerFnAlias);
    workerFnAlias.grantInvoke(migrationFn);

    const populateBlogFn = new lambdajs.NodejsFunction(this, "populate-blog", {
      architecture: Architecture.ARM_64,
      timeout: Duration.minutes(5),
      environment: {
        WORKER_FUNCTION_NAME: workerFnAlias.functionName,
      },
      logRetention: logs.RetentionDays.ONE_WEEK,
      runtime: lambda.Runtime.NODEJS_22_X,
      bundling: {
        externalModules: [
          "@aws-sdk/*", // Use the AWS SDK for JS v3 available in the Lambda runtime
        ],
      },
    });
    populateBlogFn.node.addDependency(workerFnAlias);
    workerFnAlias.grantInvoke(populateBlogFn);

    new triggers.Trigger(this, "MigrationsTrigger", {
      handler: migrationFn,
      timeout: Duration.minutes(5),
      invocationType: triggers.InvocationType.REQUEST_RESPONSE,
      executeAfter: [workerFnAlias, dbBucket],
    });

    const integration = new HttpLambdaIntegration("WiwaIntegration", fnAlias);

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

    const cachePolicy = new cloudfront.CachePolicy(this, "WiwaCachePolicy", {
      cookieBehavior: cloudfront.CacheCookieBehavior.all(),
      queryStringBehavior: cloudfront.CacheQueryStringBehavior.all(),
    });

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

    // This is apparently the structure of the API endpoint
    // https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-custom-domain-names.html
    const distribution = new cloudfront.Distribution(
      this,
      "WiwaCloudfrontDistribution",
      {
        certificate,
        domainNames: WWW_DOMAIN_NAME
          ? [DOMAIN_NAME, WWW_DOMAIN_NAME]
          : [DOMAIN_NAME],
        // TODO: Add behaviour for /admin and /blog/cms
        defaultBehavior: {
          origin: new origins.HttpOrigin(
            `${api.apiId}.execute-api.${this.region}.amazonaws.com`
          ),
          functionAssociations: [
            {
              function: forwardHostHeader,
              eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
            },
          ],
          cachePolicy,
          originRequestPolicy,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      }
    );

    const aRecord = new route53.ARecord(this, "WiwaAliasRecord", {
      zone: hostedZone,
      recordName: DOMAIN_NAME,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    if (WWW_DOMAIN_NAME) {
      // NOTE: if www.<domain> currently has a CNAME record (e.g. the old
      // GitHub Pages one), it must be deleted out-of-band first - Route53
      // won't let an A record coexist with a CNAME at the same name, and
      // CloudFormation won't know to delete a record it doesn't manage.
      new route53.ARecord(this, "WiwaWwwAliasRecord", {
        zone: hostedZone,
        recordName: WWW_DOMAIN_NAME,
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(distribution)
        ),
      });
    }

    new triggers.Trigger(this, "PopulateBlogTrigger", {
      handler: populateBlogFn,
      timeout: Duration.minutes(5),
      invocationType: triggers.InvocationType.REQUEST_RESPONSE,
      executeAfter: [aRecord],
    });

    // Periodically mirrors the live litestream replica into a separate
    // bucket. This never touches the live sqlite file itself - it just
    // copies the replica objects already sitting in dbBucket - so it can't
    // interfere with litestream's single-writer requirement above. Pull it
    // down locally with `just db-backup-pull`.
    const backupDbFn = new lambdajs.NodejsFunction(this, "backup-db", {
      architecture: Architecture.ARM_64,
      timeout: Duration.minutes(5),
      environment: {
        SOURCE_BUCKET_NAME: dbBucket.bucketName,
        DEST_BUCKET_NAME: dbBackupBucket.bucketName,
      },
      logRetention: logs.RetentionDays.ONE_MONTH,
      runtime: lambda.Runtime.NODEJS_22_X,
      bundling: {
        externalModules: ["@aws-sdk/*"],
      },
    });
    dbBucket.grantRead(backupDbFn);
    dbBackupBucket.grantWrite(backupDbFn);

    new events.Rule(this, "WiwaDbBackupSchedule", {
      schedule: events.Schedule.rate(Duration.hours(24)),
      targets: [new events_targets.LambdaFunction(backupDbFn)],
    });

    // Read by `just db-backup-pull` so the bucket name doesn't need to be
    // copy-pasted/hardcoded anywhere.
    new CfnOutput(this, "DbBackupBucketName", {
      value: dbBackupBucket.bucketName,
    });
  }
}
