# XO GPT: DialogGPT Model


## Introduction

The intent detection model leverages Large Language Models (LLMs) to predict user intent within multi-turn conversations accurately. It identifies the winning intent(s) by taking the RAG-qualified topics from dialogs, FAQs, knowledge bases, conversation history, the dialog context, and the query to determine the winning intent. The XO GPT - DialogGPT Model explicitly trained for the intent detection task improves precision in intent matching and enables more seamless, context-aware interactions.

For every user query, the Retrieval Engine shortlists relevant chunks from the predefined conversation types- Dialog Chunks, FAQ Chunks, and Knowledge Chunks - configured within the conversational AI Agent. These shortlisted chunks are then passed to the XO GPT - DialogGPT Model, which evaluates them along with the conversation history and the active dialog context to determine the most relevant chunk(s) for generating an accurate and contextually appropriate response.

<img src="../images/answer01.png" alt="XO GPT" title="RAG Framework" style="border: 1px solid gray; zoom:70%;">

### Challenges with Commercial Models

* **Latency**: The time consumed by the commercial LLMs to process and return a response can be significant, especially when dealing with high volumes of requests or real-time applications. This impacts the user experience.
* **Cost**: Commercial models often have a per-request cost, and it rises with high scale usages. This makes managing costs difficult, especially for large-scale deployments.
* **Data Governance**: Sending user queries to external models raises data privacy and security concerns. This is crucial in industries that involve sensitive or proprietary information.
* **Lack of Customization**: Commercial models aren't tailored to specific use cases or industries, leading to less accurate or relevant responses.
* **Limited Control**: There is minimal control over the internal workings of commercial models, making it difficult to correct or refine their behavior when they generate incorrect or undesirable outputs.
* **Compliance and Regulatory Constraints**: Certain industries have stringent compliance and regulatory requirements that may not be fully supported by commercial LLM providers, complicating their use in those sectors.

### Key Assumptions

Below is the assumption and scope defined for the XO GPT – DialogGPT model development:

* Scope: Designed to support only text and voice-based conversations.
* Assumption: All required inputs from the pipeline will be available for the model to generate the expected output.

### Benefits of XO GPT - DialogGPT Model

The XO GPT - DialogGPT model offers several potential advantages for users:

