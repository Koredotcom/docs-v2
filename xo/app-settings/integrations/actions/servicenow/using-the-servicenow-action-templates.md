# Using The ServiceNow Action Templates

You can use the **Prebuilt Action Templates** from your ServiceNow integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using ServiceNow action templates:

1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  


3. On the Dialog Task pop-up, under the **Integration**, select the **ServiceNow** option to view the action templates.  
<img src="../images/servicenow-tem-img2.png" alt="Integration - Servicenow" title="Integration - Servicenow" style="border: 1px solid gray;zoom:50%;"/>

If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the **Actions** page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.  
<img src="../images/servicenow-tem-img3.png" alt="Explore integrations" title="Explore integrations" style="border: 1px solid gray;zoom:50%;"/>


## ServiceNow Actions 

The following ServiceNow actions are supported in this release:


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
   <td>Create an Incident
   </td>
   <td>Creates a new incident in the system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Update an Incident
   </td>
   <td>Updates the incident details.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>List All Incidents
   </td>
   <td>Retrieves all incidents from the system.
   </td>
   <td>PUT
   </td>
  </tr>
  <tr>
   <td>Find an Incident
   </td>
   <td>Searches all incidents that match with the keyword.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Delete Incident
   </td>
   <td>Deletes an incident.
   </td>
   <td>DELETE 
   </td>
  </tr>
  <tr>
   <td>Create a Request
   </td>
   <td>Creates a request in the system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Update a Request
   </td>
   <td>Updates a request in the system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>List All Requests
   </td>
   <td>Retrieves all requests from the system
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Find a Request
   </td>
   <td>Search all requests that match with the keyword
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Delete Request
   </td>
   <td>Deletes a request
   </td>
   <td>DELETE
   </td>
  </tr>
</table>



### Create an Incident

Steps to create a new incident in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _Create a Incident_ dialog task is added with the following components:  
<img src="../images/servicenow-tem-img4.png" alt="Create an Incident dialog task" title="Create an Incident dialog task" style="border: 1px solid gray;zoom:50%;"/>

    1. **createIncident** - A user intent to create an incident.
    2. **createIncidentShortDescription** and **createIncidentDescription** – Entity nodes for gathering the required incident details.
    3. **createIncidentService** – A bot action service to create an incident in an external integration. Click the **Plus** icon to expand to view the createIncidentService bot action component properties.
    4. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/servicenow-tem-img5.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request:**

        ```
        {
        "short_description": "Unable to log in to my mail app",
        "description": "I see an error stating "user with this mail id doesn't exist""
        },
        ```

        To add one or more responses scroll down and click the **+Add Response** button:  
        <img src="../images/servicenow-tem-img6.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response:**

        ```
        {
        "result": {
        "parent": "",
        "made_sla": "true",
        "caused_by": "",
        "watch_list": "",
        "upon_reject": "cancel",
        "sys_updated_on": "2022-09-21 07:42:22",
        "child_incidents": "0",
        "hold_reason": "",
        "origin_table": "",
        "task_effective_number": "INC0011182",
        "approval_history": "",
        "number": "INC0011182",
        "resolved_by": "",
        "sys_updated_by": "admin",
        "opened_by": {
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04bexxx",
        "value": "6816f79cc0a8016401c5a33be04bexx"
        },
        "user_input": "",
        "sys_created_on": "2022-09-21 07:42:22",
        "sys_domain": {
        "link": "https://dev129509.service-now.com/api/now/table/sys_user_group/global",
        "value": "global"
        },
        "state": "1",
        "route_reason": "",
        "sys_created_by": "admin",
        "knowledge": "false",
        "order": "",
        "calendar_stc": "",
        "closed_at": "",
        "cmdb_ci": "",
        "delivery_plan": "",
        "contract": "",
        "impact": "3",
        "active": "true",
        "work_notes_list": "",
        "business_service": "",
        "business_impact": "",
        "priority": "5",
        "sys_domain_path": "/",
        "rfc": "",
        "time_worked": "",
        "expected_start": "",
        "opened_at": "2022-09-21 07:42:22",
        "business_duration": "",
        "group_list": "",
        "work_end": "",
        "caller_id": "",
        "reopened_time": "",
        "resolved_at": "",
        "approval_set": "",
        "subcategory": "",
        "work_notes": "",
        "universal_request": "",
        "short_description": "21-sept-2022",
        "close_code": "",
        "correlation_display": "",
        "delivery_task": "",
        "work_start": "",
        "assignment_group": "",
        "additional_assignee_list": "",
        "business_stc": "",
        "cause": "",
        "shortdescription": "It is actually extended short description",
        "origin_id": "",
        "calendar_duration": "",
        "close_notes": "",
        "notify": "1",
        "service_offering": "",
        "sys_class_name": "incident",
        "closed_by": "",
        "follow_up": "",
        "parent_incident": "",
        "sys_id": "e0f70482478e11105474f088436d4xxx",
        "contact_type": "",
        "reopened_by": "",
        "incident_state": "1",
        "urgency": "3",
        "problem_id": "",
        "company": "",
        "reassignment_count": "0",
        "activity_due": "",
        "assigned_to": "",
        "severity": "3",
        "comments": "",
        "approval": "not requested",
        "sla_due": "",
        "comments_and_work_notes": "",
        "due_date": "",
        "sys_mod_count": "0",
        "reopen_count": "0",
        "sys_tags": "",
        "escalation": "0",
        "upon_approval": "proceed",
        "correlation_id": "",
        "location": "",
        "category": "inquiry",
        "u_custom_field": ""
        }
        }
        ```

    5. **setCallerService** – A bot action service to set a caller node in an external integration. Click the **Plus** icon to expand to view the _subDomainService_ bot action component properties.
    6. **createIncidentMessage** – A message node with script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the VA console to create an incident as shown below:  
