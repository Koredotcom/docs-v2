# Configure Evaluators

After importing sessions into Evaluation Studio, you can apply pre-built evaluators to measure your AI agent’s behavior and performance. Evaluations can be run at both the session and trace levels, helping you analyze goal completion, decision quality, and adherence to ideal workflows.

**Steps to add evaluators:**

1. On the **Imported Sessions** page, click **+ Evaluators**.
<img src="../../agentic-evaluation/images/add_evaluators.png" alt="Add evaluators" title="Add evaluators" style="border: 1px solid gray; zoom:80%;"/>

2. Select the desired **session** or **trace-level** evaluators.
<img src="../../agentic-evaluation/images/evaluators_list.png" alt="Create project" title="Create project" style="border: 1px solid gray; zoom:80%;"/>

3. Configure the evaluator settings as needed (such as selecting the model and adjusting model configurations) and click **Save**.
<img src="../../agentic-evaluation/images/evaluator_config.png" alt="Evaluator configuration" title="Evaluator configuration" style="border: 1px solid gray; zoom:80%;"/>

4. Click **Run Evaluation** to start the evaluation process.

## Types of Evaluators

Agentic Evaluation uses two key evaluator types—Session Evaluators and Trace Evaluators—to provide insights at both the overall conversation level and individual decision points. 

### Session Evaluators

These evaluators assess the overall quality of a full session—a complete conversation between the user and the Agentic app, consisting of multiple traces.

Session evaluators include:

* **Final Goal Check**: Determines whether the agent successfully achieved the intended outcome by the end of the session.
* **Message Tonality**: Evaluates whether the conversation maintained an appropriate and consistent tone (such as professional, friendly).
* **Topic Adherence**: Assesses if the agent stayed within the defined knowledge boundaries and relevant topics, avoiding unrelated areas.

### Trace Evaluators

Trace evaluators operate at a more granular level, analyzing decisions made within individual traces of a session.

A trace represents a single interaction cycle: one user query and the agentic app’s response to the user. Trace evaluators focus on the accuracy and quality of specific actions taken within that interaction.

Trace evaluators include:

* **Agent Call Accuracy**: Evaluates whether the supervisor/orchestrator calls the correct agents based on the user’s query.
* **Tool Call Accuracy**: Checks if the agent invokes the correct tools based on the context and intent.

!!! note

    Since traces are parts of sessions, you can add trace-level evaluators from the Sessions tab. However, session-level evaluators cannot be added from the Traces tab.
