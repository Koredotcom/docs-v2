# Using the Dialog Builder

The Dialog Builder is where you can create your Dialog Tasks, from end-to-end. This is an in-depth article on how to use this tool.


## Create a Dialog Task

To create a dialog task, you must have already created an app to add a dialog task to. 

!!! Note

     For optimal performance, limit the number of dialog tasks to 50 or fewer. Exceeding this number may lead to sluggish UI response and increased latency.

Steps to add a dialog task:

1. Open the app for which you want to create the dialog task.
2. Navigate to **Automation AI** on the left menu.
3. The Automation menu opens, and the **Dialogs** page is open by default.
4. On the Dialogs page, click the **Create Dialog** button.

    <img src="../images/using-dialog-builder-img1-create-dialog.png" alt="Dialogs" title="Dialogs" style="border:1px solid gray;zoom:60%;">

5. The **Create Dialog** window appears; from here, you can **Create a dialog from scratch**, **Generate with AI** to create a dialog, or **Marketplace** with integrations to create a dialog.
6. Click on **Start From Scratch.**

    <img src="../images/using-dialog-builder-img2-create-dialog-scratch.png" alt="Start dialog building From Scratch" title="Start dialog building From Scratch" style="border:1px solid gray;zoom:60%;">

7. Provide an **Intent Name** (mandatory) and **Intent Description** (optional but recommended). Click **+Add** to add more descriptions. You can add up to five secondary descriptions in addition to the main description. Each unique description broadens semantic coverage and improves intent shortlisting and detection accuracy.  
<img src="../images/using-dialog-builder-img3-create-dialog-scratch-details.png" alt="Start dialog building From Scratch - Details" title="Start dialog building From Scratch - Details" style="border:1px solid gray;zoom:60%;">
    
    !!! Note 
        
        Non utf 8 characters are not supported for intent display name.

8. You can choose whether the new dialog will be available to the end users **(Customer Use Case)**,  agents **(Agent AI Use Case)**, or both.
9. Under **Intent Settings**, set options for the task to be independent, such as a **Sub-intent dialog** or **Hide it from Help**.
10. Under **Analytics - Containment type**, you can choose between **Abandonment as Self-Service** and **Abandonment as Drop Off**.
11. Optionally, you can adjust **Conversation Context**, set **Intent Preconditions**, or define **Context Output**.
12. Click **Proceed**.  


The Dialog Builder is displayed with the canvas containing the root intent, which shows the Dialog Name and Description. Now, you can add nodes and establish transitions between these nodes for your workflow.


<img src="../images/using-dialog-builder-img4-scratch-dialog-created.png" alt="Dialog Builder canvas with Root Intent" title="Dialog Builder canvas with Root Intent" style="border:1px solid gray;zoom:60%;">

[Click here to know about Nodes & Connections](./node-types/nodes-transitions.md){:target="_blank"}.

## Auto-Generated Dialog Tasks 



This feature auto-generates dialog flows using the app’s purpose and intent description provided during task creation. The Platform uses **Generative AI** or **Pre Built Templates** to create suitable Dialog Tasks for Conversation Design, Logic Building, and Training by including the required nodes in the flow. This helps simplify and shorten the development process and suggests possible pathways that developers might not think otherwise.

The nodes and the flow for the Business Logic are automatically built for your conversation, and you only need to configure the flow transition.

The Platform auto-defines the _Entities, Prompts, Error Prompts, Bot Action nodes, Service Tasks, Request Definition_, and other parameters.


### Auto-Generate Dialog Tasks using AI

Right after creating your dialog task, you will see a **Conversation Preview** window. In this window, you can view mock conversations and convert them into dialog flows for every intent.


1. Click the **Generate with AI** option.

    <img src="../images/using-dialog-builder-img5-create-dialog-genai.png" alt="Select Gen Ai" title="Select Gen Ai" style="border:1px solid gray;zoom:60%;">

2. Provide **Intent Name** (mandatory) and a meaningful **Description** that states the purpose of the Dialog Task, and click **Generate**.  
    
    !!!Note
        
        Non utf 8 characters are not supported for intent display name.

    <img src="../images/using-dialog-builder-img6-create-dialog-genai-generate.png" alt="Gen Ai - Generate" title="Gen Ai - Generate" style="border:1px solid gray;zoom:60%;">

3. You can see a Preview of the AI generated dialog flow.

    <img src="../images/using-dialog-builder-img7-create-dialog-genai-preview.png" alt="Preview of AI generated dialog" title="Preview of AI generated dialog" style="border:1px solid gray;zoom:60%;">

4. You can regenerate the dialog by changing the description and clicking **Regenerate**.

    !!! Note 
 
	    Providing a relevant description is recommended. If no description is provided, a dialog will be generated, but only with **the error prompt**. 
 
    <img src="../images/using-dialog-builder-img8-create-dialog-genai-regenerate.png" alt="Regenerate AI generated dialog" title="Regenerate AI generated dialog" style="border:1px solid gray;zoom:60%;"> 

5. Click **Proceed** when you are satisfied with the preview.  
 
    <img src="../images/using-dialog-builder-img9-create-dialog-genai-proceed.png" alt="Gen Ai Dialog Preview - Proceed" title="Gen Ai Dialog Preview - Proceed" style="border:1px solid gray;zoom:60%;">  
 
