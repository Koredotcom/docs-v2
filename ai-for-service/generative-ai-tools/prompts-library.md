
# Prompts Library

Effective prompts are essential for accurate LLM responses. The Prompts Library module enables you to create, test, and manage prompts tailored to specific use cases.  It displays all custom and system prompt templates. Usage status ("In Use" or "Not In Use") is displayed only for custom prompts.
The prompt post-processor helps you align LLM responses with Platform expectations. Use it to refine outputs, ensuring correct behavior and high-quality interactions at runtime. The post-processor is available for both default and custom prompts.



## Default Prompts

The Platform provides ready-to-use default prompt templates for pre-built models like OpenAI and Azure OpenAI. Each template is designed for a specific feature and model to support common use cases. Simply select a model, choose a prompt, enable the feature, and start using it.
Default prompts cannot be edited directly. However, you can import a default prompt, customize it, and save it as a custom prompt for any pre-built or custom LLM.



## Custom Prompts

Custom prompts let you tailor model behavior for specific use cases and GenAI features. You can build prompts from scratch or import and modify existing ones to meet your needs. Custom prompts give you full control over prompt design, enabling you to align responses with your desired tone, context, and business requirements—particularly valuable for organizations with unique needs beyond standard templates.



For more information on adding prompt for Agent Node, see [Agent Node Prompt Setup](../automation/agent-node/prompt-setup.md).

!!! note

    The custom LLM integration and prompt creation are available only in English.


## Regular vs. Streaming Prompts

Regular prompts (non-streaming prompts) generate a complete response after the model processes the entire input. They're best suited for tasks where the user expects a full, well-structured output at once, such as summaries, reports, or form completions.

Streaming prompts deliver responses incrementally as the model generates them, allowing users to see partial results in real-time. You can identify streaming prompts in the Prompt Library by the "streaming" tag displayed alongside the prompt name. Refer to [Streaming Responses](streaming-responses.md).


### Structural Differences

| Feature | Regular Prompts | Streaming Prompts |
|----------|-----------------|-------------------|
| Response Delivery | Full response delivered at once | Tokens delivered incrementally as they're generated |
| Parameter Requirements | Standard parameters | Requires `"stream": true` parameter |
| Exit Scenarios | Supported | Not supported |
| AI Agent Response | Supported | Not supported |
| Collected Entities | Supported | Must be included in streamed format |
| Tool Call Requests | Supported | Supported |
| Post-Processing | Available | Not available |
| Guardrails | Supported | Not supported |



### Implementation Differences

* Format Requirements:
  * Both require responses to include conv_status , AI Agent response, and collected entities.
  * Streaming prompts must structure this content for incremental delivery.

* Error Handling:
  * Regular prompts can be fully validated before delivery.
  * Streaming prompts require careful prompt engineering as corrections can't be made mid-stream.

* Analytics:
  * Streaming responses include additional metrics like TTFT (Time to First Token).
  * Response Duration for streaming measures time from first to last token.

### When to Choose Regular vs. Streaming Prompts


Use Regular  When:

* Post-processing is needed.
* Content moderation or guardrails are required.
* Tool calls are necessary for the Agent Node
* Interception of responses (with BotKit) is needed.
* Complete response validation must occur before delivery.
* Implementing the appropriate prompt type based on your specific use case and requirements ensures optimal performance and user experience.

Use Streaming Prompts When:

* Real-time interaction is critical.
* Responses are expected to be lengthy.
* Voice-based applications would benefit from incremental speech.
* User experience would benefit from immediate feedback.

## Search and Filter Prompts

The Quick Filter lets you filter prompts by type: system or custom. Use the dedicated smart search to find prompts by name, feature, or model. Apply smart filters to refine results by prompt type, label, status, model, or feature name. The sort function reorganizes the list based on your selected criteria.  
<img src="../images/prompt-library-with-search.png" alt="Prompts Library" title="Prompts Library" style="border: 1px solid gray; zoom:70%;"> 


## The More Options

The More Options menu next to each prompt allows you to perform the following actions:

* **View Associations**: See all nodes and features where the prompt is currently applied.
* **Edit**: Modify custom prompts.
* **Delete**: Deletes unused custom prompts (deletion is permanent). "In Use" and system prompts can't be deleted.
* **Advanced Configuration**: For system prompts, adjust the model's temperature and token limit.


## How to Add a Custom Prompt


### Pre-requisites

Before proceeding, ensure that you have successfully Integrated a Pre-built or Custom LLM. For more information, see[ LLM Integration](models-library.md).

To add a Custom prompt, follow the steps:




1. Go to **Generative AI Tools** > **Prompts Library**.

2. On the top right corner of the **Prompts Library** section, click **+ New Prompt**.
3. Enter the **prompt name**. Select the **feature** and the respective **model**. 

    ![alt_text](images/prl(13).png  )

4. The Configuration section consists of End-point URLs, Authentication, and Header values required to connect to a large language model. These are auto populated based on the input provided while model integration and aren't editable. 


    ![alt_text](images/prl(3).png  )

5. In the Request section, you can either create a Prompt from scratch or import the existing prompt from the Library to modify as needed. 
    ![alt_text](images/prl(9).png  )
    1. To import an existing prompt, do the following:
        1. Click **Import from Prompts and Requests Library**. All the newly added/custom prompts and prompts related to the pre-built LLM are displayed without integrating them.
            
            <img src="../images/import-from-library.gif" alt="Import from Prompts and Requests Library" title="Import from Prompts and Requests Library" style="border: 1px solid gray; zoom:70%;"> 
        
        2. Select the **Feature** from the dropdown menu, select the **Model**, and select the **Prompt** from the dropdown menu. Hover over and click Preview Prompt to view the prompt before importing.

            !!! note

                You have the flexibility to interchange a prompt designated for one feature with that of another, and vice versa.

        3. Click **Confirm** to get it imported into the JSON body.

    2. To create a prompt from scratch, click **Start from scratch** and enter the **JSON** request the LLM. 
    ![alt_text](images/prl(8).png  )

6. (Optional) Toggle the Stream Response if required. If enabled, the response is sent to the user piece by piece as it’s being created in real time, instead of waiting for the entire response to be generated before displaying it. By default, the response streaming is disabled.  
<img src="../images/stream-1.jpg" alt="Import from Prompts and Requests Library" title="Prompt Streaming" style="border: 1px solid gray; zoom:70%;">

    !!! note

        * If enabled, ensure to add a stream parameter to the custom prompt, e.g., “stream”: true, to get the streaming response. The saved prompt is displayed with the streaming tag in the prompts library.
        * If enabled, the “exist scenario” field is disabled.
        * The response streaming applies only to the Agent Node and Prompt Node features using OpenAI and Azure OpenAI models.  


6. After you type the JSON, the **Sample Context Values** fields are displayed. Fill in the values and click **Test**.
7. If the request values are correct, the response from the LLM is displayed. If not, an error message is displayed. 


    ![alt_text](images/prl(6).png  )

8. **Selecting a Key for Generating Response Path**  
The Platform receives the LLM response in the JSON format, which contains multiple data fields. To display the relevant information from the JSON to the end user, select the **key** that holds the specific information. The Platform then generates a **Response Path** that identifies the exact location of the information within the JSON response.  
For example, double-click the "content" key in the JSON structure and click **Save**.  
<img src="../images/selectkey.jpg" alt="Prompts Library" title="Prompts Library" style="border: 1px solid gray; zoom:70%;"> 



9. The **Response Path** is displayed. Click **Lookup Path**.  
<img src="../images/responsepath.jpg" alt="Prompts Library" title="Prompts Library" style="border: 1px solid gray; zoom:70%;"> 

10. The **Actual Response** and **Expected Response** are displayed. 
    1. If the response structure matches, the responses will be in green. Click **Save**. Skip to Step 12.

        **Note**: Both Actual Response and Expected Response aren't editable.
        ![alt_text](images/prl(2).png  )
    
    2. If the response structure doesn't match, the responses will be in red. Click **Configure** to modify the Actual Response. The Post Processor Script is displayed. 
    ![alt_text](images/prl(12).png  )
        
        1. Enter the **Post Processor Script**. Click **Save & Test**. 
            ![alt_text](images/prl(11).png  )
        2. The response is displayed. 
                ![alt_text](images/prl(4).png  )
        3. Click **Save**. The actual response and expected response turn green.

11. (Optional) If you have enabled Token Usage Limits for your Custom Model, map the Request Tokens key and Response Tokens key for accurate token tracking and Analytics. Without proper mapping, the Platform can't calculate token consumption, potentially leading to untracked usage and unexpected costs.
    * Request Tokens key: `usage.input_tokens`
    * Response Tokens key: `usage.output_tokens`  
    <img src="../images/token-mapping.png" alt="token mapping" title="token mapping" style="border: 1px solid gray; zoom:70%;">

12. Click **Save**. The request is added and displayed in the **Prompts Library** section.
 
13. Now proceed to enable [GenAI Features](genai-features.md).

		




