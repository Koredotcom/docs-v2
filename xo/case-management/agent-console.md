# Agent Console

The Agent console displays essential information for agents who use the Case Management Console. It focuses on initiating customer interactions, creating cases, and managing cases and tasks. The console streamlines the case management workflow to ensure quick response times and effective issue resolution.

## Prerequisites

Before managing cases and tasks, ensure the following prerequisites are completed:

* Set up a Channel and Chat or Voice AI Agent with Customer Support dialogs. 

* Customers must have the option to select an agent during AI Agent or Voice interactions or conversations.

* The customer should select the agent transfer option to initiate agent interaction.

## Create a case

The system creates cases based on the configuration defined in Case Templates. You can handle a customer case using two methods: Automated or On-Demand.

### Automated

The process of automated case creation are configured using public APIs for channels such as emails and voicemails. Use these public APIs to get case details, update case details, and delete case details. 

!!! Note

    When automated case creation is enabled, every qualified conversation automatically derives the case data, and thus, a case is created.

### On demand

On-demand refers to the live conversation with a customer through any channel (email, chat, or voice). The agent reviews the customer's issue or query and creates a case accordingly. Agents and Supervisors can create cases in the following ways:

* Offline Conversation

* Live Conversation

!!! Note

    Administrators can enable the on demand feature in the **Manage Cases** section and assign it to a specific agent instead of enabling it for everyone.

## Offline Conversation

Agents and supervisors can manually create cases based on information that are'nt linked to real-time interaction, such as Emails, Voice Calls, or Chat messages. This process does not require an active conversation with the customer or access to the console that requires to manage customer issues and inquiries even outside of live interactions.

The agents can create a case using the following processes: 

