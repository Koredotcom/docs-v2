# Amazon Connect CCP Integration: Agent AI Chat

This document is a comprehensive guide for integrating Agent AI (Chat channel) with Amazon Connect using a Custom Contact Control Panel (CCP). The custom CCP acts as a unified container that hosts both Amazon Connect’s native CCP and Agent AI Chat widget, allowing agents to manage customer interactions while receiving AI-driven assistance in real time.

## Prerequisites 

| **Category** | **Requirement** |
|---------------|-----------------|
| **AWS / Amazon Connect** | - An active Amazon Connect instance with Administrator privileges.<br>- The instance must be created in a supported AWS region (this guide was validated in **us-east-1**).<br>- For telephony use cases, ensure DID or toll-free numbers are claimed.<br>- Confirm Amazon Connect service quotas support your expected usage. |
| **Custom Contact Control Panel (CCP)** | - A supported browser (the latest version of Chrome is recommended, as Firefox may have limitations with WebRTC/media). For details, refer to [AWS documentation](https://docs.aws.amazon.com/connect/latest/adminguide/connect-supported-browsers.html){:target="_blank"}.<br>- Workstations meeting minimum CPU, RAM, and network bandwidth requirements for CCP usage.<br>- Network/firewall rules allowing outbound HTTPS (443), WebRTC domains/ports, and host domains for the custom CCP.<br>- Valid SSL certificates if hosting the CCP outside the Amazon Connect domain. |
| **Agent AI** | - Active Agent AI account with required permissions for bot configuration.<br>- Access to dialog tasks, session APIs, webhook endpoints, and iframe token generation.<br>- A backend endpoint capable of returning bot metadata and generating Agent AI iframe tokens. |
| **Application and Integration Components** | - Access to the Custom CCP codebase (HTML/JS container app).<br>- Ability to modify configuration values such as backend URL, CCP URL, and Agent AI token endpoint.<br>- A lightweight hosting solution (such as Python HTTP server, Node, or NGINX). |
| **Security / Identity** | - IAM roles configured for Amazon Connect administration.<br>- Clearly defined, least-privilege IAM policies for any backend, Lambda, or additional AWS services (if used).<br>- **Approved Origins** configured in Amazon Connect for custom CCP hosting domains.<br>- Ensure HTTPS-only hosting to avoid mixed-content security blocks. |
| **Migration / Versioning** | - Verify compatibility with Amazon Connect’s current CCP version (**ccp-v2**).<br>- Remove or migrate any legacy CCP implementations.<br>- Ensure Agent AI endpoints and token mechanisms match the latest platform standards. |

## Components Required

The integration requires the following components:

* Amazon Connect
* Custom Contact Control Panel (CCP)
* Agent AI Platform

    !!! note

        Lambda, Kinesis, and streaming services aren't required for chat-only integrations.  

## Set up an Amazon Connect instance

1. Sign in to your **Amazon Connect** instance.
2. Go to **Amazon Connect**> **Instances**.
3. Click **Add an instance** to create a new Amazon Connect instance.  
    <img src="../images/add-an-instance_1.png" alt="add-an-instance" title="add-an-instance" style="border: 1px solid gray; zoom:80%;">  

4. Select an option in the **Identity management** section, and enter the Amazon Connect instance name in the **Access URL** field.  
    <img src="../images/identity-management-access-url_2.png" alt="identity-management-access-url" title="identity-management-access-url" style="border: 1px solid gray; zoom:80%;">  

5. This step creates an Amazon Connect host URL: *https://&lt;instance-name>.my.connect.aws*.
6. Click **Next**.
7. Select **Specify an administrator**, and enter data about the admin in the following fields:
    * **First name**: First name of the administrator.
    * **Last name**: Last name of the administrator.
    * **Username**: User name for the administrator to sign in.
    * **Password**: Password for the administrator to sign in.
    * **Password (verify)**: Re-enter the password.  
    <img src="../images/add-administrator_3.png" alt="add-administrator" title="add-administrator" style="border: 1px solid gray; zoom:80%;">  

8. Click **Next**.
9. Select option(s) in the **Telephony Options** section.   
    <img src="../images/telephony-options_4.png" alt="telephony-options" title="telephony-options" style="border: 1px solid gray; zoom:80%;">  

10. Click **Next**. 
11. Select an option on the **Data storage** page.  
    <img src="../images/data-storage_5.png" alt="data-storage" title="data-storage" style="border: 1px solid gray; zoom:80%;">   
12. Click **Next**.
13. Review, and click **Edit** to change your input.  
    <img src="../images/review-and-create_6.png" alt="review-and-create" title="review-and-create" style="border: 1px solid gray; zoom:80%;">   

14. Click **Create**. 

## Sign in as an Administrator

The new instance you created is listed in Amazon Connect.   
<img src="../images/new-instance_7.png" alt="new-instance" title="new-instance" style="border: 1px solid gray; zoom:80%;">  

1. Click the instance alias.
2. Add a list of allowed origins to it by clicking **Approved origins**, as shown in the following screenshot:   
    <img src="../images/approved-origins_8.png" alt="approved-origins" title="approved-origins" style="border: 1px solid gray; zoom:80%;">  

3. Go to the **Overview** option of the current instance, and click the **URL**. A new web page opens in a different tab with the following screenshot:  
<img src="../images/amazon-connect-signin-page_9.png" alt="amazon-connect-signin-page" title="amazon-connect-signin-page" style="border: 1px solid gray; zoom:40%;">  

4. Sign in with the Administrator credentials you created while creating the instance.  
This credential gives you admin access to the contact center, allowing you to modify flows and groups, as required.  

## Run the code base

1. Get the code base from [this](https://github.com/Koredotcom/korecc-twilio/tree/master/AmazonConnect/Chat_CCP){:target="_blank"} URL.
2. Change the backend URL in **config.js** under the **scripts/config** folder. This backend URL should provide the bot details and Agent AI iframe token.  
3. Change the ccpUrl in **initCCP.js**. The ccpUrl should be in the following format:   
*https://[amazon-connect-instance].my.connect.aws/connect/ccp-v2*
4. Run any light-weight server to access this as a web page.   
*Example: `python  -m http.server [port-number]`* 
5. After entering the **local host URL**, you should be able to see the following screen:  
    <img src="../images/welcome-page_10.png" alt="welcome-page" title="welcome-page" style="border: 1px solid gray; zoom:80%;">  

6. If you initiate a chat, you see the following screen (Agent AI on the right):  
    <img src="../images/agentai-rendering_11.png" alt="agentai-rendering" title="agentai-rendering" style="border: 1px solid gray; zoom:80%;">  

## Chat widget in Amazon Connect

1. Sign in to the Amazon Connect instance.
2. Go to **Channels** > **Communication widget**.  
    1. Here, you find the default widget. You can also create a new widget by clicking **Add widget**.  
        <img src="../images/default-and-add-widgets_12.png" alt="default-and-add-widgets" title="default-and-add-widgets" style="border: 1px solid gray; zoom:80%;">   

3. Click the required widget.
    2. You find the JavaScript sample code to run the widget on your local device. Copy the code.  
        <img src="../images/javascript_13.png" alt="javascript" title="javascript" style="border: 1px solid gray; zoom:80%;">   

4. Paste the code into any HTML file, and run a sample application server.  
*`python  -m http.server [port-number]`*  
5. You should be able to see the following screen for the chat widget:  
    <img src="../images/chat-widget_14.png" alt="chat-widget" title="chat-widget" style="border: 1px solid gray; zoom:40%;">  

    * The following screenshot shows **Amazon Connect** integrated with **Agent AI**:  
        <img src="../images/amazon-connect-with-agentai-chat_15.png" alt="amazon-connect-with-agentai-chat" title="amazon-connect-with-agentai-chat" style="border: 1px solid gray; zoom:80%;">   

    * Click [here](https://www.loom.com/share/c89ec8e652a845229874e09ebb6f885e?sid=a9c339bf-c1f9-47ee-97c5-45292ccd4f6d){:target="_blank"} for a demo video.