--8<-- "includes/ccai-api-back-link.md"

# Agents API

To get all agent details associated with an `accountId`.

<table>
  <tr>
   <td>Method
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Endpoints
   </td>
   <td><code>https://{{host}}/agentassist/api/public/analytics/account/{{Accountid}}/agents</code>
   </td>
  </tr>
  <tr>
   <td>Content-Type
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
  <tr>
   <td>Authorization
   </td>
   <td><code>auth: {{JWT}}</code>
<p>
See <a href="https://docs.kore.ai/smartassist/api/api-setup/#Generating_a_JWT_token">How to generate the JWT Token.</a>
   </td>
  </tr>
  <tr>
   <td>API Scope
   </td>
   <td>WFM Integration
   </td>
  </tr>
</table>

## Path Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Type</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>AccountId
   </td>
   <td>The unique Id associated with the account.
   </td>
   <td>string, required
   </td>
  </tr>
</table>

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/public/analytics/account/636f5b36bcf8a8c7101exxxx/agents?offset=0&limit=5' \
--header 'auth: <token>' \
--header 'Content-Type: application/json'
```

## Sample Response

```
[
	{
		accountId: "63fb9a0f90425b644d3exxxx",
		"agentId":"a-59bb17e-0cae-46b0-8d80-a8a8ac34xxxx",
		"firstName": "Tony",
		"lastName": "Stark"

	}
]
```

## Body Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Type</strong>
   </td>
  </tr>
  <tr>
   <td>accountId
   </td>
   <td>The unique Id associated with the account. For example, 63fb9a0f90425b644d3ec070.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td>agentId
   </td>
   <td>The unique Id of the agent. For example, a-59bb17e-0cae-46b0-8d80-a8a8ac34e55c.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td>firstName
   </td>
   <td>The agent’s first name. For example, Tony.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td>lastName
   </td>
   <td>The agent’s last name. For example, Stark.
   </td>
   <td>String
   </td>
  </tr>
</table>