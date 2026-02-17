# By Value Metric

The By Value metric validates agent adherence to customer-specific information, such as interest rates, account balances, and service values, by extracting spoken or written values using LLM-powered entity recognition and comparing them against trusted backend systems via API. 

This combines advanced extraction logic with configurable business rules to verify the accuracy of financial and service-related information mentioned during agent-customer interactions. This is designed for scalable, AI-driven quality assurance, which captures real-world conversation nuances and logs results automatically, eliminating the need for manual review.

## Why to Use This Metric

* Automates manual QA by verifying agent-mentioned customer data without reviewing transcripts.

* Ensures accuracy by validating agent statements vs. backend data in real-time or stored sources.

* Compares agent values with CRM or trusted systems using API calls and LLM extraction.

* Detects compliance violations across all interactions and sends instant alerts.

* Supports complex business rules, including tolerance ranges, negotiation clauses, and multi-language.

* Provides full transparency with audit logs of API calls, extraction confidence, and rule evaluations.

* Enables real-time agent feedback through GenAI and co-pilot integration.

* Improves agent training with detailed, auditable logs of all verification steps.

## Use Cases

* Interest Rate Adherence
* Balance Verification
* Fee Disclosure

## Prerequisites

Make sure that the following GenAI features are enabled:

* The By Value metric type only appears in the evaluation metrics creation dropdown when the GenAI feature is enabled.

* Ensure that the languages required by the **By Value** metric type are valid and properly configured.

