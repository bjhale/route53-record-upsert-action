# Route53 Record Upsert Action

<!-- action-docs-description -->
## Description

Updates or creates a simple Route53 DNS record.
<!-- action-docs-description -->

## Prerequisites

To use this action, you first need to configure AWS credentials and set the AWS Region in your GitHub environment by using the configure-aws-credentials step.  Follow the instructions in [Configure AWS Credentials Action for GitHub Actions](https://github.com/aws-actions/configure-aws-credentials) to Assume a role directly using GitHub OIDC provider.

The IAM role the action assumes must have the following permissions:

`route53:ChangeResourceRecordSets` on the zone you want to add/change records.

<!-- action-docs-inputs -->
## Inputs

| parameter | description | required | default |
| --- | --- | --- | --- |
| route53_zone_id | Route53 Zone ID | `true` |  |
| record_name | Name or FQDN of the record | `true` |  |
| record_type | Type of the record | `true` |  |
| record_value | Value of the record | `true` |  |
| record_ttl | TTL of the record | `false` | 300 |
<!-- action-docs-inputs -->

<!-- action-docs-outputs -->

<!-- action-docs-outputs -->

<!-- action-docs-runs -->
## Runs

This action is a `node20` action.
<!-- action-docs-runs -->