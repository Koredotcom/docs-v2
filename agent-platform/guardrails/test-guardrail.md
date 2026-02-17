# Evaluate Guardrails for Efficiency

After enabling and configuring the necessary scanners, you can verify that they adhere to the specified standards. Test the effectiveness of an individual scanner or a group of scanners and then tweak the scanner's settings if required.

Steps to test the Guardrails or Scanners:

1. On the Guardrails page, click **Test**.  
<img src="./../images/test-guardrails.png" alt="Test Guardrails" title="Test Guardrails" style="border: 1px solid gray; zoom:80%;"/>

2. On the Test Guardrails page, in the **Prompt input** box, enter a prompt or select **Input template** to choose a template.  
<img src="./../images/test-guardrails-prompt-input.png" alt="Prompt to Test a Scanner" title="Prompt to Test a Scanner" style="border: 1px solid gray; zoom:80%;"/>

3. Select Test. Under Scores and Results, review the following results:  
<img src="./../images/guardrails-test-results.png" alt="Guardrails Test Results" title="Guardrails Test Results" style="border: 1px solid gray; zoom:80%;"/> 

    * **Validity**: Indicates whether the prompt is valid based on the scanner's criteria. (For example, if Toxicity is not found in the prompt, the prompt is valid, and the Validity is set to True.)

    * **Risk Score**: Indicates the prompt's risk level, calculated using the scanner's threshold and score.

    * **Duration**: Displays the time taken by the scanner to process the prompt.

    !!! note

        * The **Risk Score** is calculated using the following formula: (Threshold - Scanner Score) / Threshold. 

        * For the **Relevance Scanner**, if the similarity between the prompt and generated answer is below the user-defined threshold, the Risk Score is 1; otherwise, it's 0.

4. Based on the results, you can adjust the Scanner's settings and test them again if required.
