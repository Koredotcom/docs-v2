# Kore-Unblu Integration

## Overview

Unblu is a conversational AI Agent that allows agents and advisors in your organization to collaborate with your customers and website visitors. It enables collaboration through online channels like live chat, secure text messaging, and video chat to achieve a better customer experience.

Transferring a chat to a human agent from the AI Agent is necessary if your AI Agent is in the space of customer service. AI Agents are not meant to completely replace humans. At times, the AI Agent fails to answer satisfactorily or the user wants to chat with a human being. If this happens, the AI Agent should transfer the chats to a human agent or a customer care representative. To help users accomplish this task, Kore can be integrated with the Unblu application.

Here, the AI Agent is the core of the entire solution. Apart from performing all its functionalities, the AI Agent also acts as a proxy between users and agents.

* **App**: AI Agent that the user interacts with.
* **Users**: Users are the customers who are using this AI Agent.
* **Agent**: Agents are humans who chat with users. The agent will also need a chat window. For this, you can use _Unblu_ software.


## Prerequisites

The prerequisites are listed below:

* A fully functional AI Agent.
* An Unblu account.
* Download BotKit SDK from Kore’s [GitHub](https://github.com/Koredotcom/BotKit){:target="_blank"}.
* Download and install the &lt;_Node.js_> file. The BotKit SDK requires &lt;_node.js_> files to run on the same server where the SDK is installed. The &lt;_node.js_> version must be v12.0 and above.
* Ngrok to simulate the callback server application.


## Configuration

To perform the Kore-Unblu integration, follow the below steps:

1. Log in to the Kore AI Agent Platform with valid credentials.
2. Select the **Build** tab from the top menu
3. Go to **Integrations** select the **Agent Transfer** option
4. On the Agent Transfer page, next to **App Name**, click **Add** (you can select an existing app from the drop-down if you have already created one)
5. On the Create Client App window, enter the app name in the **Name** field.
6. You can choose to enforce JTI or JWE encryption or both. For this use case we will ignore them.
7. Click **Next > Done**.
8. In the **Callback URL** field, enter the BotKit URL endpoint. For example, [https://&lt;domainname>/unblu](https://&lt;domainname>/unblu){:target="_blank"}.
9. Click **Save**.
10. Now, log in to the Unblu account with valid credentials.
11. Click your profile on the top-right; under the **Administration** section, select **Manage Account**.
12. On the Account Configuration page, by default, **Account Overview** is displayed.
13. On the left pane, under the **Site Integration** section, select **Domains**.
14. On the Domains page, click **New Domain** on the top-right.
15. On the New Domain window, enter the URL in the **Domain URL** field.  
  
    !!! Note
    
        This is the Callback URL. Refer to step 7. If this is not a constant public IP or Ngrok IP, you must update the IP whenever it changes.

16. In the **Protocol** field, select **Both**.
17. Click **Save**.

After completing the above configurations, make the required changes in the &lt;_config.json_> file. Refer to &lt;_sample_config_file.txt_> for sample values.

1. Go to &lt;_config.json_> file and make the below-mentioned changes.
2. Under the **app** section, paste the **URL** (Ngrok or publicly accessible URL). Refer to the below image.  
<img src="../images/kore-unblu-1.png" alt="Ngrok or publicly accessible URL" title="Ngrok or publicly accessible URL" style="border: 1px solid gray;">

3. Under the **credentials** section, paste the Kore app details: API Key (client secret), App ID (client id), and Bot Name. Refer to the below image.  
<img src="../images/kore-unblu-2.png" alt="Kore bot details" title="Kore bot details" style="border: 1px solid gray;">  

    To find these details, 

    1. Log in to the Kore apps platform with valid credentials.
    2. Select the **Build** tab from the top menu
    3. From **Integrations** select the **BotKit** option
    4. You can find the details as needed.

4. Under the Unblu section, make the below changes:

    1. Paste Unblu credentials under the **Unblu credentials** section.
    2. Under the **external_messenger** section, enter the name, description, etc., you want to display in the chat.  
      
        To access the external messenger details,
        
        1. Log in to the Unblu desktop application.
        2. On the left pane, under the **External Integration** section, select **External Messengers**.
        3. On the External Messengers page, select the respective messenger and you can find the messenger details.

    3. Under the **agent** section, enter the agent details you want to create.
    4. Under the **named_area**  section, enter a **Name** and **Meta Tag ID**.  
      
        To create a named area,
        
        1. Log in to the Unblu application.
        2. On the left pane, under the **Site Integration** section, select **Named Areas**. 
        3. On the Named Areas page, click **New Named Area** on the top-right.
        4. On the New Named Area window, select a registered domain from the **Domain Name** drop-down list and enter a name in the **Name** field. You can also register a domain by clicking **Register a New Domain**.
        5. Click **Save**.

    5. Under the **admin** section, enter the Unblu username.  
    <img src="../images/kore-unblu-3.png" alt="Admin section" title="Admin section" style="border: 1px solid gray;">

5. After you have updated the &lt;_config.json_> file, install the dependencies by executing the command _npm i_.
6. Run the integration setup by executing the command _npm start_.

    !!! Note
    
        The webhook URL must be the same in API Extensions, &lt;_config.json_> file, and the external messenger section (Endpoint URL of the respective messenger) of your Unblu account as mentioned above (The Botkit URL in API Extensions, app.url, and unblu.custom.external_messenger).

7. The agent transfer is configured at the dialog level. You can open the dialog task, and open the agent transfer node to see that the configuration is saved.