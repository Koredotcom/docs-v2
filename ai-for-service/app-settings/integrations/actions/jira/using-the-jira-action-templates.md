# Using the JIRA Action Templates

You can use the **Prebuilt Action Templates** from your JIRA integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Step to create a dialog task using the JIRA action templates:

1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  


3. On the Dialog Task pop-up, under the Integration, select the Jira option to view the action templates.  
<img src="../images/jira-action-img14-tem-img2.png" alt="Integration - JIRA" title="Integration - JIRA" style="border: 1px solid gray;zoom:50%;"/>

4. If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the Actions page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.  
<img src="../images/jira-tem-img3.png" alt="Explore Integrations" title="Explore Integrations" style="border: 1px solid gray;zoom:50%;"/>


## JIRA Actions

The following Freshdesk actions are supported in this release:


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
   <td>Create an Issue
   </td>
   <td>Creates an issue in the JIRA system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Get an Issue by ID
   </td>
   <td>Fetch an issue details with ID from the JIRA system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Get all issues
   </td>
   <td>Retrieves all issues from the JIRA system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Update an Issue
   </td>
   <td>Updates an issue in the JIRA system.
   </td>
   <td>PUT
   </td>
  </tr>
  <tr>
   <td>Delete an issue
   </td>
   <td>Deletes an issue from the JIRA system.
   </td>
   <td>GET
   </td>
  </tr>
</table>



### Create an Issue

Steps to create an issue in the JIRA integration:

1. Refer to the [Installing the JIRA templates ](configuring-the-jira-action.md#step-2-install-the-jira-action-templates){:target="_blank"}section to install this template.
2. The _Create an issue_ dialog task is added with the following components:  
<img src="../images/jira-tem-img4.png" alt="Create an issue dialog task is added" title="Create an issue dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createIssue** – A user intent to create an issue.
    2. **projectKey**, **summary**, and **issueTypeName** – Entity nodes for creating the issue in the JIRA system.
    3. **getResourceIdService** – A bot action service to get a resource ID of a JIRA site.
    4. **createIssueService** – A bot action service to create an issue in an external integration. Click the **Plus** icon to expand to view the _createIssueService_ bot action component properties.
    5. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/jira-tem-img5.png" alt="Edit Request" title="Edit Request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**:

        ```
        {
        "fields": {
        "summary": "messaging module is not working",
        "issuetype": {
        "name": "Bug"
        },
        "project": {
        "key": "DFJIIP"
        }
        }
        }
        ```

        To add one or more responses, scroll down and click the **+Add Response** button:

        **Sample Response**:

        ```
        {
        "id": "10000",
        "key": "ED-24",
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/10000",
        "transition": {
        "status": 200,
        "errorCollection": {
        "errorMessages": [],
        "errors": {}
        }
        ```


    6. **createdIssueInfoService** – A bot action service to gather more details about an issue in an external integration. Click the **Plus** icon to expand to view the _createdIssueInfoService_ bot action component properties.
    7. **createIssueMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create an issue as shown below:  
<img src="../images/jira-tem-img6.png" alt="VA prompt to create issue" title="VA prompt to create issue" style="border: 1px solid gray;zoom:50%;"/>


### Get an Issue by Key

Steps to find an issue using the key in the JIRA integration:

1. Refer to the [Installing the JIRA templates ](configuring-the-jira-action.md#step-2-install-the-jira-action-templates){:target="_blank"}section to install this template.
2. The _Get Issues by Key_ dialog task is added with the following components:  
<img src="../images/jira-tem-img7.png" alt="Get Issues by Key dialog task is added" title="Get Issues by Key dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **getIssuebyKey** – A user intent to find an issue by key.
    2. **issueKey** – Entity nodes for gathering the required issue details.
    3. **getResourceIdService** – A bot action service to get a resource ID of a JIRA site.
    4. **getIssuebyKeyService** – A bot action service to find an issue in an external integration. Click the **Plus** icon to expand to view the _getIssuebyKeyService_ bot action component properties.
    5. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response**:  
    <img src="../images/jira-tem-img8.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>


        **Sample Response**:

        ```
        {
        {
        "id": "10002",
        "type": {
        "id": "10000",
        "name": "Dependent",
        "inward": "depends on",
        "outward": "is depended by"
        },
        "inwardIssue": {
        "id": "10004",
        "key": "PR-3",
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/PR-3",
        "fields": {
        "status": {
        "iconUrl": "https://your-domain.atlassian.net/images/icons/statuses/open.png",
        "name": "Open"
        }
        }
        }
        }
        ],
        "worklog": [
        {
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/10010/worklog/10000",
        "author": {
        "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
        "accountId": "5b10a2844c20165700ede21g",
        "displayName": "John Doe",
        "active": false
        },
        "updateAuthor": {
        "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
        "accountId": "5b10a2844c20165700ede21g",
        "displayName": "John Doe",
        "active": false
        },
        "comment": {
        "type": "doc",
        "version": 1,
        "content": [
        {
        "type": "paragraph",
        "content": [
        {       
        "type": "text",
        "text": "I did some work here."
        }
        ] }
        ] },
        "updated": "2021-01-18T23:45:00.000+0000",
        "visibility": {
        "type": "group",
        "value": "jira-developers",
        "identifier": "276f955c-63d7-42c8-9520-92d01dca0625"
        },
        "started": "2021-01-17T12:34:00.000+0000",
        "timeSpent": "3h 20m",
        "timeSpentSeconds": 12000,
        "id": "100028",
        "issueId": "10002"
        }
        ],
        "updated": 1,
        "timetracking": {
        "originalEstimate": "10m",
        "remainingEstimate": "3m",
        "timeSpent": "6m",
        "originalEstimateSeconds": 600,
        "remainingEstimateSeconds": 200,
        "timeSpentSeconds": 400
        }
        }
        }
        ```

    6. **getIssuebyKeyMessage** – A message node with script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to find an issue by key as shown below:  
<img src="../images/jira-tem-img9.png" alt="VA prompt to find issue by key" title="VA prompt to find issue by key" style="border: 1px solid gray;zoom:50%;"/>


### Get All Issues

Steps to view all issues in the JIRA integration:

1. Refer to the [Installing the JIRA templates ](configuring-the-jira-action.md#step-2-install-the-jira-action-templates){:target="_blank"}section to install this template.
2. The **Get All Issues** dialog task is added with the following components:  
<img src="../images/jira-tem-img10.png" alt="Get All Issuesdialog task is added" title="Get All Issuesdialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **getAllIssues** – A user intent to view all issues.
    2. **getResourceIdService** – A bot action service to get a resource ID of a JIRA site.
    3. **getAllIssuesService** – A bot action service to fetch all issues from an external integration. Click the **Plus** icon to expand to view the _getAllIssuesService_ bot action component properties.
    4. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response**.  
    <img src="../images/jira-tem-img11.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "expand": "names,schema",
        "startAt": 0,
        "maxResults": 50,
        "total": 1,
        "issues": [
        {
        "expand": "",
        "id": "10002",
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/10002",
        "key": "ED-1",
        "fields": {
        "watcher": {
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/EX-1/watchers",
        "isWatching": false,
        "watchCount": 1,
        "watchers": [
        {
        "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
        "accountId": "5b10a2844c20165700ede21g",
        "displayName": "John Doe",
        "active": false
        }
        ] },
        "attachment": [
        {
        "id": 10000,
        "self": "https://your-domain.atlassian.net/rest/api/3/attachments/10000",
        "filename": "picture.jpg",
        "author": {
        "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
        "key": "",
        "accountId": "5b10a2844c20165700ede21g",
        "accountType": "atlassian",
        "name": "",
        "avatarUrls": {
        "48x48": "https://avatar-management--avatars.server-location.prod.public.atl-paas.net/initials/MK-5.png?size=48&s=48",
        "24x24": "https://avatar-management--avatars.server-location.prod.public.atl-paas.net/initials/MK-5.png?size=24&s=24",
        "16x16": "https://avatar-management--avatars.server-location.prod.public.atl-paas.net/initials/MK-5.png?size=16&s=16",
        "32x32": "https://avatar-management--avatars.server-location.prod.public.atl-paas.net/initials/MK-5.png?size=32&s=32"
        },
        "displayName": "John Doe",
        "active": false
        },
        "created": "2023-02-28T09:45:11.830+0000",
        "size": 23123,
        "mimeType": "image/jpeg",
        "content": "https://your-domain.atlassian.net/jira/rest/api/3/attachment/content/10000",
        "thumbnail": "https://your-domain.atlassian.net/jira/rest/api/3/attachment/thumbnail/10000"
        }
        ],
        "sub-tasks": [
        {
        "id": "10000",
        "type": {
        "id": "10000",
        "name": "",
        "inward": "Parent",
        "outward": "Sub-task"
        },
        "outwardIssue": {
        "id": "10003",
        "key": "ED-2",
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/ED-2",
        "fields": {
        "status": {
        "iconUrl": "https://your-domain.atlassian.net/images/icons/statuses/open.png",
        "name": "Open"
        }
        }
        }
        }
        ],
        "description": {
        "type": "doc",
        "version": 1,
        "content": [
        {
        "type": "paragraph",
        "content": [
        {
        "type": "text",
        "text": "Main order flow broken"
        }
        ] }
        ] },
        "project": {
        "self": "https://your-domain.atlassian.net/rest/api/3/project/EX",
        "id": "10000",
        "key": "EX",
        "name": "Example",
        "avatarUrls": {
        "48x48": "https://your-domain.atlassian.net/secure/projectavatar?size=large&pid=10000",
        "24x24": "https://your-domain.atlassian.net/secure/projectavatar?size=small&pid=10000",
        "16x16": "https://your-domain.atlassian.net/secure/projectavatar?size=xsmall&pid=10000",
        "32x32": "https://your-domain.atlassian.net/secure/projectavatar?size=medium&pid=10000"
        },
        "projectCategory": {
        "self": "https://your-domain.atlassian.net/rest/api/3/projectCategory/10000",
        "id": "10000",
        "name": "FIRST",
        "description": "First Project Category"
        },
        "simplified": false,
        "style": "classic",
        "insight": {
        "totalIssueCount": 100,
        "lastIssueUpdateTime": "2023-02-28T09:45:09.984+0000"
        }
        },
        "comment": [
        {
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/10010/comment/10000",
        "id": "10000",
        "author": {
        "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
        "accountId": "5b10a2844c20165700ede21g",
        "displayName": "John Doe",
        "active": false
        },
        "body": {
        "type": "doc",
        "version": 1,
        "content": [
        {
        "type": "paragraph",
        "content": [
        {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
        ] }
        ] },
        "updateAuthor": {
        "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
        "accountId": "5b10a2844c20165700ede21g",
        "displayName": "John Doe",
        "active": false
        },
        "created": "2021-01-17T12:34:00.000+0000",
        "updated": "2021-01-18T23:45:00.000+0000",
        "visibility": {
        "type": "role",
        "value": "Administrators",
        "identifier": "Administrators"
        }
        }
        ],
        "issuelinks": [
        {
        "id": "10001",
        "type": {
        "id": "10000",
        "name": "Dependent",
        "inward": "depends on",
        "outward": "is depended by"
        },
        "outwardIssue": {
        "id": "10004L",
        "key": "PR-2",
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/PR-2",
        "fields": {
        "status": {
        "iconUrl": "https://your-domain.atlassian.net/images/icons/statuses/open.png",
        "name": "Open"
        }
        }
        }
        },
        {   
        "id": "10002",
        "type": {
        "id": "10000",
        "name": "Dependent",
        "inward": "depends on",
        "outward": "is depended by"
        },
        "inwardIssue": {
        "id": "10004",
        "key": "PR-3",
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/PR-3",
        "fields": {
        "status": {
        "iconUrl": "https://your-domain.atlassian.net/images/icons/statuses/open.png",
        "name": "Open"
        }
        }
        }
        }
        ],
        "worklog": [
        {
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/10010/worklog/10000",
        "author": {
        "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
        "accountId": "5b10a2844c20165700ede21g",
        "displayName": "John Doe",
        "active": false
        },
        "updateAuthor": {
        "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
        "accountId": "5b10a2844c20165700ede21g",
        "displayName": "John Doe",
        "active": false
        },
        "comment": {
        "type": "doc",
        "version": 1,
        "content": [
        {
        "type": "paragraph",
        "content": [
        {
        "type": "text",
        "text": "I did some work here."
        }
        ] }
        ] },
        "updated": "2021-01-18T23:45:00.000+0000",
        "visibility": {
        "type": "group",
        "value": "jira-developers",
        "identifier": "276f955c-63d7-42c8-9520-92d01dca0625"
        },
        "started": "2021-01-17T12:34:00.000+0000",
        "timeSpent": "3h 20m",
        "timeSpentSeconds": 12000,
        "id": "100028",
        "issueId": "10002"
        }
        ],
        "updated": 1,
        "timetracking": {
        "originalEstimate": "10m",
        "remainingEstimate": "3m",
        "timeSpent": "6m",
        "originalEstimateSeconds": 600,
        "remainingEstimateSeconds": 200,
        "timeSpentSeconds": 400
        }
        }
        }
        ],
        "warningMessages": [
        "The value 'bar' does not exist for the field 'foo'."
        ] }
        ```

    5. **getAllIssuesMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to view all issues as shown below:  
<img src="../images/jira-tem-img12.png" alt="VA prompt to view all issues" title="VA prompt to view all issues" style="border: 1px solid gray;zoom:50%;"/>


### Update an Issue

Steps to update an issue in the JIRA integration:

1. Refer to the [Installing the JIRA templates ](configuring-the-jira-action.md#step-2-install-the-jira-action-templates){:target="_blank"}section to install this template.
2. The **Update an Issue** dialog task is added with the following components:  
<img src="../images/jira-tem-img13.png" alt="Update an Issue dialog task is added" title="Update an Issue dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **updateIssue** – A user intent to update an issue.
    2. **issueKey**, **chooseField**, **updatedSummary**, and **newLabel** – Entity nodes for updating the issue details.
    3. **prepareUpdateIssuePayloadScript** – A bot action service to update an issue in an external integration. Click the **Plus** icon to expand to view the _prepareUpdateIssuePayloadScript_ bot action component properties.  
    <img src="../images/jira-tem-img14.png" alt="prepareUpdateIssuePayloadScript" title="prepareUpdateIssuePayloadScript" style="border: 1px solid gray;zoom:50%;"/>

    4. **getResourceIdService** – A bot action service to get a resource ID of a JIRA site.
    5. **updateIssueService** – A bot action service to update an issue in an external integration. Click the **Plus** icon to expand to view the _updateIssueService_ bot action component properties.
    6. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/jira-tem-img15.png" alt="Edit Request" title="Edit Request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**:

        ```
        {
        "update": {
        "summary": [
        {
        "set": "The updated summary"
        }
        ],
        "labels": {
        "add": "Label_to_add_without_space"
        }
        }
        }
        ```

    7. **getIssuebyKeyService** – A bot action service to update an issue in an external integration. Click the **Plus** icon to expand to view the _getIssuebyKeyService_ bot action component properties.
    8. **updateIssueMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to update an issue as shown below:  
<img src="../images/jira-tem-img16.png" alt="VA prompt to update an issue" title="VA prompt to update an issue" style="border: 1px solid gray;zoom:50%;"/>


### Delete an Issue

!!! note

    You can delete an issue only if the JIRA admin or owner of the JIRA project assigns you the permission to delete it. Otherwise, you will not be able to perform this action.

Steps to delete an issue in the JIRA integration:

1. Refer to the [Installing the JIRA templates ](configuring-the-jira-action.md#step-2-install-the-jira-action-templates){:target="_blank"}section to install this template.
2. The _Delete an Issue_ dialog task is added with the following components:  
<img src="../images/jira-tem-img17.png" alt="Delete an Issue dialog task is added" title="Delete an Issue dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **deleteIssue** – A user intent to delete an issue.
    2. **issueKey** – Entity node to gather key to delete an issue.
    3. **getResourceIdService** – A bot action service to delete a resource ID for an issue in an external integration.
    4. **deleteIssueService** – A bot action service to delete an issue in an external integration. Click the **Plus** icon to expand to view the _deleteIssueService_ bot action component properties.
    5. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/jira-tem-img18.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

    6. deleteIssueMessage – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to delete an issue.