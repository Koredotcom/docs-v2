# Manage Cases and Tasks

Agents effectively manage cases and tasks to ensure timely resolutions and high customer satisfaction—from the moment they receive assignments until they successfully resolve them.

## Manage Cases

A case represents a formal record of a specific situation or problem that requires management, attention, or resolution. It encompasses individual instances or records of events, issues, or requests that demand attention, tracking, and resolution.

Managing cases involves a systematic approach to ensure that all aspects of a case are addressed efficiently and effectively.

### Access Manage Cases

To access cases, navigate to **Contact Center AI > Case Management > Manage Cases > Cases**.  
<img src="../images/accessing-cases.png" alt="Cases" title="Cases" style="border: 1px solid gray; zoom:70%;">

Each case in the system includes the following details:

* **ID:** Displays a unique identifier ID of a case or service request.

* **Title:** Displays a brief title describing the service request. 

* **Customer:** Displays the name of the customer who requested the case.

* **Channels:** Displays the channel name through which the request is made (Web or Mobile Client).

* **Status:** Displays the current state of the case.

* **Priority:** Displays the priority level of the case (Critical, High, Medium, Low).

* **Last Updated:** Displays the last updated date and time of the case.

* **ETA:** Displays the estimated due date. It is calculated based on the due date and system date. If it is overdue, then it is due today or the target date.

* **Assignee:** Displays the name of the agent to whom the case is assigned (not applicable for Unassigned, My Cases, and Closed).

The users can access the additional menu items for the cases:

* **My Cases:** Cases assigned to the agent or back office employee.

* **My Tasks:** Tasks assigned to the agent or back office employee.

* **Closed:** Closed cases.

* **Search Cases:** Enables searching for specific cases based on field values or content (for example, case ID, status, priority, keywords in case descriptions or notes).

* **Download:** Downloads case management data in .CSV format.

* **Advance Search:** Helps in search cases using advance filters such as Case ID, Case Title, Customer Email, Customer Phone Number, Description, and Requester.
<img src="../images/advanced-search-cases.png" alt="advanced-search-cases" title="advanced-search-cases" style="border: 1px solid gray; zoom:70%;">

### Create Cases (Outside the Agent Console)

Steps to create a new case:

1. Access cases by navigating to **Contact Center AI > Case Management > Manage Cases > Cases**. The unresolved cases page displays.  
<img src="../images/manage-cases-new-case.png" alt="Create Cases" title="Create Cases" style="border: 1px solid gray; zoom:70%;">

2. Click **+ New Case**. the New Case dialog box is displayed with a default Case Number assigned.

    * In the **Requested by** field, enter the name of the customer.
    
    * Choose a **channel** type from the dropdown list. For the **Voice**, select the customer's **phone number** and **Country** from the dropdown list. For the **Web/Mobile Client**, enter the customer’s **email address**.

    * Select the Queue from the list.
    
    * Select the case template from the **Case Type** dropdown list to capture the details about the customer's issue or query. Templates are specific to the queues.
    
    * Select a **Due Date** to complete the case.
    
    * In the description, enter a **conversation summary** of the issue or service request.
    
    * Enter a **Title** for the case based on the issue raised by the customer.
    
    * Select the **(Critical/High/Medium/Low)** from the **Priority** level dropdown list. By default, the Status is set as Open.
    
    * Click **Save**. A success message is displayed, and a new case is created and assigned to an agent based on the case type assignment rules.
    <img src="../images/new-cases-queues.png" alt="New Case" title="New Case" style="border: 1px solid gray; zoom:70%;">

        !!! Note

            You must fill all the fields marked with a red asterisk (*).

### View Cases

The View cases feature provides a case management interface that lets you access and manage individual support cases. The page also displays case activities, including comments, events, and conversations. 

Case IDs and task IDs appear as links throughout the interface. Agents can view customer cases by selecting a case ID link. The case details open in a new tab. You can view cases and tasks in separate tabs for easy navigation. To return to the list view, select the Home icon.

The Conversations section supports email communication. You can create an email by selecting a recipient, queue, and template. All replies in the conversation thread appear in this section.

The conversation stays open until it times out or you manually close it.

!!! Note

    To send an email, you can use the respective customized email template.

<img src="../images/view-cases-tile.png" alt="Fields" title="Fields" style="border: 1px solid gray; zoom:70%;">

A supervisor can view various cases of the following statuses:

* **Unresolved:** Cases that are still active (work-in-progress) and not yet resolved or closed.

  By clicking any of the existing unresolved cases, you can view the following sections of a case, such as associated tasks, customer details, current status, and activity logs.  
    <img src="../images/manage-task-details.png" alt="Fields" title="Fields" style="border: 1px solid gray; zoom:70%;">

* **Unassigned:** Cases that are identified but not yet assigned to a case manager or team member.

* **All Cases:** Displays a comprehensive view of all cases within the system, regardless of their status.

* **My Cases:** Cases that are assigned to the agent or back office employee.

* **Closed:** Cases that are completed and closed.
    
* **Search Cases:** Search for cases based on various field values (for example, case ID, status, priority).

    !!! Note

        The supervisor can set the capacity limit of each case in the system for specific agents. The cases remain in the queue until an agent is available. 
    

### Transfer or Update Cases

The agent can transfer a case to another agent by selecting the **Assignee** from the dropdown list.  
<img src="../images/case-transfer.png" alt="Transfer" title="Transfer" style="border: 1px solid gray; zoom:70%;">

### Update or Resolve Case Status

To update or resolve cases:

1. Under the case details section, select the **Resolve** from the status dropdown list.  
<img src="../images/resolved-case-update.png" alt="Comments" title="Comments" style="border: 1px solid gray; zoom:70%;">

