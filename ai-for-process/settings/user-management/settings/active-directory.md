# Active Directory: Configuring Automatic User Data Synchronization

By configuring Active Directory (AD) import, you can seamlessly bring your organizational user information into the Settings console and keep it in sync with a single source of truth. This bulk import eliminates the need for email invitations or manual user info file imports, making the process more efficient. 

Moreover, the automatic synchronization (auto sync) feature ensures that Settings always has the most up-to-date user information, even reflecting deleted and modified records in the AD.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>An AD professional with the necessary technical expertise should handle the auto sync process.</p>
</div>

**Key Steps for Configuring AD Import**

1. [Set up the Connection](./active-directory.md#step-1-set-up-the-connection): Connect the **Settings** Console to your organization's AD to enable data import.
2. [Select and Import the Organizational Units (OUs)](./active-directory.md#step-2-import-organization-units): Choose specific OUs or all OUs from which to import key user information.
3. [Specify User Attributes and Configure Rules for Selective Import from AD](./active-directory.md#step-3-specify-user-attributes-and-configure-rules-for-selective-import-from-ad): Define desired user attributes (profile fields) that need to be imported from your active directory. Configure the inclusion and exclusion rules to control the information you need.
4. [Schedule Automatic AD Sync](./active-directory.md#step-4-schedule-automatic-ad-sync): Set up automatic or periodic sync schedules to keep user data current and reflect any changes or deletions from AD.

## Steps to Configure AD Sync 

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings" style="border: 1px solid gray; zoom:75%;">

2. On the **Users** dashboard, click the **Configure Directory** button in the **Configure sync with directory** section.
<img src="../images/configure-directory-button.png" alt="configure directory" title="configure directory" style="border: 1px solid gray; zoom:75%;">

3. Complete the setup by following the steps below in the **Configure Directory** window:

<div class="admonition note">
<p class="admonition-title">Note</p>
<ul><li>The left panel gives you complete control over the configuration process. Completed steps are marked by a check, and steps in progress are indicated by a dot, offering a clear and intuitive visual guide.</li>
<li>To complete the configuration, perform each step in order without skipping any.</li></ul>
</div>

### Step 1: Set up the Connection

1. Configure the AD connection by providing the following mandatory fields:

<ul><li><b>Host Name</b>: The domain's hostname or IP address where AD services run.</li>
<li><b>Server Port</b>: The network port number used by the domain host to communicate over the network.</li>
<li><b>Base DN</b>: The server location for users and groups in a domain.</li>
<li><b>User ID</b>: The identity used to log into the AD.</li>
<li><b>Password</b>: The password used to log into the AD.</li>
<li><b>(Optional) SSL</b>: Enable this option to secure communications over the web, particularly for services and applications that interact with AD via HTTPS.</li>
<img src="../images/configure-ad-connection.png" alt="configure ad connection" title="configure ad connection" style="border: 1px solid gray; zoom:75%;"></ul>

<ol start="2"><li>Click <b>Next</b> to confirm the credentials before proceeding. If validation errors occur, they will be displayed on the screen so you can correct them before continuing.</li></ol>

### Step 2: Import Organization Units

Follow the steps below to configure and import user data from key organizational units such as Sales, Finance, or Operations in your AD:

1. Select one of the following options based on your requirements:

<ul><li><b>Import all organization units</b>: Imports user information from all the organization units.</li>
<li><b>Do not import organization units</b>: Do not import user information from any organization units in the AD.</li>
<li><b>Import only the following organization units</b>: Imports user information only from the organization unit you select.</li></ul>

<ol start="2"><li>Click <b>Next</b> to proceed to user profile fields mapping.
<img src="../images/org-units.png" alt="manage org units" title="manage org units" style="border: 1px solid gray; zoom:75%;"></li></ol>

### Step 3: Specify User Attributes and Configure Rules for Selective Import from AD

In this configuration step, you can do the following:

* Define the LDAP user attributes (profile fields) to be imported from the AD.
* Establish inclusion and exclusion rules to filter data and import the necessary information. **Inclusion rules** define which user data to include in auto sync or import, focusing on relevant users who meet certain conditions. **Exclusion rules** determine which user data to exclude from the AD import.

To define both default (pre-defined) and custom fields during setup, follow the steps below:

1. (Optional) Select **Import users from active directory** to fetch the user default fields from the AD.
2. Click the **User Attributes** tab and select the value from the dropdown to map the field from the AD to the user attribute for all the fields under **Default Fields**.
<img src="../images/default-fields.png" alt="default fields" title="default fields" style="border: 1px solid gray; zoom:75%;">

3. (Optional) In addition to the default fields, you can add custom fields for your user profile information and map them to a corresponding field in the AD. To add a custom field mapping, follow the steps below:

<ul><li>Click <b>Add Field</b> in the <b>Custom Fields</b> section.</li>
<li>Enter the custom field you want to map to your user profile in the <b>Custom field name</b> textbox.</li>
<li>Enter the corresponding AD field in the <b>Field from Active Directory</b> textbox.</li>
<li>(Optional) Click the <b>tag</b> icon to set the custom field as the primary field. However, to delete this field, you must first remove the primary field tag.</li>
<li>Click <b>Next</b> to complete user profile fields' mapping and proceed.</li>
<img src="../images/custom-field-management.png" alt="manage custom field" title="manage custom field" style="border: 1px solid gray; zoom:75%;">
</ul>

To remove a field, click the **Delete** icon as shown below.

<img src="../images/delete-custom-field.png" alt="delete custom field" title="delete custom field" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Deleting a custom field is allowed only if you have added multiple fields.</p>
</div>

<ol start="4"><li>Next, define the rules and sync criteria to import specific users from your AD server. To do this, click the <b>Manage Inclusion & Exclusion Rules</b> tab.</li>
<li>Under <b>Inclusion Rules</b>, you can sync specific users from your AD Server by defining criteria or filters using profile parameters. Enter the rule expression using the user profile parameters in the <b>Rule Definition</b> textbox according to the LDAP filter syntax mentioned <a href="https://social.technet.microsoft.com/wiki/contents/articles/5392.active-directory-ldap-syntax-filters.aspx" target="_blank">here</a>.</li>
<img src="../images/manage-rules.png" alt="manage rules" title="manage rules" style="border: 1px solid gray; zoom:75%;"></ol>

<ol start="6"><li>(Optional) An <b>Exclusion Rule</b> includes the <b>AD/LDAP field</b>, <b>Match Type</b>, and <b>Value</b>. You must set <b>Match Type</b> for one of the following options:</li></ol>

* **Exact Match**: The user profile AD field must exactly match the **Value** field you specify. For example, if **Employee Vertical** must precisely match “Sales,” use this option.
* **Partial Match**: The user profile AD field can partially match or include the **Value** field you specify. For instance, if **Employee Vertical** should match part of “Product Sales” (such as “Product” or “Sales”), choose this option.
* **Multiple Matches**: The user profile AD field must match all the values you set in the **Value** field. For example, if **Employee Vertical** should match both “Product Sales” and “Service Sales,” select this option.

**Steps to Set Exclusion Rules**

To set an **Exclusion Rules**, follow the steps below:

1. Click **+Add exclusion** to add a new rule entry.
2. Select the entry to enable the exclusion rule.
3. Click **Next** to proceed. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>All mandatory fields must be filled in before you can proceed to the next step.Deleting a custom field is allowed only if you have added multiple fields.</p>
</div>

<img src="../images/add-exclusion.png" alt="add exclusion" title="add exclusion" style="border: 1px solid gray; zoom:75%;">

To delete a rule, hover over the entry and click the **Delete** icon.

<img src="../images/delete-rule.png" alt="delete rule" title="delete rule" style="border: 1px solid gray; zoom:75%;">

### Step 4: Schedule Automatic AD Sync

To finish configuring your directory, schedule auto sync for your AD. Enabling auto sync is **_optional_** but highly recommended to keep your AD data on AI for Process up-to-date. 

Auto sync will ensure that any changes in AD, such as user additions or deletions, are automatically reflected on AI for Process.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When Auto Sync is disabled, you must manually initiate AD sync by clicking the <b>Sync Now</b> button under <b>Configure Sync with Directory</b>.</p>
</div>

To enable and configure auto sync, follow the steps below:

1. Click the **Enable auto-sync** toggle.
<img src="../images/enable-auto-sync.png" alt="enable auto sync" title="enable auto sync" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can run AD-Sync anytime by choosing the run now option on the settings page.</p>
</div>

<ol start="2"><li>Select the following sync fields:</li></ol>

* **Sync Frequency**: Select from _daily,_ _weekly_, _monthly_, or _other _sync periods. The default selection is _Daily_.
* **Sync Start**: Click the Calendar icon and choose a date from the widget to start the AD sync. The default selection is the current date. 
* **Time**: According to the selected sync frequency, select when the AD sync should occur. The default setting is 12:00 PM.

<div class="admonition note">
<p class="admonition-title">Note</p>
<ul><li>You can select only one date from the calendar for weekly and monthly syncs.</li>
<li>You can schedule the sync only with a future date and time from the default selections.</li></ul>
</div>

**Daily**

Selecting the Daily option means user data from AD synchronizes everyday starting from the date specified for **Start Sync** and continuing for the duration of the AD connection.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The default selection for <b>Start Sync</b> is the current date, which you can change.</p>
</div>

For example, the data syncs daily from 10 June 2024 at 12:00 PM.

<img src="../images/daily-schedule.png" alt="daily schedule" title="daily schedule" style="border: 1px solid gray; zoom:75%;">

**Weekly**

Selecting the **Weekly** option means user data from AD synchronizes on the selected day every week (**Repeat On** option), starting from the date you set for Start Sync and continuing for the duration of the AD connection.

For example, the data syncs every Thursday from 10 June 2024, at 12:00 PM.

<img src="../images/weekly-schedule.png" alt="weekly schedule" title="weekly schedule" style="border: 1px solid gray; zoom:75%;">

**Monthly**

Selecting **monthly** triggers synchronizes user data from the AD on the designated day of each month, starting from the specified **Start Sync** date and continuing throughout the duration of the AD connection.

For example, the data syncs on the 15th of each month, starting from 10 June 2024, at 12:00 PM.

<img src="../images/monthly-schedule.png" alt="monthly schedule" title="monthly schedule" style="border: 1px solid gray; zoom:75%;">

**Other**

Select **Other** to schedule AD syncs at intervals different from Daily, Weekly, or Monthly. This option allows you to schedule syncs that repeat after a specified number of days/weeks. The periodic sync occurs at the specified time starting from the selected start date.

For example, the data sync repeats every 60 days or weeks, starting 10 June 2024 at 12:00 PM.

<img src="../images/other-schedule.png" alt="other schedule" title="other schedule" style="border: 1px solid gray; zoom:75%;">

<ol start="3"><li>Click <b>Save</b>.</li>
<img src="../images/save-schedule.png" alt="save schedule" title="save schedule" style="border: 1px solid gray; zoom:75%;">
</ol>

If auto sync is disabled, clicking **Save** only saves the AD sync configuration. Enabling auto-sync saves the configuration and initiates syncing at the scheduled date and time.

When you set up AD sync for the first time, the following options appear under **Configure sync with directory**:

* **Sync now**: Performs an ad hoc AD sync. Select this option if you do not want to perform a scheduled sync.
* **Sync History**: Displays the history of AD syncs, including the comprehensive summary of the following:
  * **Date and Time**: Timestamp indicating when the sync occurred.
  * **By**: Identification of the individual who initiated the sync.
  * The number of **successful** and **failed** user records that got synced.
  <img src="../images/sync-history.png" alt="sync history" title="sync history" style="border: 1px solid gray; zoom:75%;">

* **Manage directory sync**: Displays the **Configure Directory** window where you can edit the existing configurations.
* **Reset**: Resets the AD sync configurations but retains the last sync data on AI for Process.
* **Sync Status**: This information summary displays the date of last sync, the total number of users and organization units synchronized, and any errors/issues encountered during the process. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Even if auto sync is turned off, you can click on the <b>Change</b> link in the sync status to access and schedule an auto sync on the configuration page.</p>
</div>

<img src="../images/configure-sync-with-directory.png" alt="configure sync with directory" title="configure sync with directory" style="border: 1px solid gray; zoom:75%;">

### Sync Status Email Notifications

For a **successful** sync, you will receive the following email:    

<img src="../images/success-sync.png" alt="success sync" title="success sync" style="border: 1px solid gray; zoom:75%;">

For a **failed** sync, you will receive the following email:    

<img src="../images/failed-sync.png" alt="failed sync" title="failed sync" style="border: 1px solid gray; zoom:75%;">

An alternative way to add users to your account (without using AD sync) is to invite them via email. 

To learn more about other administrator features on the **Settings** Console, click [here](../../../settings/overview.md).