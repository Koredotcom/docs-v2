# Using the Microsoft Graph Action Templates

You can use the **Prebuilt Action Templates** from your Microsoft Graph integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using Microsoft Graph action templates:

1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  

3. On the Dialog Task pop-up, under the Integration, select the **Microsoft Graph** option to view the action templates.  
<img src="../images/ms-graph-tem-img2.png" alt="Integration - Microsoft Graph" title="Integration - Microsoft Graph" style="border: 1px solid gray;zoom:50%;"/>

4. If you haven't configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the Actions page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.  
<img src="../images/ms-graph-tem-img3.png" alt="Explore Integrations" title="Explore Integrations" style="border: 1px solid gray;zoom:50%;"/>


## Microsoft Graph Actions

The following Microsoft Graph actions are supported:


<table border="1">
  <tr>
   <td><strong>Supported Tasks</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Method</strong>
   </td>
  </tr>
  <tr>
   <td>List all events
   </td>
   <td>Retrieves all events from the Microsoft Graph system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>List all to-do lists
   </td>
   <td>Retrieves all to-do list items from the Microsoft Graph system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Create a to-do list
   </td>
   <td>Create a to-do list in the Microsoft Graph system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Create an event
   </td>
   <td>Creates an event in the Microsoft Graph system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Send an Email
   </td>
   <td>Sends an email to the user from the Microsoft Graph system.
   </td>
   <td>POST
   </td>
  </tr>
</table>



### List All Events

Steps to view all events in the Microsoft Graph integration:

1. Refer to the [Installing the Microsoft Graph templates](configuring-the-microsoft-graph-action.md#step-2-install-the-microsoft-graph-action-templates){:target="_blank"} section to install this template.
2. The _List All Events_ dialog task is added with the following components:  
<img src="../images/ms-graph-tem-img4.png" alt="List All Events dialog task is added" title="List All Events dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **listallEvents**: A user intent to view all events.
    2. **listAllEventsService**: A bot action service to view all events in an external integration. Click the **Plus** icon to expand to view the _listAllEventsService_ bot action component properties.
    3. In the **Component Properties** window, To add one or more responses, scroll down and click **+Add Response**.  
    <img src="../images/ms-graph-tem-img5.png" alt="Add Response" title="Add Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('john.doe%40outlook.com')/events",
        "value": [
        {
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAAG8nV2w==\"",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgBGAAADiea_kiTHkkGyRB2nztFSRQcA72QERTxLykaU1e_TybdcNQAAAgENAAAA72QERTxLykaU1e_TybdcNQAAABvMY3kAAAA=",
        "createdDateTime": "2022-12-09T07:08:07.7644246Z",
        "lastModifiedDateTime": "2022-12-09T07:08:08.0300829Z",
        "changeKey": "72QERTxLykaU1e+TybdcNQAAGxxxx==",
        "categories": [],
        "transactionId": null,
        "originalStartTimeZone": "India Standard Time",
        "originalEndTimeZone": "India Standard Time",
        "iCalUId": "040000008200E00074C5B7101A82E008000000003CEC5EFD9C0BD9010000000000000000100000005885E42DB5DA6C4990A52975F77CAD8A",
        "reminderMinutesBeforeStart": 15,
        "isReminderOn": true,
        "hasAttachments": false,
        "subject": "event test",
        "bodyPreview": "",
        "importance": "normal",
        "sensitivity": "normal",
        "isAllDay": false,
        "isCancelled": false,
        "isOrganizer": true,
        "responseRequested": true,
        "seriesMasterId": null,
        "showAs": "busy",
        "type": "singleInstance",
        "webLink": "https://outlook.live.com/owa/?itemid=AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgBGAAADiea%2BkiTHkkGyRB2nztFSRQcA72QERTxLykaU1e%2BTybdcrl=1&path=/calendar/item",
        "onlineMeetingUrl": null,
        "isOnlineMeeting": false,
        "onlineMeetingProvider": "unknown",
        "allowNewTimeProposals": true,
        "occurrenceId": null,
        "isDraft": false,
        "hideAttendees": false,
        "responseStatus": {
        "response": "organizer",
        "time": "0001-01-01T00:00:00Z"
        },
        "body": {
        "contentType": "html",
        "content": "\r\n\r\n&lt;!--"
        },
        "start": {
        "dateTime": "2022-12-10T04:30:00.0000000",
        "timeZone": "UTC"
        },
        "end": {
        "dateTime": "2022-12-10T05:10:00.0000000",
        "timeZone": "UTC"
        },
        "location": {
        "displayName": "",
        "locationType": "default",
        "uniqueIdType": "unknown",
        "address": {},
        "coordinates": {}
        },
        "locations": [],
        "recurrence": null,
        "attendees": [
        {
        "type": "required",
        "status": {
        "response": "none",
        "time": "0001-01-01T00:00:00Z"
        },
        "emailAddress": {
        "name": "john.doe@example.com ",
        "address": "john.doe@example.com "
        }
        },
        {
        "type": "required",
        "status": {
        "response": "none",
        "time": "0001-01-01T00:00:00Z"
        },
        "emailAddress": {
        "name": " john.doe@example.com",
        "address": " john.doe@example.com"
        }
        }
        ],
        "organizer": {
        "emailAddress": {
        "name": "John Doe",
        "address": "john.doe@outlook.com"
        }
        },
        "onlineMeeting": null,
        "calendar@odata.associationLink": "https://graph.microsoft.com/v1.0/users('john.doe@outlook.com')/calendars('AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAERTxLykaU1e_')/$ref",
        "calendar@odata.navigationLink": "https://graph.microsoft.com/v1.0/users"
        },
        {
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAACgSHcw==\"",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgBGAAADiea_kiTHkkGyRB2nztAA=",
        "createdDateTime": "2022-11-10T06:01:05.8265067Z",
        "lastModifiedDateTime": "2022-11-10T06:01:06.3275042Z",
        "changeKey": "72QERTxLykaU1e+TybdcNQAAxxxx==",
        "categories": [],
        "transactionId": null,
        "originalStartTimeZone": "India Standard Time",
        "originalEndTimeZone": "India Standard Time",
        "iCalUId": "040000008200E00074C5B7101A82E008000000003A2221D2C9F4D8010000000000000000100000003A24283C5796EB4AB4442F1ECBF05FF7",
        "reminderMinutesBeforeStart": 15,
        "isReminderOn": true,
        "hasAttachments": false,
        "subject": "My event 1",
        "bodyPreview": "",
        "importance": "normal",
        "sensitivity": "normal",
        "isAllDay": false,
        "isCancelled": false,
        "isOrganizer": true,
        "responseRequested": true,
        "seriesMasterId": null,
        "showAs": "busy",
        "type": "singleInstance",
        "webLink": "https://outlook.live.com/owa/?itemid=AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgBGAAADiea%2BkiTybdcxvsurl=1&path=/calendar/item",
        "onlineMeetingUrl": null,
        "isOnlineMeeting": false,
        "onlineMeetingProvider": "unknown",
        "allowNewTimeProposals": true,
        "occurrenceId": null,
        "isDraft": false,
        "hideAttendees": false,
        "responseStatus": {
        "response": "organizer",
        "time": "0001-01-01T00:00:00Z"
        },
        "body": {
        "contentType": "html",
        "content": "\r\n"
        },
        "start": {
        "dateTime": "2022-11-09T18:42:00.0000000",
        "timeZone": "UTC"
        },
        "end": {
        "dateTime": "2022-11-09T19:25:00.0000000",
        "timeZone": "UTC"
        },
        "location": {
        "displayName": "",
        "locationType": "default",
        "uniqueIdType": "unknown",
        "address": {},
        "coordinates": {}
        },
        "locations": [],
        "recurrence": null,
        "attendees": [
        {
        "type": "required",
        "status": {
        "response": "none",
        "time": "0001-01-01T00:00:00Z"
        },
        "emailAddress": {
        "name": "john.doe@example.com ",
        "address": "john.doe@example.com "
        }
        },
        {
        "type": "required",
        "status": {
        "response": "none",
        "time": "0001-01-01T00:00:00Z"
        },
        "emailAddress": {
        "name": "jane.doe@example.com",
        "address": " jane.doe@example.com"
        }
        }
        ],
        "organizer": {
        "emailAddress": {
        "name": "john doe",
        "address": "john.doe@example.com"
        }
        },
        "onlineMeeting": null,
        "calendar@odata.associationLink": "https://graph.microsoft.com/v1.0/users('_TybdcNQAAAgk9AAAA')/$ref",
        "calendar@odata.navigationLink": "https://graph.microsoft.com/v1.0/users('alan@abc.com')/calendars('AQMkADAwATNiZmYAZC01N2E2LTYERTxLykaU1e_TybQERTxLykaU1e_TybdcNQAAAgk9AAAA')"
        }
        ],
        "@odata.nextLink": "https://graph.microsoft.com/v1.0/me/events?%24top=10&%24skip=10"
        }
        }
        ```

    4. **listAllEventstMessage**: A message node with the script to display responses for various events.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to view all events as shown below:  
<img src="../images/ms-graph-tem-img6.png" alt="VA prompt to view all events" title="VA prompt to view all events" style="border: 1px solid gray;zoom:50%;"/>

6. You can now view events in the Microsoft Graph system.


### List All To-Do (Tasks) Lists

Steps to view all to-do lists in the Microsoft Graph integration:

1. Refer to the [Installing the Microsoft Graph templates ](configuring-the-microsoft-graph-action.md#step-2-install-the-microsoft-graph-action-templates){:target="_blank"}section to install this template.
2. The _List All Todo Lists_ dialog task is added with the following components:  
<img src="../images/ms-graph-tem-img7.png" alt="List All Todo Lists dialog task is added" title="List All Todo Lists dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **listAllToDolists**: A user intent to view all to-do lists.
    2. **listAllToDoListService**: A bot action service to get all the to do lists and send an email from an external integration. Click the **Plus** icon to expand to view the _listAllToDoListService_ bot action component properties.
    3. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response**:  
    <img src="../images/ms-graph-tem-img8.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('john1215%40outlook.com')/todo/lists",
        "value": [
        {
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAAHgSugA==\"",
        "displayName": "Tasks",
        "isOwner": true,
        "isShared": false,
        "wellknownListName": "defaultList",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgAuAAADiea_kiTHkkGyRB2nztFSRQEA72QERTxLykaU1e_TybdcNQAAAgESAAAA"
        },
        {
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAAHgSugg==\"",
        "displayName": "create List from bot",
        "isOwner": true,
        "isShared": false,
        "wellknownListName": "none",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgAuAAADiea_kiTHkkGyRB2nztFSRQEA72QERTxLykaU1e_TybdcNQAAAAe9TR8AAAA="
        },
        {
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAAHgSuhA==\"",
        "displayName": "myList1",
        "isOwner": true,
        "isShared": false,
        "wellknownListName": "none",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgAuAAADiea_kiTHkkGyRB2nztFSRQEA72QERTxLykaU1e_TybdcNQAAAAe9TSAAAAA="
        },
        {
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAAHgSuhg==\"",
        "displayName": "Postman created list",
        "isOwner": true,
        "isShared": false,
        "wellknownListName": "none",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgAuAAADiea_kiTHkkGyRB2nztFSRQEA72QERTxLykaU1e_TybdcNQAAAmBlAAAA"
        },
        {
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAAHgSuiA==\"",
        "displayName": "Postman created list3",
        "isOwner": true,
        "isShared": false,
        "wellknownListName": "none",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgAuAAADiea_kiTHkkGyRB2nztFSRQEA72QERTxLykaU1e_TybdcNQAAAAe9TR4AAAA="
        },
        {
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAAHgSuig==\"",
        "displayName": "Task11",
        "isOwner": true,
        "isShared": false,
        "wellknownListName": "none",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgAuAAADiea_kiTHkkGyRB2nztFSRQEA72QERTxLykaU1e_TybdcNQAAAmBkAAAA"
        },
        {
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAAAAAh3w==\"",
        "displayName": "Flagged Emails",
        "isOwner": true,
        "isShared": false,
        "wellknownListName": "flaggedEmails",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgAuAAADiea_kiTHkkGyRB2nztFSRQEA72QERTxLykaU1e_TybdcNQAAAmBhAAAA"
        }
        ]
        ```

    4. **listAllTodoListsMessage**: A message node with script to display responses for various to-do lists.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to view all to-do lists as shown below.  
