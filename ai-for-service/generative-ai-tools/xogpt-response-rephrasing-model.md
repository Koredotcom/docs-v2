# XO GPT - Response Rephrasing Model

<br>

## Introduction

The Response Rephrasing model has been meticulously designed to enhance the quality and naturalness of an AI Agent interactions. By refining the language and structure of predefined responses, our model not only preserves the conversation's context but also adapts to the emotional tone of the user. This ensures that responses are more engaging, human-like, and empathetic, significantly improving the overall user experience.

This model excels at creating interactions that feel more authentic and relatable. It intelligently adjusts responses to reflect the user's emotions and conversational flow, fostering a deeper connection and satisfaction. This technology is ideal for various applications, including customer support, an AI Agent, and interactive platforms, where the quality of communication directly impacts user engagement and loyalty. With our model, your AI Agent can deliver responses that aren't only accurate but also beautifully crafted to resonate with the user.


### Challenges with Commercial Models

* **Latency**: The time consumed by the commercial LLMs to process and return a response can be significant, especially when dealing with high volumes of requests or real-time applications. This impacts the user experience.
* **Cost**: Commercial models often have a per-request cost, and it rises with high scale usages. This makes managing costs difficult, especially for large-scale deployments.
* **Data Governance**: Sending user queries to external models raises data privacy and security concerns. This is crucial in industries that involve sensitive or proprietary information.
* **Lack of Customization**: Commercial models aren't tailored to specific use cases or industries, leading to less accurate or relevant responses.
* **Limited Control**: There is minimal control over the internal workings of commercial models, making it difficult to correct or refine their behavior when they generate incorrect or undesirable outputs.
* **Compliance and Regulatory Constraints**: Certain industries have stringent compliance and regulatory requirements that may not be fully supported by commercial LLM providers, complicating their use in those sectors.


### Key Assumptions

 The following are a few assumptions made for the XO GPT Response Rephrasing Model:

* The model is designed to work with text based conversations only.
* It's intended to rephrase only AI Agent responses and does not modify user inputs.

### Benefits of XO GPT Response Rephrasing Model

The XO GPT Response Rephrasing Model offers several potential advantages for businesses seeking to enhance their service capabilities:

* **Empathetic and Contextual Communication**

    XO GPT tailors responses to align with user sentiment and tone, promoting engaging and empathetic interactions that enhance user satisfaction. Detailed performance metrics and comparison to other models can be found [here](#model-benchmarks).

* **Cost-Effective Performance**

    For customers in the Enterprise Tier, XO GPT completely eliminates the commercial models’ usage costs. Following is an illustration with GPT-4 models. (Note: actual costs could vary based on token usage). For instance, with an average of 120 input tokens for user-AI Agent conversation and 10,000 daily interactions, where each response averages 40 tokens, the cost comparison between models is as follows:


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
   <td>$13,140
   </td>
   <td>$8,760
   </td>
   <td>$21,900
   </td>
  </tr>
  <tr>
   <td>GPT-4
   </td>
   <td>$10
   </td>
   <td>$30
   </td>
   <td>$4,380
   </td>
   <td>$4,380
   </td>
   <td>$8,760
   </td>
  </tr>
  <tr>
   <td>GPT-4o Mini
   </td>
   <td>$0.15
   </td>
   <td>$0.60
   </td>
   <td>$65.70
   </td>
   <td>$87.60
   </td>
   <td>$153.30
   </td>
  </tr>
</table>




* **Enhanced Data Security and Safety**
Our model is designed to safeguard information by ensuring that no client or user data is utilized for model retraining. Our systems are robust enough to handle both client and user data securely.

    **Guardrails**: XO GPT uses several key safety measures to ensure responsible and secure interactions:

    * Content Moderation: Detects and blocks harmful or inappropriate content.
    * Behavioral Guidelines: Maintains professionalism and appropriateness in responses.
    * Response Oversight: Monitors and addresses flagged or potentially problematic interactions.
    * Input Validation: Ensures inputs are appropriate and comply with usage guidelines.
    * Usage Controls: Applies limits to prevent misuse and support responsible operation.

    **AI Safety Measures**: XO GPT incorporates essential safety protocols to prevent harmful behaviors and maintain ethical standards:

    * Ethical Guidelines: Strict protocols ensure AI decisions align with ethical standards.
    * Bias Monitoring: Regular checks to prevent bias and ensure fairness in responses.
    * Transparency: Clear, understandable responses to promote trust and accountability.
    * Continuous Improvement: Ongoing updates to enhance safety and incorporate feedback.

!!! note

    The exact performance, features, and language support may vary based on specific implementations and use cases. We recommend thorough testing in your specific environment to assess the model's suitability for your needs.

<img src="../images/answer03.png" alt="XO GPT" title=" " style="border: 1px solid gray; zoom:70%;">

### Use Cases

The use cases of response paraphrasing span various domains, each benefiting from the model’s ability to provide empathetic, professional, and safe communication while considering user emotions.


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
   <td>Rephrasing agent responses to sound empathetic and professional during customer complaints.
   </td>
  </tr>
  <tr>
   <td>Converting technical jargon into simple, customer-friendly language.
   </td>
  </tr>
  <tr>
   <td>Rephrasing policy updates to sound reassuring and avoid confusion.
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Healthcare
   </td>
   <td>Rephrasing medical instructions for clarity and compassion.
   </td>
  </tr>
  <tr>
   <td>Responding to sensitive queries with tact and emotional sensitivity.
   </td>
  </tr>
  <tr>
   <td>Ensuring empathetic responses to patients' concerns about treatments or diagnoses.
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Banking & Finance
   </td>
   <td>Rephrasing responses for declined transactions to sound apologetic yet confident.
   </td>
  </tr>
  <tr>
   <td>Simplifying explanations of financial products while staying professional.
   </td>
  </tr>
  <tr>
   <td>Communicating sensitive decisions, like loan rejections, with empathy and reassurance.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Education
   </td>
   <td>Rephrasing feedback to students to make it constructive and encouraging.
   </td>
  </tr>
  <tr>
   <td>Simplifying academic instructions for easier comprehension.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Human Resources
   </td>
   <td>Rephrasing interview feedback to be constructive and motivating.
   </td>
  </tr>
  <tr>
   <td>Communicating policy updates in an empathetic and engaging tone.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Legal
   </td>
   <td>Rephrasing legal notices to ensure clarity while maintaining professionalism.
   </td>
  </tr>
  <tr>
   <td>Simplifying contractual terms without losing legal accuracy.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >E-commerce
   </td>
   <td>Rephrasing responses to out-of-stock product queries to maintain customer trust.
   </td>
  </tr>
  <tr>
   <td>Communicating refund or return policies with reassurance and politeness.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Social Media
   </td>
   <td>Rephrasing user-generated content for brand alignment while maintaining the user's intent.
   </td>
  </tr>
  <tr>
   <td>Crafting empathetic responses to online complaints or negative feedback.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >IT Support
   </td>
   <td>Rephrasing technical troubleshooting steps to make them more user-friendly.
   </td>
  </tr>
  <tr>
   <td>Handling escalations professionally while assuring users of swift resolutions.
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Travel & Hospitality
   </td>
   <td>Rephrasing responses to booking cancellations to minimize customer dissatisfaction.
   </td>
  </tr>
  <tr>
   <td>Simplifying itineraries or travel updates for clarity.
   </td>
  </tr>
</table>

### Sample Outputs

The following section presents a few examples of the answers generated by the XO GPT Response Rephrasing model based on the conversation history. 

**Ingested Content (Chunks)**

```
Current intent: book a flight

User: I need to book a flight to New York, but I'm really anxious about traveling amidst the pandemic.

AI Agent: Can I know your preferred date of travel?

User: I'm planning to fly on the 3rd of next month.

AI Agent: Could you please tell me your city of departure?

User: I will be departing from Los Angeles.

AI Agent: What class of service do you prefer for your flight?

User: I prefer economy class, but I'm concerned. Are the flights safe?

AI Agent: Could you please let me know your preferred time of flight?

```
**XO GPT Generated Responses**

Absolutely, your worries are entirely understandable. However, please be assured that airlines are practicing stringent safety measures to ensure the well-being of all passengers. Now, could you please share your preferred flight time?


## XO GPT - Model Building Process

The model-building process consists of several key stages that form the backbone of AI system development. To know more see [Model Building Process](xogpt-model-specifications.md#xo-gpt-model-building-process).

## Model Benchmarks

This section highlights the features, updates, and changes that vary between different versions of the Response Rephrasing Model. It provides version-specific information that can help identify what's unique to each version. 

The following table summarizes the versions covered in this document:

| Model Version | Accuracy | Tokens/sec (TPS) | Latency (secs) | Benchmark Comparison | Test Data & Results |
|--------------|----------|------------------|---------------|----------------------|----------------------|
| Version 1.0  | 99%      | 45               | 0.9           | [Benchmark Summary v1](#benchmarks-summary-v1) | [Test data and results v1](./test-date-and-results/xogpt-response-rephrasing-v1.0.xlsx) |



### Version 1.0

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



##### General Parameters

The model is hosted on infrastructure with A10 - g5-xlarge. Some of the other general fine-tuning parameters include the following:

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

#### Benchmarks Summary v1

To compare and contrast the performance of the fine-tuned model, we've considered the following other models: 

* Mistral-vanilla: An open-source large language model with 7 billion parameters, known for its strong performance despite its relatively small size.
* GPT 4: OpenAI's advanced language model is known for exceptional reasoning and language generation across diverse tasks, including summarization, content creation, and conversational AI Agents.

<img src="../images/response01.png" alt="XO GPT" title=" " style="border: 1px solid gray; zoom:70%;">


By leveraging its strengths in performance, latency, and responsible AI principles, XO GPT is well-positioned as a high-performing language model. For a deeper dive into the evaluation process and results, refer to the [Test Data and Results v1](./test-date-and-results/xogpt-response-rephrasing-v1.0.xlsx) report.
