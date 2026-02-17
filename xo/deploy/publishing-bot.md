# Publishing your App

End users can interact with an AI Agent only when it is published. The Kore.ai Experience Optimization Platform provides a publishing flow to allow administrators to review new agents and updates before they are made available to end users. The publishing workflow applies to any component that impacts the end user.

Before you can publish your agent, you need to configure at least one channel. [Learn more about Channel Enablement](../channels/adding-channels-to-your-bot.md){:target="_blank"}.

Moving forward, we will discuss the publication statuses your agent and its components go through, the publication process, excluded components, as well as the approval process. 


## Publication Statuses

Every agent created in the Platform has two states:

* **In Development:** Developers can make changes to any of the components in this state. So, when the agent is first created it is by default in the _In Development_ state. When you publish any components, a published state of these components is created and these components are also available in the _In Development_ version of the agent so that you can continue to make any necessary changes to them.
* **Published:** The components that have been approved for publishing are available in the _Published_ state of the agent. You cannot make changes to the Published version of the components. The developer can pick and choose what changes are to be published during the publishing process. Admins can review the changes and approve or reject the publish request.

The Publish Status dock item checks if the publishing is completed within the specific time period and shows the ongoing progress of the publishing process. Once the publishing is completed it shows whether the publish request is successful or failed with details.

You can switch between the two states using the drop-down on the top left side of any agent window.

<img src="../images/publish-bot-img1.png" alt="Switch between statuses" title="Switch between statuses" style="border: 1px solid gray; zoom:70%;">

