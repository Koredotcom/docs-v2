# XO GPT: Answer Generation Model

<br>

## Introduction

Large Language Models (LLMs) have transformed the landscape of natural language processing (NLP), particularly in the development of Question and Answer (Q&A) systems. By utilizing the Retrieval Augmented Generation (RAG) approach, these models combine the power of vast textual data with real-time retrieval of relevant information, enabling them to generate accurate and contextually rich answers to user queries. The RAG technique enhances the model's ability to deliver precise responses, especially in scenarios where up-to-date or domain-specific information is crucial. This hybrid approach allows reliability and relevance, making LLM-based Q&A systems highly effective across various applications, from customer service to research assistance. 

Implementing RAG-driven Q&A systems also presents challenges, such as ensuring the quality of retrieved content and managing potential biases. The Kore.ai’s XO GPT Model for Answer Generation is a fine-tuned Large Language LLM (LLM) that addresses the key challenges faced when pre-trained LLMs are used out-of-the-box.  


### Challenges with Commercial Models

* **Latency**: The time consumed by the commercial LLMs to process and return a response can be significant, especially when dealing with high volumes of requests or real-time applications. This impacts the user experience.
* **Cost**: Commercial models often have a per-request cost, and it rises with high scale usages. This makes managing costs difficult, especially for large-scale deployments.
* **Data Governance**: Sending user queries to external models raises data privacy and security concerns. This is crucial in industries that involve sensitive or proprietary information.
* **Lack of Customization**: Commercial models are not tailored to specific use cases or industries, leading to less accurate or relevant responses.
* **Limited Control**: There is minimal control over the internal workings of commercial models, making it difficult to correct or refine their behavior when they generate incorrect or undesirable outputs.
* **Compliance and Regulatory Constraints**: Certain industries have stringent compliance and regulatory requirements that may not be fully supported by commercial LLM providers, complicating their use in those sectors.

### RAG Framework and XO GPT Integration

The XO GPT Model is a key component within our RAG framework. It is activated right after the retrieval phase. It takes the retrieved data and generates accurate, contextually relevant answers, ensuring the overall system delivers high-quality responses.

<img src="../images/answer01.png" alt="XO GPT" title="RAG Framework" style="border: 1px solid gray; zoom:70%;">

### Key Assumptions

The following are a few key assumptions made for the XO GPT Answer Generation Model: 

* The answer generation is assumed to be based only on text-based data chunks, excluding non-textual content like images or videos.
* The model processes questions that the XO GPT User Query Rephrasing Model has first rephrased for improved clarity and relevance.
* The model assumes that the data chunks it retrieves are accurate and relevant, and its performance is evaluated accordingly.
* The model focuses on generating answers based solely on the text, so the responses may not include information within links or images.

### Benefits of XO GPT Answer Generation Model

The XO GPT Answer Generation model offers several potential advantages for businesses seeking to enhance their Q&A capabilities:


