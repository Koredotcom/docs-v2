# AutoQA - GenAI By Question Metric Prompting Guide

## Overview

This guide helps you craft effective prompts for LLM-based adherence detection that achieve high precision and recall. Well-structured prompts are specific, measurable, and account for real-world conversation variations.

## Prompt Architecture Framework

### Core Components

Every effective AutoQA prompt should include:

1. **Context Setting** - Define the evaluation scenario
2. **Pass Criteria** - Specific behaviours that constitute success
3. **Fail Criteria** - Clear indicators of non-compliance

### Template Structure

CONTEXT: [Conversation type and evaluation scope]

PASS CRITERIA: [Specific behaviours indicating adherence]

* Look for: [required elements]
* Acceptable variations: [alternative approaches]

FAIL CRITERIA: [Behaviours indicating non-adherence]

* Missing: [critical elements]
* Inadequate: [insufficient attempts]

## Prompt Development Process

### Step 1: Define Your Success Criteria

**Ask yourself:**

* What specific actions/words indicate adherence?
* What variations are acceptable?
* What constitutes a clear failure?
* How granular should the evaluation be?

### Step 2: Create Measurable Standards

**Ensure criteria are:**

* Observable in conversation transcripts
* Objective rather than subjective
* Specific enough to avoid interpretation gaps
* Comprehensive enough to cover typical scenarios

### Step 3: Test Specificity

**Validate your prompt by asking:**

* Could two evaluators reach different conclusions?
* Are there ambiguous terms that need clarification?
* Does it clearly differentiate between pass and fail scenarios?

## Example Prompts

### Greeting Evaluation

#### Poor Prompt Examples (Low Precision/Recall)

Example 1: "Check if the agent was polite when greeting the customer."

Example 2: "Did the agent say hello properly?"

Example 3: "Evaluate the quality of the agent's opening statement."

**Why these fail:**

* "Polite" is subjective and unmeasurable
* "Properly" lacks specific criteria
* "Quality" provides no actionable evaluation framework

#### Robust Prompt (High Precision/Recall)

CONTEXT: Evaluate whether the agent provided a complete and professional greeting to establish the service interaction.

PASS CRITERIA:

Look for the presence of these four key elements:

* Acknowledgement/welcome phrase (e.g., "Hello", "Good morning", "Thank you for calling")
* Company/department identification (e.g., "ABC Company", "Customer Service", "Technical Support")  
* Agent identification (name, employee ID, or role)
* Offer of assistance (e.g., "How can I help you?", "What can I do for you today?")

Acceptable variations:

* Elements may appear in any order within the greeting sequence
* Casual but professional tone is acceptable
* Abbreviated company name if commonly recognized by customers
* Combined elements (e.g., "This is Sarah from Tech Support, how can I help?")

FAIL CRITERIA:

* Any of the four key elements is missing
* Unprofessional language, slang, or inappropriate tone
* Generic greeting without company/agent identification
* No clear offer of assistance

### Call Closing Evaluation

#### Poor Prompt Examples (Low Precision/Recall)

Example 1: "Check if the agent ended the call nicely."

Example 2: "Did the agent close the call professionally and make sure the customer was satisfied?"

Example 3: "Evaluate whether the call conclusion was appropriate."

**Why these fail:**

* "Nicely" and "appropriately" are subjective measures
* Combines multiple criteria without specific definitions
* No clear framework for what constitutes professional closure

#### Robust Prompt (High Precision/Recall)

CONTEXT: Evaluate whether the agent provided a complete and professional closing that ensures customer satisfaction and clear resolution.

PASS CRITERIA:

Look for at least 3 of these 4 elements:

* Issue resolution summary or confirmation of next steps taken
* Satisfaction verification (e.g., "Does that resolve your concern?", "Is there anything else I can help with?")
* Appreciation statement (e.g., "Thank you for calling", "I appreciate your patience", "Thank you for choosing us")
* Professional sign-off (e.g., "Have a great day", "Take care", company-specific closing phrase)

Acceptable variations:

* Elements may be naturally integrated into the conversation flow
* Customer satisfaction can be implied if the customer explicitly expresses satisfaction first
* Concise closings are acceptable when issue resolution is straightforward
* Personal touches that maintain professionalism (e.g., referencing the customer's name)

FAIL CRITERIA:

* Fewer than 3 required elements present
* Leaving the customer with unresolved questions or unclear next steps
* Abrupt disconnection without closure attempt
* Unprofessional final statements or dismissive tone
* Failure to confirm customer understanding when complex solutions are provided

**Quality Assurance Checklist**

Before deploying your prompt:

* **Measurable Criteria**: Can each element be objectively identified?
* **Complete Coverage**: Are all success/failure scenarios addressed?
* **Unambiguous Language**: Would different evaluators reach consistent conclusions?
* **Realistic Expectations**: Are standards achievable for your agent population?
* **Clear Boundaries**: Is the distinction between pass and fail evident?
* **Consistent Scoring**: Does it align with your overall evaluation framework?

**Common Pitfalls to Avoid**

1. **Vague Descriptors**: "Professional manner" vs. "Uses courteous language and acknowledges customer concerns".

2. **Subjective Judgments**: "Friendly tone" vs. "Uses positive language markers and avoids negative phrasing".

3. **Compound Criteria**: Mixing multiple evaluation points in a single statement without clear weighting.

4. **Cultural Assumptions**: Assuming universal communication styles or expressions.

5. **Perfectionist Standards**: Setting criteria that exclude natural conversation variations.

6. **Missing Specificity**: Not defining what counts as successful completion of each element.

7. **Implicit Requirements**: Assuming evaluators understand unstated expectations.

8. **Binary Oversimplification**: Not accounting for partial completion or contextual appropriateness.

**Key Success Factors**

### Specificity Over Generality

Replace broad concepts with concrete, observable behaviours:

* **Instead of**: "Agent was helpful".
* **Use**: "Agent acknowledged the customer's concern and provided specific action steps".

### Observable Actions Over Intentions

Focus on what can be measured in conversation:

* **Instead of**: "Agent showed empathy".
* **Use**: "Agent used acknowledgement phrases, such as 'I understand' or 'That must be frustrating’.

### Inclusive Criteria Design

Account for natural conversation variations:

* Allow multiple ways to meet the same requirement
* Define acceptable alternatives upfront
* Consider different communication styles while maintaining standards

### Clear Failure Definition

Be explicit about what constitutes non-compliance:

* Define both missing elements and inadequate attempts
* Specify unacceptable alternatives
* Address common failure modes directly

**Note**: Effective prompts balance specificity with flexibility, ensuring consistent evaluation while accommodating the natural variations inherent in human communication.

