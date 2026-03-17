# Wallboards

## Overview

The wallboard is a powerful tool for monitoring and analyzing data. It provides a comprehensive view of center operations and performance metrics across all queues as trends develop throughout the day.

## Create a Wallboard

Steps to create a wallboard:

1. Go to **Contact Center AI** > **CONFIGURATIONS** > **Wallboards**.  
    <img src="../images/ccai-wallboards-page.png" alt="Wallboards Page" title="Wallboards Page" style="border: 1px solid gray; zoom:80%;">

2. Select **+Add New Wallboard**. The Add New Wallboard dialog box displays.  
    <img src="../images/ccai-add-new-wallboard.png" alt="Add New Wallboard" title="Add New Wallboard" style="border: 1px solid gray; zoom:80%;">

3. Enter the following details to create the wallboard:
    1. **Name**: Enter the name of the wallboard.
    2. **Wallboard Description** (optional): Enter the description of the wallboard.
    3. **Wallboard Type**: Center Wide (default), Queue Specific.  
        <img src="../images/wallboard-type.png" alt="Wallboard Type" title="Wallboard Type" style="border: 1px solid gray; zoom:80%;">

### Center Wide

1. **Display to**: Select the queues to which the data displays.
2. **Queues**: Select the queues for which the data displays. If you don't select any queues, all queues display by default.
3. **Channels**: Select the channels for which the data displays. If you don't select any channels, the system selects all channels by default.
4. **Time Period**: Select the duration to display data from the dropdown options.
5. **Enable Scroll Text** (Optional): Turn on the Enable Scroll Text toggle to add text that scrolls horizontally at the bottom of the wallboard page. Enter the text in the Message dialog box and select the Scroll Speed. 
6. Select **Create**. A confirmation message displays, and creates the wallboard.  
    <img src="../images/add-wallboard.png" alt="Create Center Wide Wallboard" title="Create Center Wide Wallboard" style="border: 1px solid gray; zoom:80%;">

### Queue Specific

1. **Display Top 3 Performers**: Select an option and choose the top three insights from the available categories.

    | **Multiple Insights**                                                                 | **One Insight**                                                                     |
    |----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
    | Select the top 3 different metrics of agents displayed                                | Select the top 3 specific metrics of agents displayed                                |
    | **Insights** (applies to both columns)                                                |                                                                                      |
    | **Top Closed** <br> Agents with the highest number of closed conversations              | **Top Closed**                                                                       |
    | **Top Answered** <br> Agents with the highest number of answered conversations          | **Top Answered**                                                                     |
    | **Top CSAT** <br> Agents with the highest customer satisfaction rating                  | **Top CSAT**                                                                         |
    | **Top Occupancy Rate** <br> Agents with a higher occupancy rate                         | **Top Occupancy Rate**                                                               |
    | **Top Average First Response Time** <br> Agents with the best first response time       | **Top Average First Response Time**                                                  |

2. **Display to**: Select the queues to which the data displays.
3. **Queues**: Select the queues for which the data displays. If you don't select any queues, all queues appear by default.
4. **Channels**: Select the channels for which the data displays. If you don't select any channels, the system selects all channels by default.
5. **Time Period**: Select the duration to display data from the dropdown options.
6. **Enable Scroll Text** (Optional): Turn on the Enable Scroll Text toggle to add text that scrolls horizontally at the bottom of the wallboard page. Enter the text in the Message dialog box and select the Scroll Speed. 
7. Select **Create**. A confirmation message displays, and creates the wallboard.  
    <img src="../images/create-queue-specific-wallboard.png" alt="Create Queue Specific Wallboard" title="Create Queue Specific Wallboard" style="border: 1px solid gray; zoom:80%;">

### Center Wide Abandoned

Shows aggregated data across all queues. This is a built in wallboard and not customizable.  
<img src="../images/centerwide-abandoned.png" alt="Create Center wide Abandoned Wallboard" title="Create Center Wide Abandoned Wallboard" style="border: 1px solid gray; zoom:80%;">

| Setting             | Description                                                                                                                   |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| Display to          | Defines the queues that can view the wallboard.                                                                               |
| Queues              | Specifies the queues to include in the data. Defaults to all queues if none are selected.                                     |
| Choose Metrics From | Specifies the queues from which metrics are collected.                                                                        |
| Channels            | Specifies the channels to include. Defaults to all channels if none are selected.                                             |
| Time Period         | Defines the reporting window: Last 15 min, 30 min, 1 hr, 2 hr, 8 hr, 12 hr, or Today.                                         |
| Enable Scroll Text  | Optional. Displays horizontally scrolling text at the bottom. Configure the message and scroll speed (Slow, Medium, or Fast). |

## Edit a Wallboard

Steps to edit a wallboard:

1. Select **Edit**.  
    <img src="../images/ccai-edit-button.png" alt="Edit" title="Edit" style="border: 1px solid gray; zoom:80%;">

2. Make the required changes and select **Update**.  
<img src="../images/edit-wallboard.png" alt="Edit Wallboard" title="Edit Wallboard" style="border: 1px solid gray; zoom:80%;">

## Delete a Wallboard

Steps to delete a wallboard:

1. Select the **Delete** (bin) icon.  
    <img src="../images/ccai-delete-button.png" alt="Delete" title="Delete" style="border: 1px solid gray; zoom:80%;">

2. A confirmation window is displayed. Click **Yes** to confirm.  
    <img src="../images/ccai-confirm-delete.png" alt="Confirm Delete" title="Confirm Delete" style="border: 1px solid gray; zoom:80%;">

### Related Link

* [Wallboards](../../../analytics/contact-center/wallboards.md)