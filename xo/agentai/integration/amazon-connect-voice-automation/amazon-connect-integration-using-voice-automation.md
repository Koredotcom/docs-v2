# Amazon Connect Integration with Kore using Amazon External Voice Connector (Voice Automation)

This document outlines the steps for Kore users to integrate Kore Voice Automation with Amazon Connect, leveraging Amazon's external voice transfer capabilities. This setup enables voice transfers from Amazon Connect to a Voice Gateway and back, facilitating a seamless call experience through the Amazon Connect desktop.

## Architecture Diagram

<img src="../images/architecture-diagram.png" alt="architecture-diagram" title="architecture-diagram" style="border: 1px solid gray; zoom:80%;">  

## Prerequisites

* External voice transfer connectors per account with AWS Connect Instance enabled.
* A Kore voice AI Agent trained with few use cases. 

!!! note

    Amazon Connect external voice pricing is subject to change. Refer to the [Amazon Connect External Voice Pricing Changes](https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-connect-external-voice-pricing-changes/){:target="_blank"} document for the latest information. 

## Setup Instructions

### **1. Enabling External Voice Transfer in Amazon Connect**

Before setting up the integration, you must enable the "External voice systems" option in your Amazon Connect instance. Refer to [Set up Amazon Connect external voice transfer to an on-premise voice system](https://docs.aws.amazon.com/connect/latest/adminguide/external-voice-transfer.html){:target="_blank"} for more information. 

* **Service Quota Increase**: Submit a **Service Quota Increase** request to Amazon Connect. This feature is enabled only after Amazon Connect approves your request. 
* **Accessing the Option**: Once approved, the "External voice systems" option becomes visible in your Amazon Connect console.  
<img src="../images/external-voice-systems-1.png" alt="external-voice-systems" title="external-voice-systems" style="border: 1px solid gray; zoom:80%;">  

### **2. Creating an External Voice Transfer Connector** 

After enabling the feature, create a connector under **Voice transfer integrations** to link Amazon Connect with your Voice Gateway.  

* **Navigate to Connector Creation**: Click the **External voice systems** option to access the connector creation screen.  
<img src="../images/specify-connector-details-2.png" alt="specify-connector-details" title="specify-connector-details" style="border: 1px solid gray; zoom:80%;">  

* **Connector Configuration**:
    * **Name**: Provide any desired name for the connector.
    * **Connector destination type**: Select **audio code** from the dropdown list.
    * **Voice system type**: Select one or multiple options; it doesn't affect the functionality. 
    * **Encryption**: Select **Disabled**.  
    * **Logging**: Select the option(s) to view the corresponding log in Connector Logs. It is recommended to select both the options.  
* **Host and Port Details**: After creation, the connector configuration displays the IP address of the host, the protocol, and the port. This port should correspond to your Voice Gateway environment.
* The final configuration appears as shown in the following screenshot:  
<img src="../images/test-kore-connector-3.png" alt="test-kore-connector" title="free text" style="border: 1px solid gray; zoom:80%;">  

### **3. Configuring the Amazon Connect Flow**  

The next step involves modifying your Amazon Connect flow to utilize the newly created external voice connector.  

* **Add "Transfer to Phone Number" Node**: Within your Amazon Connect flow, add a "Transfer to phone number" node.  
<img src="../images/transfer-to-phone-number-node-4.png" alt="transfer-to-phone-number-node" title="transfer-to-phone-number-node" style="border: 1px solid gray; zoom:80%;">  

* **Select External Voice System**: Instead of entering a phone number, select the **External voice system** option.
* **Attach Connector**: Attach the specific connector you created in the previous step.
* **Enable "Resume flow after disconnect"**: Set this option to "Yes." This step ensures that after the call ends with the third-party system (Voice Gateway), the call is transferred back to Amazon Connect, facilitating a continuous flow and correlation between Amazon Connect and the Kore system.  
<img src="../images/destination-arn-5.png" alt="destination-arn" title="destination-arn" style="border: 1px solid gray; zoom:80%;">  

### **4. Configuring Contact Center AI (Kore Side Configuration)** 

On Kore side, specific configurations are required in Contact Center AI (CCAI) to receive and manage calls transferred from Amazon Connect.  

* **Create New Configuration**: In CCAI, create a new configuration (or use an existing one).  
* **Whitelist IP Address**: The most critical step here is to whitelist the IP address provided by Amazon Connect. This IP address is essential for allowing communication from Amazon Connect to Kore. Check with Amazon Connect documentation or Support for the details on this IP address.  
* **DID Number**: Provide the same Direct Inward Dialing (DID) number that will be used for the transfer (which was entered in the **Transfer to phone number** node in the previous step).  
<img src="../images/configure-sip-trunk-6.png" alt="configure-sip-trunk" title="configure-sip-trunk" style="border: 1px solid gray; zoom:80%;">  

* **Attach to Start Flow**: Once the configuration is complete, attach this number to the relevant Experience Flow within Kore.  
<img src="../images/start-flows-7.png" alt="start-flows" title="start-flows" style="border: 1px solid gray; zoom:80%;">   

### **End-to-End Call Flow** 

The following steps describe the call flow after this integration:  

1. A call originates in Amazon Connect by calling the Amazon Connect number.  
<img src="../images/amazon-connect-number-8.png" alt="amazon-connect-number" title="amazon-connect-number" style="border: 1px solid gray; zoom:80%;">  

    <img src="../images/call-originates-9.png" alt="call-originates" title="call-originates" style="border: 1px solid gray; zoom:80%;">  

2. The Amazon Connect flow transfers the call to Voice Gateway via the external voice connector. 
3. Kore CCAI handles the call. You can view the details of the call in the CCAI **Dashboard** > **Interactions** section.  
<img src="../images/ccai-dashboard-interaction-10.png" alt="ccai-dashboard-interaction" title="ccai-dashboard-interaction" style="border: 1px solid gray; zoom:80%;">  

4. After interaction with Kore, the call is transferred back to Amazon Connect.  
<img src="../images/transfer-back-to-amazon-11.png" alt="transfer-back-to-amazon" title="transfer-back-to-amazon" style="border: 1px solid gray; zoom:80%;">  

This setup provides a robust solution for leveraging our voice automation capabilities within your Amazon Connect Contact Center environment.

## Metadata Passing from Kore to Amazon Connect (Additional Feature)

Currently, Amazon Connect does not support SIP header extraction. To pass metadata from Kore to Amazon Connect, use the following alternative AWS components: 

* API Gateway
* Lambda function
* DynamoDB Table
* CloudWatch (for debugging)

### Architecture 

1. Create a **DynamoDB** table with **contactId** (Amazon Connect Contact Id) as a partition key.  
2. Create an API Gateway and invoke from outside AWS (via the Kore **Dialogtask** > **Service Node**, before agent transfer) to store data in the DynamoDB table.  
3. To call this API, the Amazon Connect contact ID must be passed as one of the query parameters. This ID is retrieved from the SIP headers data sent from Amazon Connect to Kore.  
4. Write two lambda functions—One for the API Gateway business logic and the other for its authentication.
5. In the Amazon Connect flow, invoke another lambda function to extract these metadata saved in DynamoDB in the last step.  
6. These metadata values are then set as contact attributes within the flow.  

!!! note

    A total of three lambda functions are required for this use case. 

### AWS Side Configuration

#### Create a DynamoDB Table

**Name**: koreCcSessions

**Partition Key**: contactId

<img src="../images/create-table-12.png" alt="create-table" title="create-table" style="border: 1px solid gray; zoom:80%;">   

#### Create Three Lambda Functions

You must create three lambda functions for three different purposes. All these lambda function runtimes should be in:

**Runtime**: **python**.

The recommended lambda function name and the internal code is given in the following section.  
Once you paste the lambda code, deploy the latest version of the code. Ensure your first and third lambda functions have **DynamoDB** full access. (You can **add permissions** inside the IAM role of the lambda function.) 

1. **koreStoreSessionMetadata**: This lambda function is used to expose an API Gateway (Trigger) to get the metadata from Kore Platform and store it in the DynamoDB table. Copy and deploy the code from [this link](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/master/AmazonConnect/Metadata%20passing%20via%20External%20voice%20connector/lambdas/koreStoreSessionMetadata.py){:target="_blank"}.  

2. **AuthenticateBeforeStoringInDynamoDB**: This lambda function is used to add an authentication layer (Authorizer) on the API Gateway mentioned in the previous lambda function (koreStoreSessionMetadata). Copy and deploy the code from [this link](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/master/AmazonConnect/Metadata%20passing%20via%20External%20voice%20connector/lambdas/AuthenticateBeforeStoringInDynamoDB.py){:target="_blank"}.  

3. **koreRetrieveSessionMetadata**: This lambda is invoked in the Amazon Connect Contact Flow after the call gets disconnected from Kore and is handed over to Amazon Connect. This lambda returns all the metadata stored in the DynamoDB table using the first lambda. Copy and deploy the code from [this link](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/master/AmazonConnect/Metadata%20passing%20via%20External%20voice%20connector/lambdas/%20koreRetrieveSessionMetadata.py){:target="_blank"}.  

#### Create an API Gateway 

1. Create a REST API Gateway with the default configuration:  
    <img src="../images/create-rest-api-13.png" alt="create-rest-api" title="create-rest-api" style="border: 1px solid gray; zoom:80%;">  

2. Create an API resource with the **Resource path** as “/kore-metadata.” Click **Create resource**:  
    <img src="../images/create-resource-14.png" alt="create-resource" title="create-resource" style="border: 1px solid gray; zoom:80%;">  

3. Create an **API Method** with the following details: 
    1. **Method type**: POST
    2. **Integration type**: Lambda function (koreStoreSessionMetadata)
    3. Turn on the **Lambda proxy integration** toggle.
    4. Select the lambda function (**koreStoreSessionMetadata**).
    5. Click **Create Method**.  
    <img src="../images/create-method-15.png" alt="create-method" title="create-method" style="border: 1px solid gray; zoom:80%;">  

4. The created method appears as shown in the following screenshot:  
    <img src="../images/resources-16.png" alt="resources" title="resources" style="border: 1px solid gray; zoom:80%;">   

5. To enable authentication for this API Gateway, you need **Authorizers**. Create a new Authorizer with the following details: 
    1. **Authorizer name**: koreClientAuth
    2. **Authorizer type**: Lambda
    3. **Lambda function**: AuthenticateBeforeStoringInDynamoDB
    4. **Lambda Event Payload**: Select **Token**
    5. **Token source**: authorizationToken
    6. **Token validation - optional**: Enter the value you want to use as Token for the API authentication. You need the same value to store in the Env Variable of **AuthenticateBeforeStoringInDynamoDB** Lambda function with the key as **AUTH_TOKEN**.
    7. Click **Create authorizer**.  
        <img src="../images/create-authorizer-17.png" alt="create-authorizer" title="create-authorizer" style="border: 1px solid gray; zoom:80%;">  

        <img src="../images/authorizer-details-18.png" alt="authorizer-details" title="authorizer-details" style="border: 1px solid gray; zoom:80%;">  

6. Once the **koreClientAuth** Authorizer is created, add this as part of authentication for the API Resource and method you created. 
    8. Click **Edit method request**.  
    9. Under **Authorization**, select **Token authorizers** as **koreClientAuth**.  
    10. Click **Save**.  
    <img src="../images/edit-method-details-19.png" alt="edit-method-details" title="edit-method-details" style="border: 1px solid gray; zoom:80%;">  

7. Click **Deploy API**.  
    <img src="../images/deploy-api-20.png" alt="deploy-api" title="deploy-api" style="border: 1px solid gray; zoom:80%;">  

#### Modify the Contact Flow

Open the Amazon Connect instance and add the last lambda function (koreRetrieveSessionMetadata) inside the flow.  
<img src="../images/aws-lambda-21.png" alt="aws-lambda" title="aws-lambda" style="border: 1px solid gray; zoom:80%;">  

**Modify the Amazon Connect flow**: 

* Name this flow as **TransfertoKore&MetadataPassing**. (You will reference this name later during the Agent AI integration step.)   
* Add an **AWS Lambda function** node after the **Transfer to phone number** node. 
* In the **AWS Lambda function**: 
    * Select the **Invoke Lambda** function (koreRetrieveSessionMetadata), which was added in the last step. 
    * **Add a parameter**:
        * Destination Key: contactId (enter this name)
        * Value: set dynamically
            * Namespace: System
            * Key: Contact id
    * **Response Validation**: JSON	
    * **Save** the configuration.
* Add one **Set contact attribute** node. In this node:
    * Set attributes on: Current Contact
    * Add another attribute
        * Namespace: User defined
        * Key: **customData**
        * Value to be **Set dynamically**
            * Namespace: External
            * Key: body
    * **Save** the configuration. 
* Connect all the nodes, and you can add a **Play prompt** node to understand if there is any error in the flow.
* **Save** and **Publish** the flow.  
* The modified Amazon Connect flow appears as shown in the following screenshot:
    <img src="../images/modified-amazon-connect-flow.png" alt="modified-amazon-connect-flow" title="modified-amazon-connect-flow" style="border: 1px solid gray; zoom:80%;">   

    !!! note

        You can also import the contact flow (.JSON file) from this [link](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/refs/heads/master/AmazonConnect/Metadata%20passing%20via%20External%20voice%20connector/contact%20flows/transfertokore_sipconnector_metadata_passing.json){:target="_blank"} (right-click and save as **.JSON**).  

### **Kore Side Configuration**

#### **In CCAI**

* **Start Flows**  

    1. Open **Conditional Flow**.
    2. Add the following code snippet in a **Script node** immediately after the **Start node**: 

        ```
        setCallFlowVariable('sipHeaders', 
        context.BotUserSession.channels[0].handle.sipHeaders); var 
        headers = getCallFlowVariable('sipHeaders'); 
        userSessionUtils.put('sipHeaders', headers); 
        ```

    3. Click **Test** to test the flow.  
    <img src="../images/test-the-flow-22.png" alt="test-the-flow" title="test-the-flow" style="border: 1px solid gray; zoom:80%;">  

    4. Identify the **Automation bot** used in Conditional Flow. You will need it in the next step when configuring the Botbuilder.  
    <img src="../images/automation-bot-23.png" alt="automation-bot" title="automation-bot" style="border: 1px solid gray; zoom:80%;">   

* **Agent Transfer**  
    1. Go to **Settings** > **Integrations** > **Agent Transfer** > **Voice**.
    2. Click **SIP Transfer**.
    3. Select **SIP BYE** from the **SIP Transfer Method** list.
    4. Click **Save** to save the configuration. 

#### In Botbuilder

Ensure the Automation bot used in the CCAI Conditional Flow includes an Agent Transfer dialog task. 

1. Open the **Agent Transfer** Dialog Task.
2. Add a **Script node** and paste the following code to extract **contactId** (Amazon Connect contact Id) from the SIP headers: 
    ```
    try{ 
    var headers = context.session.UserSession.sipHeaders; 
    if(headers){ 
         var contactId = headers.find(o => o.name === 
    'X-Amzn-ConnectContactId'); 
         if(contactId){ 
             BotUserSession.put("ContactId", contactId.value); 
    } 
    } 
    }catch(err){
    koreDebugger.log("Error is:"+err);
    }
    ```

3. Add a **Service node** immediately after the **Script node** to make a REST API request to the API Gateway configured inside AWS in the earlier steps.  
<img src="../images/add-service-node-24.png" alt="add-service-node" title="add-service-node" style="border: 1px solid gray; zoom:80%;">  

4. Click **Define Request** in the **Service node**.  

**Add the Request URL**: Add the **API Gateway URL** with **contactId** as query parameter. Get this by accessing your first lambda function (“koreStoreSessionMetadata”) > **Configuration** > **Trigger**.  
<img src="../images/core-store-session-metadata-25.png" alt="core-store-session-metadata" title="core-store-session-metadata" style="border: 1px solid gray; zoom:80%;">   

**Example**: `https://ubpl0dxgq1.execute-api.us-east-1.amazonaws.com/dev/kore-metadata?contactId={{context.session.BotUserSession.ContactId}}`  

* **Method**: POST  
* **Headers**:  
    * **Content-Type**: application/json   
    * **authorizationToken**: “abc123” (Add your token)  
<img src="../images/define-request-26.png" alt="define-request" title="define-request" style="border: 1px solid gray; zoom:80%;">  

* **Body**:
    * Add your **metadata**   
**Example**:   
{"x_metadata":"Hello from Kore", "kore-instanceSessionId":"{{context.session.BotUserSession.lastMessage.messagePayload.instanceSessionId}}"}  
<img src="../images/define-request-body-27.png" alt="define-request-body" title="define-request-body" style="border: 1px solid gray; zoom:80%;">  

        !!! note

            Pass the **<code>kore-instanceSessionId</code>** key and its value in the above specified format. This is required for the Agent AI widget to retrieve the user’s bot history. You may also include additional data, as needed. 
            
        <img src="../images/define-request-28.png" alt="define-request" title="define-request" style="border: 1px solid gray; zoom:80%;">   

    * **Save** the configuration.
    * **Publish** the bot. 

### Validate Your Metadata

When you call the Amazon Connect number, the call routes to Kore Automation and, after agent transfer, returns to the Amazon Connect desktop. 

To view the metadata, check the **Flow CloudWatch** logs or use **Contact Search**:

1. Sign in to **Amazon Connect**.
2. Click **Analytics and optimization** > **Contact search**.  
<img src="../images/analytics-and-optimization-29.png" alt="analytics-and-optimization" title="analytics-and-optimization" style="border: 1px solid gray; zoom:80%;">  

3. A list of conversations is displayed. You can also filter the results by contact ID.  
<img src="../images/contact-search-30.png" alt="contact-search" title="contact-search" style="border: 1px solid gray; zoom:80%;">  

4. When you open a contact’s details, the metadata appears as contact attributes.  
<img src="../images/contact-details-31.png" alt="contact-details" title="contact-details" style="border: 1px solid gray; zoom:80%;">  

## Passing Metadata as Custom Data to Agent AI

To integrate Agent AI as a third-party application (TPA) into the Amazon Connect workspace, follow [this](../amazon-connect-voice/amazon-connect-with-agentai-voice-via-aws-third-party-applications.md){:target="_blank"} document.

### Modify the Amazon Connect flow 

After integrating Agent AI as a TPA in Amazon Connect, you must have created another contact flow (for example, *KVSAgentAssist*). Add this flow to the previously created or imported flow (*TransfertoKore&MetadataPassing*).” 

The final screenshot of the contact flow appears as shown below: 
<img src="../images/contact-flow-final-screenshot.png" alt="contact-flow-final-screenshot" title="contact-flow-final-screenshot" style="border: 1px solid gray; zoom:80%;">  

Any metadata passed from Kore to Amazon Connect in the previous steps becomes available in the Agent AI widget after it loads.

To pass metadata from the Amazon Connect contact attribute named ***customData***, the data is collected at runtime and passed to the Agent AI widget during its creation.

You can access this custom data in the Agent AI widget under the following path:  
 `context.session.UserContext.customData`

After accepting the call and loading the Agent AI widget, you can print the custom data as shown below:
<img src="../images/printing-custom-data.png" alt="printing-custom-data" title="printing-custom-data" style="border: 1px solid gray; zoom:80%;">  

