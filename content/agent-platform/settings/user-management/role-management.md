# Manage Roles, Permissions and Access Levels

Platform's **Role Management** feature in the **Settings** console helps implement Role-based Access Control (RBAC) for account, tool, and agentic app features on the Platform. 

User roles can be classified based on the role types. [Learn more](./role-management.md#role-types){:target="_blank"}.

When you invite/add a user to your account, you must assign a default role to them to define their module-wise permissions and access levels. You can later reassign a different role to the user, including a default/system-defined or custom role. [Learn more](../user-management/overview.md){:target="_blank"} about **Users Management**.

Here are some key points to consider:

1. **App Owner**: When you create an Agentic App, you automatically become the app owner and are assigned this role which provides administrative access on all features and configurations across the Platform.

2. **Master Admin Role**

    * When you [create an account](../../getting-started/sign-up-sign-in.md){:target="_blank"}, you automatically become the account owner and are assigned the **Master Admin** role. [Learn more](./role-management.md#system-defined-roles){:target="_blank"}.

    * As the Master Admin, you have the highest level of access, allowing you to create, modify, and delete permissions for custom roles and manage users in your account.

3. **Assigning Roles**

    * Once a user joins your account, assign them a role based on their responsibilities and job functions. By default, the **Member** role is assigned to new users joining your account, providing the minimum level of account access required. [Learn more](./role-management.md#system-defined-roles){:target="_blank"}. This role can be later changed by the admin in the **Settings** console. [Learn more](./role-management.md#reassign-an-alternative-role-to-active-users){:target="_blank"}.

4. **Default and Custom Roles**

    * Each role comes with specific permissions and access levels to determine what features the user can access, modify, or manage. [Learn more](./role-management.md#module-wise-permissions-and-access-levels){:target="_blank"}. 

    The Platform supports the following roles in the **Settings** console:

    * **Default Role**: A system-generated role with internally defined set of permissions and access levels. [Learn more](./role-management.md#system-defined-roles){:target="_blank"}.

    * **Custom Role**: Allows you to customize permissions and access levels for your users. [Learn more](./role-management.md#custom-roles){:target="_blank"}.

5. **Role Management Benefits**

    * Enables better control over user actions in your account.
    * Facilitates updating roles when job functions or responsibilities change.
    * Ensures prompt revocation of access when a user leaves the organization or no longer requires access.

## Roles and Modules

The modules for which permissions and access levels can be defined for a role include the following:

* Agentic Apps
* Tools
* Models
* Prompts
* Data
* Evaluations/Evaluators
* Settings including Integrations, User Management, Security and Control, Monitoring, Guardrails, and Billing.

**Tool Level**

To learn more about permissions and access levels around features, click [here](./role-management.md#module-wise-permissions-and-access-levels){:target="_blank"}.

Access to module-level permissions can either be disabled (no access) or enabled with **Full**, **Custom**, or **View** privileges. [Learn more](./role-management.md#access-levels){:target="_blank"}.

### Roles

A Role groups users according to their job functions, streamlining permission management. 

*Example*

A **Master Admin** has complete control over the account's core functionalities such as models, tools, integrations, users, etc.

A **Tool Admin** has complete control over the core functionalities of tools, such as deployment, configuration, sharing, deletion, monitoring, etc.

An **App Admin** has full access to almost all the core Platform features relating to Agentic Apps.

The Platform supports the following roles:

#### System-defined Roles

Also called **Default** roles, these are inbuilt in the system at the agentic app, account and tool levels defined in the system. The scopes, permissions, and access levels for these roles are preset based on what users commonly require and **cannot be modified** in the application. Also, system roles cannot be deleted.

To modify a user's scope and permissions, you must add a [custom](./role-management.md#custom-roles){:target="_blank"} agentic app/account/tool-type role. [Learn more](./role-management.md#add-a-role){:target="_blank"}.

System-defined, system-generated, or default roles provide baseline control over the core features and functionalities and streamline the user management process for administrators. 

For example, The **Admin** role typically has full access to all tool/account features and functionalities within the system. Administrators have the highest privileges and can manage other users, configure settings, and perform administrative tasks.

The following table summarizes the scope for different system roles supported for Account, Tool, and Agentic App types:

<table>
  <tr>
   <td colspan="2" ><strong>Account</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Master Admin</strong>
   </td>
   <td>Users have complete control over tool and model management, and access to all the core features and functionalities of the Settings console.</td>
  </tr>
  <tr>
   <td><strong>Admin</strong>
   </td>
   <td>Users have access to all the permissions except model deletion, billing, and connectors.
   </td>
  </tr>
  <tr>
   <td><strong>Member</strong>
   </td>
   <td>Users can create tools, add external models, and modify only specific integrations. This is the default role assigned to new users.</td>
  </tr>
  <tr>
   <td><strong>Viewer</strong>
   </td>
   <td>Users can only view the modules across the platform.
   </td>
  </tr>
</table>

<table>
  <tr>
   <td colspan="2" ><strong>Tool</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Tool Admin</strong>
   </td>
   <td>Users have complete control over tool management, versioning, sharing, deployment, deletion, configuration, monitoring, and API key creation.
   </td>
  </tr>
  <tr>
   <td><strong>Tool Manager</strong>
   </td>
   <td>Users have access to all the permissions except for tool deletion.
   </td>
  </tr>
  <tr>
   <td><strong>Tool Editor</strong>
   </td>
   <td>Users can create new versions and deploy, monitor, and export tools.
   </td>
  </tr>
  <tr>
   <td><strong>Tool Viewer</strong>
   </td>
   <td>Users can only view the node details and generate output in the tool.
   </td>
  </tr>
    <tr>
   <td colspan="2" ><strong>App</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>App Owner</strong>
   </td>
   <td>Users have complete administrative access across all Platform features and configurations. This user cannot be removed from the system, and can manage all other roles.
   </td>
  </tr>
    <tr>
   <td><strong>App Admin</strong>
   </td>
   <td>Users have full administrative access across most system features of Agentic Apps. This user has privileges similar to the owner. The app admins can modify all the other roles except the permissions of the app owner.</td>
  </tr>
  <tr>
   <td><strong>App Developer</strong>
   </td>
   <td>Users have full access to core development features of Agentic Apps including configurations, tools, guardrails, and data. There is limited access to the admin features.
   </td>
  </tr>
    <tr>
   <td><strong>App Viewer</strong>
   </td>
   <td>Users have basic view-only access to specific and essential features of Agentic Apps including configurations, tools, guardrails, and simulation capabilities.
   </td>
  </tr>
      <tr>
   <td><strong>App Tester</strong>
   </td>
   <td>Users have view-only access to most system features of Agentic Apps allowing them to observe and test agents and analytics. The user cannot write or modify the production features.
   </td>
  </tr>
</table>

#### Custom Roles 

The admin can assign only **Account** and **Tool** role types to custom roles. The scopes, permissions, and access levels can be custom-configured. Custom user roles allow for more fine-grained control over what actions different users can perform for at the account and tool levels.

Organizations can tailor access levels to their specific needs and organizational structure. This customization helps assign only the required permissions to specific users and improve security through role-based access. 

For example, a custom role, “_Banking Tool Conversation Moderator_,” can be customized for full access to a tool guardrail configuration permission and no access to create and deploy a tool.

#### Key Considerations

* After creating a custom role, it will appear in the dropdown menu of the email invitation template. You can then select and assign this role to the user you invite to your account.
<img src="../images/custom-role-listing.png" alt="custom role listing" title="custom role listing" style="border: 1px solid gray; zoom:80%;"/>

* You cannot delete a custom role if it is currently assigned to active users or included in an email invitation. The system displays an error message, as shown in the screenshot below.
<img src="../images/error-custom-role.png" alt="error custom role deletion" title="error custom role deletion" style="border: 1px solid gray; zoom:50%;"/>

To proceed, you must first unassign the role or assign an alternative role to these users, and then you can delete the custom role.

### Permissions

A **Permission** is a specific action or a set of actions the user can perform for a module i.e., **Admin**, **Tool**, or **Evaluation** based on the defined access level (*Full*, *Edit*, or *View*), assigned role type (*Account*, *Tools*, or *Agentic Apps*) and role category (*Admin*, or *Tools*). An example includes the system providing *full* access to *create a tool version* to the *Tool Admin* role of the *tool* role type.

### Access Levels

The **Settings** console supports two types of access: “_Yes_” indicates the user role has access to a module’s permission, and “_No_” means the user has no access. When the system/custom user role has access, the extent/level of access at the account or tool level is defined by the following presets: 

* **View**: The user can only view the module feature but does not have the permission to edit or delete it.
* **Custom**: The user can view, add, and edit the module data, but not delete it.
* **Full**: The user can view, add, edit, and delete the module data. 
* **No Access**: The user cannot access the module's features.

[Learn more](./role-management.md#module-wise-permissions-and-access-levels){:target="_blank"} about Module-wise permissions and access levels.

### Role Types 

A **Role Type** defines the module-wise scope and access level for the defined permissions and associated actions.

Roles are auto-assigned by the system based on the following Role Types. See [this](./role-management.md#system-defined-roles){:target="_blank"} table for more information on the roles.

* **Account**:  Users invited to the account must be assigned an Account role (default or custom). The role type manages access to users, integrations, and security permissions.
* **Tool**:  When a user is invited to a tool, they receive a Tool role. The role type manages access to tool configurations and deployments.
* **App**: When a user is invited to the Platform at the agentic app level, they are assigned this role. This role type manages access to the core features,  configurations, and deployments of autonomous AI applications (agentic apps) that handle specialized business tasks and processes. The admin must assign this role type to any user with whom they intend to share an agentic app.

**Account Role**

* The user who creates a Platform account is assigned the `Master Admin` role by default.
* A `Master Admin` can assign other account roles to the users.

**Tool Role**

* The user who creates a tool is assigned the `Tool Admin` role by default.
* The `Tool Admin` can assign other tool roles to users they invite to their tool.

**App Role**

* The user who creates an agentic app is assigned the `App Owner` role by default.
* The `App Owner` can assign other Agentic App roles to users who have access to their agentic apps.

### Module-wise Permissions and Access Levels

The following table summarizes the module-wise permissions and access levels for default admin, tool, and evaluation roles.

<b>Admin Role</b>

<table>
  <tr bgcolor="#ECECEC">
   <td rowspan="3" ><strong>Module</strong>
   </td>
   <td rowspan="3" ><strong>Permission</strong>
   </td>
   <td colspan="4" ><strong>Default Admin Role</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Master Admin</strong>
   </td>
   <td><strong>Admin</strong>
   </td>
   <td><strong>Member</strong>
   </td>
   <td><strong>Viewer</strong>
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="4" ><strong>Access Level</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="2"><strong>Tools</strong>
<p>
<strong> </strong>
   </td>
   <td>Create a Tool
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
  </tr>
  <tr>
     <td>Tool Import
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="9" ><strong>Models</strong>
   </td>
   <td>Access to Model (“View” is the default access for a custom role)
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Add an external model
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create a custom model and perform fine tuning
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Add open-source model
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Manage Deployment - deploy/undeploy/redeploy
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create or Delete an API Key for a model
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Export Model
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Delete Model
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Model Configuration
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="5" ><strong>Prompts</strong>
   </td>
   <td>Access to a Prompt
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create an Experiment
<p>
 
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td><strong>Access to Settings</strong> (Only if the settings permission is 'Yes' the user will see all the permissions)
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>No Access
   </td>
  </tr>
  <tr>
   <td><strong>Access to guardrails at the account level</strong>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td><strong>Access to Integrations</strong> (“Full” is the default access)
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td rowspan="6" ><strong>Integrations</strong>
   </td>
   <td>Access
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Delete an Integration
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Test an Integration
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Update an Integration
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create an Integration
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Disable an Integration
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="11" ><strong>Users Management</strong>
   </td>
   <td>Access
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>No access
   </td>
   <td>No access
   </td>
  </tr>
  <tr>
   <td>Invite User (via email or import)
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Bulk Import Users via files
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Assign/revoke system roles to users & manage profile and status
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Groups
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Enrolment
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Directory Sync to enroll users
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Manage Tool Roles (Create and edit Custom roles), assign/revoke users
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Manage Admin Roles (Create and edit Custom roles), assign/revoke users
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Remove Users
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td><strong>Manage User Settings (profile fields): </strong>Users with the permissions to manage user settings can bulk change permissions.
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="5"><strong>Security and Control</strong>
   </td>
   <td>Access
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
  </tr>
  <tr>
   <td>Create API App
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Delete API App
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Update API App
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Create or Delete an API Key
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td><b>Monitoring</b>
   </td>
   <td>All actions</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
<p>
   </td>
  </tr>
  <tr>
   <td><b>Billing: Plans, invoice, subscribe & unsubscribe, token usage</b>
   </td>
   <td>All actions</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td><b>Tool Management</b>
   </td>
   <td>All actions</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="5"><strong>Evaluations</strong>
   </td>
   <td>Access</td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Create projects
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create Global Evaluators.</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Delete Global Evaluators
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Edit Global Evaluators</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
   <tr>
   <td rowspan="8"><strong>Manage Custom Scripts</strong>
   </td>
   <td>Access</td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Import New Custom Script
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Deploy/Re-deploy custom script</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Undeploy Custom Script
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Delete Custom Script</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Export Project</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
   </tr>
     <tr>
   <td>Overview and Other Details</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/></td>
   </tr>
       <tr>
   <td>Create/Delete an API Key</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   </tr>
  </table>

<b>Tool Role</b>

<table>
  <tr bgcolor="#ECECEC">
   <td rowspan="3" ><strong>Module</strong>
   </td>
   <td rowspan="3" ><strong>Permission</strong>
   </td>
   <td colspan="4" ><strong>Default Tool Role</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Tool Admin</strong>
   </td>
   <td><strong>Tool Manager</strong>
   </td>
   <td><strong>Tool Editor</strong>
   </td>
   <td><strong>Tool Viewer</strong>
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="4" ><strong>Access Level</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="10" ><strong>Tools</strong>
   </td>
   <td><strong>Access to Tool </strong>(“Custom” is the default access for a custom role)
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Create a Tool Version
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Import as a Version
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Share Tools/ Unshare Tools/ Assign Tool Roles/ Remove users
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Delete Tool
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Export Tool
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Monitoring Trace of a Tool
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Editing Tool Workflow
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Tool configurations
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create/Delete an API Key
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Log list
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  </tr>
  <tr>
   <td>
   </td>
   <td>Detailed logs
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  </tr>
  <tr>
   <td><strong>Deployment</strong>
   </td>
   <td>Manage Deployment - deploy/undeploy/redeploy
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td><strong>Guardrails</strong>
   </td>
   <td>Manage Guardrails Configuration
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td><strong>Monitoring</strong>
   </td>
   <td>Audit Log
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
</table>


<b>App Role - Agentic Apps</b>

<table>
  <tr bgcolor="#ECECEC">
   <td rowspan="3" ><strong>Permission</strong>
   </td>
   <td colspan="5" align="center"><strong>Default App Role</strong>
   </td>
  </tr>
  <tr>
   <td><strong>App Owner</strong>
   </td>
   <td><strong>App Admin</strong>
   </td>
   <td><strong>App Developer</strong>
   </td>
   <td><strong>App Tester</strong>
   </td>
   <td><strong>App Viewer</strong>
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="5" align="center"><strong>Access Level</strong>
   </td>
  </tr>
  <tr>
   <td>App Configuration
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Agents
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Code Tools
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Simulate
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Analytics
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>No Access
   </td>
  </tr>
  <tr>
   <td>Environments
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>No Access
   </td>
  </tr>
  <tr>
   <td>API Keys
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>No Access
   </td>
  </tr>
  <tr>
   <td>Audit Logs
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>No Access
   </td>
  </tr>
  <tr>
   <td>Guardrails
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Sharing & Permissions
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>No Access
   </td>
  </tr>
  <tr>
   <td>Versions
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>No Access
   </td>
  </tr>
  <tr>
   <td>Tools Library
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Export Tool
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>No Access
   </td>
  </tr>
</table>

<br>

<table>
  <tr bgcolor="#ECECEC">
   <td rowspan="3" ><strong>Module</strong>
   </td>
   <td rowspan="3" ><strong>Permission</strong>
   </td>
   <td colspan="5" align="center"><strong>Default Role</strong>
   </td>
  </tr>
  <tr>
   <td><strong>App Owner</strong>
   </td>
   <td><strong>App Admin</strong>
   </td>
   <td><strong>App Developer</strong>
   </td>
   <td><strong>App Tester</strong>
   </td>
   <td><strong>App Viewer</strong>
   </td>
  </tr>
  <tr>
   <td colspan="5" bgcolor="#ECECEC" align="center"><strong>Access</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="2" >App Configurations
   </td>
   <td>View Profile, View Config, view app versions
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Edit Profile, Edit Config, Import App version, Delete App version
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Agents
   </td>
   <td>View Agent
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Add Agent, Edit Agent, Link Tools, Unlink Tools, Restore Agent Version, Restore App Version, Create Agent Version
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Tools
   </td>
   <td>View Tool
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Add Tool, Edit Tool, Create In-line tool, Edit Inline Tool, Delete Inline Tool
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Simulate
   </td>
   <td>Test
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Analytics
   </td>
   <td>View Sessions, Traces, Generations
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Environments
   </td>
   <td>View Environment
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create Environment, Delete Environment, Deploy Version
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="2" >API Keys
   </td>
   <td>View List
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Add Key
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Audit Logs
   </td>
   <td>View Logs
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Guardrails
   </td>
   <td>View Guardrails
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Add Guardrails, Edit Guardrails
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Sharing & Permissions
   </td>
   <td>View Users
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Add Users, Update Role
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
</table>

<b>Evaluation Role</b>

<table>
  <tr bgcolor="#ECECEC">
   <td><strong>Permission</strong>
   </td>
   <td><strong>Full</strong>
   </td>
      <td><strong>Edit</strong>
   </td>
      <td><strong>View</strong>
   </td>
  </tr>
  <tr>
   <td>Edit a project.</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Share a project.</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>User management - invite/delete users from project</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Delete a project.</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create/delete custom evaluators</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create/rename evaluations</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
      <tr>
   <td>Delete Evaluations</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Run an Evaluation</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Add, edit and delete evaluator columns and run evaluation</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  <tr>
   <td>Create a custom evaluator</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Save as a global evaluator</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Export evaluation</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Automate evaluation</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Import rows</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Add, edit and delete evaluator columns and run evaluation</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Add production data(model traces)</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Run a prompt</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/no-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
    <tr>
   <td>Table options(user specific)</td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
   <td><img src="../images/yes-icon.png" alt="access role management" title="access role management" style="zoom:5%;"/>
   </td>
  </tr>
  </table>

### Role Management Dashboard

The **Role Management** Dashboard displays key information related to system and custom roles and their permissions available on the Platform.

To access the dashboard, follow the steps below:

1. Log in to your account and click **Autonomous Agents** from the list of modules.
2. Click **Settings** on the top navigation bar.
3. Click **Users Management** > **Role Management** on the left menu.
<img src="../images/access-role-management.png" alt="access role management" title="access role management" style="border: 1px solid gray; zoom:80%;"/>

The **Role Management** dashboard displays the following:

1. The summary of counts for the following:

    * **Total Roles**: The total count of system and custom roles in the system.
    * **System Roles**: The count of the pre-defined, system-generated user roles.
    * **Custom Roles**: The count of the user roles created and configured by the system admin.
    <img src="../images/summary-of-counts.png" alt="summary of counts" title="summary of counts" style="border: 1px solid gray; zoom:80%;"/>

2. A Table view of the following system and custom role details:

    * **Role**: The name of the system-generated role or the custom role you have created.
    * **Role Type**: The role type defines its scope, including **Account**, **Tool**, and **Agentic App**.
    * **Description**: This is the description of the role. System roles are pre-defined, while you must provide custom role descriptions. Hover over the description text to view the entire description.
    * **Created by**: For system-generated roles, _System_ is displayed. For custom roles, the name of the user who created the role is displayed, as shown in the image below. This user can be the account owner or another user in the admin’s account.
    <img src="../images/custom-and-system-roles.png" alt="custom and system roles" title="custom and system roles" style="border: 1px solid gray; zoom:80%;"/>

    * **Last Updated On**: The local time and date when the custom role was last updated are displayed. This information doesn't appear for system roles, as they can't be modified.

### Search a Role

To look up a system or custom role, follow the steps below:

1. [Navigate](../user-management/role-management.md#role-management-dashboard){:target="_blank"} to the **Role Management** dashboard.
2. Click the **Search** text field.
3. Enter the role you want to search for. All the matching results are displayed.
<img src="../images/search-role.png" alt="search role" title="search role" style="border: 1px solid gray; zoom:80%;"/>

   If no results are found, the following message is displayed.
   <img src="../images/no-results-found.png" alt="no results found" title="no results found" style="border: 1px solid gray; zoom:80%;"/>

### Manage System Roles

You can perform the following actions on the [system-generated roles](./role-management.md#system-defined-roles){:target="_blank"}.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>System roles cannot be created, modified, or deleted since the role and its permissions are pre-defined in the system. However, they can be duplicated as <b>Custom Roles</b> and modified.</p>
</div>

#### View Role Information

To view the details of a [system-defined role](./role-management.md#system-defined-roles){:target="_blank"}, follow the steps below.

1. [Navigate](../user-management/role-management.md#role-management-dashboard){:target="_blank"} to the **Role Management** dashboard,
2. Click the **Ellipses** icon for a system role.
3. Select **View**.
<img src="../images/click-view.png" alt="select view" title="select view" style="border: 1px solid gray; zoom:80%;"/>

The following information is displayed:

* Role Title along with Role Type.
* Role Name
* Role Description
* Configuration panel to enable/disable access and set access levels for the listed permissions at the account/tool level. Click [here](./role-management.md#module-wise-permissions-and-access-levels){:target="_blank"} to see the module-wise permissions and access levels for different roles.
<img src="../images/module-wise-permissions-new.png" alt="module-wise permissions" title="module-wise permissions" style="border: 1px solid gray; zoom:80%;"/>

#### Duplicate System Role

If you want to add a custom role by copying the scope and permissions of a system role, you can use the Duplicate functionality. This feature automatically duplicates the system role, copying its name, role type, and permission/access configurations, and creates it as a custom role. You can then modify, delete, or duplicate this custom role to create multiple copies and add module-wise permissions/access for each.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The changes you make to the duplicate role do not apply to the original system role.</li>
<li>The Last Updated On value is displayed for duplicate roles and shows the date and time when the duplicate was created.</li></ul></p>
</div>

**Steps to Create a Duplicate Role**

To duplicate a system role, follow the steps below:

1. [Navigate](../user-management/role-management.md#role-management-dashboard){:target="_blank"} to the **Role Management** dashboard.
2. Click the **Ellipses** icon for a system role.
3. Select **Duplicate**.
<img src="../images/select-duplicate.png" alt="select duplicate" title="select duplicate" style="border: 1px solid gray; zoom:80%;"/>

The duplicate custom role displays the system role name followed by a suffix “**_copy_**,” as shown below. You can edit the name if required.
<img src="../images/duplicate-role.png" alt="duplicate role" title="duplicate role" style="border: 1px solid gray; zoom:80%;"/>

### Manage Custom Roles

[Custom roles](../user-management/role-management.md#custom-roles){:target="_blank"} can be edited, deleted, or duplicated on the Settings console. They help customize a set of [permissions](../user-management/role-management.md#permissions){:target="_blank"} and set [access levels](../user-management/role-management.md#access-levels){:target="_blank"} according to enterprise's requirements.

#### Add a Role

To add a custom role, follow the steps below:


1. [Navigate](../user-management/role-management.md#role-management-dashboard){:target="_blank"} to **Role Management** on the **Settings** console.
2. Click **Add New Role**.
<img src="../images/add-new-role.png" alt="add new role" title="add new role" style="border: 1px solid gray; zoom:80%;"/>

3. Follow the steps below in the **New Role** window:

    * Enter **Role Name** (should be unique) & **Role Description**.
    <img src="../images/enter-role-name-and-description.png" alt="enter role name and description" title="enter role name and description" style="border: 1px solid gray; zoom:80%;"/>
    * Select the **Role Type** from the dropdown.
    <img src="../images/select-role-type.png" alt="select role type" title="select role type" style="border: 1px solid gray; zoom:80%;"/>
    * Follow the steps below if you select **Role Type** as **_Account_**.
        * Enable/select the access level for module-wise permissions in the **Enable/Disable tool access** section. [Learn more](../user-management/role-management.md#module-wise-permissions-and-access-levels){:target="_blank"} about module-wise permissions and access levels you can configure for a custom role.
        * If you select *Custom*, Select the checkbox to enable the permissions (set to _Yes_) or unselect to disable (set to _No_) for the following:

            * Create and Import Tool
            * Create agentic apps
            * Models
                * Add External models
                * Fine-tune a model
                * Delete a model
                * Manage Deployment - deploy/undeploy
                * Create an API key for a model
                * Export model
            * Prompts
            * Settings
                * Integrations
                  * Weights and Biases
                  * Hugging Face
                  * S3 Bucket
               * User Management
                  * Invite user
                  * Bulk import users
                  * Assign roles to users
                  * Directory Sync
                  * Manage admin roles
                  * Manage tool roles
                  * Remove users
                  * Manage user settings
            * Security and Control Settings
            * Manage Guardrail Models
            * Monitoring
            * Billing

          <img src="../images/enable-permissions.png" alt="enable permissions" title="enable permissions" style="border: 1px solid gray; zoom:80%;"/>       

       * Select the access level for **Models**, **Settings**, **Integrations**, and **User Management** from the following options:
        * **Full**: The users can access all the module permissions (view & edit).
        * **Custom**: The users can select only the required permissions for the module to customize the role.
        * **View**: The users can only view the configured module permissions.
        * **No Access**: The user cannot view/customize the module permissions.
            
**Important Considerations**

* First, select the access level for **Models** to enable its permissions.
<img src="../images/select-access-for-models.png" alt="set models access" title="set models access" style="border: 1px solid gray; zoom:80%;"/>

    Missing this step automatically disables the permissions.

* Selecting **_Full_** automatically selects all the module permissions.
<img src="../images/select-full-auto-select.png" alt="full auto select" title="full auto select" style="border: 1px solid gray; zoom:80%;"/>

* Selecting **_Custom_** allows you to enable only the required module permissions.  <img src="../images/select-custom-access.png" alt="select custom access" title="select custom access" style="border: 1px solid gray; zoom:80%;"/>

* Selecting **_View_** and **_No Access_** disables permissions selection.
<img src="../images/select-view-and-no-access.png" alt="select view and no access" title="select view and no access" style="border: 1px solid gray; zoom:80%;"/>       

* Selecting **_Full_** for **Settings** automatically sets the access levels of **Integrations** and **User Management** to **_Full_**.

<img src="../images/select-full-access.png" alt="select full access" title="select full access" style="border: 1px solid gray; zoom:80%;"/>

Additionally, it automatically enables all the permissions for the following modules:

   * Integrations (View is always enabled by default as it is the minimum required permission).
   * User Management
   * Security and Control Settings
   * Manage Guardrail Models
   * Monitoring
   * Billing

* Selecting **_No Access_** for **Settings** automatically sets the access levels of **Integrations** to **_View_** and **User Management** to **_No Access_**.
<img src="../images/select-no-access.png" alt="no access" title="no access" style="border: 1px solid gray; zoom:80%;"/>

Additionally, it disables all the permissions for the following modules:

   * Integrations (The **View** permission is always enabled by default).
   * User Management
   * Security and Control Settings
   * Manage Guardrail Models
   * Monitoring
   * Billing
  
Selecting **_Custom_** for **Settings** automatically sets the **Integrations** and **User Management** access levels to **_Custom_** where you can select or unselect the listed permissions based on your requirement for the following modules:

* Integrations
* User Management
* Security and Control Settings
* Manage Guardrail Models
* Monitoring
* Billing

<img src="../images/select-custom.png" alt="select custom" title="select custom" style="border: 1px solid gray; zoom:80%;"/>

You can change **_Custom_** to **_Full_** or **_View_** for **Integrations** and **_Full_** or **_No Access_** for **User Management**.


If you select **Role Type** as **_Tool_**, follow the steps below:

* Select **_Custom_**, **_View_**, or **_Full_** for **Access**. [Learn more](../user-management/role-management.md#access-levels){:target="_blank"}. 

**_Custom_** is the default selection.
<img src="../images/access-options.png" alt="access options" title="access options" style="border: 1px solid gray; zoom:80%;"/>
                     
* Set up the tool permissions as follows in the **Enable/Disable tool access** section:
* If you select **_View_** for **Access**, all the permissions are automatically disabled.
* If you select **_Full_** for **Access**, all the permissions are automatically enabled.
* If you select **_Custom_** for **Access**, you can select the required tool permissions to enable them and customize the role.                 

4. Click **Create**.

The new custom role is created and listed on the **Role Management** dashboard.

<img src="../images/list-new-custom-role.png" alt="list new custom role" title="list new custom role" style="border: 1px solid gray; zoom:80%;"/>

#### Edit a Custom Role

You can modify the role name, description, and access levels for account type or tool type roles’ permissions on the Settings console.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The system does not allow changing the <b>Role Type</b> once it is set. You must create a new custom role to assign a different role type.</li>
<li>When a custom role is updated, it changes the permissions for the assigned users.</li></ul></p>
</div>

To update a role, follow the steps below:

1. [Navigate](../user-management/role-management.md#role-management-dashboard){:target="_blank"} to the **Role Management** dashboard on the **Settings** console.
2. Click the **Ellipses** icon for the custom role you want to modify.
3. Select **Edit**.
<img src="../images/edit-role.png" alt="edit role" title="edit role" style="border: 1px solid gray; zoom:80%;"/>

4. Edit the required values for the following In the **Update Role** window:

    * Role Name
    * Role Description
    * Access: Select either *Custom*, *Full*, or *View*.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You cannot reset the access levels for module-wise Permissions in the <b>Enable/disable tool access</b> section.</p>
</div> 

<ol start="5"><li>Click <b>Update</b>.</li>
<img src="../images/update-role-window.png" alt="update role window" title="update role window" style="border: 1px solid gray; zoom:80%;"/></ol>

A success message is displayed upon completing the role edit, and the updated role details appear on the dashboard.

<img src="../images/role-updated-message.png" alt="role updated message" title="role updated message" style="border: 1px solid gray; zoom:80%;"/>

#### Delete a Custom Role

You can delete a custom role if you want to permanently remove it from the system and unassign it from users.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can only delete one role at a time. Bulk delete is not supported.</p>
</div> 

**Prerequisite**

Before you delete a role, ensure that the custom role is not assigned to any active users. If the role is assigned, do one of the following:

* Reassign an alternative role to the active users. [Learn more](../user-management/role-management.md#reassign-an-alternative-role-to-active-users){:target="_blank"}.

* Remove Inactive users to whom this role is assigned.

To delete a role, follow the steps below:

1. [Navigate](../user-management/role-management.md#role-management-dashboard){:target="_blank"} to the **Role Management** dashboard on the **Settings** console.
2. Click the **Ellipses** icon for the custom role you want to delete.
3. Select **Delete**.
<img src="../images/select-delete-role.png" alt="select delete role" title="select delete role" style="border: 1px solid gray; zoom:80%;"/>

4. Click **Confirm** in the **Delete Role** confirmation window.
<img src="../images/delete-role-confirm.png" alt="confirm delete role" title="confirm delete role" style="border: 1px solid gray; zoom:80%;"/>

A success message is displayed, and the role is deleted from the **Role Management** dashboard.

#### Role Deletion Error and Workaround 

The **Settings** console allows you to delete only unassigned roles. If a role is assigned to active/inactive users during deletion, the following error message is displayed.
<img src="../images/role-deletion-error.png" alt="role deletion error" title="role deletion error" style="border: 1px solid gray; zoom:80%;"/>

You must perform one of the following workarounds.

##### Reassign an Alternative Role to Active Users

1. [Navigate](../user-management/role-management.md#role-management-dashboard){:target="_blank"} to **Users Management** > **Users** on the **Settings** Console.
2. Click the **Account Role** entry for the user.
3. Select the role you want to reassign.
<img src="../images/select-role-to-reassign.png" alt="reassign role" title="reassign role" style="border: 1px solid gray; zoom:80%;"/>

Once you reassign the role for the user, go to the **Role Management** dashboard and delete the role using the steps mentioned [here](../user-management/role-management.md#delete-a-custom-role){:target="_blank"}.

The role is deleted successfully from the **Role Management** dashboard and the count for custom roles is updated (decreased).
<img src="../images/custom-role-deleted.png" alt="custom role deleted" title="custom role deleted" style="border: 1px solid gray; zoom:80%;"/>

##### Delete Assigned Users

[Navigate](../user-management/role-management.md#role-management-dashboard){:target="_blank"} to the **Users Management** dashboard and follow the steps mentioned in the **Delete Users** section to delete all the assigned users individually or in bulk. Once the user is deleted, go to the **Role Management** dashboard and [delete](../user-management/role-management.md#delete-a-custom-role){:target="_blank"} the required custom role.

Deleting the assigned users removes their association with the role you want to delete.

#### Duplicate a Custom Role

Like a system role, you can duplicate a custom role, which copies the name, role type, and configurations for permissions and access. Follow the steps mentioned [here](../user-management/role-management.md#duplicate-system-role){:target="_blank"} to complete the process for a custom role.
<img src="../images/duplicate-custom-role.png" alt="duplicate custom role" title="duplicate custom role" style="border: 1px solid gray; zoom:80%;"/>

<hr/> 

**Related resources**

* [Settings Console](../../administration/overview.md){:target="_blank"} - about other Platform admin features.
* [Users Management](../user-management/users.md){:target="_blank"} - about managing users in your account.
* [Monitoring: Audit Logs](../monitoring/audit-logs.md){:target="_blank"} - about tracking events and user activity in your account.
