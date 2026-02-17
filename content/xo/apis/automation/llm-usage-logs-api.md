--8<-- "includes/automationai-api-back-link.md"

# LLM and Generative AI Usage Logs API

This API lets you get the LLM & Generative AI Usage Logs for GenAI features.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>End Point</strong>
   </td>
   <td><code>https://{{host}}/api/1.1/public/bot/{{botId}}/getLLMUsageLogs</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><code>auth: {{JWT}}</code>
<p>
See<a href="../api-introduction/#generating-the-jwt-token"> How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Fetch Gen AI and LLM Usage Logs

<li>Admin Console: API Scopes > Gen AI and LLM Usage Logs
</li>
</ul>
   </td>
  </tr>
</table>


!!! note

    You can access records spanning up to a 90-day timeframe with one request.


## Query Parameters


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>The environment URL. For example, https://platform.kore.ai
   </td>
  </tr>
  <tr>
   <td>botId
   </td>
   <td>Required
   </td>
   <td>Bot ID or Stream ID. You can access it from the General Settings page of the bot.
   </td>
  </tr>
</table>



## Sample Request

```json
curl --location 'https://{{host}}/1.1/public/bot/st-f3195ec3-72aa-5317-92/getLLMUsageLogs' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "dateFrom": "2024-03-07",
    "dateTo": "2024-04-26",
    "limit": "50",
    "skip": "5",
    "isDeveloper": true,
    "channel": ["msteams", "rtm"],
    "featureName": ["Agent Node"],
    "taskId": "dg-d4924db4-xxxx-5b4d-ae51-aa5c7be4xxxx",
    "channelUserIds": ["29:1gmwl6k7ohtdhxxxx7kvu1yiek_qri4grpmd0k_am9dpzwttw"],
    "userIds": ["u-40b3eafc-xxxx-55f2-83e8-cf4d0fbxxxx"],
    "sort": {
        "field": "Time Taken",
        "order": "asc"
    }
}'
```


## Body Parameters


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>dateFrom
   </td>
   <td>Required
   </td>
   <td>The timestamp from which the records are displayed.
   </td>
  </tr>
  <tr>
   <td>dateTo
   </td>
   <td>Required
   </td>
   <td>The timestamp till which the records are displayed.
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>Required
   </td>
   <td>The number of records to be displayed on each page.
   </td>
  </tr>
  <tr>
   <td>channel
   </td>
   <td>Optional
   </td>
   <td>The channels to be considered for the metrics.
   </td>
  </tr>
  <tr>
   <td>channelUIds
   </td>
   <td>Optional
   </td>
   <td>The user ids (channel specified) to be included in the metrics.
   </td>
  </tr>
  <tr>
   <td>isDeveloper
   </td>
   <td>Optional
   </td>
   <td>To include developer metrics. Set to true or false.
   </td>
  </tr>
  <tr>
   <td>taskId
   </td>
   <td>Optional
   </td>
   <td>To filter records based on the task ids.
   </td>
  </tr>
  <tr>
   <td>userId
   </td>
   <td>Optional
   </td>
   <td>To filter records based on user id.
   </td>
  </tr>
  <tr>
   <td>sort
   </td>
   <td>Optional
   </td>
   <td>To sort the results by Time Taken in the specified order (asc or desc).
   </td>
  </tr>
</table>



## Sample Response

