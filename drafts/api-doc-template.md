---
title: Public API name
description: Describe what the API does, preferably in about 160 characters.
---

This template to document APIs is a comprehensive template with potential sections that may be present in an API doc. All sections aren't mandatory. Uses of this template:

- Use to document APIs and ensure no relevant section is missing
- Use as a template with AI tools.
- Ensure consistency and coverage during peer review
- Gather API details from engineering

---

Provide a concise description of the API and its purpose. Mention any important behavior or limitations.

| Field              | Value |
|--------------------|-------|
| HTTP method        |       |
| API name           |       |
| Version            |       |
| Endpoint URL       |       |
| Content Type       |       |
| Product/Service    |       |
| API category*      |       |
| Authentication     |       |
| API Scopes         |       |
| Permissions*       |       |

---


## Rate Limits

Describe throttling limits, quotas, burst limits, and retry recommendations.

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

## Header Parameters

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

## Body Parameters

Describe the JSON request body. Include nesting rules, required fields, enums, validation, and limits.

| Field       | Type        | Required    | Description | Example     |
|:------------|:------------|:------------|:------------|:------------|
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |

---

## Sample Request

Provide a complete working request that users can copy and run.

```http
Working copy of the API call
```

---

## API Response

Explain what a successful response means before showing the payload.

Provide a sample response.

```json
sample response json
```

### Response Parameters

Describe every field returned in the response.

| Field       | Type        | Description | Possible Values / Notes |
|:------------|:------------|:------------|:------------------------|
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum             |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum             |

### Error Responses

Document the expected errors, causes, rate limits, and recommended resolutions, if applicable.

| HTTP Status | Error Code  | Cause       | Resolution  |
|:------------|:------------|:------------|:------------|
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum |

---

## Paginate

Explain pagination parameters and response fields if applicable.

---

## Filter and Sort

Describe supported filtering and sorting options if applicable.

---

## Idempotency

Explain whether repeated requests are safe and whether idempotency keys are supported, if applicable.

---

## Versioning

Document version-specific behavior and compatibility notes, if applicable.

---

## Limitations

API related limitations, if applicable.

---

## Related APIs

Link related endpoints, workflows, or follow-up APIs, if any.

* [API name](/api-link)
* [API name](/api-link)
* [API name](/api-link)
