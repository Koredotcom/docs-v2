[ :octicons-arrow-left-24: Back to NLP Topics](../../../nlp-topics.md)


# Amend Entities

Time and again, we come across situations wherein the users change their preferences during task execution.

_For example_, while booking a flight, the user might change the date of travel and at times even the destination.

**Amend Entity** is a feature for such scenarios. Using this feature, you can allow the users to amend entity values and also control the post-amendment dialog behavior.

The entity amendment process is divided into three stages:

1. **Amend Identification**: Identifying that the end-user wants to amend is driven by the app’s built-in NLP capabilities.
2. **Amending Entities**: On identifying the intention to amend, the current task is put on hold and the amend flow is triggered. Three kinds of amend flows are possible based upon the user utterance:
    * When the user refers to the entity name (or entity synonyms), then they are prompted for the entity value. For example, the user utterance _I want to change the destination_ triggers the prompt for the destination entity. If the same entity node is present multiple times in the dialog, then the latest entity node for which the user has already provided input will be amended.
    * When the user gives the entity value then the entity is updated accordingly. For example, the user utterance _I want to fly to JFK_ changes the destination entity value. If the value is compatible with two or more entities in the dialog, then the user is prompted to select an entity to amend.
    * When the user refers to both the entity and its value, then the entity is updated. For example, the user utterance _change my destination to JFK_ will change the destination entity value.
3. **Post Amendment Behavior**: After an entity is successfully amended, there are three possible dialog execution flows that your app can be configured for:
    * The dialog can be re-executed from the node that is amended by evaluating that entity’s connections.
    * The dialog can resume from the node where amend was identified or made.
    * The dialog can be resumed from a specified node present in the dialog.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>This feature is not supported in all languages, Click here for details.</p>
</div>

## Implementation Hierarchy

On the Platform, Amend Entity behavior is defined at two levels:

* App level
* Task level

## Bot Level

To Set app Level Amend Entity Behavior, follow the below steps:

1. From the left menu, click **Natural Language** > **NLU Config** > **Amend Entity**.
2. By default, this option s disabled.
3. Once you **Allow amend entities**, various Dialog Resumption options are available:
    * **Re-execute dialog from amended entity** – use this option to resume the dialog by evaluating the amended entity’s connections. You can further choose to:
        * _Clear entity values captured downstream_ – to clear all entities captured between the identified entity and the amend
        * _Skip display of previously displayed messages_ – messages from Message nodes alone.
    * **Resume dialog from amend identification node** – use this option to resume the dialog from the node where the amend was identified.
4. The amend process can be extended to entities marked as _Hidden_ using the **Amend Hidden Entities** option.
    
    <img src="../images/amend-hidden-entities-window.png" alt="amend hidden entities" title="amend hidden entities" style="border: 1px solid gray; zoom:75%;">

### Task Level

Amend entity behavior is set at the Task level also. The configurations defined at the task level will override the app-level configurations.

To set Task Level Amend Entity Behavior, follow the below steps:

1. Go to **Conversation Skills > Dialog Tasks** and select the task that you want to configure.
2. On the Dialog Task page, click the **More Options** icon and select the **Manage Amend Behavior**.

    <img src="../images/manage-amend-behavior.png" alt="manage amend behavior" title="manage amend behavior" style="border: 1px solid gray; zoom:75%;">

3. On the **Manage Amend Behavior** dialog box, by default, the **Use app level settings** option is selected and the app level setting is displayed.
4. Select **Customize for this task** to override the app level settings:
    * **Do not allow amend entities** – It will not allow the user to amend entity values for this task.
    * **Allow amend entities** – It will further give you three Dialog Resumption options:
        * **Re-execute dialog from amended entity** – Amend entity behavior is set at the task level also. The configurations defined at the task level will override the app-level configurations.
            * _Clear entity values captured downstream_ – to clear all entities captured between the identified entity and the amend
            * _Skip display of previously displayed messages_ – messages from Message nodes alone.
        * **Resume dialog from amend identification node** – use this option to resume the dialog from the node where the amend was identified.
        * **Jump to a specific node in the dialog** – use this option to select a node from the current dialog where the task flow needs to jump. You can use this option to add custom behavior before resuming with the dialog. The Context object will contain the details of the entities amended, along with the previous and current values. You may use this information to customize the dialog.
        * The amend process can be extended to hidden entities using the **Amend Hidden Entities** option.
        <img src="../images/manage-amend-behavior-options.png" alt="manage amend behavior options" title="manage amend behavior options" style="border: 1px solid gray; zoom:75%;">

## Triggers

The following are patterns supporting the Amend Entity behavior. User utterance around these patterns triggers Amend Entity.

* `~amend_synonyms <entity_name> from <old_value> to <new_value> 
`For example, “_change the departure date from today to tomorrow_“.
* `~amend_synonyms <entity_name> [to as from with] <new_value> [instead_of rather_than not] <old_value> 
`For example, “_modify departure date to tomorrow instead of today_“.
* `~amend_synonyms <entity_name> <old_value> [to as with] <new_value> 
`For example, “_replace departure date with tomorrow_“.
* `~amend_synonyms <entity_name> from <old_value> 
`For example “_alter departure date from today_“.
* `~amend_synonyms <entity_name> [to as from with] <new_value> 
`For example, “_modify departure date to tomorrow_“.
* `~amend_synonyms {from} <old_value> [to as with] <new_value> 
`For example, “_change from today to tomorrow_“.
* `~amend_synonyms [to as from] <new_value> [instead_of rather_than not] <old_value> 
`For example, “_change to tomorrow instead of today_“.
* `~amend_synonyms [to as from] <new_value> instead 
`For example, “_change to tomorrow instead_“.
* `~amend_synonyms [([it that this] {to}) it that this to] &<new_value> 
`For example, “_change it from today to tomorrow_“.
* `~amend_synonyms <entity_name> 
`For example, “_amend departure date_“.
* `~amend_synonyms <old_value> 
`For example, “_change today_“
* `[to as from] <new_value> [instead_of rather_than not] <old_value> 
`For example, “_to tomorrow instead of today_“
* `[to as from] <new_value> instead 
`For example, “_to tomorrow instead_“

In the above-mentioned patterns the concept `~amend_synonyms` includes `"amend", "change","modify","alter","update", "replace", "make", "move", "upgrade", "want"`.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The user can use these patterns to change multiple entity values. For example, Change the departure date from today to tomorrow and departure city to Chicago results in the changes to both departure date and city.</p>
</div>

<div class="admonition note">
<p class="admonition-title">Additional Notes</p>
<p>The Platform's in-built training data drives the identification of the amend requests, and it is currently supported only for the dialog task conversations in English.
The scope of this feature currently includes only the replacement of previously populated entities. It does not include other scenarios like partial modifications, deletions, additions to entity values.</p>
</div>

