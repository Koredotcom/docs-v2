# By Manual Evaluation

Manual Evaluation metrics enable QA teams to assess agent performance through human review when automated detection is unreliable. QA managers configure these metrics in the form and assign weights in points, allowing auditors to manually evaluate criteria instead of using AutoQA, particularly for complex scenarios where automation may lack accuracy.

## What It Offers

* Provides controlled, auditor-only assessment within Points-Based evaluation forms.
* QA auditors evaluate the metric manually.
* The metric contributes to overall form scoring within Points-Based forms without affecting Percentage-Based structures.	
* Prevents misleading automated outcomes.
* The system excludes metrics, such as LLM-based evaluation, Deterministic AutoQA, Agent AutoQA analytics, and Agent Attributes or Agent Scorecards.

## When to Use This Metric

* **Nuanced Communication Assessment**: Emotional intelligence, Tone appropriateness, Context-sensitive empathy.

* **Regulatory or Compliance Interpretation**: Policy adherence requiring contextual interpretation, Industry-specific compliance checks, and legal disclaimers.

* **Low AI Confidence Areas**: Complex escalation handling, Multi-layered issue resolution, Situations where LLM accuracy remains inconsistent.

* **Enterprise Control Requirements**: When customers require strict separation between automated and manual scoring, or when organizations need to isolate certain metrics from AI analytics.

## Configure By Manual Evaluation Metrics

1. Navigate to **Quality AI > CONFIGURE > Evaluation Forms > By Manual Evaluation Metrics**.

1. Select **+ New Evaluation Metrics**.

1. From the **Evaluation Metrics Measurement Type** dropdown, select **By Manual Evaluation**.    
<img src="../images/by-manual-evaluation.png" alt="Evaluation Forms Tab" title="Evaluation Forms Tab" style="border: 1px solid gray; zoom:80%;">

    !!! Note

        You can add manual evaluation metrics only to Points-Based evaluation forms, not to **Percentage-Based** evaluation forms. For **Percentage-Based** evaluation forms, this metric type is disabled.

1. Enter a metric **Name **to identify the metric used for manual scoring. 

1. Specify the evaluation **Question **that auditors review manually when they evaluate the interaction.   
<img src="../images/by-manual-evaluation-metric-details.png" alt="Evaluation Forms Tab" title="Evaluation Forms Tab" style="border: 1px solid gray; zoom:80%;">

1. Select **Create** to save and activate the Dynamic By Question configured adherence metric.

    !!! Note

        The system assigns metric weightage only in points, as Manual Evaluation metrics support only points-based scoring. Percentage-based scoring requires the total weight of all metrics to equal 100%, which QA Managers can’t maintain when an evaluation form includes both automated and manual metrics.

Refer to the [Evaluation Forms](../../evaluation-forms.md) for details on the manual scoring process.

## Managing Evaluation Metrics

### Edit or Delete Evaluation Metrics

Steps to edit or delete existing Evaluation Metrics:

1. Select any of the existing **By Manual Evaluation Metrics**.         

1. Select **Edit** to update the required metric fields.

1. Select **Delete** to remove the selected metric.

1. Select **Update** to save changes.

To view manually evaluated interactions and manual evaluation metrics, see [Conversation Mining-Interactions](../../../analyze/conversation-mining-interactions.md) and [AI-Assisted Manual Audit](../../../ai-assisted-manual-audit.md).

