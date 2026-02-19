# About Triggers

Triggers are an advanced automation feature in AI for Process that allows workflows to start automatically when specific events occur in connected applications. This enables true event-driven automation—workflows can run instantly without any manual action.

Triggers are configured in the Start node. You can use triggers alone or together with the Scheduler.

## How Triggers Work

* A trigger listens for real-time events from an integrated third-party app.
* When the event occurs (for example, a record is created, a status changes, or a threshold is reached), the workflow starts immediately.
* Event data, including metadata and attachments, is passed into the workflow for downstream processing.

## Prerequisites for Adding a Trigger

To use triggers in a workflow:

* Add the integration app to your workspace.
* Set up the required connection and authentication profile.
* Open your workflow in Flow Builder and access the **Start node**, where all triggers are configured.

For detailed configuration steps, see [Start Node – Automate Workflow Initiation](../workflow-builder/types-of-nodes/start-node.md).

<img src="../images/triggers.png" alt="Triggers" title="Add a trigger" style="border: 1px solid gray; zoom:80%;"/>

## Trigger Payload and Attachments

* Triggers can pass contextual data, metadata, and event-specific IDs.
* Attachments are provided as temporary URLs (valid for 24 hours). Only one attachment is supported at a time.
* Downstream nodes can reference trigger values as workflow variables.

## Best Practices

* Use clearly defined events to avoid unnecessary workflow runs.
* Regularly validate integration connections to keep triggers active. 
* Confirm payload fields before referencing them in conditions or expressions.
* Monitor trigger activity to quickly identify inactive or failing triggers and take corrective actions.

## Related Topics

* [Start Node – Automate Workflow Initiation](../workflow-builder/types-of-nodes/start-node.md)
* [Managing Nodes in a Workflow](../workflow-builder/manage-flow-nodes.md)
