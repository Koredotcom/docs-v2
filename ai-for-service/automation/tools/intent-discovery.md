[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Intent Discovery

The new Intent Discovery module helps you auto-extract popular intents from previous user conversations. It reduces the time and effort to build a AI Agent and leads to the success of your Conversational AI Agents Journey. This is available only for the English language and Enterprise users.

You can upload your historical transcripts in CSV format. After the transcripts are uploaded into the AI Agent to identify the different topics, intents, or conversations between the user and the AI Agent. It intelligently identifies all the intents available. You can review each intent to understand which conversations have resulted in identifying these intents. After the review, you can also see the underline utterances that resulted in identifying an intent. You can either add these intents as new intents for your AI Agent or pick specific utterances and train them as utterances for your existing dialogs and FAQs. So, it helps both ways – either create new intents or enhance the training you provide to your AI Agent.

<img src="../images/intent-discovery-demo-diagram.png" alt="Intent Discovery" title="Intent Discovery" style="border: 1px solid gray; zoom:50%;"> 


The Intent Discovery journey consists of the following steps:

1. [Create a Project](#create-a-project): You may have many business use cases to automate. Projects help manage intent discovery for each business use case separately – a project for a specific use case.
2. [Upload Transcripts](#upload-transcripts): Upload your use case-specific historical transcripts in CSV format. Conversations are extracted from the uploaded transcripts.
3. [Extract Intents:](#extract-intents) Intents and training data are extracted from the conversations.
4. [Train the Utterances](#train-the-utterances) to create new intents or add them as training data: You can add new intents as dialogs or FAQs or train them for existing dialogs or FAQs.

## Create a Project

1. Go to **Automation AI > Tools > Intent Discovery**.  
<img src="../images/intent-discovery-home.png" alt="Click Intent Discovery" title="Click Intent Discovery" style="border: 1px solid gray; zoom:50%;">  

2. Click the **Create Project** button.
3. Enter a name and a brief description of the project. **Note** that the character limit for Project Name is 256, and Description is 1000. Click **Proceed**.  
<img src="../images/intent-discovery-project.png" alt="Project name and description" title="Project name and description" style="border: 1px solid gray; zoom:50%;">  

4. The new project is created. You see the Intent Discovery page with the header **‘Projects / {{New Project’s Name}}’**.  
<img src="../images/upload-transcript.png" alt="Project Created" title="Project Created" style="border: 1px solid gray; zoom:50%;">  
  

The Intent Discovery landing page lists all the projects with conversational insights for each project, such as the status of the project, number of sessions, intents extracted, and results in terms of added dialogs, added FAQs, trained dialogs, and trained FAQs. Note that the result will be NA for the projects for which intent extraction is incomplete.

The status of a project can be any of the following, displayed in the Status column:

* No Files Uploaded
* Intents Not Extracted
* Intent Extraction In Progress
* Intents Extracted

<img src="../images/intent-discovery-page.png" alt="Different status of project" title="Different status of project" style="border: 1px solid gray; zoom:50%;">   

!!! note

    You can create a maximum of 10 projects per AI Agent. You can change an existing project’s name and description anytime.


## Upload Transcripts

On the Intent Discovery page for the new project, you can see a button to initiate the upload of the transcript file(s) and a link to download a sample transcript file.

<img src="../images/upload-transcript-button-click.png" alt="Upload Transcripts" title="Upload Transcripts" style="border: 1px solid gray; zoom:50%;">  


You can download the sample CSV file by clicking the link. Ensure to upload transcripts in the format specified in the sample file. Please note that **all the columns in the file must be filled**.


### Format of the CSV (Transcript) file

<img src="../images/sample-csv-file.png" alt="Sample CSV File" title="Sample CSV File" style="border: 1px solid gray; zoom:50%;">  



<style>
table, th, td {
  border: 1px solid black;
}
</style>
<table>
  <tr>
   <td>FIELD NAME
   </td>
   <td>DESCRIPTION
   </td>
  </tr>
  <tr>
   <td>Id
   </td>
   <td>The session ID of the conversation. (For all the conversations in a session, the Id must be the same.)
   </td>
  </tr>
  <tr>
   <td>Sender ID
   </td>
   <td>The ID of the AI Agent or human agent.  
   </td>
  </tr>
  <tr>
   <td>Other Party ID
   </td>
   <td>The ID of the user talking to the AI Agent or human agent.
   </td>
  </tr>
  <tr>
   <td>Direction
   </td>
   <td>The message direction – in (user input) or out (AI Agent/ human agent response).
   </td>
  </tr>
  <tr>
   <td>Message
   </td>
   <td>The message shown to the user or the AI Agent/agent, depending on the message direction.
   </td>
  </tr>
  <tr>
   <td>Message Type
   </td>
   <td>Format in which the message is sent or received – text/html.
   </td>
  </tr>
  <tr>
   <td>Created on
   </td>
   <td>Date & time on which the message is sent or received.
   </td>
  </tr>
</table>



### Limitations

* Number of transcripts files allowed: Up to 5 CSV files per project.
* Maximum size of CSV transcript file: 1MB each


### Steps to upload the transcripts:

1. Click the **Upload Transcript** button, and then browse and select the transcripts files (CSV format). The selected files are uploaded, and you see a prompt to manage the transcripts on the next page.  
    
    <img src="../images/browse-for-transcript.png" alt="Browse for Transcript" title="Browse for Transcript" style="border: 1px solid gray; zoom:50%;">    

2. If some transcript files are uploaded but No intents extracted so far, the **Manage Transcripts** button is displayed as shown in the screenshot below.  
    
    <img src="../images/manage-transcripts.png" alt="Manage Transcript" title="Manage Transcript" style="border: 1px solid gray; zoom:50%;">
    
3. On clicking **Manage Transcripts**, you can see the **Transcripts** dialog box with the list of all the transcript files. Below details are displayed on the window:
    1. File Name: Name of the transcript file uploaded
    2. Upload Time: Time of transcript upload
    3. Sessions: Count of sessions in the transcript, gets populated after the successful extraction of conversations. 
    4. Status, which can be one of the following:
        * Conv. Extraction In-progress: 
        * Conversations Extracted
        * Intents Extracted
        * Invalid File
        * Upload Failed

    <img src="../images/transcript-list.png" alt="List of Transcripts" title="List of Transcripts" style="border: 1px solid gray; zoom:50%;">


The dialog box has the provision to download a sample file using the **Sample File** button and upload additional transcript files by clicking the **Upload Transcripts** button.


### View Conversations in the Transcript

Upon successful upload of the transcript(s), the platform extracts the conversations from the uploaded files. You can view all the conversations, and the chat messages exchanged between the end user and the AI Agent/human agent.

The platform displays the conversation session summary, which includes the count of the AI Agent messages and user messages. You need to select a **Date Filter** under **Contents** to display the details.  
<img src="../images/conversation-in-transcript.png" alt="Conversations in Transcript" title="Conversations in Transcript" style="border: 1px solid gray; zoom:50%;">


If a conversation is not useful or is not contributing to the intent, you can delete the specific conversation. Deleting a conversation also impacts the conversation count and average message count in the columns.


### Delete Transcripts

You can delete the uploaded transcript file if the file is not required anymore, in case the upload was incorrect, or if the conversation has been extracted but the file is not useful.

On hovering any row, the **delete** icon is displayed, which is used to delete that specific Transcript.  
<img src="../images/delete-transcript.png" alt="Delete Transcript" title="Delete Transcript" style="border: 1px solid gray; zoom:50%;">


## Extract Intents

The next step is intent extraction. 

Click the **Extract Intents** button on the Transcripts dialog box. You can see a message about intents being extracted. This process may take a few minutes depending on the number and size of the transcript files.  
<img src="../images/intent-extraction-in-progress.png" alt="Intent extraction in progress" title="Intent extraction in progress" style="border: 1px solid gray; zoom:50%;">

After the intent extraction is completed, you can see the list of extracted intents along with session count, qualified utterances, and actions.  
<img src="../images/intents-extracted.png" alt="Intents Extracted" title="Intents extracted" style="border: 1px solid gray; zoom:50%;">


### Extracted Intent Details

Clicking anywhere on the extracted Intents row displays a pop-up dialog box to view the details of the extracted Intent. The title of the dialog box is the extracted Intent name.  
<img src="../images/extracted-intent-details-slider.png" alt="Details of Extracted Intent" title="Details of Extracted Intent" style="border: 1px solid gray; zoom:50%;">

The dialog box shows a table with individual rows for each session. The table has below columns: 

* Session ID: The session ID and the Date and Time of the Session.
* Utterances: The list of utterances qualifying the extracted Intent. 
    * The platform shows only 3 utterances per session (row). The remaining count of the utterances is shown as a chip. 
    * On clicking the chip, you see all the utterances for the corresponding session.
    * You can **bookmark** the utterances.

* Status: A dropdown that shows whether the session item has been reviewed. By default, it  shows **Yet to Review**. You can change it to **Reviewed**.
* **View Transcripts** action button: This button is present in the Status column of each row, next to the drop-down. It helps you view the detailed conversion of the Session. On clicking the icon, the [**Session Details** dialog box](#session-details) is displayed.



### Session Details

The **Transcript** dialog box shows the summary of the session. The detailed chat is displayed below the summary.  
<img src="../images/session-summary.png" alt="Transcript - Session Summary" title="Transcript - Session Summary" style="border: 1px solid gray; zoom:50%;">


## Train the Utterances

In a scenario where the utterances cannot be mapped to the existing intents, you can create a new intent. Once the intents are listed, you can perform the following actions for the intents:

* Add a new Dialog Task or FAQ
* Train them for an existing Dialog Task or FAQ
* Change the status of utterances


### Add a new Dialog Task intent

1. Click the **Add/Train** dropdown across the intent, then select the **Dialog Task** option under **Add**. The **Add Dialog Task** dialog box for the intent is displayed.  
<img src="../images/add-dialog-task.png" alt="Choose to Add Dialog Task" title="Choose to Add Dialog Task" style="border: 1px solid gray; zoom:50%;">  

2. Provide a name and description for the new intent.
3. All the utterances qualified for the extracted intent are displayed in a table. The bookmark icon appears if you have bookmarked this utterance in the Extracted Intent Details dialog box.  
<img src="../images/add-dialog-task-st1.png" alt="Add dialog task intent - Qualified utterances" title="Add dialog task intent - Qualified utterances" style="border: 1px solid gray; zoom:50%;">  

4. Select all the required utterances and click the **Add to Bot** button. A confirmation message is shown on adding a new Dialog Task.  
<img src="../images/add-dialog-task-st2.png" alt="Add dialog task intent - Add required utterances to bot" title="Add dialog task intent - Add required utterances to bot" style="border: 1px solid gray; zoom:50%;">

The **Actions** column text for the intent will reflect the addition of a dialog task. For example:

* If **Added ‘n’ new Dialog Tasks** text/tag is existing, then the count increases by 1. For example: **Added 1 new Dialog Task** will be changed to **Added 2 new Dialog Tasks**.
* If there are no intents created so far, then the text becomes **Added 1 new Dialog Task**. 

Additionally, this  change will reflect under the **Results** column against the project name on the Intent Discovery homepage. For example:

* If **Added ‘n’ new Dialog Tasks** tag/text is existing, then the count is increased by 1. For example: **Added 1 new Dialog Tasks** will be changed to **Added 2 new Dialog Tasks.**
* If there are no Dialog tasks created so far, then the text becomes  **Added 1 new Dialog Task**.


### Train a Dialog task

1. Click the **Add/Train** dropdown across the intent, then select the **Dialog Task** option under **Train**. The **Train Dialog Task** dialog box for the intent is displayed.  
  <img src="../images/train-dialog-task.png" alt="Choose to Train Dialog Task" title="Choose to Train Dialog Task" style="border: 1px solid gray; zoom:50%;">  
  
  <img src="../images/train-dialog-task-st1.png" alt="Train dialog task - Dialog Tasks list" title="Train dialog task - Dialog Tasks list" style="border: 1px solid gray; zoom:30%;">  
  
2. Select the dialog task to be trained from the **Intent** drop-down and select all the required utterances from the table below. Click **Add Utterances**.  

  <img src="../images/train-dialog-task-st2.png" alt="Train dialog task - Select dialog task" title="Train dialog task - Select dialog task" style="border: 1px solid gray; zoom:50%;">  

3. Once the existing Dialog task is trained with the selected Utterances, a confirmation message is shown.  

  <img src="../images/train-dialog-task-st2.png" alt="Train dialog task - Confirmation" title="Train dialog task - Confirmation" style="border: 1px solid gray; zoom:50%;">  


The **Actions** column text for the intent will reflect the training of a new dialog task. For example:

* If **Trained ‘n’ new Dialog Tasks** text/tag is existing, then increase the count by 1. For example: **Trained 1 new Dialog Task** will be changed to **Trained 2 new Dialog Tasks.**
* If there are no intents created so far, then append the text with **Trained 1 new Dialog Task**.

Additionally, this change will reflect under the **Results** column against the project name on the Intent Discovery homepage. For example:

* If **Trained ‘n’ new Dialog Tasks** tag/text is existing, then increase the count by 1. For example: **Trained 1 new Dialog Tasks** will be changed to **Trained 2 new Dialog Tasks**.
* If there are no Dialog Tasks trained so far, then append the text with **Trained 1 new Dialog Task**.


### Add a new FAQ intent

1. Click the **Add/Train** dropdown across the intent, then select the **FAQ** option under **Add**. The **Add FAQ** dialog box for the intent is displayed.  
<img src="../images/add-faq.png" alt="Choose to add FAQ" title="Choose to add FAQ" style="border: 1px solid gray; zoom:50%;">  

2. Provide a name and description for the new intent. 
3. All the Utterances qualified for the Extracted Intent are displayed in a table. The bookmark icon appears if the user has bookmarked this utterance in the Session summary dialog box. 
4. Select all the required utterances and click **Next**.  
<img src="../images/add-faq-st1.png" alt="Add FAQ Intent - Select required utterances" title="Add FAQ Intent - Select required utterances" style="border: 1px solid gray; zoom:50%;">  

5. On the next dialog box, provide the FAQ question text to be created as an FAQ, along with the required AI Agent Response to be shown. All the selected utterances from the previous screen are added as alternative questions for this FAQ. 
6. Provide or select other features of the FAQ, like AI Agent response channel, Display name, reference ID, etc. as per your need and preference, and click the **Add to Bot**.  
<img src="../images/add-faq-st2.png" alt="Add FAQ Intent - Add to bot" title="Add FAQ Intent - Add to bot" style="border: 1px solid gray; zoom:50%;">  

7. A confirmation message is shown on adding a new FAQ.  
<img src="../images/add-faq-st3.png" alt="Add FAQ Intent - Confirmation" title="Add FAQ Intent - Confirmation" style="border: 1px solid gray; zoom:50%;">  

The **Actions** column text for the intent will reflect the addition of an FAQ. For example:

* If **Added ‘n’ new FAQs** text/tag is existing, then the count increases by 1. For example: **Added 1 new FAQ** will be changed to **Added 2 new FAQs**.
* If there are no intents created so far, then the text becomes **Added 1 new FAQ**. 

Additionally, the adding will reflect under the **Results** column against the project name on the Intent Discovery homepage. For example:

* If **Added ‘n’ new FAQs** tag/text is existing, then the count increases by 1. For example: **Added 1 new FAQs** will be changed to **Added 2 new FAQs**.
* If there are no Dialog tasks created so far, then the text becomes **Added 1 new FAQ**. 


### Train an FAQ

1. Click the **Add/Train** dropdown across the intent, then select the **FAQ** option under **Train**. The **Train FAQ** dialog box for the intent is displayed.  
<img src="../images/train-faq.png" alt="Choose to train FAQ" title="Choose to train FAQ" style="border: 1px solid gray; zoom:50%;">  

2. Select the FAQ to be trained from the **FAQ** drop-down. A label box showing the current Bot Response appears. Select all the required utterances from the table below and click **Add Utterances**.  
<img src="../images/train-faq-st1.png" alt="Train FAQ - Add required utterances" title="Train FAQ - Add required utterances" style="border: 1px solid gray; zoom:50%;">  

3. Once the existing FAQ is trained with the selected Utterances, a confirmation message is shown.  
<img src="../images/train-faq-st2.png" alt="Train FAQ - Confirmation" title="Train FAQ - Confirmation" style="border: 1px solid gray; zoom:50%;"> 


The **Actions** column text for the intent will reflect the training of an FAQ. For example:

* If **Trained ‘n’ new FAQs** text/tag is existing, then the count increases by 1. For example: **Trained 1 new FAQ** will be changed to **Trained 2 new FAQs**.
* If there are no intents created so far, then the text becomes **Trained 1 new FAQ**.

Additionally, the training will reflect under the **Results** column against the project name on the Intent Discovery homepage. For example:

* If **Trained ‘n’ new FAQs** tag/text is existing, then the count increases by 1. For example: **Trained 1 new FAQs** will be changed to **Trained 2 new FAQs**.
* If there are no Dialog tasks created so far, then the text becomes **Trained 1 new FAQ**. 

You can view the details of the intent action by clicking the **View** icon under the Actions column next to the text.  

<img src="../images/click-view-on-intent.png" alt="Click View on Images" title="Click View on Images" style="border: 1px solid gray; zoom:50%;">  
  
<img src="../images/view-intent-activity.png" alt="Intent Activity" title="Intent Activity" style="border: 1px solid gray; zoom:50%;">

### Change the status of utterances

You can change the status of utterances between **Yet to Review** and **Reviewed** on the 
[Extracted Intent Details](#extracted-intent-details) dialog box. You can change the status of one or multiple utterances in a go as per requirement.

<img src="../images/change-utterance-status.png" alt="Change status of utterance" title="Change status of utterance" style="border: 1px solid gray; zoom:50%;">


## Reusing an existing project

There may be instances where you may need additional intents in an existing project and can achieve the same by adding transcript files to the project. The steps to upload additional transcript files are the same as uploading transcripts to a new project. Intent extraction can be performed multiple times based on need. For example, if, after having extracted intents previously, there is a need to add more intents, you can upload additional transcripts and extract intents again. Also, existing but no longer relevant transcript files can be deleted from a project. These two features ensure that an existing project becomes reusable.

The number of files and the file size limitations remain the same.

Uploading new transcript files will cause deletion of below data from the project:

* Extracted intents
* Summaries generated
* Utterances segregated for each session
* Status flag for each session
* Bookmarks of the utterances

Please note that the previously loaded transcript files will not be deleted while uploading new ones. Re-extraction of intents will restore the above-deleted project data.


## Deleting a project

You can also delete the project if it is no longer required. Since a maximum of 10 projects can be created within a AI Agent, you may need to delete a past, unwanted project to make a place for a new one.

<img src="../images/delete-project.png" alt="Delete a project" title="Delete a project" style="border: 1px solid gray; zoom:50%;">  
  
  <img src="../images/project-delete-confirmation.png" alt="Delete Project - Confirmation" title="Delete Project - Confirmation" style="border: 1px solid gray; zoom:50%;"> 


When you delete a project, all the corresponding data in the project is automatically deleted, which includes: 

* Transcripts 
* Extracted intents
* Summaries generated
* Utterances segregated for each session
* Status flag for each session
* Bookmarks of the utterances

!!! note

    Deletion of a project will have no impact on the Dialog Tasks/FAQ’s that have been trained using the intents extracted from the deleted projects.
