# Adding IF-Else Conditions to Sequence Connections

The Platform allows you to use If-Else conditions to configure node connections. You may want to use such conditions when you want the conversation to follow specific paths depending on specific information.

For example, if you are working with a travel app and are setting up a _Book a Flight_ dialog task, you might want to provide a specific offer for group reservations. So, if during the conversation, the AI Agent detects a certain number of passengers, you may want to direct the conversation to one path or another, depending on that number. Say for instance, if the passenger count is 5 or less, present the standard offer; otherwise present a promotional offer.

This is a simple example; you can use the conditions feature to design complex conversation paths based on the criteria that suit your business.

This article, therefore, takes you to the options available within the Platform that allow you to configure sequence connection conditions.


## Types of Conditions

There are three types of available conditions:

* **If**– This condition is used to direct the conversation on a specific path, if specific criteria are met. The _If_ condition lets you configure Entity, Context and Intent criteria.
* **Else**– This condition allows you to set the node connection that will occur when the criteria configured within the _If_ condition are not met. The _Else_ condition only allows you to configure the next node to connect to.
* **Else If** – This condition allows you to configure another set of criteria to be met by the conversation path when the criteria in the initial _If_ condition are not met. The _If_ condition lets you configure Entity, Context and Intent criteria.

For example, in the travel app, you might want to present a group promotion if more than 5 passengers are traveling together, but if not, you may want to show a destination-specific package, based on the arrival city. If neither of these criteria are met, then you may want to continue with the standard flight booking procedure. Here is what such a use case could look like as node connection conditions:

* **IF** _PassengerCount_ is greater than _5_, connect to the Group _Promotion_ node, (So, if there are more than 5 passengers, show the Group Promotion.)
* **ELSE IF** ArrivalCity equals to _London_, connect to _London Destination Package_ node. (If there are not more than 5 passengers, but the arrival city is London, then show the London Destination Package.)
* **ELSE** connect to the next _Standard Flight Booking_ node. (If there are neither more than 5 passengers, nor is London the flight destination, then connect to the next node in the standard flight booking process.)


## Navigate to Sequence Connection Conditions

Sequence connection conditions are available within the node configuration panel of all node types, under the **Connection Properties** tab.

!!! note

    Connection properties are available **only for the bottommost node** of any sequence.

Below is an example from the Entity node type.

<img src="../images/node-conditions-connection-properties.png" alt="Connection Properties" title="Connection Properties" style="border:1px solid gray;zoom:70%;">


## Add _If / Else_ Connection Conditions

Under the **Connection Properties** section, click **Add IF or Add Else If**. You can configure the conditional expression for both of these condition types based on one of the following criteria:

!!! note

    In a conditional connection, if entity type, context type, or intent type is an array, then the operator “contains” is supported.

### Entity

This criterion allows you to compare an Entity node in the dialog with a specific value:

* Select the **Entity**. This is based on [Entity node type](../node-types/working-with-the-entity-node.md){:target="_blank"}.
* Select an **Operator** from the drop-down list: exists, does not exist, equal to, greater than or equal to, less than or equal to, not equal to, greater than, less than and contains.
* Type in **Value**. This field is not displayed if it _exists_ or _does not exist_ and is used as operators.  

You can enter a static value or dynamic variable, such as context, environment, or content. To use a variable, enter the variable type (content, context, or env) followed by a dot (.) and then select the variable from the pop-up list.  

* In the **Then go to** dropdown, choose the node to connect to if the condition is met.
* Click **Add Path Label** to enter a label to designate this conversation path.

If these parameters are met, then the condition is successful and the node connected under _Then go to_ is triggered.

For example, _PassengerCount (entity) greater than (operator) 5 (specified value)._

<img src="../images/node-conditions-entity-node-if.png" alt="Entity node - If condition" title="Entity node - If condition" style="border:1px solid gray;zoom:70%;">


### Context

The Context criterion allows you to compare a context object in the dialog task with a specific value. You can configure the following parameters:

* Select the **Context** object you want to use. Keep in mind to follow the required syntax – see the [Context Object](../../../intelligence/context-object.md){:target="_blank"} article for details.
* Select an **Operator** from the drop-down list: exists, does not exist, equal to, greater than or equal to, less than or equal to, not equal to, greater than, less than and contains.
* Type the number in the **Value** field. This field is not displayed if it _exists_ or _does not exist_ and is used as operators. You can enter a static value or dynamic variable, such as context, environment, or content. To use a variable, enter the variable type (content, context, or env) followed by a dot (.) and then select the variable from the pop-up list.
* In the **Then go to** dropdown, choose the node to connect to if the condition is met.
* Click **Add Path Label** to enter a label to designate this conversation path.

If these parameters are met, then the condition is successful and the node connected under _Then go to_ is triggered.

For example, if the _Passenger Type_ (context object – entity) _equals to_(operator) _Infant_(value), then trigger a node that manages the booking process that is specific to infant passengers.

<img src="../images/node-conditions-on-context.png" alt="Setting condition on context" title="Setting condition on context" style="border:1px solid gray;zoom:70%;">


#### Add And/Or Logic

You can configure multiple context-based if conditions using and/or logic. Within the same context-based if condition, can use either one or the other; not both. The and/or parameters work as follows:

* **AND**– When using _AND_ it means that you want both or all criteria to be met.
* **OR**– When using _OR_ it means that you want the condition to meet either one or another of the set criteria.

To add either an _AND_ or an _OR_ logical operator, click the corresponding button within the Context condition criterion.

<img src="../images/node-conditions-on-context-and-or-logic.png" alt="Add And/Or logic in Context based condition" title="Add And/Or logic in Context based condition" style="border:1px solid gray;zoom:70%;">

Once you do so, you will be able to add the next criterion that the condition should meet. You can add multiple AND/OR criteria by clicking +AND or +OR.

You can delete an existing AND/OR criterion by clicking the **“-”** sign on its left.

For example: If the _Passenger Type_(context object – entity) _equals to_(operator) _Infant_(value) OR if _Passenger Age_(context object – entity) _is less than or equal to_(operator) _5_(value), then trigger the node that manages the booking process for infants.

<img src="../images/node-conditions-on-context-and-or-logic-example.png" alt="Example - And/Or logic in Context based condition" title="Example - And/Or logic in Context based condition" style="border:1px solid gray;zoom:70%;">


### Intent

For Entity nodes, this criterion allows you to select a follow up intent that matches the user utterance, and based on which to select the next node to connect to.

The _context.FollowupIntents_ parameter is preselected and you can choose to connect to a specific node if a followup intent exists or if it contains a specific value. If any of these is met, then the condition is successful and the connecting node you set in _Then go to_, is triggered.

<img src="../images/node-conditions-follow-up-intent.png" alt="Select Follow-up intent" title="Select Follow-up intent" style="border:1px solid gray;zoom:70%;">
  

For message nodes, you can either choose context.followupintent as described above, or select to wait for user input. Under the Equals dropdown, you can select which user input the AI Agent should wait for before connecting to the node you set under _Then go to_.

<img src="../images/node-conditions-follow-up-intent-wait-for-user-input.png" alt="Follow-up intent - Wait for User Input" title="Follow-up intent - Wait for User Input" style="border:1px solid gray;zoom:70%;">


### Delete Conditions

If you no longer require a specific condition, you can hover over it and click the **bin icon** on the top right.

<img src="../images/node-conditions-delete-condition.png" alt="Delete condition" title="Delete condition" style="border:1px solid gray;zoom:70%;">


## Node Type Applicability

Depending on the node type you are working with, you may see some differences in functionality. Some of the features presented in this article will apply to all node types, while others will only apply to some. Here is what to keep in mind:

* For all node types except for the Message, and Agent Transfer node types, the only available Intent condition criterion is _context.FollowupIntents_ which lets you configure the connection based on the user utterance. The same applies to Primary Intent nodes.
* For Message Nodes, the Intent condition criterion provides two options: _context.followupintent_ and _User Input_, as explained above
* Primary Intent nodes do not allow connection conditions at all. You can only choose the next node to connect to. Intent nodes that follow other nodes within the Dialog Task do allow connection conditions, keeping in mind that the Intent criterion only allows you to set a follow up intent using the context object.
* Agent Transfer nodes provide no options to connect to a subsequent node, so no conditions can apply. This node means the end of the AI Agents process and the intervention of a human agent, which sets the _End of Dialog_ after the Agent Transfer node.