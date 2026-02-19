--8<-- "includes/digital-channels-back-link.md"

# RCS Business Messaging

**RCS Business Messaging** is the evolution of mobile messaging, increasing and improving the ways in which people and businesses communicate. It provides brands with the opportunity to increase their engagement with customers by making use of business messaging using assistants and artificial intelligence (AI). **Google RBM** allows companies to send visually rich messages that encourage customers to interact.

Below are the steps involved in setting up the channel on Kore.ai and launching the agent on RBM: (This channel support was introduced in ver7.1 of the platform)



1. Request access to enable Google RBM as channel.
2. Publish the assistant for the business to initiate the testing process.
3. Launch the agent when the bot agent testing is completed.
4. Initiate conversations with end-users when the agent is launched.


## Request Access

To request access to enable Google RCS Business messaging as a channel



1. From the XO Platform, open the assistant that you want to enable Google RCS Business Messaging.
2. Navigate to **Channels & Flows** > **Channels** > **Digital** > **All** > **RCS Business Messaging**.
3. Select the **Configurations** tab.
4. See **Request Access** to _Yes_
5. Click **Save** button.
6. You will receive an email from Kore.ai support team for details required to create a Bot Agent on Google RCS Business Messaging.
7. Fill the form and send it back to the id provided therein.


## Publish the Assistant

**Create an App and Publish the assistant for the business to initiate the testing process** A Bot Agent (on Google RCS) will be created by the Kore.ai support team based on inputs received from you. You will be notified of its creation. Follow the below steps to Publish the assistant:


1. **Create App, Enable Event and Publish the assistant** – This is required for the platform to receive a notification when a new user opts into talking to the bot via Google RCS.
    * **Create an App** on the Kore.ai XO Platform **App Settings** > **Dev Tools** > **API Scopes** > **New**  platform from **API Extensions** > **API Scopes** and enable the following scope: “_RCS Message Events_”.
    <img src="../images/rcs.png" alt="create rcs app" title="create rcs app" style="border: 1px solid gray; zoom:70%;">

    * From **Natural Language** > **Default Conversation** > **Event Handlers**, configure the following events:
        * RCS Opt-In: action to be taken once the user Opts-in for the RCS Messaging,
        * RCS Opt-Out: action to be taken when the user Opts-out of the RCS Messaging.
        <img src="../images/rcs1.png" alt="rcs messaging" title="rcs messaging" style="border: 1px solid gray; zoom:70%;">


    * **Publish** the channel.
2. Trigger opt-in and/or broadcast requests:
    * **Trigger opt-in**: Every time a new user opts in to use Google RCS, platform needs to be informed about this new user. To inform the platform, call the **msgevents API** with the below details: _Method_: `POST` _Request Headers_: `auth : &lt;JWT>` _Request Payload_:
    
        ```
        `{ \
            "event" : "opt-in", \
                "eventDetails":{ \
                "users" : ["&lt;Mobile number with country code>"] // Ex: +919030132231 \
        } \
        }`
        ```

    * **Broadcast Request**: To send alert or broadcast messages for an already opted-in user, you can call the **msgevents API** with the below details: _Method_: `POST` _Request Headers_: `auth : &lt;JWT>` _Request Payload_: \
        ```
        `{ \
        "event" : "broadcast", \
            "eventDetails":{ \
            "identity" : ["&lt;Mobile number with country code>"] // Ex: +919030132231 \
        "message": { \
            "contentMessage": { \
                "text": "" \
            } \
        } \
        } \
        }`
        ```
3. **Test Access**: From the **Channels & Flows** > **Channels** > **Digital** > **All** > **RCS Messaging** page, on the **Configurations** tab, you will be able to see:
    * WebHook URL: set to the URL captured in the request form in Step 1. 
    * Opt-in URL: configured to send the opt-in messages to the platform.
4. Publishing the channel will allow test numbers to talk to the assistant. The channel still needs to be launched for access by users as elaborated in the next section.
5. The **RCS Business Messaging OptOut** event will be invoked when the user sends the message as configured in the RCS Opt-Out event. The platform will notify the business that the user has Opted out of receiving messages through the webhook URL (The URL is captured in Step 1). Any request to send messages to the users that have opted-out will be rejected. After having opted out, if the user continues conversing with the bot agent (without explicitly opting in again) standard message will be triggered. The message can be managed from the Events section in the XO Platform.


## Events

The webhook URL provided by you at Step 1 will receive the following events so that the business can take appropriate action:


* When user opts out of receiving notifications: 
    ```
    `{"event":"USER_OPTED_OUT", 
    "userIdentity":"&lt;Mobile number with country code>"}`
    ```
* When a device that does not support RCS (OR) the bot agent is not launched receives an `opt-in` or `broadcast` request:
    ```
    `{"event":"RCS_NOT_SUPPORTED_IN_TARGET_DEVICE", 
    "userIdentity":"&lt;Mobile number with country code>", 

    "message":"This operation is blocked because the RBM agent has not launched and the recipient has not been invited and accepted the invitation to become a tester." 
    }`
    ```
* When user sends a message to the bot agent after opting out to receive messages: 
    ```
    `{"event":"OPTED_OUT_USER_ATTEMPTS_TO_MESSAGE", 
    "userIdentity":"&lt;Mobile number with country code>"}`
    ```
* When business tries to broadcast message to the user who opted out to receive messages: 
    ```
    `{"event":"BROADCAST_ATTEMPT_TO_OPTED_OUT_USER", \
    "userIdentity":"&lt;Mobile number with country code>"}`
    ```

**Important**

*  Publishing the channel will allow test numbers to talk to the assistant. The channel still needs to be launched for access by users.
* The RCS Business Messaging OptOut event will be invoked when the user sends the message "OPT-OUT" to the bot agent (see below for details).
* The platform will notify the business that the user has Opted out of receiving messages through the webhook URL. The URL is captured in Step 1.
* Any request to send messages to the users that have opted-out will be rejected.
* After having opted out, if the user continues conversing with the bot agent (without explicitly opting in again) standard message will be triggered. The message can be managed from the Events section in the XO Platform.


## Launch the Bot Agent

After having verified your bot agent, you can launch for end users by following the steps below:

1. On the XO Platform, from the **Channels & Flows** > **Channels** > **Digital** > **All** > open the **RCS Business Messaging** page.
2. Navigate to **Configurations** tab.
3. Set **Launch Bot** agent to _Yes_.
4. Click  **Save** button.
5. Kore.ai support team will contact you with a **questionnaire** which will be submitted to Google RCS Business Messaging team for approval on your behalf.
6. A **consent email** will be sent to the brand employee (as mentioned by you in the request form filled in step 1) by Kore.ai Support and the response will be forwarded to the Google RCS team.
7. Once Google RCS Business Messaging team reviews the Bot Agent and approves, you will receive a confirmation email from Kore.ai support team.
8. Your AI Agent’s users can now start using the RCS Messaging by opting for the same.

After enabling the channel and verifying all the configurations, you can optionally publish the assistant for the new channel. Learn more about [Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Kore.ai XO Platform, please see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)
