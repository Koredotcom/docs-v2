# SLAs & Alerts

SLAs and Alerts targets establish the acceptable threshold for key performance indicators, such as Average Speed to Answer, Response Service Level, Abandonment Rate, and Transfer Rate, for interactions, including voice calls and chats.

Administrators can access service levels by going to Contact Center AI > PERFORMANCE MANAGEMENT > SLAs & Alerts.  
<img src="../images/sla-alerts-page.png" alt="SLAs & Alerts Tab" title="SLAs & Alerts Tab" style="border: 1px solid gray; zoom:70%;">

The following information appears:  
<img src="../images/dashboard-information.png" alt="Information" title="Information" style="border: 1px solid gray; zoom:70%;">

For more information about Service Levels, refer to [Service Levels](../../console/monitor-queues-agents-and-interactions.md#service-levels).

## Service Level

### Create a New Service Level

Steps to create a new service level:

1. Select **+ New Service Level** in the upper-right corner.  
    <img src="../images/add-rule.png" alt="Add New Service Level" title="Add New Service Level" style="border: 1px solid gray; zoom:70%;">

2. On the New Service Level Rule panel, enter a **Name** and **Description** for the service rule.  
    <img src="../images/sla-name-description.png" alt="SLA Name & Description" title="SLA Name & Description" style="border: 1px solid gray; zoom:70%;">

3. Under Configuration Setup, select and select the **Queues** and **Channels** from the drop-down menus.  
    <img src="../images/config-setup.png" alt="Config Setup" title="Config Setup" style="border: 1px solid gray; zoom:70%;">

4. Choose a trigger from the following options.  
    <img src="../images/choose-triggers.png" alt="Triggers" title="Triggers" style="border: 1px solid gray; zoom:70%;">

    Based on your selected trigger, you can choose the following:  

    **Abandonment rate**:  
    <img src="../images/abandonment.png" alt="Abandonment Rate" title="Abandonment Rate" style="border: 1px solid gray; zoom:70%;">

    **Average speed to answer (ASA)**:  
    <img src="../images/avg-speed.png" alt="Average Speed to Answer" title="Average Speed to Answer" style="border: 1px solid gray; zoom:70%;">

    **Response Service Level (RSL)**:  
    <img src="../images/rsl.png" alt="Response Service Level" title="Response Service Level" style="border: 1px solid gray; zoom:70%;">

    **Transfer rate**:  
    <img src="../images/transfer.png" alt="Transfer Rate" title="Transfer Rate" style="border: 1px solid gray; zoom:70%;">

5. Select **+ Add an action** and choose an action.  
    <img src="../images/action-options.png" alt="Add Actions" title="Add Actions" style="border: 1px solid gray; zoom:70%;">

    Based on your selected action, you can choose the following:  

    **Alert**:  
    <img src="../images/alert-config.png" alt="Alert Config" title="Alert Config" style="border: 1px solid gray; zoom:70%;">

    **Email**:  
    <img src="../images/alert-email.png" alt="Email" title="Email" style="border: 1px solid gray; zoom:70%;">

6. Select **Save** to create the service level.  
    <img src="../images/save-sla-rule.png" alt="Save SLA" title="Save SLA" style="border: 1px solid gray; zoom:70%;">

    A confirmation message appears, and creates the service level.

### Edit a Service Level

Steps to edit a service level:

1. Select **Edit**.  
    <img src="../images/edit-sla-button.png" alt="Edit SLA" title="Edit SLA" style="border: 1px solid gray; zoom:70%;">

2. Make the necessary changes to the service level and select **Save**.  
    <img src="../images/save-edit-sla.png" alt="Save Edited SLA" title="Save Edited SLA" style="border: 1px solid gray; zoom:70%;">

    A confirmation message appears.

### Edit a Service Level Name

Steps to edit a service level name:

1. Select **Edit**.  
    <img src="../images/edit-sla-button.png" alt="Edit SLA" title="Edit SLA" style="border: 1px solid gray; zoom:70%;">

2. Edit the Service Level Name or Description and select **Save**.  
    <img src="../images/edit-sla-name-desc.png" alt="Edit SLA" title="Edit SLA" style="border: 1px solid gray; zoom:70%;">

    The revised service level name appears.

### Delete a Service Level

Steps to delete a service level:

1. Select **Delete**.  
    <img src="../images/delete-sla-rule.png" alt="Delete SLA" title="Delete SLA" style="border: 1px solid gray; zoom:70%;">

2. Select **Delete**.  
    <img src="../images/confirm-sla-delete.png" alt="Confirm Delete SLA" title="Confirm Delete SLA" style="border: 1px solid gray; zoom:70%;">

    A notification appears, and deletes the service level.

## General Alerts

Administrators and Supervisors use this flexible alert system to configure and receive alerts for operational metrics and general system events.

Example:

Alerts triggered when users perform specific activities, such as:

* Exporting the **Interaction Details Report**
* Exporting data from the **Interaction Dashboard**
* Exporting the **Interaction Details Report by Segment**

### Create a General Alert

Steps to create a new General Alert:

1. Select the General Alerts tab and then select **+ New Alert** in the upper right corner.  
    <img src="../images/add-alert-rule.png" alt="Add Alert" title="Add Alert" style="border: 1px solid gray; zoom:70%;">

2. On the New General Alert panel, enter a **Name** and **Description** for the general alert.  
    <img src="../images/new-general-alert-rule.png" alt="Name and Description" title="Name and Description" style="border: 1px solid gray; zoom:70%;">

    The general alerts page displays.

3. Under Configuration Setup, choose a module from the following options.  
    <img src="..images/module-selection.png" alt="Choose Module" title="Choose Module" style="border: 1px solid gray; zoom:70%;">

    **After Call Work (ACW)**

    1. Select the Queues, Channels, and Duration.  
        <img src="../images/config-setup.png" alt="Config Setup" title="Config Setup" style="border: 1px solid gray; zoom:70%;">
    2. Select **+ Add an action** and choose an action.  
        <img src="../images/action-options.png" alt="Action Options" title="Action Options" style="border: 1px solid gray; zoom:70%;">  
        Based on your selected action, you can choose the following:

        Alert:  
        <img src="../images/acw-alert.png" alt="Alert" title="Alert" style="border: 1px solid gray; zoom:70%;">  

        Email:  
        <img src="../performance-management/images/acw-email.png" alt="Email" title="Email" style="border: 1px solid gray; zoom:70%;">  

    3. Select **Save**. A notification displays, and creates the alert.

    **Analytics** > **Interactions**

    1. Select and select the trigger.  
        <img src="../images/analytics-interactions-page.png" alt="Choose Trigger" title="Choose Trigger" style="border: 1px solid gray; zoom:70%;">

    2. Select the number of times the system exports data within the selected time interval.  
        <img src="../images/user-exports.png" alt="Export" title="Export" style="border: 1px solid gray; zoom:70%;">

    3. Select **+ Add an action** and choose an action.  
        <img src="../images/action-options.png" alt="Action Options" title="Action Options" style="border: 1px solid gray; zoom:70%;">

        Based on your selected action, you can choose the following:  

        **Alert**:  
        <img src="../images/alert-config.png" alt="Alert Config" title="Alert Config" style="border: 1px solid gray; zoom:70%;">

        **Email**:  
        <img src="../images/alert-email.png" alt="Email Config" title="Email Config" style="border: 1px solid gray; zoom:70%;">

    4. Select **Save**.  
        <img src="../images/analytics-interactions-page.png" alt="Choose Trigger" title="Choose Trigger" style="border: 1px solid gray; zoom:70%;">

    A notification displays, and creates the alert.

    **Voicemail in Agent Console**

    1. Select the Queues, the number of Voice Mails, and the Time Interval.  
        <img src="../images/console-voicemail-page.png" alt="Console Voicemail" title="Console Voicemail" style="border: 1px solid gray; zoom:70%;">

    2. Select **+ Add an action** and choose an action.  
        <img src="../images/action-options.png" alt="Action Options" title="Action Options" style="border: 1px solid gray; zoom:70%;">

        Based on your selected action, you can choose the following:  

        **Alert**:  
        <img src="../images/alert-config.png" alt="Alert Config" title="Alert Config" style="border: 1px solid gray; zoom:70%;">

        **Email**:  
        <img src="../images/alert-email.png" alt="Email Config" title="Email Config" style="border: 1px solid gray; zoom:70%;">

    3. Select **Save**. A notification appears, and creates the alert.

### Edit a General Alert

Steps to edit a general alert

1. Select **Edit**.  
    <img src="../images/edit-button-alert.png" alt="Edit Alert" title="Edit Alert" style="border: 1px solid gray; zoom:70%;">

2. Make the necessary changes to the general alert and select **Save**.  
    <img src="../images/revised-general-alert.png" alt="Save Edited Alert" title="Save Edited Alert" style="border: 1px solid gray; zoom:70%;">

    A confirmation message is displayed.

### Edit a General Alert Name

Steps to edit a service level name:

1. Select **Edit**.  
    <img src="../images/edit-button-alert.png" alt="Edit Alert" title="Edit Alert" style="border: 1px solid gray; zoom:70%;">

2. Edit the Alert Name or Description and select **Save**.  
    <img src="../images/alert-name-change.png" alt="Alert Name Change" title="Alert Name Change" style="border: 1px solid gray; zoom:70%;">

### Delete a General Alert

Steps to delete a General Alert:

1. Select **Delete**.  
    <img src="../images/delete-alert-rule.png" alt="Delete Alert" title="Delete Alert" style="border: 1px solid gray; zoom:70%;">

2. Confirm **Delete**.  
    <img src="../images/confirm-alert-delete.png" alt="Confirm Delete Alert" title="Confirm Delete Alert" style="border: 1px solid gray; zoom:70%;">

    A message appears, and deletes the alert.