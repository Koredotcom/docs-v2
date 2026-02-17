# BotKit SDK Tutorial – Blue Prism

The integration of Kore.ai bots with Blue Prism helps you drive business process automation using conversational flows. Kore.ai bots execute conversation flows by understanding user intents, entities, context, and sentiment. Blue Prism RPA services can consume the contextually relevant information and effectively automate business processes.

## Integration Approach

Kore.ai’s Blue Prism Connector is a generic reference integration for connecting Kore.ai bots with your enterprise Blue Prism RPA services. Conversation flow can be defined to invoke RPA services using [Webhook nodes](../../automation/use-cases/dialogs/node-types/working-with-the-web-hook-node.md) via BotKit SDK integration. The following is a typical integration flow:

* Conversation flows in Kore.ai bots can be configured to pass the contextually relevant information like intent in progress, entities collected, etc. to the BotKit SDK (platform extension)
* BotKit SDK can be used to invoke the RPA process using the Kore.ai Blue Prism Connector.
* The connector invokes the specified RPA process on Blue Prism and returns the response back to the platform.
* Response from RPA service can be used in defining bot definitions like dialog transitions, entity determination, end-user responses, etc..

## Prerequisites

Before you begin, ensure that you have completed the following necessary steps:

* Signup for Blue Prism’s RPA platform and define your automation flows.
* Download Kore.ai BotKit SDK from [here](https://github.com/Koredotcom/BotKit),  review and update integration details of your Blue Prism instance in the BluePrismConnector.js file.
* Enable RPA services on the Blue Prism platform to start communicating with your Kore.ai bots.

## Steps in Integration

Following are the steps in integrating Blue Prism with your bot:

* **Step 1**: Create a Dialog task and build flow to meet your business use case
* **Step 2**: Identify the specific locations in your flow that require integration with Blue Prism to invoke RPA services
* **Step 3**: Build your RPA service request JSON object (BluePrismRequest) using Script nodes ([refer here for how](../../automation/use-cases/dialogs/node-types/working-with-the-script-node.md)). Refer to the ‘[Sample Request Object](#sample-request-object)‘ section given below for a sample representation.
* **Step 4**: Place Webhook nodes in the identified locations. Ensure that you have setup BotKit SDK and configured the connections. [Refer here for more details on Webhook Node](../../automation/use-cases/dialogs/node-types/working-with-the-web-hook-node.md).
* **Step 5**: Review the request payload that the Kore.ai platform passes to BotKit for invoking the RPA service.
* **Step 6**: Response payload (BluePrismResponse) received from RPA services is now available in the dialog context. You can use the data from the BluePrismResponse object to compose a response to the user or define conversation flows of your bot.

### Sample Request Object

The information required for invoking the RPA services has to be populated following the structure provided in this section. On reaching the Webhook node in the conversation, the information required for invoking the RPA services is forwarded to the BotKit by the platform which in turn would make the call to the RPA service.

The request payload should include the following information.

```javascript
var bluePrismRequest = {};

  bluePrismRequest= {
     "url" : "<service endpoint for process>",
     "operation" : "<RPA Process Name>",
     "attributes":{
          UserInput1 :"<input1>",
          UserInput2 : "<input2>",
            ……..
        }
  }
```

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>operation
   </td>
   <td>String
   </td>
   <td>Name of the RPA Process created
   </td>
  </tr>
  <tr>
   <td>url
   </td>
   <td>URL
   </td>
   <td>Service endpoint of the RPA process
   </td>
  </tr>
  <tr>
   <td>attributes
   </td>
   <td>Blue Prism supported Data Types
   </td>
   <td>Data inputs needed to run the RPA Process
   </td>
  </tr>
</table>

### Responses from Blue Prism

Response from Blue Prism services is received by the BotKit SDK and then it is passed on to your bot’s dialog task. The response is stored in the _context object_ against the predefined key '**ResponseFromBluePrism**'. You may configure Blue Prism services to respond either in ‘**sync**‘ or ‘**async**‘ modes. In the case of ‘async’ mode, your Blue Prism services should call the following URL to post the response: `http://<host>/sdk/blueprismConnector/<requestId>`

* <host> refers to the environment of your bots. Example: platform.kore.ai
* <requestId> refers to the unique reference number associated with the request made to the Blue Prism service from your bots

Post processing the Webhook node, the platform will resume the task from that point forward and the dialog will be executed as per the regular conversation flow. As the Blue Prism response is present in the dialog’s context, you may use it for defining conversation flows, customizing responses to the end users, etc.
