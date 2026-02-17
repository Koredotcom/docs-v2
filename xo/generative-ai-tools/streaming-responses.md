# Streaming Responses

Streaming responses in large language models (LLMs) enable real-time, incremental output generation. The model transmits pieces of the output as they become available, instead of waiting for the entire response to compute. This approach not only reduces latency and enhances user interaction but also fosters a sense of immediate connection, mirroring real-time communication. Streaming is particularly beneficial in applications requiring dynamic updates, such as conversational AI Agent, speech-to-text systems, and real-time content-generation tools.

## Current Capabilities

The Platform support the voice-based channel [Voice Gateway](../channels/voice-gateway/configure-voice-gateway.md) for GenAI features, including Agent Node, with Deepgram as the supported TTS engine. Additionally, we provide seamless integration with models from OpenAI and Azure OpenAI. Our Custom Prompt capability enables integration with other LLMs, allowing businesses to use non-system models by defining their own prompts, provided the LLM supports streaming.

The Platform delivers real-time LLM response streaming for chat conversations on [Web/Mobile SDK](../sdk/bot-sdk-introduction.md) Channels. Agent Node and Prompt Node features deliver AI responses token by token, showing incremental replies to boost engagement and reduce latency. Text streaming activates when you select a streaming prompt at the node level, even if the feature-level prompt doesn't use streaming.

!!! Note "Agent Node Tool Calling and Streaming Support"

    * V1 Custom JavaScript Prompts: Supports tool calling and streaming as separate capabilities, but not simultaneously.
    * V2 Custom JavaScript Prompts: Supports both tool calling and streaming together using OpenAI/Azure OpenAI response format.


### Benefits of Streaming

* Real-Time Output: Generates and displays text instantly, reducing wait times.
* Lower Latency: Speeds up response time, enhancing user experience.
* Improved Interaction Flow: Partial outputs support iterative writing and brainstorming.
* Optimized for Live Applications: Enhances real-time chat, speech-to-text, and code autocompletion.

### Use Case

Streaming responses unlocks significant benefits across various industries, enhancing real-time interactions and delivering incremental updates that improve user experience and operational efficiency.

| **Domain**           | **Use Cases**  |
|------------------|-------|
| Healthcare        | Streaming comprehensive summaries of patient history or medical guidelines.                                                            |
|                  | Delivering in-depth analysis of clinical studies or medical research in real time.                                                     |
| Finance           | Streaming detailed breakdowns of investment portfolios or market analysis.                                                            |
|                  | Providing incremental summaries of compliance documents and regulations.                                                               |
| E-commerce        | Streaming extensive side-by-side comparisons of products for informed decision-making.                                                |
| Education         | Delivering detailed outlines or summaries of academic courses or study materials.                                                     |
| Legal             | Streaming detailed explanations of legal precedents and their relevance to current cases. Providing incremental analysis and feedback on lengthy legal contracts. |
| Customer Support  | Streaming detailed troubleshooting steps for intricate customer issues or technical problems.                                          |
| Human Resources   | Streaming detailed explanations of HR policies or benefit packages for employees.                                                     |
| Marketing         | Streaming in-depth analysis of marketing campaigns and their ROI.                                                                     |

## Enable Streaming for GenAI Features

### Select Default Streaming Prompt

The Platform provides Default-Streaming prompts in addition to default (non-streaming) prompts for Agent Node and Prompt Node only for the OpenAI models.

Go to **Generative AI Tools** > **GenAI Features** and select the default-streaming prompt for required GenAI feature. You can also create custom streaming prompts for this model.  
<img src="../images/default-streaming.png" alt="default-streaming" title="Default Streaming Prompt" style="border: 1px solid gray; zoom:70%;">


### Create Custom Streaming Prompts

To create a custom streaming prompt, see [How to add Prompts and Requests](prompts-library.md) and enable the streaming response toggle.

Ensure that the streamed response follows the Platform's required format:

* conv_status: Indicates whether the conversation has **ended** or is **ongoing**.
* AI Agent response: The generated response sent to the end user.
* collected entities: A stringified JSON object containing extracted entities.

