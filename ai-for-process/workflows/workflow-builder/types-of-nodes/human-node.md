# Human Node – Pause for Review and Approval

The Human Node introduces a human-in-the-loop capability within automation workflows. It allows workflows to pause and incorporate human judgment into automated processes. Designated users can review, approve, or provide input before the workflow continues, ensuring critical steps are validated, decisions are accurate, and compliance requirements are met. This capability is especially useful when certain decisions cannot be automated and require manual validation, oversight, or confirmation.

## Key Capabilities

* Customizable Input Requests – Send approval requests with fields tailored to collect the exact information or decision required from reviewers.
* Timeout Handling – Define how the workflow behaves if no response is received within the specified time (for example, *Terminate* or *Skip and Continue*).
* Error Handling – Configure what happens if the request fails to send or an unexpected error occurs during execution.
* Inbox Integration – All Human-in-the-Loop (HITL) approval requests are routed automatically to the reviewers’ Inbox (Personal or Group tab) for action and tracking. [Learn more](../../inbox.md).

## Common Use Cases

* Approval Workflows – Route requests for manager approval (e.g., expenses, leave, procurement).
* Quality Assurance – Insert a human checkpoint to validate AI-generated or automated outputs before publishing.
* Compliance Checks – Require manual review for sensitive or regulated steps.
* Exception Handling – Escalate unusual or edge cases to a reviewer for decision-making.

## How it Works

The Human Node serves as a flexible pause point within an automated workflow, enabling seamless integration of human decisions. When the workflow reaches this node, it sends an approval request to the assigned user’s Inbox.

The execution behavior depends on the workflow’s endpoint configuration:

* In Sync mode,  the workflow starts, sends the request to the human, waits for the human’s input, and generates the output — all within the timeout set at the endpoint.
* In Async mode,  the workflow sends an immediate acknowledgement and continues execution. The Human node automatically delivers the approval request to the configured reviewer through the platform’s Inbox. The workflow continues once the reviewer responds or the configured timeout is reached.

Built-in mechanisms handle timeouts, duplicate or late responses, and delivery failures to ensure the workflow progresses as configured. This provides visibility and traceability into decisions through the Debug Panel without disrupting the overall flow.

In this document, you’ll learn how to add a Human node to your canvas, configure approval requests for reviewers, define input fields, and customize timeout and error-handling behavior within the workflow.

## Add and Configure a Human Node

The Human node introduces a manual review checkpoint within a workflow. When the workflow reaches this node, it sends an approval request to the designated reviewers and then resumes execution based on the response/timeout/failure condition.

**Before you begin**

