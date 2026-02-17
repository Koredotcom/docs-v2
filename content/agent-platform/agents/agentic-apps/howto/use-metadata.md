# Use the Metadata Fields Passed from the API in Agent Platform

Metadata is structured data that provides additional context about a session, user, or request. When interacting with the Platform via the [execute API](../../../apis/agentic-apps/execute.md), developers can provide custom metadata in every request using the metadata field. This enriches agent context, enabling personalized, stateful, and relevant experiences. 

The Platform automatically stores this information in its default sessionMeta memory store, according to a specific, defined schema, making it easily accessible within the session. 

The stored metadata can then be referenced in prompts, allowing agents to respond dynamically based on context passed via the Metadata fields. 


## Example: Step-by-Step Usage

Below is a complete example demonstrating how metadata is passed, stored, and accessed in the Platform.


### 1. API Call with Metadata

A typical request to the execute API includes a metadata field as shown below. In the following example, additional user information is passed to the app via the metadata field.


```json
{
  "sessionIdentity": [
    {
      "type": "sessionReference",
      "value": "s-a302e3c6-xxxx-xxxx-xxxx-a01a5846fae1"
    },
    {
      "type": "userReference",
      "value": "usr_1a2b3c4d5e"
    }
  ],
  "input": [
    {
      "type": "text",
      "content": "Order me a thick-crust, medium-sized pizza with extra cheese "
    }
  ],
  "metadata": {
    "userProfile": {
      "location": "Japan",
      "preferences": {
        "diet": "vegetarian"
      }
    }
  },
  "isAsync": false
}
```

[Learn More about the Execute API.](../../../apis/agentic-apps/execute.md)


### 2. How This Appears in Session Memory

Once set by the API, the session context and metadata are available in the following schema:


```json
{
  "type": "object",
  "properties": {
    "metadata": { "type": "object" },
    "sessionInfo": { "type": "object" }
  }
}
```

All fields from the API’s metadata object are stored directly in sessionMeta.metadata. For the above example, the sessionMetaMemory Store will look like:


```json
{
  "metadata": {
    "userProfile": {
      "location": "Japan",
      "preferences": {
        "diet": "vegetarian"
      }
    }
  },
  "sessionInfo": {
    "sessionReference": "s-a302e3c6-xxxx-xxxx-xxxx-a01a5846fae1",
    "userReference": "usr_1a2b3c4d5e"
   }
}
```



### 3. Referencing Metadata in Prompts

To reference metadata fields from the agent or orchestrator prompt, use the following template syntax:

```json
{{memory.sessionMeta.metadata.<field-name>}}
```

Example:

```json
Suggest popular pizza ingredients in {{memory.sessionMeta.metadata.userProfile.location}}.
```
This will resolve to:

```json
Suggest popular pizza ingredients in Japan.
```

You can also reference other user-specific data:

```json
User diet preference is {{memory.sessionMeta.metadata.userProfile.preferences.diet}}.
```


[Learn more about SessionMeta Memory Store](../memory-stores.md#session-meta-memory).
