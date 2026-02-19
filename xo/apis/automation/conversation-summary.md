--8<-- "includes/automationai-api-back-link.md"

# Conversation Summary API

The API summarizes the conversation between a user and an agent. The agent can be a AI Agent or a human agent. The API accepts the conversation Id or the transcripts as input and provides an auto generated conversation summary.

The API uses open-source LLM fine-tuned and hosted by Kore.ai for summarizing conversations using a large number of sample conversation transcripts from various fields and industries.

!!!note
    Currently, the API supports transcripts only in English (en) and is available only in our [US deployment](../../getting-started/accessing-the-platform.md).

<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/streams/{{streamId}}/conversationSummary</code>
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token.</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>App Builder: Conversation Summary
   </td>
  </tr>
</table>

## Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>required
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
  </tr>
  <tr>
   <td>streamId
   </td>
   <td>required
   </td>
   <td>Stream ID or Bot ID. You can access it from the General Settings page of the bot.
   </td>
  </tr>
</table>



## Sample Request

**With Conversation Id as Input Mode**


```json
curl -X POST 'https://{{host}}/api/public/streams/{{streamId}}/conversationSummary' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "lang": "en",
    "inputMode": {
        "conversationId": "64808537ba90cb4b3841xxxx"
    }
}'
```


**With Transcript as Input Mode**


```json
curl -X POST \ 
'https://{{host}}/api/public/streams/{{streamId}}/conversationSummary' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "lang": "en",
    "inputMode": {
        "transcript": "Agent: Thank you for calling [Company name]. My name is Jane I'\''ll be glad to assist you? 
        Consumer: I just. My name is John Doe. 
        Agent: . Alright. How are you doing today sir. Alright. What can I do to help you? 
        Consumer: Good how are you the yeah that? I get it right. Is it is Jane. 
        Agent: Yes sir. 
        Consumer: Good. Okay. Okay. Okay um. So I'\''m was having a little I was having a DVD issue. I'\''ve got two boxes. The TV part is fine. I can get the channels in and everything is fine. 
        Consumer: And the DVD. I'\''m. As a DVR. I guess DVR. 
        Consumer: We'\''ve got a DVR capability on on the problem I'\''ll call at the primary box and then the secondary box upstairs the primary box is working. 
        Consumer: Hundred percent. I can record channels. I can call them back up again. I can go forward and backwards. Everything is fully functional on the primary box for DVD the secondary box upstairs. 
        Agent: Um-hum. 
        Consumer: Um it it just doesn'\''t respond at all to the. You know I'\''m using the wand with the green button right in the middle the list button and it it just doesn'\''t respond at all to that. I'\''ve got full functionality on the TV channels in the guide. But but the list does not work at all. So I can'\''t protect a penny taped shows. 
        Agent: Alright I definitely understand your concern. Dear Sir up. Glad look into this for you. 
        Agent: Okay. So the first thing I'\''m gonna do is run a communication test if there'\''s. 
        Consumer: Okay. 
        Agent: If there'\''s any issues with the communication that would definitely cause problems with the DVR. 
        Consumer: Okay. 
        Agent: Because I need good communication going in and good communication. Going out for it. Deport that list up player programs etc. so I'\''m looking into that right now for you. 
        Consumer: Very good. 
        Consumer: Hello. 
        Agent: Alright. In question for you sir. Have you had any problems with your Internet the past couple of days. Also. 
        Consumer: Know the Internet seems fine. 
        Agent: Okay. Alright. Because I ran a test in very quickly. Your DVR. 
        Consumer: Okay. 
        Agent: And your modem or Agenth failing. 
        Agent: Let'\''s just waiting for the test to complete fully. 
        Agent: Alright. So they'\''re Agenth failing on different frequencies. So. Agent: One more than likely has nothing to do with the other just a coincidence. But they Agenth are failing. 
        Consumer: And and by Agenth you mean that the DVR boxes. 
        Agent: Yes I did the DVR box that you have is failing 
        Consumer: . Okay. 
        Agent: In your modem just failing. Also. 
        Consumer: Okay. Well? Yes. So we'\''ve got we'\''ve got a we'\''ve got an appointment scheduled for tomorrow at 3 o'\''clock? Should I just keep that in have a tech come in and take a look at it. 
        Consumer: Very good. We'\''ll leave it in place then. Thank you. 
        Agent: Absolutely. Alright you'\''re welcome ma'\''am, it'\''s gonna place some notes on the account. 
        Agent: DVR failed signal level check in modem. Modem failed. Also. Agent: Alright great. So yes I would definitely say keep the appointment and technician gets here he can go through everything test everything and make sure everything is working properly for you. 
        Consumer: Super. Thank you so much. 
        Agent: Alright. You'\''re more than welcome sir. We do apologize for the inconvenience but we look forward to getting a technician out there and resolve an issue for you sir."
    }
}'
```

## Request Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>language
   </td>
   <td>required
   </td>
   <td>The language used for understanding the transcript and generating the summary. Currently, only the English language (en) is supported.
   </td>
  </tr>
  <tr>
   <td>inputMode
   </td>
   <td>required
   </td>
   <td>One of the following modes in which the input can be provided to the API:
<ul>

<li>ConversationId: A valid conversation session Id of the current bot.

<li>transcript: The conversation transcript in a specific format; see the sample code above.
</li>
</ul>
   </td>
  </tr>
</table>



## Sample Response


```json
{
    "ConversationSummary": "Consumer was having a DVD issue. He has two boxes. The TV part is fine. The DVD is a DVR. The list doesn't work at all. Consumer needs good communication going in and good communication going out for it.",
    "time": "2023-06-09T07:45:47.940Z"
}
```



## Response Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>ConversationSummary
   </td>
   <td>The auto generated summary of the conversation.
   </td>
  </tr>
  <tr>
   <td>time
   </td>
   <td>Date & time of the summary generation.
   </td>
  </tr>
</table>

