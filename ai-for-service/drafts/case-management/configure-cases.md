# Configure Cases

The Configure cases feature empowers administrators to tailor the system to manage customer inquiries, issues, and complaints effectively. Administrators can create and customize cases to improve communication between customers and the service team, ensuring timely and organized resolution.

This section guides you through the case configuration process, highlighting the key components that helps in adaptation to your specific business needs.

Administrators can configure the system to specific business needs through the following key components:

* **[Case Templates](#case-templates-configuration):** Agents can design customizable forms with predefined tasks to guide themselves through common issues, improving consistency and efficiency.

* **[Fields](#fields):** Create and manage custom data fields to help agents collect relevant information during case resolution.

* **[Task Templates](#task-templates-configuration):** Develop standardized task sets to help teams streamline the management of various cases.

* **[Status](#status):** Agents define and manage case statuses to track the progress of cases throughout their lifecycle.

* **[Priority](#priority-configuration):** Agents set up priority levels to determine the urgency and order for addressing corresponding cases and tasks.

* **[User Management](../user-management/manage-users.md#manage-users)**{:target="_blank"}: Add agents, assign roles, and set capacity limits for  channels and cases. Configure skills and manage agent queues.


## Fields

Fields represent pieces of data that agents need to collect for a case. The system includes default required fields and lets you to create custom fields with different formats, such as dropdowns, checkboxes, phone numbers, emails, and URLs, based on your business needs. 

Using the Fields configuration, you can create and manage the following fields and use them to customize case templates:

### Access Fields

To access fields, navigate to **Contact Center AI > Case Management > Configuration > Fields** and Select **Fields** in the left navigation panel. The Fields page displays listing system fields and management options.  
<img src="../images/config-fields.png" alt="Fields" title="Fields" style="border: 1px solid gray; zoom:70%;">

### Add New Field

To add a new field:

1. On the Fields page, click **+ New Field**. The General Settings pop-up page is displayed.  
<img src="../images/new-field-create.png" alt="New Field" title="New Field" style="border: 1px solid gray; zoom:70%;">

2. In the General settings pop-up, fill the following required information:

    * Enter the **Display Name** for the field.

    * Enter the **Name** of the general settings for the internal reference.

    * Enter a **Description**.

    * Select the **Field Format** from the dropdown.

    * Enter the **Placeholder**.

    * Turn on the toggle switch for **Read-only** option.

    * Enter the **Tooltip Text** to display when you hover over the field.

    * Click **Save**.  
    <img src="../images/general-settings.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

3. In the Data settings pop-up, enter the **Default Value** (based on the field format), and click **Save**.  
<img src="../images/data-settings.png" alt="Data Settings" title="Data Settings" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        For the **Number** field format, enter the value and press the Enter key.

4. In the Validation Settings, fill the following information:

    * Enter a message in the **Default Error Message**.

    * Select the value from the **Validate** dropdown.

    * Select the **Validation Rule** from the dropdown and write the rule value. You can also write the Custom Error Message for the validation rule.
    
    !!! Note
    
        You can add any number of validation rules.

    * Click **Save**.  
    <img src="../images/validation-settings.png" alt="Validation Settings" title="Validation Settings" style="border: 1px solid gray; zoom:70%;">

### Edit Fields

To edit fields:

1. On the **Fields** page, click the three dots icon (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) to edit the custom fields.  
<img src="../images/edit-fields.png" alt="Edit Fields" title="Edit Fields" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        In the **Fields** section, only the custom fields are editable. The system fields are not editable. 

2. Click **Edit**.  
<img src="../images/edit-field-page.png" alt="Edit Field Page" title="Edit Field Page" style="border: 1px solid gray; zoom:70%;">

3. Modify the required fields in the **General Settings**, **Data Settings**, and **Validation Settings**.

4. Click **Save**.

### Delete Fields

To delete fields:

1. On the **Fields** page, click the three dots (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) icon.  
<img src="../images/delete-fields.png" alt="Delete Field Page" title="Delete Field Page" style="border: 1px solid gray; zoom:70%;">

2. Click **Delete** to confirm. the following warning pop-up dialog box appears.  
<img src="../images/delete-confirm.png" alt="Delete Warning" title="Delete Warning" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        Deleting any fields affects the use case templates that are currently in use.

## Task Templates Configuration

The task template presents a predefined layout to agents for each case. It guides agents as they create or manage tasks. Task templates help you manage tasks by enabling prioritization, assignment, tracking, and automation across various tools. You can customize templates to set default assignments—such as unassigned, queue, individual agent, or task creator—and add extra fields for specific tasks.

### Access Task Templates

To access task templates, navigate to **Contact Center AI > Case Management > Configuration > Task Templates**. The **Task Templates** page displays the following items:

The **Task Templates** page displays the following items:

* **Name**: Displays the task request name.

* **Description**: Displays the purpose of the task.

* **Created by**: Displays the administrator's name who created the task template.

* **Status**: Displays the current status of the template (configured or other possible states).

* **Active**: Displays whether a task template is currently active or inactive. 

* **Search**: Allows you to search relevant task templates by name.  
<img src="../images/task-templates.png" alt="Task Templates" title="Task Templates" style="border: 1px solid gray; zoom:70%;">

### Create New Task Templates

Create and apply standardized tasks across multiple cases in Task Templates. This simplifies task management and maintains consistency.

To create a new task template:

1. On the **Task Templates** page, click **+ New Task Template**.  
<img src="../images/task-templates.png" alt="New Task Templates" title="New Task Templates" style="border: 1px solid gray; zoom:70%;">

2. On the following **New Task Template** page, complete the following **Basic Information** section:

    * Enter a **Name** for the task template.

    * Enter a brief **Description** about the task template.

    * Choose the **Default Assignee** from the following options:

        * **Unassigned**: By default, this configuration creates cases without assigning them to any individual.

        * **Queues**: As an administrator, you can create custom queues for different tasks. For example, one for contact center agents handling conversations and another for back-office agents.

        * **Individual Agent**: Assign to a specific agent automatically.

        * **Task Creator**: Assign the task to you if you have created it.  
        <img src="../images/new-task-template-basic-info.png" alt="New Task Template Basic Info" title="New Task Template Basic Info" style="border: 1px solid gray; zoom:70%;">
    

3. Click **Next** to move to the **New Task Template - Add Fields** page.  
<img src="../images/new-task-template-basic-info.png" alt="New Task Template" title="New Task Template" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        The administrator configures task assignment and escalation rules to ensure tasks are efficiently allocated to agents or back-office employees upon case creation, enabling timely case .

4. On the **Add Fields** page, complete the following **additional fields** section to ensure agents provide specific information. You can also mark these fields as required or optional:

    a. Click **+ Add Fields** to add **Custom** fields to the new task template.  
    <img src="../images/edit-add-fields.png" alt="Custom" title="Custom" style="border: 1px solid gray; zoom:70%;">

    !!! note

        You must assign every task template to a default assignee; either a queue, an individual agent, or an agent group.

    b. Click **Create** to finalize the task template.  
    <img src="../images/add-fields-create.png" alt="Create" title="Create" style="border: 1px solid gray; zoom:70%;">

### Edit Task Templates

To edit a new task:

1. On the **Task Templates** page, click the three dots (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) icon to edit the custom task template.  
<img src="../images/edit-task-template.png" alt="Edit Task Template" title="Edit Task Template" style="border: 1px solid gray; zoom:70%;">

2. Select **Edit** to modify the basic information.  
<img src="../images/edit-basic-info.png" alt="Edit Basic Info" title="Edit Basic Info" style="border: 1px solid gray; zoom:70%;">

3. Modify the required fields or add new fields if needed.  
<img src="../images/edit-add-fields.png" alt="Modify" title="Modify" style="border: 1px solid gray; zoom:70%;">

4. Click **Update**.

### Delete Task Templates

To delete a task template, on the **Task Templates** page, click the three dots (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) icon to delete the custom task template and click **Delete**.  
<img src="../images/delete-task-template.png" alt="Delete Task Template" title="Delete Task Template" style="border: 1px solid gray; zoom:70%;"> 

!!! Note

    Only administrators can deactivate cases and restrict agent access to case types. You cannot delete any cases as this affects associated templates that are currently in use.

## Case Templates Configuration

Case templates are pre-designed forms that help agents gather and organize information for various customer issues. You can create templates that include a name, description, and default assignment (unassigned, queue, individual agent, or case creator). These templates include default fields, and you can add custom fields as needed. You can also define specific tasks that agents must complete within each case template.

You can view a list of all cases, including details of their active or inactive status, as created by the administrator. Use filters or the search function to locate specific case types.

### Access Case Templates

To access case templates, navigate to **Contact Center AI > Case Management > Configuration > Case Templates**. The **Case Templates** displays the following attributes:

* **Name:** Displays the unique identifier case template name, used to label and categorize cases (see agents).

* **Description:** Displays the description of customer issues found in each case.

* **Created by:** Displays the name of the administrator who created the template.

* **Status:** Displays the flows or dialogs status that are draft or published.

* **Active:** By default, a case template remains in active mode. If a case template is active and the administrator deactivates it, a warning message appears, indicating that agents can no longer use it. However, if the template is inactive, agents cannot select or apply it to new cases, but it remains in the system for future use.

* **Search:** Allows searching for templates by name only.  
<img src="../images/case-templates.png" alt="Case Template" title="Case Template" style="border: 1px solid gray; zoom:70%;">

### Create a New Case Template

To create a new case template:

1. On the **Case Templates** page, click **+ New Case Template** and complete the **Basic Information** section in the **New Case** panel.  
<img src="../images/case-templates-creation.png" alt="New Case Template" title="New Case Template" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        Agents use a case template as a form to reference for different types of customer issues. Agents can use it to configure and manage cases effectively.


    a. Enter a **Name** for the new case type for easy identification.

    b. Define the Case ID for the case template.  

    !!! Note

        You can not delete the case ID once it is created.

    b. Enter a brief **Description** explaining the template's purpose.

    c. Based on your preferences, choose a **Default Assignee** queues for individual agents based on your preferences. 

    * **Unassigned**: By default, the new case is not automatically assigned upon creation.
            
    * **Queues**: Administrators can create queues for specific agent groups and assign them to particular cases. They can customize queues or use default ones, such as a queue for contact center agents and another for back-office employees.
            
        !!! Note

            You should configure a fifteen-case limit per agent. If the case limit is exceeded, the system keeps additional cases in the queue.

    * **Individual Agent**: The cases automatically get assigned to a specific individual agent.

    * **Case Creator**: The cases assigned to the user who has created and initiated the task.  
    <img src="../images/create-a-new-case-template.png" alt="Case Fields" title="Case Fields" style="border: 1px solid gray; zoom:70%;">  

2. Click **Next** to proceed to the following **Case Fields** page. Case fields ensure that agents provide data for specific information, and mark all the newly added fields as required or not for validation. Ensure that the fields where agents enter data are marked as required. Adding more than one field is allowed.  
<img src="../images/add-case-fields.png" alt="Case Fields" title="Case Fields" style="border: 1px solid gray; zoom:70%;">        

To add fields:

1. Click **+ Add Fields**.  
<img src="../images/add-case-fields.png" alt="Add Fields" title="Add Fields" style="border: 1px solid gray; zoom:70%;">

2. Enter details in the following fields:

    * **Field Name:** Specify the Field Name, such as Customer Name, Issue Description.

    * **Type:** Specify agent-created (Custom) or admin-defined (System).

    * **Validation:** Mark the essential or newly added fields as required or not.

    * **Action:** Delete if the specified field is not required.

3. Click **Next** to proceed to the **Task** page.  
<img src="../images/new-case-next.png" alt="New Case Task" title="New Case Task" style="border: 1px solid gray; zoom:70%;">

4. On the **Task Page**, enable the **Custom Task** toggle switch if required for agents who can create their custom tasks in a case.

5. Click **+ Add Task** from the **Add Task** menu.

6. Select the **Task Name** from the dropdown.

7. Click **Create**.  
<img src="../images/new-case-task.png" alt="Add Task" title="Add Task" style="border: 1px solid gray; zoom:70%;">

### Edit Case Templates

To edit new case template:

1. On the **Case Templates** page, click the three dots (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) icon to edit the custom case templates.  
<img src="../images/edit-case-temlate.png" alt="Edit Case Template" title="Edit Case Template" style="border: 1px solid gray; zoom:70%;">

2. Click **Edit** to modify **Basic Information**, **Name**, and **Description**, and click **Next**.  
<img src="../images/edit-basic-info-case.png" alt="Modify basic Info" title="Edit Case Fields" style="border: 1px solid gray; zoom:70%;">

3. Modify **Case Fields** (**Field Name**, **Type**, **Validation**, or **Action**), and click **Next**.  
<img src="../images/case-fields-edit.png" alt="Edit Case Fields" title="Edit Case Fields" style="border: 1px solid gray; zoom:70%;">

4. Modify **Task** Fields (**Custom Task**, **Add Task,** or **+Add Task**) in the **Task Name** search list to add new fields if required, and click **Update**.  
<img src="../images/edit-task-case.png" alt="Modify Task" title="Modify Task" style="border: 1px solid gray; zoom:70%;">

### Delete Case Templates

To delete the case template, on the **Case Templates** page, click the three dots (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) icon and then click **Delete** to confirm.  
<img src="../images/delete-case-confirm.png" alt="Delete Case Template" title="Delete Case Template" style="border: 1px solid gray; zoom:70%;">

## Status

Status configuration helps you track the progress and current state of cases and tasks, ensuring effective and efficient management. The system provides five default statuses (Progress, On Hold, Resolved, and Closed), but you can create and manage both default and custom statuses to meet your business requirements. This configuration contains the following statues:

* **System Statuses:** System statuses are predefined and you cannot edit them.

* **Custom Statuses:** Created by administrators to meet specific business needs, which you can edit, activate or deactivate, or delete as needed.

### Access Status

To access case management, navigate to **Contact Center AI > Case Management > Configuration > Status**.  
<img src="../images/new-status-access.png" alt="New Status" title="New Status" style="border: 1px solid gray; zoom:70%;">

### Manage Existing Status

System statuses cannot be edited. However, you can activate or deactivate both Custom and System statuses using the toggle switch. Inactive statuses become unavailable for use elsewhere.

### Add New Status

To add a new status:

1. On the **Status** page, click **+ New Status**.  
<img src="../images/new-status-access.png" alt="Status" title="Status" style="border: 1px solid gray; zoom:70%;">

2. On the **New Status** page, enter details in the following sections:

    a. Enter the **Name** for the status.  
    <img src="../images/new-status-fields.png" alt="New Status" title="New Status" style="border: 1px solid gray; zoom:70%;">

    b. From the **Status Type** dropdown, select one of the following:

    * Open

    * In Progress

    * On Hold

    * Resolved

    * Closed

    c. Add a **Description** to provide context or explanation for the status's purpose (optional).

    d. Enable the **Status Settings** to make the status available for agents by clicking the toggle switch.

3. Click **Save** to add the new status. By default, new statuses are set to **Active**.

### Tips for Status Configuration

* Create specific statuses for internal use (for example, **Pending Customer Response** instead of generic **On Hold**).

* Consider creating statuses for different case types or stages (for example, **Reopened** for resolved cases that need further attention).

### Edit Status

To edit a custom status:

1. On the **Status** page, click the three dots (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) icon to edit the existing status tasks.  
<img src="../images/edit-status-edit.png" alt="Status" title="Status" style="border: 1px solid gray; zoom:70%;">

2. Click **Edit**. The following **Edit Status** dialog page appears.  
<img src="../images/edit-status-fields.png" alt="Edit Status" title="Edit Status" style="border: 1px solid gray; zoom:70%;">

3. Turn on the **Enabled** toggle switch to make it available for agents.

4. Click **Save** after editing the required fields.

### Delete Status

To delete status:

1. On the **Status** page, click the three dots (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) icon to delete the existing status fields.  
<img src="../images/edit-status-delete.png" alt="Delete" title="Delete" style="border: 1px solid gray; zoom:70%;">

2. Click **Delete** to confirm.  
<img src="../images/delete-status.png" alt="Delete Status" title="Delete Status" style="border: 1px solid gray; zoom:70%;">

## Priority Configuration

Priority configuration in case management helps agents determine which cases and tasks need immediate attention. The system includes four priorities (Low, Medium, High, and Critical). Administrators can create custom priorities based on specific business requirements. There are two categories of priorities: 

   * **System Priorities:** You cannot edit the system-defined statuses, which are predefined. 

   * **Custom Priorities:** Created by administrators to meet specific business needs.

### Access Priority Configuration

To access case management Priority, navigate to **Contact Center AI > Case Management > Configuration > Priority**.  
<img src="../images/new-priority- access.png" alt="Priority" title="Priority" style="border: 1px solid gray; zoom:70%;">

### Manage Existing Priorities

You cannot edit system priorities, but you can deactivate them using the toggle switch. The **Priority** page lists existing system and custom priorities and is automatically sorted based on their assigned value.

### Adding a New Priority

To add a new priority:

1. On the **Priority** page, click **+ New Priority**.  
<img src="../images/new-priority- access.png" alt="Priority" title="Priority" style="border: 1px solid gray; zoom:70%;">

2. In the **New Priority** page, enter details in the following sections:

    a. Enter the **Name** for the priority.  
    <img src="../images/new-priority-enabled.png" alt="New Priority" title="New Priority" style="border: 1px solid gray; zoom:70%;">

    b. Add a **Description** to provide context or explanation for the priority's purpose.

    c. Enter a **Value** reflecting the priority numerically (1-15).

    d. Select an appropriate **Color** as a visual indicator of priority.

    e. Turn on the **Priority Status** toggle switch to make it available to agents. 

3. Click **Save**. The new priority gets listed on the **Priority** page, and will be **Active** by default.

!!! Tips

    * Use a consistent numbering system for priority values (for example, increments of 5 or 10) to allow for easy insertion of new priorities in the future.

    * Choose distinct colors for each priority level to make them easily distinguishable. 

    * Consider your business needs when creating custom priorities (for example, you might need an **Emergency** priority above **Critical**).

### Edit Priority

To edit custom priority cases:

1. On the **Priority** page, click the three dots (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) icon to edit the existing priority tasks.  
<img src="../images/new-priority-enabled.png" alt="New Priority" title="New Priority" style="border: 1px solid gray; zoom:70%;">

2. Click **Edit**.  
<img src="../images/edit-priority.png" alt="Edit Priority" title="Edit Priority" style="border: 1px solid gray; zoom:70%;">

3. Click **Save**.

### Delete Priority

To delete the custom priority status of cases:

1. On the **Priority** page, click the three dots (<img src="../images/ellipsis-icon.png" style="zoom:50%;"></img>) icon to delete the existing status fields.  
<img src="../images/delete-priority.png" alt="Edit Priority" title="Edit Priority" style="border: 1px solid gray; zoom:70%;">

2. Click **Delete** to remove.  
<img src="../images/delete-custom-priority.png" alt="Delete Priority" title="Delete Priority" style="border: 1px solid gray; zoom:70%;">

## Integrations

This section helps in integrating messaging apps to configure for the notifications.

To access case management integrations, 

1. Navigate to **Contact Center AI > Case Management > Configuration > Priority** and select **All**. This displays all the apps available to integrate.

    <img src="../images/Integration-all.png" alt="Delete Priority" title="Delete Priority" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        At present, only Slack is available to integrate.

2. Select the **app > Configurations** and follow the instructions.

    <img src="../images/Slack-configuration.png" alt="Delete Priority" title="Delete Priority" style="border: 1px solid gray; zoom:70%;">

3. Click **Save**.