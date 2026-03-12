# About Triggers

Triggers are an advanced automation feature in AI for Process that allows workflows to start automatically when specific events occur in connected applications. This enables true event-driven automation—workflows can run instantly without any manual action.

Triggers are configured in the Start node. You can use triggers alone or together with the Scheduler.

## How Triggers Work

* A trigger listens for real-time events from an integrated third-party app.
* When the event occurs (for example, a record is created, a status changes, or a threshold is reached), the workflow starts immediately.
* Event data, including metadata and attachments, is passed into the workflow for downstream processing.

## Prerequisites for Adding a Trigger

To use triggers in a workflow:

* Add the integration app to your workspace.
* Set up the required connection and authentication profile.
* Open your workflow in Flow Builder and access the **Start node**, where all triggers are configured.

For detailed configuration steps, see [Start Node – Automate Workflow Initiation](../workflow-builder/types-of-nodes/start-node.md).

<img src="../images/triggers.png" alt="Triggers" title="Add a trigger"/>

## Trigger Payload and Attachments

* Triggers can pass contextual data, metadata, and event-specific IDs.
* Attachments are provided as temporary URLs (valid for 24 hours). Only one attachment is supported at a time.
* Downstream nodes can reference trigger values as workflow variables.

## Best Practices

* Use clearly defined events to avoid unnecessary workflow runs.
* Regularly validate integration connections to keep triggers active. 
* Confirm payload fields before referencing them in conditions or expressions.
* Monitor trigger activity to quickly identify inactive or failing triggers and take corrective actions.

## Related Topics

* [Start Node – Automate Workflow Initiation](../workflow-builder/types-of-nodes/start-node.md)
* [Managing Nodes in a Workflow](../workflow-builder/manage-flow-nodes.md)


 
# About Workflow Monitor

 Workflow Monitor allows you to track and analyze your workflow's performance across multiple runs. It provides a comprehensive, time-based view of workflow activities, helping you optimize your AI operations.

## Key Capabilities

* **Performance Tracking**: Monitor your workflows across multiple runs, gaining valuable insights into response times, execution patterns, and overall efficiency.
* **Dual-View Analytics**:
    *  **All Runs**: Comprehensive data on all workflow instances, offering a holistic view of endpoint interactions.
    *  **Model Runs**: Focused analytics on AI node executions, providing deeper insights into language model performance.
*  **Detailed Metrics**: Access critical performance indicators, including total runs, average response times (P90 and P99), and failure rates, allowing for precise performance tuning.
* **Triggers overview**: View and monitor event-based and schedule-based triggers for each workflow.
* **Source information**: Identify what initiated each workflow run, such as a service or time-based trigger.

## Best Practices

* Regularly monitor the Workflow Monitor dashboard to track performance trends.
* Use time-based searches to analyze specific periods of interest.
* Combine multiple filters to further analyze particular scenarios.
* Review detailed run information to understand the flow of data through your workflow and identify any potential issues.

By effectively leveraging Workflow Monitor, you can ensure the optimal performance of your workflows and make data-driven decisions to improve your operations.

# Accessing Workflow Monitor

Steps to access the workflow monitor page:

1. Log in to your AI for Process account.
   
2. On the **Workflows** page, click the desired workflow.  

    Ensure that the status of the selected workflow is deployed. Workflow monitoring is only available for workflow deployed in production. Workflows that are in debugging or design phases aren't tracked here. 

3. In the left navigation pane, click **Workflow runs**. The Workflow monitor page is displayed.  
<img src="../images/agent_monitor_new.png" alt="Agent monitor dashboard" title="Agent monitor dashboard"/>

4. Click one of the following tabs to see the data for the deployed workflows:
    * **All runs**
    * **Model runs**

    For more information, see [Understanding Workflow Monitor](./understanding-the-workflow-monitor-interface.md).

