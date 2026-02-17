# Opsgenie Connector

Opsgenie is an incident management app that helps teams respond quickly to critical issues. It receives alerts from monitoring tools and applications, prioritizes them based on urgency, and notifies the right people immediately.

Search AI enables the ingestion of **alerts** and **incidents** from Opsgenie for seamless tracking and analysis.

**<span style="text-decoration:underline;">Opsgenie Connector Specifications</span>**


<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Content Supported
   </td>
   <td><strong>Alerts and Incidents</strong>
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>No
   </td>
  </tr>
</table>



## Connector Configuration

Search AI connects with Opsgenie through its APIs. Opsgenie uses API key-based authentication to authorize access. To establish this connection, you need to generate an API key from the Opsgenie console and configure it within Search AI.


### Generate API Key

To add an API key:

1. Go to Settings page >> App Settings >> API Key Management.
2. Click Add New API Key.
3. Enter a name for the API key and select the **Read Access and Configuration Access**. It automatically generates an API key. You can regenerate the shown API key before saving, if required.
4. Click Add API Key to save the new API key.


### Opsgenie Connector Configuration in Search AI

On the Authentication page of the connector, enter the following information. 

* Name - Unique name for the connector. 
* Customer Name - This is the customer name as on the **Profile Settings page** in Opsgenie application. 
* API Key - API Key generated in the Opsgenie application. 
* Click **Connect**. This initiates the authentication process. 


## Content Ingestion

Search AI currently supports the ingestion of **Alerts and Incidents** from the Opsgenie application. 

Upon ingestion, the content is captured in **JSON format. The doc_source_type field** in the ingested content suggests whether the content has details of an alert or an incident. Some of the key fields for both alerts and incidents include:



* **Title**: Alert or Incident Message
* **Content**: Description of the alert or incident, followed by other important information about the alert, like seen or not, acknowledgement status, responders, reports, if any. 
* **Doc_created_on** and **Doc_updated_on**: Captures the creation and last update time. 
* **Status**: Status at the time of sync
* **Priority**: Priority assigned to the alert or incident.  
* **Labels**: A Set of labels for the given alert or incident. 

You can view the complete set of fields for both alerts and incidents in the Content page of the connector. 


## RACL Support

The **Opsgenie Connector** supports Restricted Access Control Lists (RACL) to manage user-specific access to ingested content.

Each alert or incident is visible only to users listed in the **responders** section of that alert or incident. The responders list may include both **individual users** and **teams**.

For both alerts and incidents, the **sys_racl** field includes:

* The **email IDs** of individual users who are direct responders.
* The **team IDs** of teams assigned as responders.

For each team ID, a corresponding **permission entity** is automatically created. You can use the **Permission Entity APIs** to associate individual users with these team IDs, thereby granting them access to the respective alerts and incidents.

 
