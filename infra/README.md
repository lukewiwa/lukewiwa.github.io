# infra

AWS CDK (TypeScript) app for the lukewiwa.com Django/Wagtail-on-Lambda
deployment. See the [repo root README](../README.md) for the full
architecture writeup, required environment variables, and the recommended
staging-domain-first deploy sequence. Prefer `just deploy` from the repo
root over running these directly, but for reference:

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy --all`  deploy both stacks to your default AWS account/region
* `cdk diff --all`    compare deployed stacks with current state - always
  worth running before a deploy that touches DNS or the certificate
* `cdk synth`       emits the synthesized CloudFormation template

## Stacks

- `WiwaCertificateStack` (`lib/certificate-stack.ts`) - always deploys to
  `us-east-1` regardless of your target region, since CloudFront only
  accepts ACM certs from there. Adding/removing `WWW_DOMAIN_NAME` as a SAN
  (see `lib/settings.ts`) replaces the certificate resource, which
  re-triggers DNS validation.
- `WiwaInfraStack` (`lib/infra-stack.ts`) - everything else: the two Lambda
  functions (`WiwaFunction` public-facing, `WiwaWorkerFunction` for
  management commands invoked directly rather than over HTTP), the
  litestream live-replica and daily-backup S3 buckets, CloudFront, API
  Gateway, and the Route53 records.
