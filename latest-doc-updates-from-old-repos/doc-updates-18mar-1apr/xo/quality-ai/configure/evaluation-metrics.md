# Evaluation Metrics

Evaluation Metrics is a key component of the Quality AI module that enables supervisors to define, customize, and monitor performance indicators for measuring the quality of agent-customer interactions. The system supports six measurement types, each designed for specific evaluation needs through advanced AI-driven analysis and traditional rule-based methods.

## Key Benefits

* **AI-Powered Intelligence**: GenAI-based adherence reduces dependency on extensive training datasets.

* **Comprehensive Coverage**: Six measurement types address diverse evaluation scenarios.

* **Multilingual Scalability**: Enhanced support across different languages and interactions.

* **Automated Quality Assurance**: Reduces manual review workload through intelligent analysis.

* **Real-time Validation**: API integration ensures data accuracy and compliance. 

* **Flexible Configuration**: Static and dynamic evaluation options for various use cases.

## Accessing Evaluation Metrics

Navigate to **Quality AI** > **CONFIGURE** > **Evaluation Forms** > **Evaluation Metrics**.    
<img src="../evaluation-criteria/evaluation-metrics/images/common-eva-tab-for-metrics-type.png" alt="Evaluation Metrics" title="Evaluation Metrics" style="border: 1px solid gray; zoom:70%;">

## Evaluation Metrics Dashboard Elements

The Interface displays the following elements:

* **Name**: Shows the name of the evaluation metrics.

* **Metric Type**: Indicates the measurement type.

* **Evaluation Forms**: Lists all associated evaluation forms for configuration and assignment.

* **Ellipsis Icon**: Provides edit and delete options. 

* **Search**: Provides quick search option to view or modify metrics.	

* **New Evaluation Metrics**: Lets you configure new evaluation metrics. 

## Create New Evaluation Metric

Steps to create new evaluation metric:

1. Select the **Evaluation Metrics** tab.    

2. Select **+ New Evaluation Metric**.    

3. Configure your chosen measurement type metrics.    
<img src="../evaluation-criteria/evaluation-metrics/images/metric-pane.png" alt="Configure New Metric" title="Configure New Metric" style="border: 1px solid gray; zoom:60%;
">

## Metrics Configuration Elements

* **Metric Naming**: Descriptive identifiers for future reference.

* **Language Selection**: Multilingual support configuration.

* **Evaluation Questions**: Supervisory reference prompts.

* **Adherence Types**: Static (universal) vs. Dynamic (trigger-based) detection methods comparison.

### Detection Methods Comparison

| Feature    | GenAI-Based     | Deterministic                       |
|----------------------------------|---------------------------------------------------|--------------------------------------------------|
| **Mechanism** | LLM contextual understanding | Description‑based Semantic similarity matching               |
| **Training** | Zero-shot prompts | Sample utterance training              |
| **Flexibility** | High contextual adaptation | Precise pattern recognition               |
| **Setup** | Description-based configuration | Utterance-based training              |

## Metrics Measurement Types

This section summarizes the system's supported measurement types, including core features, typical use cases, and how to edit or delete metrics. 

1. **By Question**: Evaluates adherence to specific questions asked or answered during interactions. 

    **Key Features**:

    * **Static Adherence**: Applies universally across all conversations.

    * **Dynamic Adherence**: Performs conditional evaluation triggered by specific events or criteria.

    * **GenAI Detection**: Uses contextual understanding without requiring training samples.

    * **Deterministic Detection**: Matches utterances semantically with predefined patterns.

    * **Flexible Thresholds**: Enables variable scoring (for example, 60% for greetings, 100% for compliance-critical items).

    **Common Use Cases**: Script adherence, greeting compliance, policy verification, and response quality assessment.    
   
    For full configuration details, see [By Question](../configure/evaluation-criteria/metrics-measurement-types/by-question.md).


1. **By Speech**: Analyzes speech characteristics and audio quality metrics during voice interactions.

    **Key Features**:

    * **Cross Talk**: Detects overlapping speech with configurable thresholds.

    * **Dead Air**: Monitors periods of silence based on set limits (for example, 30-300 seconds).  

    * **Speaking Rate**: Tracks Words Per Minute (WPM) to identify pacing issues.

    **Use Cases**: Voice interaction quality, conversation flow analysis, and speaking pace optimization.    
        
    For full configuration details, see [By Speech](../configure/evaluation-criteria/metrics-measurement-types/by-speech.md).

