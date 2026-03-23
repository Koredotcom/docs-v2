# Alert Task – SOAP API Request

In this article, we see how to configure an API Request for a SOAP service, as part of an Alert Task. [Alert task](../use-cases/alert-tasks.md).

## SOAP API Request Overview

For a task with the **Connection Type** specified as **Webservice** and the **Connection Mode** set to **SOAP** you need to define:

* **Authentication** – If required for your alert task, you need to define the authentication to access the API, for example, using basic authorization, OAuth, or API Key.
* **WSDL URL** – Define the URL that contains your WSDL data. When the URL is retrieved, you can choose from a list of Available Operations based on the WSDL, and then customize the user input fields.
* **Access Using a connector** – Specify if your Platform is installed on-premises and you want to user the Kore.ai Connector agent.
* **Response Sample** – Define key/value pairs that you expect to receive in the task payload. The keys that you provide are available as drop-down choices for handling the data to display to the end-user.
* **Preview Website Link Content in Post** – The website preview content displayed in the task notification message. 

Click **Save** to save the API request settings.

## Define the WSDL URL

1. On the **API Request** tab, expand the **WSDL URL** section.
2. To begin the task configuration for a SOAP request, enter the URL for your SOAP WSDL in the **WSDL URL** field.
<img src="../images/define-wsdl-url.png" alt="define wsdl url" title="define wsdl url" style="border: 1px solid gray; zoom:75%;">

3. Click **Get WSDL Description**. A list of the available operators defined in the WSDL is displayed.
4. Click **Select** for the SOAP request that you want to use for your task. Kore.ai automatically populates one or more Alert Task Fields if necessary for user input.
<img src="../images/select-soap-request.png" alt="select soap request" title="select soap request" style="border: 1px solid gray; zoom:75%;">

## Customize SOAP Alert Task Fields

You can customize the default input fields provided by Kore.ai after you select one or more of the **Available Operations** from your WSDL. 

To customize the default **Alert Task Fields**, click **Edit** for the **Alert Task Field** that you want to customize.
<img src="../images/soap-alert-task-fields.png" alt="soap alert task fields" title="soap alert task fields" style="border: 1px solid gray; zoom:75%;">

The **Set up Alert Task Field** dialog is displayed as shown in the following illustration.
<img src="../images/set-up-alert-task-soap.png" alt="set up alert task" title="set up alert task" style="border: 1px solid gray; zoom:75%;">

To define end-user fields for a task, follow the steps below:

1. Specify the values for the parameters in the **Set up Alert Task Field** dialog as described in the following table.

<table border="1.5">
<tr bgcolor="#FAFAFA">
   <td>
<strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Field Title
   </td>
   <td>The title of the task input field displayed in the end-user interface, for example, Country.
   </td>
  </tr>
  <tr>
   <td>Help Hint
   </td>
   <td>The help text displayed below the task setting the title to describe the task, for example, Enter the Country Name you want the Weather for.
   </td>
  </tr>
  <tr>
   <td>Field Key
   </td>
   <td>A read-only key that represents the end-user input value that you want to collect, for example, country.
   </td>
  </tr>
  <tr>
   <td>Field Type
   </td>
   <td>Specifies the type of task input field displayed in the end-user interface to collect user input for the request object to assign to the <strong>Key</strong> value. The default setting is <strong>Textbox</strong>, but can be customized to any one of the following:
<ul>

<li><strong>Date</strong> – Displays the <strong>Format</strong> field where you can select the date format syntax for the end-user to define when the task is configured for their account. In the <strong>Select Date Format</strong> drop-down list, select one of the following: 
<ul>
 
<li><strong>dd-MM-YYYY</strong> – For example, 16-05-1999</li>
 
<li><strong>MM-dd-YYYY</strong> – For example, 05-16-1999</li>
 
<li><strong>dd-MM-YY</strong> – For example, 16-05-99</li>
 
<li><strong>YYYY-MM-dd</strong> – For example, 1999-05-16</li></li>
</ul>

