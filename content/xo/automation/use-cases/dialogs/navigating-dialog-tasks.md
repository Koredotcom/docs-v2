# Navigating Dialog Tasks



The Dialog Builder is a key component of the Platform, and you can use it to develop full conversations between your AI Agent and your users – from design to development, training, and testing.

The Dialog Builder Provides Conversation, Logic, and multiple opportunities to develop your conversational AI Agent. You can Design, Build, and Train from within a familiar interface, which improves development efficiency and enhances results.

To access dialog tasks, go to **Automation > Dialogs**.

## Benefits

The purpose of the Dialog Builder is to combine human interaction and business logic, enabling your organization to collaboratively implement standards, processes, and practices into valuable AI Agents.

Here are a few other ways in which the Dialog Builder can benefit your organization:

* Simplifies and streamlines AI Agent development by providing access to tools and connecting to a wide variety of services.
* Facilitates the application of business processes to Conversational AI Agent Development.
* Encourages innovation through clear, collaborative processes to Design, Build and Train AI-powered Conversational AI Agents.

## Dialog Task Options

The Dialog page lists existing dialog tasks and shows key details for each task, including name, description, last updated date, and status.

When you hover over a dialog task, you can select Edit, Clone, or Delete. From [More options](#the-more-options-menu), you can view the dialog task, configure dialog settings, manage interruptions, or amend behavior.

[Manage Components](managing-dialogs.md) lets you access the Dialog Components section, where you manage entities, webhooks, messages, agent transfers, and other components used across all dialog tasks in the AI Agent.

[Create Dialog](using-the-dialog-builder-tool.md) lets you create a new dialog task.

<img src="../images/navigate-dialog-landing.png" alt="Dialog task landing page" title="Dialog task landing page" style="border:1px solid gray; zoom:60%;">


**Legacy Dialog Tasks**
    
If a dialog task was created using the legacy builder, you can upgrade it to the conversation-driven builder. These tasks display an upgrade icon, shown as an upward arrow inside a gear symbol.

**Cloned Dialog Task Properties**

A cloned dialog task copies components, instances, NL, IVR, connection properties, dialog settings, interruption settings, amend behavior, and all enabled language details from the original dialog task. It does not copy intent-level NLP training data, including machine learning utterances, intent patterns and rules, or intent synonyms.




## Dialog Task Builder Overview


The Dialog Builder is where you can design, build, train, and test the conversations that your AI Agent can have with your users. You can access them by creating a new Dialog Task or opening an existing one. You can build Dialogs by adding and configuring [nodes](node-types/nodes-transitions.md){:target="_blank"} in the required sequence as per business logic in the Dialog Builder.

!!! Note

    This guide applies to the new Dialog Builder. If your tasks are using the previous version, please consider upgrading.



<img src="../images/navigate-dialog-builder.png" alt="Dialog builder" title="Dialog builder" style="border:1px solid gray;zoom:70%;">

The Dialog Builder interface consists of:

1. [Tool Set](#the-tool-set)
2. [Index Panel](#the-index-panel)
3. [Node Panel](#the-nodes-panel)
4. [Canvas](#the-canvas)


### The Tool Set

The Dialog Design process occurs in the Dialog Builder. This comes with its specific top menu: the **Tool Set**.

For the convenience of comprehension and demonstration, let’s visualize the Tool Set into three parts:

<img src="../images/using-dialog-tasks-tool-set.png" alt="Tool Set" title="Tool Set" style="border:1px solid gray;zoom:60%;">

**Features on the Left Side of the Tool set**

<img src="../images/using-dialog-tasks-tool-set-left.png" alt="Tool Set - Left side" title="Tool Set - Left side" style="border:1px solid gray;zoom:60%;">


* **Exit the Dialog Task Builder** (<img src="../images/using-dialog-tasks-tool-set-left-back.png">) and return to the Dialog Tasks List.
* Add **Bookmarks** (<img src="../images/using-dialog-tasks-tool-set-left-bookmark.png">): You can bookmark frequently visited or crucial content in the canvas with relevant information. The added bookmarks can be seen in the **Bookmarks** tab of the **Index Panel**. They help you navigate to the bookmarked content without having to search or browse extensively.

    <img src="../images/using-dialog-builder-add-bookmark.gif" alt="Add Bookmark" title="Add Bookmark" style="border:1px solid gray;zoom:60%;">

* Add **Note** (<img src="../images/using-dialog-tasks-tool-set-left-note.png">): You can add a note anywhere on the canvas to record the logic being developed in a sequence or group of sequences or other relevant nodes about the logic building for future reference. 

    <img src="../images/using-dialog-builder-add-text.gif" alt="Add Note" title="Add Note" style="border:1px solid gray;zoom:60%;">

* Add **Comment** (<img src="../images/using-dialog-tasks-tool-set-left-comment.png">): You can tag other users in a comment to enhance communication through feedback, suggestions, and discussions on specific elements of the design or if you need another user to pitch in and help you with the conversation design with their developmental or functional expertise. 

    <img src="../images/using-dialog-builder-add-comment.gif" alt="Add Comment" title="Add Comment" style="border:1px solid gray;zoom:60%;">

* **Find** (<img src="../images/using-dialog-tasks-tool-set-left-find.png">): You can search for nodes, variables, Bookmarks and sequences at Dialog level. Clicking this icon opens a window where you can perform a universal search. You will get a list of all the nodes, variables, sequences and bookmarks grouped by type that contain the search string. Additionally, individual tabs are present for each type wherein all items of those types are listed.

    <img src="../images/using dialog-builder-tool-set-left-search.png" alt="Find" title="Find" style="border:1px solid gray;zoom:60%;">


**Features in the Middle of the Tool set**

* **Switch between Dialog Tasks** (<img src="../images/using-dialog-tasks-tool-set-middle-switch-dialog-task.png">): The Task Switcher allows you to change to a different task within your selected app easily. This option is located at the top of your canvas

    <img src="../images/using-dialog-builder-img23-task-switcher.png" alt="Switch Task" title="Switch Task" style="border:1px solid gray;zoom:60%;">


**Features on the Right Side of the Tool set**

<img src="../images/using-dialog-tasks-tool-set-right.png" alt="Tool set - Right side" title="Tool set - Right side" style="border:1px solid gray;zoom:60%;">

* **Test**: You can chat with the app in real time to test recognition, performance, and flow as if it were a live session.
* **View Warnings**: In the top navigation area, you will see a real-time set of errors and warnings that might have occurred as you define your dialog task. The information icon is located at the top right of the Dialog Builder. Click the information icon to display any errors or warnings, as shown in the following illustration.

    <img src="../images/using-dialog-builder-img24-error-and-warnings.png" alt="Troubleshooting - Errors and Warnings" title="Troubleshooting - Errors and Warnings" style="border:1px solid gray;zoom:60%;">

* **Display Options**: Use **Display Options** to utilize screen real estate better.

    <img src="../images/using-dialog-builder-img29-display-settings.png" alt="Display settings" title="Display settings" style="border:1px solid gray;zoom:60%;">

    Display Options are used to:
    
    * **Fit to Screen**: Resizes Dialog Builder components and connections to fit within the display screen resolution for a single, non-scrolling page.
    * **Zoom Level**: is used to set the zoom level as needed.
    * **Zoom to Last Edited**: This takes you to the zoom level you have used to edit the dialog.
    * **Hide/Show Mini Map**: To show or hide the mini-map of the dialog.

* **More options**, where you can access Dialog Settings, Manage Interruptions, Manage Amend behavior and View Comments. [Learn more](#the-more-options-menu).

    <img src="../images/using-dialog-builder-right-more-settings.png" alt="More options" title="More options" style="border:1px solid gray;zoom:60%;">

* **App Owners**: You can see bubbles containing the names of all the users of the current dialog, such as App Owner, App Developer, Conversation Designer, etc. The first letter of the app owner’s name appears in a colored bubble.


### The Index Panel


The Index panel consists of tabs listing features that help enhance collaboration and organization while using the dialog builder. You can add, edit, move or delete notes, comments, or bookmarks as needed. However, note that once deleted, they cannot be restored.  
<img src="../images/using-dialog-builder-index-panel.png" alt="Index Panel" title="Index Panel" style="border:1px solid gray;zoom:60%;">




**Bookmark Tab**

The Bookmark tab allows you to organize and reference important information. You can bookmark frequently visited or crucial content in the canvas with relevant information. This helps you navigate to the bookmarked content without having to search or browse extensively.  
<img src="../images/using-dialog-builder-img22-bookmark-tab.png" alt="Bookmark tab" title="Bookmark tab" style="border:1px solid gray;zoom:60%;">

The Bookmark tab provides a structured and organized way to manage bookmarks and contributes to a user-friendly interface, making it easier to navigate and interact with the bookmarked dialogs.

You can also search for bookmarks.

**Assets Tab**

The **Assets** tab contains all the node types as expandable lists. Upon expanding them, you can see an option to add a new node of that type to the canvas, as well as all the nodes created for the current app, irrespective of whether they are added to any dialog.  
<img src="../images/using-dialog-builder-assets-tab.gif" alt="Assets tab" title="Assets tab" style="border:1px solid gray;zoom:60%;">

All the created nodes you see in this tab are **reusable**. You can drag and drop them or add them using the **"+" (Connector)** before, after, or between existing [sequences](#sequences).

You can also search for nodes.

**Nodes Tab**

On this tab, you can see a list of all the sequences present in the Current Dialog. Upon clicking the sequence name, you see all the nodes in that sequence - the nodes that are added to the canvas for the current dialog.  
<img src="../images/using-dialog-builder-nodes-tab.gif" alt="Nodes tab" title="Nodes tab" style="border:1px solid gray;zoom:60%;">

You can also search for nodes and sequences, which will show you the nodes/sequences in the current dialog that match the search text.

### The Nodes Panel

The **Nodes panel** is a streamlined, user-friendly categorization provided at the bottom of the canvas. Click a group to see the node types within it, and drag and drop the nodes to add them to the dialog. The nodes added from this panel will get added as reusable assets to the **Assets** tab of the **Index panel**.  
<img src="../images/using-dialog-builder-node-panel.png" alt="Node panel" title="Node panel" style="border:1px solid gray;zoom:60%;">

Node type groups in the panel:

* **Inform**: Contains the nodes that can be used to provide information to the user. For example, Message node.
* **Ask**: Contains the nodes that can be used to get input from the user. For example, Confirmation or Entity node.
* **Action**: Contains nodes that can be used for any action that the app is expected to perform without interaction with the user. For example, Script, Service, Process, or Agent Transfer node.
* **GenAI**: Contains nodes that can be used to leverage the full potential of LLMs and Generative AI models to quickly build conversations that involve complex flows and also provide human-like experiences. For example, Agent Node and Prompt Node.

### The Canvas

The Canvas is where you can integrate your conversation scenarios with your business logic.  
<img src="../images/navigate-dialog-builder-canvas.png" alt="Dialog builder - Canvas" title="Dialog builder - Canvas" style="border:1px solid gray;zoom:60%;">

The canvas contains the following elements or components:

**The Root Intent**

This is the first component of any conversation, and whenever you create a new Dialog Task, it is automatically placed on your canvas.

The display name and description of the root intent are the same as the Dialog's. The Root Intent is an independent node and is not part of any sequence.

Like any other dialog, you can configure the component, NLP, and Connection properties of Root Intent. Key points about configuring the connection properties:

* Only one **default** connection is available for the Root Intent.
* You can connect a Root Intent to any node present on the canvas, not necessarily the first node of a sequence.
* Creating If-Else connection paths is not possible for the Root Intent.

**Sequences**

These are placeholders for creating groups of nodes. Each sequence has one or more nodes added in logical sequences.  
<img src="../images/using-dialog-builder-sequence.png" alt="Sequence" title="Sequence" style="border:1px solid gray;zoom:60%;">

A sequence gets **automatically created** when you add a node to the canvas. By default it is named **Sequence [x]** where **x** depends on the number of unnamed sequences already present on the canvas. Once a sequence gets created, you can either add more nodes to that sequence, or, you can add nodes outside any existing sequence, in which case a new sequence will get created.

To add a node to an existing sequence, drag the node on the sequence. You will see placeholders labeled **Drop here** appearing between nodes. You can drop the node on any of these placeholders; the node will get added on that spot in the sequence.  
<img src="../images/using-dialog-builder-creating-sequence.gif" alt="Creating sequence" title="Creating sequence" style="border:1px solid gray;zoom:60%;">

The task being designed in a dialog can be broken down into several sub-tasks. For example, if you are developing a dialog to send money from one account to another, you may break the tasks into subtasks like gathering the account owner's details, gathering the recipient account's details, transferring the money, success scenario, failure scenario, etc. You can have a sequence for each sub-task.

Each sequence contains one or more nodes placed in a logical sequence and a **Transition** section at the end, through which you can either continue the flow of dialog to the next sequence or split the flow into two or more paths based on [conditions](#add-if-else-connections).

You can set connections between two sequences; Drag the connector <img src="../images/using-dialog-builder-img17-nodes-connector.png"> from the source sequence to the required destination sequence. Please note that by default, the connection will be from the **last node of the source sequence** to the **topmost node on the destination sequence**.

Connections can be set or changed on the canvas by **dragging the transition arrow** or through the **Connections** settings on the **Component Properties panel**.

You can also add a sequence **between two existing sequences**. Below are the steps to do that:

* If you add the new node directly to the canvas, a new sequence will be created containing the newly added node.
* Set the connection between the source sequence and the new sequence.
* Set the connection between the new sequence and the Destination sequence.  
<img src="../images/using-dialog-builder-sequence-connection.gif" alt="Sequence connection" title="Sequence connection" style="border:1px solid gray;zoom:60%;">

To delete a sequence, right-click it and select **Delete** from the menu.  
<img src="../images/using-dialog-builder-img15-node-delete.png" alt="Delete sequence" title="Delete sequence" style="border:1px solid gray;zoom:60%;">


!!! Warning

    The deleted sequences cannot be restored.




**Nodes**

Nodes are the different points at which components of your conversation intersect. Each kind of node has a set of distinct features and can be used to fulfill a specific purpose, like displaying a text message, providing the user a digital form to provide data, gathering a specific piece of data from the user, accessing data files, etc.

For details, please see [Node Types](./node-types/nodes-transitions.md){:target="_blank"}.

You can add nodes inside or outside sequences. You can also drag and drop nodes or add them using the connector next to a sequence. Adding a node using a connector will automatically create a new sequence containing the new node and Transition. [Read more.](#add-node-to-dialog)

To delete a node, right-click it and select **Delete** from the menu.

!!! Warning

    Deleted nodes cannot be restored on the canvas. However, they will still be available in the **Assets** tab of the **Index panel**.


**Notes, Comments and Bookmarks**

You can use Notes, Comments, and Bookmarks to easily record and collaborate between app users.

You can place **Notes** on strategic points on the canvas and write down the dialog's introduction, a list of subtasks, and the purpose of each subtask.

Using **Bookmarks**, you can create navigation points in a dialog with a complex structure so that you can quickly navigate to the bookmarked points without having to manually search the entire design. You can mention the specific point of the dialog flow in the bookmarks as an easy reference for other users.  
<img src="../images/navigate-dialog-builder-text-bookmark.png" alt="Notes and Bookmark" title="Notes and Bookmark" style="border:1px solid gray;zoom:70%;">

**Comments** are effective in creating a collaborative environment. Often, in the course of development, at some point, you may need help and input from other app users. For example, you need them to pitch in with their knowledge about the business logic or functional expertise or need clarifications in order to proceed. In such situations, you can place a comment wherein you can tag the respective user and mention your need.

Below action can be performed:

* Add new comment: You can add a comment by selecting the comments icon available in the header and placing the comment anywhere on the canvas. You can also right click on canvas to add comments. A text area opens where you can type in the comment.
* View comment: You can see a user icon and reply count where the comment has been posted. Mouse hover on the icon displays the preview of the first comment. Clicking on the comment icon opens the comments panel with the selected comment’s thread.
* Respond to a comment: You can respond to the comment from the individual comments thread.
* Resolve Comment: You can resolve the comment by clicking the <img src="../images/using-dialog-builder-resolve-comment-icon.png"> icon once discussion in the thread is closed. The Resolve option is available in the View Comments panel too.
* Delete comment/reply: You can delete the comment or a reply. Note that you can delete a comment or reply only if it is posted by you. Also, deleting the main comment will delete all the responses too.
* Edit comment/reply: You can edit the comment or a reply. Note that you can edit comments or replies only if they are posted by you.
* Other Options (At thread level):
    * Mark as Unread: You can mark a comment as Read
    * Copy link: Clicking on this option,you can copy the link of the comment. When you access the link, you are panned to the relevant comment
    * Delete Thread: You can delete the entire thread if the main comment is posted by you.  
    <img src="../images/using-dialog-builder-comment-thread-level-option.png" alt="Comments - Thread level options" title="Comments - Thread level options" style="border:1px solid gray;zoom:70%;">

* Mention and Notification: You mention others in comments using **@** followed by their name, triggering notifications to ensure that the mentioned team members are aware of the discussion.
* Other Features:
    * Zoom Out Preview: When canvas is zoomed out, the nearby comment icons are clubbed and displayed with the count.

        <img src="../images/using-dialog-builder-comment-zoom-in-view.png" alt="Comments - Zoom In view" title="Comments - Zoom In view" style="border:1px solid gray;zoom:70%;">
        
        Zoom In view:  
        
        <img src="../images/using-dialog-builder-comment-zoom-out-view.png" alt="Comments: Zoom Out view" title="Comments - Zoom Out view" style="border:1px solid gray;zoom:70%;">
        

    * Timestamp: Time stamp will be displayed in the comment thread as well as the comments panel. It will be shown as “relative time indicators” and the complete timestamp will be displayed on hover

* Options in the Comments Panel
    * Show/Hide All comments (Default - Show)
    * Show/Hide Resolved comments (Default - Hide)
    * Mark all as read
    * Textual Search 
    * Filtering
        * All
        * Unread
        * My Mentions
        * My comments  
        <img src="../images/using-dialog-builder-comment-panel.png" alt="Comments panel" title="Comments panel" style="border:1px solid gray;zoom:70%;">

**Mini map**

It is a miniature representation of the visual appearance of the dialog design.

### Collaboration Tool

Real-time collaboration in the Dialog Builder allows team members to work together, seeing each other's actions and communicating instantly. This fosters better coordination, speeds up the dialog creation process, and improves overall quality through better coordination.

Real-time collaboration features: 


* Live presence awareness: As an app developer enters the dialog builder, the cursor display and the avatars in the header reveal the presence of other active team members.
* Color-coded cursors: Each team member's cursor is assigned a distinctive color that matches the header's avatar icon. This allows users to be easily identified as their cursors move fluidly through the canvas.
* Instant cursor chat: The team communicates seamlessly, leveraging cursor chat, enabling real-time commenting features. To initiate a cursor chat, use **Cmd+/** on Mac or **Ctrl+/** on Windows, or right-click on the dialog builder and select **Cursor Chat**.
* Collaborative viewing: While one user edits the dialog, other users are allowed to view it. Cursor display ensures that each team member can see where others are working. The first user to open the app is granted edit rights, while others join as viewers.  
* Dialog Access Claim: When the user currently editing exits the dialog, a notification alerts other users to claim the edit access. The first user to click and claim this access can edit the dialog.  
<img src="../images/collaboration-tool.png" alt="collaboration-tool" title="collaboration-tool" style="border:1px solid gray;zoom:60%;">

## Add node to dialog

There are two ways to add a node:

1. Drag and drop nodes from the panel onto the dialog builder.
2. You can also use the options on the Dialog Builder Canvas using Connector.

### Use Drag and Drop

You can add nodes within the dialog task by dragging them from the Index panel on the left or the Node panel at the bottom to the designated place on the canvas. You can drop the node within an existing sequence or outside the existing sequences; in this case, a new sequence will be created automatically, containing the newly added node.

<img src="../images/using-dialog-builder-creating-sequence.gif" alt="Adding nodes by drag and drop" title="Adding nodes by drag and drop" style="border:1px solid gray;zoom:60%;">

You can also add a node directly on the canvas, creating a new sequence. You can then drag and drop the node to an existing sequence, if required.


### Use the Dialog Canvas

Click the <img src="../images/using-dialog-builder-img17-nodes-connector.png"> button in the **Transition** node of the sequence after which you want to add another node. You will see a list of all the nodes created in the current app, along with the node type and an option to create and add a new node, and you can select any of these to add.

<img src="../images/using-dialog-builder-add-nodes-on-canvas.gif" alt="Adding nodes by connector" title="Adding nodes by connector" style="border:1px solid gray;zoom:60%;">

### Add If-Else Connections

You can add conditions to the sequence by adding an **If-Else connection** in the **Transition** section of the sequence. This is where you can set the execution path based on the condition.

To do this, hover over the **Transitions** section and click **Add New.** [Learn more](./node-connections/nodes-conditions.md){:target="_blank"}.

<img src="../images/using-dialog-builder-img16-nodes-transition.png" alt="Transitions - Add New" title="Transitions - Add New" style="border:1px solid gray;zoom:60%;">

You can also set connections through the **Connection Properties**.

<img src="../images/using-dialog-builder-connection-properties-if-else.png" alt="Transitions - Add New connection through Connection Properties" title="Transitions - Add New connection through Connection Properties" style="border:1px solid gray;zoom:60%;">


## Node Properties

Clicking on a node will open its Properties panel, which includes specific features depending on the type of node you are working with. Please consult the documentation on [Node Types](./node-types/nodes-transitions.md){:target="_blank"}  to learn more about what is included in each. So, noting that some nodes may not come with some features, here is a general overview of what is available within this panel:

* **Component Properties** such as name, type, and component-specific properties.
* **Instance Properties** can be customized for the selected node for the current dialog.
* **Connection Properties** can be used for configuring transition conditions. (Only available for the bottommost node in a sequence).
* **NLP Properties** for intent and entity recognition.
* **Voice Call Properties** for IVR channels (available for certain nodes only after [IVR integration](./node-types/voice-call-properties.md){:target="_blank"}). 
<img src="../images/using-dialog-builder-img20-asset-properties.png" alt="Node properties" title="Node properties" style="border:1px solid gray;zoom:60%;">

## Visual Appearance of Flow Design

The dialog builder lets you create visually appealing dialog designs by offering design settings for components.


### Bookmarks and Notes

The platform provides the following options for customizing notes and bookmarks:

* **Edit:** To edit the contents.
* **Delete:** To delete the bookmark or the note from the canvas
* **Color Change:** To change the color of the bookmark or note. You can use custom colors to improve visibility and collaboration. 

    <img src="../images/using-dialog-builder-visual-customization-notes-bookmarks.png" alt="Visual customization of Notes and Bookmarks" title="Visual customization of Notes and Bookmarks" style="border:1px solid gray;zoom:60%;">

You can see these options by **right-clicking the note** and **clicking the 3-dot menu icon on the bookmark**.

### Sequences

You can see the following visual customization options for a sequence by right-clicking it:  
<img src="../images/using-dialog-builder-sequence-customization-options.png" alt="Sequence - Customization options" title="Sequence - Customization options" style="border:1px solid gray;zoom=90%;">

* **Rename**: You can rename a sequence based on your preference and logic. By default, the name is **Untitled**; you can name and rename it as many times as you need.
* **Mark as Flow Starting Point**: Using this option, you can mark a sequence as the starting point of the dialog flow. When you do so, the connector arrow from the root intent points to the first node of this sequence.
* **Sequence Color**: You can change the color scheme (Border and Fill colors) of a sequence. The platform provides six default color schemes to choose from. This can be useful in case you need to visually indicate a split of flow, positive and negative flows, etc.

    For example, in the image below, green and red colors have been used for sequences that contain the positive and negative flows, respectively.  
    <img src="../images/using-dialog-builder-sequence-color.png" alt="Visual customization of sequences - Color" title="Visual customization of sequences - Color" style="border:1px solid gray;zoom:60%;">

    You cannot change the default color schemes, however, you can add your own custom colors or edit the custom colors available on the palette. The border color is auto-populated based on the color you select.

    Custom colors are saved at Dialog level.

    <img src="../images/using-dialog-builder-custom-colors.png" alt="Custom colors" title="Custom colors" style="border:1px solid gray; zoom:65%;">

* **Delete**: This option allows you to delete the sequence. Note that deleted sequences cannot be restored; however, the nodes that were added to the sequence will still be available for use in the Assets tab of the Index panel.  

  [Refer here](#manage-node-groups) for details on grouping of nodes in a sequence.

### Connector Arrows

The platform provides customization options for Connector arrows, which can enhance their visual appeal and facilitate comprehension of the flow. When you click on an arrow, you can see a panel containing these options. 

<img src="../images/using-dialog-builder-connector-customization.png" alt="Visual customization of connectors" title="Visual customization of connectors" style="border:1px solid gray;zoom:60%;">

Below are the options:

1. **Info**: When you click this icon, you can see the Source sequence (ORIGIN) and Destination sequence (CURRENT) in the arrow.
2. **Style**: By clicking this icon, you can see the styles available for the connectors.
3. **Thickness**: You can set the thickness of the connector arrows through this option.
4. **Color**: You can pick a color for the connector arrow through this option.
5. **Delete**: You can delete a connector arrow. Note that this will not impact other connectors or sequences; only the connection properties of the node from where the connector originated will be reset.

## The ‘More Options’ Menu

The More Options menu at the top right of the Dialog Builder shows shortcuts to dialog settings, manage interruptions, amend behavior, manage groups, and view all comments.

<img src="../images/using-dialog-builder-img25-more-options.png" alt="More options" title="More options" style="border:1px solid gray;zoom:60%;">


### Dialog Settings

The **Dialog Settings** panel allows you to modify the dialog task's basic settings and set the visibility of a dialog to create a hidden dialog task that is available for use but not shown as a task. You can access Dialog Settings using the More Options menu.

<img src="../images/using-dialog-builder-img26-dialog-settings.png" alt="Dialog settings" title="Dialog settings" style="border:1px solid gray;zoom:60%;">

Add or modify the following settings for your dialog:

* **Intent Name**: The name of your dialog task, usually the main user intent. For example, _Book Ticket._
* **Intent Description**: The (optional but recommended) description of your dialog task displayed in the Platform. You can add up to five secondary descriptions in addition to the main description. Each unique description broadens semantic coverage and improves intent shortlisting and detection accuracy.
* **Intent Settings:**
            
     * **Sub intent only dialog**: The task is invoked only as a sub-task when another task is in progress. It is not presented as a task when the user requests help.
     * **Hide from help**: The task is not presented as a task when the user requests help. Users can invoke this task anytime while talking to the assistant. This option is selected automatically when the **Sub intent only dialog** option is selected. You can manually deselect it.
        
* **Customer Use Cases**: Select if this dialog task is available for end users (customers).
* **Agent AI Use Cases**: Select if this dialog task is available for agents.
    * **During Chats**: If enabled, agents can manually or automatically trigger this use case when they are engaged with a customer in a chat channel.
    * **During Calls**: If enabled, agents can manually or automatically trigger this use case when they are engaged with a customer in a phone call.
    * **During E-Mails**: If enabled, agents can manually or automatically trigger this use case when they are engaged with a customer in an email conversation.
    * **Launch through Library**:
         * **Enabled**: The dialog task is listed under all available dialog tasks in the Search tab of the widget.
         * **Disabled**: The dialog task doesn’t appear on the list, but remains searchable via the “Ask a question” search bar in the Search tab of the Agent AI widget, allowing agents to browse and find this use case to trigger it.

* **Analytics - Containment Type**(Any one option can be selected):
    * **Abundance as Self Service:** Users can abandon the conversation while executing the dialog.
    * **Abundance as Drop Off:** Conversations can be abandoned by users or due to any failure during dialog execution.

* **Follow-up Task**: The follow-up task array contains all the intents detected from user utterances from this dialog. You can either:
    * Handle the follow-up tasks as part of node connections (default setting) or
    * Let the user select the follow-up task.

* **Task Execution Failure**: Define the assistant’s behavior when there is an error in task execution. It can be set as either:
    * Same as the App Level behavior.
    * Specific to this task, initiate a task, run a script, or show a message.


### Manage Interruptions

The **Manage Interruptions** options allow you to select if and how a user can switch to another task and exit strategies. It can be set up at the App, task, and node levels to ensure the configurations are layered to suit your various business requirements. You can also add conditional exceptions between tasks with the ability to pass contextual data between them. Click here to [learn more](../../intelligence/conversation-management/manage-interruptions.md#dialog-level-settings){:target="_blank"}.  
<img src="../images/using-dialog-builder-img27-manage-interruptions.png" alt="Manage Interruptions" title="Manage Interruptions" style="border:1px solid gray;zoom:60%;">




### Manage Amend Behavior

Using **Amend Entity,** you can allow the users to amend entity values and control post-amendment dialog behavior. Click here to [learn more.](../../natural-language/nlu-configurations/amend-entities.md#task-level)  
<img src="../images/using-dialog-builder-img28-manage-amend-behavior.png" alt="Manage Amend behavior" title="Manage Amend behavior" style="border:1px solid gray;zoom:60%;">




### Manage Node Groups

Use this option to create and manage node groups. Node groups let you logically group related nodes for easier organization and management.

**Advantages of grouping Nodes in a sequence**

* Grouping nodes allows for automatic back-to-back transitions between consecutive nodes. 

*  Complex conversation flows can be broken down into logical groups, each responsible for a specific function, making the design easier to manage and understand. 

*  Inputs and outputs can be handled at the group level, allowing users to focus on group interfaces without needing to manage every node. 

*  Groups help maintain a clean and structured flow, which is useful in large or multi-functional apps. 

*  Node groups support better handling of follow-ups, digressions, and amending entity values.

**Create the Node Group**

To create node groups, follow the below steps:

1. On the Dialog Builder, navigate to **More Options > Manage Groups**

    <img src="../images/using-dialog-builder-manage-groups.png" alt="Manage Groups" title="Manage Groups" style="border:1px solid gray; zoom:70%;">

2. Click **+Add**.

    <img src="../images/using-dialog-builder-group-add.png" alt="Add group" title="Add group" style="border:1px solid gray; zoom:70%;">

3. Provide a group name.

    <img src="../images/using-dialog-builder-group-name.png" alt="Group name" title="Group name" style="border:1px solid gray; zoom:70%;">

4. You can either create an empty group by clicking **Save**,

    <img src="../images/using-dialog-builder-empty-group.png" alt="Empty group" title="Empty group" style="border:1px solid gray; zoom:70%;">

    Or you can also add one or more nodes to the group right at the time of group creation. Perform a search for node names and click **Add**.

    <img src="../images/using-dialog-builder-add-nodes-to-group.png" alt="Add nodes to group" title="Add nodes to group" style="border:1px solid gray; zoom:70%;">

    You can manage groups by editing the group, and adding and removing nodes.


**Edit the Node Group**

Right-click a group name to open the Edit and Delete options. Edit lets you change the group name and add or remove nodes, then save the changes. Delete permanently deletes the group. You cannot undo this action.


<img src="../images/using-dialog-builder-edit-group.png" alt="Edit group" title="Edit group" style="border:1px solid gray; zoom:70%;">





**Add node to a group**

Follow the below steps to add a node to an existing group:

1. In the **Manage Group** panel, click the group name to which you want to add the node and then the **Nodes** icon. The list of nodes within the group appears with a search field.

    <img src="../images/using-dialog-builder-add-node-search.png" alt="Search nodes for adding to group" title="Search nodes for adding to group" style="border:1px solid gray; zoom:70%;">

2. Out of the nodes that appear as search results, you can select one or more nodes by checking the corresponding check boxes and then click **Add** to add them to the group.

    <img src="../images/using-dialog-builder-group-select-add-node.png" alt="Select and add nodes" title="Select and add nodes" style="border:1px solid gray; zoom:70%;">


**Highlight Nodes**

You can locate a node that is added to a group on the canvas. Click on the arrowhead icon (<img src="../images/using-dialog-builder-group-arrowhead.png">) corresponding to a node, and the sequence containing that node will be highlighted.

<img src="../images/using-dialog-builder-group-highlight-node.gif" alt="Highlight nodes" title="Highlight nodes" style="border:1px solid gray; zoom:70%;">


**Delete node**

You can hover over a node to get the **Delete** option. Once deleted, the node will no longer be a part of the group; however, you can add it again.


**Subintent**

If you are using the group to set up a Subintent, you can do so by navigating to the required node group and clicking the **Intents** button. For additional information, please see [Grouping Nodes as Subintents](./node-connections/grouping-nodes.md){:target="_blank"}.

<img src="../images/using-dialog-builder-group-sub-intents.png" alt="Sub intent" title="Sub intent" style="border:1px solid gray; zoom:70%;">

### View All Comments

Through this option, you can view all the comments added to the current dialog.

<img src="../images/using-dialog-builder-view-all-comments.gif" alt="View all comments" title="View all comments" style="border:1px solid gray; zoom:70%;">








