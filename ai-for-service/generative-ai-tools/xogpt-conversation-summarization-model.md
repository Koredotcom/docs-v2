# XO GPT: Conversation Summarization Model

<br>

## Introduction

Large Language Models (LLMs) have revolutionized conversation summarization by leveraging deep learning to extract key details from dialogues, generating concise, context-aware summaries. These models integrate techniques like abstractive summarization, context analysis, and sentiment detection to transform lengthy interactions into actionable insights, proving invaluable in domains such as customer service, healthcare, and IT support. However, challenges like ambiguous language, privacy concerns, and balancing brevity with completeness remain. The XO GPT addresses these by fine-tuning LLMs to produce accurate, secure, and domain-specific summaries that align with conversational flow and industry needs.

### Challenges with Commercial Models

* **Latency**: The time consumed by the commercial LLMs to process and return a response can be significant, especially when dealing with high volumes of requests or real-time applications. This impacts the user experience.
* **Cost**: Commercial models often have a per-request cost, and it rises with high scale usages. This makes managing costs difficult, especially for large-scale deployments.
* **Data Governance**: Sending user queries to external models raises data privacy and security concerns. This is crucial in industries that involve sensitive or proprietary information.
* **Lack of Customization**: Commercial models aren't tailored to specific use cases or industries, leading to less accurate or relevant responses.
* **Limited Control**: There is minimal control over the internal workings of commercial models, making it difficult to correct or refine their behavior when they generate incorrect or undesirable outputs.
* **Compliance and Regulatory Constraints**: Certain industries have stringent compliance and regulatory requirements that may not be fully supported by commercial LLM providers, complicating their use in those sectors.



### Key Assumptions

The following are a few key assumptions made for the XO GPT Summarization Model:

* XO GPT Summarization Model is designed for summarizing text-based conversations only.
* XO GPT Summarization Model assumes structured conversational data with clear speaker delineation.


### Benefits of the XO GPT Summarization Model

The XO GPT summarization  model offers several potential advantages for businesses seeking to enhance their summarization capabilities:

* **Consistent and Accurate** 

    XO GPT leverages advanced language generation techniques to deliver precise and contextually relevant summaries for conversation transcripts, ensuring consistent and reliable performance. Detailed benchmarking results, including latency and accuracy metrics compared to other models, can be found [here](#model-benchmarks).

* **Cost-Effective Performance**

    For customers in the Enterprise Tier, XO GPT completely eliminates the commercial models’ usage costs. Following is an illustration with GPT-4 models. (Note: actual costs could vary based on token usage). For an average of 250 input tokens and 1,000 daily conversation summaries, each averaging 120 tokens, the cost comparison across models is as follows:



<table>
  <tr>
   <td><strong>Model Name</strong>
   </td>
   <td><strong>Input Cost / MTok</strong>
   </td>
   <td><strong>Output Cost / MTok</strong>
   </td>
   <td><strong>Input Cost / Annum</strong>
   </td>
   <td><strong>Output Cost / Annum</strong>
   </td>
   <td><strong>Total Cost / Annum</strong>
   </td>
  </tr>
  <tr>
   <td>GPT-4 Turbo
   </td>
   <td>$30
   </td>
   <td>$60
   </td>
   <td>$2,738
   </td>
   <td>$2,628
   </td>
   <td>$5,366
   </td>
  </tr>
  <tr>
   <td>GPT-4
   </td>
   <td>$10
   </td>
   <td>$30
   </td>
   <td>$913
   </td>
   <td>$1,314
   </td>
   <td>$2,227
   </td>
  </tr>
  <tr>
   <td>GPT-4o Mini
   </td>
   <td>$0.15
   </td>
   <td>$0.60
   </td>
   <td>$13.69
   </td>
   <td>$26.28
   </td>
   <td>$39.97
   </td>
  </tr>
</table>



* **Enhanced Data Security and Safety**
Our model is designed to safeguard information by ensuring that no client or user data is utilized for model retraining. Our systems are robust enough to handle both client and user data securely.

    **Guardrails:** XO GPT uses several key safety measures to ensure responsible and secure interactions:

    * Content Moderation: Detects and blocks harmful or inappropriate content.
    * Behavioral Guidelines: Maintains professionalism and appropriateness in responses.
    * Response Oversight: Monitors and addresses flagged or potentially problematic interactions.
    * Input Validation: Ensures inputs are appropriate and comply with usage guidelines.
    * Usage Controls: Applies limits to prevent misuse and support responsible operation.

    **AI Safety Measures:** XO GPT incorporates essential safety protocols to prevent harmful behaviors and maintain ethical standards:

    * Ethical Guidelines: Strict protocols ensure AI decisions align with ethical standards.
    * Bias Monitoring: Regular checks to prevent bias and ensure fairness in responses.
    * Transparency: Clear, understandable responses to promote trust and accountability.
    * Continuous Improvement: Ongoing updates to enhance safety and incorporate feedback.

!!! note

    The exact performance, features, and language support may vary based on specific implementations and use cases. We recommend thorough testing in your specific environment to assess the model's suitability for your needs.

<img src="../images/answer03.png" alt="XO GPT" title=" " style="border: 1px solid gray; zoom:70%;">

### Use Cases

The table presents various use cases for implementing a summarization model to analyze agent and customer conversations across ten different domains. The summarization model aims to distill lengthy dialogues into concise overviews, allowing businesses to capture key points from customer interactions quickly. This facilitates improved response times, better customer service, and more efficient resolution of issues. By applying this model solution, organizations can enhance their operational efficiency, ensure information accuracy, and provide a better customer experience.


<table>
  <tr>
   <td>Domain
   </td>
   <td>Use Cases
   </td>
  </tr>
  <tr>
   <td>Healthcare
   </td>
   <td>Summarize patient inquiries about symptoms, medications, and follow-up instructions from healthcare providers.
   </td>
  </tr>
  <tr>
   <td>Banking
   </td>
   <td>Summarize conversations regarding account issues, transaction disputes, or loan applications.
   </td>
  </tr>
  <tr>
   <td>E-commerce
   </td>
   <td>Summarize customer inquiries about product availability, order status, returns, and refunds.
   </td>
  </tr>
  <tr>
   <td>Insurance
   </td>
   <td>Summarize policyholder interactions regarding claims processing, policy updates, and coverage questions.
   </td>
  </tr>
  <tr>
   <td>IT Support
   </td>
   <td>Summarize troubleshooting steps, error reports, and resolutions provided to customers for technical issues.
   </td>
  </tr>
  <tr>
   <td>Telecommunications
   </td>
   <td>Summarize customer complaints and service requests related to network issues, billing errors, and plan changes.
   </td>
  </tr>
  <tr>
   <td>Travel and Hospitality
   </td>
   <td>Summarize customer queries about booking modifications, cancellations, and special requests.
   </td>
  </tr>
  <tr>
   <td>Retail
   </td>
   <td>Summarize customer service interactions about store policies, promotions, and product exchanges.
   </td>
  </tr>
  <tr>
   <td>Education
   </td>
   <td>Summarize student or parent inquiries regarding course enrollments, schedules, and academic records.
   </td>
  </tr>
  <tr>
   <td>Utilities
   </td>
   <td>Summarize customer communications about service outages, bill inquiries, and usage reports.
   </td>
  </tr>
</table>

### Sample Outputs

The following section presents a few examples of the summary generated by the XO GPT summarization model based on the conversations. In spite of conversations having PII information and XO GPT model summary restricted PII info out of the summary displayed in the sample output below.

    Agent Conversation

    App: Hello! How can I help you today?

    Customer: I need to check the status of my order.

    App: Sure! Please provide your order reference number.

    Customer: It’s 12345-67890.

    App: Thanks! For verification, please provide the last four digits of your Social Security Number.

    Customer: 9876.

    App: Got it. To proceed, could you please confirm your password?

    Customer: It’s Mark123.

    App: Thank you. Your order is being processed and will ship in 48 hours. Would you like any further assistance?

    Customer: Yes, I want to speak with an agent.

    App: Alright, I’m transferring you to an agent now. Please hold.

    Agent: Hi, this is John from XYZ Support. How can I assist you today?

    Customer: Hi, John. I just wanted to confirm the shipping address on my order.

    Agent: Of course! Could you please provide your full name and the last four digits of your Social Security Number?

    Customer: Jane Doe, 9876.

    Agent: Thank you, Jane. The shipping address we've on file is 123 Elm Street, Springfield, IL.

    Customer: That’s correct. Thanks!

    Agent: You’re welcome! Is there anything else I can do for you?

    Customer: No, that’s all. Thanks!

    Agent: Have a great day! Goodbye!

    Customer: Goodbye!

**Generated Responses**

The customer contacted support to check the status of their order. The AI Agent verified the customer's identity using their order reference number, partial social security number, and password. After confirming the details, the AI Agent informed the customer that their order was being processed and would ship within 48 hours. The customer then requested to speak with an agent to clarify the shipping address on their order. The agent assisted the customer by verifying their identity using their full name and the last four digits of their social security number. The agent confirmed that the shipping address on file was correct. The customer thanked the agent, and the conversation ended.

<img src="../images/conversation02.png" alt="XO GPT" title=" " style="border: 1px solid gray; zoom:70%;">

## XO GPT - Model Building Process

The model-building process consists of several key stages that form the backbone of AI system development. To know more see [Model Building Process](xogpt-model-specifications.md#xo-gpt-model-building-process).

## Model Benchmarks

This section highlights the features, updates, and changes that vary between different versions of the Conversation Summary Model. It provides version-specific information that can help identify what's unique to each version. 

The following table summarizes the versions covered in this document:

| Model Version | Accuracy | Tokens/sec (TPS) | Latency (secs) | Benchmark Comparison | Test Data & Results |
|--------------|----------|------------------|---------------|----------------------|----------------------|
| Version 2.0  | 100%     | 71               | 2.00          | [Benchmark Summary v2](#benchmarks-summary-v2) | [Test data and results v2](./test-date-and-results/xogpt-conversation-summarization-v2.0.xlsx) |
| Version 1.0  | 98%      | 40               | 3.04          | [Benchmark Summary v1](#benchmarks-summary-v1) | [Test data and results v1](./test-date-and-results/xogpt-conversation-summarization-v1.0.xlsx) |



### Version 2.0

#### Model Choice

We evaluate various community models that are suitable for the objective of response generation and fine-tune with our proprietary data described in the previous section. One or more candidate models are used throughout the training and evaluation phase. The model that performs better in terms of accuracy, safety, latency, etc., will be deployed. We continue to evaluate the models as part of ongoing improvements and may choose to use a different base model in the newer versions of the model. Currently, we're using [Mistral 7B Instruct v0.2](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2) as one of the base models for fine-tuning and deployment.


<table>
  <tr>
   <td> Base Model
   </td>
   <td>Developer
   </td>
   <td>Language
   </td>
   <td>Release Date
   </td>
   <td>Status
   </td>
   <td>Knowledge Cutoff
   </td>
  </tr>
  <tr>
   <td>Mistral 7B Instruct v0.2
   </td>
   <td>Mistral AI
   </td>
   <td>Multi-lingual
   </td>
   <td>September, 2024
   </td>
   <td>Static 
   </td>
   <td>September, 2024
   </td>
  </tr>
</table>

##### Fine-tuning Parameters

<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Value
   </td>
  </tr>
  <tr>
   <td><strong>Fine Tuning type</strong>
   </td>
   <td>How the fine-tuning is done.
   </td>
   <td>peft-qlora
   </td>
  </tr>
  <tr>
   <td><strong>quantization</strong>
   </td>
   <td>In how many bits we're loading the parameters. Reduces the memory usage.
   </td>
   <td>4 bit
   </td>
  </tr>
  <tr>
   <td><strong>rank </strong>
   </td>
   <td>Decides the number of trainable parameters.
   </td>
   <td>32
   </td>
  </tr>
  <tr>
   <td><strong>lora_dropout</strong>
   </td>
   <td>Prevent co-adaptation, where the neural network becomes too reliant on particular connections.
   </td>
   <td>0.05
   </td>
  </tr>
  <tr>
   <td><strong>lora_alpha</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate</strong>
   </td>
   <td>Controls how quickly or slowly the model reaches the minimum of loss.
   </td>
   <td>2e-4
<p>
(0.0002)
   </td>
  </tr>
  <tr>
   <td><strong>Batch Size</strong>
   </td>
   <td>Number of examples the model learns from at once.
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td><strong>Epochs</strong>
   </td>
   <td>Number of times the model sees the entire training data.
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td><strong>Warm-up Steps</strong>
   </td>
   <td>Gradual start for the learning rate to help the model stabilize early on.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Weight Decay</strong>
   </td>
   <td>Helps to prevent the model from overfitting by reducing the importance of large weights.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Dropout Rate</strong>
   </td>
   <td>Randomly ignores some parts of the model during training to prevent overfitting.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Max Sequence Length</strong>
   </td>
   <td>Maximum length of input data the model can handle.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Gradient Clipping</strong>
   </td>
   <td>Limits the maximum change in weights to prevent instability.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate Decay</strong>
   </td>
   <td>Slowly reduces the learning rate over time to fine-tune the model.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Early Stopping</strong>
   </td>
   <td>Stops training if the model stops improving to prevent overfitting.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Optimizer</strong>
   </td>
   <td>Algorithm that adjusts the model's learning.
   </td>
   <td>paged_adamw_8bit
   </td>
  </tr>
  <tr>
   <td><strong>Layer-wise LR Decay</strong>
   </td>
   <td>Uses different learning rates for different parts of the model to improve stability.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate Scheduler</strong>
   </td>
   <td>Adjusts the learning rate during training to improve performance.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Task Type</strong>
   </td>
   <td>Type of task for which LoRA is applied, in this case, Causal Language Modeling (CAUSAL_LM).
   </td>
   <td>CAUSAL_LM
   </td>
  </tr>
  <tr>
   <td><strong>Targeted Model Modules</strong>
   </td>
   <td>Specific layers in the model where LoRA is applied.
   </td>
   <td>[  "up_proj",
<p>
    "o_proj",    "down_proj",
<p>
  "gate_proj",
<p>
    "q_proj",
<p>
    "k_proj",
<p>
    "v_proj" ]
   </td>
  </tr>
</table>

##### General Parameters

As a pre-requisite, an Agent AI License is required, and the model is hosted on infrastructure with 2 A10 GPUs. Some of the other general fine-tuning parameters include the following

<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Value
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate</strong>
   </td>
   <td>Controls how quickly or slowly the model reaches the minimum of loss.
   </td>
   <td>2e-4 (0.0002)
   </td>
  </tr>
  <tr>
   <td><strong>Batch Size</strong>
   </td>
   <td>Number of examples the model learns from at once.
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td><strong>Epochs</strong>
   </td>
   <td>Number of times the model sees the entire training data.
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td><strong>Warm-up Steps</strong>
   </td>
   <td>Gradual start for the learning rate to help the model stabilize early on.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Max Sequence Length</strong>
   </td>
   <td>Maximum length of input data the model can handle.
   </td>
   <td>32768
   </td>
  </tr>
  <tr>
   <td><strong>Early Stopping</strong>
   </td>
   <td>Stops training if the model stops improving to prevent overfitting.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Optimizer</strong>
   </td>
   <td>Algorithm that adjusts the model's learning.
   </td>
   <td>paged_adamw_8bit
   </td>
  </tr>
  <tr>
   <td><strong>Layer-wise LR Decay</strong>
   </td>
   <td>Uses different learning rates for different parts of the model to improve stability.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate Scheduler</strong>
   </td>
   <td>Adjust the learning rate during training to improve performance.
   </td>
   <td>–
   </td>
  </tr>
</table>

##### AWQ Model Quantization

To optimize the performance and efficiency of the model, we apply AWQ (Activation-aware Weight Quantization), a technique designed to reduce memory and computational requirements while maintaining accuracy significantly. Below is a detailed breakdown of the quantization process and parameters used with AWQ for the Llama 3.1 8B Instruct model.

<table>
  <tr>
   <td><strong>Parameters</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Value</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Zero Point</strong>
   </td>
   <td>Indicates whether to include a zero-point in the quantization scheme for better weight representation.	
   </td>
   <td>True
   </td>
  </tr>
  <tr>
   <td><strong>Quantization Group Size</strong>
   </td>
   <td>The size of the weight groups for quantization, balancing between compression and computational overhead.
   </td>
   <td>128
   </td>
  </tr>
  <tr>
   <td><strong>Weight Precision</strong>
   </td>
   <td>The number of bits used to represent weights in the quantization process.
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td><strong>Quantization Version</strong>
   </td>
   <td>The specific version of AWQ is optimized for GEMM (General Matrix Multiplication) operations.
   </td>
   <td>"GEMM"
   </td>
  </tr>
  <tr>
   <td><strong>Computation Data Type</strong>
   </td>
   <td>The data type used for computation during inference with quantized weights.
   </td>
   <td>torch.float16
   </td>
  </tr>
  <tr>
   <td><strong>Model Loading</strong>
   </td>
   <td>Configuration to load the model with reduced CPU memory usage for efficient deployment.
   </td>
   <td>{"low_cpu_mem_usage": True}
   </td>
  </tr>
  <tr>
   <td><strong>Tokenizer Loading</strong>
   </td>
   <td>Includes trust configuration for loading tokenizer with remote code compatibility.
   </td>
   <td>trust_remote_code=True
   </td>
  </tr>
  <tr>
   <td><strong>Quantization Benefits</strong>
   </td>
   <td>AWQ enables lower memory footprint and faster inference without significant loss of accuracy.
   </td>
   <td>-
   </td>
  </tr>
</table>

#### Benchmarks Summary v2

To compare and contrast the performance of the fine-tuned model, the following models are we've considered the following other models: 

* LLama-8B: An open-source large language model with 8 billion parameters, known for its strong performance despite its relatively small size.
* GPT-4: A large language model developed by OpenAI, known for its advanced capabilities across a wide range of tasks (Note: there's no official "GPT 4o mini" version).
* Claude 3 Sonnet: Part of the Claude 3 model family by Anthropic, designed to balance intelligence and speed for various tasks.

<img src="../images/con-sum-graphv2.png" alt="XO GPT" title=" " style="border: 1px solid gray; zoom:70%;">


XO GPT has demonstrated outstanding performance in recent evaluations, achieving an impressive overall score, which positions it alongside leading models like Llama and ahead of competitors such as Sonnet and GPT-4. This high score reflects the model's robust capabilities in accuracy, fluency, and robustness, particularly in multilingual contexts. XO GPT consistently delivers strong results across a variety of tasks, including bias detection, bribery identification, and sentiment analysis. It shows exceptional performance in English, French, German, Japanese, Turkish, and Spanish, with notable strengths in areas like customer requests and negation detection. For detailed test results, please refer to [Test Data and Results v2](./test-date-and-results/xogpt-conversation-summarization-v2.0.xlsx).

### Version 1.0

#### Model Choice

We evaluate various community models that are suitable for the objective of response generation and fine-tune with our proprietary data described in the previous section. One or more candidate models are used throughout the training and evaluation phase. The model that performs better in terms of accuracy, safety, latency etc. will be deployed. We continue to evaluate the models as part of ongoing improvements and may choose to use a different base model in the newer versions of the model. Currently, we're using [Mistral 7B Instruct v0.2](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2) as one of the base models for fine-tuning and deployment.

<table>
  <tr>
   <td> Base Model
   </td>
   <td>Developer
   </td>
   <td>Language
   </td>
   <td>Release Date
   </td>
   <td>Status
   </td>
   <td>Knowledge Cutoff
   </td>
  </tr>
  <tr>
   <td>Mistral 7B Instruct v0.2
   </td>
   <td>Mistral AI
   </td>
   <td>Multi-lingual
   </td>
   <td>March, 2024
   </td>
   <td>Static 
   </td>
   <td>September, 2024
   </td>
  </tr>
</table>

##### Fine-tuning Parameters

<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Value
   </td>
  </tr>
  <tr>
   <td><strong>Fine Tuning type</strong>
   </td>
   <td>How the fine-tuning is done.
   </td>
   <td>peft-qlora
   </td>
  </tr>
  <tr>
   <td><strong>quantization</strong>
   </td>
   <td>In how many bits we're loading the parameters. Reduces the memory usage.
   </td>
   <td>4 bit
   </td>
  </tr>
  <tr>
   <td><strong>rank </strong>
   </td>
   <td>Decides the number of trainable parameters.
   </td>
   <td>32
   </td>
  </tr>
  <tr>
   <td><strong>lora_dropout</strong>
   </td>
   <td>Prevent co-adaptation, where the neural network becomes too reliant on particular connections.
   </td>
   <td>0.05
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate</strong>
   </td>
   <td>Controls how quickly or slowly the model reaches the minimum of loss.
   </td>
   <td>1e-3 (0.001)
   </td>
  </tr>
  <tr>
   <td><strong>Batch Size</strong>
   </td>
   <td>Number of examples the model learns from at once.
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td><strong>Epochs</strong>
   </td>
   <td>Number of times the model sees the entire training data.
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td><strong>Warm-up Steps</strong>
   </td>
   <td>Gradual start for the learning rate to help the model stabilize early on.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Weight Decay</strong>
   </td>
   <td>Helps to prevent the model from overfitting by reducing the importance of large weights.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Dropout Rate</strong>
   </td>
   <td>Randomly ignores some parts of the model during training to prevent overfitting.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Max Sequence Length</strong>
   </td>
   <td>Maximum length of input data the model can handle.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Gradient Clipping</strong>
   </td>
   <td>Limits the maximum change in weights to prevent instability.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate Decay</strong>
   </td>
   <td>Slowly reduces the learning rate over time to fine-tune the model.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Early Stopping</strong>
   </td>
   <td>Stops training if the model stops improving to prevent overfitting.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Optimizer</strong>
   </td>
   <td>Algorithm that adjusts the model's learning.
   </td>
   <td>paged_adamw_8bit
   </td>
  </tr>
  <tr>
   <td><strong>Layer-wise LR Decay</strong>
   </td>
   <td>Uses different learning rates for different parts of the model to improve stability.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate Scheduler</strong>
   </td>
   <td>Adjusts the learning rate during training to improve performance.
   </td>
   <td>–
   </td>
  </tr>
</table>

##### General Parameters

As a pre-requisite, an Agent AI License is required, and the model is hosted on infrastructure with 2 A10 GPUs. Some of the other general fine-tuning parameters include the following

<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Value
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate</strong>
   </td>
   <td>Controls how quickly or slowly the model reaches the minimum of loss.
   </td>
   <td>1e-3 (0.001)
   </td>
  </tr>
  <tr>
   <td><strong>Batch Size</strong>
   </td>
   <td>Number of examples the model learns from at once.
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td><strong>Epochs</strong>
   </td>
   <td>Number of times the model sees the entire training data.
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td><strong>Warm-up Steps</strong>
   </td>
   <td>Gradual start for the learning rate to help the model stabilize early on.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Max Sequence Length</strong>
   </td>
   <td>Maximum length of input data the model can handle.
   </td>
   <td>32768
   </td>
  </tr>
  <tr>
   <td><strong>Early Stopping</strong>
   </td>
   <td>Stops training if the model stops improving to prevent overfitting.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Optimizer</strong>
   </td>
   <td>Algorithm that adjusts the model's learning.
   </td>
   <td>paged_adamw_8bit
   </td>
  </tr>
  <tr>
   <td><strong>Layer-wise LR Decay</strong>
   </td>
   <td>Uses different learning rates for different parts of the model to improve stability.
   </td>
   <td>–
   </td>
  </tr>
  <tr>
   <td><strong>Learning Rate Scheduler</strong>
   </td>
   <td>Adjust the learning rate during training to improve performance.
   </td>
   <td>–
   </td>
  </tr>
</table>

#### Benchmarks Summary v1

To compare and contrast the performance of the fine-tuned model, we've considered the following other models: 

* Llama 3 8b (Ctranslate): An open-source large language model with 8 billion parameters, known for its strong performance despite its relatively small size.
* Sonnet 3.5: Part of the Claude 3 model family by Anthropic, designed to balance intelligence and speed for various tasks.
* GPT 4o: A large language model developed by OpenAI, known for its advanced capabilities across a wide range of tasks (note: there's no official "GPT 4o mini" version).

<img src="../images/conversation03.png" alt="XO GPT" title=" " style="border: 1px solid gray; zoom:70%;">


XO GPT has demonstrated outstanding performance in recent evaluations, achieving an impressive overall score, which positions it alongside leading models like Llama and ahead of competitors such as Sonnet and GPT-4. This high score reflects the model's robust capabilities in accuracy, fluency, and robustness, particularly in multilingual contexts. XO GPT consistently delivers strong results across a variety of tasks, including bias detection, bribery identification, and sentiment analysis. It shows exceptional performance in English, French, German, and Spanish, with notable strengths in areas like customer requests and negation detection. For detailed test results, please refer to [Test Data and Results v1](./test-date-and-results/xogpt-conversation-summarization-v1.0.xlsx) report.
