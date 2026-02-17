# By Question Metric

The By Question metric is a key feature of the Quality AI module, managed within the **Evaluation Forms** section. It enables supervisors to define, customize, and track performance indicators that measure the quality of agent–customer interactions, specifically at the level of individual questions. This metric helps you to evaluate how well agents answer specific questions during interactions. You can apply it universally across all conversations or use it selectively in trigger-based scenarios. 

By verifying the accuracy of responses, it supports focused feedback, targeted coaching, and continuous improvement.

## What It Offers for Supervisors

* Standardized quality assessment framework.

* Customizable evaluation criteria based on business needs.

* Multi-language support for global operations.

* Automated evaluation suggestions through AI.

## When to Use This Metric

**Primary Use Cases:**

* **Quality Assurance**: To systematically evaluate agent adherence to protocols, scripts, or expected responses.

* **Training Assessment**: To measure how well agents follow prescribed interaction patterns during customer conversations.

* **Compliance Monitoring**: To verify, how agents deliver critical information, such as disclaimers, privacy policies, or regulatory statements (privacy policies, disclaimers).

* **Performance Standardization**: To apply consistent evaluation criteria across agents and interactions.

## How It Works

The metric operates through a **question-driven evaluation process** with two main approaches:

### Static Adherence

* Evaluates agent responses across **all conversations** without conditional requirements.

* Best for universal standards like greetings or standard procedures.

* No trigger conditions needed.

### Dynamic Adherence

* Evaluates agent responses only when specific triggers occur.

* Trigger-based detection using customer or agent utterances.

* Use this for conditional scenarios that require specific responses in certain contexts.

## Configure by Question Metric

1. Navigate to **Quality AI** > **Configure** > **Evaluation Forms** > **Evaluation Metrics**.

1. Select **+ New Evaluation Metric**.

1. From the **Evaluation Metrics Measurement Type** dropdown, select **By Question**.  
<img src="../images/by-question-dropdown.png" alt="Measurement Type" title="Measurement Type" style="border: 1px solid gray; zoom:70%;">

1. Enter a descriptive **Name** for future reference of the metrics. (for example, agent’s warm greeting).

1. Select a preferred **language** from the dropdown to evaluate the form and configure the required metric. 

1. Enter an evaluation **Question** to help supervisors assess agent adherence as a reference for the audits and interaction reviews.    
<img src="../images/by-question-adhere-type.png" alt="Question and Adherence Type" title="Question and Adherence Type" style="border: 1px solid gray; zoom:70%;">

1. Select the agent **Adherence Type** (**Static** or **Dynamic**).

    !!! note

        * For **Static**, you must configure at least one agent answer utterance for the Adherence Type.
        
        * For **Dynamic**, you must configure at least one trigger and one agent answer utterance for the adherence type.

## Adherence Type Configuration

The following are the key trigger components that you can configure:

* **Customer Utterance**: Evaluation initiated by customer statements.

* **Agent Utterance**: Evaluation triggered by agent responses.

* **Multiple Triggers**: Support for complex conditional scenarios.

* **GenAI Suggestions**: Automated variation generation.

### Static Adherence

Static Adherence measures whether agents say the required phrase, regardless of what triggers the conversation. It applies to all calls, without any condition or contextual trigger.

* Use this adherence when you need a consistent, universal check (for example, mandatory greeting scripts, regulatory disclaimers).

* Define acceptable utterances for a queue.

* Set a similarity threshold to evaluate whether the agent’s actual response matches the pre‑defined acceptable utterance.
  
* Configure at least one agent utterance template for this adherence type.

* This requires no triggers or contextual conditions and is ideal for fixed, non-situational compliance items

### Dynamic Adherence 

Dynamic Adherence evaluates agent performance based on specific triggers (context-sensitive method) instead of reviewing every interaction. It assesses agent behavior when the configured conditions occur.

* This checks adherence only when it detects a configured trigger, such as an agent or customer utterance.

* Define at least one trigger (either customer or agent utterances) and one acceptable agent response that activate the adherence check.

* Evaluates agent behavior only in the context of the detected trigger. 

* Specify how well the agent’s response must match the predefined response. 

