# Zoho Connector

Zoho CRM is a customer relationship management platform designed to help businesses manage their sales, marketing, and customer support operations. It streamlines processes by tracking customer interactions, automating workflows, and providing actionable insights. SearchAI can ingest key data from Zoho CRM, including **Leads**, **Accounts**, **Contacts**, and **Deals**, enabling users to access relevant information quickly.

**<span style="text-decoration:underline;">Zoho Connector Specifications</span>**


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
   <td><strong>Leads</strong>, <strong>Accounts</strong>, <strong>Contacts</strong>, and <strong>Deals</strong>
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

Search AI interacts with Zoho CRM via its APIs. The Zoho CRM API uses the OAuth2.0 protocol for authentication. Hence, to set up this communication, you must create an OAuth client in the Zoho API console and generate client credentials. 


## Adding an OAuth Client in Zoho



1. Go to [Zoho Developer Console](https://api-console.zoho.com/).
2. Select the client type as Server-based Applications.
3. Set the Authorized Redirect URIs as one of the following as per your region or deployment. 
    * JP Region Callback URLs: `https://jp-bots-idp.kore.ai/workflows/callback`
    * DE Region Callback URLs: `https://de-bots-idp.kore.ai/workflows/callback`
    * Prod Callback URLs: `https://idp.kore.com/workflows/callback`
4. Click **Create**. This generates the client credentials, which can be found in the Client Secret tab. 

Note that we uses the following scopes to access information from the Zoho CRM account. 

* ZohoCRM.org.READ
* ZohoCRM.apis.READ
* ZohoCRM.users.READ
* ZohoCRM.coql.READ
* ZohoCRM.modules.READ
* ZohoCRM.modules.entity_scores.READ


## Zoho Connector Configuration in Search AI

On the **Authorization** tab of the connector, provide the following details.


* Name - Unique name for the connector.
* Region - Select the domain of your Zoho Account. Check your account URL to identify the domain. URL is generally in the format : [https://crm.zoho.in/](https://crm.zoho.in/) where the last part, after zoho, represents the domain. 
* Authorization Type - Set it to OAuth 2.0.
* Grant Type - Currently, Authorization Code Grant Type is supported. 
* Client ID - Client ID for the OAuth client created above. 
* Client Secret - Client Secret for the OAuth client created above.

Click **Connect** to authenticate the client and set up communication. 


## Content Ingestion

The Zoho connector ingests **Leads**, **Accounts**, **Contacts**, and **Deals** from your Zoho account. Each record is ingested as a separate document in **Search AI**, with the `doc_source_type` field indicating the type of ingested content.

For each of the different types of content, the **content** field in the ingested document contains the following fields.



* Leads: Captures essential information about a lead, including name, lead status, source, company, email address, phone number, lead owner, other contact details about the lead. 
* Contacts: Includes key details such as Name, title, email, phone number, account, owner, contact information.
* Accounts: Stores comprehensive information about an account, including website, number of employees, annual revenue are captured in the content field. 
* Deals: Provides information related to business deals like name, stage, contact details, associated account and total amount of the deal are captured in the content field. 

In addition to the `content` field, other metadata related to these content types are available within the ingested document in specific fields in the ingested document for enhanced data management and search capabilities.


## RACL Support

A record in Zoho has many levels of access management. 

There are two main factors that affect the access of a record by a user 



* **Profile** -A profile defines a user’s permissions at the module level (e.g., Leads, Deals, Contacts). It specifies what actions (view, edit, delete) a user can perform and which modules they can access.
* **Role** -A role establishes a user’s position in the organizational hierarchy (e.g., Employee, Manager, CEO). 

**Default Record Access**

For each record from Zoho CRM, the `sys_racl` field contains the following values.

* The creator of the record, by default, has access to the record. Hence the creator email id is added to the `sys_racl` field. 
* Zoho CRM follows a role hierarchy. All the users belonging to roles superior to the creator's role can access the record if their profile permits. For instance, if the creator’s role is Employee, his manager and senior manager and director can all access the document. Hence the `sys_racl` field also contains role IDs corresponding to all the roles superior to that of the creator.

```
{ 
 "sys_racl": ["Manager_roleId", "CEO_roleId"] 
}
```

**Sharing of record**

A record can be further shared with users other than the default access. A record can be private or public. 


* **Public Records**

    A public record is accessible to all the users who have access to it on the basis of their profile or role.  **If a record is publicly shared**, all users whose profile grants access to that module should see the record. For instance, if a Lead record is shared publicly, and it is accessible to the following profiles, then the `sys_racl` field would be as shown below. 
    
    **Example**: A Lead record is shared publicly, and the following profiles have access to the Leads module:  
    <table>
    <tr>
    <td>
    <strong>Profile Name</strong>
    </td>
    <td><strong>Accessible Modules</strong>
    </td>
    </tr>
    <tr>
    <td>Administrator
    </td>
    <td>Leads, Deals, Contacts, Accounts
    </td>
    </tr>
    <tr>
    <td>Standard
    </td>
    <td>Leads, Deals, Contacts
    </td>
    </tr>
    <tr>
    <td>Marketing
    </td>
    <td>Deals, Leads
    </td>
    </tr>
    </table>
    
    The sys_racl field would be as shown below. 

    ```
    {
    "sys_racl": ["leads_<Administrator_ProfileId>",  leads_<Standard_ProfileId>", "leads_<Marketing_ProfileId>"]
    }

    ```



* **Private Records** : Private records restrict access to the creator and their superiors by default. Additional sharing can be configured at three levels:

    1. Users – Direct access to individual users. If a record is shared with a user, user email is added to the sys_racl:

    ```
        { 
        "sys_racl": ["john.doe@example.com"] 
    }
    ```

    2. Roles – Access based on user roles If a record is shared with a role, we add the module name and role ID:

    ```
    { "sys_racl": ["Leads_role ID"] }
    ```

    3. Groups – Access based on predefined groups. If a record is shared with a group, the module name and group ID are added to the `sys_racl` field as shown below. 
    ```
    { "sys_racl": ["Deals_GroupId"] }
    ```