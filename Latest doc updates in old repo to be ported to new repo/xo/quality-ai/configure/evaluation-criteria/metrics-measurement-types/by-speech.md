# By Speech Evaluation Metrics

Speech evaluation metrics assess agent performance in the Contact Center during voice interactions using intelligent speech analytics. These metrics evaluate conversational behaviors such as Crosstalk, Dead Air, and Speaking Rate Violation to support effective coaching, consistent quality evaluations, and compliance adherence.

## Why to Use This Metric

Use speech evaluation metrics when:

* Monitor and evaluate agent behavior based on voice characteristics.

* Detect issues such as Crosstalk (overlapping speech), Dead Air, or any inappropriate Speaking Rate Violation (periods of silence).

* Enable automated and unbiased quality scoring across voice interactions.

* Identify coaching and training opportunities for agents.

* Improve overall customer experience and operational efficiency.

* Analyze speaking patterns and interaction trends.

## Prerequisites

* Have admin or configuration permissions

* Create agent attribute definitions

* Evaluation forms available or in a draft state

* Speech data available for Quality AI analysis

## Configure by Speech Metric

1. Navigate to **Quality AI** > **Configure** > **Evaluation Forms** > **Evaluation Metrics**.

2. Select **+ New Evaluation Metric**.

3. From the **Evaluation Metrics Measurement Type**, select **By Playbook Adherence**.  
<img src="../images/by-speech-dropdown.png" alt="default scorecard" title="default scorecard" style="border: 1px solid gray; zoom:100%;">  

    !!! Note

        Assign each metric to a single agent attribute for evaluation.

4. Enter a descriptive **Name** for the future audit and reporting purposes.   

* Select and configure one of the following **Speech Type** options.  

    * **Crosstalk**: Tracks simultaneous agent–customer speech. Configure overlap duration, maximum instances, and instance control (agent-only or both). The metric qualifies when instances stay within the set limit; exceeding the limit fails the metric.      
    <img src="../images/by-speech-crosstalk.png" alt="Crosstalk" title="Crosstalk" style="border: 1px solid gray; zoom:100%;"> 

    * **Dead Air**: Tracks silence periods. Set minimum and maximum duration and allowed instances. The metric fails if silence exceeds the configured limits.              
    <img src="../images/by-speech-dead-air.png" alt="Dead air" title="Dead air" style="border: 1px solid gray; zoom:50%;"> 

    * **No. of Instances**: Monitors the agent's speaking rate using Word Per Minute (WPM). The metric fails if the rate falls outside the defined range.         
    <img src="../images/by-speech-speaking-rate-violation.png" alt="Speaking Rate" title="Speaking Rate" style="border: 1px solid gray; zoom:50%;"> 

5. Select **Create** to save the Speech metric.

## Edit or Delete By Speech Metric

1. Select a metric under the **By Speech** category. 
 
1. Select **Edit**.

1. Update the metric configuration as needed.    

1. Select **Delete** to remove the selected evaluation metric.   

1. Select **Update** to save the changes.

### Speech Metric Addition Limitation

During evaluation form configuration, you can add only one speech metric per subtype (Crosstalk, Dead Air, or Speaking Rate) to a form. If you try to add another metric of the same subtype, the system displays an error pop-up under the Evaluation Metrics checkbox.

!!! Note

    Only you can add one metric of each type at a time. To add another metric of the same subtype, you must first remove the existing one.

### Speech Metric Errors

The system displays an error message if you add a duplicate **Crosstalk**, **Dead Air**, or **Speaking Rate Violation** metric.
