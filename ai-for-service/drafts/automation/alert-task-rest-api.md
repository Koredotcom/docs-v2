# Alert Task – REST API Request

We have seen how an [Alert task](../use-cases/alert-tasks.md) can be set up in the Platform. In this section, we will see how to configure an API Request for a REST service.

## General Setup

The following illustration is an example of the **API Request** tab available when editing an Alert Task, with the **Connection Type** specified as **Webservice** and the **Connection Mode** set to **REST** defined on the **General** tab.
<img src="../images/web-service-general-set-up.png" alt="web service general setup" title="web service general setup" style="border: 1px solid gray; zoom:75%;">

For such an Alert Task you will need to define: 

* **Content Type** – The type of data exchanged between Kore.ai and your web application. 
* **Authentication** – If required for your alert task, you will need to define the authentication to access the API, for example, using basic authorization, OAuth, or API Key. 
* **Parameters** – Define one or more parameters used to process the API request, for example, input from user prompts, selection by an end-user from a list of choices, a URL, and so forth. 
* **Initializer** – Specify custom JavaScript to run, or set session variables prior to creating a task instance when web services require code to be executed, or session variables set, or modification of user context details before an API request is executed. 
* **Request** – Define a request chain used to make an API call to a web service to initiate the task using URLs and paths to your AI Agent to initiate the delivery of the data payload from the web service to the Platform. The request chain can consist of pre-processors, API requests, and post-processors. 
* **Response Sample** – Define key/value pairs that you expect to receive in the task payload. The keys that you provide are available as drop-down choices for handling the data to display to the end-user. 
* **Preview Website Link Content in Post** – The website preview content displayed in the task notification message.

Click **Save** to save the API request settings.

## Content Type

The **Content Type** describes the type of data exchanged between Kore.ai and your app website or application, and the key-value pairs expected in the task payload response. To define the Content Type for the API Request (REST), expand the **Content Type** tab and select one of these options:

<img src="../images/select-content-type.png" alt="select content type" title="select content type" style="border: 1px solid gray; zoom:75%;">

* **JSON** – JavaScript Object Notation is an open standard format using human-readable text to transmit data objects as attribute-value pairs. You can use JSON to transmit data between the Kore.ai servers and your App web application.
* **RSS** – Rich Site Summary, or Really Simple Syndication, is a family of standardized formats used to publish frequently updated information such as blog entries, news headlines, audio, and video.
* **XML** – Extensible Markup Language is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. Oftentimes, web services use XML schemas to process the XML data.
* **URL Encoded JSON** – URLs using JSON encoding for reserved characters.
* **CSV** – Comma-separated value lists.
* **Text** – Text-based key-value pairs.
* **Twitter Encoded JSON** – URLs for Twitter using JSON encoding for reserved characters.
* **Multipart/Form-data** – An encoding type that allows files to be sent through an HTTP POST request method if you want to allow a user to upload a file from a form.
* **Multipart/Related** – Used when the same information is presented in different body parts in different forms. The body parts are ordered by increasing complexity.
* **Oracle ADF** – For Oracle Application Development Framework.

## Authorization 

If you require an authorization provider for your Alert Task, you will need to configure it according to its authentication method. See [Alert Task using API Key](alert-task-using-api-key.md).

## Parameters

Follow these steps to define the API Request (REST) parameters:

1. Click the **Parameters** section, and then click **Add**. The _Set Up Task Parameter_ dialog opens.
<img src="../images/set-task-parameter-rest-api.png" alt="set task parameter" title="set task parameter" style="border: 1px solid gray; zoom:75%;">

2. Depending on your Alert Task configuration, enter the values for the relevant fields as described in the following table. 

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td>
    <strong>FIELD NAME</strong>
   </td>
   <td>
    <strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>
    Parameter Name
   </td>
   <td>
    The title of the task input field displayed to the user, for example, <em>Choose account</em>
   </td>
  </tr>
  <tr>
   <td>
    Prompt Message
   </td>
   <td>
    The help description displayed below the parameter name, for example, <em>Which account would you like to access?</em>
   </td>
  </tr>
  <tr>
   <td>
    Parameter Key
   </td>
   <td>
    The task key that represents the end-user input value that you want to collect, for example, <em>accountType</em>.
   </td>
  </tr>
  <tr>
   <td>
    Parameter Type
   </td>
   <td>
    Specifies the type of task input field displayed in the end-user interface to collect user input for the request object to assign to the <strong>Key</strong> value. The default setting is <strong>Textbox</strong>, but can be customized to any one of the following:
<ol>

<li><strong>Date</strong> – Displays the <strong>Format</strong> field where you can select the date format syntax for the end-user to define when the task is configured for their account. In the <strong>Select Date Format</strong> drop-down list, select one of the following: 
<ul>
 
<li><strong>dd-MM-YYYY</strong> – For example, 16-05-1999
 
<li><strong>MM-dd-YYYY</strong> – For example, 05-16-1999
 
