# Feedback Dashboard

Once you’ve created a **Feedback Survey** for your conversations based on a survey type (_NPS_, _CSAT_, or _Like/Dislike_), it’s important to constantly monitor and analyze the customer responses, feedback survey scores, and trends over a given period.

Thus, knowing the survey type scores and the key metrics for respondents, responses, trends, and users helps gain actionable insights into the customer experience your business is delivering. The new **Feedback Analytics Dashboard** provides prebuilt dashboards to view the survey results and insights based on the duration, survey name, and type you select.

This dashboard displays graphs and charts derived from real-time feedback data for the following:



* Distribution trends of feedback scores.
* The overall score for the given period and its trend.
* The comprehensive feedback results with an option to export the results for review.


**To view the Feedback dashboard, follow the steps**: 

1. Click **Analytics** on the left navigation pane. The Analytics panel is displayed with the list of reports.

    <img src="../images/navigate-to-feedback-dashboard.png" alt="Navigate to Feedback Dashboard" title="Navigate to Feedback Dashboard" style="border: 1px solid gray; zoom:80%;"/>

2. Click the **Feedback Dashboard** under the **Automation** section of the **Analytics** panel. The **Feedback Dashboard** is displayed on the right side of the page.
3. Select appropriate filters on the dashboard and click **Apply**.


## Dashboard Filters

The **Feedback Dashboard** displays analytics data on the **Feedback Survey responses** from customers based on the following filters:

*  **Date**: Indicates the date range to filter the conversation sessions and capture the survey feedback responses.

!!! note

    The session start time filters the sessions based on when they were initiated.

 
<img src="../images/dashboard-filters-1.png" alt="Dashboard Filters 1" title="Dashboard Filters 1" style="border: 1px solid gray; zoom:80%;"/>



The filter options include the following:

* **24 Hours**: Captures feedback survey responses from conversations in the past 24 hours.
* **Last 7 Days**: Captures feedback survey responses from conversations that happened in the last seven days.
* **Last Month**: Captures feedback survey responses from conversations in the last month.
* **Last 3 Months** Captures feedback survey responses from conversations in the last three months.
* **Custom**: Select the start and end date range on the calendar widget to capture the feedback survey data.

    <img src="../images/dashboard-filters-2.png" alt="Dashboard Filters 2" title="Dashboard Filters 2" style="border: 1px solid gray; zoom:80%;"/> 

1. **Survey Type**: The type of survey including CSAT, NPS, or Like/Dislike. Learn more.
    <img src="../images/dashboard-filters-3.png" alt="Dashboard Filters 3" title="Dashboard Filters 3" style="border: 1px solid gray; zoom:80%;"/>


2. **Survey Name**: This is the feedback survey name provided when creating a feedback survey under **Build** > **Configurations** > **Feedback Survey**. You can either select **All Surveys** to capture the Feedback Survey analytics data of all the surveys configured for the AI Agents or a specific survey name from the dropdown list.


    <img src="../images/dashboard-filters-4.png" alt="Dashboard Filters 4" title="Dashboard Filters 4" style="border: 1px solid gray; zoom:80%;"/>


## Dashboard Sections

The **Feedback Survey** Dashboard is categorized into five sections that display analytics-driven graphs and charts for the selected feedback _survey name_, _survey type_, and _date_ based on the captured feedback survey responses. These include:


### Percentage and Number of Respondents

This widget displays the **percentage** and the **number of respondents** for a specific feedback survey response. In addition, it displays the _percentage of increase or decrease_ in the individual response type over the given period.

For the **NPS** survey type, it captures the data for the following responders:



* **Promoters**: Respondents who gave a score of 9 or above.
* **Passives**: Respondents who gave a score between 6 and 8.
* **Detractors**: Respondents who gave a score between 0 and 5.

<img src="../images/dashboard-sections-1.png" alt="Dashboard Sections 1" title="Dashboard Sections 1" style="border: 1px solid gray; zoom:60%;">


For the **CSAT** survey type, it captures the data for the following responses:

* **Very Satisfied**: Respondents who gave a score of 5.
* **Satisfied**: Respondents who gave a score of 4.
* **Neutral**: Respondents who gave a score of 3.
* **Unsatisfied**: Respondents who gave a score of 2.
* **Very Unsatisfied**: Respondents who gave a score of 1.

<img src="../images/dashboard-sections-2.png" alt="Dashboard Sections 2" title="Dashboard Sections 2" style="border: 1px solid gray; zoom:60%;">


For the **Like/Dislike** survey type, it captures the data for the following responses:



* **Extremely Likely**: Respondents who gave a score of 1.
* **Extremely Unlikely**: Respondents who gave a score of 0.

<img src="../images/dashboard-sections-3.png" alt="Dashboard Sections 3" title="Dashboard Sections 3" style="border: 1px solid gray; zoom:60%;">


### Score Break up – Respondent-wise Survey Score over Time

This section displays the bar chart widget representing the percentage of each response type for **Like/Dislike** and **CSAT** surveys and the respondent type for **NPS surveys** over a time period.

!!! note

    Hover your mouse over the **Survey Score** chart to see the **_number of respondents_**, the **_response type scores_**, and the **_percentage of respondents for each response type_** at the granular level.


