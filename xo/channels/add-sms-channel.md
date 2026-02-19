--8<-- "includes/digital-channels-back-link.md"

# SMS Channel

## Overview

The SMS Channel enables customer communication via text messages. It supports inbound, outbound, or bidirectional messaging on the digital platform. You can select from different providers on the SMS channel, and based on the selected provider, you would require different setup configurations.

SMS channel capabilities:

* **Outbound SMS**: It enables one-way communication, allowing you to send notifications or messages to users without expecting replies. It uses numbers specifically configured for outbound messaging and is ideal for simple text communications, such as alerts or reminders.
* **Inbound and Outbound SMS**: It facilitates two-way communication, enabling you to send notifications or messages and receive responses from users. This method links to an [Experience Flow](../flows/create-flows.md#sms), allowing for more interactive engagement. It's suitable for simple text messages that require user input or ongoing conversations, such as customer support inquiries or appointment confirmations.

To run SMS campaigns, you must configure the SMS Channel. Currently, the channel is compatible only with Twilio.

## Configure SMS Channel

Steps for SMS Channel Configuration:

1. The SMS channel can be configured by going to **Automation AI** > **Flows & Channels** > **Channels** > **Digital** > **All** > **Others** > **SMS Channel**.  
<img src="../images/sms-channel-page.png" alt="SMS Channel Page" title="SMS Channel Page" style="border: 1px solid gray; zoom:80%;"/>  

    You can also configure the SMS channel by going to **Contact Center AI** > **Campaigns** > **Campaign Management** > **SMS** > **Configure SMS Channel**.  
    <img src="../images/configure-sms-channel-button.png" alt="Configure SMS Channel Button" title="Configure SMS Channel Button" style="border: 1px solid gray; zoom:80%;"/>

2. Clicking the **Configure SMS Channel** button redirects the user to the Digital channel page. Click **SMS**.  
<img src="../images/sms-icon.png" alt="SMS Icon" title="SMS Icon" style="border: 1px solid gray; zoom:80%;"/>  

    The following page appears to select a provider name from the dropdown list.  
    <img src="../images/sms-window.png" alt="Instructions Tab" title="Instructions Tab" style="border: 1px solid gray; zoom:60%;">  

3. The Instructions tab provides instructions to configure the selected SMS service provider. Select a **Provider Name** from the dropdown list.  
<img src="../images/twilio-instructions.png" alt="Twilio Instructions" title="Twilio Instructions" style="border: 1px solid gray; zoom:60%;">  

    To set up a Twilio Voice Channel, see [Adding the Twilio Voice Channel](./add-twilio-sms-channel.md).

4. Once all the Instructions are completed, click **Next** to move to the **Configurations** tab. You can also click the **Configurations** tab.  
<img src="../images/next-button.png" alt="Next/Configurations" title="Next/Configurations" style="border: 1px solid gray; zoom:60%;">

5. On the configurations tab, select the **Provider Name** from the dropdown. The following page appears.  
<img src="../images/configurations-tab.png" alt="Configurations Tab" title="Configurations Tab" style="border: 1px solid gray; zoom:60%;">

    1. Enter the **Account SID** extracted from the Twilio account.
    2. Enter the **Auth Token** extracted from the Twilio account.
    3. Enter the **Messaging Service SID** extracted from the Twilio account. You can attach multiple numbers that are specific to the messaging service.
    4. Enter the **Webhook URL**.
    5. Enter the **Status Callback URL**.
    6. Enter the **Phone Numbers** for sending or receiving messages.
    7. Specify the **Select Direction** from the dropdown list.
        1. Select **Outbound** to send an SMS (no replies are allowed).
        2. Select **Inbound & Outbound** to send and receive text messages.

            !!! Note

                * You should add at least one phone number to save the configurations. There should not be any duplicate numbers. The configuration would differ based on the selection.
                * You cannot delete a phone number that is linked to one or more active campaigns and flows. To delete a phone number, first unlink it from the flows and ensure the campaign is no longer active.

6. Click **Save**. The SMS channel is configured.  
<img src="../images/sms-channel-configured.png" alt="SMS Channel Configured" title="SMS Channel Configured" style="border: 1px solid gray; zoom:80%;"/>

## Disable or Delete Configured SMS Channel

### Disable the Configured SMS Channel

Steps to disable the SMS Channel:

1. Click the Ellipsis (**⋮**) and then click **Disable**.  
    <img src="../images/ellipsis.png" alt="Disable SMS Channel" title="Disable SMS Channel" style="border: 1px solid gray; zoom:70%;">

2. A notification is displayed, and the SMS channel is disabled on confirmation.

    !!! Note

        The SMS channel cannot be disabled if there are active SMS campaigns or flows attached to the channel.

### Delete the Configured SMS Channel

Steps to delete the configured SMS Channel:

1. Click the Ellipsis (**⋮**) and then click **Delete**.  
    <img src="../images/ellipsis.png" alt="Disable SMS Channel" title="Disable SMS Channel" style="border: 1px solid gray; zoom:70%;">

2. A notification is displayed, and the SMS channel is deleted on confirmation.

    !!!Note

        The SMS channel cannot be deleted if there are active SMS campaigns or flows attached to the channel.
