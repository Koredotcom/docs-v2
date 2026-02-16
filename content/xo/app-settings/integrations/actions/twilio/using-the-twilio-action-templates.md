# Using the Twilio Action Templates

You can use the **Prebuilt Action Templates** from your Twilio Verify integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using the Twilio Verify action templates:



1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  


3. On the Dialog Task pop-up, under the Integration, select the Twilio Verify option to view the action templates.  
<img src="../images/twilio-tem-img2.png" alt="Integration - Twilio Verify" title="Integration - Twilio Verify" style="border: 1px solid gray;zoom:50%;"/>

4. If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the **Actions** page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.  
<img src="../images/twilio-tem-img3.png" alt="Explore integrations" title="Explore integrations" style="border: 1px solid gray;zoom:50%;"/>


## Twilio Verify Actions

The following Twilio Verify actions are supported in this release:


<table border="1">
  <tr>
   <td><strong>Supported Tasks</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Method</strong>
   </td>
  </tr>
  <tr>
   <td>Send SMS
   </td>
   <td>Sends the SMS to the registered phone number.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Start Verification
   </td>
   <td>Starts the verification of the phone number registered in Twilio.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Verification Check
   </td>
   <td>Checks whether the verification is successful or unsuccessful.
   </td>
   <td>POST
   </td>
  </tr>
</table>



### Send SMS

Steps to send an sms to a phone number using the Twilio Verify integration:

1. Refer to the [Installing the Twilio Verify Templates](configuring-the-twilio-action.md#step-2-install-the-twilio-verify-action-templates){:target="_blank"} section to install this template.
2. The _Send SMS_ dialog task is added with the following components:  
<img src="../images/twilio-tem-img4.png" alt="Send SMS dialog task is added" title="Send SMS dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **sendSms** – A user intent to send SMS.
    2. **accountSid**, **twilioNumber**, **receiverNumber**, and **message** – Entity nodes for gathering the required for sending SMS.
    3. **sendSmsService** – A bot action service to send sms from an external integration. Click the **Plus** icon to expand to view the _sendSmsService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/twilio-tem-img5.png" alt="Send SMS - Edit request" title="Send SMS - Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**:

        ```
        {
        Body = {{message}}
        From ={{twilioNumber}}
        To={{receiverNumber}}
        }
        ```

        To add one or more response, scroll down and click the **+Add Response** button:  
        <img src="../images/twilio-tem-img6.png" alt="Send SMS - Add response" title="Send SMS - Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "body": "Sent from your Twilio trial account - Hi Kore",
        "num_segments": "1",
        "direction": "outbound-api",
        "from": "{{twilioNumber}}",
        "date_updated": "Thu, 22 Dec 2022 08:09:10 +0000",
        "price": null,
        "error_message": null,
        "uri": "/2010-04-01/Accounts/AC6bae65f877f2488c902f57cexxxxx/Messages/SMbec6459143755dc1f76b123a2xxxxx.json",
        "account_sid": "AC6bae65f877f2488c902f57ce1fxxxxx",
        "num_media": "0",
        "to": "{{receiverNumber}}",
        "date_created": "Thu, 22 Dec 2022 08:09:10 +0000",
        "status": "queued",
        "sid": "SMbec6459143755dc1f76b123a2xxxxxx",
        "date_sent": null,
        "messaging_service_sid": null,
        "error_code": null,
        "price_unit": "USD",
        "api_version": "2010-04-01",
        "subresource_uris": {
        "media": "/2010-04-01/Accounts/AC6bae65f877f2488c902f57xxxxxxx/Messages/SMbec6459143755dc1f76b123a2xxxxxx/Media.json"
        }
        }
        ```

    5. **sendSmsMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to send sms.
6. Enter an sms message when prompted by the AI Agent as shown below:  
<img src="../images/twilio-tem-img7.png" alt="VA prompt to Send SMS" title="VA prompt to Send SMS" style="border: 1px solid gray;zoom:50%;"/>

    !!! note

        You must add the country code before the receiver's phone number to deliver the SMS. For example, to send an SMS to a phone number in the United States, add the country code as +1.
    
7. You will notice an sms is sent to the number from the Twilio number.


### Start Verification

Steps to start verification of a phone service using Twilio Verify integration:



1. Refer to the [Installing the Twilio Verify Templates](configuring-the-twilio-action.md#step-2-install-the-twilio-verify-action-templates){:target="_blank"} section to install this template.
2. The _Start Verification_ dialog task is added with the following components:  
<img src="../images/twilio-tem-img8.png" alt="Start Verification dialog task is added" title="Start Verification dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **startVerification** – A user intent to start verification of the service.
    2. **serviceSid**, **receiverNumber**, and **channel** – Entity nodes to gather required details to start the verification process.
    3. **startVerificationService** – A bot action service to start verification in a Twilio integration. Click the **Plus** icon to expand to view the _startVerificationService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/twilio-tem-img9.png" alt="Start Verification - Edit request" title="Start Verification - Edit Request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**:

        ```
        {
        To ={{receiverNumber}}
        Channel={{channel}}
        }
        ```

        To add one or more responses, scroll down and click the **+Add Response** button:  
        <img src="../images/twilio-tem-img10.png" alt="Start Verification - Add response" title="Start Verification - Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "status": "pending",
        "payee": null,
        "date_updated": "2022-12-22T08:19:45Z",
        "send_code_attempts": [
        {
        "attempt_sid": "VL0dc72d3662674769417ddba8cxxxxxx",
        "channel": "sms",
        "time": "2022-12-22T08:19:45.268Z"
        }
        ],
        "account_sid": "AC6bae65f877f2488c902f57cexxxxx",
        "to": "+{{receiverNumber}}",
        "amount": null,
        "valid": false,
        "lookup": {
        "carrier": null
        },
        "url": "https://verify.twilio.com/v2/Services/VAd8fb32402129918fda43xxxxxx/Verifications/VEdfa1ba866cc6de52c811402bbxxxxxx",
        "sid": "VEdfa1ba866cc6de52c811402bbxxxxx",
        "date_created": "2022-12-22T08:19:45Z",
        "service_sid": "VAd8fb32402129918fda4368184xxxxx",
        "channel": "sms"
        }
        ```

    5. **startVerificationMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to start verification.
