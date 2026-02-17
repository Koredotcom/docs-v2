# Using the HubSpot Action Templates

You can use the **Prebuilt Action Templates** from your HubSpot integration to auto-create dialog tasks and test them using the **Talk to Bot** option. 

Steps to create a dialog task using HubSpot action templates:

1. Ensure that you have configured [HubSpot](configuring-the-hubspot-action.md){:target="_blank"} and [installed templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} successfully.

2. Go to **Automation AI** > **Use Cases** > **Dialogs**. You can see all the dialogs.

3. Click the auto-created dialog. The the canvas opens with all required entity nodes, service nodes, and message scripts.

## HubSpot Actions 

The following HubSpot actions are supported.


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
   <td>Create a Deal
   </td>
   <td>Creates a new deal in the system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Get Deal by Id
   </td>
   <td>Retrieves a deal details 
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Update a Deal
   </td>
   <td>Updates the deal details.
   </td>
   <td>PATCH
   </td>
  </tr>
  <tr>
   <td>List all Deals
   </td>
   <td>Retrieves all deals from the system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Search Deal by Keyword
   </td>
   <td>Searches all deals that match with the keyword.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Delete Deal
   </td>
   <td>Deletes a deal.
   </td>
   <td>DELETE 
   </td>
  </tr>
  <tr>
   <td>Create a Contact
   </td>
   <td>Creates a request in the system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Get Contact by Id
   </td>
   <td>Retrieve a contact details
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>List All Contacts
   </td>
   <td>Retrieves all contacts from the system
   </td>
   <td>Get
   </td>
  </tr>
  <tr>
   <td>Update a Contact
   </td>
   <td>Updates the contact details
   </td>
   <td>PATCH
   </td>
  </tr>
  <tr>
   <td>Search Contact by Keyword
   </td>
   <td>Search all contacts that match with the keyword
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Delete a Contact
   </td>
   <td>Deletes a contact
   </td>
   <td>GET
   </td>
  </tr>
</table>



### Create a Deal

Steps to create a new deal in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Create a Deal_ dialog task is added with the following components:  
<img src="../images/hubspot-tem-img4.png" alt="Create a Deal dialog task added" title="Create a Deal dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createDeal** - A user intent to create a deal.
    2. **dealName** and **dealStage** – Entity nodes for gathering the required deal details.
    3. **createDealService** – A bot action service to create a deal in an external integration. Click the **Plus** icon to expand to view the createDealService bot action component properties.
    4. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/hubspot-tem-img5.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request body:**

        ```
        {
        "properties": {
        "dealname": "Custom data integrations",
        "dealstage": "presentationscheduled",
        "pipeline": "default"
        }
        }
        ```
    
    5. To add one or more responses, scroll down and click the **+Add Response** button:  
    <img src="../images/hubspot-tem-img6.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response:**
        ```
        {
        "id": "10146264661",
        "properties": {
        "createdate": "2022-09-11T10:06:55.570Z",
        "days_to_close": "0",
        "dealname": "Integrations",
        "dealstage": "presentationscheduled",
        "hs_closed_amount": "0",
        "hs_closed_amount_in_home_currency": "0",
        "hs_createdate": "2022-09-11T10:06:55.570Z",
        "hs_deal_stage_probability_shadow": "0.59999999999999997779553950749686919152736663818359375",
        "hs_is_closed": "false",
        "hs_is_closed_won": "false",
        "hs_is_deal_split": "false",
        "hs_lastmodifieddate": "2022-09-11T10:06:55.570Z",
        "hs_object_id": "10146264661",
        "hs_projected_amount": "0",
        "hs_projected_amount_in_home_currency": "0",
        "pipeline": "default"
        }, 
        "createdAt": "2022-09-11T10:06:55.570Z",
        "updatedAt": "2022-09-11T10:06:55.570Z",
        "archived": false
        }
        ```
        
    6. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.  
    <img src="../images/hubspot-tem-img7.png" alt="getAccountService" title="getAccountService" style="border: 1px solid gray;zoom:50%;"/>

    7. **createDealMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create a deal as shown below:  
<img src="../images/hubspot-tem-img8.png" alt="VA prompts to create a deal" title="VA prompts to create a deal" style="border: 1px solid gray;zoom:50%;"/>

