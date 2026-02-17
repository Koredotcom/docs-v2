# Front Connector

Front is a customer communication hub that streamlines conversations, enhances team collaboration, and provides a unified view of messages from various channels with the help of team inboxes and knowledge base capabilities. Using the Search AI connector for Front, you can ingest and index content from your Front knowledge bases and enable efficient search capabilities on the content.

<span style="text-decoration:underline;">Specifications</span>

<table>
  <tr>
   <td><b>Type of Repository</b>
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td><b>Content Supported</b>
   </td>
   <td>Knowledge Base Articles
   </td>
  </tr>
  <tr>
   <td><b>RACL Support</b>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><b>Content Filtering</b>
   </td>
   <td>No
   </td>
  </tr>
</table>

## Integration Steps

To enable integration between Search AI and Front and ingest content from your Front account, follow these steps:

1. **Generate an API Token for Front**
2. **Configure the Front Connector in Search AI**


## Generate an API Token

Search AI uses Front APIs to access the content. Hence, it requires an API token to establish communication. Follow these steps to generate the token:

1. Sign in to Front Account. Ensure that the account has admin access. 
2. Navigate to Settings and the Developer section. 
3. Go to the API token tab. Click **Create Token** and enter a name for the token. Select the scopes required to access knowledge base articles. Click **Create**.
4. Copy the generated API token. This token will be required for connector configuration in Search AI.


## Configure the Front Connector in Search AI

1. Navigate to the Connectors Page.
2. Click Add Connector and select Front from the list of available connectors.
3. Provide the following configuration details.
    1. **Name**: Unique name for the connector
    2. **API Token**: Token generated in the Front App
4. Click Connect to authenticate and establish the connection.

## Ingesting Content

After successfully connecting the Search AI connector to the Front account, go to the **Configuration** tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content in the future. 

Upon sync, Search AI ingests **Knowledge base articles** from all the associated Knowledge bases in the Front account. The content and metadata of the articles are ingested in JSON format in Search AI. Go to the **content** tab to view the ingested content. 


## RACL Support

RACL is implemented on the basis of type of visibility of the knowledge base in Front. 

**For Internal Knowledge Bases:**

Each internal knowledge base is uniquely identified by a `knowledge_base_id`, which is used as the value for the `sys_racl` field in all articles associated with that knowledge base.

Example: For an article belonging to a knowledge base with id = knb_deip, the `sys_racl` would be like:


```json
"sys_racl": [
     "knb_deip"
 ]
```

To provide access to users, use the [Permission Entity APIs](../../../apis/searchai/permission-entity-apis.md) and associate users with a knowledge base ID. 

**For External Knowledge Bases:**

When the knowledge base is set to external, the `sys_racl` field is automatically set to `*`, granting universal access.