<li><strong>dd-MM-YY</strong> – For example, 16-05-99
 
<li><strong>YYYY-MM-dd</strong> – For example, 1999-05-16
</li> 
</ul>

<li><strong>URL</strong> – Displays a text box for the end-user to enter a URL including field validation for correct URL syntax. In the <strong>Placeholder</strong> field, enter the help hint displayed in the text box, for example, Enter the URL for the website here.

<li><strong>Textbox</strong> – Displays a text box for the end-user to enter the text as the task input field, typically just a few words. In the <strong>Placeholder</strong> field, enter the help hint displayed in the text field, for example, Type in the name you want to embroider.

<li><strong>Static Dropdown</strong> – Displays a drop-down list of choices to the end-user. Click <strong>Add Option</strong> to begin adding the list of items to display to the end-user with the following parameters: 
<ul>
 
<li><strong>Option Name </strong>– The name of the option displayed to the end-user.
 
<li><strong>Option Value</strong> – The value the represents the <strong>Option Name</strong> returned to the application.
 
<li><strong>Default Value</strong> – Select the default value for the option when more than one option is defined.
 
<li><strong>Searchable</strong> – Select to enable dynamic search and display as the end-user enters text in this field, or if no matches, allow free-form entry.
</li> 
</ul>

<li>Click <strong>Save</strong>. To add additional items, click <strong>Add Option</strong> again. Edit or remove options in the <strong>Actions</strong> column for options.

<li><strong>Dynamic Dropdown</strong> – Displays a drop-down list dynamically populated at runtime based on the response from a URL for your App, for example, a list of projects for a <em>JIRA</em> task notification. Define the following properties for a dynamically populated dropdown. 
<ul>
 
<li><strong>Endpoint URL</strong> – The App endpoint URL, for example, https://app.asana.com/api/1.0/workspaces.
 
<li><strong>Endpoint Content Type</strong> – The content type expected from the specified endpoint URL. One of: JSON, RSS, XML, URL Encoded JSON, CCV, Text, or Twitter Encoded JSON.
 
<li><strong>Endpoint Method</strong> – One of:  
<ul>
  
<li><strong>GET</strong> – Specifies an HTTP Request GET method for the task field.
  
<li><strong>POST</strong> – Specifies an HTTP Request POST method for the task field.
</li>  
</ul>
 
<li><strong>Response Path</strong> – The path in the response that contains the desired drop-down list values, for example, data.
 
<li><strong>Label Key</strong> – The key for the label of the drop-down option, for example, name.
 
<li><strong>Option Value Key</strong> – The key for the value of the drop-down option, for example, id.
 
<li><strong>Searchable</strong> – Select to enable dynamic search and display as the end-user enters text in this field, or if no matches, allow free-form entry.
</li> 
</ul>

<li><strong>Textarea</strong> – Displays a text area box for the end-user to enter the text as the task input, typically for several sentences. In the <strong>Placeholder</strong> field, enter the help hint displayed inside the text area.

<li><strong>Type Ahead</strong> – Displays a dynamically populated drop-down list of choices to the end-user at runtime when the user enters three or more characters that match the search results based on the response from the URL defined for the task. For example, a list of projects for a <em>JIRA</em> task notification message. Define the following properties for a dynamically populated drop-down. 
<ul>
 
<li><strong>Endpoint URL</strong> – The App endpoint URL, for example, https://app.asana.com/api/1.0/workspaces.
 
<li><strong>Endpoint Content Type</strong> – The content type expected from the specified endpoint URL. One of: JSON, RSS, XML, URL Encoded JSON, CCV, Text, Twitter Encoded JSON, Multipart/Form-data, or Multipart/Related.
 
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

<li><strong>Email</strong> – Displays a text box for the end-user to input an email address. In the <strong>Placeholder</strong> field, enter the helpful hint to display to the end-user inside the text box.

<li><strong>Date & Time</strong> – Displays a text box for the end-user to input a date with time. In the <strong>Format</strong> field, enter the expected date or time format to display to the end-user in the date text box. In the <strong>Select Date Format</strong> drop-down list, select the date with time format.

<li><strong>Time Zone</strong> – Displays a drop-down list of time zones based on the operating system settings.

<li><strong>Location</strong> – Displays a text box for the end-user to enter a geographical location, for example, Orlando, FL, or 32801.

<li><strong>Nested Form</strong> – Displays end-user input fields in a nested format below the parent input field. Specify the following fields for a nested form input field: 
<ul>
 
<li><strong>Array Element Type</strong> – Select the data type of the parent input form element.
 
<li><strong>Add Nested Form Field</strong> – Click to add one or more nested form fields.
</li> 
</ul>

<li><strong>File Upload</strong> – Displays end-user control to search for, and select a file to upload. When clicked, enter the <strong>File Upload Payload Key</strong>. When the <strong>File Upload Payload Key</strong> is defined, in the <strong>File Upload Payload Field Value</strong> drop-down list, select one of the following types: 
<ul>
 
