# Alert Task – WebHook API Request

In this article, we will see how to configure an API Request for a WebHook service Alert Task. [Alert task](../use-cases/alert-tasks.md).

For an Alert task with the **Connection Type** specified as **Webhook**, you will need to define:

## Content Type 

The **Content Type** describes the type of data exchanged between the XO Platform and your website or application, and the key-value pairs expected in the task payload response. 

To define the Content Type for the API Request, expand the **Content Type** tab and select one of these options:
<img src="../images/content-type.png" alt="authorize to use account" title="authorize to use account" style="border: 1px solid gray; zoom:75%;">

* **JSON** – JavaScript Object Notation is an open standard format using human-readable text to transmit data objects as attribute-value pairs. You can use JSON to transmit data between the Kore.ai servers and your web application.
* **RSS** – Rich Site Summary, or Really Simple Syndication, is a family of standardized formats used to publish frequently updated information such as blog entries, news headlines, audio, and video.
* **XML** – Extensible Markup Language is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. Oftentimes, web services use XML schemas to process the XML data.
* **URL Encoded JSON** – URLs using JSON encoding for reserved characters.
* **CSV** – Comma-separated value lists.
* **Text** – Text-based key-value pairs.
* **Twitter Encoded JSON** – URLs for Twitter using JSON encoding for reserved characters.
* **Multipart/Form-data** – An encoding type that allows files to be sent through an HTTP POST request method if you want to allow a user to upload a file from a form.
* **Multipart/Related** – Used when the same information is presented in different body parts in different forms. The body parts are ordered by increasing complexity.
* **Oracle ADF** – For Oracle Application Development Framework.

## The Sample Response

**The Sample** **Response** section lets you define key-value pairs that you expect to receive in the Alert task payload. 

The keys that you provide are available as drop-down choices for handling the data to display to the end-user. 

When you define the response sample, the keys specified in the **Response Sample** section are available as drop-down choices for handling the output data.

To add a Sample Response, follow the steps below:

1. On the **API Request** tab, expand the **Sample Response** section.
2. **Enter your Response Sample** that contains the key-value pairs from your JSON response payload. Do one of the following:

  * To format the view of the response as a JSON structure with indentation as shown in the following illustration, click the **Formatted** icon.
  <img src="../images/response-sample.png" alt="response sample" title="response sample" style="border: 1px solid gray; zoom:75%;">

  * To format the view of the response in serialized compact form, click the **Unformatted** icon.

## Alert Tasks Path  
 
In the previous section, **Alert Tasks Path** lets you define a specific path for data from the API. This is an optional field that you can use to specify if the **Response Sample** section contains a hierarchical tree structure of data and you only want a specific hierarchical level submitted for the task request object.

To define the **Alert Tasks Path** for an alert task using a webhook, follow the steps below:

1. On the **API Request** tab, click the **Expand** icon in the **Alert Tasks Path** section as shown in the following illustration.
<img src="../images/alert-tasks-path.png" alt="authorize to use account" title="authorize to use account" style="border: 1px solid gray; zoom:75%;">

For example, in the following **Response Sample**, you may only want to expose the user data in the alert task response by defining the user in the **Alert Tasks Path** field.

```js
{
   "user":{
      "timeZone":"Asia/Kolkata",
      "active":"true",
      "displayName":"John Doe",
      "avatarUrls":{
         "32x32":"https://koreteam.atlassian.net/secure/useravatar?size=medium&ownerId=john.doe&avatarId=11801",
         "16x16":"https://koreteam.atlassian.net/secure/useravatar?size=xsmall&ownerId=john.doe&avatarId=11801",
         "24x24":"https://koreteam.atlassian.net/secure/useravatar?size=small&ownerId=john.doe&avatarId=11801",
         "48x48":"https://koreteam.atlassian.net/secure/useravatar?ownerId=john.doe&avatarId=11801"
      },
      "emailAddress":"john.doe@example.com",
      "key":"john.doe",
      "name":"john.doe",
      "self":"https://koreteam.atlassian.net/rest/api/2/user?username=john.doe"
   },
   "webhookEvent":"jira:issue_updated",
   "timestamp":"1438431826045",
   "user_key":"john.doe",
   "user_id":"john.doe"
}
```

<ol start="2"><li>After you enter the <b>Alert Tasks Path</b> field, click <b>Save</b>.</li></ol>