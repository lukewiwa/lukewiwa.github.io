import {
  aws_certificatemanager as acm,
  aws_route53 as route53,
  Stack,
  StackProps,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import { DOMAIN_NAME, FULLY_QUALIFIED_DOMAIN, WWW_DOMAIN_NAME } from "./settings";

export class CertificateStack extends Stack {
  public certificate: acm.Certificate;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const hostedZone = route53.HostedZone.fromLookup(this, "WiwaHostedZone", {
      domainName: FULLY_QUALIFIED_DOMAIN,
    });
    this.certificate = new acm.Certificate(this, "WiwaCertificate", {
      domainName: DOMAIN_NAME,
      subjectAlternativeNames: WWW_DOMAIN_NAME ? [WWW_DOMAIN_NAME] : undefined,
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });
  }
}