<img src="../images/servicenow-tem-img7.png" alt="VA prompts to create an incident" title="VA prompts to create an incident" style="border: 1px solid gray;zoom:50%;"/>

6. The new incident is created in ServiceNow.  
<img src="../images/servicenow-tem-img8.png" alt="New incident created" title="New incident created" style="border: 1px solid gray;zoom:50%;"/>

7. Click the **View Incident** button to view the incident details in ServiceNow.  
<img src="../images/servicenow-tem-img9.png" alt="View incident details" title="View incident details" style="border: 1px solid gray;zoom:50%;"/>


### Update an Incident

Steps to update an existing incident in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _Update an Incident_ dialog task is added with the following components:  
<img src="../images/servicenow-tem-img10.png" alt="Update an Incident dialog task added" title="Update an Incident dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Update Incident** – A user intent to update an incident.
    2. **SysId**, **updateRecordFields**, **updatedShortDescription**, and **updatedDescription** – Entity nodes for updating the incident details.
    3. **prepareUpdatePayloadScript** – A bot action script to update an incident in an external integration. Click the **Plus** icon to expand to view the prepareUpdatePayloadScript bot action component properties.  
    <img src="../images/servicenow-tem-img11.png" alt="prepareUpdatePayloadScript bot action component properties" title="prepareUpdatePayloadScript bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    4. **updateIncidentService** – A bot action service to update an incident in an external integration. Click the **Plus** icon to expand to view the updateIncidentService bot action component properties.  
    <img src="../images/servicenow-tem-img12.png" alt="updateIncidentService bot action component properties" title="updateIncidentService bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    5.  **updateIncidentMessage** – A message node with script to display responses for various scenarios. 
3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the VA console to update an incident as shown below:  
<img src="../images/servicenow-tem-img13.png" alt="VA prompts to update incident" title="VA prompts to update incident" style="border: 1px solid gray;zoom:50%;"/>