6. The new deal is created in HubSpot.  
<img src="../images/hubspot-tem-img9.png" alt="New deal cerated" title="New deal created" style="border: 1px solid gray;zoom:50%;"/>

7. Click the **View Deal** button to view the deal details in HubSpot.  
<img src="../images/hubspot-tem-img10.png" alt="View deal details" title="View deal details" style="border: 1px solid gray;zoom:50%;"/>


### Get a Deal by ID

Steps to find a deal by Id in HubSpot:


1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Get Deal by Id_ dialog task is added with the following components:  
<img src="../images/hubspot-tem-img11.png" alt="Get Deal ID dialog task added" title="Get Deal ID dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **getDeal by Id** - A user intent to get a deal by Id.
    2. **dealID** – Entity nodes for entering the deal Id.
    3. **getDealService** – A bot action service to create a deal in an external integration. Click the **Plus** icon to expand to view the getDealService bot action component properties.
    4. In the **Component Properties** window, click the **+Add Response** button to add one or more responses.  
    <img src="../images/hubspot-tem-img12.png" alt="Add Response" title="Add Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "id": "10099894869",
        "properties": {
        "amount": null,
        "closedate": null,
        "createdate": "2022-09-07T13:52:04.184Z",
        "dealname": "Nike deal",
        "dealstage": "appointmentscheduled",
        "hs_lastmodifieddate": "2022-09-10T14:13:05.712Z",
        "hs_object_id": "10099894869",
        "pipeline": "default"
        },      
        "createdAt": "2022-09-07T13:52:04.184Z",
        "updatedAt": "2022-09-10T14:13:05.712Z",
        "archived": false
        },
        "archived": false
        }
        ```

    5. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    6. **getDealMessage** – A message node with script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to get a deal by ID as shown below:  
<img src="../images/hubspot-tem-img13.png" alt="VA prompt to get deal by id" title="VA prompt to get deal by id" style="border: 1px solid gray;zoom:50%;"/>

6. Click the **View Deal** button to view the deal details in HubSpot.

### List All Deals

Steps to view all deals in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _List All Deals_ dialog task is added for HubSpot with the following components:  
<img src="../images/hubspot-tem-img14.png" alt="List All Deals dialog task is added" title="List All Deals dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **List All Deals** - A user intent to list all deals.
    2. **listAllDealsService** – A bot action script to view all deals in an external integration. Click the **Plus** icon to expand to view the listAllDealsService bot action component properties.  
      
    3. Scroll down and click **+Add Response** to add one or more response.  
       <img src="../images/hubspot-tem-img15.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "total": 7,
        "results": [
        {
        "id": "10274255383",
        "properties": {
        "amount": null,
        "closedate": null,
        "createdate": "2022-09-22T07:23:17.500Z",
        "dealname": "Adidas deal",
        "dealstage": "qualifiedtobuy",
        "hs_lastmodifieddate": "2022-09-22T07:23:18.603Z",
        "hs_object_id": "10274255383",
        "pipeline": "default"
        },
        "createdAt": "2022-09-22T07:23:17.500Z",
        "updatedAt": "2022-09-22T07:23:18.603Z",
        "archived": false
        },
        {
        "id": "10168816194",
        "properties": {
        "amount": null,
        "closedate": null,
        "createdate": "2022-09-13T06:44:20.931Z",
        "dealname": "kora",
        "dealstage": "decisionmakerboughtin",
        "hs_lastmodifieddate": "2022-09-21T17:48:52.859Z",
        "hs_object_id": "10168816194",
        "pipeline": "default"
        },
        "createdAt": "2022-09-13T06:44:20.931Z",
        "updatedAt": "2022-09-21T17:48:52.859Z",
        "archived": false
        },
        {
        "id": "10168663436",    
        "properties": {
        "amount": null,
        "closedate": null,
        "createdate": "2022-09-13T05:55:53.195Z",
        "dealname": "Assist",
        "dealstage": "decisionmakerboughtin",
        "hs_lastmodifieddate": "2022-09-13T05:55:54.257Z",
        "hs_object_id": "10168663436",
        "pipeline": "default"
        },
        "createdAt": "2022-09-13T05:55:53.195Z",
        "updatedAt": "2022-09-13T05:55:54.257Z",
        "archived": false
        },
        {
        "id": "10168850185",
        "properties": {
        "amount": null,
        "closedate": null,
        "createdate": "2022-09-13T05:54:00.891Z",
        "dealname": "Smart deal",
        "dealstage": "qualifiedtobuy",
        "hs_lastmodifieddate": "2022-09-13T05:54:02.233Z",
        "hs_object_id": "10168850185",
        "pipeline": "default"
        },
        "createdAt": "2022-09-13T05:54:00.891Z",
        "updatedAt": "2022-09-13T05:54:02.233Z",
        "archived": false
        },
        {
        "id": "10146264661",
        "properties": {
        "amount": null,
        "closedate": null,
        "createdate": "2022-09-11T10:06:55.570Z",
        "dealname": "Integrations",
        "dealstage": "presentationscheduled",
        "hs_lastmodifieddate": "2022-09-11T10:06:56.238Z",
        "hs_object_id": "10146264661",
        "pipeline": "default"
        },
        "createdAt": "2022-09-11T10:06:55.570Z",
        "updatedAt": "2022-09-11T10:06:56.238Z",
        "archived": false
        },
        {
        "id": "10146382146",
        "properties": {
        "amount": null,
        "closedate": null,
        "createdate": "2022-09-11T10:05:52.560Z",
        "dealname": "Custom data integrations",
        "dealstage": "presentationscheduled",
        "hs_lastmodifieddate": "2022-09-11T10:05:54.028Z",
        "hs_object_id": "10146382146",
        "pipeline": "default"
        },
        "createdAt": "2022-09-11T10:05:52.560Z",
        "updatedAt": "2022-09-11T10:05:54.028Z",
        "archived": false
        },
        {
        "id": "10096681328",
        "properties": {
        "amount": "20",
        "closedate": "2022-09-30T07:42:47.238Z",
        "createdate": "2022-09-07T07:46:11.328Z",
        "dealname": "Basic deal",
        "dealstage": "presentationscheduled",
        "hs_lastmodifieddate": "2022-09-13T13:48:43.097Z",
        "hs_object_id": "10096681328",
        "pipeline": "default"
        },
        "createdAt": "2022-09-07T07:46:11.328Z",
        "updatedAt": "2022-09-13T13:48:43.097Z",
        "archived": false
        }
        ] }
        ```

    4. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    5. **listAllDealsMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to view all deals.