5. Click each row for detailed information on each workflow run or model run. A detailed view panel opens on the right.  

    For more information, see [Viewing detailed run information](./understanding-the-workflow-monitor-interface.md#viewing-detailed-run-information).

6. (Optional) To filter or search the list of runs or calls on the Workflow monitor page, see [Searching and filtering](./understanding-the-workflow-monitor-interface.md#searching-and-filtering-information).

# Add Input/Output Scanners

You can add input or output scanners to evaluate prompts or responses in your application. Input scanners assess inputs or prompts sent to the LLM node, while output scanners evaluate the responses received from the LLM.

In the following steps, you will learn how to add an input scanner. The steps to add an output scanner are similar to those for an input scanner. You need to add input and output scanners separately based on your requirements.

!!! note

    Scanners must be deployed before you add or use them. [Learn more](./manage-guardrails.md).

Steps to add a Scanner:

1. Log in to your account.

2. In the **Workflows** section, click the workflow to which you want to add the scanner. The Workflow page is displayed. 

2. Click **Guardrails** in the left navigation pane. The Guardrails page is displayed.  
<img src="./../images/navigate-to-guardrails.png" alt="Navigate to Guardrails" title="Navigate to Guardrails"/>

3. In the Input Scanners section, click **Add Scanner**, select the required scanners from the pop-up list, and then click **Done**. 
<img src="./../images/add_a_scanner.png" alt="Add Input Scanner" title="Add Input Scanner"/>

    The selected scanners are added to the list.  
    <img src="./../images/added-guardrails.png" alt="Scanner Added" title="Scanner Added"/>

4. Click an added scanner to configure its settings, which vary depending on the scanner type.
For example, **Toxicity** has "Threshold" and "End the flow if the risk score is above" settings, while **Regex** has "Enter patterns to ban", "End the flow if the risk score is above", and "Match type" settings.  
<img src="./../images/toxicity-scanner-settings.png" alt="Configure Scanner's Settings" title="Configure Scanner's Settings"/>

5. (Optional) To add more scanners, click the plus or **Add Scanner** icon. To remove an unused scanner, click the minus or **Remove Scanner** icon.  
<img src="./../images/add-remove-scanners.png" alt="Remove Scanner" title="Remove Scanner"/>


# Agentic Node 

Agentic Node enables seamless integration of the Agentic App into the workflow. This allows you to trigger agent-driven actions and automate decision-making through the capabilities of an Agentic App. It helps combine the structured control of workflow design with the autonomous decision-making power of agentic apps.

By leveraging existing Agentic Apps, it:

* Encourages reusability of existing Agentic Apps.
* Reduces redundant logic across workflows.
* Improves maintainability and scalability of automation workflows.
* Enhances collaboration among different AI agents.

**Key Capabilities**

* Integrate Agentic Apps Natively: Connect workflows to any Agentic App within the same workspace for unified automation and intelligence.
* Contextual Data Exchange: Pass workflow inputs to the Agentic App and retrieve responses or generated outputs dynamically.


## Common Use Cases

Agentic App Node is most useful at a point in a workflow that involves decisions based on unstructured data or context. Some example use cases are listed below.

* Incident Triage: In an incident workflow, the Agentic App Node can evaluate a newly created critical incident by receiving details such as the summary, category, impact, affected services, and similar past incidents. The Agentic App analyzes this input, identifies the probable root cause, and returns a structured response with recommended remediation steps.
* Invoice Processing: In invoice automation workflows, the Agentic App Node can review invoice details, such as vendor, description, line items, total amount, and cost center, to automatically determine the appropriate expense category or approval path. It can also detect duplicates or identify stale invoices, returning a structured response that the workflow can use to trigger approvals, apply exceptions, or route the invoice for review


## How It Works

The Agentic App node enables seamless integration with the agentic apps to perform complex tasks within a workflow. In a workflow, the Agentic App Node acts as a bridge between the workflow and the agentic app, analyzing the task at hand, determining the optimal tools, and autonomously executing the next steps in the process. 

When the workflow reaches the Agentic App Node, the input is passed to the Agentic app, which interprets it, decomposes the task if needed, performs the necessary processing, and returns the output for the following nodes in the workflow to use. This enables the workflow to handle complex tasks with greater intelligence and flexibility.

Note that the Agentic App Node performs only one turn of communication per execution. For multi-step interactions, include additional Agentic App Nodes at the required points in the workflow.


![Agentic App Node](images/agentic-app/overview.png "Agentic App Node")



## Prerequisites

* The Agentic App must be deployed.
* The Agentic App must belong to the same workspace as the workflow. 
* The user account used to configure the Agentic app in AI for Process must have access to the Agentic app. 


## Add and Configure Agentic Node

Setting up an API node in a workflow involves adding it to the appropriate location in the workflow and configuring its properties.

Under Settings, provide the following details:

* Node Name: Provide a unique identifier for the node. 
* Click Add Agentic App, then select the Agentic app with which it should be linked.  All existing apps in the same workspace are automatically listed. 
* Select the app and its deployment environment. 
* Enter the inputs to be sent to the agentic app as a query. Learn more. 

Under Connections, add the connections to the subsequent nodes after this node executes.

* On Success > Go to Node: After the current node is successfully executed, go to the selected node in the flow to execute next. For example, you can further process the response from the Agentic App using a Function node. 
* On Failure > Go to Node: Select the next node to which execution should be transferred in case the current node fails.


## Passing input to the Agentic App

You can pass input as text to the Agentic App. The text can include custom data or dynamic variables from the context object. Developers can also use both system variables and user-defined variables from the context object as input to the Agentic App. 

For example, you can include a variable such as `{{context.inputKey}}` in the text prompt to pass its value directly to the Agentic App.


## Handling Response from the Agentic App

The output from the Agentic App is stored in the workflow’s context object, under the steps field, which tracks the execution state of each node by its unique name or ID. 

For example, if the Agentic App Node is named IncidentTriageApp, its response can be accessed at:

```
{{context.steps.IncidentTriageApp.output}}.
```

**Note**

* The response from the agentic app is async and may take time to appear in the context object, depending on how long the agent takes to complete the task. The workflow receives the output only after the Agentic App has fully finished execution.

# AI Nodes for Advanced LLM Capabilities

AI nodes are multimodal components that utilize LLMs for specialized tasks, transforming workflows by supporting diverse file types. These nodes can process and generate various media formats, such as text, images, and audio, within a single workflow. Their adaptability enables developers to build dynamic systems that seamlessly handle and manipulate multiple data types.

Each AI node processes inputs and generates responses, which can be integrated into broader workflows within the workflow. AI nodes are categorized into the following types:

* **Text to Text Nodes**

     * Process textual input and generate textual output based on the given instructions.
     * Used for tasks like summarization, translation, content generation, and chatbot interactions.
     * Example: AI-powered documentation assistants, automated report generation. [Learn more](../types-of-nodes/text-to-text-node.md).

* **Text to Image Nodes**

    * Convert textual descriptions into visual representations/relevant images based on the instructions and keywords you provide.
    * Used for generating AI art, concept sketches, and synthetic images.
    * Example: AI-driven design workflows, creative content generation. [Learn more](../types-of-nodes/text-to-image-node.md).

* **Audio to Text Nodes** 

    * Convert spoken words (in multiple languages) in an audio file into written text using text transcription. 
    * Used in transcription, voice assistants, and speech analysis.
    * Example: Automated meeting transcriptions, AI-driven voice command processing. [Learn more](../types-of-nodes/audio-to-text-node.md).

* **Image to Text Nodes**

    * Extract meaningful text from images.
    * Used for OCR (Optical Character Recognition), image captioning, and content analysis.
    * Example: AI-powered document scanners, and accessibility workflows. [Learn more](../types-of-nodes/image-to-text-node.md).



# API Node - Automate API Calls

The API Node enables you to seamlessly connect your workflow to external systems and fetch real-time data by making REST or SOAP API calls. Whether you're enriching customer records, retrieving transaction status, or pushing updates, the API node helps you integrate third-party services directly into your workflow logic. With support for both synchronous and asynchronous operations, the node offers flexibility for a wide range of automation needs.

## Key Capabilities

* **Connect to External Systems**: Use REST or SOAP protocols to integrate with services like CRMs, ERPs, payment gateways, or third-party platforms.
* **Synchronous & Asynchronous Modes**: Wait for a response before proceeding, or run the API call in the background and continue the workflow.
* **Flexible Authorization Options**: Use pre-authorized tokens or request user-level authorization during execution.
* **Support for Headers & Payloads**: Add custom headers and body formats (JSON, XML, Form URL Encoded, or raw custom data).
* **Request & Response Testing**: Preview API responses before finalizing the setup.
* **Dynamic Timeouts**: Configure how long the node should wait for a response.

## Common Use Cases

* **Data Enrichment**: Fetch user, order, or product details from an external system.
* **Document Retrieval**: Pull attachments or metadata from a third-party storage service.
* **Webhook Integration**: Trigger a downstream system based on workflow decisions.
* **Approval Checks**: Perform identity verification, fraud checks, or compliance validation via external APIs.
* **Notifications or Updates**: Send alerts or update external dashboards from within the workflow.

## How It Works

The API Node enables seamless integration with external services by sending and processing API requests. It allows you to configure the request method, endpoint, authentication, headers, and payload, then routes the workflow based on the response (success or failure). You can test and validate the API call directly within the flow to ensure proper functionality.

 <img src="../images/api_node_how_it_works.jpg" alt="API node" title="API node"/>


## Add and Configure an API Node

Setting up an API node in a workflow involves adding the node at the appropriate location in the flow and configuring various node properties.

Steps to add and configure the node:

### Step 1: Open Workflow Builder

* Log in to your account.

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the API Node

* In the flow builder, click the “**+**” icon on any existing node on the canvas and select **API** from the pop-up menu. 
* Alternatively, drag the **API** node from the Assets panel onto the canvas.

### Step 3: Configure the Node

Click the added node to open its properties dialog box. The General Settings for the node are displayed.  
<img src="./../images/api-node-general-settings.png" alt="Go to Flow Canvas" title="Go to Flow Canvas"/>

**General Settings**

<table>
  <tr>
   <td><strong>Field</strong></td>
   <td><strong>Description</strong></td>
  </tr>
  <tr>
   <td>Node Name

   </td>
   <td>Enter an appropriate name for the node.

   </td>
  </tr>
  <tr>
   <td>Type

   </td>
   <td>Select the API type from the drop-down: <strong>REST</strong> or <strong>SOAP</strong>.

   </td>
  </tr>
  <tr>
   <td>Integration Type

   </td>
  <td>
  Select the integration type: <strong>Synchronous</strong> or <strong>Asynchronous</strong>.

  <strong>Synchronous</strong>: Waits for a response before proceeding.
  <ul>
    <li>
      <strong>Synchronous Timeout</strong>: Range: <strong>5 to 180 seconds</strong> (default: <strong>60 seconds</strong>). 
      Triggers a timeout if the response is not received within the set time.
    </li>
  </ul>

  <strong>Asynchronous</strong>: Continues processing without waiting for response.
  <ul>
    <li>
      <strong>Asynchronous Timeout:</strong> Range: <strong>30 to 300 seconds</strong> (default: <strong>60 seconds</strong>).
    </li>
    <li>
      <strong>No timeout</strong>: Waits indefinitely for the response without triggering a timeout error. 
      Useful for automating custom workflows like approvals and checks.
    </li>
  </ul>

  <strong>Note</strong>: Ensure the "<strong>No timeout</strong>" setting is selected for both the API node and the workflow to avoid timeout errors.
</td>
  </tr>
  <tr>
   <td>Request Definition

   </td>
  <td>
  Define the service request details to make the call and fetch the data. Click <strong>Define Request</strong> and enter or select the following details in the Edit Request dialog box:
  <ul>
    <li>Select the request type from the list.</li>
    <li>Paste your API Endpoint URL or cURL in the text field.</li>
    <li>
      In the <strong>Auth</strong> section, select the required <strong>Auth Profile</strong> from the list of configured profiles. Next, provide the authorization details.
      <ul>
        <li>
          <strong>Pre-authorize the Integration</strong>: Select this option if the authorization has already been completed in advance. This is suitable for API calls that do not require the end user to authenticate or provide credentials.
          <strong>Example</strong>: Connecting to a service using a system-level token or client credentials that have already been authorized. In this case, the same credentials are used for all users.
        </li>
        <li>
          <strong>Allow users to authorize the integration</strong>: Choose this option if each end user needs to dynamically authorize the integration at runtime. This is useful when user-specific credentials or tokens are required for access.
          <strong>Example</strong>: Connecting to a third-party service like Google Drive, where each user must log in and grant access to their account. This ensures personalized access and respects individual user permissions.
        </li>
      </ul>
    </li>
    <li>In the <strong>Headers</strong> tab, specify the details of the Key and Value pair. For example, Key: Content-Type, Value: application/json</li>
    <li>
      The <strong>Body</strong> tab is displayed for all request types except GET. Select the body content type from the drop-down list:
      <ul>
        <li><strong>application/x-www-form-urlencoded</strong>: Allows file uploads through HTTP POST requests. Add key/value pairs encoded by the platform.</li>
        <li><strong>application/json</strong>: Transmits data between servers and web applications using JSON format without processing.</li>
        <li><strong>application/xml</strong>: Sends XML payload for SOAP services using POST methods, with the option to include node values.</li>
        <li><strong>Custom</strong>: Allows sending request payload in non-standard formats, such as for handling blogs or custom variables.</li>
      </ul>
    </li>
    <li>Click the <strong>Test</strong> button at the top-right corner of the dialog. The API response is displayed on the <strong>Response</strong> tab.</li>
    <li>Click <strong>Save</strong> at the top-right corner of the dialog.</li>
  </ul>
</td>

  </tr>
</table>

### Step 4: Add Connections

Click the **Connections** icon in the left navigation and select **Go to Node** for success and failure conditions.

<img src="./../images/api-node-connections.png" alt="API node Connections Properties" title="API node Connections Properties"/>

* **On Success** > **Go to Node**: After the current node is successfully executed, go to a selected node in the flow to execute next. For example, you can process the data from this node into a Function node and then use it further. In this case, select the Function node. 
* **On Failure** > **Go to Node**: If the execution of the current node fails, go to an appropriate node having a custom error message configured.

### Step 5: Test the Flow

Finally, test the flow and fix any issues found. Click the **Run Flow** button at the top-right corner of the flow builder and follow the onscreen instructions.


!!! note
    
    Use the following syntax to access an API node using the context variable: 
    ~~~
    {{context.steps.Start.APINodeName}}
    ~~~




# Audio To Text Node - Make Voice Transcriptions Effortless

The **Audio to Text** node is a powerful AI component that enables you to convert speech into written text within your automation flows. By leveraging Automatic Speech Recognition (ASR), this node processes audio inputs and generates accurate text outputs across multiple supported languages. Configuration options enable you to define input sources, specify output formats, and seamlessly integrate transcription into broader workflows, allowing for transcription as part of larger, multi-step processes such as call analysis, feedback collection, or content indexing.

## Key Capabilities

* **Automatic Speech Recognition (ASR)**: Converts spoken audio into accurate written text using OpenAI Whisper-1 for transcription. 

* **Multilingual Transcription and Translation Support**: Supports transcription in multiple languages and translation into English. 

* **Audio Input Handling**: Accepts audio files or audio URLs as input, making it suitable for both real-time and recorded speech processing.

* **Large File Handling with Size Limits**: Supports audio files up to 25 MB. Larger files can be split at logical points to avoid mid-sentence breaks and ensure smooth, timely, and accurate transcriptions. 

* **Text Output Generation**: Generates clean, structured text in multiple formats based on prompt instructions, ready for downstream use such as summarization, translation, or storage. 

## Common Use Cases

* **Meeting and Lecture Transcription**: Automatically convert meetings, interviews, or classroom sessions into searchable text. 

* **Customer Support Automation**: Transcribe voice interactions to feed into chatbots or help desk workflows. 

* **Subtitle and Caption Generation**: Generate accurate subtitles for video content across platforms. 

* **Voice Command Processing**: Convert spoken commands into text for use in voice-enabled applications. 

* **Audio-Based Translation**: Transcribe audio for translation into other languages as part of a multilingual workflow.


## Example Use Case

The **Audio to Text** node processes uploaded customer service call recordings and generates transcribed (and optionally translated) text based on configured parameters and output instructions. These transcriptions can be used to assess conversation quality, evaluate agent performance, and support audits or training efforts. By removing the need for manual transcription or external APIs, the node offers a faster, more efficient, and fully integrated solution for audio processing within your workflow.

## How It Works

The Audio to Text Node integrates seamlessly into your workflows, accepting audio inputs, whether as files or URLs from previous nodes and passing the transcribed text to subsequent nodes. You can configure parameters such as the processing model, translation preferences, timestamp inclusion, and prompt instructions to tailor the transcription process to your specific needs. The node supports both static and dynamic inputs via context variables, making it highly adaptable for a wide range of voice-driven automation scenarios.

<img src="../images/how-audio-to-text-works.png" alt="how audio to text works" title="how audio to text works"/>

In this document, you will learn how to add the node to your flow, configure it with audio inputs and transcription settings, manage outputs such as text or translated content, and test the results within your workflow.


## Selection of the Audio File

You can add audio input in one of the following ways:

1. Manually select and upload an audio file in the allowed format.
2. Configure the **Input variable** by selecting <b><i>Text</i></b> for **Type** in the following window when adding input variables for the node. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-input-variables). 

   You must provide the audio file URL when running the flow, as mentioned [here](../../../workflows/workflow-builder/types-of-nodes/audio-to-text-node.md#step-3-run-the-flow).

   <img src="../images/select-text-input-type.png" alt="select text type input" title="select text type input"/>

   <div class="admonition note">
   <p class="admonition-title">Note</p>
   <p>Uploading audio files as input variables is <b>not supported</b> only URLs are supported.</p>
   </div>

### Supported Audio Formats

The following audio file formats are supported by the node:

* M4a
* Mp3
* Webm
* Mp4
* Mpga
* Wav
* Mpeg

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Using other formats will result in a system error.</p>
</div>

### Audio File Size Limits

* Maximum supported file size: **25 MB**.
* For larger files, split them into **25 MB or smaller** segments and upload them to prevent input processing (transcription) and output generation delays.
* Maintain context and avoid mid-sentence breaks when splitting files.

### Processing Model

AI for Process uses **OpenAI Whisper-1** for transcription.

**Use Cases**

This node is commonly used for:

* Transcribing meetings, interviews, or lectures.
* Automating customer service chatbots.
* Generating subtitles for videos.
* Voice command processing for applications.
* Audio translation.

### Translation

* Transcribes and translates speech in non-English languages see [Open AI Whisper-supported language](https://platform.openai.com/docs/guides/speech-to-text#supported-languages) into English when enabled.
* Inverse translation (English to other languages) isn't currently supported.


### Important Considerations

* Audio uploads and settings are handled by the [File Upload API]().

* OpenAI Whisper automatically removes offensive and banned words during transcription. 
* Performance tracking is available under **Settings** > **Model Analytics Dashboard** > **External Models** tab. [Learn more](../../../settings/monitoring/analytics/model-analytics-dashboard.md). 

Metrics include:

* **Minutes transcribed/Minutes of Audio** (total audio processed by the node) since the Whisper models are charged based on the minutes of the audio consumed.
* **Input and output tokens** since the Whisper models usually support a small number of tokens, and tracking the counts is necessary. [Learn more](../../../settings/monitoring/analytics/model-analytics-dashboard.md#tokens).
* Each model execution is logged on the **Model Traces** page, displaying summarized data for:
    * **Input**, **Output**, and **Response Time**
    * **Translation,** and **Timestamp**.  [Learn more](../../../settings/monitoring/analytics/model-traces.md).

## Add and Configure an Audio to Text Node

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Before proceeding, you must add an external LLM to your account.</p>
</div>


### Step 1: Open Flow Builder

* Log in → In AI for Process Modules top menu and click **Workflows**.

    <img src="../images/access-workflows.png" alt="access workflows" title="access workflows"/>

* Select your workflow and click **Go to Flow**.

### Step 2: Add the Node

* Click the "**+**" icon for **Audio to Text** under **AI** in the **Assets** panel. Alternatively, drag the node from the panel onto the canvas. You can also click **AI** in the pop-up menu and click **Audio to text**.
    <img src="../images/select-audio-to-text.png" alt="add node" title="add node"/>

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.

    <img src="../images/properties-dialog-audio-to-text.png" alt="properties dialog" title="properties dialog"/>

* Enter or select the following **General Settings**:
    * **Node Name**: Enter an appropriate name for the node. For example, “*CustomerSupportConversation*.”
    * Provide the input variable that is set for the node for the **Audio File** field. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md).
    * Select a model from the list of configured models.
    * (Optional) Turn on the toggle for the following to enable the respective feature:
         * **Translation**: Translate other languages supported by the model to English.
         * **Timestamps**: The date and time at which each dialog was spoken.
    * Provide clear instructions you want the model to follow when processing the node in the **Prompt** field, such as specific questions or requests  
    
      You can use a hardcoded instruction like "<i>Use direct speech and highlight words related to problems and challenges in the voice/audio file</i>," when a static audio file URL input is provided in the Start node. 
    
      Alternatively, you can add dynamic prompt instructions referencing different audio file URLs from the Start node using the syntax: `{{context.steps.Start.variable_name}}`, where `variable_name` stores the audio file URL. 
      
      For example, if `ConversationFile` stores the audio file URL (passed dynamically during runtime), you can reference it in the prompt using the syntax `{{context.steps.Start.ConversationFile}}`.

         <img src="../images/dynamic-prompt-example.png" alt="dynamic prompt example" title="dynamic prompt example"/>
    
      You may include simple instructions regarding the style of the transcription, correct words or proper nouns, in case the model couldn't figure out what the spoken word was, fix punctuations, add context, and more. 
      
      For example, `Use a clean verbatim transcription style by omitting filler words such as "um," "uh," or "you know." Correct any misheard or unclear words, especially product names, company names, and technical terms. Ensure proper punctuation and sentence casing to make the transcript easy to read. If a word is not clear, mark it as "inaudible" with a timestamp. Add short speaker labels (Customer: and Agent:) and make light contextual corrections for grammar and clarity without altering the original meaning.`

    <Note>Whisper models process up to <b>224 tokens</b> in the input prompt and ignore any input exceeding this limit. </Note>
                
    <Note>When the Model isn't selected, the prompt details aren't provided, or both, the error message `Proper data needs to be provided in the LLM node` is displayed.</Note>

    * **Response JSON schema**:  Define a JSON schema for structured responses. This step is optional and depends on the selected model.   
    You can define a JSON schema to structure the model's response if the chosen model supports the response format. By default, if no schema is provided, the model will respond with plain text.
    Supported JSON schema types include: `String`, `Boolean`, `Number`, `Integer`, `Object`, `Array`, `Enum`, and `anyOf`. Ensure the schema follows the standard outlined here: [Defining JSON schema](../perform-other-actions-on-the-flow-builder/defining-json.md).
    If the schema is invalid or mismatched, errors will be logged, and you must resolve them before proceeding.  
    For more information about how the model parses the response and separates keys from the content body, see: [Structured Response Parsing and Context Sharing in Workflows](../perform-other-actions-on-the-flow-builder/model_response_parsing.md).


* Click the **Connections** icon and select the **Go to Node** for success and failure conditions. 
   <img src="../images/connections-audio-to-text.png" alt="click connections" title="click connections"/>

     * **On Success** > **Go to Node**: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.
     * **On Failure** > **Go to Node**: If the execution of the current node fails, go to the End node to display any custom error message from the **Audio to Text** node.

* Finally, <a href="#step-3-run-the-flow">run the flow</a> and fix any issues found.

## Test the Flow for the Node

### Step 1: (Optional) Add Input Variable(s)

* Click the **Input** tab of the **Start** node, and click **Add Input Variable** to configure the input for the flow’s test run. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-input-variables).

    <img src="../images/add-input-variable-audio-to-text.png" alt="add input variable" title="add input variable"/>

* Select <b><i>Text</i></b> for the <b>Type</b> field in the <b>Enter input variable</b> window to define a text input variable.

* Click **Save**.
    
    <img src="../images/select-text-type-input.png" alt="select text and save" title="select text and save"/>

Add all the required input variables to run the flow in the **Input** section of the **Start** node.

### Step 2: Add Output Variable(s)

* Click the **Output** tab for the **Start** node.

* Click **Add Output Variable**.
    
    <img src="../images/click-add-output-variable.png" alt="click add output variable" title="click add output variable"/>

* Enter the value for <b>Name (key)</b> and select <b><i>String</i></b> for <b>Type</b> to generate the transcribed text output.

* Click <b>Save</b>. <a href="../text-to-text-node/#access-the-ai-nodes-output" >Learn more</a> about accessing the node’s output.

    <img src="../images/save-output-variable.png" alt="save output variable" title="save output variable"/>

### Step 3: Run the Flow

To run and test the flow, follow the steps below:

* Click the **Run Flow** button at the top-right corner of the flow builder.

    <img src="../images/click-run-button.png" alt="click run button" title="click run button"/>

* (Optional) Add the value for **Input Variable** if you have configured it to test the flow. Otherwise, go directly to the next step.
    
    <img src="../images/gen-output-audio-to-text.png" alt="generate output" title="generate output"/>

* Click <b>Generate Output</b>.

  The **Debug** window generates the flow log and results, as shown below. [Learn more](../perform-other-actions-on-the-flow-builder/run-the-flow.md) about running the workflow.

    <img src="../images/debug-window-audio-to-text.png" alt="debug window" title="debug window"/>


# Condition Node - Automate Conditional Flows

The Condition Node helps you control the flow of your workflow based on whether specific logical conditions are met. You can define rules using context variables, node outputs, or custom values to create dynamic branching.

Based on whether conditions are met, the workflow follows different paths, giving you precise control over execution.

The node can handle three types of conditions:

* `If`: It directs the flow to a specific path if criteria (Node, Context, or Value) are met.
* `Else`: It defines the fallback path that the flow follows when the IF condition isn't met .
* `Else If`: It allows you to configure another set of criteria (Node, Context, or Value) to be met when the initial 'If' condition isn't satisfied.

Whether you need a simple true/false evaluation or a more complex branching using AND, OR, or multiple ELSE IF checks, the Condition node enables precise control over decision logic.

    <Note>Due to security reasons, a condition can be called a maximum of 10 times in a workflow. Exceeding this limit will result in an error.</Note>

## Key Capabilities

* Flexible Condition Types: Define `IF`, `ELSE IF`, and `ELSE` paths using context variables, static values, or output from previous steps.
* `AND` or `OR` Logic: Combine multiple criteria for complex decision-making.
* Multi-Branch Execution: Direct the flow to different downstream nodes based on the condition evaluation.
* Context Variable Support: Easily reference values from earlier steps in the flow using `{{context.variable}}` and `{{context.steps.nodename.output}}`.
* Inline Expression Support: Use Node, Context, or Value types directly in conditional expressions.

## Common Use Cases

* Route Based on Classification: Direct flow based on category, type, or priority (e.g., route a ticket if priority = `High`).
* Fallback Logic: Use `ELSE` conditions to redirect the flow if no match is found.
* Dynamic Node Triggering: Select which downstream actions to execute based on user inputs or computed data.
* Validation Checks: Stop execution or branch if key data is missing or invalid.
* Multi-Step Filtering: Combine multiple conditions for granular control (e.g., if country = US AND status = active).

## How It Works

The Condition Node dynamically controls workflow paths by evaluating data against user-defined rules. It checks inputs using comparison operators and routes execution based on whether conditions are met. The node can process context variables or previous node outputs, enabling adaptive flows and error handling.

<img src="../images/condition_node_new.png" alt="Condition node" title="Condition node"/>

In this document, you will learn how to set up a Condition Node in a workflow, including adding it at the appropriate location and configuring its properties.

## Add and Configure a Condition Node

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.

* Select your workflow and click **Go to Flow**.

### Step 2: Add the Condition Node

* Click the `+` icon on an existing node and select Condition node.
* Or drag the Condition node from the Assets panel onto the canvas.

### Step 3: Configure the Node

1. Click the added node to open its properties panel.
2. Node Name: Enter a descriptive name
3. Set IF Condition:
    * Select a context variable: Enter `{{context.` → Choose a variable → Close with `}}`. For example: `{{context.ambiguous_sub_categories}}`.
    * Choose an operator (e.g., Contains).
    * Enter a value or another context variable. For example: `{{context.steps.Sub_Category_Detection.output}}`.
    * (Optional) Combine multiple criteria using AND/OR.
4. Set Routing:
    * **Go To:** Select the node if the IF condition is met.
    * **ELSE:** Select the node if the IF condition isn't met.

       <img src="./../images/condition-node-settings-filled.png" alt="Condition Node's Settings" title="Condition Node's Settings"/>


### Step 4: Test the Flow

* Click Run Flow at the top-right of the builder.
* Verify the flow behaves as expected and fix any errors.

<Note>If a condition is true or false but has no connected node, the following error message is displayed: `Path not defined. Please check the flow.` </Note>


# Configure a Workflow

You can modify your workflow's general details, such as its name and description, asynchronous configuration, and environment variables. You can also undeploy, and delete the workflow if it's not in use.

## Sync/Async Mode Setup

You can set the sync/async mode configuration for the workflow endpoint. If you change the mode, you must redeploy the workflow. The key difference is that synchronous mode blocks the client until the response is received, while asynchronous mode allows the client to continue working while the integration processes the request.

Steps to enable and configure the asynchronous mode:

1. Log in → In AI for Process Modules top menu → Click **Workflows**.
2. Select the workflow to modify its configuration. The Workflow page is displayed.
3. Click **Configurations** in the left navigation and then click **Setup sync/async**.  
<img src="../images/setup-sync-async.png" alt="Setup sync/async" title="Setup sync/async"/>

4. The Sync/Async mode setup pop-up displays with async mode disabled by default.
    * **Synchronous mode timeout**: The allowed range is 60 to 300 seconds (5 minutes). The default is 180 Seconds (3 minutes). The endpoint will trigger a timeout error if the request is not completed within the selected time frame.  
<img src="../images/sync-mode-timeout.png" alt="Sync Mode Timeout" title="Sync Mode Timeout"/>

    * **Asynchronous mode configuration**: Turn on the **Enable async** toggle and do the following:

        1. Provide the URL of your external application to which messages are to be delivered. 
        2. Enter the access token generated by the external application.
        3. Set the Asynchronous mode timeout duration: 
            * **Set timeout**: The allowed timeout range is 60 seconds to 600 seconds (10 minutes). The default is 180 Seconds (3 minutes). 
            * **No timeout**: This allows the workflow to process the request without a time limit.  
            <img src="../images/async-mode-configuration.png" alt="Async Mode Configuration" title="Async Mode Configuration"/>
        4. Click **Save**.

    !!! note 

        Timeout precedence: Workflow timeout > Node timeout > Model timeout.

4. If you have changed the mode, you must redeploy the workflow: Go to **Workflow endpoint** in the left navigation and click the **Deploy** button on the top-right corner of the page.

## Manage Environment Variables

You can define reusable values and configurations for the workflow using Environment variables. Those values
can be used by different nodes in the workflow flow.

### Add an Environment Variable

Steps to add an environment variable:

1. On the **Workflow** tab, select the workflow you want to modify the details. The Workflow page is displayed.

2. Click **Configurations** in the left navigation and then select **Manage environment variables**.  
<img src="../images/manage-environment-variables.png" alt="Manage Environment Variables" title="Manage Environment Variables"/>

3. The **Create environment variable** dialog box is displayed. Click **Add** or **Add variable**.

4. Specify the following information on the **Add variable** dialog box:  
<img src="../images/add-variable.png" alt="Add a variable" title="Add a variable"/>

    * **Variable name**: Provide a descriptive name for the variable.
    * **Secure variable**: Use the toggle to enable security for the variable. (If you are enabling the security, read the onscreen information carefully to understand the impact.)
    * **Value**: Enter the desired value for the variable.
    * **Notes** (optional): Enter any notes about how the variable should be used or its purpose.

5. Click **Save**. The created variable is listed on the **Create environment variable** dialog box.



### Edit or Delete an Environment Variable

Click the three dots icon corresponding to the Name of the variable to edit the details of the variable or Delete to delete a variable.

<img src="../images/manage-a-variable.png" alt="Manage a Variable" title="Manage a Variable"/>

## Undeploy the Workflow

You can undeploy the workflow if it's no longer in use. Undeploying the workflow will result in an immediate disconnection from all active instances. Click **Proceed to undeploy** on the Configurations page and follow the on-screen instructions.

## Delete the Workflow

You can delete an undeployed workflow. Deleting the workflow will remove all the associated data. Click **Proceed to delete** on the Configurations page and follow the on-screen instructions.

# Context Object - Structural Reference Guide

The *Context Object* is the central runtime state container for any workflow execution within the platform.

It captures everything about a run - from inputs, intermediate data, and node-level status to final outputs and metadata required for debugging, visualization, or rehydration of the session.

Every execution instance (or run) has a single Context Object that's dynamically updated as the workflow progresses.

## Top-Level Structure

At the highest level, the Context Object includes the following key categories:

<table>
  <tr>
   <td><strong>Category</strong>
   </td>
   <td><strong>Key Examples</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Run Metadata</strong>
   </td>
   <td>startDate, status, flowType, appId, versionId, cfProcessId
   </td>
   <td>Identifiers and timestamps for the workflow instance
   </td>
  </tr>
  <tr>
   <td><strong>Execution State</strong>
   </td>
   <td>steps, branch, activeSteps, status
   </td>
   <td>Information on each node’s progress and outcome
   </td>
  </tr>
  <tr>
   <td><strong>Environment & Config</strong>
   </td>
   <td>env, agentTimeout, asyncExecDetails
   </td>
   <td>Defines the runtime or environment parameters
   </td>
  </tr>
</table>



## The steps Object

The steps object is the most critical part of the Context.

It’s a map (or dictionary) that holds the state of each node in the workflow, indexed by its unique node name or ID.

```json
"steps": {
  "NodeNameA": { ... },
  "NodeNameB": { ... },
  "NodeNameC": { ... }
}
```

Each node’s entry in steps represents its execution context, including:


<table>
  <tr>
   <td><strong>Section</strong>
   </td>
   <td><strong>Purpose</strong>
   </td>
  </tr>
  <tr>
   <td>input
   </td>
   <td>The data received by this node at the time of execution (usually produced by previous nodes or user input).
   </td>
  </tr>
  <tr>
   <td>output
   </td>
   <td>The result or payload produced by the node. Can include model outputs, processed data, or API responses.
   </td>
  </tr>
  <tr>
   <td>statusCode / isSuccessful
   </td>
   <td>Indicates whether execution succeeded, failed, or was skipped.
   </td>
  </tr>
  <tr>
   <td>logs
   </td>
   <td>Optional log text or debug messages generated by the node.
   </td>
  </tr>
  <tr>
   <td>executionTime, totalTime, pausedAt, resumedAt
   </td>
   <td>Node-level timing data to measure performance or latency.
   </td>
  </tr>
  <tr>
   <td>reqObj / resObj
   </td>
   <td>For nodes that invoke models, these fields capture the raw request and response envelopes.
   </td>
  </tr>
  <tr>
   <td>metadata
   </td>
   <td>Optional node-specific information such as schema references, task IDs, or external job handles.
   </td>
  </tr>
</table>



### Example Generalized Node Structure

```json
"steps": {
  "ExampleNode": {
    "input": {
      "parameters": { "param1": "value1" },
      "contextRefs": { "previousNodeOutput": "..." }
    },
    "output": {
      "result": "some value",
      "summary": "optional explanation",
      "structuredData": { "key": "value" }
    },
    "statusCode": 200,
    "isSuccessful": true,
    "logs": "Node executed successfully",
    "executionTime": "1250ms",
    "reqObj": {
      "endpoint": "https://api.example.com/run",
      "body": { "input": "..." }
    },
    "resObj": {
      "status": 200,
      "data": { "response": "..." }
    },
    "metadata": {
      "model": "gpt-5",
      "nodeType": "LLM",
      "dependencies": ["SchemaRetriever", "Sanitizer"]
    }
  }
}

```

## How the steps Map Evolves

The platform populates the steps map sequentially as the workflow executes:

1. Initialization: The steps object starts empty.
2. Node Execution: Entry created for each running node.
3. Completion: Outputs and timing appended.
4. Error Handling: Logs and status updated, branch reflects failures. 

## Common Node Types and Expected Fields


<table>
  <tr>
   <td><strong>Node Type</strong>
   </td>
   <td><strong>Typical Fields</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Input Node / Start Node
   </td>
   <td>user_query, metadata
   </td>
   <td>Captures the initial user request or input values
   </td>
  </tr>
  <tr>
   <td>API Node
   </td>
   <td>body, statusCode, totalTime
   </td>
   <td>Fetches external data (schemas, APIs, databases)
   </td>
  </tr>
  <tr>
   <td>AI Node
      </td>
   <td>reqObj, resObj, modelElapsedTime, inferenceTime
   </td>
   <td>Records prompt/response data for auditability
   </td>
  </tr>
</table>

## Special Mention: Loop Node Context Object

When a loop node executes in the flow, it creates a context object that tracks the loop's progress and results. This context object is accessible throughout the flow and contains the following information:


### Structure Overview

```json
{
  "loopId": "string",
  "startTime": "timestamp",
  "iterationCount": "number",
  "inputs": ["array of input values"],
  "outputArray": ["array of iteration results"],
  "totalCount": "number",
  "childNodesExecuted": "number"
}
```

### Field Descriptions


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>loopId
   </td>
   <td>String
   </td>
   <td>Unique identifier for the loop node (matches the node ID in your flow)
   </td>
  </tr>
  <tr>
   <td>startTime
   </td>
   <td>Timestamp
   </td>
   <td>When the loop started executing 
   </td>
  </tr>
  <tr>
   <td>iterationCount
   </td>
   <td>Number
   </td>
   <td>Current number of iterations completed
   </td>
  </tr>
  <tr>
   <td>inputs
   </td>
   <td>Array
   </td>
   <td>The original list of items the loop is processing
   </td>
  </tr>
  <tr>
   <td>outputArray
   </td>
   <td>Array of Objects
   </td>
   <td>Results from each iteration, stored in order of execution
   </td>
  </tr>
  <tr>
   <td>totalCount
   </td>
   <td>Number
   </td>
   <td>Total number of items processed (same as the length of inputs)
   </td>
  </tr>
  <tr>
   <td>childNodesExecuted
   </td>
   <td>Number
   </td>
   <td>Total count of child nodes that ran across all iterations
   </td>
  </tr>
</table>



### Understanding the outputArray

Each item in the `outputArray` represents one iteration's result:

* The array maintains the same order as the `inputs` array
* Each iteration's result is wrapped in an `output` object
* The structure of each `output` depends on what your loop produces


### Example

If your loop processes a list of email addresses to add them to a database:

**Inputs:** `["user1@example.com", "user2@example.com"]`

**Context Object:**

```json
{
  "loopId": "Add2DB_0",
  "startTime": "2025-11-12T09:23:05.306Z",
  "iterationCount": 2,
  "inputs": [
    "user1@example.com",
    "user2@example.com"
  ],
  "outputArray": [
    {
      "output": {
        "success": "user1@example.com added to the Employee Database",
        "processId": "cfp-d687dc0a-4608-4f41-a4f3-68a691d9dce6"
      }
    },
    {
      "output": {
        "success": "user2@example.com added to the Employee Database",
        "processId": "cfp-5fb1718e-5962-4f43-b1af-b52bda936b09"
      }
    }
  ],
  "totalCount": 2,
  "childNodesExecuted": 10
}

```

### How to Use This Context

The loop context provides different ways to access data depending on whether you're working inside or outside the loop node.


#### Inside the Loop Node

When configuring nodes that run within the loop, use these special context variables:

| Variable                       | Description                                                          | Example                                                                                                          |
|--------------------------------|----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `{{context.currentItem}}`      | The item currently being processed in this iteration                 | If processing `[user1@example.com, user2@example.com]`, this would be `user1@example.com` in the first iteration |
| `{{context.currentIndex}}`     | The zero-based index of the current item                             | `0` for the first iteration, `1` for the second, and so on.                                                      |
| `{{context.currentOutput[x]}}` | Access a specific value from the output array of previous iterations | `{{context.currentOutput[0]}}` gives you the output from the first iteration                                     |

#### Outside the Loop Node

After the loop completes, access the full results using the loop node's ID:


<table>
  <tr>
   <td><strong>Variable</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Example</strong>
   </td>
  </tr>
  <tr>
   <td><code>{{context.steps.Loop0001.output}}</code>
   </td>
   <td>The complete array of all iteration results
   </td>
   <td>Access all outputs from a loop node with ID "Loop0001"
   </td>
  </tr>
  <tr>
   <td><code>{{context.steps.Loop0001.output[x]}}</code>
   </td>
   <td>A specific iteration's result
   </td>
   <td><code>{{context.steps.Loop0001.output[0]}}</code> gets the output entry for the first iteration from the loop’s output array
   </td>
  </tr>
</table>



#### Quick Reference

**Inside Loop:** Use `currentItem`, `currentIndex`, `currentOutput[x]`

**Outside Loop:** Use `context.steps.LoopNodeId.output[x],context.steps.LoopNodeId.output`


## Using the Context object


### Cross-Node Referencing

Nodes can reference each other’s data declaratively through context interpolation, using the **double-curly ({{ }})** syntax.

Example:

```json
"steps": {
  "SchemaRetriever": {
    "output": { "schema": [ ... ] }
  },
  "QueryGenerator": {
    "input": {
      "schema": "{{steps.SchemaRetriever.output.schema}}"
    }
  }
}
```

When the workflow runs, the expression inside {{ ... }} is automatically resolved at runtime using the Context Object.

This declarative referencing allows you to bind data from previous nodes without writing code.


### Supported Reference Patterns

You can reference any accessible value from the Context Object:

```
{{context.appId}}
{{context.steps.QueryGenerator.output.sql_query}}
{{context.schema[0].column_name}}
```

* context refers to the full context object. 
* Steps obj provides scoped access to node data. 
* References can be used anywhere - in input fields, API node parameters, LLM prompts, or conditions.



### Evaluation Behavior

* Interpolation is lazy - values are resolved right before node execution. 
* If a referenced key doesn’t exist, the expression resolves to null (or an empty string in string contexts).
* Circular references are automatically detected and blocked.



## Extending the Context Object with Script Nodes

In addition to declarative referencing, developers can extend the Context Object dynamically during execution using Script Nodes.

This is useful for:

* Storing computed or intermediate values. 
* Passing control variables across nodes.
* Logging or persisting contextual data for downstream use.

### JavaScript Example

```javascript
// Add a simple key-value pair
context.newKey = "Hello World";

// Store structured data
context.customData = {
  runId: context.cfProcessId,
  stage: "validation",
  timestamp: new Date().toISOString()
};

// Access it in later nodes
console.log(context.customData.stage);
```

### Python Example

```python
# Add or modify keys in the context dictionary
context['newKey'] = "Hello World"

# Store complex objects
context['customData'] = {
    "runId": context.get('cfProcessId'),
    "stage": "validation",
    "timestamp": datetime.now().isoformat()
}

# Retrieve later
print(context['customData']['stage'])
```

### Guidelines


* Use camelCase naming (customerInfo, retryCounter, tempResults). 
* Avoid overriding system-reserved keys (steps, branch, status, dbquery). 
* Keep data lightweight - avoid large arrays or raw API responses.
* Everything added to the context object is accessible in later nodes through {{context.&lt;key>}} references. 



## Best Practices

1. Use consistent node naming for traceability (QueryGenerator, DataCleaner).
2. Mask sensitive data before writing to the context.
3. Use declarative references ({{ ... }}) for readability whenever possible.
4. Use Script Nodes only when dynamic or computed context manipulation is required.


# Create a New API Key for Workflow Access

You can generate an API key for a workflow and share it with trusted users to enable secure access to your deployed workflow from external environments. It helps ensure that only authorized users from external systems can interact with the workflow.

Steps to create an API key for your workflow:

1. Log in to your AI for Process account.

2. Select the required workflow from the list. 

3. Click **API keys** in the left panel.  
<img src="../images/create-new-api-key.png" alt="Create new API Key" title="Create new API Key"/>

4. Click the **Create a new API** key button. The Create new API key dialog is displayed.  
<img src="../images/generate-new-api-key.png" alt="Generate new API Key" title="Generate new API Key"/>

5. Provide a descriptive name for the key and click **Generate key**. The newly generated API key is displayed in the dialog. Click **Copy and close** to save the key to your clipboard. You can now share this key with authorized users as needed.  
<img src="../images/copy-and-close-api-key.png" alt="Copy and Close API Key" title="Copy and Close API Key"/>

    !!! note
        AI for Process won't show the API key again for security reasons. Keep the API key secure and confidential. Never share it with unauthorized users or expose it in client-side code or browsers.

All generated API keys are listed in the API keys section for easy reference and management. 
<img src="../images/api-keys-list.png" alt="API Keys List" title="API Keys List"/>


# Create a New Version of the Flow

You can save versions of your flows, restore older versions, and delete versions if needed. After you have deployed a flow, it will appear on the Workflow page with the status 'Deployed'.

**Steps to create a new version of the flow**:

1. Click the down arrow on the canvas header.

    The **Flow versions** dialog is displayed.

1. To save a version of the flow, click the **+ icon**.

    <img src="./../images/create-a-new-version.png" alt="Create a New Version" title="Create a New Version"/>

    The **Name the version** dialog is displayed.

1. Enter a **Version name** and **Description** for the flow and click **Save**.

    <img src="./../images/name-a-new-version-for-flow.png" alt="Name a New Version for Flow" title="Name a New Version for Flow"/>

    The version you saved will be the current version. Any changes you make in the flow are auto-saved to the current version.

    !!! note

        In the **Flow versions** dialog, you can click the 3 dots icon beside the version name to restore or delete a version. When you restore a version, the current version goes down to the bottom of the list, and the restored version becomes the current version and is moved to the top of the list. If you want to edit a restored version, a new current version is created, and you can save this version with a new name. A deployed version can only be restored but cannot be deleted.


# Create a Workflow

You can create a new workflow to leverage models, build flows, and later deploy it as an endpoint. You can start the workflow creation journey from the Workflows page. The page also allows you to manage your existing workflows and view the workflows that have been shared with you by others.

Steps to create a Workflow:

1. Log in to your account.  
1. On the **Workflows** page, select **Create new workflow**. The **New workflow** dialog box is displayed.

    <img src="../images/workflow-description.png" alt="Create a workflow" title="Create a workflow"/>

1. Enter a name and a brief description for the workflow and select **Create**. The workflow is created, and the **Workflow** option is displayed. You can start creating your workflow now.

[:octicons-arrow-left-24: Back to AI node](../types-of-nodes/image-to-text-node.md#step-3-configure-the-node)

# Defining JSON Schema

You can refer to the following JSON schema format to define your schema:

```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "<property_name_1>": {
      "type": "<data_type>", 
      "description": "<description_of_the_property>"
    },
    "<property_name_2>": {
      "type": "<data_type>",
      "format": "<optional_format>", 
      "enum": ["<value1>", "<value2>", "<value3>"], 
      "description": "<description_of_the_property>"
    }
  },
  "required": ["<required_property_1>", "<required_property_2>"]
}
```


**Here is a step-by-step guide to help you define your JSON schema:**

1. **Create the schema object:**
    - Set `type: "object"` to specify the root level as an object type.
    - Add a `properties` object to define all fields.
2. **Define property names:**
    - Create an object for each property, including `type` and `description`.
    - Common types: `string`, `number`, `boolean`, `array`, `object`.
    - For arrays, use `items` to define element types.
3. **Set constraints:**
    - Add a `required` array at each level, listing all required fields.
4. **Handle special fields:**
    - Use `enum` to restrict optional values.

# Deploy a Workflow

AI for Process supports both synchronous and asynchronous workflow deployment modes.

!!! Note

    Before deploying the workflow, you must fix any errors or warnings in the Workflow.

## Synchronous Endpoint

A synchronous endpoint handles requests and responses immediately and sequentially. The client waits for the server to process the request and return a response before proceeding. This approach is suitable for real-time operations requiring immediate response.

## Asynchronous Push and Poll Endpoints

Push endpoints actively send data to the client, while poll endpoints require the client to retrieve the data on their own. The key difference between asynchronous push and poll endpoints is how the response data is delivered to the client.

### Asynchronous Push Endpoints

* The integration "pushes" the response data to the client as soon as it becomes available.
* This allows the client to receive updates in real-time or near real-time.
* The client sets up a webhook or other mechanism to receive the pushed data.
* Useful for integrations where the client needs to be notified of changes immediately.

### Asynchronous Poll Endpoints

* The client "polls" or periodically checks the integration to fetch the response data.
* The client initiates the requests to retrieve the data on their schedule.
* The client is responsible for checking for new data rather than waiting for it to be pushed.
* Useful for integrations where the client only needs to check for updates at specific intervals.

## Deploy a Workflow

Steps to deploy a workflow:

1. Log in → AI for Process.
2. Click the **Workflows** tab on the top navigation bar, and select the workflow you want to deploy.
3. Click **Workflow endpoint** in the left menu.
4. The Workflow endpoint page is displayed. Click **Deploy**.  
<img src="../images/agent_platform/tool_endpoint.png" alt="Deploy Button" title="Deploy Button"/>

5. The workflow is deployed and the **Sync** and **Async poll** endpoints are generated.  
<img src="../images/new_endpoint.png" alt="Sync Async Poll" title="Sync Async Poll"/>

6. If you want to generate an Async push endpoint for the workflow, do the following:
    1. Click the **Async push** tab and click **Enable**/**Settings**.  
    <img src="../images/enable-settings.png" alt="Enable/Settings" title="Enable/Settings"/>

    2. The **Sync/Async mode setup** pop-up displays with sync mode disabled by default.
        * **Synchronous mode timeout**. The allowed range is 60 to 300 seconds (5 minutes). The default is 180 Seconds (3 minutes). The endpoint will trigger a timeout error if the request isn't completed within the selected time frame.  

        * **Asynchronous mode configuration**: Turn on the **Enable async** toggle and do the following:

            1. Provide the URL of your external application to which messages are to be delivered. 
            2. Enter the access token generated by the external application.
            3. Set the Asynchronous mode timeout duration: 
                * **Set timeout**: The allowed timeout range is 60 seconds to 600 seconds (10 minutes). The default is 180 Seconds (3 minutes). 
                * **No timeout**: This allows the workflow to process the request without a time limit.  
                <img src="../images/async-mode-configuration.png" alt="Async Mode Configuration" title="Async Mode Configuration"/>
           
        !!! note

            Timeout precedence: Workflow timeout > Node timeout > Model timeout.

    4. Click **Save**. The async push endpoint is created.  
    <img src="../images/async-push-endpoint.png" alt="Deploy Button" title="Deploy Button"/>

## Redeploy a Workflow for the Changes in the Flow

The Deployed version of your workflow's flow is accessible from the **Workflow** page. You can click the **View the Flow** button to view the flow in read-only mode.  
<img src="../images/deployed-version.png" alt="Deployed Version" title="Deployed Version"/>

You can change the in-development version of the flow. To redeploy the workflow with the updated flow, click the **Deploy** button at the top-right corner of the **Workflow endpoint** page. The redeployment doesn't change the workflow's endpoint.

# Doc Intelligence Node - Automate Data Extraction

The Doc Intelligence Node enables document analysis and information extraction within workflows. It allows workflows to analyze documents using AI engines such as Docling, OpenAI, Anthropic, or Azure. Users can configure the node to process files from a static URL or workflow context variable, select the appropriate engine, and define engine-specific options to extract structured data or insights.

This capability is useful for workflows that involve invoices, receipts, identity documents, contracts, or other documents that require automated extraction and downstream processing.

## Key Capabilities

* **Engine selection**: Choose between Docling, OpenAI, Anthropic, or Azure to process the document with the AI engine best suited for your use case.
* **File input flexibility**: Input can be a static URL or a dynamic workflow context variable, allowing seamless integration with upstream steps.
* **Async processing**: Executes document processing asynchronously, allowing workflows to continue without waiting for the extraction to finish (engine support may vary).
* **Structured data extraction**: For engines that support structured output, the node can generate structured data automatically for downstream consumption.

## Common Use Cases

* **Invoice and receipt processing**: Automatically extract key fields including amounts, dates, and vendor information from financial documents.
* **Identity document verification**: Extract structured data from IDs, passports, or business cards to automate validation steps.
* **Contract analysis**: Identify key clauses, dates, or parties in contracts for automated tracking or review.
* **Compliance checks**: Ensure sensitive documents are correctly analyzed, and key information is captured for auditing.

## How it Works

The Doc Intelligence Node acts as an automated document-processing point within a workflow. When a workflow reaches this node, the selected AI engine analyzes the document and extracts relevant information or structured data. The node processes the document using the selected engine and returns extracted text or structured data. Workflow execution continues based on the node’s configuration and engine capabilities.

The extracted information is then made available for downstream workflow steps, enabling automation of decision-making, data entry, or reporting. Built-in error handling and engine configuration checks ensure that the node functions reliably and provides traceability into the processing results.

<img src="../images/doc_node_how_it_works.png" alt="Doc Intelligence node" title="Doc Intelligence node"/>

This allows workflows to seamlessly incorporate document intelligence, turning unstructured documents into actionable data with minimal manual intervention.

## Add and Configure a Doc Intelligence Node

The Doc Intelligence Node allows you to integrate automated document processing into your workflow. Use this procedure to add the node to your canvas and configure its properties.

**Before you begin**

* Open your workflow and add the Doc node to the workflow canvas. [Learn more about adding nodes](../manage-flow-nodes.md#add-nodes)
* Ensure that at least one AI engine (Docling, OpenAI, Anthropic, or Azure) is configured in your workspace if you plan to use it for processing.

**Steps to configure a Doc Intelligence node:**

Begin by opening the Doc node’s properties panel and giving it a clear, descriptive name, such as InvoiceProcessing or IDExtraction, then follow the steps below:

### 1. Provide File Input

* Enter the **File URL** in the input field. You can use either:
    * A static URL
    * A workflow context variable to pass the document dynamically from upstream steps.

### 2. Select Engine

* Choose the AI engine for processing: **Docling**, **OpenAI**, **Anthropic**, or **Azure**.
* Engine-specific configuration options appear based on your selection.
* If the selected engine is not configured, the system prompts you to set it up and redirects you to the appropriate configuration page.

<img src="../images/doc_node_panel.png" alt="Doc node panel" title="Doc node panel"/>

### 3. Configure Engine Settings

Configure engine-specific options to control how the document is processed. 

Options include Async execution, which processes the document in the background without blocking the workflow, and Structured data extraction, which generates machine-readable outputs for downstream nodes.

| Engine                     | Default settings                              | Notes |
|----------------------------|-----------------------------------------------|-------|
| **Docling**                | Async enabled        | The model dropdown shows all configured Docling connections. |
| **OpenAI**                 | Async enabled        | Only configured OpenAI models are listed. Model timeout: 30–360 sec (default 300). |
| **Anthropic**              | Async enabled        | Only configured Anthropic models are listed. Model timeout: 30–360 sec (default 300). |
| **Azure Doc Intelligence** | Async enabled, structured data always enabled | Prebuilt models are available by default. |

<img src="../images/doc_node_config.png" alt="Doc node panel" title="Doc node panel"/>

For information about supported file types, file size limits, and available models by engine, see [Engine support and limits](../types-of-nodes/doc-intelligence-node.md#engine-support-and-limits).


### 4. Test the Flow

Run the flow and verify the flow behaves as expected and fix any errors.

The Debug panel displays logs, extracted text, structured data, and metadata based on your node configuration.

<img src="../images/debug_panel.png" alt="Doc node panel" title="Doc node panel"/>

## Access the Node’s Output

The Doc Intelligence Node output is stored in the workflow context for downstream nodes.

Use the syntax: `{{context.steps.DocNodeName.output}}`

Output may include:

* Extracted text
* Structured data (if enabled)
* Page or document metadata


## Engine Support and Limits

This section describes the supported file types, models, and size limits for each engine used in the Doc Intelligence node.

### Supported file types and size limits

| Engine                     | Supported file types     | Max file size         |
|---------------------------|---------------------------|------------------------|
| **Azure Document Intelligence** | PDF, DOCX, PPTX            | 50 MB                 |
| **OpenAI**                | PDF only                   | 512 MB                |
| **Anthropic Claude**      | PDF only                   | 32 MB                 |
| **Docling**               | PDF, DOCX, PPTX            | 100 MB (extendable)   |


###  Supported models and configurations

| Engine                       | Default model                   | Available models                                                                 | Configuration                        |
|------------------------------|----------------------------------|----------------------------------------------------------------------------------|--------------------------------------|
| **Azure Document Intelligence** | prebuilt-layout                 | Azure prebuilt models                                                            | Not configurable                     |
| **OpenAI**                   | gpt-4o-mini                      | gpt-4o, gpt-4o-mini, gpt-4.1                                                     | Temperature (0–2), max_tokens        |
| **Anthropic Claude**         | claude-3-5-sonnet-20241022       | claude-sonnet-4-20250514, claude-3-5-sonnet-20241022                            | Temperature (0–1), max_tokens        |
| **Docling**                  | Service-based                    | No model selection                                                               | Service-managed                      |









# DocSearch Node – Power Your Flows with Context-Driven Search

The DocSearch Node is a Retrieval-Augmented Generation (RAG)-powered component that enhances the real-time discovery and retrieval of information chunks from available resources through an established Search AI app connection. Indexed and high-quality content is fetched from your Sources repository, enabling fast, precise, and context-aware responses to user queries.

## Key Capabilities

* **RAG-Powered Search**: Combines traditional retrieval (search, databases) with generative LLMs as follows:
    * **Retrieval & Pre-processing**: Queries indexed content using advanced algorithms, then refines results through tokenization and filtering. 
    * **Grounded Generation**: Integrates refined results with LLMs for accurate and context-rich responses. 
* **Seamless SearchAI Integration**: Connects to your Search AI app to query indexed documents and return results via the Answer Generation engine.
* **Dynamic Query Support**: Supports static and dynamic inputs for flexible, context-aware search automation.
* **Meta Filter Configuration**: Use optional meta filters to refine results, or search across all linked documents by default.
* **User Redirection Option**: Redirect users to the full Search AI App for a more comprehensive search experience when needed.
* **Precision and Personalization**: Delivers context-aware, intent-driven responses aligned to the query, ensuring accurate, relevant, and user-specific outcomes.
* **Flow Integration**: Seamlessly connect DocSearch with other nodes to pass queries and process responses.

## Common Use Cases

* **Document Retrieval**: Retrieve relevant content from indexed sources, such as manuals, policies, or help articles, based on user queries.
* **Contextual Answer Generation**: Deliver AI-generated responses grounded in retrieved documents using the RAG framework.
* **Knowledge Base Search**: Search internal wikis, technical docs, or training material with support for dynamic inputs and filters.
* **User Query Handling**: Accept real-time input queries from other nodes to personalize search results in the workflow context.

## Example Use Case

A retail bank uses the **DocSearch Node** to automate responses to frequently asked questions about loans, accounts, and card services. When a user asks, `What documents are required to apply for a home loan based on my income?`, the node dynamically passes the query to a connected Search AI App, which searches, indexes, and fetches relevant information chunks from internal resources such as loan policy documents, eligibility criteria, and process guidelines. It then returns a precise, context-aware response, reducing call center load and improving self-service efficiency.

## How It Works

The **DocSearch Node** integrates seamlessly into your workflows, accepting user queries as static text or dynamic variables referencing other node outputs. It connects to a pre-configured Search AI App on the platform to retrieve relevant content from your Sources repository using a Retrieval-Augmented Generation (RAG) framework. You can define meta filters manually or fetch them via the Answer Generation API to generate refined, context-aware responses. The node fully integrates within the canvas and optionally allows redirection to the full Search AI interface.

<img src="../images/how-doc-search-works.png" alt="how doc search works" title="how doc search works"/>

In this document, you will learn how to add and configure DocSearch Nodes with Search AI connections, set up query inputs and meta filters, handle response outputs, and test the search-driven interactions within your automation flows.

## Steps to Add and Configure the Node

Configuring the DocSearch Node consists of the following steps:

1. [Set up a Search AI application and the information source for AI for Process integration](../types-of-nodes/docsearch-node.md#step-1-set-up-search-ai-app).
2. [Link the Search AI application in AI for Process](../types-of-nodes/docsearch-node.md#step-2-link-the-search-ai-app-in-ai-for-process).
3. [Add and configure the DocSearch node](../types-of-nodes/docsearch-node.md#step-3-add-and-configure-a-docsearch-node).
4. [Test the Workflow](../types-of-nodes/docsearch-node.md#step-4-test-the-flow) you have built.

## Step 1: Set up Search AI App

The integration of Search AI with AI for Process involves setting up a Search AI application, configuring it for integration, and modifying AI for Process to interact with Search AI in response to specific conditions or events. Search AI provides REST APIs that enable seamless interaction with any application.

Follow the detailed steps [here](https://docs.kore.ai/xo/apis/automation/api-introduction/#creating-and-managing-jwt-apps-in-xo-platform) to complete the configuration.

<Note>To receive answers from Search AI, you must enable the **Answer Generation** option under the API scopes section.</Note>

## Step 2: Link the Search AI App in AI for Process

After fetching the Search AI application credentials, configuring the source, and enabling the channel communication via API, you must link the app in AI for Process. 

**Steps to integrate Search AI in AI for Process**

* Log in to your AI for Process account. Click **Settings**.
* Click **Integrations** on the left navigation menu.
* Scroll down to **Search AI** and click **Add connection**.

    <img src="./../images/link-an-app.png" alt="link an app" title="link an app"/>

* In the **Search AI** window, provide the required information that you copied from the Search AI app in [Step 1](./docsearch-node.md#step-1-set-up-search-ai-app).

* Click **Test** to test the connection.
* If the connection is successful, click **Save**.
  <img src="./../images/searchai-connection-form.png" alt="searchai connection form" title="searchai connection form"/>

  A success message is displayed and the connection is listed for Search AI.
   <img src="./../images/listed-connection.png" alt="listed connection" title="listed connection"/>

  If the connection fails with the following message, check and re-enter the correct Search AI app credentials.

  <img src="./../images/connection-failure.png" alt="connection failure" title="connection failure"/>

  <div class="admonition note">
  <p class="admonition-title">Note</p>
  <p>We support connections through Search AI. You must provide `https://platform.kore.ai` for the **Search AI URL** field.</p></div>

## Step 3: Add and Configure a DocSearch Node

### Step 3(A): Open Workflow Builder

* Log in AI for Process modules top menu and click **Workflows**.

* Select your workflow and click **Go to Flow**.

### Step 3(B): Add the Node

Click **DocSearch** > **+ New DocSearch** on the **Assets** panel. Alternatively, click **DocSearch** in the bottom panel.

  <img src="./../images/add-docsearch-node.png" alt="add doc search node" title="add doc search node"/>

### Step 3(C): Configure the Node

* To provide a unique name, right-click the node and click **Rename** since the node is provided a default name.

    <img src="./../images/rename-docsearch-node.png" alt="rename node" title="rename node"/>

    Alternatively, click the node and change the value for **Node Name** in the configuration panel.

    <img src="./../images/node-name.png" alt="node name" title="node name"/>

* Add the input for the <b>Query</b> field to capture the user's search query. 
  
  To accept dynamic inputs, either configure an input variable in the <b>Start</b> node or use the <a href="../../perform-other-actions-on-the-flow-builder/manage-input-and-output/#adding-input-variables" >Manage Input Variables</a> feature.</p>

  You can also add plain text for hard-coded inputs like "<i>What does the McKinsey report forecast for Q3 in 2025 based on historic data taken in the past 3 years</i>."
   <img src="./../images/context-input.png" alt="query field" title="query field"/>
   
* Select the <b>Search AI connection</b> you set up in <a href="#step-2-link-the-search-ai-app-in-ai-for-process" >Step 2</a> on the AI for Process integration page.
   <img src="./../images/searchai-connection.png" alt="search ai connection" title="search ai connection"/>

   <div class="admonition note">
   <p class="admonition-title">Note</p>
   <p>Use search to look up and select the required connection.</p></div>

  To set up a new connection, click **+ New Connection**. This will redirect you to the AI for Process Integrations page. Follow the steps mentioned [here](./docsearch-node.md#step-2-link-the-search-ai-app-in-ai-for-process) to complete the integration.

* (Optional) Set <b>Meta filters</b> (click the expansion arrow to access the editor) to define rules that will narrow down the search results. For example, if the sources have multiple files, you can define the specific file names to look up in the meta filters code. <a href="https://docs.kore.ai/xo/apis/searchai/answer-generation/#body-parameters" >Learn more</a>.
<img src="./../images/set-meta-filters.png" alt="set meta filters" title="set meta filters"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>If you don't provide any meta filters, the query is applied to all the documents uploaded to that connection.</li>
<li>The filters can be a context variable in the flow depending on the builder’s requirement.</li></ul></p></div>

<p><b>Managing Errors</b></p>

Appropriate canvas-level errors are displayed (in the error log) when you add a new node. You can view and fix the errors by clicking the <b>warning</b> icon.

   <img src="../images/docsearch-run-flow.png" alt="click run button" title="click run button"/>

## Step 4: Test the Flow

To run and test the flow, follow the steps below:

* Click the **Run Flow** button at the top-right corner of the flow builder.
  <img src="../images/docsearch-run-flow.png" alt="click run button" title="click run button"/>

* (Optional) Add the value for **Input Variable** if you have configured it to test the flow in **Step 5** of [this](../types-of-nodes/docsearch-node.md#step-3-add-and-configure-a-docsearch-node) section. Otherwise, go directly to the next step.

* Click <b>Generate Output</b>.

     <img src="../images/input-and-generate-output-docsearch.png" alt="generate output" title="generate output"/>

   The **Debug** window displays the flow log and execution status of each node on the canvas, starting from the **Start** node to the **End** node, along with the result shown in the **Output** window. [Learn more](../../../workflows/workflow-builder/perform-other-actions-on-the-flow-builder/run-the-flow.md) about running the workflow.

<Note> The answer (extracted chunks) from the node can be accessed via the context variable (key) in the output path. This key is dynamic and depends on the API response. The format is `{{context.steps.<<<b>nodename</b>>>.dynamicpath}}`. For example, it could be `context.steps.DocSearch.response.response.answer` in one case or `context.steps.DocSearch.response.response.response.answer` in another. Check the sample response from Search AI to find the correct key that holds the content. Use that key in your workflow. You may also need to extract multiple chunks from different keys.</Note>

## Related Links

* [Manage Nodes in Workflow](../manage-flow-nodes.md) - Add and manage nodes on the canvas.
* [Run Workflow](../perform-other-actions-on-the-flow-builder/run-the-flow.md) - Run and test an workflow in real time.


# End Node - Automate Workflow Completion

End nodes let you display the flow's outputs upon success or an error message in case of failure.

## Add and Configure an End Node

Setting up an End node in a workflow involves adding the node at the appropriate location in the flow and configuring various node properties.

Steps to add and configure the node:

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows"/>

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the End Node

* In the workflow builder, click the “**+**” icon on any existing node on the canvas and select **End** from the pop-up menu. 
* Alternatively, drag the **End** node from the Assets panel onto the canvas.

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. The General Settings for the node are displayed.  
<img src="./../images/end-node-configure.png" alt="Configure End Node" title="Configure End Node"/>

* Enter or select the following information:

    * **Custom Name**: Enter an appropriate name for the node.
    
    * **Name (key)**: Select a key from the drop-down list. All defined keys in the Manage Output section are displayed here. You can select a variable and assign a value to it. (You can also add a new key. For more information, see [Manage Input and Output variable](./../perform-other-actions-on-the-flow-builder/manage-input-and-output.md).)  
    <img src="./../images/select-a-key.png" alt="Select a Key" title="Select a Key"/>
    
    * **Value**: Select an appropriate variable or node as the value. Enter “{{context.” and select the node/variable from the list and then close the braces with “}}”.
    
        Example: `{{context.steps.summarization.output}}`

        <img src="./../images/end-node-success-output.png" alt="Configure End Node" title="Configure End Node"/>

        !!! note

            Adding at least one output variable is required for each end node.

If you want to show multiple outputs or messages, click **Add a Key** to add the key and value details for the same.

### Step 4: Test the Workflow

Finally, test the workflow and fix any issues found. Click the **Run Flow** button at the top-right corner of the workflow builder and follow the onscreen instructions.

!!! failure "Standard Error"

    When the value for the output variable is not defined, a list of unresolved outputs is displayed.


# Export a Workflow

AI for Process offers the ability to export specific workflow versions from your account as self-contained packages for data preservation and sharing. This feature also allows users to transfer workflow configurations without compromising the integrity and security of the workflow setup.

When you export a workflow, AI for Process automatically creates a *.zip* file named after the workflow. For example, if the workflow is named "*Banking Assistant*," the exported file will be "*Banking Assistant.zip*". You can save this folder in the desired location on your local machine.

The exported package can be reimported to create a new workflow or add it as a version to an existing one, ensuring seamless restoration.

The [exported package](#exported-information) preserves the following workflow configurations within JSON files:

* Name and description
* API, Condition, AI, and Script node configurations
* Input/output variables and scanners
* Environment variables
* Sync/Async setup

To maintain security, sensitive information such as **API keys**, **sharing permissions**, **workflow endpoint**, and **audit logs** are excluded from the exported package.

<Note>Users with only <b>Viewer</b> permissions can't export an workflow.</Note>

## Steps to Export a Workflow

To export an workflow's version, follow the steps below:

1. Log in to your AI for Process account.
2. Select the workflow you want to export. The Workflow flow page is displayed. 
3. Click **Configurations** on the left navigation menu.
4. Scroll down to the **Export workflow** section. By default, the currently deployed version is selected in the dropdown.
<img src="../images/export-agent.png" alt="export agent" title="export agent"/>

5. To change, click and choose another version from the list.
<img src="../images/choose-another-version.png" alt="change version" title="change version"/>

6. Click the **Export** button.

The export process begins, and a success message is displayed after the workflow validation is completed and the export process finishes.

<img src="../images/agent-export-success.png" alt="export success" title="export success"/>

<Note>Once export begins, the selected version can't be changed.</Note>

## Exported Information

The exported package includes the following JSON files encapsulating the workflow's configuration data:

* ***flow_definition.json***: It includes the workflow's canvas definitions (node definitions) and AI node configurations, including prompts, hyperparameters, and timeout information.
* ***app_definition.json:*** It includes general information about the workflow version and guardrails.
* ***env_variables.json***: It includes the environment variables set for the workflow. [Learn more](../workflows/configure-a-workflow.md).

<img src="../images/exported-files.png" alt="exported files" title="exported files"/>

To view the files, right-click and select **View file**.

<img src="../images/view-exported-file.png" alt="view exported file" title="view exported file"/>

The file information is displayed as follows:

<img src="../images/app-definition-file-example.png" alt="file example" title="file example"/>

<hr />

## Related Links

* [Import a workflow](./import-a-workflow.md) - Create a workflow by importing configurations or add it as a version to an existing workflow.
* [Deploy a workflow](./deploy-a-workflow.md) - Explore synchronous and asynchronous deployment methods for workflow integration.
* [Configure a workflow](./configure-a-workflow.md) - Modify the workflow's details, configure settings, or undeploy and delete it if unused.


# About Workflow

Workflow allows you to build an AI agent using a simple drag-and-drop interface combined with smart code editing. Using workflow, developers can quickly create complex AI agents for various use cases, such as candidate evaluation, banking apps, content generation, and so on.

Every flow consists of an input node, which receives the necessary information or variables, and an output node, which provides the results generated by the flow. Other systems can access these results through an API, as every element in the flow automatically becomes part of a deployable API.

After building the flow, you can test it to ensure the app functions as intended. For example, you can create a workflow for a retail business that collects data on performance, investments, and gross margins. The model can then evaluate key metrics like ROI and provide recommendations for improvement based on the analysis.




# Function Node - Empower Workflows with Custom Code

The Function node is a powerful component that enables you to extend your automation flows with custom business logic and data processing capabilities. By embedding JavaScript or Python code directly into your workflows, you can manipulate variables in ways that preset nodes can't achieve. Configuration options provide you the ability to specify input and output variables and write corresponding execution code.

## Key Capabilities

* **Custom Script Execution**: Write and execute JavaScript or Python code inline or leverage pre-deployed custom functions.
* **Dynamic Data Processing**: Transform, validate, and manipulate data flowing through your automation.
* **Reusable Functions**: Import and use pre-built functions from your organization's script library.


## Common Use Cases

* **Data Transformation**: Convert data formats, parse JSON/XML, or restructure information between nodes.
* **Business Logic Implementation**: Apply custom validation rules, calculations, or decision-making logic.
* **Text Processing**: Perform string manipulation, regex operations, or natural language processing.
* **Mathematical Operations**: Execute complex calculations or statistical analysis on your data.


## How It Works

The Function Node integrates seamlessly into your workflows, accepting inputs from previous nodes and passing processed outputs to subsequent nodes. You can either write code directly in the built-in editor or reference custom functions from deployed scripts. The node supports both static and dynamic inputs through context variables, making it adaptable to various automation scenarios.

<img src="./../images/function_node_new.png" alt="Function Node" title="Function Node"/>

In this document, you will learn how to add Function nodes to your flows, configure them with custom code or functions, handle inputs and outputs, and test your implementations.


## Add and Configure a Function Node

Setting up a Function node includes adding it at the appropriate location in the flow and configuring its properties.

Steps to add and configure the node:

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Function Node

* In the flow builder, click the “**+**” icon on any existing node on the canvas and select **Function** from the pop-up menu. 
* Alternatively, drag the **Function** node from the Assets panel onto the canvas.

### Step 3: Configure the Node

Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.  
<img src="./../images/configure-function-node.png" alt="Configure Function Node" title="Configure Function Node"/>

Enter or select the following information:

* **Node Name**: Enter an appropriate name for the node based on its functionality or purpose.

* Select one of the following options to define and execute a function within the node:

    * **Write Code**: Write a custom code in the built-in editor for the function you want to execute. [Learn more](../types-of-nodes/function-node.md#using-write-code).
    * **Custom Function**: Use a custom function from an imported and deployed script. [Learn more](../types-of-nodes/function-node.md#execute-a-custom-function).

    For the above options, you can define a script in JavaScript or Python with specific logic, static or dynamic input arguments, and output values.
    

### Step 4: Add Connections

Click the **Connections** icon in the left navigation and select **Go to Node** for success and failure conditions.

<img src="./../images/function-node-connections.png" alt="Configure Connection Settings" title="Configure Connection Settings"/></ol>

* **On Success** > **Go to Node**: After the current node is successfully executed, go to a selected node in the flow to execute next. For example, you can go to an AI node to use the processed data from the Function node.
* **On Failure** > **Go to Node**: If the execution of the current node fails, go to an appropriate node having a custom error message configured for this node.

### Step 5: Test the Flow

Finally, test the flow and fix any issues found.

!!! failure "Standard Errors"

    You can see compilation and runtime errors, if any, during the execution of the script/node.

## Define and Execute a Function For The Node

The node provides two options to define and execute its function:

### Using Write Code

To write a custom function code from scratch (define its logic and flow), follow the steps below:

1. Select the **Write Code** option and click the **Expand** icon to open the script editor.
<img src="../images/define-a-script-window.png" alt="define a script window" title="define a script window"/>

2. Follow the steps below to complete the process.

    * Select the required coding format in the script editor.
      <img src="../images/select-coding-format.png" alt="coding format" title="coding format"/>

    * Use [these](../types-of-nodes/function-node.md#syntaxes-for-the-context-input) syntaxes to define the code in JavaScript or Python. You can add [static](../types-of-nodes/function-node.md#define-static-input-variables) or [dynamic](../types-of-nodes/function-node.md#define-dynamic-input-variables) input variables in the code to generate the output.
        <img src="../images/dynamic-context.png" alt="dynamic context" title="dynamic context"/>

    * Click <b>Run</b> in the script editor to test the function.
        <img src="../images/run-script.png" alt="run script" title="run script"/>
    
    The script editor has the following tabs representing the code components:

    <ul><li><b>Context Input</b>: Displays the context input(s) fetched from the <b>Start</b> node or the static inputs in the code.</li>
    <img src="../images/context-ip.png" alt="context input" title="context input"/></ul>
    <ul><li><b>Context Output</b>: Displays the output generated by the script.</li>
    <img src="../images/context-output.png" alt="context output" title="context output"/></ul>
    <ul><li><b>Log</b>: Displays the code execution log, including the output or error(s).</li>
    <img src="../images/logs.png" alt="logs" title="logs"/></ul>

#### Using Static or Dynamic Values in the Script

##### Define Static Input Variables

1. In the script editor, select the coding format from the dropdown.
2. Define the input variables and their values as shown below.
<img src="../images/static-code.png" alt="static code" title="static code"/>

##### Define Dynamic Input Variables

1. In the script editor, select the coding format from the dropdown.
2. Define the input variables and define dynamic values using context variables in the [defined format](../types-of-nodes/function-node.md#context-variables-for-dynamic-inputs), as shown below.

**JavaScript**

<img src="../images/dynamic-inputs-js.png" alt="dynamic inputs js" title="dynamic inputs js"/>

**Python**

<img src="../images/dynamic-inputs-python.png" alt="dynamic inputs py" title="dynamic inputs py"/>

#### Context Variables for Dynamic Inputs

Before you [run the flow](#step-3-run-the-workflow), provide clear instructions for the model to follow by [adding the input variable(s)](#dynamic-inputs) using **context variables**. Context variables allow you to include dynamic values in the script that a node executes to generate its output. The JSON code editor supports both **JavaScript** and **Python** formats.

#### Syntaxes for the Context Input

**JavaScript**

The recommended syntax to fetch dynamic variables using JS in the context input is: `{{context.steps.Start.variable-name}}` 

For example, `context.steps.Start.Q3balance`

**Python**

The recommended syntax to fetch dynamic variables using Python in the context input is: `{{context["steps"]["Start"]["variable-name"]}}` 

For example, `context["steps"]["Start"]["Q3balance"]`

The above syntaxes fetch the variable “*Q3balance*” that you define in the **Start** node. [Learn more](../types-of-nodes/function-node.md#dynamic-inputs).

<!--
### Using Agent Memory in the script

Memory Stores in Agentic Apps enable agents to retain, access, and manipulate information during a session or across sessions. The data stored in memory can be extremely useful for providing context and state persistence within the workflows. The Function node supports accessing agent memory, allowing you to create dynamic, context-aware, and stateful logic directly within the node.

**When to Use**

Some of the common use cases include:

* Retaining and reusing information across different steps in an agent execution.
* Enabling conditional logic based on past user interactions or stored data.
* Sharing data between workflows without explicitly passing it as input parameters.

#### Memory Store Data Format

Data is stored in the memory stores in JSON format and follows the [JSON Schema specification](https://json-schema.org/). Always check the schema of the memory store you are accessing to ensure that your set/get operations match the defined field names and data types.

#### Syntax to Manage Agent Memory in Function Node

1. **Get Content from agent memory**

    Syntax: get_content (memory_store_name, projections Optional)

    * memory_store_name(string): The technical name of the memory store.
    * projections (optional): JSON object specifying the fields to retrieve. If omitted, the entire record is returned.

    Example: To fetch the content of the notes field from a memory store, my-notes, use the following code:

    ```
    STORE_NAME = "my-notes"

    retrieved = memory.get_content( memory_store_name=STORE_NAME, projections= {  note: 1, timestamp: 0  }) 
    ```

2. **Set Contents to Agent Memory**

    Syntax: set_content (memory_store_name, content)

    * memory_store_name(string): The technical name of the memory store.
    * content: Content to be set to the memory store.

	Example: To set a new note to the memory store, my-notes, use the following code:

    ```
	STORE_NAME = "my-notes"

    memory.set_content( memory_store_name=STORE_NAME, content={"note": "Learned about memory services today.", "timestamp": "2025-05-15T10:00:00Z"} )
    ```

3. **Delete Contents of Agent Memory Store**

    Syntax: delete_content (memory_store_name)

    Example: To delete the contents of the memory store, my-notes, use the following code:

    ```
    STORE_NAME = "my-notes"

    memory.delete_content( memory_store_name=STORE_NAME)    
    ```

**Points to Note:**

* Memory stores can be accessed as per their defined scope.
* Use projections to use the memory store efficiently.
* Refer to the schema of the memory store for field names and data types.
* Handle error conditions.

-->

### Execute a Custom Function 

Selecting **Custom Function** invokes a function from an imported and deployed script when running the node flow. The steps to set it up are summarized below:

1. [Step 1: Select a Script](../types-of-nodes/function-node.md#step-1-select-a-script).
2. [Step 2: Select a Function from the Script](../types-of-nodes/function-node.md#step-2-select-a-function-from-the-script).
3. [Step 3: Map the Input Arguments.](../types-of-nodes/function-node.md#step-3-map-input-arguments).
4. [Step 4: Test the Script and Function Configuration](../types-of-nodes/function-node.md#step-4-test-the-script-and-function-configuration).

#### Step 1: Select a Script

To select a custom script deployed in your account, follow the steps below:

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The deployed scripts are listed under <b>Settings</b> > <b>Manage custom scripts</b>. <a href="../../../../../settings/monitoring/monitoring-custom-scripts/" >Learn more</a>.</p>
</div>

1. Select the **Custom function** option for the **Function** node.
2. Select a deployed script from the list to invoke its function by specifying the **Script name**. 
   <img src="../images/select-deployed-script.png" alt="select deployed script" title="select deployed script"/>

   If no scripts are deployed, the following message is displayed.    

   <img src="../images/no-scripts-deployed.png" alt="no scripts deployed" title="no scripts deployed"/>

To deploy a custom script, follow the steps below:

* Click **Deploy custom scripts**.
* The system navigates to the **Settings** > **Manage custom scripts** page.
* Follow the steps mentioned [here](../../../settings/manage-custom-scripts/custom-scripts.md#import-and-deploy-a-custom-script) to deploy a custom script.

   Once an existing or new script is deployed (after a project is imported), it appears in the **Script name** list for the **Function** node.

#### Step 2: Select a Function from the Script

To select a function the node must execute, follow the steps below:

1.  Choose the function the node should invoke from the list for **Function name**.
    <img src="../images/select-function.png" alt="select function" title="select function"/> 

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p><ul><li>All the functions defined in the main file are automatically listed in the dropdown.</li>
    <li>Only one function can be selected at a time.</li>
    <li>Functions from undeployed or draft script versions cannot be selected. Only deployed scripts are supported.</li>
    <li>You can look up a specific function using the <b>search</b> option.</li>
    <img src="../images/search-function.png" alt="search function" title="search function"/></ul></p>
    </div>
 
When you select a function, the **Input Arguments** section appears. Arguments are automatically detected from the script and filled in the UI for you if specified in the function. If not, you must add values for each input parameter defined in the function, as discussed below.

#### Step 3: Map Input Arguments

The next step is to map input arguments of the selected function to static or dynamic values based on the selected data type, as discussed below.

<Note>By default, all arguments passed to the function are currently sent as 'string'. If your function requires other data types, please select the required type from the data type dropdown list in the <b>Input Arguments</b> section. The supported types include <i>String</i>, <i>Number</i>, <i>JSON</i>, and <i>Boolean</i> </Note>

   <img src="../images/data-type-dropdown.png" alt="select data type" title="select data type"/>

**Key Considerations**

* Input parameters of the function in the script’s main file are automatically detected and displayed as fields in the UI.
* You must select the correct data type for the argument from the dropdown, based on its function definition. If the chosen data type does not match, a data mismatch error will occur.
* You can assign either static or dynamic values to the input fields using context variables. These values are validated against the selected data type to detect any mismatches. Use the format mentioned here for dynamic values.

    **Static values**

    Type the values in the text field.

    <img src="../images/static-values.png" alt="static values" title="static values"/>

    **Dynamic Values**

    To map dynamic values, type the context object format and select the appropriate variable(s) from the suggestions, as shown in the example below. 
    <img src="../images/map-dynamic-values.png" alt="dynamic values" title="dynamic values"/>

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p><ul><li>When double curly braces “<code>{{</code>“ are typed in the value field, suggestions for context objects appear.</li>
    <li>These suggestions list all context objects available for the flow in a list.</li>
    <li>You can also search from the list to select.</li>
    <li>The <b>Add</b> button lets you dynamically pass arguments to your function. The coding language must support additional arguments, and these should be defined at the function parameter level. If the function doesn't support additional arguments, the operation may fail.</li></ul></p>
    </div>

* Input argument mapping is required for deployment. You can test the function and workflow, but you cannot deploy until the mapping errors shown below are fixed. 
 <img src="../images/input-validation.png" alt="input validation error" title="input validation error"/>
 
#### Step 4: Test the Script and Function Configuration

To test the custom function configuration, follow these steps:

1. Click the **Test** button in the **General Settings** panel.
   
     <img src="../images/click-test-button.png" alt="click test" title="click test"/>

<ol start="2"><li>In the <b>Input</b> panel, enter values to test the code. Configured values appear by default, but you can edit or reset them as needed.</li>
<li>Click <b>Execute</b> to run the function with the configured input arguments.</li></ol>


### Results Panel

In this example, for a Banking workflow, the `appendCustomerName` function from the `GenerateFullName` script is executed with `firstName` and `lastName` as input arguments. The function combines them to generate the full name. After execution, the following details appear in the Results panel:

**Input**

All the configured input parameters and their values are displayed in this section.

**Edit Input**

To edit inputs for the function and re-execute tests, click **Edit input**.
<img src="../images/edit-input.png" alt="edit input" title="edit input"/>
 
**Output**

From the Output API response, the **result** (of the function code) and **function run ID keys** from the container are shown in this section. The time taken to generate the output is also displayed. 

Click the **Copy** icon to copy the output.

**Success Scenario** 

<img src="../images/success-scenario.png" alt="success scenario" title="success scenario"/>


**Error Scenario**

<img src="../images/error-scenario.png" alt="error scenario" title="error scenario"/>

**Key Considerations**

* Successful API calls return output values from the script.
* The function’s **result key** value from the script is saved to the function node’s output (End node) as <code>{{context.steps.functionnodename.output}}</code>.
* Errors are displayed in the panel if an API request fails. The error logs are also displayed.
<img src="../images/function-error-logs.png" alt="error logs" title="error logs"/>

* The function’s **error/stderr** value from the script is saved to the function node’s output (End node) as <code>{{context.steps.functionnodename.error}}</code>.

**Logs**

The **Logs** section displays success and error logs from function execution to support debugging.

Values under the `stdout` and `stderr` keys are shown here.
<img src="../images/logs-screen.png" alt="logs screen" title="logs screen"/>

After testing the custom function, the final step is to run and test the complete flow. [Learn more](../types-of-nodes/function-node.md#test-the-node-flow).

## Test the Node Flow 

After adding and configuring the node as mentioned [here](../types-of-nodes/function-node.md#add-and-configure-a-function-node), follow the steps below to test the flow:

### Step 1: Add Static or Dynamic Inputs

### Static Inputs

To run the flow for static inputs, follow the steps below:

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>In this case, you do not need to add input variables using the <b>Start</b> node.</p>
</div>

1. Manually enter the required static input arguments and their values in the script editor. [Learn more](../types-of-nodes/function-node.md#define-static-input-variables).
2. Click the **Run Flow** button at the top-right corner of the flow builder.

### Dynamic Inputs

To run the flow for dynamic inputs, follow the steps below:

1. Click the **Input** tab of the **Start** node, and click **Add Input Variable** to configure the input for the flow’s test run. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-input-variables).

<img src="../images/add-input-variable-button.png" alt="add input variable" title="add input variable"/>

<ol start="2"><li>Add the <b>Name(key)</b> value, select the data type for <b>Type</b>, and provide a description in the <b>Enter input variable</b> window. For example, in the banking flow, to get the sum of two balances, one in Q3 and the other in Q4, you must define two input variables, “<i>Q3balance</i>” and “<i>Q4balance</i>,” as shown below.
<img src="../images/add-input-vars-function-node.png" alt="add input var" title="add input var"/></li>
<li>Click <b>Save</b>.</li></ol>

Once you define the input variables, you must [add the output variable(s)](../types-of-nodes/function-node.md#step-2-add-the-output-variable) and [run the flow](#step-3-run-the-workflow).

<div class="admonition note">
<p class="admonition-title">Important</p>
<p><ul><li>You can use the <b>Start</b> node’s input variables as context variables in the script editor to accept dynamic values and generate the output. To refer to the input variable, follow the syntax mentioned <a href="#syntaxes-for-the-context-input" >here</a>.</li>
<li>Once you run the node’s flow, the result gets stored in the output variable of the <b>Start</b> node. Additionally, this key is mapped to the <b>End</b> node, where you can define its value.</li>
<img src="../images/output-variable-start-node.png" alt="end node key" title="end node key"/></ul></p></div>

### Step 2: Add the Output Variable

To define the output variable, follow the steps below:

<ol><li>Select the <b>Start</b> node and click the <b>Output</b> tab.</li>
<img src="../images/output-tab.png" alt="output tab" title="output tab"/></ol>
<ol start="2"><li>Click <b>Add Output Variable</b>.</li>
<li>Enter the value for <b>Name (key)</b> and select the data type for <b>Type</b>.</li>
<li>Click <b>Save</b>.</li>
<img src="../images/save-output-variable-window.png" alt="save output variable" title="save output variable"/></ol>

### Step 3: Run the Workflow

To run and test the workflow, follow the steps below:

1. Click the **Run Flow** button at the top-right corner of the flow builder.
<img src="../images/run-flow-function-node.png" alt="run flow" title="run flow"/>  

2. (Optional) Provide input to test the flow if you have configured it in the **Start** node. Otherwise, go directly to the next step.
3. Click **Generate Output**.

    <img src="../images/generate-output-function-node.png" alt="generate output" title="generate output"/>  


The **Debug** window generates the flow log and results for the given input(s), as shown below. [Learn more](../perform-other-actions-on-the-flow-builder/run-the-flow.md) about running the workflow. 

<img src="../images/debug-log-function-node.png" alt="debug log" title="debug log"/>  

## Access the Function Node’s Output

The node’s output is stored in a context variable. You can access the variable using the syntax: 
`{{context.steps.FunctionNodeName.output}`

For example, <code><em>context.steps.Bankingnode.output</em></code>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>AI for Process can automatically recognize variables and outputs. To do so, type "<code>context.steps.</code>" and you will see the available variables, nodes, and node outputs.</p>
</div>

## Import, Export, and Share a Workflow with Function Node

**Import a Workflow**

When you import a workflow, a *.zip* package is imported from your local system with the flow definition, app definition, and environment variables JSON files from another environment. [Learn more](../../import-a-workflow.md).

If the workflow contains a Function node, its configuration is automatically fetched and populated in the new environment (workflows automation) where the workflow is being imported.

### Script Linking Behavior

* If the same script is already deployed in the new environment, the Function node is automatically linked (auto-linking). 

* If the script isn't deployed, validation errors are shown to help identify missing or unresolved scripts.

   <img src="../images/import-validation.png" alt="import validation" title="import validation"/> 

**Export a Workflow**

When you export a workflow that contains a Function node, its configuration should be available in the `callflow.json` file within the exported package. [Learn more](../../export-a-workflow.md).

The following confirmation window is displayed before the export begins.

<img src="../images/export-checklist.png" alt="debug log" title="debug log"/> 

Do one of the following:

* If you’re unsure, click **Let me check**.
* If all necessary components such as AI models, linked workflows, and custom scripts or functions are already in place, click **Yes, I will take care**.

**Share a workflow**

When you share a workflow with another user within the same account, all configurations of the Function node are retained and available to the recipient as well.

## Related Links

* **Supported Libraries** - [Learn more](../types-of-nodes/script-libraries.md) about the list of supported libraries in the script editor of the Function node.

﻿# Human Node – Pause for Review and Approval

The Human Node introduces a human-in-the-loop capability within automation workflows. It allows workflows to pause and incorporate human judgment into automated processes. Designated users can review, approve, or provide input before the workflow continues, ensuring critical steps are validated, decisions are accurate, and compliance requirements are met. This capability is especially useful when certain decisions cannot be automated and require manual validation, oversight, or confirmation.

## Key Capabilities

* Customizable Input Requests – Send approval requests with fields tailored to collect the exact information or decision required from reviewers.
* Timeout Handling – Define how the workflow behaves if no response is received within the specified time (for example, *Terminate* or *Skip and Continue*).
* Error Handling – Configure what happens if the request fails to send or an unexpected error occurs during execution.
* Inbox Integration – All Human-in-the-Loop (HITL) approval requests are routed automatically to the reviewers’ Inbox (Personal or Group tab) for action and tracking. [Learn more](../../inbox.md).

## Common Use Cases

* Approval Workflows – Route requests for manager approval (e.g., expenses, leave, procurement).
* Quality Assurance – Insert a human checkpoint to validate AI-generated or automated outputs before publishing.
* Compliance Checks – Require manual review for sensitive or regulated steps.
* Exception Handling – Escalate unusual or edge cases to a reviewer for decision-making.

## How it Works

The Human Node serves as a flexible pause point within an automated workflow, enabling seamless integration of human decisions. When the workflow reaches this node, it sends an approval request to the assigned user’s Inbox.

The execution behavior depends on the workflow’s endpoint configuration:

* In Sync mode,  the workflow starts, sends the request to the human, waits for the human’s input, and generates the output — all within the timeout set at the endpoint.
* In Async mode,  the workflow sends an immediate acknowledgement and continues execution. The Human node automatically delivers the approval request to the configured reviewer through the platform’s Inbox. The workflow continues once the reviewer responds or the configured timeout is reached.

Built-in mechanisms handle timeouts, duplicate or late responses, and delivery failures to ensure the workflow progresses as configured. This provides visibility and traceability into decisions through the Debug Panel without disrupting the overall flow.

In this document, you’ll learn how to add a Human node to your canvas, configure approval requests for reviewers, define input fields, and customize timeout and error-handling behavior within the workflow.

## Add and Configure a Human Node

The Human node introduces a manual review checkpoint within a workflow. When the workflow reaches this node, it sends an approval request to the designated reviewers and then resumes execution based on the response/timeout/failure condition.

**Before you begin**

Open your workflow and add the Human node to the canvas. [Learn more about adding nodes](../manage-flow-nodes.md#add-nodes).

**Steps to configure a Human node**:

Click the Human node to open its properties dialog box. You can rename the node (for example, ManagerApproval, QualityCheck) or add a description to provide context. 

### 1. Select Request Destination

The **Send & wait for response** field specifies where the request will be sent for human review.

* Select **Account Inbox** as the destination.
* Choose one of the following options:
    * **Everyone:** Send the approval request to all workspace members.
    * **Specific Users:** Restrict the request to selected users. Enter their email addresses in the **Select User (email)** field. Only members within the current workspace are suggested.
* When the flow execution reaches the Human node, an approval request is automatically sent to the reviewer’s **Inbox**.

For details on how to view, assign, and act on approval requests, see **[Inbox](../../inbox.md)**. 

<img src="../images/workflow_everyone.png" alt="Human Node" title="Human Node"/>

### 2. Configure the Review Note

Define how the request will appear to the reviewer:

* **Subject line** - Email subject or message title.
* **Message body** - Instructions or context for the reviewer. The context is resolved at run-time.

<img src="../images/workflow_reviewnote.png" alt="Human Node" title="Human Node"/>

### 3. Configure Timeout Behavior

In the Wait for response field, choose how long the node should wait for a response:

* **No timeout** – Workflow waits indefinitely until the reviewer responds.
* **Set timeout** – Default 120 seconds (you can customize the value and unit: seconds, minutes, hours, days).

<img src="../images/workflow_wait for response.png" alt="Human Node" title="Human Node"/>

### 4. Define Node Outcomes

In the **Add Connection** tab, specify how the workflow proceeds after the review step ends.

The Human node supports multiple outcome paths that determine how the workflow proceeds after human input. These paths can now be configured based on reviewer decisions or system conditions.

**Outcome Paths and Behavior**


<table>
  <tr>
   <td><strong>Path</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Trigger Condition</strong>
   </td>
  </tr>
  <tr>
   <td><strong>On Approval</strong>
   </td>
   <td>Workflow continues to the next configured node when the reviewer accepts or approves the request.
<p>
In the <strong>On Approve</strong> field, select the next node in the flow.
   </td>
   <td>The reviewer selects “Accept” or equivalent approval value.
   </td>
  </tr>
  <tr>
   <td><strong>On Decline</strong>
   </td>
   <td>Workflow follows a defined rejection or alternate path when the reviewer declines or rejects the request.
<p>
In the <strong>On Decline</strong> field, select the next node in the flow.
   </td>
   <td>The reviewer selects “Decline” or equivalent rejection value.
   </td>
  </tr>
  <tr>
   <td><strong>On Timeout</strong>
   </td>
   <td>Workflow diverts to the configured timeout path if no response is received within the defined wait period.
<p>
Select one of the options:
<p>
<strong>Terminate flow</strong> (default): Flow ends via the attached End node.
<strong>Skip</strong>: Continue with <code>null/NA</code> output and move to the next configured node.
   </td>
   <td>A timeout occurs before a human response.
   </td>
  </tr>
  <tr>
   <td><strong>On Failure</strong>
   </td>
   <td>Workflow transitions to a distinct error-handling path when an error occurs (for example, a network issue or a delivery failure).
<p>
Select a fallback node to continue execution.
Supports parallel branching.
   </td>
   <td>Request delivery or system error.
   </td>
  </tr>
</table>

Once configured, the Human node pauses workflow execution at the defined step, sends the approval request to the reviewer’s Inbox, and resumes automatically based on the reviewer’s decision or timeout configuration. [Learn more](../../inbox.md)

## Testing the Flow with Inbox Approvals

Once you configure a Human node in a workflow, you can test how approval requests appear and behave in the Inbox during runtime. This validation step ensures that both the workflow logic and Human-in-the-Loop (HITL) interactions work as expected.

**Step 1: Run the Flow**

1. In the Flow Builder, click **Run Flow** to start execution.
2. The **Debug Panel** opens automatically and shows each node’s runtime behavior.
3. When the workflow reaches a Human node, an approval request is automatically generated and sent to the configured reviewers’ Inbox:
    * **Personal tab** – For requests assigned to yourself.
    * **Group tab** – For requests assigned to a set of users or the whole workspace. If the request is sent to a group, users must first assign it to themselves from the **Group** tab before taking action to approve or reject.

[Learn more about Inbox.](../../inbox.md)

**Step 2: Review and Act on the Request**

1. In the platform’s top navigation bar, open the **Inbox**.
2. Locate the new request under the **Pending for Approval** filter.
3. Open the request to view its **subject**, **description**, and **message**.
4. Review the provided details, then click **Approve** or **Decline**. You can optionally add comments before submitting your decision.

Once submitted:

* The request is removed from the pending list.
* Its status updates automatically in both the **Inbox** and **Workflow Monitor**.
* If the request was part of a group, it is marked as completed for all group members. 

**Step 3: Verify Results in Workflow Monitor**

1. Open **Workflow Monitor** from the left navigation menu.
2. Locate your test workflow run.
3. Click the run entry to open detailed execution logs.
4. Confirm that:
    * The Human node shows the correct approval status (Approved, Declined, or Expired).
    * The flow continues along the expected path (for example, Success, Timeout, or Failure).

This confirms that the Human node and Inbox integration are configured correctly.

**Step 4: Validate Reviewer Responses in Context Variables**

When the reviewer responds, the Human node captures the input and makes it available for downstream nodes in the workflow.

You can access this data using context variables:

 `{{context.steps.<NodeName>.output}}`
`

## Notes

* **Inside Loops** – If the Human node is inside a loop, the loop will not move to the next iteration until a human response is received. This ensures each cycle gets explicit approval/input.
* **In Parallel Branches** – When used in parallel branches, the branch merge will wait for the Human node to complete. This prevents the workflow from merging prematurely.


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

The **Image to Text** node integrates smoothly into your workflows by accepting image file URLs and generating descriptive or structured text output for downstream nodes. You can configure the node by selecting a supported model and providing a valid image URL in PNG, JPEG, or JPG format. Use the System Prompt to define the model’s role (for example, insurance evaluator), and the Prompt to specify the task, such as answering a question or extracting details. Prompts support dynamic context variables, enabling flexible, data-driven automation scenarios.

<img src="../images/how-image-to-text-works.png" alt="how image to text works" title="how image to text works"/>

In this document, you will learn how to add the node to your flows, configure it with supported models, define system and user prompts, handle image inputs via URL, and pass the generated responses to downstream nodes for further processing.

## Add and Configure an Image to Text Node

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Before proceeding, you must add an external LLM to your account.</p>
</div>

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows"/>

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Node

* Click the "**+**" icon for **Image to Text** under **AI** in the **Assets** panel. Alternatively, drag the node from the panel onto the canvas. You can also click **AI** in the pop-up menu and click **Image to text**.
  <img src="../images/access-image-to-text-node.png" alt="access node" title="access node"/>

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.
  <img src="../images/properties-panel-open.png" alt="properties panel" title="properties panel"/>

* Enter or select the following **General Settings**:

     * <b>Node Name</b>: Enter an appropriate name for the node. For example, “<i>InsuranceEvaluation</i>.”
     * Select a model from the list of configured models.

       <div class="admonition note">
       <p class="admonition-title">Note</p>
       <p>Only the <b>OpenAI (gpt-4o and gpt-4o-mini)</b> and <b>Anthropic (Claude Sonnet Vision)</b> models are supported.</p>
       </div>

    * Provide the <code>File URL</code> of the public repository where your image file exists or is returned by the Upload File API at the workflow endpoint.

      <div class="admonition note">
      <p class="admonition-title">Key Considerations</p>
      <p><ul><li>The user can provide only one file URL at a time for processing.</li>
      <li>The file source url must be valid for the node to function properly.</li>
      <li>Only PNG, JPEG, and JPG file formats are supported.</li>
      <li>Except for image input handling, the OCR node functions like the existing AI node.</li>
      <li>Sending images and related settings are handled by the File Upload API.</li>
      <li>Image input preprocessing is supported in the following formats:</li>
     <ul><li>Binary, base64-encoded for Anthropic models.</li>
     <li>Both binary, base64-encoded, and image URLs for OpenAI models.</li></ul></p></div>

* <b>System Prompt</b>: System prompts guide the model’s behavior and response style. Enter a system prompt to define its role for your use case. For example: "<i>You are a vehicle insurance assistant that analyzes uploaded vehicle images to assess damage and estimate repair costs in USD</i>."
* <b>Prompt</b>: User prompts define specific questions or requests for the model. Provide clear instructions for the model to follow, using context variables for dynamic inputs in the syntax: <code>{{context.variable_name}}</code>. <b>Example:</b> "<i>Check the image provided for the damaged parts in the car and select what parts are affected from the list below - <code>{{context.parts_list}}</code></i>."</li>
         <img src="../images/configuration-set.png" alt="configurations tab" title="configurations tab"/>

* **Response JSON schema**:  Define a JSON schema for structured responses. This step is optional and depends on the selected model.   
      
    You can define a JSON schema to structure the model's response if the chosen model supports the response format. By default, if no schema is provided, the model will respond with plain text.
       
    Supported JSON schema types include: String, Boolean, Number, Integer, Object, Array, Enum, and anyOf. Ensure the schema follows the standard outlined here: [Defining JSON schema](../perform-other-actions-on-the-flow-builder/defining-json.md). 
    
    If the schema is invalid or mismatched, errors will be logged, and you must resolve them before proceeding.  
    
    For more information about how the model parses the response and separates keys from the content body, see: [Structured Response Parsing and Context Sharing in Workflows](../perform-other-actions-on-the-flow-builder/model_response_parsing.md).

* Click the <b>Connections</b> icon and select the <b>Go to Node</b> for success and failure conditions.
   
     <img src="../images/connections-configuration.png" alt="connections tab" title="connections tab"/>

    * <b>On Success</b> > <b>Go to Node</b>: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.
    * <b>On Failure</b> > <b>Go to Node</b>: If the execution of the current node fails, go to the End node to display any custom error message from the <b>Image to Text</b> node.
    
* Finally, test the flow and fix any issues found. Click the <b>Run Flow</b> button at the top-right corner of the flow builder and follow the onscreen instructions.
<img src="../images/click-run.png" alt="click run" title="click run"/>

!!! Failure "Standard Error"

    When the Model is not selected, the prompt details are not provided, or both, the following error message is displayed: “Proper data needs to be provided in the LLM node”.
    





# Import a Workflow

Using import functionality, you can create a new workflow or add it as a version to an existing workflow in your account. The import process preserves workflow configuration while handling environment variables, errors, and role permissions.

When a workflow is imported, its prompts, properties, and linked workflows with their configurations are carried over. This ensures that the workflow works seamlessly in the new system. Additionally, any models present in the exported workflow — specifically external and open-source models — will be automatically linked and integrated. If any child workflows are missing or there are conflicts, the system will notify you.

Creating a new workflow involves importing a *.zip* package from your local system with the flow definition, app definition, and environment variables JSON files from another environment. During the creation journey, assign the imported workflow a unique name to avoid conflicts with existing workflow. [Learn more](../workflows/import-a-workflow.md#import-a-workflow).

When importing a workflow version to a parent workflow, the imported flow definition becomes the new in-dev version, overriding the flow, app definition, and environment variable files. The previous version is renamed and saved in the list, with optional backup of the current version available.

Once the import is complete, the workflow canvas is updated with the latest configuration changes.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Users with only <b>Viewer</b> permissions can't import a workflow.</p></div>

## Best Practices

* **Export the workflow first**: Always export the current workflow version before importing. This ensures you have all the necessary configurations.

* **Check the environment and load dependencies**: Ensure the new environment is set up with all required dependencies such as models, linked workflows, and other configurations before importing. This helps ensure compatibility and smooth functionality after the import.
    * Verify that the correct model is already available in the new environment.
    * Ensure any linked workflows are already present in the new environment, by the same name as it's preferred for auto linking.
    * Check environment variables and configuration files to prevent any mismatches.

* **Import the parent workflow and version**: After verifying the dependencies in the new environment, import the parent workflow and any associated versions. Ensure there are no conflicts with existing workflows.

## Import a Workflow 

To initiate a workflow creation journey through the import functionality, follow these steps:

1. Log in → In AI for Process Modules top menu → Click **Workflows**.

    <img src="../workflow-builder/types-of-nodes/images/access-workflows.png" alt="access workflows" title="access workflows"/>

2. Do one of the following based on your requirements:

<ul><li>If you don't have any existing workflows and want to create one by importing from another environment, click <b>Import a workflow</b>.
<img src="../workflow-builder/types-of-nodes/images/import-a-workflow.png" alt="Import a workflow" title="Import a workflow"/></li>
<li>If you already have workflows deployed, the following page is displayed. To import a workflow, select the relevant tab on the <b>Workflows</b> dashboard and click <b>Import a workflow</b>.
<img src="../workflow-builder/types-of-nodes/images/workflow-dashboard.png" alt="Workflow dashboard" title="Workflow dashboard"/></li></ul>

<ol start="4"><li>In the <b>Import workflow</b> window, providing the following information is mandatory.</li>
<ul><li><b>Workflow Name</b>: Provide a unique workflow name.</li>
<li><b>Flow definition file</b>: Upload the required <b>flow_definition.json</b> file from your local directory. The file includes the workflow's canvas definitions (node definitions) and AI node configurations, including prompts, hyperparameters, and timeout information.</li></ul></ol>

Providing the following information is optional:

* **App definition file**: Upload the required **app_definition.json** file, which includes general information about the workflow version and guardrails
* **Environment variable file**: Upload the required **env_variables.json** file, which includes the environment variables set for the workflow. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The <b>Import</b> button is enabled when the required information is provided.</li>
<li>AI node models and guardrail configurations may not be available in the current account. Reconfigure them before running the workflow.</li>
<li>The model name from the original workflow is imported as a placeholder into the AI node's <b>Select Model</b> field. Later, you can assign a value from the available options.</li>
<li>The values for <b>System Prompt</b>, <b>Prompt</b>, <b>Timeout</b>, and <b>Hyperparameters</b> are imported for the AI node.</li></ul></p></div>

<ol start="5"><li>Click <b>Import</b>.</li>
<img src="../workflow-builder/types-of-nodes/images/workflow_instructions.png" alt="click import" title="click import"/>
</ol>

Once the import is complete, the system will redirect you to the **Workflow** page, where you can access the new workflow's canvas by clicking **Go to flow**.
<img src="../workflow-builder/types-of-nodes/images/go-to-flow.png" alt="tool flow page" title="tool flow page"/>

The imported workflow is listed under **All Workflows** and **My Workflows** on the **Workflow** dashboard.


<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The status of the imported workflow is set to <b>In Development</b>.</li>
<li>The node types, workflow descriptions, input and output variables, scanners, and sync/async setup are kept intact during the import.</li>
<li>If the AI node's model doesn't match any available models in the current account, the model field is kept empty, but all prompt definitions are imported.</li>
<li>API keys are't transferred during the import process.</li>
<li>The imported workflow can't be shared with other users.</li></p></div>

**Failure Scenarios**

The import may fail due to an incompatible workflow version, a corrupt file, an internal error, or missing guardrails in the current account, triggering an error notification.

## Import Workflow as a Version

Use the **Import** functionality under **Workflows** > **Configurations** to add a workflow as a version of a parent workflow, replacing the existing one. You should back up the current in-development version to preserve its configuration definitions. The export file is saved as '<code>Exported_<i>Workflow Name</i>.zip</code>.’

When you import an workflow as a version, you must upload all the following files:

* **Flow definition file**: Upload the required **flow_definition.json** file from your local directory. The file includes the workflow's canvas definitions (node definitions) and AI node configurations, including prompts, hyperparameters, and timeout information.
* **App definition file**: Upload the required **app_definition.json** file, which includes general information about the workflow version and guardrails.
* **Environment variable file**: Upload the required **env_variables.json** file, which includes the environment variables set for the workflow. Any conflicts between environment variables in the parent workflow and the imported version must be resolved. [Learn more](./configure-a-workflow.md#manage-environment-variables).

### Steps to Import a Workflow

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>To import a workflow as a version, the parent workflows must be deployed in your account.</p></div>

To import a workflow as a version, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Workflows**.

2. Click the **Workflows** tab on the top navigation bar, and select the workflow you want to import. 
3. Click **Configurations** on the left menu.
4. Scroll down to the **Import a workflow** section and click **Import**.
    <img src="../workflow-builder/types-of-nodes/images/import-a-workflow-canvas.png" alt="import a workflow" title="import a workflow"/>

5. (Optional) In the following dialog, select the **Back up your current workflow** option to preserve the data of the version being replaced.

    <img src="../workflow-builder/types-of-nodes/images/backup-workflow.png" alt="import confirmation" title="import confirmation"/>

**NOTE**

Backing up automatically exports and saves the .zip package of the workflow definition files to the designated location when the import is initiated. [Learn more](export-a-workflow.md).

If you choose not to back up/export the workflow configurations, unselect the back-up option and proceed to the next step.

<ol start="6"><li>Click <b>Import</b> in the confirmation dialog.</li>
<li>In the <b>Import WOrkflow</b> window, upload the required JSON files and click <b>Import</b>.</li></ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><i>Workflow Name</i> is't required since the current version’s name is assigned.</p></div>

The imported workflow is validated, and if no errors exist, the workflow is imported successfully.

The imported version is added under the parent workflow.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The status of the parent workflow is set to "<b>In Development</b>.”</li>
<li><b>Updated on</b> reflects the date the version was imported.</li></ul></p></div>

### Conflicting Environment Variables

When importing environment variables during workflow version import, conflicts may arise between those of the parent workflow and the imported version. If neither workflow has environment variables, no conflicts occur.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>Verify the environment variables before importing. For conflicting values, the existing ones are retained if not changed.</p></div>

You must resolve conflicting variables by either keeping the existing value (of the version being replaced) or replacing them (with values from the imported workflow) to ensure a smooth import process.

When conflicting environment variables are detected, it displays the following window. To resolve conflicts, follow the steps below:

1. Select the **Conflicting variables** tab.
2. Select either **Overwrite** to replace the existing variable with the imported one or select **Keep existing**.
3. Click **Proceed** to continue importing.
<img src="../images/agent_platform/overwrite-or-keep.png" alt="import tool" title="import tool"/>

**Editing Existing and Imported Variables**

To resolve conflicts by editing either the existing or imported environment variables, select the relevant tab in the **Edit Environment Variable** window and follow the steps provided.

1. Click the **Three-dots (Ellipsis)** icon of the required variable.
2. Select **Edit**.  
<img src="../images/agent_platform/edit-env-variable.png" alt="edit variable" title="edit variable"/>   

3. Change the required values in the **Edit Variable** window.  
4. Click **Save**.  
<img src="../images/agent_platform/save-edit-variable.png" alt="save variable" title="save variable"/>  

To cancel the import process during the conflicting environment variables resolution, click **Cancel** in the **Edit Environment Variable** window, and then click **Confirm**.

## Related Links

* [Create a Workflow](create-a-workflow.md)- Create a new workflow and configure its flow.
* [Export a Workflow](export-a-workflow.md)- Export the set configurations of a workflow for data sharing and preservation.
* [Deploy a Workflow](deploy-a-workflow.md)- Explore synchronous and asynchronous deployment methods for workflow integration.
* [Configure a Workflow](configure-a-workflow.md)- Modify the workflow's details, configure settings, or undeploy and delete it if unused.

# Inbox – Review Human-in-the-Loop Workflow Requests

The Inbox is a dedicated tab in the platform for managing Human-in-the-Loop (HITL) approval requests. It provides a centralized, easy-to-use interface that lets users view, process, and track all requests that require human decision-making during workflow execution.

When a workflow reaches a Human node, an approval request automatically appears in the configured reviewers’ Inbox — either in their Personal tab or in the shared Group tab — depending on how the node is configured.

**Key Highlights**

* Centralized review experience to manage all pending and processed approval requests in one place.
* Real-time status updates that reflect reviewer actions in real time.
* Support for both individual and shared (group-based) review workflows.
* Advanced filtering and search options to quickly locate requests by requester, status, or keyword.
* Integrated workflow linkage with direct visibility into progress in Workflow Monitor. 

## Accessing the Inbox

1. Log in to your AI for Process account.
2. In the top navigation bar, select **Inbox**.
3. The Inbox shows approval requests in the following tabs:

    * **Personal** – Displays approval requests assigned to you.
    * **Group** – Displays requests assigned to a team or group. You can assign a request to yourself to take ownership.

4. You can filter requests by Status: **Pending for Approval** (default), **Approved**, **Declined**, and **Expired**.
<img src="../workflow-builder/types-of-nodes/images/inbox.png" alt="Inbox" title="Inbox"/>


## Respond to Requests

1. On the **Inbox** tab, open the **Personal** tab.
2. Select a request to open its detailed view. You see:
    1. **Subject** – Title or summary of the approval request.
    2. **Description** – Additional details or context about the workflow step.
    3. **Message** – Instructions or notes provided by the workflow creator.
3. Click **Approve** or **Decline** to submit your decision.
4. *(Optional)* Add comments in the **Response** field to explain your choice or provide feedback.

After you submit your decision, the request is automatically removed from the pending list. Its status updates in real time in both the **Inbox** and **Workflow Monitor**.

## View Completed Requests

You can review previously processed requests to verify the outcome of your past actions.

1. On the Personal tab, use the **Status** filter to select **Approved**, **Declined**, or **Expired**.
2. Each completed request displays the final status, the user who took action, and the timestamp.
3. Click any completed request to view its details and verify the outcome of your previous actions.

## Handle Group Requests

Requests assigned to a group appear in the Group tab. Any member of the group can view these requests, but only one reviewer can act on each item.

To respond to a group request:

1. Open the **Group** tab and locate the pending request.
2. Assign the request to yourself. Once claimed, the request moves to your **Personal** tab.
<img src="../workflow-builder/types-of-nodes/images/inbox_assign.png" alt="Inbox" title="Inbox"/>
3. Open the request from your Personal tab and review its details.
4. Click **Approve** or **Decline**, and optionally add comments to explain your decision.

After you take action, the request is removed from the Unassigned list for all group members. Its status updates automatically in both the **Inbox** and **Workflow Monitor**, and it can be viewed later under the appropriate status filter (such as *Expired*) in either the **Group** or **Personal** tab, depending on your configuration.


# Integration Node – Enhance Workflows with External Services

The **Integration Node** is a powerful and flexible component that acts as a run-time engine for securely connecting to third-party services, enabling seamless data exchange and automation through configured actions and auto-generated JSON. It leverages pre-configured connections and authentication methods to serve as a bridge between your workflow and external platforms, supporting actions such as exporting data from a site or fetching broken back links within your automation without any coding effort.

## Key Capabilities

* **No-Code Service Integration**: Embed prebuilt third-party services or actions into your automation flow without writing any code.
* **Secure Connections**: Leverage tested and authenticated connections to ensure secure data exchange with external services.
* **Flexible Configuration**: Customize the node directly on the Workflow canvas and seamlessly connect it with other nodes to fit your automation needs.


## Common Use Cases

* **CRM & Marketing Automation**: Connect CRM systems with marketing platforms to trigger personalized campaigns based on customer data and behavior, such as automatically launching email sequences when a lead is captured.
* **Workflow Automation**: Automate tasks across apps, such as creating a project task when a support ticket is raised.
* **Payment Gateways**: Securely process online transactions through integrated third-party payment providers.
* **SaaS Integrations**: Enable seamless connections between SaaS workflows (for example, CRM, email marketing, e-commerce) to streamline daily workflows.


## Example Use Case

Let’s consider an example where the **Integration Node** can be used to automate the tracking of broken back links for a website. The workflow begins with a manual input of the target URL via the Start node. The Integration Node connects to a third-party SEO workflow (for example, Ahrefs) and calls an API to fetch back link data filtered for broken links.

Using pre-configured authentication, the request returns a structured response with broken URLs, referring pages, and status codes. This data is then passed to the next node for formatting or further use.

Results can be emailed, mapped to a dashboard, or used to trigger follow-up actions—streamlining SEO monitoring, reducing manual efforts, and enabling quick fixes.

## How It Works

The **Integration Node** integrates seamlessly into your workflows, using configured connections and authentication mechanisms to securely interact with external services. It accepts inputs from previous nodes, executes third-party actions based on the selected service and parameters, and passes results to subsequent nodes. You can configure actions through the UI, use context variables for dynamic inputs, and customize prebuilt JSON code, making it ideal for automating a wide range of integration scenarios.

<img src="../images/how-integration-node-works.png" alt="how integration node works" title="how integration node works"/>

In this document, you will learn how to add Integration Nodes to your workflows, configure them with connections and action parameters, handle inputs and outputs, and test your implementations.

## Prerequisites

* You must add at least one service provider connection before configuring the node by clicking <b>+ Add Connection</b>. The system redirects to <b>Settings</b> -> <b>Integrations</b> page. Follow the steps [here](../../../settings/integrations/about-integrations.md#add-a-connection-to-set-up-integration) to complete the process.
* Always test the selected connection in the <b>Settings</b> console to ensure successful integration. [Learn more](../../../settings/integrations/about-integrations.md#test-connection).

## Add and Configure an Integration Node

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows"/>

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Node

* Click **Integration** > **+ New Integration** in the **Assets** panel. Alternatively, drag the node from the panel onto the canvas. You can also click **Integration** in the pop-up menu.
  <img src="../images/add-int-node.png" alt="add node" title="add node"/>

### Step 3: Configure the Node

* In the **Integration** window, either search for the required service or select from the listed options. [See](../../../settings/integrations/about-integrations.md#supported-integrations) the list of supported pre-built integrations.
   <img src="../images/integrations-list.png" alt="integrations list" title="integrations list"/>

* Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>The node uses the service provider’s name by default. You can rename the node if needed.</p>
    </div>

* Enter or select inputs for the following fields:
     * <b>Node Name</b>: Enter an appropriate name for the node. For example, “<i>Ahrefslinkbuilder</i>” (Only letters and numbers are allowed).
     * <b>Connection Name</b>: Select a connection from the listed options. The list includes all the active connections you have added and configured under <b>Settings</b> > <b>Integrations</b>.
      <img src="../images/select-connection-name.png" alt="select connection" title="select connection"/>

* Click <b>Add Action</b> to add and configure the required actions or tasks from the service provider.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>Only one action can be added and configured at a time.</p>
    </div>

    <img src="../images/add-action-click.png" alt="click add action" title="click add action"/>  

* In the <b>Add Action</b> window, select the required action to be linked to the node.
   <img src="../images/add-action.png" alt="add action" title="add action"/>

* In the action settings window, add inputs for the action fields and click <b>Save</b>. These parameters define how the action is executed for the connection.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>The action parameters vary depending on the specific action and provider. See the tooltip for more information.</p></div>

    <img src="../images/action-parameters.png" alt="action parameters" title="action parameters"/>
     
* The added action is listed in the <b>General Properties</b> window of the node. This action is applied to all the connections available for the provider.
   <img src="../images/integration-gen-properties.png" alt="gen properties" title="gen properties"/>

* Click the <b>Connections</b> icon and select <b>Go to Node</b> for success and failure conditions.
     * <b>On Success</b> > <b>Go to Node</b>: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.
     * <b>On Failure</b> > <b>Go to Node</b>: If the execution of the current node fails, go to the End node to display any custom error message from the AI node.
     <img src="../images/success-failure-flow.png" alt="node flow" title="node flow"/>

    The node connects to the service using the selected connection and performs the configured action when the flow is run.

    The **next step** is to configure and test the flow for the node. [Learn more](./integration-node.md#add-and-configure-an-integration-node).

## Manage Actions

You can either **change** or **edit** an action for an integration. However, you **cannot delete** a configured action directly. To remove an action, you must add a **new node** and configure it with a different action.

### Change Action

To configure a different action, click the **Change Action** button.
<img src="../images/change-action.png" alt="change action" title="change action"/>

Then, select another action in the **Change Action** window.     

<img src="../images/select-action-change.png" alt="select action" title="select action"/>

<div class="admonition warning">
<p class="admonition-title">Caution</p>
<p>If you change or replace the existing action, any configuration changes made to the previous action will be lost.</p>
</div>

The new action replaces the existing one for the connection. Please configure the action parameters for this action to work properly.

### Edit Action

To modify the parameters for an action, follow the steps below:

<ol><li>Click the <b>Edit</b> icon.</li>
<img src="../images/edit-action.png" alt="edit action" title="edit action"/></ol>
<ol start="2"><li>Modify the required values and click <b>Save</b>.</li></ol>

### View the JSON Code

In addition to defining action parameters in the configuration window, you can view the related JSON code.

To access the code, enable the **JSON switch** at the top right of the action configuration window. 

<img src="../images/enable-json.png" alt="enable json" title="enable json"/>

This opens a **code viewer** where you can view the JSON that defines the current action and copy the code. The Integration node executes this action code for the connection when you run the flow. 

<img src="../images/json-code-viewer.png" alt="json code viewer" title="json code viewer"/>

## Test the Flow for the Node

After adding and configuring the node as mentioned [here](./integration-node.md#add-and-configure-an-integration-node), follow the steps below to test the flow.


### Step 1: (Optional) Add Input Variable(s)

* Click the <b>Input</b> tab of the <b>Start</b> node, and click <b>Add Input Variable</b> to configure the input for the flow’s test run. <a href="../../perform-other-actions-on-the-flow-builder/manage-input-and-output/#adding-input-variables" >Learn more</a>
    
    <img src="../images/start-node-io.png" alt="start node io" title="start node io"/>

* In the <b>Enter input variable</b> window, select the appropriate data type for the <b>Type</b> field to define the input variable.
* Click <b>Save</b>.

Add all the required input variables to run the flow in the **Input** section of the **Start** node. 

<img src="../images/add-input-var-integration.png" alt="add input variable" title="add input variable"/>

### Step 2: Add Output Variable(s)

This step is required because the **Start node** must have at least one **output parameter** linked to the node.

* Click the <b>Start</b> node and select the <b>Output</b> tab.
* Click <b>Add Output Variable</b>.
  
    <img src="../images/add-op-var.png" alt="add output variable" title="add output variable"/>

* Enter the value for <b>Name (key)</b> and select <i>String</i> for <b>Type</b>.
* Click <b>Save</b>. <a href="#access-the-nodes-output" >Learn more</a> about accessing the node’s output.
<img src="../images/output-variable.png" alt="op variable" title="op variable"/>

### Step 3: Run the Flow

<div class="admonition note">
<p class="admonition-title">Important</p>
<p>Before running the flow, resolve the workflow errors that appear when you click the <b>Warning</b> icon.</p>
</div>

  <img src="../images/check-errors.png" alt="errors" title="errors"/>

To run and test the flow, follow the steps below:

* Click the **Run Flow** button at the top-right corner of the flow builder. 
    <img src="../images/click-run-flow.png" alt="click run flow" title="click run flow"/>

* (Optional) Add the value for the **Input Variable** if you have configured it to test the flow. Otherwise, go directly to the next step.
* Click **Generate Output**.
   
   <img src="../images/click-generate-op.png" alt="click settings" title="click settings"/>
 

The **Debug** window generates the flow log and output from the inputs provided. [Learn more](../perform-other-actions-on-the-flow-builder/run-the-flow.md) about running the workflow.

## Access the Node’s Output

The node’s output is stored in a context variable. You can access the variable using the following syntax: `{{context.steps.IntegrationNodeName.output}}`

<div class="admonition note">
<p class="admonition-title">Important</p>
<p>AI for Process can automatically recognize variables and outputs. To do so, type "<code>context.steps.</code>" and you will see available variables and nodes, including the nodes' outputs.</p>
</div>



# Loop Node - Automate Repetitive Tasks in Your Workflow

The Loop node enables you to repeat a set of steps for each item in a list, making it easy to handle tasks such as processing invoices, analyzing documents, or calling an API multiple times. It’s designed to help you automate repetitive actions, one item at a time.

Whether you're working with a fixed list or dynamic data, the Loop node gives you complete control over how each item is handled. You can define what happens inside the loop, choose how to handle errors, and collect all the results in one place- helping improve performance and scalability.

Use the Loop node to build smart, data-driven workflows that adapt to your data and run smoothly at scale.

**Example**

A bank's PR team can use the Loop node to send personalized Christmas greetings to multiple customers automatically. Here’s how the loop works in this case:

* The Function node, inside the loop, extracts and combines each customer's first and last names to create a personalized message.
* The Text-to-Image node, also placed inside the loop, generates a festive greeting image based on a text description prompt.
* These nodes are executed once for each customer in the input list.

By placing the Function and Text-to-Image nodes inside the Loop node, the workflow dynamically generates and sends 200 unique holiday greetings—each with a personalized message and image—in a single workflow execution.

## Key Capabilities

* **Repeat Logic for Arrays**: Execute a set of nodes for each item in an input array.
* **Flexible Node Insertion**: Add any supported node types—such as Function, API, or AI nodes—inside the Loop structure.
* **Custom Output Aggregation**: Collect and store results from each iteration of a specified output field to populate into the node's output array.
* **Configurable Error Handling**: Choose how the loop handles errors during iterations: *Continue on error*, *Remove failed results, or Terminate execution.*
* **Success and Error Paths**: Define distinct downstream logic for successful completion or failure of the loop.
* **Debugging and Inspection**: Visualize loop runs, drill down into each iteration, and trace output and failures for detailed analysis.
* **Workflow Portability**: Loop configuration persists across exports, imports, workflow sharing, and deployment.

## Common Use Cases

* **Batch Processing**: Process multiple records, invoices, or documents in one run—for example, extracting fields from a list of invoices.
* **API Calls on Multiple Inputs**: Loop through a list of customer IDs to fetch data or enrich records using an external API.
* **Bulk Notifications**: Send personalized messages or emails to a list of recipients, such as customers or employees.
* **Conditional Execution**: Perform specific actions for each item based on dynamic conditions— for example, route based on status or priority.
* **Multi-step Approval or Review Flows**: Run data through sequential approval steps for each request or user submission.
* **Report Generation**: Generate individual summaries or PDFs for each customer, product, or team in a dataset.
* **Automated Testing**: Reuse a test flow across different input values or environments.

## How it Works

The Loop node runs a defined set of steps repeatedly—once for each item in an array. It pulls data from a context variable, executes the child nodes placed inside the loop, and collects the outputs into a final array.

You can configure how the loop handles errors during execution and define what should happen when the loop completes successfully or encounters a failure.

<img src="../images/loop_node_flow.png" alt="loop node" title="loop node"/>

In this document, you’ll learn how to add a Loop node to your canvas, place and connect steps inside it, configure input and output variables, and customize error-handling behavior.

## Add and Configure a Loop Node

You can add a Loop node to your canvas to repeat a sequence of child nodes for each item in a list. Once added, you can define the loop input, configure output aggregation, and manage internal logic such as error handling and branching.

The Loop node contains a section or block where you can place supported child nodes to define what happens on each iteration.

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.

* Select your workflow → Click **Go to Flow**.

### Step 2: Add a Loop Node

You can insert a Loop node on the canvas using any of the following methods:

* Assets Panel: Drag the Loop node from the tray to the canvas.
* Bottom Tray: Click the Loop node from the quick access section below the canvas.
* Plus Icon: Click the plus (+) icon when hovering between nodes and select the Loop node from the insert menu.

By default, the Loop node is added in *expanded mode*, allowing you to start building the logic inside immediately.

<img src="../images/loop_node.png" alt="loop node" title="loop node"/>

### Step 3: Add Nodes Inside the Loop

You can define the repeated steps by placing nodes inside the loop structure. Supported methods:

* Click the “+” on the loop start or existing node tiles.
* Use the Connections panel to add new steps.
* Drag and drop nodes into the loop block manually.

You can add any supported child nodes inside the Loop node, including Function Nodes, Text-to-Text AI Nodes, API Nodes, Condition Nodes, and others. Each child node runs once per item in the loop's input list. Use `{{currentItem}}` (or a custom alias if defined) to reference the current iteration item inside these nodes.

<img src="../images/loop_add_nodes_inside.png" alt="loop node" title="loop node"/>

<Note>Only nodes placed inside the loop block will execute per iteration. Nodes connected outside the Loop node will run after the loop completes. </Note>

### Step 4: Configure Loop Node Settings

Click on the Loop node to open its configuration panel. The following options are available:

**1. Loop Inputs & Outputs**

* **Node Name**: Assign a clear, descriptive name to the Loop node to make your workflow easier to understand and maintain.
* **Loop Input Source:** Specify the list or array that the Loop node should iterate over. This input defines the number of times the loop will run. Supported input types include:
    * A context variable (e.g., `context.invoices`)
    * An output field from a previous node
* **Output Field**: Define a variable to store the results from each iteration into the node’s output array (e.g., `context.result`). This output array is available for downstream nodes after the loop completes.

<img src="../images/loop_config_panel.png" alt="loop node config panel" title="loop node config panel"/>

**2. Define Success and Error Paths**

Configure **On Success** and **On Error** paths to control what happens after the loop completes or fails.

* Success Path: Connect to the node(s) that should run once the loop completes successfully. These are placed outside the loop.
* Error Path: Define what should happen if the loop encounters an error. This path is also outside the loop.

**3. Error Handling Options**

Choose how the Loop node should behave when an error occurs during iteration:

* **Continue on error** (default) – The loop executes all iterations. Failed iterations return error objects. The final output array contains both successful results and errors. Execution follows the success path.
* **Terminate execution** – The loop breaks on first failure. Execution follows the failure path with the failed iteration details.
* **Remove failed results** – Extends 'Continue on error' behavior. Failed iterations are filtered out of the final array. Only successful results are returned. Execution follows the success path.

Think of these like array processing methods:

* `continueOnError` = similar to `map()` that retains all results, including errors.
* `terminateOnError` = like throwing an exception that stops everything.
* `filterErrors` = like `map().filter()` that removes the bad ones.

<img src="../images/loop_errors.png" alt="loop errors" title="loop errors"/>

### Step 5: Run Workflow with Loops

Once you’ve added and configured your Loop node, you can run the workflow to see how it executes.

* Click the **Run** button at the top of the canvas to execute the workflow end-to-end.
* A badge on the Loop node (located on the canvas) indicates the number of iterations executed.
* Once complete, the Loop node shows a summary of the total iterations run. This helps you verify that the loop is triggered correctly and gives a quick visual confirmation that all items were processed.

## Check Debug Logs

After running the workflow, use the Debug panel to inspect loop behavior, debug issues in specific iterations, and confirm final outputs.

* The Loop node appears in the Debug panel with key details:
    * Inputs received by the Loop node
    * Per-iteration outputs from child nodes
    * Aggregated results in the output field
    * Any errors encountered during iteration
* Click the icon next to the Loop node in the Debug panel to open the **Loop Runs** view:
    * View a list of all iterations with statuses: *Running*, *Completed*, or *Failed*
    * Failed iterations are marked in red
    * Click on any iteration to view the step-by-step flow and node execution inside it
* Once the loop finishes:
    * The output array is shown in the Output tab
    * The result reflects your selected error-handling option
    * Total execution time is displayed

<img src="../images/loop_debug.png" alt="loop node debug panel" title="loop node debug panel"/>

## Troubleshooting Common Issues

<table>
  <tr>
   <td><strong>Issue</strong>
   </td>
   <td><strong>Cause</strong>
   </td>
   <td><strong>How to Fix</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Loop input is missing or empty</strong>
   </td>
   <td>Input list is undefined or resolves to <code>null</code>/empty
   </td>
   <td>Ensure the Loop Input Source is set to a valid array (e.g., `{{inputs.items}}`). Verify it in the Debug Log.
   </td>
  </tr>
  <tr>
   <td><strong>Child nodes not executing</strong>
   </td>
   <td>Nodes are placed outside the loop container
   </td>
   <td>Only nodes inside the loop container run per iteration. Drag nodes into the loop box on the canvas.
   </td>
  </tr>
  <tr>
   <td><strong>Loop stops when one item fails</strong>
   </td>
   <td>The error handling option could be incorrect.
   </td>
   <td>Change the error handling option to 'Continue on error' to skip failed iterations.
   </td>
  </tr>
  <tr>
   <td><strong>Output variable conflicts</strong>
   </td>
   <td>Output field name is reused elsewhere in the flow
   </td>
   <td>Use a unique name for the Output field to avoid overwriting data.
   </td>
  </tr>
</table>



# Manage Nodes in Workflow

A flow consists of a sequence of nodes connected on the workflow builder canvas. You can easily add nodes to the canvas, connect them, rename, rearrange, and delete them as needed.

The Workflow builder lets you visually design workflows by arranging and connecting nodes on a canvas.

This page covers how to:

* Add, rename, rearrange, and delete nodes
* Connect nodes to define sequential or parallel execution
* Resolve common issues
* Apply best practices for efficient flow design


## Add Nodes

Every new flow begins with a **Start** node, which is automatically placed on the canvas by default. This node acts as the entry point and must be connected to at least one other node to form a valid flow.

To ensure the workflow functions properly, all nodes must be connected—directly or indirectly—to the Start node. If any initial nodes aren't linked to the Start node, the workflow may malfunction or fail to execute as expected. You can drag and drop the Start node (as well as any other nodes) anywhere on the canvas.

You can add nodes to the canvas in three ways:

1. **Drag from the bottom panel**: Scroll through available node types and drag them onto the canvas.
2. **Use the left panel (Assets)**: Select and place pre-configured nodes directly onto the canvas from the left panel.
3. **Use the blue plus icon (+) on a node**: Hover over the grey dot on any node (including Start) to reveal a blue plus icon (+). Select to see options:
    * **Add new node** – Instantly places a new node on the canvas and connects it.
    * **Add existing node** – Allows you to select a previously added node.

  <img src="../images/start_node_new.png" alt="Add a new Node" title="Add a new Node"/>

## Rename Nodes

To rename a node:

1. Right-click the node on the canvas.
2. Select **Rename** from the context menu.
3. In the **Node Name** field of the configuration panel (which appears on the right), enter the new name.

Use clear, descriptive names to make your flow easy to understand. For example, Rename a generic Function Node to something meaningful like Validate Email Input.

<img src="../images/rename_node_new.png" alt="Rename a Node" title="Rename a Node"/>

## Delete Nodes

To delete a node, right-click the node on the canvas and select **Delete** from the context menu.

Deleting a node will also remove its associated connections. Be sure to reconnect any dependent paths to maintain a valid flow.


## Rearrange Nodes

You can rearrange nodes for visual clarity without affecting their logical connections.

To move a node, click and drag the node to the desired location on the canvas.
Only the selected node will move—connected lines will automatically adjust to maintain the connection, while other nodes remain fixed.

<img src="../images/rearrange-a-node-new.gif" alt="Rearrange a Node" title="Rearrange a Node"/>

Optional layout options:

* **Auto Arrange**: Right-click anywhere on the canvas and select **Auto arrange** to automatically reposition all nodes for a cleaner layout.
* **Canvas Display Options**: You can also toggle visual elements by right-clicking the canvas and choosing **Show/Hide UI** or **Show/Hide Grid.**


## Connect Nodes

In Workflow Builder, node connections determine how tasks flow from one node to another — either sequentially or through multiple parallel branches.

You can create and manage connections in the following ways:

* **Canvas-based (visual):** Drag and drop to connect nodes directly on the canvas.
* **Node configuration panel:** Define success and failure paths from within the node’s property panel.

Once the nodes are on the canvas, how you connect them decides how they run. Workflow Builder supports two main execution types:

* **Sequential** – Tasks run one after another, in a defined order.
* **Parallel** – Tasks run simultaneously across separate branches.

These execution patterns define how tasks run across a workflow—either one after another (sequentially) or simultaneously (in parallel)—enabling flexible design for both simple and complex use cases.

### Understanding Execution Structures


<table>
  <tr>
   <td><strong>Feature</strong>
   </td>
   <td><strong>Sequential Execution</strong>
   </td>
   <td><strong>Parallel Execution</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Use When</strong>
   </td>
   <td>
<ul>

<li>Tasks depend on previous steps and must be run one after another.</li>
</ul>
   </td>
   <td>
<ul>

<li>Multiple tasks are independent and can run at the same time.</li>

<li>Speed up workflows with tasks that don't rely on each other's output.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>How It Works</strong>
   </td>
   <td>
<ul>

<li>Execution starts at the Start node.</li>

<li>Each node runs only after the prior node finishes.</li>

<li>The flow moves forward through connected nodes in a top-down or left-to-right sequence.</li>

<li>All paths eventually connect to an End node to mark flow completion.</li>
</ul>
   </td>
   <td>
<ul>

<li>All connected branches from a single node execute at the same time.</li>

<li>Each branch works independently of the others.</li>

<li>You can add up to <strong>10 branches</strong> from a single node.</li>

<li>Each branch continues its own path until it reaches an End node or another connection.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Benefits</strong>
   </td>
   <td>
<ul>

<li>Predictable and controlled execution</li>

<li>Easier debugging and maintenance</li>

<li>Clear task-to-task dependency</li>
</ul>
   </td>
   <td>
<ul>

<li>Reduces total execution time</li>

<li>Boosts performance with simultaneous operations</li>

<li>Enables independent task handling</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Ideal for workflows that require</strong>
   </td>
   <td>
<ul>

<li>Step-by-step task execution</li>

<li>Strict data or logic dependencies</li>

<li>Ordered, linear processing</li>
</ul>
   </td>
   <td>
<ul>

<li>Concurrent task execution</li>

<li>Multi-channel or multi-path logic</li>

<li>Faster processing of unrelated tasks</li>
</ul>
   </td>
  </tr>
</table>


### Designing Sequential Flows

In a sequential structure, nodes execute one after another in a defined order. Each node begins only after the previous one finishes, making this structure ideal when tasks are interdependent.

*Example Scenario: Lead Qualification Flow*
A sales assistant agent uses a sequential pattern to assess and score leads. First, it fetches CRM data, then analyzes engagement history, and finally generates a lead score—all in order. Each task depends on the output of the previous one.
 
**Steps to create a sequential connection:**

**Option 1: Drag-to-Connect**

1. Hover over the **blue + icon** or **grey connector dot** on the source node.
2. Select and **drag a line** to the destination node.
3. A connection line is drawn between the nodes, with an arrow indicating the direction of the node connection.

<img src="../images/connect-nodes-new.gif" alt="Connect Nodes" title="Connect Nodes"/>

**Option 2: Use the Blue + Icon**

1. Hover over the existing node, select the **blue + icon,** and then choose **Add New** or **Add Existing**.
The selected node is added and connected in sequence.

<img src="../images/blue_plus_icon.png" alt="Blue plus icon" title="Blue plus icon"/>

**Option 3: Use the Connections Panel**

1. Select on the node to open the **Configuration Panel** on the right.
2. Go to the **Connections** tab.
3. Under **On Success** or **On Failure**, use the dropdown to:
    * Add a new node.
    * Connect to an existing, unused node.
4. A sequential connection is automatically created and reflected on the canvas.

<img src="../images/sequential_connection.png" alt="Sequential connection" title="Sequential connection"/>

**Key Considerations**

* All paths should converge at an End Node.
* Sequential chains are typically arranged from left to right for clarity.
* On the canvas, sequential connections are shown with single, linear paths.
* Node interactions—such as hover, select, or drag—will always result in downstream execution behavior.
* Logs display outputs in the exact order in which nodes are triggered, making it easier to debug or validate the logic.
* Only one connection can exist per outcome (On Success or On Failure) in a sequential flow. Any additional connections will be treated as parallel branches.

### Designing Parallel Flows

In a parallel flow, multiple branches run at the same time from the same parent node. Each branch can perform an independent task, allowing for faster, more efficient workflows—especially when tasks don't rely on each other.

Workflow Builder supports parallel execution to help you build faster and more flexible workflows—great for multi-channel actions, or when several tasks need to happen at once.

*Example Scenario: Content Distribution Flow*
In a marketing automation workflow, once a campaign is approved, the workflow triggers multiple parallel nodes to publish content to LinkedIn, Twitter, and Email. Each platform-specific task runs independently but starts simultaneously.

**Parallel Design Patterns**

Workflow Builder supports several ways to structure parallel logic, depending on how your tasks are organized:

* **Simple Parallel**
A single node branches out to multiple child nodes, each running independently.
*Use this when tasks can occur simultaneously without any dependencies.*

<img src="../images/simple_parallel.png" alt="Simple parallel" title="Simple parallel"/>

* **Nested Parallel**
A parallel branch contains its own parallel branches. 
*Useful for multi-step logic where each level does independent work.

<img src="../images/nested_parallel.png" alt="Nested parallel" title="Nested parallel"/>

* **Conditional + Parallel**
Combine condition nodes with parallel execution. Based on logic (for example: if/else), different sets of parallel branches are triggered.
*Example: If status is "new", run onboarding tasks in parallel. If "existing", skip them.*

<img src="../images/conditional_parallel.png" alt="Conditional parallel" title="Conditional parallel"/>

**Steps to create a parallel connection:**

You can design parallel execution using either the Canvas or the Connections Panel.

**Option 1: Use the Blue + Icon on the canvas**

1. Hover over the existing node and click the blue + icon.
2. Select one of the following options to add multiple nodes as parallel branches:
    1. **Add new**: Creates and connects a new node as a parallel path.
    2. **Add existing**: Selects from already defined nodes that aren't part of the current branch.

The selected node is added, and a connection line is automatically drawn between the nodes.

<img src="../images/blue_icon_parallel.png" alt="Blue icon" title="Blue icon"/>


**Option 2: Drag-to-Connect on the canvas**

1. Hover over the blue + icon or grey connector dot on the source node.
2. Click and drag a line from the source node to another node on the canvas.
3. A connection line is drawn between the nodes, with an arrow indicating the direction of the node connection. 
4. To form a fork for parallel execution, repeat the process by adding and connecting more nodes from the same parent.

<img src="../images/parallel_dragtoconnect.png" alt="Drag to connect" title="Drag to connect"/>


**Option 3: Use the Connections Panel**

1. Click the node to open the Configuration Panel on the right.
2. Go to the Connections tab.
3. Use the **On Success** or **On Failure** dropdowns to add multiple nodes.
Nodes that are already connected will be disabled.
4. Click **+ Parallel Node** to add more branches.
5. As soon as you select a node, it’s added as a parallel path. A connection line appears on the canvas to reflect the update.

<img src="../images/parallel_connections_panel.png" alt="Drag to connect" title="Drag to connect"/>



!!! important

    * **Max Outgoing Connections**: You can create up to **10 outgoing connections** from a single node. After that, new connection options are disabled.
    * **No Duplicate Connections**: You can’t connect the same node more than once from the same parent. The system automatically prevents duplicate connections from a single branch.
    * **No Backward Loops**: You cannot connect a node to another node that appears earlier in the flow. The system blocks such connections and displays an error message to prevent unintended logic cycles and ensure stable, predictable flow execution. Existing deployed flows with backward connections will continue to run, but exporting and re-importing them will cause execution to break, as backward loops are no longer supported in the current Flow Builder.

**Key Considerations**

* All branches from a node run at the same time.
* The system shows warnings or disables options if you reach any limits.
* Parallel connections are represented by separate lines originating from a single node.
* The canvas layout expands automatically to fit multiple branches.
* Logs show branch-specific outputs, making debugging easier.

## Manage and Remove Connections

To delete a connection between nodes:

1. Click the arrow/line between two nodes.
2. Click the Delete icon. The nodes remain on the canvas but are no longer linked.
3. Deleting a connection breaks the flow until the nodes are reconnected.

<img src="../images/delete_connection.png" alt="Delete icon" title="Delete icon"/>

You can also manage connections from the Configuration Panel:

1. Open the panel by selecting a node.
2. In the Connections tab, click the Delete icon next to the connection you want to remove.
3. The connection is deleted instantly from both the panel and the canvas.

<img src="../images/delete_icon.png" alt="Delete icon" title="Delete icon"/>

## Common Issues and How to Resolve Them

<table>
  <tr>
   <td><strong>Issue</strong>
   </td>
   <td><strong>Cause</strong>
   </td>
   <td><strong>Resolution</strong>
   </td>
  </tr>
  <tr>
   <td>Can't add a new connection
   </td>
   <td>Node has 10 outgoing connections
   </td>
   <td>Delete a connection to add more
   </td>
  </tr>
  <tr>
   <td>“No available nodes” in the dropdown
   </td>
   <td>All valid nodes are already linked
   </td>
   <td>Create a new node or unlink existing ones
   </td>
  </tr>
  <tr>
   <td>Flow doesn't execute
   </td>
   <td>Broken or incomplete connections
   </td>
   <td>Check for stray nodes or missing End Nodes
   </td>
  </tr>
  <tr>
   <td>Error when connecting to a previous node
   </td>
   <td>Backward looping isn't allowed
   </td>
   <td>Reconnect the node to a valid forward step in the flow
   </td>
  </tr>
</table>


## Tips for Better Workflow Design

* Use **parallel** structures to speed up independent tasks.
* Use **sequential** paths when steps depend on the results of prior steps.
* Combine both styles to build hybrid flows for advanced logic.
* Always monitor node limits and watch for visual cues:
    * **One line = sequence**
    * **Branching lines = parallel**
* Regularly use **Auto Arrange** to clean up the canvas.
* Ensure every logical branch concludes at an **End Node**.


## Monitoring & Logs

The Workflow Builder provides a detailed view to help you monitor execution and debug workflows effectively. Whether your flow runs sequentially or in parallel, logs display key information such as inputs, outputs, runtime, and token usage per node.

### View Sequential Execution in Logs

In sequential flows, node execution is logged in the exact order of operation in the Debug panel.

* Each node appears one after another based on the flow sequence.
* This view helps track the step-by-step progression of the flow and isolate issues in linear flows.

<img src="../images/sequential_log.png" alt="Sequential log" title="Sequential log"/>

### View Parallel Execution in Logs

When a flow includes parallel branches, the Debug Logs panel helps you trace each branch clearly. It shows grouped execution for each branch under the same parent node.

**How It Appears**

* Each parallel execution is shown as an indented block grouped under the parent node.
* Branches are labeled (for example, A, B, C) to show separate paths.
* You can expand or collapse each branch to view or hide its details.

<img src="../images/debug_log_new.png" alt="Parallel log" title="Parallel log"/>

**Behavior**

* All branches run at the same time, but logs help you follow what happened in each path.
* The workflow waits for all parallel branches to complete before moving to the next step.
* End nodes from all branches are tracked, and their outputs are combined before passing to the next node. 






# Deploy and Manage Guardrails 

To use input and output scanners in AI for Process, you need to deploy them first. Once deployed, a scanner will be available across all your workflows on the platform.

Steps to deploy a scanner:

1. Log in to your account.
2. Click **Settings** on the top navigation bar.
3. Click **Manage Guardrails** on the left menu.
<img src="./../images/manage-guardrails-new.png" alt="Manage Guardrails" title="Manage Guardrails"/>

4. On the Manage guardrail models page, click the **Deploy** button next to the scanner you want to deploy.  

    The deployment process starts, and the status is displayed as **Deploying**. Once the scanner is deployed, it's available in the scanners list when a new scanner is added.

    !!! note

        If you no longer need a scanner, click the **Undeploy** button next to the scanner to remove it from the platform.




# Manage Input and Output

Workflows allow you to define input and output variables, which become accessible as context objects throughout the execution of the flow.

* **Input Variables**: The input variables provide initial data to the workflow. 
* **Output Variables**: The output variables store and make accessible the derived values from the workflow. You must define output variables to capture the results you want to return from the workflow.

## Using Variables in the Workflow

Once the input and output variables are defined, you can access these variables using the context object syntax and use them throughout the flow:

* Input variables are available immediately after the Start node. These variables can be accessed using the following syntax: `context.steps.Start.inputVariable`
* Output variables can be set in any node. For example, in the End node, you can select a defined output variable and assign it the result/output of an AI node using the following syntax: `{{context.steps.AInode.output}}`

## Adding Input Variables 

Steps to add input variables:

1. On the top of the  Workflow canvas, click the **Manage I/O** button.
Alternatively, you can click the **Start** node. The **Manage Input & Output** dialog is displayed.  
<img src="../images/adding_input_output_variables.png" alt="Manage Input Output Variables" title="Manage Input Output Variables"/>


2. On the **Input** tab, click the **+ Add input variable** button.

    The **Enter input variable** dialog is displayed.

    <img src="../images/enter-input-variable.png" alt="Enter Input Variable" title="Enter Input Variable"/>

3. In the **Name (key)** field, provide a name for the input variable. For example, Product_ID.

4. In the **Type** field, select a data type from the drop-down list - Text, Number, Boolean, JSON or Remote file.
If you want to make the data type mandatory, then enable the **Mandatory** toggle.

    * If you select the **Text**, **Number**, or **Boolean** data types, the **Default value** field appears. You can enable the **Default value** field to set a default value for the input variable.
        
    * If you select the **Remote file** data type, the **File url timeout** field appears. Enter the File URL timeout duration in minutes. The default File URL timeout is 5 minutes. You can set it to anywhere between 5 minutes and 7 days (10080 minutes).

        <img src="../images/url-timeout.png" alt="File URL timeout" title="File URL timeout"/>
 
    * If you select the **List of values (Enum)** data type, you can set predefined values that are allowed for tool input variables by clicking **Add Values +**.

        <img src="../images/enter-input-variable-window.png" alt="Enter Input Variable window" title="Enter Input Variable window"/>
 
        When you enable **Default value**, the defined values get listed in the dropdown for selection. The system validates the input against the defined enum values and provides an error message if an invalid value is provided.

        <img src="../images/add-default-key-value.png" alt="add default key value" title="add default key value"/>

    * If you select the **JSON** data type, a schema Box/JSON Editor appears, where you need to define the JSON schema for the input parameter. You must ensure to follow the supported JSON schema format standard as detailed here: [Defining JSON schema](../perform-other-actions-on-the-flow-builder/defining-json.md).

        <img src="../images/json_schema.png" alt="defining json" title="defining json"/>
        
        In the **Default Value** field, set a default value for the specified field and validate it against the designated data type, ensuring consistency with the defined JSON schema. You must ensure that the default value matches the schema you’ve defined. If the JSON is invalid, the system will display the relevant error message and execution will fail.

5. Click **Save**. The input variable is displayed on the Input tab of the **Manage Input & Output** dialog. 
  
## Adding Output Variables 

Steps to add output variables:

1. On the top of the canvas of the Workflow page, click the **Manage I/O** button. The **Manage Input & Output** dialog is displayed.

2. On the **Output** tab, click the **+ Add output variable** button. The **Enter output variable** dialog is displayed.  
 <img src="./images/enter-output-variable.png" alt="Enter Output Variable" title="Enter Output Variable"/>

3. In the **Name (key)** field, provide a name for the output variable.

4. In the **Type** field, select a data type from the drop-down list - **String**, **Number**, **JSON** or **Boolean**. This allows you to generate data in the defined type as the output parameter from a tool, making it compatible with downstream systems.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The <b>Import</b> button is enabled when the required information is provided.</li>
<li>AI node models and guardrail configurations may not be available in the current account. Reconfigure them before running the tool.</li>
<li>If a type mismatch occurs, the endpoint still succeeds but includes a warning in the response along with the key name and the nature of the mismatch.</li>
<li>If one or more keys fail validation, the response includes warnings for the failed keys and outputs for the valid ones.</li></ul></p></div>

<ol start="5"><li>Click <b>Save</b>.</li>

The output variable is displayed on the Output tab of the <b>Manage Input & Output</b> dialog.</ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can also add an output variable in the End node using the <b>Add a Key</b> option on the node's interface.</p></div>






# Structured Response Parsing and Context Sharing in Workflows

When given a defined schema, the model produces structured data suitable for reuse across workflow steps. The system automatically parses the response and stores key values in a shared context object, eliminating the need for manual handling and reducing redundancy. This method enables different nodes to "communicate" by accessing shared data—ideal for workflows that involve both text and image handling.

### Key Steps

1. **Extract Structured Data**: When the model returns a structured response (e.g., JSON), relevant information is automatically parsed without manual intervention. For example,  intent, origin, destination, and date.
2. **Store in Context**: The parsed data is automatically stored in the context object of the first node, making it immediately accessible to subsequent nodes without the need for the user writing a custom logic manually and parsing the keys using code.
3. **Access and Reuse**: Later nodes can retrieve those stored keys from the context to dynamically generate messages or take further actions.
4. **Create Flexible Flows**: Using the context object to store and access parsed information streamlines data flow between nodes, making workflows quicker and easier to build by automatically handling parsing behind the scenes.

Here’s an example showing how model responses are automatically parsed, how individual keys are separated, and how context is used to pass data between nodes.

#### Step 1: Define the Response Schema

In the AI node, attach a **response JSON schema** to define how you want the model to structure its response.

For example, let's say you're asking for the scientific name of a flower. You can define a JSON schema that includes:

* `scientificname`
* `year`
* `scientist`

This schema guides the model to return its response in a structured JSON format that matches these keys.

<img src="../images/define_response_schema.png" alt="Define response schema Variables" title="Define response schema"/>

#### Step 2: Automatic Parsing of the Model Response

Once the model generates a response, the platform automatically parses the structured JSON output according to the schema you've defined. No manual parsing or code is needed—this happens in the background.

#### Step 3: Automatic Storage in Context

Each key from the parsed response (e.g., `scientificname`, `year`, `scientist`) is automatically stored in the **context object** of the AI node.

* To access the entire output, you can use: `{{context.steps.AI0001.output}}`
* To access specific fields/keys from the structured response, you can directly reference it. For example, `{{context.steps.AI0001.output.scientificname}}`

This gives you fine-grained control over which pieces of data are used in other nodes, without needing any extra parsing or logic.

<img src="../images/storage_context.png" alt="Automatic storage in context" title="Automatic storage in context"/>

#### Step 4: Reuse Keys in Later Nodes

The stored context values can now be used in any subsequent nodes. For example: `{{context.steps.AI0001.output.scientificname}}`

You no longer need to re-parse the response or write custom code to extract these values—these values are already accessible and ready for use.

<img src="../images/reuse_keys.png" alt="reuse keys" title="reuse keys"/>

#### Step 5: View Structured Output During Execution

When the tool runs:

* The **input section** shows the prompt sent to the AI node.
* The **response section** displays the structured JSON returned by the model.
* The **output** section automatically splits the response into separate keys based on your defined schema.

Each key is stored individually in the context, making it easy to trace, validate, and reuse specific values across the workflow.

<img src="../images/view_structured_output.png" alt="View structured Output Variables" title="View structured Output"/>

### Key Benefits

* **No manual parsing or coding required**: By attaching a response schema, the model output is automatically parsed and separated into individual keys. The AI node handles this behind the scenes—no extra logic or custom code needed.
* **Simplified workflows**: You can easily reference only the data you need using context paths like: `{{context.steps.AI0001.output.scientificname}}`. This keeps your workflows clean and focused.
* **Precise data access**: Pull specific values directly into any node—such as the End node—without writing parsing logic or using function nodes. It’s fast, accurate, and efficient.


# Guardrails for Safety and Compliance

Guardrails are safety measures that ensure AI-generated responses from large language models (LLMs) are appropriate and align with standards. You can deploy various guardrail models and use them to scan the inputs or prompts and output results. The scanners ensure responsible AI interactions while generating responses.

Supported Scanners:

**Regex Scanner**  

* Validates prompts based on user-defined regular expression patterns.
* Allows defining desirable ("good") and undesirable ("bad") patterns for fine-grained prompt validation.

**Anonymize Scanner** 

* Ensures user prompts remain confidential by removing sensitive data.
* Helps maintain user privacy and prevents exposure of personal information.

**Ban Topics Scanner** 

* Restricts specific topics, such as religion, from being introduced in prompts.
* Maintains acceptable boundaries and avoids potentially sensitive or controversial discussions.

**Prompt Injection Scanner** 

* Protects LLM against crafty input manipulations.
* Identifies and mitigates injection attempts to ensure secure LLM operation.

**Toxicity Scanner** 

* Analyzes and gauges the toxicity level of prompts.
* Assists in maintaining healthy and safe online interactions by preventing the dissemination of potentially harmful content.

**Bias Detection Scanner**

* Inspects LLM-generated outputs to detect and evaluate potential biases.
* Ensures LLM outputs remain neutral and free from unwanted or predefined biases.

**Deanonymize Scanner** 
    
* Replaces placeholders in the model's output with real values.
* Helps restore original information in the output when needed.

**Relevance Scanner** 

* Measures the similarity between the input prompt and the model's output.
* Provides a confidence score indicating the contextual relevance of the response.
* Ensures LLM outputs remain aligned with the given input prompt.


# About Workflows

A workflow represents a structured, executable flow of tasks designed to automate a specific process. Each workflow follows a predefined sequence of steps and executes independently for each run, ensuring predictable, repeatable outcomes.

Workflows enable you to automate processes, orchestrate tasks, generate insights, and produce outputs such as deal summaries or emails. 

The platform provides a visual, no-code interface, the Workflow Builder, that allows you to design AI-powered workflows using nodes and transitions with minimal coding effort.


## Workflow Execution 

A workflow consists of nodes connected by transitions. During a workflow run, the platform maintains a runtime context shared across all nodes in that execution. After each node's execution, the context object is updated based on its state. 

Each workflow run executes independently based on the input provided at runtime and the defined flow. Workflows don't have a memory of their own. Workflows do not persist state or context across executions. After a run completes, the runtime context is discarded and unavailable to subsequent runs.


## Workflow Management

The platform offers features for end-to-end workflow implementation and maintenance.


### Build and Design

**Workflow Builder:** A visual no-code/low-code builder for creating and managing workflows and workflow versions. It uses nodes and transitions to automate end-to-end tasks without writing complex code. You can build workflows from [scratch](./create-a-workflow.md){target="_blank"} or [import existing ones](import-a-workflow.md){target="_blank"}.


### Configure and Manage

**Configurations:** Manage workflow metadata, define reusable values using environment variables, and control deployment of workflows. [Learn more](configure-a-workflow.md).

### Collaborate and Control Access

**Sharing & Permissions**: Account owners can invite users to collaborate on specific workflows. Invited users can access the Models and Data modules for the invited account and see only the workflows to which they're invited.  [Learn more](./manage-user-roles-and-permissions.md).

### Deploy and Integrate

**Workflow Endpoint:** After building and testing a workflow, deploy it to generate a dedicated API endpoint. Use this endpoint to integrate the workflow with external applications and systems. [Learn more](deploy-a-workflow.md).

**API Keys:** Create API keys for deployed workflows to enable secure access from external systems. Share keys only with trusted users to maintain security. [Learn more](./create-a-new-api-key.md).

### Monitor and Optimize

**Workflow Monitor:** Track and analyze workflow executions across multiple runs. The monitor provides a time-based view of workflow activity, helping you identify issues and optimize performance. [Learn more](./monitoring/about-workflow-monitor.md).


### Govern and Audit

**Guardrails:** Apply guardrail models to scan LLM inputs and outputs, helping enforce safety, compliance, and content policies across workflows. [Learn more](guardrails/add-a-scanner.md).

**Audit Logs:** View detailed audit logs for all workflow activities to support troubleshooting and ensure traceability with real-time event tracking. [Learn more](./workflow-audit-log.md).

# Run Workflows

You can run and test a workflow to see how it works in real time. When you run a workflow, it generates a context object and stores it temporarily at the node level, allowing you to monitor progress through the debug log.

The output includes key information such as the start and end times, the total time to run the flow, and any unresolved issues or errors that may have occurred during execution.


**Steps to run the workflow**:

1. On the top right corner of the workflow canvas, click the **Run flow** icon.

    <img src="./../images/run-the-flow.png" alt="Run the Flow" title="Run the Flow"/>

    The Run dialog opens, displaying the Input, Flow log, and Output sections.

2. On the top of the Run dialog, click the **Debug** icon to open the **Debug** log.  
    The debug log starts showing the output results as the flow executes.

    
3. View flow success or failure:
    * Successful Flow: If the flow completes successfully, you can copy the output results using the Copy icon. The overall runtime flow, showing the total execution time, is also displayed for reference.
    * Flow Errors: If errors occur, an error message will be displayed. Additionally, the output key will appear empty, and the output will be shown in JSON format, indicating a failure within the flow.  


!!! note

    You can stop the flow at any point during the execution and restart it by clicking the **Run flow** icon again.


## Debug Log Overview

The debug log lets you monitor the flow’s execution and track output results, helping you troubleshoot performance issues. It captures detailed information about each step in a flow, including inputs, execution status, errors, and timing.

The debug log shows the following key details:

* **Flow input values**: View the values you entered for the input variables when setting up the flow. 
* **Flow-level log details**: Get an overview of logs at the flow level, including initiation and progress.
* **Node-level information**: For each flow initiation, detailed logs are provided for each node, which include the success or failure status.
* **Node success/failure links**: Links to additional details if a node succeeds or fails.
* **Tool calling details**: Provides detailed logs of any workflows called during the workflow execution (available only for AI nodes). It records when workflow are triggered, the inputs passed to them (JSON), responses or results received, and any errors that occurred during workflow calling. A separate panel shows detailed workflow traces, including step-by-step logs of each workflow's execution. This helps track the performance and usage of the workflow in the flow.
* **Node metrics**: For each node, the following metrics are available:
    * **Initiated On**: The timestamp for when the node was triggered.
    * **Executed On**: The timestamp for when the node execution was completed.
    * **Total Time Taken**: The time it took for the node to complete execution.
    * **Tokens**: The token usage during execution (available only for AI nodes).

For deeper analysis, users can expand the debug panel to full screen. This mode provides a cleaner layout and makes it easier to analyze flow behavior.

* All nodes are aligned to the left for readability.
* Clicking on any node reveals its input, output, and metrics in a side-by-side format.
* Linked workflow call details (for AI nodes) are also available in the same panel.

## Time Metrics for API and AI Nodes

The debug log contains detailed API and AI node time metrics. These metrics, available during both design time and run time, show how long each node takes to execute, including time spent processing and waiting for external API or AI responses. These metrics help you optimize flow performance by identifying bottlenecks in both internal processing and external service calls.

### Time Breakdown for API Nodes

API nodes can be configured in either synchronous or asynchronous mode:

**Synchronous Mode**: When an API node is configured in synchronous mode, the total time taken for execution is split into two key components:

* **Node processing time**: The time taken by the node to complete the execution.
* **API Response time**: The time spent waiting for a response from the external API.

**Asynchronous Mode**: For asynchronous API nodes, the flow pauses while waiting for the API response, and the following metrics are provided in the log:

* **Node paused at**: The timestamp when the node paused waiting for the asynchronous response.
* **Node resumed at**: The timestamp is when the node resumes after receiving the response.
* **Total wait time**: The total duration between the node pausing and resuming, indicating the time spent waiting for the API.
* **Node processing time**: The time the platform spends processing the node after it resumes from the pause.


### Time Breakdown for AI Nodes

Similar to API nodes, AI nodes also involve external service calls (for example, to AI models). For AI nodes, the following two key timing metrics are shown  in the debug log:

* **Node processing time**: The time taken by the node to complete the execution.
* **LLM response time**: The time taken for the connected AI model to return a response to the AI node.

[:octicons-arrow-left-24: Back to Function node](../types-of-nodes/function-node.md)

# List of Supported Libraries

The following pre-existing libraries can be selected for use in the script editor of the [Function Node](./function-node.md).

* [json](#json)
* [enum](#enum)
* **Numerical Libraries**: [numPy](#numpy), [pandas](#pandas), [collections](#collections), [math](#math), [cmath](#cmath), [statistics](#statistics), and [random](#statistics).
* **String Manipulation Libraries**: [re](#re) and [textwrap](#textwrap).
* **Date-time Libraries**: [datetime](#datetime), [time](#time), and [calendar](#calendar).
* [Itertools](#itertools)

<hr />

The libraries mentioned above are imported and made available in the function node in the following formats:

```
import json
import numpy
import scipy
import pandas
import collections
import math
import cmath
import statistics
import random
import enum
import re
import textwrap
import datetime
import time
import calendar
import itertools
```
<hr />

## Functions of Supported Libraries

### json

```
  "json": [
        "JSONDecodeError",
        "JSONDecoder",
        "JSONEncoder",
        "dumps",
        "loads"
    ]
```

### enum

```
"enum": [
        "DynamicClassAttribute",
        "Enum",
        "Flag",
        "IntEnum",
        "IntFlag"
    ]
```
<hr />

## Numerical Libraries

### numPy

```
"numpy": [
        "abs",
        "absolute",
        "add",
        "all",
        "allclose",
        "alltrue",
        "amax",
        "amin",
        "angle",
        "any",
        "append",
        "apply_along_axis",
        "apply_over_axes",
        "arange",
        "arccos",
        "arccosh",
        "arcsin",
        "arcsinh",
        "arctan",
        "arctan2",
        "arctanh",
        "argmax",
        "argmin",
        "argpartition",
        "argsort",
        "argwhere",
        "around",
        "array",
        "array2string",
        "array_equal",
        "array_equiv",
        "array_repr",
        "array_split",
        "array_str",
        "asanyarray",
        "asarray",
        "asarray_chkfinite",
        "ascontiguousarray",
        "asfarray",
        "asfortranarray",
        "asmatrix",
        "atleast_1d",
        "atleast_2d",
        "atleast_3d",
        "average",
        "bartlett",
        "base_repr",
        "binary_repr",
        "bincount",
        "bitwise_and",
        "bitwise_not",
        "bitwise_or",
        "bitwise_xor",
        "blackman",
        "block",
        "bmat",
        "bool_",
        "broadcast",
        "broadcast_arrays",
        "broadcast_shapes",
        "broadcast_to",
        "busday_count",
        "busday_offset",
        "busdaycalendar",
        "byte",
        "byte_bounds",
        "bytes_",
        "can_cast",
        "cbrt",
        "cdouble",
        "ceil",
        "cfloat",
        "character",
        "chararray",
        "choose",
        "clip",
        "clongdouble",
        "clongfloat",
        "column_stack",
        "common_type",
        "complex128",
        "complex256",
        "complex64",
        "complexfloating",
        "compress",
        "concatenate",
        "conj",
        "conjugate",
        "convolve",
        "copy",
        "copysign",
        "copyto",
        "corrcoef",
        "correlate",
        "cos",
        "cosh",
        "count_nonzero",
        "cov",
        "cross",
        "csingle",
        "cumprod",
        "cumsum",
        "datetime64",
        "datetime_as_string",
        "datetime_data",
        "deg2rad",
        "degrees",
        "delete",
        "deprecate",
        "deprecate_with_doc",
        "diag",
        "diag_indices",
        "diag_indices_from",
        "diagflat",
        "diagonal",
        "diff",
        "digitize",
        "divide",
        "divmod",
        "dot",
        "double",
        "dsplit",
        "dstack",
        "dtype",
        "ediff1d",
        "einsum",
        "einsum_path",
        "empty",
        "empty_like",
        "equal",
        "errstate",
        "exp",
        "exp2",
        "expand_dims",
        "expm1",
        "extract",
        "eye",
        "fabs",
        "fill_diagonal",
        "find_common_type",
        "finfo",
        "fix",
        "flatiter",
        "flatnonzero",
        "flip",
        "fliplr",
        "flipud",
        "float128",
        "float16",
        "float32",
        "float64",
        "float_power",
        "floating",
        "floor",
        "floor_divide",
        "fmax",
        "fmin",
        "fmod",
        "format_float_positional",
        "format_float_scientific",
        "frexp",
        "fromfunction",
        "full",
        "full_like",
        "gcd",
        "geomspace",
        "get_printoptions",
        "geterr",
        "geterrcall",
        "geterrobj",
        "gradient",
        "greater",
        "greater_equal",
        "half",
        "hamming",
        "hanning",
        "heaviside",
        "histogram",
        "histogram2d",
        "histogram_bin_edges",
        "histogramdd",
        "hsplit",
        "hstack",
        "hypot",
        "i0",
        "identity",
        "iinfo",
        "imag",
        "in1d",
        "indices",
        "inexact",
        "inner",
        "insert",
        "int16",
        "int32",
        "int64",
        "int8",
        "int_",
        "intc",
        "integer",
        "interp",
        "intersect1d",
        "intp",
        "invert",
        "is_busday",
        "isclose",
        "iscomplex",
        "iscomplexobj",
        "isfinite",
        "isfortran",
        "isin",
        "isinf",
        "isnan",
        "isnat",
        "isneginf",
        "isposinf",
        "isreal",
        "isrealobj",
        "isscalar",
        "issctype",
        "issubdtype",
        "issubsctype",
        "iterable",
        "kaiser",
        "kron",
        "lcm",
        "ldexp",
        "left_shift",
        "less",
        "less_equal",
        "lexsort",
        "linspace",
        "log",
        "log10",
        "log1p",
        "log2",
        "logaddexp",
        "logaddexp2",
        "logical_and",
        "logical_not",
        "logical_or",
        "logical_xor",
        "logspace",
        "longcomplex",
        "longdouble",
        "longfloat",
        "longlong",
        "mask_indices",
        "mat",
        "matmul",
        "matrix",
        "max",
        "maximum",
        "maximum_sctype",
        "may_share_memory",
        "mean",
        "median",
        "meshgrid",
        "min",
        "min_scalar_type",
        "minimum",
        "mintypecode",
        "mod",
        "modf",
        "moveaxis",
        "msort",
        "multiply",
        "nan_to_num",
        "nanargmax",
        "nanargmin",
        "nancumprod",
        "nancumsum",
        "nanmax",
        "nanmean",
        "nanmedian",
        "nanmin",
        "nanpercentile",
        "nanprod",
        "nanquantile",
        "nanstd",
        "nansum",
        "nanvar",
        "ndarray",
        "ndenumerate",
        "ndim",
        "ndindex",
        "nditer",
        "negative",
        "nested_iters",
        "nextafter",
        "nonzero",
        "not_equal",
        "number",
        "obj2sctype",
        "ones",
        "ones_like",
        "outer",
        "packbits",
        "pad",
        "partition",
        "percentile",
        "piecewise",
        "place",
        "poly",
        "poly1d",
        "polyadd",
        "polyder",
        "polydiv",
        "polyfit",
        "polyint",
        "polymul",
        "polysub",
        "polyval",
        "positive",
        "power",
        "printoptions",
        "prod",
        "product",
        "promote_types",
        "ptp",
        "put",
        "put_along_axis",
        "putmask",
        "quantile",
        "rad2deg",
        "radians",
        "ravel",
        "ravel_multi_index",
        "real",
        "real_if_close",
        "recarray",
        "reciprocal",
        "record",
        "remainder",
        "repeat",
        "require",
        "reshape",
        "resize",
        "result_type",
        "right_shift",
        "rint",
        "roll",
        "rollaxis",
        "roots",
        "rot90",
        "round",
        "row_stack",
        "sctype2char",
        "searchsorted",
        "select",
        "set_printoptions",
        "set_string_function",
        "setbufsize",
        "setdiff1d",
        "seterr",
        "seterrcall",
        "setxor1d",
        "shape",
        "shares_memory",
        "short",
        "sign",
        "signbit",
        "signedinteger",
        "sin",
        "sinc",
        "single",
        "sinh",
        "size",
        "sort",
        "sort_complex",
        "spacing",
        "split",
        "sqrt",
        "square",
        "squeeze",
        "std",
        "subtract",
        "sum",
        "swapaxes",
        "take",
        "take_along_axis",
        "tan",
        "tanh",
        "tensordot",
        "tile",
        "timedelta64",
        "trace",
        "transpose",
        "trapz",
        "tri",
        "tril",
        "tril_indices",
        "tril_indices_from",
        "trim_zeros",
        "triu",
        "triu_indices",
        "triu_indices_from",
        "true_divide",
        "trunc",
        "typename",
        "ubyte",
        "uint",
        "uint16",
        "uint32",
        "uint64",
        "uint8",
        "uintc",
        "uintp",
        "ulonglong",
        "union1d",
        "unique",
        "unpackbits",
        "unravel_index",
        "unwrap",
        "ushort",
        "vander",
        "var",
        "vdot",
        "vectorize",
        "vsplit",
        "vstack",
        "where",
        "who",
        "zeros",
        "zeros_like"
    ]

```
<a href="https://numpy.org/doc/stable/reference/index.html#reference" >Learn more</a>.

### pandas

```
"pandas": [
        "BooleanDtype",
        "Categorical",
        "CategoricalDtype",
        "CategoricalIndex",
        "DataFrame",
        "DateOffset",
        "DatetimeIndex",
        "DatetimeTZDtype",
        "Flags",
        "Float32Dtype",
        "Float64Dtype",
        "Grouper",
        "Index",
        "Int16Dtype",
        "Int32Dtype",
        "Int64Dtype",
        "Int8Dtype",
        "Interval",
        "IntervalDtype",
        "IntervalIndex",
        "MultiIndex",
        "NamedAgg",
        "Period",
        "PeriodDtype",
        "RangeIndex",
        "Series",
        "SparseDtype",
        "StringDtype",
        "Timedelta",
        "TimedeltaIndex",
        "Timestamp",
        "UInt16Dtype",
        "UInt32Dtype",
        "UInt64Dtype",
        "UInt8Dtype",
        "array",
        "bdate_range",
        "concat",
        "cut",
        "date_range",
        "describe_option",
        "eval",
        "factorize",
        "from_dummies",
        "get_dummies",
        "get_option",
        "infer_freq",
        "interval_range",
        "isna",
        "isnull",
        "json_normalize",
        "lreshape",
        "melt",
        "merge",
        "merge_asof",
        "merge_ordered",
        "notna",
        "notnull",
        "option_context",
        "period_range",
        "qcut",
        "reset_option",
        "set_eng_float_format",
        "set_option",
        "test",
        "timedelta_range",
        "to_datetime",
        "to_numeric",
        "to_timedelta",
        "unique",
        "value_counts",
        "wide_to_long"
    ]
```
<a href="https://pandas.pydata.org/docs/reference/index.html" >Learn more</a>.

### collections

```
"collections": [
        "ChainMap",
        "Counter",
        "OrderedDict",
        "UserDict",
        "UserList",
        "UserString",
        "defaultdict",
        "deque",
        "namedtuple"
    ]
```
<a href="https://docs.python.org/3/library/collections.html" >Learn more</a>.

### math

```
"math": [
        "acos",
        "acosh",
        "asin",
        "asinh",
        "atan",
        "atan2",
        "atanh",
        "ceil",
        "comb",
        "copysign",
        "cos",
        "cosh",
        "degrees",
        "dist",
        "erf",
        "erfc",
        "exp",
        "expm1",
        "fabs",
        "factorial",
        "floor",
        "fmod",
        "frexp",
        "fsum",
        "gamma",
        "gcd",
        "hypot",
        "isclose",
        "isfinite",
        "isinf",
        "isnan",
        "isqrt",
        "ldexp",
        "lgamma",
        "log",
        "log10",
        "log1p",
        "log2",
        "modf",
        "perm",
        "pow",
        "prod",
        "radians",
        "remainder",
        "sin",
        "sinh",
        "sqrt",
        "tan",
        "tanh",
        "trunc"
    ]
```
<a href="https://docs.python.org/3/library/math.html" >Learn more</a>.

### cmath

```
"cmath": [
        "acos",
        "acosh",
        "asin",
        "asinh",
        "atan",
        "atanh",
        "cos",
        "cosh",
        "exp",
        "isclose",
        "isfinite",
        "isinf",
        "isnan",
        "log",
        "log10",
        "phase",
        "polar",
        "rect",
        "sin",
        "sinh",
        "sqrt",
        "tan",
        "tanh"
    ]
```
<a href="https://docs.python.org/3/library/cmath.html" >Learn more</a>.

### statistics

```
"statistics": [
        "Counter",
        "Decimal",
        "Fraction",
        "NormalDist"
    ]
```
<a href="https://docs.python.org/3/library/statistics.html" >Learn more</a>.

### random

```
 "random": [
        "Random",
        "SystemRandom",
        "betavariate",
        "choice",
        "choices",
        "expovariate",
        "gammavariate",
        "gauss",
        "getrandbits",
        "getstate",
        "lognormvariate",
        "normalvariate",
        "paretovariate",
        "randbytes",
        "randint",
        "random",
        "randrange",
        "sample",
        "seed",
        "setstate",
        "shuffle",
        "triangular",
        "uniform",
        "vonmisesvariate",
        "weibullvariate"
    ]
```
<a href="https://docs.python.org/3/library/random.html" >Learn more</a>.

<hr />

## String Manipulation Libraries

### re

```
 "re": [
        "compile",
        "error",
        "escape",
        "findall",
        "finditer",
        "fullmatch",
        "match",
        "purge",
        "search",
        "split",
        "sub",
        "subn",
        "template"
    ]
```
<a href="https://docs.python.org/3/library/re.html" >Learn more</a>.

### textwrap

```
 "textwrap": [
        "TextWrapper",
        "dedent",
        "fill",
        "indent",
        "shorten",
        "wrap"
    ]
```
<a href="https://docs.python.org/3/library/textwrap.html" >Learn more</a>.

<hr />

## Date-time Libraries

### datetime

```
"datetime": [
        "date",
        "datetime",
        "time",
        "timedelta",
        "timezone",
        "tzinfo"
    ]
```
<a href="https://docs.python.org/3/library/datetime.html" >Learn more</a>.

### time

```
 "time": [
        "asctime",
        "clock_gettime",
        "clock_gettime_ns",
        "ctime",
        "gmtime",
        "localtime",
        "mktime",
        "monotonic",
        "monotonic_ns",
        "perf_counter",
        "perf_counter_ns",
        "process_time",
        "process_time_ns",
        "strftime",
        "strptime",
        "struct_time",
        "time",
        "time_ns",
        "tzset"
    ]
```
<a href="https://docs.python.org/3/library/time.html" >Learn more</a>.

### calendar

```
 "calendar": [
        "Calendar",
        "HTMLCalendar",
        "IllegalMonthError",
        "IllegalWeekdayError",
        "LocaleHTMLCalendar",
        "LocaleTextCalendar",
        "TextCalendar",
        "calendar",
        "different_locale",
        "firstweekday",
        "format",
        "formatstring",
        "isleap",
        "leapdays",
        "month",
        "monthcalendar",
        "monthrange",
        "prcal",
        "prmonth",
        "setfirstweekday",
        "timegm",
        "weekday",
        "weekheader"
    ]
```
<a href="https://docs.python.org/3/library/calendar.html" >Learn more</a>.

<hr />

## Itertools

```
"itertools": [

        "accumulate",
        "chain",
        "combinations",
        "combinations_with_replacement",
        "compress",
        "count",
        "cycle",
        "dropwhile",
        "filterfalse",
        "groupby",
        "islice",
        "permutations",
        "product",
        "repeat",
        "starmap",
        "takewhile",
        "tee",
        "zip_longest"
    ]
```
<a href="https://docs.python.org/3/library/itertools.html" >Learn more</a>.

<hr />


# Start Node - Automate Workflow Initiation

The Start node is the mandatory entry point for every workflow. When you create a new workflow, the Start node is automatically added to the canvas. Every workflow must begin with this node to function properly.

Key requirements

* The Start node must connect to at least one other node.
* All workflow nodes must have a connection path back to the Start node.
* Unconnected nodes will cause the workflow to fail.

<Note> You can reposition the Start node and all other nodes by dragging them anywhere on the canvas. </Note>

## Automation Features

The Start node provides two powerful automation options that can be used individually or together: Event Triggers and Scheduled Execution.

### Event Triggers

Event triggers automatically executes your workflow when specific events occur in connected applications. For example, when a customer's account balance falls below the quarterly minimum, the workflow can automatically send an email notification via integrated services such as Gmail.

### Scheduled Execution

The scheduler executes your workflow at predetermined times or intervals. For example, you can schedule a workflow to run on the 5th of each month to identify customers below minimum balance thresholds and send automated SMS notifications. The scheduler supports custom time zones for global operations.

## Configure the Start Node

The Start node is the entry point for your workflow. Configure it to define inputs, outputs, triggers, and schedules.

Steps to configure the node:

1. Navigate to **Workflows** in the top menu, select your workflow, and click **Go to Flow**.

2. The Start node appears by default in the flow builder. Click the node to open its configuration panel.

3. Configure the following:

    * **Input**: Define initial data for your workflow. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-input-variables) about adding input variables.
    * **Output**: Specify variables to capture workflow results. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-output-variables) about adding output variables.
    * **Trigger**: Configure event-based triggers from third-party apps. For details, see [Add event-based triggers](../types-of-nodes/start-node.md#add-event-based-triggers).
    * **Schedule**: Set time-based automation for your workflow. For details, see [Configure time-based schedules](../types-of-nodes/start-node.md#configure-time-based-schedules).

### Add Event-Based Triggers

**Prerequisites:**

* Set up the required integration connection. For details, see [Add a connection](../../../settings/integrations/about-integrations.md#add-a-connection-to-set-up-integration).
* Add the third-party app to your workspace. For details, see supported [Third-party applications](../types-of-nodes/start-node.md#supported-third-party-services-for-triggers).
* Create an authentication profile to enable and secure the integration. For details, see [Add Authorization profile](../../../settings/security-and-control/authorization-profile.md#add-authorization-profile).

**Steps to configure the node**:

1. Click Add Trigger and select your integration app.
2. Enable the trigger and select a connection. To create a new connection, see [Add a connection](../../../settings/integrations/about-integrations.md#add-a-connection-to-set-up-integration).
3. Select your trigger event and configure parameters.
4. Save and test the workflow.

<img src="../images/add_trigger.png" alt="triggers" title="triggers"/>

<Note>Triggers must be active and enabled. Attachments from triggers are accessible via URL for 24 hours. </Note>

### Configure Time-Based Schedules

1. Click the Schedule icon and enable the scheduler.
2. Set frequency (Daily, Weekly, Monthly, Once, Cron, or Custom). [Learn more](../types-of-nodes/start-node.md#schedule-frequencies).
3. Configure start date, start time, and time zone.
4. Save and test the workflow.

<img src="../images/scheduler.png" alt="schedule" title="schedule"/>

## Supported Third-Party Services for Triggers

| Service provider | No. of triggers |
|------------------|-----------------|
| Asana | 1 |
| Canvas | 6 |
| Coda | 4 |
| Discord | 1 |
| Fireflies | 1 |
| Gmail | 2 |
| GitHub | 6 |
| Google Calendar | 7 |
| Google Docs | 3 |
| Google Drive | 7 |
| Google Sheets | 2 |
| Google Slides | 1 |
| Google Super | 16 |
| Hubspot | 2 |
| Jira | 3 |
| Linear | 3 |
| Mailchimp | 4 |
| Notion | 5 |
| OneDrive | 8 |
| Outlook | 5 |
| Pipedrive | 3 |
| Salesforce | 7 |
| Slack | 9 |
| Slackbot | 9 |
| Spotify | 3 |
| Stripe | 7 |
| TimelinesAI | 1 |
| Todoist | 1 |
| Trello | 5 |
| YouTube | 4 |
| Zendesk | 2 |


## Schedule Frequencies

<table>
  <tr>
   <td><strong>Frequency</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Daily
   </td>
   <td>Runs every day
   </td>
  </tr>
  <tr>
   <td>Weekly
   </td>
   <td>Runs every 7 days on a selected day of the week
   </td>
  </tr>
  <tr>
   <td>Monthly
   </td>
   <td>Runs on a specific date each month
   </td>
  </tr>
  <tr>
   <td>Once
   </td>
   <td>Runs at selected date and time
   </td>
  </tr>
  <tr>
   <td>Cron
   </td>
   <td>Runs based on a custom cron expression
   </td>
  </tr>
  <tr>
   <td>Custom
   </td>
   <td>Repeats every N days or weeks
   </td>
  </tr>
</table>

## Troubleshooting

1. **Undefined output variables**: If any output variable is not defined, a list of unresolved outputs appears.

    * Open the Start node and define all required output variables.
    * Save and re-run the workflow.

2. **Inactive triggers**: A warning appears if a trigger is inactive or has an authentication issue.

    * Re-deploy the workflow to refresh connections.
    * Retest the auth profile in **Settings → Security & Control → Authorization profiles**.
    * Ensure the trigger is active before running the workflow.





# Evaluate Guardrails for Efficiency

After adding and configuring the necessary scanners, you can verify that they adhere to the specified standards. Test the effectiveness of an individual scanner or a group of scanners and then tweak the scanner's settings if required.

Steps to test the Guardrails or Scanners:

1. On the Guardrails page, click **Test**.  
<img src="./../images/test-guardrails.png" alt="Test Guardrails" title="Test Guardrails"/>

2. On the Test Guardrails page, in the **Prompt input** box, enter a prompt or select **Input template** to choose a template.  
<img src="./../images/test-guardrails-prompt-input.png" alt="Prompt to Test a Scanner" title="Prompt to Test a Scanner"/>

3. Select Test. Under Scores and Results, review the following results:  
<img src="./../images/guardrails-test-results.png" alt="Guardrails Test Results" title="Guardrails Test Results"/> 

    * **Validity**: Indicates whether the prompt is valid based on the scanner's criteria. (For example, if Toxicity is not found in the prompt, the prompt is valid, and the Validity is set to True.)

    * **Risk Score**: Indicates the prompt's risk level, calculated using the scanner's threshold and score.

    * **Duration**: Displays the time taken by the scanner to process the prompt.

    !!! note

        * The **Risk Score** is calculated using the following formula: (Threshold - Scanner Score) / Threshold. 

        * For the **Relevance Scanner**, if the similarity between the prompt and generated answer is below the user-defined threshold, the Risk Score is 1; otherwise, it's 0.

4. Based on the results, you can adjust the Scanner's settings and test them again if required.



# Text to Image Node: Turn Text into Stunning Visuals

The **Text to Image** node is a powerful AI component that enables you to generate images dynamically within your automation flows using natural language input. By providing descriptive text and keywords, you can define what the image should include or exclude, and produce multiple high-quality variants in a single run. 
l̥
Configuration options allow you to specify input prompts and control output formats, making it easy to integrate image generation into data-driven workflows. This multimodal capability enables developers to seamlessly integrate text and visual elements across various use cases.

## Key Capabilities

* **Text-to-Image Conversion**: Converts descriptive text prompts into images using advanced AI models. 

* **Prompt Customization**

    * **Positive Prompt**: Define what the image should include (style, elements, setting, etc.). 

    * **Negative Prompt**: Specify what to exclude to avoid unwanted elements. 

* **Aspect Ratio Control**: Customize the image dimensions up to a maximum of **2048 x 2048** pixels (GPU-dependent). 

* **Step-based Image Refinement**: Fine-tune image quality with adjustable step counts—up to **30 steps** recommended for balancing detail and performance. 

* **Batch Generation**: Generate up to **5 image variants** in a single run (for example, color and black-and-white versions for different audiences). 

* **High-Quality Output Format**: Images are generated in **PNG format** and returned as **URLs** for seamless integration into workflows. 

* Supports multiple model versions for the following:

    **Stable Diffusion Model**

    * stabilityai/stable-diffusion-xl-base-1.0 

    * stabilityai/stable-diffusion-2-1 

    * Stable-diffusion-v1-5

    **OpenAI Models**

    * Dall-e-2 
    * Dall-e-3

## Common Use Cases

* **Marketing Asset Generation**:  Automatically create banners, ads, and promotional visuals from campaign briefs or product descriptions. 

* **Content Illustration**: Create contextual images for blogs, newsletters, or articles tailored to a specific topic or tone. 

* **Visual Prototyping**: Rapidly generate visual concepts for UI mockups, storyboards, or creative pitches. 

* **Variant Testing**: Produce multiple versions of the same image for A/B testing in marketing or design workflows.

## Example Use Case

A creative marketing team can use the system to instantly generate images for emails, campaigns, and other promotional content. With built-in content moderation, the images meet quality and relevance standards, minimizing the need for manual review and removing the dependency on licensed stock images or external generators. Instead of appending visuals later or integrating them via separate API calls, using this node directly within the workflow is faster and more efficient.

## How It Works

The **Text to Image** node fits seamlessly into your workflows, accepting descriptive inputs from previous nodes and returning AI-generated image URLs as outputs. You can define prompts directly within the node, select the processing model, and specify what the image should include or exclude, along with aspect ratio, steps, and batch count. The node supports both static and dynamic inputs via context variables, enabling automated image generation across a wide range of use cases, from marketing creatives to content illustration.

<img src="../images/how-text-to-image-works.png" alt="how text to image works" title="how text to image works"/>

In this document, you will learn how to add the node to your flows, configure it with descriptive prompts and generation settings, manage inputs and outputs, and test the generated image results.

## Node Configuration Information

### Exported Image Formats

The node generates the image output in the *PNG* format only.

### Inputs

The key node inputs include:

1. A detailed instruction set on what the image should contain, including the style, attributes, elements, location, background, lighting, look and feel, etc., in the **Positive Prompt**. For example, “*Christmas greeting with Santa giving presents in the North Pole*.”
2. Instructions on what the image should exclude in the **Negative Prompt**. For example, add the words “*Reindeers*”, “black color”, or “*Santa running*” to avoid them in the image.
3. The **Aspect Ratio**, including the width and height of the image. The **maximum limit is  2048 x 2048**, depending on the GPU specifications.
4. The number of **Steps** to improve the image generation. Each step includes enhancements or improvements that align the output as closely as possible with the positive prompt instructions. This ensures that the generated image meets expectations by refining details, adjusting parameters, and optimizing quality while maintaining relevance to the intended prompt.

   <div class="admonition note">
   <p class="admonition-title">Important</p>
   <p>Image generation depends on the number of steps in the process. While more steps add details, they also increase generation time and may cause the model to hallucinate, leading to deviations from the prompt instructions. To balance quality and efficiency, a maximum of 25-30 steps is recommended, minimizing unnecessary details (noise) and hallucinations in the final output.</p>
   </div>

<ol start="5"><li><b>Batch Count</b> to define the limit on the number of image versions/variants the node generates sequentially. A <b>maximum of 5 images</b> can be generated. For example, you can create the color and black-and-white versions of the same image sequentially in a batch and use each version for different purposes. For example, generate a Christmas greeting for employees and another for customers.</li></ol>

### Output

The generated image output is available only in PNG format. Once created, the image is converted into a URL.

**Important Considerations**

* The node generates high-quality images based on the provided prompts and configurations.
* The generated images are available forever and don't have an expiry period.
* The model uses an input scanner in the node to detect and filter banned words or topics. If a banned topic is included in the input prompts, an error is generated and displayed in the debug window when the flow is executed.
* Performance tracking is available under **Settings** -> **Model Analytics Dashboard** -> **Open-source Models** tab. [Learn more](../../../settings/monitoring/analytics/model-analytics-dashboard.md){target="_blank"}. 

The metrics include:

* **Number of images generated** since the supported models are charged based on this count.
* **Input tokens** since the Stable Diffusion models usually support a small number of tokens, and tracking the counts is necessary. [Learn more](../../../settings/monitoring/analytics/model-analytics-dashboard.md#tokens).


## Add and Configure a Text to Image Node

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Before proceeding, you must add an external LLM to your account.</p>
</div>


### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows"/>

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Node

* Click the "**+**" icon for **Text to Image** under **AI** in the **Assets** panel. Alternatively, drag the node from the panel onto the canvas. You can also click **AI** in the pop-up menu and click **Text to Image**.
  <img src="../images/text-to-image-add-node.png" alt="add node" title="add node"/>

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. The **General Settings** for the node are displayed. 

* Enter or select the following **General Settings**:

    * **Node Name**: Enter an appropriate name for the node. For example, “*Christmasgreeting*.”
    * **Select Model**: Select the required variant of the Stable Diffusion model.
    * **Positive Prompt**: Enter the keywords for what needs to be generated in the image or what it should include. The model will generate along the lines of the details mentioned here and not consider the negative hints.
    * **Negative Prompt**: Enter the keywords for the elements the image should exclude.

     <div class="admonition note">
     <p class="admonition-title">Important</p>
      <p>User prompts define specific questions or requests for the model to follow and generate results. You can use input variables you add in <a href="#step-1-optional-add-input-variables" >this</a> step to add dynamic inputs to the prompt in the recommended syntax:<code>{{context.variable_name}}</code> before you run and test the flow. <a href="#step-3-run-the-flow" >Learn more</a>.</p></div>

    * **Aspect Ratio**: Define the dimensions of the image in pixels for width and height.
    * **Steps**: Add the number of times the model will go back to the image and add more details/enhancements to get it as close to the prompt as possible. 25-30 steps are recommended for any image generation. Increasing the steps might add unwanted elements or model hallucinations and increase the time of generation.
    * **Batch Count**: The number of images to be generated sequentially.

        <img src="../images/properties-panel-text-to-image.png" alt="properties panel" title="properties panel"/>

       <div class="admonition warning" bgcolor="blue">
       <p class="admonition-title">Standard Error</p>
       <p>When the Model isn't selected, the prompt details aren't provided, or both, the error message “<i>Proper data needs to be provided in the LLM node</i>” is displayed.</p></div>


* Click the <b>Connections</b> icon and select the <b>Go to Node</b> for success and failure conditions.
  <img src="../images/connection-text-to-image.png" alt="click connections" title="click connections"/>

    * <b>On Success</b> -> <b>Go to Node</b>: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.
    * <b>On Failure</b> -> <b>Go to Node</b>: If the execution of the current node fails, go to the End node to display any custom error message from the <b>Text to Image</b> node.

    For the configured inputs, the following image is generated.
    
     <img src="../images/node-output-image.png" alt="output image" title="output image"/>

* Finally, <a href="#step-3-run-the-flow" >run the flow</a> and fix any issues found.

## Test the Flow for the Node

After adding and configuring the node as mentioned [here](./text-to-image-node.md#add-and-configure-a-text-to-image-node), follow the steps below to test the flow.

<div class="admonition note">
<p class="admonition-title">Dynamic Prompt Inputs</p>
<p>Before you <a href="#step-3-run-the-flow" >run the flow</a>, provide clear instructions for the model to follow using the <b>input variable(s)</b> you add in the following step with the help of <b>context variables</b>. Context variables add dynamic values to the prompt instructions that the model will follow. The recommended syntax is: <code>{{context.variable_name}}</code>. For example, you can store the generated image URL in a variable named “<i>Imaggenerated</i>” and pass it on in the prompt when you mention <q><i>Generate an image based on the below description</i>: <code>{{context.steps.Start.Imaggenerated}}</code></q>, as shown in the image below.</p></div>

<img src="../images/dynamic-prompt-input.png" alt="dynamic prompt input" title="dynamic prompt input"/> 

### Step 1: (Optional) Add Input Variable(s)

* Click the **Input** tab of the **Start** node, and click **Add Input Variable** to configure the input for the flow’s test run. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-input-variables).

     <img src="../images/add-input-variable-text-to-image.png" alt="add input variable" title="add input variable"/>

* Select <b><i>Text</i></b> for the <b>Type</b> field in the <b>Enter input variable window</b> to define a text input variable.
* Click <b>Save</b>. <a href="../text-to-text-node/#access-the-ai-nodes-output" >Learn more</a> about accessing the node’s output.
   <img src="../images/select-text-for-input.png" alt="click add output variable" title="click add output variable"/>

Add all the required input variables to run the flow in the **Input** section of the **Start** node.


### Step 2: Add Output Variable(s)

* Click the **Output** tab for the **Start** node.
* Click **Add Output Variable**.

    <img src="../images/click-add-output-variable.png" alt="click add output variable" title="click add output variable"/>

* Enter the value for <b>Name (key)</b> and select <b><i>String</i></b> for <b>Type</b> to generate the image URL.
* Click <b>Save</b>. <a href="../text-to-text-node/#access-the-ai-nodes-output" >Learn more</a> about accessing the node’s output.
     
   <img src="../images/output-var.png" alt="save output variable" title="save output variable"/>

### Step 3: Run the Flow

To run and test the flow, follow the steps below:

* Click the **Run Flow** button at the top-right corner of the flow builder.
   <img src="../images/run-the-flow-text-to-image.png" alt="run the flow" title="run the flow"/>
    
* (Optional) Add the value for **Input Variable** if you have configured it to test the flow. Otherwise, go directly to the next step.
* Click **Generate Output**.

     <img src="../images/generate-output-text-to-image.png" alt="generate output" title="generate output"/>

The **Debug** window generates the flow log and results, as shown below. [Learn more](../types-of-nodes/text-to-image-node.md#step-3-run-the-flow) about running the workflow.

<img src="../images/debug-window-text-to-image.png" alt="debug window" title="debug window"/>

# Text to Text Node - Automate Text Transformation

The Text to Text node is part of the AI node family in the Workflow Builder, enabling the dynamic transformation of input text into a desired text output within a single workflow step. It leverages large language models (LLMs) to produce content that adheres to specific tone, structure, and instructions defined via prompts. This node is ideal for tasks involving summarization, rewriting, generation, and formatting of text data.

## Key Capabilities

* **Custom Prompt Execution**: Define specific behavior through human and system prompts or select from reusable templates in the Prompt hub.
* **LLM Model Selection**: Choose from pre-configured models with optional hyperparameter tuning (temperature, top-k, top-p, max tokens).
* **Structured Output Support**: Define JSON schemas for predictable and parsable responses from the model.
* **Prompt Templates & Versioning**: Load and customize prompt versions, with support for variable mapping and editing.
* **Workflow Calling Integration**: Enable the model to autonomously call external workflows during execution (if supported).
* **Timeout Configuration**: Control the duration for which the model can run before triggering a timeout error.

## Common Use Cases

* **Text Summarization**: Generate summaries from conversation transcripts, logs, or documents.
* **Tone or Style Adjustment**: Refine a message to convey a more professional, friendly, technical, or other desired tone.
* **Keyword-Based Generation**: Produce text using given inputs like names, topics, or key phrases.
* **Error Explanation or Log Analysis**: Extract, explain, or simplify technical content.
* **Content Rewriting**: Modify existing text to enhance clarity, structure, or purpose (for example, simplifying instructions).

## How It Works

Once placed in the workflow, the Text to Text node takes input from previous nodes and sends a prompt to the selected AI model. Based on your configuration—prompt, schema, and model settings—it returns a response to the context variable for use in the next step. Execution can optionally involve workflow calls, and success/failure paths allow routing based on the outcome.

<img src="../images/text_to_text_node_new.png" alt="Text to Text Node" title="Text to Text Node"/>

In this document, you will learn how to add the node to your flows, configure it with system and human prompts along with model settings, manage inputs and outputs, and test the generated text results.


## Add and Configure a Text to Text Node

Setting up a Text to Text node in a workflow involves adding the node at the appropriate location in the flow and configuring various node properties.

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows"/>

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Text to Text Node

* In the Workflow builder, click the “**+**” icon on any existing node on the canvas and select **AI** > **Text to Text** from the pop-up menu. 
* Alternatively, drag the **Text to Text** node under **AI** from the Assets panel onto the canvas.

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. 
<img src="../images/configure-gen-ai-node.png" alt="Configure AI Node" title="Configure AI Node"/>

* Enter the following General Settings:

    1. **Node Name**: Enter an appropriate name for the node.

    2. **Prompt options**: Choose one of the following options:
        * **Write your own prompt**: If you select 'Write your own prompt’, follow these steps:
            * **System Prompt**: Enter the system prompt for your use case. System prompts help you assign a role to the model. For example, “Generate a summary of the transcription of a conversation in a maximum of 5 lines without returning any special characters".
            * **Prompt**: Provide the instructions that you want the model to follow. You can use context variables as mentioned below. For example, you can store the conversation transcript in a variable named “conversation” and pass it on in the prompt.  
            Syntax: `{{context.variable_name}}`
            Example: `{{context.conversation}}`  

            <Note>System Prompts: These are instructions to guide how the model should respond. They define the overall behavior or tone of the model. For example: "You are a helpful assistant." Human Prompts: These are the questions or requests made by the user. They specify what the user wants the model to do or answer. For example: "Summarize this error log and tell me the likely cause of the issue."</Note>


        * **Choose a prompt from prompt hub:** If you select ‘Choose a prompt from prompt hub’, follow these steps:
            * Select your desired prompt and specific version from the **Prompt** and **Version** drop-down lists. Once selected, the prompt automatically populates in the **Prompt** field.  
            If the selected prompt version includes a defined response schema, it will be automatically loaded. Additionally, if the prompt was saved as a template with a schema, that schema will also be loaded when the template is selected.
    
            * To edit the prompt, click the **Customize** option. The ‘Custom Prompt’ view is displayed, where the prompt from Prompt Studio will be populated in both the system and human prompt fields. You can then modify the prompt while preserving the selected version.  

        <img src="./../images/choose_prompt_with_variables_fields.png" alt="Choose a prompt" title="Choose a prompt"/>      

        <Note>Importing a Prompt with Variables: If you import a prompt from Prompt Studio with set variables, you can add the necessary variables in the ‘Map Variables’ field for that AI node.</Note>

            Importing a Prompt without Variables: If you import a prompt from Prompt Studio that does not have variables, you must customize the prompt and manually add the variables. In this case, the "Map Variables" field does not appear, as the imported prompt has no variables to map.

    3. **Select Model**: Select a model from the list of configured models.
    Note that when you choose a prompt from the prompt hub, it will also fetch the preferred model and connection associated with that version if you specified one during the commit process.

    4. **Timeout**: Select the timeout duration from the allowed range. The allowed range is 30 to 180 seconds (3 minutes). The default is 60 seconds (1 minute). The node triggers a timeout error if the request is not completed within the selected time frame.    

        <Note> Timeout precedence: Workflow timeout *is greater than* Node timeout *is greater than* Model timeout. </Note>

    5. **Response JSON schema**:  Define a JSON schema for structured responses. This step is optional and depends on the selected model.   
        You can define a JSON schema to structure the model's response if the chosen model supports the response format. By default, if no schema is provided, the model will respond with plain text.
        Supported JSON schema types include: String, Boolean, Number, Integer, Object, Array, Enum, and anyOf. Ensure the schema follows the standard outlined here: [Defining JSON schema](../perform-other-actions-on-the-flow-builder/defining-json.md). 
        If the schema is invalid or mismatched, errors will be logged, and you must resolve them before proceeding.  

        For more information about how the model parses the response and separates keys from the content body, see: [Structured Response Parsing and Context Sharing in Workflows](../perform-other-actions-on-the-flow-builder/model_response_parsing.md).

    6. **Model Configurations**: Use hyperparameters to fine-tune the AI model's behavior to suit your needs. While the default settings work well for most cases, you can adjust them to find the right balance for your use case.

        * **Temperature**: Controls the randomness of the model's responses. Higher values lead to more random outputs, while lower values result in more focused outputs.

        * **Top p**: Controls the diversity of the model's output by considering only the top tokens whose cumulative probability exceeds a threshold. Higher values produce more diverse outputs, while lower values result in more deterministic outputs.

        * **Top k**: Restricts the model from considering only the top k most probable next words when generating output. For example, if k=50, the model will randomly choose from the top 50 predictions at each step. This helps balance quality and diversity in the generated text. Higher top-k values encourage creativity and diversity, while lower values promote coherence and reliability.

        * **Max Tokens**: Sets the maximum length of the model's output. Lower values generate shorter responses, while higher values produce longer responses.

### Step 4: Add Connections

Click the **Connections** icon and select the **Go to Node** for success and failure conditions.

* **On Success** > **Go to Node**: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.

* **On Failure** > **Go to Node**: If the execution of the current node fails, go to the End node to display any custom error message from the AI node.

    <img src="./../images/gen-ai-connections.png" alt="AI Actions" title="AI Actions"/>

### Step 5: Add Workflows

To add workflows, click the **Workflow Calling** icon. When you select a model that supports workflow calling, the ‘*workflow calling available*’ tab is displayed in the Properties panel. You can configure workflow calling settings from this tab.

<Note> When you attach workflows to the AI node, its details are sent to the model along with the request details. This enables the model to determine whether to resolve the input query, prompt, or request using its own knowledge or by calling the appropriate workflows. You can select up to three workflows for each AI node. </Note>

* **Add Workflows**: Click **Add Workflows** to add a workflow.

* **Select workflows**: The Workflows dialog displays a list of workflows available in your account. Select the appropriate workflows and click **Add workflows**. Once added, the selected workflows will appear on the workflows tab, indicating that they have been successfully attached.

* **Configure workflow settings**:
    * In the Workflow configuration section, configure the following:
        * **Exit node execution after**: Specify the number of model calls to use as the exit criteria. For example, if you set this to 5 calls and the LLM continues making workflow calls without providing a final answer, the system will exit to the failure path.
    * In the Additional settings section, configure the following:
        * **workflow choice**: Select *Auto* or *Required*. This option determines whether the model will automatically decide when to make a workflow call (Auto), or if a workflow call is required every time (Required). The default setting is Auto.
        * **Parallel workflow calls**: Select *True* to enable the model to execute multiple workflow calls simultaneously. Select *False* if you want the model to execute workflow calls sequentially, optimizing for the best possible outcome.  
        
    <img src="./../images/tool_calling_configuration.png" alt="AI Actions" title="AI Actions"/>

### Step 6: Test the Flow

Finally, test the flow and fix any issues found. Click the **Run Flow** button at the top-right corner of the flow builder and follow the onscreen instructions.

<Note>When the Model is not selected, the prompt details are not provided, or both, the following error message is displayed: “Proper data needs to be provided in the LLM node”.</Note>

## Access the AI Node’s Output

The node’s output is stored in a context variable. You can access the variable using the following syntax:
`{{context.steps.AINodeName.output}}`

<Note> AI for Process can automatically recognize variables and outputs. To do so, type "context.steps." and you will see available variables and nodes, including the nodes' outputs.</Note>

# Triggers

The Triggers page provides a detailed view of all configured triggers for your workflows. It helps you monitor trigger activity, understand their configuration, and manage workflows effectively.

## Key Capabilities

* Event and Schedule Information: View key details for each trigger, including its configuration, timing, and recent activity.
* Inactive Trigger Alerts: Inactive triggers display a clear error message with recommended actions.
* Filtering and Searching: Easily filter and find specific triggers using the search bar, column filters, and operators, with dynamic value entry and instant results.

## Best Practices

* Regularly check the Triggers page to ensure all triggers are active and running as expected.
* Expand trigger details selectively to avoid clutter and maintain clarity.
* Monitor inactive triggers and follow the recommended actions to keep workflows functioning properly.

## Accessing Triggers

1. Log in to your **AI for Process** account and go to **Workflows**.
2. Select the desired workflow. Ensure the workflow status is **Deployed**. Only deployed workflows can have active triggers.
3. In the left navigation pane, click **Monitoring** > **Triggers**. The Triggers page displays all configured triggers. 
4. Click a trigger to expand its details.

### Event-Based Triggers

* **Provider**: The service generating the trigger (e.g., webhook provider).
* **Trigger Name**: Unique name of the trigger.
* **Description**: Summary of what the trigger does.
* **Setup Time**: When the trigger was configured.
* **Last Run**: The last time the trigger executed the workflow.

### Schedule-Based Triggers

* **Frequency**: How often the trigger fires (e.g., hourly, daily).
* **Description**: Summary of the scheduled trigger.
* **Setup Time**: When the schedule was configured.
* **Start Time / End Time**: The execution window of the trigger.
* **Time Zone**: Time zone used for scheduling.
* **Last Run / Next Run**: Execution history and upcoming scheduled run.


# Understanding Workflow Monitor

The Workflow Monitor capabilities are shown on the following tabs:

* **All runs**: It shows comprehensive data on all workflow run instances and provides a comprehensive record of all the endpoint calls made to the workflow. 

* **Model runs**: This tab shows specific data on AI node run instances, focusing on endpoint calls made to AI nodes within the workflow.

Both tabs include summary metrics at the top of the page, including total runs/requests, average response times (P90 and P99), and failure rates.

<img src="../images/new_agent_monitor.png" alt="All runs and Model runs tabs" title="All runs and Model runs tabs"/>

## All Runs

The All runs tab provides the following information for each workflow run:

* **Run ID**: The unique identifier for the flow.
* **Status**: The current state of the request. It displays one of the following statuses:
    * **In Progress**: The request is being processed.
    * **Waiting**: The request is outside of Agent Platform and is awaiting a response from the connected system (typically for API nodes in Async mode).
    * **Success**: The request has been completed successfully.
    * **Failed**: The request wasn't completed successfully.
* **Response time**: The duration the workflow takes to complete a request and provide an output.
* **Nodes executed**: The total number of nodes executed in the run.
* **Start time**: The time when the request is initiated.
* **End time**: The time the response is received.
* **Type**: Indicates the category of the trigger such as Event-based, Schedule-based, or API-based.
* **Source**: Indicates where the workflow was triggered. For example:
    * Event-based sources: The provider or service that triggered the workflow (e.g., Gmail). 
    * Schedule-based sources: Time-based triggers configured to run at specific intervals.

You can also see the following metrics on the top of the page: 

* **TOTAL RUNS**: The total number of workflow runs. 
* **RESPONSE TIME**: The average response time of all the workflow runs. It's measured by the following two metrics:
    * **P90**: This metric represents the response time below which 90% of the requests fall.
    * **P99**: This metric represents the response time below which 99% of the requests fall.
* **FAILURE RATE**: The percentage of failed runs.

These metrics are dependent on the selected date range, filters, and search criteria. When you apply a search, the metrics on the top of the page will be updated to reflect the specific request. Essentially, the displayed top metrics will vary based on the filters you apply. 

## 	Model Runs

Each AI node in the workflow is recorded as a separate request in the Model runs tab of the Workflow monitor page. For example, if three AI nodes are used in a workflow, three separate requests for each of the three AI nodes are displayed.

If your workflow doesn't have any AI nodes, this section will remain empty. Once you add AI nodes, the Model runs will begin to reflect here.

The Model runs tab provides the following information for each AI node call:

* **Request ID**: The unique identifier of the AI node request.
* **Status**: The current state of the request. It displays one of the following statuses: 
    * **In Progress**: The request is being processed.
    * **Waiting**: The request is outside of Agent Platform and is awaiting a response from the connected system (typically for API nodes in Async mode).
    * **Success**: The request has been completed successfully.
    * **Failed**: The request wasn't completed successfully.
* **Node name**: The name of the AI node.
* **Model name**: The model that's used for the AI node.
* **Connection or Deployment name**: The connection or deployment associated with the model. 
* **Response time**: The amount of time taken by the AI node to complete the request.
* **Start time**: The time when the AI node has started its execution.
* **End time**: The time when the AI node has completed its execution.

You can also see the following metrics on the top of the page:

* **TOTAL REQUESTS**: The total number of AI node requests.
* **RESPONSE TIME**: The average response time of all the AI node requests. It's measured by the following two metrics:
    * **P90**: This metric represents the response time below which 90% of the requests fall.
    * **P99**: This metric represents the response time below which 99% of the requests fall.
* **FAILURE RATE**: The percentage of instances in which the AI node has failed in execution.

These metrics are dependent on the selected date range, filters, and search criteria. When you apply a search, the metrics on the top of the page will be updated to reflect the specific request. Essentially, the displayed top metrics will vary based on the filters you apply.

## Viewing Detailed Run Information

Clicking each row in either the All runs tab or the Model runs tab opens a detailed view panel on the right. This view is similar to the Run dialog panel on the workflow canvas. [Learn more](../workflow-builder/perform-other-actions-on-the-flow-builder/run-the-flow.md).

<img src="../images/agent_monitor_viewing_run_information.png" alt="Viewing detailed run information" title="Viewing detailed run information"/>

The panel displays the following details:

*  **Run ID/Request ID**: The unique identifier for the flow.
* **Response Time**: The duration the workflow takes to complete a request and provide an output.
*  **Debug icon**: Clicking this icon displays the debug log details.
*  **Input**: The Input section displays the input sent to the workflow.
*  **Flow log**: The flow log section displays the information of each node.
    * **Success**: Displays the log as in the debug panel.
    * **Failure**: Displays failure details as in the debug panel.

        For AI nodes, when you expand the node you can see the information related to each node along with the scanner information.

*  **Output section**: The Output section displays the workflow's output (for successful runs). You can copy the output and view tokens.

    <img src="../images/agent_monitor_viewing_run_information_detailed.png" alt="Viewing detailed run information" title="Viewing detailed run information"/>


## Understanding the Impact of Timeouts on Workflow Endpoints

The impact of timeouts on workflow endpoints depends on whether the process is synchronous (Sync) or asynchronous (Async). **Sync** requests are handled and fulfilled immediately, while **Async** requests may pause and show a ‘Waiting’ status until a response is received. If the response time is longer or the timeout is set to infinite, the system will wait indefinitely until the external system responds.

Below are the four scenarios showing how timeouts affect the workflow endpoint, along with the corresponding status on the Workflow monitoring page:

**Workflow 'Sync' & API node 'Sync'**:

* Request immediately fulfilled, no specific message to the endpoint.
* 'In-progress' status while running.

**Workflow 'Sync' & API node 'Async' (API node timeout <  Sync timeout)**:

* Workflow API retrieves data, flow executes as 'In-progress' status, and the response is sent.
* External requests: Workflow execution is paused awaiting external’s systems response with 'Waiting' status, resumes to 'In-progress' when workflow execution resumes.

**Workflow 'Async' & API node 'Sync'**:

* Workflow executes, and the response is sent to the callback URL.
* 'In-progress' status while flow is running.

**Workflow 'Async' & API node 'Async' (API node timeout < Workflow Async timeout OR both are set to infinite)**:

* External requests: Workflow execution is paused awaiting external’s systems response with 'Waiting' status, resumes to 'In-progress' when workflow execution resumes.
* If the external system tries the same callback URL again, it will be notified that the request has already been fulfilled.


The timeout settings affect how long the system waits for responses and how it handles retries, ensuring proper status updates and communication with external systems. For more information on configuring timeouts, see [Configure a workflow](../configure-a-workflow.md) and [API Node](../workflow-builder/types-of-nodes/api-node.md).

## Searching and Filtering Information

### Manual Search

Use the search box in the top right corner of the Workflow monitor page to find specific runs or calls based on keywords.

### Time-based Search

Use the calendar option to search for runs or calls from a specific time period. You can  filter your search results by time period, whether it’s something from the last day, week, month, or year. 

Steps to use the time-based search:

1. Click the calendar button in the top right corner of the Workflow monitor page.

2. Select a predefined time range or set custom dates.

3. Click **Apply** to update the results.


### Custom Filters

Use the filter option to filter the information displayed in the Workflow monitor dashboard by applying custom filters. These filters allow you to select specific columns, apply operators such as **Is** **Equal To** or **Is Not Equal To,** and then specify the desired value.

You can also add multiple filters using AND/OR operators for more precise results.

Steps to use the filters:

1. Click the Filter icon.
2. Click **+ Add filter**.
3. Select options for Column, Operator, and Value.
4. Click **Apply**.

## Workflow Run Errors

In the **All runs** section, any error that occurs via the endpoint during an workflow run is displayed in a separate window for the specified *Run ID*.

To view detailed error information, click on the corresponding workflow run entry in the **Workflow Monitor** dashboard.


An error message includes the following information:

* HTTP status code returned by the web server as a response.
* A message describing the error.
* Suggestions to verify and manage the error.

### Error Categories

The errors are classified as follows:

* **Authorization:** An error that occurs during API key authorization of a workflow.
* **Data Validation:** Any discrepancy detected when validating input fields and API calls during a workflow run.
* **Content Filter:** Breaches of guardrail threshold limits during AI node execution.
* **Internal Server Error:** Technical issues encountered with the internal server.
* **Network**: Technical issues encountered with the network connectivity.

### Error Scenarios 

The table below lists the errors that can occur in the **Workflow Monitoring** dashboard, including the error categories and HTTP status codes:


<table>
  <tr>
   <td><strong>Error Scenario</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Category</strong>
   </td>
   <td><strong>HTTP Status Code</strong>
   </td>
  </tr>
  <tr>
   <td>Mandatory input field
   </td>
   <td>A mandatory input field is missing for the workflow run.
   </td>
   <td rowspan="4" >Data Validation
   </td>
   <td rowspan="3" >400 Bad Request
   </td>
  </tr>
  <tr>
   <td>Invalid data type for input field
   </td>
   <td>An incorrect data type is provided for a field input.
   </td>
  </tr>
  <tr>
   <td>Empty Input Object
   </td>
   <td>A field input is missing a value or has an empty value.
   </td>
  </tr>
  <tr>
   <td>Large Request Payload
   </td>
   <td>The request payload exceeds the server's size limit.
   </td>
   <td>413 Payload Too Large
   </td>
  </tr>
  <tr>
   <td>Any Server side issues
   </td>
   <td>A technical issue caused the server to fail.
   </td>
   <td>Internal Server
   </td>
   <td>500 Internal Server Error
   </td>
  </tr>
  <tr>
   <td>Network Issues:- Request timeout on the server
   </td>
   <td>Temporary network or Agent Platform server connection issue.
   </td>
   <td>Network
   </td>
   <td>408 Request Timeout
   </td>
  </tr>
  <tr>
   <td>Guardrail Failure
   </td>
   <td>The flow execution was aborted at the <strong>AI node</strong> due to a guardrail violation, as the risk score exceeded the threshold.
   </td>
   <td>Content Filter
   </td>
   <td>403 Forbidden
   </td>
  </tr>
</table>




# Track Events and Actions For a Workflow

Audit Logs provides full visibility into user actions and system interactions, tracking logins, role changes, and model updates through dynamic time-stamped logs and tracking capabilities.

This empowers admins to ensure compliance with internal policies and regulations, while proactively mitigating risks like data privacy breaches and algorithmic bias.

Each log entry includes the following to provide actionable insights on account and workflow-level activities:

- Event name and category.
- The user who performed the action.
- Date and time of the event.
- Detailed description of the action.

<img src="../images/agent_audit_log_details.png" alt="audit logs metadata" title="audit logs metadata"/>

The event metadata provides business users with actionable insights, helping them in efficiently identifying patterns in user activities within their accounts. It also aids in detecting anomalies, spotting unauthorized usage, and enhancing overall account security.

You can specify a **current** or **past period** to view the logs and have complete visibility into the activities and modifications in your account. [Learn more](../settings/monitoring/audit-logs.md#steps-to-set-time-range-for-audit-logs).

Additionally, you can set **custom filters** based on a specific category, event, or user value to view only the required audit logs. [Learn more](../settings/monitoring/audit-logs.md#steps-to-add-a-custom-filter).

## Access Audit Logs

Steps to access and view workflow audit logs:

1. Log in → In AI for Process Modules top menu → Click **Workflows**.
2. On the **All workflows** page, click the desired workflow.
3. In the left navigation pane, click **Audit logs**. The Audit logs page is displayed. 
4. Click each row to view more details about the event. For more information, see Workflow-Level Audit Logs. [Learn more](../settings/monitoring/audit-logs.md#workflow-level-audit-logs).

    <img src="../images/agent_audit_log.png" alt="agent audit logs" title="agent audit logs"/>

## Dashboard Information

The Audit Logs dashboard displays the following information to collectively provide a comprehensive overview of activities within your account:

* **Event Name:** Describes the specific event or action that occurred.
* **Category:** Identifies the module or entity affected by the event.
* **User Name:** Specifies the name of the user who performed the action or triggered the event.
* **Date and Time:** Represents when the event occurred.
* **Description:** Provides detailed information about what was done.

# Workflow Change Log

The workflow change log enables admins to track, audit, and review changes made to an workflow over time. This feature enables transparency and accountability by providing a history of all actions taken within the flow, including updates to node properties, user changes, and version-specific modifications, making it ideal for monitoring workflow evolution and managing collaborative work.

The change log, accessible through the admin console, is an essential workflow for tracking user activities and understanding the impact of changes made within the workflow's flow.

## Key Features

* **Event tracking**: The change log records each time a user exits a property field in a node, capturing the timestamp, the user responsible for the change, and the change made.
* **Filters for enhanced searchability**: Admins can filter the change log to easily track changes over time, by node, or by specific team members.

## Using the Workflow Change Log

The change log automatically records every change made within the workflow whenever a user exits a property field in any node. You can quickly scroll through the log to review the complete history of changes made across the flow.

<img src="../images/agent_canvas_change_log.png" alt="Agent canvas change log" title="Agent canvas change log"/>

### Accessing the Change Log

1. Open the flow of the workflow for which you want to view the change log.
2. Click the **History/Log** icon at the top-right corner of the page.
The change log opens in a panel on the right.

### Viewing the Change Log

Once the change log panel opens, you will see a list of entries corresponding to different actions made inside the workflow. The most recent changes will appear first in the log.

Each log entry will display the following:

* The timestamp of when the change was made.
* A brief description of the change.
* The name of the user who made the change.

### Filtering the Change Log

1. At the top of the change log panel, you can see filter options to help you refine your search.
2. Use the following filter options:
    1. **Date filter**: Click the Calendar icon to select a specific date range to view changes made within that period.
    2. **Filter By**: Click the Filter icon to filter the logs by:
        1. **User**: View the changes made by a specific user.
        2. **Node Type**: Choose the type of node you want to track.

    The log will dynamically update based on the selected filter(s), making it easy to find relevant entries.
