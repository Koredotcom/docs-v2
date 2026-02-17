# Third Party Voice Channels

By default, your AI Agent is not available to users unless you define one or more channels through which it can communicate. You can add voice delivery channels that end-users can use to access and interact with it when deployed.
You can also enable your AI Agent in third-party voice channels such as Amazon Alexa, Twilio Voice, IVR-AudioCodes, and IVR. 

You can add third-party voice channels to your AI Agent from the **Channels & Flows** > **Channels** > **Third Party Voice** > **All** section.

<img src="../images/third-party-voice.png" alt="Third Party Voice Channels" title="Third Party Voice Channels" style="border: 1px solid gray; zoom:70%;">

## Enable a Channel

To enable one or more channels for your AI Agent, follow the below steps:

1. Open the AI Agent for which you want to add the channels.
2. Go to **Channels & Flows** > **Channels** > **Third Party Voice** > **All**.
3. Click the channel you want to add. This opens the instructions page to install the channel.
4. Click **Next** or the **Configuration** tab to open the configuration page for the channel. The following image shows the configuration page of the Amazon Alexa channel.  
<img src="../images/alexa-instruction.png" alt="alexa-instruction" title="alexa-instruction" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        After adding the channel, the AI Agent needs to be published for approval and the App Admin needs to approve the AI Agent (with new channels). The new channel is not available to users until the Admin explicitly approves that channel for your AI Agent.

5. The configured channel is displayed on the Configured tab of the Third Party Voice page and same channel is removed from the All tab.

## Testing,  Disabling or Deleting Channels


To **test**, **disable or delete the channel**, go to **Channels & Flows** > **Channels** > **Third Party Voice** > **Configured** list, hover over the channel and click more option in the top right corner. Click Test, Disable, or Delete as required and follow the instructions.


!!! Warning

    Deletion is permanent and cannot be undone. You will be asked to confirm your choice, so make sure this is exactly what you want to do.

!!! note

    Please also note that channel edits will only take effect within your live AI Agent after publishing the In Development version of the AI Agent with the channel enabled. For more information, please see Publishing your AI Agent.

<img src="../images/tpv-delete-disable-channel.png" alt="Delete/Disable channel" title="Delete/Disable channel" style="border: 1px solid gray; zoom:70%;">

## Available Channels

Below is a list of all channels you can connect to via the Platform:

Click the icon of the channel you want to add, and then configure the channel to work with your AI Agent. The page with Instructions and Configuration settings will slide out.






| [Amazon Alexa](amazon-alexa.md)<br>  <br>[![](images/logo32-alexa.png)](amazon-alexa.md) | [IVR–AudioCodes](ivr-audio-codes.md) <br> <br>[![](images/logo33-audiocodes.png)](ivr-audio-codes.md) | [IVR](IVR-integration.md) <br>  <br>[![](images/logo34-ivr.png)](IVR-integration.md) | [Twilio Voice](add-twilio-voice-channel.md) <br>   <br>[![](images/logo35-twilio.png)](add-twilio-voice-channel.md) |  
|:---:|:---:|:---:|:---:|
  




