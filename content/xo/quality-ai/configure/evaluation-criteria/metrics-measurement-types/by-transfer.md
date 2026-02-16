# By Transfer Etiquette Metric

The By Transfer Etiquette metric automatically evaluates how agents handle internal customer transfers during voice interactions, ensuring consistent adherence to transfer standards and maintaining service quality throughout the handoff.

This metric assesses agent behavior during both warm transfers (agent stays during handoff) and cold transfers (immediate agent disconnect), focusing on pre-transfer communication:

* **Customer notification**: Verifies that agents inform customers before initiating a transfer.

* **Reason explanation**: Checks whether agents clearly explain why the transfer is necessary.

* **Destination information**: Evaluates whether agents communicate the location to which the customer is being transferred.

The metric integrates with telephony systems to detect transfer initiation events and can evaluate multiple transfer instances within a single conversation. You can configure evaluations using either LLM-based assessments with custom descriptions or ML embedding models trained on sample utterances, giving quality managers clear visibility into transfer etiquette performance.

## Key Benefits

* Evaluate 100% of internal transfer interactions automatically across voice channels.

* Reduce customer frustration from poor handoffs.

* Identify coaching opportunities for improved transfer communication.

* Maintain consistent service quality throughout the transfer process.

## Metric Setup

### Create By Transfer Etiquette Metric

To create the By Transfer Etiquette metric, configure the following:

1. Navigate to **Quality AI** > **Configure** > **Evaluation Forms** > **Evaluation Metrics**.

1. Click **+ New Evaluation Metric** to select a metric category.

1. Define the Basic Configuration of the Transfer Etiquette metric.

1. From the **Evaluation Metrics Measurement Type** dropdown, select **By Transfer Etiquette**.  
<img src="../images/by-transfer-measurement-type.png" alt="By Transfer Etiquette Metric" title="By Transfer Etiquette Metric" style="border: 1px solid gray; zoom:60%;">  

1. Provide a descriptive **Name** (for example, holding a customer for an extended period) for later reference. 

1. Select the applicable **Language** from the dropdown that this metric evaluates.
 
    * You must select one language for the metric configuration.

    * You can add/remove languages dynamically. 

1. Define an evaluation **Question** for adherence check. For example, "Did the agent inform the customer before placing the transfer to another department?".  
<img src="../images/by-transfer-basic-config.png" alt="By Transfer Basic Config" title="By Transfer Basic Config" style="border: 1px solid gray; zoom:60%;">   

1. Choose a **Pre-Transfer Communication Assessment** to verify whether agents provided the required information before transferring the call.
 
1. Choose a **Detection Window Configuration** to define how the system detects and evaluates agent behavior before the transfer:

    * **Last Utterance Before Transfer**: Enable to evaluate only the final agent utterance before transfer. 

    * **Configurable Time Window**: Enable to set and capture relevant agent utterances in seconds before transfer (1-60 range, default: 10). 				

1. Choose an evaluation method (Gen AI-based or Deterministic ML model). 

    * **Gen AI-Based**: Select the Gen AI-Based method for natural language analysis to assess transfer etiquette. 

        * Enter a **Description** to define the expected behavior. For example, "Agent must inform the customer about the transfer, explain the reason, and provide destination information". 
        <img src="../images/pre-transfer-comm-assessment.png" alt="Pre-Transfer Communication Assessment" title="Pre-Transfer Communication Assessment" style="border: 1px solid gray; zoom:60%;">  

    * **Deterministic ML Model (BGE-m3)**: Select the Deterministic ML method to compare embedded-based similarity scores against sample reference utterances. For example, "I’d like to transfer this call to another department".   
    <img src="../images/pre-transfer-deterministic-method.png" alt="Deterministic ML Model" title="Deterministic ML Model" style="border: 1px solid gray; zoom:60%;">  

        * **Answer**: Add the sample utterances if no utterances are found.

            * You can add multiple utterances for each configured language for acceptable transfer communication.  

            * You can check/uncheck utterance checkboxes to include or exclude them from the sample list.

            * You can add and delete the required utterances as needed.

            * Each configured language has its own set of utterances (for example, English and Dutch). 

            * Select the similar utterances to include them from the sample list, and click **Add**.  
            <img src="../images/deterministic-sample-utterance-selection.png" alt="Deterministic ML Sample Utterances" title="Deterministic ML Sample Utterances" style="border: 1px solid gray; zoom:60%;">  

        * Set the minimum **Similarity** threshold score (0-100%, default 60%). 

            * **Below 60%:** Orange (does not meet standard)

            * **60-100%:** Green (meets standard)   
            <img src="../images/pre-transfer-deterministic-similarity-utterances.png" alt="Deterministic-Similarity-Utterances" title="Deterministic-Similarity-Utterances" style="border: 1px solid gray; zoom:60%;">  

        * Select the similar utterances from the sample list for all configured languages to enable the **Create** button.

1. Click **Create**. 

    !!! note

        * The **Create** button activates only after all validation checks pass.

        * Once saved, the metric becomes active and ready for evaluation.
            
        * The metric appears in the Evaluation Metrics dashboard list.

### Scoring Logic

#### When Transfers Are Detected

The system evaluates agent communication based on your configured detection window and evaluation method.

For Evaluation Forms:

* Each transfer instance is assessed separately.

* All transfers must meet standards for the metric to pass.

* If any transfer fails, the entire metric weight is deducted.

For Scorecards:

* Each agent's portion is evaluated separately across all transfers.

* All transfer instances in an agent's section must pass.

* If any instance fails, the specific weight is deducted entirely.