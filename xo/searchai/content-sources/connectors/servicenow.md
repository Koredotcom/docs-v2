# ServiceNow Connector

You can connect to the ServiceNow application to enable users to fetch query results using the knowledge articles managed by ServiceNow. The connector now supports real-time synchronization through webhook integration, ensuring your Search AI index stays up-to-date with changes in ServiceNow.

**<span style="text-decoration:underline;">Connector Specifications</span>**


<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Answer Support
   </td>
   <td>
    <ul>
      <li>Published Knowledge Articles</li>
      <li>Incidents</li>
      <li>Catalog Items</li>
    </ul>
   </td>
  </tr>
   <tr>
   <td>RACL Support
   </td>
   <td>Yes.
   </td>
  </tr>
   <tr>
   <td>Content Filtering
   </td>
   <td>Yes
   </td>
  </tr>
   <tr>
   <td>Webhook Support
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td colspan="2" >Note: Searching through attachments not supported.
   </td>
  </tr>  
  </table>

To configure the ServiceNow connector, follow the steps listed below.


## Step 1: Configure an OAuth endpoint in ServiceNow

If you are using **Basic authentication**, you can skip this step. To use **OAuth 2.0** for authentication, set up an OAuth endpoint in your ServiceNow instance. Refer to[ this documentation](https://docs.servicenow.com/bundle/washingtondc-platform-security/page/administer/security/task/t_CreateEndpointforExternalClients.html) for step-by-step instructions to do the same. Use one of the following Redirect URLs as per your region and deployment.

* JP Region Callback URL: [https://jp-bots-idp.kore.ai/workflows/callback](https://jp-bots-idp.kore.ai/workflows/callback)
* DE Region Callback URL: [https://de-bots-idp.kore.ai/workflows/callback](https://de-bots-idp.kore.ai/workflows/callback)
* Prod Callback URL: [https://idp.kore.com/workflows/callback](https://idp.kore.com/workflows/callback)

## Step 2: Configure the ServiceNow connector in Search AI

* Select the ServiceNow connector from the list of available connectors. 
* Go to the **Authorization** tab and enter the following details:

![ServiceNow Authorization](images/servicenow/auth-tab.png "ServiceNow Authorization")

* **Name**: Give a unique name to the connector
* **Authorization Type**: Search AI supports two types of authentication: **Basic** and **OAuth 2.0**.
* **Grant Type**: For OAuth 2.0, Search AI supports the following two Grant Types for Service Now:
  * **Authorization Code**: If you are using this grant type, enter the client ID and client secret, generated in the above step.
  * **Password Grant Type**: If you are using this grant type, enter user credentials along with the client ID and client secret, generated in the above step.

* **Host URL**: Host of your ServiceNow instance.
* **Real-Time Sync**: Toggle to enable/disable automatic syncing of content changes in real-time using source notifications.
* **Webhook Client Secret**: Generated automatically (with option to regenerate).
* **Webhook URL**: Copy the provided webhook URL for configuration in ServiceNow.
* Click **Connect** to initiate authorization.
*  After the connection is established, go to **Configurations** tab and click **Sync Now** to ingest content.
  * By default, the connector ingests published knowledge articles, incidents, and catalog items.


!!!note
    Only the articles within their validity date are ingested. Any article that's expired (beyond its Valid To date) isn't ingested.

## Webhook Integration for Real-Time Sync

Search AI supports webhook-based real-time synchronization with ServiceNow using Business Rules and a shared Script Include. This ensures that any changes in ServiceNow (create, update, or delete operations) are immediately reflected in the Search AI index.

### Webhook Architecture

The ServiceNow webhook integration is implemented using:

1. Script Include: A reusable script that handles webhook POST requests to Search AI.
2. Business Rules: Separate rules configured per ServiceNow table to trigger webhooks on data changes.

### Benefits of Webhook Integration

* Real-time synchronization: Changes in ServiceNow are immediately reflected in Search AI.
* Reduced sync frequency: Eliminates the need for frequent full syncs.
* Lower system load: Only changed records are processed.
* Better user experience: Users always see the most current information.

### Configure Webhook Integration in ServiceNow

**Prerequisites**

* Admin access to your ServiceNow instance.
* Search AI connector successfully configured and connected.
* Webhook endpoint URL and authentication token from Search AI.

The integration requires two components in your ServiceNow instance:

**A. Shared Script Include (`SearchAIWebhookHandler`)**

Create a reusable Script Include in **System Definition > Script Includes**:

- **Name:** `SearchAIWebhookHandler`  
- **Function:** Accepts current record and operation type (insert, update, delete).  
- **Action:** Sends a POST request to the Search AI webhook endpoint with the auth token.  
- **Payload:** Builds a payload compatible with Search AI's ServiceNow ingestion schema.

Sample script

```
var <<CommonWebhookSender>> = Class.create();
<<CommonWebhookSender>>.prototype = {
  initialize: function () {},

  send: function (record, action) {
    try {
      var endpoint = 'https://<domain>/api/1.1/webhook/<streamId>/connector-Id';

      // 🔐 secret 
      var TOKEN = 'b59aebc4-xxx-xxx';

      var payload = {
        source: 'servicenow',
        object: record.getTableName(),
        action: action,
        sys_id: record.sys_id.toString(),
        number: record.number ? record.number.toString() : '',
        knowledge_base_name: record.kb_knowledge_base
          ? record.kb_knowledge_base.getDisplayValue()
          : ''
      };

      var r = new sn_ws.RESTMessageV2();
      r.setHttpMethod('POST');
      r.setEndpoint(endpoint);
      r.setRequestHeader('Content-Type', 'application/json');

      // ✅ Authentication header
      r.setRequestHeader('X-Webhook-Token', TOKEN);

      r.setRequestBody(JSON.stringify(payload));

      var response = r.execute();
      gs.info('Webhook sent. Status: ' + response.getStatusCode());

    } catch (e) {
      gs.error('Webhook error: ' + e.message);
    }
  },

  type: '<<CommonWebhookSender>>'
};
```

**B. Business Rules (Per Table)**

Create separate Business Rules in **System Definition > Business Rules** for each supported table:

- **Knowledge Articles (`kb_knowledge`):**  
  Triggers on insert, update, delete for published articles within the validity period.  

- **Incidents (`incident`):**  
  Triggers on insert, update, delete for all incidents.  

- **Catalog Items (`sc_cat_item`):**  
  Triggers on insert, update, delete for active catalog items.  

**Business Rule Configuration:**

- **When to run:** Advanced rule, executes *After* the database operation.  
- **Script:** Calls the `SearchAIWebhookHandler` Script Include with the current record and operation type.  

### How Webhook Sync Works

When Search AI receives a webhook POST from ServiceNow:

1. The payload is validated using the authentication token.  
2. Existing ServiceNow connector credentials are used to fetch the latest content version for the referenced entity.  
3. Ingestion updates are performed based on the operation:  
   - **Insert/Update:** Document is created or updated in the index.  
   - **Delete:** Corresponding content is removed from the index.  
4. The sync is logged in the webhook sync records.  


## Advanced Filters

Search AI enables users to set up advanced filters for content ingestion. Currently, filtering is supported exclusively for Knowledge Articles. You can selectively ingest content by using various properties of knowledge articles, such as status, type, number, knowledge base, and source.

**Configure Advanced Filters:**

1. Go to the **Manage Content** tab and select **Ingest filtered content**.
2. Select **Edit configuration** to open the **Ingestion Filters** page.
3. Use the Parameter, Operator, and Value fields to add a filter. The commonly used parameters are listed in the drop-down menu. You can also add other parameters. Refer to [this](https://developer.servicenow.com/dev.do#!/reference) for the complete list of parameters.

   ![Configuration](images/servicenow/config-tab.png "Configuration")

   For instance, to ingest articles with a given sys ID, use the filter as shown below:

   ![Example](images/servicenow/example1.png "Example")

Select **Test and Save** to enable the filter. The filter is applied on the next scheduled or manual sync.

**Filter Rules:**

* **Multiple Rules**: You can define one or more rules to create a filter. Content that satisfies any one of the rules is selected for ingestion (logical OR). 
  
  Example: Select articles where sys ID is any from a specified list:
  
  ![Example](images/servicenow/example2.png "Example")

* **Multiple Conditions**: Every rule can have one or more conditions linked with a logical AND. Content is selected only when all conditions in the rule are satisfied.
  
  Example: Select published articles with a given sys ID:
  
  ![Example](images/servicenow/example3.png "Example")

**Real-Time Sync via Webhooks:**

When Real-Time Sync is enabled and Search AI receives a webhook POST from ServiceNow, content updates are processed automatically:

* **Insert/Update**: For record creation or update events, the document is created or updated in the Search AI index.
* **Delete**: For record deletion events, the corresponding content is removed from the index.

## RACL Support

### Knowledge Articles

SearchAI offers access control for content ingested from ServiceNow Knowledge bases. Currently, **Search AI enforces access control at the knowledge base level.**

To learn the basics of RACL in SearchAI, refer to this. 

**Understanding User Permissions in ServiceNow**

In ServiceNow, user access to knowledge base articles can be defined in three ways:

1. Owners of the Knowledge base
2. Managers of the Knowledge base
3. User Criteria with specific access permissions (Can Read and Can Contribute)

![User criteria](images/servicenow/racl/user-criteria.png "User criteria")

User Criteria in ServiceNow is a method to group users based on specific conditions. Users can be added directly or included based on conditions such as department, role, etc.
![Individual Users](images/servicenow/racl/users-in-user-criteria.png "Individual Users")

**Handling User Permissions in SearchAI**

By default, SearchAI grants access to the following:

* **Owners** of the Knowledge base - This list of owners will be added directly in the racl field in the indexed content.
* **Managers** of the Knowledge base - This list of managers will be added directly in the racl field of the indexed content.
* **Individual users** listed under each **User Criteria** with Can Read and Can Contribute permissions.  

![Individual Users](images/servicenow/racl/individual-users.png "Individual Users")

Each User Criteria is retrieved as a Permission Entity. The permission entity ID is added and is visible in the racl fields of the indexed content. Only users directly listed in the criteria are retrieved as part of the Permission Entity by default. Users associated with other conditions (for example, department or role) aren't automatically included. Therefore, these users can't access articles unless they're explicitly added to the permission entity using the Permission Entity APIs. For instance, if the owner of a knowledge base is `John@example.com` and the knowledge base can be accessed by users who fulfil a given user criteria, the indexed content will look something like this. 

```json
"sourceAcl": [`

     "25431493ff4221009b20ffffffffffe0",
     "John@example.com"
],
```

The alphanumeric field “25431493ff4221009b20ffffffffffe0” in the indexed content refers to the Permission Entity corresponding to the user criteria for the article.

If there are any identities directly added as Users inside the user criteria, those users will be automatically added to the permission entity. To grant access to all others within the user criteria, those added through other conditions, use the [Permission Entity API](../../../apis/searchai/permission-entity-apis.md) to associate them with the permission entity.

### Incidents

For each incident in ServiceNow, **Search AI** enforces access control based on the following criteria:

**1. Role-Based Access**

* Users who are part of **Base System Roles** in ServiceNow, such as `itil` and `itil_admin`, and have access to incidents.
* For each role, a **permission entity** is created.
* Users can be associated with the corresponding permission entity using the **Permission Entity APIs**.

**2. ACL-Based Access**

* Users who have access to the **Incident Table (<code>incident</code> table)** through **Access Control List (ACL) configuration**.
* For each ACL rule, a **permission entity** is created to associate users with the rule.

**3. Assignment Group-Based Access**

* Users who are part of the **assignment group** for an incident can automatically access it.
* For each group, a **permission entity** is created using the **group ID**.

**4. Incident Field-Based Access**

* Users associated with the incident through specific incident fields, such as: Creator, Caller, Watch List Users.
* These users are added to the sys_racl field using their email ID.

**Summary - <code>sys_racl</code> Contents for an Incident Record**

To summarize, the **sys_racl** field for an incident record contains:


<table>
  <tr>
   <td><strong>Access category</strong>
   </td>
   <td><strong>Stored As</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Assigned User</strong>
   </td>
   <td>Email ID
   </td>
  </tr>
  <tr>
   <td><strong>Caller (Requestor)</strong>
   </td>
   <td>Email ID
   </td>
  </tr>
  <tr>
   <td><strong>Opened by User (Creator)</strong>
   </td>
   <td>Email ID
   </td>
  </tr>
  <tr>
   <td><strong>Closed by User</strong>
   </td>
   <td>Email ID
   </td>
  </tr>
  <tr>
   <td><strong>Resolved by User</strong>
   </td>
   <td>Email ID
   </td>
  </tr>
  <tr>
   <td><strong>Watch List Users</strong>
   </td>
   <td>Email IDs of all users in the watch list
   </td>
  </tr>
  <tr>
   <td><strong>Assignment Group</strong>
   </td>
   <td>Group ID (Permission Entity)
   </td>
  </tr>
  <tr>
   <td><strong>System or Custom Roles with Incident Access</strong>
   </td>
   <td>Role ID (Permission Entity)
   </td>
  </tr>
</table>

### Catalog Items

Catalog items in ServiceNow can be accessed based on the following configurations:

1. **Role-Based Access**
    * Roles assigned to a catalog item determine access. Users with the assigned role(s) will have access to the catalog item.
    * A **permission entity** is created using the **role ID** for each role associated with the catalog item.
2. **ACL based Access**
    * Users who have access to the **Catalog Items Table** through **Access Control List (ACL) configuration**.
    * For each ACL rule, a **permission entity** is created to associate users with the rule.
3. **User Criteria**
    * User criteria defined for a catalog item specify which users or groups can access it.
    * A **permission entity** is created using the **user criteria ID** to control access based on these criteria.

**Summary - <code>sys_racl</code> Field for a Catalog Item**

The **sys_racl** field for a catalog item includes the following:


<table>
  <tr>
   <td><strong>Access category</strong>
   </td>
   <td><strong>Stored As</strong>
   </td>
  </tr>
  <tr>
   <td><strong>System or Custom Roles with Catalog Items Access</strong>
   </td>
   <td>Role ID (Permission Entity)
   </td>
  </tr>
  <tr>
   <td><strong>User Criterion with Catalog Item Access</strong>
   </td>
   <td>UserCriteriaID (Permission Entity)
   </td>
  </tr>
</table>

## Limitations

**Webhook User Sync**: Search AI doesn't support user synchronization through webhooks. While document entities are updated in real-time via webhook, the associated users within those entities aren't updated. User permissions and access control updates must be synchronized through the regular incremental or manual sync process.
