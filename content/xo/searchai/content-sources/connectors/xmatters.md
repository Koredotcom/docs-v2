# xMatters Connector

xMatters is used for incident management and automated alerting, helping teams quickly respond to and resolve issues. It integrates with monitoring tools to deliver targeted notifications and orchestrate workflows.

<span style="text-decoration:underline;">Specifications</span>


<table>
  <tr>
   <td><strong>Type of Repository </strong>
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td><strong>Supported Content</strong>
   </td>
   <td>Incidents, Events, On-Calls
   </td>
  </tr>
  <tr>
   <td><strong>RACL Support</strong>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Content Filtering</strong>
   </td>
   <td>No
   </td>
  </tr>
</table>



## Prerequisites

Search AI utilizes **OAuth 2.0 Password Grant Type** authentication to interact with xMatters. To connect with xMatters, Search AI requires an OAuth Client ID along with user credentials. These user credentials are used to generate a token essential for communication. The authorization token grants the same permissions in xMatters as the user account that created it.



* Navigate to **Workflows > OAuth** in the xMatters account. 
* Copy the **client ID**. This is unique for your xMatters company and will be required while configuring the Search AI xMatters connector. 


## xMatters Connector Configuration in Search AI

Navigate to the xMatters Connector and enter the following details in the Authentication page. 

1. Name: Unique identifier for the connector. 
2. Domain: Provide the unique company domain in xMatters. For instance, if your domain is test.xmatters.com , provide only `test` in this field. 
3. Client ID: Provide the client ID for your xMatters instance. 
4. Username: The user name of the account that you want to use to authenticate requests.
5. User Password: The password of the account that you want to use to authenticate requests.


## Content Ingestion

Search AI ingests the following types of content from xMatters, along with their properties. 



* **Incidents**
* **Alerts (also referred to as Events)**
* **On Calls**

The type of content is identified by the **doc_source_type**. Other meta data information is available in respective fields in the ingested content. 


## Access Control

For incidents and alerts, the `sys_racl` field in the ingested content contains the following as permission entities. 



* user id of the commander, if available. 
* User id of the resolvers, if available.
* User id of the creator 
* Group Id of one or more groups, if involved.

For on-calls, the `sys_racl` contains

* Group Id 

Use the [Permission Entity APIs](../../../apis/searchai/permission-entity-apis.md) to associate users with the permission entities.
