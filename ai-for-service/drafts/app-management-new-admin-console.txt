# Apps Management Module

In the **Apps Management** module of the Admin Console, you can deploy the apps developed by your company developers from the App Builder tool. When the developer develops an app, it can be published for approval and deployment by the  Admin from the Apps Management section. From this section, you can:

* Approve or reject apps sent for deployment approval,
* Deploy some or all of the tasks defined for an app,
* Assign the deployed apps to users, or groups of users in your company .

## Managing Apps

On the **Apps** page in the **App Management** module of the Admin Console, you can manage deployed Apps and App tasks that are approved by Admin on the **Deployment Requests** page. Only approved Apps are displayed on the **Apps** page.

<img src="../images/app-management-apps.png" alt="Apps" title="Apps" style="border: 1px solid gray;zoom:50%;"/>

In this page, you can review and modify App settings such as channels and email settings, and manage approved tasks for the Apps.


### Apps Columns

The following list describes the columns displayed for each consumer bot.

<table border="1">
  <tr>
   <td><strong>COLUMN</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>App Name
   </td>
   <td>Displays the name of the App, created by the user.
   </td>
  </tr>
  <tr>
   <td>Published By
   </td>
   <td>Displays the emailId of the developer that created or owns this App.
   </td>
  </tr>
  <tr>
   <td>App Type
   </td>
   <td>Displays the type of app. 
   </td>
  </tr>
  <tr>
   <td>Channels
   </td>
   <td>Displays the channels where app will be accessible for the Users.
   </td>
  </tr>
  <tr>
   <td>Plan Type
   </td>
   <td>The plan under which the App was published.
   </td>
  </tr>
</table>

### About the Action Bar

The Action bar provides commands to manage and navigate large lists efficiently.

You can use the Sort By option to organize apps by App Name in alphabetical order; by default, apps are sorted in descending order of creation date, and selecting None removes any applied sorting.

 The Search field helps you quickly locate specific users, groups, spaces, or apps. Enter at least three characters for find-as-you-type results or press Enter to search. While you can include unlimited search terms, only the first 20 characters of each term are considered when generating results. To view all entries, clear the search field, and then press the **Enter** key.


### App Settings

As an Admin, you need to manage your deployed apps to your customers. In App Settings, you can view the deployment model type, add or remove channels that your customers can use to access your App, and if needed, send an email to the developer that published the App for approval, for example, to request a change to the App.

1. On the **Apps** page, select the **Ellipses**  icon for the App, and then select **App settings**.
2. The **App settings** dialog is displayed as shown in the following illustration.  
<img src="../administration/images/app-management-app-setting.png" alt="App settings" title="App settings" style="border: 1px solid gray;zoom:50%;"/>

3. **Auto Approve** Settings- In the **Auto Approve** dialog, There are three settings to choose from:
    1. Do not approve any publish requests for this App- all future publish from this App need approvals by the Admin.
    2. Auto approve all publish requests for this App- any future publish from this App will be approved automatically.
    3. Auto approve if publish requests include only following components for all other requests Admin needs to approve it:
        * **New Channels** – Automatically approve the App for channels are added.
        * **New Tasks** – Automatically approve the App when new tasks are published.
        * **Channel Upgrades** – Automatically approve the App when existing approved channels are upgraded.
        * **Task Upgrades** – Automatically approve the App when existing tasks are upgraded.

4. In the **Deployment model** field, you can view the read-only deployment type.
5. In the **Approved channels** field, you can view and modify the channels available or deployed. Select the **Expand** icon to display the **Approved channels** dialog. Select or clear one or more channels defined for this app to be available to the users, and then select **Done**. At least one channel must be enabled.
6. Select Email the App developer ( **_&lt; Developer Name >_** ) to open your default mail application to email a message to the App developer.
7. Select **Apply** to save the changes.


### Change Bot Owner

You can change the ownership of the Bot. For that you need to

1. assign a new role to the current owner and
2. select the new Owner from the list of developers.

### Manage Bot Tasks

After you approve and deploy your Bots published in your account by a developer, you may decide to suspend a task or redeploy a suspended task, or activate an inactive task published by the developer.


#### About Suspended Tasks

When you suspend a task in the Bots Admin console, end-user cannot access that task of the bot. The bot will not send alerts nor respond to action requests, and an alert is sent to all users configured for the task that the task is temporarily suspended. When the task is set back to **Active**, then an alert is sent to all users as well. While a task is suspended, a developer can still access the task in Bot Builder and create and publish an upgrade, but the Bot task remains suspended until the Bots Admin explicitly changes the status back to **Active**. Complete the steps in the following procedure to deploy or suspend tasks for an approved Bot.

1. On the **Consumer Bots** page in the **Bots Management** module, select the **Ellipses**  icon for the Bot that you want to modify deployed tasks for, and then select **Manage Bot tasks**. The **Manage Bot tasks** dialog is displayed as shown in the following illustration.  
<img src="../images/bot-management-img17.png" alt="Manage bot tasks" title="Manage bot tasks" style="border: 1px solid gray;zoom:50%;"/>

