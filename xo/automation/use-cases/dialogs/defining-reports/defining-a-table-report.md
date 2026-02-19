# Defining a Table Report

With some tasks, you may want to add a link to a message sent to a user that contains data too large for a message, for example, a message with a picture, abstract, and a link to a full article or report. This topic describes how to define a table report with variable width columns.
The table report type can be displayed to an end-user when the URL for this table is clicked in a message. In the following illustration, the message sent to the end-user contains a link to the table report called **Your Daily Tasks**. To learn how to use report keys, read the [Alert Tasks](../../alert-tasks-message-definition.md#report-keys){:target="_blank"} article.
 

<img src="../images/google_task.png" alt="Google_task" title="Google_task" style="border: 1px solid gray; zoom:100%;">


When the user clicks the link in the message, a table report with variable width columns shows the data for the columns defined with a table header, optional table description, and a header row as shown in the following illustration for the _Your list of tasks_ report.


<img src="../images/list_of_task.png" alt="list_of_task" title="list_of_task" style="border: 1px solid gray; zoom:100%;">


## To define a table report

To complete the following procedure, you must have already defined a task, such as an alert task, or information task, that you want to add a table report link to. Complete the steps in the following procedure to define a table report with variable width columns.



1. In App Builder, select the task for the App that you want to add a table report link to.  

    !!! Note
    
        Only unpublished tasks can be modified.
2. On the **Bot Response** tab for the task that you want to add a table report to, click the **Expand** <img src="../images/expand-icon.png"> icon for the **Report Template Definition** section.
3. In the **Link Title** field, enter the link text to display to the end-user in the task post, for example, _Your Task List_.
4. In the **Header** field, enter the title of the report to display when the table report is displayed to the end-user.
5. In the **Details** field, optionally enter any end-user help information displayed directly below the **Header** in the report, for example, _This is a list of your daily Google Tasks_.
6. In the **Template** drop-down list, select **Table**.
7. Click **Edit Template**. The **Table Configuration** dialog is displayed.
8. Click **Add Column**. The **Column Configuration** dialog is displayed as shown in the following illustration.

    <img src="../images/column_configuration.png" alt="column_configuration" title="column_configuration" style="border: 1px solid gray; zoom:100%;">

9. In the **Column Name** field, enter the first column title, for example, _Task_.
10. In the  **Data Type** field, select one of the following data types for the information displayed in the column:  
    1. **String**
    2. **Number**
    3. **Date**

11. Enable **Is a link** if the data in the column is a hyperlink. When enabled:  
    1. In the **Link Label** field, enter the JavaScript to display the text for the link, for example, `print(Name);` .
    2. In the **URL Value** field, enter the JavaScript to display the data to output when the **Link Label** is clicked, for example, `print("https://login.salesforce.com/" + Id);`

12. If **Is a link** is not enabled, then enter the JavaScript to display the value for the column, for example, `print(StageName);`.
13. In the **Display it as an image** section, select **Yes** if the column value is an image.
14. In the **Display it as HTML** section, select **Yes** if the column value contains HTML content.
15. In the **Is this column Sortable** section, select Yes if the end-user should be able to sort the column.
16. Click **Done**. The **Table Configuration** dialog is displayed with the new column added as shown in the following illustration.

    <img src="../images/table_configuration.png" alt="table_configuration" title="table_configuration" style="border: 1px solid gray; zoom:100%;">

17. Repeat Steps 8 – 16 for each additional column in the report, click **Save** to save the column configurations, and then click **Close**.
19. In the **Report Template Definition** section, click **Save** to save the table report

The table is saved _Successfully saved response data_ message is displayed at the top of the page.
