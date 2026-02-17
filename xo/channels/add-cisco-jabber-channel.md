--8<-- "includes/digital-channels-back-link.md"

# Adding the Cisco Jabber Channel

Cisco Jabber is a platform that offers multiple communication methods, and which you can integrate with the assistants built with the Kore.ai XO Platform. Adding the Jabber channel to your Kore.ai assistant allows end-users to interact with it using their _Jabber_ accounts. This article shows you how to add it as a Channel, where your AI Agent can communicate to end-users via Jabber. You must have or register for a developer account in the _Jabber_ portal.


## Configuration

To add the Cisco Jabber channel, follow the below steps:



1. Select the assistant that you want to add the Jabber channel to.
2. Go to **Channels & Flows** > **Channels** > **Digital** > **All**.
3. Click the **Jabber** icon. The **Jabber Channel page** is displayed.
4. To enable a webhook integration on your Jabber application, log into your Jabber app. Copy the **Webhook URL** from the **Configurations** tab on the Jabber channel page and enter the **Webhook URL** field in the Jabber app for integration.
5. Go to the **Configurations** tab on the Jabber channel page to complete the channel setup.
6. Capture the **POST URL** details from your Jabber app and enter them in the **POST URL** field.
7. You can also optionally generate and capture the **Access Token** details from your Jabber integration and enter in the **Access Token field** to enable secure communication between Jabber and the AI Agent.
8. Select **Yes** and click **Save** to enable Jabber Channel.
<img src="../images/add-jabber.png" alt="add jabber" title="add jabber" style="border: 1px solid gray; zoom:70%;">


After enabling the channel and verifying all the configurations, you can optionally publish the assistant for the new channel. Learn more about[ Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Kore.ai XO Platform, please see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)



Following are code snippets of the payload formats for verifying the integration.



## Payload for Post URL

Below is the response message from the app that must be accepted by the POST URL that is registered in the **Configurations** tab.


```
  {
                "message": {
                "text" : "Hi"
                }
                "to" : "<recipient-id/group-id>",
                "from" : "<sender-id>"
             }
```



## Webhook Payload

Below is the Webhook payload format to post messages to the XO Platform from Jabber.

```
{
  {
    "message": {
        "text" : "<Message>",
        "attachments" : [<array of attachment links (optional)>]
    },
    "from" : {
        "id": "<unique-id-of-sender(mandatory)>",
        "userInfo" : {
          "firstName" : "<first-name(optional)>",
          "lastName" : "<second-name(optional)>",
          "email" : "<email(optional)>"
        }
    },
    "to" : {
        "id": <unique-id-of-recipient(mandatory)>,
        "groupInfo" : { //If message comes from a group/team/room conversations.
            "id" : "<unique-id-of-group>",
            "name": "<group-name(optional)>"
        }
    }
}
```