2. In the **Bot tasks** field, select the **Expand** <img src="../images/bot-management-img9.png"> icon to display the available and deployed tasks. The **Bot tasks** dialog is displayed as shown in the following example.  
<img src="../images/bot-management-img19.png" alt="Bot tasks dialog" title="Bot tasks dialog" style="border: 1px solid gray;zoom:50%;"/>

3. Select or clear the checkbox for the task to suspend a task or deploy a task, and then select **Confirm**.
4. In the **Manage bots tasks** dialog, select **Confirm**.

The _Bot status changed successfully_ message is displayed at the top of the page.


### Bot Plan

You can view and if needed change the subscribed plan. [See here for details](billing.md){:target="_blank"}.

### Restore

A published bot with active dialog tasks can be restored within 30 days following the deletion date.
On the **Consumer Bots** page in the **Bots Management** module, select the **Ellipses** icon for the Bot that you want to restore, and then select **Restore**.  

<img src="../images/restore.png" alt="restore" title="restore" style="border:1px solid gray; zoom:70%;">


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

1. On the **Deployment Requests** page in the **Bots Management** module, hover over the Bot you want to approve and select the <img src="../images/bot-management-img3.png"> icon.  
<img src="../images/bot-management-img4.png" alt="MAnually approving bot" title="MAnually approving bot" style="border: 1px solid gray;zoom:50%;"/>

2. Optionally, select **Bot** to review tasks pending for approval for this bot, if any.
3. On selecting the Bot the **Bot Publish** page is displayed with the following additional information
    1. **Dialog Task** details – names, language supported and version
    2. **Natural Language** configuration
    3. **Channels** enabled for publishing
    4. **API Extensions** configured if any
    5. **Settings** – the bot settings.
    6. **Publish Comments** entered by the developer  
    <img src="../images/bot-management-img5.png" alt="Publish bot after approving" title="Publish bot after approving" style="border: 1px solid gray;zoom:50%;"/>

4. Review and select the **NEXT** button. For Bots awaiting approval for **Update**, you will see the **Publish** button instead of Next.
5. On successful payment, the **Bot Approval: Success** dialog is displayed.  
<img src="../images/bot-management-img6.png" alt="Deploying Bot - Success" title="Deploying Bot - Success" style="border: 1px solid gray;zoom:50%;"/>

6. Select **Continue**. The **Enterprise Bots** or the **Consumer Bots** page is displayed, depending on the **Deployment model** type specified for the approved Bot.

After a task is approved and deployed, the Bot is available to customers for Bots with deployment model set to **Consumer use**. However, the task is still not available to enterprise users until the Bots Admin assigns the task to users or groups on the **Enterprise Bots** page in the **Bot Management** module in the Bots Admin Console. For more information, see [Managing Deployed Enterprise Bots](#managing-enterprise-bots) or [Managing Deployed Consumer Bots](#managing-consumer-bots).

#### To reject a bot

You may decide not to approve a Bot for use by employees or customers of the company. To return the Bot to the developer for an update, you can reject the Bot mentioning a reason. When you reject a bot, it is removed from the **Deployments Request** page, and in the Bot Builder tool, the status of the task is changed from Published to Configured. The developer can then make changes and re-publish the Bot for your approval.

1. On the **Deployment Requests** page in the **Bots Management** module, hover over the Bot you want to reject to view the reject and publish icons.
2. Optionally, select **Bot Details** to view the Bot details and select the **Reject** button.
3. The **Reject bot** dialog is displayed.
4. Select or clear the tasks that you want to reject, and then in the **Provide a reason** text field, enter the reason that you are rejecting the tasks.
5. Select **Reject**.

The Bot rejected successfully message is displayed at the top of the page, and the Bot is removed from the **Deployment Requests** page.

### Automate Deployment Requests

Steps to automate deployment requests:

1. In the **Deployment Requests** section, select **Automatically approve all new deployment requests**. When deployment requests are automatically approved, the **Enterprise Bot Assignments** section is available.  
<img src="../images/bot-management-img23.png" alt="Enterprise bot assignments" title="Enterprise bot assignments" style="border: 1px solid gray;zoom:50%;"/>

2. Select **Save**.


### Automate Bot Assignments

!!! Note

    Bot assignments cannot be configured unless deployment requests are set to automate.

Steps to automate bot assignments:

1. In the **Enterprise Bots Assignments** section, select **Automatically assign all approved bots, their tasks, and channels**.  
<img src="../images/bot-management-img24.png" alt="Automatically assign all approved bots, their tasks, and channels" title="Automatically assign all approved bots, their tasks, and channels" style="border: 1px solid gray;zoom:50%;"/>

2. Select **Save**.

When deployment requests and Bot assignments are automatic, managed users are assigned new Bots and Bot Task immediately after the enterprise developer publishes the Bot or Bot task.


### Approve Bot Manually

Steps to approve bots manually:

1. In the **Enterprise Bots Assignments** section, select **Hold all deployment requests for manual admin approval. Bot cannot be used outside the developer environment until approved**.
2. Select **Save**.  
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