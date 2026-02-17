# Invite and Manage Account Users

The **Users** feature simplifies account administration through centralized workflows for inviting, importing, and managing users. The workflows work together to streamline user administration and ensure efficient collaboration, access control, and status monitoring.

**Key Features**

* **User Invitation**: Easily invite individual users or groups via email.
* **Invitation Management**: Resend invitations for users who haven't yet joined.
* **Bulk Import**: Add multiple users efficiently by uploading CSV or TXT files.
* **Active Directory Sync**: Synchronize user data directly from your organization's Active Directory.
* **Role Management**: Assign and reassign user roles to control access and permissions.
* **Status Tracking**: Monitor user statuses (active, inactive, locked) from a centralized dashboard.
* **Account Unlocking**: Quickly unlock user accounts that have been locked due to failed login attempts.
* **User Search**: Easily find specific users using the search functionality.
* **User Deletion**: Remove individual or multiple users from your AI for Process account as needed.

**Best Practices**

* Regularly review and update user roles.
* Use bulk import to add multiple users efficiently.
* Monitor the locked users and inactive invitations.
* Maintain users for effective account management.

## Users Dashboard

The dashboard displays user counts by status:

* **Active**: Users with active accounts who can interact with other AI for Process users.
* **Inactive**: Users invited by the admin but who have yet to join or accept the invitation.
* **Locked**: Users who have exceeded 5 failed login attempts and their accounts have been locked.

<img src="../images/users-count.png" alt="users count" title="users count" style="border: 1px solid gray; zoom:75%;">

