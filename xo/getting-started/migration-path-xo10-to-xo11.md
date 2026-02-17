# Automation AI Migration from XO v10 to v11

Users see a banner on the current "bots.kore.ai" platform prompting them to try the new XO v11 platform at "platform.kore.ai", which is the new home for existing bots and creating XO v11 apps with enhanced capabilities. Existing bots open in the old UI on platform.kore.ai and have the same functionality, such as creating dialogs, configurations, publishing, etc. Also, a banner appears inside the bot, allowing users to upgrade it to an XO v11 app.

The upgrade journey involves user consent, downloading a bot back up, a multi-step process to add new capabilities, and a success/failure output with a retry option if needed. Upgrades are currently not allowed for paid bots on standard accounts. For the Standard account Workspaces that are in Trial, the remaining trial period is transferred to the new app with updated trial conditions.

In XO v10, we've two variants of Bots: Standard Bot and Universal Bot. The migration process for both involves different steps.

## Prerequisites

* Ensure you have access to both the XO v10 and XO v11 platforms.
* Confirm that you own the bot you plan to upgrade to XO v11.
* Verify the bot exists in XO v10 and is fully functional.
* Ensure you have permission to duplicate and upgrade bots on XO v10.
* Ensure that "Automate Deployment Requests" is enabled in the “Deployment Request” section of the XO10 Admin Console. Refer to [Automate Deployment Requests](https://developer.kore.ai/docs/bots/bot-admin/bots-management/bot-management/#Preferences){:target="_blank"}.
* Familiarize yourself with the changes introduced in XO v11, including updated event handling and deprecated features.

## Upgrade Journey Steps for Standard Bots

1. Sign in to the [XO1O Platform](https://bots.kore.ai) and duplicate the Bot you intend to upgrade to the XO11 App.
    * Click the Bot from the home page, and go to **Deploy > Bot Management > Export & Import Bot**. 
    * Export the latest version of the Bot.
    * Navigate back to the homepage, click **New Bot > Import Bot** and then upload the corresponding files from the exported copy. Name the duplicate Bot appropriately.
2. Sign in to the [XO11 Platform](https://platform.kore.ai).
3. Check if the XO10 bots are available on the platform.
4. Open the duplicate Bot and click **upgrade now** on the banner.  
<img src="../images/upgrade-banner.png" alt="upgrade-banner" title="upgrade-banner"style="border: 1px solid gray; zoom:70%;">

5. Follow the guided upgrade journey to upgrade the duplicate Bot to the XO11 App.  
<img src="../images/upgrading-guide.png" alt="upgrading-guide" title="upgrading-guide"style="border: 1px solid gray; zoom:70%;"> 

6. Test the new upgraded App, verify functionality, and assess the migration's impact.
7. Once the duplicate bot works as expected, upgrade the original bot to XO v11.

**Best Practices**

* Always maintain a backup of your original bot.
* Conduct thorough **testing** in a non-production environment before deployment.
* Document any customizations or special configurations.
* Allocate sufficient **testing time** before proceeding with the final migration.

## Upgrade Journey Steps for Universal Bots

XO10 Universal Bots act as orchestrators that route user inputs to linked Standard Bots for intent handling. In XO11, this orchestration is supported within a Standard App via **DialogGPT**, eliminating the need for a separate Universal Bot construct.

The migration process for a **Universal Bot** follows the same steps as a standard bot, with the following additional tasks:

**Configure DialogGPT**

 An embedding model, BGE M3, is selected by default.  
 <img src="../images/univeral-bot-migration.png" alt="universal-bot-migration" title="universal-bot-migration"style="border: 1px solid gray; zoom:50%;">

When the user initiates migration, the key components being migrated are:

* Linked Apps
* Events
* Default Dialog
* Standard Responses
* Variables

!!!Note
    
    Training Utterances in the Universal Bot is no longer relevant.

**Best Practices**

* **Refine Dialog and FAQ Descriptions**:
    * Enhance dialog descriptions and add FAQ descriptions to effectively capture the dialog task's essence.
    * Use either manual descriptions or **GenAI** for automated description generation.

    Refining descriptions is crucial, as the Conversation Orchestration model relies on them for accurate intent identification.

## API Endpoint Change

With the XO v11 release, it's recommended to update the API host for all major APIs.

For example, for the US region, the API endpoint must be updated from:

```
https://bots.kore.ai
```
**to:**
```
https://platform.kore.ai
```

Refer to [Accessing AI for Service (XO)](accessing-the-platform.md) for region-specific endpoints.

<hr>

 **Related Links**

* [What's New in AI for Service (XO v11)](./whats-new-in-xo-platform.md)
* [Current Limitations](../getting-started/whats-new-in-xo-platform.md#current-limitations)
* [Key UI Differences Between XO v11 and v10](../getting-started/key-differences-between-xo11-and-xo10.md)