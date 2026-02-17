# LLM Stage 

The LLM stage allows you to leverage the capabilities of an external LLM to refine, update, or enrich the chunks extracted from the ingested content. During this stage, the LLM can perform operations such as generating additional metadata, deriving contextual tags, or updating specific chunk fields based on the content. For example, given a chunk of policy text, the LLM could automatically assign attributes like topic or keywords. These enhancements improve retrieval accuracy, ranking, and the overall quality of context-aware answers.

## Prerequisites

* [Set up the required LLM](../../generative-ai-tools/models-library.md).
* [Create a custom prompt](../../generative-ai-tools/prompts-library.md) for the feature ‘Enrich Chunks with LLM’.
* In the[ Gen AI features page](../../generative-ai-tools/genai-features-searchai.md), enable the feature, ‘Enrich Chunks with LLM’. 


## LLM Stage Configuration

Use the following properties to configure this stage. 

* **Stage Type:** Set this field to Enrich Chunks with LLM..
* **Stage Name**: Set a unique name for the stage.
* **Condition**: Define one or more conditions for selecting the chunks to be processed using this stage. Multiple conditions can be combined using the AND operator to precisely target the required chunks. For example, to process only chunks from uploaded files, use the `sys_source_name` field in the condition.
* **Outcome**: Use this section to provide the details of the processing to be done on the selected chunks. 
    * **LLM**: Select the external LLM to be used for processing the chunks.
    * **Prompt**: Choose or define the custom prompt that instructs the LLM on how to process the chunk content.
    * **Target Field**: Specify the chunk field where the enriched or updated output from the LLM is to be stored. The [value of the field set in Response.Path](../../generative-ai-tools/prompts-library.md#how-to-add-a-custom-prompt) is the response of the LLM Stage and is copied to the target field. 