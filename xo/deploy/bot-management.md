
# App Management

This article discusses the main features that allow you to manage your AI Agents at a high level. These include Importing, Exporting, and Deleting agents, as well as viewing change logs.

To learn more about Variables and how to use them, see [Using Bot Variables](../app-settings/variables/using-bot-variables.md).

## Importing and Exporting an AI Agent

AI for Service allows you to export and import agent tasks and associated configurations into another agent. This feature helps you in the migration of agent definitions, cloning of agents, or maintaining a periodic backup of agent definitions.

This feature is particularly helpful to test various versions of your agent at different stages of the development process before it's released for end users. The articles in this section help you understand how the _Export_ and _Import_ features work and how to perform them.



### Importing an AI Agent

You can import tasks and configurations of a specific agent into a new or existing agent using one of these import types:

* **Full import**: Replaces the existing agent with the imported configurations. The system deletes any additional configurations in the target agent that aren't present in the import definition. The system retains the webhook channel even if it's not present in the import agent definition.

    !!! note

        We strongly recommend you exercise caution and take a backup of the target agent before importing using this option. 

* **Incremental import**: Upgrades the current agent with the configurations available in the import file. The system retains any additional configurations available in the target or imported agent. You can select specific agent components to import from the agent tasks, NLP data, and agent settings. Refer to the Bot Items in the Incremental Import table at the end of the article to learn how the imported agent items replace the target agent’s items in incremental import.

**Before you Begin** The _config.json_ file consists of variables that need values for the target agent. Share the file with the relevant developers or enter suitable values yourself for the variables before importing the agent definition into a new AI Agent.

!!! note

    
     Bot imports are not supported. Only App imports are allowed. Follow the [upgrade journey](../getting-started/migration-path-xo10-to-xo11.md) to upgrade your XO10 Bot to an XO11 App.
 

#### Steps in Importing to an Existing AI Agent

To import an AI Agent, follow these steps:

1. Open the agent you want to import.
2. Select the **Deploy** tab from the left menu.
3. Select **Import & Export** under **DEPLOY MANAGEMENT**.
4. On the Import & Export page, select the **Import** tab.
5. You can choose one of the below import options:

    * Import by uploading **individual JSON files**:
        1. Choose the **JSON Files** radio button.
        2. Click the **Choose File** buttons next to the **App Definition File** field and **App Config File** fields, and upload the _appDefinition.json_ and _config.json_ files, respectively.
        3. Optionally, upload the custom script file from the imported agent, if any. The file size limit is 500kb.  
        <img src="../images/bot-import-custom-script-file1.png" alt="App import - JSON files" title="App import - JSON files" style="border:1px solid gray; zoom:70%;">

    * Import by uploading a **ZIP file**:
        1. Choose the **Zip File** radio button.
        2. Through the **Choose File** button, browse and import the Zip file. This option allows you to import an app by directly importing the zip file created at the time of Export without having to unzip it.  
        <img src="../images/bot-import-zip-file.png" alt="App import - ZIP file" title="App import - ZIP file" style="border:1px solid gray; zoom:70%;">

6. Select one of these import options: **Full Import** or **Incremental Import**. You get a warning to back up your agent before performing the import.
7. If you select **Full import**, the agent definition in the in-development copy is overwritten with the definition in the import file.

    * If the agent contains one or more additional tasks or languages that aren't present in the import definition, When you publish the agent, the system marks the tasks as deleted and removes them.
    * For Generative AI and LLM features, **Full import**:  

        * Deletes existing models and prompts in the target app.
        * Overwrites with models, prompts, and GenAI features from the import file.
        * Retains model configurations if a model exists in both source and target
        * Replaces all feature mappings, custom instructions, guardrails, and DialogGPT.
        * Preserve existing integrations.
        * Import XO-GPT integration as-is.
        * Enable imported features with warnings.
        * Handle **Azure Open AI by Kore.ai** integration based on token status.

