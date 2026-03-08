<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Field type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Usage</strong>
   </td>
  </tr>
  <tr>
   <td><strong>botId</strong>
   </td>
   <td>Mandatory
   </td>
   <td>Specifies the bot that should establish communication.
   </td>
   <td>Based on the provided bot details, the corresponding configurations, use cases, and settings are applied.
   </td>
  </tr>
  <tr>
   <td><strong>conversationId</strong>
   </td>
   <td>Mandatory
   </td>
   <td>Must be unique and is required to initialize the SDK.
   </td>
   <td>The SDK uses this identifier to persist and map agent conversations, fetch conversation logs, and generate dashboard analytics.
   </td>
  </tr>
  <tr>
   <td><strong>domainURL</strong>
   </td>
   <td>Mandatory
   </td>
   <td>Defines the environment where APIs and socket requests should be established.
   </td>
   <td>Enables communication between the bot and the application.
   </td>
  </tr>
  <tr>
   <td><strong>token</strong>
   </td>
   <td>Mandatory
   </td>
   <td>Validates whether the end user is authenticated.
   </td>
   <td>Essential for establishing communication, generated using the ClientId and Client Secret of the respective bot. <br> 
    <code>payload = {<br>
    sub: &lt;clientId>,<br>
    appId: &lt;clientId>,<br>
    iss: &lt;clientId>,<br>
    }</code>
   </td>
  </tr>
  <tr>
   <td><strong>channel</strong>
   </td>
   <td>Mandatory
   </td>
   <td>Indicates the channel through which the customer communicates with the agent.
   </td>
   <td>The selected channel determines specific configurations such as use cases, settings, and preferences (for example, Send and Copy, Transcript Tab, Analytics Usage).
   </td>
  </tr>
  <tr>
   <td><strong>interactiveLanguage</strong>
   </td>
   <td>Optional
   </td>
   <td>Determines the language in which the application is loaded.
   </td>
   <td>If no language is provided, English (en) is used by default.
   </td>
  </tr>
  <tr>
   <td><strong>sessionId</strong>
   </td>
   <td>Optional / Mandatory for voice
   </td>
   <td>Optional in general, but mandatory for voice if a customer-bot conversation summary is required.
   </td>
   <td>Enables the display of conversation history in the Transcript tab, showing what occurred before escalation to the agent.
   </td>
  </tr>
  <tr>
   <td><strong>isSecure</strong>
   </td>
   <td>Mandatory
   </td>
   <td>Specifies the type of token.
   </td>
   <td>The flag determines which authentication API to call. Based on that response, the SDK selects the appropriate service endpoint, initializes the socket connection, and routes all subsequent API requests through that endpoint. 
   </td>
  </tr>
  <tr>
   <td><strong>customData</strong>
   </td>
   <td>Optional
   </td>
   <td>Allows passing additional details.
   </td>
   <td>These details can be used in the bot context or other areas depending on requirements.
   </td>
  </tr>
</table>