* **Consistent and Accurate** 

    XO GPT employs retrieval-augmented generation techniques to deliver contextually relevant and precise answers, enhancing the reliability and effectiveness of responses in Q&A applications. Detailed benchmarking results, including latency and accuracy metrics compared to other models, can be found [here](#model-benchmarks).

* **Cost-Effective Performance**

    For customers in the Enterprise Tier, XO GPT completely eliminates the commercial models’ usage costs. The following is an illustration of GPT -4 models. (Note: actual costs could vary based on token usage). For instance, with an average of 10 input tokens per user question and 10,000 daily Q&A pairs, where each answer averages 80 tokens, the cost comparison between models is as follows: 




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
   <td>$1,095
   </td>
   <td>$17,520
   </td>
   <td>$18,615
   </td>
  </tr>
  <tr>
   <td>GPT-4
   </td>
   <td>$10
   </td>
   <td>$30
   </td>
   <td>$365
   </td>
   <td>$8,760
   </td>
   <td>$9,125
   </td>
  </tr>
  <tr>
   <td>GPT-4o Mini
   </td>
   <td>$0.15
   </td>
   <td>$0.60
   </td>
   <td>$5.48
   </td>
   <td>$175.20
   </td>
   <td>$180.68
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

<img src="../images/answer03.png" alt="XO GPT Benefits" title="XO GPT Benefits" style="border: 1px solid gray; zoom:70%;">

### Use Cases

The use cases of an Answer Generation / Q&A model, particularly one leveraging Retrieval-Augmented Generation (RAG), span various domains, each benefiting from the model’s ability to provide accurate, contextually relevant answers. 


<table>
  <tr>
   <td>Domain
   </td>
   <td>Use Cases
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Healthcare
   </td>
   <td>Answering patient queries based on medical records and guidelines
   </td>
  </tr>
  <tr>
   <td>Assisting doctors with evidence-based diagnosis recommendations
   </td>
  </tr>
  <tr>
   <td>Providing drug information and potential interactions
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Finance
   </td>
   <td>Answering customer questions about loan eligibility and application status
   </td>
  </tr>
  <tr>
   <td>Providing personalized financial advice based on user profiles
   </td>
  </tr>
  <tr>
   <td>Assisting with tax-related queries and calculations
   </td>
  </tr>
  <tr>
   <td rowspan="3" >E-commerce
   </td>
   <td>Recommending products based on user queries and past purchases
   </td>
  </tr>
  <tr>
   <td>Answering questions about shipping, returns, and order status
   </td>
  </tr>
  <tr>
   <td>Providing detailed product information and comparisons
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Education
   </td>
   <td>Assisting students with homework and study questions
   </td>
  </tr>
  <tr>
   <td>Providing explanations for complex concepts in various subjects
   </td>
  </tr>
  <tr>
   <td>Recommending study materials and resources based on curriculum needs
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Legal
   </td>
   <td>Answering legal queries based on case law and statutes
   </td>
  </tr>
  <tr>
   <td>Assisting with contract review and interpretation
   </td>
  </tr>
  <tr>
   <td>Providing information on legal rights and procedures
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Customer Support
   </td>
   <td>Automating responses to frequently asked questions
   </td>
  </tr>
  <tr>
   <td>Assisting with troubleshooting common issues
   </td>
  </tr>
  <tr>
   <td>Providing personalized support based on customer history
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Human Resources
   </td>
   <td>Answering employee questions about policies and benefits
   </td>
  </tr>
  <tr>
   <td>Assisting with recruitment by matching job descriptions to candidate profiles
   </td>
  </tr>
  <tr>
   <td>Providing guidance on performance evaluations and career development
   </td>
  </tr>
</table>


### Sample Outputs

The following section presents a few examples of the answers generated by the XO GPT Answer Generated model based on the shortlisted chunks:

**Ingested Content (Chunks)**

* **ChunkId: chk-1 Content**: A home loan is a secured loan that's obtained to purchase a property by offering the property itself as collateral. The calculation of a home loan involves several factors, including the loan amount, interest rate, tenure, and the borrower’s financial profile. 
* **ChunkId: chk-2 Content**: The principal amount is the initial loan amount sanctioned by the lender. The interest rate can be either fixed or floating. Fixed interest rates remain constant throughout the loan tenure, whereas floating rates fluctuate with changes in market rates. 
* **ChunkId: chk-3 Content**: The tenure of the loan is the period over which the loan is to be repaid. It typically ranges from 5 to 30 years. Longer tenures cause lower monthly installments but higher interest payments over the life of the loan.
* **ChunkId: chk-4 Content**: The Equated Monthly Installment (EMI) is the amount a borrower needs to pay every month. It includes both the principal and interest components. The EMI can be calculated using the formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1], where P is the principal loan amount, R is the monthly interest rate, and N is the number of monthly installments. 
* **ChunkId: chk-5 Content**: Lenders also consider the borrower’s financial profile, including income, credit score, and existing liabilities, before sanctioning the loan. A good credit score and stable income can help you get a lower interest rate. Borrowers should use online home loan calculators to get an estimate of their EMI and plan their finances accordingly.


**Generated Responses**

**Question**:

How do you compute EMI?

**XO GPT Model Generated Responses:**

The EMI is calculated using the formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1], where P is the principal loan amount, R is the monthly interest rate, and N is the number of monthly installments [chk-4].

**Question**:

what's a home loan? what's photosynthesis?

**XO GPT Model Generated Responses**:

I found only the answer to one question 'what's a home loan?': A home loan is a secured loan that's obtained to purchase a property by offering the property itself as collateral. The calculation of a home loan involves several factors, including the loan amount, interest rate, tenure, and the borrower’s financial profile [chk-1]. The remaining questions cannot be answered from the given context.


## XO GPT - Model Building Process

