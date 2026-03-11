
# Generative AI Features - Quality AI



Utilize generative AI features to supercharge your AI Agent with powerful tools that enhance productivity, enable natural conversations, improve intent detection, analyze customer sentiment, and support agent performance, all working together to create seamless end-user experiences through intuitive design.

### Model Feature Matrix

The following table displays the features and the supported models.

(✅ Supported | ❌ Not supported)



| Feature | Azure OpenAI Model(s) | OpenAI Model(s) | Custom LLM |
|:--|:--|:--|:--:|
| Advanced Topic Discovery based on Custom Taxonomy and Resolution Detection|GPT-4o | GPT-4o | ✅|
| Agent Empathy Identification | GPT-4o | GPT-4o | ✅ |
| By Value Adherence validation for Quality AI | GPT-4o and GPT-4o mini | GPT-4o and GPT-4o mini | ✅ |
| By Value metric extraction for Quality AI | GPT-4o and GPT-4o mini | GPT-4o and GPT-4o mini | ✅ |
| By Hold Adherence| GPT-4o and GPT-4o mini | GPT-4o and GPT-4o mini | ✅ |
| By Transfer Adherence| GPT-4o and GPT-4o mini | GPT-4o and GPT-4o mini | ✅ |
| Churn & Escalation Identification | GPT-4o | GPT-4o | ✅ |
| Conversation Phase Identification | GPT-4o | GPT-4o | ✅ |
| Crutch Word Usage Detection | GPT-4o | GPT-4o | ✅ |
| Default Script Adherence | GPT-4o | GPT-4o | ✅ |
| GenAI-based agent answer adherence and customer trigger detection | GPT-4o and GPT-4o mini | GPT-4o and GPT-4o mini | ✅ |
| Generating Similar QM Utterance Suggestions | GPT-3.5 Turbo | GPT-3.5 | ❌ |
|Post Conversation Sentiment Analysis|GPT-4o | GPT-4o | ✅ |
| Sentiment Analysis | GPT-4o | GPT-4o | ✅ |
| Topic Modelling | GPT-4o | GPT-4o | ✅ |


### Advanced Topic Discovery based on Custom Taxonomy and Resolution Detection

Extract topics and intents from agent conversations detect resolution of agent conversations to discover levers based on customer sentiment, Handle Time and Resolution and quickly surface trends and anomalies based on these outcomes. [Learn more](../quality-ai/analyze/topic-discovery.md).


### Agent Empathy Identification

Identify instances of agent empathy where customers have expressed negative sentiment through Quality AI using LLMs. [Learn more](../quality-ai/analyze/conversation-intelligence.md#insights-mining).




### By Value Adherence validation for Quality AI

Validates data adherence by comparing extracted metric values against reference data using multilingual LLM analysis. Performs precise value matching and returns binary adherence scores for each metric. [Learn more](../quality-ai/configure/evaluation-criteria/metrics-measurement-types/by-value.md).


### By Value metric extraction for Quality AI

Extract by value metric from user/AI Agent/human agent messages through Quality AI using LLMs. [Learn more](../quality-ai/configure/evaluation-criteria/metrics-measurement-types/by-value.md).


### By Hold Adherence

This feature detects when an agent places a user on hold and resumes the conversation.
[Learn more](../quality-ai/configure/evaluation-criteria/metrics-measurement-types/by-hold.md).

### By Transfer Adherence

This feature identifies whether the agent informs the customer about the transfer.
[Learn more](../quality-ai/configure/evaluation-criteria/metrics-measurement-types/by-transfer.md).


### Churn & Escalation Identification

Utilize LLMs to identify agent crutch word usage in customer conversations using Quality AI. [Learn more](../quality-ai/analyze/conversation-intelligence.md#customer-churn-monitor).

### Conversation Phase Identification


Post conversation phase identification for phase level sentiment trajectory and resolution aware sentiment analysis.



### Crutch Word Usage Detection

Use LLMs to detect agent crutch word usage in customer conversations through Quality AI. [Learn more](../quality-ai/analyze/conversation-intelligence.md#crutch-word-score).


### Default Script Adherence

Determine agent adherence to default script steps across greeting, branding, privacy policy, customer verification, hold etiquette, and call closing through Quality AI's conversation Intelligence dashboard using LLMs. [Learn more](../quality-ai/analyze/conversation-intelligence.md#script-and-playbook-adherence).





### GenAI-based agent answer adherence and customer trigger detection

Utilize LLMs to verify agent adherence and detect customer triggers without requiring configuration of utterances or training. [Learn more](../quality-ai/configure/evaluation-criteria/metrics-measurement-types/by-question.md).


### Generating Similar QM Utterance Suggestions

Utilize LLM to generate similar phrases during the design phase, focusing on semantic similarity. [Learn more](../quality-ai/configure/evaluation-metrics.md).


### Post Conversation Sentiment Analysis

Generate post-interaction sentiment and emotion moment insights for agent conversations from Quality AI using LLMs. [Learn more](../quality-ai/ai-assisted-manual-audit.md#by-ai-agent).


### Sentiment Analysis

Agents monitor customer sentiment dynamically during active chat conversations. When enabled, this feature displays a sentiment indicator that updates in real-time based on ongoing analysis of the conversation. [Learn more](../quality-ai/ai-assisted-manual-audit.md).



### Topic Modelling

Extract popular Topics and Intents that customers discuss across agent conversations through Quality AI using LLMs. [Learn more](../quality-ai/analyze/conversation-mining-interactions.md#configured-intents).
