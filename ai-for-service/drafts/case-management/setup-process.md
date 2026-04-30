# Setup Process

The following sections describe how to set up case management, enable features, customize system registration, and validate configuration. 

1. **Sign Up the AI for service (XO11) Platform**

    Login to the AI for service (XO11) Platform registration page and fill out the sign-up form with your email address. After you complete registration, the AI for service (XO11) Platform automatically creates your workspace with default configurations. [Learn more](../getting-started/navigating-the-platform.md){:target="_blank"}.

2. **Enable Case Management**

    * **Provide Account ID:** When the registration process completes, note the unique Account ID to activate Case Management.

    * **Admin Access:** After the successful registration, you get admin access automatically. 

    * **Contact Support:** Reach out to the Kore Product team for assistance. [Learn more](https://support.kore.ai/){:target="_blank"}.

3. **Configure Queues and Skills**

    * **Queue Setup:** Create and customize queues as needed (contact center agents and back-office) for different teams. [Learn more](../contactcenter/routing/queues/queue-management.md){:target="_blank"}.

    * **Default or Custom:** Use default queues or customize your setup as per your requirements.

    * **Configure:** Set up agent skills for proper case routing (optional). [Learn more](../user-management/manage-users.md#skills){:target="_blank"}. 
    
    * **Customize:** Adjust operation hours to match your business schedule (for example, weekday hours or 24/7 hours of operation). [Learn more](../contactcenter/configurations/hours-of-operation/manage-hours-of-operation.md#hours-of-operation){:target="_blank"}.

4. **Add Channels** 

    To Configure your communication channels setup (Email, Chat, Voice), refer to [Learn more](../channels/adding-channels-to-your-bot.md){:target="_blank"}.

5. **Invite Team Members**

    * **Send Invitations:** Send email invitations to agents and supervisors.

    * **Assign Roles:** Assign appropriate roles queues, and skills. [Learn more](../user-management/manage-users.md#queues-skills).

    * **Case Capacity Limits:** Enable capacity limits for each agent as needed.

6. **Set Up Case Management Components**

    * **[Fields](./configure-cases.md#fields):** Create custom fields with different field formats for your business needs. Available formats include:

        * Drop-down lists
        * Multi-select options
        * Checkboxes
        * Phone numbers
        * Email addresses
        * URLs

    * **[Status](./configure-cases.md#status):** Create custom statuses under the status type to meet your business requirements. You can add custom statuses to the five default statuses  

    * **[Priority](../case-management/configure-cases.md#priority-configuration):** Create custom priorities with values to automatically sort case severity to supplement the four default priorities.  

    *  **[Task Templates](../case-management/configure-cases.md#task-templates-configuration):** You can create task templates to manage and automate customer support tasks. When you create a template, you can specify who should handle the task by choosing one of these assignment options:

        * Unassigned
        * Queue
        * Individual agent
        * Task creator

    * **Additional Fields:** Add the custom fields that your task requires. 

    * **[Case Templates](./configure-cases.md#case-templates-configuration):** Create case templates to help agents collect and reference information for different customer issues. Include the following elements:

        * Custom fields

            * Name
            * Description
            * Default assignment

        * Predefined tasks (if needed)

            * Unassigned
            * Queue
            * Individual agent
            * Case creator

7. **Set up Case Layout**

    Design an efficient case layout for the agent console. [Learn more](../console/manage-layout.md#adding-new-layout){:target="_blank"}. 

8. **Test Your Setup**

    Test your configuration process using the following scenarios.

9. **Email Channel**

    * Verify that all Case Management system components function correctly in the email channel, from case creation through resolution. 

    * Verify that the Case Management system integrates with the email system.

    * Set up an email account for receiving and sending test cases.

    * Prepare templates for case creation and communication.  

10. **Automation Process**

    * Create an automated flow.

    * Configure failover handling (When automation fails, the system automatically transfers the conversation to an agent in the default queue. The default queue includes: Agent 1 and Agent 2)

    * Create a new queue named Case Queue and add Agents 3 and 4.

    * Create a new [case template](./configure-cases.md#case-templates-configuration) with **Case Queue** as the default assignee.

11. **Conversation Process**

    * **Send Email**: The system processes the conversation through the default queue flow.

    * **Automation Failure**: When automation fails, the system routes the conversation to Agent 1 or Agent 2.

        * **Case Creation**: When Agent 1 creates a case, the system assigns it to Agent 3 or Agent 4. For more information, see [Learn more](../case-management/agent-console.md#create-a-new-case).

        * **Case Handling**: Agent 1 can close the conversation while the case remains open for the assigned agent to take further action.

12. **Set up User Permissions**

    Configure the following access controls (user management and role settings):

    * **[Manage Users](../user-management//manage-users.md#manage-users){:target="_blank"}**

    * **[User Attributes](../user-management//manage-users.md#attributes){:target="_blank"}**

13. **Configure case handling capacity and language settings**

    To configure case handling capacity and language settings: 
    
    1. Go to **User Management > Manage Users**.  
    <img src="../images/user-mgt.png" alt="Manage Users" title="Manage Users" style="border: 1px solid gray; zoom:70%;">

    2. In **Manage Users**, select the user the click on **three dots > right click > edit**.  
    <img src="../images/manage-users-edit.png" alt="Manage Users" title="Manage Users" style="border: 1px solid gray; zoom:70%;">

    3. On the **User Attributes** page, select **Cases**.  
    <img src="../images/attribute-edit-cases.png" alt="User Attributes" title="User Attributes" style="border: 1px solid gray; zoom:70%;">

14. Turn on the **Enable Case** toggle button to configure the **Maximum Case Handling Capacity** of the agent. 

    !!! Note

        Ensure that the maximum capacity for both **Case** and **Task** is limited to 15 each.

15. In the **Language Support**, select your desired language.

16. Select the **Proficiency Level** against the supported language selected.

17. Click **Update Changes**.