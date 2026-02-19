# DocSearch Node – Power Your Flows with Context-Driven Search

The **DocSearch Node** is a Retrieval-Augmented Generation (RAG)-powered component that enhances the real-time discovery and retrieval of information chunks from available resources through an established Search AI app connection. Indexed and high-quality content is fetched from your Sources repository, enabling fast, precise, and context-aware responses to user queries.

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

A retail bank uses the **DocSearch Node** to automate responses to frequently asked questions about loans, accounts, and card services. When a user asks, “*What documents are required to apply for a home loan based on my income?*”, the node dynamically passes the query to a connected Search AI App, which searches, indexes, and fetches relevant information chunks from internal resources such as loan policy documents, eligibility criteria, and process guidelines. It then returns a precise, context-aware response, reducing call center load and improving self-service efficiency.

## How It Works

The **DocSearch Node** integrates seamlessly into your tool flows, accepting user queries as static text or dynamic variables referencing other node outputs. It connects to a pre-configured Search AI App on the platform to retrieve relevant content from your Sources repository using a Retrieval-Augmented Generation (RAG) framework. You can define meta filters manually or fetch them via the Answer Generation API to generate refined, context-aware responses. The node fully integrates within the canvas and optionally allows redirection to the full Search AI interface.

<img src="../images/how-doc-search-works.png" alt="how doc search works" title="how doc search works" style="border: 1px solid gray; zoom:75%;">

In this document, you will learn how to add and configure DocSearch Nodes with Search AI connections, set up query inputs and meta filters, handle response outputs, and test the search-driven interactions within your automation flows.

## Steps to Add and Configure the Node

Configuring the DocSearch Node consists of the following steps:

