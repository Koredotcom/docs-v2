


# How to Access Original PII Data


When PII masking is applied to user input, the data values are redacted across the Platform, including context variables, logs, and chat history. This ensures that the original input is not visible to any user, including platform users. However, in some cases, the original value may still be required, for example, to display in an AI Agent’s responses or to send to backend systems.

To support these scenarios, the platform securely stores the original input in a protected vault. The original value is accessed only for specific system operations, such as:



* Displaying the value to the end user for confirmation, if configured at the entity level.
* Sending the value to backend systems, if explicitly configured by the Platform user.

To access original PII values during runtime, you must configure specific nodes to retrieve and use this data. 


## Entity Node PII Setting

You can configure node-level PII settings to use the original entity value during a user conversation. In the Entity node, under Redaction of PII Data, select the option - ‘Use the original value of the PII data while presenting it to the user’. The AI Agent uses the original value in prompts and messages. This is useful when the agent needs to confirm PII data with the user.

For more information, see [Entity Node](../automation/use-cases/dialogs/node-types/working-with-the-entity-node.md).


## Service Node PII Setting

You can also send the original PII value to a backend system using the Service node. In the Service node, under Redaction of PII Data, select the option - ‘Use the original value of the PII data while presenting it to the user or in post-processing’. The agent uses the original value in messages and during post-processing.

For more information, see [Service Node](../automation/use-cases/dialogs/node-types/working-with-the-service-node.md#component-properties).
