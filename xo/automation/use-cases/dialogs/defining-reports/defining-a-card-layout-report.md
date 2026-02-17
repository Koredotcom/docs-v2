# Defining a Card Layout Report

With some tasks, you may want to add a link to a message sent to a user that contains data too large for a message, for example, a message with a picture, abstract, and a link to a full article or report. This topic describes how to define a card layout report.
The card layout report type can be displayed to an end-user when the URL for this report type is clicked in a message. In the following illustration, the message sent to the end-user contains a link to the card layout report called Today’s Summary.  
<img src="../images/card_layout_report_1.png" alt="Today’s Summary" title="Today’s Summary" style="border: 1px solid gray; zoom:100%;">

When the user clicks the link in the message, a card layout report with a card header, optional card description, and a header row as shown in the following illustration for the _Today’s Summary_ report.  
<img src="../images/card_layout_report_2.png" alt="Today’s Summary" title="Today’s Summary" style="border: 1px solid gray; zoom:100%;">

## To define a card layout report

To complete the following procedure, you must have already defined a task, such as an alert task, or information task, that you want to add a card layout report link to. Complete the steps in the following procedure to define a card layout report.

1. In App Builder, select the task for the Bot that you want to add a card layout report link to.

    !!! Note
    
        Only unpublished tasks can be modified.

2. On the **Bot Response** tab for the task that you want to add a card layout report to, click the **Expand** <img src="../images/expand-icon.png"> icon for the **Report Template Definition** section.
3. In the **Link Title** field, enter the link text to display to the end-user in the task post, for example, _Today’s Summary_.
4. In the **Header** field, enter the title of the report to display when the card layout report is displayed to the end-user.
5. In the **Details** field, optionally enter any end-user help information displayed directly below the **Header** in the report, for example, _These are the details for Today’s Summary Card Layout Report_.
6. In the **Template** drop-down list, select **Card layout**.
7. Click **Edit Template**. The **Card Layout Configuration** dialog is displayed.
8. In the **Card Title** text area, enter your custom JavaScript to display the title data for your card, for example, a static title such as `print("Today's Summary Report");` or you can use payload keys, for example, `print(summary);`
9. Click **Add Item**. The **Item Configuration** dialog is displayed as shown in the following illustration.  
<img src="../images/card_layout_report_3.png" alt="Item Configuration" title="Item Configuration" style="border: 1px solid gray; zoom:100%;">

10. In the **Item Name** field, enter the first column title, for example, _Task_.
11. In the  **Data Type** field, select one of the following data types for the information displayed in the column:  
    1. **String**
    2. **Number**
    3. **Date**

12. Enable **Is a link** if the data in the column is a hyperlink. When enabled:  
    1. In the **Link Label** field, enter the JavaScript to display the text for the link, for example, `print(Name);` .
    2. In the **URL Value** field, enter the JavaScript to display the data to output when the **Link Label** is clicked, for example, `print("https://login.salesforce.com/" + Id);`

        If **Is a link** is not enabled, then enter the JavaScript to display the value for the column in the **Item Value** field, for example,  
      
        ```
        if(typeof(start.dateTime) !== 'undefined'){
        if((new Date(end.dateTime).getTime()-new Date(start.dateTime).getTime())/(60*60*1000) >24){
            print('\\dt(' + new Date(start.dateTime).toISOString() + ',\'ddd., MMM. dd, yyyy hh:mm a\')');
            print(" - ")
            print('\\dt(' + new Date(end.dateTime).toISOString() + ',\'ddd., MMM. dd, yyyy hh:mm a\')');
        } else {
        print('\\dt(' + new Date(start.dateTime).toISOString() + ',\'ddd., MMM. dd, yyyy hh:mm a\')');
        print(" - ")
        print('\\dt(' + new Date(end.dateTime).toISOString() + ',\'hh:mm a\')');
        }
        } else {
            print('\\dt('+new Date(start.date).toISOString()+',\'MMM DD\')');
        }
        ```

13. In the **Display it as an image** section, select **Yes** if the column value is an image.
14. In the **Display it as HTML** section, select **Yes** if the column value contains HTML content.
15. Click **Done**. The **Card Layout Configuration** dialog is displayed with the new column added as shown in the following illustration.  
<img src="../images/card_layout_report_4.png" alt="Card Layout Configuration" title="Card Layout Configuration" style="border: 1px solid gray; zoom:100%;">

16. Repeat Steps 9 – 15 for each additional column in the report, click **Save** to save the column configurations, and then click **Close**.
17. In the **Report Template Definition** section, click **Save** to save the card layout report.

The table is saved _Successfully saved response data_ message is displayed at the top of the page.
