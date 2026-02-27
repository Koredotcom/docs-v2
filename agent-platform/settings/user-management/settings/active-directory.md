# Active Directory: Configuring Automatic User Data Synchronization

By configuring Active Directory import, you can seamlessly bring your organizational user information into the Settings console and keep it in sync with a single source of truth. This bulk import eliminates the need for email invitations or manual user info file imports, making the process more efficient. 

Moreover, the automatic synchronization (auto sync) feature ensures that Settings always has the most up-to-date user information, even reflecting deleted and modified records in the Active Directory.

<Info>An Active Directory professional with the necessary technical expertise should handle the auto sync process.</Info>

**Key Steps for Configuring Active Directory Import**

1. [Set up the Connection](./active-directory.md#step-1-set-up-the-connection): Connect the **Settings** Console to your organization's AD to enable data import.
2. [Select and Import the Organizational Units (OUs)](./active-directory.md#step-2-import-organization-units): Choose specific OUs or all OUs from which to import key user information.
3. [Specify User Attributes and Configure Rules for Selective Import from Active Directory](#step-3-specify-user-attributes-and-configure-rules-for-selective-import-from-active-directory): Define desired user attributes (profile fields) that need to be imported from your active directory. Configure the inclusion and exclusion rules to control the information you need.
4. [Schedule Automatic Active Directory Sync](#step-4-schedule-automatic-active-directory-sync): Set up automatic or periodic sync schedules to keep user data current and reflect any changes or deletions from Active Directory.

## Steps to Configure Active Directory Sync 

1. Log in to your account and click **Autonomous Agents** from the list of modules.
2. Click **Settings** on the top navigation bar.
3. Navigate to **Users Management** > **Settings** on the left menu.
4. Click the **Configure Directory** button in the **Configure sync with directory** section.
5. Complete the setup by following the steps below in the **Configure Directory** window:

<Note><ul><li>The left panel gives you complete control over the configuration process. Completed steps are marked by a check, and steps in progress are indicated by a dot, offering a clear and intuitive visual guide.</li>
<li>To complete the configuration, perform each step in order without skipping any.</li></ul></Note>

### Step 1: Set up the Connection

1. Configure the Active Directory connection by providing the following mandatory fields:

    * <b>Host Name</b>: The domain's hostname or IP address where Active Directory services run.
    * <b>Server Port</b>: The network port number used by the domain host to communicate over the network.
    * <b>Base DN</b>: The server location for users and groups in a domain.
    * <b>User ID</b>: The identity used to log into the Active Directory.
    * <b>Password</b>: The password used to log into the Active Directory.
    * <b>(Optional) SSL</b>: Enable this option to secure communications over the web, particularly for services and applications that interact with Active Directory via HTTPS.

2. Click <b>Next</b> to confirm the credentials before proceeding. If validation errors occur, they will be displayed on the screen so you can correct them before continuing.

### Step 2: Import Organization Units

Follow the steps below to configure and import user data from key organizational units such as Sales, Finance, or Operations in your Active Directory:

1. Select one of the following options based on your requirements:

<ul><li><b>Import all organization units</b>: Imports user information from all the organization units.</li>
<li><b>Do not import organization units</b>: Do not import user information from any organization units in the Active Directory.</li>
<li><b>Import only the following organization units</b>: Imports user information only from the organization unit you select.</li></ul>

1. Click <b>Next</b> to proceed to user profile fields mapping.

    ![manage org units](./images/org-units.png "manage org units")

### Step 3: Specify User Attributes and Configure Rules for Selective Import from Active Directory

In this configuration step, you can do the following:

* Define the LDAP user attributes (profile fields) to be imported from the Active Directory.
* Establish inclusion and exclusion rules to filter data and import the necessary information. **Inclusion rules** define which user data to include in auto sync or import, focusing on relevant users who meet certain conditions. **Exclusion rules** determine which user data to exclude from the Active Directory import.

To define both default (pre-defined) and custom fields during setup, follow the steps below:

1. (Optional) Select **Import users from active directory** to fetch the user default fields from the Active Directory.
1. Click the **User Attributes** tab and select the value from the dropdown to map the field from the Active Directory to the user attribute for all the fields under **Default Fields**.

    ![default fields](./images/default-fields.png "default fields")

1. (Optional) In addition to the default fields, you can add custom fields for your user profile information and map them to a corresponding field in the Active Directory. To add a custom field mapping, follow the steps below:

    * Click <b>Add Field</b> in the <b>Custom Fields</b> section.
    * Enter the custom field you want to map to your user profile in the <b>Custom field name</b> textbox.
    * Enter the corresponding Active Directory field in the <b>Field from Active Directory</b> textbox.
    * (Optional) Click the <b>tag</b> icon to set the custom field as the primary field. However, to delete this field, you must first remove the primary field tag.
    * Click <b>Next</b> to complete user profile fields' mapping and proceed.

    ![manage custom field](./images/custom-field-management.png "manage custom field")

    To remove a field, click the **Delete** icon. Deleting a custom field is allowed only if you have added multiple fields.

2. Next, define the rules and sync criteria to import specific users from your Active Directory server. To do this, click the <b>Manage Inclusion & Exclusion Rules</b> tab.
3. Under <b>Inclusion Rules</b>, you can sync specific users from your Active Directory Server by defining criteria or filters using profile parameters. Enter the rule expression using the user profile parameters in the <b>Rule Definition</b> textbox according to the LDAP filter syntax mentioned <a href="https://social.technet.microsoft.com/wiki/contents/articles/5392.active-directory-ldap-syntax-filters.aspx">here</a>.

4. (Optional) An <b>Exclusion Rule</b> includes the <b>AD/LDAP field</b>, <b>Match Type</b>, and <b>Value</b>. You must set <b>Match Type</b> for one of the following options:

    * **Exact Match**: The user profile Active Directory field must exactly match the **Value** field you specify. For example, if **Employee Vertical** must precisely match “Sales,” use this option.
    * **Partial Match**: The user profile Active Directory field can partially match or include the **Value** field you specify. For instance, if **Employee Vertical** should match part of “Product Sales” (such as “Product” or “Sales”), choose this option.
    * **Multiple Matches**: The user profile Active Directory field must match all the values you set in the **Value** field. For example, if **Employee Vertical** should match both “Product Sales” and “Service Sales,” select this option.

**Steps to Set Exclusion Rules**

To set an **Exclusion Rules**, follow the steps below:

1. Click **+Add exclusion** to add a new rule entry.
2. Select the entry to enable the exclusion rule.
3. Click **Next** to proceed. 

<Note>All mandatory fields must be filled in before you can proceed to the next step. Deleting a custom field is allowed only if you have added multiple fields.</Note>

![add exclusion](./images/add-exclusion.png "add exclusion")

To delete a rule, hover over the entry, click the **Delete** icon, and confirm.

### Step 4: Schedule Automatic Active Directory Sync

To finish configuring your directory, schedule auto sync for your Active Directory. Enabling auto sync is **_optional_** but highly recommended to keep your Active Directory data on the Platform up-to-date. 

Auto sync will ensure that any changes in Active Directory, such as user additions or deletions, are automatically reflected on the Platform.

<Note>When Auto Sync is disabled, you must manually initiate Active Directory sync by clicking the <b>Sync Now</b> button under <b>Configure Sync with Directory</b>.</Note>

To enable and configure auto sync, follow the steps below:

1. Click the **Enable auto-sync** toggle.

    ![enable auto sync](./images/enable-auto-sync.png "enable auto sync")

    <Note>You can run AD-Sync anytime by choosing the run now option on the settings page.</Note>

1. Select the following sync fields:

    * **Sync Frequency**: Select from _daily_, _weekly_ (use the *Repeat on* option), _monthly_ (choose a specific day for each month), or _other_ (custom) sync periods. The default selection is _Daily_ and the syncs continue for the selected period until the connection is active.
    * **Sync Start**: Click the Calendar icon and choose a date from the widget to start the Active Directory sync. The default selection is the current date. 
    * **Time**: According to the selected sync frequency, select when the Active Directory sync should occur. The default setting is 12:00 PM.

       <Note><ul><li>You can select only one date from the calendar for weekly and monthly syncs.</li>
       <li>You can schedule the sync only with a future date and time from the default selections.</li>
       <li>The default selection for <b>Start Sync</b> is the current date, which you can change.</li></ul> </Note>

1. Click <b>Save</b>.

If auto sync is disabled, clicking **Save** only saves the Active Directory sync configuration. Enabling auto-sync saves the configuration and initiates syncing at the scheduled date and time.

When you set up Active Directory sync for the first time, the following options appear under **Configure sync with directory**:

* **Sync now**: Perform an immediate sync.
* **Sync History**: Displays the history of Active Directory syncs, including the comprehensive summary of the following:
  * Date and Time
  * By (user name)
  * The number of *successful* and *failed* user records that got synced.

  ![sync history](./images/sync-history.png "sync history")



* **Manage directory sync**: Displays the **Configure Directory** window where you can edit the existing configurations.
* **Reset**: Resets the Active Directory sync configurations but retains the last sync data on the Platform.
* **Sync Status**: This information summary displays the date of last sync, the total number of users and organization units synchronized, and any errors/issues encountered during the process. 

<Note>Even if auto sync is turned off, you can click on the <b>Change</b> link in the sync status to access and schedule an auto sync on the configuration page.</Note>


![configure sync with directory](./images/configure-sync-with-directory.png "configure sync with directory")

### User Settings

In this module, you can choose which profile fields (data fields) are visible to all users by default in your domain. You can also specify whether users are allowed to edit these default fields. You can manage mandatory fields here. For example: *First Name* in the HRIS.

Additionally, you can manage which non-default fields (controlled fields) end users can view and edit. You can manage optional fields here. For example: *District* for address.

### Default Role for New Workspace Users

Authorized administrators can set a default role (Admin, Member, or Viewer) for users added to the workspace via invite, sync, or API by selecting a role from the dropdown and clicking <i>Save</i>.

By assigning the appropriate access upfront, this setting streamlines onboarding by ensuring users receive the correct permissions immediately, eliminating the need for manual role updates after provisioning.

<b>Key Considerations</b>

* This setting applies only to newly added users who do not have a role explicitly assigned to them.

* It does not affect existing users or their roles. 

* *Member* is the recommended default role. 

* If no role is specified when a user is added, the user automatically inherits the workspace’s current default role. 

* You can explicitly assign another role during user invitation or creation (on the **Users Management** -> **Users** page under the *Account Role* column), which overrides the configured workspace default role and access.

### Sync Status Email Notifications

For a successful or failed sync, a notification is sent to the registered email.

In the **Email Notifications** section you can choose whether the users should receive email notifications in the following scenarios:

* Only when invited by the administrator.
* Only when added or sychronized using AD server

An alternative way to add users to your account (without using Active Directory sync) is to [invite them via email](../invite-a-user.md). 

To learn more about other administrator features on the **Settings** Console, click [here](../../../administration/overview.md).