For the **NPS** survey type, the number of promoters, passives, and detractors is displayed in different colors over the selected period on the days they responded.

<img src="../images/NPS-survey-type.png" alt="NPS Survey Type" title="NPS Survey Type" style="border: 1px solid gray; zoom:60%;">



For the **CSAT** survey type, the number of **very satisfied**, **satisfied, neutral**, **unsatisfied**, and **very unsatisfied** responses received over the selected date range is displayed in different colors.


<img src="../images/CSAT-survey-type.png" alt="CSAT Survey Type" title="CSAT Survey Type" style="border: 1px solid gray; zoom:60%;">


For the **Like/Dislike** survey type, the number of **extremely likely** and **extremely unlikely** responses captured over the selected date range is displayed in different colors


<img src="../images/like-dislike-survey-type.png" alt="LIKE DISLIKE Survey Type" title="LIKE DISLIKE Survey Type" style="border: 1px solid gray; zoom:60%;">



### Survey Score

This section displays the meter graph (from 0 to 100) widget for the survey score based on the actual customer feedback survey responses for a specific survey type. Each score graph is generated based on an internal formula mapped to a survey type as follows:


* **NPS Score**: Displays a whole number between -100 and 100 based on the formula `(Percentage of Promoters - Percentage of Detractors)`.


    <img src="../images/NPS-score.png" alt="NPS Score" title="NPS Score" style="border: 1px solid gray; zoom:80%;"/>



* **CSAT**: Displays the percentage value based on the formula `(Number of very satisfied/satisfied Respondents / Total Number of Respondents) * 100`.

    <img src="../images/CSAT-score.png" alt="CSAT Score" title="CSAT Score" style="border: 1px solid gray; zoom:80%;"/>


* **Like/Dislike**: Displays the percentage value based on the formula `(Number of extremely likely Respondents / Total Number of Respondents) * 100`.

    <img src="../images/like-dislike-score.png" alt="Like Dislike Score" title="Like Dislike Score" style="border: 1px solid gray; zoom:80%;"/>

### Survey Trendline

This section displays the widget with the line graph capturing the date-wise response score trend for the total number of positive respondents over the selected date range.


!!! note

    Hover your mouse over the trend chart to see the **_number of respondents_** and the **response scores on a specific date** at the granular level.


For the **NPS** survey type, the line graph displays the **Promoters score** trend changes for the total number of promoters over the selected period.

<img src="../images/survey-trendline-1.png" alt="Survey Trendline 1" title="Survey Trendline 1" style="border: 1px solid gray; zoom:80%;"/>


For the **CSAT** survey type, the line graph displays the **Respondents Score** trend changes for the total number of very satisfied and satisfied respondents over the selected period.


<img src="../images/survey-trendline-2.png" alt="Survey Trendline 2" title="Survey Trendline 2" style="border: 1px solid gray; zoom:80%;"/>


For the **Like/Dislike** survey type, the line graph displays the **respondents’ score** trend changes for the total number of extremely likely respondents over the selected period.


<img src="../images/survey-trendline-3.png" alt="Survey Trendline 3" title="Survey Trendline 3" style="border: 1px solid gray; zoom:80%;"/>



### User-level Feedback

This information grid represents the metadata for the _Total number of conversations_ for every unique conversation path between the AI Agents and the user. This grid summarizes and lists the data of all the feedback surveys mapped to the selected **survey type** filter. The fields for which data is displayed are:


<table>
  <tr>
   <td><strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Survey Name</strong>
   </td>
   <td>The name of the feedback survey for the selected survey type.
   </td>
  </tr>
  <tr>
   <td><strong>Kore User ID</strong>
   </td>
   <td>The internal ID of the user who responded to the survey.
   </td>
  </tr>
  <tr>
   <td><strong>Channel ID</strong>
   </td>
   <td>The channel ID of the conversation session channel.
   </td>
  </tr>
  <tr>
   <td><strong>Session ID</strong>
   </td>
   <td>The identifier of the conversation session.
   </td>
  </tr>
  <tr>
   <td><strong>Channel</strong>
   </td>
   <td>The conversation channel of the user and AI Agents interaction. This can be a web/mobile client or a messaging platform.
   </td>
  </tr>
  <tr>
   <td><strong>Language</strong>
   </td>
   <td>The language used to communicate during the conversation session.
   </td>
  </tr>
  <tr>
   <td><strong>Score</strong>
   </td>
   <td>The feedback survey score.
   </td>
  </tr>
  <tr>
   <td><strong>Date & Time</strong>
   </td>
   <td>The date and time of the interaction.
   </td>
  </tr>
  <tr>
   <td><strong>Descriptive Feedback</strong>
   </td>
   <td>The user’s response to the follow-up question was triggered during the feedback survey.
<p>
<strong>Note</strong>: <em>This value appears only if a follow-up question is configured for a survey.</em>
   </td>
  </tr>
</table>




!!! note

    The values for **Score** and **Survey Name** will change based on the selected **Survey Type**.



### Download the Feedback Analytics Report

To download the **User-level feedback** report, click the **Export to CSV** icon as shown below:

<img src="../images/download-the-feedback-analytics-report.png" alt="Download the Feedback Analytics Report" title="Download the Feedback Analytics Report" style="border: 1px solid gray; zoom:80%;"/>