8. If you select **Incremental import**, you can choose which components to import.

    <img src="../images/bm(4).png" alt="Incremental import" title="Incremental import" style="border:1px solid gray; zoom:60%;">

    * **Flows**: Here you can select the flows you want to import. 
    * **Automation Tasks**: Here, you can select to import Tasks only (with or without comments), Dialog tasks, Digital Forms, Small Talk, or FAQs.

        !!! Note

            If you want to import one or more Automation Tasks, also select the **NLP Data** settings, as they are linked. For example, the utterances assigned to dialog tasks are not imported if you don’t select the NLP Data settings, causing problems in identifying the dialog properly.

    * **NLP Data**: Here you can import Synonyms, Concepts, Traits, Rules, Utterances, Patterns, and Standard Responses. You can choose to either append or replace the ML Utterances and Patterns..
            
        * **Append** You can use this when the utterances in the file must be imported into the agent, and any additional utterances in the agent must be retained (this is the default behavior).
        * **Replace** You can use this when when the utterances in the file must be imported into the agent. Any additional utterances are removed.
        
            If you are also importing Tasks, the additional utterances related to tasks being imported are removed. 

            <img src="../images/bm(1).png" alt="App import" title="App import" style="border:1px solid gray; zoom:60%;">


        * The imported Traits, Synonyms, and Concepts replace those in the target agent. Rules can be imported along with their tagged dialog tasks.

    * **Settings**: App Settings, App Variables, Voice Call Properties, Generative AI and LLM. The Generative AI and LLM setting includes:  

        * Integrations
        * Prompts and Requests Library
        * Feature Mappings
        * Guardrails
        * DialogGPT (Conversation Types and Configurations) 
        
    * **Custom Dashboards**: This is useful in case you have created custom dashboards under the Analyze section and want to import them to the new agent as well. 

    * **Agent AI Dashboards**: Here you can select the Agent coaching rules, Checklists, and their configurations.

    * On the confirmation dialog that opens, click **Backup** to download the existing agent configuration.  
    <img src="../images/bm(8).png" alt="Backup notification" title="Backup notification" style="border: 1px solid gray; zoom:70%;" >
    
        !!! Note

            While backing up is an optional choice, we strongly recommend you do so, especially when choosing Full Import, as you cannot recover the configurations after the imported agent replaces them.

9. Click **Proceed** to start the import.
10. After the import is completed, a success message appears. Click **Done**.
    
    !!! Note

        App import would fail if the agent has been restored but not published after the restore. 

### Creating an New AI Agent Using the Import Option
 
To import an AI Agent while creating it, follow these steps: 

1. On the landing page, click **New App**. Select **Import App** from the popup menu.  
<img src="../images/bm(7)-new.png" alt="New app button" title="New app button" style="border: 1px solid gray; zoom:70%;" >

2. The **Get Started** screen appears. Select **Automation AI** by clicking the **Try now** button on the tile.  
<img src="../images/bm-import-automation-ai.png" alt="Import - Automation AI" title="Import - Automation AI" style="border: 1px solid gray; zoom:70%;">

3. Enter an **App Name**. Optionally, set an app icon.
4. You can choose one of the below import options:

    * Import by uploading **individual JSON files**:
        1. Choose the **JSON Files** radio button.
        2. Click the **Choose File** buttons next to the **App Definition File** field and **App Config File** field, and upload the _appDefinition.json_ and _config.json_ files respectively.
        3. Optionally, upload the custom script file from the imported agent if any. The file size limit is 500kb.

    * Import by uploading **ZIP file**:
        1. Choose the **Zip File** radio button.
        2. Through the **Choose File** button, browse and import the Zip file. Using this option you can import an app by directly importing the zip file created at the time of Export, without having to unzip. 

5. Click **Create App** when ready. 

    <img src="../images/bm(5).png" alt="Create app using import" title="Create app using import" style="border:1px solid gray; zoom:60%;">


### Components in the Incremental Import

