# Manage Roles, Permissions and Access Levels

Platform's **Role Management** feature in the **Settings** console helps implement Role-based Access Control (RBAC) for account, tool, and agentic app features on the Platform.

User roles can be classified based on the role types. [Learn more](#role-types).

When you invite/add a user to your account, you must assign a default role to them to define their module-wise permissions and access levels. You can later reassign a different role to the user, including a default/system-defined or custom role. [Learn more](https://docs.kore.ai/agent-platform/settings/user-management/overview/) about **Users Management**.

Here are some key points to consider:

1. **App Owner**: When you create an Agentic App, you automatically become the app owner and are assigned this role, which provides administrative access on all features and configurations across the Platform.

2. **Master Admin Role**
   - When you [create an account](https://docs.kore.ai/agent-platform/getting-started/sign-up-sign-in/), you automatically become the account owner and are assigned the **Master Admin** role. [Learn more](#system-defined-roles).
   - As the Master Admin, you have the highest level of access, allowing you to create, modify, and delete permissions for custom roles and manage users in your account.

3. **Assigning Roles**
   - Once a user joins your account, assign them a role based on their responsibilities and job functions. By default, the **Member** role is assigned to new users joining your account, providing the minimum level of account access required. [Learn more](#system-defined-roles). This role can be later changed by the admin in the **Settings** console. [Learn more](#reassign-an-alternative-role-to-active-users).

4. **Default and Custom Roles**

   Each role comes with specific permissions and access levels to determine what features the user can access, modify, or manage. [Learn more](#module-wise-permissions-and-access-levels).

   The Platform supports the following roles in the **Settings** console:
   - **Default Role**: A system-generated role with an internally defined set of permissions and access levels. [Learn more](#system-defined-roles).
   - **Custom Role**: Allows you to customize permissions and access levels for your users. [Learn more](#custom-roles).

5. **Role Management Benefits**
   - Enables better control over user actions in your account.
   - Facilitates updating roles when job functions or responsibilities change.
   - Ensures prompt revocation of access when a user leaves the organization or no longer requires access.

---

## Roles and Modules

The modules for which permissions and access levels can be defined for a role include the following:

- Agentic Apps
- Tools
- Models
- Prompts
- Data
- Evaluations/Evaluators
- Settings, including Integrations, User Management, Security and Control, Monitoring, Guardrails, and Billing.

Access to module-level permissions can either be disabled (no access) or enabled with **Full**, **Custom**, or **View** privileges. [Learn more](#access-levels).

---

### Roles

A Role groups users according to their job functions, streamlining permission management.

**Example**

A **Master Admin** has complete control over the account's core functionalities such as models, tools, integrations, users, etc.

A **Tool Admin** has complete control over the core functionalities of tools, such as deployment, configuration, sharing, deletion, monitoring, etc.

An **App Admin** has full access to almost all the core Platform features relating to Agentic Apps.

The Platform supports the following roles:

#### System-defined Roles

Also called **Default** roles, these are inbuilt in the system at the agentic app, account, and tool levels. The scopes, permissions, and access levels for these roles are preset and **cannot be modified**. System roles cannot be deleted.

To modify a user's scope and permissions, you must add a [custom](#custom-roles) agentic app/account/tool-type role. [Learn more](#add-a-role).

The following table summarizes the scope for different system roles supported for Account, Tool, and Agentic App types:

**Account Roles**

| Role | Description |
|------|-------------|
| **Master Admin** | Users have complete control over tool and model management, and access to all the core features and functionalities of the Settings console. |
| **Admin** | Users have access to all the permissions except model deletion, billing, and connectors. |
| **Member** | Users can create tools, add external models, and modify only specific integrations. This is the default role assigned to new users. |
| **Viewer** | Users can only view the modules across the platform. |

**Tool Roles**

| Role | Description |
|------|-------------|
| **Tool Admin** | Users have complete control over tool management, versioning, sharing, deployment, deletion, configuration, monitoring, and API key creation. |
| **Tool Manager** | Users have access to all the permissions except for tool deletion. |
| **Tool Editor** | Users can create new versions and deploy, monitor, and export tools. |
| **Tool Viewer** | Users can only view the node details and generate output in the tool. |

**App Roles**

| Role | Description |
|------|-------------|
| **App Owner** | Users have complete administrative access across all Platform features and configurations. This user cannot be removed from the system and can manage all other roles. |
| **App Admin** | Users have full administrative access across most system features of Agentic Apps. App admins can modify all other roles except the permissions of the app owner. |
| **App Developer** | Users have full access to core development features of Agentic Apps including configurations, tools, guardrails, and data. There is limited access to admin features. |
| **App Viewer** | Users have basic view-only access to specific and essential features of Agentic Apps including configurations, tools, guardrails, and simulation capabilities. |
| **App Tester** | Users have view-only access to most system features of Agentic Apps, allowing them to observe and test agents and analytics. The user cannot write or modify production features. |

#### Custom Roles

The admin can assign only **Account** and **Tool** role types to custom roles. The scopes, permissions, and access levels can be custom-configured. Custom user roles allow for more fine-grained control over what actions different users can perform at the account and tool levels.

Organizations can tailor access levels to their specific needs and organizational structure. This customization helps assign only the required permissions to specific users and improve security through role-based access.

For example, a custom role — *"Banking Tool Conversation Moderator"* — can be customized for full access to a tool guardrail configuration permission and no access to create and deploy a tool.

#### Key Considerations

- After creating a custom role, it will appear in the dropdown menu of the email invitation template. You can then select and assign this role to the user you invite to your account.
- You cannot delete a custom role if it is currently assigned to active users or included in an email invitation. The system displays an error message in this case.

To proceed, you must first unassign the role or assign an alternative role to these users, and then you can delete the custom role.

---

### Permissions

A **Permission** is a specific action or set of actions the user can perform for a module — i.e., **Admin**, **Tool**, or **Evaluation** — based on the defined access level (*Full*, *Edit*, or *View*), assigned role type (*Account*, *Tools*, or *Agentic Apps*), and role category (*Admin* or *Tools*).

---

### Access Levels

The **Settings** console supports the following access levels. "Yes" indicates the user role has access to a module's permission; "No" means the user has no access. When the system/custom user role has access, the extent/level of access at the account or tool level is defined by the following presets:

- **View**: The user can only view the module feature but does not have permission to edit or delete it.
- **Custom**: The user can view, add, and edit the module data, but not delete it.
- **Full**: The user can view, add, edit, and delete the module data.
- **No Access**: The user cannot access the module's features.

[Learn more](#module-wise-permissions-and-access-levels) about module-wise permissions and access levels.

---

### Role Types

A **Role Type** defines the module-wise scope and access level for the defined permissions and associated actions.

Roles are auto-assigned by the system based on the following Role Types:

- **Account**: Users invited to the account must be assigned an Account role (default or custom). The role type manages access to users, integrations, and security permissions.
- **Tool**: When a user is invited to a tool, they receive a Tool role. The role type manages access to tool configurations and deployments.
- **App**: When a user is invited to the Platform at the agentic app level, they are assigned this role. This role type manages access to the core features, configurations, and deployments of autonomous AI applications (agentic apps). The admin must assign this role type to any user with whom they intend to share an agentic app.

**Account Role**
- The user who creates a Platform account is assigned the `Master Admin` role by default.
- A `Master Admin` can assign other account roles to users.

**Tool Role**
- The user who creates a tool is assigned the `Tool Admin` role by default.
- The `Tool Admin` can assign other tool roles to users they invite to their tool.

**App Role**
- The user who creates an agentic app is assigned the `App Owner` role by default.
- The `App Owner` can assign other Agentic App roles to users who have access to their agentic apps.

---

### Module-wise Permissions and Access Levels

The following tables summarize the module-wise permissions and access levels for default admin, tool, and evaluation roles.

#### Admin Role

| Module | Permission | Master Admin | Admin | Member | Viewer |
|--------|------------|:------------:|:-----:|:------:|:------:|
| **Tools** | Create a Tool | ✅ | ✅ | ✅ | ❌ |
| | Tool Import | ✅ | ✅ | ✅ | ❌ |
| **Models** | Access to Model (default access for custom role: View) | Full | Custom | Custom | View |
| | Add an external model | ✅ | ✅ | ✅ | ❌ |
| | Create a custom model and perform fine tuning | ✅ | ✅ | ❌ | ❌ |
| | Add open-source model | ✅ | ✅ | ❌ | ❌ |
| | Manage Deployment – deploy/undeploy/redeploy | ✅ | ✅ | ❌ | ❌ |
| | Create or Delete an API Key for a model | ✅ | ✅ | ❌ | ❌ |
| | Export Model | ✅ | ✅ | ❌ | ❌ |
| | Delete Model | ✅ | ❌ | ❌ | ❌ |
| | Model Configuration | ✅ | ✅ | ❌ | ❌ |
| **Prompts** | Access to a Prompt | ✅ | ✅ | ✅ | ✅ |
| | Create an Experiment | ✅ | ✅ | ✅ | ❌ |
| **Access to Settings** | (All permissions shown only if settings permission is 'Yes') | Full | Custom | Custom | No Access |
| **Guardrails** | Access to guardrails at the account level | ✅ | ✅ | ✅ | ✅ |
| **Access to Integrations** | (default access: Full) | Full | Full | Custom | View |
| **Integrations** | Access | Full | Full | Custom | View |
| | Delete an Integration | ✅ | ✅ | ✅ | ❌ |
| | Test an Integration | ✅ | ✅ | ✅ | ❌ |
| | Update an Integration | ✅ | ✅ | ✅ | ❌ |
| | Create an Integration | ✅ | ✅ | ✅ | ❌ |
| | Disable an Integration | ✅ | ✅ | ✅ | ❌ |
| **Users Management** | Access | Full | Full | No Access | No Access |
| | Invite User (via email or import) | ✅ | ✅ | ❌ | ❌ |
| | Bulk Import Users via files | ✅ | ✅ | ❌ | ❌ |
| | Assign/revoke system roles to users & manage profile and status | ✅ | ✅ | ❌ | ❌ |
| | Groups | ✅ | ✅ | ❌ | ❌ |
| | Enrolment | ✅ | ✅ | ❌ | ❌ |
| | Directory Sync to enroll users | ✅ | ✅ | ❌ | ❌ |
| | Manage Tool Roles (Create and edit Custom roles), assign/revoke users | ✅ | ✅ | ❌ | ❌ |
| | Manage Admin Roles (Create and edit Custom roles), assign/revoke users | ✅ | ✅ | ❌ | ❌ |
| | Remove Users | ✅ | ✅ | ❌ | ❌ |
| | Manage User Settings (profile fields) | ✅ | ✅ | ❌ | ❌ |
| **Security and Control** | Access | ✅ | ✅ | ❌ | ❌ |
| | Create API App | ✅ | ✅ | ❌ | ❌ |
| | Delete API App | ✅ | ❌ | ❌ | ❌ |
| | Update API App | ✅ | ✅ | ❌ | ❌ |
| | Create or Delete an API Key | ✅ | ✅ | ❌ | ❌ |
| **Monitoring** | All actions | ✅ | ✅ | ❌ | ❌ |
| **Billing** | All actions (plans, invoice, subscribe/unsubscribe, token usage) | ✅ | ❌ | ❌ | ❌ |
| **Tool Management** | All actions | ✅ | ✅ | ❌ | ❌ |
| **Evaluations** | Access | Full | Custom | Custom | View |
| | Create projects | ✅ | ✅ | ✅ | ❌ |
| | Create Global Evaluators | ✅ | ✅ | ✅ | ❌ |
| | Delete Global Evaluators | ✅ | ❌ | ❌ | ❌ |
| | Edit Global Evaluators | ✅ | ✅ | ❌ | ❌ |
| **Manage Custom Scripts** | Access | Full | Custom | Custom | View |
| | Import New Custom Script | ✅ | ✅ | ✅ | ❌ |
| | Deploy/Re-deploy custom script | ✅ | ✅ | ✅ | ❌ |
| | Undeploy Custom Script | ✅ | ✅ | ❌ | ❌ |
| | Delete Custom Script | ✅ | ❌ | ❌ | ❌ |
| | Export Project | ✅ | ✅ | ❌ | ❌ |
| | Overview and Other Details | ✅ | ✅ | ✅ | ✅ |
| | Create/Delete an API Key | ✅ | ✅ | ❌ | ❌ |

#### Tool Role

| Module | Permission | Tool Admin | Tool Manager | Tool Editor | Tool Viewer |
|--------|------------|:----------:|:------------:|:-----------:|:-----------:|
| **Tools** | Access to Tool (default access for custom role: Custom) | Full | Custom | Custom | View |
| | Create a Tool Version | ✅ | ✅ | ✅ | ❌ |
| | Import as a Version | ✅ | ✅ | ❌ | ❌ |
| | Share Tools / Unshare Tools / Assign Tool Roles / Remove users | ✅ | ✅ | ❌ | ❌ |
| | Delete Tool | ✅ | ❌ | ❌ | ❌ |
| | Export Tool | ✅ | ✅ | ✅ | ❌ |
| | Monitoring Trace of a Tool | ✅ | ✅ | ✅ | ✅ |
| | Editing Tool Workflow | ✅ | ✅ | ✅ | ❌ |
| | Tool configurations | ✅ | ✅ | ✅ | ❌ |
| | Create/Delete an API Key | ✅ | ✅ | ❌ | ❌ |
| | Log list | ✅ | ✅ | ✅ | ❌ |
| | Detailed logs | ✅ | ✅ | ✅ | ❌ |
| **Deployment** | Manage Deployment – deploy/undeploy/redeploy | ✅ | ✅ | ✅ | ❌ |
| **Guardrails** | Manage Guardrails Configuration | ✅ | ✅ | ✅ | ❌ |
| **Monitoring** | Audit Log | ✅ | ✅ | ❌ | ❌ |

#### App Role – Agentic Apps

**Access Level Summary**

| Permission | App Owner | App Admin | App Developer | App Tester | App Viewer |
|------------|:---------:|:---------:|:-------------:|:----------:|:----------:|
| App Configuration | Full | Full | Full | View | View |
| Agents | Full | Full | Full | View | View |
| Code Tools | Full | Full | Full | View | View |
| Simulate | Full | View | View | View | View |
| Analytics | Full | Full | Full | View | No Access |
| Environments | Full | Full | View | View | No Access |
| API Keys | Full | Full | View | View | No Access |
| Audit Logs | Full | View | View | View | No Access |
| Guardrails | Full | Full | Full | View | View |
| Sharing & Permissions | Full | Full | Full | View | No Access |
| Versions | Full | Full | Full | View | No Access |
| Tools Library | Full | Full | Full | View | View |
| Export Tool | Full | Full | Full | View | No Access |

**Detailed Permission Breakdown**

| Module | Permission | App Owner | App Admin | App Developer | App Tester | App Viewer |
|--------|------------|:---------:|:---------:|:-------------:|:----------:|:----------:|
| **App Configurations** | View Profile, View Config, View app versions | ✅ | ✅ | ✅ | ✅ | ✅ |
| | Edit Profile, Edit Config, Import App version, Delete App version | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Agents** | View Agent | ✅ | ✅ | ✅ | ✅ | ✅ |
| | Add Agent, Edit Agent, Link/Unlink Tools, Restore Agent/App Version, Create Agent Version | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Tools** | View Tool | ✅ | ✅ | ✅ | ✅ | ✅ |
| | Add Tool, Edit Tool, Create/Edit/Delete Inline Tool | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Simulate** | Test | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Analytics** | View Sessions, Traces, Generations | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Environments** | View Environment | ✅ | ✅ | ✅ | ✅ | ❌ |
| | Create Environment, Delete Environment, Deploy Version | ✅ | ✅ | ❌ | ❌ | ❌ |
| **API Keys** | View List | ✅ | ✅ | ✅ | ✅ | ❌ |
| | Add Key | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Audit Logs** | View Logs | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Guardrails** | View Guardrails | ✅ | ✅ | ✅ | ✅ | ✅ |
| | Add Guardrails, Edit Guardrails | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Sharing & Permissions** | View Users | ✅ | ✅ | ✅ | ✅ | ❌ |
| | Add Users, Update Role | ✅ | ✅ | ✅ | ❌ | ❌ |

#### Evaluation Role

| Permission | Full | Edit | View |
|------------|:----:|:----:|:----:|
| Edit a project | ✅ | ✅ | ❌ |
| Share a project | ✅ | ✅ | ❌ |
| User management – invite/delete users from project | ✅ | ❌ | ❌ |
| Delete a project | ✅ | ❌ | ❌ |
| Create/delete custom evaluators | ✅ | ✅ | ❌ |
| Create/rename evaluations | ✅ | ✅ | ❌ |
| Delete Evaluations | ✅ | ❌ | ❌ |
| Run an Evaluation | ✅ | ✅ | ❌ |
| Add, edit and delete evaluator columns and run evaluation | ✅ | ✅ | ❌ |
| Create a custom evaluator | ✅ | ✅ | ❌ |
| Save as a global evaluator | ✅ | ✅ | ❌ |
| Export evaluation | ✅ | ✅ | ❌ |
| Automate evaluation | ✅ | ✅ | ❌ |
| Import rows | ✅ | ✅ | ❌ |
| Add production data (model traces) | ✅ | ✅ | ❌ |
| Run a prompt | ✅ | ✅ | ❌ |
| Table options (user specific) | ✅ | ✅ | ✅ |

---

## Role Management Dashboard

The **Role Management** Dashboard displays key information related to system and custom roles and their permissions available on the Platform.

**To access the dashboard:**

1. Log in to your account and click **Autonomous Agents** from the list of modules.
2. Click **Settings** on the top navigation bar.
3. Click **Users Management** > **Role Management** on the left menu.

The **Role Management** dashboard displays the following:

1. **Summary counts** for:
   - **Total Roles**: The total count of system and custom roles in the system.
   - **System Roles**: The count of the pre-defined, system-generated user roles.
   - **Custom Roles**: The count of the user roles created and configured by the system admin.

2. **Table view** with the following role details:
   - **Role**: The name of the system-generated or custom role.
   - **Role Type**: Defines the role's scope — **Account**, **Tool**, or **Agentic App**.
   - **Description**: The role description. System role descriptions are pre-defined; custom role descriptions are user-provided. Hover over the text to view the full description.
   - **Created by**: Displays *System* for system-generated roles; displays the creating user's name for custom roles.
   - **Last Updated On**: The local time and date when the custom role was last updated. Not displayed for system roles since they cannot be modified.

---

## Search a Role

To look up a system or custom role:

1. Navigate to the **Role Management** dashboard.
2. Click the **Search** text field.
3. Enter the role name. All matching results are displayed.

If no results are found, a "no results found" message is displayed.

---

## Manage System Roles

You can perform the following actions on system-generated roles.

> **Important**: System roles cannot be created, modified, or deleted since the role and its permissions are pre-defined in the system. However, they can be duplicated as **Custom Roles** and modified.

### View Role Information

To view the details of a system-defined role:

1. Navigate to the **Role Management** dashboard.
2. Click the **Ellipses** icon for a system role.
3. Select **View**.

The following information is displayed:

- Role Title along with Role Type.
- Role Name
- Role Description
- Configuration panel to enable/disable access and set access levels for the listed permissions at the account/tool level.

### Duplicate System Role

If you want to add a custom role by copying the scope and permissions of a system role, use the **Duplicate** functionality. This feature automatically copies the system role's name, role type, and permission/access configurations and creates it as a custom role. You can then modify, delete, or duplicate this custom role to create multiple copies.

> **Note**:
> - Changes made to the duplicate role do not apply to the original system role.
> - The **Last Updated On** value is displayed for duplicate roles and shows the date and time when the duplicate was created.

**Steps to Create a Duplicate Role:**

1. Navigate to the **Role Management** dashboard.
2. Click the **Ellipses** icon for a system role.
3. Select **Duplicate**.

The duplicate custom role displays the system role name followed by the suffix ***"copy"***. You can edit the name if required.

---

## Manage Custom Roles

Custom roles can be edited, deleted, or duplicated on the Settings console. They help customize a set of permissions and set access levels according to the enterprise's requirements.

### Add a Role

To add a custom role:

1. Navigate to **Role Management** on the **Settings** console.
2. Click **Add New Role**.
3. In the **New Role** window:
   - Enter a unique **Role Name** and **Role Description**.
   - Select the **Role Type** from the dropdown.

**If Role Type is *Account*:**

- Enable/select the access level for module-wise permissions in the **Enable/Disable tool access** section.
- If you select *Custom*, select or deselect the checkboxes to enable or disable the following permissions:
  - Create and Import Tool
  - Create agentic apps
  - Models: Add External models, Fine-tune a model, Delete a model, Manage Deployment, Create an API key for a model, Export model
  - Prompts
  - Settings: Integrations, Weights and Biases, Hugging Face, S3 Bucket
  - User Management: Invite user, Bulk import users, Assign roles to users, Directory Sync, Manage admin roles, Manage tool roles, Remove users, Manage user settings
  - Security and Control Settings
  - Manage Guardrail Models
  - Monitoring
  - Billing

Select the access level for **Models**, **Settings**, **Integrations**, and **User Management** from:

- **Full**: Users can access all module permissions (view & edit).
- **Custom**: Users can select only the required permissions for the module.
- **View**: Users can only view the configured module permissions.
- **No Access**: Users cannot view or customize the module permissions.

**Important Considerations:**

- You must first select the access level for **Models** to enable its permissions. Skipping this step automatically disables the permissions.
- Selecting ***Full*** automatically selects all module permissions.
- Selecting ***Custom*** allows you to enable only the required module permissions.
- Selecting ***View*** or ***No Access*** disables permissions selection.
- Selecting ***Full*** for **Settings** automatically sets **Integrations** and **User Management** to ***Full*** and enables all permissions for Integrations, User Management, Security and Control, Manage Guardrail Models, Monitoring, and Billing.
- Selecting ***No Access*** for **Settings** automatically sets **Integrations** to ***View*** and **User Management** to ***No Access*** and disables all permissions for Integrations (View is always enabled), User Management, Security and Control, Manage Guardrail Models, Monitoring, and Billing.
- Selecting ***Custom*** for **Settings** automatically sets **Integrations** and **User Management** to ***Custom***, where you can select or deselect individual permissions for Integrations, User Management, Security and Control, Manage Guardrail Models, Monitoring, and Billing.

**If Role Type is *Tool*:**

- Select ***Custom***, ***View***, or ***Full*** for **Access**. (*Custom* is the default.)
- Set up tool permissions in the **Enable/Disable tool access** section:
  - ***View***: All permissions are automatically disabled.
  - ***Full***: All permissions are automatically enabled.
  - ***Custom***: Select the required tool permissions to enable them.

4. Click **Create**.

The new custom role is created and listed on the **Role Management** dashboard.

---

### Edit a Custom Role

You can modify the role name, description, and access levels for account-type or tool-type roles' permissions.

> **Note**:
> - The system does not allow changing the **Role Type** once it is set. You must create a new custom role to assign a different role type.
> - When a custom role is updated, it changes the permissions for all assigned users.

To update a role:

1. Navigate to the **Role Management** dashboard on the **Settings** console.
2. Click the **Ellipses** icon for the custom role you want to modify.
3. Select **Edit**.
4. In the **Update Role** window, edit the following:
   - Role Name
   - Role Description
   - Access: Select *Custom*, *Full*, or *View*.

> **Note**: You cannot reset the access levels for module-wise permissions in the **Enable/disable tool access** section.

5. Click **Update**.

A success message is displayed and the updated role details appear on the dashboard.

---

### Delete a Custom Role

You can delete a custom role to permanently remove it from the system and unassign it from users.

> **Note**: You can only delete one role at a time. Bulk delete is not supported.

**Prerequisite:** Before deleting a role, ensure the custom role is not assigned to any active users. If the role is assigned, do one of the following:

- Reassign an alternative role to the active users. [Learn more](#reassign-an-alternative-role-to-active-users).
- Remove the inactive users to whom this role is assigned.

To delete a role:

1. Navigate to the **Role Management** dashboard on the **Settings** console.
2. Click the **Ellipses** icon for the custom role you want to delete.
3. Select **Delete**.
4. Click **Confirm** in the **Delete Role** confirmation window.

A success message is displayed and the role is deleted from the **Role Management** dashboard.

---

### Role Deletion Error and Workaround

The **Settings** console allows you to delete only unassigned roles. If a role is assigned to active/inactive users during deletion, an error message is displayed. You must perform one of the following workarounds.

#### Reassign an Alternative Role to Active Users

1. Navigate to **Users Management** > **Users** on the **Settings** Console.
2. Click the **Account Role** entry for the user.
3. Select the role you want to reassign.

Once you reassign the role, go to the **Role Management** dashboard and delete the role.

The role is deleted successfully and the custom roles count is updated (decreased).

#### Delete Assigned Users

Navigate to the **Users Management** dashboard and follow the steps in the **Delete Users** section to delete all assigned users individually or in bulk. Once the users are deleted, go to the **Role Management** dashboard and delete the required custom role.

Deleting the assigned users removes their association with the role you want to delete.

---

### Duplicate a Custom Role

Like a system role, you can duplicate a custom role, which copies the name, role type, and configurations for permissions and access. Follow the same steps as [Duplicate System Role](#duplicate-system-role) to complete the process for a custom role.

---

## Related Resources

- [Settings Console](https://docs.kore.ai/agent-platform/administration/overview/) – About other Platform admin features.
- [Users Management](https://docs.kore.ai/agent-platform/settings/user-management/users/) – About managing users in your account.
- [Monitoring: Audit Logs](https://docs.kore.ai/agent-platform/settings/monitoring/audit-logs/) – About tracking events and user activity in your account.
