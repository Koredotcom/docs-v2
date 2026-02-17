# Evaluation Metrics

Evaluation Metrics is a key component of the Quality AI module that enables supervisors to define, customize, and monitor performance indicators for measuring the quality of agent-customer interactions. The system supports six measurement types, each designed for specific evaluation needs through advanced AI-driven analysis and traditional rule-based methods.

## Key Benefits

* **AI-Powered Intelligence**: GenAI-based adherence reduces dependency on extensive training datasets.

* **Comprehensive Coverage**: Six measurement types address diverse evaluation scenarios.

* **Multilingual Scalability**: Enhanced support across different languages and interactions.

* **Automated Quality Assurance**: Reduces manual review workload through intelligent analysis.

* **Real-time Validation**: API integration ensures data accuracy and compliance. 

* **Flexible Configuration**: Static and dynamic evaluation options for various use cases.

## Access Evaluation Metrics

Navigate to **Quality AI** > **CONFIGURE** > **Evaluation Forms** > **Evaluation Metrics**.    
<img src="../evaluation-criteria/evaluation-metrics/images/common-eva-tab-for-metrics-type.png" alt="Evaluation Metrics" title="Evaluation Metrics" style="border: 1px solid gray; zoom:70%;">

## Interface Elements

The Interface displays the following elements:

* **Name**: Shows the evaluation metric name.

* **Metric Type**: Indicates the measurement type.

* **Evaluation Forms**: Lists all associated evaluation forms for configuration and assignment.

* **Ellipsis Icon**: Provides edit and delete options. 

* **Search**: Provides quick search option to view or modify metrics.	

* **New Evaluation Metrics**: Lets you configure new evaluation metrics. 

## Create New Evaluation Metric

Steps to create new evaluation metric:

1. Select the **Evaluation Metrics** tab.    
<img src="../evaluation-criteria/evaluation-metrics/images/eva-metrics-tab-selection.png" alt="Evaluation Metric" title="Evaluation Metric" style="border: 1px solid gray; zoom:70%;">

2. Select the **+ New Evaluation Metric**.    
<img src="../evaluation-criteria/evaluation-metrics/images/new-eva-metrics.png" alt="New Evaluation Metric" title="New Evaluation Metric" style="border: 1px solid gray; zoom:70%;">

3. Configure the metrics for your selected measurement type.    
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

The following measurement types are:

1. **By Question**

    Evaluates adherence to specific questions asked or answered during interactions.

    **Key Features**:

    * **Static Adherence**: Universal application across all conversations.

    * **Dynamic Adherence**: Trigger-based conditional evaluation.

    * **GenAI Detection**: Contextual understanding without training samples.

    * **Deterministic Detection**: Semantic similarity matching with predefined utterances.

    * **Flexible Thresholds**: 60% for greetings, 100% for compliance-critical statements.

    **Use Cases**: 
    
    * **Script adherence**
    
    * **Greeting compliance**
    
    * **Policy verification**
    
    * **Response quality assessment**
    
    For the detailed configuration, see [By Question](../configure/evaluation-criteria/metrics-measurement-types/by-question.md).

1. **By Speech**

    Analyzes speech characteristics and audio quality metrics during voice interactions.

    **Key Features**:

    * **Cross Talk**: Monitors simultaneous speaking instances with customizable thresholds and duration limits.

    * **Dead Air**: Tracks unproductive silence periods with configurable thresholds (30-300 seconds). 

    * **Speaking Rate**: Monitors speech pace trends to flag coaching opportunities, measuring Words Per Minute (WPM).

    **Use Cases**: 
    
    * **Voice interaction quality**

    * **Conversation flow analysis**

    * **Speaking pace optimization**
        
    For the detailed configuration, see [By Speech](../configure/evaluation-criteria/metrics-measurement-types/by-speech.md).

1. **By Value**

    Verifies agent-shared customer-specific information against trusted data sources.

    **Key Features**:

    * **API Integration**: Real-time verification with Customer Relationship Management (CRM) and external systems.

    * **Business Rules Engine**: Five rule types, including first or last value, negotiated value, and strict matching.

    * **Compliance Tracking**: Automated deviation detection for regulatory requirements.

    * **Audit Trails**: Detailed documentation for supervisory review.

    **Use Cases**: 
    
    * **Pricing accuracy**

    * **Interest rate verification**

    * **Account balance confirmation**

    * **compliance validation**

    For the detailed configuration, see [By Value](../configure/evaluation-criteria/metrics-measurement-types/by-value.md).

1. **By Dialog Task**

    Evaluates completion and quality of specific dialog tasks and workflows.

    **Key Features**:

    * **Dialog Agent Selection**: Choose from available dialog agents.

    * **Evaluation Scope**: Entire conversation or time-bound assessment.

    * **Time Parameters**: Configurable seconds (voice) or messages (chat).

    **Use Cases**: 
    
    * **Workflow adherence**

    * **Task completion verification**

    * **Dialog flow optimization**

    For the detailed configuration, see [By Dialog Task](../configure/evaluation-criteria/metrics-measurement-types/by-dialog-task.md).

1. **By Playbook Adherence**

    Assesses compliance with predefined agent playbooks and procedures.

    **Key Features**:

    * **Entire Playbook**: Comprehensive adherence across all playbook elements.

    * **Specific Steps**: Targeted evaluation of particular stages and steps.

    * **Percentage Thresholds**: Configurable minimum adherence requirements.

    **Use Cases**:

    * **Process compliance**

    * **Procedure adherence**

    * **Standardization enforcement**
    
    For the detailed configuration, see [By Playbook Adherence](../configure/evaluation-criteria/metrics-measurement-types/by-playbook-adherence.md).

1. **By AI Agent**

    Enables sophisticated evaluations using AI Agents capable of multistep reasoning and autonomous decision-making.

    **Key Features**:

    * **Complex Analysis**: Multi-step reasoning connecting conversation elements.

    * **Domain Expertise**: Specialized knowledge requirements (compliance, technical support).

    * **Contextual Understanding**: Nuanced evaluation requiring full conversation context.

    * **Advanced Decision-Making**: Sophisticated judgment calls beyond pattern matching.

    **Use Cases**: 
    
    * **Complex compliance assessments**
    
    * **Technical troubleshooting evaluation**
    
    * **Sophisticated quality analysis**

    For the detailed configuration, see [By AI Agent](../configure/evaluation-criteria/metrics-measurement-types/by-ai-agent.md).

## Manage Evaluation Metrics

The process of managing evaluation metrics includes the following sections:

**Metric Lifecycle Management**

* **Create**: Step-by-step configuration wizard

* **Edit**: Real-time updates with validation

* **Delete**: Dependency resolution and cleanup

* **Language Management**: Multilingual configuration and updates

**Dependency Management**

* **Form Associations**: Evaluation form linkage requirements

* **Attribute Assignments**: Metric-to-attribute mapping

* **Language Dependencies**: Active language protection

* **Deletion Prerequisites**: Dependency resolution before removal

### Edit or Delete Evaluation Metrics Type

Steps to edit or delete existing evaluation metrics types:

1. Select any existing **Evaluation Metrics Type**.    
<img src="../evaluation-criteria/evaluation-metrics/images/edit-metric.png" alt="Edit Metric" title="Edit Metric" style="border: 1px solid gray; zoom:70%;">

2. Select **Edit** to update measurement type fields or **Delete** to remove.   
<img src="../evaluation-criteria/evaluation-metrics/images/edit-metric-fields.png" alt="Edit Metric Fields" title="Edit Metric Fields" style="border: 1px solid gray; zoom:70%;">

3. Select **Update** to save changes.