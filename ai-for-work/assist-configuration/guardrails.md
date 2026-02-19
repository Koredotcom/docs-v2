# Guardrails

Guardrails is an advanced security and compliance framework designed to protect sensitive information and enforce content policies in AI-powered applications. The system operates as a multi-layered defense mechanism, automatically scanning inputs and outputs to ensure data privacy and content appropriateness.

<img src="../images/guardrails-implementation.png" alt="guardrails-implementation" title="guardrails-implementation" style="border: 1px solid gray; zoom:80%;"/>

## Accessing Guardrails

**Navigation Path**: Account Hub → Assist Configurations → Guardrails

Get started with Guardrails in four simple steps to secure your AI interactions and protect sensitive data:

1. Navigate to the Guardrails section in **Account Hub**.

<img src="../images/guardrails-account.png" alt="guardrails-account" title="guardrails-account" style="border: 1px solid gray; zoom:80%;"/>

2. Examine pre-configured PII (personally identifiable information) detection rules.
3. Set up content restrictions appropriate for your organization.
4. Validate configurations using the integrated testing suite.

## Understanding the Interface Layout

The Guardrails interface is organized into three main sections:

* PII Settings: Managing data protection rules.
* Ban Topics: Content restriction configuration.
* Testing Suite: Validation and performance analysis.

### PII Settings

The PII Settings component provides comprehensive protection for personally identifiable information through intelligent detection and flexible handling options.

#### Pre-configured Detection Rules

* **Email Address**: Automatic detection of email patterns across various formats.
* **Universal Phone Numbers**: Recognition of domestic and international phone number formats.
* **Social Security Numbers**: Detection of SSN patterns with format validation.
* **Credit Card Numbers**: Identification of major credit card number formats.

<img src="../images/PII-Settings.png" alt="PII-Settings" title="PII-Settings" style="border: 1px solid gray; zoom:80%;"/>

#### Add or Update Rule

Create custom detection patterns using regular expressions:

* **Name**: Assign unique identifiers and descriptions to the Rule.
* **Description**: Describe the topic to be banned.
* **Regex Selection**: Map entities from Dialog Tasks to their corresponding information types for scanning purposes.
<img src="../images/Regex-Selection.png" alt="Regex-Selection" title="Regex-Selection" style="border: 1px solid gray; zoom:80%;"/>

* **Action**: Choose how to display redacted data to non-authorized users.
     * *Redaction*: Complete removal of sensitive data from text.
     * *Static Replacement*: Substitution with predefined safe text.
     * *Masking*: Replacement with placeholder characters (e.g., **** or XXX).
<img src="../images/action.png" alt="action" title="action" style="border: 1px solid gray; zoom:80%;"/>

### Ban Topics Configuration

The Ban Topics system centrally manages content restrictions for all organizational AI interactions, ensuring consistent enforcement and simplified governance. By dynamically modifying input prompts in real-time, it prevents AI models from engaging with prohibited topics, guaranteeing acceptable AI output and maintaining a secure, compliant AI environment.

The Ban Topics system offers a flexible and user-friendly configuration management framework that empowers organizations to tailor content boundaries to their specific needs and policies.

* **Template System:** The system incorporates a template system that provides pre-defined sets of content restrictions based on common industry standards or organizational requirements. These templates serve as a starting point for configuration, allowing organizations to quickly implement baseline content controls and then further customize them as needed.
* **Custom Prompt Development:** The Ban Topics system offers the flexibility to create custom prompts, acknowledging that standard solutions may not always suffice. This capability allows organizations to establish detailed and context-aware content limitations, offering methods for tackling specific compliance needs or internal regulations.
* **Enable/Disable Functionalities:** Administrators can easily enable or disable both built-in and custom prompt content restrictions as needed for organizational changes or testing.

### Testing Guardrail

The integrated testing suite provides validation and performance analysis for all guardrail configurations. Testing involves using an isolated environment to conduct full or targeted validation of PII rules and banned topics. Test inputs can be managed manually, AI-driven, or through batch tests and boundary condition testing. Test outcomes are analyzed through individual rule analysis, impact status, process duration, and output. Additionally, users can preview data sanitization visually.

<img src="../images/testing-framework.png" alt="testing-framework" title="testing-framework" style="border: 1px solid gray; zoom:80%;"/>