<table>
  <tr>
   <td>COMPONENT
   </td>
   <td>DESCRIPTION
   </td>
  </tr>
  <tr>
   <td>Tasks with the same Reference ID
   </td>
   <td>Imported tasks replace the tasks in the target agent, and their status changes to Configured, regardless of their current status (including Suspended and Rejected tasks).
   </td>
  </tr>
  <tr>
   <td>Tasks in the source agent with a different Reference ID
   </td>
   <td>These tasks are created in the target agent with the same Reference ID.
   </td>
  </tr>
  <tr>
   <td>Tasks in the target agent with a different Reference ID
   </td>
   <td>These tasks stay intact.
   </td>
  </tr>
  <tr>
   <td>Utterances, Patterns, and Task-level Synonyms
   </td>
   <td>Imported utterances, patterns, and task-level synonyms replace the ones in the target agent and apply them to the imported tasks. Published models in the target agent stay intact.
   </td>
  </tr>
  <tr>
   <td> App Synonyms and Standard Responses
   </td>
   <td>Existing agent synonyms, and standard responses in the target agent are replaced with the imported ones.
   </td>
  </tr>
  <tr>
   <td>Synonyms, Concepts, and Traits
   </td>
   <td>They are imported from the source agent along with all their underlying terms and replace the ones in the target agent.
   </td>
  </tr>
  <tr>
   <td>Rules
   </td>
   <td>Rules are imported only if their tagged dialog tasks are imported.<br><br>
    <strong>Note</strong>: On-Prem customers can import the NLP components (Synonyms, Concepts, Rules, Traits) from a source agent of a higher version to a target agent of a lower version by checking the <strong>NLP Settings</strong> checkbox. However, Rules won’t import unless the tagged dialog tasks are also imported.
   </td>
  </tr>
  <tr>
   <td>Generative AI and LLM    
   </td>
   <td>
    – Keeps existing prompts, only adds new ones.
    <br>
    – Replaces all feature mappings, custom instructions, Guardrail, and DialogGPT.
    <br>
    – Preserve existing integrations.
    <br>
    – Import XO-GPT integration as-is.
    <br>
    – Enable imported features with warnings.
    <br>
    – Handle "Azure Open AI by Kore.ai" integration based on token status.
   </td>
  </tr>
</table>

## Exporting an AI Agent

You can export an agent’s definition and configuration using the Export option.

When you export an agent, it downloads a zipped file with the following parameters:

* **appDefinition.json**: Includes metadata, tasks, agent and task-level synonyms, utterances, patterns, knowledge graph, standard responses, flows, and IDPs. You can select specific items to export from tasks, NLP data: NLP settings, utterances, standard responses–and Settings–agent settings, variables, IVR settings- while exporting the agent.
* **config.json**: Includes App settings, App variables, and IVR settings.
* **Icon.png**: Includes the agent icon.
* **&lt;_Custom ScriptFile Name_.js> (if available)**: Includes a script file with JavaScript functions. When you upload this file, you can access the functions in the file from anywhere in the agent.

!!! Note

    The agent and its components are given unique Reference IDs during export. These IDs help the platform to identify matching tasks in the target agent and update them.

### Export Modes

You can export agents in two modes: **Published** and **Latest Version**. Depending on the mode that's selected, the corresponding versions of the tasks are exported. You can select specific components to export from the tasks, NLP data, and agent settings in both modes. Further individual Tasks can also be selected.

#### Published Mode

When you export a agent in the Published mode, only the published versions of the tasks are exported, regardless of any other existing versions. For example, if an agent consists of a published version of a task and also version in Upgrade in Progress, only the published version gets exported. Refer to the table below to understand which versions of the tasks are exported in the Published mode:

