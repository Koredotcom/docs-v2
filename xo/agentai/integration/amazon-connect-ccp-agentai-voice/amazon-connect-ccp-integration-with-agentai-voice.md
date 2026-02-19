# Amazon Connect CCP Integration: Agent AI Voice

This document describes the integration process of Amazon Connect with Agent AI—Voice, using the AWS CCP Integration approach. This integration enables Amazon Connect to receive voice calls while Agent AI provides real-time support to agents. Audio streams from both the user and agent are captured and processed using Amazon Kinesis Streams. AWS Lambda functions manage transcription and token generation for seamless interaction. Agent AI provides AI-powered assistance, including [Agentic Copilot](./../../configuration/linked-services.md#agentic-configurations){:target="_blank"}, [Next Best Action](../../agent-experience/agent-assist-widget-v3.md){:target="_blank"}, [Agent Coaching](../../agent-experience/agent-realtime-coaching.md){:target="_blank"}, [Agent Playbook](../../agent-experience/playbook.md){:target="_blank"}, [sentiment analysis](../../agent-experience/agent-assist-widget-v3.md){:target="_blank"}, [EOC Summary](../../agent-experience/agent-assist-widget-v3.md#assist-tab){:target="_blank"}, and more throughout the conversation. 

## High-Level Architecture 

<img src="../images/architecture_1.png" alt="architecture" title="architecture" style="border: 1px solid gray; zoom:80%;"/> 

## Prerequisites 

| **Category**                    | **Requirement**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **AWS / Amazon Connect**         | - An Amazon Connect instance with Administrator privileges.<br>- The instance should be in a region that supports the required services, such as Kinesis Video Streams and Lambda.<br>- If using Telephony: claimed phone numbers (DID or toll-free) as needed.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Contact Control Panel (CCP) / Agent Desktop** | - Supported browser for agents (latest version of Chrome recommended; Firefox may have limitations around sample rates and media usage). Refer to the [AWS Documentation](https://docs.aws.amazon.com/connect/latest/adminguide/ccp-agent-hardware.html?utm_source=chatgpt.com){:target="_blank"} for details.<br>- Workstations meeting minimum hardware/network standards (CPU, RAM, network bandwidth). Refer to the [AWS Documentation](https://docs.aws.amazon.com/connect/latest/adminguide/ccp-agent-hardware.html?utm_source=chatgpt.com){:target="_blank"} for details.<br>- Network/firewall settings configured: allow outbound HTTPS (443), WebRTC ports/domains, approved origins/domains in Connect for CCP, and any custom hosting of CCP. Refer to the [AWS Documentation](https://docs.aws.amazon.com/connect/latest/adminguide/ccp-networking.html?utm_source=chatgpt.com){:target="_blank"} for details. |
| **Streaming and Transcription Components** | - Amazon Kinesis Video Streams (KVS) availability in region: permissions to create/stream video/audio data.<br>- AWS Lambda permissions to read from KVS, generate temporary AWS credentials for access, and trigger downstream processing such as the transcriber bot.<br>- Bot/webhook configuration to receive transcription/context.<br>- SSL/valid certificates for any custom-hosted CCP or widget, if hosted outside Amazon Connect’s domain.                                                                                                                                            |
| **Components**                   | - Active Agent AI account with necessary roles/permissions for dialog tasks, webhook endpoints, and transcription configuration.<br>- Familiarity with dialog/task definitions and handling real-time input.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Security / Identity**          | - Identity management in Amazon Connect / AWS IAM roles for Lambda and KVS.<br>- Approved origins configured for web apps (for custom CCP or embedded widget) in Amazon Connect.<br>- Appropriate policies for least-privilege on AWS services used.                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Migration / Versioning**       | - If accounts were using AudioSockets, ensure migration to Voice Gateway.<br>- Version compatibility of the custom CCP or Streams API, if making customizations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## Components Required

The following components are required: 

* Agent AI
* AWS Lambda
* Amazon Kinesis Streams
* Amazon Connect

## Pricing and Cost Considerations

When integrating Agent AI with Amazon Connect, admins must consider potential AWS costs such as call usage (per-minute), phone number rental, Lambda executions, Kinesis Streams (ingestion/storage), transcription services, data storage/transfer, and regional telephony rates. Actual costs vary by usage and region.

## Setup Guide

### Agent AI

To onboard the Agent AI account and create dialog tasks, refer to the [About Agent AI](../../about-agent-ai.md){:target="_blank"} doc. 

### AWS Lambda

#### Function: KVS Trigger

#### Function 1: KVS Trigger (Choose any other name)

This function retrieves call stream metadata and AWS credentials from the environment, generates a credential set (SessionToken, AccessKeyId, SecretAccessKey) for KVS access, and triggers the Transcriber to send transcripts to the AI Agent with the current Conversation ID. 

1. Download the Lambda [from here](https://github.com/Koredotcom/korecc-twilio/raw/master/AmazonConnect/lambdas/KVS_Trigger.zip){:target="_blank"} and upload it to the function you create. 
2. Go to **Create function**. 
3. Enter a name in the **Function name** field. 
    <img src="../images/create-function_2.png" alt="create-function" title="create-function" style="border: 1px solid gray; zoom:80%;"/>  

4. Go to **Upload from**. 
    <img src="../images/upload-from_3.png" alt="upload-from" title="upload-from" style="border: 1px solid gray; zoom:80%;"/>  

    * Upload the **Lambda** zipped file.
    * Click **Save**.
    * Go to **Runtime settings**.
    * Click **Edit** and change the **Handler** name from **index.handler** to **kvs_trigger.handler**.  
        <img src="../images/runtime-settings_4.png" alt="runtime-settings" title="runtime-settings" style="border: 1px solid gray; zoom:80%;"/>  

5. Go to **Configuration** > **Environment variables**.  
    <img src="../images/environment-variable_5.png" alt="environment-variable" title="environment-variable" style="border: 1px solid gray; zoom:80%;"/>  

6. Create the following environment variables within the Lambda: 
    * **kvsAccessKeyId** – AWS Client ID 
    * **kvsSecretAccessKey** – AWS Client Secret 
    * **region** – add your AWS Region 
    * **transcriberURL** – [https://platform.kore.ai/integrations/amzn/voice/ ](https://agentassist.kore.ai/integrations/amzn/voice/) 
    * For regions other than the **US-prod**, replace the above domain with your Agent AI domain. 
7. **Steps to get the AWS Client ID and Secret**
    * Ensure the account associated with the AWS Client ID and Secret has **Read** permissions to Amazon KVS Kinesis Streams.
    * Get your AWS Client ID and Secret from IAM:
        * Go to **IAM** > **Users**.
        * Click **Users** > **Security credentials** tab.
        * Click **Create access key**.
        * Select **Use case** as **Application running on an AWS compute service**.
        * Click **next**.
        * Enter a description tag, and then click **create access key**.  
            <img src="../images/create-access-key_6.png" alt="create-access-key" title="create-access-key" style="border: 1px solid gray; zoom:80%;"/>   

8. The final configuration appears as shown in the following image:  
<img src="../images/final-configuration_7.png" alt="final-configuration" title="final-configuration" style="border: 1px solid gray; zoom:80%;"/>  

#### Function 2: Retrieve Agent AI Widget Credentials

This function is responsible for returning all the credentials required to render the Agent AI widget on the Amazon Connect desktop. In this Lambda, you store all the required data in the environment variable and expose it to the API Gateway URL, which is used later in the CCP-voice configuration page. 

1. Download the Lambda [from here](https://github.com/Koredotcom/korecc-twilio/raw/master/AmazonConnect/lambdas/KoreAgentAssistCCP.zip){:target="_blank"} and upload it to the function once you create a new Lambda function.
2. **Environment variable List**:
    * **agentassistUrl**: `https://agentassist.kore.ai/koreagentassist-sdk-v3/UI/agentassist-iframe.html`
    * **botId**: [Agent AI Bot Id]
    * **clientId**: [Agent AI Client Id]
    * **clientSecret**: [Agent AI Client Secret]
    * **languageCode**: en
    * **awsConnectURL**: [Aws Connect Access URL]/connect/ccp-v2/ 

    See the following image for AWS Connect Access URL: 
    <img src="../images/aws-connect-access-url_8.png" alt="aws-connect-access-url" title="aws-connect-access-url" style="border: 1px solid gray; zoom:80%;"/>  

3. The next step is to add an <span id="apigateway">**API Gateway**</span> to access this Lambda:
    * Go to **Configuration** > **Triggers**.
    * Click **Add trigger**.
    * Select **API Gateway**.
    * Select **Create a new API**. (API Type: HTTP API)  
        <img src="../images/create-a-new-api_9.png" alt="create-a-new-api" title="create-a-new-api" style="border: 1px solid gray; zoom:80%;"/>  

    * Copy this **API endpoint URL**, and paste it in the **URL** field of [Contact Control Panel as Agent Desktop](#contact-control-panel-ccp-as-agent-desktop) section. 

## Amazon Connect 

1. Sign in to your **Amazon Connect instance**.
2. Go to **Amazon Connect** > **Instances**.
3. Create a new Amazon Connect instance, or sign in to an existing one.  
    <img src="../images/amazon-connect-instance_10.png" alt="amazon-connect-instance" title="amazon-connect-instance" style="border: 1px solid gray; zoom:80%;"/>  

4. Enable all the required options under the **Telephony Options** section.  
    <img src="../images/telephony-options_11.png" alt="telephony-options" title="telephony-options" style="border: 1px solid gray; zoom:80%;"/>  

5. Go to **Approved origins**, and add the domain/s where you have hosted your CCP instance/s.  
    <img src="../images/approved-origins_12.png" alt="approved-origins" title="approved-origins" style="border: 1px solid gray; zoom:80%;"/>  

6. Purchase/claim a **phone number** from Amazon Connect. Use [this guide](https://docs.aws.amazon.com/connect/latest/adminguide/ag-overview-numbers.html){:target="_blank"} for reference.  
    <img src="../images/claim-phone-number_13.png" alt="claim-phone-number" title="claim-phone-number" style="border: 1px solid gray; zoom:80%;"/>  

7. Create/import a contact flow in the Amazon Connect instance. Refer to [this article](https://docs.aws.amazon.com/connect/latest/adminguide/contact-flow-import-export.html){:target="_blank"} for help.  
    <img src="../images/import-contact-flow_14.png" alt="import-contact-flow" title="import-contact-flow" style="border: 1px solid gray; zoom:80%;"/>   

8. You can import the contact flow from this [link](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/master/AmazonConnect/flows/CCP-voice/KVSAgentAssist_CCP.json){:target="_blank"}.  
9. Click **Set contact attributes**, and enter the required fields:  
    * **BotID**: Add your Agent AI Bot ID created on Agent AI.  
    * **ClientId**: Add your Agent AI  Client ID created on Agent AI. 
    * **ClientSecret**: Add your Agent AI Client Secret created on Agent AI. 
    * **SipUri**: Add `sip:XXXX@savg-us-prod-sbc-in-nlb-0d9a4c651955ff47.elb.us-east-1.amazonaws.com` and replace **XXXX** with your SIPREC Configuration of Agent AI.    

    To get the SIP URI from [Agent AI](https://platform.kore.ai/){:target="_blank"}:  

    1. Go to **Agent AI** > **Flows & Channels**, and click **Voice Gateway**.  
    2. Click **SIP Numbers** > **Configure SIP Trunk**.  
    3. On the **Configure SIP Trunk** page, in the **Product Selection** section, select **Agent AI**.  
    4. Click the **Copy** button next to the **SIP URI** field.  
        <img src="../images/configure-sip-trunk_15.png" alt="configure-sip-trunk" title="configure-sip-trunk" style="border: 1px solid gray; zoom:80%;"/>  

    5. Paste the copied SIP URI value into the **contact attributes sipUri** field in the Amazon Connect flow.  

    To get the **agentassistURL** and **accountID** values:  

    1. **agentassistUrl**: Add your **Agent AI URL** created on Agent AI. 
    2. **wssUrl**: Add “wss://savg-webserver.kore.ai”.  
    3. accountId: Add your Agent AI **Account ID** created on Agent AI.  
    4. **languageCode**: Add “en”  
        <img src="../images/set-contact-attributes_16.png" alt="set-contact-attributes" title="set-contact-attributes" style="border: 1px solid gray; zoom:80%;"/>   

    5. Click **Save**.  
    6. Click **Start Stream and Transcription in Kore** Lambda.  
        <img src="../images/invoke-aws-lambda-function_17.png" alt="invoke-aws-lambda-function" title="invoke-aws-lambda-function" style="border: 1px solid gray; zoom:80%;"/>  

    7. Select your **Trigger Lambda Function** from the dropdown list, and select the first function which was created in the [initial step](#function-1-kvs-trigger-choose-any-other-name).  
    8. Click **Save**.  
    9. For **Transfer to Flow**, select a flow you want to move the user to. For example, save this [KVSQueueFlow.json](../amazon-connect-voice/amazon-connect-with-agentai-voice-via-aws-third-party-applications.md#kvsqueueflowjson){:target="_blank"} in a file, import this flow to **Flows**, and add **Queue** details for routing.  
    10. To use agent dispositions, configure the **Set Event Flow** block with **Disconnect** flow for Agent UI hook by importing this flow and selecting it. If not, you can delete the block and **Connect the remaining blocks** to the disconnect block.  

        !!! note 

            The disposition saving logic is at your discretion. Implement as per your use case. 

    11. Click **Save**, and publish the flow.  

10. Attach the contact flow to the purchased phone number. Refer to [Attach a claimed or ported phone number to a flow](https://docs.aws.amazon.com/connect/latest/adminguide/associate-claimed-ported-phone-number-to-flow.html){:target="_blank"} for help.  
    <img src="../images/amazon-connect-phone-number_18.png" alt="amazon-connect-phone-number" title="amazon-connect-phone-number" style="border: 1px solid gray; zoom:80%;"/>  

11. Use the phone number to test the Amazon Connect CCP solutions with the Agent AI widget. 

### Contact Control Panel (CCP) as Agent Desktop 

* The CCP solution is hosted in [https://agentassist.kore.ai/integrations/amzn/ccp-voice/](https://agentassist.kore.ai/integrations/amzn/ccp-voice/). You can also use the same URL to load your Amazon Connect instance and Agent AI in the same page.  
* First-time users are redirected to the [configure](https://agentassist.kore.ai/integrations/amzn/ccp-voice/configure/) page, where they must paste the <a href="#apigateway">copied API Gateway URL</a>   
* Once you paste the above URL and click the **SAVE DETAILS** button, it redirects you to the CCP screen and a dummy Agent AI widget loads up. Initially, it asks you to log in with your Amazon Connect credentials, and only after successful authentication, the Amazon Connect CCP is visible. 
* Amazon Connect Contact Control Panel is used as the Agent Desktop to track new conversations on the client side and render the conversation-specific Agent AI widget within the Agent Desktop.  
    <img src="../images/agentai-widget_20.png" alt="agentai-widget" title="agentai-widget" style="border: 1px solid gray; zoom:80%;"/>  

    !!! note

        Customers can host the above integration solution within their own domain by getting the Integration SDK from their representative.