If your agent is trained in one or more languages that use NLP Version 2, you will see a banner notifying you about the upcoming [auto-upgrade to NLP Version 3](../automation/natural-language/training/optimizing-bots.md#nlp-version-3){:target="_blank"}.


## Component Statuses

Agent tasks and flows pass through the following stages:

* **In Progress**: Developers have begun configuring the task but haven’t yet defined all the required configurations. This status applies only to Alert, Action, and Information tasks.
* **Configured**: The task configuration is complete but the Owner hasn’t yet published the task.
* **Awaiting Approval**: The Owner has published the task thus initiating a request to the Admin, but the Admin hasn’t yet approved the publishing request.
* **Published**: The task is published for personal, enterprise, or public use.
* **Upgrade in Progress**: Developers have created an upgraded version of the published task to change any configurations, but the configuration is not yet complete.
* **Rejected**: The Admin rejects the publishing request. An email is sent to the developer with comments from the Admin.
* **Suspended**: The Admin suspended use of a deployed agent in an enterprise. An email is sent to the developer with comments from the Admin. While the end-users cannot access the suspended agent/tasks, developers can work with the In-development copy of the agent.

!!! note

    A Published task cannot be deleted. However, administrators can Suspend a task if it is no longer required.
    You can also Upgrade a Suspended task to create a Configured copy and make any changes to the task definition.


## Publishing Components

You can only publish an agent or its components if you are the owner. If you are a developer with access to editing the agent, you cannot publish it’ only the owner can.

To publish an agent, please follow the steps below:

1. Open the agent whose updates you want to publish.
1. Select **Deploy** from the top menu
2. From the left menu select **Publish**.
3. The _Publish_ page opens with all the components selected by default.  
<img src="../images/publish-bot-img2.gif" alt="Publish page" title="Publish page" style="border: 1px solid gray; zoom:70%;">

4. Clear the checkboxes of any components you do not want to publish, and then click **Next**.
5. Enter any useful **comments** for the Admin and click **Confirm**.

!!! note

    If you select to publish components without including the NL Model, then any unpublished training data will not be published and will be associated with the auto-created in-development version of the respective tasks.


### Publishable Components

Every component that impacts end-user interactions or experience goes through the publishing workflow in the Platform. These components are categorized into sections. The following is the description and the list of components under these sections:

<table border="1">
  <tr>
   <td colspan="3" ><strong>FLOWS, TASKS & LANGUAGES</strong>
   </td>
  </tr>

  <tr>
   <td>Flows (Start flows, Conditional flows)
   </td>
   <td>
     <ul>
        <li><strong>Flows </strong>without published versions
        <li><strong>Upgraded versions</strong> of the published flows.
        </li>
     </ul>
   </td>
  </tr>

  <tr>
   <td>Tasks (Dialog, Alert, Panels, Widgets, Digital Forms, and Small Talk)
   </td>
   <td>
     <ul>
        <li><strong>Tasks </strong>without published versions
        <li><strong>Upgraded versions</strong> of the published tasks. It also includes language enablement. When you enable a new language in the In Development version, all the tasks appear in the publishing window with the checkbox for the new language enabled.
        </li>
     </ul>
   </td>
  </tr>
  
  <tr>
   <td>Knowledge Graph (per language)
   </td>
   
   <td>
    <ul>
        <li><strong>Level 1 terms</strong> <strong>added</strong>
        <li><strong>Level 1 terms updated</strong>
        <li><strong>Traits</strong>: Replaces the traits/classes in the Published version with the new set of traits/classes in the <em>In Development </em>version with all the additions, updates, and deletions.
        <li><strong>Synonyms</strong>: Replaces the Synonyms in the Published version with the new set of synonyms in the In Development version, with all the additions, updates, and deletions.
        </li>
    </ul>
   </td>
  </tr>
</table>



<table border="1">
  <tr>
   <td colspan="2" ><strong>NATURAL LANGUAGE</strong>
   </td>
  </tr>
  
  <tr>
   <td>NL Model
   </td>
   
   <td>The NL Model lets you publish only the NLP training data of specific intents without publishing the task definitions. When multiple users are working on an agent, Bot developers or NLP trainers can independently publish their work without impacting the agent definitions of other users.
    <br>
    For example, an NLP trainer might modify an utterance to correct some issue in a dialog task. In this case, the NLP trainer would like to publish only the training data without including the task definition.
    <br>
    Whenever an utterance is added to an already published task, you can select that task under the <strong>ML Utterances</strong>, <strong>Patterns</strong>, and <strong>Rules</strong> modules under the <strong>NL Model</strong> to publish only the training data of selected intents without including the task definitions.
    <br>
    You can also publish the Trait Groups and other NL Model configurations independently.
    <br>
    <strong>Note</strong>: If you have selected one or more Dialog Tasks from <strong>Publish -> Tasks -> Dialog Tasks</strong> in the Publish request, the training data of these selected tasks is published and you cannot customize the ML Utterances, Patterns and Rules in the NL Model.
    <br>
    If you want to publish the only training data of specific intents, you must first deselect tasks from the <strong>Publish -> Tasks -> Dialog Tasks</strong> section. Follow the steps below to select the intents for which you want to publish the ML Utterances, Patterns and Rules.
    <br>
    When you have already selected the <strong>NL Model</strong> components for specific intents customization and then try to select the <strong>Dialog Tasks</strong> a warning message appears with notification to <strong>Reset</strong> the publishable components.
    <br>
    Steps to publish only the training data for specific intents using the NL Model:
    <ol>
    <li>Expand the <strong>Natural Language > NL Model</strong> option and click the <strong>All Components</strong> link.  
    
        <img src="../images/publish-bot-img3.png" alt="NL model - All components" title="NL model - All components" style="border: 1px solid gray; zoom:70%;">

    <li>Select the following components: 
        <ol>
 
        <li><strong>ML Utterances</strong>: Replaces old user utterances with a new set of utterances in the <em>Published</em> version from the <em>In-Development</em> version, with all the additions, updates, and deletions. Click the <strong>Customize</strong> link to select the modified utterances associated with the updated tasks after publishing. You can search and select a particular task.

        <img src="../images/publish-bot-img4.png" alt="ML Utterances" title="ML Utterances" style="border: 1px solid gray; zoom:70%;">
 
        <li><strong>Patterns</strong>: Replaces the old patterns with a new set of patterns in the Published version from the In Development version with all the additions, updates, and deletions. Click the <strong>Customize</strong> link to select modified patterns that were updated after publishing them. You can search and select a particular pattern.

        <img src="../images/publish-bot-img5.png" alt="NL Model - Customize" title="NL Model - Customize" style="border: 1px solid gray; zoom:70%;">
 
        <li><strong>Rules</strong>: Replaces the intents in the <em>Published</em> version from the <em>In-Development</em> version with the new set of intent with rules defined for Dialog Execution and Knowledge Graph Intent detection. Click the <strong>Customize</strong> link to select updated rules after publishing them. You can search and select a particular rule.
 
        <li><strong>Trait Types</strong>: Replaces the traits in the <em>Published</em> version with a new set of trait types from the <em>In-Development</em> version for specific entities, attributes, or details that the users express in their conversations. 
 
        <li><strong>Others</strong>: Replaces the following components:  
        <ul>
  
        <li><strong>Bot Synonyms</strong>: Synonyms in the <em>Published</em> version with a new set of synonyms from the <em>In-Development</em> version to include all possible alternative forms with all the additions, updates, and deletions. 
        <li><strong>Utterances and NER</strong>: User utterances in the <em>Published</em> version from the <em>In-Development</em> version with a new set of utterances associated with the task.
  
        <li><strong>Ignore Words and Fields Memory</strong>: A full set of Ignore Words and Field Memory in the <em>Published</em> version with words the NLP engine must ignore when interpreting the user input for a task, including all the additions, updates, and deletions. 
  
        <li><strong>Entity Patterns and Negative Patterns</strong>: Old entity patterns with a new set of Entity and Negative patterns to improve NLP interpreter accuracy in the <em>Published</em> version from the <em>In-Development</em> version with all the additions, updates, and deletions. 
  
        <li><strong>Entity Synonyms</strong>: Old entity synonyms with new ones in the <em>Published</em> version from the <em>In-Development</em> version with all the additions, updates, and deletions published along with the corresponding synonyms.
        </li>  
    </ul>
    </li>  
    </ol>
    </li>  
    </ol>
   </td>
  </tr>
  <tr>
   <td>Settings
   </td>
   <td>
    <ul>
        <li><strong>Standard Responses</strong>: Replaces the full set of standard responses in the Published version with the ones in the In Development version, with all the additions, updates, and deletions.
        <li><strong>Default Dialog</strong>: Replaces the Default Dialog configuration in the Published version with the one in the In Development version.
        <li><strong>Amend Settings</strong>: Replaces the Amend Setting configuration in the Published version with the one in the In Development version.
        <li><strong>Advanced Settings</strong>: Replaces the Advanced Settings configuration in the Published version with the one in the In Development version.
        </li>
    </ul>
   </td>
  </tr>
</table>



<table border="1">
  <tr>
   <td colspan="2" ><strong>CHANNELS</strong>
   </td>
  </tr>
  
  <tr>
   <td>Channels
   </td>
   <td>
    <ul>
        <li>Replaces the channels in the Published version with the new channels enabled, published channels whose configuration were changed, and channels that are disabled in the In Development version.
        </li>
    </ul>
   </td>
  </tr>
</table>



<table border="1">
  <tr>
   <td colspan="2" ><strong>EXTENSIONS</strong>
   </td>
  </tr>

  <tr>
   <td>Event Handlers
   </td>
   <td>The full set of selected events in the Published Version get replaced with the ones in the In Development version.
   </td>
  </tr>
  
  <tr>
   <td>BotKit
   </td>
   <td>The BotKit configuration in the Published Version gets replaced with the configuration in the In Development version.
   </td>
  </tr>
  
  <tr>
   <td>Agent Transfer
   </td>
   <td>The Agent Transfer configuration in the Published Version gets replaced with the configuration in the In Development version.
   </td>
  </tr>
  
  <tr>
   <td>Web / Mobile SDK
   </td>
   <td>The Web / Mobile SDK Configuration in the Published Version gets replaced with the configuration in the In Development version.
   </td>
  </tr>
</table>


<table border="1">
  <tr>
   <td colspan="2" ><strong>SETTINGS</strong>
   </td>
  </tr>

  <tr>
   <td>General Settings
   </td>
   <td>Replaces General Settings in the Published version with the ones in the In Development version.
   </td>
  </tr>
  
  <tr>
   <td>Agent Variables
   </td>
   <td>Replaces the agent Variables in the Published version with the ones in the In Development version.
   </td>
  </tr>
  
  <tr>
   <td>PII Settings
   </td>
   <td>Replaces the PII settings in the Published version with the ones in the In Development version.
   </td>
  </tr>
  
  <tr>
   <td>IVR Settings
   </td>
   <td>Replaces the IVR Settings in the Published version with the ones in the In Development version.
   </td>
  </tr>
  
  <tr>
   <td>Hold & Resume Settings
   </td>
   <td>Replaces the Hold & Resume Settings in the Published version with the ones in the In Development version.
   </td>
  </tr>
  
  <tr>
   <td>Custom Script
   </td>
   <td>Replaces the Custom Script file in the Published version with the ones in the In Development version.
   </td>
  </tr>

  <tr>
   <td>Generative AI and LLM
   </td>
   <td>Replaces the Generative AI and LLM related features in the Published version with the ones in the In Development version.The setting includes:

   <br>
   : Integration
    <br>
   : Prompts and Requests Library
    <br>
   : Feature Mappings
    <br>
   : Guardrails
   </td>
  </tr>
  
  <tr>
   <td>Advanced Settings
   </td>
   <td>Replaces the following in the Published version with the ones in the In Development version:
    <br>
   : Language Detection Preference
    <br>
   : Subdomain
    <br>
   : Show link for task setup/execution
    <br>
   : Error Messages
   </td>
  </tr>
</table>


## Components Excluded from the Publication Workflow 

The publishing workflow doesn’t apply to the following components as they either do not impact end customers or do only when used as part of a task definition. When you access these components from either the _In Development_ or _Published_ version, they show the same information.


* **Batch Testing** (including custom suites and test reports)
* **Manage Developer Access**
* **App Creation, Resetting, and Deletion**
* **Language enablement**: When you enable a new language in the _In Development_ version of the agent, the publishing workflow works similarly to publishing tasks – you need to publish all the components all over again by selecting the checkbox for the newly enabled language.


## Publication Approval

When you publish an agent or any of its components, the Platform initiates a request to the Admin to approve it. Depending on the **Purpose** defined for the agent during its initial set up, the following happens:


* **For an Employee Agent:** The Admin needs to select users from the enterprise Kore.ai account who can interact with the agent , and then approve the publishing request. Once that’s done, the selected users can use the agent in the selected channels.
* **For a Consumer Agent:** Any user can use the agent in the selected channels soon after the Admin approves the publishing request.


### Auto Approvals

Admins can set up auto-approval for any updates made to Enterprise or Consumer agents using the following steps:

1. Open the Platform Admin Console at: [https://platform.kore.ai/admin](https://platform.kore.ai/admin){:target="_blank"}.
2. Go to **Bots Management > Consumer Bots** or **Bots Management > Enterprise Bots**.
3. Click the more icon for the required agent and select **Bot Settings**.

    <img src="../images/publish-bot-img6.png" alt="Bot settings" title="Bot settings" style="border: 1px solid gray; zoom:70%;">

4. On the Bot Settings window, select **Auto Approve**.
5. Select **Auto Approve all publish requests for this bot**.

    <img src="../images/publish-bot-img7.png" alt="Auto Approve all publish" title="Auto Approve all publish" style="border: 1px solid gray; zoom:70%;">