# How to write effective agent goals, personas, instructions, and limitations

Use this pattern when an agent needs a clear job boundary, a consistent voice, and explicit limits. The limits keep it from taking work that another agent, tool, workflow, or human team owns.

## Concept

An agent definition needs more than a name. Four sections shape how the agent behaves.

| Section        | What it does                                                                                     | Required |
| -------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `GOAL`         | States the outcome the agent owns.                                                               | Yes. A missing `GOAL` causes error `E124`. |
| `PERSONA`      | Describes how the agent communicates.                                                            | No       |
| `INSTRUCTIONS` | Adds detailed working rules. The parser appends the text to the goal.                            | No       |
| `LIMITATIONS`  | Lists what the agent must not do.                                                                | No       |

The runtime puts these sections into the agent prompt. They guide the model. They do not block actions. For hard enforcement, add tools, constraints, guardrails, permissions, or handoff.

The standard prompt for a specialist or standalone agent includes `LIMITATIONS`. The standard prompt for a supervisor with the router or orchestrator role does not. Put routing boundaries for a supervisor in its `HANDOFF` and `DELEGATE` entries and its goal.

Write the goal as an owned responsibility, not a slogan. Write the persona as observable behavior, not a list of brand adjectives. Write limitations as specific prohibited actions, and name the next action when you can.

## Minimal working example

```abl
AGENT: Refund_Policy_Agent
GOAL: "Answer refund policy questions and explain next steps without creating refund requests"
PERSONA: |
  Calm policy specialist.
  Uses short answers first, then offers details.
  Separates confirmed policy facts from suggested next steps.

LIMITATIONS:
  - "Does not approve refunds"
  - "Does not change order or payment records"
  - "Routes payment disputes to Billing_Specialist"

HANDOFF:
  - TO: Billing_Specialist
    WHEN: "The user asks to dispute a charge, reverse a payment, or override a refund decision"
    PASS: [order_id, customer_id]
    SUMMARY: "User needs billing or payment-dispute help"
```

```abl
AGENT: Billing_Specialist
GOAL: "Handle billing and payment-dispute requests"
PERSONA: "Billing specialist"
```

`order_id` and `customer_id` are project-local assumptions. This example does not declare a source for them. In your project, collect them with `GATHER`, store them in `MEMORY`, or set them from a tool result before the handoff.

## How it works

The refund agent owns policy explanation and does not take payment actions. One limitation also names the correct boundary for disputes. The `HANDOFF` makes that boundary executable. It routes charge disputes to `Billing_Specialist`.

Customers do not know which internal team owns an issue. They ask in natural language. The goal and limitations keep the agent helpful and stop the wrong agent from taking a sensitive action.

The `HANDOFF` above omits `HISTORY`. `Billing_Specialist` receives the full conversation history by default. Set an explicit `HISTORY` strategy to send bounded or summary-only context.

## Common variations

### Short persona

Use a one-line persona for simple specialists.

```abl
AGENT: Billing_Answer_Agent
GOAL: "Answer billing questions without changing account records"
PERSONA: "Concise billing specialist who explains account actions clearly"
```

### Multiline persona

Use a multiline persona when tone, format, and operating style matter.

```abl
AGENT: Identity_Verification_Agent
GOAL: "Verify user identity before sensitive account actions"
PERSONA: |
  Direct and reassuring.
  Confirms critical identifiers before explaining next steps.
  Avoids legal or financial promises.
```

### Detailed instructions

Use `INSTRUCTIONS` for working rules that do not fit in a one-line goal. Place `INSTRUCTIONS` after `GOAL`. The parser appends the instructions to the goal text under an "Instructions:" heading.

```abl
AGENT: Returns_Agent
GOAL: "Help customers start a return for an eligible order"
INSTRUCTIONS: |
  Confirm the order number before you explain return options.
  Offer a prepaid label only when the order is eligible.
PERSONA: "Patient returns specialist"
LIMITATIONS:
  - "Does not issue refunds"
```

If `INSTRUCTIONS` comes before `GOAL`, the later `GOAL` replaces the goal text and the instructions are lost.

### IDENTITY section

`IDENTITY` is an alternative way to group role, persona, expertise, and limitations in one section. Use it only when your project standard prefers that shape. Otherwise, `GOAL`, `PERSONA`, and `LIMITATIONS` are easier to scan.

```abl
AGENT: Identity_Verification_Agent
IDENTITY:
  role: "Verify user identity before sensitive account actions"
  persona: "Direct and reassuring"
  expertise: [identity verification, account recovery]
  limitations: ["Does not approve refunds", "Does not give legal or financial advice"]
```

`IDENTITY` maps to the same fields:

| `IDENTITY` key | Maps to                                                |
| -------------- | ------------------------------------------------------ |
| `role`         | `GOAL`. It replaces any earlier `GOAL`.                |
| `persona`      | `PERSONA`.                                             |
| `expertise`    | Text added to the end of the persona: "Expertise: ...". |
| `limitations`  | `LIMITATIONS`. It replaces any earlier `LIMITATIONS`.  |

