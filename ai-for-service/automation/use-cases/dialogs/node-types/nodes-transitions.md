# Nodes Overview

In order to create Dialog Tasks, the [Dialog Builder](../using-the-dialog-builder-tool.md){:target="_blank"} uses nodes and transitions to make the necessary connections between the components of your conversation. In this article, we will overview the available node types, transitions, as well as context object information.


## How do Nodes and Transitions Work?

Nodes are a user-friendly approach to building conversations because they allow both conversation designers and AI Agent developers to conceptualize and visualize the entire flow of a conversation. Placed on a canvas within sequences, nodes help create a kind of conversation map that facilitates understanding for both the humans and the AI Agent being developed. 

Transitions add logic to the map created by the nodes and sequences. This way, the conversation can flow according to particular conditions, workflows, or processes.

Sequences nodes and transitions work together, in context, to facilitate the creation of AI Agent that can automate a wide variety of tasks without taking away from the user or customer experience.


## Node Types

You can add the following nodes to dialog tasks, based on your requirements:

### Agent Node

The Agent Node lets you leverage LLMs and generative AI with Tool calling to build AI-powered, sophisticated, and versatile AI Agents capable of handling complex tasks and providing dynamic, data-driven interactions. With its streamlined entity collection, contextual intelligence, multilingual support, and integration with external systems, the node empowers platform users to deliver exceptional human-like conversational experiences to their employees and customers. For more information, refer to [Agent Node](../../../agent-node/working-with-agent-node.md){:target="_blank"}.


### User Intent Node

The user intent to be identified by the Platform is based on the user utterance. Every dialog has one root intent with any number of sub-intents. For more information, refer to [Working with the User Intent Node](working-with-the-user-intent-node.md){:target="_blank"}.


### Dialog Task Node

The Dialog Task Node allows you to start a new dialog task within an existing one, if the user intent changes. Read more about the [Dialog Task Node](working-with-the-dialog-node.md){:target="_blank"}.


### Entity Node

Entity nodes detect the entities within the user utterance, or ask the user for input when an entity is required. The user entity in the utterance. The platform supports 15+ entity types. Developers can define the prompt message to be shown, and this message can be channel-specific. For example, an amount, a flight account number, time, or zip code. Entity nodes prompt the user for an input. For more information, refer to [Working with the Entity Node](working-with-the-entity-node.md){:target="_blank"}.


### Form Node

Form nodes allow you to integrate Digital Forms with Dialog Task by presenting a UI Form in the dialog task and making the form available for end-users on specific communication channels. This node is useful when you want to make entity collection more efficient by displaying a form rather than asking users for one entity at a time. [Learn more about the Form node.](working-with-the-form-node.md){:target="_blank"}.


### Confirmation Node

Displays a query message from the app to the user, and then waits for a user response. Conditions are defined to continue processing the dialog task flow based on the user input. For more information, refer to [Working with the Confirmation Node](working-with-the-confirmation-nodes.md){:target="_blank"}.


### Message (or Bot Response) Node

Displays a message from the app to a user, such as, _Is there anything else I can help you with?_ For more information, refer to [Working with the Message Node](working-with-the-message-nodes.md){:target="_blank"}.

While any dialog starts at the Intent Node, it is advisable to end it with a Message Node to give a sense of closure to the user as well as to the app internally.


### Service Node

Allows you to call an API. You can also use cURL to build the API request. For more information, refer to [Working with the Service Node](working-with-the-service-node.md){:target="_blank"}.


### Script Node

The Script Node is used to write custom Javascript JS code in the dialog task. For more information, refer to [Working with the Script Node](working-with-the-script-node.md){:target="_blank"}.


### Logic Node

The Logic Node allows developers to use context variables and define complex transition conditions within Bot Action nodes and Dialog Tasks overall. For more details, please refer to  [Working with the Logic Node](working-with-the-logic-node.md){:target="_blank"}.


### WebHook Node

This node is used for server-side validation, executing business logic, or making backend server API calls. To use this node, you must have installed the SDK Tool Kit. For more information, refer to [Working with the WebHook Node](working-with-the-web-hook-node.md){:target="_blank"}.


### Process Node

Process nodes allow you to connect a Dialog Task to a Process App that you have built within the Kore.ai XO Platform. [Learn more about Process Nodes](process-nodes.md){:target="_blank"}.


### Agent Transfer Node

This node type is used to transfer communication from the app to a live agent. This is usually the last node for a dialog task. For more information, refer to [Working with the Agent Transfer Node](working-with-the-agent-transfer-node.md){:target="_blank"}.


## Component Transitions

A Dialog Task builds a task flow with different nodes connected by transitions. Dialog Task transitions depend on conditions that use business-defined evaluation criteria to take the next steps within the Dialog Task flow.

In the Kore.ai XO Platform, you define _If-then-else_ conditions using a set of predefined operators. For each component, you must specify a fallback condition. How you represent a transition depends on the component type you are defining, and component type-specific transitions are described in the documentation topic for each component type.

You can use the following operators to write conditions:

* Exists
* Does not exist
* Equals to
* Greater than equals to
* Less than equals to
* Not equals to
* Greater than
* Less than
* Contains

Learn more about [setting up node connections](../node-connections/nodes-conditions.md){:target="_blank"}.


### Environment Variables

Environment Variables are global, reusable components which can be used in multiple places to define the app configuration. Every Environment Variable is a key-value pair. The Variable Keys can be used at various places in the app configuration. The platform will resolve/replace the Variable Keys with Variables Values during the conversation. Some of the typical use cases where a developer can use environment variables are:

* To manage the app across environments having different endpoint URLs. The app can be exported and imported based on the environment, and the infrastructure team will need to modify only the variable configuration file.
* To manage **Conditions** in the **Dialog Node** Transitions. Both the left-hand side and the right-hand side of the transition condition use Environment Variables.  
  
    !!! Note
    
        You must enter dynamic variables without braces. For example, Environment variables as `env.value`, Content variables as `content.value`, and Context variable as `context.entities.entityname`. For more information, see the [Adding IF-Else Conditions to Node Connections](../node-connections/nodes-conditions.md#entity) article.

* To define and manage the bot response that is repeated within the app configuration as variables.
* Authorization Token
* Channel-related tokens and URLs