<table>
  <tr>
   <td><strong>Task</strong>
   </td>
   <td><strong>Status</strong>
   </td>
  </tr>
  <tr>
   <td><strong>In Progress</strong>
   </td>
   <td>Not exported If a task is in progress for development, it isn’t exported in the Published mode.
   </td>
  </tr>
  <tr>
   <td><strong>Configured</strong>
   </td>
   <td>Not exported If the task configuration is complete but not published for use, it doesn’t get exported in the Published mode.
   </td>
  </tr>
  <tr>
   <td><strong>Published</strong>
   </td>
   <td>Exported All published tasks get exported
   </td>
  </tr>
  <tr>
   <td><strong>Upgrade in Progress</strong>
   </td>
   <td>Not exported Task upgrade configurations that are in progress don't get exported. Only the published configurations get exported.
   </td>
  </tr>
  <tr>
   <td><strong>Rejected</strong>
   </td>
   <td>Not exported Task configurations rejected by admins don't get exported.
   </td>
  </tr>
  <tr>
   <td><strong>Suspended</strong>
   </td>
   <td>Not exported Suspended tasks don't get exported.
   </td>
  </tr>
</table>

!!! note

    In Dialog tasks, only the nodes in the Published status get exported.

#### Latest Version

When you export an AI Agent in the Latest mode, the latest versions of the  tasks get exported, regardless of their publishing status. For example, if an agent consists of a published version of a task and also the version in Upgrade in Progress, the Upgrade in Progress version gets exported, whereas if it has a Configured version, the configured version is exported. Refer to the table below to understand which versions of the tasks are exported in the Latest mode:

<table>
  <tr>
   <td><strong>Task</strong>
   </td>
   <td><strong>Status</strong>
   </td>
  </tr>
  <tr>
   <td><strong>In Progress</strong>
   </td>
   <td>Exported if it's the only available version Not Exported if a later version exists
   </td>
  </tr>
  <tr>
   <td><strong>Configured</strong>
   </td>
   <td>Exported if it's the only available version Not Exported if a later version exists
   </td>
  </tr>
  <tr>
   <td><strong>Published</strong>
   </td>
   <td>Exported if it's the only available version Not Exported if a later version exists
   </td>
  </tr>
  <tr>
   <td><strong>Upgrade in Progress</strong>
   </td>
   <td>Exported regardless of any other task version in the agent
   </td>
  </tr>
  <tr>
   <td><strong>Rejected</strong>
   </td>
   <td>Not exported Task configurations rejected by admins don't get exported
   </td>
  </tr>
  <tr>
   <td><strong>Suspended</strong>
   </td>
   <td>Not exported Suspended tasks don't get exported
   </td>
  </tr>
</table>

#### Steps in Exporting an AI Agent

1. Open the agent you want to export.
2. Select the **Deploy** tab from the left menu.
3. Select **Import & Export** under **DEPLOY MANAGEMENT**.
4. On the Import & Export page, select the **Export** tab.
5. In the Export tab, select either **Published** or **Latest Version** exporting mode.
6. By default, all the components are selected for export. Deselect the items that you do not want to export.

    <img src="../images/bm(10).png" alt="App export" title="App export" style="border:1px solid gray; zoom:60%;">
     
    !!! note

        If your app has events linked to specific Dialog tasks and those tasks are not included in the export, the associated bot events are disabled by default in the exported copy. To avoid this, include all tasks referenced in bot events during export.


7. For Automation Tasks, you can further choose to export only selected tasks. By default All Tasks are selected. 

    !!! note

        If you want to export one or more Bot Tasks, also select the **NLP Data** settings, as they are linked. For example, the utterances assigned to dialog tasks are not exported if you don’t select the NLP Data settings, causing problems in identifying the dialog properly.

8. You can also choose to **Include dependent tasks** or not for export. The existence of these are checked before import and the import fails if the dependent tasks are missing. These dependent tasks include the following:
    * Linked Dialogs that's dialog nodes present in the definition of another dialog;
    * Dialogs linked in defining ‘Behavior on Exceeding Retries’ for IVR Properties of any node of the dialog;
    * Dialog linked as part of sub-intent / interruption settings;
    * Any other scenario where a dialog execution could fail if a dependent task isn't included;

        <img src="../images/bm(12).png" alt="App export" title="App export" style="border:1px solid gray; zoom:60%;">

