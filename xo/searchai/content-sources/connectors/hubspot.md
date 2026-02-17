# HubSpot Connector

HubSpot provides a CRM platform with different tools to enable businesses to manage customer service, operations, marketing, sales, and more. SearchAI’s HubSpot Connector enables you to easily integrate with the HubSpot application to ingest **Tickets, Contacts, Companies, and Deals-related content** and use it to answer user queries. 



<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Supported Content Type
   </td>
   <td>Tickets, Contacts, Companies, Deals
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>Yes
   </td>
  </tr>
    <tr>
   <td>Automatic Permission Entities Resolution </td>
   <td>Yes </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>Yes
   </td>
  </tr>
</table>



## Authorization Support

You can set up communication between Search AI and HubSpot using a **private app.** 

**Private App**: If you are authenticating via a Private App, you must use your Access Token to set up the connector. Refer to the [official HubSpot documentation](https://developers.hubspot.com/docs/api/private-apps){:target="_blank"} to learn how to obtain the access token. This access token is used to configure the connector in Search AI. 

The following **permissions** are required to ingest the required data from the HubSpot account. Select the following scopes while creating the app. 

* crm.objects.users.read
* tickets
* crm.objects.owners.read
* settings.users.teams.read
* crm.objects.companies.read
* crm.objects.deals.read
* crm.objects.contacts.read


## HubSpot Connector Configuration

Go to the ***Connectors*** page and select **HubSpot**. On the **Authentication** page, enter the following details to enable SearchAI to establish a connection with HubSpot. 

* **Name**: Unique name for the connector
* **Authentication**: Currently authentication via **Private App is supported.**
* **API Key:** Provide the **Access Token** generated in the HubSpot account. 


## Content Ingestion

After you connect the Search AI connector to the HubSpot account, go to the **Manage Content** page, and then select the content types to ingest from HubSpot. You can select one or more supported content types under **Object Type**. 

When synchronized, Search AI ingests **Tickets, Contacts, Companies, and Deals** from the HubSpot account.

For each content type, the following details are captured:

* The `content` field in the Search AI index stores the main content.
* The `type` field identifies the content type.
* Other properties are stored in dedicated fields within the index or as metadata fields.

Tickets: 

* Content of the ticket
* Priority
* creation Date
* Owner Name
* Last activity date
* Associated Companies 
* Associated Contacts

Deals:

* Amount
* Creation Date
* Deal Stage
* Owner Name
* Last Activity Date
* Associated Companies
* Associated Contacts

Contacts:

* Email Id 
* Phone number
* Company name
* Total Revenue
* Recent Deal amount
* Creation Date
* Last Activity Date
* Owner Name 
* Associated Companies. 

Companies

* Description
* Domain Name
* Industry
* City
* Employees Count
* Annual Revenue
* Owner Name
* Associated Contacts

Note: At each sync, content from the past 90 days is ingested from the account. 

## Content Filtering

HubSpot connector offers advanced filters to allow selective ingestion of content from the HubSpot account. 

Go to Manage Content and select the Object Type. Select one or more of the supported content types listed in the dropdown. 

![Manage Content](images/hubspot/manage-content.png "Manage Content For ingestion")


To ingest all the content related to a given content type, click on **Sync**. 

To further filter the content for ingestion, select **Ingest Filtered Content** and click on **Edit Configuration**. 

![Ingestion Filters](images/hubspot/ingestion-filter.png "Ingestion Filters")


Under **Advanced Filters**, you can create filter rules based on the properties of the content types selected for ingestion. All default properties are available in the **Parameter** list. For each parameter, specify an appropriate operator and value.

You can define one or more filter conditions using logical **AND** and **OR** operators to explicitly retrieve the desired content from your HubSpot account.

Set up filters and click **Save**. 

Note:

* If a filter is configured using a content type that is not selected under **Object Type** on the **Manage Content** page, the application will ignore the filter.
* Each content type includes a set of default parameters shown in the **Parameter** drop-down, which can be used to define filters. To ensure accurate content selection, make sure to choose appropriate operators and values when setting filters.
* To use a parameter not listed in the drop-down, select the **Add** option. Ensure that the parameter name exactly matches the corresponding name in your HubSpot account.


## RACL Support

Search AI manages access to HubSpot content using the sys_racl field. For each ingested content type—such as tickets or deals:


* The `sys_racl` field includes the email address of the content owner, which allows direct access. 
* Search AI automatically creates permission entities for the teams the owner belongs to and connects team members to those entities.
* No manual setup is needed—Search AI handles access associations automatically.