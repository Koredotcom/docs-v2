--8<-- "includes/ccai-api-back-link.md"

# Send Outbound SMS API

This API enables sending outbound SMS messages through the platform's generic SMS channel. The capability can be integrated into applications or services to facilitate SMS communication with customers.

## Prerequisites

* The SMS channel must be configured to send outbound SMS using this API. [Learn more](../../channels/add-sms-channel.md).
* The phone number must be attached to an experience flow. [Learn more](../../flows/create-flows.md#sms).

| **Method**      | POST                                                                                                                                       |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**    | `https://{{host}}/api/public/bot/{{BotId}}/outboundsms`                                                                                   |
| **Content-Type**| `application/json`                                                                                                                        |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope**   | Outbound SMS                                                                                                                              |

## Path Parameters

| Parameter | Description                                                                                      | Type            |
|-----------|--------------------------------------------------------------------------------------------------|-----------------|
| `host`      | Environment URL, for example, `https://platform.kore.ai`                                           | string, required|
| `BotId`     | `BotId` or `StreamId`. You can access it from the bot's App Settings page.                       | string, required|

## Sample Request

```
curl --location 'https://{{host}}/api/public/bot/st-26d52ba6-7a77-56b2-be4e-a8db1da7e440/outboundsms' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'auth: <token>' \
--data '{
    "fromNo": "+19876543210",
    "toNo": "+911234567890"
}'
```

## Body Parameters

| **Parameter** | **Description**                                                                                                                                     | **Type**            |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| fromNo    | The sender's phone number in E.164 format. For example, +19876543210. <br>**Note**: This number must be attached to an Experience Flow.           | string, required|
| toNo      | The recipient's phone number in E.164 format. For example, +911234567890                                                                       | string, required|

## Sample Response

```
{
    "message": "Triggered the configured Experience flow to deliver message via SMS channel"
}
```