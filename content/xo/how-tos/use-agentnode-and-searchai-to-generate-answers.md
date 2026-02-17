

# Use Agent Node and Search AI to Generate Answers

The Agent Node uses Search AI as a retrieval engine. When the user asks a question, the Agent Node triggers Search AI to search across crawled website pages and uploaded PDF documents. The model receives the retrieved snippets and generates an answer. The system stores the answer in session memory. When the user asks a follow-up question, the Agent Node uses both the previous answer and the new Search AI retrieval to generate a refined response. This design produces consistent, multi-turn AI answers grounded in your verified content.

Prerequisites:



* The [Agent Node](../automation/agent-node/working-with-agent-node.md) feature is [enabled](../generative-ai-tools/genai-features.md#enable-feature).
* Ensure you have selected a [custom tool calling prompt](../automation/agent-node/prompt-setup.md) for the Agent Node.
* Search AI is configured.


## Step 1: Configure Search AI

Search AI retrieves information from indexed documents, including websites and PDFs. 

For processing and indexing content, [Configure Web Crawl for Websites](..//searchai/content-sources/web-crawl.md) and [Upload Documents](../searchai/content-sources/directory.md).


## Step 2: Create a Dialog and configure the Agent Node



1. [Create a new dialog.](../automation/use-cases/dialogs/using-the-dialog-builder-tool.md#create-a-dialog-task)
2. Add an [Agent Node](../automation/agent-node/working-with-agent-node.md) to the dialog and select your model and tool calling prompt. Add a clear System Context, such as: “Use Search AI results as the primary source of truth. Generate accurate answers using the website and PDF content. Consider the previous answer when generating responses to follow-up questions.”
3. Enable the Search AI tool in the [Tools](../automation/agent-node/working-with-agent-node.md#tools) section and specify the correct response path. This helps the Platform to understand where to look for the actual response in the payload. For example, ```context.SearchAINode.{{SearchAInodename}}.response.answer```.
4. Test the flow in the playground to verify the Search AI Node is working correctly and generating accurate, context-aware responses. [Learn more](../automation/testing/playground.md).