<li><strong>File Name</strong>
 
<li><strong>File Size</strong>
 
<li><strong>File Content Type</strong>
</li> 
</ul>
</li> 
</ol>
   </td>
  </tr>
  <tr>
   <td>
    Data Type
   </td>
   <td>
    Select one of these user input types:
<ol>

<li><strong>String</strong> – Users can input any sequence of numbers, letters, or special characters.

<li><strong>Number</strong> – Users can input a number. No special characters are allowed.

<li><strong>Boolean</strong> – User can input a Boolean value of true or false.

<li><strong>Email</strong> – User can input a valid email address.

<li><strong>Object</strong> – Data from an App can be received as JSON objects, for example, as location details defined as: 
 “location” : { 
               “lat” : 17.4374614, 
               “lng” : 78.4482878 
            } 
where you can refer to the properties in a request chain or task request as location.lat, and location.lng.

<li><strong>Array</strong> – Users can pass a comma-separated list of values to the App. For example, in <em>Google Calendar</em>, multiple attendees with data can be passed as: 
“attendees”: [“user1”, “user2”, “user3”] 
When selected, specify the <strong>Type</strong> for the array of end-user input as one of the following: 
<ul>
 
<li><strong>String</strong>
 
<li><strong>Number</strong>
 
<li><strong>Boolean</strong>
 
<li><strong>Email</strong>
 
<li><strong>Array</strong>
 
<li><strong>Date</strong>
 
<li><strong>Date</strong> – Users can type a complete date or select it from a date picker.
</li> 
</ul>
</li> 
</ol>
   </td>
  </tr>
  <tr>
   <td>
    Is Multi Select
   </td>
   <td>
    Allows the user to make more than one selection or entry. This field is displayed depending on the <strong>Field Type</strong> selected.
   </td>
  </tr>
</table>

<ol start="3"><li>Click the <b>Advanced Settings</b> tab to define additional optional settings for the task fields.</li>

<img src="../images/advanced-settings-rest-api.png" alt="advanced settings" title="advanced settings" style="border: 1px solid gray; zoom:75%;"></ol>

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td>
    <strong>FIELD NAME</strong>
   </td>
   <td>
    <strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>
    Visibility
   </td>
   <td>
    Specify if the task input field should be visible or hidden from the end-user.
<p>

    The <strong>Visibility</strong> field can also be set to <strong>Custom</strong> where data is captured from the user but not used as a query parameter or payload field. For example, with a Jira app, posting a comment on a ticket using an @mention tag as shown below:
<p>

    “@Mike, please look into this issue” 
The JIRA API to ‘Post a comment’ requires one query field and one payload field as:
<ol>

<li>Issue ID

<li>Comment
<p>

    With the <strong>Visibility</strong> field set to <strong>Custom</strong>, you can capture the user information for the user mentioned as <code>@Mike</code> using the JIRA API to fetch data to append to the <code>comment</code> field value, but not to use as payload field or query field. The default <strong>Visibility</strong> field setting is <strong>Visible</strong>.
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>
    Mandatory
   </td>
   <td>
    Select if the end-user must define this setting to save the task settings configuration.
   </td>
  </tr>
  <tr>
   <td>
    Untranspose the Key
   </td>
   <td>
    Select to disable key transposition by Kore.ai. By default, Kore.ai transposes a key/value pair, for example, “parameter”:”value” is transposed by Kore.ai to “parameter:{value:”actualValue”}. When selected, keys are not transposed.
   </td>
  </tr>
  <tr>
   <td>
    Fetch from Session
   </td>
   <td>
    Select to store the user input value for this field as a session variable. When selected, the <strong>Field Value from Session</strong> field is displayed. Select an existing variable, or select <strong>Add New Session Variable</strong> to define a new variable. To create a new session variable, you must select the <strong>Scope</strong> of the variable and define the <strong>Key</strong> to store the variable. In the <strong>Scope</strong> field, select one of:
<ul>

<li><strong>EnterpriseContext</strong> – Define a key/value pair available to all users in an enterprise.

<li><strong>BotContext</strong> – Define a key/value pair available to all users of this app.

<li><strong>UserSession</strong> – Define a key/value pair available for this user for any apps in an enterprise.

<li><strong>BotUserSession</strong> – Define a key/value pair available an app based on user inputs.
</li>
</ul>
   </td>
  </tr>
</table>

<ol start="4"><li>Click <b>Add & Continue</b> to save the parameter for the task request and add another parameter, or click <b>Add & Exit</b> to save the parameter for the task request and close the dialog. You should organize multiple parameters in the order that the app user should provide inputs. Use the up and down icons to move the parameters.</li>
<img src="../images/add-and-continue.png" alt="add and continue" title="add and continue" style="border: 1px solid gray; zoom:75%;"></ol>

## Define an Initializer

