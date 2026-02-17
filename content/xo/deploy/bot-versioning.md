# App Versioning

Very often, as part of the development process, you may want to mark specific stages as versions. The reasons could be as varied as:

* Creating a version of the agent before proceeding to subsequent changes;
* Preserving a fully tested version till the production release while continuing to work on enhancements;
* Keeping track of all the changes made.

If the new changes are not working out, for any reason, then you would want to revert back to the previous state.


## Overview

Kore.ai’s **App Versions** option is specifically designed to meet the above requirements.

Using this option, you as a developer can:

* create multiple versions of the definition;
* view and manage all versions available for the agent; and
* restore the agent to a previous version.

Versioning is supported in Parent App and Linked Apps.

This option can be accessed from the **Deploy** option from the left menu, under the menu option **Deploy Management -> App Versions.**


## Version Types

The version type is based on the ways in which a Bot version is created:

* **User Created**: These versions are created by you as a developer, as discussed below.
    * There is a limit of 20 user-created versions. Once the limit is reached, the oldest versions are deleted to make room for any new ones.

* **Auto Created**: These versions are created as part of the publishing cycle. [Learn more](publishing-bot.md){:target="_blank"}.
    * Whenever you publish an agent, the Platform creates a version automatically.
    * This auto created version includes the definition of the published copy of the agent after the current publish request is accepted.
    * In case the publish request is rejected, the version will not be created.
    * You cannot delete these versions.
    * While an auto-version creation is in-progress, you cannot raise any subsequent publish requests.
    * There is a maximum limit of 20 auto-created versions. Once the limit is reached, the oldest versions are deleted to make room for any new ones.

<img src="../images/bot-versioning-img1.png" alt="Deploy - App Versions" title="Deploy - App Versions" style="border: 1px solid gray; zoom:70%;">


## Creating an AI Agent Version

In this section, we discuss user created versions. Following are the steps to create such a version:

1. From the **App Versions** page, click the **New Version** button.
2. You will be prompted to enter:
    1. **Version Name** – enter a unique name that would ideally give an idea of a major feature of the assistant.
    2. **Description** – add in brief the changes that went into this version.

3. Click **New App Version** when done. Your version is created.

    <img src="../images/bot-versioning-img2.png" alt="Version created" title="Version created" style="border: 1px solid gray; zoom:70%;">


## Version Actions

Following are the actions you can perform from the AI Agent Versions listing page:

1. On the **App Versions** page, you will see a list of all versions of the agent.
2. For each version you can view:
    1. **Name** of the versions
    2. **Description** of the version
    3. **Platform** **Version** where this version was created
    4. **Created on** – the version creation timestamp
    5. **Created by** – the user who created the version.

3. You can perform the following actions on each version:
    1. **Restore** to a specific version;
    2. **Export** a specific version;
    3. **Delete** a specific version (not applicable for **Auto Created** versions).

4. You can also **Compare** versions to track changes.

    <img src="../images/bot-versioning-img3.png" alt="Version actions" title="Version actions" style="border: 1px solid gray; zoom:70%;">


## Comparing Versions

The Version Comparison feature facilitates understanding the differences between versions of the same agent. It helps to:

* Debug issues in the recently published version by letting developers compare the published version with any of the previous versions.
* Analyze changes before Publish. Developers can take a snapshot of changes by comparing a copy of the in-development version and the published version of the agent.
* Perform Impact Analysis before (or after) Version Restore. Developers can get a better understanding of the impact of version restoration by comparing the two versions.
* Analyze changes in NLP/NLU. NLP trainers can analyze the change in the agent's NLP performance by comparing the training present in two versions.

Using the **Compare** option against any version, you can compare any two versions of your agent to review the list of changes made to its definition between the two versions.

To compare versions, follow the below steps:

1. On the _Bot Versions_ page, you can find a list of existing versions.
2. Hover over the version you want to compare and click **Compare**.
3. On the **New Version** window, you can find the selected version (source) of your agent and a list that contains different versions (target). Select a version from the list to compare to.
4. Click **Proceed**.

    <img src="../images/bot-versioning-img4.png" alt="Compare versions" title="Compare versions" style="border: 1px solid gray; zoom:70%;">

