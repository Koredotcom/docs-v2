# XO GPT - User Query Paraphrasing Model

<br>

## Introduction

User Query Paraphrasing Model has been meticulously designed to enhance the quality and naturalness of an AI Agent interactions. By refining the language and structure of predefined responses, our model not only preserves the conversation's context but also co-refers to the details in the user query to the context. This ensures that responses are more engaging, human-like, and empathetic, significantly improving the overall user experience.

This model excels at creating interactions that feel more authentic and relatable. It intelligently adjusts responses to reflect the user's emotions and conversational flow, fostering a deeper connection and satisfaction. This technology is ideal for various applications, including customer support, an AI Agent, and interactive platforms, where the quality of communication directly impacts user engagement and loyalty. With our model, your AI Agent can deliver responses that aren't only accurate but also beautifully crafted to resonate with users.

### Challenges with Commercial Models

* **Latency**: The time consumed by the commercial LLMs to process and return a response can be significant, especially when dealing with high volumes of requests or real-time applications. This impacts the user experience.
* **Cost**: Commercial models often have a per-request cost, and it rises with high scale usages. This makes managing costs difficult, especially for large-scale deployments.
* **Data Governance**: Sending user queries to external models raises data privacy and security concerns. This is crucial in industries that involve sensitive or proprietary information.
* **Lack of Customization**: Commercial models aren't tailored to specific use cases or industries, leading to less accurate or relevant responses.
* **Limited Control**: There is minimal control over the internal workings of commercial models, making it difficult to correct or refine their behavior when they generate incorrect or undesirable outputs.
* **Compliance and Regulatory Constraints**: Certain industries have stringent compliance and regulatory requirements that may not be fully supported by commercial LLM providers, complicating their use in those sectors.


### Key Assumptions

The following are a few key assumptions made for the XO GPT User Query Paraphrasing Model -

* The model is designed to work with text based conversations only.
* The model paraphrases the user query only when it references or co-refers to details from the previous conversation context. It does not paraphrase the user input in all other cases.

### Benefits of XO GPT User Query Paraphrasing Model

The XO GPT Query Paraphrasing Model offers several advantages for businesses seeking to provide enhanced customer service experience:

