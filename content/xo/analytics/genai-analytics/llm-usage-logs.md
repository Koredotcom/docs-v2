

# Generative AI Logs



The LLM and Gen AI Usage Logs on the Platform provide detailed information about requests sent to LLMs and the corresponding responses. The logs include data on features accessing the LLMs, response generation time, payload details, tokens used, and more. It enables AI Agents designers to track and compare usage across various LLM features and refine prompts and settings to boost performance and user experience.

The log analysis focuses on the following key areas:



* **Request-response dynamics**: Analysis of request-response dynamics between user prompts and model responses offers insights into prompt and model performance in specific scenarios.
* **Payload details**: Analyzing the payload data exchanged during interactions allows for effective monitoring and optimization of advanced AI functionalities.

To access the logs, Go to **Analytics** > **Gen AI Analytics** > **Usage Logs**. Click any record to view the log summary and payload details.





<img src="../images/llmlogsforguardrails.gif" alt="Usage Logs" title="Usage Logs" style="border: 1px solid gray; zoom:70%;">



## Field Description

You can sort the data by either Newest to Oldest or Oldest to Newest. Click the record to view the **Summary** and **Payload Details**.



### Summary


<table>
  <tr>
   <td><strong>Fields</strong>
   </td>
   <td><strong>	Description</strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Overview</strong>
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Extra details about the node and task name linked to the feature.
   </td>
  </tr>
  <tr>
   <td>Date & Time
   </td>
   <td>The timestamp of the call made to the LLM.  
   </td>
  </tr>
  <tr>
   <td>Language    
   </td>
   <td>The language in which the conversation occurred.
<p>
If it is a multi-lingual AI Agents, you can select specific languages to filter the conversations that occurred in those languages. The page shows the conversations that happen in all enabled languages by default.
   </td>
  </tr>
  <tr>
   <td>Channel
   </td>
   <td>The communication channel or platform used for the interaction with LLM.    
   </td>
  </tr>
  <tr>
   <td>Session ID
   </td>
   <td>Identifier for the session.
   </td>
  </tr>
  <tr>
   <td>Status
   </td>
   <td>Status of a call made to the LLM. “Success” or “Failure”.
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>User Details</strong>
   </td>
  </tr>
  <tr>
   <td>User 
   </td>
   <td>AI Agents designer or end user who made a call to the LLM.    
   </td>
  </tr>
  <tr>
   <td>User ID    
   </td>
   <td>The distinct identifier of the end user engaged in the conversation.
<p>
You can view the metrics based on the <strong>Kore User id</strong> or <strong>Channel User Id</strong>.
<p>
Channel-specific ids are shown only for the users who have interacted with the AI Agents during the selected period.    
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Generative AI</strong>
   </td>
  </tr>
  <tr>
   <td>Feature    
   </td>
   <td>The Platform feature is making calls to the LLM models.    
   </td>
  </tr>
  <tr>
   <td>Model    
   </td>
   <td>The Large Language Model to which the request was made.    
   </td>
  </tr>
  <tr>
   <td>Prompt Name    
   </td>
   <td>Prompt used with the model and running at the node/task level. The pre-built prompts are named ‘Default.    
   </td>
  </tr>
  <tr>
   <td>Request Tokens    
   </td>
   <td>Request tokens for a Language Model (LLM) are the individual parts of input text, like words or punctuation, given to the model to create a response. These tokens are the basis for the model’s understanding and its output generation.    
   </td>
  </tr>
  <tr>
   <td>Integration Type
   </td>
   <td>Type of integration used (e.g. System/Custom).    
   </td>
  </tr>
  <tr>
   <td>Response Duration
   </td>
   <td>Time taken by the LLM to generate the response.    
   </td>
  </tr>
  <tr>
   <td>Response Tokens
   </td>
   <td>Response tokens for a Large Language Model (LLM) are the pieces of generated output, like words or punctuation, showing the model’s response. These tokens make up the structured parts of the LLM’s text, making it easier to understand and analyze.    
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Guardrails</strong>
   </td>
  </tr>
  <tr>
   <td>Configured Guardrails
   </td>
   <td>Restrict Toxicity, Restrict Topics, Detect Prompt Injections, Filter Response.
   </td>
  </tr>
  <tr>
   <td>Outcome
   </td>
   <td>Indicates whether the guardrail was <strong>Detected</strong> or <strong>Not Detected</strong> or <strong>Not Applicable</strong>.
   </td>
  </tr>
  <tr>
   <td>Risk Score
   </td>
   <td>Calculated risk score on a scale of 0 to 1. If not detected, it will be 0.
   </td>
  </tr>
</table>

!!! note

    The Guardrail details are displayed only if they are configured.

### Payload Details


<table>
  <tr>
   <td><strong>Fields</strong>
   </td>
   <td><strong>	Description</strong>
   </td>
  </tr>
  <tr>
   <td>Request Payload
   </td>
   <td>The request payload sent to a Large Language Model (LLM) is the user’s input or question, along with any extra details needed for the model to give a good response.
   </td>
  </tr>
  <tr> 
  <td>Response Payload
  </td>
   <td>The Large Language Model (LLM) produces a response payload as its answer to the input it receives. It’s in the text format and contains additional information required to present the response. This payload helps developers use the model’s output effectively.
  </tr> </td>
   <td>Tokens Used 
   </td>
   <td>Response tokens for a Large Language Model (LLM) are the pieces of generated output, like words or punctuation, showing the model’s response. These tokens make up the structured parts of the LLM’s text, making it easier to understand and analyze.
   </tr></td>
   <td>Stream  
   </td>
   <td>If the stream = true, then the response is delivered incrementally, token by token in real-time.  
   </td>
  </tr>
</table>

## Filter Criteria

The LLM and GenAI logs data can be viewed based on specific filter criteria that can be selected.[ Learn more](../dashboard-filters.md).
