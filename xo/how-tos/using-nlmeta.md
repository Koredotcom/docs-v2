
# Using nlMeta

Sometimes, one wants to control the flow of the assistant by taking an alternate path to improve the user’s experience.

Consider the following scenarios:


1. The NLP engine might have identified an intent based on the user's utterance. However, based on additional information gathered from the backend systems, the webpage where the SDK is hosted, or any other external information, a different task might be more suitable.

2. Consider a flight booking assistant that greets the user with the best ongoing deals as part of the Welcome message. Based on the user selection, the ‘book flight’ task can be programmatically invoked by prepopulating the travel details, like source city, destination city, travel, etc., from the deal information presented to the user.

Kore.ai provides a way to programmatically pass information to the assistant using *nlMeta* data. This can be used in the BotKit SDK, Widget SDK, and Web SDK to pass information like intent to be triggered, entity values, and other task settings, as needed.


## nlMeta

The *nlMeta* is an object that can be used to pass information on to the AI Agent. The AI Agent would use this information to execute the intent specified therein before attempting to decode any other information.


## Sample

The following is a sample of how the *nlMeta* object needs to be populated:

     'nlMeta': {

            'intent': '<intent_name>',  
            'childBotName': '<child_bot_name>',
            'isRefresh': <true/false>, 
            'entities': {      
			'<entity1_value>': value1,
                        '<entity2_value>': value2,
			},
      	    'interruptionOptions': {
               'hr': {
                 'h': 1;
                 'r': 1;
                 'nn': true

                }
              }
      }


## Parameters

The following are the parameters that can be used in this object:


<table>
  <tr>
   <td><strong>Parameters</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>nlMeta
   </td>
   <td>An object for natural language information for the AI Agent
   </td>
  </tr>
  <tr>
   <td>intent
   </td>
   <td>Intent identified via 3rd party, which needs to be triggered by the AI Agent
   </td>
  </tr>
  <tr>
   <td>entities
   </td>
   <td>Object with entity-value pairs as needed by the intent to be triggered
   </td>
  </tr>
  <tr>
   <td>isRefresh
   </td>
   <td>
<ul>

<li>Set to true to end the current task and start executing the incoming task</li>

<li>If not set or if set to false, the incoming task would be executed as per hold and resume settings</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>interruptionOptions
   </td>
   <td>This is to indicate the interruption behavior in case any task is in progress when the AI Agent receives this nlMeta information. Values can be:
<ul>

<li>discardAll – to discard current and previous tasks, if any
</li>

<li>hr – for hold and resume options 


<table>
  <tr>
   <td> </li>
</ul>
   </td>
   <td>
    h - for hold option, the following are the options:
<ul>

<li>1 – “Hold the current task and resume back once the new task is completed.”</li>

<li>2- “Discard the current task and switch to new”</li>

<li>3- “Switch to new task without any notification to user and discard current task”</li>

<li>4- “Continue the current task and add new task to the follow-up task list”</li>

<li>5- “Allow the end user to select the behavior”</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
    r - for resume option, following are the options:
<ul>

<li>1 – “Get confirmation with the user before resuming an on-hold task”</li>

<li>2- “Notify the user with a message that the on hold task is being resumed”</li>

<li>3- “Resume the on hold task without any specific message to the user”</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   nn -  neverNotify – notification to the user
<ul>

<li>True – Always resume the on hold task without any specific message to the user if the task ended in a single response</li>

<li>False – inform the user</li>
</ul>
   </td>
  </tr>
</table>


   </td>
  </tr>
</table>


In case, the requested task is not found the AI Agent would respond with a standard response “Dialog task required for conversation not available”.


## Usage

As mentioned, *nlMeta* can be populated and sent to the assistant via BotKit SDK, and web/widget SDK. The following illustrates how it can be accomplished:

**BotKit SDK** – as part of *metaInfo* object: 

``` json
data.metaInfo = {
      'nlMeta': {
            'intent': 'Authenticate User', 
            'isRefresh': true, 
    	     'entities': {
		"Name": "John"
		},
 	    'interruptionOptions': 'discardAll'
      }
}
```


**Web SDK** – the nlMeta information can be sent as a parameter using the *sendMessage* function. You can find this function in the *chatWindow.js* file. Add a condition when the nlMeta data needs to consumed as follows:

``` json
if(_this.text() == “Existing”){
me.sendMessage(_this, attachmentinfo, {'nlMeta': {
            'intent': 'Authenticate User'}}); 
}
    	else{
		me.sendMessage(_this, attachmentinfo);
		}
```
In the above example, the *Authenticate User* intent would be triggered if the *text* field contains the value “Existing”.

**Widget SDK** – the nlMeta information can be sent as part of the payload for various templates like button, menu, list, etc.,[ see here for details](../sdk/widget-sdk-message-formatting-and-templates.md)

		


## Frequently Asked Questions


#### Does the platform honor interruption settings when a new intent is received from BotKit using NLMeta?

Yes, the platform honors all interruption settings when it receives a new intent from BotKit using NLMeta.

### Does BotKit provide details about the current node and dialog name? 

Yes, BotKit has full access to the context object, which includes details about the current task and entities.

### Can I set an entity value directly from BotKit using NLMeta? 

Yes, you can set the entity value of an ongoing dialog task directly from BotKit using NLMeta.

### Can I send an FAQ as part of NLMeta? 

Yes, you can trigger an FAQ from NLMeta. To do this, include an additional key called `"intentType":"KG"` in NLMeta. By default, NLMeta triggers dialog tasks. Use this key to trigger FAQs from the Knowledge Graph.

For example:

``` json
if(data.message === "TriggerFAQFromNLMeta"){
           console.log("NL Meta section executed")
           let metaInfo = {
               "nlMeta" :{
                   "intent": "How do I open savings bank account?",
                   "intentType":"KG"
               }
           }
           data.metaInfo = metaInfo;
           return sdk.sendBotMessage(data,callback);
       }

```