1. [Set up a Search AI application and the information source for Platform integration](../types-of-nodes/docsearch-node.md#step-1-set-up-search-ai-app).
2. [Link the Search AI application in the Platform](../types-of-nodes/docsearch-node.md#step-2-link-the-search-ai-app-in-agent-platform).
3. [Add and configure the DocSearch node](../types-of-nodes/docsearch-node.md#step-3-add-and-configure-a-docsearch-node).
4. [Test the Flow](../types-of-nodes/docsearch-node.md#step-4-test-the-flow) you have built.

## Step 1: Set up Search AI App

The integration of Search AI with the Platform involves setting up a Search AI application, configuring it for integration, and modifying the Platform to interact with Search AI in response to specific conditions or events. Search AI provides REST APIs that enable seamless interaction with any application.

Follow the detailed steps [here](https://docs.kore.ai/xo/apis/automation/api-introduction/#creating-and-managing-jwt-apps-in-xo-platform) to complete the configuration.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>To receive answers from Search AI, you must enable the <b><i>Answer Generation</i></b> option under the <b>API scopes</b> section.</p></div>


## Step 2: Link the Search AI App in Agent Platform

After fetching the Search AI application credentials, configuring the source, and enabling the channel communication via API, you must link the app in the Platform. 

**Steps to integrate Search AI in the Platform**

1. Log in to your account and click **Autonomous Agents** from the list of modules.
2. Click **Settings** on the top navigation bar.
3. Click **Integrations** on the left navigation menu.
4. Scroll down to **Search AI** and click **Link an App**.
  <img src="./../images/link-an-app.png" alt="link an app" title="link an app" style="border: 1px solid gray; zoom:75%;">

5. In the **Search AI** window, provide the required information that you copied from the Search AI app in 
[Step 1](./docsearch-node.md#step-1-set-up-search-ai-app).
6. Click **Test** to test the connection.
* If the connection is successful, click **Confirm**.
  <img src="./../images/searchai-connection-form.png" alt="searchai connection form" title="searchai connection form" style="border: 1px solid gray; zoom:75%;">

  A success message is displayed and the connection is listed for Search AI.
   <img src="./../images/listed-connection.png" alt="listed connection" title="listed connection" style="border: 1px solid gray; zoom:75%;">

  If the connection fails with the following message, check and re-enter the correct Search AI app credentials.

  <img src="./../images/connection-failure.png" alt="connection failure" title="connection failure" style="border: 1px solid gray; zoom:75%;">

  <div class="admonition note">
  <p class="admonition-title">Note</p>
  <p>We support connections through Search AI. You must provide <code>https://platform.kore.ai</code> for the <b>Search AI URL</b> field.</p></div>

## Step 3: Add and Configure a DocSearch Node

### Step 3(A): Open Flow Builder

* Log into the Platform and select **Tools** under modules.
* Select your tool and select **Go to Flow**.

### Step 3(B): Add the Node

* Click **DocSearch** -> **+ New DocSearch** on the **Assets** panel. Alternatively, click **DocSearch** in the bottom panel.
  <img src="./../images/add-docsearch-node.png" alt="add doc search node" title="add doc search node" style="border: 1px solid gray; zoom:75%;">

### Step 3(C): Configure the Node

* To provide a unique name, right-click the node and click **Rename** since the node is provided a default name.

    Alternatively, click the node and change the value for **Node Name** in the configuration panel.
    <img src="./../images/node-name.png" alt="node name" title="node name" style="border: 1px solid gray; zoom:75%;">

* Add the input for the <b>Query</b> field to capture the user's search query. 
  
  To accept dynamic inputs, either configure an input variable in the <b>Start</b> node or use the <a href="../../perform-other-actions-on-the-flow-builder/manage-input-and-output/#adding-input-variables">Manage Input Variables</a> feature.</p>

  You can also add plain text for hard-coded inputs like "<i>What does the McKinsey report forecast for Q3 in 2025 based on historic data taken in the past 3 years</i>."
   <img src="./../images/context-input.png" alt="query field" title="query field" style="border: 1px solid gray; zoom:75%;">
   
 * Select the <b>Search AI connection</b> you set up in <a href="#step-2-link-the-search-ai-app-in-agent-platform">Step 2</a> on the Platform integration page.
   <img src="./../images/searchai-connection.png" alt="search ai connection" title="search ai connection" style="border: 1px solid gray; zoom:75%;"/>

   <div class="admonition note">
   <p class="admonition-title">Note</p>
   <p>Use search to look up and select the required connection.</p></div>

  To set up a new connection, click **+ New Connection**. It redirects you to the Platform Integrations page. Follow the steps mentioned [here](./docsearch-node.md#step-2-link-the-search-ai-app-in-agent-platform) to complete the integration.

 * (Optional) Set <b>Meta filters</b> (click the expansion arrow to access the editor) to define rules that will narrow down the search results. For example, if the sources have multiple files, you can define the specific file names to look up in the meta filters code. <a href="https://docs.kore.ai/xo/apis/searchai/answer-generation/#body-parameters">Learn more</a>.
<img src="./../images/set-meta-filters.png" alt="set meta filters" title="set meta filters" style="border: 1px solid gray; zoom:75%;"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>If you do not provide any meta filters, the query is applied to all the documents uploaded to that connection.</li>
<li>The filters can be a context variable in the flow depending on the builder’s requirement.</li></ul></p></div>

<p><b>Managing Errors</b></p>

Appropriate canvas-level errors are displayed (in the error log) when you add a new node. You can view and fix the errors by clicking the <b>warning</b> icon.

   <img src="../images/docsearch-run-flow.png" alt="click run button" title="click run button" style="border: 1px solid gray; zoom:75%;">

## Step 4: Test the Flow

To run and test the flow, follow the steps below:

* Click the **Run Flow** button at the top-right corner of the flow builder.
  <img src="../images/docsearch-run-flow.png" alt="click run button" title="click run button" style="border: 1px solid gray; zoom:75%;">

* (Optional) Add the value for **Input Variable** if you have configured it to test the flow in **Step 5** of [this](../types-of-nodes/docsearch-node.md#step-3-add-and-configure-a-docsearch-node) section. Otherwise, go directly to the next step.

* Click <b>Generate Output</b>.

     <img src="../images/input-and-generate-output-docsearch.png" alt="generate output" title="generate output" style="border: 1px solid gray; zoom:75%;">

   The **Debug** window displays the flow log and execution status of each node on the canvas, starting from the **Start** node to the **End** node, along with the result shown in the **Output** window. [Learn more](../../../tools/tool-flows/perform-other-actions-on-the-flow-builder/run-the-flow.md) about running the tool flow.

<div class="admonition note">
<p class="admonition-title">Accessing the Output</p>
<p>The answer
(extracted chunks) from the node can be accessed via the context variable (key) in the output path. This key is dynamic and depends on the API response. The
format is <code>{{context.steps.<<<b>nodename</b>>>.dynamic
path}}</code>. For example, it
could be <code>context.steps.DocSearch.response.response.answer</code> in one case or <code>context.steps.DocSearch.response.response.response.answer</code> in another.

Check the sample response from Search AI to find the correct key that holds the content.
Use that key in your tool flow. You may also need to extract multiple chunks from different keys.</p></div>

<hr/> 

**Related Resources**

* [Manage Nodes in Tool Flow](./../manage-flow-nodes.md) - Add and manage nodes on the canvas.
* [Run Tool Flow](./../perform-other-actions-on-the-flow-builder/run-the-flow.md) - Run and test an tool flow in real time.
