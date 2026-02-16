# Using the Freshdesk Action Templates

You can use the **Prebuilt Action Templates** from your Freshdesk integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using the Freshdesk action templates:

1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create Dialog**.  


3. On the Dialog Task pop-up, under the Integration, select the Freshdesk option to view the action templates.  
<img src="../images/freshdesk-action-img10-tem-img2.png" alt="select Freshdesk" title="Select Freshdesk" style="border: 1px solid gray;zoom:50%;"/>

4. If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the Actions page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.  
<img src="../images/freshdesk-tem-img3.png" alt="Explore integrations" title="Explore integrations" style="border: 1px solid gray;zoom:50%;"/>


## Freshdesk Actions

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
   <td>Create a Ticket
   </td>
   <td>Creates a ticket in the Freshdesk system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Get ticket by ID
   </td>
   <td>Fetch ticket details with ID from the Freshdesk system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>List all tickets
   </td>
   <td>Retrieves all tickets from the Freshdesk system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Update a ticket
   </td>
   <td>Update a ticket in the Freshdesk system.
   </td>
   <td>PUT
   </td>
  </tr>
  <tr>
   <td>Search ticket by field
   </td>
   <td>Search a ticket using the field details from the Freshdesk system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Delete a ticket
   </td>
   <td>Deletes a ticket from the Freshdesk system.
   </td>
   <td>DELETE
   </td>
  </tr>
</table>



### Create a Ticket

Steps to create a ticket in the Freshdesk integration:

1. Refer to the [Installing the Freshdesk templates ](configuring-the-freshdesk-action.md#step-2-install-the-freshdesk-action-templates){:target="_blank"}section to install this template.
2. The _Create Ticket_ dialog task is added with the following components:  
<img src="../images/freshdesk-tem-img4.png" alt="Create Ticket dialog task added" title="Create Ticket dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createTicket** – A user intent to create a ticket.
    2. **subject**, **description**, **email**, **priority**, **status**, and **phone** – Entity nodes for gathering the required ticket details.
    3. **createTicketScript** – A bot action script to create a ticket in an external integration.
    4. **createTicketService** – A bot action service to create a ticket in an external integration. Click the **Plus** icon to expand to view the _createTicketService_ bot action component properties.
    5. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/freshdesk-tem-img5.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**:

        ```
        {
        "email": "john.doe@example.com",
        "subject": "Support payment",
        "description": "Payment is pending issue",
        "status": 2,
        "priority": 3
        }
        ```

        To add one or more responses, scroll down and click the +Add Response button:

        **Sample Response**:

        ```
        {
        "ticket": {
        "cc_emails": [],
        "fwd_emails": [],
        "reply_cc_emails": [],
        "fr_escalated": false,
        "spam": false,
        "email_config_id": null,
        "group_id": null,
        "priority": 1,
        "requester_id": 27002140321,
        "requested_for_id": 27002140321,
        "responder_id": null,
        "source": 2,
        "status": 2,
        "subject": "Support payment...",
        "to_emails": null,
        "department_id": null,
        "id": 57,
        "type": "Incident",
        "due_by": "2022-10-07T21:00:00Z",
        "fr_due_by": "2022-09-30T18:00:00Z",
        "is_escalated": false,
        "description": "Payment is pending issue",
        "description_text": "Payment is pending issue",
        "category": null,
        "sub_category": null,
        "item_category": null,
        "custom_fields": {},
        "created_at": "2022-09-28T07:00:14Z",
        "updated_at": "2022-09-28T07:00:14Z",
        "tags": [],
        "attachments": [] }

        ```

    6. **createTicketMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create a ticket as shown below:  
<img src="../images/freshdesk-tem-img6.png" alt="VA console prompts to create ticket" title="VA console prompts to create ticket" style="border: 1px solid gray;zoom:50%;"/>


### Get Ticket by ID

Steps to find a ticket using the ID in the Freshdesk integration:

1. Refer to the [Installing the Freshdesk templates ](configuring-the-freshdesk-action.md#step-2-install-the-freshdesk-action-templates){:target="_blank"}section to install this template.
2. The _Get Ticket by ID_ dialog task is added with the following components:  
<img src="../images/freshdesk-tem-img7.png" alt="Get Ticket By ID dialog" title="Get Ticket By ID dialog" style="border: 1px solid gray;zoom:50%;"/>

    1. **getTicketbyId** – A user intent to find a ticket by ID.
    2. **ticketID** – Entity nodes for gathering the required ticket details.
    3. **getTicketbyIdService** – A bot action service to find a ticket in an external integration. Click the **Plus** icon to expand to view the _getTicketbyIdService_ bot action component properties.
    4. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response**:  
    <img src="../images/freshdesk-tem-img8.png" alt="Response" title="Response" style="border: 1px solid gray;zoom:50%;"/>


        **Sample Response**:

        ```
        {
        "ticket": {
        "cc_emails": [],
        "fwd_emails": [],
        "reply_cc_emails": [],
        "fr_escalated": false,
        "spam": false,
        "email_config_id": null,
        "group_id": null,
        "priority": 1,
        "requester_id": 27002140321,
        "requested_for_id": 27002140321,
        "responder_id": null,
        "source": 2,
        "status": 2,
        "subject": "Support payment...",
        "to_emails": null,
        "department_id": null,
        "id": 57,
        "type": "Incident",
        "due_by": "2022-10-07T21:00:00Z",
        "fr_due_by": "2022-09-30T18:00:00Z",
        "is_escalated": false,
        "description": "Payment is pending issue",
        "description_text": "Payment is pending issue",
        "category": null,
        "sub_category": null,
        "item_category": null,
        "custom_fields": {},
        "created_at": "2022-09-28T07:00:14Z",
        "updated_at": "2022-09-28T07:00:14Z",
        "tags": [],
        "attachments": [] }
        ```

    5. **getTicketbyIdMessage** – A message node with script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to find a ticket by ID as shown below:  
<img src="../images/freshdesk-tem-img9.png" alt="VA console prompt to find ticket by ID" title="VA console prompt to find ticket by ID" style="border: 1px solid gray;zoom:50%;"/>


### List All Tickets

Steps to view all tickets in the Freshdesk integration:

1. Refer to the [Installing the Freshdesk templates ](configuring-the-freshdesk-action.md#step-2-install-the-freshdesk-action-templates){:target="_blank"}section to install this template.
2. The _List All Tickets_ dialog task is added with the following components:  
<img src="../images/freshdesk-tem-img10.png" alt="List All Tickets dialog task" title="List All Tickets dialog task" style="border: 1px solid gray;zoom:50%;"/>

    1. **listAllTickets** – A user intent to view all tickets.
    2. **listAllTicketsService** – A bot action service to fetch all tickets from an external integration. Click the **Plus** icon to expand to view the _listAllCustomersService_ bot action component properties.
    3. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response**.  
    <img src="../images/freshdesk-tem-img11.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "tickets": [
        {
        "subject": "Support payment...",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002140321,
        "responder_id": null,
        "due_by": "2022-10-07T21:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-30T18:00:00Z",
        "id": 57,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-28T07:00:14Z",
        "updated_at": "2022-09-28T07:00:14Z",
        "requested_for_id": 27002140321,
        "to_emails": null,
        "type": "Incident",
        "description": "
        Payment is pending issue...
        ",
        "description_text": "Payment is pending issue...",
        "custom_fields": {}
        },
        {
        "subject": "refer",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002135586,
        "responder_id": null,
        "due_by": "2022-09-28T15:00:00Z",
        "fr_escalated": false,
        "deleted": false,   
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-27T16:00:00Z",
        "id": 55,
        "priority": 3,
        "status": 5,
        "source": 2,
        "created_at": "2022-09-27T10:02:42Z",
        "updated_at": "2022-09-27T10:16:14Z",
        "requested_for_id": 27002135586,
        "to_emails": null,
        "type": "Incident",
        "description": "
        qfvftwd
        ",
        "description_text": "qfvftwd",
        "custom_fields": {}
        },
        {
        "subject": "fresh",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002134408,
        "responder_id": null,
        "due_by": "2022-09-28T15:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-27T16:00:00Z",
        "id": 54,
        "priority": 3,
        "status": 4,
        "source": 2,
        "created_at": "2022-09-27T07:19:38Z",
        "updated_at": "2022-09-27T11:53:52Z",
        "requested_for_id": 27002134408,
        "to_emails": null,
        "type": "Incident",
        "description": "Loremdf fwhguhsfsdkjvvnskvfbewuvbwehj",
        "description_text": "Loremdf fwhguhsfsdkjvvnskvfbewuvbwehj",
        "custom_fields": {}
        },
        {
        "subject": "wet",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002134241,
        "responder_id": null,
        "due_by": "2022-10-06T21:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-29T18:00:00Z",
        "id": 53,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-27T06:34:46Z",
        "updated_at": "2022-09-27T06:34:46Z",
        "requested_for_id": 27002134241,
        "to_emails": null,
        "type": "Incident",
        "description": "
        hrjtyhrte
        ",
        "description_text": "hrjtyhrte",
        "custom_fields": {}
        },
        {
        "subject": "rewet",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002134235,
        "responder_id": null,
        "due_by": "2022-10-06T21:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-29T18:00:00Z",
        "id": 51,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-27T06:31:49Z",
        "updated_at": "2022-09-27T06:31:49Z",
        "requested_for_id": 27002134235,
        "to_emails": null,
        "type": "Incident",
        "description": "
        gnhgfd
        ",
        "description_text": "gnhgfd",
        "custom_fields": {}
        },
        {
        "subject": "frown",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002134223,
        "responder_id": null,
        "due_by": "2022-10-06T21:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-29T18:00:00Z",
        "id": 50,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-27T06:24:47Z",
        "updated_at": "2022-09-27T06:24:47Z",
        "requested_for_id": 27002134223,
        "to_emails": null,
        "type": "Incident",
        "description": "
        frwetyefd
        ",
        "description_text": "frwetyefd",
        "custom_fields": {}
        },
        {
        "subject": "Gehr",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002134213,
        "responder_id": null,
        "due_by": "2022-10-06T21:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-29T18:00:00Z",    
        "id": 48,
        "priority": 1,
        "status": 3,
        "source": 2,
        "created_at": "2022-09-27T06:21:44Z",
        "updated_at": "2022-09-27T06:21:44Z",
        "requested_for_id": 27002134213,
        "to_emails": null,
        "type": "Incident",
        "description": "
        right
        ",
        "description_text": "right",
        "custom_fields": {}
        },
        {
        "subject": "wfwgtg",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002134136,
        "responder_id": null,
        "due_by": "2022-10-06T21:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-29T18:00:00Z",
        "id": 47,
        "priority": 1,
        "status": 4,
        "source": 2,
        "created_at": "2022-09-27T05:59:30Z",
        "updated_at": "2022-09-27T05:59:30Z",
        "requested_for_id": 27002134136,
        "to_emails": null,
        "type": "Incident",
        "description": "
        rwtytuiutyre
        ",
        "description_text": "rwtytuiutyre",
        "custom_fields": {}
        },
        {
        "subject": "fergt",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002134094,
        "responder_id": null,
        "due_by": "2022-10-06T21:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-29T18:00:00Z",
        "id": 46,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-27T05:41:14Z",
        "updated_at": "2022-09-27T05:51:01Z",
        "requested_for_id": 27002134094,
        "to_emails": null,
        "type": "Incident",
        "description": "
        ewqwrtg
        ",
        "description_text": "ewqwrtg",
        "custom_fields": {}
        },
        {
        "subject": "rerun",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002130160,
        "responder_id": null,
        "due_by": "2022-10-06T15:28:50Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-29T12:28:50Z",
        "id": 45,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-26T15:28:50Z",
        "updated_at": "2022-09-26T15:28:50Z",
        "requested_for_id": 27002130160,
        "to_emails": null,
        "type": "Incident",
        "description": "
        fuhrer
        ",
        "description_text": "fuhrer",
        "custom_fields": {}
        },
        {
        "subject": "deuced",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002130150,
        "responder_id": null,
        "due_by": "2022-10-06T15:14:51Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-29T12:14:51Z",
        "id": 43,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-26T15:14:51Z",
        "updated_at": "2022-09-26T15:14:51Z",
        "requested_for_id": 27002130150,
        "to_emails": null,
        "type": "Incident",
        "description": "
        density
        ",
        "description_text": "density",
        "custom_fields": {}
        },
        {
        "subject": "Ingjar",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002130106,
        "responder_id": null,
        "due_by": "2022-10-06T14:44:03Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-28T20:44:04Z",
        "id": 42,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-26T14:44:03Z",
        "updated_at": "2022-09-26T14:44:03Z",
        "requested_for_id": 27002130106,
        "to_emails": null,
        "type": "Incident",
        "description": "
        wfkjge
        ",
        "description_text": "wfkjge",
        "custom_fields": {}
        },
        {
        "subject": "rehear",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002130041,
        "responder_id": null,
        "due_by": "2022-10-06T14:41:24Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-28T20:41:24Z",
        "id": 41,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-26T14:41:24Z",
        "updated_at": "2022-09-26T14:41:24Z",
        "requested_for_id": 27002130041,
        "to_emails": null,
        "type": "Incident",
        "description": "
        jfsg
        ",
        "description_text": "jfsg",
        "custom_fields": {}
        },
        {
        "subject": "Pueu",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002126922,
        "responder_id": null,
        "due_by": "2022-10-06T13:27:43Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-28T19:27:43Z",
        "id": 40,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-26T13:27:43Z",
        "updated_at": "2022-09-26T13:27:43Z",
        "requested_for_id": 27002126922,
        "to_emails": null,
        "type": "Incident",
        "description": "
        ewrtr
        ",
        "description_text": "ewrtr",
        "custom_fields": {}
        },
        {
        "subject": "Support payment...",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002120954,
        "responder_id": null,
        "due_by": "2022-10-06T12:52:44Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-28T18:52:44Z",
        "id": 38,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-26T12:52:44Z",
        "updated_at": "2022-09-26T12:52:44Z",
        "requested_for_id": 27002120954,
        "to_emails": null,
        "type": "Incident",
        "description": "
        Payment is pending issue...
        ",
        "description_text": "Payment is pending issue...",
        "custom_fields": {}
        },
        {
        "subject": "tow",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002126328,
        "responder_id": null,
        "due_by": "2022-10-06T12:11:46Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-28T18:11:46Z",
        "id": 36,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-26T12:11:46Z",
        "updated_at": "2022-09-26T12:11:46Z",
        "requested_for_id": 27002126328,
        "to_emails": null,
        "type": "Incident",
        "description": "
        RORT
        ",
        "description_text": "RORT",
        "custom_fields": {}
        },
        {
        "subject": "WJF",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002126324,
        "responder_id": null,
        "due_by": "2022-10-06T12:06:33Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-28T18:06:33Z",
        "id": 34,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-26T12:06:33Z",
        "updated_at": "2022-09-26T12:06:33Z",
        "requested_for_id": 27002126324,
        "to_emails": null,
        "type": "Incident",
        "description": "
        jjrwehg
        ",
        "description_text": "jjrwehg",
        "custom_fields": {}
        },
        {
        "subject": "Support Needed...",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002120952,
        "responder_id": null,
        "due_by": "2022-10-05T21:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-28T18:00:00Z",
        "id": 6,
        "priority": 1,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-24T18:43:39Z",
        "updated_at": "2022-09-24T18:43:39Z",
        "requested_for_id": 27002120952,
        "to_emails": null,
        "type": "Incident",
        "description": "
        Details about the issue...
        ",
        "description_text": "Details about the issue...",
        "custom_fields": {}
        },
        {
        "subject": "Login issue",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002120946,
        "responder_id": null,
        "due_by": "2022-09-28T18:00:00Z",
        "fr_escalated": true,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-26T20:00:00Z",
        "id": 5,
        "priority": 2,
        "status": 2,
        "source": 1,
        "created_at": "2022-09-24T18:14:56Z",
        "updated_at": "2022-09-24T18:18:52Z",
        "requested_for_id": 27002120946,
        "to_emails": null,
        "type": "Incident",
        "description": "
        `\n
        Unable to login
        \n
        `",
        "description_text": "Unable to login",
        "custom_fields": {}
        },
        {
        "subject": "Request for Andrea : Dell Monitor",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002120938,
        "responder_id": null,
        "due_by": "2022-09-28T18:00:00Z",
        "fr_escalated": true,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-26T20:00:00Z",
        "id": 3,
        "priority": 2,
        "status": 2,
        "source": 2,
        "created_at": "2022-09-24T17:59:25Z",
        "updated_at": "2022-09-24T17:59:25Z",
        "requested_for_id": 27002120938,
        "to_emails": null,
        "type": "Service Request",
        "description": "",
        "description_text": "",
        "custom_fields": {}
        }
        ] }
        ```

    4. **listAllTicketsMessage** – A message node with the script to display responses for various scenarios.
3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to view all tickets as shown below:  
<img src="../images/freshdesk-tem-img12.png" alt="VA console prompt to view all tickets" title="VA console prompt to view all tickets" style="border: 1px solid gray;zoom:50%;"/>


### Update a Ticket

Steps to update a ticket in the Freshdesk integration:

1. Refer to the [Installing the Freshdesk templates ](configuring-the-freshdesk-action.md#step-2-install-the-freshdesk-action-templates){:target="_blank"}section to install this template.
2. The _Update a Ticket_ dialog task is added with the following components:  
<img src="../images/freshdesk-tem-img13.png" alt="Update a Ticket dialog task" title="Update a Ticket dialog task" style="border: 1px solid gray;zoom:50%;"/>

    1. **updateTicket** – A user intent to update a ticket.
    2. **ticketID**, **updateField**, **email**, **subject**, **description**, **status**, and **priority** – Entity nodes for gathering the required ticket details.
    3. **updateTicketScript** – A bot action service to update a ticket in an external integration. Click the **Plus** icon to expand to view the _updateTicketScript_ bot action component properties.  
    <img src="../images/freshdesk-tem-img14.png" alt="View bot action component properties" title="View bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    4. In the Component Properties window, click the Edit Request link to edit the request parameters as shown below:  
    <img src="../images/freshdesk-tem-img15.png" alt="Edit Request" title="Edit Request" style="border: 1px solid gray;zoom:50%;"/>


        **Sample Request**:

        ```
        {
        "email": "john.doe@example.com",
        "subject": "LOGIN ISSUE...",
        "description": "Unable to login...",
        "status": 4,
        "priority": 2
        }
        ```

        To add one or more responses, scroll down and click **+Add Response**.

        **Sample Response:**

        ```
        {
        "ticket": {
        "cc_emails": [],
        "fwd_emails": [],
        "reply_cc_emails": [],
        "spam": false,
        "email_config_id": null,
        "fr_escalated": false,
        "group_id": null,
        "priority": 2,
        "requester_id": 27002140415,
        "requested_for_id": 27002140415,
        "responder_id": null,
        "source": 2,
        "status": 4,
        "subject": "LOGIN ISSUE...",
        "description": "Unable to login...",
        "description_text": "Unable to login...",
        "category": null,
        "sub_category": null,
        "item_category": null,
        "custom_fields": {},
        "id": 54,
        "type": "Incident",
        "to_emails": null,
        "department_id": null,
        "is_escalated": false,
        "tags": [],
        "due_by": "2022-09-30T14:00:00-04:00",
        "fr_due_by": "2022-09-28T16:00:00-04:00",
        "created_at": "2022-09-27T07:19:38Z",
        "updated_at": "2022-09-28T07:22:17Z",
        "attachments": [] }
        }
        ```

    5. **updateTicketMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to update a ticket as shown below:  
<img src="../images/freshdesk-tem-img16.png" alt="VA console prompt to update ticket" title="VA console prompt to update ticket" style="border: 1px solid gray;zoom:50%;"/>


### Search Ticket by Field

Steps to search ticket by field from the Freshdesk integration:

1. Refer to the [Installing the Freshdesk templates](configuring-the-freshdesk-action.md#step-2-install-the-freshdesk-action-templates){:target="_blank"} section to install this template.
2. The _Search Ticket by Field_ dialog task is added with the following components:  
<img src="../images/freshdesk-tem-img17.png" alt="VA console prompt to view all tickets" title="VA console prompt to view all tickets" style="border: 1px solid gray;zoom:50%;"/>

    1. **searchTicket** -: A user intent to list all invoices.
    2. **chooseField**, **priority**, **email**, and **status** – Entity nodes for gathering the required ticket details.
    3. **searchTicketScript** – A bot action service to search a ticket by field in an external integration.
    4. **searchTicketService** – A bot action service to find a ticket by field in an external integration. Click the **Plus** icon to expand to view the _searchTicketService_ bot action component properties.
    5. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response** as shown below:  
    <img src="../images/freshdesk-tem-img18.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "tickets": [
        {
        "subject": "refer",
        "group_id": null,
        "department_id": null
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002135586,
        "responder_id": null,
        "due_by": "2022-09-28T15:00:00Z",
        "fr_escalated": false,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": false,
        "fr_due_by": "2022-09-27T16:00:00Z",
        "priority": 3,
        "source": 2,
        "status": 5,
        "created_at": "2022-09-27T10:02:42Z",
        "updated_at": "2022-09-27T10:16:14Z",
        "requested_for_id": 27002135586,
        "to_emails": null,
        "id": 55,
        "type": "Incident",
        "description": "
        qfvftwd
        ",
        "description_text": "qfvftwd"
        },
        {
        "subject": "Support payment...",
        "group_id": null,
        "department_id": null,
        "category": null,
        "sub_category": null,
        "item_category": null,
        "requester_id": 27002120954,
        "responder_id": null,
        "due_by": "2022-09-27T15:00:00Z",
        "fr_escalated": true,
        "deleted": false,
        "spam": false,
        "email_config_id": null,
        "fwd_emails": [],
        "reply_cc_emails": [],
        "cc_emails": [],
        "is_escalated": true,
        "fr_due_by": "2022-09-26T16:00:00Z",
        "priority": 3,
        "source": 2,
        "status": 2,
        "created_at": "2022-09-24T18:46:20Z",
        "updated_at": "2022-09-25T06:36:43Z",
        "requested_for_id": 27002120954,
        "to_emails": null,
        "id": 7,
        "type": "Incident",
        "description": "
        Payment is pending issue...
        ",
        "description_text": "Payment is pending issue..."
        }
        ],
        "total": 2
        }
        ```

    6. **searchTicketMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to find a ticket by field as shown below:  
<img src="../images/freshdesk-tem-img19.png" alt="VA console prompt to find ticket by field" title="VA console prompt to find ticket by field" style="border: 1px solid gray;zoom:50%;"/>


### Delete a Ticket

Steps to delete a ticket in the Freshdesk integration:

1. Refer to the [Installing the Freshdesk templates](configuring-the-freshdesk-action.md#step-2-install-the-freshdesk-action-templates){:target="_blank"} section to install this template.
2. The _Delete a Ticket_ dialog task is added with the following components:  
<img src="../images/freshdesk-tem-img20.png" alt="Delete a Ticket dialog" title="Delete a Ticket dialog" style="border: 1px solid gray;zoom:50%;"/>

    1. **deleteTicket** – A user intent to make payments.
    2. **ticketID** – Entity nodes for gathering the required ticket details.
    3. **deleteTicketService** – A bot action service to delete a ticket in an external integration. Click the **Plus** icon to expand to view the _deleteTicketService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/freshdesk-tem-img21.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

    5. deleteTicketMessage – A message node with the script to display responses for various scenarios.
    
3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to delete a ticket.