Open your workflow and add the Human node to the canvas. [Learn more about adding nodes](../manage-flow-nodes.md#add-nodes).

**Steps to configure a Human node**:

Click the Human node to open its properties dialog box. You can rename the node (for example, ManagerApproval, QualityCheck) or add a description to provide context. 

### 1. Select Request Destination

The **Send & wait for response** field specifies where the request will be sent for human review.

* Select **Account Inbox** as the destination.
* Choose one of the following options:
    * **Everyone:** Send the approval request to all workspace members.
    * **Specific Users:** Restrict the request to selected users. Enter their email addresses in the **Select User (email)** field. Only members within the current workspace are suggested.
* When the flow execution reaches the Human node, an approval request is automatically sent to the reviewer’s **Inbox**.

For details on how to view, assign, and act on approval requests, see **[Inbox](../../inbox.md)**. 

<img src="../images/workflow_everyone.png" alt="Human Node" title="Human Node" style="border: 1px solid gray; zoom:60%;">

### 2. Configure the Review Note

Define how the request will appear to the reviewer:

* **Subject line** - Email subject or message title.
* **Message body** - Instructions or context for the reviewer. The context is resolved at run-time.

<img src="../images/workflow_reviewnote.png" alt="Human Node" title="Human Node" style="border: 1px solid gray; zoom:60%;">

### 3. Configure Timeout Behavior

In the Wait for response field, choose how long the node should wait for a response:

* **No timeout** – Workflow waits indefinitely until the reviewer responds.
* **Set timeout** – Default 120 seconds (you can customize the value and unit: seconds, minutes, hours, days).

<img src="../images/workflow_wait for response.png" alt="Human Node" title="Human Node" style="border: 1px solid gray; zoom:60%;">

### 4. Define Node Outcomes

In the **Add Connection** tab, specify how the workflow proceeds after the review step ends.

The Human node supports multiple outcome paths that determine how the workflow proceeds after human input. These paths can now be configured based on reviewer decisions or system conditions.

**Outcome Paths and Behavior**


<table>
  <tr>
   <td><strong>Path</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Trigger Condition</strong>
   </td>
  </tr>
  <tr>
   <td><strong>On Approval</strong>
   </td>
   <td>Workflow continues to the next configured node when the reviewer accepts or approves the request.
<p>
In the <strong>On Approve</strong> field, select the next node in the flow.
   </td>
   <td>The reviewer selects “Accept” or equivalent approval value.
   </td>
  </tr>
  <tr>
   <td><strong>On Decline</strong>
   </td>
   <td>Workflow follows a defined rejection or alternate path when the reviewer declines or rejects the request.
<p>
In the <strong>On Decline</strong> field, select the next node in the flow.
   </td>
   <td>The reviewer selects “Decline” or equivalent rejection value.
   </td>
  </tr>
  <tr>
   <td><strong>On Timeout</strong>
   </td>
   <td>Workflow diverts to the configured timeout path if no response is received within the defined wait period.
<p>
Select one of the options:
<p>
<strong>Terminate flow</strong> (default): Flow ends via the attached End node.
<strong>Skip</strong>: Continue with <code>null/NA</code> output and move to the next configured node.
   </td>
   <td>A timeout occurs before a human response.
   </td>
  </tr>
  <tr>
   <td><strong>On Failure</strong>
   </td>
   <td>Workflow transitions to a distinct error-handling path when an error occurs (for example, a network issue or a delivery failure).
<p>
Select a fallback node to continue execution.
Supports parallel branching.
   </td>
   <td>Request delivery or system error.
   </td>
  </tr>
</table>

Once configured, the Human node pauses workflow execution at the defined step, sends the approval request to the reviewer’s Inbox, and resumes automatically based on the reviewer’s decision or timeout configuration. [Learn more](../../inbox.md)

## **Testing the Flow with Inbox Approvals**

Once you configure a Human node in a workflow, you can test how approval requests appear and behave in the Inbox during runtime. This validation step ensures that both the workflow logic and Human-in-the-Loop (HITL) interactions work as expected.

**Step 1: Run the Flow**

1. In the Flow Builder, click **Run Flow** to start execution.
2. The **Debug Panel** opens automatically and shows each node’s runtime behavior.
3. When the workflow reaches a Human node, an approval request is automatically generated and sent to the configured reviewers’ Inbox:
    * **Personal tab** – For requests assigned to yourself.
    * **Group tab** – For requests assigned to a set of users or the whole workspace. If the request is sent to a group, users must first assign it to themselves from the **Group** tab before taking action to approve or reject.

[Learn more about Inbox.](../../inbox.md)

**Step 2: Review and Act on the Request**

1. In the platform’s top navigation bar, open the **Inbox**.
2. Locate the new request under the **Pending for Approval** filter.
3. Open the request to view its **subject**, **description**, and **message**.
4. Review the provided details, then click **Approve** or **Decline**. You can optionally add comments before submitting your decision.

Once submitted:

* The request is removed from the pending list.
* Its status updates automatically in both the **Inbox** and **Workflow Monitor**.
* If the request was part of a group, it is marked as completed for all group members. 

**Step 3: Verify Results in Workflow Monitor**

1. Open **Workflow Monitor** from the left navigation menu.
2. Locate your test workflow run.
3. Click the run entry to open detailed execution logs.
4. Confirm that:
    * The Human node shows the correct approval status (Approved, Declined, or Expired).
    * The flow continues along the expected path (for example, Success, Timeout, or Failure).

This confirms that the Human node and Inbox integration are configured correctly.

**Step 4: Validate Reviewer Responses in Context Variables**

When the reviewer responds, the Human node captures the input and makes it available for downstream nodes in the workflow.

You can access this data using context variables:

 `{{context.steps.<NodeName>.output}}`
`

## Notes

* **Inside Loops** – If the Human node is inside a loop, the loop will not move to the next iteration until a human response is received. This ensures each cycle gets explicit approval/input.
* **In Parallel Branches** – When used in parallel branches, the branch merge will wait for the Human node to complete. This prevents the workflow from merging prematurely.