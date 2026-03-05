# Alert Tasks

Alert Tasks deliver timely, relevant, and personalized information from enterprise systems to customers and employees by polling the relevant service in real time or according to a user-defined schedule. These alerts contain detailed information such as name, ID, notes, amount, and more, in a variety of formats for each channel.

## Key Features

* **Scheduled Alerts**: Users can schedule alerts to trigger according to the days, times, and frequencies they specify.
* **Filtered Alerts**: Users can configure alerts to trigger when certain thresholds are met such as amounts, dates, text matches, and more.

## Example Use Cases

The following are a few example use cases for alert tasks:

* Time or location-based promotional offers.
* Scheduled delivery updates.
* Inventory level changes.
* Critical issue notification.
* Weather related alerts.
* Cross-company status changes.

## Configuration

To configure an alert task, you must configure the following settings:

### General Settings

The first step is to define what the task looks like to the end-user. The General Settings include details such as task name, connection mode, connection type, and a few advanced settings such as task demo, search keywords, etc.

1. Open the AI Agent in which you want to create the alert task.
2. Navigate to **Automation > USE CASES > Alert Tasks**.
3. Click **Create Alert Task**.
    
    <img src="../images/create-new-alert-task.png" alt="new alert task" title="new alert task" style="border: 1px solid gray; zoom:75%;"> 

4. Enter the information required by the Alert Task, according to the table below.

<table border="1.5">
<tr bgcolor="#ECECEC">
   <td><strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Task Name
   </td>
   <td>The name of the alert task displayed on the Platform.
   </td>
  </tr>
  <tr>
   <td>Display Name
   </td>
   <td>The name of the alert task is displayed in the Store. The Task Name doubles up as the display name by default. However, you can change the display name.
   </td>
  </tr>
  <tr>
   <td>Connection Type
   </td>
   <td>Select one of these connection types for the task:
<ul>

<li><strong>Webhook</strong> – The web application pushes data to a task URL endpoint provided by Kore.ai.

<li><strong>RSS</strong> – The web service returns RSS feeds when polled by Kore.ai, and may require end-user login credentials.

<li><strong>Webservice</strong> – The web service sends data to Kore.ai when polled by Kore.ai using the end-user account login credentials.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Connection Mode
   </td>
   <td>When the <strong>Connection Type</strong> is set to <strong>Webservice</strong>, specify the <strong>Connection Mode</strong> for the connection as:
<ul>

<li><strong>REST</strong> – The alert task uses a REST API connection. or

<li><strong>SOAP</strong> – The alert task uses a SOAP API connection.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Input Preconditions:
   </td>
   <td>The intent will be detected only if any of the context tags specified as pre-conditions are available in the context at the time of intent detection. This setting is available after clicking More Options.
   </td>
  </tr>
  <tr>
   <td>Context Output:
   </td>
   <td>Define the context tags to be set in the context when this intent is initiated. This setting is available after clicking More Options.
   </td>
  </tr>
</table>

<img src="../images/create-alert-task-settings.png" alt="create alert task" title="create alert task" style="border: 1px solid gray; zoom:75%;"> 

### Advanced Settings

To configure the advanced settings for the task, expand the section and enter the relevant details.

<img src="../images/alerts-advanced-settings.png" alt="advanced settings" title="advanced settings" style="border: 1px solid gray; zoom:75%;">

The following table describes the fields in the **Advanced Settings** section of the **General** tab.

<table border="1.5">
<tr bgcolor="#ECECEC">
   <td><strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Task Install Confirmation Message
   </td>
   <td>The message displayed to the end-user when the task is successfully set up.
   </td>
  </tr>
  <tr>
   <td>Turn Off Confirmation Messages
   </td>
   <td>Select <strong>Yes</strong> to disable confirmation of the execution of a task when using NLP. When <strong>No</strong> is selected, the user is asked to confirm the task before running it.
   </td>
  </tr>
  <tr>
   <td>Search Keywords
   </td>
   <td>Specify one or more search words an end-user can use to help locate this task in the Kore.ai marketplace.
   </td>
  </tr>
  <tr>
   <td>Task Demo Link
   </td>
   <td>Enter the demo link, for example, to display a task demo icon next to the task displayed in the Store.
   </td>
  </tr>
</table>

## Authorization

You must define how the end-user must be authorized to get the alert task notification message. For example, _Twitter_ is an alert task using web services that require an authorized end-user. The authorization for the alert task is the same end-user log-in username and password for _Twitter_ to allow Kore.ai to access the end-user account and poll for the alert task data.

!!!note

    Authorization for alert tasks with the Connection Type set to Webhook is not required as part of the alert task configuration.

After you define the general settings for an alert task, the next step is to go to the **Authorization** section on the **API Request** tab.

To get started with defining the **Authorization** for a task,

