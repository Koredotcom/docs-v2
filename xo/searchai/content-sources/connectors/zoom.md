# Zoom Connector

Zoom is a versatile communication platform widely utilized for video conferencing, online meetings, webinars, and team collaboration. The integration of Search AI facilitates the ingestion of meeting content from the Zoom application, enabling users to search and access relevant data easily. This feature enhances productivity by allowing teams to quickly locate important discussions, decisions, and action items from past meetings.

**<span style="text-decoration:underline;">Zoom Connector Specifications</span>**


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
   <td>Past Meetings with Summary
   Note that if the summary is unavailable for a meeting, meeting details will not be ingested into Search AI.  
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
   <td>Yes
   </td>
  </tr>
</table>



## Connector Configuration

Search AI interacts with Zoom through its APIs. Registering Search AI as an OAuth app in the Zoom application is required to enable this communication. Follow the steps listed below to register the app. 


## Prerequisites

* A Zoom account with admin privileges on a Business or higher plan is needed. 
* The dashboard feature is enabled on the Zoom account.  
* A meeting summary is generated only if the Meeting Summary with AI Companion feature in the host's account is enabled. The summary cannot be generated for end-to-end-encrypted meetings. 


## OAuth Set up in Zoom

Search AI uses server-to-server OAuth configuration to access Zoom APIs and fetch meeting recordings. 

* Refer to [this ](https://developers.zoom.us/docs/internal-apps/create/)to create a server-to-server OAuth app. 
* Select the following OAuth scopes while creating the app. 
    * cloud_recording:read:list_recording_files:admin 
    * meeting:read:summary:admin
    * meeting:read:meeting:admin
    * meeting:read:list_summaries:admin
    * report:read:list_meeting_participants:admin
    * user:read:user:admin

*  Get your app credentials, including account ID, client ID, and client secret, on your [app details](https://developers.zoom.us/docs/internal-apps/create/) page.


## Zoom Connector Configuration in Search AI

On the **Authorization** tab of the Zoom connector, provide the app credentials generated above. Search AI internally uses those credentials to create an access token and invokes required APIs to get meeting details. Click on **Connect** to authenticate and set up a connection with Zoom. 


## Content Ingestion

On the **Configuration** tab, click **Sync Now** to immediately sync with the Zoom account. Sync only ingests meetings with AI-generated summaries from the application. You can also schedule a sync to run in the background at regular intervals or sometime in the future using the scheduler. 

Currently, Search AI only fetches data for the past 30 days during sync. The connector ingests the meeting summary along with the other meeting details. 

Note that the summary is generated only if the Meeting Summary with AI Companion feature in the host's account is enabled. End-to-end encrypted meetings do not have a summary at all. 

## Advanced Filters

You can now apply Advanced Filters to control which Zoom meetings are ingested. Supported filters include:

* Date From: Only include meetings starting on or after this date.
* Date To: Only include meetings ending on or before this date.

If no filters are configured, the connector defaults to ingesting all summary-enabled meetings from the past 30 days. This feature helps reduce API usage and ensures only relevant meeting data enters Search AI.

## RACL Support in ZOOM

In Zoom, all **meeting invitees** can access the **meeting summary and other metadata**. Hence, the `sys_racl` field includes both the **host's email address** and the **email addresses of all invitees and participants**.

When a meeting is conducted using a **personal meeting link or by directly sharing the meeting** **link with the attendees**, the `sys_racl` field is set to **the host's email address**.
