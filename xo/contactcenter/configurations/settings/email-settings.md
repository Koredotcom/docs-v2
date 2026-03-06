# Email Settings

Agents can add or remove recipients in the `To`, `CC`, and `BCC` fields, while organizations control whether to enable this capability. This flexibility helps contact centers maintain compliance by restricting edits where required or allowing them when needed. The Email Settings group contains all general email configuration options.

Administrators can access these settings from the following path:

Contact Center AI > Configurations > Settings > System Settings > Email Settings.

* The Allow Agents to Edit Distribution Fields in Reply or Reply All setting enables agents to modify the `To`, `CC`, and `BCC` fields when replying or replying all to email conversations.

* The Inline Email ID Suggestions setting displays contact suggestions while agents type. 

* Turning on Send Confirmation for Emails displays a pop-up when agents select Send on any email.  

* The Email Work Bin setting lets agents park email conversations without ending them. Turning on this setting enables agents to set aside email interactions and resume them later temporarily.

* The Allow Outbound Emails in All Agent Statuses setting lets agents send outbound emails regardless of their current status or email capacity. Turning on this setting enables outbound email sending even when agents are in non-available statuses or at full email capacity.  
<img src="../images/email-settings-options.png" alt="Edit Distribution" title="Edit Distribution" style="border: 1px solid gray; zoom:70%;"> 

Steps to configure Inline Email ID Suggestions:

1. Select `Bulk Upload`.  
2. Supervisors can either select to upload a file or drag the file. The CSV must include the following columns:
    1. Contact Name
    2. Email Address
    3. Tags (Optional)  
3. After uploading, map the CSV fields to the system fields and select `Validate`.  
4. The system displays the validation results. Select `Save`. The system updates the contact list.  

Steps to configure the Email Work Bin:

* Enable the option to let customer replies wait for the last handling agent before rerouting.
* Define the wait duration for the system to hold the conversation before applying queue routing. If the administrator does not enable the wait option, the system applies standard queue routing when the last handling agent is unavailable.  
<img src="../images/email-bin.png" alt="Email Work Bin" title="Email Work Bin" style="border: 1px solid gray; zoom:70%;"> 

The configuration controls whether replies prioritize the last handling agent or immediately follow existing routing rules.


## Delete Contacts

Steps to delete contacts from the contact list:

1. Select a contact and select the Bin icon in the right corner.
2. Select `Delete` to confirm deletion.

Email Settings is an account-level setting. The system enables it by default for all agents. Contact centers that require fixed distribution lists can disable this setting to prevent edits and verify compliance.

### Related Link

* [Email Interactions](../../../console/interacting-with-customers.md#emails)