To run a task, you may need to put or get values from a session before executing the task using Kore.ai session-specific variables.  For more information, see [Using Session and Context Variables in Tasks](../use-cases/using-session-and-context-variables.md).

 Some web services require executed code, session variables, or modification of user context details before executing an API request. 
 
 For example, a web service may require two-factor user authorization where the first step is a user log in, and the second step is a partner authorization. After validating both these steps, an access token is granted and used in the header of subsequent API calls to that web service. 
 
 Using the **Initializer**, you can complete partner authorization and retrieve the access token from the response of the user authentication. 
 
 The access token can be stored as a custom session variable and set as the header for subsequent API calls.

To configure the task initializer, click the **Initializer** tab. It opens a JavaScript editor in which you can write the required code.

<img src="../images/task-initializer.png" alt="task initializer" title="task initializer" style="border: 1px solid gray; zoom:75%;">

In the JavaScript editor, define the **Key** and the **Scope** as follows:

**EnterpriseContext** – A key-value pair available to all apps and all users in an enterprise. For example, for a GitHub assistant, a user needs to access one or more enterprise repositories. In the **Initializer**, you can persist the repository data as **Gitrepository (Enterprise Context)** with the following JavaScript code:

```js
var userRepository = {
"title": _labels_[repository],
"value": repository
};
EnterpriseContext.put('Gitrepository', userRepository, 200000);
```

**BotContext** – A key-value pair available to all users of this specific app. For example, you may want to set up a default currency for financial transactions in a session based on the user location. In the **Initializer**, you can persist the default currency data as **currency (Bot Context)** with the following JavaScript code:

```js
var defaultCurrency = { TODO Custom JavaScript for location-based currency }
BotContext.put('currency', defaultCurrency, 200000);
```

**UserContext** – A key-value pair available to all apps for a user. These keys are read-only and provided by the system as user data for:

* **id** – The Kore.ai userId.
* **emailId** – The email address associated with the userId.
* **lastName** – The last name of the user.
* **firstName** – The first name of the user.
* **profImage** – The image or avatar filename of the user.
* **profColour** – The account color for the user.
* **activationStatus** – The account status of the user.
* **title** – The title of the user, if defined.
* **orgId** – The organizational ID of the user account, if defined.

**UserSession** – Define a key-value pair available for this specific user for all apps in an enterprise.

For example, you may want to store a user location to make it available to all apps, such as a user home address for commerce, transportation, and home delivery services. 

In the **Initializer**, you can persist the default location data as **HomeLocation (UserSession)** with the following JavaScript code:

```js
var location = {
 "title": labels[location],
 "value": {
 "latitude": location.latitude,
 "longitude": request.location.longitude
 }
};
UserSession.put('HomeLocation', location, '20000');
```

**BotUserSession** – Define a key-value pair available to a specific app based on a specific user’s inputs. 

For example, you may want to persist in a user location for more than one app task. For a travel app, the user may be able to book a flight and a hotel based on the same home and destination addresses. 

In the **Initializer**, you can persist the default home and destination data as **HomeLocation (BotUserSession)** and **DestinationLocation (BotUserSession)** with the following JavaScript code:

```js
var homelocation = {
 "title": labels[request.sourceLocation],
 "value": {
 "latitude": request.sourceLocation.latitude,
 "longitude": request.sourceLocation.longitude
 }
};
BotUserSession.put('HomeLocation', homelocation, '20000');
var destlocation = {
 "title": labels[request.destLocation],
 "value": {
 "latitude": request.destLocation.latitude,
 "longitude": request.destLocation.longitude
 }
};
BotUserSession.put('DestinationLocation', destlocation, '20000');
```

### GET and PUT Syntax

The following code examples show the syntax to GET or PUT a key-value pair for each context type.

```js
"EnterpriseContext" : {
       "get" : function(key){...},//get the specified key
       "put" : function(key, value, ttl){...} //put the value at the key for the specified ttl, ttl is in minutes
   },
   "BotContext" : {
       "get" : function(key){...},//get the specified key
       "put" : function(key, value, ttl){...} //put the value at the key for the specified ttl, ttl is in minutes
   },
   "UserContext" : {
       "get" : function(key){...},//get the specified key
   },
   "UserSession" : {
       "get" : function(key){...},//get the specified key
       "put" : function(key, value, ttl){...} //put the value at the key for the specified ttl, ttl is in minutes
   },
   "BotUserSession" : {
       "get" : function(key){...},//get the specified key
       "put" : function(key, value, ttl){...} //put the value at the key for the specified ttl, ttl is in minutes
   }
```

For example:

```js
    BotContext.put("topicSessionVariable","music",2000);
    UserSession.put("firstName","Mary",20000);
    UserContext.get("firstName");
```

### Exception Syntax

You can also define custom error messages to catch errors before setting up a task, for example, authentication failure. If an exception is captured, the task setup is halted. Use the following syntax to throw the exception:

```js
{
    "exceptions": {
        "message": " Error Message"
    }
}
```

For example,

```js
var ex ={};
var exceptions={};
exceptions.message ='You can not proceed further with out valid permissions';
ex.exceptions = exceptions;
print(JSON.stringify(ex)); //print is mandatory.
```

