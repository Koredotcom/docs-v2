
--8<-- "includes/digital-channels-back-link.md"

# Amazon Connect Chat

This article describes the integration process of Amazon Connect Chat with the Platform.


## Step 1: Create and Configure AWS Lambda for Amazon Connect Integration

Create an AWS Lambda function that works with Amazon Connect and messages to the Platform via Webhook.


### 1.1 Create a New Lambda Function



1. Log in to the AWS Management Console → navigate to Services → Lambda → Functions.
2. Click “Create function.”
3. Under Function creation options, choose:
    * Author from scratch
    * Function name: `AmazonConnect_SendContactId`
    * Runtime: `Node.js 22.x`
    * Architecture: `x86_64` (default)
    * Permissions: Choose Create a new role with basic Lambda permissions
4. Click Create function.


### 1.2: Add Lambda Function Code



1. After Lambda is created, scroll down to the Code tab.
2. In the file list, open index.mjs.
3. Delete the sample code.
4. Paste the following Lambda Code (for example, the `.mjs` code that handles SNS → the Platform forwarding).
5. Click Deploy.

!!! note

    Make sure the file name is `index.mjs` (not `.js`), and the handler in configuration matches `index.handler`.


**Code**:


```
import {
 ConnectClient,
 StartContactStreamingCommand,
 CreateParticipantCommand
} from "@aws-sdk/client-connect";

import https from 'https';
import url from 'url';

const connect = new ConnectClient({});

export const handler = async (event) => {
 const contactId = event.Details.ContactData.ContactId;
 const instanceId = event.Details.ContactData.InstanceARN.split("/").pop();

 const response = {
   statusCode: 200,
   success: true,
   contactId,
   instanceId
 };
 try {
   const streamingResult = await enableContactStreaming(contactId, instanceId);
   response.streamingId = streamingResult.StreamingId;
   await sendContactDetailsToKoreAI(contactId, instanceId);
   return response;
 } catch (error) {
   console.error("❌ Error in Lambda execution:", error);
   return {
     statusCode: 500,
     success: false,
     error: error.message,
     contactId
   };
 }
};

// --- Helpers ---

async function enableContactStreaming(contactId, instanceId) {
 const params = {
   ContactId: contactId,
   InstanceId: instanceId,
   ChatStreamingConfiguration: {
     StreamingEndpointArn: process.env.SNS_TOPIC_ARN
   }
 };
 return await connect.send(new StartContactStreamingCommand(params));
}

async function sendContactDetailsToKoreAI(contactId, instanceId) {
 return new Promise((resolve) => {
   const payload = JSON.stringify({
     ContactId: contactId,
     InstanceId: instanceId,
     Type: "InitializeConnection"
   });
   const KoreWebhook = process.env.KORE_WEBHOOK_URL;
   const options = {
     hostname: url.parse(KoreWebhook).hostname,
     port: url.parse(KoreWebhook).port,
     path: url.parse(KoreWebhook).path,
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Content-Length': Buffer.byteLength(payload), // safer in ESM
       'Verification-Token': process.env.KORE_WEBHOOK_VERIFICATION_TOKEN
     },
     timeout: 10000
   };

   const req = https.request(options, (res) => {
     let data = '';
     res.on('data', chunk => data += chunk);
     res.on('end', () => {
       if (res.statusCode === 200) {
         console.log('✅ Message forwarded to Kore.ai');
         try {
           resolve(JSON.parse(data));
         } catch {
           resolve(null);
         }
       } else {
         console.error('❌ Kore.ai error:', res.statusCode, data);
         resolve(null);
       }
     });
   });

   req.on('error', error => {
     console.error('❌ Request error:', error);
     resolve(null);
   });

   req.on('timeout', () => {
     req.destroy();
     console.error('⚠️ Request timed out');
     resolve(null);
   });

   req.write(payload);
   req.end();
 });
}
```



### 1.3: Add Environment Variables



1. Go to the Configuration tab → select Environment variables.
2. Click Edit → Add environment variable.
3. Add the following 3 variables:

    <table>
    <tr>
    <td>
    <strong>Variable Name</strong>
    </td>
    <td><strong>Description</strong>
    </td>
    <td><strong>Example Value</strong>
    </td>
    </tr>
    <tr>
    <td><code>KORE_WEBHOOK_URL</code>
    </td>
    <td>Webhook URL from the Platform Amazon Connect Channel Configuration page
    </td>
    <td><code>https://*****.ngrok-free.app/adapter/hooks/amazonconnect/st-xxxx</code>
    </td>
    </tr>
    <tr>
    <td><code>KORE_WEBHOOK_VERIFICATION_TOKEN</code>
    </td>
    <td>Verification Token from the Platform Channel Configuration
    </td>
    <td><code>17ceed4151e38bae8d16cd547e0144203***********5e1eac7d888f6dc092a</code>
    </td>
    </tr>
    <tr>
    <td><code>SNS_TOPIC_ARN</code>
    </td>
    <td>ARN of the SNS topic created in AWS
    </td>
    <td><code>arn:aws:sns:us-east-1:******:KoreChatStream</code>
    </td>
    </tr>
    </table>




