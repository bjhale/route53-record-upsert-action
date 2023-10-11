import { Route53Client, ChangeResourceRecordSetsCommand } from '@aws-sdk/client-route-53';
import core from '@actions/core';

const client = new Route53Client();
const zoneId = core.getInput('route53_zone_id');
const name = core.getInput('record_name');
const type = core.getInput('record_type');
const value = core.getInput('record_value');
const ttl = core.getInput('record_ttl');

try {
  const input = {
    HostedZoneId: zoneId,
    ChangeBatch: {
      Changes: [
        {
          Action: 'UPSERT',
          ResourceRecordSet: {
            Name: name,
            Type: type,
            TTL: ttl,
            ResourceRecords: [
              {
                Value: value
              }
            ]
          }
        }
      ]
    }
  };

  console.log(JSON.stringify(input));

  const command = new ChangeResourceRecordSetsCommand(input);
  const response = await client.send(command);

  console.log(response);
} catch (error) {
  core.setFailed(error.message);
}