In the **Initializer** section, you can use session **Keys**, or other session variables, however, you cannot set or access values. For example,

```js
var name = UserContext.get("firstName")+UserContext.get("lastName");
UserSession.put("fullName") = name;
```

In the preceding code example, you PUT a value into the session using a task **Parameter** defined with the **Fetch from Session** field in the **Advanced Settings** section for the task. The **Key** is defined as `fullName` for the custom defined `UserSession` context variable.

### Task Initializer Example

The following code is an example of a **Task Initializer** to get the user ID and email data to pre-populate variables in the API request.

```js
var x = UserContext.get("identities");
var isEmailFound = false;
for (var i = 0; i < x.length; i++) {
    if (x[i].type === "mapped") {
        var identity = x[i].val
        var arr = identity.split("/");
        var pattern = /^cs/i;
        var result = arr[0].match(pattern);
        if (result) {
            isEmailFound = true;
            UserSession.put("rtmEmail", arr[1], '20000');
        }
    }
}
if (!isEmailFound) {
    for (var j = 0; j < x.length; j++) {
        if (x[j].type === "email") {
            UserSession.put("rtmEmail", x[j].val, '20000');
        }
    }
}
```

## Define the Request Chain

In the Request section of the API Request tab, you can define an API request chain consisting of pre-processors, API Requests, and post-processors. At least one API Request is required, while processors are optional.

### API Request

For any task, you will need to define an API request to make a call to a web service to initiate the task. At least one API request is required for each task. For each API request, you must add one or more request URLs and paths to your task to initiate the delivery of the data payload from the web service.

#### Configure the API Request

1. On the **API Request** tab, expand the **Request** section, and then click, **Add API**. The Add API dialog opens, and you can now configure the request.
2. Specify the values for the fields in the **Add API** dialog as described in the following procedure.<img src="../images/add-api-window.png" alt="add api window" title="add api window" style="border: 1px solid gray; zoom:75%;">

3. In the **Name** field, enter the name of your API request, for example, _My API Request_.
4. In the **Method** drop-down list, select the HTTP method used for the task from the following:

    * **POST**– Used to send data to the server such as customer information, file upload, using HTML forms.
    * **PUT**– Replaces the content of the target resource with the content sent.
    * **PATCH** – Appends the content of an existing target resource with the content sent.
    * **DELETE** – Deletes the content of an existing target resource.
    * **GET** – Returns the content of an existing target resource.

5. In the **URL** field, specify the URL for the app task response to the process. For example, <code>https://koremessenger.com/postURL</code>. You can also use session variables in the URL as shown in the following example:
<code>https://mySite.crm.ondemand.com/sap/c4c/odata/v1/c4codata/ServiceRequestCollection?$filter=ID eq '{id}' and ReporterEmail eq '{userEmail}'&amp;$expand=ServiceRequestHistoricalVersion,ServiceRequestDescription</code>

6. In the **Access Using A Connector** field, select **Yes** to enable access for Kore.ai Apps using the Kore.ai Connector agent. This option is only visible if a Kore.ai Connector agent is configured and enabled in your enterprise on-premises network.
7. On the **Headers** tab, in the **Content Type** field, select one of the following supported data types for your sample response data.
        
    * **JSON** – JavaScript Object Notation is an open standard format using human-readable text to transmit data objects as attribute-value pairs. You can use JSON to transmit data between the Kore.ai servers and your App web application.
    * **RSS** – Rich Site Summary, or Really Simple Syndication, is a family of standardized formats used to publish frequently updated information such as blog entries, news headlines, audio, and video.
    * **XML** – Extensible Markup Language is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. Oftentimes, web services use XML schemas to process the XML data.
    * **URL Encoded JSON** – URLs using JSON encoding for reserved characters.
    * **CSV** – Comma-separated value lists.
    * **Text** – Text-based key-value pairs.
    * **Twitter Encoded JSON** – URLs for Twitter using JSON encoding for reserved characters.
    * **Multipart/Form-data** – An encoding type that allows files to be sent through an HTTP POST request method if you want to allow a user to upload a file from a form.
    * **Multipart/Related** – Used when the same information is presented in different body parts in different forms. The body parts are ordered by increasing complexity.
    * **Oracle ADF** – For Oracle Application Development Framework.

8. In the **Authorization Headers** section, select or clear keys to enable or disable the key for the header as shown in the following illustration.
<img src="../images/select-auth-headers.png" alt="select auth headers" title="select auth headers" style="border: 1px solid gray; zoom:75%;">

9. On the **Parameters** tab, select or clear any **Auth Parameters** or **Parameters** to include in the header as shown in the following illustration.
<img src="../images/set-parameters-api-request.png" alt="set parameters" title="set parameters" style="border: 1px solid gray; zoom:75%;">

10. Click **Save** to save and close the API Request configuration.

### Processors

