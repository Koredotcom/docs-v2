---
title: Public API name
description: Describe what the API does, preferably in about 160 characters.
---

Uses of this template:

- Use to document APIs and ensure no relevant section is missing
- Use as a template with AI tools.
- Ensure consistency and coverage during peer review
- Gather API details from engineering

---

## API Summary

Describe what the API does, when it should be used, and the business problem it solves.

| Field              | Value |
|--------------------|-------|
| API name           |       |
| Version            |       |
| HTTP method        |       |
| Endpoint           |       |
| Product/Service    |       |
| API category       |       |
| Authentication     |       |
| Permissions/Scopes |       |

---

## Overview

Provide a concise description of the API and its purpose. Mention any important behavior or limitations.

---

## Prerequisites

List any prerequisites such as enabled features, roles, licenses, dependencies, or setup required before working with this API.

---

## Endpoint

Specify the complete endpoint URL and explain path variables if applicable.

```text
endpoint details
```

---

## Request Headers

List all supported request headers. Mark required headers and describe accepted values.

| Header      | Required    | Description | Example     |
|:------------|:------------|:------------|:------------|
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |

---

## Path Parameters

Describe every path parameter used in the endpoint URL.

| Parameter   | Type        | Required    | Description | Example     |
|:------------|:------------|:------------|:------------|:------------|
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |

---

## Query Parameters

Document all supported query parameters including defaults, allowed values, and constraints.

| Parameter   | Type        | Required    | Default     | Description |
|:------------|:------------|:------------|:------------|:------------|
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |

---

## Request Body

Describe the JSON request body. Include nesting rules, required fields, enums, validation, and limits.

| Field       | Type        | Required    | Description | Example     |
|:------------|:------------|:------------|:------------|:------------|
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |

---

## Sample Request

Provide a complete working request that users can copy and run.

```http
working copy of the API call
```

---

## Successful Response

Explain what a successful response means before showing the payload.

### Sample Response

```json
sample response json
```

---

## Response Parameters

Describe every field returned in the response.

| Field       | Type        | Description | Possible Values / Notes |
|:------------|:------------|:------------|:------------------------|
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum             |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum             |

---

## Error Responses

Document the expected errors, causes, rate limits, and recommended resolutions.

| HTTP Status | Error Code  | Cause       | Resolution  |
|:------------|:------------|:------------|:------------|
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |

---

## Status Codes

List all HTTP status codes returned by the API.

| Code        | Meaning     | When Returned |
|:------------|:------------|:--------------|
| lorem ipsum | lorem ipsum | lorem ipsum   |
| lorem ipsum | lorem ipsum | lorem ipsum   |

---

## Rate Limits

Describe throttling limits, quotas, burst limits, and retry recommendations.

---

## Pagination

Explain pagination parameters and response fields if applicable.

---

## Filtering and Sorting

Describe supported filtering and sorting options if applicable.

---

## Idempotency

Explain whether repeated requests are safe and whether idempotency keys are supported.

---

## Versioning

Document version-specific behavior and compatibility notes, if applicable.

---

## Notes and Limitations

Document important caveats, unsupported scenarios, rate limits (see above), and behavioral constraints.

---

## Related APIs

Link related endpoints, workflows, or follow-up APIs.

* [API name](/api-link)
* [API name](/api-link)
* [API name](/api-link)

---

## API functionality-specific section 

Include here functionality-specific content for a particular API. Be mindful of the placement of such an API-specific section.

As example, some other API docs contain the following sections that are specific to the functionality of those APIs.

- Timers configuration
- Webhook configuration
- Webhook sample response
- Context variables
- Interaction status logs
- Current limitations
- Pagination limitations
- Timestamp and time zone behavior
- Asynchronous processing details
- Bulk import/export behavior
- Campaign or template-specific options
- Real-time processing considerations
- Request lifecycle/workflow
- Supported file formats
- Callback events
- Retry behavior
- Data retention
- Performance considerations
- Security considerations
