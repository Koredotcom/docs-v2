# Nodes Overview

Nodes are the building blocks of a workflow. Each node performs a specific action—processing data, making decisions, or integrating with external systems. By connecting nodes, you can design automated flows that handle complex tasks from start to finish.

The available node types are listed below, along with their purpose and how they integrate into workflows.

## Start Node

* **Start Node**: It is the entry point of every workflow. Place this node at the beginning of a flow to initiate execution.

## AI Nodes

These nodes leverage AI models to process and transform different types of content.

* **[Text to Text Node](./text-to-text-node.md)**: It processes text inputs to generate text outputs using AI models. Use for content generation, summarization, translation, or text transformations.

* **[Text to Image Node](./text-to-image-node.md)**: It generates images from text prompts using AI image generation models. Use to create visuals dynamically from text descriptions for creative or content-related use cases.

* **[Audio to Text Node](./audio-to-text-node.md)**: It converts audio inputs into text using speech recognition. Use for transcription, voice command processing, or analyzing spoken content.

* **[Image to Text Node](./image-to-text-node.md)**: It extracts text from images using optical character recognition (OCR). Use for document processing, data extraction from scanned images, or reading visual content.

## Integration and API Nodes

These nodes connect your workflow to external systems and services.

* **[Integration Node](./integration-node.md)**: It connects workflow to external applications or platforms using pre-built connectors without custom code.

* **[API Node](./api-node.md)**: It can call external APIs for data exchange or triggering external services. Use REST or SOAP API calls for real-time data retrieval or actions.

## Logic and Processing Nodes

These nodes handle decision-making, custom logic, and iterative processing within your workflow.

* **[Function Node](./function-node.md)**: It can run custom JavaScript or Python logic. Use for dynamic computations, data transformations, or implementing custom business logic.

* **[Condition Node](./condition-node.md)**: It directs flow based on logical rules (IF / ELSE IF / ELSE). Use to enable branching logic and dynamically route workflows based on variables, context, or node outputs.

* **[Loop Node](./loop-node.md)**: Repeats a set of steps for each item in a list. Use for batch processing, iterative API calls, or generating outputs for multiple items.

## Data and Knowledge Nodes

These nodes retrieve information from knowledge bases and document repositories.

* **[DocSearch Node](./docsearch-node.md)**: Retrieves information using a connected Search AI app (RAG-powered). Use to pull relevant documents or knowledge base content for context-aware responses.

## Workflow Control Nodes

These nodes manage workflow execution, including human intervention and completion.

* **[Human Node](./human-node.md)**: Pauses workflow execution for human input or approval. Use for approval workflows, quality assurance checks, or compliance review steps.

* **[End Node](./end-node.md)**: Marks the completion of a workflow. Place at the end of every flow to signal successful completion.

 <hr/> 
 
**Related Resources**
  
 * [Manage Nodes in Tool Flow](./../manage-flow-nodes.md)
 
 