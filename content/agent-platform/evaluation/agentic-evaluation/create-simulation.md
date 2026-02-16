# Create Simulations

In Agentic Evaluation, simulations enable automated creation of test sessions so you can evaluate your agent before your agentic app goes live. Using simulations, you can test different scenarios with various personas and see how your agent performs across contexts and input types—without relying on real user data.

Simulated evaluations help you:

* Validate agent responses before go-live.
* Benchmark results against desired outputs.
* Iterate on logic, tone, or context handling.
* Improve overall agent reliability and trustworthiness.

Simulation support automates pre-production testing by combining Personas and Test Scenarios into realistic evaluation sessions. Each simulation runs the agent through multiple mock conversations, helping you analyze performance, evaluate consistency, and optimize dialogue quality.

## How it Works

Simulations create realistic testing conditions by linking three key components: **Personas**, **Test Scenarios**, and **Simulated Evaluations**.

1. **[Create Personas](../agentic-evaluation/create-simulation.md#create-personas)**: Define user profiles that represent different end-user types. Each persona includes configurable traits such as demographics, tone, emotion, urgency, and intent patterns. Personas help simulate how varied users might interact with your agent.

2. **[Define Test Scenarios](../agentic-evaluation/create-simulation.md#create-test-scenarios)**: Create or reuse test cases that represent typical or edge user queries. Each scenario defines the context and expected agent behavior for a given situation.

3. **[Run Simulations](../agentic-evaluation/create-simulation.md#run-simulations)**: Combine selected personas and test scenarios to generate simulated sessions. The system automatically generates queries and feeds them to the agent to simulate realistic mock conversations.

4. **[Use Simulated Data for Evaluation](../agentic-evaluation/create-simulation.md#use-simulated-data-for-evaluation)**: Once simulations are complete, you can import simulated sessions into Evaluation Studio—just like production data. You can then run evaluators to assess performance, tone, adherence, and tool accuracy.

## Create Personas

Personas represent different types of users who interact with your agent. Each persona simulates distinct communication styles, goals, and behavior patterns. During simulation runs, they help test how your agent performs with varied user contexts and tones.

To create a new persona:

1. Go to **Evaluation Studio** → **Agentic Evaluation** → **Personas**.
2. Click **Create Persona**.
3. On the Personas page, enter a **Persona name** and **Description**.
4. (Optional) Add additional persona attributes such as role, gender, language, emotion, and patience or urgency levels.
5. Click **Save**.

You can create multiple personas to represent different user types. Each persona can later be used in one or more simulations.

!!! tip

    Use the **Additional Information** field to configure specific behaviors for the persona. This allows you to define & control over how the persona interacts or responds.

 
<img src="../../agentic-evaluation/images/create_persona.png" alt="create persona" title="create persona" style="border: 1px solid gray; zoom:60%;">

After creating personas, you can edit, duplicate, or delete them anytime from the Personas page. When a persona is deleted, any active simulations using it automatically switch to the default Unidentified Persona.


!!! note

    Personas are reusable across multiple simulations within the same Agentic Evaluation project.


## Create Test Scenarios

Test scenarios define the context, user intent, and expected outcome for a simulated interaction. Each scenario captures the situation, input details, and desired response to help evaluate how the agent performs under different conditions.

You can create test scenarios in two ways:

* **[Write test scenarios](../agentic-evaluation/create-simulation.md#write-test-scenarios)** – Manually define details such as the user query, context, and expected output.
* **[Generate test scenarios](../agentic-evaluation/create-simulation.md#generate-test-scenarios)** – Automatically generate multiple scenarios using AI, based on your agent’s configured capabilities.

<img src="../../agentic-evaluation/images/test_scenarios_page.png" alt="test scenario" title="test scenario" style="border: 1px solid gray; zoom:60%;">

### Write Test Scenarios

To manually create a test scenario:

1. Go to **Evaluation Studio → Agentic Evaluation → Test Scenarios**.
2. Click **Write test scenario**.
3. Enter the following details:
    * Agentic capability – The specific skill or function being tested.
    * Initial user query – The user’s opening message or intent.
    * Information provided to persona – Any context or background knowledge for the persona.
    * End condition – Define the point where the conversation should stop. Enter a condition in plain text that signals when the simulation should end.
        * The simulation stops automatically if the agent ends the conversation early.
        * If the agent does not reach the end condition, it stops when it reaches *Max turns*.
    * Max turns – Set a limit for how long the simulated conversation should run.
4. Click **Save**.

After creation, you can edit, duplicate, or delete scenarios anytime from the Test Scenarios page.

!!! note

    Make sure you provide any specific test scenario details required for the task, such as account numbers, external links, ticket IDs, or user IDs. The simulation agent requires these details to supply the necessary context to the Agentic App so the multi-turn conversation can complete successfully.

<img src="../../agentic-evaluation/images/write_test_scenario.png" alt="write test scenario" title="write test scenario" style="border: 1px solid gray; zoom:60%;">

### Generate Test Scenarios

To automatically generate test scenarios:

1. On the **Test Scenarios** page, click **Generate test scenarios**.
2. Specify the following details:
    * Model and model parameters to be used for generation.
    * Agentic capabilities to cover (for example, *Transfer balance*).
    * Number of test scenarios per capability (maximum: 15).
    * Information provided to the persona, such as background or knowledge context.
3. Click **Generate**.

!!! note

    Provide any required details - such as account numbers, external links, ticket IDs, or user IDs - when generating scenarios. These details are appended to all generated scenarios and are used only if needed by the simulation agent to successfully complete the multi-turn conversation.

<img src="../../agentic-evaluation/images/generate_test_scenario.png" alt="generate test scenario" title="generate test scenario" style="border: 1px solid gray; zoom:60%;">

The system automatically generates multiple varied test queries for each capability, including both normal and negative cases.

After creation, you can edit, duplicate, or delete scenarios anytime from the Test Scenarios page.

!!! note 

    Manual and AI-generated scenarios can coexist and are reusable across multiple simulations within the Agentic Project.

<img src="../../agentic-evaluation/images/generate_test_scenario.png" alt="generate test scenario" title="generate test scenario" style="border: 1px solid gray; zoom:60%;">

!!! example

    * **Scenario name:** Refund flow for impatient customer
    * **Agentic capability:** Handle refund requests
    * **Information provided to Persona**: Order ID: 123876452
    * **User query:** “I canceled my order yesterday — why isn’t my refund showing up?”
    * **End condition:** Agent confirms refund initiation

## Run Simulations

After creating personas and test scenarios, you can run a simulation to generate realistic interaction sessions that test how your agent performs across different user types and situations. Simulations produce mock conversations (simulation sessions) that help you evaluate agent responses, measure consistency, track goal completion, and identify areas for improvement. The outputs of these simulations can later be used with Evaluators for automated scoring and performance benchmarking.

!!! note

    The Simulation module becomes active only when at least one *persona* and one *test scenario* exist in your workspace.

To create and run a simulation:

1. Go to **Evaluation Studio → Agentic Evaluation → Simulations**.
2. Click **Create Simulation**.
3. Specify the following details:
    1. Name for your simulation.
    2. Model and model parameters to be used for the simulation.
    3. Agentic capabilities to filter available test scenarios.
    4. One or more personas and test scenarios.
4. Run the Simulation.

The system executes mock sessions for all generated test queries. Once complete, you can monitor progress in real time from the **Simulation Runs** panel.

<img src="../../agentic-evaluation/images/create_simulation.png" alt="create simulation" title="create simulation" style="border: 1px solid gray; zoom:60%;">


**What happens during a simulation**

* The system combines each *Persona × Test Scenario* to generate multiple test queries.
* Each query includes the *first user input* and *context/knowledge* for follow-up interactions.
* Queries are passed to the agent to create mock conversations (each conversation representing one simulation session).
* Outputs are recorded, including agent responses, scenario and persona information, and metadata.

<img src="../../agentic-evaluation/images/simulation_complete.png" alt="simulation" title="simulation" style="border: 1px solid gray; zoom:60%;">

**After the simulation run completes**

* View conversation transcripts between personas and the agent.
* Analyze how well the agent handled each scenario.
* Identify areas for improvement before production deployment.

<img src="../../agentic-evaluation/images/simulation_conversation.png" alt="simulation transcript" title="simulation transcript" style="border: 1px solid gray; zoom:60%;">

<img src="../../agentic-evaluation/images/simulation_trace.png" alt="simulation tree" title="simulation tree" style="border: 1px solid gray; zoom:60%;">

## Use Simulated Data for Evaluation

After completing your simulations, import the generated sessions into Evaluation Studio just like you would with production data. This allows you to run automated evaluators to assess agent performance, tone, adherence to workflows, and tool accuracy. For details, see [Evaluators](../agentic-evaluation/configure-evaluators.md#types-of-evaluators).


## Next steps

* **[Create evaluations](../agentic-evaluation/create-evaluation.md)** – Organize your imported simulated sessions into an evaluation to start analyzing performance and generating insights.
* **[Import data](./import-data.md)** – Bring simulated sessions into Evaluation Studio for analysis.
