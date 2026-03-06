# Introduction to Flows

## What Are Flows?

A _flow_ is a step-by-step process that helps you define the end-to-end customer experience at a contact center for each communication channel. Flows can be built using the Flow Designer.

## What Is the Flow Designer?

The Flow Designer is a tool that allows you to quickly set up both simple and complex customer experiences. It is a drag-and-drop work surface that enables you to link together blocks of actions called _nodes_. These nodes help you map the customer experience from the initial contact to the query allocation to an agent, an AI Agent, or both.

The Flow Designer also allows you to link Contact Center AI to an XO Platform AI Agent to handle the customer request, potentially resolve it, or otherwise transfer it to an agent.

## Why Use the Flow Designer?

There are a few benefits to using the Flow Designer:

* The Flow Designer provides visibility on how the use cases, waiting experience, the default, and the other contact flow modules work together.
* It allows you to design and view the end-to-end customer experience flow in one place.
* This open visual canvas lets you drag nodes, link them together, and create clear customer experience flows without coding.
* You can build experiences based on whether you want customers to interact with a bot or be transferred to an agent.
* It allows you to create waiting experiences for situations when customers wait for an agent to accept the conversation request.
* It lets you design default flows and define how the application behaves in regular scenarios.

## The Flows Live Board

You can find the Flows by navigating to **Automation AI**/**Contact Center AI**/**Agent AI** > **Flows & Channels** > **FLOWS**.  
<img src="../images/channels-and-flows-page.png" alt="Flows & Channels Page" title="Flows & Channels Page" style="border: 1px solid gray; zoom:80%;">

| **FIELD**          | **DESCRIPTION**                                                                                                                                                                                                                                                    |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Flow               | The name of the Start Flow.                                                                                                                                                                                                                                   |
| Actions (⋮)        | Displays the following icons:<br> - **View (Default Flows)**: Allows you to view the main configuration for the selected Start Flow entry (*Name* and *Description*).<br> - **Update**: Allows you to update the main configuration for the selected Start Flow entry (*Name*, *Description*, and *Channel*).<br> - **Delete**: Lets you remove the Start Flow entry. |
| Description        | Displays the description of the Start Flow entry.                                                                                                                                                                                                             |
| Channels           | Displays a list of channels attached to each flow and the flow types (call or chat).                                                                                                                                                                                |
| Status             | Displays the status ‘Published’ if the conversation has been published; otherwise, it displays ‘In Development.’                                                                                                                                                   |

## Flows Section Features

You can access the following features on the Flows Live Board:

* Use the **Search** option to enter keywords and search for a specific flow.
<img src="../images/search-field.png" alt="Arrange in Order" title="Arrange in Order" style="border: 1px solid gray; zoom:80%;">

* Sort entries by clicking the **Flow** header:
    * **↑** – sort alphabetically, in ascending order.
    * **↓** – sort alphabetically, in descending order.  
    <img src="../images/order.png" alt="Search Bar" title="Search Bar" style="border: 1px solid gray; zoom:80%;">

* Click any Flow to access the Flow Designer and configure the selected entry and to update the Name, Description, or Channel of an entry, click **Update**.  
<img src="../images/functions.png" alt="Functionalities" title="Functionalities" style="border: 1px solid gray; zoom:80%;">

* To delete a flow, click **Delete**.  

<img src="../images/delete-flow.png" alt="Delete Flow" title="Delete Flow" style="border: 1px solid gray; zoom:80%;">  

!!! Note

     You cannot restore deleted flow entries. Please proceed with caution.
   