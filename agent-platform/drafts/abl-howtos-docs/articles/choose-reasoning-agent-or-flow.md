# How to choose between a reasoning agent and a FLOW-based agent

Use this guide when you are deciding whether an agent should be goal-driven and flexible, step-driven and predictable, or a mix of both.

## Concept

An ABL agent can run without a `FLOW:` block or with one.

A reasoning agent has an `AGENT`, a `GOAL`, optional persona or limitations, optional tools, optional gathered fields, and completion rules. Because there is no `FLOW:`, the reasoning layer chooses the next best action inside the boundaries you define.

A FLOW-based agent adds a `FLOW:` block and named steps. The flow owns the conversation path. Each step declares whether it is deterministic with `REASONING: false` or allows a bounded reasoning area with `REASONING: true`.

Use a reasoning agent when the work can be expressed as a business goal and the conversation can adapt. Use a flow when the order of operations, checkpoints, or troubleshooting path must be explicit. Use a workflow tool, not an agent flow, for long waits, polling, scheduled work, or multi-hour orchestration.

## Decision guide

| Scenario                                                 | Use                                          | Why                                                                                |
| -------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- |
| Flexible Q&A, policy explanation, broad triage           | Reasoning agent                              | The agent can choose how to answer from the goal, tools, limitations, and context. |
| Required intake or compliance sequence                   | `FLOW` with `REASONING: false` steps         | Each field, prompt, response, and next step is explicit.                           |
| Scripted process with one conversational decision        | `FLOW` with a bounded `REASONING: true` step | The flow owns the process while the reasoning step handles interpretation.         |
| Durable approval, polling, callback, scheduled follow-up | Workflow tool                                | Long-running state belongs outside the stateless agent flow.                       |

## Minimal working example: reasoning agent

This example is a single agent file. It leaves the conversation flexible but gives the agent a required topic and a safe completion condition.

```abl
AGENT: Policy_QA_Agent
GOAL: "Explain employee policies and identify when HR must handle the request"

PERSONA: |
  Clear, concise HR policy assistant.
  Explains policy rules and next steps without approving exceptions.

LIMITATIONS:
  - "Cannot approve policy exceptions"
  - "Cannot change employee records"

GATHER:
  policy_topic:
    prompt: "Which policy do you need help with?"
    type: string
    required: true

COMPLETE:
  - WHEN: policy_topic IS SET
    RESPOND: "I can explain the {{policy_topic}} policy and tell you when HR must review the request."
```

Use this shape when there is no required path beyond collecting the information needed to answer safely. Avoid using `WHEN: true` as a normal completion rule because it can make the example look complete even when the customer outcome has not been reached.

## Working example: deterministic FLOW for required intake

This example is a single agent file. It collects warranty information in a fixed order, then completes only after the required fields are present.

```abl
AGENT: Warranty_Intake_Agent
GOAL: "Collect warranty intake details in a fixed order"

FLOW:
  entry_point: collect_serial
  steps:
    - collect_serial
    - collect_issue
    - complete_request

collect_serial:
  REASONING: false
  GATHER:
    - serial_number:
        prompt: "What is the device serial number?"
        type: string
        required: true
  THEN: collect_issue

collect_issue:
  REASONING: false
  GATHER:
    - issue_description:
        prompt: "What problem are you seeing?"
        type: string
        required: true
  THEN: complete_request

complete_request:
  REASONING: false
  RESPOND: "Thanks. I have the serial number and issue description."
  THEN: complete

COMPLETE:
  - WHEN: serial_number IS SET AND issue_description IS SET
    RESPOND: "Warranty intake is ready for {{serial_number}}: {{issue_description}}."
```

Use this shape when the customer should not skip required fields or when operations teams need to inspect the exact path a conversation followed.

## Working example: bounded reasoning inside a FLOW

This example is a single agent file. The reasoning step is limited to understanding the support path; the rest of the process remains explicit.

```abl
AGENT: Support_Intake_Agent
GOAL: "Understand a support request, collect account context, and prepare the next action"

FLOW:
  entry_point: understand_request
  steps:
    - understand_request
    - collect_account
    - finish_intake

understand_request:
  REASONING: true
  GOAL: "Clarify whether the customer needs billing, technical support, or human escalation"
  EXIT_WHEN: "the support path and issue summary are clear enough to continue"
  MAX_TURNS: 3
  THEN: collect_account

collect_account:
  REASONING: false
  GATHER:
    - account_id:
        prompt: "What account should I use for this request?"
        type: string
        required: true
  THEN: finish_intake

finish_intake:
  REASONING: false
  RESPOND: "I have the account context and the support path. I can continue with the next step."
  THEN: complete

COMPLETE:
  - WHEN: account_id IS SET
    RESPOND: "Support intake is ready for account {{account_id}}."
```

Use this shape when only one part of the process needs interpretation. Keep the reasoning zone narrow, give it an exit condition, and add a max-turn limit.

## Verification

1. Validate the agent file.
2. Run a sample utterance for the reasoning-agent example: "Can you explain the parental leave policy?"
3. Run the warranty flow with a serial number and issue description. Confirm the prompts happen in order and completion waits until both fields are present.
4. Run the bounded-reasoning flow with a broad request such as "I need help with a billing issue and my account." Confirm the reasoning step clarifies the path before collecting `account_id`.
5. Inspect trace/debug output for the active step name, gathered fields, and final completion response.

## Production readiness checklist

- Use a reasoning agent only when goal, limitations, tools, and completion rules are enough to bound behavior.
- Use flow steps for required collection, compliance prompts, or processes support teams must inspect.
- Keep `REASONING: true` steps bounded with a clear goal, exit condition, and max-turn limit.
- Make every required gathered field feed completion, memory, a tool call, handoff, delegate, or another known consumer.
- Move long waits, polling, scheduled callbacks, and multi-hour orchestration into a workflow tool.

## Common mistakes

| Mistake                                                | Why it happens                                                  | How to avoid it                                                             |
| ------------------------------------------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Using `FLOW` for every conversation                    | Builders want control even when a goal is enough.               | Start with a reasoning agent when the outcome is flexible and low-risk.     |
| Using `WHEN: true` as the main completion rule         | It makes examples pass before the customer outcome is complete. | Complete on meaningful fields, tool results, or final state.                |
| Adding a reasoning step that never affects the outcome | The flow has a reasoning block but no clear purpose.            | Give the step a narrow goal and explain what it prepares for the next step. |
| Using agent flow for durable work                      | Flow is visible and convenient, but not meant for long waits.   | Use workflow-as-tool for durable orchestration.                             |

## Troubleshooting

| Symptom                                     | Likely cause                                                      | What to check                                                                            |
| ------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| A required gathered field triggers warnings | The field is never consumed.                                      | Reference it in completion, memory, a tool input, handoff, delegate, or next-step logic. |
| A reasoning step keeps asking questions     | The exit condition is too broad or the max-turn limit is missing. | Tighten `GOAL`, `EXIT_WHEN`, and `MAX_TURNS`.                                            |
| The flow is hard to maintain                | Too many business paths are in one agent.                         | Split into specialists or move durable work to a workflow.                               |
