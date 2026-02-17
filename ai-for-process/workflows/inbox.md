# Inbox – Review Human-in-the-Loop Workflow Requests

The Inbox is a dedicated tab in the platform for managing Human-in-the-Loop (HITL) approval requests. It provides a centralized, easy-to-use interface that lets users view, process, and track all requests that require human decision-making during workflow execution.

When a workflow reaches a Human node, an approval request automatically appears in the configured reviewers’ Inbox — either in their Personal tab or in the shared Group tab — depending on how the node is configured.

**Key Highlights**

* Centralized review experience to manage all pending and processed approval requests in one place.
* Real-time status updates that reflect reviewer actions in real time.
* Support for both individual and shared (group-based) review workflows.
* Advanced filtering and search options to quickly locate requests by requester, status, or keyword.
* Integrated workflow linkage with direct visibility into progress in Workflow Monitor. 

## Accessing the Inbox

1. Log in to your AI for Process account.
2. In the top navigation bar, select **Inbox**.
3. The Inbox shows approval requests in the following tabs:

    * **Personal** – Displays approval requests assigned to you.
    * **Group** – Displays requests assigned to a team or group. You can assign a request to yourself to take ownership.

4. You can filter requests by Status: **Pending for Approval** (default), **Approved**, **Declined**, and **Expired**.
<img src="../workflow-builder/types-of-nodes/images/inbox.png" alt="Inbox" title="Inbox" style="border: 1px solid gray; zoom:60%;">


## Respond to Requests

1. On the **Inbox** tab, open the **Personal** tab.
2. Select a request to open its detailed view. You see:
    1. **Subject** – Title or summary of the approval request.
    2. **Description** – Additional details or context about the workflow step.
    3. **Message** – Instructions or notes provided by the workflow creator.
3. Click **Approve** or **Decline** to submit your decision.
4. *(Optional)* Add comments in the **Response** field to explain your choice or provide feedback.

After you submit your decision, the request is automatically removed from the pending list. Its status updates in real time in both the **Inbox** and **Workflow Monitor**.

## View Completed Requests

You can review previously processed requests to verify the outcome of your past actions.

1. On the Personal tab, use the **Status** filter to select **Approved**, **Declined**, or **Expired**.
2. Each completed request displays the final status, the user who took action, and the timestamp.
3. Click any completed request to view its details and verify the outcome of your previous actions.

## Handle Group Requests

Requests assigned to a group appear in the Group tab. Any member of the group can view these requests, but only one reviewer can act on each item.

To respond to a group request:

1. Open the **Group** tab and locate the pending request.
2. Assign the request to yourself. Once claimed, the request moves to your **Personal** tab.
<img src="../workflow-builder/types-of-nodes/images/inbox_assign.png" alt="Inbox" title="Inbox" style="border: 1px solid gray; zoom:60%;">
3. Open the request from your Personal tab and review its details.
4. Click **Approve** or **Decline**, and optionally add comments to explain your decision.

After you take action, the request is removed from the Unassigned list for all group members. Its status updates automatically in both the **Inbox** and **Workflow Monitor**, and it can be viewed later under the appropriate status filter (such as *Expired*) in either the **Group** or **Personal** tab, depending on your configuration.