6. Enter all incident update details when prompted by the AI Agent. The existing incident is updated in ServiceNow as shown below:  
<img src="../images/servicenow-tem-img14.png" alt="Incident updated" title="Incident updated" style="border: 1px solid gray;zoom:50%;"/>

7. Click the **View Incident** button to view the incident details in ServiceNow.


### List All Incidents

Steps to view all Incidents in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _List All Incidents_ dialog task is added for the ServiceNow with the following components:  
<img src="../images/servicenow-tem-img15.png" alt="List All Incidents dialog task added" title="List All Incidents dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **List All Incidents** - A user intent to list all incidents.
    2. **listAllIncidentsService** – A bot action script to view all incidents in an external integration. Click the **Plus** icon to expand to view the listAllIncidentService bot action component properties. Scroll down and click the **+Add Response** link to add one or more responses.  
    <img src="../images/servicenow-tem-img16.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response:**

        ```
        {
        "result": [
        {
        "parent": "",
        "made_sla": "true",
        "caused_by": "",
        "watch_list": "",
        "upon_reject": "Cancel all future Tasks",
        "sys_updated_on": "2022-09-20 23:50:09",
        "child_incidents": "0",
        "hold_reason": "",
        "origin_table": "",
        "task_effective_number": "INC0011181",
        "approval_history": "",
        "number": "INC0011181",
        "resolved_by": "",
        "sys_updated_by": "admin",
        "opened_by": {
        "display_value": "System Administrator",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441"
        },
        "user_input": "",
        "sys_created_on": "2022-09-20 14:32:50",
        "sys_domain": {
        "display_value": "global",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user_group/global"
        },
        "state": "New",
        "route_reason": "",
        "sys_created_by": "admin",
        "knowledge": "false",
        "order": "",
        "calendar_stc": "",
        "closed_at": "",
        "cmdb_ci": "",
        "delivery_plan": "",
        "contract": "",
        "impact": "2 - Medium",
        "active": "true",
        "work_notes_list": "",
        "business_service": "",
        "business_impact": "",
        "priority": "4 - Low",
        "sys_domain_path": "/",
        "rfc": "",
        "time_worked": "",
        "expected_start": "",
        "opened_at": "2022-09-20 14:32:50",
        "business_duration": "",
        "group_list": "",
        "work_end": "",
        "caller_id": {
        "display_value": "System Administrator",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04bexxx"
        },
        "reopened_time": "",
        "resolved_at": "",
        "approval_set": "",
        "subcategory": null,
        "work_notes": "2022-09-20 23:50:09 - System Administrator (Work notes)\nnew notes\n\n",
        "universal_request": "",
        "short_description": "21-sept 03:03",
        "close_code": null,
        "correlation_display": "",
        "delivery_task": "",
        "work_start": "",
        "assignment_group": "",
        "additional_assignee_list": "",
        "business_stc": "",
        "cause": "",
        "description": "late night short description",
        "origin_id": "",
        "calendar_duration": "",
        "close_notes": "",
        "notify": "Do Not Notify",
        "service_offering": "",
        "sys_class_name": "Incident",
        "closed_by": "",
        "follow_up": "",
        "parent_incident": "",
        "sys_id": "bb6c7975478611105474f088436d4xxx",
        "contact_type": null,
        "reopened_by": "",
        "incident_state": "New",
        "urgency": "3 - Low",
        "problem_id": "",
        "company": "",
        "reassignment_count": "0",
        "activity_due": "UNKNOWN",
        "assigned_to": "",
        "severity": "3 - Low",
        "comments": "",
        "approval": "Not Yet Requested",
        "sla_due": "UNKNOWN",
        "comments_and_work_notes": "2022-09-20 23:50:09 - System Administrator (Work notes)\nnew notes\n\n",
        "due_date": "",
        "sys_mod_count": "2",
        "reopen_count": "0",
        "sys_tags": "",
        "escalation": "Normal",
        "upon_approval": "Proceed to Next Task",
        "correlation_id": "",
        "location": "",
        "category": "Inquiry / Help",
        "u_custom_field": ""
        }
        ] }
        ```

    3. **listAllIncidentsMessage** – A message node with script to display responses for various scenarios. 