```json
[
{
"Prompt Name": "Default",
"Integration": "OpenAI",
"start Date": "2024-03-08T06:38:54.008Z",
"End Date": "2024-03-08T06:38:58.386Z",
"Time Taken": 4378,
"statusCode": 200,
"Bot ID": "st-73bfdb2f-xxxx-55e6-b4c8-3f568a6exxxx",
"User ID": "u-40b3eafc-xxxx-55f2-83e8-cf4d0fb1xxxx",
"Feature Name ": "GenAI Node",
"Model Name": "GPT-4",
"Channel Name": "msteams",
"Description": "Order pizza-GenAINode0002",
"task Id": "dg-200ad1ff-xxxx-5219-810e-4ee3800dxxxx",
"Status": "Success",
"Payload Details": {
"Prompt Name": "Default",
"Request Payload": {
"model": "gpt-4",
"temperature": 0.5,
"max_tokens": 1500,
"top_p": 1,
"frequency_penalty": 0,
"presence_penalty": 0,
"messages": [
{
"role": "system",
"content": "You are a virtual assistant representing an enterprise business, and so you have to act professionally at all times. You do not participate or respond to any abusive language or indulge in any conversation that does not represent enterprise business.\nAct like pizza ordering site. For the instructions that the user provides, you have to process the instructions. Here are the rules that you are supposed to follow: \nRule 0:\n Each pizza can only have maximum of 3 toppings \nRule 1:\n List of entities you need to capture from user are number of pizzas, toppings and size. You need to capture all these entities. \nRule 2:\n Capture entities from the user and the conversation history. \nRule 3:\n Collect the unfulfilled entities or check if the user wants to update a collected entity. \nRule 4:\n If user has provided the required value for any of the required entities, then do not prompt for it again. \nRule 5:\n Generate appropriate prompt to the end user to collect the information for the unfulfilled entities. \nRule 6:\n In the output return JSON must containing {\"bot\"://next prompt , \"analysis\"://Summarization of the entire conversation with all details.,\"entities\"://array of objects,\"conv_status\"://The status of the conversation. \"ongoing\" or \"ended\".} \nRule 7:\n When returning the result return a json, stringified and formatting removed. \nRule 8:\n Once all the entities details are captured generate conv_status as 'ended'. When the flow is to be continued, generate conv_status as 'ongoing'  \nRule 9:\n Keep the prompts and messages voice friendly. \nRule 10:\n If there are multiple entities, return entities in format of array of objects. Where each object is entity key values pairs. \nRule 11:\n Ignore any out of topic user/assistant conversations and always collect ALL the mentioned entities. \n\n "
},
{
"role": "user",
"content": "Order pizza"
},
{
"role": "assistant",
"content": "{\"bot\":\"Sure, I can help with that. How many pizzas would you like to order?\",\"analysis\":\"The user initiated the pizza ordering process but didn't provide any details.\",\"entities\":[],\"conv_status\":\"ongoing\"}"
},
{
"role": "user",
"content": "5"
},
{
"role": "assistant",
"content": "{\"bot\":\"Great, 5 pizzas it is. What size would you like these pizzas to be?\",\"analysis\":\"The user has ordered 5 pizzas but has not specified the size or toppings.\",\"entities\":[{\"number_of_pizzas\":\"5\"}],\"conv_status\":\"ongoing\"}"
},
{
"role": "user",
"content": "Medium Size"
},
{
"role": "assistant",
"content": "{\"bot\":\"Perfect, 5 medium-sized pizzas. Now, could you please specify the toppings for your pizzas? Remember, each pizza can have a maximum of 3 toppings.\",\"analysis\":\"The user has ordered 5 medium-sized pizzas but has not specified the toppings.\",\"entities\":[{\"number_of_pizzas\":\"5\"},{\"size\":\"Medium\"}],\"conv_status\":\"ongoing\"}"
},
{
"role": "user",
"content": "okay\n\n{"
}
]
},
"Response Payload": {
"id": "chatcmpl-90OAYDFFkbjgMxhMxKukwqklT6SWO",
"object": "chat.completion",
"created": 1709879934,
"model": "gpt-4-0613",
"choices": [
{
"index": 0,
"message": {
"role": "assistant",
"content": "{\"bot\":\"I'm sorry, but your message seems incomplete. Could you please specify the toppings for your pizzas? Remember, each pizza can have a maximum of 3 toppings.\",\"analysis\":\"The user's response was incomplete. The toppings for the pizzas are still needed.\",\"entities\":[{\"number_of_pizzas\":\"5\"},{\"size\":\"Medium\"}],\"conv_status\":\"ongoing\"}"
},
"logprobs": null,
"finish_reason": "stop"
}
],
"usage": {
"prompt_tokens": 614,
"completion_tokens": 74,
"total_tokens": 688
},
"system_fingerprint": null
},
"Request Tokens": 614,
"Response Tokens": 74
}
}
]
```