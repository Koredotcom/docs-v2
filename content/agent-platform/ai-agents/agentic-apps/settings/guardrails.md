# PII & Guardrails

The personally identifiable information (PII) framework and Guardrails provide essential safety, privacy, and compliance controls that regulate how sensitive data identifies and processed within an Agentic App. These capabilities work together to prevent PII exposure, enforce safety policies, and maintain predictable behavior across all stages of your app.

### Core Components

* **PII**: A dedicated PII layer that identifies sensitive information with the help of configured patterns. Protective measures like masking or redaction are taken on the detected sensitive content before it's passed to the  language models or other components.
* **Guardrails (Input and Output Scanners)**: Guardrails monitor both inputs and responses. They enforce safety, compliance, and content-quality rules to ensure the agent behaves consistently and responsibly across all workflows.
* **Data Anonymization**: Data remains anonymized throughout the processing pipeline. Only components explicitly configured to access sensitive information can selectively de-anonymize it when operationally required.

**Unified Protection Workflow**

The PII and Guardrails layers work together to provide end-to-end protection across all pipeline stages:

1. **User Input**: Sensitive data is identified and masked before reaching the model.
2. **Agent Processing**: Agents operate only on redacted data, preventing unintended PII propagation.
3. **Agent Response**: Guardrails evaluate outputs to enforce safety and compliance policies.
4. **User Display:**: De-anonymization occurs only when permitted, ensuring the right data appears at the right stage.

Debug logs, traces, and sessions show redacted values by default, reducing the risk of accidental PII exposure.

## PII Detection

PII detection helps identify and protect sensitive user information—such as names, email addresses, phone numbers, and other personally identifiable data—before it's processed by the agent. When it is enabled, detected values are automatically masked or replaced according to your configuration. The agent works with the inputs ensuring privacy and compliance throughout the workflow.  

Learn how to add a [PII detection pattern.](pii-detection-pattern.md){:target="_blank"}

## Guardrails

Guardrails are **pre-deployed scanners** that evaluate prompt input and responses to maintain safety, stability, and compliance during agent execution. Guardrails help monitor and regulate the data that agents **receive** (input scanners) and **generate** (output scanners).

Examples of guardrail use cases:

* Block harmful or inappropriate language
* Restrict content using regex patterns
* Detect toxicity, jailbreak attempts, or unsafe instructions
* Prevent harmful or disallowed outputs from reaching the user.

Since guardrails are automatically deployed across the account, they can be added directly to any tool or flow without additional setup.

Learn more about [Guardrails](../../../guardrails/overview.md){:target="_blank"} and [how to test the scanner](../../../guardrails/test-guardrail.md){:target="_blank"}.

## Data Anonymization

Data anonymization safeguards sensitive information by converting identifiable values into structured tokens during processing and storage.

**Key features:**

* Applies standard anonymization to detected sensitive fields.
* Preserves token structure to ensure downstream tools operate as expected.
* Supports optional de-anonymization for tasks such as database updates or third-party integrations.
* Maintains consistent anonymized values within a single execution context to preserve workflow integrity.

After configuring **Anonymize** and **Deanonymize**, verify compliance with standards. Test the scanner’s effectiveness and adjust settings as needed.

**To test:**

1. Select the test option.
2. Provide input data.
3. Review results and refine scanner settings if necessary.