* Adjust adherence similarity based on criticality:

    * **Lower Threshold**: Close to 60% (Yellow) for casual interactions, greetings.

    * **Higher Threshold**: Close to 100% (Green) for critical topics, such as legal disclaimers or privacy policies.       
    <img src="../images/by-question-adhere-type1.png" alt="Question and Adherence Type" title="Question and Adherence Type" style="border: 1px solid gray; zoom:70%;"> 
        
        !!! note

            For **Dynamic**, configure at least one **Trigger** and one agent **Answer** utterance for the adherence type. 

* Choose an utterance source for **Trigger** (who initiates the trigger).

* When the system detects a trigger, it evaluates whether the agent responded with one of the predefined acceptable utterances.

## Trigger Configuration

Provides the following two options to select based on the trigger created by **Agent Utterance** or **Customer Utterance** for evaluation: 

1. Choose a **Trigger** from agent or customer utterances to evaluate responses.

    * **Customer Utterance**: Configure the Customer Utterance that triggers the adherence check. You can enter more than one utterance using Generative AI Assistants that are similar to utterances with the same meaning. For example, customer says `I need a refund`.
        
    * **Agent Utterance**: Configure the Agent Utterance for triggers initiated by the agent. Enter the utterances using generative AI Assistants’ suggestions that have similar utterances with the same meaning. You can add or delete multiple utterances for the Customer and the Agent. For example, agent says `let me transfer you to support`.

        * You can add multiple trigger utterances for conditional checks (for example, AND/OR conditions) to define the trigger condition or refine activation timing.
        
        * You can define a trigger for either a customer or agent utterance and configure the corresponding responses for that scenario.      
        <img src="../images/by-question-trigger.png" alt="By Question Trigger" title="By Question Trigger" style="border: 1px solid gray; zoom:70%;">


1. Choose a **Trigger Detection Method**.
    
    * **GenAI-Based Adherence**: Enter a descriptive prompt to define intent. This enables contextual detection of whether the agent’s response aligns with the intended goal, without relying on predefined samples. This uses LLMs to understand context and intent and don't require sample utterances or thresholds.

    * **Deterministic Adherence**: This relies on predefined sample utterances and detects adherence based on semantic similarity. 

    * **Utterance**: Enter sample training utterances to detect adherence and define similarity thresholds accordingly.      
   <img src="../images/by-question-trigger-detection-method.png" alt="By Question Utterance" title="By Question Trigger Detection Utterance" style="border: 1px solid gray; zoom:70%;">

## Enablement of GenAI-Based Features (Pre-requisite)

Enable the following conditions to activate GenAI-based features:

1. Navigate to **Manage**> **Generative AI**> **GenAI Features**.

