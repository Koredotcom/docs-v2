# App Profile

To modify the general settings of an app:

1. Open the app.
2.  Navigate to **App Settings > App Profile**.  
<img src="../images/app-prof-img1-build-configurations-general-settings.png" alt="General Settings" title="General Settings" style="border: 1px solid gray;zoom:50%;"/>

## General App Settings

Modify one or more of the settings described in the following table.

<table border="1">
  <tr>
   <td><strong>FIELD</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>App Name
   </td>
   <td>The name of the App. Click the <strong>Edit</strong> <img src="../images/app-prof-editicon.png" width="20" style="border: 1px solid gray;"> icon to change the App name. This field is required.

   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>The description of the App. This field is required.
   </td>
  </tr>
  <tr>
   <td>Icon
   </td>
   <td>The icon image for the app is displayed in the app Builder, and the end-user interface, as shown in the previous illustration.  
   Users can choose an icon from the app icon dropdown and select a color from the available options. They can also upload a custom icon in <strong>PNG</strong> or <strong>JPG</strong>  format with a maximum size of <strong>80x80 pixels</strong>.
   </td>
  </tr>
  <tr>
  </tr>
  <td>Answers</td>
  <td>
  Use the following options to configure the use of Search AI Answers.
  
  <b>Intent Identification Priority</b>: This priority is used when the app needs to identify the intent from the initial user utterances. This can take the following values:
  
   <ul> 
    <li> Automation first, Search AI as Fallback: The assistant prioritizes the automation framework for identifying the intent and answering the user input. If intent identification or action fails, the assistant uses the Search AI to generate a response.</li>
    <li> Search AI first, Automation as Fallback: The assistant uses the Search AI application to answer. If no satisfactory match is found within the Search AI sources, the assistant uses the automation framework to handle the user inputs.</li>
  </ul>
  
  <b>Use Search AI for Unrecognized Inputs During Dialogs</b>: This option enhances the assistant's ability to handle diverse user inputs during Automation AI Dialog Tasks. If the NLP Engine fails to recognize an utterance, the system passes unidentified user inputs to Search AI, allowing access to the knowledge base mid-dialog. This improves conversation flow, reduces "I don't understand" responses, and allows for more diverse and comprehensive assistance throughout the dialog.
  
  </td>
  <tr>
   <td>Target Audience (Available only for enterprise accounts)
   </td>
   <td>
<ul>

<li>Select <strong>General Public</strong> if the App is for public use for both managed and unmanaged users in your domain. App assignments are not required and when the Apps Admin deploys the App, it is available for use by all domain users. Use this option to make an App widely available for all user types.

<li>Select <strong>Enterprise Users</strong> if the App is for managed users only in a domain, for example, for your employees or paid customers. After the Apps Admin approves and deploys this app, it is not available to any managed users unless explicitly assigned by the Apps Admin. Use this option when you want to control which managed users in your domain can access and set up this AI Agent on their devices.
Once the <strong>Target Audience</strong> is defined and saved, you cannot change them.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Default Language
   </td>
   <td>This is uneditable and is set at the time of App creation.
   </td>
  </tr>
  <tr>
   <td>App Id
   </td>
   <td>Non-editable, assigned by the platform. It can be copied for use in API calls etc..
   </td>
  </tr>
  <tr>
   <td>Variable Namespaces
   </td>
   <td>You can categorize variables using Namespaces and map them to various components. The XO Platform will load the variables only from the mapped namespaces while executing specific components.
   </td>
  </tr>
  <tr>
   <td>Subdomain (aka Tenancy URL)
   </td>
   <td>Click <strong>Yes</strong> to enable the use of tenancy. When the tenancy is defined, the end-user is prompted to enter a tenant name as part of the URL for the AI Agent, for example, <em>iana</em>, for the <em>www.<strong>iana</strong>.org</em> tenant-specific URL. When enabled define the following properties:
<ul>

<li><strong>Help Hint</strong> – The text displayed to the end-user to prompt the user to enter a tenant-specific URL for the AI Agent.

