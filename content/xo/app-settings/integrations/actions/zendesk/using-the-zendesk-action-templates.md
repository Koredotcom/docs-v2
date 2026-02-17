# Using the Zendesk Action Templates

You can use the **Prebuilt Action Templates** from your Zendesk integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using the Zendesk action templates:

1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  


3. On the Create Dialog Task pop-up, under the Integration, select the Zendesk option to view the action templates.  
<img src="../images/zendesk-tem-img2.png" alt="Integration - Zendesk" title="Integration - Zendesk" style="border: 1px solid gray;zoom:50%;"/>

4. Select any of the dialog task templates and click **Proceed**. For example, select the **Create a ticket** template.
5. If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the Actions page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank}.  
<img src="../images/zendesk-tem-img3.png" alt="Explore Integrations" title="Explore Integrations" style="border: 1px solid gray;zoom:50%;"/>
 

## Zendesk Actions

The following Zendesk actions are supported in this release:


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
   <td>Create a Ticket
   </td>
   <td>Creates a ticket in the Zendesk system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Update a ticket
   </td>
   <td>Updates a ticket in the Zendesk system. (Currently, this action is not supported by the Zendesk Integration.)
   </td>
   <td>PUT
   </td>
  </tr>
  <tr>
   <td>Delete a ticket
   </td>
   <td>Deletes a ticket from the Zendesk system. (Currently, this action is not supported by the Zendesk Integration.)
   </td>
   <td>DELETE
   </td>
  </tr>
  <tr>
   <td>View all tickets
   </td>
   <td>Retrieves all tickets from the Zendesk system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>View ticket(s) by ID(s)
   </td>
   <td>View tickets with multiple IDs of the Zendesk system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Search ticket by keywords
   </td>
   <td>Search a ticket using the keywords from the Zendesk system.
   </td>
   <td>GET
   </td>
  </tr>
</table>



### Create a Ticket

Steps to create a ticket in the Zendesk integration:

1. Refer to the [Installing the Zendesk templates ](configuring-the-zendesk-action.md){:target="_blank} section to install this template.
2. The _Create a Ticket_ dialog task is added with the following components:  
<img src="../images/zendesk-tem-img4.png" alt="Create a Ticket dialog task is added" title="Create a Ticket dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createTicket** – A user intent to create a ticket.
    2. **subject**, **body**, and **priority** – Entity nodes for entering the required ticket details.
    3. **createTicketService** – A bot action service to create a ticket in an external integration. Click the **Plus** icon to expand to view the _createTicketService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/zendesk-tem-img5.png" alt="Create a Ticket - Edit request" title="Create a Ticket - Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**

        ```
        {
        "ticket": {
        "subject": "POST request from postman",
        "comment": {
        "body": "Ticket Created!!"
        }
        }
        }
        ```

        To add one or more responses, scroll down and click the **+Add Response** button:

        **Sample Response**:

        ```
        {
        "ticket": {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/29.json",
        "id": 29,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-29T11:39:53Z",
        "updated_at": "2022-08-29T11:39:53Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [],
        "followup_ids": [],
        "ticket_form_id": 6462152210717,
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true
        },
        "audit": {
        "id": 6518083257117,
        "ticket_id": 29,
        "created_at": "2022-08-29T11:39:53Z",
        "author_id": 6462105132317,
        "metadata": {
        "system": {
        "client": "PostmanRuntime/7.29.2",
        "ip_address": "115.114.88.222",
        "location": "India",
        "latitude": 21.9974,
        "longitude": 79.0011
        },
        "custom": {}
        },
        "events": [
        {
        "id": 6518083257245,
        "type": "Comment",
        "author_id": 6462105132317,
        "body": "Ticket Created!!",
        "html_body": "
        Ticket Created!!
        ",
        "plain_body": "Ticket Created!!",
        "public": true,
        "attachments": [],
        "audit_id": 6518083257117
        },
        {
        "id": 6518083257373,
        "type": "Create",
        "value": "POST request from postman",
        "field_name": "subject"
        },
        {
        "id": 6518083257501,
        "type": "Create",
        "value": "6462105132317",
        "field_name": "requester_id"
        },
        {
        "id": 6518083257629,
        "type": "Create",
        "value": null,
        "field_name": "priority"
        },
        {
        "id": 6518083257757,
        "type": "Create",
        "value": null,
        "field_name": "type"
        },
        {
        "id": 6518083257885,
        "type": "Create",
        "value": "open",
        "field_name": "status"
        },
        {
        "id": 6518083258013,
        "type": "Create",
        "value": "6462105132317",
        "field_name": "assignee_id"
        },
        {
        "id": 6518083258141,
        "type": "Create",
        "value": "6462137623581",
        "field_name": "group_id"
        },
        {
        "id": 6518083258269,
        "type": "Create",
        "value": "6462137623837",
        "field_name": "organization_id"
        },
        {
        "id": 6518083258397,
        "type": "Create",
        "value": "6462126132253",
        "field_name": "brand_id"
        },
        {
        "id": 6518083258525,
        "type": "Create",
        "value": "6462152210717",
        "field_name": "ticket_form_id"
        },
        {
        "id": 6518083258653,
        "type": "Notification",
        "via": {
        "channel": "rule",
        "source": {
        "from": {
        "deleted": false,
        "title": "Notify all agents of received request",
        "id": 6462152240797
        },
        "rel": "trigger"
        }
        },
        "subject": "[{{ticket.account}}] {{ticket.title}}",
        "body": "A ticket (#{{ticket.id}}) by {{ticket.requester.name}} has been received. It is unassigned.\n\n{{ticket.latest_comment_html}}",
        "recipients": [
        6462105132317
        ] },
        {
        "id": 6518083258781,
        "type": "Notification",
        "via": {
        "channel": "rule",
        "source": {
        "from": {
        "deleted": false,
        "title": "Notify requester of new proactive ticket",
        "id": 6462152234397
        },
        "rel": "trigger"
        }
        },
        "subject": "{{ticket.title}}",
        "body": "This ticket was created on your behalf.\n\nTo add additional comments, reply to this email.\n\n{{ticket.latest_public_comment_html}}",
        "recipients": [
        6462105132317
        ] }
        ],
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {
        "name": "Jane Doe",
        "address": "jane.doe@example.com"
        },
        "rel": null
        }
        }
        }
        }
        ```

    5. **createTicketScript** – A bot action script to create a ticket in an external integration.
    6. **createTicketMessage** – A message node with the script to display responses for creating a ticket.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create a ticket as shown below:  
<img src="../images/zendesk-tem-img6.png" alt="VA prompt to Create a Ticket" title="VA prompt to Create a Ticket" style="border: 1px solid gray;zoom:50%;"/>

6. Expand and click View Ticket to view the details in the Zendesk instance.  
<img src="../images/zendesk-tem-img7.png" alt="View the ticket details in the Zendesk instance" title="View the ticket details in the Zendesk instance" style="border: 1px solid gray;zoom:50%;"/>


### Update a Ticket

This action template is not yet supported by the Zendesk Integration.


### View All Tickets

Steps to view all tickets in the Zendesk integration:

1. Refer to the [Installing the Zendesk templates ](configuring-the-zendesk-action.md#step-2-install-the-zendesk-action-templates){:target="_blank}section to install this template.
2. The _View All Tickets_ dialog task is added with the following components:   
<img src="../images/zendesk-tem-img8.png" alt="View All Tickets dialog task is added" title="View All Tickets dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **listAllTickets** – A user intent to view all tickets.
    2. **listAllTicketsService** – A bot action service to fetch all tickets from an external integration. Click the **Plus** icon to expand to view the _listAllTicketsService_ bot action component properties.
    3. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response**.  
    <img src="../images/zendesk-tem-img9.png" alt="View All Tickets - Add Response" title="View All Tickets - Add Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "tickets": [
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/7.json",
        "id": 7,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-25T07:31:22Z",
        "updated_at": "2022-08-29T08:02:02Z",
        "type": "task",
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": "high",
        "status": "closed",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/9.json",
        "id": 9,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-25T07:40:33Z",
        "updated_at": "2022-08-25T07:40:33Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/68.json",
        "id": 68,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-09-08T06:48:14Z",
        "updated_at": "2022-09-08T06:48:14Z",
        "type": null,
        "subject": "hckhfc",
        "raw_subject": "hckhfc",
        "description": "YDKI",
        "priority": null,
        "status": "new",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": null,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true
        }
        ],
        "next_page": null,
        "previous_page": null,
        "count": 49
        }
        ] }
        ```

    4. **listAllTicketsMessage** – A message node with to display responses for viewing all tickets.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to view all tickets as shown below:  
<img src="../images/zendesk-tem-img10.png" alt="VA prompt to View All Tickets" title="VA prompt to View All Tickets" style="border: 1px solid gray;zoom:50%;"/>


### View Ticket(s) by ID(s)

Steps to find a ticket using the ID in the Zendesk integration:

1. Refer to the [Installing the Zendesk templates ](configuring-the-zendesk-action.md#step-2-install-the-zendesk-action-templates){:target="_blank}section to install this template.
2. The _View Ticket(s) by ID(s)_ dialog task is added with the following components:  
<img src="../images/zendesk-tem-img11.png" alt="View Ticket(s) by ID(s) dialog task is added" title="View Ticket(s) by ID(s) dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **viewTicketbyId** – A user intent to find a ticket by ID.
    2. **multipleticketIds** – Entity nodes for entering the multiple ticket IDs.
    3. **viewTicketbyIdsService** – A bot action service to find a ticket in an external integration. Click the **Plus** icon to expand to view the viewTicketbyIdsService bot action component properties.
    4. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response**:  
    <img src="../images/zendesk-tem-img12.png" alt="View Ticket(s) by ID(s) - Add response" title="View Ticket(s) by ID(s) - Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "tickets": [
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/33.json",
        "id": 33,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-09-01T11:13:55Z",
        "updated_at": "2022-09-06T10:41:50Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": "urgent",
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/34.json",
        "id": 34,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-09-01T11:22:23Z",
        "updated_at": "2022-09-06T10:41:50Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": "urgent",
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true
        }
        ],
        "next_page": null,
        "previous_page": null,
        "count": 2
        }
        ```

    5. **viewTicketsbyIdsScript** – A bot action script to view tickets with IDs in an external integration.
    6. **updateTicketMessage** – A message node with the script to view tickets by Ids.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to find a ticket with IDs as shown below:  
