# User Enrollments

User enrollments simplify managing account access by clearly defining who can join and how they are invited. This functionality is essential for maintaining security and organization within the account. Three main enrollment options are available:  Open to Domain, Invite Only, and Manage users with AD Sync.

<img src="../images/user-enrollment.png" alt="user-enrollment" title="user-enrollment" style="border: 1px solid gray; zoom:80%;"> 

## Open to Domain

Any user within the domain, or any additional domains added in the domain management section, can log into the account.

## Invite Only

Only users who have been invited will be added to the account as members.

## Manage users with AD Sync

This option allows the admin to manage accounts using Active Directory synchronization, enabling auto-invitation, removal, or management of users by syncing with Google, Microsoft, and LDAP directory groups, all of which can be managed in the service account section.

1. Click **Manage users with AD Sync** A pop-up window appears listing the number of users currently in the account.
   
2. Click **Confirm** to proceed.
   
3. Select a distribution list (DL) from the chosen service account and assign it a role. Ensure that all users enrolling through this DL receive the assigned role, with the highest role applied if a user is enrolled in multiple roles, following the hierarchy **Admin > Custom Admins > Members**. 
   
4. Click **Sync now** to view the account delta, which shows the number of users to be newly added, those to be removed, and any role updates for existing users.  

5. Click **Set Sync Now** to choose the frequency and start time for auto-syncing and then click **Confirm**. The auto sync is configured to run daily, updating and managing user information at the designated time. This includes sending invites to new users, removing users who are no longer part of the groups, and updating roles for existing users. 
<img src="../images/set-time-for-auto-sync.png" alt="set-time-for-auto-sync" title="set-time-for-auto-sync" style="border: 1px solid gray; zoom:80%;"> 

6. Click **Save Configuration** to apply and update all the respective changes. 
Note: The configuration cannot be saved if the current admin making the changes is not included in the admin DL.  

!!!Important Considerations

    * Admins can suspend users on the user page, even with this enrollment setting.
    * Admins cannot delete users or change roles in this setting.
    * Synced DLs will be created as user groups with names identical to the DL names.
    * Admins can delete or rename these user groups as needed.
    * Super Admins will not be removed from the account.
    * If switching back to **Invite Only** or **Open to Domain**, users previously synced from DLs will remain in the account.