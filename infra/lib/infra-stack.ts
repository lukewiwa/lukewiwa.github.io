import {
  aws_certificatemanager as acm,
  aws_lambda as lambda,
  aws_logs as logs,
  aws_route53 as route53,
  aws_route53_targets as targets,
  aws_s3 as s3,
  aws_apigatewayv2 as apigwv2,
  Duration,
  Stack,
  StackProps,
  triggers,
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

    const hostedZone = route53.HostedZone.fromLookup(this, "HubHostedZone", {
      domainName: FULLY_QUALIFIED_DOMAIN,
    });

    const bucket = new s3.Bucket(this, "HubBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
    });

    const commonFnConfig = {
      architecture: Architecture.ARM_64,
      environment: {
        DJANGO_SECRET_KEY,
        ALLOWED_HOSTS: `${DOMAIN_NAME},localhost`,
        AWS_STORAGE_BUCKET_NAME: bucket.bucketName,
        INITIAL_SUPERUSER_USERNAME,
        INITIAL_SUPERUSER_PASSWORD,
        INITIAL_SUPERUSER_EMAIL,
      },
      memorySize: 512,
      timeout: Duration.seconds(30),
      logRetention: logs.RetentionDays.ONE_MONTH,
    }

    const fn = new lambda.DockerImageFunction(this, "HubFunction", {
      code: lambda.DockerImageCode.fromImageAsset("..", {
        platform: Platform.LINUX_ARM64,
      }),
      ...commonFnConfig
    });
    bucket.grantReadWrite(fn);

    const migrationsFn = new lambda.DockerImageFunction(this, "HubMigrationsFunction", {
      code: lambda.DockerImageCode.fromImageAsset("..", {
        platform: Platform.LINUX_ARM64,
        cmd: ["poetry", "run", "python", "manage.py", "migrate"]
      }),
      ...commonFnConfig
    });
    bucket.grantReadWrite(migrationsFn);


    new triggers.Trigger(this, "HubMigrationsFunctionTrigger", {
      handler: migrationsFn,
      executeAfter: [fn],
    });

    const Certificate = new acm.Certificate(this, "HubCert", {
      domainName: DOMAIN_NAME,
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });

    const Integration = new HttpLambdaIntegration("HubIntegration", fn);

    const apigwDomainName = new apigwv2.DomainName(this, "HubDomainName", {
      domainName: DOMAIN_NAME,
      certificate: Certificate,
    });

    const api = new apigwv2.HttpApi(this, "HubHttpApi", {
      defaultIntegration: Integration,
      createDefaultStage: false,
    });
    api.addStage("HubDefaultStage", {
      domainMapping: { domainName: apigwDomainName },
      autoDeploy: true,
      throttle: {
        burstLimit: 50,
        rateLimit: 500,
      },
    });

    new route53.ARecord(this, "HubAliasRecord", {
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