Processors allow you to manipulate data collected in the user session before, during, or after an API request to a web service using JavaScript. 
If you define and place a processor before the API Request, it is a pre-processor. Pre-processors allow you to manage input parameters and values from session variables before the API Request is made. 
If the processor is sequentially placed after the API Request, it is a post-processor. You can use a post-processor to access payload response keys from the API request. To access keys, use one of the following post-processor types:

* **Resolve**: To use the results of one payload response as input for a second request.
* **Spread**: To separate arrays of data in a payload.
* **Extract** – To specify a path to a specific object in a payload with multiple objects.
* **Assign**: To specify a variable name for the payload response.

#### Preprocessors

You can use a pre-processor to manage request parameters before the API Request is executed, using session variables and parameters. When defining a pre-processor, you must set **Type of Process** to **custom** and then enter your code in the JavaScript editor displayed. A pre-processor can only be of **Type custom**.

#### Adding a Preprocessor

1. On the **API Request** page, expand the **Request** tab, and then click **Add Processor**.
<img src="../images/add-pre-processor.png" alt="add pre processor" title="add pre processor" style="border: 1px solid gray; zoom:75%;">

2. Enter the name of your processor in the **Name** field.
3. In the **Type of Process** drop-down list, you must select **Custom** for a pre-processor.

Add your code for manipulating the request parameters as needed using the following syntax: 

```js
{
    "fields": {
        "payloadFields": { // to set value to a payload field
            "key1": "value1", // To set complex Payload field object in the Preprocessors of Alert Task.  
            "key2": "value2"....
        },
        "headerFields": { // to set value to a header field
            "key1": "value1",
            "key2": "value2"....
        },
        "pathFields": { // to set value to a path field or query field.
            "key1": "value1",
            "key2": "value2"....
        }
    }
}
```

For example, the following code snippet can be used to set the path field or the query field of an API object:

```js
var fields= {};
var pathFields = {};
pathFields.fullName = UserContext.get("firstName")+UserContext.get("lastName")
fields.pathFields = pathFields;
var finalObject = {};
finalObject.fields = fields;
print(JSON.stringify(finalObject));
```

In the previous code, if `firstName` and `lastName` are stored as session variables, as `John` and `Smith` respectively, then the JSON response payload from the pre-processor would be:

```js
{
  fields: {
        "pathFields": {
            "key": "fullName",
            "value": "John Smith"
        }
    }
}
```

In the following pre-processor example, variables are set with session variables prior to the actual API request call.

```js
var fields = {};
var pathFields = {};
var UserEmailID = UserSession.get("rtmEmail");
pathFields.userEmail = UserEmailID;
fields.pathFields = pathFields;
var finalObject = {};
finalObject.fields = fields;
print(JSON.stringify(finalObject));
```

<ol start="4"><li>Click <b>Save</b> to save and close the <b>Add Processor</b> dialog.</li></ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When a processor is placed in the <b>Request</b> section before the API Request, the processor is considered as a pre-processor. When placed after an API Request, the processor is considered a post-processor.</p></div>

#### Adding a Post-Processor

You may need more than one API request to get the desired data payload from your web service, using Kore.ai post-processors.

#### Configure Standard Post Processors

If you want to create a custom post-processor, you could access the response keys of the previous API Request using the following syntax:

<code>payload[0].{ key }</code>

```js
{
 "payload":
   {
    "key1" : "value1",
    "key2" : "value2"
   }
}
```

**Example**

```js
var final = {};
var data = payload[0]; //Accessing the response of the previous API object
data.title[0] = 'New value for key here';
final.payload = data;  // Updating the response of the API object
print(JSON.stringify(final));  // This step is mandatory
```

For custom processors, you must print the final response as shown in the preceding code, otherwise, an empty response is returned. Use the following syntax:

<code>print(JSON.stringify( <<-object->> ))</code>

#### Configure Standard Post Processors

Follow these steps to add a standard post-processor:

1. On the **API Request** tab, expand the **Request** tab, and then click **Add Processor**.
2. Kore.ai also provides a set of standard post-processors that you can use instead of creating custom code for a post-processor. In **Type of Process** field, select one of the following four types of standard processors:

**Resolve**: You can use the results of one payload response as input for a second request. 

For example, click **Add Processor**, enter a **Name** for your processor, set **Type of Process** to **resolve**, and **Key** to the name of the variable, and then define the **Post URL** using a variable from the first API Request. For example, `https://app.asana.com/api/1.0/projects/{project_id}` that returns the id field in the payload response as: 

```js
"id":80468818418144, <br/>
"created_at":"2016-01-14T05:34:35.848Z",
"modified_at":"2016-01-20T04:29:52.505Z",
"owner":{
"id":73114591129714,
"name":"john.doe" },
```

This is then used as a variable input as shown in the following **Post URL**: 
`https://app.asana.com/api/1.0/projects/{id}/tasks?opt_fields=completed,modified_at`

You must also specify the HTML **Content Type** expected in the payload response as well as the HTML **Request** method. 


