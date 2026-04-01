# Wallboards

## Overview

Wallboards enhance the ability to oversee operations efficiently and effectively. Contact Center Administrators and Supervisors can create, edit, and delete the wallboards. Their fixed, high-resolution display ensures that users can access clear and consistent information, suitable for high-definition screens and full-screen viewing.

!!! Note

    Contact Kore Support to enable Wallboards.

## Launch Wallboard

Steps to launch the wallboard:

1. Click the (**...**) icon and click **Launch Wallboard**. The Wallboard is displayed in a new browser tab.  
    <img src="../images/ccai-launch-wallboard.png" alt="Launch Wallboard" title="Launch Wallboard" style="border: 1px solid gray; zoom:80%;">

    You can also access wallboards by going to **Contact Center AI** > **Analytics** > **CONTACT CENTER** > **Wallboards**.  
        <img src="../images/ccai-analytics-wallboards.png" alt="Wallboards Page" title="Wallboards Page" style="border: 1px solid gray; zoom:80%;">

2. The data on the dashboard is refreshed after 60 seconds. The data in the live widgets refreshes every second.  

    **Center Wide**  
    <img src="../images/ccai-center-wide-wallboard.png" alt="Centerwide Wallboard" title="Centerwide Wallboard" style="border: 1px solid gray; zoom:80%;">  

    **Queue Specific**  
    <img src="../images/queue-specific-wallboard.png" alt="Centerwide Wallboard" title="Centerwide Wallboard" style="border: 1px solid gray; zoom:80%;"> 

### Wallboard Widgets

The following widgets on the wallboard show data related to the KPIs of the contact center for the configured time duration.

#### Center Wide

* The wallboard name is displayed at the top of the wallboard.  
    <img src="../images/ccai-wallboard-name.png" alt="Wallboard Name" title="Wallboard Name" style="border: 1px solid gray; zoom:80%;">

* The top section of the wallboard shows the following widgets:  
    <img src="../images/ccai-top-widgets.png" alt="Top Widgets" title="Top Widgets" style="border: 1px solid gray; zoom:80%;">

    | **Name**                      | **Live/Time based** | **Description**                                                                 |
    |------------------------------|---------------------|----------------------------------------------------------------------------------|
    | Waiting                      | Live                | Count of all conversations waiting in all queues.                               |
    | With Agent                   | Live                | Count of all conversations currently with Agents.                               |
    | Longest Wait                 | Live                | Duration of the longest wait of any conversation currently in a waiting state.  |
    | Overdue                      | Live                | Count of all conversations currently overdue with Agents.                       |
    | Handled                      | Time-based          | Count of all conversations handled (completed) by the contact center.           |
    | Closed                       | Time-based          | Count of all conversations closed properly by agents at the contact center.     |
    | Abandoned                    | Time-based          | Count of all conversations abandoned by users in queues.                        |
    | Avg. Speed To Answer (ASA)   | Time-based          | ASA of all conversations.                                                       |

* The bottom section of the wallboard shows the following data related to the queues.  
    <img src="../images/ccai-bottom-table.png" alt="Bottom Table" title="Bottom Table" style="border: 1px solid gray; zoom:80%;">

    | **Name**   | **Live/Time based** | **Description**                                                                                     |
    |------------|---------------------|------------------------------------------------------------------------------------------------------|
    | Queues     | NA                  | Names of the configured queues.                                                                     |
    | Offered    | Time-based          | Count of all conversations offered in the queue.                                                    |
    | Waiting    | Live                | Count of all conversations waiting in the queue.                                                    |
    | Load       | Live                | The current load on the queue in percentage.                                                        |
    | CSAT       | Time-based          | Average CSAT of all conversations in this queue/count of all conversations with CSAT in the queue.  |
    | Long Wait  | Live                | Duration of the longest wait by any conversation currently waiting in the queue.                    |
    | Closed     | Time-based          | Count of conversations closed properly in the queue.                                                |

#### Queue Specific

* The wallboard name is displayed at the top of the wallboard.  
    <img src="../images/queue-specific-wallboard-name.png" alt="Wallboard Name" title="Wallboard Name" style="border: 1px solid gray; zoom:80%;">

* The top section of the wallboard shows the following widgets:  

    **Multiple Insights**  
    <img src="../images/multiple-insights-wallboard.png" alt="Multiple Insights" title="Multiple Insights" style="border: 1px solid gray; zoom:80%;">  

    **One Insight**  
    <img src="../images/one-insight-wallboard.png" alt="One Insight" title="One Insight" style="border: 1px solid gray; zoom:80%;">  

* The top section of the wallboard shows the following widgets:  
    <img src="../images/top-left-widgets.png" alt="Top Widgets" title="Top Widgets" style="border: 1px solid gray; zoom:80%;">  

    | **Name**                      | **Description**                                                                                                                                                            |
    |------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Waiting                      | Number of conversations waiting in the selected queue.                                                                                                                      |
    | Closed                       | Number of conversations properly closed by agents in the selected queue.                                                                                                    |
    | Active                       | Number of conversations in active conversations with agents in the selected queue.                                                                                          |
    | Abandoned                    | Number of conversations abandoned in the selected queue.                                                                                                                     |
    | Longest Wait                 | Longest wait time for all conversations in the selected queue (format: NNNh NNm NNs).                                                                                        |
    | Transferred Out             | The number of conversations transferred to other queues from the selected queue.                                                                                             |
    | Avg. First Response Time (FRT) | Average first response time for all conversations in the selected queue.                                                                                                   |
    | Queue Load Percentage        | The ratio of current queue demand to the queue's handling capacity, expressed as a percentage.<br><br>**Formula:**<br>(Number of waiting conversations + Number of active conversations) / (Number of available agents × Target conversations per agent) × 100% |

