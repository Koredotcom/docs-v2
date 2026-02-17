# Pager Duty Connector

**PagerDuty** is primarily used for **incident management** and **real-time operational monitoring**. It helps organizations detect, respond to, and resolve incidents quickly by notifying the right teams or individuals when issues occur.

Search AI ingests **Schedules and Escalation Policies** from PagerDuty and enables easy search on these objects. 

**<span style="text-decoration:underline;">PagerDuty Connector Specifications</span>**


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
   <td>
<ul>

<li>Schedules</li>

<li>Escalation Policies</li>
</ul>
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

Search AI interacts with PagerDuty through its APIs. API communication can be done by two methods:

* Registering Search AI as an OAuth app in PagerDuty app and generating client credentials for authentication. 
* Using API Token for authentication. 


## Prerequisites

* A PagerDuty account with required access to all the policies and schedules that need to be ingested.


## OAuth Authentication

To enable OAuth authentication, register an app with PagerDuty. 

* Sign in to your PagerDuty account.
* From the top menu, select Integrations.
* Select App Registration from the menu to navigate to the My Apps page.
* Select New App and set the following fields:
    * Name - Unique name for the application. 
    * Description - Brief description of the app. 
    * Functionality - Select OAuth 2.0.
    * Redirect URL - Select one of the following URLs. 
        * JP Region Callback URL:`https://jp-bots-idp.kore.ai/workflows/callback`
        * DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
        * Prod Callback URL: `https://idp.kore.com/workflows/callback`
    * Permission Scope - Enable **Read Access** for the following.
        * Escalation Policies
        * Schedules
        * Users
        * Tags
        * Teams
* Click **Register App**. This will generate the client credentials. These credentials are required during configuration of the connector in the Search AI app. 

## API Token 

* Sign in to your PagerDuty account.
* From the top menu, select **Integrations** and go to **API Access Keys**. 
* Click on **Create New API Key**.
* Provide a description of the usage of the key. 
* Click **Create Key.** 
* This will generate an API Key. Save the key for the configuration of the PagerDuty connector in Search AI. 


## PagerDuty Connector Configuration in Search AI

On the **Authorization** tab of the connector, enter the following details.

* Name - Unique name for the connector. 
* Authorization Type: Two auth mechanisms are supported for the connector. 
    * API Key: Enter the API Key generated in the PagerDuty application. 
    * OAuth 2.0: For this type of authentication, set grant type as Authorization Code and provide the client credentials generated in the PagerDuty application. 
* Click on **Connect** to authenticate and set up a connection with PagerDuty account. 


## Content Ingestion

On the **Configuration** tab, click **Sync Now** to sync with the PagerDuty account immediately. Sync ingests **Escalation Policies and Schedules** from the application. You can also schedule a sync to run in the background at regular intervals or sometime in the future using the scheduler. 

**Escalation Policy**

Escalation Policies defines how incidents are escalated within the team. For each policy ingested into the application, the title field contains the name of the policy, and the content field contains all the details of the policy, including the description, escalation rules, teams involved, handoff notifications, and total number of levels set in the policy. 

**Schedules**

Schedules describe the on-call rotation schedules assigned to team members.  For the schedules data ingested into the application, each record contains the details of the schedules created in the application, like the description of the schedule, schedule layers,  users, teams, escalation policy, total escalation levels, etc.


## RACL Support

In **PagerDuty**, the organizational structure is designed to manage and streamline incident management across different teams and users. Each **account** consists of **teams** that organize users, services, and escalation policies into manageable groups.

All the users with the following roles have access to account-wide data. 

* **Account Owner**
* **Admins**
* **Billing Contacts**

An escalation policy or a schedule in PagerDuty is associated with one or more teams. All the members of a team have access to the escalation policies of the team.  The users with the above roles also have access to the escalation policies and schedules. Hence, for both types of content, the sys_racl field contains permission entities corresponding to:

* Account Name or the subdomain name. 
* Team IDs of all the teams associated with the policy or schedule. 

Use the Permission Entity APIs to associate users with the above permission entities. 