<li><strong>URL</strong> – Displays a text box for the end-user to enter a URL including field validation for a correct URL syntax. In the <strong>Placeholder</strong> field, enter the help hint displayed in the text box, for example, Enter the URL for the website here.</li>

<li><strong>Textbox</strong> – Displays a text box for the end-user to enter text as the task input field, typically just a few words. In the <strong>Placeholder</strong> field, enter the help hint displayed in the text field, for example, Type in the name you want to embroider.</li>

<li><strong>Password – </strong>Displays a text box for the user to enter a password for the web service.</li>

<li><strong>Static Dropdown</strong> – Displays a drop-down list of choices to the end-user. Click <strong>Add Option</strong> to begin adding the list of items to display to the end-user with the following parameters: 
<ul>
 
<li><strong>Option Name </strong>– The name of the option displayed to the end-user.</li>
 
<li><strong>Option Value</strong> – The value the represents the <strong>Option Name</strong> returned to the application.</li>
 
<li><strong>Default Value</strong> – Select the default value for the option when more than one option is defined.</li>
 
<li><strong>Searchable</strong> – Select to enable dynamic search and display as the end-user enters text in this field, or if no matches, allow free-form entry.
</li> 
</ul>

<li>Click <strong>Save</strong>. To add additional items, click <strong>Add Option</strong> again. Edit or remove options in the <strong>Actions</strong> column for options.</li>

<li><strong>Dynamic Dropdown</strong> – Displays a drop-down list dynamically populated at runtime based on the response from a URL for your AI Agent, for example, a list of projects for a <em>JIRA</em> task notification. Define the following properties for a dynamically populated dropdown.</li>
<ul>
 
<li><strong>Use Separate WDSL</strong> – Add the WDSL URL, then click <strong>Get WDSL Description</strong>. You can then follow the same steps mentioned below.</li>
 
<li><strong>Available Operations </strong>– If you don't use a separate WDSL,you can select a pre-existing operation. To do so, click <strong>Select </strong>in the <em>Action </em>column.</li>
 
<li><strong>Endpoint Content Type</strong> – The content type expected from the specified endpoint URL. One of: JSON, RSS, XML, URL Encoded JSON, CCV, Text, or Twitter Encoded JSON.</li>
 
<li><strong>Endpoint Method</strong> – You can choose one of the following:  
<ul>
  
<li><strong>GET</strong> – Specifies an HTTP Request GET method for the task field.
  
<li><strong>POST</strong> – Specifies an HTTP Request POST method for the task field.
</li>  
</ul>
 
<li><strong>Response Path</strong> – The path in the response that contains the desired drop-down list values, for example, data.</li>
 
<li><strong>Option Label Key</strong> – The key for the label of the drop-down option, for example, name.</li>
 
<li><strong>Option Value Key</strong> – The key for the value of the drop-down option, for example, id.</li>
 
<li><strong>Searchable</strong> – Select to enable dynamic search and display as the end-user enters text in this field, or if no matches, allow free-form entry.
</li> 
</ul>

<li><strong>Textarea</strong> – Displays a text area box for the end-user to enter text as the task input, typically for several sentences. In the <strong>Placeholder</strong> field, enter the help hint displayed inside the text area.</li>

<li><strong>Type Ahead</strong> – Displays a dynamically populated drop-down list of choices to the end-user at runtime when the user enters three or more characters that match the search results based on the response from the URL defined for the task. For example, a list of projects for a <em>JIRA</em> task notification message. Define the following properties for a dynamically populated drop-down.</li>
<ul>
 
<li><strong>Use Separate WDSL </strong>– Add the WDSL URL, then click Get WDSL Description. You can then follow the same steps mentioned below.</li>
 
<li><strong>Available Operations </strong>– If you don't use a separate WDSL,you can select a pre-existing operation. To do so, click <strong>Select </strong>in the <em>Action </em>column.</li>
 