It also shows detailed user information, including name, email, role, and status. For information on default system roles, click [here](../user-management/role-management.md#system-defined-roles){:target="_blank"}.

## Add a New User

The **Settings** Console provides two ways to add a new user to the system:

* Email invitation
* Import _.txt_ or _.csv_ file with user information in the pre-defined format.

### Invite (Email Invitation)

See [Invite a User](../user-management/invite-a-user.md){:target="_blank"} to learn how to add a user to your account via email invitation.

### Import (Bulk Import)

The import feature allows administrators to add multiple users at once using .txt or .csv files. To ensure compatibility, download the sample CSV file, add your user details to this file, and upload the file.

**Key Considerations**

* Valid file types are _.txt_ or _.csv_. No other file types are allowed.
* The file must contain the required user information, such as name, email ID, and status, to create a user profile in your AI for Process account.
* Each row should contain information for ONE user.
* You can use accepted delimiters like Comma (","), Pipe ("|"), Semi-Colon (";"), and Tab in the file.
* The first row in the file should be the field name used to identify the user data.
* "*" indicates mandatory fields in the sample file. Please ensure mandatory fields are provided.
* The **User Status** indicates the user’s status after import, and the corresponding actions are taken for *New*, *Update*, and *Delete* statuses.
* Entries with invalid email formats, missing domain name, or wrong email IDs are ignored during import.
* Once an entry in the file is validated, an email request is sent out to the user to activate their account.
* If a user is already active (joined admin’s account), the email invitation is not sent.

#### Import User Data File

The steps mentioned below, allow you to import users' data from a designated file into AI for Process.

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings" style="border: 1px solid gray; zoom:75%;">

2. On the **Users** dashboard, click **Add New User**, and select **Import**.
   <img src="../images/add-new-user-aip.png" alt="add user" title="add user" style="border: 1px solid gray; zoom:75%;">

3. Perform one of the following actions on the **Import Users** page:

* Click **Upload File**, then select and upload the user info file from your system.
<img src="../images/click-upload-file.png" alt="click upload file" title="click upload file" style="border: 1px solid gray; zoom:75%;">

* Drag and drop the file from your system into the **Upload File** window.

**Key Suggestions**

* Click and download the sample ._csv_ file for reference.

    <img src="../images/click-download-sample-file.png" alt="download sample file" title="download sample file" style="border: 1px solid gray; zoom:75%;">

* The fields are pre-defined in the sample file, and the data requirements are shown below:
<img src="../images/pre-defined-fields.png" alt="pre-defined fields" title="pre-defined fields" style="border: 1px solid gray; zoom:75%;">

* Ensure the column names and field mandates match your uploaded file and the sample file. Any mismatch results in an error, as shown in the screenshot below.
<img src="../images/mismatch-error.png" alt="fields mismatch error" title="fields mismatch error" style="border: 1px solid gray; zoom:75%;">

4. A preview window displays the file’s data with a file uploaded success message. Click **Continue** to import the file.
<img src="../images/success-import.png" alt="click settings" title="click settings" style="border: 1px solid gray; zoom:75%;">

5. Click **Continue** once the import is complete, and the following message appears.
<img src="../images/import-completed.png" alt="import completed" title="import completed" style="border: 1px solid gray; zoom:75%;">

6. The system validates the file for errors. If the user data contains errors, a window is displayed showing the import status and the reason for the errors.
<img src="../images/failed-import-entries.png" alt="failed import entries" title="failed import entries" style="border: 1px solid gray; zoom:75%;">

Correct the highlighted values based on the reason, and upload the file again. Then, follow **Steps 4 and 5** above.

The file takes a few minutes to import. You can see the progress in the dialog window. When completed, the following message is displayed.

<img src="../images/file-imported-successfully.png" alt="file imported successfully" title="file imported successfully" style="border: 1px solid gray; zoom:75%;">

Click **OK** to see the imported users on the dashboard. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The imported users are assigned the <b>Viewer</b> system role by default, which you can change. <a href="../role-management/#system-defined-roles" target="_blank">Learn more</a>.</p> 
</div>

<img src="../images/imported-entries.png" alt="imported entries" title="imported entries" style="border: 1px solid gray; zoom:75%;">

You can see the success/failed import status on the dashboard as highlighted below:

<img src="../images/success-failed-import-status.png" alt="success and failed import status" title="success and failed import status" style="border: 1px solid gray; zoom:75%;">

**Failed Import** 

The following message is displayed if the user data in the uploaded file fails to import:

<img src="../images/failed-import-message.png" alt="failed import message" title="failed import message" style="border: 1px solid gray; zoom:75%;">

You can identify which user data failed to import, review the actions completed by the user, and understand the reason for the failure. 

Once you know the cause, you can retry importing the corrected user data.

**Cancel Import**

The system cancels the import for data that fails due to validation errors, such as an incorrect email address. A window is displayed showing the import status and reason after the import is canceled.
<img src="../images/import-canceled.png" alt="import canceled" title="import canceled" style="border: 1px solid gray; zoom:75%;">

#### Import History

Click **Import History** in the **Import Users** window to view and analyze the import history of users in your account.
<img src="../images/click-import-history.png" alt="click import history" title="click import history" style="border: 1px solid gray; zoom:75%;">

The following window is displayed with the import date and time, the importing user, and the summary of successful and failed imports.
<img src="../images/import-history.png" alt="import history" title="import history" style="border: 1px solid gray; zoom:75%;">

## Delete a User/Bulk Delete

The **Delete** feature removes a user you’re managing from your AI for Process account.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>Only users included as Admin in the system with the required permissions can access the <b>Settings</b> Console.</p>
<p><ul><li>Deleting a user revokes their access and removes their data from your account. However, the user can still access their personal account on AI for Process. To rejoin your account, you must invite them again via email.</li>
<li>You cannot delete users if they have created and manage workflows in your account. The user must first remove all active workflows before they can be deleted.</li></ul></p></div>

**Steps to delete a user**

1. Click **Users Management** > **Users** on the left menu to access the **Users** dashboard.
2. Hover over the user entry you want to delete.
3. Click the **Delete** icon.
<img src="../images/single-delete.png" alt="single delete" title="single delete" style="border: 1px solid gray; zoom:75%;">

**Updated Screen**

<img src="../images/single-delete-result.png" alt="single delete result" title="single delete result" style="border: 1px solid gray; zoom:75%;">

**Bulk Delete**

1. Select the required users, and click the **Delete** icon at the bottom of the screen to delete multiple users in the list.
<img src="../images/click-delete-icon.png" alt="click delete icon" title="click delete icon" style="border: 1px solid gray; zoom:75%;">

2. Click **Remove** in the **Remove users** window.

    <img src="../images/click-remove.png" alt="click remove" title="click remove" style="border: 1px solid gray; zoom:75%;">

When a user's account and role assignments are permanently deleted, the user is removed from the list, and the **Total Users** and **Active Users** counts on the dashboard are updated accordingly.

**Updated Screen**

<img src="../images/bulk-delete-result.png" alt="bulk delete result" title="bulk delete result" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Using <b>Delete</b> removes the user permanently.</p>
</div>

## Search User 

Use the search field to find users by name:

1. Navigate to the **Users** dashboard.
2. Click the **Search** text field.
3. Enter the user’s **name** you want to search.

All the matching results are displayed. 

<img src="../images/all-matching-results.png" alt="matching results" title="matching results" style="border: 1px solid gray; zoom:75%;">

The following message is displayed if the user does not exist.
<img src="../images/user-does-not-exist.png" alt="user does not exist" title="user does not exist" style="border: 1px solid gray; zoom:75%;">

## Unlock a Locked User

Locked users cannot access their accounts without unlocking them on the **Settings** console. 

**Steps to unlock a locked user**

1. Navigate to **Settings** > **Users Management** > **Users** page.
2. Hover over the user entry with the status highlighted as “**_Locked_**.” 
3. Click the **Unlock** button.
<img src="../images/click-unlock.png" alt="click unlock" title="click unlock" style="border: 1px solid gray; zoom:75%;">

4. Click **Confirm** in the confirmation dialog.

The user’s account is unlocked successfully, and the status changes to _Active_.

## Change User Role

On the **Users** dashboard, you can change the account-level role for one or more users. Only the role allowed for the user type (admin or account) can be assigned. 

Changing the user role automatically assigns the designated permissions and access levels defined in the system.

To change a user’s role, follow the steps mentioned [here](../user-management/role-management.md#reassign-an-alternative-role-to-active-users){:target="_blank"}.

### Bulk Role Change

You can change and assign the same role to multiple users. However, to assign different roles, individual role changes must be made, as discussed in the previous section.

To perform bulk role change, follow the steps below:

1. Select the required users on the **Users** dashboard.
2. Click the **Role** dropdown and select the required option in the bottom pane.
<img src="../images/select-for-role-change.png" alt="select for role change" title="select for role change" style="border: 1px solid gray; zoom:75%;">

The role is updated for the selected users.
<img src="../images/bulk-role-changed.png" alt="select for role change" title="select for role change" style="border: 1px solid gray; zoom:75%;">

## Related Information

* **Settings Console** - [Learn more](../overview.md){:target="_blank"} about other AI for Process admin features.
* **Role Management** - [Learn more](../user-management/role-management.md){:target="_blank"} about managing default and custom roles in your account.
* **Monitoring: Audit Logs** - [Learn more](../monitoring/audit-logs.md){:target="_blank"} about tracking events and user activity in your account.




