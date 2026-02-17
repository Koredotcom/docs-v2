# Role Management

Roles and Permissions help in organizing the developer community based on the scope of their work.

* By default the roles of **Master Admin**, **Bot Owner**, **Bot Developer** and **Bot Tester** are created by the system.
* Each role has set of permissions allowed.
* You can edit the permission settings for Bot Developer and Bot Tester but not for Master Admin and Bot Owner roles.
* Users can be assigned to these roles, except Bot Owner which gets assigned when a User creates a Bot.

Apart from these the role of **Primary Master Admin** is created and assigned to the creator of the account.

These roles can be classified into:

* **[Admin Roles](#admin-roles)** which help in account management, and
* **[Bot Roles](#bot-roles)** which help in bot development.


## Admin Roles

An admin role is a set of pre-defined permissions for managing the user community. In this section, we talk about Admin roles, the permissions associated with them, how to create and assign these admin roles to users.


### Built-in Admin Role

By default, a Master Admin role is created and this role can be assigned to any user for admin access. The various permissions granted to the Master Admin role are listed below:

<table border="1">
  <tr>
   <td><strong>PERMISSION</strong>
   </td>
   <td><strong>MASTER ADMIN</strong>
   </td>
  </tr>
  <tr>
   <td>Invite
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Import Users / Sync
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Directory Sync
   </td>
   <td>Edit
   </td>
  </tr>
  <tr>
   <td>Manage Users
   </td>
   <td>Edit
   </td>
  </tr>
  <tr>
   <td>Manage User Settings
   </td>
   <td>Edit
   </td>
  </tr>
  <tr>
   <td>Manage Groups
   </td>
   <td>Edit
   </td>
  </tr>
  <tr>
   <td>Manage Custom Admin Roles
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Manage Built-In Admin Roles
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Manage Bot Roles
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Manage Deployment
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Enterprise Bots
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Consumer Bots
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Smart Bots
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Preferences
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Single Sign On
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Kore.ai Connector
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Enterprise Key
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>API Scopes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>View and Run Audit Reports
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>View and Run Bot Chat History
   </td>
   <td>Yes
   </td>
  </tr>
</table>



### Custom Admin Role

The Master Admin can create custom Admin roles and assign the same to users. The following permissions can be granted to an Admin role.


<table border="1">
  <tr>
   <td><strong>Permission</strong>
   </td>
   <td><strong>Access Levels</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Invite
   </td>
   <td>Yes, No
   </td>
   <td>Invite Users via email; Invite users already imported
   </td>
  </tr>
  <tr>
   <td>Import Users / Sync
   </td>
   <td>Yes, No
   </td>
   <td>Bulk Import users via files
   </td>
  </tr>
  <tr>
   <td>Directory Sync
   </td>
   <td>Yes, No
   </td>
   <td>Enroll users via Directory Sync
   </td>
  </tr>
  <tr>
   <td>Manage Users
   </td>
   <td>Yes, No
   </td>
   <td>Manage user profile, user status, and role assignments
   </td>
  </tr>
  <tr>
   <td>Manage Groups
   </td>
   <td>Yes, No
   </td>
   <td>Create a local group; manage user membership, view distribution lists (DLs)
   </td>
  </tr>
  <tr>
   <td>Manage Custom Admin Roles
   </td>
   <td>Yes, No
   </td>
   <td>Set up and manage Custom Admin Roles. Assign/Revoke users
   </td>
  </tr>
  <tr>
   <td>Manage Built-In Admin Roles
   </td>
   <td>Yes, No
   </td>
   <td>Assign users to / revoke users from built-in admin roles
   </td>
  </tr>
  <tr>
   <td>Manage Bot Roles
   </td>
   <td>Yes, No
   </td>
   <td>Set up and manage bot roles. assign/revoke users
   </td>
  </tr>
  <tr>
   <td>Manage Deployment
   </td>
   <td>Yes, No
   </td>
   <td>Approve & publish bot (tasks) deployment requests
   </td>
  </tr>
  <tr>
   <td>Enterprise Bots
   </td>
   <td>Yes, No
   </td>
   <td>Assign approved Enterprise bot tasks to managed users
   </td>
  </tr>
  <tr>
   <td>Consumer Bots
   </td>
   <td>Yes, No
   </td>
   <td>Manage consumer bots, tasks, and channels
   </td>
  </tr>
  <tr>
   <td>Smart Bots
   </td>
   <td>Yes, No
   </td>
   <td>Manage smart bots, tasks, and channels
   </td>
  </tr>
  <tr>
   <td>Preferences
   </td>
   <td>Yes, No
   </td>
   <td>Manage auto deployments and assignments
   </td>
  </tr>
  <tr>
   <td>Single Sign On
   </td>
   <td>Yes, No
   </td>
   <td>Configure and manage Single Sign On
   </td>
  </tr>
  <tr>
   <td>Kore.ai Connector
   </td>
   <td>Yes, No
   </td>
   <td>Initiate, enable & disable Kore.ai connector
   </td>
  </tr>
  <tr>
   <td>Enterprise Key
   </td>
   <td>Yes, No
   </td>
   <td>View key used for encrypting enterprise data
   </td>
  </tr>
  <tr>
   <td>API Scopes
   </td>
   <td>Yes, No
   </td>
   <td>Setup API scopes to manage all users, roles, and bots in your account
   </td>
  </tr>
  <tr>
   <td>View and Run Audit Reports
   </td>
   <td>Yes, No
   </td>
   <td>Access Audit Reports; Ability to run reports; filter criteria, etc
   </td>
  </tr>
  <tr>
   <td>View and Run Bot Chat History
   </td>
   <td>Yes, No
   </td>
   <td>View chat history from all bots of your account
   </td>
  </tr>
</table>

#### Creating an Admin role

1. Open the Bots Admin Console.
2. On the Admin menu, select **User Management > Role Management**.
3. On the top right corner of the Role Management window, click **New Role**.
4. Enter **Role Name** and **Role Description**.
5. Under Select Role Type, select **Admin Role** and select the necessary permissions for the role.
6. You can retain the default permission settings or modify them as per your requirements.
7. Click **Save**.

Once created, you can assign roles to individual users or to user groups. You can edit the roles from the Admin Console.


#### Assigning Admin role

1. Open the Bots Admin Console.
2. On the Admin menu, select **User Management > Users**.
3. Click a user’s record for which you want to add a bot role. The user’s profile slides open.
4. Under the **Profile** tab, **edit Admin Role.**
    1. Select the appropriate Admin role from the dropdown with the available roles.
    2. You can assign multiple admin roles to the selected user.

    <img src="../images/custom-role-admin.png" alt="Assign admin role" title="Assign admin role" style="border: 1px solid gray;zoom:50%;"/>

#### Assigning Admin Role to a User Group

1. Open the Bots Admin Console.
2. On the Admin menu, select **User Management > Role Management**.
3. Hover over a role record from the list and then click the **Edit** icon. The Manage Role window slides open.
4. Click the **Assignments > Assign Role**.
5. Open the **Select Groups** drop-down list and select all the groups for which you want to assign the bot role, one after another.
6. You can assign users also from this dialog from the **Select Users** type ahead input box.
7. Click **Save**.

!!! Note

    The default Master Admin role can be assigned to users (not groups) by the Primary Master Admin.


## Bot Roles

This section illustrates various Bot Roles, their permissions, steps to create custom Bot role and assign users to the same.

**Bot Roles** can be used to define permissions for accessing various components of a bot. These permissions include the ability to create tasks, train the bot, enable channels, enable extensions via SDKs, publish the bot and view usage analytics.

**Bot Owner**, **Bot Developer**, and **Bot Tester** are the three in-built bot roles that are available for all accounts. Creators of bots are automatically assigned to the _Bot Owner_ role.

You may create additional custom bot roles to meet your specific requirements. You can assign bot roles to bot developers either from Bot Builder or from the Admin Console.

Following is the list of permissions that can be assigned to a Bot role:


<table border="1">
  <tr>
   <td><strong>Permission</strong>
   </td>
   <td><strong>Access Levels</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Tasks
   </td>
   <td>Full, View, No
   </td>
   <td>Ability to add, modify, upgrade and delete dialog, action, alert and info tasks.
   </td>
  </tr>
  <tr>
   <td>Natural Language
   </td>
   <td>Full, View, No
   </td>
   <td>Ability to add, modify, and delete utterances, synonyms, patterns and standard responses. Ability to manage Default Dialog, Ignore Words, Field Memory, and Advanced Settings.
<br>
<strong>Note: </strong>The Natural Language settings that can be modified from inside Dialog Tasks and Bot Analytics pages also adhere to these permissions.
   </td>
  </tr>
  <tr>
   <td>Knowledge Graph
   </td>
   <td>Full, View, No
   </td>
   <td>Ability to add and modify Knowledge Collection
   </td>
  </tr>
  <tr>
   <td>Batch Testing
   </td>
   <td>Full, View, No
   </td>
   <td>Ability to add and manage test suites. In ‘view’ mode, users can only review the results and not be able to run test suites
   </td>
  </tr>
  <tr>
   <td>Bot Developers
   </td>
   <td>Full, View, No
   </td>
   <td>Ability to invite users to the bot and assign them roles
   </td>
  </tr>
  <tr>
   <td>Bot Settings
   </td>
   <td>Full, View, No
   </td>
   <td>Ability to manage General Settings, Language Management, Authorization Profiles, PII Settings, IVR Settings, Bot Variables, Bot Export, Advanced Settings, ChangeLogs, Delete Bot
   </td>
  </tr>
  <tr>
   <td>Bot Import
   </td>
   <td>Yes, No
   </td>
   <td>Ability to upgrade a bot by importing a new bot definition file
   </td>
  </tr>
  <tr>
   <td>Extensions
   </td>
   <td>Yes, No
   </td>
   <td>Ability to associate apps for BotKit, WebSDK, Agent Transfer, and Events.
<br>
<strong>Note:</strong> App creation and management are allowed for all bot developers. However, the association of app against an extension is controlled via this permission.
   </td>
  </tr>
  <tr>
   <td>API Scopes
   </td>
   <td>Yes, No
   </td>
   <td>Ability to manage API Scopes
   </td>
  </tr>
  <tr>
   <td>Publish Bot
   </td>
   <td>Yes, No
   </td>
   <td>Ability to publish bot
   </td>
  </tr>
  <tr>
   <td>Channels
   </td>
   <td>Yes, No
   </td>
   <td>Ability to enable and manage channel configurations
   </td>
  </tr>
  <tr>
   <td>Dashboard
   </td>
   <td>Yes, No
   </td>
   <td>View dashboard data
   </td>
  </tr>
  <tr>
   <td>Bot Analytics
   </td>
   <td>Yes, No
   </td>
   <td>View bot analytics.
   </td>
  </tr>
</table>


### Built-in Bot Roles

The following Bot roles are created by default. These roles are applicable for standard bots, sample, and smart bots. 
<table border="1">
  <tr>
   <td><strong>PERMISSION</strong>
   </td>
   <td><strong>BOT OWNER</strong>
   </td>
   <td><strong>BOT DEVELOPER</strong>
   </td>
   <td><strong>BOT TESTER</strong>
   </td>
  </tr>
  <tr>
   <td>Tasks
   </td>
   <td>Edit
   </td>
   <td>Edit
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Natural Language
   </td>
   <td>Edit
   </td>
   <td>Edit
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Knowledge Graph
   </td>
   <td>Edit
   </td>
   <td>Edit
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Batch Testing
   </td>
   <td>Edit
   </td>
   <td>Edit
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Bot Developers
   </td>
   <td>Edit
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Bot Settings
   </td>
   <td>Edit
   </td>
   <td>Edit
   </td>
   <td>No Access
   </td>
  </tr>
  <tr>
   <td>Bot Import
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Extensions
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>API Scopes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Publish Bot
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Channels
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Dashboard
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Bot Analytics
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
</table>



### Custom Bot Roles

Admin can create custom Bot roles and set the bot permissions to these roles.


#### Creating custom Bot role

1. Open the Bots Admin Console.
2. On the Admin menu, select **User Management > Role Management**.
3. On the top right corner of the Role Management window, click **New Role**.
4. Enter **Role Name** and **Role Description**.
5. Under Select Role Type, select **Bot Role** and select the necessary permissions for the role.  
<img src="../images/new-role.png" alt="Creating custom Bot role" title="Creating custom Bot role" style="border: 1px solid gray;zoom:50%;"/> 

6. You can retain the default **permission** settings or modify them as per your requirements.
7. Click **Save**.

After creating a custom role, you can access more information about that role, change its name and description, add permissions to it, or assign this role to specific users.


#### Assigning Bot Role

You can assign roles to individual users or to user groups. You can add and edit the roles from the Admin Console. Also, you can assign a bot role to a user while sharing the bot with them from the Bots Platform.


**Assign Bot Role to a User from the Bots Admin Console**

1. Open the Bots Admin Console.
2. On the Admin menu, select **User Management > Users**.
3. Click a user’s record for which you want to add a bot role. The user’s profile slides open.
4. Click **Manage Bots** and do the following:
    1. From the first drop-down list select a bot.
    2. From the second drop-down list, select the bot role you want to assign the user for the selected bot.
5. Click **Add**. The bot name and bot role appear below the drop-down list as a row. You can edit the bot assignment anytime later by hovering over the record and clicking the Edit icon.  
<img src="../images/user-assignment.png" alt="Assign Bot Role to a User from the Bots Admin Console" title="Assign Bot Role to a User from the Bots Admin Console" style="border: 1px solid gray;zoom:50%;"/> 


**Assign Bot Role to a User Group**

1. Open the Bots Admin Console.
2. On the Admin menu, select **User Management > Role Management**.
3. Hover over a role record from the list and then click the **Edit** icon. The Manage Role window slides open.
4. Click the **Assignments > Assign Role**.
5. Open the **Select Groups** drop-down list and select all the groups for which you want to assign the bot role, one after another.
6. You can also add users from the **Select User** type ahead box.
7. Click **Save**.  
<img src="../images/user-groups.png" alt="Assign Bot Role to a User Group" title="Assign Bot Role to a User Group" style="border: 1px solid gray;zoom:50%;"/> 


**Assign Bot Role from the Bot Builder**

1. On the Bot Builder top menu, select **Manage** tab
2. From the left menu, select **Team**
3. On the top-right corner of the Team page, click **Invite**.
4. Do one of the following:
    1. To assign the role to a user, type the name of the user in the **Users** text box and select the user’s name from the suggestion list.  
    -or-
    2. To assign the role to a group, select the name of the group from the **Select Groups** drop-down list.
    3. Select a role from the **Role** drop-down list.

5. Click **Save**.