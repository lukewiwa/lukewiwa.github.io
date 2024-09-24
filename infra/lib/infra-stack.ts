import {
  aws_certificatemanager as acm,
  aws_lambda as lambda,
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
} from "aws-cdk-lib";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { Construct } from "constructs";
import { Architecture } from "aws-cdk-lib/aws-lambda";
import { Platform } from "aws-cdk-lib/aws-ecr-assets";

const getEnv = (envVar: string) => {
  const env = process.env[envVar];
  if (!env) throw new Error(`No environment variable found for ${envVar}`);
  return env;
};

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const DJANGO_SECRET_KEY = getEnv("DJANGO_SECRET_KEY");

    const INITIAL_SUPERUSER_USERNAME =
      process.env.INITIAL_SUPERUSER_USERNAME ?? "";
    const INITIAL_SUPERUSER_PASSWORD =
      process.env.INITIAL_SUPERUSER_PASSWORD ?? "";
    const INITIAL_SUPERUSER_EMAIL = process.env.INITIAL_SUPERUSER_EMAIL ?? "";

    const FULLY_QUALIFIED_DOMAIN = getEnv("FULLY_QUALIFIED_DOMAIN");
    const SUB_DOMAIN = getEnv("SUB_DOMAIN");
    const DOMAIN_NAME = `${SUB_DOMAIN}.${FULLY_QUALIFIED_DOMAIN}`;

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

    const distribution = new cloudfront.Distribution(
      this,
      "WiwaCloudfrontDistribution",
      {
        defaultBehavior: {
          origin: new origins.HttpOrigin(DOMAIN_NAME),
        },
      }
    );

    const fn = new lambda.DockerImageFunction(this, "WiwaFunction", {
      code: lambda.DockerImageCode.fromImageAsset("..", {
        platform: Platform.LINUX_ARM64,
      }),
      architecture: Architecture.ARM_64,
      environment: {
        DJANGO_SECRET_KEY,
        ALLOWED_HOSTS: `${DOMAIN_NAME},127.0.0.1`,
        DOMAIN: DOMAIN_NAME,
        STATIC_HOST: `https://${distribution.domainName}`,
        AWS_STORAGE_BUCKET_NAME: mediaBucket.bucketName,
        SQLITE_OBJECT_STORAGE_BUCKET_NAME: dbBucket.bucketName,
        INITIAL_SUPERUSER_USERNAME,
        INITIAL_SUPERUSER_PASSWORD,
        INITIAL_SUPERUSER_EMAIL,
        AWS_LWA_READINESS_CHECK_PATH: "/health_check/",
      },
      memorySize: 512,
      timeout: Duration.seconds(60),
      logRetention: logs.RetentionDays.ONE_MONTH,
    });
    dbBucket.grantReadWrite(fn);
    mediaBucket.grantReadWrite(fn);

    const Certificate = new acm.Certificate(this, "WiwaCert", {
      domainName: DOMAIN_NAME,
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });

    const integration = new HttpLambdaIntegration("WiwaIntegration", fn);

    const apigwDomainName = new apigwv2.DomainName(this, "WiwaDomainName", {
      domainName: DOMAIN_NAME,
      certificate: Certificate,
    });

    const api = new apigwv2.HttpApi(this, "WiwaHttpApi", {
      defaultIntegration: integration,
      createDefaultStage: false,
    });
    api.addStage("WiwaDefaultStage", {
      domainMapping: { domainName: apigwDomainName },
      autoDeploy: true,
      throttle: {
        burstLimit: 50,
        rateLimit: 500,
      },
    });

    new route53.ARecord(this, "WiwaAliasRecord", {
      zone: hostedZone,
      recordName: DOMAIN_NAME,
      target: route53.RecordTarget.fromAlias(
        new targets.ApiGatewayv2DomainProperties(
          apigwDomainName.regionalDomainName,
          apigwDomainName.regionalHostedZoneId
        )
      ),
    });
  }
}