<img src="../images/zendesk-tem-img13.png" alt="VA prompt to find Ticket(s) by ID(s)" title="VA prompt to find Ticket(s) by ID(s)" style="border: 1px solid gray;zoom:50%;"/>


### Search Ticket with Keywords

Steps to search ticket with keywords from the Zendesk integration:

1. Refer to the [Installing the Zendesk templates ](configuring-the-zendesk-action.md#step-2-install-the-zendesk-action-templates){:target="_blank}section to install this template.
2. The _Search Ticket with Keywords_ dialog task is added with the following components:  
<img src="../images/zendesk-tem-img14.png" alt="Search Ticket with Keywords dialog task is added" title="Search Ticket with Keywords dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **searchTickets** – A user intent to search tickets.
    2. **searchKeywords** – Entity nodes for entering the keywords to search tickets.
    3. **searchTicketService** – A bot action service to find a ticket by keyword in an external integration. Click the **Plus** icon to expand to view the _searchTicketService_ bot action component properties.
    4. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response** as shown below:  
    <img src="../images/zendesk-tem-img15.png" alt="Search Ticket with Keywords - Add response" title="Search Ticket with Keywords Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "results": [
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/31.json",
        "id": 31,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-09-01T10:41:31Z",
        "updated_at": "2022-09-01T10:41:31Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/35.json",
        "id": 35,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-09-01T12:35:36Z",
        "updated_at": "2022-09-01T12:35:36Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/34.json",
        "id": 34,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-09-01T11:22:23Z",
        "updated_at": "2022-09-06T10:41:50Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": "urgent",
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/33.json",
        "id": 33,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-09-01T11:13:55Z",
        "updated_at": "2022-09-06T10:41:50Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": "urgent",
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/16.json",
        "id": 16,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-25T10:29:29Z",
        "updated_at": "2022-08-25T10:29:29Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/9.json",
        "id": 9,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-25T07:40:33Z",
        "updated_at": "2022-08-25T07:40:33Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/29.json",
        "id": 29,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-29T11:39:53Z",
        "updated_at": "2022-09-01T09:56:08Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/18.json",
        "id": 18,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-25T11:23:47Z",
        "updated_at": "2022-08-25T11:23:47Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/17.json",
        "id": 17,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-25T11:22:41Z",
        "updated_at": "2022-08-25T11:22:41Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/19.json",
        "id": 19,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-25T11:26:05Z",
        "updated_at": "2022-08-25T11:26:05Z",
        "type": null,
        "subject": "POST request from bot",
        "raw_subject": "POST request from bot",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/13.json",
        "id": 13,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-25T08:06:55Z",
        "updated_at": "2022-08-29T11:01:36Z",
        "type": null,
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": null,
        "status": "closed",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        },
        {
        "url": "https://abc2152.zendesk.com/api/v2/tickets/7.json",
        "id": 7,
        "external_id": null,
        "via": {
        "channel": "api",
        "source": {
        "from": {},
        "to": {},
        "rel": null
        }
        },
        "created_at": "2022-08-25T07:31:22Z",
        "updated_at": "2022-08-29T08:02:02Z",
        "type": "task",
        "subject": "POST request from postman",
        "raw_subject": "POST request from postman",
        "description": "Ticket Created!!",
        "priority": "high",
        "status": "closed",
        "recipient": null,
        "requester_id": 6462105132317,
        "submitter_id": 6462105132317,
        "assignee_id": 6462105132317,
        "organization_id": 6462137623837,
        "group_id": 6462137623581,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [],
        "custom_fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [
        {
        "id": 6569480672029,
        "value": null
        },
        {
        "id": 6623552373405,
        "value": null
        },
        {
        "id": 6623181187997,
        "value": null
        }
        ],
        "followup_ids": [],
        "brand_id": 6462126132253,
        "allow_channelback": false,
        "allow_attachments": true,
        "result_type": "ticket"
        }
        ],
        "facets": null,
        "next_page": null,
        "previous_page": null,
        "count": 12
        }
        ```

    5. **searchTicketScript** – A bot action service to search a ticket by field in an external integration.
    6. **searchTicketMessage** – A message node with the script to display responses for searching tickets with keywords.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to find a ticket with the keyword as shown below:  
<img src="../images/zendesk-tem-img16.png" alt="VA prompt to Search Ticket with Keywords" title="Search Ticket with Keywords Add response" style="border: 1px solid gray;zoom:50%;"/>


### Delete a Ticket

This action template is not yet supported by the Zendesk Integration.