1. On the **API Request** tab, click the **Expand** icon in the **Authorization** section.
2. If you have previously defined authorization for this task, you can select from the **Authorization Provider** drop-down list. If your task does not require authentication, you can select **None** in the **Authorization Provider** drop-down list as shown in the following image.
3. To define a new authorization provider, click **Create New**.
4. On the **New Authorization Mechanism** window, select the type of authorization used by your AI Agent from the **Authorization Type** drop-down list.
5. You can choose one of the following types of authorization:
    * [Basic Auth](alert-task-basic-auth.md): A standard protocol to collect username and password information. Kore.ai uses SSL encryption in combination with basic authentication to help secure end-user information.
    * [OAuth v2 Password Grant Type](alert-task-oauth-password-grant-type.md) – Define a custom authorization type for non-standard web service authorization types. 

    * [OAuth v1](alerts-oauth-v1.md): Enables web applications or web services to access protected resources using an API without end-users having to disclose their login credentials to Kore.ai. 
    * [OAuth v2](alerts-oauth-v2.md): The newest version of the OAuth protocol focusing on specific authorization flows for web applications and web services. 
    * [API Key](alert-task-using-api-key.md): An identification and authorization token generated or provided by a web application or web service used to identify the incoming application request, and in some cases, also provide authentication for secure access.  
    <img src="../images/alerts-authorization.png" alt="alerts authorization" title="alerts authorization" style="border: 1px solid gray; zoom:75%;"> 

### API Requests

Configure the API request that asks for data from your website, system, or web application for the task. You can configure the API Request Settings as an action task for WebHook, Rest, SOAP, or RSS APIs. You can define API Parameters, optional API task Initializer, API Request pre- or post-processor, and the API Request. You also need to add a Response Sample expected from your API Request payload.

After you define the authorization mechanism and then click **Save Auth**, you are ready to configure the alert task request. The configuration settings for an alert task request are based on the **Connection Type** that you define for the task:

* Configuring API Request for [WebHook service](alert-tasks-webhook-api.md).
* Configuring API Request for [REST service](alert-task-rest-api.md). 
* Configuring API Request for [SOAP service](alert-tasks-soap-api.md). 
* Configuring API Request for [RSS service](alert-tasks-rss-api-request.md). 

## Bot Responses

After you describe your alert task **General** tab settings and then configure the alert task **API request chain**, you are ready to define how the alert task results are displayed to the end-user. This section describes how to configure an **alert task response**.

To define the response object for an alert task, there are two sections:

* [Report Template Definition](alert-tasks-report-templates.md) – For some tasks, you may want to display report data to the end-user as a link that can display the payload response using a template, such as a table, contact card, or formatted for a specific message type such as a weather report.

!!!note
    
    This section is not used for webhook alert tasks, action tasks, or RSS alert tasks. 



* [Message Definition](alert-tasks-message-definition.md) In this section, you define the look and feel of the data presented to the end-user when the alert is displayed based on the payload delivered by the webhook. 

## Alert Settings

Define the schedule or filter settings for the alert. schedule alerts to trigger according to the days, times, and frequencies they specify, whereas filtered alerts trigger when certain thresholds are met such as amounts, dates, text matches, and more.

After you define the **General** tab settings for your Alert task, configure the **API request chain**, define the **Bot response message**, then you are ready to **define the settings for the task**, such as filters, when the alert task runs, and other advanced options. This section describes how to define the parameters on the **Settings** tab for an alert task.

!!!note

    This section does not apply to webhook alert tasks.

To configure the settings for an alert task, other than a webhook alert task, you will need to define:

* [Filters](alert-tasks-defining-filters.md) You can define filters for end-users to limit the results of an alert task to the results an end-user needs. For example, you can define a filter for the name, or account, or business. When the alert is set up by the end-user, and the filter applied, only alert messages that meet the filter specifications are displayed to the end-user. 
* [Schedule](alert-tasks-configuring-the-schedule.md): Alert tasks only reach out to a web service for data when the AI Agent makes a request. For each task, you need to define when, and how often the web service is queried for data for an alert message. You can define the scheduling options presented to the end-user when the task is set up, as well as the default schedule for the task. 
* [Advanced Settings](alert-tasks-advanced-settings.md) – In the Advanced Settings section, you can define alert task settings for enabling and limiting the initial set of alert messages displayed to the end-user when the task is set up, define alert message reminders, and if required, prevent duplicate messages sent to the user. 

## Version Namespaces

Associate the Variable Namespaces to be used to execute this task. The system will use the variables only from these Namespaces to execute this task. 

<img src="../images/alert-task-associate-namespace.png" alt="Associate Namespace" title="Associate Namespace" style="border:1px solid gray;zoom:70%;">

This option is only available if you have enabled Namespaces. [Learn more](../../app-settings/managing-namespace.md){:target="_blank"}.

<img src="../images/version-namespaces.png" alt="version namespaces" title="version namespaces" style="border: 1px solid gray; zoom:75%;"> 

## View Logs

You may need to troubleshoot alert tasks. In the Kore.ai App Builder tool, you can view logged events for configured and published alert tasks that interact with the XO Platform and third-party applications. The **View Logs** command displays archived log events for each alert task instance that you can use to view the alert task request and the application response.

In the **Alert Tasks** section, click the **Settings** (gear) icon for the task to view logs for, and then click **View Logs**. The **Logs** page for the app alert task opens.
<img src="../images/alert-tasks-settings.png" alt="alert tasks settings" title="alert tasks settings" style="border: 1px solid gray; zoom:75%;"> 


