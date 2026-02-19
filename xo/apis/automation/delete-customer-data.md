--8<-- "includes/automationai-api-back-link.md"

# Delete Customer Data API

This API is Used to delete customer data.

Delete User doesn't proceed if the requested user is:  

* An account owner or belongs to one or more accounts.  
* The bot owner or co-developer for one or more bots. 


<table>
  <tr>
   <td>
<strong>Method</strong>
   </td>
   <td>DELETE
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/eraseUsersData</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><code>auth: {{JWT}}</code>
<p>
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Not Applicable

<li>Admin Console: Profile Management > Delete Users Data
</li>
</ul>
   </td>
  </tr>
</table>


 


## Path Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
  </tr>
</table>


 


## Sample Request


```json
curl -X DELETE \
  'https://{{host}}/api/public/bot/eraseUsersData' \
  --header 'Content-Type: application/json' \
  --header 'auth: YOUR_JWT_ACCESS_TOKEN' \
  --data '{
  	userIds: ["u-xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxxxxx","u-xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxxxxx","u-xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxxxxx"],
	botIds: ["st-xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxxxxxx","st-xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxxxxxx","x-xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxxxxxx"]
        RemoveDataFromAllBots: true   // optional
       }'
```


 


## Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>userIds
   </td>
   <td>The array of user Ids whose details have to be deleted, for example, [`userId1`, `userId2`]. It can be user email id or enterprise assigned unique id. The following are acceptable values for this field:
<ul>

<li>Kore generated ‘user id’(email address) in case of enterprise users and ‘u-id’ for the rest.

<li>`Channel_user_id` which is the user identity that the channel has provided to the platform

<li>Both channel_id and `channel_user_id`  where `Channel_id` refers to the unique identified for each of the supported channels

</ul>
   </td>
  </tr>
  <tr>
   <td>botIds
   </td>
   <td>The array of AI Agent Ids from where the user details have to be deleted, for example, [“botId1”, “botId2”]
   <ul>
   <li>All the user details provided in the userIds parameter will be deleted from all the agents identified by botIds.
   <li>This parameter is effective only if RemoveDataFromAllBots parameter is set to false.
   </ul>
   </td>
  </tr>
  <tr>
   <td>RemoveDataFromAllBots
<br>
(optional)
   </td>
   <td>Determines if the specified users details have to be removed from all the Bots. Set to `true` or false.
   <ul>
   <li>This parameter is set to false by default.
   <li>If it is set to `true`, the user details provided in userIds parameter will be deleted from all the AI Agents in the organization and botIds parameter will be ignored.
   </ul>
   </td>
  </tr>
</table>

!!! Note

    The execution status of this API can be viewed by executing [Delete Customer Data Status API](delete-customer-data-status.md){:target="_blank"}.


## Sample Response


```json
{
  "requestId": "eud-123",
  "status"": "in-progress"
}
```