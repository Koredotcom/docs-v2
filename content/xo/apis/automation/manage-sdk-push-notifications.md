--8<-- "includes/automationai-api-back-link.md"

# Manage SDK Push Notifications APIs

For managing the SDK push notifications, the platform provides the following APIs:

* [Device Subscription](../automation/manage-sdk-push-notifications.md#device-subscription-api) API
* [Subscribed User Devices](../automation/manage-sdk-push-notifications.md#subscribed-user-devices-api) API
* [Device Unsubscription](../automation/manage-sdk-push-notifications.md#device-unsubscription-api) API

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>To receive push notifications, each user’s device must be registered and subscribed via the mobile or WebSDK app.</p>
</div>

## Device Subscription API

This API manages SDK push message subscriptions for a user’s specified device. It performs two main functions:

* Subscribes the device to SDK push messages.
* Returns subscription status and device details.

<table>
  <tr>
   <td>
<strong>Method</strong>
   </td>
   <td>POST</td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{host}/API/public/streams/:{{streamId}}/sdknotifications/subscribe</code>
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: SDKPushNotifications

<li>Admin Console: Not Applicable
</li>
</ul>
   </td>
  </tr>
</table>

### Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>The environment URL. For example, https://platform.kore.ai
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>StreamId
   </td>
   <td>The <em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Request

```js
curl --location 
'https://{{host}}/api/public/stream/:{{streamId}}/sdknotifications/subscribe' \
     --header 'auth: {jwt-token}' \
     --header 'bot-language: {language-code}' \
     --header 'Content-Type: application/json' \
--data-raw '{
    "deviceId": "exxxxxf0-bxx3-4xx3-axx7-fexxxxxxxxxx2",
    "osType": "Android",
    "userId": "u-dxxxxxx1-7xx0-5xxb-axx2-84xxxxxxxxx2"
}'
```

### Body Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DATA TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>deviceId
   </td>
   <td>String
   </td>
   <td>The user’s device ID.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>osType
   </td>
   <td>String
   </td>
   <td>The OS type of the user’s device.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>userId
   </td>
   <td>String
   </td>
   <td>The user ID received from the JWT grant.
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Response

```js
{
    "success": true,
    "message": "Device Subscribed",
    "deviceDetails": {
        "deviceId": "exxxxxf0-bxx3-4xx3-axx7-fexxxxxxxxxx2",
        "osType": "Android",
        "status": "Subscribed"
    }
}
```

## Subscribed User Devices API

This API lists all the mobile devices subscribed to SDK push notifications and their OS types for the given user. It returns the following information:

* Device ID
* OS Type
* Subscription Status

<table>
  <tr>
   <td>
<strong>Method</strong>
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{host}/API/public/streams/:{{streamId}}/subscribeddevices</code>
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: SDKPushNotifications

<li>Admin Console: Not Applicable
</li>
</ul>
   </td>
  </tr>
</table>

### Query Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>The environment URL. For example, https://platform.kore.ai
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>StreamId
   </td>
   <td>The <em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>UserId
   </td>
   <td>The user Id received from the JWT grant.
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Request

```js
curl --location 
'https://{{host}}/api/public/streams/:{{streamId}}/subscribeddevices?uId=-f30xxx4e-6xx3-5xx8-8xx7-01xxxxxxxxx4u' \
     --header 'auth: {jwt-token}' \
     --header 'bot-language: {language-code}' \
     --header 'Content-Type: application/json' \
--data-raw '{
}'
```

### Body Parameters

No body parameters.

### Sample Response

```js
{
    "subscribedDevices": [
        {
            "deviceId": "exxxxxf0-bxx3-4xx3-axx7-fexxxxxxxxxx2",
            "osType": "Android",
            "status": "Subscribed"
        },
        {
            "deviceId": "exxxxxx0-bxx3-4xx3-axx7-fxxxxxxxxxxf",
            "osType": "ios",
            "status": "Subscribed"
        }
    ]
}
```

## Device Unsubscription API

This API unsubscribes SDK push messages for specific or all the devices of a user.

**Note**: The API processes unsubscriptions for one user at a time, not for multiple users simultaneously.

<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>DELETE
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{host}/API/public/streams/:{{streamId}}/sdknotifications/unsubscribe</code>
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: SDKPushNotifications

<li>Admin Console: Not Applicable
</li>
</ul>
   </td>
  </tr>
</table>

### Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>The environment URL. For example, https://platform.kore.ai
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>StreamId
   </td>
   <td>The <em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Unsubscribe Specific Devices

This API returns the device ID, OS type, and the subscription status (unsubscribed) for the selected devices.

### Sample Request

```js
curl --location 
'https://{{host}}/api/public/streams/:{{streamId}}/sdknotifications/unsubscribe' \
     --header 'auth: {jwt-token}' \
     --header 'bot-language: {language-code}' \
     --header 'Content-Type: application/json' \
--data-raw '{
  "devices": 
              [ 
    { "deviceId": "exxxxxx0-bxx3-4xx3-axx7-fxxxxxxxxxxf", "osType": "iOS" }, 
               { "deviceId": "exxxxxx1-bxx5-5xx3-axx2-bxxxxxxxxxxf", "osType": "Android" }
              ],
    		  "userId": "u-fxxxxxxe-6xx3-5xx8-8xx7-0xxxxxxxxxx4"
}'
```

### Body Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DATA TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>devices (if not using `unsubscribe: ‘all’` )
   </td>
   <td>Array of objects of <strong>String</strong> Data type.
   </td>
   <td>The developer must provide the <strong>device ID</strong> and <strong>osType</strong> of the devices to be unsubscribed.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>userId
   </td>
   <td>String
   </td>
   <td>The user ID received from the JWT grant.
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Response

```js
{
    "success": true,
    "message": "Requested devices are Unsubscribed",
    "unsubscribedDevices": [
        {
            "deviceId": "exxxxxx0-bxx3-4xx3-axx7-fxxxxxxxxxxf",
            "osType": "iOS",
            "status": "unsubscribed"
        },
        {
            "deviceId": "exxxxxx1-bxx5-5xx3-axx2-bxxxxxxxxxxf",
            "osType": "Android",
            "status": "unsubscribed"
        }
    ],
    "invalidDeviceIds": [
        {
            "deviceId": "Prod Iphone5rs"
        }
    ]
}
```

### Unsubscribe All the Devices

This API returns the success status and message when all the devices are unsubscribed.

### Sample Request

```js
curl --location 
'https://{{host}}/api/public/streams/:{{streamId}}/sdknotifications/unsubscribe' \
     --header 'auth: {jwt-token}' \
     --header 'bot-language: {language-code}' \
     --header 'Content-Type: application/json' \
--data-raw '{
    "unsubscribe": "all",
    "userId": "u-fxxxxxxe-6b83-56d8-8397-011c430550a4"
}'
```

### Body Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DATA TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>unsubscribe (if not using devices:[])
   </td>
   <td>String
   </td>
   <td>The value supported is “<strong>all</strong>.”
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>userId
   </td>
   <td>String
   </td>
   <td>The user ID received from the JWT grant.
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Response

```js
{
    "success": true,
    "message": "All Devices are unsubscribed"
}
