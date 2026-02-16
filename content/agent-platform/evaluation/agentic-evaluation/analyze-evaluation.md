# Analyzing Your Evaluation

After running evaluations, you can explore results through an intuitive interface designed to reveal how your agentic app performed at both session and trace levels. This helps with targeted debugging, quality assurance, and iterative improvement based on real execution behavior.

**What You’ll See**

* **Summary scores at a glance**: Easily scan evaluator columns to compare scores across sessions.
* **Drill-down views**: Click into any session or trace to view:
    * A step-by-step evaluation breakdown
    * Scores at the Supervisor, Agent, and Tool levels
    * Inputs/outputs that were evaluated
    * Explanations behind each score to clarify the evaluator’s logic

### Understanding the Session Table

Each imported session appears as a row in the table with the following key information:

* **Session metadata** – Session ID, start time, duration, and number of traces.
* **Evaluator-specific columns** – Each evaluator adds a column showing a summary score for that session or trace. Scores can be numeric (for example, 0–1), categorical (for example, Pass/Fail), or custom, depending on the evaluator type.

Use the Sessions tab to view overall scores for each session, including averages of trace-level evaluators. Use the Traces tab to see detailed scores for each step in a session, reflecting trace-level evaluation.  

<img src="../../agentic-evaluation/images/session_columns.png" alt="Session table" title="Session table" style="border: 1px solid gray; zoom:80%;">  


**Steps to analyze your evaluation:**