5. Click the **Train** tab to complete the Dialog task training.
6. Click the **Talk to Bot** icon to test and debug the dialog task
7. Follow the prompts in the App console to view all incidents as shown below:  
<img src="../images/servicenow-tem-img17.png" alt="VA prompt to view all incidents" title="VA prompt to view all incidents" style="border: 1px solid gray;zoom:50%;"/>


### Find an Incident

Steps to search an incident in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _Find an Incident_ dialog task is added for ServiceNow with the following components:  
<img src="../images/servicenow-tem-img18.png" alt="Find an Incident dialog task added" title="Find an Incident dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Find Incident**: A user intent to find an incident.
    2. **findRecordFields**, **findRecordSysId**, **findRecordNumber**, **findShortDescription**, and **findDescription** – Entity nodes to gather details for finding an incident.
    3. **Keyword** – Entity nodes for entering the keywords for the searching incidents.
    4. **prepareSearchingFieldScript** – A bot action script to update an incident in an external integration. Click the **Plus** icon to expand to view the prepareSearchingFieldScript bot action component properties.  
    <img src="../images/servicenow-tem-img19.png" alt="prepareSearchingFieldScript bot action component properties" title="prepareSearchingFieldScript bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    5. **findSearchingFieldScript** – A bot action script to search incidents in an external integration. Click the **Plus** icon to expand to view the findIncidentService bot action component properties.

        **Sample Response:**

        Response To large , here one result item is displayed:

        ```
        {
        "result": [
        {
        "parent": "",
        "made_sla": "true",
        "caused_by": "",
        "watch_list": "",
        "upon_reject": "Cancel all future Tasks",
        "sys_updated_on": "2022-09-20 23:50:09",
        "child_incidents": "0",
        "hold_reason": "",
        "origin_table": "",
        "task_effective_number": "INC0011181",
        "approval_history": "",
        "number": "INC0011181",
        "resolved_by": "",
        "sys_updated_by": "admin",
        "opened_by": {
        "display_value": "System Administrator",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441"
        },
        "user_input": "",
        "sys_created_on": "2022-09-20 14:32:50",
        "sys_domain": {
        "display_value": "global",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user_group/global"
        },
        "state": "New",
        "route_reason": "",
        "sys_created_by": "admin",
        "knowledge": "false",
        "order": "",
        "calendar_stc": "",
        "closed_at": "",
        "cmdb_ci": "",
        "delivery_plan": "",
        "contract": "",
        "impact": "2 - Medium",
        "active": "true",
        "work_notes_list": "",
        "business_service": "",
        "business_impact": "",
        "priority": "4 - Low",
        "sys_domain_path": "/",
        "rfc": "",
        "time_worked": "",
        "expected_start": "",
        "opened_at": "2022-09-20 14:32:50",
        "business_duration": "",
        "group_list": "",
        "work_end": "",
        "caller_id": {
        "display_value": "System Administrator",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441"
        },
        "reopened_time": "",
        "resolved_at": "",
        "approval_set": "",
        "subcategory": null,
        "work_notes": "2022-09-20 23:50:09 - System Administrator (Work notes)\nnew notes\n\n",
        "universal_request": "",
        "short_description": "21-sept 03:03",
        "close_code": null,
        "correlation_display": "",
        "delivery_task": "",
        "work_start": "",
        "assignment_group": "",
        "additional_assignee_list": "",
        "business_stc": "",
        "cause": "",
        "description": "late night short description",
        "origin_id": "",
        "calendar_duration": "",
        "close_notes": "",
        "notify": "Do Not Notify",
        "service_offering": "",
        "sys_class_name": "Incident",
        "closed_by": "",
        "follow_up": "",
        "parent_incident": "",
        "sys_id": "bb6c7975478611105474f088436d43e2",
        "contact_type": null,
        "reopened_by": "",
        "incident_state": "New",
        "urgency": "3 - Low",
        "problem_id": "",
        "company": "",
        "reassignment_count": "0",
        "activity_due": "UNKNOWN",
        "assigned_to": "",
        "severity": "3 - Low",
        "comments": "",
        "approval": "Not Yet Requested",
        "sla_due": "UNKNOWN",
        "comments_and_work_notes": "2022-09-20 23:50:09 - System Administrator (Work notes)\nnew notes\n\n",
        "due_date": "",
        "sys_mod_count": "2",
        "reopen_count": "0",
        "sys_tags": "",
        "escalation": "Normal",
        "upon_approval": "Proceed to Next Task",
        "correlation_id": "",
        "location": "",
        "category": "Inquiry / Help",
        "u_custom_field": ""
        }
        ] }
        ```

    7. **findIncidentMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to view an incident as shown below:  
