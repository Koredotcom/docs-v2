


# PII and Sensitive Data Anonymization - LLM Interactions



Personally identifiable information (PII), or sensitive personal information (SPI), refers to information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Examples of PII include Social Security Numbers, email addresses, credit card numbers, card verification value (CVV), passport numbers, and home addresses.

The Platform allows you to anonymize sensitive information, such as entities and tool parameters, before sending it to large language models (LLMs). This feature protects confidential or personally identifiable information (PII) while preserving end-to-end system functionality.

You must define regular expression (regex) patterns that the Platform uses to detect sensitive data in user input and determine how to handle it.



* **Redaction**: Replace the data with a placeholder that entirely hides the value.
* **Replacement**: Substitute the data with a predefined value or string.
* **Mask with Character**: Conceal part of the data while keeping a recognizable format (for example, masking all but the last four digits of a number).

When the LLM-layer PII option is enabled, anonymization applies only during interactions with the language model. The Platform restores the original values after the LLM response, while conversation history and debug logs always display the original/unmasked data to support internal processing. LLM-layer PII works alongside [globally declared PII](../app-settings/advanced-settings/pii-data-masking.md), with global settings taking precedence. 


It is recommended (especially for smaller models) to add explicit instructions in the prompt to prevent the model from altering the redacted values. Any modification prevents the Platform from de-anonymising them to their original form and impacts platform functionality. The Platform adds ## at the beginning and end of the redacted value, and this can be used to define the instructions. 

Example 1: Sensitive data like a credit card number may appear in the format ##************5678##. The system has transformed the original credit card number to this masked format for security purposes. MANDATORILY DO NOT reject, modify, or alter any such information in your responses.

Example 2:  Sensitive data like "EmailAddress" may appear in the format ##EmailAddress##. The system has transformed "EmailAddress" to ##EmailAddress## for security purposes. MANDATORILY DO NOT reject, modify, or alter any such information in your responses.


Currently, data anonymization during LLM applies to the following GenAI features.



* Agent Node
* Conversation Summary
* DialogGPT
* Disposition Prediction for Agent Wrap-Up
* Prompt Node
* Rephrase Response
* Sentiment Analysis

**How to Anonymize Data**

Follow these steps:



1. Go to **Generative AI Tools** > **Safeguards** > **Data Anonymization**.  
<img src="../images/data-anonymization.png" alt="Data Anonymization" title="Data Anonymization" style="border: 1px solid gray; zoom:70%;">

2. Click **Get Started / + New Field**.  
<img src="../images/data-anonymization-add-new-type.png" alt="Data Anonymization" title="Data Anonymization" style="border: 1px solid gray; zoom:70%;">

3. Enter the Information Type and Regex Pattern, then select the Display Type.

    !!! note

        To redact user inputs that strictly match a regex pattern, the pattern needs to be defined as a substring rather than an exact value. This is because the entire request payload is scanned for defined patterns and not just the user input.  To avoid this issue, use a regular expression (regex) that matches the value within a larger context. For example, use (?<!\d)890839(?!\d) instead of ^890839$ to redact 890839.
        
4. Click **Save**.