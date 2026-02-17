# Rate Limits 

This documentation outlines the point consumption system for user queries, detailing how different types of queries consume points and the various user categories that can be managed within the account.

## Point Consumption

* **Simple Queries**: These consume **1 point** each. Examples include small talk, context-free queries, and GPT responses without specific knowledge.
* **Advanced Queries**: These consume **3 points** each. For example, queries that utilize GPT with knowledge, those containing context, and follow-up queries.

## User Categories

Users are classified into two sets of rate limits:

**Moderate Users**: This set is the default and applies to all users within the account unless a specific user is added to the power user list.

**Power Users**: If a user is added to this list, they will be subject to the power user rate limits instead of the moderate limits. Admins can manage power users by adding users to the power user list, removing existing users, and deleting all users from the list.

Users can increase or decrease points based on their selected timeline, which can be adjusted to one of the following durations:

* 1 hour
* 3 hours
* 6 hours
* 12 hours

<img src="../images/rate-limit.png" alt="email-template" title="email-template" style="border: 1px solid gray; zoom:80%;">

In the **Logs** tab of the dashboard, you can see the number of points consumed for each question when viewing a specific log entry.

!!!Note 
    
    Any query, whether simple talk or an interrupted query, will still consume points. However, if an error occurs while answering a query, the points for that query will not be counted as consumed.