5. On the Version Comparison page, you can find the comparison details categorized into:
    1. Tasks
    2. Training 
    3. Intelligence
    4. Settings
    5. Variables
    6. Change Logs

6. The following information is highlighted to the developer in a JSON format:
    1. **Data addition** – Newly added data in the secondary version is highlighted, but not in the primary version.
    2. **Data removal** – Data deleted from the primary version is highlighted, but not in the secondary version.
    3. **Data update** – In the case of key-value pairs, the same _key_ present in app versions with different values is highlighted. 
    4. For data addition and removal, an empty line is shown in the version where the corresponding detail is missing to understand the position of the new line.

        <img src="../images/bot-versioning-img5.png" alt="Comparison findings" title="Comparison findings" style="border: 1px solid gray; zoom:70%;">

7. A summary count of the total changes is displayed and supports search.


## Restoring Versions

Using the **Restore** option against any version, you can replace the current ‘in-development’ version of the agent with the definition present in that version. The restoration honors the compatible versions and will reject any non-compatible version restorations.


### How restoration works

The following is how version restore is handled for each of the components:

#### Tasks

The following rules apply to Dialog Tasks, Alert Tasks, Small Talk (per language), UI Forms, Panels and Widgets

* If there are one or more additional tasks in the agent, and if these are not present in the restoration version definition, then these tasks will be implicitly marked as ‘Deleted’ in the Platform.
* These ‘Deleted’ tasks will not be available for development and they will automatically be removed from the Published copy of the agent during the first publish request post-restoration. You will not be allowed to exclude these delete requests from the publish requests.
* Once deleted if you restore a version that contains these deleted tasks they will be included as new tasks with the same name and the original (deleted) tasks will still be marked as deleted in the Publish logs.
* If you have restored a published agent to an unpublished state then imports might be restricted.


#### Knowledge Graph

The following rules apply to Knowledge Tasks (per Language)

* If there are one or more additional FAQs in the agent, and if these are not present in the restoration version definition, then these tasks will be implicitly marked as ‘Deleted’ in the Platform.
* These ‘Deleted’ tasks will not be available for development.
* These FAQs will be removed from published copy only if the corresponding parent nodes are selected for publishing during the publish request.
* If the corresponding parent nodes are not selected for publishing, then those FAQs will be present in the Published copy but considered as deleted in the in-development copy
* Once deleted if you restore a version that contains these deleted tasks they will be included as new tasks with the same name and the original (deleted) tasks will still be marked as deleted in the Publish logs.


#### Small Talk

The following rules apply to Small Talk (per Language)

* If there are one or more additional FAQs in the agent, and if these are not present in the restoration version definition, then these tasks will be implicitly marked as ‘Deleted’ in the Platform.
* These ‘Deleted’ tasks will not be available for development.
* These QnAs will be removed from published copy only if Small Talk is selected for publishing during the publish request.

 
#### Languages

* If there are one or more additional languages in the definition which are not present in the restored version definition, then such languages will be considered as ‘deleted’ from the configured version of the agent.
* These ‘deleted’ languages will not be available for development.
* The language deletion will get reflected in the published copy after the subsequent publishing of the agent, post-restoration.

 
#### Channels

* Channels are not part of definition and as such will be part of versioning ie. the current channel enablement will not change on version restoration.
* One exception is the **Webhook channel**. The web channel configuration of the current version will be replaced by that of the restored version.


#### AI Agent Management

* AI Agent Import will not be allowed until the restored version is published.


## Exporting Versions

Using the Export option, you can download a .zip archive of your agent. These exports can be useful for backup purposes or to use as imports during your development process.


## Deleting User-Created Versions

You can delete user-created versions via the **More Options Menu > Delete**. 

!!! Warning

    Deleted versions cannot be restored. Please proceed with caution and only delete versions if you are absolutely sure.