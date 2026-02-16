# Image to Text Node – Streamline Document Processing with OCR Automation

The **Image to Text** node is a versatile multimodal component that enables you to extract information from images and generate text-based outputs within your automation flows. By processing uploaded images alongside user-defined prompts, the node can describe visuals, answer image-related questions, or extract embedded text. It leverages external LLM models such as OpenAI and Anthropic for advanced image interpretation and text generation, making it ideal for automating workflows that involve visual content analysis.

## Key Capabilities

* **Image Understanding with Prompts**: Generate detailed descriptions, perform accurate OCR, or answer image-specific questions using natural language prompts.

* **OCR and Text Extraction**: Automatically extract embedded text from images, including scanned documents, screenshots, and photos.

* **Multi-Model Support**: Leverage external LLM models like OpenAI and Anthropic for flexible, high-quality image interpretation.


## Common Use Cases

* **Document Digitization**: Extract text from scanned documents, receipts, or invoices for archiving or processing. 

* **Image-Based Content Moderation**: Detect and review text content embedded in images to ensure compliance with relevant regulations. 

* **Multilingual OCR**: Convert printed or handwritten text from images into machine-readable text across multiple languages. 

* **Knowledge Extraction**: Use natural language prompts to pull relevant information from diagrams, posters, or infographics and answer questions based on their content.

## Example Use Case

A sample use case involves an insurance company evaluating vehicle damage to streamline the claim assessment process. The **Image to Text** node analyzes the uploaded image of the damaged vehicle using a natural language prompt like "*Analyze the uploaded image of the vehicle and identify which parts show visible damage. Choose the affected components from the following list: {{context.parts_list}}*.." It identifies impacted parts and estimates repair costs, helping automate claim verification and compensation decisions. 

## How it Works

The **Image to Text** node integrates smoothly into your tool flows by accepting image file URLs and generating descriptive or structured text output for downstream nodes. You can configure the node by selecting a supported model and providing a valid image URL in PNG, JPEG, or JPG format. Use the System Prompt to define the model’s role (e.g., insurance evaluator), and the Prompt to specify the task, such as answering a question or extracting details. Prompts support dynamic context variables, enabling flexible, data-driven automation scenarios.

<img src="../images/how-image-to-text-works.png" alt="how image to text works" title="how image to text works" style="border: 1px solid gray; zoom:75%;"/>

In this document, you will learn how to add the node to your flows, configure it with supported models, define system and user prompts, handle image inputs via URL, and pass the generated responses to downstream nodes for further processing.

## Add and Configure an Image to Text Node

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Before proceeding, you must add an external LLM to your account.</p>
</div>

### Step 1: Open Flow Builder

* Log into the the Platform and select **Tools** under modules.
* Select your tool and select **Go to Flow**.

### Step 2: Add the Node

* Click the "**+**" icon for **Image to Text** under **AI** in the **Assets** panel. Alternatively, drag the node from the panel onto the canvas. You can also click **AI** in the pop-up menu and click **Image to text**.
  <img src="../images/access-image-to-text-node.png" alt="access node" title="access node" style="border: 1px solid gray; zoom:75%;"/>

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.
  <img src="../images/properties-panel-open.png" alt="properties panel" title="properties panel" style="border: 1px solid gray; zoom:75%;"/>

* Enter or select the following **General Settings**:

     * <b>Node Name</b>: Enter an appropriate name for the node. For example, “<i>InsuranceEvaluation</i>.”
     * Select a model from the list of configured models.

       <div class="admonition note">
       <p class="admonition-title">Note</p>
       <p>Only the <b>OpenAI (gpt-4o and gpt-4o-mini)</b> and <b>Anthropic (Claude Sonnet Vision)</b> models are supported.</p>
       </div>

    * Provide the <code>File URL</code> of the public repository where your image file exists or is returned by the Upload File API at the tool endpoint.

      <div class="admonition note">
      <p class="admonition-title">Key Considerations</p>
      <p><ul><li>The user can provide only one file URL at a time for processing.</li>
      <li>The file source url must be valid for the node to function properly.</li>
      <li>Only PNG, JPEG, and JPG file formats are supported.</li>
      <li>Except for image input handling, the OCR node functions like the existing AI node.</li>
      <li>Sending images and related settings are handled by the <a href="../../../../../apis/apis-list/upload-file-api/" target="_blank">File Upload API</a>.</li>
      <li>Image input preprocessing is supported in the following formats:</li>
     <ul><li>Binary, base64-encoded for Anthropic models.</li>
     <li>Both binary, base64-encoded, and image URLs for OpenAI models.</li></ul></p></div>

* <b>System Prompt</b>: System prompts guide the model’s behavior and response style. Enter a system prompt to define its role for your use case. For example: "<i>You are a vehicle insurance assistant that analyzes uploaded vehicle images to assess damage and estimate repair costs in USD</i>."
* <b>Prompt</b>: User prompts define specific questions or requests for the model. Provide clear instructions for the model to follow, using context variables for dynamic inputs in the syntax: <code>{{context.variable_name}}</code>. <b>Example:</b> "<i>Check the image provided for the damaged parts in the car and select what parts are affected from the list below - <code>{{context.parts_list}}</code></i>."</li>
         <img src="../images/configuration-set.png" alt="configurations tab" title="configurations tab" style="border: 1px solid gray; zoom:75%;"/>

* **Response JSON schema**:  Define a JSON schema for structured responses. This step is optional and depends on the selected model.   
      
    You can define a JSON schema to structure the model's response if the chosen model supports the response format. By default, if no schema is provided, the model will respond with plain text.
       
    Supported JSON schema types include: String, Boolean, Number, Integer, Object, Array, Enum, and anyOf. Ensure the schema follows the standard outlined here: [Defining JSON schema](../perform-other-actions-on-the-flow-builder/defining-json.md){:target="_blank"}. 
    
    If the schema is invalid or mismatched, errors will be logged, and you must resolve them before proceeding.  
    
    For more information about how the model parses the response and separates keys from the content body, see: [Structured Response Parsing and Context Sharing in Workflows](../perform-other-actions-on-the-flow-builder/model_response_parsing.md){:target="_blank"}.

* Click the <b>Connections</b> icon and select the <b>Go to Node</b> for success and failure conditions.
   
     <img src="../images/connections-configuration.png" alt="connections tab" title="connections tab" style="border: 1px solid gray; zoom:75%;"/>

    * <b>On Success</b> > <b>Go to Node</b>: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.
    * <b>On Failure</b> > <b>Go to Node</b>: If the execution of the current node fails, go to the End node to display any custom error message from the <b>Image to Text</b> node.
    
* Finally, test the flow and fix any issues found. Click the <b>Run Flow</b> button at the top-right corner of the flow builder and follow the onscreen instructions.
<img src="../images/click-run.png" alt="click run" title="click run" style="border: 1px solid gray; zoom:75%;"/>

!!! Failure "Standard Error"

    When the Model is not selected, the prompt details are not provided, or both, the following error message is displayed: “Proper data needs to be provided in the LLM node”.