* [Agent Console](#create-a-new-case)

* [Manage Cases and Tasks](./manage-cases-and-tasks.md#create-cases-outside-the-agent-console)

### Create a New Case

Steps to create a new case:

1. Navigate to **Contact Center AI** > **Agent Console**. The Agent Console displays.  
<img src="../images/console-page.png" alt="Agent Console" title="Agent Console" style="border: 1px solid gray; zoom:70%;">

2. Click the **+** icon, and then click **Create Case**. The New Case dialog box is displayed with a Case Number assigned along with the form.  
<img src="../images/manage-new-case-unassigned.png" alt="Create Case" title="Create Case" style="border: 1px solid gray; zoom:70%;">

3. In the **Requested by** field, enter the Name of the customer who has requested to create a new case, for an Issue, Inquiry, Complaint, or a Service request.

4. Select a communication channel from the **Channels dropdown list (Voice** or **Web** or **Mobile Client**).

    * **Voice**: Select the Phone Number from the dropdown list, and add the selected country phone number that a customer belongs to.

    * **Web/Mobile Client**: Enter the **Customer’s Email** address.

5. Select the appropriate case template from the **Case Type** dropdown list, and complete it by capturing the details about the customer's issue or query.

6. Enter the case **Title** based on the issue raised by the customer.

7. Enter the case **Description** based on the conversation summary.

8. Select the **Due Date** for the case.

9. Select the case **Priority (Critical, High, Medium, Low)** from the dropdown list.

10. By default, the **Status** is set to **Open**.

11. Select the appropriate options in the **Sample** field to support the new case.

12. Click **Save**. A success message is displayed, and a new case is created. 

!!! Note

    The created case gets assigned to agents based on the case type assignment rules.

## Live Conversation

Agents create and track cases during real-time interactions via email, voice, or chat, enabling them to address customer issues promptly while the conversation is ongoing.

## Agent Transfer

When a customer requests an agent, the system transfers the conversation by initiating a transfer workflow.  
<img src="../images/ai-agent-transfer.png" alt="Comments" title="Comments" style="border: 1px solid gray; zoom:70%;">

* **Notification Alert**

    The agent receives a notification in the agent console while a conversation is transferred to an agent. [Learn more](https://docs.kore.ai/xo/console/managing-incoming-interactions/){:target="_blank"}.  
    <img src="../images/agent-transfer.png" alt="Notification Alert" title="Notification Alert" style="border: 1px solid gray; zoom:70%;">

* **Identify the Issue or Inquiry**

    When the system sends a notification, the agent reviews the conversation history to identify customer issues or inquiries. Because customers may have multiple issues, agents can use the search function to locate specific issues.
    
    Case IDs and task IDs appear as links throughout the interface. In the agent console, agents can view customer cases by selecting a case ID link. The case details open in a new tab. You can view cases and tasks in separate tabs for easy navigation. To return to the list view, select the Home icon.
    
    The system supports up to 10 open tabs for cases and tasks combined. This lets you view multiple items at the same time and compare cases or monitor status during live customer conversations.

    **Tip:** Based on the conversations, the agent provides relevant information to customers or suggests actions to resolve the issue. For example: Refrigerator Cooling Issue. The agent suggests troubleshooting steps based on the customer details received.

<img src="../images/Issues-search-bar.png" alt="Comments" title="Comments" style="border: 1px solid gray; zoom:70%;">
    
* **Follow-up Questions**

    To further troubleshoot, the agent requires additional details from the customer that includes:

    * **Troubleshooting Questions:** The agent provides additional details to address the issues based on the use cases or queries raised. For example, the Brand Name, Model Number, Part Issue, Image of the Defective part, Sample [Attachments](https://docs.kore.ai/xo/console/interacting-with-customers/?h=attachment#sending-attachments-to-customers){:target="_blank"}, [Agent Forms](../contactcenter/configurations/agent-forms/configure-agent-forms.md){:target="_blank"}, [Add Link](../console/interacting-with-customers.md#adddelete-hyperlinks-in-the-text-editor){:target="_blank"} (Web or Email address), and Create New Case.

    * **Create a New Case**: If additional information or follow-up is required, the agent can create a new case by clicking the New Case icon, using the details gathered from the customer.  
    <img src="../images/create-new-case.png" alt="Comments" title="Comments" style="border: 1px solid gray; zoom:70%;">

### Case Creation via Live Interaction Pane

To create a new case through live interaction:

1. Click the **New Case**.  
<img src="../images/new-case-icon.png" style="zoom:100%;"></img> icon. The **New Case** dialog box displays with a case number along with the form.

2. Select the appropriate case template from the **Case Type** dropdown list, and capture the details of the customer's issue or query to complete it.

3. Enter the case **Title** based on the issue raised by the customer.

4. Enter the case **Description** based on the conversation summary. 

5. Select the **Due Date** for the case.

6. Select the case **Priority** (**Critical**, **High**, **Medium**, **Low**) from the dropdown list. By default, the **Status** is set to **Open**. 

7. Select the appropriate options in the **Sample** field to support the new case.

8. Click **Save**. A success message is displayed, and a new case is created and assigned to an agent.  
<img src="../images/new-case-number.png" alt="New Case" title="New Case" style="border: 1px solid gray; zoom:70%;">

### Case Notification Alert

* **Alert Notification for Agent:** The system notifies the agent as soon as a case is assigned to them. 

* **Click the bell notification:** Icon to view all previous notifications.
       
### Case Creation During a Voice Call

To create a new case during the voice call:

1. Click the **New Case** icon shown on the voice call screen to open a case form that includes all required conversation details, such as the transcript and relevant customer information.  
<img src="../images/voice-call.png" alt="Voice Call Screen" title="Voice Call Screen" style="border: 1px solid gray; zoom:70%;">

2. Select the appropriate case template from the **Case Type** dropdown list. The template is displayed with the **Assigned to**, **Title**, and **Description** details.  
<img src="../images/new-case-template.png" alt="Case Template" title="Case Template" style="border: 1px solid gray; zoom:70%;">

3. Select the (**Critical**, **High**, **Medium**, **Low**) from the Priority dropdown list. By default, the **Status** is set to **Open**.

4. From the **Account Type** dropdown list, select the type of account associated with the case.

5. From the **Product Type** dropdown list, select the type or category of the product (or service) related to the case.

6. Click **Save** to submit the case.

### Case Creation via Email

The agent can use this feature to create a case via email while interacting with the customer. 

To create a case via email:

1. Navigate to **Contact Center AI > Flows & Channels > Digital**.  
<img src="../images/digital-navigation.png" alt="Digital" title="Digital" style="border: 1px solid gray; zoom:70%;">

2. Select **Email** to create a new email domain. The created domain appears.
<img src="../images/digital-email.png" alt="Domain Email" title="Domain Email" style="border: 1px solid gray; zoom:70%;">

3. Click **New Email Address** to register an email address for the domain. [Learn more](../channels/add-email-channel.md#create-a-kore-domain-email-address){:target="_blank"}.  
<img src="../images/domain-email.png" alt="Domain Email" title="Domain Email" style="border: 1px solid gray; zoom:70%;">

4. Attach a **Flow Experience** to your **Custom** or **Kore domain Email Address**.

5. Publish your Custom or Kore domain Email Address. [Learn More](../channels/add-email-channel.md#publish-kore-domain-email-addresses){:target="_blank"}.

6. Compose an **Email** from your mailbox with the required information and click **Send**. The agent receives an email transfer acceptance response and initiates the customer interaction.  
<img src="../images/customer-interaction.png" alt="Customer Interaction" title="Customer Interaction" style="border: 1px solid gray; zoom:70%;">

7. Click **Reply** to gather information about the issue by interacting with the customer.  
<img src="../images/customer-reply.png" alt="Customer Reply" title="Customer Reply" style="border: 1px solid gray; zoom:70%;">

8. Click the **New Case** icon to register a new case or service request. [Learn more](#create-a-new-case).  
<img src="../images/transfer-call.png" alt="Comments" title="Comments" style="border: 1px solid gray; zoom:70%;">

9. Use the **Transfer** option to forward the **Email** conversation to another agent.  
<img src="../images/call-transfer.png" alt="Comments" title="Comments" style="border: 1px solid gray; zoom:70%;">

10. Select **End** to close the conversation after you register or address the issue.