**Spread**: For payloads that contain arrays of data that you need to separate. 

For example, click **Add Processor**, enter a **Name** for your processor, set the **Key** field to, for example, **data**, and **Type of Process** to **spread** to capture the content in the `data` element in the following code example to extract each item of the array.

```js
{
     "attribution": null,
     "tags": [],
     "type": "image",
     "location": null,
     "comments": {
         "count": 51,
         "data": [{
             "created_time": "1453900980",
             "text": "43rd",
             "from": {
                 "username": "kore_hyd",
                 "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg",
                 "id": "2056218675",
                 "full_name": "Kore.ai Hyd"
             },
             "id": "1171728804843572377"
         }, {
             "created_time": "1453901222",
             "text": "44th",
             "from": {
                 "username": "kore_hyd",
                 "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg",
                 "id": "2056218675",
                 "full_name": "Kore.ai Hyd"
             },
             "id": "1171730841379491107"
         }, {
             "created_time": "1453901997",
             "text": "45th",
             "from": {
                 "username": "kore_hyd",
                 "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg",
                 "id": "2056218675",
                 "full_name": "Kore.ai Hyd"
             },
             "id": "1171737339782450909"
         }, {
             "created_time": "1453902304",
             "text": "46th and 47th",
             "from": {
                 "username": "kore_hyd",
                 "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg",
                 "id": "2056218675",
                 "full_name": "Kore.ai Hyd"
             },
             "id": "1171739915923967873"
         }, {
             "created_time": "1453902638",
             "text": "48th",
             "from": {
                 "username": "kore_hyd",
                 "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg",
                 "id": "2056218675",
                 "full_name": "Kore.ai Hyd"
             },
             "id": "1171742713994497101"
         }, {
             "created_time": "1453964684",
             "text": "49th",
             "from": {
                 "username": "john.doe",
                 "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg",
                 "id": "2679234818",
                 "full_name": "John"
             },
             "id": "1172263199715314941"
         }, {
             "created_time": "1453964710",
             "text": "50th",
             "from": {
                 "username": "kore_hyd",
                 "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg",
                 "id": "2056218675",
                 "full_name": "Kore.ai Hyd"
             },
             "id": "1172263415747136776"
         }, {
             "created_time": "1453964717",
             "text": "51st",
             "from": {
                 "username": "kore_hyd",
                 "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg",
                 "id": "2056218675",
                 "full_name": "Kore.ai Hyd"
             },
             "id": "1172263474056350986"
         }]
```

**Extract**: For payloads that contain multiple objects, you can specify a path to the specific object. 

For example, click **Add Processor**, enter a **Name** for your processor, set the **Key** field to `data`, and then **Type of Process** to **extract** to use the object data in the following payload response.

```js
{
    "user": {
        "full_name": "Kore.ai Hyd",
        "id": "2056218675",
        "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
        "username": "kore_hyd"
    },
    ...
}, "likes": {
    "data": [{
            "full_name": "kstream002",
            "id": "2100724876",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
            "username": "kstream002"
        }
    },
    }
```

**Assign**:  Using the **Assign** processor, you can specify a variable name for the payload response, if needed. 

For example, when the payload does not contain a key for the payload response data. For example, set **Type of Process** to assign, and then in the **Output Variable** field, you can for example, define an output variable for the following payload that is an array of three objects.

```js
  {
    "Cost": "$0.00",
    "Desc1": "$150 bonus after $500 of purchases in the first 3 months from account opening. ",
    "Desc2": "Earn unlimited cash back Earn unlimited 1.5% cash back on every purchase â€" it's automatic. Redeem for cash back â€" any amount, any time. ",
    "Keywords": "weekend dining,online,groceries,fuel,rewards,rebate,365,allaround",
    "OfferName": "Freedom Unlimited",
    "OfferType": "CreditCard",
    "Status": "1",
    "imageURL": "https://www.example.com/file/credit-card.jpg",
    "id": "5b5195e264bbd800"
  },
  {
    "Cost": "$95.00",
    "Desc1": "Pay 0 balance transfer fee when you transfer a balance during the first 60 days.",
    "Desc2": "Jumpstart your financial fitness Get an introductory fee for balance transfers, save on interestâ€ , and get your free monthly credit score.",
    "Keywords": "privileges,rebate,health,wellness,great eastern,insurance,policy,installments,split,cashflo",
    "OfferName": "Premium Plus",
    "OfferType": "CreditCard",
    "Status": "1",
    "imageURL": "https://www.example.com/rMOXYql.jpg",
    "id": "5caf2155873f89c8"
  },
  {
    "Cost": "$10.00",
    "Desc1": "Pay 0 balance transfer fee when you transfer a balance during the first 60 days.",
    "Desc2": "Jumpstart your financial fitness Get an introductory fee for balance transfers, save on interestâ€ , and get your free monthly credit score.",
    "Keywords": "privileges,rebate,health,wellness,great eastern,insurance,policy,installments,split,cashflo",
    "OfferName": "Frequent Flyer",
    "OfferType": "CreditCard",
    "Status": "1",
    "imageURL": "https://www.example.com/uploads/2016/01/credit-card-calculator-image.jpeg",
    "id": "c0b05bc3062658ee"
  }
]
```

