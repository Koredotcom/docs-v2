# Email Settings

Agents can add or remove recipients in the `To`, `CC`, and `BCC` fields, while organizations control whether to enable this capability. This flexibility helps contact centers maintain compliance by restricting edits where required or allowing them when needed. The Email Settings group contains all general email configuration options.

Administrators can access these settings from the following path:

Contact Center AI > Configurations > Settings > System Settings > Email Settings.

* The Allow Agents to Edit Distribution Fields in Reply or Reply All setting enables agents to modify the `To`, `CC`, and `BCC` fields when replying or replying all to email conversations.

* The Inline Email ID Suggestions setting displays contact suggestions while agents type. 

* Turning on Send Confirmation for Emails displays a pop-up when agents select Send on any email.  
    <img src="../images/email-settings-options.png" alt="Edit Distribution" title="Edit Distribution" style="border: 1px solid gray; zoom:70%;"> 

Steps to configure Inline Email ID Suggestions:

1. Select `Bulk Upload`.  
2. Supervisors can either select to upload a file or drag the file. The CSV must include the following columns:
    1. Contact Name
    2. Email Address
    3. Tags (Optional)  
3. After uploading, map the CSV fields to the system fields and select `Validate`.  
4. The system displays the validation results. Select `Save`. The system updates the contact list.  

## Delete Contacts

Steps to delete contacts from the contact list:

1. Select a contact and select the Bin icon in the right corner.
2. Select `Delete` to confirm deletion.

Email Settings is an account-level setting. The system enables it by default for all agents. Contact centers that require fixed distribution lists can disable this setting to prevent edits and verify compliance.

### Related Link

* [Email Interactions](../../../console/interacting-with-customers.md#emails)