<li><strong>Endpoint Content Type</strong> – The content type expected from the specified endpoint URL. One of: JSON, RSS, XML, URL Encoded JSON, CCV, Text, Twitter Encoded JSON, Multipart/Form-data, or Multipart/Related.</li>
 
<li><strong>Endpoint Method</strong> – One of:  
<ul>
  
<li><strong>GET</strong> – Specifies an HTTP Request GET method for the task field.
  
<li><strong>POST</strong> – Specifies an HTTP Request POST method for the task field.
</li>  
</ul>
 
<li><strong>Response Path</strong> – The path in the response that contains the desired drop-down list values, for example, data.
 
<li><strong>Label Key</strong> – The key for the label of the drop-down option, for example, name.
 
<li><strong>Option Value Key</strong> – The key for the value of the drop-down option, for example, id.
</li> 
</ul>

<li><strong>Email</strong> – Displays a text box for the end-user to input an email address. In the <strong>Placeholder</strong> field, enter the helpful hint to display to the end-user inside the text box.</li>

<li><strong>Date & Time</strong> – Displays a text box for the end-user to input a date with time. In the <strong>Format</strong> field, enter the expected date or time format to display to the end-user in the date text box. In the <strong>Select Date Format</strong> drop-down list, select the date with time format.</li>

<li><strong>Time Zone</strong> – Displays a drop-down list of time zones based on the operating system settings.</li>

<li><strong>Location</strong> – Displays a text box for the end-user to enter a geographical location, for example, Orlando, FL, or 32801.</li>

<li><strong>Nested Form</strong> – Displays end-user input fields in a nested format below the parent input field. Specify the following fields for a nested form input field: 
<ul>
 
<li><strong>Array Element Type</strong> – Select the data type of the parent input form element.</li>
 
<li><strong>Add Nested Form Field</strong> – Click to add one or more nested form fields.</li></li>
</ul>

<li><strong>File Upload</strong> – Displays end-user control to search for, and select a file to upload. When clicked, enter the <strong>File Upload Payload Key</strong>. When the <strong>File Upload Payload Key</strong> is defined, in the <strong>File Upload Payload Field Value</strong> drop-down list, select one of the following types: 
<ul>
 
<li><strong>File Name</strong>
 
<li><strong>File Size</strong>
 
<li><strong>File Content Type</strong>
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
  <tr>
   <td>Data Type
   </td>
   <td>Select one of these user input types:
<ul>

<li><strong>String</strong> – Users can input any sequence of numbers, letters, or special characters.

<li><strong>Number</strong> – Users can input a number. No special characters are allowed.

<li><strong>Boolean</strong> – User can input a Boolean value of true or false.

<li><strong>Email</strong> – User can input a valid email address.

<li><strong>Object</strong> – Data from an app can be received as JSON objects, for example, as location details defined as: 
 “location” : { 
               “lat” : 17.4374614, 
               “lng” : 78.4482878 
            } 
where you can refer to the properties in a request chain or task request as location.lat, and location.lng.

<li><strong>Array</strong> – Users can pass a comma-separated list of values to the app. For example, in <em>Google Calendar</em>, multiple attendees with data can be passed as: 
“attendees”: [“user1”, “user2”, “user3”]When selected, specify the <strong>Type</strong> for the array of end-user input as one of: 
<ul>
 
<li><strong>String</strong></li>
 
<li><strong>Number</strong></li>
 
<li><strong>Boolean</strong></li>
 
<li><strong>Email</strong></li>
 
<li><strong>Array</strong></li>
 
<li><strong>Date</strong></li>
</ul>

<li><strong>Date</strong> – Users can type a complete date or select it from a date picker.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Placeholder
   </td>
   <td>The text displayed below the input textbox to help the user define the field. This field is only displayed for some <strong>Field Types</strong>.
   </td>
  </tr>
  <tr>
   <td>Visibility
   </td>
   <td>Specify if the task input field should be visible or hidden from the end-user.
