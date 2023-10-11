# Route53 Record Upsert

This GitHub Action updates or creates a simple Route53 record.

## Inputs

### `route53_zone_id`

**Required** The ID of the Route53 zone.

### `record_name`

**Required** The name or FQDN of the record.

### `record_type`

**Required** The type of the record.

### `record_value`

**Required** The value of the record.

### `record_ttl`

The TTL of the record. Default: `"300"`

## Example usage

```yaml
uses: actions/route53-record-upsert@v1
with:
  route53_zone_id: '1234567890'
  record_name: 'example.com'
  record_type: 'A'
  record_value: '192.0.2.1'
  record_ttl: '3600'