<img src="../images/servicenow-tem-img20.png" alt="VA prompt to view an incident" title="VA prompt to view an incident" style="border: 1px solid gray;zoom:50%;"/>


### Delete a Incident

Steps to delete an incident in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _Delete an Incident_ dialog task is added for ServiceNow with the following components:  
<img src="../images/servicenow-tem-img21.png" alt="Delete an Incident dialog task added" title="Delete an Incident dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Delete Incident**: A user intent to delete an incident.
    2. **SysId** – Entity nodes for entering the incident ID.
    3. **deleteIncidentService** – A bot action script to delete an incident in an external integration. Click the **Plus** icon to expand to view the deleteIncidentService bot action component properties.  
    4.  **deleteIncidentMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to delete an incident as shown below:  
<img src="../images/servicenow-tem-img22.png" alt="VA prompt to delete an incident" title="VA prompt to delete an incident" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    If you enter an incorrect ID, the _404 – No Record Found_ error message is displayed.


### Create a Request

Steps to create a request in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _Create Request_ dialog task is added for the ServiceNow with the following components:  
<img src="../images/servicenow-tem-img23.png" alt="Create Request dialog task added" title="Create Request dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Create Request** - A user intent to create a request.
    2. **createRequestShortDescription** and **createRequestDescription** – Entity nodes for gathering the required request details.
    3. **createRequestService** – A bot action service to create a request in an external integration. Click the **Plus** icon to expand to view the createRequestService bot action component properties.
    4. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/servicenow-tem-img24.png" alt="Edit Request" title="Edit Request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request:**

        ```
        {
        "short_description": "Need a new device",
        "description": "old one not working"
        },
        ```

        To add one or more responses, scroll down and click the **+Add Response** button.

        **Sample Response**
        
        ```
        {
        "result": {
        "parent": "",
        "delivery_address": "",
        "made_sla": "true",
        "watch_list": "",
        "upon_reject": "cancel",
        "requested_for": {
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04bexxx",
        "value": "6816f79cc0a8016401c5a33be04bexxx"
        },
        "sys_updated_on": "2022-09-20 19:37:40",
        "task_effective_number": "REQ0010070",
        "approval_history": "",
        "number": "REQ0010070",
        "sys_updated_by": "admin",
        "opened_by": {
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04bexxx",
        "value": "6816f79cc0a8016401c5a33be04bexxx"
        },
        "user_input": "",
        "price": "0",
        "sys_created_on": "2022-09-20 19:37:40",
        "sys_domain": {
        "link": "https://dev129509.service-now.com/api/now/table/sys_user_group/global",
        "value": "global"
        },
        "state": "1",
        "route_reason": "",
        "sys_created_by": "admin",
        "knowledge": "false",
        "order": "",
        "calendar_stc": "",
        "special_instructions": "",
        "closed_at": "",
        "cmdb_ci": "",
        "delivery_plan": "",
        "contract": "",
        "impact": "3",
        "active": "true",
        "work_notes_list": "",
        "business_service": "",
        "priority": "3",
        "sys_domain_path": "/",
        "time_worked": "",
        "expected_start": "",
        "opened_at": "2022-09-20 19:37:40",
        "business_duration": "",
        "group_list": "",
        "work_end": "",
        "approval_set": "2022-09-20 19:37:40",
        "work_notes": "",
        "universal_request": "",
        "short_description": "Need a better router",
        "correlation_display": "",
        "delivery_task": "",
        "work_start": "",
        "assignment_group": "",
        "parent_interaction": "",
        "additional_assignee_list": "",
        "description": "My work require high speed of internet connection",
        "calendar_duration": "",
        "close_notes": "",
        "service_offering": "",
        "sys_class_name": "sc_request",
        "closed_by": "",
        "follow_up": "",
        "sys_id": "b0126dfd470611105474f088436d438f",
        "contact_type": "",
        "urgency": "3",
        "requested_date": "",
        "company": "",
        "reassignment_count": "0",
        "activity_due": "",
        "assigned_to": "",
        "comments": "",
        "approval": "approved",
        "sla_due": "",
        "comments_and_work_notes": "",
        "due_date": "",
        "sys_mod_count": "0",
        "sys_tags": "",
        "request_state": "in_process",
        "stage": "requested",
        "escalation": "0",
        "upon_approval": "proceed",
        "correlation_id": "",
        "location": ""
        }
        }
        "NumberofLocations__c": null
        }
        ```

    5. **createRequestMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create a new request.  
