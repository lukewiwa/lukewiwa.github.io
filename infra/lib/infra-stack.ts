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
  Duration,
  Stack,
  StackProps,
  triggers,
} from "aws-cdk-lib";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { Construct } from "constructs";
import { Architecture } from "aws-cdk-lib/aws-lambda";
import { Platform } from "aws-cdk-lib/aws-ecr-assets";
import { DOMAIN_NAME, FULLY_QUALIFIED_DOMAIN, getEnv } from "./settings";

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

    const dbBucket = new s3.Bucket(this, "WiwaDbBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
    });

    const mediaBucket = new s3.Bucket(this, "WiwaMediaBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
    });

    const commonEnvironmentVariables = {
      DJANGO_SECRET_KEY,
      DOMAIN: DOMAIN_NAME,
      AWS_STORAGE_BUCKET_NAME: mediaBucket.bucketName,
      SQLITE_OBJECT_STORAGE_BUCKET_NAME: dbBucket.bucketName,
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
        ALLOWED_HOSTS: `${DOMAIN_NAME},127.0.0.1`,
      },
      memorySize: 512,
      timeout: Duration.seconds(30),
      logRetention: logs.RetentionDays.ONE_MONTH,
    });
    dbBucket.grantReadWrite(fn);
    mediaBucket.grantReadWrite(fn);

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
      }
    );
    dbBucket.grantReadWrite(workerFn);
    mediaBucket.grantReadWrite(workerFn);

    const version = new Date().toISOString();
    const migrationFn = new lambdajs.NodejsFunction(this, "migrations", {
      architecture: Architecture.ARM_64,
      timeout: Duration.minutes(5),
      environment: {
        WORKER_FUNCTION_NAME: workerFn.functionName,
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
    migrationFn.node.addDependency(workerFn);
    workerFn.grantInvoke(migrationFn);

    const populateBlogFn = new lambdajs.NodejsFunction(this, "populate-blog", {
      architecture: Architecture.ARM_64,
      timeout: Duration.minutes(5),
      environment: {
        WORKER_FUNCTION_NAME: workerFn.functionName,
      },
      logRetention: logs.RetentionDays.ONE_WEEK,
      runtime: lambda.Runtime.NODEJS_22_X,
      bundling: {
        externalModules: [
          "@aws-sdk/*", // Use the AWS SDK for JS v3 available in the Lambda runtime
        ],
      },
    });
    populateBlogFn.node.addDependency(workerFn);
    workerFn.grantInvoke(populateBlogFn);

    new triggers.Trigger(this, "MigrationsTrigger", {
      handler: migrationFn,
      timeout: Duration.minutes(5),
      invocationType: triggers.InvocationType.REQUEST_RESPONSE,
      executeAfter: [workerFn, dbBucket],
    });

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
        domainNames: [DOMAIN_NAME],
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

    new triggers.Trigger(this, "PopulateBlogTrigger", {
      handler: populateBlogFn,
      timeout: Duration.minutes(5),
      invocationType: triggers.InvocationType.REQUEST_RESPONSE,
      executeAfter: [aRecord],
    });
  }
}
