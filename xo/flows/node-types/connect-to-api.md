# Connect to API Node

This node lets you make synchronous or asynchronous requests using _SOAP_ or _REST API_ calls.

You can query or get information from an external system by defining a service request that includes configuring the APIs and passing the parameters.

## Configure the Node

### General Settings

Click the **General Settings** icon and configure the following:  
<img src="./../images/general-settings-api.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

1. A **Custom Name** to identify the node.
2. Select an API **Type** from the following options:
    * **REST**: A REST API follows the standards of the REST API architecture and enables interaction with RESTful web services.
    * **SOAP**: A SOAP API uses the Simple Object Access Protocol (SOAP), which is a messaging protocol for interchanging data in a decentralized and distributed environment.
3. Select an **Integration Type** from the following options:
    * **Synchronous**: The API returns resources, data, or services immediately.
    * **Asynchronous**: The API returns resources, data, or services later based on the number of seconds you select. The default selection is 20s, and the available options range from 8s to 20s.  

        Selecting Handle API Failure Responses (4xx/5xx) instructs the system to treat all 4xx and 5xx responses as failure events. The system then triggers the configured onFailure path to verify the flow continues without hanging.
4. Under **Request Definition**, configure the API request. Define the `GET`, `PUT`, `POST`, or `DELETE` service request, along with the API call and parameters to pass. To create a new request, select **+ Define Request**.  
<img src="./../images/request-definition.png" alt="Request Definition" title="Request Definition" style="border: 1px solid gray; zoom:70%;">

    Define your API request by following the steps outlined in Define and Test an API Request.

5. Under **Access Using URL Connector**, select `URLs are behind a firewall and a connector has been set up` if the API is accessed using a configured URL connector.  
    <img src="./../images/access-using-url-connector.png" alt="Access Using URL Connector" title="Access Using URL Connector" style="border: 1px solid gray; zoom:70%;">

#### Define and Test an API Request

To define and test your API request, follow these steps:

* In the **Request Definition** section within the API node’s General Settings, select **+ Define Request**.
* The **Define Request** window opens:
<img src="./../images/define-request-window.png" alt="Define Request" title="Define Request" style="border: 1px solid gray; zoom:70%;">
* Select the `GET`, `PUT`, `POST`, `PATCH`, or `DELETE` call from the list.
<img src="./../images/api-method.png" alt="Method" title="Method" style="border: 1px solid gray; zoom:70%;">
* Paste your `API call URL` in the text field and select **Test**.
<img src="./../images/curl.png" alt="cURL" title="cURL" style="border: 1px solid gray; zoom:70%;">
* Your API call runs successfully if all the inputs provided are valid. Otherwise, an error message appears
* Provide the details for the **Header Key** and **Value** pair. You can add a new pair by typing it in the empty fields. You can delete a pair by selecting the **Delete** icon.
<img src="./../images/headers.png" alt="Headers" title="Headers" style="border: 1px solid gray; zoom:70%;">

* Select **Test Request** and paste the request body code in the text field. The text editor provides the following options:
    * Format JSON data with indentation and line feeds,
    * Compact JSON data by removing white spaces,
    * Sort contents,
    * Filter, sort, or transform contents,
    * Repair JSON,
    * Undo the last action,
    * Redo action.  
<img src="./../images/test-request.png" alt="Test Request" title="Test Request" style="border: 1px solid gray; zoom:70%;">

* Select **Save** after you’ve tested the API successfully.

### Connection Rules

* Select the **Connection Rules** icon and select the actions that you want the node to trigger when the API call is successful and when the API call fails.
* For **On Success**, the selected **Go to node** defines how the AI Agent handles a successful API call.
* For **On Failure**, the selected **Go to node** defines how the AI Agent handles a failed API Call.
<img src="./../images/connection-rules-api.png" alt="Connection Rules" title="Connection Rules" style="border: 1px solid gray; zoom:70%;">

### Error Handling

Use this section to handle system errors during customer interactions.
<img src="./../images/error-handling-api.png" alt="Error Handling" title="Error Handling" style="border: 1px solid gray; zoom:70%;">

* **Your Message to User**: The message that will be played or displayed to the customer. Select one of the following options from under **Choose your message type**:
    * **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        * Click **+ Create New** to create a new prompt for the text-to-speech message type. Enter a name for your message and type its contents.
        * Define multiple message types for the prompt message to be played to the customer by clicking **+ Add Another**. In this case, one message will be randomly selected and played during runtime.  
    <img src="./../images/text-to-speech-api.png" alt="Text to Speech" title="Text to Speech" style="border: 1px solid gray; zoom:70%;">

    * **Audio File**: You can type a new message to be played to the customer in the text field or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played;
    <img src="./../images/audio-file-api.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">
    * **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-api.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">
* **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.