1. Click Save.


### 1.4: Connect Lambda to Amazon Connect



1. Go to Amazon Connect Console and click your Instance alias.
2. In the left panel, choose Flows.
3. Scroll down to AWS Lambda functions section.
4. Click Add Lambda function.
5. Choose your function name (Ex `AmazonConnect_SendContactId`) and click Add Lambda function.
6. Now your Amazon Connect flows can invoke this Lambda.


### 1.5: Add IAM Permissions


**Open the Lambda Role**



1. Go to IAM → Roles.
2. In the search box, enter the role name linked to your Lambda function. 
 Example: `AmazonConnect_SendContactId-role-********`.


**Edit Permissions**



1. Open the role and click Permissions tab.
2. Under Permission policies, locate and click `AWSLambdaBasicExecutionRole-xxxxxx`.
3. Click JSON tab and then Edit.
    1. Add the following policy statement inside the `"Statement"` array:

        ```
        {
          "Effect": "Allow",
          "Action": [
            "connect:*"
          ],
          "Resource": "*"
        }
        ```


1. Click Review policy and Save changes. 

!!! note

    For better security, you can later replace `"Resource": "*"` with specific Connect instance ARNs.


## Step 2: Create Amazon SNS Topic for Streaming

Create and configure an Amazon SNS topic for streaming chat messages from Amazon Connect to the Platform via HTTPS.


### 2.1: Create SNS Topic



1. Log in to the AWS Management Console.
2. Navigate to Amazon SNS → Topics.
3. Click Create topic.
4. Select Standard as the topic type (Standard topics are preferred for real-time streaming and higher throughput.)
5. Provide:
    * Name: Ex - `AmazonConnect_Streaming_Topic` (or similar)
    * Display name: optional.
6. Leave other fields as default for now.


### 2.2: Set Access Policy 



1. Scroll to the Access policy section.
2. Expand the Advanced tab. Remove or ensure the following JSON snippet doesn't exists.
 
    ```
    "Condition": {
    "StringEquals": {
      "AWS:SourceAccount": "**************"
      }
    }
    ```



3. This ensures Amazon Connect or Lambda within your account can publish messages securely to this SNS topic.
4. Click Create topic.


### 2.3: Copy Topic ARN



1. After creation, you’ll be redirected to the Topic details page.
2. Under Details, copy the Topic ARN - it looks like this: `arn:aws:sns:us-east-1:***********:AmazonConnect_Streaming_Topic`
3. Store this ARN safely - you’ll use it as an environment variable in your AWS Lambda function:
    * Variable name: `SNS_TOPIC_ARN`
    * Value: *(the ARN you copied)*


### 2.4: Create HTTPS Subscription

Create a subscription so SNS can forward messages to the Platform via HTTPS. 



