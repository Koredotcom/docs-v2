# Create Custom Dashboard

Let’s create a dashboard using various metrics to analyze the performance of an AI Agent and identify trends for business needs using a Banking AI Agents as an example.


## Problem Statement

As a Banking AI Agent client, you want to track the following metrics:

* Dollar Value Breakup
* Customer Type Summary
* Task Fulfillment Trend
* Top Failure Tasks
* Channel Volume Trend
* Filter the Messages using the Having clause

You can create a custom dashboard to achieve all the scenarios listed above, with detailed step-by-step instructions described in the following sections.

Once the Dashboard is configured for the listed scenarios, it looks like the following:

<img src="./../images/configured-custom-dashboard.png" alt="Configured Custom Dashboard" title="Configured Custom Dashboard" style="border: 1px solid gray; zoom:80%;">


## Pre-requisites


* AI Agents building knowledge.
* Custom Meta Tags usage. See here for more information.
* A Banking AI Agents with the dialogs as follows:

**Transfer Funds**: The Dialog task walks the user through the transfer steps.

<img src="./../images/transfer-funds.png" alt="Transfer Funds" title="Transfer Funds" style="border: 1px solid gray; zoom:80%;">


In this dialog, we have included a Script node to add Custom Meta Tag, TransferValue, based upon the amount transferred. The following script is used:

```

`if(context.entities.TransferAmount[0].amount > 50000){`

   tags.addSessionLevelTag("TransferValue", "HighValue");
}

if(context.entities.TransferAmount[0].amount > 10000)
tags.addSessionLevelTag("TransferValue","MediumValue");

if(context.entities.TransferAmount[0].amount > 0)

`tags.addSessionLevelTag("TransferValue","LowValue");
`

```

<img src="./../images/transfer-funds-add-scripts.png" alt="Transfer Funds Add Scripts" title="Transfer Funds Add Scripts" style="border: 1px solid gray; zoom:80%;">


**Manage Payee**:For the user to manage their payee list.

<img src="./../images/manage-payee.png" alt="Manage Payee" title="Manage Payee" style="border: 1px solid gray; zoom:80%;">


Here we have a Script that assigns a value to the customerType meta tags: 

`if(context.custType == 3){`


```
   tags.addUserLevelTag("CustomerType","Premium");
}
if(context.custType == 2){
   tags.addUserLevelTag("CustomerType","Gold");
};
if(context.custType == 1){
   tags.addUserLevelTag("CustomerType","Regular");

```

`};`


## Implementation

Let’s consider how each metric mentioned in the problem statement can be implemented using widgets from the Custom Dashboard.

1. From the left navigation panel, under **Dashboard** click **Custom Dashboard.**
2. **Create a New Dashboard**.
<img src="./../images/create-new-dashboard.png" alt="Create New Dashboard" title="Create New Dashboard" style="border: 1px solid gray; zoom:80%;">

3. Use the **Add Widget** button to add widgets for the above scenarios. You can add up to 4 widgets per row and organize them by moving anywhere within the row or across the rows on the dashboard. You can also manually resize the widgets.

The details for each widget are explained in the following sections.


### Dollar Value Breakup

1. **Add Widget**
2. Query setup:
    * **Dataset**: _Analytics_
    * **Select**: _sessionTag.TransferValue as TransferValue, count(taskName)
_This will let the platform know what data to fetch. Here we are using the session tag values added to the Transfer Amount task against the total number of tasks executed.
    * **Group By**: _sessionTag.TransferValue_
    * **Run** to see the results from the above query.
3. Widget Setup
    * Select **Pie chart**
    * Set **Dimension** to TransferValue
    * Set **Metrics** to count(taskName)  
    <img src="./../images/dollar-value-breakup1.png" alt="Dollar Value Breakup1" title="Dollar Value Breakup1" style="border: 1px solid gray; zoom:80%;">

4. See the **Preview** and if all is fine, click **Update to Dashboard**.  
<img src="./../images/dollar-value-breakup2.png" alt="Dollar Value Breakup2" title="Dollar Value Breakup2" style="border: 1px solid gray; zoom:80%;">


### Customer Type Summary

This query provides usage statistics based on the customer type.

Repeat the steps listed in the previous section (Dollar Value Breakup) with the following details:

1. **Add Widget**
2. Query setup:
    * **Dataset**: _Analytics_
    * **Select**: _userTag.CustomerType as CustomerCategory, count(taskName)_
    * **Group By**: _userTag.CustomerType_
    * **Run** to see the results from the above query.
3. Widget Setup

    * Select **Bar chart**
    * Set **Dimension** to _CustomerCategory_
    * Set **Metrics** to _count(taskName)_  
    <img src="./../images/customer-type-summary.png" alt="Customer Type Summary" title="Customer Type Summary" style="border: 1px solid gray; zoom:80%;">


4. See the **Preview** and then click **Update to Dashboard**

### Task Fulfillment Trend

This query provides day-wise task success vs. failure trends. Repeat the steps listed in the previous section with the following details:

1. **Add Widget**
2. Query setup:
    * **Dataset**: _Analytics_
    * **Select**: _date,metricType, count(metricType) as TotalTasks_
    * **Filter By**: _metricType = ‘successtasks’ or metricType = ‘failedtasks’ \
_We want to see only Success or Failed Tasks
    * **Group By**: _date,metricType_
    * **Run** to see the results from the above query.
3. Widget Setup

    * Select **Bar chart**
    * Set **Dimension** to _date_
    * Set **Metrics** to _TotalTasks_
    * Set **Overlay** to _metricType_  
    <img src="./../images/task-fulfillment-trend.png" alt="Task Fulfillment Trend" title="Task Fulfillment Trend" style="border: 1px solid gray; zoom:80%;">


4. See the **Preview** and then click **Update to Dashboard.**


### Top Failure Tasks

This query provides the top tasks that are failing. Repeat the steps listed in the previous section with the following details:


1. **Add Widget**
2. Query setup:
    * **Dataset**: _Analytics_
    * **Select**: _taskName as TaskName,count(taskName) as Failures_
    3. **Filter By**: _metricType = ‘failedtasks’ \
_We want to see only Failed Tasks
    * **Group By**: _taskName_
    * **Run** to see the results from the above query.
3. Widget Setup

    * Select **Table chart**
    * Set **Dimension** to _TaskName_ and _Failures_  
    <img src="./../images/top-failure-tasks.png" alt="Top Failure Tasks" title="Top Failure Tasks" style="border: 1px solid gray; zoom:80%;">


4. See the **Preview** and then click **Update to Dashboard**


### Channel Volume Trend

This query provides channel-wise usage details. Repeat the steps listed in the previous section with the following details:

1. **Add Widget**
2. Query setup:
    * **Dataset**: _Messages_
    * **Select**: _date,channel,count(messageId)_
    * **Group By**: _date, channel_
    * **Run** to see the results from the above query.
3. Widget Setup

    * Select **Line chart**
    * Set **Dimension** to _date_
    * Set **Metrics** to _count(messageId)_
    * Set **Overlay** to _channel_
    <img src="./../images/channel-volume-trend.png" alt="Channel Volume Trend" title="Channel Volume Trend" style="border: 1px solid gray; zoom:80%;">

4. See the **Preview** and then click **Update to Dashboard**

Your Custom Dashboard is ready. Set the **Date Range** to see the required metrics for the scenarios.


### Filter the Messages using the Having Clause

This query uses a **Having** clause, to display the number of filtered messages for _userIds_, where the user has interacted with the AI Agents more than 12 times. The query setup and results are described below. Repeat the steps listed in the previous section with the following details:

1. **Add Widget**
2. Query setup:
    * **Dataset**: _Messages_
    * **Select**: _count(messageId),userId_
    * **Group By**: _userId_
    * **Having**: _count(messageId) > 12_
    * **Run** to see the results from the above query.
3. Widget Setup

    * Select **Table chart**
    * Set **Dimension** to _count(messageId),userId_  



4. The following results when you just retrieve the count of all messages, grouping by the userId.  
<img src="./../images/filter-the-message-using-having-clause1.png" alt="Filter the Message Using Having Clause 1" title="Filter the Message Using Having Clause 1" style="border: 1px solid gray; zoom:80%;">   


5. The following results when you retrieve the count of messages, grouping by the userId, using the Having clause.  
<img src="./../images/filter-the-message-using-having-clause2.png" alt="Filter the Message Using Having Clause 2" title="Filter the Message Using Having Clause 2" style="border: 1px solid gray; zoom:80%;">   


6. See the **Preview** and then click **Add to Dashboard**.  
<img src="./../images/filter-the-message-using-having-clause3.png" alt="Filter the Message Using Having Clause 3" title="Filter the Message Using Having Clause 3" style="border: 1px solid gray; zoom:80%;">   


7. The Having clause widget is added to the dashboard as shown in the following screenshot.  
<img src="./../images/filter-the-message-using-having-clause4.png" alt="Filter the Message Using Having Clause 4" title="Filter the Message Using Having Clause 4" style="border: 1px solid gray; zoom:80%;">

