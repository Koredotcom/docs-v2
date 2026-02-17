# Enable Digital Channels

By default, your AI Agent isn't available to users unless you define one or more channels through which it can communicate. So, after creating an AI Agent, you can add delivery channels that end-users can use to access and interact with it when deployed. For example, you can enable your assistant for use in the Kore.ai Messaging application, or allow interaction with your AI Agent through an email address or a _Twilio_ SMS account. You can also enable your AI Agent in third-party applications such as _Facebook_ or _Slack_. This topic describes how to add one or more delivery channels to your AI Agent.

You can add channels to your AI Agent from the **Flows & Channels > Channels > Digital > All** section. Channels supported by the Platform are categorized based upon their functionality and usage.

<img src="../images/digital-channels.png" alt="digital-channels" title="digital-channels" style="border: 1px solid gray; zoom:70%;">

## Enable a Channel

To enable one or more channels for your AI Agent, follow the below steps:

1. Open the assistant for which you want to add the channels.
2. Go to **Flows & Channels** > **Channels** > **Digital** > **All**.
3. Click the channel you want to add. This opens the instructions page to install the channel.
4. Click **Next** or the **Configuration** tab to open the configuration page for the channel. 
<img src="../images/channel-enablement-img2-instructions.png" alt="Channel Configuration page" title="Channel Configuration page" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        After adding the channel, the app needs to be published for approval and the Admin needs to approve the app (with new channels). The new channel is not available to users until the Admin explicitly approves that channel for your assistant.

## Editing, Testing,  Disabling or Deleting Channels

To **edit a channel** configuration, go to **Flows & Channels** > **Channels** > **Digital** > **Configured** list, the channel, make your changes and save.

To **test**, **disable or delete the channel**, go to **Flows & Channels** > **Channels** > **Digital** > **Configured** list, hover over the channel and click more option in the top right corner. The Test, Disable, or Delete as required and follow the instructions.


!!! Warning

    Deletion is permanent and cannot be undone. You will be asked to confirm your choice, so make sure this is exactly what you want to do.

!!! note

    The channel edits will only take effect within your live assistant after publishing the In Development version of the AI Agent with the channel enabled. For more information, see Publishing your AI Agent.

<img src="../images/test-channel.png" alt="Delete/Disable channel" title="Delete/Disable channel" style="border: 1px solid gray; zoom:70%;">

## Available Channels

Below is a list of all channels you can connect to via the Kore.ai XO Platform:

Click the icon of the channel you want to add, and then configure the channel to work with your Kore.ai assistant. The page with Instructions and Configuration settings slides out.

### Enterprise Channels

