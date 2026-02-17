--8<-- "includes/digital-channels-back-link.md"

# Adding the Sunshine Conversations Channel

AI Agents built on the Kore.ai Platform can be deployed on the **Sunshine Conversations** platform. This channel integration supports conversations with AI Agents and provides a seamless hand-off to agents on **Zendesk**.


## Authorizing the Kore.ai Integration to Sunshine Conversations

To enable the integration, you need to provide authorization using your Zendesk credentials. Follow the steps below to complete the **OAuth-based authorization**:

1. Log into the Kore.ai XO Platform.
2. Navigate to **Channels & Flows** > **Channels** > **Digital** > **All** > **Sunshine Conversations** Channel.
3. Click the **Authorize** button under **Configurations** on the **Sunshine Conversations** panel.
    <img src="../images/Sunshine-1.png" alt="Sunshine Channel" title="Sunshine Channel" style="border: 1px solid gray; zoom:70%;">

4. On the **Zendesk subdomain** page, provide the subdomain and click **Sign in**.
5. On the Zendesk sign-in page, provide your login credentials and click **Sign in**.
6. After you have signed in successfully, a pop-up window will appear asking you to allow Kore.ai to access your Zendesk account. Click on **Allow**.
7. Once the integration is created successfully, you’ll be redirected to the Kore.ai XO Platform to complete the channel enablement process.


## Switchboard Integration for Agent Handoff

The Kore.ai XO Platform lets you hand off the conversation to your Zendesk agents via **Zendesk Switchboard** using the **Agent Transfer** node.

The **Switchboard Integration API** is used to route the user’s conversations from Zendesk to the XO platform. This API has a pass control system to decide whether the conversation is to be routed to an AI Agent or a live agent.

The **Pass Control** action is triggered as a part of the event where the conversation is switched to the App or the agent helpdesk, and also during conversation closure. 

Developers can define custom metadata to be sent with the existing metadata from the XO Platform to Zendesk. The additional metadata can also be used to create a Zendesk ticket.

**Capturing the Session Closure Metadata**

The Zendesk Sunshine Configuration flow lets you enable the **Session Closure Metadata** field to let Kore.ai capture the metadata and share it with Zendesk as part of the pass control event triggered when the conversation is transferred to the agent’s helpdesk, or when closing a conversation session. The metadata is captured using the **key-value** pair you provide during the configuration. 

However, providing the key and value inputs when you enable **Session Closure Metadata** is **optional**. 

For example: When you provide `SessionKey` as **key** and `apikeyvalue` as **value**, Kore.ai generates the field variable `SessionKey.apikeyvalue` to fetch the _session API key_ and pass it to Zendesk as metadata.

**Important Information on Session Closure Metadata**