<img src="../images/servicenow-tem-img25.png" alt="VA prompt to create new request" title="VA prompt to create new request" style="border: 1px solid gray;zoom:50%;"/>

6. Click the **View Request** button to view the request details in ServiceNow.  
<img src="../images/servicenow-tem-img26.png" alt="View request" title="View request" style="border: 1px solid gray;zoom:50%;"/>


### Update a Request

Steps to update an existing request in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _Update a Request_ dialog task is added with the following components:  
<img src="../images/servicenow-tem-img27.png" alt="Update a Request dialog task added" title="Update a Request dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Update Request** - A user intent to update a request.
    2. **SysId**, **updateRecordFields**, **updatedShortDescription**, and **updatedDescription** – Entity nodes for updating the request details.
    3. **prepareUpdatePayloadScript** – A bot action script to update an incident in an external integration. Click the **Plus** icon to expand to view the prepareUpdatePayloadScript bot action component properties.
    4. **updateRequestService** – A bot action service to update a request in an external integration. Click the **Plus** icon to expand to view the updateRequestService bot action component properties.  
    <img src="../images/servicenow-tem-img28.png" alt="updateRequestScript bot action component properties" title="updateRequestScript bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    5.  **updateRequestMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Talk to Bot** icon ad follow the prompts in the App console to learn how to update a request. For more information, see step # 3 in the [Create an Incident](#create-an-incident).


### List All Requests

