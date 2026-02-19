# Users Dashboard

Once you have implemented an AI Agent, you can gain actionable insights on the type of users it handles, including unique, new, and returning users, and the user trends for a given period for different conversation types, conversation statuses, channels, languages, and custom conversational tags on the Users Dashboard.

This dashboard displays the trends of total users interacting with the AI Agents, with a breakup of new and returning users, which helps understand user trends and the user retention status of your business.

For example, an e-Commerce company requiring insights on user trend-based data for their mobile app can use the Users Dashboard to determine the following:

* The new users, existing users, and returning users of their app.
* The active users over a specific period.
* The new and returning users on a specific day, week, or month.
* The total inactive users registered on the app.
* The percentage of users who return and use the app “N” days after they start using it.

**To view the Users dashboard, follow the steps**: 


1. Click **Analytics** on the left navigation pane. The Analytics panel is displayed with the list of reports.

    <img src="../images/users-dashboard.png" alt="Users Dashboard" title="Users Dashboard" style="border: 1px solid gray; zoom:80%;"/>

2. Click **Users Dashboard** under the **Overview** section of the **Analytics** panel. The **Users Dashboard** is displayed on the right side of the page.
3. Select appropriate filters on the dashboard and click **Apply**.


## User Trends Considerations

* If User-A has interacted with the AI Agents on 25-Jan-2022 for the first time and the dashboard is viewed between 23-Jan-2022 to 26-Jan-2022 then this user is considered a new user.
* If User-B has interacted with the AI Agents on 25-Jan-2022 for the first time and again interacted with the AI Agents on 26-Jan-2022, and if the dashboard is viewed between 23-Jan-2022 to 26-Jan-2022, then this user is considered as:
    * A new user on 25-Jan-2022
    * A returning user on 26-Jan-2022
* If User-C has interacted with the AI Agents on 21-Jan-2022 for the first time and again interacted with the AI Agents on 26-Jan-2022, and the dashboard is viewed between 23-Jan-2022 to 26-Jan-2022, then, this user is considered as a returning user. [Learn more about New and Returning Users](../../kb/new-and-returning-users.md)

The **Users Dashboard** provides insights on the following user trend metrics:


* **Total Unique Users**: The total number of unique users who interacted with the AI Agents.
* **New Users**: The total number of users who have interacted with the AI Agents for the first time in the selected period.
* **Returning Users**: The total number of users who have already interacted with the AI Agents earlier and have initiated another session in the selected period.
* **Avg. Total Unique Users Per Day**: The total number of unique users who interacted with the AI Agents in the selected period divided by the number of days in the selected period.
* **Avg. New Users Per Day**: The total number of new users who interacted with the AI Agents in the selected period divided by the number of days in the selected period.

The key components of the Users Dashboard are:


* **Users Trend**: The users’ trend shows the distribution of New Users, Returning Users, and Total Unique Users who have interacted with the AI Agents over a period. This helps determine User Engagement for the selected period. 

    **Graph- Users’ Trend for the Selected Period**

    <img src="../images/users-trend.png" alt="Users Trend" title="Users Trend" style="border: 1px solid gray; zoom:80%;"/>

    **Users Trend Summary**: This panel displays the real-time counts of the **Total Unique Users**, **New Users**, **Avg. Total Unique Users Per Day**, and **Avg. New Users Per Day**.

    The increment/decrement of the above user metrics’ counts is displayed as percentage values.


* **Returning Users**: Displays the graph for the day-wise returning users (in percentage) for the selected dates and other filters. Here, Day 0 is the first time a user interacts with the AI Agents. The returning users % is calculated for the consecutive days for the selected period. For example, in the following image, the number of users is 100% on Day 0 (first interaction) and 0% on Day 1 since none of the users who have already interacted with the AI Agents have initiated a conversation on the same channel/browser. 

    **Graph- Returning Users Trend for the Selected Period**


    <img src="../images/returning-users.png" alt="Returning Users" title="Returning Users" style="border: 1px solid gray; zoom:80%;"/>


* **Cohort Analysis**: This data visualization chart plots the weekly **new users** and the **percentage of returning users** based on the formula **_(Returning Users/New Users)*100_** on consecutive days to determine the retention rate. The Users Dashboard displays the Day N retention of daily, weekly, or monthly cohorts, within a customizable range of dates. For example, if you’re looking at the retention of daily cohorts acquired from July 13 to July 20, 2022, based on the filters selected, and the actual users returning on Day 2, the following **Cohort Analysis Chart** is displayed:



    <img src="../images/cohort-analysis.png" alt="Cohort Analysis" title="Cohort Analysis" style="border: 1px solid gray; zoom:80%;"/>


## Filter Criteria

The Users Dashboard data can be viewed based on specific filter criteria that can be selected. [Learn more](../../analytics/dashboard-filters.md).