|[Amazon Connect Chat](./add-amazon-connect-chat-channel.md)<br><br>[![](./images/logo-amazon.png)](./add-amazon-connect-chat-channel.md)| [Cisco Jabber](./add-cisco-jabber-channel.md) <br><br> [![](./images/logo1-jabber.png)](./add-cisco-jabber-channel.md) | [Cisco Webex Teams<br>(formerly  Cisco Spark)](./add-cisco-channel.md)  <br>[![](./images/logo2-cisco-webex-teams.png)](./add-cisco-channel.md) | [Google Assistant](./add-google-assistant-channel.md) <br><br> [![](./images/logo4-google-assistant.png)](./add-google-assistant-channel.md)| 
|:---:|:---:|:---:|:---:|
|[**Genesys Cloud  <br>CX Messaging**](./add-genesys-chat-channel.md)   <br> [![](./images/logo5-genesys-chat-new-logo.png)](./add-genesys-chat-channel.md)| [**Hangouts Chat**](./add-google-chat.md) <br> <br>[![](./images/logo7-google-chat.png)](./add-google-chat.md) | [**Kore.ai**](./add-kore-channel.md)  <br>  <br>[![](./images/logo8-kore-ai.png)](./add-kore-channel.md) | [**Live Person**](./add-live-person-channel.md) <br>  <br>[![](./images/logo9-live-person.png)](./add-live-person-channel.md)|
|[**Mattermost**](./add-mattermost-channel.md)  <br>   <br>[![](./images/logo10-mattermost.png)](./add-mattermost-channel.md)| [**Microsoft Teams & Copilot**](./add-microsoft-teams-channel.md)   <br>[![](./images/logo-copilot-teams.png)](./add-microsoft-teams-channel.md) | [**Naver Works**](./add-naver-works-channel.md) <br>   <br>[![](./images/logo12-naver.png)](./add-naver-works-channel.md) | [**Nice inContact**](./add-nice-incontact-channel.md)   <br>  <br>[![](./images/logo13-nice.png)](./add-nice-incontact-channel.md) |
|[**RCS Business Messaging**](./add-google-rcs-channel.md)<br>  <br>[![](./images/logo14-rcs.png)](./add-google-rcs-channel.md)| [**RingCentral Glip**](./add-ringcentral-glip-channel.md) <br> <br>[![](./images/logo15-glip.png)](./add-ringcentral-glip-channel.md) | [**RingCentral Engage**](./add-ringcentral-engage-channel.md)   <br><br>[![](./images/logo16-ring-central.png)](./add-ringcentral-engage-channel.md) | [**Sinch**](./add-sinch-channel.md)  <br> <br>[![](./images/sinch-logo.png)](./add-sinch-channel.md)| 
| [**Slack**](./add-slack-channel.md) <br>  <br>[![](./images/logo18-slack.png)](./add-slack-channel.md)| [**Unblu**](./add-unblu-channel.md)  <br>  <br>[![](./images/logo21-unblu.png)](./add-unblu-channel.md) | [**WhatsApp Business Messaging**](./add-whatsapp-business-channel.md)  <br><br>[![](./images/logo22-whatsapp-business.png)](./add-whatsapp-business-channel.md)|[**Workplace By Facebook**](./add-workplace-by-facebook-channel.md) <br> <br>[![](./images/logo23-wp-facebook.png)](./add-workplace-by-facebook-channel.md) | 
|[**Yammer**](./add-microsoft-yammer-channel.md) <br>  <br>[![](./images/logo24-yammer.png)](./add-microsoft-yammer-channel.md)| [**Zoom Contact Center**](./add-zoom-contact-center-channel.md) <br> <br>[![](./images/logo25-zoom.png)](./add-zoom-contact-center-channel.md)|

### Social Channels

|[Facebook<br>Messenger](./add-facebook-messenger-channel.md)     <br> [![](./images/logo26-fb-messenger.png)](./add-facebook-messenger-channel.md)|[Instagram](./add-instagram-channel.md)   <br>  <br> [![](./images/insta-logo.png)](./add-instagram-channel.md)|[Line](./add-line-messenger-channel.md) <br>  <br>   [![](./images/logo27-line.png)](./add-line-messenger-channel.md)|[Twitter](./add-twitter-channel.md)<br><br>[![](./images/logo30-twitter.png)](./add-twitter-channel.md)|
|:----:|:----:|:----:|:----:|
|[**Telegram**](./add-telegram-channel.md)   <br>  <br> [![](./images/logo29-telegram.png)](./add-telegram-channel.md) |[**WeChat**](./add-wechat-channel.md)   <br> <br>  [![](./images/logo31-we-chat.png)](./add-wechat-channel.md)| 

### Other Channels

|[Email](./add-email-channel.md)<br>[![](./images/logo37-email.png)](./add-email-channel.md)|[SMS](./add-sms-channel.md)<br>[![](./images/sms-channel-logo.png)](./add-sms-channel.md)| [Sunshine Conversations](./add-sunshine-conversations-channel.md)   <br><br>[![](./images/logo19-sunshine-conversations.png)](./add-sunshine-conversations-channel.md) | [Syniverse](./add-syniverse-channel.md)  <br>  <br>[![](./images/logo20-syniverse.png)](./add-syniverse-channel.md)|
|:---:|:---:|:---:|:---:|
|[**Twilio SMS**](./add-twilio-sms-channel.md)<br> [![](./images/logo35-twilio.png)](./add-twilio-sms-channel.md)|[**Web/MobileClient**](./add-web-mobile-client.md)<br> [![](./images/logo39-webmobile.png)](./add-web-mobile-client.md)|[**Webhook**](./add-webhook-channel.md)<br> [![](./images/logo40-webhook.png)](./add-webhook-channel.md)|[**Widget SDK**](./add-widget-sdk-channel.md)<br> [![](./images/logo39-webmobile.png)](./add-widget-sdk-channel.md)|