* The Platform does not trigger the session closure message when the Agent transfer is initiated, and the conversation is not handed over back to the platform again.
* When the Conversation is handed over to the Platform after the agent transfer, the session closure functionality works as usual.
* For all the new Apps or existing apps that do not have at least one **SessionClosure** metadata tag, the **SessionClosure** switch is turned off by default.
* For all the existing apps that have at least one **SessionClosure** metadata tag, the switch is turned on by default.
*  The Platform introduces the [KoreUtil.getSunshineConversationsMetadata](../apis/automation/koreutil-libraries.md#koreutilgetsunshineconversationsmetadata) function to let a App developer fetch the stored metadata (Get API operation), and use it for the following:
    * Entities where JavaScript is supported like advanced messages for a prompt, script nodes, etc.
    * Simple messages like plain text prompts.
* Any additional changes or updates to the channel configurations should go through the [App Publish](../deploy/publishing-bot.md) cycle.

**Selecting the Default and Next Integrations for Transferring Control**

When you have a pre-existing switchboard integration, the XO Platform allows you to configure it as the default for the initial pass control during conversation initiation. Alternatively, you can select the Kore switchboard integration to designate the pass control.

You can review and edit these Switchboard integrations for newly created or pre-existing channel configurations in the **Switchboard Configuration** window. The Switchboard Configuration includes the **Default Switchboard Integration** for initiating conversations and the **Next Switchboard Integration** to transfer control after conversation session closure and the completion of agent conversations.


### Steps to Set up Agent Handoff



1. Enable the **Enable Agent Handoff** option under **Configurations** in the **Sunshine Conversations** panel.
2. From the[ Zendesk Admin Center,](https://support.zendesk.com/hc/en-us/articles/4581766374554#topic_hfg_dyz_1hb) navigate to **Apps & Integrations** and click the **Conversations API** menu option to get your **API Key** and **API Secret**. Please get in touch with your Zendesk sales representative if you don’t see this menu.
3. Paste these values in their respective fields on the Kore.ai platform under **Sunshine Conversations** > **Configurations** > **OAuth** > **Enable Agent Handoff** section. 
    ![alt_text](images/sunshine-(1).png "image_tooltip")

4. Click **Configure** for Switchboard Integration to set up the integrations available in your Sunshine Conversations account app. 
    ![alt_text](images/sunshine-(5).png "image_tooltip")

5. Select the required option for the following integrations in the **Switchboard Configuration** window:
    1. **Default Switchboard Integration**: Select the primary contact point for users in your Sunshine Conversations application.
    2. **Next Switchboard Integration to Kore.ai**: Select the next switchboard integration to which the control of an AI Agent conversation is passed from Kore.ai.
    3. **Next Switchboard Integration to Agent**: Select the next switchboard integration to which control is transferred after an agent conversation with a user. 

        ![alt_text](images/sunshine-(3).png "image_tooltip")
The options listed include the default mapped integrations and others available in your Sunshine Developer account.

6. After selecting the above fields, click **Done**.

7. On the **Zendesk Sunshine Configurations** window, follow either step below to set **Session Closure Metadata**:
    * Disable the toggle switch if you don’t want the Platform to pass the session metadata to Zendesk. 
        ![alt_text](images/sunshine-(4).png "image_tooltip")
    * Enable **SessionClosure Metadata**, and do one of the following:
        * Provide at least one **Key** and **Value** input (optional) to allow Kore.ai to capture the session metadata using the switchboard integration API and share it with Zendesk. Adding these parameters and saving the configuration will create a Zendesk ticket with the conversation details and close it.
        ![alt_text](images/sunshine-(2).png "image_tooltip")
        * Skip the **Key-Value** input and move to the next step. Not adding these parameters will create a Zendesk ticket with the conversation details but not close it.

8. Select **_Yes_** for **Enable Channel**.
    ![alt_text](images/sunshine-(6).png )
9. Click **Save**.

## Templates Support

Sunshine Conversations templates are pre-defined structures you can use to send rich messages to users for consistent and engaging interactions on the XO Platform. Templates help create a set of “canned messages” or “agent saved replies,” which is especially useful for messages that are difficult to craft on the fly because they require external resources.

To trigger various message templates, you must use a specific JavaScript format in the **Bot Responses** section of the **Message Node** in a Dialog Task. Below are the supported templates along with their sample code formats:

* **Compound Message**: Combines multiple elements like text, images, buttons, and quick replies to create an engaging and informative message. [See example](https://docs.smooch.io/guide/template-messages/#compound-message){:target="_blank"}. 

    ```js
    var message = {
        "content":{
            type: 'image',
            text: 'I strongly recommend our Family Basket. It's made just for people like you.'
            "actions": [
                {
                    type: 'postback',
                    text: 'Subscribe',
                    payload: 'NOOP'
                },
                {
                    type: 'postback',
                    text: 'Learn more',
                    payload: 'NOOP'
                }
            ],
            mediaUrl: 'https://media.smooch.io/templates/template-family-basket.jpg'
        }
    }   
    print(JSON.stringify(message))
    
    ```

* **Carousel Message**: Allows you to send a series of cards that users can swipe through. Each card can contain an image, title, subtitle, and buttons for further actions. [See example](https://docs.smooch.io/guide/template-messages/#carousel-message){:target="_blank"}. 

    ```js
    var message = {
    "content": {
    "type": "carousel",
    "items": [
    {
    "title": "Tacos",
    "description": "Description",
    "mediaUrl": "https://som.iitkgp.ac.in/images/71stFoundationDay.jpg",
    "actions": [
    {
    "text": "Select",
    "type": "postback",
    "payload": "TACOS"
    },
    {
    "text": "More info",
    "type": "link",
    "uri": "https://som.iitkgp.ac.in/images/71stFoundationDay.jpg"
    }
    ]
    },
    {
    "title": "Ramen",
    "description": "Description",
    "mediaUrl": "https://som.iitkgp.ac.in/images/71stFoundationDay.jpg",
    "actions": [
    {
    "text": "TemplateVisible",
    "type": "postback",
    "payload": "RAMEN"
    },
    {
    "text": "More info",
    "type": "link",
    "uri": "https://som.iitkgp.ac.in/images/71stFoundationDay.jpg"
    }
    ]
    }
    ]
    }
    };
    print(JSON.stringify(message));
    ```

* **File Message**: Allows you to send a file to the user. This can be useful for sharing documents, PDFs, images, or other types of files. [See example](https://docs.smooch.io/guide/template-messages/#file-message){:target="_blank"}. 

    ```js
    var message = 
    {
        "content":{
            type: 'file',
            role: 'appMaker',
            mediaUrl: 'https://media.smooch.io/templates/template-warranty.pdf'
    }
    }
    print(JSON.stringify(message))
    ```

* **Form Message**: Allows you to collect information from users through a structured form. This can include text fields, dropdown menus, radio buttons, and more. [See example](https://docs.smooch.io/guide/template-messages/#form-message){:target="_blank"}. 

    ```js
    var message = 
    {
        "content":{
            type: 'file',
            role: 'appMaker',
            mediaUrl: 'https://media.smooch.io/templates/template-warranty.pdf'
        }
    }
    print(JSON.stringify(message))
    ```

* **Quick Reply**: Provides users with predefined response options that they can select with a single tap. This can streamline interactions and guide users towards specific actions. [See example](https://docs.smooch.io/guide/template-messages/#quick-reply){:target="_blank"}. 

    ```js
    var message = 
    {
    "content": {
        type: 'text',
        text: 'Which language do you prefer?',
        actions: [
            {
                type: 'reply',
                text: 'English',
                iconUrl: 'https://example.com/english.png',
                payload: 'Hollywood'
            },
            {
                type: 'reply',
                text: 'Hindi',
                iconUrl: 'https://example.com/hindi.png',
                payload: 'Bollywood'
            }
        ]
    }
    }
    print(JSON.stringify(message))
    ```

* **Location Request**: Allows you to request the user’s location. This can be useful for services that require location information, such as finding the nearest store or providing location-based services. [See example](https://docs.smooch.io/guide/template-messages/#location-request){:target="_blank"}. 

    ```js
    var message = 
    {
        "content":{
            type: 'text',
            role: 'appMaker',
            text: 'Let us know where you are.',
            actions: [
                {
                    type: 'locationRequest',
                    text: 'Send location'
                }
            ]
        }
    }
    print(JSON.stringify(message))

    ```

### Create a Template

To learn how to create a template, click [here](https://docs.smooch.io/guide/template-messages/#creating-a-template){:target="_blank"}.


### Send a Template

Once you create a template, you can send it to a user. [Learn more](https://docs.smooch.io/guide/template-messages/#sending-a-template-message){:target="_blank"}.

    


		