9. Click **Export**. The export happens in the background and the **Download** button gets activated after it's complete. Click **Download** to download the file to your local computer.

### Exported App Components

When you export an agent, the following components get exported, depending on your Latest or Published Mode selection:

<table>
<tr>
   <td colspan="2" ><strong>Flows</strong>
   </td>
  </tr>
  <tr>
   <td>Start Flows
   </td>
   <td>
<ul>

<li>System-created conversational start flow for calls and chat
</li>
</ul>
   </td>   
  </tr>
  <tr>
   <td>Exit Flows
   </td>
   <td>
<ul>

<li>System Created Flow to handle No Agents Available in Voice and Chat
<li>System-created flow to handle Out Of Operational Hours in Voice and Chat
</li>
</ul>
   </td>  
  </tr>
  <tr>
   <td colspan="2" ><strong>Automation Tasks</strong>
   </td>
  </tr>
  <tr>
   <td>Alert Tasks, Dialog Task, Digital Forms, FAQs,  Small Talks
   </td>
   <td>
<ul>

<li>Task Definition (Action, Alert, Information, and Dialog)

<li>Synonyms (Task, Field, and Entity)

<li>Patterns (Task, Field, and Entity)
</li>
</ul>
   </td>
  </tr>
  
  <tr>
   <td colspan="2" ><strong>Natural Language</strong>
   </td>
  </tr>
  <tr>
   <td>NL Model
   </td>
   <td>The Advanced NLP Settings and Ignore words and Field memory. The Advanced NLP Settings ( Natural Language > Advanced Settings) include the following:
<ul>

<li>Auto-train settings for ML Utterances

<li>Multiple intent detection settings

<li>Threshold and Configurations settings for

<ul style="padding-left: 30px;">
<li>Fundamental meaning

<li>Knowledge Graph

<li>Machine Learning
</ul>

<li>Concepts, Synonyms, and traits, even if no tasks are specifically selected

<li>Rules, only if you are exporting the corresponding dialog tasks too.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Utterances
   </td>
   <td>All the utterances of all the enabled languages
   </td>
  </tr>
  <tr>
   <td>Standard Responses
   </td>
   <td>All the standard responses of the agent in all enabled languages
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Settings</strong>
   </td>
  </tr>
  <tr>
   <td>App Settings
   </td>
   <td>The following information from the App Settings page:
<ul>

<li>General Settings

<li>App name, description, and agent synonyms for each enabled language

<li>Language selection time frame (App Settings > Language Management)

<li>Welcome message

<li>Hold and Resume settings (App level)

<li>Custom Script file

<li>Tenancy URLs

<li>Error messages

<li>Task setup and execution settings (for executing tasks using UI forms).
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>App Variables
   </td>
   <td>All the global and content variables present in the agent, along with their values.
   </td>
  </tr>
  <tr>
   <td>Voice Call Properties
   </td>
   <td> Configurations of all voice channels.
   </td>
  </tr>
  <tr>
   <td>Generative AI and LLM
</td>
   <td>
<ul>

<li>Integrations

<li>Prompts and Requests Library

<li>Feature Mappings

<li>Guardrails

<li>DialogGPT (Conversation Types and Configurations)

</li>
</ul>
</td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Custom Dashboard</strong>
   </td>
  </tr>

 <tr>
   <td colspan="2" ><strong>Agent AI Dashboard</strong>
   </td>
  </tr>
  <tr>
   <td>Agent Coaching
   </td>
   <td>
<ul>
<li>Agent coaching rules and their configurations
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Agent Playbook

   </td>
   <td>
<ul>
<li>Checklists and their configurations
</li>
</ul>
   </td>
  </tr>
</table>



## Related Links

   [Deleting an App](../app-settings/delete-app.md)  
   [Viewing the Change Log](../app-settings/change-logs.md) 
