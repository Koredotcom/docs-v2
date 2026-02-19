# Dispositions

**Dispositions** represent a label that agents assign to the outcome of a conversation. In Contact Center AI, you can create **disposition sets** to organize **disposition codes** according to your business requirements.

To reach this feature, go to **Contact Center AI > AGENT & SUPERVISORS > Dispositions**.
<img src="../images/dispositions-screen.png" alt="
Dispositions Page" title="Dispositions Page" style="border: 1px solid gray; zoom:80%;"/>

## Disposition Sets

A Disposition Set is a group of disposition codes that you can assign to queues or agent groups to collect information at the end of a conversation. The disposition codes within a set act as fields that agents must populate when ending an interaction.

The Dispositions section opens with the **Disposition Sets** tab preselected.
<img src="../images/disposition-sets-tab.png" alt="
Disposition Sets Tab" title="Disposition Sets Tab" style="border: 1px solid gray; zoom:80%;"/>

The **Resolution** Disposition Set comes prebuilt. Administrators can enable/disable and edit the resolution disposition set. [Learn more](#edit-a-disposition-set).

A resolution disposition cannot be deleted. The default Disposition Codes for this set are _Resolved_, _Requires Supervisor Attention_, and _Unresolved_. If you disable the resolution disposition set or remove a conversation's queue from the attached list, selecting a disposition from the set becomes optional when closing a conversation, if other disposition sets are created. Users can close a conversation without selecting a disposition from the set.

### Section Features

Within the Disposition Sets section, you can perform the following:

1. **Search** disposition sets,
2. **Add** a new Set,
3. **Edit** an existing set,
4. **Delete** an existing custom set (all sets are custom except for _Resolution_, which is the default).
5. **Reorder** sets by dragging a set and dropping it into the desired position,
6. **View basic Disposition Set information**: 
    1. **Name**: The name of the Disposition Set,
    2. **Actions**: This column lists the _Edit_ option for custom sets,
    3. **Description**: A short description of the Disposition Set,
    4. **Codes**: Lists the number of codes contained within a set,
    5. **Dispositions**: Whether the disposition is Required/Optional.
    6. **Status**: Lists whether the set is enabled or disabled.

### Add a Disposition Set

To add a new Disposition Set, follow these steps:

1. Under _Dispositions > Disposition Sets_, click **Add Set**.
<img src="../images/add-set-button.png" alt="
Add Set Button" title="Add Set Button" style="border: 1px solid gray; zoom:80%;"/>

2. In the New Disposition Set window, configure the following:

#### General

In the General tab, you can configure the main settings for the Disposition Set. Populate the following fields:

1. **Name** the Disposition Set.
2. **Description**: Enter a short description of the set.
3. **Display**: This field lets you specify how to display the disposition code selection options. Choose between _Dropdown_ and _Button_, both allowing single selection.
4. **Is Required**: Choose whether the Disposition Set is required at the end of a conversation. You can select _Yes_ or _No_. If you select _Yes_, agents must select a disposition code within this set when ending interactions that are part of the queues assigned to the set or if the agent is part of a group assigned to the set.
5. Under the **Assignment** section, you can assign the Disposition Set to either queues or agent groups, as follows:
    1. Select **Assign to Queues** and the disposition set will display to all agents who are in the assigned queues. You can assign the set to all queues or selected queues. Click **Add Queue** to search and select one or multiple queues from a list. Queues must have been previously created before becoming available to select here. See [Queues](../../routing/queues/queue-management.md) to learn more about creating them. You can delete a queue assignment using the **Delete** (bin) icon on the right of the entry.
    <img src="../images/assign-to-queues.gif" alt="Assign to Queues" title="Assign to Queues" style="border: 1px solid gray; zoom:70%;">

    2. Select **Assign to Agent Groups** and the Disposition Set will display to all agents in the selected agent groups. The selection process is similar to the Queue selection above.

#### Disposition Codes

On the Disposition Codes tab, you can assign codes to the Disposition Set. The code must have been previously created and enabled before becoming available to select here. See the Disposition Codes section below for more.

To assign a code:

1. Click **Add Code**.
2. **Search for and select** the desired code from the list of available codes.

Click the **Delete** (bin) icon on the right to delete a code.

To notify supervisors:

1. Click the **Notify** tab.

    !!! Note

        This tab appears only if email/toast alerts are enabled.

2. Click Add Supervisor.
3. Search for and select the supervisor from the list of supervisors. 

Click the Delete (bin) icon on the right to delete a supervisor. 

##### Email/Toast Alerts

* If a disposition set contains only one disposition code with alerts enabled, the system triggers a notification when that code is tagged in a conversation with the provision to go to the interactions tab.
* When multiple disposition codes within the set have alerts enabled, a single notification will be sent, tagging one of the selected disposition codes. Notification criteria remain the same for email and toast notifications.
* A secondary notification email can be enabled. The supervisor will receive the notification in their configured email.

#### Enable or Disable a Set

By default, new Disposition Sets are enabled. Turn off the toggle if you want to disable a Disposition Set.
<img src="../images/new-disposition-set-enabled.png" alt="Enable New Disposition Set" title="Enable New Disposition Set" style="border: 1px solid gray; zoom:80%;"/>

Click **Create** when ready. Below is a short demo that shows you how to add a new Disposition Set.
<img src="../images/disposition-process.gif" alt="Add New Disposition Set" title="Add New Disposition Set" style="border: 1px solid gray; zoom:80%;"/>

### Edit a Disposition Set

To edit a Disposition Set, follow these steps:

1. Click the **Edit** icon corresponding to the set you want to edit.
<img src="../images/edit-set.png" alt="Edit a Disposition Set" title="Edit a Disposition Set" style="border: 1px solid gray; zoom:80%;"/>

2. In the _Edit Disposition Set_ window, make the required changes and click **Save**.

### Delete a Disposition Set

To delete a Disposition Set, follow these steps:

1. Click the **Edit** icon corresponding to the set you want to delete.
2. In the _Edit Disposition Set_ window, click the **Delete** (bin) button on the bottom left. You must confirm your choice.
<img src="../images/delete-button.png" alt="Delete a Disposition Set" title="Delete a Disposition Set" style="border: 1px solid gray; zoom:80%;"/>

!!! Notes

    1. Deleted Disposition Sets are removed from the Agent Console and no longer display after conversations within assigned queues or agent groups.
    2. Deleted Disposition Sets cannot be restored. Please proceed with caution.

## Example Disposition Sets

Below are a couple of examples of disposition sets to help you create your own:

1. **Requires Follow Up**, containing Disposition Codes for: _Pending, Disconnected, Information Required, etc._
2. **Supervisor Required**: containing Disposition Codes for: _Requires Approval, Customer Asked for Supervisor, Complex Case, etc._

## Disposition Codes

A Disposition Code is a short label assigned to the outcome of an interaction. Disposition Codes are required to build Disposition Sets and can't be assigned to Queues or Agent Groups on their own.  

### Default Disposition Codes

Contact Center provides three pre-defined disposition codes:

* **Resolved**: To be used for resolved requests that require no further action.
* **Requires Supervisor Attention:** For requests that need to be escalated to a supervisor.
* **Unresolved:** For requests which are closed but unresolved.

### Custom Disposition Codes

Contact center also lets you to create custom codes and makes them available to agents once enabled and included within a Disposition Set. You can find and create Disposition Codes by going to **Contact Center > AGENT & SUPERVISORS > Dispositions > Disposition Codes**. Here, you can find a list of existing Disposition Codes and create new ones. You can also perform a name-level keyword search.

#### Add a Custom Disposition Code

To add a Disposition Code:

1. Select **+ Add Code**.
<img src="../images/add-code.png" alt="Add Code" title="Add Code" style="border: 1px solid gray; zoom:80%;"/>

2. A _New Disposition Code_ page opens. Select **Enable** to activate the Code.
3. Enter the disposition **Code Name** and **Description**.
4. **Assign** a color and check the preview.
5. Turn on the **Show campaign-specific types** toggle to display the dispositions that the system associates with the selected campaign.
5. Select **Create**.
    <img src="../images/create-new-disposition-code.png" alt="New Custom Disposition Code Window" title="New Custom Disposition Code Window" style="border: 1px solid gray; zoom:70%;">

#### Edit a Custom Disposition Code

To edit a custom Disposition Code, follow these steps:

1. Find it in the list of Disposition Codes,
2. Select **Edit** under the Actions column,
3. Make your changes in the _Edit Disposition Code_ window, then **Save**.
    <img src="../images/edit-disposition.png" alt="Edit Custom Disposition Code" title="Edit Custom Disposition Code" style="border: 1px solid gray; zoom:80%;"/>

#### Delete a Custom Disposition Code

To delete a custom Disposition Code, follow these steps:

1. Find it in the list of Disposition Codes.
2. Select **Delete** under the Actions column.
3. **Confirm** your choice.

!!! Notes

    1. You cannot restore deleted disposition codes.
    2. Deleted Disposition Codes are not displayed to agents in the [Agent Console](../../../console/interacting-with-customers.md#end-interactions).

## The Agent Experience with Dispositions

Dispositions are displayed once agents end a conversation within the [Agent Console](../../../console/interacting-with-customers.md#end-interactions). No disposition code is selected by default when choosing a Disposition Set at the end of an interaction. Agents must choose a disposition code. If you have assigned more than one Disposition Set to a specific Queue or Agent Group, then corresponding agents see all sets and must select codes for all required sets.
<img src="../images/console-disposition-and-notes.png" alt="Agent Console Disposition Selection" title="Agent Console Disposition Selection" style="border: 1px solid gray; zoom:80%;"/>