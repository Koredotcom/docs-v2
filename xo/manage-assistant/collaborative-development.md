
# Collaborative Development

The Platform allows cross-domain App sharing. You can share your app with one or more developers from the same or different enterprises enabling them to edit the shared app tasks, channels, and other settings.

		
## Sharing Bots

There are two ways of sharing an app with your co-developers – from Builder or from Admin Console (as Account Admin).


### From the Builder

1. To share the app with another Developer, log on to the **platform** and select the app you want to share.
2. Select **Manage > Users** through the **Product Switcher**.

    <img src="../images/manage-users.png" alt="Navigate to User Management" title="Navigate to User Management" style="border:1px solid gray;zoom:60%;">

3. From the left menu click **Manage Users**. Developers who have access to any of the ‘App Admin’ permissions, can invite new developers. The App Owner's details are present on this page by default.

    <img src="../images/manage-users-page.png" alt="Navigate to User Management" title="Navigate to User Management" style="border:1px solid gray;zoom:60%;">

4. Click the **Invite Users** button on the right side of the page. Enter the details of the developer, the role and click **+ Add**. You can add more than one developer at a time. 

    <img src="../images/add-users.png" alt="Add Users" title="Add Users" style="border:1px solid gray;zoom:60%;">

    You can assign Group and Role to the user on the **User Attributes** popup. This can be accessed by clicking the <img src="../images/user-attrib-button.png"> icon corresponding to each user. **Note** that you need to select a role to be able to access user attributes.

    <img src="../images/user-attributes.png" alt="User Attributes" title="User Attributes" style="border:1px solid gray;zoom:60%;">

5. Confirm by selecting **Share Invites** to add and share your app with one or more developers.
6. You can also use the **Invite User** option from the Dashboard to add a user to your account. 

    <img src="../images/invite-user.png" alt="Invite user to account" title="Invite user to account" style="border:1px solid gray;zoom:60%;">
 
To add users to workspace and invite them to access your agent from the Bot Builder, read the [Invite Members](../getting-started/accessing-the-platform.md#invite-members-to-your-workspace){:target="_blank"} section in the Using Workspace article.


### Change App Share Settings

From the Platform you can manage the developers working on your app. From the settings (3 dot) icon against each Developer you can:

* **Delete** – Click to delete the app for the selected developer. The developer immediately loses access to the app.
* **Promote AsOwner** – Click to change the selected developer to be the App Owner. When selected, you are immediately removed as App Owner and can no longer add or manage developers for this app.

!!! Note

    Settings for sharing for a app can only be modified by the App Owner.

		
### From Admin Console

To share an app with a developer or another user, if you do not have permission to invite new developers, it is essential for the App Admin to send an invitation to the developer and assign App Developer access.

Here are the steps for the account Admin to add users to your account.

1. Log on to [https://platform.kore.ai/](https://platform.kore.ai/) and select **Go To Admin Console**. You may be asked to login/re-login to the admin account. 

    <img src="../images/admin-console-navigation.png" alt="Navigate to Admin Console" title="Navigate to Admin Console" style="border:1px solid gray;zoom:60%;">

2. In the **Bot Administration** section from the right navigation go:
    1. to the **User Management > Users** section and click on **Invite new users**, or,
    2. to **Enrollment > Invite** section. You will be directed to the Invite user page.

3. Enter the email addresses of the users you want to send invitations to join your enterprise account. A maximum of 5 users can be invited at a time. Then, click **Send Invitations**.

    <img src="../images/invite-users-through-admin-console.png" alt="Invite users through Admin Console" title="Invite users through Admin Console" style="border:1px solid gray;zoom:60%;">

4. The invitee must accept the invitation sent by the **App Admin** to get access to as a **App User**. Once the invitation is accepted, the username gets reflected in the list of App users for your enterprise account.


### Assign App Builder Access

You can make changes to the App user settings by modifying the **User Profile settings** from the **Admin Console**.

Double click on the App User that you want to change the settings for and you can set the Admin as well as the Platform Access roles. [See here for more](../administration/user-management/role-management.md){:target="_blank"}.

		
### Working with Shared Apps

When a task, channel, or flow is claimed, the lock expires after 30 minutes, or when you exit the editing mode for the task, channel, or flow, whichever comes first. After 25 minutes, you are prompted to extend the lock, if desired. If you do not extend the lock before 30 minutes has elapsed, your changes are automatically saved, editing mode is ended, and the claim lock is removed.

If you try to edit a shared task, channel, or flow that is claimed, the message, _“Oops! The app is currently being edited by &lt; **Developer Name** >_” message is displayed.

Only the App Owner and developers that are shared to the app can access and edit the task, channel or flow.