# Using the Salesforce CRM Action Templates

You can use the **Prebuilt Action Templates** from your Salesforce integration to auto create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using Salesforce action templates:

1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click the **Create a Dialog Task** to create a new task.  

3. On the Dialog Task pop-up, under the **Integration**, select the **Salesforce** option to view the action templates.  
<img src="../images/salesforce-tem-img2.png" alt="Integration - Salesforce" title="Integration - Salesforce" style="border: 1px solid gray;zoom:50%;"/>


If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the **Actions** page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.

## Salesforce CRM Actions 

The following Salesforce CRM actions are supported in this release:

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
   <td>Create a Lead
   </td>
   <td>Creates a new marketing lead in the CRM.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Create an Opportunity
   </td>
   <td>Creates a new opportunity in the CRM.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Update a Lead
   </td>
   <td>Updates the lead with changes
   </td>
   <td>PATCH
   </td>
  </tr>
  <tr>
   <td>View a Lead By ID
   </td>
   <td>Retrieves the lead details.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>List All Leads
   </td>
   <td>Retrieves all leads from the CRM
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Search Leads
   </td>
   <td>Searches all leads that matches with the keyword
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Delete a Lead
   </td>
   <td>Deletes a lead
   </td>
   <td>DELETE
   </td>
  </tr>
</table>



### Create a Lead

Steps to create a new lead in the Salesforce CRM:

