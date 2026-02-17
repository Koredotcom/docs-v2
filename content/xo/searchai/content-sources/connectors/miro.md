
# Miro Connector

[Miro](https://miro.com/index/){:target="_blank"} is the online workspace that enables distributed teams to design and build together. It offers a range of collaboration capabilities to create concepts, map user stories or customer journeys, or conduct roadmap planning with the help of Miro Boards. 

Search AI enables easy integration with Miro and ingests the metadata of **Boards**, facilitating easy and efficient search. 

<span style="text-decoration:underline;">Miro Connector Specifications</span>


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
   <td>Boards Metadata
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
   <td>No
   </td>
  </tr>
</table>


## Prerequisites

Search AI Connector uses Miro APIs to access the resources on the application and ingest the required content. To authenticate these API requests, Search AI uses the OAuth 2.0 authentication mechanism. Hence, it is required to generate credentials for the same. 

## Generate OAuth credentials

1. In your Miro account, click on the user avatar and go to the **Profile**. 
1. Navigate to **Your Apps** tab and click **+Create New App**. 
1. Provide a name for the app. 
1. Add a **Redirect URI** for the app. Select one of the following URLs as per the region and deployment. 
    * JP Region Callback URL: [https://jp-bots-idp.kore.ai/workflows/callback](https://jp-bots-idp.kore.ai/workflows/callback)
    * DE Region Callback URL: [https://de-bots-idp.kore.ai/workflows/callback](https://de-bots-idp.kore.ai/workflows/callback)
    * Prod Callback URL: [https://idp.kore.com/workflows/callback](https://idp.kore.com/workflows/callback)
1. Enable following permissions for the app. 
    * boards:read
    * organizations:read
    * projects:read
    * Organizations:teams:read
1. Install the app. Note that the app can be used only when it is deployed. 


## Configure Miro Connector in Search AI

* Go to the Miro Connector, provide the following details under the **Authorization** tab and click **Connect**. 
    * **Name**: Provide a unique name for the connector. 
    * **Authorization Type**: Set it to OAuth 2.0
    * **Grant Type**: Set it to Authorization Code. 
    * **Client ID**: Credentials generated for the OAuth app in Miro. 
    * **Client Secret**: Credentials generated for the OAuth app in Miro.


## Content Ingestion

The Miro Connector allows ingestion of information about Miro boards into the Search AI application. It captures the details of the boards, such as title, content, URL, and project to which the board belongs.

The content field in the ingested content contains the name and description of the board.

## RACL Support 

By default, when a board is created, it is automatically shared with the other members of the space, hence the `sys_racl` field is populated with spaceID.

Further, Miro boards can be shared using different access options. For each of the options, the `sys_racl` is populated as described below.

* **Share with specific users via email**: When users are directly added to a board, their email addresses are stored in the `sys_racl` field. The members of a space also have default access to the boards within the space. So, along with individual email addresses, the space ID (also referred to as project ID in Miro) is stored in `sys_racl` as a permission entity.
* **Share with team members**: If a board is shared with a team, the team ID is added to the `sys_racl` field. Since the space members are a subset of the team, when a board is shared with the team, `sys_racl` only contains team ID and spaceID is not added.
* **Everyone in the company**: When a board is shared at the company level, the Organization ID is stored in the `sys_racl` field. Since the space members are a subset of the members of the organization, when a board is shared with the organization, `sys_racl` only contains organizationID and spaceID is not added. 
* **Public Access**: The `sys_racl` field is set to *, allowing unrestricted access.

ProjectID, TeamID and OrganizationID are the permission entities that control access in SearchAI. For Miro boards, SearchAI supports automatic resolution of permission entities and maps them to the corresponding entity type.

This automated process ensures that access control reflects the board’s actual sharing configuration, eliminating the need for manual user-to-entity mapping.