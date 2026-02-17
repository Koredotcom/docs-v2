# By Speech Metric

Speech evaluation metrics assess agent performance during voice interactions in the contact center using intelligent speech analytics. These metrics evaluate conversational behaviors such as crosstalk (overlapping speech), dead air (silence), and speaking rate to support effective coaching, making sure about consistent quality evaluations, and maintaining compliance adherence. Evaluators use each speech metric for assessment purposes and assign it to a single agent attribute.

## Why to Use This Metric

Use speech evaluation metrics to:

* Monitor and evaluate agent behavior based on voice characteristics.
* Detect issues such as dead air, cross talk (overlapping speech), or inappropriate speaking rates (periods of silence).
* Enable automated and unbiased quality scoring.
* Identify coaching and training opportunities.
* Improve customer experience and operational efficiency.
* Analyze speaking patterns and interaction trends.

## When to Use This Metric

Use speech evaluation metrics when:

* Setting up automated quality scoring for voice interactions.

* Defining agent performance baselines.

* Identifying areas for coaching and improvement.

* Measuring compliance with communication standards.

## Prerequisites

Before you configure speech metrics, make sure that:

* You have admin or configuration permissions.
* You create agent attribute definitions.
* You have evaluation forms available or in a draft state.
* You have speech data available for Quality AI analysis.

## Configure by Speech Metric

1. Navigate to **Quality AI** > **Configure** > **Evaluation Forms** > **Evaluation Metrics**.

2. Select **+ New Evaluation Metric**.

3. From the **Evaluation Metrics Measurement Type**, select **By Playbook Adherence**.  
<img src="../images/by-speech-dropdown.png" alt="default scorecard" title="default scorecard" style="border: 1px solid gray; zoom:100%;">  

4. Enter a descriptive **Name** for the future audit and reporting purposes.   

* Select and configure one of the following **Speech Type** options.  
<img src="../images/by-speech-crosstalk.png" alt="Crosstalk" title="Crosstalk" style="border: 1px solid gray; zoom:60%;"> 

    * **Cross Talk**: Set the maximum number of instances. If the count exceeds this limit (the configured count), the metric fails. By default, the crosstalk duration is two seconds, but you can customize both the instance limit and duration.

    * **Cross Talk Duration (Metric Qualification)**: This metric is included in the evaluation if the number of cross talk instances stays below the set limit. The system counts an occurrence as crosstalk if it meets or exceeds the configured duration. If the number of instances goes over the limit, the metric fails, and the agent is penalized.

    * **Dead Air**: This defines the period of silence during a contact center interaction when neither the customer nor the agent is speaking. By default, the minimum dead air time is 30 seconds, and the maximum is 300 seconds. It allows you to customize the instance limit and dead air duration.

    * **Dead Air Time (Metric Qualification)**

    The metric qualifies if the number of dead air instances is below the acceptable limit set in the configuration. If the number of instances exceeds the limit, the system marks the interaction as a failure for the dead air metric. An instance is counted as dead air if it exceeds the specified dead air duration.       
    <img src="../images/by-speech-dead-air.png" alt="Dead air" title="Dead air" style="border: 1px solid gray; zoom:60%;"> 

    * **No. of Instances**: Enter the minimum allowed Cross Talk instances per second. 

    * **Speaking Rate Violation**: This displays the average daily conversation sessions and comparison analysis for the selected period. A violation is flagged when the agent's speaking pace is outside the configured acceptable range. 

        * **Words Per Minute (WPM)**: Select the expected speaking rate. If the agent doesn't adhere to the configured rate, the system marks the metric as failed.  
        <img src="../images/by-speech-speaking-rate-violation.png" alt="Speaking Rate" title="Speaking Rate" style="border: 1px solid gray; zoom:60%;"> 

5. Click **Create** to save the new metric for the Speech.

## Edit or Delete By Speech Metric

Steps to edit or delete any existing **By Speech** evaluation metrics:

1. Right-click on a desired evaluation metric name under the **By Speech** category.  
<img src="../images/by-speech-edit.png" alt="Edit Metric" title="Edit Metric"   style="border: 1px solid gray; zoom:70%;">    

2. Choose an option:

    * Click **Edit** to modify the selected metric details.    
    <img src="../images/by-speech-edit-screen.png" alt="By Speech edit Screen" title="By Speech edit Screen" style="border: 1px solid gray; zoom:60%;">

    * Click **Delete** to remove the selected metric.   

3. Click **Update** to save the changes.

### Language Dependency Warnings

This section outlines the limitations and dependencies associated with modifying language settings in evaluation metrics. 

#### Deletion Warnings

This section describes the warnings and prerequisites you must address before deleting a metric.	

* If the metric is used in any evaluation form, the system displays a warning message.

* Remove the metric from all associated evaluation forms before you delete it.

* If any attributes are linked to the metric, assign a different metric to those attributes before proceeding with deletion.

* The system allows you to delete the metric only after resolving all dependencies.   
<img src="../images/delete-speech-metric.png" alt="Delete Warnings" title="Delete Warnings" style="border: 1px solid gray; zoom:70%;">