* The right section of the wallboard shows the following widgets based on the selected option:  
    <img src="../images/right-side-widgets.png" alt="Right Side Widgets" title="Right Side Widgets" style="border: 1px solid gray; zoom:80%;">

    | **Name**                          | **Range**           | **Description**                                                                     |
    |----------------------------------|---------------------|--------------------------------------------------------------------------------------|
    | Top N Closed                     | N in the range of 1–3 | Shows agents with the highest number of closed conversations.                       |
    | Top N Answered                   | N in the range of 1–3 | Shows agents with the highest number of accepted conversations.                     |
    | Top N CSAT                       | N in the range of 1–3 | Shows agents with the highest CSAT.                                                 |
    | Top N Occupancy Rate             | N in the range of 1–3 | Shows agents with the highest occupancy rate.                                       |
    | Top N Average First Response Time| N in the range of 1–3 | Shows agents with the lowest Average   First Response Time (FRT).                     |

* The bottom section of the wallboard shows the following agent-related data.  
    <img src="../images/bottom-widget-queue-specific.png" alt="Bottom Widget" title="Bottom Widget" style="border: 1px solid gray; zoom:80%;">

    | **Name**         | **Description**                                                                                                                                                   |
    |------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Agent            | The name and display picture of agents.                                                                                                                           |
    | Status           | Current status of the agent.                                                                                                                                       |
    | Status Duration  | How long the agent has been in the current status (format: NNNh NNm NNs).                                                                                          |
    | Avg. FRT         | Average First Response Time of the agent.                                                                                                                          |
    | Closed           | The number of conversations properly closed by the agent.                                                                                                          |
    | Occupancy Rate   | The percentage of an agent's logged-in time that's spent actively handling conversations.<br><br>**Formula:**<br>(time agent was actively working [talk + hold + snooze + mute + ACW]) × 100.0 / (time spent logged in) |
    | Avg. CSAT        | Average CSAT of the agent.                                                                                                                                         |

If the enable scroll text toggle is turned on, the configured text displays at the bottom of the page at the selected speed.  
<img src="../images/ccai-marquee-text.gif" alt="Marquee Text" title="Marquee Text" style="border: 1px solid gray; zoom:80%;">

#### Center Wide Abandoned

The wallboard name appears at the top of the wallboard.  
<img src="../images/wallboard-abandoned-name.png" alt="Wallboard Name" title="Wallboard Name" style="border: 1px solid gray; zoom:80%;">

The top section of the wallboard shows the following widgets:  
<img src="../images/wallboard-top-section.png" alt="Top Section" title="Top Section" style="border: 1px solid gray; zoom:80%;">

| Name                 | Live / Time-Based | Description                                                                                    |
| :-------------------- | :----------------- | :---------------------------------------------------------------------------------------------- |
| Waiting              | Live              | Count of all conversations waiting in all queues.                                              |
| With Agent           | Live              | Count of all conversations currently handled by agents.                                        |
| Longest Waiting Time | Live              | Duration of the longest wait for any conversation currently in the waiting state.              |
| Overdue              | Live              | Count of all conversations currently overdue with agents.                                      |
| ACR                  | Time-Based        | Percentage of conversations abandoned in queue or timed out, divided by offered conversations. |
| Agents               | Live              | Number of agents currently logged in.                                                          |
| Abandoned            | Time-Based        | Count of conversations abandoned by users in queues.                                           |
| Timed Out            | Time-Based        | Number of conversations that timed out while waiting in the queue.                             |

The bottom section of the wallboard displays the following queue data.  
<img src="../images/wallboard-bottom-section.png" alt="Bottom Section" title="Bottom Section" style="border: 1px solid gray; zoom:80%;">

| Name                 | Live / Time-Based | Description                                                                                                                  |
| :-------------------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Offered              | Time-Based        | Count of all conversations offered.                                                                                          |
| Waiting              | Live              | Count of all conversations currently waiting in the queue.                                                                   |
| Answered             | Time-Based        | Count of all conversations accepted by any agent.                                                                            |
| Timed Out            | Time-Based        | Count of all conversations timed out while waiting in the queue.                                                             |
| Abandoned            | Time-Based        | Count of all conversations abandoned in the queue.                                                                           |
| Transferred          | Time-Based        | Count of all conversations transferred from this queue.                                                                      |
| ACR                  | Time-Based        | Percentage of conversations abandoned in queue or timed out divided by offered conversations.                                |
| Agents               | Live              | Count of all available or system-busy agents assigned to the queue with the required skill combination.                      |
| Load                 | Live              | Queue load calculated using the queue load formula from the Queues and Agents dashboard. Skills are ignored for this metric. |
| Longest Waiting Time | Live              | Duration of the longest wait for any conversation currently waiting in the queue with the skill.                             |

##### Related Link

* [Configure Wallboards](../../contactcenter/configurations/wallboards/configure-wallboards.md)