<li><strong>Base URL</strong> – The base URL for the AI Agent that the end-user must specify their company to complete the tenant-specific URL using the following syntax: <em>https://www.{iana}.org/</em> where <em>{iana}</em>, including the braces, represents the tenant name.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Show link for task setup/execution
   </td>
   <td>
<ul>

<li>Select <strong>Yes</strong> to display a link to enable the choice for a user to input information used to execute a task in a user interface form or input the data directly into the message input field, for example, <em>Enter the title for new Asana task. To make edits, click here. </em>where <em>here</em> is a link to a form with fields.

<li>When <strong>No</strong> is selected, the user can only input information for the task in the message input field. For example, <em>Enter the title for a new Asana task</em>.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Error Message(s)
   </td>
   <td>Edit or add custom <strong>HTTP Status Codes</strong> and error messages for your AI Agent. For more information, see <a href="#customizing-error-messages">Customizing Error Messages</a>.
   </td>
  </tr>
</table>

Any edits made to the **App Profile** are auto-saved.

## Customizing Error Messages

In the Builder, each AI Agent and task contains a set of predefined error messages along with actions for standard HTTP Status codes returned for an HTTP Request method. In most cases, the default response and action are sufficient for an end-user response, however, you may need to handle other HTTP Status codes not defined by default, or customize the error message itself, or change the default response by Kore.ai in the event of an error. This topic describes how to customize and create error messages for Kore.ai Agents and tasks. When you create an AI Agent or a task, you can add or customize error messages for HTTP Status codes in the **Error Messages** section of the AI Agent or task settings. 

<img src="../images/app-prof-img2-general-settings-error-messages.png" alt="Error Messages" title="Error Messages" style="border: 1px solid gray;zoom:50%;"/>

### Custom Status Codes

There are approximately 25 HTTP Status codes defined by default for an AI Agent or task. **To customize an HTTP Status code**

  1. Open the app or task in UXO.
  2. Navigate to **Settings**.
  3. On the **App Profile** screen, scroll down to locate the **Error Messages** section.
  4. Click the **Edit** <img src="../images/app-prof-editicon.png" width="20" style="border: 1px solid gray;"> icon for the code that you want to customize to open the **Setup Error Message** dialog.  

      <img src="../images/app-prof-img3-general-settings-error-messages-setup.png" alt="Setup Error Message" title="Setup Error Message" style="border: 1px solid gray;zoom:50%;"/>  

  5. In the **Message Type** field, select one of:
    1. **Custom** – Displays a **Custom Message** field to define an error-specific message for the end-user.
    2. **Source** – Displays the **Error Paths** field where you can define the JSON path from the JSON response payload for HTTP Status codes other than those in the 2XX range (success messages).

  6. In the **Action** field, specify the action to take when the number of consecutive errors defined in the **Error Recurrence** field is reached. Select one of:
    1. **Disable** – The task is set to **Inactive** when the error occurs. The end-user can activate the task when needed.
    2. **Reschedule** – Displays the **Retry Interval** field used to define the elapsed time in minutes after which to retry the task when the error occurs.
    3. **Disable Auth** – When the error occurs, the authorization mechanism defined for the task is disabled. Any other task that uses the same authorization mechanism is also disabled.
    4. **Notify** – Displays the error message in the end-user interface.  
  <img src="../images/app-prof-img4-general-settings-error-messages-setup-actions.png" alt="Action on Error" title="Action on Error" style="border: 1px solid gray;zoom:50%;"/>   

  7. In the **Message** field (available only for the default messages), enter the text message displayed to the end-user.

  8. In the **Error Recurrence** field, specify the number of consecutive error codes must be returned before the action is executed. By default, the **Error Recurrence** field is set to ” 1 “.
  
  9. Click **Add** to save and close the **Setup Error Message** dialog for your custom error message.

To create a new HTTP Status code, click **Add Error Message**, define the fields for your new code as described in the preceding section, and then click **Add.**
