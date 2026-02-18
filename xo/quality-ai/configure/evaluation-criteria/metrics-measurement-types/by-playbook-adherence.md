# By Playbook Adherence Metric

The By Playbook Adherence metric uses automated quality assurance tools to measure and monitor how well contact center agents follow established procedures and workflows. These metrics provide real-time insights into process compliance, helping organizations maintain consistent service quality, ensure regulatory compliance, and identify opportunities for performance improvement. Each metric is used for evaluation purposes and is assigned to a single agent attribute.

## Key Capabilities

* **Automated Adherence Tracking**: Monitor compliance with entire playbooks or specific steps.

* **Configurable Thresholds**: Set custom adherence percentage requirements based on process criticality.

* **Flexible Evaluation Periods**: Configure time bounds for daily, weekly, or monthly assessments.

* **Granular Analysis**: Evaluate adherence at the playbook, stage, or individual step level.

* **Performance Insights**: Generate actionable data for coaching, training, and process optimization.

## Where to Use Playbook Adherence Metric

* **Agent Performance Evaluation**: Assess individual agent compliance with established procedures.

* **Team Performance Analysis**: Compare adherence rates across different teams or departments.

* **Process Compliance Auditing**: Ensure critical steps in customer service processes are being followed.

* **Training Gap Identification**: Spot specific playbook steps that agents consistently struggle with.

* **Quality Score Calculation**: Incorporate playbook adherence into overall quality assessments.

* **Coaching Opportunities**: Identify specific areas where agents need additional support or training.

* **Operational Reporting**: Generate reports for management on process compliance and operational efficiency.

## Configure By Playbook Adherence Metric

1. Navigate to **Quality AI** > **Configure** > **Evaluation Forms** > **Evaluation Metrics**.

2. Click **+ New Evaluation Metric**.

3. From the **Evaluation Metrics Measurement Type** dropdown, select **By Playbook Adherence**.
<img src="../images/by-playbook-dropdown.png" alt="By Playbook Adherence" title="By Playbook Adherence" style="border: 1px solid gray; zoom:100%;">  

4. Enter a descriptive **Name** for the future audit reference.

5. Select a **Playbook Name** from the dropdown list, from which the metric should evaluate adherence.  
<img src="../images/by-playbook-fields.png" alt="Playbook Metrics Fields" title="Playbook Metrics Fields" style="border: 1px solid gray; zoom:80%;"/> 

6. Select an **Adherence Type** (**Entire Playbook** or **Steps**) from the dropdown. 

7. Select **Entire Playbook** to evaluate adherence across the entire playbook. 

    * **Adherence Percentage**: Enter the minimum expected adherence percentage to the playbook. If adherence falls below the configured rate, this metric fails.  
            
8. Select **Steps** to evaluate adherence to specific steps of the playbook. If you select Steps, then define the following two options.

    * **Stage**: Select the stage under which the desired step for evaluation is configured.

    * **Step**: Select the desired step for adherence evaluation.        
    <img src="../images/by-playbook-adherence-type.png" alt="Steps" title="Steps" style="border: 1px solid gray; zoom:80%;"/> 

 9. Click **Create** to save the new metric for the playbook adherence.

## Edit or Delete By Playbook Metric

Steps to edit or delete any existing **By Playbook** evaluation metrics:

1. Right-click on a desired evaluation metric name **By Playbook Adherence** metrics category.   
<img src="../images/playbook-modification.png" alt="Edit Metric" title="Edit Metric" style="border: 1px solid gray; zoom:80%;"/> 

2. Choose an option:

    * Click **Edit** to modify the selected metric details.    
    <img src="../images/by-playbook-edit-metrics.png" alt="Edit Playbook" title="Edit Playbook" style="border: 1px solid gray; zoom:70%;"> 

    * Click **Delete** to remove the selected metric.

4. Click **Update** to save the changes.

#### Deletion Warnings

Deleting this metric permanently removes this evaluation metric and its associated data within it. Once it is deleted, you cannot undo or recover the metric or data.

Before delete, do the following: 

1. Make sure, this evaluation metric is not actively used in any of the forms workflows. If the metric is used in any evaluation form, the system displays a warning message.

1. Remove the metric from all associated evaluation forms before you delete it.

1. The system allows you to delete the metric only after resolving all dependencies.  

1. Verify the metric is deleted and related data are removed.    
<img src="../images/playbook-metrics-delete.png" alt="Delete Warnings" title="Delete Warnings" style="border: 1px solid gray; zoom:70%;">