1. **By Value**: Verifies customer-specific information shared by an agent vs. trusted data sources.

    **Key Features**:

    * **API Integration**: Real-time verification with Customer Relationship Management (CRM) and external systems. 

    * **Business Rules Engine**: Five rule types, including first or last value, negotiated value, and strict matching. 

    * **Compliance Tracking**: Detects deviations from expected values.

    * **Audit Trails**: Logs validation results for supervisory review


    **Use Cases**: Pricing accuracy, interest rate verification, account balance confirmation, compliance validation.
    
    For full configuration details, see [By Value](../configure/evaluation-criteria/metrics-measurement-types/by-value.md).

1. **By Dialog Task**: Assesses completion and quality of specific tasks or workflows within a conversation.

    **Key Features**:

    * **Dialog Agent Selection**: Choose which dialog agent to evaluate.

    * **Evaluation Scope**: Apply evaluation to the entire conversation or a time-bound segment.

    * **Time Parameters**: Configure limits in seconds (voice) or message count (chat).

    **Use Cases**: Workflow adherence, task completion verification, and dialog flow optimization.
    
    For full configuration details, see [By Dialog Task](../configure/evaluation-criteria/metrics-measurement-types/by-dialog-task.md).

1. **By Playbook Adherence**: Measures how well interactions follow predefined playbooks or procedures.

    **Key Features**:

    * **Entire Playbook**: Assess adherence across all playbook components.

    * **Specific Steps**: Target evaluation at specific stages or steps.

    * **Percentage Thresholds**: Define minimum adherence levels required.

    **Use Cases**: Process compliance, procedure adherence, and enforcement of standards.
    
    For full configuration details, see [By Playbook Adherence](../configure/evaluation-criteria/metrics-measurement-types/by-playbook-adherence.md).

1. **By AI Agent**: Enables sophisticated evaluations using AI Agents capable of multistep reasoning and autonomous decision-making.

    **Key Features**:

    * **Complex Analysis**: Multi-step reasoning connecting conversation elements.

    * **Domain Expertise**: Supports specialized evaluation contexts (for example, compliance, technical support).

    * **Contextual Understanding**: Nuanced evaluation requiring full conversation context.

    * **Advanced Decision-Making**: Goes beyond pattern matches for judgment calls.

    **Use Cases**: Complex compliance assessments, technical troubleshooting evaluation, and sophisticated quality analysis.    

    For full configuration details, see [By AI Agent](../configure/evaluation-criteria/metrics-measurement-types/by-ai-agent.md).

1. **By Manual Evaluation**

    Manual Evaluation metrics enable QA teams to assess agent performance through human-led reviews, especially in scenarios where automated detection is less reliable. QA managers configure these metrics in the form with a weight assigned only in points.


    **Key Features**:

    * **Complex Analysis**: Multi-step reasoning connecting conversation elements.

    * **Domain Expertise**: Supports specialized evaluation contexts (for example, compliance, technical support).

    * **Contextual Understanding**: Nuanced evaluation requiring full conversation context.

    * **Advanced Decision-Making**: Goes beyond pattern matches for judgment calls.


    **Use Cases**: Manual Evaluation is ideal for assessing complex soft skills (such as tone, empathy, and negotiation), regulatory scenarios requiring human judgment, dispute handling quality, escalation decisions, and high-risk or edge-case interactions.  

    For full configuration details, see [By Manual Evaluation](../configure/evaluation-criteria/metrics-measurement-types/by-manual-evaluation.md).

### Edit or Delete Evaluation Metrics

1. Search and select the desired metrics. 

1. Select any existing **Evaluation Metrics Type**.   

1. Select the three-dot (⋮) menu next to the metric name.  

1. Select **Edit** to modify the metric configuration.   

1. Adjust percentage-based weights so they total 100 %. 

1. Update the metric configuration as needed.

1. Select **Delete** if you want to remove any metric.

1. Update the required metric weights as prompted if any warning prompt appears.

1. Select **Update** to save changes.    
<img src="../evaluation-criteria/evaluation-metrics/images/edit-metric-fields.png" alt="Crosstalk Warning" title="Crosstalk Warning" style="border: 1px solid gray; zoom:70%;">  
