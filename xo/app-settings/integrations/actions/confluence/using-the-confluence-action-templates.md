# Using the Confluence Action Templates

You can use the **Prebuilt Action Templates** from your Confluence integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using Confluence action templates:

1. Ensure that you have configured [Confluence](configuring-the-confluence-action.md){:target="_blank"} and [installed templates](configuring-the-confluence-action.md#step-2-install-the-confluence-action-templates){:target="_blank"} successfully.

2. Go to **Automation AI** > **Use Cases** > **Dialogs**. All the dialogs are displayed.

3. Click the auto-created dialog. The the canvas opens with all required entity nodes, service nodes, and message scripts.

## Confluence Actions

The following Confluence action is supported in the latest version of the XO Platform:


<table border="1">
  <tr>
   <td><strong>Supported Actions</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Method</strong>
   </td>
  </tr>
  <tr>
   <td>Create Content
   </td>
   <td>Creates content in the Confluence space.
   </td>
   <td>POST
   </td>
  </tr>
</table>


### Create Content

Steps to create content using the Confluence integration:

1. Refer to the [Installing the Confluence Templates](configuring-the-confluence-action.md#step-2-install-the-confluence-action-templates){:target="_blank"} section to install this template.
2. The _createContent_ dialog task is added with the following components:  
<img src="../images/confluence-action-img14-tem-img4.png" alt="Dialog added" title="Dialog added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createContent**: A user intent to create content in the Confluence space.
    2. **contentType**, **spaceKey,** **contentTitle**, and **contentBody** – Entity nodes for entering the required details to create content.
    3. **getResourceIdService** – A bot action service to fetch the resource ID from the Confluence integration. Click the **Plus** icon to expand to view the getResourceIdService bot action component properties. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/confluence-tem-img5.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**

        ```
        {
        "title": "Page 1",
        "type": "page",
        "space": {
        "key": "SFPWP"
        },
        "status": "current",
        "body": {
        "storage": {
        "value": "Here is the value of this body",
        "representation": "storage"
        }
        }
        }
        ```


        To add one or more responses, scroll down and click the +Add Response button:  
        <img src="../images/confluence-tem-response-img5.png" alt="Response" title="Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "id": "21004299",  
        "type": "page",  
        "status": "current",  
        "title": "Page 1",
        "space": {
        "id": 196612,
        "key": "SFPWP",
        "name": "Space For Playing with Postman",
        "type": "global",
        "status": "current",
        "_expandable": {
        "settings": "/rest/api/space/SFPWP/settings",
        "metadata": "",
        "operations": "",
        "lookAndFeel": "/rest/api/settings/lookandfeel?spaceKey=SFPWP",
        "identifiers": "",
        "permissions": "",
        "icon": "",
        "description": "",
        "theme": "/rest/api/space/SFPWP/theme",
        "history": "",
        "homepage": "/rest/api/content/196695"
        },
        "_links": {
        "webui": "/spaces/SFPWP",
        "self": "https://xyz.atlassian.net/wiki/rest/api/space/SFPWP"
        }
        },
        "history": {
        "latest": true,
        "createdBy": {
        "type": "known",
        "accountId": "632852448b75455be45293bd",
        "accountType": "atlassian",
        "email": "alan.walker@xyz.com",
        "publicName": "alan.walker",
        "profilePicture": {
        "path": "/wiki/aa-avatar/632852448b75455be45293bd",
        "width": 48,
        "height": 48,
        "isDefault": false
        },
        "displayName": "alan.walker",
        "isExternalCollaborator": false,
        "_expandable": {
        "operations": "",
        "personalSpace": ""
        },
        "_links": {
        "self": "https://purushottam1.atlassian.net/wiki/rest/api/user?accountId=632852448b75455be45293bd"
        }
        },
        "createdDate": "2023-07-11T11:29:38.860Z",
        "_expandable": {
        "lastUpdated": "",
        "previousVersion": "",
        "lastOwnedBy": "",
        "contributors": "",
        "nextVersion": "",
        "ownedBy": ""
        },
        "_links": {
        "self": "https://purushottam1.atlassian.net/wiki/rest/api/content/21004299/history"
        }
        },
        "version": {
        "by": {
        "type": "known",
        "accountId": "632852448b75455be45293bd",
        "accountType": "atlassian",
        "email": "alan.walker@xyz.com",
        "publicName": "alan.walker",
        "profilePicture": {
        "path": "/wiki/aa-avatar/632852448b75455be45293bd",
        "width": 48,
        "height": 48,
        "isDefault": false
        },
        "displayName": "alan.walker",
        "isExternalCollaborator": false,
        "_expandable": {
        "operations": "",
        "personalSpace": ""
        },
        "_links": {
        "self": "https://purushottam1.atlassian.net/wiki/rest/api/user?accountId=632852448b75455be45293bd"
        }
        },
        "when": "2023-07-11T11:29:38.860Z",
        "friendlyWhen": "just a moment ago",
        "message": "",
        "number": 1,
        "minorEdit": false,
        "ncsStepVersion": "1",
        "ncsStepVersionSource": "ncs-ack",
        "confRev": "confluence$content$21004299.4",
        "contentTypeModified": false,
        "_expandable": {
        "collaborators": "",
        "content": "/rest/api/content/21004299"
        },
        "_links": {
        "self": "https://purushottam1.atlassian.net/wiki/rest/api/content/21004299/version/1"
        }
        },
        "ancestors": [
        {
        "id": "196695",
        "type": "page",
        "status": "current",
        "title": "Space For Playing with Postman",
        "macroRenderedOutput": {},
        "extensions": {
        "position": 435
        },
        "_expandable": {
        "container": "/rest/api/space/SFPWP",
        "metadata": "",
        "restrictions": "/rest/api/content/196695/restriction/byOperation",
        "history": "/rest/api/content/196695/history",
        "body": "",
        "version": "",
        "descendants": "/rest/api/content/196695/descendant",
        "space": "/rest/api/space/SFPWP",
        "childTypes": "",
        "schedulePublishInfo": "",
        "operations": "",
        "schedulePublishDate": "",
        "children": "/rest/api/content/196695/child",
        "ancestors": ""
        },
        "_links": {
        "self": "https://purushottam1.atlassian.net/wiki/rest/api/content/196695",
        "tinyui": "/x/VwAD",
        "editui": "/pages/resumedraft.action?draftId=196695",
        "webui": "/spaces/SFPWP/overview"
        }
        }
        ],
        "container": {
        "id": 196612,
        "key": "SFPWP",
        "name": "Space For Playing with Postman",
        "type": "global",
        "status": "current",
        "history": {
        "createdBy": {
        "type": "known",
        "accountId": "632852448b75455be45293bd",
        "accountType": "atlassian",
        "email": "alan.walker@xyz.com",
        "publicName": "alan.walker",
        "profilePicture": {
        "path": "/wiki/aa-avatar/632852448b75455be45293bd",
        "width": 48,
        "height": 48,
        "isDefault": false
        "
        },
        "displayName": "alan.walker",
        "isExternalCollaborator": false,
        "_expandable": {
        "operations": "",
        "personalSpace": ""
        },
        "_links": {
        "self": "https://xyz.atlassian.net/wiki/rest/api/user?accountId=632852448b75455be45293bd"
        }
        },
        "createdDate": "2022-11-21T13:02:10.295Z"
        },
        "_expandable": {
        "settings": "/rest/api/space/SFPWP/settings",
        "metadata": "",
        "operations": "",
        "lookAndFeel": "/rest/api/settings/lookandfeel?spaceKey=SFPWP",
        "identifiers": "",
        "permissions": "",
        "icon": "",
        "description": "",
        "theme": "/rest/api/space/SFPWP/theme",
        "homepage": "/rest/api/content/196695"
        },
        "_links": {
        "webui": "/spaces/SFPWP",
        "self": "https://xyz.atlassian.net/wiki/rest/api/space/SFPWP
        },
        "macroRenderedOutput": {},
        "body": {
        "storage": {
        "value": "Here is the value of this body",
        "representation": "storage",
        "embeddedContent": [],
        "_expandable": {
        "content": "/rest/api/content/21004299"
        }
        },
        "_expandable": {
        "editor": "",
        "atlas_doc_format": "",
        "view": "",
        "export_view": "",
        "styled_view": "",
        "dynamic": "",
        "editor2": "",
        "anonymous_export_view": ""
        }
        },
        "extensions": {
        "position": 3472
        },
        "_expandable": {
        "childTypes": "",
        "schedulePublishInfo": "",
        "metadata": "",
        "operations": "",
        "schedulePublishDate": "",
        "children": "/rest/api/content/21004299/child",
        "restrictions": "/rest/api/content/21004299/restriction/byOperation",
        "descendants": "/rest/api/content/21004299/descendant"
        },
        "_links": {
        "editui": "/pages/resumedraft.action?draftId=21004299",
        "webui": "/spaces/SFPWP/pages/21004299/storage+ddd",
        "context": "/wiki",
        "self": "https://xyz.atlassian.net/wiki/rest/api/content/21004299",
        "tinyui": "/x/C4BAAQ",
        "collection": "/rest/api/content",
        "base": "https://xyz.atlassian.net/wiki"
        }
        }
        ```
        


    4. **createContentService** – A bot action service to create content in the Confluence space. Click the **Plus** icon to expand to view the createContentService bot action component properties. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters.
    5. **createContentMessage** – A message node with the script to display responses for creating content.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the AI Agent console to create content on Confluence as shown below:  
<img src="../images/confluence-tem-img6.png" alt="VA console prompt to create content" title="VA console prompt to create content" style="border: 1px solid gray;zoom:50%;"/>

6. Enter a title and body details when prompted by the AI Agent as shown below:  
<img src="../images/confluence-tem-img7.png" alt="VA console prompt to enter title and body" title="VA console prompt to enter title and body" style="border: 1px solid gray;zoom:50%;"/>

7. You will notice that content is created with the title and body on Confluence. Expand and click the **View Content** button.  
<img src="../images/confluence-tem-img8.png" alt="Content created, expand to view" title="Content created, expand to view" style="border: 1px solid gray;zoom:50%;"/>

8. You can view the page on Confluence.  
<img src="../images/confluence-tem-img9.png" alt="View page in Confluence" title="View page in Confluence" style="border: 1px solid gray;zoom:50%;"/>