!!! note

    * When enabled, add the required stream parameter to the custom prompt for the model to recognize streaming. For example, "stream": true for OpenAI and Azure OpenAI.
    * The saved prompt appears with a stream tag in the prompts library. 
    * Enabling streaming disables the “Exit Scenario”, “AI Agent Response”, “Collected Entities”, and “Tool Call Request” (for Agent Node) fields.

## Benchmarking

| Task             | Mode         | Input Tokens | Output Tokens | Time Taken (seconds) | Reduction (%)                      |
|------------------|--------------|--------------|----------------|----------------|------------------------------------|
| Agent Node       | Non-streaming| 777          | 90             | 2.59           | Output: - 30%, Time: 83%           |
|                  | Streaming    | 676          | 62             | 0.44           |                                    |
| 50-word Joke     | Non-streaming| 95           | 54             | 2.4            | Output: +10%, Time: 80%           |
|                  | Streaming    | 68           | 60             | 0.47           |                                    |
| 500-word Joke    | Non-streaming| 95           | 595            | 22.39          | Output: +10%, Time: 98%           |
|                  | Streaming    | 68           | 649            | 0.41           |                                    |
| 500-word Joke    | Non-streaming| 68           | 642            | 30.11          | Output: - 0.05%, Time: 97%         |
|                  | Streaming    | 68           | 641            | 0.88           |                                    |
| 500-word Story   | Non-streaming| 68           | 616            | 16.86          | Output: +2.27%, Time: 97.5%       |
|                  | Streaming    | 68           | 630            | 0.44           |                                    |
| 500-word Essay   | Non-streaming| 70           | 687            | 22.23          | Output: +1.46%, Time: 97.15%      |
|                  | Streaming    | 70           | 697            | 0.63           |                                    |

Efficiency in Streaming Mode:

* Output &lt; 100 Tokens: Time reduction of 80%-85%.
* Output 100-600 Tokens: Time reduction of 97%-98%.
* Output > 600 Tokens: Time reduction of 98%-99%.

Key Insights:

* Streaming mode demonstrates exponential efficiency gains as output size increases.
* Minimal impact on output quality (≤2.5% variance) ensures task reliability.
* Significant time savings make streaming ideal for long-form content generation and real-time use cases.

!!! note

    The following benchmarking results were conducted on our system under specific scenarios. Performance may vary depending on your unique environment and use cases. We recommend conducting your own due diligence before enabling streaming. These benchmarks are provided solely for reference purposes and do not guarantee similar outcomes in all situations.

## Analytics

As part of the Platform's Analytics module updates, the enhancements better tracks and differentiate streaming and non-streaming responses. The LLM Usage Logs main screen now includes a new column called "TTFT" (Time to First Token), which applies only to streaming responses. Additionally, the Detailed Log page now includes a Response Type field to indicate whether a response is streaming or non-streaming, offering more precise insights into response behavior.

* **TTFT (Time to First Token)**: This metric reflects the time it takes for the first token to appear in the response. For the final chunk of a response volley, the system leaves TTFT blank because it doesn't send any further messages to the user.

* **Response Duration**: Indicates the time taken by the LLM from generating the first chunk to the final chunk.

This detailed analytics data is available at the **Usage Logs** in the Platform.

<img src="../images/streaming-logs.png" alt="Usage Logs" title="Default Streaming Usage Logs" style="border: 1px solid gray; zoom:70%;">

<img src="../images/streaming-details.png" alt="Usage Logs" title="Usage Summary" style="border: 1px solid gray; zoom:70%;">

## Considerations for Streaming

While streaming enhances real-time interactions and user experience, certain limitations applies.

* Post-processing operations aren't possible, as they require the complete response, which conflicts with the nature of streaming.
* Guardrails aren't supported in streaming mode, as content moderation typically requires full-context evaluation, which is incompatible with token-by-token streaming.
* The effectiveness of voice-based streaming also depends on the TTS engine’s support for bi-directional streaming, limiting compatibility to specific engines that offer this capability, such as Deepgram.
* When BotKit is enabled, interception of streamed response messages isn't supported due to the real-time delivery process.


!!! note

    The quality of streaming responses is highly dependent on the prompts written, and since LLMs are subject to hallucination, it is essential to perform your own due diligence. Ensure that the prompts are accurate and aligned with the desired output for reliable performance.
