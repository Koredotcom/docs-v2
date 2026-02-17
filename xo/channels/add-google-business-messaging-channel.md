--8<-- "includes/digital-channels-back-link.md"

# Adding the Google Business Messaging Channel

!!! Warning

    Google announced the discontinuation of the Google Business Messages channel from July 31st. This channel will be phased out in the coming weeks. If you have alternative chat channels, consider inviting your customers to continue conversations there. For more details, please refer to the [Google announcement](https://developers.google.com/business-communications/business-messages/resources/release-notes/update-on-gbm?hl=en).

Modern business applications require agent integrations on web/mobile devices to enable seamless customer communication via SMS/chats.

The **Kore.ai XO Platform** now helps a _Google Business Messaging Partner_ to create rich and asynchronous messaging experiences within apps and during calls through the GBM channel enablement. This feature helps seamlessly integrate real-time business agents to AI Agents.

**Google Business Messaging (GBM)** is a mobile conversational channel that combines digital customer touchpoints or entry points on Google Maps, Search, and brand websites.


## How does it work?

When Google Business Messaging is configured as a Channel on the XO Platform, the conversations between the customers and brands is enabled by creating agents. You can manage agents with either your own account or a GBM Partner Account. The process to create an agent differs in each scenario.
    
*  If you have a **GBM Partner Account**, the XO Platform registers each Business as a partner. You can enable conversations for brands you manage by creating Business Messages agents directly on GBM Developer Console.

* If you have your **own account**, you can enable conversations for brands you manage by creating Business Messages agents using Business Communications APIs.

Important Information on Agents and GBM’s Messaging Infrastructure

* An Agent is a conversational entity that users interact with.

* You must create one agent for each brand you manage.

* You can create and manage agents with the Business Communications API.

* You can control messaging for your agents with the Business Messages API.

An agent encompasses a brand’s business functions, such as online support, and physical locations (if any).

* Each message contains the context from which the user initiated the conversation.

* Your message routing infrastructure can detect if the user viewed a specific business location or looked for general support, and it can route messages to the correct destination.



Customers can send messages to your brand or its locations through these agents.

With Business Messages, you can place messaging buttons for brands managed by Kore AI within organic Google search results.

**The Messaging Flow**

1. When a customer clicks the button, a conversation is initiated with the brand’s AI Agent on the device.
2. Google delivers the message defined as a JSON payload to the Webhook that Kore.ai provides.
3. The agent uses this Webhook and the Conversational Agent API to receive and respond to the customer’s messages.




## Set up on the GBM Channel

The important steps to set up the GBM channel are summarized below:


1. Creating a **Google Cloud Platform (GCP)** project.
2. Submitting the partner information to Google.
3. Enabling the Conversational Agent API.

**Prerequisites**


* An active **Google account**.
* The **Partner Name** field appears in the [Google My Business (GMB) Console](https://www.google.com/business/) for locations associated with the agents you manage.
* A **webhook endpoint URL** that can accept messages (Kore.ai generates the webhook URL, which will be associated with a AI Agent assistant built on the platform).

**Create a Google Cloud Platform Project**

You must create and register a **Google Cloud Platform (GCP)** project to enable the Google Cloud API service for your partner account. [Learn more](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

!!! tip

    Please note the project number to register as a partner.



## GBM Channel Enablement on the Platform

To set up the GBM channel on the Kore.ai XO Platform and launch the agent, follow the steps below:

1. [Register as a Google Business Messaging Partner](#step1-register-as-a-gbm-partner).
2. [Create an agent for your account](#step-2-create-an-agent-for-your-account).
3. [Set up the Webhook for the agent](#step-3-if-business-helper-bot-is-disabled-set-an-agent-level-webhook).
4. [Create a Service Account Key](#step-4-create-a-service-account-key).
5. [Configure the AI Agent for the service account](#step-5-configure-the-ai-agent-for-the-service-account).


## Step1: Register as a GBM Partner

To integrate with the GBM channel, you need to register as a partner for Google Business Messaging with the steps below:

1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/business-messages/guides/how-to/register&utm_medium=devsite&utm_campaign=business-messages).
2. Under **Business Messages**, click **Create partner account**.
<img src="../images/GBM-1.png" alt="Google business " title="Google business " style="border: 1px solid gray; zoom:70%;">

3. Enter the values for the following fields in the **Create a Business Messages partner account** window:
    * **Your Name**: Your full name.
    * **Partner Name**: Your organization’s name.
    * **Partner Website**: Your organization’s website.
    * **Region**: The region you want to host the Business Messages service.

    !!! note

        To launch a production agent with Business Messages, please register with a corporate email, not a personal email.
  
4. Review and Accept the **Business Messages Terms of Service**.

5. Click **Create**.  <img src="../images/GBM-2.png" alt="create business partner" title="create business partner" style="border: 1px solid gray; zoom:70%;">


You are now registered as a Business Messages partner and have access to the Business Messages and Business Communications APIs. The Business Messages API sends messages to users, while the Business Communications API manages agents.

## Step 2: Create an Agent for your Account



After you register as a partner, you can enable conversations for brands you manage by creating Business Messages agents for them.

When creating an agent, you can enable the **Business Messages Helper Bot** that lets you quickly start a conversation with your agent by leveraging the available features and resources. This is especially useful when creating your first agent.

Also, to create an agent for your GBM Partner account, you must submit information on the brand and the agent on the **Business Communications Developer Console**.	

!!! note

    To manage multiple brands, you must create an agent for each brand.	

			

**Expectations Before Creating Agents**



* Agents should follow the design guidance outlined in[ Conversation design for Business Messages](https://developers.google.com/business-communications/business-messages/guides/how-to/design).
* Agents should have human representatives available to answer questions when automation is unable to fulfill a request or when requested by users.
* Without human representatives, your agent can’t be launched from location-based entry points or non-local entry points. Specify a human interaction type for your agent, so it can surface on Google-managed entry points.
* Agents should maintain a customer satisfaction rating (CSAT) of at least 80% and a merchant response rate (MRR) of at least 95% as outlined in [Metrics](https://developers.google.com/business-communications/business-messages/guides/qa/metrics).

**Prerequisites**



1. If you registered for a partner account before March 7, 2022, you need to enable the Business Messages API before creating your first agent. See[ Enable the Business Communications API and Business Messages API](https://developers.google.com/business-communications/business-messages/guides/concepts/open-api#enable_the_business_communications_api_and_business_messages_api).
2. Please ensure you have the following values for each brand you manage before you create an agent:

  * Brand name
  * Agent name to appear in conversations with users.

**Steps to Create an Agent**

Once you’ve gathered the above information, to create an agent follow the steps below:

!!! note

    If you manage multiple brands, repeat the steps to create an agent for each brand.



1. Sign in to your account on the[ Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/rcs-business-messaging/guides/get-started/first-agent&utm_medium=devsite&utm_campaign=rcs-business-messaging).

2. Click **Create Agent**.  <img src="../images/GBM-3.png" alt="create agent" title="create agent" style="border: 1px solid gray; zoom:70%;">

3. For **Agent type**, select **Business Messages**.
<img src="../images/GBM-4.png" alt="brand name" title="brand name" style="border: 1px solid gray; zoom:70%;">

4. Enter the values for the **_Brand name_** and **_Agent name_** fields. 

5. Do one of the following:

    * To experience a conversation with your agent by leveraging the rich features of the GBM Platform, select **Enable Business Messages Helper Bot**. The Helper Bot allows you to Explore rich features, learn how to implement features, and find resources for agent setup. When the Helper Bot is enabled, it sends and receives messages for your agent, and **_No Webhook is required_**.
    * To customize your agent and prepare it for message handling, deselect **Enable the Business Messages Helper Bot**.
6. Click **Create Agent**.

If you enabled the Business Messages Helper Bot, you can start a conversation with your agent immediately. Otherwise, proceed to set your Webhook (Step 3).

!!! note

    Once your agent is available, you can add the business and branding information.





## Step 3: If Business Helper Bot is Disabled, Set an Agent-level Webhook

To customize your agent and how it handles messaging, you must set an agent Webhook on the Google Business Messages platform. You will receive messages sent to your agent at this Webhook. For setting up the Webhook, you must copy the **Webhook URL** from the XO platform and generate the **Client Token** for the agent to integrate for messaging and events.


1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/business-messages/guides/how-to/agents&utm_medium=devsite&utm_campaign=business-messages) and sign in with your **Business Messages Google** account.
2. Click on the panel with your agent’s name.
3. On the **Business Communications** page, click **Integrations** on the left menu.
4. For the **Webhook** option, click the **Configure** link.
<img src="../images/GBM-5.png" alt="configure webhook" title="configure webhook" style="border: 1px solid gray; zoom:70%;">

5. Copy the **Webhook URL** from the Kore.ai XO Platform under **Channels & Flows** > **Channels** > **Digital** > **All** > **Google Business Messaging** > **Configurations**.


6. Paste the copied link for the **Webhook endpoint URL** field in the **Configure your webhook** window on the **Business Communications Developer** Console.
<img src="../images/GBM-7.png" alt="endpoint url" title="endpoint url" style="border: 1px solid gray; zoom:70%;">

7. Click the **Refresh** icon for the **Client token** field to generate the **Client token**.

8. Click **Verify**.  <img src="../images/GBM-8.png" alt="client token" title="client token" style="border: 1px solid gray; zoom:70%;">

The **GBM platform** sends a **POST** request to the Kore.ai XO Platform’s webhook with the **_ClientToken_** and **_Secret Key_** parameters for verification before sending/receiving messages.


## Step 4: Create a Service Account Key

To send messages and events as your agent, you need to authenticate API calls with a service account key. The **Business Communications Developer Console** creates a service account for you, but you need to create a unique key to access your agent with the steps below:


1. On the left menu, click **Service account**.
<img src="../images/GBM-9.png" alt="service account" title="service account" style="border: 1px solid gray; zoom:70%;">

2. Click the **Create key** button.  
<img src="../images/GBM-10.png" alt="create key" title="create key" style="border: 1px solid gray; zoom:70%;">

3. Click **Create** on the confirmation window to download the JSON file with the **service account key**.  <img src="../images/GBM-11.png" alt="service account key" title="service account key" style="border: 1px solid gray; zoom:70%;">
<img src="../images/GBM-12.png" alt="service key" title="service key" style="border: 1px solid gray; zoom:70%;">

4. Rename the downloaded file to **_rbm-agent-service-account-credentials.json_**.

5. Store the key securely to recover it if required.


## Step 5: Configure the AI Agent for the Service Account

To configure the AI Agent for the service account on the Kore.ai XO Platform, follow the steps below:

!!! tip

    For the private key, please copy only the key value within the **_BEGIN PRIVATE KEY_** and **_END PRIVATE KEY_** header tags. The XO Platform adds these tags by default.


1. Copy the **_client_email_**, **_client_id_**, **client_token (alphanumeric value)**, and **_private_key_** values from the downloaded JSON file.

2. Paste the values in the respective fields under **Channels & Flows** > **Channels** > **Digital** > **All** > **Google Business Messaging** > **Configurations**.  <img src="../images/GBM-14.png" alt="client details" title="client details" style="border: 1px solid gray; zoom:70%;">


3. Select **Yes** for the **Enable Channel** option.

4. Click **Save**

After enabling the channel and verifying all the configurations, you can optionally publish the assistant for the new channel. Learn more about[ Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Kore.ai XO Platform, please see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)