6. Enter the phone numbers when prompted by the AI Agent.  
<img src="../images/twilio-tem-img11.png" alt="VA prompt to Start Verification" title="VA prompt to Start Verification" style="border: 1px solid gray;zoom:50%;"/>

7. The App now starts the verification process based on the phone numbers entered.


### Verification Check

Steps to check the verification of a phone service using Twilio Verify integration:

1. Refer to the [Installing the Twilio Verify Templates](configuring-the-twilio-action.md#step-2-install-the-twilio-verify-action-templates){:target="_blank"} section to install this template.
2. The _Verification Check_ dialog task is added with the following components:  
<img src="../images/twilio-tem-img12.png" alt="Verification Check dialog task is added" title="Verification Check dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **verificationCheck** – A user intent to check verification of the service.
    2. **serviceSid**, **receiverNumber**, and **code** – Entity nodes to gather required details to check the verification process.
    3. **verificationCheckService** – A bot action service to check the verification in a Twilio integration. Click the **Plus** icon to expand to view the _verificationCheckService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/twilio-tem-img13.png" alt="Verification Check - Edit request" title="Verification Check - Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**:

        ```
        {
        To ={{receiverNumber}}
        Code={{code}}
        }
        ```

        To add one or more responses, scroll down and click the **+Add Response** button:  
        <img src="../images/twilio-tem-img14.png" alt="Verification Check - Add response" title="Verification Check - Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "status": "approved",
        "payee": null,
        "date_updated": "2022-12-22T08:22:47Z",
        "account_sid": "AC6bae65f877f2488c902f57xxxxx",
        "to": "{{receiverNumber}}",
        "amount": null,
        "valid": true,
        "sid": "VEdfa1ba866cc6de52c811402xxxx",
        "date_created": "2022-12-22T08:19:45Z",
        "service_sid": "VAd8fb32402129918fda43681xxxxx",
        "channel": "sms"
        }
        ```

    5. **verificationCheckMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to check verification.
6. Enter the phone numbers when prompted by the AI Agent.  
<img src="../images/twilio-tem-img15.png" alt="VA prompt - Enter phone number" title="VA prompt - Enter phone number" style="border: 1px solid gray;zoom:50%;"/>

7. The App now checks the verification based on the phone numbers entered.