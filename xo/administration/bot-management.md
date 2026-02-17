# Apps/Bots Management Module

In the **Bots Management** module of the Admin Console, you can deploy the bots developed by your company developers from the Kore.ai Bot Builder tool. When the developer develops a bot, it can be published for approval and deployment by the Bots Admin from the Bots Management section. From this section, you can

* Approve or reject custom bots sent for deployment approval,
* Deploy some or all of the tasks defined for a bot,
* Assign the deployed bot to users, or groups of users in your company for employees when the bot is defined for **Enterprise Use**, or for customers of your company when the bot is defined for **Consumer Use**.

<img src="../images/bot-management-img1.png" alt="Deployment Requests" title="Deployment Requests" style="border: 1px solid gray;zoom:50%;"/>

## Deploying Bots

As the Bots Admin, you can manage the bots permission and consumption. After a developer publishes a custom bot from the Kore.ai Bot Builder tool to the Enterprise page at the Kore.ai Bot Store, the bot is displayed on the **Deployment Requests** page. Bots are'nt available to any users in your company until you approve the bot, and then assign that bot to one or more users, or customers for your company, depending on the bot deployment type defined as either for **Enterprise use** or **Consumer use**.

<img src="../images/bot-management-img1.png" alt="Deploying Bots" title="Deploying Bots" style="border: 1px solid gray;zoom:50%;"/>

You can select the following options to approve the bots in the Bot Management module:

* If Bots are set to be auto-approved by the Bots Admin in the **Bots Management** module **Preferences** page, when published by the developer, these Bots are immediately approved and deployed and are not displayed on the **Deployment Requests** page.
* If the bots are set to **Hold all deployment requests for manual admin approval. Bot cannot be used outside the developer environment until approved**. In this case, the Bots Admin has to approve the bots manually and assign users for bots. For more information, see [Bot Management Preferences](#preferences).


### Deployment Page Controls

For each Bot displayed on the **Deployment Requests** page, the following information and controls are displayed:

* **Bot Icon** – The icon displayed to the end-user in the client to identify the bot in the [Bot Store](https://bots.kore.ai/){:target="_blank"}.
* **Bot Name** – The name of the bot.
* **Bot Type** – The type of the bot – standard, universal etc..
* **Tasks** – number of tasks within the Bot
* **Version** – The type of bot for deployment. One of:
    * **New** – A new bot that has never been deployed.
    * **Upgrade** – A previously deployed bot that was upgraded and ready to be deployed.

* **Purpose** – The intended audience for the bot. One of:
    * **Consumer Use** – For enterprise customers and consumers.
    * **Enterprise Use** – For specified managed users of your enterprise.

* **Requested by** – The name of the developer submitting the bot for approval.
* **Requested on** – The date the developer submitted the bot for approval.
* **Reject/Publish** icons which will be visible on the hover over the row.


#### To approve a bot

1. On the **Deployment Requests** page in the **Bots Management** module, hover over the Bot you want to approve and click the <img src="../images/bot-management-img3.png"> icon.  
<img src="../images/bot-management-img4.png" alt="MAnually approving bot" title="MAnually approving bot" style="border: 1px solid gray;zoom:50%;"/>

2. Optionally, click **Bot** to review tasks pending for approval for this bot, if any.
3. On selecting the Bot the **Bot Publish** page is displayed with the following additional information
    1. **Dialog Task** details – names, language supported and version
    2. **Natural Language** configuration
    3. **Channels** enabled for publishing
    4. **API Extensions** configured if any
    5. **Settings** – the bot settings.
    6. **Publish Comments** entered by the developer  
    <img src="../images/bot-management-img5.png" alt="Publish bot after approving" title="Publish bot after approving" style="border: 1px solid gray;zoom:50%;"/>

4. Review and click the **NEXT** button. For Bots awaiting approval for **Update**, you will see the **Publish** button instead of Next.
5. On successful payment, the **Bot Approval: Success** dialog is displayed.  
<img src="../images/bot-management-img6.png" alt="Deploying Bot - Success" title="Deploying Bot - Success" style="border: 1px solid gray;zoom:50%;"/>

6. Click **Continue**. The **Enterprise Bots** or the **Consumer Bots** page is displayed, depending on the **Deployment model** type specified for the approved Bot.

After a task is approved and deployed, the Bot is available to customers for Bots with deployment model set to **Consumer use**. However, the task is still not available to enterprise users until the Bots Admin assigns the task to users or groups on the **Enterprise Bots** page in the **Bot Management** module in the Bots Admin Console. For more information, see [Managing Deployed Enterprise Bots](#managing-enterprise-bots) or [Managing Deployed Consumer Bots](#managing-consumer-bots).

#### To reject a bot

You may decide not to approve a Bot for use by employees or customers of the company. To return the Bot to the developer for an update, you can reject the Bot mentioning a reason. When you reject a bot, it is removed from the **Deployments Request** page, and in the Bot Builder tool, the status of the task is changed from Published to Configured. The developer can then make changes and re-publish the Bot for your approval.

1. On the **Deployment Requests** page in the **Bots Management** module, hover over the Bot you want to reject to view the reject and publish icons.
2. Optionally, click **Bot Details** to view the Bot details and click the **Reject** button.
3. The **Reject bot** dialog is displayed.
4. Select or clear the tasks that you want to reject, and then in the **Provide a reason** text field, enter the reason that you are rejecting the tasks.
5. Click **Reject**.

The Bot rejected successfully message is displayed at the top of the page, and the Bot is removed from the **Deployment Requests** page.

## Managing Enterprise Bots

On the **Enterprise Bots** page in the **Bots Management** module of the Bots Admin Console, you can manage deployed Bots and Bot tasks that are approved by the Bots Admin on the **Deployment Requests** page. Only approved Bots with the deployment model set to **Enterprise** are displayed on the **Enterprise Bots** page. The following illustration is an example of the **Enterprise Bots** page in the **Bots Management** module.

<img src="../images/bot-management-img7.png" alt="Enterprise Bots" title="Enterprise Bots" style="border: 1px solid gray;zoom:50%;"/>


### Enterprise Bots Columns

The following list describes the columns displayed for each enterprise bot.

<table border="1">
  <tr>
   <td><strong>COLUMN</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Bot Name
   </td>
   <td>Displays the name of the bot, created by the user.
   </td>
  </tr>
  <tr>
   <td>Published By
   </td>
   <td>Displays the name of the developer that published this Bot.
   </td>
  </tr>
  <tr>
   <td>Bot Type
   </td>
   <td>Displays the type of bot. One of Standard, Universal etc..
   </td>
  </tr>
  <tr>
   <td>Channels
   </td>
   <td>Displays the channels from which the Bot will be accessible.
   </td>
  </tr>
</table>


### About the Action Bar

This section describes the commands available on the **Action** bar.

#### Using Sort By

A company can have a large number of bots to automate the numerous tasks. You can easily sort the bot list by **Bot Name**. By default, the last created bot is viewed at the top. To sort the bots, in the **Sort by** drop-down list, select **Bot Name** to view the list of Bots in alphabetical order by name. To remove the sorting, in the **Sort by** drop-down list, select **None**.


#### Using the Search Field

The list of entries in an admin console table can be very large depending on the size of your company, for example, a list of users or spaces. To find one or more specific users, groups, or spaces, in the **Search** field, enter at least three characters to begin find-as-you-type, or press return to start the search. For example, enter _ra_ and any entries containing the letters _ra _are displayed as shown in the following illustration.

!!! Note

    The number of search terms in a search query is unlimited, however, no more than the first 20 characters of each search term is used to return search results.

To view all entries, clear the search field, and then press the **Enter** key.

### Assigning Users

To enable users to access deployed Bots, the Bots Admin must assign users to the Bot. Complete the steps in the following procedure to assign users to a deployed Bot with the deployment model set to **Enterprise** by the developer that created and defined the bot.

1. On the **Enterprise Bots** page in the **Bots Management** module, click the **Ellipses** icon for the Bot that you want to assign users to, and then click **Bot & Task Assignments**. The **Bot & task assignments** dialog is displayed as shown in the following illustration.  
<img src="../images/bot-management-img8.png" alt="Bot and task assignments" title="Bot and task assignments" style="border: 1px solid gray;zoom:50%;"/>

2. To disable the Bot for all users, click **No assignments**, otherwise, click **Assign Bot’s Tasks**. Approved tasks for the Bot are displayed. By default, tasks are'nt assigned to any users.
3. To assign tasks, click the **Expand** <img src="../images/bot-management-img9.png"> icon for the task that you want to assign users to. The **< _Task Name_ >** dialog is displayed. Select one of:
    1. **All users in your enterprise** – All current users, and future users added will have access to this task for this Bot.
    2. **Assign user groups** – Click to open the **Assign to groups** dialog. Select the groups you want to add in the **Group Name** column, and then click **Done**. For more information, see.
    3. **Assign individual users** – Click to open the **Assign to users** dialog. Select the users you want to add in the **Name** column, and then click **Done**.

4. Click **Done**.
5. In the **< _Task Name_ >** dialog, click **Done**.
6. In the **Bot assignment successful** confirmation dialog, click **Apply**.


### Bot Settings

As the Bots Admin, you need to manage your deployed bots to your customers. From **Bot Settings**, you can view the deployment model type, add or remove channels that your customers can use to access your Bot, send email notifications for bot deployments, and if needed, send an email to the developer that published the Bot for approval, for example, to request a change to the Bot. On the **Enterprise Bots** page in the **Bots Management** module, click the **Ellipses**  icon for the Bot that you want to modify **Bot Settings** for, and then click **Bot settings**. The **Bot settings** dialog is displayed as shown in the following illustration.

<img src="../images/bot-management-img10.png" alt="Bot Settings" title="Bot Settings" style="border: 1px solid gray;zoom:50%;"/>


**To manage Bot Settings**

1. **Auto Approve** Settings – The **Auto Approve** dialog is displayed. There are three settings to choose from:
    1. Do not approve any publish requests for this Bot – all future publish from this Bot need approvals by the Admin
    2. Auto approve all publish requests for this bot – any future publish from this Bot will be approved automatically
    3. Auto approve if publish requests include only following components for all other requests Admin needs to approve it:
        * **New Channels** – Automatically approve the Bot for channels are added.
        * **New Tasks** – Automatically approve the Bot when new tasks are published.
        * **Channel Upgrades** – Automatically approve the Bot when existing approved channels are upgraded.
        * **Task Upgrades** – Automatically approve the Bot when existing tasks are upgraded.

2. **Deployment model** – read-only deployment type, **Enterprise use** or for more information, click **Enterprise use**.
3. **Approved channels** – The **Approved Channels** dialog is displayed. Select or clear one or more channels defined for this bot to be available to the users, and then click **Done**. At least one channel must be enabled.
4. Select **Notify assigned users via email** if you want an email sent to each Bot user with a notification of any changes to the Bot.
5. Click Email the bot developer ( **_&lt; Developer Name >_** ) to open your default mail application to email a message to the Bot developer.
6. Click **Apply** to save the changes.


### Change Bot Owner

You can change the ownership of the Bot. For that you need to



1. assign a new role to the current owner and
2. select the new Owner from the list of developers.


### Managing Bot Tasks

After you approve and deploy your Bots published in your account by a developer, you may decide to suspend a task.


#### About Suspended Tasks

When you suspend a task in the Bots Admin console, end-user cannot access that task from he Bot. The bot will not send alerts nor respond to action requests, and an alert is sent to all users configured for the task that the task is temporarily suspended. When the task is set back to **Active**, then an alert is sent to all users as well. While a task is suspended, a developer can still access the task in Bot Builder and create and publish an upgrade, but the Bot task remains suspended until the Bots Admin explicitly changes the status back to **Active**. Complete the steps in the following procedure to deploy or suspend tasks for an approved Bot.

1. On the **Enterprise Bots** page in the **Bots Management** module, click the **Ellipses** icon for the Bot that you want to modify deployed tasks for, and then click **Manage Bot tasks**. The **Manage Bot tasks** dialog is displayed as shown in the following illustration.  
<img src="../images/bot-management-img11.png" alt="Manage bot tasks" title="Manage bot tasks" style="border: 1px solid gray;zoom:50%;"/>

2. In the **Bot tasks** field, click the **Expand** <img src="../images/bot-management-img9.png"> icon to display the available and deployed tasks. The **Bot tasks** dialog is displayed as shown in the following example.  
<img src="../images/bot-management-img13.png" alt="Bot tasks" title="Bot tasks" style="border: 1px solid gray;zoom:50%;"/>

3. Select or clear the checkbox for the task to deploy or suspend the task, and then click **Confirm**.
4. In the **Manage bots tasks** dialog, click **Confirm**.

The _Bot status changed successfully_ message is displayed at the top of the page.


## Managing Consumer Bots

On the **Consumer Bots** page in the **Bots Management** module of the Bots Admin Console, you can manage deployed Bots and Bot tasks that are approved by the Bots Admin on the **Deployment Requests** page. Only approved Bots with the deployment model set to **Consumer** are displayed on the **Consumer Bots** page. To manage approved Bots with the deployment model set **Enterprise**, see [Managing Enterprise Bots](#managing-enterprise-bots). The following illustration is an example of the **Consumer Bots** page in the **Bots Management module**.

<img src="../images/bot-management-img14.png" alt="Consumer Bots" title="Consumer Bots" style="border: 1px solid gray;zoom:50%;"/>

On the **Consumer Bots** page, you can review and modify Bot settings such as channels and email settings, and manage approved tasks for the Bot.


### Consumer Bots Columns

The following list describes the columns displayed for each consumer bot.

<table border="1">
  <tr>
   <td><strong>COLUMN</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Bot Name
   </td>
   <td>Displays the name of the bot, created by the user.
   </td>
  </tr>
  <tr>
   <td>Published By
   </td>
   <td>Displays the name of the developer that created or owns this Bot.
   </td>
  </tr>
  <tr>
   <td>Bot Type
   </td>
   <td>Displays the type of bot. One of Standard, Universal, etc.
   </td>
  </tr>
  <tr>
   <td>Channels
   </td>
   <td>Displays the channels where bot will be accessible for the Users.
   </td>
  </tr>
  <tr>
   <td>Plan Type
   </td>
   <td>The plan under which the Bot was published.
   </td>
  </tr>
</table>



### About the Action Bar

This section describes the commands available on the **Action** bar.


#### Using Sort By

A company can have a large number of consumer bots to automate the numerous tasks. You can easily sort the bot list by **Bot Name**. By default, the bots are sorted by descending order of creation date. To sort the bots, in the **Sort by** drop-down list, select an option for **Bot Name** and the list is viewed in alphabetical order. To remove the sorting, in the **Sort by** drop-down list, select **None**.


#### Using the Search Field

The list of entries in an admin console table can be very large depending on the size of your company, for example, a list of users or spaces. To find one or more specific users, groups, or spaces, in the **Search** field, enter at least three characters to begin find-as-you-type, or press return to start the search.

!!! Note

    The number of search terms in a search query is unlimited, however, no more than the first 20 characters of each search term is used to return search results.

To view all entries, clear the search field, and then press the **Enter** key.


### Bot Settings

As the Bots Admin, you need to manage your deployed bots to your customers. In Bot Settings, you can view the deployment model type, add or remove channels that your customers can use to access your Bot, and if needed, send an email to the developer that published the Bot for approval, for example, to request a change to the Bot.

1. On the **Consumer Bots** page in the **Bots Management** module, click the **Ellipses**  icon for the Bot that you want to modify **Bot Settings** for, and then click **Bot settings**.
2. The **Bot settings** dialog is displayed as shown in the following illustration.  
<img src="../images/bot-management-img15.png" alt="Bot settings" title="Bot settings" style="border: 1px solid gray;zoom:50%;"/>

3. **Auto Approve** Settings – The **Auto Approve** dialog is displayed. There are three settings to choose from:
    1. Do not approve any publish requests for this Bot – all future publish from this Bot need approvals by the Admin
    2. Auto approve all publish requests for this bot – any future publish from this Bot will be approved automatically
    3. Auto approve if publish requests include only following components for all other requests Admin needs to approve it:
        * **New Channels** – Automatically approve the Bot for channels are added.
        * **New Tasks** – Automatically approve the Bot when new tasks are published.
        * **Channel Upgrades** – Automatically approve the Bot when existing approved channels are upgraded.
        * **Task Upgrades** – Automatically approve the Bot when existing tasks are upgraded.

4. In the **Deployment model** field, you can view the read-only deployment type, **Consumer use** or for more information, click **Consumer use**.
5. In the **Approved channels** field, you can view and modify the channels available or deployed. Click the **Expand** <img src="../images/bot-management-img9.png"> icon to display the **Approved channels** dialog. Select or clear one or more channels defined for this bot to be available to the users, and then click **Done**. At least one channel must be enabled.
6. Click Email the bot developer ( **_&lt; Developer Name >_** ) to open your default mail application to email a message to the Bot developer.
7. Click **Apply** to save the changes.


### Change Bot Owner

You can change the ownership of the Bot. For that you need to

1. assign a new role to the current owner and
2. select the new Owner from the list of developers.


### Manage Bot Tasks

After you approve and deploy your Bots published in your account by a developer, you may decide to suspend a task or redeploy a suspended task, or activate an inactive task published by the developer.


#### About Suspended Tasks

When you suspend a task in the Bots Admin console, end-user cannot access that task of the bot. The bot will not send alerts nor respond to action requests, and an alert is sent to all users configured for the task that the task is temporarily suspended. When the task is set back to **Active**, then an alert is sent to all users as well. While a task is suspended, a developer can still access the task in Bot Builder and create and publish an upgrade, but the Bot task remains suspended until the Bots Admin explicitly changes the status back to **Active**. Complete the steps in the following procedure to deploy or suspend tasks for an approved Bot.

1. On the **Consumer Bots** page in the **Bots Management** module, click the **Ellipses**  icon for the Bot that you want to modify deployed tasks for, and then click **Manage Bot tasks**. The **Manage Bot tasks** dialog is displayed as shown in the following illustration.  
<img src="../images/bot-management-img17.png" alt="Manage bot tasks" title="Manage bot tasks" style="border: 1px solid gray;zoom:50%;"/>

2. In the **Bot tasks** field, click the **Expand** <img src="../images/bot-management-img9.png"> icon to display the available and deployed tasks. The **Bot tasks** dialog is displayed as shown in the following example.  
<img src="../images/bot-management-img19.png" alt="Bot tasks dialog" title="Bot tasks dialog" style="border: 1px solid gray;zoom:50%;"/>

3. Select or clear the checkbox for the task to suspend a task or deploy a task, and then click **Confirm**.
4. In the **Manage bots tasks** dialog, click **Confirm**.

The _Bot status changed successfully_ message is displayed at the top of the page.


### Bot Plan

You can view and if needed change the subscribed plan. [See here for details](billing.md){:target="_blank"}.

### Restore

A published bot with active dialog tasks can be restored within 30 days following the deletion date.
On the **Consumer Bots** page in the **Bots Management** module, click the **Ellipses** icon for the Bot that you want to restore, and then click **Restore**.  

<img src="../images/restore.png" alt="restore" title="restore" style="border:1px solid gray; zoom:70%;">

Restoration will reinstate the app with all its pre-deletion configurations.


## Managing Smart Bots

On the **Smart Bots** page in the **Bots Management** module of the Bots Admin Console, you can manage deployed Bots and Bot tasks that are approved by the Bots Admin on the **Deployment Requests** page. Only approved Smart Bots are displayed on the **Smart Bots** page. The following illustration is an example of the **Smart Bots** page in the **Bots Management module**.

<img src="../images/bot-management-img20.png" alt="Smart Bots" title="Smart Bots" style="border: 1px solid gray;zoom:50%;"/>

On the **Smart Bots** page, you can review and modify Bot settings such as channels and email settings, and manage approved tasks for the Bot.


### Smart Bots Columns

The following list describes the columns displayed for each Smart bot.

<table border="1">
  <tr>
   <td><strong>COLUMN</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Bot Name
   </td>
   <td>Displays the name of the bot, created by the user.
   </td>
  </tr>
  <tr>
   <td>Published by
   </td>
   <td>Displays the name of the developer who created this Bot.
   </td>
  </tr>
  <tr>
   <td>Tasks
   </td>
   <td>Number of tasks in the Bot.
   </td>
  </tr>
  <tr>
   <td>Channels
   </td>
   <td>Displays the channels where bot will be accessible.
   </td>
  </tr>
</table>



#### About the Action Bar

This section describes the commands available on the **Action** bar.


**Using Sort By**

A company can have a large number of Smart bots to automate the numerous tasks. You can easily sort the bot list by **Bot Name**. By default, the Bots are sorted by the descending order of creation date. To sort the bots, in the **Sort by** drop-down list, select an option for **Bot Name** and the list is viewed in alphabetical order. To remove the sorting, in the **Sort by** drop-down list, select **None**.


**Using the Search Field**

The list of entries in an admin console table can be very large depending on the size of your company, for example, a list of users or spaces. To find one or more specific users, groups, or spaces, in the **Search** field, enter at least three characters to begin find-as-you-type, or press return to start the search.

!!! Note

    The number of search terms in a search query is unlimited, however, no more than the first 20 characters of each search term is used to return search results.

To view all entries, clear the search field, and then press the **Enter** key.


### Bot Settings

As the Bots Admin, you need to manage your deployed bots to your customers. In Bot Settings, you can add or remove channels that your customers can use to access your Bot, and if needed, send an email to the developer, for example, to request a change to the Bot.



1. On the **Smart Bots** page in the **Bots Management** module, click the **Ellipses**  icon for the Bot that you want to modify **Bot Settings** for, and then click **Bot settings**. The **Bot settings** dialog is displayed.
2. In the **Auto Approve** field, you can set the auto approve settings. There are three settings to choose from:
    1. Do not approve any publish requests for this Bot – all future publish from this Bot need approvals by the Admin
    2. Auto approve all publish requests for this bot – any future publish from this Bot will be approved automatically
    3. Auto approve if publish requests include only following components for all other requests Admin needs to approve it:
        * **New Channels** – Automatically approve the Bot for channels are added.
        * **New Tasks** – Automatically approve the Bot when new tasks are published.
        * **Channel Upgrades** – Automatically approve the Bot when existing approved channels are upgraded.
        * **Task Upgrades** – Automatically approve the Bot when existing tasks are upgraded.

3. In the **Approved channels** field, you can view and modify the channels available or deployed. Click the **Expand** <img src="../images/bot-management-img9.png"> icon to display the **Approved channels** dialog. Select or clear one or more channels defined for this bot to be available to the users, and then click **Done**. At least one channel must be enabled to approve the bot.
4. Click Email the bot developer ( **_< Developer Name >_** ) to open your default mail application to email a message to the Bot developer.
5. Click **Apply** to save the changes.


### Change Bot Owner

You can change the ownership of the Bot. For that you need to

1. assign a new role to the current owner and
2. select the new Owner from the list of developers.


### Manage Bot Tasks

After you approve and deploy your Bots published in your account by a developer, you may decide to suspend a task or redeploy a suspended task or activate an inactive task published by the developer.


#### About Suspended Tasks

When you suspend a task in the Bots Admin console, end-user cannot access that task from the bot. The bot will not send alerts nor respond to action requests, and an alert is sent to all users configured for the task that the task is temporarily suspended. When the task is set back to **Active**, then an alert is sent to all users as well. While a task is suspended, a developer can still access the task in Bot Builder and create and publish an upgrade, but the Bot task remains suspended until the Bots Admin explicitly changes the status back to **Active**. Complete the steps in the following procedure to deploy or suspend tasks for an approved Bot.



1. On the **Smart Bots** page in the **Bots Management** module, click the **Ellipses**  icon for the Bot that you want to modify deployed tasks for, and then click **Manage Bot tasks**.
2. The **Manage Bot tasks** dialog is displayed.
3. In the **Bot tasks** field, click the **Expand** <img src="../images/bot-management-img9.png"> icon to display the available and deployed tasks. The **Bot tasks** dialog is displayed as shown in the following example.
4. Select or clear the checkbox for the task to suspend a task or deploy a task, and then click **Confirm**.
5. In the **Bots tasks** dialog, click **Confirm**.

The _Bot status changed successfully_ message is displayed at the top of the page.


### Bot Plan

You can view and if needed change the subscribed plan. [See here for details](billing.md){:target="_blank"}.


## Preferences

On the **Preferences** page in the **Bots Management** module of the Bots Admin Console, you can manage the admin approval process to deploy Bots and assign Bot tasks to managed users in your enterprise. After an enterprise developer publishes a Bot or Bot task, you must approve the Bot, and then assign that Bot to a managed user. On this page, you can automate the approval and Bot task assignment process for all Bots at the enterprise level. You can also define auto-approve settings at the Bot level. The following illustration is an example of the **Preferences** page in the **Bots Management module**.

By default, the Bots admin must approve and assign Bots published by enterprise developers.


### Automate Deployment Requests

Steps to automate deployment requests:

1. In the **Deployment Requests** section, click **Automatically approve all new deployment requests**. When deployment requests are automatically approved, the **Enterprise Bot Assignments** section is available.  
<img src="../images/bot-management-img23.png" alt="Enterprise bot assignments" title="Enterprise bot assignments" style="border: 1px solid gray;zoom:50%;"/>

2. Click **Save**.


### Automate Bot Assignments

!!! Note

    Bot assignments cannot be configured unless deployment requests are set to automate.

Steps to automate bot assignments:

1. In the **Enterprise Bots Assignments** section, click **Automatically assign all approved bots, their tasks, and channels**.  
<img src="../images/bot-management-img24.png" alt="Automatically assign all approved bots, their tasks, and channels" title="Automatically assign all approved bots, their tasks, and channels" style="border: 1px solid gray;zoom:50%;"/>

2. Click **Save**.

When deployment requests and Bot assignments are automatic, managed users are assigned new Bots and Bot Task immediately after the enterprise developer publishes the Bot or Bot task.


### Approve Bot Manually

Steps to approve bots manually:

1. In the **Enterprise Bots Assignments** section, click **Hold all deployment requests for manual admin approval. Bot cannot be used outside the developer environment until approved**.
2. Click **Save**.  
<img src="../images/bot-management-img25.png" alt="Hold all deployment requests for manual admin approval" title="Hold all deployment requests for manual admin approval" style="border: 1px solid gray;zoom:50%;"/>

When deployment requests and Bot assignments are manual, the admin has to approve the bot for users whenever the enterprise developer publishes the Bot or Bot task.

## Deleted Bots

The permanently deleted bots are displayed on this page.  
<img src="../images/permanently_deleted.png" alt="permanently_deleted" title="permanently_deleted" style="border:1px solid gray; zoom:70%;">


The following list describes the columns displayed for each deleted bot.


<table>
  <tr>
   <td><strong>COLUMN</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Bot Name
   </td>
   <td>Displays the name of the bot, created by the user.
   </td>
  </tr>
  <tr>
   <td>Deletion requested by
   </td>
   <td>Displays the name of the user who deleted the Bot.
   </td>
  </tr>
  <tr>
   <td>Deletion Request
   </td>
   <td>Displays the date when the user deleted the bot.
   </td>
  </tr>
  <tr>
   <td>App Creation Date
   </td>
   <td>Displays the date when the user created the app.
   </td>
  </tr>
  <tr>
   <td>Deletion Date
   </td>
   <td>Displays the date of actual deletion.
   </td>
  </tr>
</table>