Each key takes a single-line value. Do not mix `IDENTITY` with `GOAL` and `LIMITATIONS` in the same agent. The last section to appear wins.

### Values from the session

`GOAL`, `PERSONA`, and `LIMITATIONS` text accepts `{{variable}}` placeholders. The runtime fills them from session values when it builds the prompt.

```abl
AGENT: Member_Support_Agent
GOAL: "Help {{member_name}} with plan questions"
PERSONA: "Calm and concise, speaks to {{member_name}} by name"
LIMITATIONS:
  - "Does not discuss plans other than the member's own"

GATHER:
  member_name:
    prompt: "What is your name?"
    type: string
    required: true

COMPLETE:
  - WHEN: member_name IS SET
    RESPOND: "Thanks {{member_name}}."
```

Use only variables that have a source, such as a `GATHER` field, a memory field, or a context value.

### Custom system prompt

A `SYSTEM_PROMPT` section replaces the standard prompt. Your template must then reference `{{goal}}` and `{{persona}}` to use them. The limitations list is not a template variable in a custom prompt, so write the limits into the template text.

```abl
AGENT: Policy_Assistant
GOAL: "Explain refund policy and next steps"
PERSONA: "Calm policy specialist"
LIMITATIONS:
  - "Does not approve refunds"
SYSTEM_PROMPT:
  You are {{name}}.
  Objective: {{goal}}
  Style: {{persona}}
  Never approve refunds. Send refund approvals to the billing team.
```

Write `SYSTEM_PROMPT:` alone on its line, with the template indented below it. The form `SYSTEM_PROMPT: |` is not recognized.

## Verification

1. Validate the agent. Confirm no `E124` error appears.
2. Test an in-scope request. Confirm the agent answers directly and in the persona voice.
3. Test a boundary request. Confirm the agent hands off, delegates, or declines instead of improvising.
4. Test a sensitive request, such as refund approval or payment reversal. Confirm the agent follows the limitation.
5. Inspect the handoff target and the passed fields. Confirm the receiving agent has the context it needs.
6. If you use `INSTRUCTIONS`, `IDENTITY`, or `{{variable}}` placeholders, test one request that depends on that text.

## Production readiness checklist

- Every agent has one primary responsibility.
- Limitations name prohibited work and the correct next path.
- Routing conditions match the boundaries that the limitations describe.
- Sensitive actions go to the right specialist, workflow, tool, or human escalation.
- Every handoff target exists in the project.
- Every `PASS` field and `{{variable}}` has a source.
- Test cases cover in-scope, adjacent, out-of-scope, and ambiguous requests.

## Common mistakes

| Mistake                                   | Why it happens                                        | How to avoid it                                                               |
| ----------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------- |
| Goal is too broad                         | The agent becomes a catch-all.                        | Use one owned outcome per agent.                                              |
| Persona is only branding                  | It does not guide behavior.                           | Describe response style, confirmation behavior, and tone.                     |
| Limitations have no route                 | The agent knows what not to do but not what next.     | Pair important limits with handoff, delegate, escalation, or refusal behavior. |
| Limitations conflict with tools           | A tool enables an action the agent says it cannot do. | Review tools and limitations together.                                        |
| Treating limitations as enforcement       | The text reads like a rule.                           | Add tools, constraints, guardrails, or permissions for hard boundaries.       |
| `INSTRUCTIONS` placed before `GOAL`       | The later `GOAL` replaces the goal text.              | Put `INSTRUCTIONS` after `GOAL`.                                              |
| Mixing `IDENTITY` with `GOAL` or `LIMITATIONS` | `IDENTITY` replaces the goal and limitations.    | Use one style per agent.                                                      |

## Troubleshooting

| Symptom                                       | Likely cause                                              | What to check                                                          |
| --------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| Error `E124`: `GOAL` is required              | The agent has no `GOAL` and no `IDENTITY` `role`.         | Add a `GOAL` section.                                                  |
| Agent answers outside its scope               | Goal or limitations are too broad.                        | Tighten the goal and add boundary tests.                               |
| Agent refuses too much                        | Limitations are written as general warnings.              | Rewrite them as specific prohibited actions.                           |
| Handoff happens without useful context        | `PASS` fields are missing or unset.                       | Confirm field sources and target-agent needs.                          |
| Two agents claim the same request             | Responsibilities overlap.                                 | Rewrite goals around ownership, not departments.                       |
| Persona or limits have no effect              | The agent uses a custom `SYSTEM_PROMPT` that omits them, or it is a routing supervisor. | Add `{{persona}}` and the limit text to the template. For a supervisor, use `HANDOFF` and the goal. |
| Instructions are missing from behavior        | `INSTRUCTIONS` appears before `GOAL`.                     | Move `INSTRUCTIONS` below `GOAL`.                                      |
| An agent ignores a value in its goal or persona | A `{{variable}}` has no value in the session. The runtime logs "Template variable not found". | Check the variable source: `GATHER`, `MEMORY`, or context. |

## Related HowTos

- How to define clear responsibilities for each enterprise agent
- How to design a supervisor that routes users to specialist agents