* **Contextual Communication**

    XO GPT adapts user queries to the conversation context, enabling it to interpret user intent and facilitate meaningful, satisfying interactions accurately. Detailed performance insights, including context-awareness and response relevance, can be found [here](#model-benchmarks).

* **Cost-Effective Performance**

    For customers in the Enterprise Tier, XO GPT completely eliminates the commercial models’ usage costs. Following is an illustration with GPT-4 models. (Note: actual costs could vary based on token usage). For instance, with an average of 100 input tokens for user-AI Agent conversation and 10,000 daily interactions, where each response averages 15 tokens, the cost comparison between models is as follows:



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
   <td>$10,950
   </td>
   <td>$3,285
   </td>
   <td>$14,235
   </td>
  </tr>
  <tr>
   <td>GPT-4
   </td>
   <td>$10
   </td>
   <td>$30
   </td>
   <td>$3,650
   </td>
   <td>$1,643
   </td>
   <td>$5,293
   </td>
  </tr>
  <tr>
   <td>GPT-4o Mini
   </td>
   <td>$0.15
   </td>
   <td>$0.60
   </td>
   <td>$54.75
   </td>
   <td>$32.85
   </td>
   <td>$87.60
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

The use cases of a user query paraphrasing span various domains, each benefiting from the model’s ability to provide accurate responses and seamless communication.


<table>
  <tr>
   <td><strong>Domain</strong>
   </td>
   <td><strong>Use Case</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Customer Support
   </td>
   <td>Simplify complex user queries for an AI Agent for accurate intent detection.
   </td>
  </tr>
  <tr>
   <td>Remove ambiguous references to help match queries to the most relevant results.
   </td>
  </tr>
  <tr>
   <td>Enable contextual continuity in multi-turn conversations without losing clarity.
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Healthcare
   </td>
   <td>Simplify complex patient inquiries for easier processing.
   </td>
  </tr>
  <tr>
   <td>Eliminate co-references in queries to ensure a precise understanding of patient history or ongoing treatments.
   </td>
  </tr>
  <tr>
   <td>Refine symptom-related questions for accurate analysis and recommendations by digital health tools.
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Banking & Finance
   </td>
   <td>Clarify customer queries about account actions, ensuring seamless execution of financial tasks.
   </td>
  </tr>
  <tr>
   <td>Simplify follow-up queries regarding account details or previous interactions for better comprehension.
   </td>
  </tr>
  <tr>
   <td>Make ambiguous inquiries about financial products or services clearer for accurate responses.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Education
   </td>
   <td>Clarify multi-part or context-heavy student queries during online lessons for more effective guidance.
   </td>
  </tr>
  <tr>
   <td>Simplify questions about schedules, prerequisites, or course content for better clarity.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Human Resources
   </td>
   <td>Clarify ambiguous HR-related questions, such as benefits or leave policies, for accurate automated responses
   </td>
  </tr>
  <tr>
   <td>Rephrase questions about workplace policies to ensure clarity in an AI Agent responses.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Legal
   </td>
   <td>Simplify user queries about legal contracts or policies to improve understanding.
   </td>
  </tr>
  <tr>
   <td>Make complex legal questions clearer for quick and accurate replies.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >E-commerce
   </td>
   <td>Rephrase follow-up queries about orders or shipments for accurate updates.
   </td>
  </tr>
  <tr>
   <td>Eliminate ambiguities in return or refund-related queries for smooth resolution.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Social Media
   </td>
   <td>Clarify questions about flagged content or platform policies to ensure proper resolution.
   </td>
  </tr>
  <tr>
   <td>Simplify user queries about account settings or privacy issues for accurate assistance.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >IT Support
   </td>
   <td>Rephrase vague or context-dependent user queries about technical issues for faster resolutions.
   </td>
  </tr>
  <tr>
   <td>Eliminate co-references in user-reported issues for clear problem identification.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Travel & Hospitality
   </td>
   <td>Clarify multi-part or ambiguous booking inquiries to streamline the reservation process.
   </td>
  </tr>
  <tr>
   <td>Simplify user questions about changes or additions to travel plans for accurate responses.
   </td>
  </tr>
</table>


### Sample Outputs

The following section presents a few examples of the answers generated by the XO GPT User Query Paraphrasing model based on the conversation history. 

**Ingested Content (Chunks)**

User: Hi, can you help me select a University for studying Physics?

AI Agent: Sure, Here are some of the top Universities for studying Physics: 1. Harvard University 2. MIT 3. Stanford 4. University of Cambridge. Which sounds best to you?

User: Which one is best in fee structure.

AI Agent: Generally, the tuition fees for an Undergraduate course in Physics is most affordable at Stanford.

User: Ok, I'll choose that one.

**XO GPT Model Generated Responses**:

User: Ok, I will choose to apply at Stanford University for a Physics course.

## XO GPT - Model Building Process

The model-building process consists of several key stages that form the backbone of AI system development. To know more see [Model Building Process](xogpt-model-specifications.md#xo-gpt-model-building-process).

## Model Benchmarks

This section highlights the features, updates, and changes that vary across different versions of the User Query Paraphrasing Model. It provides version-specifics, which can help identify what's unique to each version. 

The following table summarizes the versions covered in this document:

| Model Version | Accuracy | Tokens/sec (TPS) | Latency (secs) | Benchmark Comparison | Test Data & Results |
|--------------|----------|------------------|---------------|----------------------|----------------------|
| Version 1.0  | 97%      | 43               | 0.54          | [Benchmark Summary v1](#benchmarks-summary-v1) | [Test data and results v1](./test-date-and-results/xogpt-user-query-paraphrasing-v1.0.xlsx) |




### Version 1.0


#### Model Choice

We evaluated various community models that are suited for response generation and fine-tuned our proprietary data described in the previous section. One or more candidate models were used throughout the training and evaluation phase. The model that performed better in terms of accuracy, safety, latency, etc. was deployed. We continue to evaluate the models as part of ongoing improvements and may choose to use a different base model in the newer versions of the model. Currently, we're using [Mistral 7B Instruct v0.2](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2) as the base model for fine-tuning and deployment.


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


Fine-tuning Parameters


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
   <td><strong>Load in 4-bit Precision</strong>
   </td>
   <td>Loads the model weights in 4-bit precision to reduce memory usage.	
   </td>
   <td>True
   </td>
  </tr>
  <tr>
   <td><strong>Use Double Quantization </strong>
   </td>
   <td>Uses double quantization to improve model accuracy.
   </td>
   <td>True
   </td>
  </tr>
  <tr>
   <td><strong>4-bit Quantization Type</strong>
   </td>
   <td>Type of quantization used for 4-bit precision.
   </td>
   <td>nf4
   </td>
  </tr>
  <tr>
   <td><strong>Computation Data Type</strong>
   </td>
   <td>Data type used for computation with 4-bit quantized weights.
   </td>
   <td>torch.float16
   </td>
  </tr>
  <tr>
   <td><strong>LoRA Rank</strong>
   </td>
   <td>Rank of the low-rank decomposition in LoRA.
   </td>
   <td>32
   </td>
  </tr>
  <tr>
   <td><strong>LoRA Alpha (Scaling Factor)</strong>
   </td>
   <td>LoRA scaling factor.
   </td>
   <td>16
   </td>
  </tr>
  <tr>
   <td><strong>LoRA Dropout Rate</strong>
   </td>
   <td>Dropout rate for LoRA layers to prevent overfitting.
   </td>
   <td>0.05
   </td>
  </tr>
  <tr>
   <td><strong>Bias Term Inclusion</strong>
   </td>
   <td>Specifies whether to add bias terms in the LoRA layers.
   </td>
   <td>-
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
   <td>["query_key_value"]
   </td>
  </tr>
</table>

#### General Parameters

The model is hosted on infrastructure with A10 - g5-xlarge. Some of the other general fine-tuning parameters include the following


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
   <td>32k 
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

### Benchmarks Summary v1

To compare and contrast the performance of the fine-tuned model, we've considered the following other models: 

* Flan-T5: An open-source language model designed for fine-tuned performance across a variety of natural language processing tasks, including summarization, translation, and conversational AI Agents.
* GPT-4: OpenAI's advanced language model, known for exceptional reasoning and language generation across diverse tasks, including summarization, content creation, and conversational AI Agents.

<img src="../images/user01.png" alt="XO GPT" title=" " style="border: 1px solid gray; zoom:70%;">

By leveraging its strengths in performance, latency, and responsible AI principles, XO GPT is well-positioned as a high-performing language model. For a deeper dive into the evaluation process and results, refer to the [Test Data and Results v1](./test-date-and-results/xogpt-user-query-paraphrasing-v1.0.xlsx) report.