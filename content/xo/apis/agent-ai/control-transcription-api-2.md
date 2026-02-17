--8<-- "includes/agentai-api-back-link.md"

# Control Transcription API v2

This API controls transcription and call recording sessions for Agent AI SIP-REC calls on third-party agent desktops during user-agent interactions. It lets you start, pause, resume, end/stop transcription and call recordings for a specific conversation by sending the appropriate action.

| Method        | POST |
|-------------------|-----------|
| Endpoint      | `https://{{host}}/api/1.1/public/bot/{botid}/control/transcriptionv2?conversationId={conversationId}` |
| Content Type  | `application/json` |
| Authorization | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token){:target="_blank"} |
| API Scope     | Agent AI Transcription and Call Recording<br>See [Associate API Scopes](../automation/api-introduction.md#associating-api-scopes) |

## Path Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>botId
   </td>
   <td>Required
   </td>
   <td>Unique identifier of the bot controlling the transcription and call recording.
   </td>
  </tr>
</table>

## Query Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>conversationId
   </td>
   <td>Required
   </td>
   <td>Unique identifier of the conversation for which transcription and call recording is controlled.
   </td>
  </tr>
</table>

## Sample Request

```
curl --location 'https://staging-xo.korebots.com/api/1.1/public/bot/st-0510047e-9e82-5574-9523-bb02a0dxxxxx/control/transcriptionv2?conversationId=CAa8c6351c14ab45f09aaa04cde25xxxxx' 
--header 'auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLWM5OGVlOTk2LTNhZGQtNTM2ZS04ODZhLTM2ZDEyODY0MTRjOCJ9.klXB766H8VXnXRKDFSpQJqfNN0mV254AKnABg4xxxxx' 
--header 'Content-Type: application/json' 
--data '{
    "transcription_action" : "resume",
    "recording_action" : "stop"
}'
```

## Body Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>transcription_action
   </td>
   <td>Optional
   </td>
   <td>The control actions to perform on transcription. <strong>Available actions</strong>:
<p>
start – Start the transcription session.
<p>
pause– Pause the transcription session.
<p>
resume – Resume the transcription session after a pause.
<p>
end – Terminate the transcription session.
   </td>
  </tr>
  <tr>
   <td>recording_action
   </td>
   <td>Optional
   </td>
   <td>The control actions to perform on call recording.
<p>
<strong>Available actions</strong>:
<p>
start – Start the recording session.
<p>
pause– Pause the recording session.
<p>
resume – Resume the recording session after a pause.
<p>
stop – Terminate the recording session.
   </td>
  </tr>
</table>

!!! note

    The **Record the calls** button is configured at the **Agent AI** > **Flows & Channels** > **Voice Gateway** > **SIP Numbers** settings level. However, even if it is disabled there, this API can independently start and control the recordings.

## Sample Response

```
{
    "status": "success"
}
```