* **Consistent and Accurate**
XO-GPT Intent Identification model ensures accurate intent identification for every user input for a seamless conversational experience for the user. Detailed benchmarking results, including latency and accuracy metrics compared to other models, can be found [here](#model-benchmarks).

* **Cost-Effective Performance**
For customers in the Enterprise Tier, XO GPT completely eliminates the commercial models’ usage costs. The following is an illustration of GPT -4 models. (Note: actual costs could vary based on token usage). For instance, assuming an average of 1,000 input tokens per user utterance without search and 5,000 with search, across 50,000 daily utterances - and with each response averaging 10 output tokens—the cost comparison between models is as follows:

<table>
  <tr>
   <td colspan="6" >
<strong>DialogGPT (without Search)</strong>
   </td>
  </tr>
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
   <td>$547,500
   </td>
   <td>$10,950
   </td>
   <td>$558,450
   </td>
  </tr>
  <tr>
   <td>GPT-4
   </td>
   <td>$10
   </td>
   <td>$30
   </td>
   <td>$182,500
   </td>
   <td>$5,475
   </td>
   <td>$187,975
   </td>
  </tr>
  <tr>
   <td>GPT-4o Mini
   </td>
   <td>$0.15
   </td>
   <td>$0.60
   </td>
   <td>$2,738
   </td>
   <td>$110
   </td>
   <td>$2,847.00
   </td>
  </tr>
</table>

<table>
  <tr>
   <td colspan="6" ><strong>DialogGPT (with Search)</strong>
   </td>
  </tr>
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
   <td>$2,737,500
   </td>
   <td>$10,950
   </td>
   <td>$2,748,450
   </td>
  </tr>
  <tr>
   <td>GPT-4
   </td>
   <td>$10
   </td>
   <td>$30
   </td>
   <td>$912,500
   </td>
   <td>$5,475
   </td>
   <td>$917,975
   </td>
  </tr>
  <tr>
   <td>GPT-4o Mini
   </td>
   <td>$0.15
   </td>
   <td>$0.60
   </td>
   <td>$13,688
   </td>
   <td>$110
   </td>
   <td>$13,797.00
   </td>
  </tr>
</table>

* **Enhanced Data Security and Safety**
Use existing

!!! note

    The exact performance, features, and language support may vary based on specific implementations and use cases. We recommend thorough testing in your specific environment to assess the model's suitability for your needs.

<img src="../images/answer03.png" alt="XO GPT Benefits" title="XO GPT Benefits" style="border: 1px solid gray; zoom:70%;">

### Use Cases

The table presents various use cases or scenarios used to train the XO-GPT Intent Identification model. The model is designed to identify relevant chunks using the available contextual information. This facilitates improved intent accuracy with faster response time. LLM solutions enable conversations to achieve the human-like interaction users expect.

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
   <td>Facilitates appointment booking, symptom checker, retrieving the details of upcoming appointments, and accessing medical records.
   </td>
  </tr>
  <tr>
   <td>Banking
   </td>
   <td>Facilitates the user to check their balance, transfer funds, open or close their accounts, among other retail banking functions.
   </td>
  </tr>
  <tr>
   <td>HR
   </td>
   <td>Facilitates users to request time off, manage their leaves, check their information and company policies, and raise any HR issues.
   </td>
  </tr>
  <tr>
   <td>Insurance
   </td>
   <td>Facilitates the user in viewing their policy details, making changes to their insurance policies, filing a claim, and tracking claim updates, among others. 
   </td>
  </tr>
</table>

### Sample Outputs

The DialogGPT model is a core component of the DialogGPT’s Conversation Management. It's designed to analyze user queries and generate structured responses tailored to the specific conversation types enabled within the system. It handles:

* **Fulfillment Type and Category Classification**: Classifies the appropriate fulfillment type and category required to address the user's request.
* **Intent Identification**: Accurately determines the winning intents associated with each user query.

The model is critical in ensuring contextually relevant and goal-oriented interactions across various dialog flows.

<table>
  <tr>
   <td>Fulfillment Type and Category
   </td>
   <td>Description
   </td>
   <td>Behavior
   </td>
  </tr>
  <tr>
   <td>Single Intent (Category 1)
   </td>
   <td>When a user query consists of only one intent and the model identifies a single winning intent from either the Dialog Chunks or FAQ Chunks.
   </td>
   <td>The identified winning intent is directly executed based on the context and fulfillment type.
   </td>
  </tr>
  <tr>
   <td>Generate Answer
<p>
(Category 1)
   </td>
   <td>When a user query consists of only one intent and the model identifies a single winning intent from the Knowledge Chunks.
   </td>
   <td>The Answer Generation model formulates a response by synthesizing information from the shortlisted Knowledge Chunks.
   </td>
  </tr>
  <tr>
   <td>Multiple Intents
<p>
(Category 1)
   </td>
   <td>When a user query consists of two or more intents and the model successfully identifies winning intents for each mentioned intent from any of the following sources: Dialog Chunks, FAQ Chunks, or Knowledge Chunks. The model generates an execution plan for the identified intents. 
   </td>
   <td>The winning intents are executed in the sequence specified by the execution plan, ensuring that each intent is addressed logically and contextually appropriately.
   </td>
  </tr>
  <tr>
   <td>Ambiguous Intents
<p>
(Category 1)
   </td>
   <td>When a user query is vague, or the model identifies multiple possible winning intent from either the Dialog Chunks or FAQ Chunks without sufficient confidence to prioritize one over the others, the query is classified as ambiguous.
   </td>
   <td>All winning intents are presented to the user for their review and confirmation, allowing them to verify or refine the direction of the conversation before execution.
   </td>
  </tr>
  <tr>
   <td>Continue
<p>
(Category 2)
   </td>
   <td>When a user query occurs in the middle of an ongoing conversation and directly responds to an AI Agentinquiry, It's treated as a ‘continue.’ 
   </td>
   <td>The conversation continues seamlessly based on the user input.
   </td>
  </tr>
  <tr>
   <td>Conversational Intents
<p>
(Category 3)
   </td>
   <td>When the user input aligns with any of the predefined Conversation Intent Chunks:
<ul>

<li>Answer from Context: where the user asks to repeat the last message or seeks information from the conversation history.</li>

<li>Refuse to answer - when the user declines to provide requested information due to privacy concerns, lack of trust, or simply not knowing the answer.</li>

<li>Pause Interaction: This occurs when the user requests a temporary halt in the conversation, often to gather additional information or for personal reasons.</li>

<li>Restart Interaction: when the user explicitly asks to start the conversation from the beginning or discard the ongoing context.</li>

<li>End Interaction: where the user indicates they're done with the current interaction, either because their issue has been resolved or for other reasons</li>

<li>Agent Transfer: this includes explicit and implicit requests for escalation to a human agent when an AI Agent is no longer sufficient.</li>
</ul>
   </td>
   <td>Conversational intents can be configured as events within the AI Agent. The corresponding event is automatically triggered based on the model's classification, enabling appropriate handling of the user’s input within the conversational flow.
   </td>
  </tr>
  <tr>
   <td>No Intent
<p>
(Category 2)
   </td>
   <td>When the user input isn't deemed relevant for any of the above categories, It's categorized as No Intent. 
   </td>
   <td>A Fallback Intent can be configured for cases where no intent is identified. This fallback is automatically triggered to handle unrecognized or unsupported user queries gracefully.
   </td>
  </tr>
</table>

**Example 1: ambiguous_intents**

Sample Input

**Conversation History**

```python
[

"AI Agent: Hello! How can I assist you today?"

"User: I would like to schedule a virtual consultation with a healthcare provider."

"AI Agent: Sure! Could you please provide me with a preferred date and time for your virtual consultation?"

"User: I am available on October 15th at 3 PM."

"AI Agent: Thank you. Let me check the availability of healthcare providers for that date and time. You are booked for a virtual consultation on October 15th at 3 PM. Is there anything else I can help you with today?"

]
```

**Active Dialog Context**

**Dialog Chunks**

```json
[

{

"ID": "kZryjJQBY6hZN8s7xxxx",

"Name": "Virtual Consultation",

"score": 0.5942571,

"Description": "Schedule or initiate virtual consultations with healthcare providers",

"appId": "st-f4bf93b5-d644-44fb-b9be-a540deddxxxx",

"appName": "qxLm9qat"

},

{

"ID": "jZryjJQBY6hZN8s7xxxx",

"Name": "Get Definition of Disease",

"score": 0.48599482,

"Description": "Get descriptions of a medical condition on request",

"appId": "st-cdff109c-6fe4-4d2b-9b11-1112b567xxxx",

"appName": "TFkjZQUq"

}

]
```

**FAQ Chunks**

```json
[

{

"ID": "lJryjJQBY6hZN8s7xxxx",

"score": 0.63696957,

"Primary Question": "How can I find a doctor who specializes in my condition?",

"Alternate Questions": [],

"appId": "st-d6687199-8859-4fcb-822f-af6dc0e3xxxx",

"appName": "jSOOVqRG"

}

]
```

**Knowledge Chunks**

```json
[

{

"docID": "fc-a3894938-12b2-4b7f-bb86-274e2feexxxx",

"docName": "Discharge process | Fortis Healthcare",

"chunkID": "chk-b65b4772-ad41-4632-8c39-09c6b01xxxx",

"score": 1,

"chunkText": "Discharge process Your nurse will assist you in the discharge process which may take a few hours to complete. Once your final bill is generated, you are expected to clear your dues by paying cash or using a credit/debit card. The nurse will hand over your discharge summary and belongings (like a thermometer, urinal bedpan, etc. - used during the course of your stay). She will also explain the medications you need to continue after your discharge and any other follow-up instructions. If you need a medical ambulance to drop you off at your home, please inform your nurse, and she will make the necessary arrangements. Keep track of your appointments, get updates & more!"

}

]
```

```json
User Query - I want to consult a doctor online. How do I do it?

Output:
{
"category": "Category 1",
"fulfillment_type": "ambiguous_intents",
"winning_intents": ["9Ham9fDB:Can I consult a doctor online?", "qxLm9qat:Virtual Consultation"]
}
```
4
**Example 2: multiple_intents**

Sample Input

**Conversation History**

```python
[

'AI Agent: Welcome to our banking service! How may I assist you today?', 

'User: Hi, I'm interested in some financial products.',

'AI Agent: Certainly! I'd be happy to help. What specific financial products are you interested in?']
```

**Active Dialog Context**

**Dialog Chunks**

```json
[

{

"ID": "eksOZ5MB5L_rgqT0xxxx",

"Name": "Apply Credit Card",

"score": 0.67097855,

"Description": "Provide information and assistance in applying for a credit card. I want to apply for a credit card. Is the sample user utterance.",

"appId": "st-b77e8fa8-ab2c-4bcb-a4f6-1e481d5bxxxx",

"appName": "RzWixwEa"

},

{

"ID": "e0sOZ5MB5L_rgqT0xxxx",

"Name": "Apply Home Loan",

"score": 0.64631605,

"Description": "Provide information and assistance in applying for a home loan. I would like to apply for a home loan. Is the sample user utterance.",

"appId": "st-f695cbb4-e64d-4524-92fa-d6e047a4xxxx",

"appName": "HvQ0049Q"

},

{

"ID": "eUsOZ5MB5L_rgqT0xxxx",

"Name": "Apply Car Loan",

"score": 0.55991244,

"Description": "Provide information and assistance in applying for a car loan. Can you help me apply for a car loan? Is the sample user utterance.",

"appId": "st-8a9c39ef-d5da-404c-ad75-0dcda69cxxxx",

"appName": "6c7bdqDW"

}

]
```

**FAQ Chunks**

```json
[

{

"ID": "oksOZ5MB5L_rgqT0xxxx",

"score": 0.7379093,

"Primary Question": "What documents do I need to apply for a home loan?",

"Alternate Questions": [],

"appId": "st-e33962a9-a4ba-4945-9f8a-951b3c5exxxx",

"appName": "FWdE3Gtv"

},

{

"ID": "p0sOZ5MB5L_rgqT0xxxx",

"score": 0.65209055,

"Primary Question": "How do I request a loan closure letter?",

"Alternate Questions": [],

"appId": "st-53651233-caee-46e2-8305-f3265c93xxxx",

"appName": "4YC0HJYi"

},

{

"ID": "rEsOZ5MB5L_rgqT0xxxx",

"score": 0.60929346,

"Primary Question": "What's the referral amount for a home loan ?",

"Alternate Questions": [],

"appId": "st-b5446efd-2afa-4e35-a1ef-1d81f49exxxx",

"appName": "mvFiwtma"

}

]
```

**Knowledge Chunks**

```json
[

{

"docID": "fc-ee287d4e-3ee0-5e96-8b38-7fc14bd6xxxx",

"docName": "Home loan .pdf",

"chunkID": "chk-106b01f5-04cf-49a2-b9e1-70140029xxxx",

"score": 0.32762766,

"chunkText": ", and USDA loans, which may offer lower down payments and favorable terms. \u2022 Interest-Only Loans: Borrowers pay only interest for a specified period, after which they start repaying the principal. 3. Eligibility Criteria To qualify for a home loan, borrowers typically need to meet certain eligibility criteria, including: \u2022 Age: Applicants should usually be between 21 and 65 years old. \u2022 Income: Stable and sufficient income to repay the loan. \u2022 Credit Score: A good credit score is essential for obtaining favorable loan terms."

},

{

"docID": "fc-ee287d4e-3ee0-5e96-8b38-7fc14bd6xxxx",

"docName": "Home loan .pdf",

"chunkID": "chk-e0cc57dc-aef8-4543-9600-0e4cad99xxxx",

"score": 1.5174901,

"chunkText": "The interest rate may change periodically based on market conditions, potentially affecting your monthly payments. 2. How much can I borrow for a home loan? The amount you can borrow depends on various factors, including your income, credit score, debt-to-income ratio, and the property's value. Lenders typically assess these criteria to determine your eligibility and loan amount. 3. What's a down payment, and how much do I need? A down payment is the upfront amount you pay when purchasing a home. It generally ranges from 3% to 20% of the home's purchase price. Some loan programs may allow for lower down payments, while others may require a higher percentage, depending on your creditworthiness and the lender's policies."

}

]
```

```json
User Query - I want to apply for a credit card and a home loan.

Output:
{
"category": "Category 1",
"fulfillment_type": "multiple_intents",
"winning_intents": ["HvQ0049Q:Apply Home Loan","RzWixwEa:Apply Credit Card"],
"execution_plan": ["RzWixwEa:Apply Credit Card","HvQ0049Q:Apply Home Loan"]
}
```

**Example 3: single_intent**

**Conversation History**

```python
[

'AI Agent: Hello! How can I assist you with your banking needs today?'

'User: Hi, I'd like to set up automatic payments for my utility bills.'

'AI Agent: Sure, I can help with that. Could you please provide the payment type and the account from which you'd like the payments to be made?'

'User: I'll be setting up payments for electricity and water. Use my checking account ending in 1234.'

'AI Agent: Got it. How much would you like to pay for each bill, and how often?'

]
```

**Active Dialog Context**

```python
{'dialog_name': 'Set Payments', 'description': 'Set up automatic payments for bills or subscriptions. Set up my monthly rent payment to be automatic. is the sample user utterance.', 'current_node': {'name': 'payment_amount_and_frequency', 'type': 'entity'}}
```

**Dialog Chunks**

```json
[

{

"ID": "gksOZ5MB5L_rgqT0xxxx",

"Name": "Change Address",

"score": 0.6794677,

"Description": "Update the registered address for the user's bank account. I need to change the address on file. Is the sample user utterance.",

"appId": "st-5d48dd57-b37d-4b3a-97cf-acb49d6xxxx",

"appName": "ooNsySJK"

},

{

"ID": "5rgNjZMBCH6z08AN_xxx",

"Name": "Close Account",

"score": 0.54840064,

"Description": "Process a request to close an existing bank account. I want to close my checking account. Is the sample user utterance.",

"appId": "st-940072d5-0bde-4815-a8f1-efde48c9xxxx",

"appName": "6VpxGM89"

}

]
```

**FAQ Chunks**

**Knowledge Chunks**

```json
User Query - As of now, I need to update my mailing address.

Output:
{
"category": "Category 1",
"fulfillment_type": "single_intent",
"winning_intents": ["ooNsySJK:Change Address"]
}
```

**Example 4: system_intent**

**Conversation History**

```python
['AI Agent: Hello! Welcome to ABC Bank. How can I assist you today?', 'User: Hi, I'd like to open a new account.', 'AI Agent: Great! We offer savings, current, and fixed deposit accounts. Which type of account would you like to open?', 'User: I would like to open a savings account.', 'AI Agent: To open a savings account, we will need some personal information and specific documents. Could you please provide your full name and contact details?', 'User: Sure, my name is John Doe, and my contact number is 123-456-7890.', 'AI Agent: Thank you, John. We also need you to submit a few documents, such as proof of your ID and proof of address. Do you have these documents ready?', 'User: Yes, I have my passport and a utility bill.', 'AI Agent: Perfect. Lastly, can you let us know the initial deposit amount you would like to make?']
```

**Active Dialog Context**

```python
{'dialog_name': 'Open Account', 'description': 'Assist users in the process of opening a new bank account. I would like to open a new savings account.is the sample user utterance.', 'current_node': {'name': 'initial_deposit_amount', 'type': 'entity'}}
```

**Dialog Chunks**

```json
[

{

"ID": "gksOZ5MB5L_rgqT0xxxx",

"Name": "Change Address",

"score": 0.5511973,

"Description": "Update the registered address for the user's bank account. I need to change my address on file. Is the sample user utterance.",

"appId": "st-81eb7684-8627-492f-894e-63ca462cxxxx",

"appName": "KhBKv8T6"

}

]
```

**FAQ Chunks**

```json
[

{

"ID": "o0sOZ5MB5L_rgqT0xxxx",

"score": 0.5700793,

"Primary Question": "How do I request a bank statement?",

"Alternate Questions": [],

"appId": "st-013e912d-d2de-43c9-a6d9-87a36f3fxxxx",

"appName": "7JRpXO3t"

}

]
```

**Knowledge Chunks**

```json
[

{

"docID": "fc-ee287d4e-3ee0-5e96-8b38-7fc14bd6xxxx",

"docName": "Home loan .pdf",

"chunkID": "chk-83b985a0-b6fc-4080-afef-58d7b6bcxxxx",

"score": 1.01792,

"chunkText": " form and submit it along with the required documents to the lender. Step 5: Loan Processing The lender will review your application, conduct a credit check, and assess the property value through an appraisal. Step 6: Approval and Offer Once approved, the lender will present a loan offer detailing the terms and conditions. Review the offer carefully. Step 7: Acceptance and Documentation"

}

]
```

```json
User Query - The branch code is 00123.

Output:
{
"category": "Category 2",
"fulfillment_type": "system_intent",
"winning_intents": ["NoIntent_Identified"]
}
```

**Example 5: conversation_intent**

**Conversation History** 

```python
['AI Agent: Hello! How can I assist you today in managing your HR tasks?', "User: change supervisor",

'AI Agent: I understand you want to update the reporting structure. Could you please provide me with the name of the employee whose supervisor you would like to change?']
```

**Active Dialog Context**

```
{'dialog_name': 'Supervisor Change', 'description': "This intent allows the manager to reassign employee's direct supervisor. It ensures that reporting structures are kept up-to-date and reflects organizational changes efficiently. It's exclusively for updating reporting structures.", 'current_node': {'name': 'employee_name', 'type': 'entity'}}
```

**Dialog Chunks** 

```
[

{

"ID": "r5l0RZQBY6hZN8s77ahh",

"Name": "Manage Timeoff",

"score": 0.5552528,

"Description": "This intent allows users to make changes to or cancel their existing leave requests within the HR system. Users can easily modify details such as the duration or type of leave or cancel the request altogether if needed.",

"appId": "st-e0dc1b66-b34f-xxxx-a040-af3ab69a782d",

"appName": "kWEysAZN"

}

]
```

**FAQ Chunks**

```json
[

{

"ID": "uZl0RZQBY6hZN8s7xxxx",

"score": 0.5770545,

"Primary Question": "What's the process to check my remaining leave balance?",

"Alternate Questions": [],

"appId": "st-af62a4d0-7fe7-4de7-bff7-95b732ecxxxx",

"appName": "LpwxnlOL"

}

]
```

**Knowledge Chunks**

```
[

{

"docID": "fc-79e1079a-d1a4-53c8-9d40-6b28c743xxxx",

"docName": "employee-policy-manual-02-2016 (1).pdf",

"chunkID": "chk-cc678e78-048a-418c-ac5b-fb31bd33xxxx",

"score": 1.10397,

"chunkText": "EM PLO YEE CO N D U C T February 2016 (U.S.) CONFIDENTIAL INFORMATION The protection of confidential and proprietary business information and trade secrets is vital to the Company\u2019s interests and success. The protection of confidential and proprietary business information and trade secrets is vital to the Company\u2019s interests and success. We trust our employees to receive confidential information and not use or share it except for Company business purposes. Confidential information should never be used for an employee's personal benefit or disclosed to others inside or outside of the Company who don\u2019t have the right to it \u2013 and the need for it \u2013 to carry out their assigned work or meet the business need. In addition, accessing confidential Company information without a need to know is prohibited. Violation of this policy may result in disciplinary action, which may be termination. The obligation to not use or disclose confidential information continues even after employment with the Company ends. Employees are expected to familiarize themselves with and follow the \u201cProtecting Company Assets\u201d section of the Standards of Business Conduct, which contains additional information, including a definition and examples of \"confidential information.\" 1 1 https://enterpriseportal.disney.com/gopublish/sitemedia/IT/Standards/DIS-SBC-CM_print_US_links.pdf"

}

]
```

```
User Query - I need to pause this for a moment.

Output:
{
"category": "Category 3",
"fulfillment_type": "conversation_intent",
"winning_intents": ["Pause_Interaction"]
}
```

!!! note

    When an AI Agent has PII (Personally Identifiable Information) enabled, any user input that matches a PII field is masked to ensure user confidentiality. As a result, the masked input isn't available for intent identification, which may impact the model's ability to recognize user intents accurately.

## XO GPT - Model Building Process

The model-building process consists of several key stages that form the backbone of AI system development. To learn more, see the [Model Building Process](xogpt-model-specifications.md#xo-gpt-model-building-process).

## Model Benchmarks

This section highlights the features, updates, and changes that vary across different versions of the Intent Identification Model. It provides version-specifics, which can help identify what's unique to each version.

The following table summarizes the versions covered in this document:

| Model Version | Accuracy | Tokens/sec (TPS) | Latency (secs) | Benchmark Comparison       | Test Data & Results  |
|---------------|----------|------------------|----------------|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Version 1.0   | 95.8     | 35.1             | 1.57           | [Benchmarks Summary v1](#benchmarks-summary-v1) | [Test data and results v1](./test-date-and-results/xogpt-dailoggpt-v1.0.xlsx) |

### Version 1.0

#### Model Choice

We evaluate various community models that are suitable for response generation and fine-tune with our proprietary data described in the previous section. One or more candidate models are used throughout the training and evaluation phase. The model that performs better in accuracy, safety, latency, etc., will be deployed. We continue to evaluate the models as part of ongoing improvements and may choose to use a different base model in the newer model versions. Currently, we're using [Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) as one of the base models for fine-tuning and deployment.

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
   <td>Llama-3.1-8B-Instruct
   </td>
   <td>Meta-llama
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
   <td><strong>Fine Tuning type</strong>
   </td>
   <td>How the fine-tuning is done.
   </td>
   <td>PEFT-QLoRA
   </td>
  </tr>
  <tr>
   <td><strong>quantization</strong>
   </td>
   <td>In how many bits are we loading the parameters. Reduces the memory usage.
   </td>
   <td>4 bit
   </td>
  </tr>
  <tr>
   <td><strong>rank </strong>
   </td>
   <td>Decide the number of trainable parameters.
   </td>
   <td>32
   </td>
  </tr>
  <tr>
   <td><strong>lora_alpha</strong>
   </td>
   <td>Controls the scaling factor of LoRA updates, determining the contribution of the low-rank adaptation to the model's weights during training
   </td>
   <td>16
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
   <td>2e-4 (0.0002)
   </td>
  </tr>
  <tr>
   <td><strong>Batch Size</strong>
   </td>
   <td>Number of examples the model learns from at once.
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td><strong>Epochs</strong>
   </td>
   <td>Number of times the model sees the entire training data.
   </td>
   <td>5
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
   <td>It helps to prevent the model from overfitting by reducing the importance of large weights.
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
   <td>The maximum length of input data the model can handle.
   </td>
   <td>32768
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
   <td>It uses different learning rates for various model parts to improve stability.
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

The model is hosted on infrastructure with 2 A10 GPUs. Some of the other general fine-tuning parameters include the following:

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
   <td>1
   </td>
  </tr>
  <tr>
   <td><strong>Epochs</strong>
   </td>
   <td>Number of times the model sees the entire training data.
   </td>
   <td>5
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
   <td>It uses different learning rates for various model parts to improve stability.
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

* **Phi4**: A lightweight language model from Microsoft designed for efficiency and strong reasoning abilities in a smaller parameter range. It's optimized for cost-effective deployment while maintaining competitive performance on reasoning and language understanding tasks. 
* **GPT 4o**: A large language model developed by OpenAI, known for its advanced capabilities across various tasks (note: there's no official "GPT 4o mini" version).
* **Llama 3.1 8b**: A powerful open-source large language model with 8 billion parameters, known for its strong performance across various tasks, including multilingual dialogue, text generation, and understanding.

<img src="../images/benchmark-summary.png" alt="Benchmarks Summary" title="Benchmarks Summary" style="border: 1px solid gray; zoom:70%;">

By leveraging its strengths in performance, latency, and responsible AI principles, XO GPT is well-positioned as a high-performing language model. For a deeper dive into the evaluation process and results, refer to the [Test Data and Results v1](./test-date-and-results/xogpt-dailoggpt-v1.0.xlsx) report.