# Synchronizing Users from Active Directory - New Admin Console

Use this section to synchronise and import user information, mailing lists, and groups from your organization’s directory. The sync can be automated to ensure seamless and up-to-date integration.

**Prerequisites**

To configure Active Directory synchronisation, you must:

1. Have administrative access for reading and executing actions on your LDAP server.
2. Familiarity with LDAP queries and LDAP server administration.
3. Have a Microsoft Active Directory LDAP Server.

AI for Service offers a wizard-based approach that will take you through the process to set up access to an Active Directory and configure the synchronisation process customised for your company. You can define synchronisation for members, and if needed, distribution lists and organisational units.

**Cloud-Based Connector**

Configure a cloud-based connector to access your Active Directory (AD) server securely over the internet.

## Configuration

To configure Active Directory, log on to the Admin Console and complete the following steps to access the configuration settings for your company's Active Directory sync.

1. In the User Management module, on the Directory Sync page, select **Configure**.

    <img src="../images/sync-with-company-directory.png"
        alt="Run manual sync"
        title="Run manual sync"
        style="border: 1px solid gray; zoom:70%;" />

2. The Cloud-Based Connector dialog is displayed. Follow the steps given here to proceed.

3. On the **Connection** tab, define the following fields:

    <img src="../images/cloud-based-connectors.png"
        alt="Run manual sync"
        title="Run manual sync"
        style="border: 1px solid gray; zoom:70%" />


    a.   **Host Name**: The name of the domain host, for example, `www.example.org` or `10.12.6.151`.

    b.   **Server Port**: The port number for the domain host, for example, 10042.

    c. **Base DN**: The server location for users and groups in a domain, for example, dc=kore,dc=com.

    d. **User ID**: The username for authentication to connect to the domain controller.

    e. **Password**: The password for authentication to connect to the domain controller.

    f. **SSL**: Select to enable SSL for HTTPS.

    g. **Test Connection**: Click to test the authentication and Host configuration settings.

    h. Select **Save & Next** to continue.


4. Optionally, on the Organization Units tab, you can define the Org Units that need to be imported from your company directory. Groups and sub-groups from the selected OU will be synchronized into the platform and the hierarchy of groups as present in the AD Server will be maintained in the platform.

      a. You can choose to:
      
      * Import all Organization Unit,
      * Not Import any unit, or
      * Import specific units.

      b. Click **Save and next** to continue.

5. On the **Users** tab, you can define the desired User Attributes (profile fields) that need to be imported from your company directory. You can set import criteria, inclusion rules, and exclusion rules to control the information that you want to import from your organization.

      a. On the **User Attributes** child tab you can import the user profile information

      * using predefined Default mapping of Kore.ai user profile fields to relevant LDAP attributes or

      * create your own custom mapping with the Customer Attribute name and values.

      b. On the **Inclusion Rules**, you can sync select users from your AD Server by defining the sync criteria or filters using the profile parameters. You can write the rules using the LDAP filter syntax, [refer here for more](https://learn.microsoft.com/en-us/archive/technet-wiki/5392.active-directory-ldap-syntax-filters).

      c. On the **Exclusion Rules** child tab, you can create rules to limit incoming user records for the user (default and custom) data.

6. Optionally, on the Exclusions tab, you can define exclusions for synchronization to prevent Active Directory from replacing specific users (default and custom), distribution lists, or organizational groups.

7. On the **Schedule** tab, enable and define the synchronization schedule with the Active Directory as shown in the following illustration.

      a. Enable Synchronization – Click to enable or disable a synchronization schedule.

      b. Synchronization Frequency – Select one of:

      * **Daily**: Specify the Start Synchronization date and time to begin the daily sync.

      * **Weekly**: Specify the day of the week to synchronize and the Start Synchronization date and time to begin the weekly sync.

      * **Monthly**: Specify the day of the month to synchronize and the Start Synchronization date and time to begin the monthly sync.

      * **Other**: Specify the number of DAY(S) or WEEK(S) to synchronize and the Start Synchronization date and time to begin the sync.

8. Click **Save** to save the synchronization settings and close the Configure Synchronization with your Company Directory dialog.

You may want to view the results of Active Directory sync, [see here](#view-report).

Notes regarding deleted users:

* Users who are deleted or marked as deleted in the AD Server will be deleted from the Bots Platform as well and will be not available in the list of users during AD sync process
* The user record will be retained in the database for any cross-reference and audit purposes
* Any login attempts by such users will be blocked by the system
* Deletion would be against a specific Account to which the user belongs to i.e. if the user is part of multiple accounts, then the user will be able to access any other accounts in which the user is still an active state
* The following user can't be deleted from the account
    * User is Bot Owner for one or more bots
    * User is Account Owner

    Such users won't be deleted from the account during the AD Sync process. The AD Sync logs will contain the list of such users who couldn't be deleted along with the reason.


## Manual Sync

You may want to initiate manual sync with your Active Directory to update when there are many changes between scheduled syncs.
To complete this procedure, you must have already defined synchronization settings for your account.

How you access the Active Directory Sync configuration depends which type of connector you are using. Complete one of the following procedures to access the Kore.ai Active Directory configuration dialog.


**To manually start an Active Directory sync using the cloud-based connector**

* In the **Enrollment > Directory Sync** page, in the **Current Settings** section, click **Run Now** as shown in the following illustration.  

<img src="../images/synchronizing-users-from-active-directory-img6.png" alt="Run manual sync" title="Run manual sync" style="border: 1px solid gray;zoom:70%;"/>

The _Directory Synchronization is in-progress_ message is displayed at the top of the page.


## View Report

After you configure and run an Active Directory sync for your account, you must review the results of the sync. This topic describes how to access and view a report for the current Active Directory sync.

How you access the last run results for your Active Directory sync runs depends on which type of connector you are using. Complete one of the following procedures to access the last run results for Kore.ai Active Directory sync.


**To view the last run report for an Active Directory sync using the cloud-based connector**

* In the Bots Admin Console **Enrollment** module, on the **Directory Sync** page, click _here_ as shown in the following illustration.

### Viewing the Last Run Report

The **Report on Active Directory Sync** dialog is displayed as shown in the following illustration.


## View History

You can review all historical Active Directory sync operations along with the results of that sync. This topic describes how to access the report and how to retrieve details about the synchronization.

How you access the history for your Active Directory sync runs depends which type of connector you are using. Complete one of the following procedures to access the history results for Kore.ai Active Directory sync.


**To view historical reports for Active Directory sync using the cloud-based connector**

* In the Bots Admin Console **Enrollment** module, on the **Directory Sync** page, in the **Current Settings** section, click  **Sync History**  as shown in the following illustration.  


### Viewing a Report

In the **History of Active Directory Synchronization Runs** dialog, to view the results of an import, in the **Report** column for the import that you want to view, click **Sync Results**.