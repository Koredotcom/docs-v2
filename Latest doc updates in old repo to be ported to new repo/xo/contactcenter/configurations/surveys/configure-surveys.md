# Surveys

Surveys let you send customers a satisfaction survey after they interact with your business.

To access surveys, go to **Contact Center AI** > **CONFIGURATIONS** > **Surveys**.  
<img src="../images/survey-page.png" alt="Surveys Page" title="Surveys Page" style="border: 1px solid gray; zoom:80%;">

## How Surveys Work

The Feedback framework captures customer sentiment after a conversation ends. You can configure feedback at the channel level and select one feedback type per channel. The system supports CSAT, Net Promoter Score (NPS), and Like or Dislike surveys under a unified framework.

Customers receive the configured survey based on the defined frequency. The survey format depends on the selected feedback type:

* **Customer Satisfaction (CSAT)**: Rating scale from 1 (extremely poor) to 5 (extremely good).
* **Net Promoter Score (NPS)**: Rating scale from 0 to 10, categorized as Detractors (0–6), Passives (7–8), and Promoters (9–10).
* **Like or Dislike**: Binary response (Thumbs up=Satisfied, Thumbs down = Unsatisfied). 

## The Surveys Live Board

The Surveys section lets you create a survey or view and edit an existing one. You can find the following information:

* **Survey Name**: The name given to your survey.
* **Description**: The description provided for the survey.
* **Experience Enabled For**: The system lists the survey enabled channels.
* **Survey Type**: Select CSAT, NPS, Like or Dislike.
* **Frequency**: The frequency with which the survey goes out.
* **Status**: Enabled or Disabled.
* The 🖊 icon lets administrators modify a survey.

## General Information

Under General Information, provide information for the following mandatory fields:

* Survey Name: The name by which to identify the survey.
* Description: A short description of the survey.
    <img src="../images/general-information.png" alt="General Information Section" title="General Information Section" style="border: 1px solid gray; zoom:60%;">

## Chat, Call, and Email Experience

The Chat, Call, and Email Experience tabs provide access to the following features:

1. Select the **Chat Experience**, **Call Experience**, or **Email Experience** tabs.
1. Enable the **Chat Experience**, **Call Experience**, or **Email Experience** to request customers to take the survey.
1. Configure the **Request Message** and add a **Gratitude Message** that appears to customers before and after they take the survey. Choose the message language, type the message in, then select **Done**.  
    <img src="../images/edit-message.png" alt="Request Messages" title="Request Messages" style="border: 1px solid gray; zoom:60%;">

    !!! Note

        Email message can be written in plain text or HTML/CSS code.

1. Set the Survey Frequency by configuring one of the following options:

    | Option                 | Description                                                                              |
    | :--------------------- | :--------------------------------------------------------------------------------------- |
    | Show to Everyone       | Makes the survey visible to all customers.                                                                                                          |
    | Show to Every nth User | Makes the survey visible to every nth customer. For example, if you enter `2`, the survey appears for every second customer.                                |
    | Agents can Trigger     | Lets agents to trigger the survey. When Auto Trigger Survey is enabled, the system sends surveys automatically, and agents can turn them off if required. |


1. Advanced Survey Conditions

| Option                                                     | Description                                                                 |
|------------------------------------------------------------|-----------------------------------------------------------------------------|
| Trigger the feedback survey when no agents are available  | Sends the feedback survey when the agent transfer does not occur due to unavailability. |
| Trigger the feedback survey outside business hours        | Sends the feedback survey when conversations occur outside business hours and agents are unavailable. |
| Trigger feedback survey for agent-closed conversations    | Sends the feedback survey only for conversations that agents close. |

1. Turn on the toggle to verify the survey is active.
1. Select **Done** to begin sending it to customers. If you don't want to do so, leave the survey disabled.  
    <img src="../images/auto-trigger-survey.png" alt="Configure Experience" title="Configure Experience" style="border: 1px solid gray; zoom:60%;">

## Edit a Survey

Steps to edit a survey:

1. In the Surveys section, select the **Survey Name** or the **Edit** icon.  
2. Make the required changes in the survey window, then select **Done**.

## Delete a Survey

Steps to delete a survey:

1. In the Surveys section, select the **Survey Name** or the **Edit** icon.
2. In the survey configuration window, select **Delete** on the left side of the bottom toolbar and confirm your choice.

!!! Warning "Deleted Surveys"

    You cannot restore deleted surveys. After you delete a survey, the system no longer sends it to customers.