Steps to view all requests in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _List All Requests_ dialog task is added for the ServiceNow with the following components:  
<img src="../images/servicenow-tem-img29.png" alt="List All Requests dialog task added" title="List All Requests dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **List All Requests** - A user intent to list all incidents.
    2. **listAllRequestsService** – A bot action script to view all incidents in an external integration. Click the **Plus** icon to expand to view the listAllRequestService bot action component properties.  
    <img src="../images/servicenow-tem-img30.png" alt="listAllRequestService bot action component properties" title="listAllRequestService bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    3. **Sample Response:**

        ```
        {
        "result": [
        {
        "parent": "",
        "delivery_address": "",
        "made_sla": "true",
        "watch_list": "",
        "upon_reject": "Cancel all future Tasks",
        "requested_for": {
        "display_value": "System Administrator",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441"
        },
        "sys_updated_on": "2022-09-22 07:06:20",
        "task_effective_number": "REQ0010071",
        "approval_history": "",
        "number": "REQ0010071",
        "sys_updated_by": "admin",
        "opened_by": {
        "display_value": "System Administrator",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441"
        },
        "user_input": "",
        "price": "$0.00",
        "sys_created_on": "2022-09-20 21:39:03",
        "sys_domain": {
        "display_value": "global",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user_group/global"
        },
        "state": "Open",
        "route_reason": "",
        "sys_created_by": "admin",
        "knowledge": "false",
        "order": "",
        "calendar_stc": "",
        "special_instructions": "",
        "closed_at": "",
        "cmdb_ci": "",
        "delivery_plan": "",
        "contract": "",
        "impact": "3 - Low",
        "active": "true",
        "work_notes_list": "",
        "business_service": "",
        "priority": "4 - Low",
        "sys_domain_path": "/",
        "time_worked": "",
        "expected_start": "",
        "opened_at": "2022-09-20 21:39:03",
        "business_duration": "",
        "group_list": "",
        "work_end": "",
        "approval_set": "2022-09-20 21:39:03",
        "work_notes": "",
        "universal_request": "",
        "short_description": "NEW SD",
        "correlation_display": "",
        "delivery_task": "",
        "work_start": "",
        "assignment_group": "",
        "parent_interaction": "",
        "additional_assignee_list": "",
        "description": "more December on request",
        "calendar_duration": "",
        "close_notes": "",
        "service_offering": "",
        "sys_class_name": "Request",
        "closed_by": "",
        "follow_up": "",
        "sys_id": "beddf9f5478611105474f088436d43a4",
        "contact_type": null,
        "urgency": "3 - Low",
        "requested_date": "",
        "company": "",
        "reassignment_count": "0",
        "activity_due": "UNKNOWN",
        "assigned_to": "",
        "comments": "2022-09-20 21:39:03 - System Administrator (Additional comments)\nRequest automatically approved for total price &lt;= $1000\n\n",
        "approval": "Approved",
        "sla_due": "UNKNOWN",
        "comments_and_work_notes": "2022-09-20 21:39:03 - System Administrator (Additional comments)\nRequest automatically approved for total price &lt;= $1000\n\n",
        "due_date": "",
        "sys_mod_count": "2",
        "sys_tags": "",
        "request_state": "Approved",
        "stage": "Requested",
        "escalation": "Normal",
        "upon_approval": "Proceed to Next Task",
        "correlation_id": "",
        "location": ""
        }] }
        ```

    4. **listAllRequestsMessage** – A message node with script to display responses for various scenarios. 

3. Follow the prompts in the App console to view all requests. For more information, see step # 3 in the [Create an Incident](#create-an-incident) section.


### Find a Request

