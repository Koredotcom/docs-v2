# Mock Scenes

Mock Scenes are a feature through which you can simulate a conversation between a user and your AI Agent, using the Conversation Designer.

Conversations that are designed using Mock Scenes can then be implemented into Dialog Tasks, which the AI Agent can work with when interacting with users.

In this article, you will learn how to work with this feature in order to prototype a conversation.


## Benefits

Mock Scenes are specifically created for conversation designers to prototype AI Agent-user interactions before the conversation moves to the development stage. The Conversation Designer in use within this feature is specifically adapted to allow designers to focus on the conversation flow itself, without worrying about the systems and logic building side of the AI Agent.


## Major Features

* Create a conversation exchange prototype, between the assistant and the user, based on natural language, that can follow different paths, depending on the responses that each participant provides..
* Collaborate during the prototyping process, using notes and comments.
* Map important points in the conversation, using a timeline based on predefined hashtags or custom tags.
* Link to existing messages or to other scenes.
* Preview the conversation prototype in a customizable, shareable ad collaborative view,


## Mock Scene Options

The Mock Scenes area allows you to perform the following actions:

* **Import** an existing scene in a CSV format.
* **Sort** scenes based on any column.
* **Search** for a scene by name.
* When hovering over each scene, you have an option to:
    * **Share** the scene with other users or teams.
    * **Clone** the scene to create a copy.
    * **Export** the scene into CSV format.
    * **Delete** the scene.

<img src="../images/mock-scenes-img1-mock-scene-options.png" alt="Mock scene options" title="Mock scene options" style="border:1px solid gray; zoom:70%;">  


## Create a Mock Scene

To create a Mock Scene, please follow the steps below:

1. On the **App Settings** page, select **Dev Tools > Mock Scenes** tab and click **Create Scene**.
2. On the _New Scene_ dialog box that opens up, enter a name in the **Scene Name** field and a description in the **Description** field.
3. Enter a **Status**.
4. Click **Proceed**.

The demo below shows you the basics of creating a new Mock Scene.

<img src="../images/mock-scenes-img2-new-mock-scene.gif" alt="Create new scene" title="Create new scene" style="border:1px solid gray; zoom:70%;"> 


## Work with the Conversation Designer

After you add a scene, you are presented with a blank **Conversation View**, where you can enter the user-AI Agent messages. Mock Scenes provide options that are specifically focused on developing the conversation itself, without the business logic or training. This helps create a more seamless user experience and provides App developers with a starting point for their work. 

<img src="../images/mock-scenes-img3-blank-scene.png" alt="Conversation view - Blank scene" title="Conversation view - Blank scene" style="border:1px solid gray; zoom:70%;">

To design a mock conversation scene, you can add _AI Agent (Bot)_ and _User_ utterances, create conversation paths, link messages and scenes, add developer notes and collaborate using comments. You can also create a conversation timeline, using tags. 

The Conversation Designer comes with the following features to help you design the conversation:


### User and AI Agent (Bot) Message Tabs

#### User Tab

This tab is used to enter possible messages from users either requesting information or providing input to a request by the AI Agent. These messages can be:

* **Plain text messages**. For example, in a Travel App, _I want to know when check in opens for my flight._
* **Attachments**. For example, in a Travel App, to upload a flight reservation..


#### AI Agent (Bot) Tab

This tab is used to design messages that the AI Agent sends to users as a greeting, information, answer to a user query, or request for input. These messages can be:

* **Plain text messages** with options to mark text as bold, italic, indent, multi-line, and lists – ordered and unordered.
* **Rich messages** using predefined templates such as buttons, list, quick reply, etc,. ([see below](#ai-agent-bot-messages-and-templates) for a list of supported templates).

    <img src="../images/mock-scenes-img4-bot-message-templates.png" alt="Bot message templates" title="Bot message templates" style="border:1px solid gray; zoom:50%;">

* **Notes**: These are used to add text between messages describing an action or a section of the conversation.

    <img src="../images/mock-scenes-img5-scene-notes.png" alt="Scene Notes" title="Scene Notes" style="border:1px solid gray; zoom:70%;">

* Notes also provide an option to define the timeline of the conversation by using _hashtags_. Thus, defined notes help denote an important state in the conversation that is displayed on the left of the conversation under the **Story Timeline**. You can move to the relevant place in the conversation by clicking the tag on the timeline.You can define your own _custom tags_ or use one of the _predefined tags_. Each of these predefined tags is depicted by a unique symbol in the timeline indicating its purpose. These predefined tags include:
    * \#Start_< intent-name >
    * \#Hold_< intent-name >
    * \#End_< intent-name >
    * \#Resume_< intent-name >.

* With the _tag_ option, you can **classify notes** using an existing tag or by creating a new custom tag. These tags are color-coded for reference.

    <img src="../images/mock-scenes-img6-create-custom-tag.png" alt="Create Custom tag" title="Create Custom tag" style="border:1px solid gray; zoom:70%;">


* **Paths**: Paths are different flows that the conversations might follow, based on the options provided by the AI Agent or the user. For example, an AI Agent expects a _yes_ or _no_ response from the user, and the path differs based upon the user response. Using the AI Agent (bot) message, the template defines the number of alternate paths allowed. The business logic can also decide the number of paths.
    * To continue the scene along a specific path, you can select the path either using the **Previous Path** (**&lt;-**) and **Next Path** (**->**) or select the options given to the user. You can also add additional paths using the **New Path** (**+**) option.

        <img src="../images/mock-scenes-img7-scene-conv-path.png" alt="Select Path" title="Select Path" style="border:1px solid gray; zoom:70%;">


### Message Options

When you hover over a message you can find the following options:

* Add **New Path,**
* Add **Comments,**
* **Delete** a message,
* **Link a Message**: You can use this option to link another message in this scene and continue a flow that is already designed. When selected, this option transitions to the Flow view from where you can select the message node, and link it to the current node.

    !!! Note
    
        This option is available only for the leaf nodes with no flow defined.

* **Link a Scene**: You can use this option to link a predefined scene in the Storyboard. This scene is invoked during the preview. When selected, this option gives a list of scenes for you to select from and link it to the current node. You can also perform the following  actions:
    * View Scene: Click **View Scene** to open in a read-only window.
    * Unlink: Click **Unlink** to unlink the scene.
* **Edit**: Allows you to edit the message.

<img src="../images/mock-scenes-img8-scene-message-options.png" alt="Message Options" title="Message Options" style="border:1px solid gray; zoom:50%;">


### Comments

Comments are a very useful collaborative tool. The Storyboard Scenes area allows users to add comments to any component of the scene, such as user messages, AI Agent messages, and notes. You can also reply to an existing comment thus maintaining a comments thread.

To add a comment, click the **message options** icon, then select **Comment**. 

<img src="../images/mock-scenes-img9-scene-add-comment.png" alt="Add Comment" title="Add Comment" style="border:1px solid gray; zoom:50%;">

When a message has a comment attached, you will see a comment icon next to it, as shown below.

<img src="../images/mock-scenes-img10-scene-marked-comment-on-message.png" alt="Marked comment on message" title="Marked comment on message" style="border:1px solid gray; zoom:50%;">

You can access the full comment history using the comments icon at the scene level. This section provides the following options:

* **Search** through existing comments.
* **View** existing comments.
* **Star** a comment and **filter by starred** comments.
* **Delete** any comments you have made.
* **Reply** to comments.

<img src="../images/mock-scenes-img11-scene-comment-history.png" alt="Comment history" title="comment history" style="border:1px solid gray; zoom:50%;">


### Scene Options

From the Scene page, you can perform the following actions:

<img src="../images/mock-scenes-img12-scene-options.png" alt="Scene Options" title="Scene Options" style="border:1px solid gray; zoom:50%;">

* **Preview**: It is used to see how the conversation flows on your website. This opens in a mock website with the chat window. You can **Play/Pause, Restart, Customize,** and **Exit** the preview.

<img src="../images/mock-scenes-img13-scene-preview-1.png" alt="Scene Preview" title="Scene Preview" style="border:1px solid gray; zoom:50%;">

* **Share**: This option gives you a URL that you can share with others. This URL presents the scene preview, so you can provide the various stakeholders with a glimpse of what to expect and take their feedback. You can secure the scene preview URL with a password.

<img src="../images/mock-scenes-img14-share-scene.png" alt="Share scene" title="Share scene" style="border:1px solid gray; zoom:70%;">

The shared link allows the viewer to add comments that are communicated back to the developer for further action.

<img src="../images/mock-scenes-img15-scene-comment-button.png" alt="Add Comments" title="Add Comments" style="border:1px solid gray; zoom:50%;">

* Click the **More** icon to perform the actions listed below. Most of these actions are also available on the Storyboard page.
    * **Edit**: Edit the name, description, and status of the scene.
    * **Clone**: Clone the scene to create a copy.
    * **Export**: Export the scene into CSV format.
    * **Import**: Import an existing scene in CSV format. The Import fails if the scene that you want to import has linked scenes which are not present in the current AI Agent.
    * **Delete**: Delete the scene. Unlink all linked scenes before deleting it.
    * **Version History**
        * A list of the most recent 20 changes made to a scene. A version is automatically created whenever the following changes are made.
            * Message Added
            * Message Edited (included edits to templates)
            * Message Removed
            * Message Reordered
            * Scene Restored
            * Note Added
            * Note Modified
            * Note Removed
            * Linked to a Message
            * Linked to a Scene

        * An option to restore to any of those versions.


### Preview Customization

The conversation Preview area provides a Customize option, which allows you to personalize the look and feel of your preview, in accordance with your website and brand.

<img src="../images/mock-scenes-img16-customize-preview.gif" alt="Preview Customization" title="Preview Customization" style="border:1px solid gray; zoom:70%;">

This feature allows you to use one of the default themes, with either a Light or Dark background, or to create your own theme, save it, and use it across the scenes in your storyboard. There are four aspects of the conversation widget that you can customize:

* Background Image
* Overall Chat Widget
* User Message Bubbles – text and background colors.
* AI Agent (Bot) Message Bubbles – text and background colors for various components.


#### Background Image

The background image that is displayed on the mock website where the conversation widget is previewed can be customized. You need to provide a valid URL with the location of the image.

<img src="../images/mock-scene-customize-background-image.png" alt="Preview Customization - Background image" title="Preview Customization - Background image" style="border:1px solid gray; zoom:60%;">


#### Chat Widget

This option will let you customize the entire chat widget. This includes:

* Widget background-color
* Widget text color
* Widget border-color
* Widget divider color

<img src="../images/mock-scene-customize-chat-widget.png" alt="Preview Customization - Chat Widget" title="Preview Customization - Chat Widget" style="border:1px solid gray; zoom:60%;">


#### User Messages

This option is used to customize the color of the user message bubble and text.

<img src="../images/mock-scene-customize-user-messages.png" alt="Preview Customization - User Messages" title="Preview Customization - User Messages" style="border:1px solid gray; zoom:60%;">


#### AI Agent (Bot) Messages and Templates

This option is used to customize the color of the App message bubble and text. You can also customize the button template messages if any are used.

<img src="../images/mock-scene-customize-bot-messages.png" alt="Preview Customization - Bot Messages and Templates" title="Preview Customization - Bot Messages and Templates" style="border:1px solid gray; zoom:60%;">

**Message Templates**

<table border="1">
  <tr>
   <td><strong>TEMPLATE TYPE</strong>
   </td>
   <td><strong>TEMPLATE DEFINITION</strong>
   </td>
   <td><strong>COMMENTS</strong>
   </td>
  </tr>
  <tr>
   <td>Carousel
   </td>
   <td>
<ul>

<li>Carousels: For each Carousel:

<li>Image

<li>Header

<li>Description

<li>Buttons
</li>
</ul>
   </td>
   <td>
<ul>

<li>Maximum of five carousels per template.

<li>Maximum of three buttons per carousel.

<li>The image denotes the URL where the image is hosted.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Buttons
   </td>
   <td>
<ul>

<li>Message

<li>Buttons
</li>
</ul>
   </td>
   <td>
<ul>

<li>Maximum of three buttons.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>List
   </td>
   <td>
<ul>

<li>List Items

<li>An optional Primary button
For each List Item:
<ul>

<li>Header

<li>Description

<li>Image

<li>Button
</li>
</ul>
</li>
</ul>
   </td>
   <td>
<ul>

<li>Maximum of four list items per template.

<li>One button per list item.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Quick Reply
   </td>
   <td>
<ul>

<li>Text

<li>Buttons

<li>Button Images
</li>
</ul>
   </td>
   <td>
<ul>

<li>Maximum of 10 buttons.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Attachment
   </td>
   <td>
<ul>

<li>Attachment URL

<li>Text
</li>
</ul>
   </td>
   <td> 
   </td>
  </tr>
  <tr>
   <td>Image
   </td>
   <td>
<ul>

<li>Image Template URL

<li>Image Title – optional
</li>
</ul>
   </td>
   <td> 
   </td>
  </tr>
</table>

<img src="../images/mock-scene-customize-preview.png" alt="Preview Customization" title="Preview Customization" style="border:1px solid gray; zoom:60%;">

### Flow View

After you design, switch to the **Flow View** to see the scene in a flowchart.

<img src="../images/mock-scenes-img17-flow-view.png" alt="Flow view" title="Flow view" style="border:1px solid gray; zoom:70%;">

All the Scene Options mentioned in the previous section are available with the following exceptions:

* You cannot import a scene from the flow.
* You can Export results in a PDF document.