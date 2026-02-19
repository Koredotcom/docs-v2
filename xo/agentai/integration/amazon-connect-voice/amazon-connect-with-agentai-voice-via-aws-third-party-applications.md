# Amazon Connect Integration with Agent AI Voice Via AWS Third Party Applications 

This document describes the integration process of Amazon Connect with Kore Agent AI – Voice, using AWS third-party applications. This integration enables Amazon Connect to receive voice calls while Agent AI provides real-time support to agents. Audio streams from both the user and agent are captured and processed using Amazon Kinesis Video Streams. AWS Lambda functions manage transcription and token generation for seamless interaction. Agent AI is embedded into the Amazon Connect agent workspace to deliver AI-powered assistance such as [Agentic Copilot](./../../configuration/linked-services.md#agentic-configurations){:target="_blank"}, [Next Best Action](./../../agent-experience/agent-assist-widget-v3.md){:target="_blank"}, [Agent Coaching](./../../agent-experience/agent-realtime-coaching.md){:target="_blank"}, [Agent Playbook](./../../agent-experience/playbook.md){:target="_blank"}, [sentiment analysis](./../../agent-experience/agent-assist-widget-v3.md){:target="_blank"}, [EOC Summary](./../../agent-experience/agent-assist-widget-v3.md#assist-tab){:target="_blank"}, and more throughout the conversation.

## High-level architecture  

<img src="../images/architecture-diagram-1.png" alt="architecture-diagram" title="architecture-diagram" style="border: 1px solid gray; zoom:80%;"/>  

## Prerequisites 

* Amazon Connect instance with admin privileges. 
* Kore Agent AI account. 
* Basic know-how of Amazon Connect. 
* Ability to receive voice calls on Amazon Connect agent desktop. 
* AWS Lambda 
* An account associated with the AWS Client ID and Secret with Read permissions to Amazon  Kinesis Streams.  
* Transcription trigger, a microservice that extracts the required parameters from the request body and generates the KVS Processing executable as a separate process with the parameters (like Contact Details, Credentials, and Voice Gateway).   
* The **AgentAssist third-party application** created in Amazon Connect using AWS Third-party Applications.  

## Integration Setup Guide 

- [Amazon Connect Integration with Agent AI Voice Via AWS Third Party Applications](#amazon-connect-integration-with-agent-ai-voice-via-aws-third-party-applications)
  - [High-level architecture](#high-level-architecture)
  - [Prerequisites](#prerequisites)
  - [Integration Setup Guide](#integration-setup-guide)
    - [Kore Agent AI](#kore-agent-ai)
    - [AWS Lambda](#aws-lambda)
      - [First Function: KVS Trigger (Choose any other name)](#first-function-kvs-trigger-choose-any-other-name)
      - [Second Function: IFrame Token Generator (Choose any other name)](#second-function-iframe-token-generator-choose-any-other-name)
    - [AWS Connect Third Party Application Configuration](#aws-connect-third-party-application-configuration)
  - [Amazon Connect Security Profile Permissions](#amazon-connect-security-profile-permissions)
  - [Amazon Connect](#amazon-connect)
    - [Configuring Amazon Connect Instance](#configuring-amazon-connect-instance)
    - [Configuring Amazon Connect Contact Flow](#configuring-amazon-connect-contact-flow)
    - [Attaching Contact Flow to Phone Number](#attaching-contact-flow-to-phone-number)
  - [Test Your Integration](#test-your-integration)
  - [KVSQueueFlow.json](#kvsqueueflowjson)

### Kore Agent AI 

To onboard the Kore Agent AI account and create dialog tasks, refer to [About Agent AI](../../about-agent-ai.md){:target="_blank"}. 

Two configurations are needed from Agent AI:  

* Web/Mobile Client- JWT App Details  
* SIP Trunk Configuration  

### AWS Lambda 

#### First Function: KVS Trigger (Choose any other name) 

This function retrieves call stream metadata and AWS credentials from the environment, generates a credential set (SessionToken, AccessKeyId, SecretAccessKey) for KVS access, and triggers the Transcriber to send transcripts to the Kore AI Agent with the current Conversation ID.  

1. Download the Lambda [from here](https://github.com/Koredotcom/korecc-twilio/raw/master/AmazonConnect/lambdas/KVS_Trigger.zip){:target="_blank"} and upload to the function you create. 
2. Go to **Create function**. 
3. Enter a name in the **Function name** field. 
<img src="../images/create-function-2.png" alt="create-function" title="create-function" style="border: 1px solid gray; zoom:80%;"/> 

4. Go to **Upload from**. 
<img src="../images/upload-from-3.png" alt="upload-from" title="upload-from" style="border: 1px solid gray; zoom:80%;"/>  

    1. Upload the **Lambda** zipped file.
    2. Click **Save**.
    3. Go to **Runtime settings**.
    4. Click **Edit** and change the **Handler** name from **index.handler** to **kvs_trigger.handler**.  
        <img src="../images/runtime-settings-4.png" alt="runtime-settings" title="runtime-settings" style="border: 1px solid gray; zoom:80%;"/>  

5. Go to **Configuration** > **Environment variables**.  
    <img src="../images/general-configuration-5.png" alt="general-configuration" title="general-configuration" style="border: 1px solid gray; zoom:80%;"/>  

6. Create the following environment variables within the Lambda: 
    * **kvsAccessKeyId** – AWS Client ID  
    * **kvsSecretAccessKey** – AWS Client Secret 
    * **region** – add your AWS Region 
    * **transcriberURL** – `https://agentassist.kore.ai/integrations/amzn/voice/`
    * For regions other than the **US-prod**, replace the above domain with your Agent AI domain.  

**Steps to get the AWS Client ID and Secret**

1. Ensure the account associated with the AWS Client ID and Secret has Read permissions to Amazon KVS Kinesis Streams. 
2. Get your AWS Client ID and Secret from IAM:  

    1. Go to **IAM** > **Users**.  
    2. Click **Users** > **Security credentials** tab.  
    3. Click **Create access key**.  
    4. Select **Use case** as **Application running on an AWS compute service**.  
    5. Click **next**.  
    6. Enter a description tag, and then click **create access key**.   
        <img src="../images/retrieve-access-keys-6.png" alt="retrieve-access-keys" title="retrieve-access-keys" style="border: 1px solid gray; zoom:80%;"/>  

3. The final configuration should appear like the following image:  
    <img src="../images/environment-variables-7.png" alt="environment-variables" title="environment-variables" style="border: 1px solid gray; zoom:80%;"/>  

#### Second Function: IFrame Token Generator (Choose any other name) 

This function generates the Kore Agent AI IFrame widget token to display properly within the Amazon Connect agent workspace. Download the Lambda from [here](https://github.com/Koredotcom/korecc-twilio/raw/master/AmazonConnect/lambdas/Kore.ai_Token_Generator.zip) and upload this function on Lambda.  

### AWS Connect Third Party Application Configuration 

This includes the Kore Agent AI widget that renders within the Amazon Connect Agent Workspace with the context of the current conversation.  

1. Go to **Amazon Connect** > **Third-party applications**.  
<img src="../images/third-party-applications-8.png" alt="third-party-applications" title="third-party-applications" style="border: 1px solid gray; zoom:60%;">   

2. Click **Add application**.  
<img src="../images/add-application-9.png" alt="add-application" title="add-application" style="border: 1px solid gray; zoom:60%;">  

3. Enter a **Display name** for your app – for example, **Kore.ai AgentAssist Application**.  
<img src="../images/add-display-name-10.png" alt="add-display-name" title="add-display-name" style="border: 1px solid gray; zoom:60%;">  

4. Enter a **Namespace** for the app (for example, **kore.ai-example-ns**).  
<img src="../images/name-space-11.png" alt="name-space" title="name-space" style="border: 1px solid gray; zoom:60%;">  

5. Enter [https://agentassist.kore.ai/integrations/amzn/tpa-voice/](https://agentassist.kore.ai/integrations/amzn/tpa-voice/) in the **Access URL** field.  
<img src="../images/access-url-field-12.png" alt="access-url-field" title="access-url-field" style="border: 1px solid gray; zoom:80%;"/>  

6. Select all the instances that you want to enable AgentAssist for in the **Instance association – optional** field.  
<img src="../images/instance-association-13.png" alt="instance-association" title="instance-association" style="border: 1px solid gray; zoom:80%;"/>   

    !!! note

        Third Party Apps are not supported for SAML based Amazon Connect instances. To use Kore Agent AI with SAML based Amazon Connect Instances, refer to [this doc](https://docs.kore.ai/agentassist/integration/amazon-connect-with-agentassist-voice-installation-guide/){:target="_blank"}.  

7. Click **Add application**.  
<img src="../images/add-application-14.png" alt="add-application" title="add-application" style="border: 1px solid gray; zoom:80%;"/>  

## Amazon Connect Security Profile Permissions

To view and use the Agent AI widget in the Amazon Connect Agent workspace, enable the **AgentAssist** application in the agent’s security profile. If you don’t assign this permission, the widget doesn't load even if the third-party application is created and associated with the Amazon Connect instance. 

### Steps to enable the security profile permissions 

1. Sign in to **Amazon Connect Admin Console**.
2. Navigate to **Users** > **Security Profiles**.
3. Open the relevant security profile (for example, **Agent** or **Admin**).
4. Scroll to the **Agent applications** section.
5. Ensure the **Agent applications** > **KoreAgentAssist** permission is enabled.
6. Save the security profile.
7. Make sure this security profile is assigned to the agent.  

    !!! note 

        Only the users whose security profile includes **KoreAgentAssist** can see the Agent AI widget in the Agent workspace. This permission must be added **per security profile**, not **per user**.  

8. If agents report that the Agent AI widget is not visible, verify the following:
    * Correct **assigned security profile**
    * **KoreAgentAssist** is enabled under **Agent applications**
    * **Agent** or **Admin** roles are assigned, and the required permission is present.  

## Amazon Connect 

### Configuring Amazon Connect Instance 

1. Select your **Amazon Connect** instance. (To create a new instance, follow [Create an Amazon Connect instance](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html){:target="_blank"}).  
<img src="../images/amazon-connect-instance-15.png" alt="amazon-connect-instance" title="amazon-connect-instance" style="border: 1px solid gray; zoom:80%;"/>  

2. Click **Data storage**.  
<img src="../images/data-storage-16.png" alt="data-storage" title="data-storage" style="border: 1px solid gray; zoom:80%;"/>  

3. Click **Edit** next to **Live media streaming**. Here, you must create instances of Kinesis Video Streams.  
<img src="../images/live-media-streaming-edit-17.png" alt="live-media-streaming-edit" title="live-media-streaming-edit" style="border: 1px solid gray; zoom:80%;"/>  

4. Add an appropriate **Prefix** for the **Kinesis Video Streams,** and select an **AWS Key Management Service**.  
<img src="../images/live-media-streaming-18.png" alt="live-media-streaming" title="live-media-streaming" style="border: 1px solid gray; zoom:80%;"/>  

5. Set an appropriate **Data retention period** – 1 hour should be enough for Kore.ai AgentAssist use cases.  
<img src="../images/data-retention-period-19.png" alt="data-retention-period" title="data-retention-period" style="border: 1px solid gray; zoom:80%;"/>  

6. Click **Save**.
7. Click **Data streaming**.  
<img src="../images/data-streaming-20.png" alt="data-streaming" title="data-streaming" style="border: 1px solid gray; zoom:80%;"/>  

8. Select the **Enable data streaming** checkbox.
9. Select **Kinesis Stream**.  
<img src="../images/kinesis-stream-21.png" alt="kinesis-stream" title="kinesis-stream" style="border: 1px solid gray; zoom:80%;"/>  

10. Click **Create a new Kinesis Stream** for this application, or select an existing one from the dropdown list. You can use the same stream for **Contact Trace Records (CTRs)** and **Agent Events**.  
<img src="../images/create-kinesis-stream-22.png" alt="create-kinesis-stream" title="create-kinesis-stream" style="border: 1px solid gray; zoom:80%;"/>  

11. Click **Save.**
12. Click **Flows**.  
<img src="../images/click-flows-23.png" alt="click-flows" title="click-flows" style="border: 1px solid gray; zoom:80%;"/>  

13. Click **Choose an option** under **AWS Lambda**.  
<img src="../images/aws-lambda-option-24.png" alt="aws-lambda-option" title="aws-lambda-option" style="border: 1px solid gray; zoom:80%;"/>  

14. Select **KVS Trigger Lambda** from the dropdown list.  
<img src="../images/kvs-trigger-lambda-25.png" alt="kvs-trigger-lambda" title="kvs-trigger-lambda" style="border: 1px solid gray; zoom:80%;"/>  

15. Click **Add Lambda Function**.  
<img src="../images/add-lambda-function-26.png" alt="add-lambda-function" title="add-lambda-function" style="border: 1px solid gray; zoom:80%;"/>   

16. Follow the above two steps for the IFrame Token Generator Lambda. 

### Configuring Amazon Connect Contact Flow  

1. Sign in to your **Amazon Connect Instance**.  
2. Click **Flows**.  
<img src="../images/flows-amazon-connect-27.png" alt="flows-amazon-connect" title="flows-amazon-connect" style="border: 1px solid gray; zoom:80%;"/>  

3. Click **Create flow**.  
<img src="../images/create-flow-28.png" alt="create-flow" title="create-flow" style="border: 1px solid gray; zoom:80%;"/>  

4. Click the **dropdown list** icon.  
<img src="../images/dropdown-list-icon-29.png" alt="dropdown-list-icon" title="dropdown-list-icon" style="border: 1px solid gray; zoom:80%;"/>  

5. Click **Import**.  
<img src="../images/click-import-30.png" alt="click-import" title="click-import" style="border: 1px solid gray; zoom:80%;"/>  

6. Select **KoreAgentAssist.json** from the file upload menu. You can download it from [here](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/master/AmazonConnect/flows/voice/KoreAgentAssist.json){:target="_blank"}.  
<img src="../images/kore-agent-assist-json-31.png" alt="kore-agent-assist-json" title="kore-agent-assist-json" style="border: 1px solid gray; zoom:80%;"/>  

7. Click **Import**.  
<img src="../images/click-import-32.png" alt="click-import" title="click-import" style="border: 1px solid gray; zoom:80%;"/>  

8. Click **Set contact attributes**, and enter the required fields: 
    * **BotID**: Add your Agent AI Bot ID created on Kore UXO Platform.
    * **ClientId**: Add your Agent AI  Client ID created on Kore UXO Platform.
    * **ClientSecret**: Add your Agent AI Client Secret created on Kore UXO Platform. 
    * **Language**: Agent AI loads in English (en) by default. To load the widget in another language, pass the **Language contact** attribute in the contact flow.  
    * **sipUri**: Add `sip:[XXXX@savg-us-prod-sbc-in-nlb-0d9a4c651955ff47.elb.us-east-1.amazonaws.com](mailto:XXXX@savg-us-prod-sbc-in-nlb-0d9a4c651955ff47.elb.us-east-1.amazonaws.com)` and replace **XXXX** with your SIPREC Configuration of Agent AI.  

        To get the SIP URI from [Kore](https://platform.kore.ai/){:target="_blank"}: 
        
        1. Go to **Agent AI** > **Flows & Channels** > **Voice Gateway**. 
        2. Click **SIP Numbers** > **Configure SIP Trunk**. 
        3. Select **Agent AI**, under the **Product Selection** section. 
        4. Enter [172.23.12.0/24,172.23.13.0/24] in the **List of IP Address** field, for the US region.  
            <img src="../images/configure-sip-trunk.png" alt="configure-sip-trunk" title="configure-sip-trunk" style="border: 1px solid gray; zoom:80%;"/> 

        5. Copy the **SIP URI** and paste inside the **contact attributes sipUri** field inside Amazon Connect flow. 

    * **agentassistUrl**: Add your **Agent AI URL** created on Kore UXO Platform.  
    * **accountId**: Add your Agent AI **Account ID** created on Kore UXO Platform.   
    To get the **agentassistURL** and **accountID** values:  
         1. Go to **Agent AI** > **Flows &** **Channels**.  
         2. Click **Digital** > **Web/Mobile Client**.  
         3. Click to expand the **JWT App Details** section.  
            <img src="../images/web-mobile-client.png" alt="web-mobile-client" title="web-mobile-client" style="border: 1px solid gray; zoom:80%;"/>  
  
    * **wssUrl**: Add **wss://savg-webserver.kore.ai** 
 
        <img src="../images/set-contact-attributes-33.png" alt="set-contact-attributes" title="set-contact-attributes" style="border: 1px solid gray; zoom:80%;"/>   

9. Click **Save**.
10. Click **Start Stream and Transcription in Kore** Lambda.  
<img src="../images/start-stream-and-transcription-kore-lambda-34.png" alt="start-stream-and-transcription-kore-lambda" title="start-stream-and-transcription-kore-lambda" style="border: 1px solid gray; zoom:80%;"/>   

11. Select your **Trigger Lambda Function** from the dropdown list. 
12. Click **Save**.  
13. Click **Kore Token Generator for TPA** Lambda.  
14. Select your **IFrame token generation** Lambda.  
<img src="../images/iframe-token-generation-lambda-35.png" alt="iframe-token-generation-lambda" title="iframe-token-generation-lambda" style="border: 1px solid gray; zoom:80%;"/>  

15. Click **Save**.
16. For **Transfer to Flow**, select a flow you want to move the user to. For example, save the following JSON in a file, import this flow to **Flows**, and add **Queue** details for routing: [KVSQueueFlow.json](#kvsqueueflowjson). 
17. To use agent dispositions, configure the **Set Event Flow** block with **Disconnect flow for Agent UI** hook by importing [this flow](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/master/AmazonConnect/flows/voice/DispositionFlow.json){:target="_blank"} and selecting it. If not, you can delete the block and connect the remaining blocks to the disconnect block.  

    !!! note
        The disposition saving logic is at your discretion. Implement as per your use case. Some examples are:  
        * Use a Lambda to store it within a document database.  
        * Pass the data via a webhook to a third-party CRM.  

    <img src="../images/transfer-to-flow-36.png" alt="transfer-to-flow" title="transfer-to-flow" style="border: 1px solid gray; zoom:80%;"/>  

18. Click **Save**, and publish the flow.  
<img src="../images/save-publish-flow-37.png" alt="save-publish-flow" title="save-publish-flow" style="border: 1px solid gray; zoom:80%;"/>  

### Attaching Contact Flow to Phone Number 

1. Click **Channels** > **Phone numbers**.  
<img src="../images/channel-phone-number-38.png" alt="channel-phone-number" title="channel-phone-number" style="border: 1px solid gray; zoom:80%;"/>  

2. Select the **Phone Number** to attach to the flow. If you don’t have a number, go through [How to get an Amazon Connect phone number in your current country](https://docs.aws.amazon.com/connect/latest/adminguide/get-connect-number.html){:target="_blank"} to claim a phone number.  
<img src="../images/select-phone-number-39.png" alt="select-phone-number" title="select-phone-number" style="border: 1px solid gray; zoom:80%;"/>  

3. Click the dropdown list to select the **Contact flow**.  
<img src="../images/select-contact-flow-40.png" alt="select-contact-flow" title="select-contact-flow" style="border: 1px solid gray; zoom:80%;"/>  

4. Click the **AgentAssist flow** you created.  
<img src="../images/click-created-flow-41.png" alt="click-created-flow" title="click-created-flow" style="border: 1px solid gray; zoom:80%;"/>  

5. Click **Save.**  

## Test Your Integration 

1. Open **Agent Workspace** from the home screen of your **Amazon Connect** instance.  
<img src="../images/agent-workspace-42.png" alt="agent-workspace" title="agent-workspace" style="border: 1px solid gray; zoom:80%;"/>  

2. Change the agent status to **Available**. All the third-party applications created in the earlier steps will be visible on the right side under the **Apps** dropdown.  
<img src="../images/available-status-43.png" alt="available-status" title="available-status" style="border: 1px solid gray; zoom:80%;"/>  

3. Call the **Amazon Connect** number. Once the incoming call lands into the agent desktop, accept it.
4. Click the **Apps** section, and open the third-party application created earlier.  
<img src="../images/apps-third-party-44.png" alt="apps-third-party" title="apps-third-party" style="border: 1px solid gray; zoom:80%;"/>  

    * The **Agent AI widget** renders on the right side of the screen.  
    <img src="../images/agent-ai-widget-45.png" alt="agent-ai-widget" title="agent-ai-widget" style="border: 1px solid gray; zoom:80%;"/>  

    * The Agent AI widget listens to all the user and agent conversation, and the transcript is visible on the **Transcript** tab of the widget.  
    <img src="../images/transcript-tab-46.png" alt="transcript-tab" title="transcript-tab" style="border: 1px solid gray; zoom:80%;"/>  

    * Based on the **use case/dialog task** configuration in your Agent AI portal, real-time suggestions appear on the **Assist Home** tab of the widget from the user message in the transcription.  
    <img src="../images/assist-home-tab-47.png" alt="assist-home-tab" title="assist-home-tab" style="border: 1px solid gray; zoom:80%;"/>  

    * Once the call is disconnected, a call summary appears. The agent can modify the summary or copy it to save it into the CRM.  
    <img src="../images/call-summary-48.png" alt="call-summary" title="call-summary" style="border: 1px solid gray; zoom:80%;"/>   

## KVSQueueFlow.json

```
{
    "Version": "2019-10-30",
    "StartAction": "368dcb0e-e4c5-4301-bad0-6ec9cb4xxxxx",
    "Metadata": {
        "entryPointPosition": {
            "x": 48,
            "y": 99
        },
        "ActionMetadata": {
            "f8cb2217-5e95-4ca4-a2d1-1cfdc3exxxxx": {
                "position": {
                    "x": 1186,
                    "y": 287
                }
            },
            "06ffce3e-77e0-42c7-b872-8fa73b8xxxxx": {
                "position": {
                    "x": 910,
                    "y": 96
                }
            },
            "368dcb0e-e4c5-4301-bad0-6ec9cb4xxxxx": {
                "position": {
                    "x": 186,
                    "y": 93
                },
                "parameters": {
                    "QueueId": {
                        "displayName": "BasicQueue"
                    }
                },
                "queue": {
                    "text": "BasicQueue"
                }
            },
            "6992aaaf-4140-4f3f-beb5-a638d7fxxxxx": {
                "position": {
                    "x": 520,
                    "y": 79
                },
                "parameters": {
                    "EventHooks": {
                        "DisconnectAgentUI": {
                            "displayName": "Disposition Flow"
                        }
                    }
                }
            }
        },
        "Annotations": [],
        "name": "KVSQueueFlow",
        "description": "",
        "type": "contactFlow",
        "status": "published",
        "hash": {}
    },
    "Actions": [
        {
            "Parameters": {},
            "Identifier": "f8cb2217-5e95-4ca4-a2d1-xxxxx3e02dce",
            "Type": "DisconnectParticipant",
            "Transitions": {}
        },
        {
            "Parameters": {},
            "Identifier": "06ffce3e-77e0-42c7-b872-8fa73b8xxxxx",
            "Type": "TransferContactToQueue",
            "Transitions": {
                "NextAction": "f8cb2217-5e95-4ca4-a2d1-1cfdc3exxxxx",
                "Errors": [
                    {
                        "NextAction": "f8cb2217-5e95-4ca4-a2d1-1cfdc3exxxxx",
                        "ErrorType": "QueueAtCapacity"
                    },
                    {
                        "NextAction": "f8cb2217-5e95-4ca4-a2d1-1cfdc3exxxxx",
                        "ErrorType": "NoMatchingError"
                    }
                ]
            }
        },
        {
            "Parameters": {
                "QueueId": "arn:aws:connect:us-east-1:2748635xxxxx:instance/97c94b3a-7d46-4680-b2ee-ae23086xxxxx/queue/e7c6d05e-b7f2-43d6-abe9-aa861e2xxxxx"
            },
            "Identifier": "368dcb0e-e4c5-4301-bad0-6ec9cb4xxxxx",
            "Type": "UpdateContactTargetQueue",
            "Transitions": {
                "NextAction": "6992aaaf-4140-4f3f-beb5-a638d7fxxxxx",
                "Errors": [
                    {
                        "NextAction": "6992aaaf-4140-4f3f-beb5-a638d7fxxxxx",
                        "ErrorType": "NoMatchingError"
                    }
                ]
            }
        },
        {
            "Parameters": {
                "EventHooks": {
                    "DisconnectAgentUI": "arn:aws:connect:us-east-1:2748635xxxxx:instance/97c94b3a-7d46-4680-b2ee-ae23086xxxxx/contact-flow/2649a757-5612-4e81-8794-56c760bxxxxx"
                }
            },
            "Identifier": "6992aaaf-4140-4f3f-beb5-a638d7fxxxxx",
            "Type": "UpdateContactEventHooks",
            "Transitions": {
                "NextAction": "06ffce3e-77e0-42c7-b872-8fa73b8xxxxx",
                "Errors": [
                    {
                        "NextAction": "f8cb2217-5e95-4ca4-a2d1-1cfdc3exxxxx",
                        "ErrorType": "NoMatchingError"
                    }
                ]
            }
        }
    ]
}
```
