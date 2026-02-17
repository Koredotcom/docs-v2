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
