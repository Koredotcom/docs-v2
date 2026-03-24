# Overview on Account Users, Roles, and Active Directory

The **Users Management** module is crucial for handling user-related activities within your organization. This module provides capabilities for the following:

- **Managing Users**: Add users to your account, assign a default user role, view user status, unlock a locked user, and delete one or more user from your account. [Learn more](../user-management/users.md).
- **Managing Roles, and Permissions**: Assign and configure roles, set module-wise account/tool permissions, and manage user access efficiently. [Learn more](./role-management.md).
- **Active Directory (AD) Synchronization (Sync)**: Integrate and synchronize your AD with organizational user data. [Learn more](./settings/active-directory.md).
- **Configuring User Profile Fields**: Set visibility and modification rules for user profile fields specific to your domain. [Learn more](./settings/active-directory.md).
- **Email Notifications**: Configure email notifications for users depending on whether they joined your account by invitation or through AD sync. [Learn more](./settings/active-directory.md#sync-status-email-notifications).

This [Users](./users.md) page provides detailed instructions and guidelines on various capabilities available within the **Users Management** module for administering user-related operations, such as the following:

- Role and permissions management for different modules. [Learn more](./role-management.md).
- AD sync and user profile configuration. [Learn more](./settings/active-directory.md#active-directory-configuring-automatic-user-data-synchronization).

**Users Management** streamlines user administration and enhances operational efficiency. 

It also supports various administrative features influenced by the roles and permissions assigned at the account or tool level. This includes actions you can perform on both external and existing users:

- **System Roles**: Pre-defined roles with default permissions for basic system functionality. [Learn more](./role-management.md#manage-system-roles).
- **Custom Roles**: User-defined roles tailored to specific needs with customized access definitions for module-wise permissions. [Learn more](./role-management.md#manage-custom-roles).

For example, a *Master Admin* role is assigned by default to the account owner. Similarly, a *Tool Admin* role is assigned to a user who creates a tool and has complete control over it.

**Users Management** operates on two distinct levels discussed [here](../../administration/overview.md#levels-of-users-management).

Once you invite a user or import users data, you can change their roles, assign/unassign permissions, delete users. and do more using the [Roles Management](../../settings/user-management/role-management.md) and [Users](./users.md) features on the **Settings** console.

<hr/> 

**Related Resources**

* [Settings Console](../../administration/overview.md) - about other admin features.
* [Role Management](../user-management/role-management.md) - about managing default and custom roles in your account.
* [Monitoring: Audit Logs](../monitoring/audit-logs.md) - about tracking events and user activity in your account.