Steps to search a request in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _Find a Request_ dialog task is added for ServiceNow with the following components:  
<img src="../images/servicenow-tem-img31.png" alt="Find a Request dialog task added" title="Find a Request dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Find Request** - A user intent to find an incident.
    2. **findRecordFields**, **findRecordSysId**, **findRecordNumber**, **findShortDescription**, and **findDescription** – Entity nodes to gather details for finding an incident.
    3. **prepareSearchingFieldScript** – A bot action script to update an incident in an external integration. Click the **Plus** icon to expand to view the prepareUpdatePayloadScript bot action component properties.
    4. **findRequestService** – A bot action script to search incidents in an external integration. Click the **Plus** icon to expand to view the findRequestService bot action component properties.  
    <img src="../images/servicenow-tem-img32.png" alt="findRequestService bot action component properties" title="findRequestService bot action component properties" style="border: 1px solid gray;zoom:50%;"/>  

    5. **Sample Response:**

        Response To large , here one result item is displayed:
        
        ```
        {
        "result": [
        {
        "parent": "",
        "delivery_address": "",
        "made_sla": "true",
        "watch_list": "",
        "upon_reject": "Cancel all future Tasks",
        "requested_for": {
        "display_value": "System Administrator",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441"
        },
        "sys_updated_on": "2022-09-22 07:06:20",
        "task_effective_number": "REQ0010071",
        "approval_history": "",
        "number": "REQ0010071",
        "sys_updated_by": "admin",
        "opened_by": {
        "display_value": "System Administrator",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441"
        },
        "user_input": "",
        "price": "$0.00",
        "sys_created_on": "2022-09-20 21:39:03",
        "sys_domain": {
        "display_value": "global",
        "link": "https://dev129509.service-now.com/api/now/table/sys_user_group/global"
        },
        "state": "Open",
        "route_reason": "",
        "sys_created_by": "admin",
        "knowledge": "false",
        "order": "",
        "calendar_stc": "",
        "special_instructions": "",
        "closed_at": "",
        "cmdb_ci": "",
        "delivery_plan": "",
        "contract": "",
        "impact": "3 - Low",
        "active": "true",
        "work_notes_list": "",
        "business_service": "",
        "priority": "4 - Low",
        "sys_domain_path": "/",
        "time_worked": "",
        "expected_start": "",
        "opened_at": "2022-09-20 21:39:03",
        "business_duration": "",
        "group_list": "",
        "work_end": "",
        "approval_set": "2022-09-20 21:39:03",
        "work_notes": "",
        "universal_request": "",
        "short_description": "NEW SD",
        "correlation_display": "",
        "delivery_task": "",
        "work_start": "",
        "assignment_group": "",
        "parent_interaction": "",
        "additional_assignee_list": "",
        "description": "more December on request",
        "calendar_duration": "",
        "close_notes": "",
        "service_offering": "",
        "sys_class_name": "Request",
        "closed_by": "",
        "follow_up": "",
        "sys_id": "beddf9f5478611105474f088436d43a4",
        "contact_type": null,
        "urgency": "3 - Low",
        "requested_date": "",
        "company": "",
        "reassignment_count": "0",
        "activity_due": "UNKNOWN",
        "assigned_to": "",
        "comments": "2022-09-20 21:39:03 - System Administrator (Additional comments)\nRequest automatically approved for total price &lt;= $1000\n\n",
        "approval": "Approved",
        "sla_due": "UNKNOWN",
        "comments_and_work_notes": "2022-09-20 21:39:03 - System Administrator (Additional comments)\nRequest automatically approved for total price &lt;= $1000\n\n",
        "due_date": "",
        "sys_mod_count": "2",
        "sys_tags": "",
        "request_state": "Approved",
        "stage": "Requested",
        "escalation": "Normal",
        "upon_approval": "Proceed to Next Task",
        "correlation_id": "",
        "location": ""
        }] }
        ```

    6. **findRequestMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Talk to Bot** icon ad follow the prompts in the App console to learn how to find a request. For more information, see step # 3 in the [Create an Incident](#create-an-incident) section.


### Delete a Request

Steps to delete a request in ServiceNow:

1. Refer to the [Install the ServiceNow Action Templates](configuring-the-servicenow-action.md#step-2-install-the-servicenow-action-templates){:target="_blank"} section for installing this action.
2. The _Delete a Request_ dialog task is added for ServiceNow with the following components:  
<img src="../images/servicenow-tem-img33.png" alt="Delete a Request dialog task added" title="Delete a Request dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Delete Request** - A user intent to delete a request.
    2. **SysId** – Entity nodes for entering the request ID.
    3. **deleteRequestService** – A bot action script to delete a request in an external integration. Click the **Plus** icon to expand to view the deleteRequestService bot action component properties.  
    <img src="../images/servicenow-tem-img34.png" alt="deleteRequestService bot action component properties" title="deleteRequestService bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    4.  **deleteRequestMessage** – A message node with script to display responses for various scenarios.

3. Click the **Talk to Bot** icon ad follow the prompts in the App console to learn how to delete a request. For more information, see step # 3 in the [Create an Incident](#create-an-incident) section.

!!! note

    If you enter an incorrect ID, the _404 – No Record Found_ error message is displayed.