# Guardrails for Safety and Compliance

Guardrails are safety measures that ensure AI-generated responses from large language models (LLMs) are appropriate and align with standards. You can deploy various guardrail models and use them to scan the inputs or prompts and output results. The scanners ensure responsible AI interactions while generating responses.

Supported Scanners:

**Regex Scanner**  

* Validates prompts based on user-defined regular expression patterns.
* Allows defining desirable ("good") and undesirable ("bad") patterns for fine-grained prompt validation.

**Anonymize Scanner** 

* Ensures user prompts remain confidential by removing sensitive data.
* Helps maintain user privacy and prevents exposure of personal information.

**Ban Topics Scanner** 

* Restricts specific topics, such as religion, from being introduced in prompts.
* Maintains acceptable boundaries and avoids potentially sensitive or controversial discussions.

**Prompt Injection Scanner** 

* Protects LLM against crafty input manipulations.
* Identifies and mitigates injection attempts to ensure secure LLM operation.

**Toxicity Scanner** 

* Analyzes and gauges the toxicity level of prompts.
* Assists in maintaining healthy and safe online interactions by preventing the dissemination of potentially harmful content.

**Bias Detection Scanner**

* Inspects LLM-generated outputs to detect and evaluate potential biases.
* Ensures LLM outputs remain neutral and free from unwanted or predefined biases.

**Deanonymize Scanner** 
    
* Replaces placeholders in the model's output with real values.
* Helps restore original information in the output when needed.

**Relevance Scanner** 

* Measures the similarity between the input prompt and the model's output.
* Provides a confidence score indicating the contextual relevance of the response.
* Ensures LLM outputs remain aligned with the given input prompt.
# Add Input/Output Scanners

You can add input or output scanners to evaluate prompts or responses in your application. Input scanners assess inputs or prompts sent to the LLM node, while output scanners evaluate the responses received from the LLM.

In the following steps, you will learn how to add an input scanner. The steps to add an output scanner are similar to those for an input scanner. You need to add input and output scanners separately based on your requirements.

!!! note

    Scanners must be deployed before you add or use them. [Learn more](./manage-guardrails.md).

Steps to add a Scanner:

1. Log in to your account.

2. In the **Workflows** section, click the workflow to which you want to add the scanner. The Workflow page is displayed. 

2. Click **Guardrails** in the left navigation pane. The Guardrails page is displayed.  
<img src="./../images/navigate-to-guardrails.png" alt="Navigate to Guardrails" title="Navigate to Guardrails"/>

3. In the Input Scanners section, click **Add Scanner**, select the required scanners from the pop-up list, and then click **Done**. 
<img src="./../images/add_a_scanner.png" alt="Add Input Scanner" title="Add Input Scanner"/>

    The selected scanners are added to the list.  
    <img src="./../images/added-guardrails.png" alt="Scanner Added" title="Scanner Added"/>

4. Click an added scanner to configure its settings, which vary depending on the scanner type.
For example, **Toxicity** has "Threshold" and "End the flow if the risk score is above" settings, while **Regex** has "Enter patterns to ban", "End the flow if the risk score is above", and "Match type" settings.  
<img src="./../images/toxicity-scanner-settings.png" alt="Configure Scanner's Settings" title="Configure Scanner's Settings"/>

5. (Optional) To add more scanners, click the plus or **Add Scanner** icon. To remove an unused scanner, click the minus or **Remove Scanner** icon.  
<img src="./../images/add-remove-scanners.png" alt="Remove Scanner" title="Remove Scanner"/>
# Deploy and Manage Guardrails 

To use input and output scanners in AI for Process, you need to deploy them first. Once deployed, a scanner will be available across all your workflows on the platform.

Steps to deploy a scanner:

1. Log in to your account.
2. Click **Settings** on the top navigation bar.
3. Click **Manage Guardrails** on the left menu.
<img src="./../images/manage-guardrails-new.png" alt="Manage Guardrails" title="Manage Guardrails"/>

4. On the Manage guardrail models page, click the **Deploy** button next to the scanner you want to deploy.  

    The deployment process starts, and the status is displayed as **Deploying**. Once the scanner is deployed, it's available in the scanners list when a new scanner is added.

    !!! note

        If you no longer need a scanner, click the **Undeploy** button next to the scanner to remove it from the platform.


# Evaluate Guardrails for Efficiency

After adding and configuring the necessary scanners, you can verify that they adhere to the specified standards. Test the effectiveness of an individual scanner or a group of scanners and then tweak the scanner's settings if required.

Steps to test the Guardrails or Scanners:

1. On the Guardrails page, click **Test**.  
<img src="./../images/test-guardrails.png" alt="Test Guardrails" title="Test Guardrails"/>

2. On the Test Guardrails page, in the **Prompt input** box, enter a prompt or select **Input template** to choose a template.  
<img src="./../images/test-guardrails-prompt-input.png" alt="Prompt to Test a Scanner" title="Prompt to Test a Scanner"/>

3. Select Test. Under Scores and Results, review the following results:  
<img src="./../images/guardrails-test-results.png" alt="Guardrails Test Results" title="Guardrails Test Results"/> 

    * **Validity**: Indicates whether the prompt is valid based on the scanner's criteria. (For example, if Toxicity is not found in the prompt, the prompt is valid, and the Validity is set to True.)

    * **Risk Score**: Indicates the prompt's risk level, calculated using the scanner's threshold and score.

    * **Duration**: Displays the time taken by the scanner to process the prompt.

    !!! note

        * The **Risk Score** is calculated using the following formula: (Threshold - Scanner Score) / Threshold. 

        * For the **Relevance Scanner**, if the similarity between the prompt and generated answer is below the user-defined threshold, the Risk Score is 1; otherwise, it's 0.

4. Based on the results, you can adjust the Scanner's settings and test them again if required.