You can refresh the entries on the **Logs** page when needed.

Each log entry represents the results of the alert task as a JSON response.

```js
{
    "requestLogs": [{
        "name": "Request 1",
        "request": {
            "endpoint": "https://www.example.com/rss/{channel}.xml",
            "pathFields": {
                "channel": "latestnews",
                "lastRun": "2025-10-09T10:20:45Z",
                "now": "2025-10-09T10:26:37Z",
                "today": "2025-10-09"
            },
            "payloadFields": {},
            "headerFields": {
                "If-Modified-Since": "Thu, 09 Oct 2025 10:00:00 GMT",
                "If-None-Match": "\"example-123456\""
            }
        },
        "response": {
            "status": 200,
            "headers": {
                "server": "ExampleOps",
                "last-modified": "Thu, 09 Oct 2025 10:15:10 GMT",
                "accept-ranges": "bytes",
                "content-encoding": "gzip",
                "pragma": "no-cache",
                "content-length": "3820",
                "content-type": "application/xml",
                "vary": "Accept-Encoding",
                "expires": "Wed, 01 Jan 1980 05:00:00 GMT",
                "cache-control": "max-age=0, no-cache, no-store, must-revalidate",
                "age": "0",
                "connection": "keep-alive"
            },
            "body": "Example.com Latest News\nLatest updates from Example.com\nhttps://www.example.com\nThu, 09 Oct 2025 15:50:00 +0000\nExample.com\nhttps://www.example.com\nFeed provided by Example.com.\n\nExample.com launches new AI-powered feature\nhttps://www.example.com/news/example-launches-new-ai-feature-2025-10-09\nExample.com releases a new AI-powered module that improves user engagement.\nThu, 09 Oct 2025 15:45:00 +0000\nhttps://www.example.com/news/example-launches-new-ai-feature-2025-10-09\n\nExample.com partners with leading cloud provider\nhttps://www.example.com/news/example-partners-with-cloud-provider-2025-10-09\nExample.com announced a partnership with a major U.S. cloud provider to enhance enterprise solutions.\nThu, 09 Oct 2025 15:40:00 +0000\nhttps://www.example.com/news/example-partners-with-cloud-provider-2025-10-09\n\nExample.com recognized in U.S. AI innovation awards\nhttps://www.example.com/news/example-recognized-us-ai-innovation-awards-2025-10-09\nExample.com has been recognized for excellence in AI innovation at a U.S.-based technology awards ceremony.\nThu, 09 Oct 2025 15:30:00 +0000\nhttps://www.example.com/news/example-recognized-us-ai-innovation-awards-2025-10-09"
        },
        "executionTime": "4860 ms"
    }],
    "alertsData": [{
        "uxmap": {
            "channel": "default",
            "body": "<% var newLink = " + title + "; print(newLink); %><%print(\"\\n\");%><% %>"
        },
        "payload": "{\"title\":[\"Example.com launches new AI-powered feature\"],\"link\":[\"https://www.example.com/news/example-launches-new-ai-feature-2025-10-09\"],\"description\":[\"Example.com releases a new AI-powered module that improves user engagement.\"],\"pubDate\":[\"Thu, 09 Oct 2025 15:45:00 +0000\"],\"guid\":[\"https://www.example.com/news/example-launches-new-ai-feature-2025-10-09\"],\"hash\":\"example1hash123456\",\"_fields_\":{\"channel\":\"latestnews\"},\"_labels_\":{\"channel\":\"Latest News\"},\"secretKey\":\"n-example12345-81be-56d1-9030-0eafbf36a10d\",\"contentType\":\"application/xml\",\"_last_run\":\"2025-10-09T10:20:45.363Z\"}",
        "response": {
            "channel": "default",
            "body": "Example.com launches new AI-powered feature\n",
            "updatedSessionStore": {
                "EnterpriseContext": {},
                "BotContext": {},
                "UserContext": {},
                "UserSession": {},
                "BotUserSession": {}
            }
        }
    }, {
        "uxmap": {
            "channel": "default",
            "body": "<% var newLink = " + title + "; print(newLink); %><%print(\"\\n\");%><% %>"
        },
        "payload": "{\"title\":[\"Example.com partners with leading cloud provider\"],\"link\":[\"https://www.example.com/news/example-partners-with-cloud-provider-2025-10-09\"],\"description\":[\"Example.com announced a partnership with a major U.S. cloud provider to enhance enterprise solutions.\"],\"pubDate\":[\"Thu, 09 Oct 2025 15:40:00 +0000\"],\"guid\":[\"https://www.example.com/news/example-partners-with-cloud-provider-2025-10-09\"],\"hash\":\"example2hash123456\",\"_fields_\":{\"channel\":\"latestnews\"},\"_labels_\":{\"channel\":\"Latest News\"},\"secretKey\":\"n-example12345-81be-56d1-9030-0eafbf36a10d\",\"contentType\":\"application/xml\",\"_last_run\":\"2025-10-09T10:20:45.363Z\"}",
        "r



```