The nodes and the flow for the Business Logic are automatically built for your conversation. The Platform auto-defines the _Entities, Prompts, Error Prompts, Bot Action nodes, Service Tasks, Request Definition_, and other parameters. You can customize the flow per your requirements by editing the generated nodes and adding your own. You can configure the generated Dialog Tasks just like any other dialog task.
 
<img src="../images/using-dialog-builder-img10-create-dialog-genai-dialog-created.png" alt="Gen Ai Dialog created" title="Gen Ai Dialog created" style="border:1px solid gray;zoom:60%;">

### Auto-Generate Dialog Tasks using Pre Built Templates

This option provides you ready-made templates targeting major industry verticals, covering generic use cases related to the industry, and having pre-established integration, and lets you choose a suitable dialog template. You can update the description and generate use cases based on the purpose. This option accelerates development by providing a starting point for common scenarios, ensuring consistency and efficiency.

!!! Note

    You can avail this feature only if the integration is configured in your AI Agent. You must go through the installation journey to access the integrations and templates.

1. Click the **Marketplace** option. The **Marketplace** page opens with lists of **Categories** and **Integrations**. You can see a list of the most popular integrations and recommended templates.

    <img src="../images/using-dialog-builder-img11-create-dialog-template-search.gif" alt="Marketplace" title="Marketplace" style="border:1px solid gray;zoom:70%;">

2. Select the required categories or integrations. The corresponding integrations and available dialog templates appear. The integrations configured in your App are labeled as **Installed**.

    <img src="../images/using-dialog-builder-marketplace-actions-and-templates.png" alt="Integrations and Dialog Templates" title="Integrations and Dialog Templates" style="border:1px solid gray;zoom:70%;">

3. **Dialog Action Templates** contain the required nodes to make **API calls** to perform particular actions. You would notice that every Action Template has an API method mentioned in the brick. To create a dialog using the available **Dialog Action Templates** of an integration:
    1. Click the suitable integration. You will get a popup window containing the available **Action Templates** for the selected integration.

        <img src="../images/using-dialog-builder-click-required-integration.png" alt="Select the required integration" title="Select the required integration" style="border:1px solid gray;zoom:70%;">

    2. Install the required action template(s) by clicking the corresponding **Install →.**

        <img src="../images/using-dialog-builder-select-required-action-template.png" alt="Install required action templates" title="Install required action templates" style="border:1px solid gray;zoom:70%;">

    3. You will see the dialog task(s) added to the list of dialogs.
    
        <img src="../images/using-dialog-builder-dialog-task-using-action.png" alt="Dialog task added" title="Dialog task added" style="border:1px solid gray;zoom:70%;">

    4. You can edit and customize the dialog design as per your requirements by opening it in the dialog builder.
        
        <img src="../images/using-dialog-builder-dialog-task-using-action-edit.png" alt="Dialog design" title="Dialog design" style="border:1px solid gray;zoom:70%;">

4. **Dialog Templates** are pre-created templates of dialog tasks to perform a particular task. To create a dialog using **Dialog Template** (if available):

    !!! Note
    
        Dialog templates are not available for every integration.
    
    1. Click the required Dialog Template.
    
        <img src="../images/using-dialog-builder-click-required-dialog-template.png" alt="Select required dialog template" title="Select required dialog template" style="border:1px solid gray;zoom:70%;">

        You can also select the required Dialog Template by clicking on an integration and exploring the options.

        <img src="../images/using-dialog-builder-integration-explore-options.png" alt="Explore options of an integration" title="Explore options of an integration" style="border:1px solid gray;zoom:70%;">

    2. Click the tile containing the required Dialog Template to see the **description**, **highlights**, and **preview** of the dialog in a popup window.

        <img src="../images/using-dialog-builder-dialog-template-details.png" alt="Dialog template details" title="Dialog template details" style="border:1px solid gray;zoom:70%;">

    3. Click **Install** on the popup. You can modify the name and description of the dialog on the next screen. Make the required edits and click **Next**.

        <img src="../images/using-dialog-builder-dialog template-name-description.png" alt="Dialog name and description" title="Dialog name and description" style="border:1px solid gray;zoom:70%;">

    4. The next few screens help you with the below setup:
        1. Utterances to identify this intent.
        2. Channel experience.
        3. Other setup points pertaining to the intent. For example, information points to be captured for Lead Capture intent.
    
    5. The template is installed after you finish the setup. Click **Finish**.

        <img src="../images/using-dialog-builder-dialog-template-finish-install.png" alt="Finish dialog template installation" title="Finish dialog template installation" style="border:1px solid gray;zoom:70%;">
 
The dialog task is created and opens in the Dialog Builder. You can make required changes like any other dialog by adding, removing and configuring nodes as per need.

<img src="../images/using-dialog-builder-dialog-template-dialog-created.png" alt="Dialog creation completed" title="Dialog creation completed" style="border:1px solid gray;zoom:70%;">

[Click here to know about Nodes & Connections](./node-types/nodes-transitions.md){:target="_blank"}.