### Update a Deal

Steps to update an existing deal in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Update a Deal_ dialog task is added with the following components:  
<img src="../images/hubspot-tem-img16.png" alt="Update a Deal dialog task is added" title="Update a Deal dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Update a Deal** - A user intent to update a deal.
    2. **dealId**, **dealUpdate**, **dealName**, and **dealStage** – Entity nodes for updating the deal details.
    3. **updateDealScript** – A bot action script to update a deal in an external integration. Click the **Plus** icon to expand to view the updateDealScript bot action component properties.
    4. **updateDealService** – A bot action service to update a deal in an external integration. Click the **Plus** icon to expand to view the updateDealService bot action component properties.  
    <img src="../images/hubspot-tem-img17.png" alt="Update a Deal dialog task is added" title="Update a Deal dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    5. **Sample Request Body**

        ```
        {
        "properties": {
        "dealname": "Adidas Deal",
        "dealstage": "closedwon"
        }
        }
        ```

        To add one or more responses scroll down and click the **+Add Response** button.  
        <img src="../images/hubspot-tem-img18.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "id": "10123889765",
        "properties": {
        "createdate": "2022-09-09T06:45:26.228Z",
        "days_to_close": "0",
        "dealname": "Adidas Deal",
        "dealstage": "closedwon",
        "hs_closed_amount": "",
        "hs_closed_amount_in_home_currency": "",
        "hs_deal_stage_probability": "0.8000000000000000444089209850062616169452667236328125",
        "hs_deal_stage_probability_shadow": "1",
        "hs_is_closed": "true",
        "hs_is_closed_won": "true",
        "hs_lastmodifieddate": "2022-09-11T10:54:30.961Z",
        "hs_object_id": "10123889765",
        "hs_projected_amount_in_home_currency": "",
        "pipeline": "default"
        },
        "createdAt": "2022-09-09T06:45:26.228Z",
        "updatedAt": "2022-09-11T10:54:30.961Z",
        "archived": false
        }
        ```

    6. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    7. **getDealService** – A bot action service to get deal details in an external integration. Click the **Plus** icon to expand to view the getDealService bot action component properties.
    8. **updateDealMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task
5. Follow the prompts in the App console to update a deal as shown below:  
<img src="../images/hubspot-tem-img19.png" alt="VA prompts to update deal" title="VA prompts to update deal" style="border: 1px solid gray;zoom:50%;"/>

6. Enter all deal details to update when prompted by the AI Agent. The existing deal is updated in HubSpot as shown below:  
<img src="../images/hubspot-tem-img20.png" alt="Deal updated" title="Deal updated" style="border: 1px solid gray;zoom:50%;"/>

7. Click the **View Deal** button to view the deal details in HubSpot.


### Search Deal by Keyword

Steps to search a deal using keywords in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Search Deal by Keyword_ dialog task is added for the Hubspot with the following components:  
<img src="../images/hubspot-tem-img21.png" alt="Search Deal by Keyword dialog task is added" title="Search Deal by Keyword dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Search Deal** - A user intent to search a deal.
    2. **Keyword** – Entity nodes for entering the keywords for the searching deals.
    3. **searchDealService** – A bot action script to update a deal in an external integration. Click the **Plus** icon to expand to view the searchDealService bot action component properties.  
    <img src="../images/hubspot-tem-img22.png" alt="searchDealService" title="searchDealService" style="border: 1px solid gray;zoom:50%;"/>

    4. **Sample Request Body**

        ```
        {
        "sorts": [
        {
        "propertyName": "createdate",
        "direction": "DESCENDING"
        }
        ],
        "query":"abac"
        }
        ```

        **Sample Response**

        ```
        {
        "total": 3,
        "results": [
        {
        "id": "10274255383",
        "properties": {
        "amount": null,
        "closedate": null,
        "createdate": "2022-09-22T07:23:17.500Z",
        "dealname": "Adidas deal",
        "dealstage": "qualifiedtobuy",
        "hs_lastmodifieddate": "2022-09-22T07:23:18.603Z",
        "hs_object_id": "10274255383",
        "pipeline": "default"
        },
        "createdAt": "2022-09-22T07:23:17.500Z",
        "updatedAt": "2022-09-22T07:23:18.603Z",
        "archived": false
        },
        {
        "id": "10168850185",
        "properties": {
        "amount": null,
        "closedate": null,
        "createdate": "2022-09-13T05:54:00.891Z",
        "dealname": "Smart deal",
        "dealstage": "qualifiedtobuy",
        "hs_lastmodifieddate": "2022-09-13T05:54:02.233Z",
        "hs_object_id": "10168850185",
        "pipeline": "default"
        },
        "createdAt": "2022-09-13T05:54:00.891Z",
        "updatedAt": "2022-09-13T05:54:02.233Z",
        "archived": false
        },
        {
        "id": "10096681328",
        "properties": {
        "amount": "20",
        "closedate": "2022-09-30T07:42:47.238Z",
        "createdate": "2022-09-07T07:46:11.328Z",
        "dealname": "Basic deal",
        "dealstage": "presentationscheduled",
        "hs_lastmodifieddate": "2022-09-13T13:48:43.097Z",
        "hs_object_id": "10096681328",
        "pipeline": "default"
        },
        "createdAt": "2022-09-07T07:46:11.328Z",
        "updatedAt": "2022-09-13T13:48:43.097Z",
        "archived": false
        }
        ] }
        ```

    5. **getAccountService** – A bot action service to get account details in an external integration. Click the <strong>Plus </strong>icon to expand to view the getAccountService bot action component properties.
    6. **searchDealMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot**  icon to test and debug the dialog task.
5. Follow the prompts in the App console to view all deals as shown below:  
<img src="../images/hubspot-tem-img23.png" alt="VA prompt to view all deals" title="VA prompt to view all deals" style="border: 1px solid gray;zoom:50%;"/>

### Delete a Deal

Steps to delete a deal in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Delete Deal_ dialog task is added for HubSpot with the following components:  
<img src="../images/hubspot-tem-img24.png" alt="Delete Deal dialog task is added" title="Delete Deal dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Delete Deal** - A user intent to delete a deal.
    2. **DealId** – Entity nodes for entering the deal ID.
    3. **deleteDealService** – A bot action script to delete a deal in an external integration. Click the **Plus** icon to expand to view the deleteContactService bot action component properties.  
    <img src="../images/hubspot-tem-img25.png" alt="deleteDealService" title="deleteDealService" style="border: 1px solid gray;zoom:50%;"/>

    4. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    5. **deleteDealMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to delete a deal as shown below:  
<img src="../images/hubspot-tem-img26.png" alt="VA prompt to delete deal" title="VA prompt to delete deal" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    If you enter an incorrect ID, the _404 – No Record Found_ error message is displayed.


### Create a Contact

Steps to create a contact in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Create a Deal_ dialog task is added with the following components:  
<img src="../images/hubspot-tem-img27.png" alt="Create a Deal dialog task is added" title="Create a Deal dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createContact** - A user intent to create a deal.
    2. **Email, firstName, lastName,** and **phone** – Entity nodes for gathering the required contact details.
    3. **createContactService** – A bot action service to create a contact in an external integration. Click the **Plus** icon to expand to view the createContactService bot action component properties.
    4. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/hubspot-tem-img28.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request Body**

        ```
        {
        "properties": {
        "email": "harry@abac.com",
        "firstname":"Harry",
        "lastname":"Anthony",
        "phone": "(877) 829-06966777"
        }
        ```

        To add one or more responses, scroll down and click the **+Add Response** button:  
        <img src="../images/hubspot-tem-img29.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response:**

        ```
        {
        "id": "1201",
        "properties": {
        "createdate": "2022-09-21T05:54:29.872Z",
        "email": "harry.anthony@abac.com",
        "firstname": "harry",
        "hs_all_contact_vids": "1201",
        "hs_email_domain": "abac.com",
        "hs_is_contact": "true",
        "hs_is_unworked": "true",
        "hs_lifecyclestage_lead_date": "2022-09-21T05:54:29.872Z",
        "hs_object_id": "1201",
        "hs_pipeline": "contacts-lifecycle-pipeline",
        "hs_searchable_calculated_phone_number": "87782906966777",
        "lastmodifieddate": "2022-09-21T05:54:29.872Z",
        "lastname": "anthony",
        "lifecyclestage": "lead",
        "phone": "(877) 829-06966777"
        },
        "createdAt": "2022-09-21T05:54:29.872Z",
        "updatedAt": "2022-09-21T05:54:29.872Z",
        "archived": false
        }
        ```

    5. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    6. **createContactMessage** – A message node with script to display responses for various scenarios. 

3. Refer the step 3 to [train and talk to bot ](#create-a-deal)and learn how to view the new contact.

### Get a Contact by ID

Steps to find a contact by ID in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Get Contact by Id_ dialog task is added with the following components:
    1. **getContact by Id** - A user intent to get a contact by ID.
    2. **contactID** – Entity nodes for entering the contact ID.
    3. **getContactService** – A bot action service to create a deal in an external integration. Click the **Plus** icon to expand to view the getDealService bot action component properties.
    4. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/hubspot-tem-img30.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>  
    
    5. To add one or more responses, scroll down and click the **+Add Response** button.  
    <img src="../images/hubspot-tem-img31.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "id": "1201",
        "properties": {
        "createdate": "2022-09-21T05:54:29.872Z",
        "email": "harry.anthony@abac.com",
        "firstname": "harry",
        "hs_object_id": "1201",
        "lastmodifieddate": "2022-09-21T05:54:33.826Z",
        "lastname": "anthony"
        },
        "createdAt": "2022-09-21T05:54:29.872Z",
        "updatedAt": "2022-09-21T05:54:33.826Z",
        "archived": false
        }
        ```

    6. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    7. **getContactMessage** – A message node with script to display responses for various scenarios. 

3. Refer the step 3 to [train and talk to bot ](#create-a-deal)section and learn how to find the contact.   


### List All Contacts

Steps to view all contacts in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _List All Contacts_ dialog task is added for HubSpot with the following components:  
<img src="../images/hubspot-tem-img32.png" alt="List All Contacts dialog task is added" title="List All Contacts dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **List All Contacts** - A user intent to list all contacts.
    2. **listAllContactsService** – A bot action script to view all contacts in an external integration. Click the **Plus** icon to expand to view the listAllContactsService bot action component properties.  
    <img src="../images/hubspot-tem-img33.png" alt="listAllContactsService" title="listAllContactsService" style="border: 1px solid gray;zoom:50%;"/>

    3. **Sample Request Body**  
      
        ```
        {
        "sorts": [
        {
        "propertyName": "createdate",
        "direction": "DESCENDING"
        }
        ] }
        ```

        To add one or more responses, scroll down and click the **+Add Response** button.  
        <img src="../images/hubspot-tem-img34.png" alt="listAllContactsService" title="listAllContactsService" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "total": 6,
        "results": [
        {
        "id": "1401",
        "properties": {
        "createdate": "2022-09-21T08:10:09.101Z",
        "email": "getkgw@zomato.com",
        "firstname": "John",
        "hs_object_id": "1401",
        "lastmodifieddate": "2022-09-21T13:39:48.442Z",
        "lastname": "Doe"
        },
        "createdAt": "2022-09-21T08:10:09.101Z",
        "updatedAt": "2022-09-21T13:39:48.442Z",
        "archived": false
        },
        {
        "id": "1301",
        "properties": {
        "createdate": "2022-09-21T07:55:53.923Z",
        "email": "iugf@uber.com",
        "firstname": "Kevin",
        "hs_object_id": "1301",
        "lastmodifieddate": "2022-09-21T16:36:41.185Z",
        "lastname": "Smith"
        },
        "createdAt": "2022-09-21T07:55:53.923Z",
        "updatedAt": "2022-09-21T16:36:41.185Z",
        "archived": false
        },
        {
        "id": "1201",
        "properties": {
        "createdate": "2022-09-21T05:54:29.872Z",
        "email": "john.doe@example.com",
        "firstname": "John",
        "hs_object_id": "1201",
        "lastmodifieddate": "2022-09-21T14:10:34.717Z",
        "lastname": "Doe"
        },
        "createdAt": "2022-09-21T05:54:29.872Z",
        "updatedAt": "2022-09-21T14:10:34.717Z",
        "archived": false
        },
        {
        "id": "501",
        "properties": {
        "createdate": "2022-09-16T09:50:44.195Z",
        "email": "rtyui@microsoft.com",
        "firstname": "Ray",
        "hs_object_id": "501",
        "lastmodifieddate": "2022-09-20T06:14:59.539Z",
        "lastname": "John"
        },
        "createdAt": "2022-09-16T09:50:44.195Z",
        "updatedAt": "2022-09-20T06:14:59.539Z",
        "archived": false
        },
        {
        "id": "451",
        "properties": {
        "createdate": "2022-09-16T09:42:19.196Z",
        "email": "jnbg@amazon.com",
        "firstname": "Jack",
        "hs_object_id": "451",
        "lastmodifieddate": "2022-09-16T09:42:37.438Z",
        "lastname": "James"
        },
        "createdAt": "2022-09-16T09:42:19.196Z",
        "updatedAt": "2022-09-16T09:42:37.438Z",
        "archived": false
        },
        {
        "id": "301",
        "properties": {
        "createdate": "2022-09-13T11:27:52.943Z",
        "email": "eurfh@meta.com",
        "firstname": "John",
        "hs_object_id": "301",
        "lastmodifieddate": "2022-09-15T07:51:34.486Z",
        "lastname": "Doe"
        },
        "createdAt": "2022-09-13T11:27:52.943Z",
        "updatedAt": "2022-09-15T07:51:34.486Z",
        "archived": false
        }
        ] }
        ```

    4. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    5. **listAllContactsMessage** – A message node with script to display responses for various scenarios. 
    
3. Refer the step 3 to [train and talk to bot ](#create-a-deal)section and learn how to view all contacts.   


### Update a Contact

Steps to update an existing contact in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Update a Contact_ dialog task is added with the following components:  
<img src="../images/hubspot-tem-img35.png" alt="Update a Contact dialog task is added" title="Update a Contact dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **UpdateContact** - A user intent to update a contact.
    2. **contactId**, **contactUpdate**, **email, firstName, lastName**, and **phone** – Entity nodes for updating the contact details.
    3. **updateContactScript** – A bot action script to update a deal in an external integration. Click the **Plus** icon to expand to view the updateContactScript bot action component properties.
    4. **updateContactService** – A bot action service to update a deal in an external integration. Click the **Plus** icon to expand to view the updateDealService bot action component properties.  
    <img src="../images/hubspot-tem-img36.png" alt="updateContactService" title="updateContactService" style="border: 1px solid gray;zoom:50%;"/>

    5. **Sample Request Body**
        ```
        {
        {
        "properties": {
        "email":"harry.anthony@abac.com"
        }
        }   
        ```

        To add one or more responses scroll down and click the **+Add Response** button:  
        <img src="../images/hubspot-tem-img37.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
        "id": "1201",
        "properties": {
        "email": "harry.anthony@abac.com",
        "hs_email_domain": "abac.com",
        "lastmodifieddate": "2022-09-21T06:18:56.655Z"
        },
        "createdAt": "2022-09-21T05:54:29.872Z",
        "updatedAt": "2022-09-21T06:18:56.655Z",
        "archived": false
        }
        ```
    
    6. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    7. **getContactService** – A bot action service to get deal details in an external integration. Click the **Plus** icon to expand to view the getContactService bot action component properties.
    8. **updateContactMessage** – A message node with script to display responses for various scenarios.

3. Refer the step 3 to [train and talk to bot ](#create-a-deal)section and learn how to update the contact.   


### Search Contact by Keyword

Steps to search a contact using keywords in HubSpot:

1. Refer to the [Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Search Contact by Keyword_ dialog task is added for the Hubspot with the following components:
<img src="../images/hubspot-tem-img38.png" alt="Search Contact by Keyword_ dialog task is added" title="Search Contact by Keyword dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Search Contact** - A user intent to search a contact.
    2. **Keyword** – Entity nodes for entering the keywords for the searching contacts.
    3. **searchContactService** – A bot action script to update a deal in an external integration. Click the **Plus** icon to expand to view the searchContactService bot action component properties.  
    <img src="../images/hubspot-tem-img39.png" alt="searchContactService" title="searchContactService" style="border: 1px solid gray;zoom:50%;"/>
    4. **Sample Request Body**

        ```
        {
        "sorts": [
        {
        "propertyName": "createdate",
        "direction": "DESCENDING"
        }
        ],
        "query":"abac"
        }
        ```

        **Sample Response**

        ```
        {
        "total": 1,
        "results": [
        {
        "id": "1201",
        "properties": {
        "createdate": "2022-09-21T05:54:29.872Z",
        "email": "john.doe@example.com",
        "firstname": "Work",
        "hs_object_id": "1201",
        "lastmodifieddate": "2022-09-21T14:10:34.717Z",
        "lastname": "Assist"
        },
        "createdAt": "2022-09-21T05:54:29.872Z",
        "updatedAt": "2022-09-21T14:10:34.717Z",
        "archived": false
        }
        ] }
        ```

    5. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    6. **searchContactMessage** – A message node with script to display responses for various scenarios. 

3. Refer the step 3 to [train and talk to bot ](#create-a-deal)section and learn how to search the contact with keyword.   


### Delete a Contact

Steps to delete a contact in HubSpot:

1. Refer to the[ Install the HubSpot Action Templates](configuring-the-hubspot-action.md#step-2-install-the-hubspot-action-templates){:target="_blank"} section for installing this action template.
2. The _Delete Contact_ dialog task is added for HubSpot with the following components:  
<img src="../images/hubspot-tem-img40.png" alt="Delete Contact dialog task is added" title="Delete Contact dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Delete Contact** - A user intent to delete a contact.
    2. **ContactId** – Entity nodes for entering the Contact ID.
    3. **deleteContactService** – A bot action script to delete a deal in an external integration. Click the **Plus** icon to expand to view the deleteContactService bot action component properties.  
    <img src="../images/hubspot-tem-img41.png" alt="deleteContactService" title="deleteContactService" style="border: 1px solid gray;zoom:50%;"/>
    4. **getAccountService** – A bot action service to get account details in an external integration. Click the **Plus** icon to expand to view the getAccountService bot action component properties.
    5. **deleteContactMessage** – A message node with script to display responses for various scenarios.

3. Refer the step 3 to [train and talk to bot ](#create-a-deal)section and learn how to delete the contact.

!!! note

    If you enter an incorrect ID, the _404 – No Record Found_ error message is displayed.