1. Refer to the [Installing the Salesforce CRM Action Templates](configuring-the-salesforce-crm-action.md#step-2-install-the-salesforce-action-templates){:target="_blank"} section to install this template.
2. The _Create a Lead_ dialog task is added with the following components:
    1. **Createlead** - A user intent to create a lead.
    2. **firstName**, **lastName**, and **companyName** – Entity nodes for gathering the required lead details.
    3. **CreateLeadService** – A bot action service to create a lead in an external integration. Click the **Plus** icon to expand to view the createLeadService bot action component properties.  
    <img src="../images/salesforce-tem-img4.png" alt="createLeadService bot action component properties" title="createLeadService bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    4. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/salesforce-tem-img5.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request:**

        ```
        {
        "attributes": {
        "type": "Lead"
        },
        "LastName": "Doe",
        "FirstName": "John",
        "Salutation": "Mr.",
        "Title": null,
        "Company": "ABC",
        "Street": null,
        "City": null,
        "State": null,
        "PostalCode": null,
        "Country": null,
        "Latitude": null,
        "Longitude": null,
        "GeocodeAccuracy": null,
        "Phone": null,
        "MobilePhone": "93445667xx",
        "Fax": null,
        "Email": null,
        "Website": null,
        "Description": null,
        "LeadSource": null,
        "Status": "Open - Not Contacted",
        "Industry": null,
        "Rating": null,
        "AnnualRevenue": null,
        "NumberOfEmployees": null,
        "OwnerId": "0055g00000ECRvPAAX",
        "IsConverted": false,
        "IsUnreadByOwner": false,
        "Jigsaw": null,
        "CleanStatus": "Pending",
        "CompanyDunsNumber": null,
        "IndividualId": null,
        "SICCode__c": null,
        "ProductInterest__c": null,
        "Primary__c": null,
        "CurrentGenerators__c": null,
        "NumberofLocations__c": null
        }
        ```

        To add one or more responses scroll down and click the **+Add Response** button:  
        <img src="../images/salesforce-tem-img6.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response:**

        ```
        {
        "id": "00Q5g00000DZ0d4EAD",
        "success": true,
        "errors": [] 
        }
        ```

    5. **subDomainService** – A bot action service to fetch subdomain in an external integration. Click the **Plus** icon to expand to view the subDomainService bot action component properties.  
    <img src="../images/salesforce-tem-img7.png" alt="subDomainService bot action component properties" title="subDomainService bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    6.  **createLeadMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task
5. Follow the prompts in the App console to create a lead as shown below:  
<img src="../images/salesforce-tem-img8.png" alt="VA prompts to create a lead" title="VA prompts to create a lead" style="border: 1px solid gray;zoom:50%;"/>

6. Enter all lead details when prompted by the VA as shown below:  
<img src="../images/salesforce-tem-img9.png" alt="Enter lead details" title="Enter lead details" style="border: 1px solid gray;zoom:50%;"/>

7. The new lead is created in Salesforce CRM.  
<img src="../images/salesforce-tem-img10.png" alt="New lead created" title="New lead created" style="border: 1px solid gray;zoom:50%;"/>

8. Click the **View Lead** button to view the lead details in Salesforce CRM.  
<img src="../images/salesforce-tem-img11.png" alt="View lead details" title="View lead details" style="border: 1px solid gray;zoom:50%;"/>

### Update a Lead

Steps to update an existing lead in Salesforce CRM:

1. Refer to the [Installing the Salesforce CRM Action Templates](configuring-the-salesforce-crm-action.md#step-2-install-the-salesforce-action-templates){:target="_blank"} section to install this template.
2. The _Update a Lead_ dialog task is added with the following components:  
<img src="../images/salesforce-tem-img12.png" alt="Update a Lead dialog task is added" title="Update a Lead dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Update lead** - A user intent to update a lead.
    2. **Id**, **AskOptions**, **LeadStatus**, **Title**, and **MobilePhone** – Entity nodes for updating the lead details.
    3. **updateLeadScript** – A bot action script to update a lead in an external integration. Click the **Plus** icon to expand to view the updateLeadScript bot action component properties.  
    <img src="../images/salesforce-tem-img13.png" alt="updateLeadScript bot action component properties" title="updateLeadScript bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    4. **updateLeadService** – A bot action service to update a lead in an external integration. Click the **Plus** icon to expand to view the updateLeadService bot action component properties.
    5. **subDomainService** – A bot action service to fetch subdomain in an external integration. Click the **Plus** icon to expand to view the subDomainService bot action component properties.
    6.  **updateLeadMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to update a lead.
6. Enter all lead details when prompted by the VA
7. The existing lead is updated in Salesforce CRM. 
8. Click the **View Lead** button to view the lead details in Salesforce CRM.  
<img src="../images/salesforce-tem-img14.png" alt="uView lead details" title="View lead details" style="border: 1px solid gray;zoom:50%;"/>

### Delete a Lead

Steps to delete a lead in Salesforce CRM:

1. Refer to the [Installing the Salesforce CRM Action Templates](configuring-the-salesforce-crm-action.md#step-2-install-the-salesforce-action-templates){:target="_blank"} section to install this template.
2. The _Delete Lead_ dialog task is added for the Salesforce CRM with the following components:  
<img src="../images/salesforce-tem-img15.png" alt="Delete Lead dialog task is added" title="Delete Lead dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Delete Lead** - A user intent to delete lead.
    2. **ID** – Entity nodes for entering the lead ID.
    3. **deleteLeadService** – A bot action script to delete a lead in an external integration. Click the **Plus** icon to expand to view the deleteLeadService bot action component properties.  
    <img src="../images/salesforce-tem-img16.png" alt="deleteLeadService bot action component properties" title="deleteLeadService bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    4. **deleteLeadMessage** – A message node with script to display responses for various scenarios

3.  Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task
5. Follow the prompts in the App console to delete a lead as shown below:  
<img src="../images/salesforce-tem-img17.png" alt="VA prompt to delete a lead" title="VA prompt to delete a lead" style="border: 1px solid gray;zoom:50%;"/>

### List All Leads

Steps to view all leads in Salesforce CRM:

1. Refer to the [Installing the Salesforce CRM Action Templates](configuring-the-salesforce-crm-action.md#step-2-install-the-salesforce-action-templates){:target="_blank"} section to install this template.
2. The _List All Leads_ dialog task is added for the Salesforce CRM with the following components:  
<img src="../images/salesforce-tem-img18.png" alt="List All Leads dialog task is added" title="List All Leads dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **List All Lead** - A user intent to list all leads.
    2. **listAllLeadsService** – A bot action script to view all leads in an external integration. Click the **Plus** icon to expand to view the listAllLeadsService bot action component properties.  
    <img src="../images/salesforce-tem-img19.png" alt="listAllLeadsService bot action component properties" title="listAllLeadsService bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    3. **Sample Response:**

        ```
        {
        "objectDescribe": {
        "activateable": false,
        "associateEntityType": null,
        "associateParentEntity": null,
        "createable": true,
        "custom": false,
        "customSetting": false,
        "deepCloneable": false,
        "deletable": true,
        "deprecatedAndHidden": false,
        "feedEnabled": true,
        "hasSubtypes": false,
        "isInterface": false,
        "isSubtype": false,
        "keyPrefix": "00Q",
        "label": "Lead",
        "labelPlural": "Leads",
        "layoutable": true,
        "mergeable": true,
        "mruEnabled": true,
        "name": "Lead",
        "queryable": true,
        "replicateable": true,
        "retrieveable": true,
        "searchable": true,
        "triggerable": true,
        "undeletable": true,
        "updateable": true,
        "urls": {
        "compactLayouts": "/services/data/v52.0/subjects/Lead/describe/compactLayouts",
        "rowTemplate": "/services/data/v52.0/subjects/Lead/{ID}",
        "approvalLayouts": "/services/data/v52.0/subjects/Lead/describe/approvalLayouts",
        "listviews": "/services/data/v52.0/subjects/Lead/listviews",
        "describe": "/services/data/v52.0/subjects/Lead/describe",
        "quickActions": "/services/data/v52.0/subjects/Lead/quickActions",
        "layouts": "/services/data/v52.0/subjects/Lead/describe/layouts",
        "sobject": "/services/data/v52.0/subjects/Lead"
        }
        },
        "recentItems": [
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000DYz3xxxx"
        },
        "Id": "00Q5g00000DYz3xxxD",
        "Name": "John, Jane"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000ENUBxxxx"
        },
        "Id": "00Q5g00000ENUBxxxx",
        "Name": "Smith, Steve"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000DZ5xxxT"
        },
        "Id": "00Q5g00000DZ5xxxxT",
        "Name": "Doe, John"
        }
        ] }
        ```

    3. **subDomainService** – A bot action service to fetch subdomain in an external integration. Click the **Plus** icon to expand to view the subDomainService bot action component properties.
    4. **listAllLeadsMessage**– A message node with script to display responses for various scenarios.

4. Click the **Train** tab to complete the Dialog task training.
5. Click the **Talk to Bot** icon to test and debug the dialog task
6. Follow the prompts in the App console to view all leads as shown below:  
<img src="../images/salesforce-tem-img20.png" alt="VA prompts to view all leads" title="VA prompt to view all leads" style="border: 1px solid gray;zoom:50%;"/>


### View a Lead By ID

Steps to view all leads in Salesforce CRM:

1. Refer to the [Installing the Salesforce CRM Action Templates](configuring-the-salesforce-crm-action.md#step-2-install-the-salesforce-action-templates){:target="_blank"} section to install this template.
2. The _View Lead by Id_ dialog task is added for the Salesforce CRM with the following components:  
<img src="../images/salesforce-tem-img21.png" alt="View Lead by Id dialog task is added" title="View Lead by Id dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **View Lead by Id** - A user intent to view a lead using ID.
    2. **ID** – Entity nodes for entering the lead ID.
    3. **viewLeadbyIdService** – A bot action script to view a lead using ID in an external integration. Click the **Plus** icon to expand to view the listAllLeadsService bot action component properties and click the **+ Add Response** link.  
    <img src="../images/salesforce-tem-img22.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

    4. **Sample Response:**

        ```
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000DYz3mEAD"
        },
        "Id": "00Q5g00000DYz3mEAD",
        "IsDeleted": false,
        "MasterRecordId": null,
        "LastName": "Doe",
        "FirstName": "John",
        "Salutation": "Mr.",
        "Name": "John Doe",
        "Title": null,
        "Company": "Kore",
        "Street": null,
        "City": null,
        "State": null,
        "PostalCode": null,
        "Country": null,
        "Latitude": null,
        "Longitude": null,
        "GeocodeAccuracy": null,
        "Address": null,
        "Phone": null,
        "MobilePhone": "9344566xxx",
        "Fax": null,
        "Email": null,
        "Website": null,
        "PhotoUrl": "/services/images/photo/00Q5g00000DYz3mxxx",
        "Description": null,
        "LeadSource": null,
        "Status": "Open - Not Contacted",
        "Industry": null,
        "Rating": null,
        "AnnualRevenue": null,
        "NumberOfEmployees": null,
        "OwnerId": "0055g00000ECRvxxxX",
        "IsConverted": false,
        "ConvertedDate": null,
        "ConvertedAccountId": null,
        "ConvertedContactId": null,
        "ConvertedOpportunityId": null,
        "IsUnreadByOwner": false,
        "CreatedDate": "2022-08-30T06:49:28.000+0000",
        "CreatedById": "0055g00000ECRVXXXX",
        "LastModifiedDate": "2022-08-30T11:25:21.000+0000",
        "LastModifiedById": "0055g00000ECRvPAAX",
        "SystemModstamp": "2022-08-30T11:25:21.000+0000",
        "LastActivityDate": null,
        "LastViewedDate": "2022-08-30T11:26:32.000+0000",
        "LastReferencedDate": "2022-08-30T11:26:32.000+0000",
        "Jigsaw": null,
        "JigsawContactId": null,
        "CleanStatus": "Pending",
        "CompanyDunsNumber": null,
        "DandbCompanyId": null,
        "EmailBouncedReason": null,
        "EmailBouncedDate": null,
        "IndividualId": null,
        "SICCode__c": null,
        "ProductInterest__c": null,
        "Primary__c": null,
        "CurrentGenerators__c": null,
        "NumberofLocations__c": null
        }
        ```

    5. **subDomainService** – A bot action service to fetch subdomain in an external integration. Click the **Plus** icon to expand to view the subDomainService bot action component properties.
    6. **viewLeadbyIdMessage** – A message node with script to display responses for various scenarios.

4. Click the **Train** tab to complete the Dialog task training.
5. Click the **Talk to Bot** icon to test and debug the dialog task
6. Follow the prompts in the App console to view a lead by ID as shown below:  
<img src="../images/salesforce-tem-img23.png" alt="VA prompts to view lead by id" title="VA prompts to view lead by id" style="border: 1px solid gray;zoom:50%;"/>

### Search Leads

Steps to search all leads in Salesforce CRM:

1. Refer to the [Installing the Salesforce CRM Action Templates](configuring-the-salesforce-crm-action.md#step-2-install-the-salesforce-action-templates){:target="_blank"} section to install this template.
2. The _Search Leads_ dialog task is added for the Salesforce CRM with the following components:  
<img src="../images/salesforce-tem-img24.png" alt="Search Leads dialog task is added" title="Search Leads dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Search Leads** - A user intent to search leads.
    2. **Keyword** – Entity nodes for entering the keywords for the searching leads.
    3. **searchLeadsService** – A bot action script to search leads in an external integration. Click the **Plus** icon to expand to view the searchLeadsService bot action component properties and click the **+Add Response** link.  
    <img src="../images/salesforce-tem-img25.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

    4. **Sample Response:**

        ```
        {
        "searchRecords": [
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000ENk9xxxxT"
        },
        "Id": "00Q5g00000ENk9xxxT"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000DZ52HEAT"
        },
        "Id": "00Q5g00000DZ52HEAT"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000ENnKlEAL"
        },
        "Id": "00Q5g00000ENnKlEAL"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000ENnKgEAL"
        },
        "Id": "00Q5g00000ENnKgEAL"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000ENcKqEAL"
        },
        "Id": "00Q5g00000ENcKqEAL"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000ENcKlEAL"
        },
        "Id": "00Q5g00000ENcKlEAL"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000ENcKgEAL"
        },
        "Id": "00Q5g00000ENcKgEAL"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000ENcHDEA1"
        },
        "Id": "00Q5g00000ENcHDEA1"
        },
        {
        "attributes": {
        "type": "Lead",
        "url": "/services/data/v52.0/subjects/Lead/00Q5g00000ENXzXEAX"
        },
        "Id": "00Q5g00000ENXzXEAX"
        }
        ] }
        ```

    5. **subDomainService** – A bot action service to fetch subdomain in an external integration. Click the **Plus** icon to expand to view the subDomainService bot action component properties.
    6. **searchLeadsMessage** – A message node with script to display responses for various scenarios. 

4. Click the **Train** tab to complete the Dialog task training.
5. Click the **Talk to Bot** icon to test and debug the dialog task
6. Follow the prompts in the App console to view all leads as shown below:  
<img src="../images/salesforce-tem-img26.png" alt="VA prompt to view all leads" title="VA prompt to view all leads" style="border: 1px solid gray;zoom:50%;"/>


### Create an Opportunity

Steps to create a new opportunity in Salesforce CRM:

1. Refer to the [Installing the Salesforce CRM Action Templates](configuring-the-salesforce-crm-action.md#step-2-install-the-salesforce-action-templates){:target="_blank"} section to install this template.
2. The _Create Opportunity_ dialog task is added for the Salesforce CRM with the following components:  
<img src="../images/salesforce-tem-img27.png" alt="Create Opportunity dialog task is added" title="Create Opportunity dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Create Opportunity** - A user intent to create an opportunity.
    2. **Opportunity Name**, **Closed Date**, and **Stage of Opportunity** – Entity nodes for gathering the required opportunity details.
    3. **CreateOpportunityService** – A bot action script to create an opportunity in an external integration. Click the **Plus** icon to expand to view the createOpportunityService bot action component properties.
    4. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/salesforce-tem-img28.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

    5. **Sample Request:**

        ```
        {
        "attributes": {
        "type": "Opportunity"
        },
        “Name”: “Project Charlie”,
        “CloseDate”: “2022-08-31”,
        “StageName”: “Prospecting”
        }
        ```

        To add one or more responses scroll down and click the **+Add Response** button:  
        <img src="../images/salesforce-tem-img29.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response:**

        ```
        {
        "id": "0065g00000O4bgDAAR",
        "success": true,
        "errors": [] }
        ```
    6. **subDomainService** – A bot action service to add subdomain in an external integration. Click the **Plus** icon to expand to view the subDomainService bot action component properties.
    7.  **createOpportunityMessage** – A message node with script to display responses for various scenarios. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task
5. Follow the prompts in the App console to create an opportunity as shown below:  
<img src="../images/salesforce-tem-img30.png" alt="VA prompts to create opportunity" title="VA prompts to Create Opportunity" style="border: 1px solid gray;zoom:50%;"/>

8. Enter all opportunity details when prompted by the AI Agent.
9. The new opportunity is created in Salesforce CRM. Click the **Chevron** icon to expand the new opportunity.  
<img src="../images/salesforce-tem-img31.png" alt="Expand the new opportunity" title="Expand the new opportunity" style="border: 1px solid gray;zoom:50%;"/>

10. Click the **View Opportunity** button to view the opportunity details in Salesforce CRM.  
<img src="../images/salesforce-tem-img32.png" alt="View opportunity details" title="View opportunity details" style="border: 1px solid gray;zoom:50%;"/>
