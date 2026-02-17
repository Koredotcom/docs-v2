# Deflection Flow

This node transfers a conversation from the call to the chat channel, where the customer is provided a link to connect and interact via chat (either with an automated agent or with a human agent).

To configure this node, set up the following:

1. Enter a **Custom Name** by which to identify the node later.
2. Define the deflection flow that the callers will experience under the Deflection Setting. Select one of the following options:
    1. Trigger using user selection:
        1. **Chat Automation** to route the customer to a chat automation agent.
        2. **Live Chat Agent** to connect the customer to a human agent.
    2. Trigger using Automation Context  
        <img src="../images/deflection-flow.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:80%;">

    3. In the General Settings (Chat Automation and Live Chat Agent) and Error Handling sections, administrators can choose the message to be played to the customer. Select one of the following options from under **Choose your message type**:
        1. **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
            1. Create a new prompt message to be played out for the Text to Speech message type by clicking **+ Create New**. Enter a name for your message, type its contents, and select the language.
            2. Define multiple message types for the prompt message to be played to the customer by clicking **+ Add Another**. In this case, one message will be randomly selected and played during runtime.  
                <img src="../images/deflection-flow-text-to-speech.png" alt="Text-to-Speech" title="Text-to-Speech" style="border: 1px solid gray; zoom:80%;">

        2. **Audio File**: Type a new message to be played to the customer or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played.  
            <img src="../images/deflection-flow-audio-file.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:80%;">

        3. **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
            <img src="../images/deflection-flow-link.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:80%;">

    4. For **Go to Node**, select a node from the dropdown list. This node triggers once the call deflection occurs. For example, Automation.  
        <img src="../images/deflection-flow-go-to-node.png" alt="Go to Node" title="Go to Node" style="border: 1px solid gray; zoom:80%;">

!!! Note

    This feature is only available when using our Twilio account. It's not supported for SIP trunk setups.