<p>
The <strong>Visibility</strong> field can also be set to <strong>Custom</strong> field where data is captured from the user but not used as a query parameter or payload field. For example, with a <em>JIRA</em> app, posting a comment on a ticket using an @mention tag as shown below:
<p>
“@Mike, please look into this issue”
<p>
The <em>JIRA</em> API to <em>Post a comment</em> requires one query field and one payload field as:
<ul>

<li>Issue ID

<li>Comment

<p>
With the <strong>Visibility</strong> field set to <strong>Custom</strong>, you can capture the user information for the user mentioned as <code>@Mike</code> using the <em>JIRA</em> API to fetch data to append to the <code>comment</code> field value, but not to use as payload field or query field. 
The default <strong>Visibility</strong> field setting is <strong>Visible</strong>.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Mandatory
   </td>
   <td>Select if the end-user must define this setting to save the task settings configuration.
   </td>
  </tr>
  <tr>
   <td>Untranspose the Key</td>
   <td>Select to disable key transposition by Kore.ai. By default, Kore.ai transposes a key/value pair, for example, <code>"parameter":"value"</code> is transposed by Kore.ai to <code>"parameter:{value:"actualValue"}</code>. When selected, keys are not transposed by Kore.ai and passed in the response as received.
   </td>
  </tr>
</table>

<ol start="2"><li>Click <b>Add & Continue</b> to save the alert task field for the API request.</li>
<li>Create another alert task field, or click <b>Add & Exit</b> to save the alert task field for the API request.</li>
<li>Close the dialog.</li></ol>

## Access Using a Connector

To get started with defining access using a connector for a task, follow these steps:

1. On the **API Request** tab, expand the **Access using a connector** section.
2. In the **Access Using A Connector** field, select **Yes** to enable access for Kore.ai Apps using the Kore.ai Connector agent. 

    This option is only visible if a Kore.ai Connector agent is configured and enabled in your enterprise on-premises network. 

    <img src="../images/access-using-a-connector.png" alt="access using a connector" title="access using a connector" style="border: 1px solid gray; zoom:75%;">

## Add the Response Sample

In the **Response Sample** section, you can enter or paste examples of the key-value pairs that you expect to receive in the task payload. When you define the response sample, the keys specified in the **Response Sample** section are available as drop-down choices for handling the output data.

To add the sample response, follow the steps below:

1. On the **API Request** tab, expand the **Sample Response** section.
2. Enter your Response Sample that contains the key-value pairs from your JSON response payload. 
3. Do one of the following:

    * To format the view of the response as a JSON structure with indentation as shown in the following illustration, click the **Formatted** icon.
    <img src="../images/sample-response-soap.png" alt="sample response" title="sample response" style="border: 1px solid gray; zoom:75%;">

    * To format the view of the response in serialized compact form as shown in the following illustration, click the **Unformatted** icon.

## Website Preview Content

Some web services send links to preview media as part of the payload response. In this section, you can enable or disable preview links, and define the path to the links in the payload. 

By default, website preview links are disabled. The following illustration is an example of the **Preview Website Link Content in Post** section, when **Yes** is selected.

<img src="../images/preview-website-link-soap.png" alt="preview website link" title="preview website link" style="border: 1px solid gray; zoom:75%;">

When enabled, define the path to the preview links in the payload in the **Path to the Link (toPreview)** field, if the path is not in the root of the payload. 



The following example shows an RSS payload where the preview link is nested under `item.link.` 

``` json
{
  "item": {
    "title": "Sample article title",
    "guid": {
      "-isPermaLink": "false",
      "#text": "1234567890"
    },
    "link": "https://www.example.com/articles/sample-article"
  }
}
```

When **Preview website link content in Post** is enabled, select preview objects such as:

* **Preview Title** – Displays the title of the website content.
* **Preview Description** – Displays the description of the website content.
* **Preview Media(Video)** – Enables display of video links from the website content.
* **Preview Media(Image)** – Enables display of image links from the website content.