The model-building process consists of several key stages that form the backbone of AI system development. To know more see [Model Building Process](xogpt-model-specifications.md#xo-gpt-model-building-process).

## Model Benchmarks

This section highlights the features, updates, and changes that vary between different versions of the Answer Generation Model. It provides version-specific information that can help identify what's unique to each version. 

The following table summarizes the versions covered in this document:

| Model Version | Accuracy | Tokens/sec (TPS) | Latency (secs) | Benchmark Comparison | Test Data & Results |
|--------------|----------|------------------|---------------|----------------------|----------------------|
| Version 3.0  | 97%      | 37               | 0.92          | [Benchmark Summary v3](#benchmarks-summary-v3) | [Test data and results v3](./test-date-and-results/xogpt-answer-generation-v3.0.xlsx) |
| Version 2.0  | 96%      | 54               | 1.03          | [Benchmark Summary v2](#benchmarks-summary-v2) | [Test data and results v2](./test-date-and-results/xogpt-answer-generation-v2.0.xlsx) |
| Version 1.0  | 94%      | 20               | 1.36          | [Benchmark Summary v1](#benchmarks-summary-v1) | [Test data and results v1](./test-date-and-results/xogpt-answer-generation-v1.0.xlsx) |


### Version 3.0


#### Model Choice

We evaluate various community models suitable for response generation and fine-tune them using our proprietary data, as described in the previous section. One or more candidate models are used throughout the training and evaluation phase. The model that performs better in terms of accuracy, safety, latency, and other relevant metrics will be deployed. We continue to evaluate the models as part of ongoing improvements and may choose to use a different base model in the newer versions of the model. Currently, we're using [Llama 3.1 8B Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) as the base model for fine-tuning and deployment.


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
   <td>Llama 3.1 8B Instruct
   </td>
   <td>Meta
   </td>
   <td>Multi-lingual
   </td>
   <td>July, 2024
   </td>
   <td>Static 
   </td>
   <td>December 2023
   </td>
  </tr>
</table>



##### Prompt Tuning

To ensure that responses are accurate, relevant, and aligned with enterprise requirements, we employed a prompt tuning strategy. This involves using carefully designed prompts that guide the model to generate clear, well-structured outputs with a consistent tone.

We continuously refine these prompts through extensive testing across a diverse range of evaluation categories, including toxicity, bias, ambiguity, hallucination, logical consistency, and robustness.

Each prompt variation is evaluated in English as well as in multiple other languages, using translated datasets to ensure consistent multilingual performance. To validate scalability and stability, we additionally assess performance on longer source documents.

After multiple iterations, we select the prompt that consistently delivers the highest accuracy and reliability across all tested scenarios.


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
   <td>The data type is used for computation during inference with quantized weights.
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
   <td>This includes trust configuration for loading the tokenizer with remote code compatibility.
   </td>
   <td>trust_remote_code=True
   </td>
  </tr>
  <tr>
   <td><strong>Quantization Benefits</strong>
   </td>
   <td>AWQ enables a lower memory footprint and faster inference without significant loss of accuracy.
   </td>
   <td>-
   </td>
  </tr>
</table>



#### Model Usage Notes



* Context-Only Responses: The model responds strictly based on the content of the source document. It doesn't incorporate external knowledge or answer questions outside the provided context.
* Language Consistency: For accurate results, the query and the source document must be in the same language. Mixing languages can lead to incomplete or irrelevant responses.
* Output Formatting: The model can structure its responses based on formatting cues in the query. For example:
    * “Provide the answer in bullet points”
    * “Explain in step-by-step format”
    * “Summarize the key points”


#### Benchmarks Summary v3

To compare and contrast the performance of the fine-tuned model, we've considered the following other models: 



* Llama 3.1 8b: A powerful open-source large language model with 8 billion parameters, known for its strong performance across various tasks, including multilingual dialogue, text generation, and understanding.
* Claude 3.5 Sonnet: Part of the Claude 3 model family by Anthropic, designed to balance intelligence and speed for various tasks.
* Mistral 7b v2: An open-source large language model with 7 billion parameters, known for its strong performance despite its relatively small size.

<img src="../images/ans-gen-bench-summary-v3.png" alt="Benchmarks Summary v3" title="Benchmarks Summary v3" style="border: 1px solid gray; zoom:70%;">


By leveraging its strengths in performance, latency, and responsible AI principles, XO-GPT is well-positioned as a high-performing language model. The [Test Data and Results V3.0](./test-date-and-results/xogpt-answer-generation-v3.0.xlsx) report offers a more in-depth examination of the evaluation process and its results.



### Version 2.0

#### Model Choice

We evaluate various community models that are suitable for the objective of response generation and fine-tune with our proprietary data described in the previous section. One or more candidate models are used throughout the training and evaluation phase. The model that performs better in terms of accuracy, safety, latency, etc., will be deployed. We continue to evaluate the models as part of ongoing improvements and may choose to use a different base model in the newer versions of the model. Currently, we're using [Llama 3.1 8B Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) as the base model for fine-tuning and deployment.


<table>
  <tr>
   <td>Base Model
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
   <td>Llama 3.1 8B Instruct
   </td>
   <td>Meta
   </td>
   <td>Multi-lingual
   </td>
   <td>July, 2024
   </td>
   <td>Static 
   </td>
   <td>December 2023
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
   <td>The data type used for computation with 4-bit quantized weights.
   </td>
   <td>torch.float16
   </td>
  </tr>
  <tr>
   <td><strong>LoRA Rank</strong>
   </td>
   <td>The rank of the low-rank decomposition in LoRA.
   </td>
   <td>32
   </td>
  </tr>
  <tr>
   <td><strong>LoRA Alpha</strong>
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
   <td>The type of task for which LoRA is applied is Causal Language Modeling (CAUSAL_LM).
   </td>
   <td>CAUSAL_LM
   </td>
  </tr>
  <tr>
   <td><strong>Targeted Model Modules</strong>
   </td>
   <td>Specific layers in the model where LoRA is applied.
   </td>
   <td>['k_proj', 'q_proj', 'v_proj', 'o_proj']
   </td>
  </tr>
</table>

##### General Parameters

As a pre-requisite, an Agent AI License is required, and the model is hosted on infrastructure with 2 A10 GPUs. Some of the other general fine-tuning parameters include the following:


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
   <td>A number of examples the model learns from at once.
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
   <td>The maximum length of input data the model can handle.
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
   <td>The data type is used for computation during inference with quantized weights.
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
   <td>This includes trust configuration for loading the tokenizer with remote code compatibility.
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

To compare and contrast the performance of the fine-tuned model, we've considered the following other models: 

* Mistral 7b v2: An open-source large language model with 7 billion parameters, known for its strong performance despite its relatively small size.
* Llama 3.1 8b: A powerful open-source large language model with 8 billion parameters, known for its strong performance across various tasks, including multilingual dialogue, text generation, and understanding.
* GPT 4o mini: A large language model developed by OpenAI, known for its advanced capabilities across a wide range of tasks (note: there's no official "GPT 4o mini" version).
* Claude 3.5 Sonnet: Part of the Claude 3 model family by Anthropic, designed to balance intelligence and speed for various tasks.

<img src="../images/ans-gen-graphv2.png" alt="Benchmarks Summary" title="Benchmarks Summary" style="border: 1px solid gray; zoom:70%;">

By leveraging its strengths in performance, latency, and responsible AI principles, XO GPT is well-positioned as a high-performing language model. The [Test Data and Results v2](./test-date-and-results/xogpt-answer-generation-v2.0.xlsx) report provides a deeper dive into the evaluation process and results.

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
   <td>The data type used for computation with 4-bit quantized weights.
   </td>
   <td>torch.float16
   </td>
  </tr>
  <tr>
   <td><strong>LoRA Rank</strong>
   </td>
   <td>The rank of the low-rank decomposition in LoRA.
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
   <td>The type of task for which LoRA is applied is Causal Language Modeling (CAUSAL_LM).
   </td>
   <td>CAUSAL_LM
   </td>
  </tr>
  <tr>
   <td><strong>Targeted Model Modules</strong>
   </td>
   <td>Specific layers in the model where LoRA is applied.
   </td>
   <td>['k_proj', 'q_proj', 'v_proj', 'o_proj']
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
   <td>A number of examples the model learns from at once.
   </td>
   <td>1
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
   <td>The maximum length of input data the model can handle.
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

* Llama 3.1 8B: A powerful open-source large language model with 8 billion parameters, known for its strong performance across various tasks, including multilingual dialogue, text generation, and understanding.
* GPT-40 mini: A large language model developed by OpenAI, known for its advanced capabilities across a wide range of tasks (note: there's no official "GPT 4o mini" version).
* Claude-3-5-Sonnet: Part of the Claude 3 model family by Anthropic, designed to balance intelligence and speed for various tasks.

<img src="../images/answer05.png" alt="Benchmarks Summary" title="Benchmarks Summary" style="border: 1px solid gray; zoom:70%;">

By leveraging its strengths in performance, latency, and responsible AI principles, XO GPT is well-positioned as a high-performing language model. The [Test Data and Results v1](./test-date-and-results/xogpt-answer-generation-v1.0.xlsx) report provides a deeper dive into the evaluation process and results.

