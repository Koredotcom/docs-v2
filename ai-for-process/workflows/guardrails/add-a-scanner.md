# Add Input/Output Scanners

You can add input or output scanners to evaluate prompts or responses in your application. Input scanners assess inputs or prompts sent to the LLM node, while output scanners evaluate the responses received from the LLM.

In the following steps, you will learn how to add an input scanner. The steps to add an output scanner are similar to those for an input scanner. You need to add input and output scanners separately based on your requirements.

!!! note

    Scanners must be deployed before you add or use them. [Learn more](./manage-guardrails.md).

Steps to add a Scanner:

1. Log in to your account.

2. In the **Workflows** section, click the workflow to which you want to add the scanner. The Workflow page is displayed. 

2. Click **Guardrails** in the left navigation pane. The Guardrails page is displayed.  
<img src="./../images/navigate-to-guardrails.png" alt="Navigate to Guardrails" title="Navigate to Guardrails" style="border: 1px solid gray; zoom:80%;">

3. In the Input Scanners section, click **Add Scanner**, select the required scanners from the pop-up list, and then click **Done**. 
<img src="./../images/add_a_scanner.png" alt="Add Input Scanner" title="Add Input Scanner" style="border: 1px solid gray; zoom:80%;">

    The selected scanners are added to the list.  
    <img src="./../images/added-guardrails.png" alt="Scanner Added" title="Scanner Added" style="border: 1px solid gray; zoom:80%;">

4. Click an added scanner to configure its settings, which vary depending on the scanner type.
For example, **Toxicity** has "Threshold" and "End the flow if the risk score is above" settings, while **Regex** has "Enter patterns to ban", "End the flow if the risk score is above", and "Match type" settings.  
<img src="./../images/toxicity-scanner-settings.png" alt="Configure Scanner's Settings" title="Configure Scanner's Settings" style="border: 1px solid gray; zoom:80%;">

5. (Optional) To add more scanners, click the plus or **Add Scanner** icon. To remove an unused scanner, click the minus or **Remove Scanner** icon.  
<img src="./../images/add-remove-scanners.png" alt="Remove Scanner" title="Remove Scanner" style="border: 1px solid gray; zoom:80%;">