1. On the Topic details page, click Create subscription.
2. Configure the fields as follows:

    <table>
    <tr>
    <td>
    <strong>Field</strong>
    </td>
    <td><strong>Value</strong>
    </td>
    </tr>
    <tr>
    <td><strong>Protocol</strong>
    </td>
    <td><code>HTTPS</code>
    </td>
    </tr>
    <tr>
    <td><strong>Endpoint</strong>
    </td>
    <td>Paste the Webhook URL copied from your the Platform Amazon Connect Channel Configuration page (fpr example, <code>https://abc123.ngrok-free.app/adapter/hooks/amazonconnect/st-e6895fc9-8012-5003-be9b-ab6df08f8eb6</code>)
    </td>
    </tr>
    </table>




3. Scroll to Subscription filter policy and enable the toggle for “Enable filter policy.”
4. Click “Message attributes” → then Enable → and paste the below JSON filter: 

    ```
    {
        
        "Type": [
            "MESSAGE"
        ],
        "ParticipantRole": [
            "CUSTOMER"
        ]
        }
    ```


5. Purpose: This ensures only chat messages of type `MESSAGE` from the `CUSTOMER` participant role are forwarded, reducing noise and unnecessary webhook calls.
6. Click Create subscription.


### 2.5: Verify Subscription Status



1. Return to Amazon SNS → Subscriptions.
2. Locate your new subscription.
3. Check the Status column:
    * It shows “Confirmed” (SNS automatically sends a confirmation request to the Platform webhook endpoint; the Platform responds to confirm it.)
4. If status remains “Pending confirmation,” ensure:
    * The Webhook endpoint is reachable (not blocked by firewall).
    * The Platform channel configuration matches the SNS subscription domain.


## Step 3: Amazon Connect - Create Contact Flow


**Prerequisites**



* You must have admin/flow-edit access to the Amazon Connect instance.
* Lambda function already created and added to the Connect instance (see earlier docs).
* SNS/topic, IAM, and any webhooks used by Lambda must be working.
* Make sure your browser popup blockers allow the Connect console to open the instance URL.

**Reference Snapshot**


<img src="../images/aws-flow.png" alt="Amazon Connect Chat" title="Amazon Connect Chat" style="border: 1px solid gray; zoom:70%;">


### 3.1: Open Flow Builder



1. Login to AWS Console → Amazon Connect → Instances.
2. Click the Instance Access URL for your instance (this opens the Connect admin UI).
3. In the left navigation, open Routing → Flows.
4. Click Create flow (top-right) and give it a name (example: `KoreChatFlowPOC1`) and a description.


### 3.2: Design the flow on the canvas

The screenshot shows a simple flow sequence: `Entry → Set logging behavior → Play prompt → Invoke Lambda → Wait → Disconnect`. Recreate the same layout:



1. Entry (Start).
    * The designer adds the start block automatically.
2. Set logging behavior (optional).
    * From the Utilities/Customer blocks, drag Set logging behavior to the canvas.
    * Connect Start → Set logging behavior.
    * Configure (if needed) to enable contact-level logging for debugging.
3. Play prompt.
    * Drag Play prompt onto the canvas and connect `Set logging behavior → Play prompt`.
    * Configure message text (for example, `hello world`) or use an existing prompt resource.
4. Invoke AWS Lambda function.
    * Drag AWS Lambda block onto the canvas and connect the `Play prompt → Lambda` success path.
    * Click the Lambda block to configure:
        * Function ARN / name: select your pre-registered Lambda (for example, `AmazonConnect_SendContactId`).
        * Invocation type: `Synchronous` (use Sync if you want immediate response), otherwise Async (for fire-and-forget).
        * If the Lambda returns attributes you need in flow, map the response to Connect contact attributes.
5. Wait block (optional).
    * From Flow palette drag Wait and connect Lambda `Success → Wait`.
    * Configure a timeout (screenshot shows 15 minutes). Use this to keep the contact open until async work completes (if needed).
6. Disconnect.
    * Place a Disconnect block and connect `Wait → Disconnect` or connect Lambda error/time expired paths to `Disconnect`.
7. Error Paths.
    * Connect Lambda `Error` and PlayPrompt `Error` outputs to a fallback prompt or Disconnect. This ensures graceful handling.


### 3.3: Save and publish the flow



1. Click Save located in the top-right.
2. Click Publish to makes the flow active and selectable in routing profiles / contact handlers.





## Step 4: Retrieve the AWS Region, Access Key ID, and Secret

### 4.1 Retrieve AWS Region



1. Log in to your AWS Console.
2. Navigate to the **Amazon Connect** service.
3. The AWS Region is displayed in the upper-right corner of the console (for example, `us-east-1`).  
<img src="../images/retrieve-aws-region.png" alt="Amazon Connect Chat" title="Amazon Connect Chat" style="border: 1px solid gray; zoom:70%;">







### 4.2 Steps to Retrieve AWS Access Key ID and Secret



1. Sign in to the AWS Management Console.
2. Click your account name in the top-right corner and select **Security Credentials** from the drop-down menu.
3. In the **IAM** dashboard, click **Users** in the navigation pane.
4. Select the user for whom you want to find the access key ID.
5. Click the **Security Credentials** tab for that user.
6. Either create a new access key or use existing credentials if available.  

<img src="../images/aws-access-key.png" alt="Amazon Connect Chat" title="Amazon Connect Chat" style="border: 1px solid gray; zoom:70%;">
<img src="../images/aws-access-key2.png" alt="Amazon Connect Chat" title="Amazon Connect Chat" style="border: 1px solid gray; zoom:70%;">
<img src="../images/aws-access-key3.png" alt="Amazon Connect Chat" title="Amazon Connect Chat" style="border: 1px solid gray; zoom:70%;">





## Step 5: Configure the Amazon Connect Chat Channel within the Platform



1. Login to the Platform.
2. Go to **Channels & Flows** > **Channels** > **Digital** > **All** and select **Amazon Connect Chat**. The channel setup window opens. 
3. Click **Next** or select the **Configurations** tab.  
<img src="../images/aws-platform.png" alt="Amazon Connect Chat" title="Amazon Connect Chat" style="border: 1px solid gray; zoom:70%;">

4. Provide the following details you configured within Amazon Connect Chat: 
    * **AWS Region**: Enter the AWS region where your Amazon Connect instance is hosted.

    * **AWS Access Key ID**: IAM user's Access Key obtained from the Security credentials section in AWS IAM.

    * **AWS Secret Access Key**: Secret Access Key generated along with the above Access Key ID. 

    * **Custom Participant Display Name**: Display name set as per your organization’s preference.

10. Select **Yes** to enable the channel.
11. Click **Save**. The configuration saved message is displayed. 


After the channel is enabled and all configurations are verified, you can optionally publish the assistant to make it available for end-users, with the new channel. Learn more about [Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Platform, see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)