2. When the agent completes the review processes, the agent can view all case statuses (including Closed, Open, and Resolved) from **Dashboard > My Cases > Closed**.  
<img src="../images/closed-my-cases.png" alt="Closed Cases" title="Closed Cases" style="border: 1px solid gray; zoom:70%;">

3. To view the status of all closed cases on the dashboard and Manage Cases, see [Analyze Case Management](../case-management/case-analysis-dashboard.md){:target="_blank"}.  
<img src="../images/manage-all-cases-closed.png" alt="Managed Closed Cases" title="Managed Closed Cases" style="border: 1px solid gray; zoom:70%;">

4. Ensure all required actions and activities associated with the task are completed and changed to resolve with a proper comment before closing the case.

5. Review the case to ensure that all aspects of the requested issue are addressed and resolved satisfactorily. 

6. Ensure all processes and tasks are completed before marking the case and all associated tasks as **Resolved**, and then change the status of the case to **Closed**.

## Manage Tasks

Task management helps agents resolve cases efficiently by ensuring all necessary actions are completed. You can configure assignment rules for new cases to allocate tasks to agents or back office employees based on their availability, capacity, and skills. The system automatically sends notifications to agents when tasks are transferred or updated, providing current task information, comments, and status updates for streamlined management.

The Agent can perform the following actions:

* View and update all required fields in the assigned task (active or inactive).

* Provide comments on the task for tracking progress and providing context.

* Change the status of the task to the next level upon completion.

* Assign the task to itself, and can transfer the task to another agent or to another back office employee.

* Select another agent from the list and reassign the task.

* View all details of the task assigned to them, including any previous comments and status changes.

* Create, edit, or delete tasks until the case is closed.

### Task Notifications

Agents are notified through the case management system (Console) when any new tasks are assigned.  
<img src="../images/task-notifications.png" alt="task-notifications" title="task-notifications" style="border: 1px solid gray; zoom:70%;">

### Access Tasks

To access manage tasks, navigate to **Contact Center AI > Case Management > Manage Cases > Tasks**.  
<img src="../images/manage-cases-tasks.png" alt="Tasks" title="Tasks" style="border: 1px solid gray; zoom:70%;"> 
    
!!! note

    The agent can easily switch between custom tasks and task templates.

### Add New Task

To Add a New Task:

1. Click on any of the cases from the **Tasks** page.  
<img src="../images/add-new-task.png" alt="Add New Task" title="Add New Task" style="border: 1px solid gray; zoom:70%;">

2. Click the **+ Add New Task**. By default, the New Task dialog box is displayed with a default Task Number assigned.  
<img src="../images/new-task.png" alt="New Task" title="New Task" style="border: 1px solid gray; zoom:70%;">

3. Select the Task Type for the related case from the dropdown list provided.

4. Select a **Due Date** to complete the task.

5. Enter a case **Description** based on the conversation case summary.

6. Enter a case **Title** based on the issue raised by the customer.

7. Select the task **Priority (Critical, High, Medium, Low)** from the dropdown list. By default, the **Status** is set to **Open**.

8. Click **Save**. A success message of the task creation is displayed, and a new custom task is created and assigned to the agent. Please note that agent cannot create or edit tasks once a case is closed. The system prevents task creation if required fields are missing or invalid.

    !!! note

        All the red asterisk (*) marked fields are mandatory to fill up.
       

### View Tasks Components

This section displays the task description, task details, current status, and activity logs. Click any existing unresolved tasks to expand and view detailed information.  
<img src="../images/view-tasks.png" alt="View Tasks" title="View Tasks" style="border: 1px solid gray; zoom:70%;">

### Transfer Task

An agent can transfer a task to another agent by selecting the Assignee from the dropdown.

To assign a task:

1. Allot the task to the appropriate agent based on expertise, workload, and availability.

2. Set priority levels (High, Medium, Low, Emergency, and so on) for each task to focus efforts where they are most needed.

### Review Task Activity

Review task activity enables agents to understand the task or case history and the rationale for specific actions.

* To monitor a task:

    1. View task statuses, outstanding items, and overall workload, check the dashboard.  
    <img src="../images/task-monitor.png" alt="Dashboard Monitor" title="Dashboard Monitor" style="border: 1px solid gray; zoom:70%;">

    2. After tasks are completed, collect the feedback through comments and event details to review the progress of each task.

* To view task activity:

    1. In the **Activity** section, select the **Expand** icon.

    2. Click the **Comments** tab to view/add comments.  
    <img src="../images/view-activity.png" alt="Comments" title="Comments" style="border: 1px solid gray; zoom:70%;">

    3. Click **Save**. You can edit, delete, or add supported image files related to the task activity addressed.  
    <img src="../images/resolved-issue.png" alt="View Comments" title="View Comments" style="border: 1px solid gray; zoom:70%;">

    4. Click the **Events** tab to view all the events of a case that includes changes in status, updates, or actions taken by agents.  
    <img src="../images/activity-events.png" alt="Events" title="Events" style="border: 1px solid gray; zoom:70%;">

After you complete tasks, verify that all customer issues are resolved. Ensure that all comments and events include the appropriate details for each task. This information helps you track communication progress and captures relevant information throughout the case lifecycle for future reference.

### Update Task Status 

Under the Task Details, select the **Resolve** from the status dropdown.  
<img src="../images/closed-task.png" alt="Update Task Status" title="Update Task Status" style="border: 1px solid gray; zoom:70%;">

### Task Closure

Change each task's status from **Resolved** to **Closed** after you complete all required actions. After you complete all review processes, you can view the task status (such as Closed, Open, or Resolved) from the Agent **Dashboard > My Tasks > Closed**.  

<img src="../images/my-tasks-closed.png" alt="Task Closure" title="Task Closure" style="border: 1px solid gray; zoom:70%;">

