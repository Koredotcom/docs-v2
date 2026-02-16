# Managing Your Users

**User Management** involves managing users and user groups.

* From the **[Users section](#users)**, you can view and manage your Kore.ai users' roles and status, and monitor user message activity.
* From **[User Settings section](#user-settings)**, you can define the user profile fields displayed to the user in their profile, such as address information, and whether the user can edit those fields.

## Users

You can manage users in your enterprise network from the Bot Administration page in the **User Management > Users** section.

<img src="../images/bac-users.png" alt="User Management Module" title="User Management Module" style="border: 1px solid gray;zoom:50%;"/>


The following list describes the columns displayed for each Kore.ai user.


<table border="1">
  <tr>
   <td><strong>COLUMN</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Name
   </td>
   <td>Displays the username and selection box.
   </td>
  </tr>
  <tr>
   <td>Email Id
   </td>
   <td>Registered email id of the user.
   </td>
  </tr>
  <tr>
   <td>Account Role
   </td>
   <td>Displays the role of the user.
   </td>
  </tr>
  <tr>
   <td>Status
   </td>
   <td>Displays the user status. One of:
<ul>

<li><strong>Active</strong> – The user is active and can interact with other platform users.

<li><strong>Inactive</strong> – Users invited by the Admin but are yet to join or accept the invitation.
<li><strong>Locked</strong> – The user exceeded the maximum number of login attempts. The status of a locked user can be changed to <strong>Unlock</strong>, <strong>Suspend</strong>, or <strong>Deactivate</strong>.
</li>
</ul>
   </td>
  </tr>
</table>

Clicking on a specific User row from the Users page opens the **User Details** page, from where you can modify the following:

* **[User Profile](#profile)**,
* **[Sessions/Devices](#sessionsdevices)**, and
* **[Manage Bots access](#manage-bots)**.

### Profile

You can modify the user profile information of a specific user in your account, for example, to update their address or title.

<img src="../images/bac-users-profile.png" alt="User Profile" title="User Profile" style="border: 1px solid gray;zoom:50%;"/>

The following fields are accessible from this page:

* **Status** can be:
    * _Active_: hovering over the information icon displays the last logged-in date and time.
    * _Not Active_: hovering over the information icon displays when the invite to join the account was sent.
    * _Suspended_: hovering over the information icon displays the last logged-in date and time. You can Activate User using the More icon on this dialog or the ACTIVATE button displayed when you hover over the user row in the Users page.

* **Groups** to which the user is assigned. Using the **Edit** link, you can select or deselect the groups for the given User. [Refer here for more on Managing Groups](managing-your-groups.md){:target="_blank"}.
* **Admin Role** status can be added or removed using the **Edit** link.
* **Bot Builder Access** status can be modified using the **Edit** link. [Refer here for more on Role Management](role-management.md){:target="_blank"}.
* User Details like First Name, Last Name, email id, etc., can be viewed and modified.  
Note that the email id is a read-only field and cannot be modified.


### Sessions/Devices

This tab displays the User activity – the session ID, device type the user used, and their last activity timestamp on that session.

You can use the Kill Session button to end a mobile or desktop session for the user.

!!! warning

    No confirmation message is displayed and the session is immediately and abruptly ended for the user.


<img src="../images/bac-users-sessions.png" alt="Sessions - User Activity" title="Sessions - User Activity" style="border: 1px solid gray;zoom:50%;"/>

### Cross-Workspace Session Management

The platform manages user sessions at the platform level rather than the workspace level. When users log in, a single session is created that works across all workspaces. This enables administrators to monitor active sessions for their users across all workspaces and terminate any user session, regardless of workspace.

#### Security and Privacy Considerations

* Privacy: Users should be aware that their sessions in one workspace might be visible to administrators of other workspaces they are part of.

* Enhanced Security: Cross-workspace monitoring helps detect suspicious activities.

* Session Management: Users may be logged out if an administrator from any workspace terminates their session.

#### Best Practices

For Administrators:

* Utilize the session management feature responsibly.
* Notify users before terminating sessions, especially those in other workspaces.
* Regularly review active sessions to ensure proper account usage.

For Users:

* Be aware that your sessions are visible across multiple workspaces.
* Log out of inactive sessions to maintain good security practices.
* Report suspicious session activity to the workspace administrator.

### Manage Bots

This tab displays the Bots to which the User has access and their role – Owner, Developer, or Tester.

As an admin, you may Edit or Delete the role of the User for a given Bot. Note that you cannot delete or modify the role of a Bot Owner, it is assigned at the time of Bot creation.

You can also select a Bot and assign a Bot role to the user. For more information, see [Bot roles](role-management.md#bot-roles){:target="_blank"}.

<img src="../images/bac-manage-bots.png" alt="Manage Bots" title="Manage Bots" style="border: 1px solid gray;"/>


### Other Options

<img src="../images/bac-users-more.png" alt="Other Options" title="Other Options" style="border: 1px solid gray;"/>


#### Reset a User Password

As a Bots Admin, you can send a password reset email to any user, including yourself, from the Bots Admin Console if Single Sign-On (SSO) is not enabled. You can reset the password using the **More** icon on the User Profile page.

The _password reset email_ sent message is displayed and an email is sent to the user with instructions about how to reset the password.

**Note**: When SSO is enabled, password policies are not in effect for Bots Admins or Kore.ai users, the SSO service provider handles the password policies.

!!! tip

    If SSO is enabled, Bots Admins can still log on to the Bots Admin Console directly using their password credentials and bypass SSO. For more information, see [Logging On Using Your Admin Password Instead of SSO](../security-and-control/using-single-sign-on.md#logging-on-using-your-admin-password-instead-of-sso){:target="_blank"}.


#### Delete User

As a Bots Admin, you can **Delete a User** using the **More** icon on the User Profile page. 
You can also **Delete a User** from the Users page by hovering over the **user row** and clicking the delete icon or by selecting a user and clicking the **Delete Selected** link.

!!! Note

    You cannot delete the Users if they are owners of the App. You must change the respective bot ownership to someone else to delete the user.

#### Transfer Ownership

This option is accessible only to the **Primary Master Admin**. It allows you to transfer ownership of a specific bot. To proceed, select the new account owner by entering their email ID or name.

## User Settings

On the **User Settings** section in the **User Management** module, you can manage the fields that Kore.ai users see on their **User Profile** page, such as **Company**, **Department**, and so forth.

<img src="../images/bac-user-settings.png" alt="User Settings" title="User Settings" style="border: 1px solid gray;zoom:50%;"/>


<table border="1">
  <tr>
   <td><strong>CONTROLS</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Default Fields Section
   </td>
   <td>The following user profile fields are displayed by default and cannot be disabled from the User Profile page for the user.
<ul>

<li><strong>First Name</strong>

<li><strong>Last Name</strong>

<li><strong>Profile Picture</strong>

<br>
You can also select or clear <strong>Allow Edits</strong> to enable/disable the user  from overwriting the data. Modifications to the user profile take effect when the user logs in next.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Controlled Fields Sections
   </td>
   <td>The following user profile fields are disabled by default and can be enabled by the Enterprise Admin or admin user:
<ul>

<li><strong>Company</strong>

<li><strong>Department</strong>

<li><strong>Title</strong>

<li><strong>Mobile Number</strong>

<li><strong>Work Number</strong>

<li><strong>Address (Number & Street)</strong>

<li><strong>Address (Street/Suite #)</strong>

<li><strong>City</strong>

<li><strong>State</strong>

<li><strong>Zip</strong>

<li><strong>Country</strong>

<br>
You can also select or clear <strong>Allow Edits</strong> to enable/disable the user from overwriting the data. Modifications to the user profile take effect when the user logs in next.
</li>
</ul>
   </td>
  </tr>
</table>