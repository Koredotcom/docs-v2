# Configure Auto Summarization with Custom Dialog Tasks

The end-of-conversation summary in Agent AI is generated using the [Kore.ai XO GPT](../../generative-ai-tools/xo-gpt-module.md){:target="_blank"} module.

If clients prefer to use a different model (for reasons such as language or quality), they can host their model in [Agent Platform](https://docs.kore.ai/agent-platform/home/){:target="_blank"} or another server and provide their API endpoint. The custom summarization workflow uses the "Custom Dialog Task" option - when the conversation ends, Agent AI will trigger the configured dialog, which will fetch the conversation, generate the summary, and display or save it as needed. 

## Steps to configure auto summarization with custom dialog tasks

1. Set up a [service node](../../automation/use-cases/dialogs/node-types/working-with-the-service-node.md){:target="_blank"} to get the conversation transcript using the [ChatHistory API](../../apis/automation/conversation-history.md){:target="_blank"}; the API includes the conversation summary.
2. Send this transcript to the Summarization endpoint, and save the result in a Context Variable.
3. Create a string-based [entity node](../../automation/use-cases/dialogs/node-types/working-with-the-entity-node.md){:target="_blank"} to display the summary from the Context Variable.
4. Ensure the dialog is enabled for the Agent AI chat/voice channel and the app is published.
5. Go to **Agent AI** > **Widget Settings** > **Agent AI Settings** > **Agent AI Channel Specific Settings** > **Auto Summarization** > **Auto Summarization Model**, and select a **dialog task** under the “Custom Dialog Task” option.

**Dialog Task flow for Summarization activities**:

<img src="../custom-dialog-task-auto-summarization/flow-diagram-summarization.svg" alt="dialog-task-flow-for-summarization" title="dialog-task-flow-for-summarization" style="border: 1px solid gray; zoom:80%;">