1. [Enable](../../../../generative-ai-tools/genai-features.md){:target="_blank"} and [Publish](../../../../deploy/publishing-bot.md#publishing-components){:target="_blank"} the following two features:

    * **GenAI-based agent answer adherence**

    * **GenAI-based customer trigger detection**    
    <img src="../images/gen-ai-based-agent-answer-adherence-with-trigger.png" alt="GenAI-based Features" title="GenAI-based features" style="border: 1px solid gray; zoom:70%;">

1. Choose an **Agent Answer** adherence type.

### Agent Answer

* **GenAI-Based Adherence**: Use AI and natural language understanding (LLM) to detect meaning, context, and intent. This evaluates whether the agent's answer fulfills the **intents**, even if phrased differently.

* **Deterministic Adherence**: This relies on an **ML-based** method using the semantic similarity.

* **Description**: Enter a prompt **Description** to check the agent's intent accuracy, phrasing response, and adherence. 

#### GenAI-Based Adherence

Uses Generative AI to automatically evaluate agent responses by understanding natural language, including intent and context, even when phrased differently.

**Agent Answer**

1. Select an **Answer Detection Method** to evaluate whether agents respond according to the prompt’s intent. This uses a probabilistic LLM-based method and requires no model training.

1. Enable the **GenAI-Based Adherence**. Use a **Large Language Model** (LLM) to detect trigger phrases and evaluate adherence using contextual understanding.

1. Enter a prompt **Description** explaining the metric’s intent or details behind the adherence metric. This applies to all selected languages.   
<img src="../images/by-question-agent-answer.png" alt="Agent Answer" title="Agent Answer" style="border: 1px solid gray; zoom:70%;">

    !!! Note
            
        * Before assessing GenAI-based adherence responses, ensure that the [Supported models](../../../../generative-ai-tools/genai-features-qualityai.md){:target="_blank"} and [GenAI features](../../../../generative-ai-tools/genai-features.md){:target="_blank"}, including GenAI-based agent answer adherence and customer trigger detection, are enabled for the respective products in the GenAI features section. 
                
        * No example utterances or similarity thresholds are required; LLMs evaluate adherence contextually using zero-shot prompts.
                
        * For effective prompts and LLM-based adherence detection, refer to
        [AutoQA - Prompting Guide](autoqa-prompting-guide.md){:target="_blank"}.

#### Deterministic Adherence

Evaluates agent responses based on semantic similarity to predefined reference utterances or answers.

#### Similarity Configuration

1. Select **Deterministic Adherence** to assess responses based on similarity to reference answers. Encoder-based mode lets you define expected replies.                

1. Define an **Answer** as a set of acceptable utterances for each queue, using **Generative AI** to generate the following automated response variations:

1. Set the **Similarity** percentage for the desired evaluation metrics. Whether it's **Static** or **Dynamic**, you can configure the expected Similarity threshold. For example, use a lower threshold (for example, 60%) for soft skills like greetings and etiquette, and a higher threshold (for example, 100%) for compliance-critical statements (such as Policy, Privacy, or Disclaimer), ensuring agents follow adherence according to the use case.     
    <img src="../images/by-question-agent-answer-similarity.png" alt="Similarity Thresholds" title="Similarity Thresholds" style="border: 1px solid gray; zoom:70%;"> 
        
## Count Type Configuration

Choose a **Count Type** to configure key count types for the selected **Adherence Type**.

* **Entire Conversation**: Full interaction evaluation
* **Time Bound**: Specific time ranges or message counts

### Entire Conversation

Evaluates adherence throughout the complete interaction. This lets you check for adherence at different points of conversation. It doesn't matter where the agent wants to check adherence throughout the conversation.   
<img src="../images/entire-conversation.png" alt="Entire Conversation" title="Entire Conversation" style="border: 1px solid gray; zoom:70%;">

### Time Bound

Focuses on specific timeframes (first or last X seconds or messages). This evaluates adherence within a specific time range or number of messages in the interaction. It can occur at the start or end of the conversation, either for a defined number of seconds or a set number of chat messages.

1. **Parameter**: Choose between the **First Part of Conversation** or the **Last Part of Conversation**, and configure the relevant criteria to evaluate the metric. 

1. **Voice**: Enter the number of seconds from the start or end of the interaction to evaluate this metric. 

1. **Chat**: Enter the number of messages from the start or end of the interaction to evaluate this metric.  
<img src="../images/by-question-time-bound.png" alt="Time Bound" title="Time Bound" style="border: 1px solid gray; zoom:70%;">

1. Select **Create** to save and activate the By Question configured adherence metric.

## Edit or Delete By Question Metric

Steps to edit or delete any existing **By Question** evaluation metrics:

1. Select a required evaluation metric name given in the **By Question** category.  
    <img src="../images/common-edit-eva-metics.png" alt="Edit Metric" title="Edit Metric" style="border: 1px solid gray; zoom:70%;">

1. Choose an option:

    * Select **Edit** to modify the selected metric details.  
   
    * Select **Delete** to remove the selected metric.  

1. Select **Update** to save the changes.

### Language Dependency Warnings

This section outlines the limitations and dependencies associated with modifying language settings in evaluation metrics. 

#### Modification Warnings

1. You must keep a language if any evaluation form or attribute uses it.

1. Remove the language from all associated evaluation forms and attributes before modifying their language settings.

1. Remove the languages that aren't linked to any forms or metrics.  
<img src="../images/by-question-lang-warning.png" alt="language Warning" title="language Warning" style="border: 1px solid gray; zoom:70%;">

#### Delete Warnings

This section describes the warnings and prerequisites you must address before deleting a metric.

1. If any evaluation form uses the metric, the system displays a warning message.

1. Remove the metric from all associated evaluation forms before you delete it.

1. If any attributes link to the metric, assign a different metric to them before deleting the original.

1. The system lets you delete the metric only after resolving all dependencies.  

