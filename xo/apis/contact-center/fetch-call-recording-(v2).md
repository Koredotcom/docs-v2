--8<-- "includes/ccai-api-back-link.md"

# Fetch Call Recording (Version 2)

This API facilitates the downloading of voice call recordings. The API provides an S3-hosted URL where the recording can be accessed.

!!! NOTE

    The earlier version of the [Call Recording API](../contact-center/fetch-call-recording.md) is expected to be deprecated in the future. We will ensure existing customers receive sufficient advance notice. However, we recommend that new customers utilize v2 moving forward.

| **Method**        | GET                                                                                                  |
|---------------|------------------------------------------------------------------------------------------------------|
| **Endpoint**      | `https://{{host}}/api/public/bot/{{botId}}/v2/recordings?sessionId={{sessionId}}`                                        |
| **Content Type**  | `application/json`                                                                                   |
| **Authorization** | `auth: {{JWT}}` <br>                                     See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope**     | SmartAssist Recordings                                                                               |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                           | **TYPE**          |
|-----------|-----------------------------------------------------------------------|---------------|
| `host`      | Environment URL, for example, `https://platform.kore.ai`            | string, required |
| `botId`     | botId or streamId. You can get it from the App Settings page. | string, required |

## Query Parameters

| **PARAMETER** | **DESCRIPTION**                                                                                      | **TYPE**            |
|-----------|--------------------------------------------------------------------------------------------------|-----------------|
| userId    | The ID of the user whose conversation history will be accessed. It can be a user email ID or an enterprise-assigned unique ID. You can access it from the conversation logs. | string, required |
| sessionId | The unique identifier for the session record. You can access it from the conversation logs.      | string, required |

## Sample Request

```
curl --location 'https://{{host}}/api/public/bot/{{botId}}/v2/recordings?sessionId={{sessionId}}' \
--header 'auth: {{JWT_TOKEN}}' \
--header 'Content-Type: application/json'
```

## Sample Response

```
{
   "status": "success",
   "recording": [
       {
           "fileName": "22d8ca62d5c430a03a8d06999289xxxx-merged.wav",
           "fileUrl": "https://smartassist.kore.ai/api/getMediaStream/smartassistrecording/UAT/o-ddda92ea-9174-5c0d-8938-4b5f13abxxxx/st-fd81a2b1-43af-544d-8082-831bc09cxxxx/2024/05-03-2024/f-4a76076d-56f1-5b99-999f-5c760568xxxx.wav?e=1709706278&n=6398115875&s=InpqMWpnVzRkajFlc1RZeGVzaDBHM2pwWFFibzVwcEloTkkrSW5UbTZ0ek09xxxx"
       }
   ]
}
```

## Recording Statuses

| **STATUS**            | **DESCRIPTION**                                                |
|-------------------|------------------------------------------------------------|
| success           | The URL is generated successfully.                         |
| media_unavailable | The recording is not available on the server.              |
| call_in_progress  | A call is currently ongoing.                               |
| media_in_progress | The phase after the call ends but before the media generation begins. |