In the **Output Variable** field, specify a variable to represent the array, as `offers`.

For example. If you used the **UX Preview** feature, the response from Kore.ai would be:

```js
 {
  "response": {
    "offers": [
      {
        "Cost": "$0.00",
        "Desc1": "$150 bonus after $500 of purchases in the first 3 months from account opening. ",
        "Desc2": "Earn unlimited cash back Earn unlimited 1.5% cash back on every purchase â€" it's automatic. Redeem for cash back â€" any amount, any time. ",
        "Keywords": "weekend dining,online,groceries,fuel,rewards,rebate,365,allaround",
        "OfferName": "Freedom Unlimited",
        "OfferType": "CreditCard",
        "Status": "1",
        "imageURL": "https://www.example.com/file/credit-card.jpg",
        "id": "5b5195e264bbd800"
      },
      {
        "Cost": "$95.00",
        "Desc1": "Pay 0 balance transfer fee when you transfer a balance during the first 60 days.",
        "Desc2": "Jumpstart your financial fitness Get an introductory fee for balance transfers, save on interestâ€ , and get your free monthly credit score.",
        "Keywords": "privileges,rebate,health,wellness,great eastern,insurance,policy,installments,split,cashflo",
        "OfferName": "Premium Plus",
        "OfferType": "CreditCard",
        "Status": "1",
        "imageURL": "https://www.example.com/objectmayhem/images/5/52/Credit_card.png/revision/latest?cb=20130629150408",
        "id": "5caf2155873f89c8"
      }
    ]
  }
}
```

With the **Output Variable** set to `offers`, you can use the variable as `response.offers`. In an App Builder, for example, in a task response object as follows:

```js
print(JSON.stringify(response));
var data = response.offers
for (i = 0; i < data.length; i++) {
    print('<a href="' + data[i].imageURL + '" target="_blank">' + data[i].OfferName + '</a><br>');
    print(data[i].Desc1)
    print('<br>');
    print('<br>');
    print('Cost: ' + data[i].Cost)
    print('<br>');
    if (i < data.length - 1) {
        print('<br>');
        print('<br>');
    }
}
```

<ol start="3"><li>Click <b>Add</b> to save the API request and then create another, or click <b>Add & Exit</b> to save the API request and close the dialog.</li></ol>

For multiple API requests, you should order the requests in the sequential order needed to get to entire data response. 
    
For example, you may need to request a list of workspaces, then a list of projects, and finally, a list of users. Use the **Move Up** icon and the **Move Down** icon to reorder the API requests.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>No confirmation dialog is displayed when deleting an API request. If you click Continue or Save, the delete action is permanent and cannot be undone.</p></div>

## Add the Response Sample

In the **Response Sample** section, you can enter or paste examples of the key-value pairs that you expect to receive in the task payload. When you define the response sample, the keys specified in the **Response Sample** section are available as drop-down choices for handling the output data.

To add a sample response, please follow the steps below:

1. On the **API Request** tab, Expand the **Sample Response** section.
2. Enter your Response Sample that contains the key-value pairs from your JSON response payload. Do one of the following:

  * To format the view of the response as a JSON structure with indentation as shown in the following illustration, click the **Formatted**  icon.
  <img src="../images/format-response.png" alt="format response" title="format response" style="border: 1px solid gray; zoom:75%;">

  * To format the view of the response in serialized compact form as shown in the following illustration, click the **Unformatted** icon.

## Preview Website Link Content

Some web services send links to preview media as part of the payload response. In this section, you can enable or disable preview links, and define the path to the links in the payload. By default, website preview links are disabled. The following illustration is an example of the **Preview Website Link Content in Post** section when **Yes** is selected.
<img src="../images/preview-website-link.png" alt="preview link" title="preview link" style="border: 1px solid gray; zoom:75%;">

When enabled, define the path to the preview links in the payload in the **Path to the Link(toPreview)** field, if the path is not in the root of the payload. For example, in the following code example from an RSS payload, the path to the preview is

```js
"item": [
    {
        "title": "U.S. to Boost Refugee Intake by 30,000 by 2017",
        "guid": {
            "-isPermaLink": "false",
            "#text": "SB12418904751422433479504581245034032986752"
        },
        "link": "https://www.example.com/articles/john-kerry-says-u-s-to-admit-30-000-more-refugees-in-next-2-years-1442768498?mod=fox_australian",
```

When **Preview website link content in Post** is enabled, select preview objects such as:

* **Preview Title** – Displays the title of the website content.
* **Preview Description** – Displays the description of the website content.
* **Preview Media(Video)** – Enables display of video links from the website content.
* **Preview Media(Image)** – Enables display of image links from the website content.