1. On the **Sessions** tab:
    1. Click on any session-level evaluator score (for example, *Topic adherence*, *Message tonality*, or *Final goal check*). A detailed view opens, showing how the score was calculated. See [Session View Overview](./analyze-evaluation.md#session-view-overview).
    2. Alternatively, click any session ID from the list of sessions to open a filtered view in the **Traces** tab, showing all traces for that session.
2. On the **Traces** tab, click any trace-level evaluator score (for example, *Tool Call Accuracy*, *Agent Call Accuracy*). A detailed tree view opens, showing the detailed reasoning steps and associated scores. See [Trace View Overview](./analyze-evaluation.md#trace-view-overview).


### Session View Overview

Clicking on a session score opens the **Session Details View**, which contains two tabs:

* **Verdict**: Displays the evaluation score (for example, pass/fail for message tonality) along with a written explanation for that score.
* **Transcript**: Shows the full conversation for that session.

<img src="../../agentic-evaluation/images/click_session_evaluator_score.png" alt="Session view" title="Session view" style="border: 1px solid gray; zoom:80%;">

### Trace View Overview

Clicking on a trace opens the **Trace Details View**, which includes two panels:

**Left Panel**:

* Displays the trace tree visualization.
* Shows the reasoning structure of the agentic app across three levels: Supervisor, Agent, and Tool.
* Each node is clickable, and selecting one node updates the evaluation details on the right panel with its corresponding evaluators listed.

**Right Panel:**

* **Evaluators tab:** Displays all the evaluators applied at the selected node level (Supervisor, Agent) with the evaluator results.
* **Input/Output tab:** Shows relevant inputs and outputs for the selected node.

<img src="../../agentic-evaluation/images/click_trace_evaluator_score.png" alt="Trace view" title="Trace view" style="border: 1px solid gray; zoom:80%;">

The trace tree on the left displays the hierarchical structure of the agentic system, starting with the root level at the top, followed by drill-down levels that include the supervisor, agents, and tools.

**Root level (Trace root)**:

* Represents the entire trace
* Aggregates all evaluators applied to the trace
* Clicking the root node (For example, *Trace*) displays all attached evaluators like *Agent Call Accuracy* and *Tool Call Accuracy* in the right panel

<img src="../../agentic-evaluation/images/root_level.png" alt="Root level" title="Root level" style="border: 1px solid gray; zoom:80%;">


**Supervisor Level:**

* Contains evaluations that assess whether the supervisor called the correct agents
* Clicking a supervisor node shows only supervisor-specific evaluators (For example, *Agent Call Accuracy*)

<img src="../../agentic-evaluation/images/supervisor_level.png" alt="Supervisor level" title="Supervisor level" style="border: 1px solid gray; zoom:80%;">

**Agent Level:**

* Represents actions and decisions made by an Agent
* Displays only agent-specific evaluators (For example, *Tool Call Accuracy*)
* Clicking an agent node reveals tool usage and corresponding evaluation results for each tool called

<img src="../../agentic-evaluation/images/agent_level.png" alt="Agent level" title="Agent level" style="border: 1px solid gray; zoom:80%;">


**Tool Level:**

* Represents individual tool calls made by the agent
* Clicking a tool node opens the **Tool Call Results** view, which displays the corresponding evaluation details, including the:

    * Evaluation score for that specific tool call
    * Evaluator explanations outlining the reasoning behind the score
    * Tool’s input and output

<img src="../../agentic-evaluation/images/tool_level.png" alt="Tool level" title="Tool level" style="border: 1px solid gray; zoom:80%;">


## Error Scenarios

During evaluation, you may encounter certain issues that affect scoring or analysis. These are surfaced clearly in the interface to help you diagnose and resolve problems quickly.

**Model errors (401)**

The following model-related errors can occur during evaluation:

* **Token limit exceeded** – The input to the model exceeded its maximum token limit.
* **Rate limit** – The evaluation made too many requests in a short time, exceeding API limits.
* **Context length exceeded** – The evaluation payload was too large for the model’s available context window.
* **Malformed JSON in model output** – The model returned a response that couldn’t be parsed correctly (for example, missing brackets or invalid formatting).

**Missing tool or agent calls**

If a trace does not contain any tool or agent calls, the corresponding evaluator cell will be highlighted in yellow with a message like ‘No tool calls found’ or ‘No agent calls found’.  
For example, a user says, “Hi! How are you?”, and the agent responds with a small talk reply and does not trigger any tool or agent calls. Since no tool or agent call is made, the evaluator cell displays a warning - 'No tool calls found'.

<img src="../../agentic-evaluation/images/missing_tool_errors.png" alt="Missing tool errors" title="Missing tool errors" style="border: 1px solid gray; zoom:80%;">

## Understanding Evaluation Scores

Evaluation scores are assigned based on how well the agentic app performed according to specific criteria. When analyzing your evaluation results, understanding what constitutes a 'good' or 'bad' score helps you pinpoint areas for improvement, making your agentic app more effective.

Evaluations can fail for various reasons, leading to low or failing scores. Some common causes for failure include:

* **Incorrect tool or agent selection**: Selecting the wrong tool or agent for the user’s query results in a low score.
* **Missing or incorrect parameters**: Providing missing or incorrect parameters when calling a tool (for example, an incomplete or wrong location for weather data) will result in a low score.
* **Failure to meet the session's overall goal**: If the agent doesn’t fulfill the user's objective by the end of the session, it results in a fail score at the session level.

### How Session Evaluators Are Scored

Session evaluators assess the overall quality of a full session, which includes multiple interactions (traces). These evaluators focus on broader aspects of the session, providing insight into how well the conversation as a whole was handled.

* **Final Goal Check**: Did the agent achieve the intended goal by the end of the session?
    * **Pass**: The goal is met.
    * **Fail**: The goal is not met. 

* **Message Tonality**: Was the conversation tone appropriate and consistent?
    * **Pass**: The tone is professional, friendly, or appropriate.
    * **Fail**: The tone is inconsistent or inappropriate. 

* **Topic Adherence**: Did the agent stick to the defined knowledge boundaries and relevant topics?
    * **Pass**: The agent stays on-topic.
    * **Fail**: The agent goes off-topic. 

<img src="../../agentic-evaluation/images/pass_fail_scoring.png" alt="Session evaluator scoring" title="Session evaluator scoring" style="border: 1px solid gray; zoom:80%;">

### How Trace Evaluators Are Scored

Trace evaluators operate at a more granular level, evaluating decisions and actions within individual traces (a single user query and the corresponding agent response). These evaluators focus on the accuracy and quality of specific actions taken during each interaction cycle.

* **Agent Call Accuracy**: Did the supervisor choose the correct agent?
    * **Good Score (1)**: The correct agent is selected.
    * **Bad Score (0)**: The wrong agent is selected. 

* **Tool Call Accuracy**: Did the agent call the right tool with the correct parameters?
    * **Good Score (1)**: The right tool is called with the correct parameters. 
For example, if the user asks for the weather in Chicago, the agent should use the weather tool and provide Chicago as the location. This results in a full score because both the tool and the parameters are correct.
    * **Partial Score (0.5)**: The right tool is used, but the parameters are incorrect. 
For example, if the user asks for the weather in Chicago, the agent calls the weather tool and provides "New York" as the location instead of "Chicago". It’s still the correct tool, but the parameter is wrong. This results in a partial score since the tool is correct, but the request isn’t fulfilled accurately.
    * **Bad Score (0)**: The agent calls the wrong tool and also provides incorrect or missing parameters. 
If the user asks for the weather in Chicago, but the agent calls a calendar tool (wrong tool) and passes an unrelated or empty parameter (wrong parameter), it gets a score of 0 because both the tool and parameters are wrong.

<img src="../../agentic-evaluation/images/numerical_scoring.png" alt="Trace evaluator scoring" title="Trace evaluator scoring" style="border: 1px solid gray; zoom:80%;">
