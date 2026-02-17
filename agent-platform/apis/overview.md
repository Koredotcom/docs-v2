# Tools APIs

The Platform provides secured APIs to manage files, tools, models, and guardrails. Developers can perform key activities like deployment, import/export, monitoring, analytics, billing, and reporting using these APIs .

## API Key Authentication

Public APIs require an API key for authentication and authorization. The account owner or admin can generate this key in the **Settings** console. 

An API key serves as a unique identifier for the client or application accessing the API, ensuring security and access control. It helps:

* Authenticate requests – Verify the identity of the client.
* Control access – Restrict API usage based on permissions or rate limits.
* Monitor usage – Track API calls for analytics, billing, or debugging.
* Prevent abuse – Protect against unauthorized or excessive use.

API keys are typically included in request headers or parameters to validate access.

!!!note
    
    Each API key includes created on and last used dates to track its usage history.

## How to Create the API Key?

1. [Login](../getting-started/sign-up-sign-in.md) to the Platform and [access](../administration/overview.md#access-settings-console) the Settings Console.

2. On the left menu, click Security & Control -> API Scopes.

3. Create an API app and include all the required scopes, and the API keys as mentioned [here](../settings/security-and-control/api-scopes.md).

!!!note
    
    You can copy the API key only once and must not lose it. Save the key in a secure location for future use.
   
<hr/> 

**Related resource**

* [List of available APIs](list-of-apis.md).
