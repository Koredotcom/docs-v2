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

 <img src="../images/api_node_how_it_works.jpg" alt="API node" title="API node" style="border: 1px solid gray; zoom:75%;">


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
<img src="./../images/api-node-general-settings.png" alt="Go to Flow Canvas" title="Go to Flow Canvas" style="border: 1px solid gray; zoom:60%;">

**General Settings**
<table>
  <tr>
   <td><strong>Field<strong> </td>
   <td><strong>Description<strong></td>
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
  Select the integration type: <strong>Synchronous</strong> or <strong>Asynchronous</strong>.<br><br>

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
          <strong>Pre-authorize the Integration</strong>: Select this option if the authorization has already been completed in advance. This is suitable for API calls that do not require the end user to authenticate or provide credentials.<br>
          <strong>Example</strong>: Connecting to a service using a system-level token or client credentials that have already been authorized. In this case, the same credentials are used for all users.
        </li>
        <li>
          <strong>Allow users to authorize the integration</strong>: Choose this option if each end user needs to dynamically authorize the integration at runtime. This is useful when user-specific credentials or tokens are required for access.<br>
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

<img src="./../images/api-node-connections.png" alt="API node Connections Properties" title="API node Connections Properties" style="border: 1px solid gray; zoom:80%;">

* **On Success** > **Go to Node**: After the current node is successfully executed, go to a selected node in the flow to execute next. For example, you can process the data from this node into a Function node and then use it further. In this case, select the Function node. 
* **On Failure** > **Go to Node**: If the execution of the current node fails, go to an appropriate node having a custom error message configured.

### Step 5: Test the Flow

Finally, test the flow and fix any issues found. Click the **Run Flow** button at the top-right corner of the flow builder and follow the onscreen instructions.


!!! note
    
    Use the following syntax to access an API node using the context variable: 
    ~~~
    {{context.steps.Start.APINodeName}}
    ~~~


