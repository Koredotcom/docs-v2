# Enable your AI Chatbot to Create a Ticket in Zendesk

You can streamline your customer support experience with our AI chatbot. Your end-users interact with the chatbot to resolve their queries. The assistant can tackle straightforward questions directly in the chat, saving users time and effort. For complex issues requiring more time or expertise or during non-office hours, the assistant can effortlessly guide users in creating a Zendesk support ticket. It can prompt users to collect the required information and create a ticket or convert the ongoing conversation into a ticket, keeping the conversation context in mind.

## Getting Started

The XO Platform makes it simple to link your Zendesk account and add ticket management capabilities to your chatbot using pre-built templates. It automatically sets up dialog tasks for each template. 

The entire process consists of the following steps:
   
1. [Link your Zendesk account](#step-1-link-your-zendesk-account).
2. [Install the Create a Ticket Template for Zendesk](#step-2-install-the-create-a-ticket-template-for-zendesk).
3. [Train and Test the Dialog Tasks](#step-3-train-the-chatbot-for-the-dialog-task-and-test-it).

### Prerequisites

Before you start the linking process, keep the following information handy:

* Zendesk account credentials.
* User subdomain, username/email, password, and API token of your Zendesk account.

### Step 1: Link your Zendesk Account

1. Click **Marketplace** in the left navigation and select **Zendesk** Integration. The Zendesk Integration dialog box is displayed.
<img src="../images/marketplace_zendesk.png" alt="marketplace" title="marketplace" style="border: 1px solid gray; zoom:70%;">
2. Click **Install** at the top-right corner. The Instructions tab is highlighted.  
<img src="../images/zendesk_install.png" alt="zendesk_install" title="zendesk_install" style="border: 1px solid gray; zoom:70%;">
3. Switch to the **Authenticate and Install** tab - click the tab. The Authorization Details section is displayed.
4. In the section, pre-authorize the integration using the Basic Auth option as follows:
    1. Select **Pre-authorize the Integration** and **Basic Auth** options.  
    <img src="../images/authorisation.png" alt="authorization" title="authorization" style="border: 1px solid gray; zoom:70%;">

    2. Under the Basic Auth section, enter the following information specific to your Zendesk account:
        * **User Sub Domain**: The instance name of your Zendesk account.
        * **User Email**: The username or email of the Zendesk account. To authenticate the Zendesk account, you must enter /token after the email address, for example, `john@example.com/token`.
        * **API Token**: The password token of the Zendesk account.
    3. Click **Proceed** at the top-right corner of the dialog box.
5. The Integration Installed Successfully confirmation is displayed.  
<img src="../images/integration-installed-successfully.png" alt="successful_message" title="successful_message" style="border: 1px solid gray; zoom:70%;">

### Step 2: Install the 'Create a Ticket' Template for Zendesk

1. Go to the **Marketplace** and select **Create a Ticket for Zendesk** Dialog Template.  
<img src="../images/marketplace.png" alt="marketplace" title="marketplace" style="border: 1px solid gray; zoom:70%;">

2. The **Create a Ticket** installation dialog box is displayed. Click **Install** to begin the installation.  
<img src="../images/create-ticket-zendesk.png" alt="create_ticket" title="create_a_ticket" style="border: 1px solid gray; zoom:70%;">

3. Enter the following details in the Create a Ticket dialog task.
    1. **Name:** Name of the dialog.
    2. **Description:** Description of the dialog.
    3. **Utterances:** Add utterances in all ways you expect customers to articulate a request, which will trigger the dialog.
    4. **Channel Experiences:** Define the experiences you want for this dialog for the channel types.
    5. **Create a Ticket Setup:** Define the Create a Ticket setup and the information to be captured.
        * Follow up actions: Define the zendesk follow up actions and information that needs to be captured. For example,  live agent assistance while creating tickets during business hours.
        * Ticket Details: Define if any particular details need  to be captured, such as an order ID or booking ID.
    <img src="../images/install-template-zendesk.png" alt="install_template" title="install_template" style="border: 1px solid gray; zoom:70%;">

4. Click **Finish**.
5. Once the template is installed, a dialog task is auto-created. You can find it in the list of dialogs in **Automation AI** > **Use Cases** > **Dialogs**.  
<img src="../images/dialogs-zendesk.png" alt="create_dialog" title="create_dialog" style="border: 1px solid gray; zoom:70%;">

### Step 3: Train the Chatbot for the Dialog Task and Test it

1. Click the **Test** icon.
2. Choose a conversation type (Voice Conversation or Chat Conversation) to test the flow.
3. Click **Train** to complete the untrained utterances.
4. Follow the prompts in the App console to create a ticket, as shown below.  
<img src="../images/appconsole-zendesk.png" alt="app_console" title="app_console" style="border: 1px solid gray; zoom:70%;">

5. Enter all the details when prompted by the Chatbot, as shown below.  
<img src="../images/view-ticket-details-zendesk.png" alt="ticket_details" title="ticket_details" style="border: 1px solid gray; zoom:70%;">
 
6. A new Ticket is created in Zendesk. To view the Ticket, click **View Ticket Details** on the app console. You will be redirected to Zendesk. Login to view the Ticket.  
<img src="../images/zendesk.png" alt="zendesk" title="zendesk" style="border: 1px solid gray; zoom:70%;">

7. [Publish your App](../../deploy/publishing-bot.md) so the end users can use this capability.