* The **By Value** evaluation metrics measurement type is available when both the GenAI options are [enabled](../../../../generative-ai-tools/genai-features.md)and [published ](../../../../deploy/publishing-bot.md#publishing-components) via **Manage**> **Generative AI**> **GenAI Features**:

    * By Value Adherence Validation for Quality AI
    * By Value Metric Extraction for Quality AI  
    <img src="../images/by-value-genAI features.png" alt="By Value Adherence" title="By Value Adherence" style="border: 1px solid gray; zoom:70%;">  

## Configure by Value Metric

1. Navigate to **Quality AI** > **Configure** > **Evaluation Forms** > **Evaluation Metrics**.

1. Click **+ New Evaluation Metric**.

1. From the **Evaluation Metrics Measurement Type** dropdown, select **By Value**.  
  <img src="../images/by-value-dropdown.png" alt="Edit Warning" title="Edit Warning" style="border: 1px solid gray; zoom:60%;">     

1. Enter a descriptive **Name** for the future audit reference.

1. Enter a descriptive identifier **Name** that you can easily reference, such as "Discount Rate Verification" or "Interest Rate Adherence Check".

1. Enter a descriptive **Question** prompt for manual evaluation.

1. Select the required **Languages** for this metric.

    !!! note

        * Enables you to select more than one language.
            
        * The system uses **By-Question** metrics that are available in all of the selected languages. 
            
        * The system uses an **AND** condition that supports every selected language, not just one of them. 
            
        * If a metric does not support all the selected languages, it does not appear in the dropdown. 

### Adherence Type Configuration

This configuration determines when and how the metric is evaluated during a conversation.

1. Select an **Adherence Type** (**Static** or **Dynamic**) from the dropdown. 

    a. **Static Adherence**: This metric is evaluated for every conversation regardless of specific triggers.
    
    * Applies to mandatory checks performed in every interaction. For example, “agent greeted customer" applies in every call. 

    b. **Dynamic Adherence**: This metric is evaluated only when a trigger happens during a conversation (when a customer or agent expresses a certain intent). 

    * This metric is scored only if the trigger is detected. For example, an interest rate disclosure metric is only relevant when a customer asks about loan rates.

    * Activated only when specific intents occur, and scoring relevant checks after the trigger. If no trigger appears, it is marked as Not Applicable (NA).   
    <img src="../images/by-value-adherence-type.png" alt="Adherence Type" title="Adherence Type" style="border: 1px solid gray; zoom:50%;">  

#### Trigger Configuration (Dynamic Adherence Only)

Provides two selectable options triggered by either an Agent or Customer Utterance for evaluation. Different triggers come from different speakers based on the use case scenario.

1. Choose the **Trigger Utterance** for evaluation by selecting the correct speaker who initiates each trigger based on the use case. 

    * **Customer Utterance**: Select when the customer action triggers the adherence check. For example, a customer asks about interest rates, triggering the rate disclosure metric (specific customer queries).

    * **Agent Utterance**: Select when the agent action triggers the adherence check. For example, the agent proposes a credit card plan, triggering the benefits disclosure metric (product promotions or any compliance requirements).

#### Trigger Detection Method

Different use cases require different detection techniques depending on complexity and the accuracy needed. 

1. Choose if the **Trigger Detection Method** is a customer or agent utterance.

    * **Gen AI-Based Adherence**: This uses a Large Language Model (LLM) to detect trigger intent and evaluate adherence based on contextual understanding (for complex intents, varied expressions, and nuanced conversations).

        * Uses the Zero-shot detection (no training required). [Learn more](../../../../automation/natural-language/training/machine-learning-engine.md#zero-shot-model){:target="_blank"}.

        * Enter a text **Description** explaining the trigger intent or details behind the adherence metric details.

        * LLM interprets meaning rather than exact phrase matching (contextual understanding, such as complex intents, nuanced conversations).

    * **Deterministic Adherence**: This uses exact pattern matching (non-AI) to detect trigger intent and check adherence.

        * Use the **Utterance** option to provide specific utterance examples. 

        * It only matches predefined phrases or keywords, requiring specific examples and multiple trigger utterances for broad coverage. For example, compliance keywords, exact terminology. 

### API Request Parameter Configuration Methods

The API setup enables calls to your backend systems (for example, CRMs, databases) to retrieve ground truth data, which validates the agent-mentioned values from customer conversations, such as account balance or loan rate.

1. Choose how the request parameter (**Context Variable** or **Conversation ID**) is sourced or retrieved.

#### Context Variable

Context variables are customer identifiers mentioned in a conversation (for example, phone number or customer ID). The system extracts these from the transcript and uses them in an API call to get specific customer information, such as account balance or interest rate.

2. Select a customer identifier (such as phone number, customer ID) mentioned in the conversation transcript.

    * Customer provides identifier during conversation (phone number, customer ID, email).

    * Single API call sufficient to retrieve required data.

    * Direct mapping between conversation content and API parameter.

    **Context Variables Setup**
    
    * **Context Variable**: Select this when a customer identifier (such as phone number, customer ID) is mentioned in the conversation transcript.  
    <img src="../images/context-variable-setup.png" alt="Context Variables Setup" title="Context Variables Setup" style="border: 1px solid gray; zoom:50%;">      

3. Choose who (Customer or Agent) provides the identifier in the conversation.

    * **Speaker**: Choose who (**Customer** or **Agent**) provides the identifier in the conversation.    

4. Configure the Entity Type details to match the data type for extracting required data (for example, customer ID, name, and data type).

    **Entity Type Configuration**

    * **Entity Name**: Enter a descriptive name matching the data type that you want to extract (for example, customer ID or phone number). 

        * **Entity Type**: Select the correct data type (**String** or **Number**).

        * **String**: Enter text or alphanumeric identifiers (email address, customer ID). 

        * **Number**: Choose this when the data represents a numeric value or identifier (phone numbers, account numbers).

        * **Description**: Provide detailed instructions for the AI on how to identify and extract this entity from the conversation. For example, extract the 10-digit phone number provided by the customer during verification, formatted as XXX-XXX-XXXX".

5. Configure authentication profiles to secure API calls to your backend systems.

    **Service Request Authorization**

    Configure authentication profiles to secure API calls to your backend systems. Authentication ensures that only authorized requests can access customer data and business values. This helps you to define the service request to make a call and to fetch the required data.

    **Script Definition**

    Steps to configure the request details:

    1. Click the **+ Define Request** to configure the API call request.

    2. In the **Request Name**, provide a unique descriptive identifier name. 

    3. Select the necessary custom **HTTP** headers as needed for the API call (**GET** or **POST**) configuration.

    **GET/POST Method**

    4. From the **Auth** dropdown, select the authorization profile that you want to use for API request. 

    5. Add custom HTTP **Headers** if needed as required by your backend systems.

    6. **Test Request** is used to validate the request and response setup before deployment.   

        !!! Note

            * The **Test Request** is enabled when the request parameter is a Context Variable. But this is disabled for the Conversation ID-based configurations.
            
            * It must come from SFTP if the request parameter includes a Conversation ID.

    7. Define the API **Response** parameter as a JSON object or path.  

    **POST Method**

    8. Define the POST **Body** using the context variable ID in the body. For example: `{"userId": "{{context.user_id}}"}`.  

    9. Enter a **Post Script Definition Name** of the API response.

    10. Use a **Post Process Script** to extract or transform the response if needed (optional).

    11. Configure and extract the source system value from the API response after a single API call.   
    <img src="../images/script-definition-post-method.png" alt="Script Definition-Post" title="Script Definition-Post" style="border: 1px solid gray; zoom:50%;">    

    12. Click **Save**.

6. Select the custom **Conversation ID** to trigger sequential API calls and apply post-processing as needed.

#### Conversation ID 

Conversation ID-based API configuration is used when customer identifiers are missing and SFTP integration is in place. The custom conversation ID from CSV metadata triggers two API calls: one to retrieve the customer ID, and another for the business value (for example, interest rate). Post-processing scripts run after each call or at the end to finalize values.

**Configuration Requirements**

1. Map the custom **Conversation ID** from the `CSV `upload metadata. 

2. Use the **Conversation ID** identifier as the API request parameter to make the source system API call.

    !!! Note

        * The **Conversation ID** option is only available when the connector is configured for **QualityAI Express**.
            
        * System-generated Conversation IDs are not supported.
            
        * Use of the Contact Center AI (CCAI) system-generated conversation ID is not supported.
            
        * You must use the conversation ID sourced from metadata delivered via SFTP.

**Script Definition** 

Provide the following service request authorization details:

**GET Method**

3. From the **Auth** dropdown, select the authorization profile that you want to use or access this API request. 

    !!! Note

        * This authorization must remain consistent across all APIs within the function.
            
        * The list of authorization profiles comes from the Dev Tools section of the Platform.

4. Set request-specific HTTP **Headers**.

    !!! Note

        * This **Test Request** option is disabled if the request parameter is a conversation ID.

5. Map and process the API **Response** by entering a JSON object or path.

**POST Method**

6. Define the POST **Body** using the context conversation ID in the body. For example: `{"conversationId": "abc123-xyz"}`
    
7. Enter a **Post Script Definition Name** of the API response.

8. Configure a **Post Process Script** to set additional actions by modifying and storing the API response as a JSON object for use as the source system value.

9. Configure scripts for additional processing to support nested or chained API calls.

8. Click **Save**.  
<img src="../images/post-process-script.png" alt="Script Definition" title="Script Definition" style="border: 1px solid gray; zoom:50%;">   

9. Configure how the system extracts and verifies agent-stated values or answer against backend data.

### Agent Answer Configuration

This defines how the system identifies and extracts specific values mentioned by the agent during a conversation (for example, an interest rate). These extracted values are compared with backend references to assess adherence. The configuration provides instructions to the AI on how to locate and extract these values accurately.

1. **Entity Name**: Enter a descriptive label for the value being extracted from the agent’s response (such as Interest Rate).

2. **Entity Type**: Select the appropriate data type (**String** or **Number**).  

    * **String**: For alphanumeric values, such as a customer ID.

    * **Number**: For numeric values, such as interest rate.

3. **Description**: Provide detailed instructions for the AI on how to identify the agent-mentioned value. For example, to extract the interest rate percentage mentioned by the agent when discussing loan terms, formatted as a decimal number (for example, 4.5 for 4.5%).  
    <img src="../images/agent-answer.png" alt="Agent Answer" title="Agent Answer" style="border: 1px solid gray; zoom:50%;">   

10. Choose one of the business rules to verify the correct agent-stated value.

### Business Rules

Business Rules guide the Gen AI on selecting the correct agent-mentioned value when multiple values are discussed during a conversation, particularly in negotiation scenarios. 

#### Rule Types and Use Cases

Choose one of the following options based on your evaluation logic:

* **First Value Mentioned by Agent**

    * Captures the final or most recent value mentioned by the agent. 
        
    * **Use Case**: When the last mention is considered the official or final quoted value. 
        
    * **Example**: Agent first quotes 4.5%, then later mentions 4.7% and finally 5.0%; the system uses 5.0% as the last value mentioned.

    * **Last Value Mentioned by Agent**

        * Captures the final or last value mentioned by the agent. 

        * **Use Case**: When the last mention represents the official quote. 

        * **Example**: Agent quotes 4.5% initially, then mentions 4.7% and 5.0%; the system uses 5.0%.

    * **Negotiated Value Mentioned by Agent**

        * Captures agreed-upon value after negotiation.

        * **Use Case**: When negotiation results in mutual agreement.

        * **Example**: After the discussion, the agent and customer agree on 4.8%; the system uses 4.8%.

    * **Strict Source System Value**

        * Uses only the backend system value as ground truth.

        * **Use Case**: Zero tolerance for any deviation from system data.

        * **Example**: System shows 7.9%, but agent says 7.5%, which is marked as non-adherent.

    * **Custom Business Rule**

        * Define organization-specific selection logic.

        * **Use Case**: Complex scenarios requiring custom handling.

        * **Example**: Use the value mentioned after the customer accepts terms, or use the value mentioned during the rate discussion phase. It uses the lowest number mentioned, that is 4.9%, as the best offer.  
    <img src="../images/business-rules.png" alt="Business Rules" title="Business Rules" style="border: 1px solid gray; zoom:50%;">           

11. Configure how to evaluate agent responses against backend data using AI or custom rules (Possible outcomes of Pass, Fail, or NA).

### Score Logic & Adherence Criteria

Determines how the extracted agent’s answer is evaluated against the backend or expected value. Supports static or trigger-based evaluation to choose the evaluation method based on your complexity requirements (for example, only when a customer asks about interest rates).

#### Gen AI-Based Adherence

Defines the conditions or rules for measuring adherence. 

* **Description**: Uses Generative AI (LLM) to evaluate if the agent has communicated the expected value correctly, based on natural language understanding and business rules. 

    * **Failure Condition**: The Agent’s expected value (for example, interest rate) is not mentioned in the conversation.

    * **Metric Outcomes**: Configure how the system handles scenarios where the expected agent-mentioned values are not present in the conversation.

        * **Pass**: The expected value is mentioned as per the rule.

        * **Metric Failure**: Value is missing or incorrect (for example, the agent should have quoted the interest rate but never mentioned it).

        * **Not Applicable (NA)**: Indicates the metric is not accounted for if the agent’s expected value is not present and excluded for score calculation (trigger condition not met; evaluation skipped or interest rate metric is skipped, and customer has only asked about account balance).

    #### Custom Script-Based Adherence

    * **Description**: Uses a rule-based script to enforce specific logic to check adherence. Suitable for more deterministic or compliance-critical scenarios.

    * **Failure Condition**: The required value is not present in the conversation or does not match the backend-provided value.

    * **Metric Outcome**: 

        **Metric Failure**: Indicates interaction has failed when the required call context variable (expected information) is missing or mismatched, or found in the conversation. For example, the agent quoted 6.5% but the system says 7.5%. 

        **Not Applicable**: Indicates the metric is ignored or skipped if the value is not relevant for the conversation. For example, the customer only asked about the fixed deposit rate, but not about the loan rate. 
            
        !!! Note

            If **Custom Script** is selected, the system applies the defined logic to validate all mentioned values and selects the most relevant one (for example, final or negotiated value).

12. Click **Create** to save and apply the agent answer metric configuration.

### Edit or Delete By Value Metric

Steps to edit or delete any existing **By Value** evaluation metrics:

1. Right-click on a desired evaluation metric name **By Value** metrics category.     
<img src="../images/by-value-edit-metrics.png" alt="Edit Evaluation Metrics" title="Edit Evaluation Metrics" style="border: 1px solid gray; zoom:0%;">    

2. Choose an option:

    * Click **Edit** to modify the selected metric details.    
    <img src="../images/by-playbook-edit-metrics.png" alt="Edit Playbook" title="Edit Playbook" style="border: 1px solid gray; zoom:70%;"> 

    * Click **Delete** to remove the selected metric.

4. Click **Update** to save the changes.2. 

#### Language Dependency Warnings

This section outlines the limitations and dependencies associated with modifying language settings in evaluation metrics. 

#### Modification Warnings

* You cannot remove a language if any evaluation form currently uses it.

* Remove the language from all associated evaluation forms before modifying their language settings.

* You can safely remove languages that are not linked to any forms or metrics.  
  <img src="../images/by-value-modification-warning.png" alt="Edit Warning" title="Edit Warning" style="border: 1px solid gray; zoom:60%;">     

### Delete Warnings

This section describes the warnings and prerequisites you must address before deleting a metric.

**Steps to Proceed**:

1. If the metric is used in any evaluation form, the system displays a warning message.

2. Remove the metric from all associated evaluation forms before you delete it.

3. The system allows you to delete the metric only after resolving all dependencies.

4. Verify the metric is deleted, and related data are removed.  
    <img src="../images/by-value-delete-error.png" alt="Delete Warning" title="Delete Warning" style="border: 1px solid gray; zoom:80%;">     