<img src="../images/ms-graph-tem-img9.png" alt="VA prompt to view All Todo Lists" title="VA prompt to view All Todo Lists" style="border: 1px solid gray;zoom:50%;"/>

6. You can now view all to-do lists in the Microsoft Graph system.


### Create an Event

Steps to create an event in the Microsoft Graph integration:

1. Refer to the [Installing the Microsoft Graph templates ](configuring-the-microsoft-graph-action.md#step-2-install-the-microsoft-graph-action-templates){:target="_blank"}section to install this template.
2. The _Create an Event_ dialog task is added with the following components:  
<img src="../images/ms-graph-tem-img10.png" alt="Create an Event dialog task is added" title="Create an Event dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createEvent**: A user intent to create an event.
    2. **eventSubject**, **startDate**, **startTime**, **endDate**, **endTime**, and **attendeesEmailAddresses**: Entity nodes for gathering the required event details
    3. **getMailboxSettingsService**: A bot action service to fetch information about the mailbox and user’s time zone from an external integration. Click the **Plus** icon to expand to view the _getMailboxSettingsService_ bot action component properties.
    4. **entityFormatterScript**: A script to format all email entities of event attendees.
    5. **createEventService**: A bot action service to create an event in an external integration. Click the **Plus** icon to expand to view the _createEventService_ bot action component properties.
    6. In the **Component Properties** window, click **Edit Request** to modify the request parameters.  
    <img src="../images/ms-graph-tem-img11.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**

        ```
        {
        "subject": "My event 1",
        "start": {
        "dateTime": "2022-11-09T11:45",
        "timeZone": "India Standard Time"
        },
        "end": {
        "dateTime": "2022-11-09T11:50",
        "timeZone": "India Standard Time"
        },
        "attendees": [
        {
        "emailAddress": {
        "address": "john.doe@example.com"
        }
        }
        ] }
        ```

        To add one or more responses, scroll down and click **+Add Response**.

        ```
        {
        "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('john.doe%40outlook.com')/events/$entity",
        "@odata.etag": "W/\"72QERTxLykaU1e+TybdcNQAAKxxx==\"",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgBGAAADiea_kiTHkkGyRB2nztFSRQcA72QERTxLykaU1e_=",
        "createdDateTime": "2022-12-28T14:53:39.8527171Z",
        "lastModifiedDateTime": "2022-12-28T14:53:40.5291771Z",
        "changeKey": "72QERTxLykaU1e+Tybdcxxxxxxxx==",
        "categories": [],
        "transactionId": null,
        "originalStartTimeZone": "India Standard Time",
        "originalEndTimeZone": "India Standard Time",
        "iCalUId": "040000008200E00074C5B7101A82E008000000001D9B0A2CCC1AD901000000000000",
        "reminderMinutesBeforeStart": 15,
        "isReminderOn": true,
        "hasAttachments": false,
        "subject": "My event 1",
        "bodyPreview": "",
        "importance": "normal",
        "sensitivity": "normal",
        "isAllDay": false,
        "isCancelled": false,
        "isOrganizer": true,
        "responseRequested": true,
        "seriesMasterId": null,
        "showAs": "busy",
        "type": "singleInstance",
        "webLink": "https://outlook.live.com/owa/?itemid=AQMkADAwATNiZmYAZC01N2E2LTYyZDYtpath=/calendar/item",
        "onlineMeetingUrl": null,
        "isOnlineMeeting": false,
        "onlineMeetingProvider": "unknown",
        "allowNewTimeProposals": true,
        "occurrenceId": null,
        "isDraft": false,
        "hideAttendees": false,
        "responseStatus": {
        "response": "organizer",
        "time": "0001-01-01T00:00:00Z"
        },
        "body": {
        "contentType": "html",
        "content": "
        },
        "start": {
        "dateTime": "2022-11-09T11:45:00.0000000",
        "timeZone": "India Standard Time"
        },
        "end": {
        "dateTime": "2022-11-09T11:50:00.0000000",
        "timeZone": "India Standard Time"
        },
        "location": {
        "displayName": "",
        "locationType": "default",
        "uniqueIdType": "unknown",
        "address": {},
        "coordinates": {}
        },
        "locations": [],
        "recurrence": null,
        "attendees": [
        {
        "type": "required",
        "status": {
        "response": "none",
        "time": "0001-01-01T00:00:00Z"
        },
        "emailAddress": {
        "name": "alanr@abc.com",
        "address": "alan@abc.com"
        }
        }
        ],
        "organizer": {
        "emailAddress": {
        "name": "Alan Smith",
        "address": "alan@outlook.com"
        }
        },
        "onlineMeeting": null
        }
        ```

    7. **createEventMessage**: A message node with the script to display responses to create events.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create an event as shown below.  
<img src="../images/ms-graph-tem-img12.png" alt="VA prompt to create an event" title="VA prompt to create an event" style="border: 1px solid gray;zoom:50%;"/>

6. You can now view this event in the Microsoft Graph system.


### Create a To-do (Tasks) List

Steps to create a to-do list in the Microsoft Graph integration:

1. Refer to the [Installing the Microsoft Graph templates ](configuring-the-microsoft-graph-action.md#step-2-install-the-microsoft-graph-action-templates){:target="_blank"}section to install this template.
2. The _create a todo list_ dialog task is added with the following components:  
<img src="../images/ms-graph-tem-img13.png" alt="Create a Todo list dialog task is added" title="Create a Todo List dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createTodolist**: A user intent to create a task list.
    2. **listName**: An entity node to gather the name of the todo list.
    3. **createTodolistService**: A bot action service to create a todo list in an external integration. Click the Plus icon to expand to view the _createTodoListService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below.  
    <img src="../images/ms-graph-tem-img14.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**

        ```
        {
        "displayName": "Postman created list3"
        }
        ```

        To add one or more responses, scroll down and click **+Add Response**.

        **Sample Response**

        ```
        {
        "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('john.doe%40outlook.com')/todo/lists/$entity",
        "@odata.etag": "W/\"72QERTxLykaU1e+Tybdcxsxxxxx==\"",
        "displayName": "Postman created list3 (1)",
        "isOwner": true,
        "isShared": false,
        "wellknownListName": "none",
        "id": "AQMkADAwATNiZmYAZC01N2E2LTYyZDYtMDACLTAwCgAuAAADiea_kiTHkkGyRB2nztFSRQEA72QERTxLykaU1e_A="
        }
        ```

    5. **createTodolistMessage**: A message node with the script to display responses to create to-do lists.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create a todo list as shown below.  
<img src="../images/ms-graph-tem-img15.png" alt="prompt to create todo list" title="prompt to create todo list" style="border: 1px solid gray;zoom:50%;"/>

6. You can now view this todo list in the Microsoft Graph system.


### Send an Email

Steps to send email from the Microsoft Graph integration:

1. Refer to the [Installing the Microsoft Graph templates ](configuring-the-microsoft-graph-action.md#step-2-install-the-microsoft-graph-action-templates){:target="_blank"}section to install this template.
2. The _Send email_ dialog task is added with the following components:  
<img src="../images/ms-graph-tem-img16.png" alt="Send EMail dialog task is added" title="Send EMail dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **sendEmail**: A user intent to send an email.
    2. **mailSubject**, **mailContent**, and **recipientsEmailAddresses**: Entity nodes for sending the email to users.
    3. **prepareEmailIdsScript**: A bot action service to fetch email ID in an external integration.
    4. **sendEmailService**: A bot action service to send email from an external integration. Click the Plus icon to expand to view the sendEmailService bot action component properties.
    5. In the Component Properties window, click the **Edit Request** link to modify the request parameters as shown below:  
    <img src="../images/ms-graph-tem-img17.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**

        ```
        {
        "message": {
        "subject": "Testing MS graph",
        "body": {
        "contentType": "Text",
        "content": "Integration is working fine"
        },
        "toRecipients": [
        {
        "emailAddress": {
        "address": "alan@abc.com"
        }
        },
        {
        "emailAddress": {
        "address": "john@abc.com"
        }
        }
        ] }
        }
        ```

    6. **sendMailMessage**: A message node with the script to display responses to send emails.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to send an email, as shown below.  
<img src="../images/ms-graph-tem-img18.png" alt="VA prompt to send email" title="VA prompt to send email" style="border: 1px solid gray;zoom:50%;"/>
