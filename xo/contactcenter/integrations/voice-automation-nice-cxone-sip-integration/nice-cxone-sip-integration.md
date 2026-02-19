# Voice Automation NiceCX (CXOne) – SIP Integration

## Introduction

This Technical Design Document (TDD) presents a comprehensive overview of integrating a Bot platform with the NICE CXOne platform using Studio Script.

This approach exclusively employs studio scripting to dispatch SIP headers, effectuate call transfer from the Bot, and seamlessly transition to NICE CXOne once the app flow concludes. A VAH (Virtual Agent Hub) license and proxy are not required to host a SIP back channel configuration.

This document provides a high-level solution design for the scripting-only approach, utilizing SIP actions from the studio.

## Supporting Documentation

| **DOCUMENT**             | **LINK**                                                                 |
|--------------------------|------------------------------------------------------------------------|
| SIP headers             | [SIP headers](https://help.incontact.com/Content/Studio/Actions/SIPPutHeader/SIPPutHeader.htm?Highlight=sip) |
| Voicebot Conversation   | [Voicebot Conversation](https://help.incontact.com/Content/Studio/Actions/VoiceBot%20Conversation/VoiceBot%20Conversation.htm) |
| Signal API              | [Admin API (NICEincontact.com)](https://developer.niceincontact.com/API/AdminAPI#/Contacts/Signal%20a%20Contact) |

## Architecture Diagram

<img src="../images/architecture.png" alt="Architecture Diagram" title="Architecture Diagram" style="border: 1px solid gray; zoom:70%;">

## Shared Responsibilities for the Script Integration Approach

| **Activity**                           | **CXOne CUSTOMER Responsibility**                                                                                              | **KORE Responsibility**                                                  |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **NICE CXOne Platform**                |                                                                                                                             |                                                                         |
| NICE SIP Trunk Configuration           | NA                                                                                                                          | NA                                                                      |
| DID Number Procurement                 | DID numbers range from NICE                                                                                                  | –                                                                       |
| Channel Specifications                 |                                                                                                                             |                                                                         |
| ACD Configuration                      | - Skills creation and mapping<br>- Hours Of Operation<br>- Points of Contact<br>- Campaign<br>- Customization of scripts (2) | - Minimal functionality Voice call scripts (2)<br>- Main Script: Accept call on DID<br>- Spawn Script: SIP Trunk the call to Kore |
| CXOne Studio Script                    | Customize Main and Spawn Scripts:<br>- Add SIP Headers<br>- Add DID                                                          | Share a sample of the main and spawn scripts:<br>[SIP Main Script](../voice-automation-nice-cxone-sip-integration/scripts/sip-main.pdf)<br>[SIP Spawn Script](../voice-automation-nice-cxone-sip-integration/scripts/sip-spawn.pdf) |
| Setup Authentication                   | Configure CXOne Authentication to access the CXOne Signal API from the Kore AI Agent.                                            |                                                                         |
| **Kore IVR Configuration**             |                                                                                                                             |                                                                         |
| Setup Kore IVR                         | Create an AI for Service account                                                                                                     |                                                                         |
| Setup Voice Channel                    |                                                                                                                             |                                                                         |
| SIP Trunk Configuration                | Network –<br>Incoming IP address: <br> **NICE IP address**<br>**216.20.235.167 – Dallas**<br>**216.20.237.167 – Los Angeles**<br>DID Number: *To be Procured & Provisioned*<br>Transport Type: TLS<br>Inbound Calls: Forward-to-PhoneNumber: *same as DID* | SIP URI (pre-filled)                                                    |
| SIP Trunk Attach Flow                   | Create a Flow<br>Attach SIP configuration to Experience flow                                                                |                                                                         |
| AI for Service App Flow                     | Create a AI Agent flow and read the SIP headers defined in the CXOne Studio script.                                              |                                                                         |
| Signal API to return call to CXOne      | Get CXOne Authentication in Kore Bot<br>Trigger Signal API from Bot – The domain in the URL should match the customer’s NICE account domain. |                                                                         |

## CXOne Channel Specifications

ACD configuration includes

1. Skills creation and mapping: 1 skill
2. Hours Of Operation: 1
3. Points of Contact: 1 (Phone)
4. Campaign: 1
5. Minimal functionality Voice call script: 2

## Kore Bot Platform

### Telephony Gateway Requisites

1. DID or TFN phone number to receive the call.
2. All SIP header information.
3. How to configure [Signal API](https://developer.niceincontact.com/API/AdminAPI#/Contacts/Signal%20a%20Contact) to return control to the NICE CXone platform.

## Kore SIP Trunk Configuration

1. [SIP Trunk Setup](../../../channels/voice-gateway/configure-voice-gateway.md#sip-trunk-setup).
2. [Attach Flow](../../../channels/voice-gateway/configure-voice-gateway.md#attach-a-flow).

## Configuration in CXOne Studio

1. Download the  [SIP Main Script](../voice-automation-nice-cxone-sip-integration/scripts/sip-main.pdf) and [SIP Spawn Script](../voice-automation-nice-cxone-sip-integration/scripts/sip-spawn.pdf) and save it locally.
2. Import the Studio Script as follows:
    1. Login to [NICE CXOne](https://cxone.niceincontact.com/auth/authorize?response_type=code&scope=openid&client_id=0b697ebb-4ea2-4052-b12b-d3cf12a53eca&redirect_uri=https%3A%2F%2Fcxone.niceincontact.com%2Fua%2Fv1%2Fcallback&nonce=fc3HdwV1yLMIP1AMgGkSnw%3D%3D) Studio with your credentials. [Learn more](https://help.nice-incontact.com/content/studio/gettingstarted/logintostudio.htm).
    2. On the **File** menu, select **Import from File**.  
        <img src="../images/cxone-file-open.png" alt="Import from File" title="Import from File" style="border: 1px solid gray; zoom:80%;"/>
    3. Open the saved studio script.  
        <img src="../images/save-studio-script.png" alt="Save Studio Script" title="Save Studio Script" style="border: 1px solid gray; zoom:80%;"/>  
        <img src="../images/entry-script.png" alt="Entry Script Flow" title="Entry Script Flow" style="border: 1px solid gray; zoom:80%;"/>  
        <img src="../images/spawn-place-call.png" alt="Place Call" title="Place Call" style="border: 1px solid gray; zoom:80%;"/>  
    4. In the SIP Main Script, select the **SIP Spawn Script** in the **Spawn** action.  
        <img src="../images/choose-script.png" alt="Choose Script" title="Choose Script" style="border: 1px solid gray; zoom:70%;">
    5. Add SIP headers in the **Sipputheader** actions.
        1. Enter the key starting with **X-*** in the **headerName**.
        2. Enter the value in the **headerValue**.  
            <img src="../images/sip-put-header.png" alt="Enter Header Value" title="Enter Header Value" style="border: 1px solid gray; zoom:70%;">
    6. Add the SIP Phone number in the **Placecall** action.
        1. Provide the SIP DID number you configured in the AI for Service SIP Trunk in the PhoneNumber property in the Placecall action.  
            <img src="../images/place-calls.png" alt="Placecall" title="Placecall" style="border: 1px solid gray; zoom:60%;">  
            <img src="../images/sip-number.png" alt="SIP Number" title="SIP Number" style="border: 1px solid gray; zoom:60%;">

## AI for Service Configuration

* A flow should be configured with an app on AI for Service.  
In the Script Task window, add the following code to pass the headers to the AI Agent before the Run Automation action.  

```
setCallFlowVariable('sipHeaders', context.BotUserSession.channels[0].handle.sipHeaders);
var headers = getCallFlowVariable('sipHeaders');
userSessionUtils.put('sipHeaders', headers);
```

<img src="../images/start-flow.png" alt="Flow" title="Flow" style="border: 1px solid gray; zoom:70%;">  

<img src="../images/flow-script.png" alt="Script Task" title="Script Task" style="border: 1px solid gray; zoom:70%;">   

## NICE CXone Authentication

The following parameters are required for authenticating before calling any **CXOne** API:

1. Authentication **API URL** from **NICE CXone**.
2. Access key ID.
3. Access key secret.

Steps to authenticate **NICE CXOne**:

1. Login to the NICE Cluster.
2. Click your profile at the top right corner and select **My Profile** from the dropdown.  
    <img src="../images/nice-login.png" alt="My Profile" title="My Profile" style="border: 1px solid gray; zoom:50%;">  
3. Go to the **ACCESS KEYS** tab and Click the **Add access key** button.  
    <img src="../images/access-keys.png" alt="Access Keys" title="Access Keys" style="border: 1px solid gray; zoom:70%;">  
4. Copy the Access Key ID and Access Key Secret. This is used to get the access token to be used by the signal API.
5. The API URL for Authorization is (For different regions, the base URL will change accordingly. For example: na1.NICE-incontact.com): [https://{region}.NICE-incontact.com/authentication/v1/token/access-key](https://na1.nice-incontact.com/authentication/v1/token/access-key)
6. Send the following **POST** request body:  
    ```
    {  
    "accessKeyId":"&lt;Your Access Key Id>",  
    "accessKeySecret":"&lt;Your Access Key Secret>" 
    }
    ```
7. An access_token that will be used to authenticate the Signal API is returned.

### Bot Configuration

Configure a dialog task in Bot Builder to transition the request to NICE CXOne once the customer requests for agent transfer.

### Fetch the NICE Authentication Access Token in the Bot

1. Add a bot action with a Service Node in the flow to get the access_token.  
    <img src="../images/bot-action-restapi-call.png" alt="Rest API Call" title="Rest API Call" style="border: 1px solid gray; zoom:70%;">  

2. In the Service Node, select the Service Type as **Custom Service** and the Sub Type as **REST**.  
    <img src="../images/edit-request.png" alt="Edit Request" title="Edit Request" style="border: 1px solid gray; zoom:70%;">  

3. Click **EDIT REQUEST**.
4. Select **POST** in the API call method and enter the authentication URL in the requested URL field.  
    <img src="../images/post-method.png" alt="POST Method" title="POST Method" style="border: 1px solid gray; zoom:70%;">  

5. Click the **Headers** tab.
6. Add **Content-Type** in Key and **application/json** in Value fields.  
    <img src="../images/content-type.png" alt="Content Type" title="Content Type" style="border: 1px solid gray; zoom:70%;">  

7. Click the **Body** tab and add the request body as follows:  
    <img src="../images/body.png" alt="Body" title="Body" style="border: 1px solid gray; zoom:70%;">  

8. Click **Test**.
9. Click **Save as Sample Response**.  
    <img src="../images/save-as-sample-response.png" alt="Save as Sample Response" title="Save as Sample response" style="border: 1px solid gray; zoom:70%;">  

### Fetch the SIP Headers in the AI Agent

* A bot action with Script Node is used to extract the headers in an AI Agent.  
    <img src="../images/bot-action-script.png" alt="Bot action-Script Node" title="Bot action-Script Node" style="border: 1px solid gray; zoom:70%;">  
    <img src="../images/script.png" alt="Script Node" title="Script Node" style="border: 1px solid gray; zoom:70%;">  
  
    ```
    const headers = context.session.UserSession.sipHeaders;
    if(headers) {
    let contactId = headers.find(o => o.name === 'X-ExternalCallId');
    if(contactId && contactId .value) {
    koreDebugger.log('Inbound SIP Contact ID: ' + contactId.value);
    BotUserSession.put("ContactId", contactId.value);
    }}
    ```

* The BotUserSession is used to save the SIP header value as **ContactId** and trigger the [Signal API](https://developer.niceincontact.com/API/AdminAPI#/Contacts/Signal%20a%20Contact).

    !!! Note
    
        If the AI Agent triggers the Signal API to transfer to a live agent or to end the conversation, the call must end from Kore, or the user should be disconnected from the Kore AI Agent and CCAI flow.

### Trigger the Signal API on Kore AI Agent

1. Add a Bot action with a service node to trigger the Signal API.  
    <img src="../images/signal-api.png" alt="Bot action-Signal API" title="Bot action-Signal API" style="border: 1px solid gray; zoom:70%;">  

2. In the Service Node, select the Service Type as **Custom Service** and the Sub Type as **REST**.  
    <img src="../images/edit-request-signal-api.png" alt="Signal API-Edit Request" title="Signal API-Edit Request" style="border: 1px solid gray; zoom:70%;">  

3. Click **Edit Request**.
4. Choose the API method as **POST**.
5. Enter the Signal API URL in the requested URL field as follows (For different clusters, the base URL must be changed based on the cluster. For example: api-b32.NICE-incontact.com)  
    ```
    https://api-{cluster}.NICE-incontact.com/incontactapi/services/v28.0/interactions/{{context.session.BotUserSession.ContactId}}/signal?p1=AgentHandoff&p3={{context.session.BotUserSession.conversationSessionId}}  
    ```

!!! Note

    We extract the ContactId from the SIP headers and add it to the BotUserSession as `{{context.session.BotUserSession.ContactId}}`. This value is accessed to initiate the signal API trigger. The p1 parameter is configured as “AgentHandoff” to facilitate transferring the user to an agent.  

<img src="../images/post-signal-api.png" alt="Post Signal API" title="Post Signal API" style="border: 1px solid gray; zoom:70%;">  

6. Click the **Headers** tab.
7. Enter “**Authorization**” as the Key and `"Bearer{{context.RestAPICall.response.body.access_token}}"` as the value.  
    <img src="../images/header-signal-api.png" alt="Authorization" title="Authorization" style="border: 1px solid gray; zoom:70%;">  

8. Click **Save**.

### Code Snippets

[Main Script](../voice-automation-nice-cxone-sip-integration/scripts/sip-main.pdf)

[Spawn Script](../voice-automation-nice-cxone-sip-integration/scripts/sip-spawn.pdf)