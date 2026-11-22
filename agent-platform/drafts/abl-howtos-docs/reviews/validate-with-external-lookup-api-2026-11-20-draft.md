# Validate values using an external lookup API

Use a lookup table or a tool call to check a collected value against a system of record, such as an order system, a store list, or a policy database. A value that the source does not know is rejected, and the agent asks again.

## Concept

A type check says a value has the right shape. It cannot say the value exists. "AB123456" is a valid order number in format and may still match no order. Only the source of truth can tell.

ABL has four ways to ask the source. They differ in who makes the call, what the call can return, and what happens when the source is down.

| Method                                | Who calls                     | Source                                              | Best for                                                                                       |
| ------------------------------------- | ----------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Lookup table with `semantics: lookup` | The runtime, after extraction | Inline list, project data rows, or an HTTP endpoint | A yes or no check on one field, with canonical spelling and optional "did you mean"            |
| Tool `CALL` in a `FLOW` step          | Your flow, at a fixed step    | Any tool                                            | A check that returns data you use next, such as an order status. Full control of every outcome |
| Tool call from a reasoning agent      | The model, if it decides to   | Any tool                                            | Low-risk checks where a skipped call is acceptable                                             |
| `validation_process: LLM`             | The model, on the value alone | None                                                | Judging plausibility or wording. It cannot check real data                                     |

Use a lookup table first when one field maps to one list. Use a `FLOW` tool call when you need the returned data or a custom message for each outcome.

## Lookup tables

### How a lookup runs

1. The customer gives a value. The runtime applies the type check first. See [Validate collected fields by type](/agent-platform/abl/how-to/validate-fields-by-type).
2. The runtime finds the field's `semantics: lookup` table name and asks the table.
3. The table answers one of three ways:

| Answer                                                                     | What the runtime does                                                                                                                                                        |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exact match                                                                | Stores the value. If the table spells it differently, such as `lax` against `LAX`, it stores the table's spelling.                                                           |
| Close match, with `fuzzy_match: true` on an `inline` or `collection` table | Does not store the value. It asks the customer to confirm the suggestion. See [Use fuzzy matching for misspelled user input](/agent-platform/abl/how-to/use-fuzzy-matching). |
| No match, or the source failed                                             | Drops the value, says `"<value>" is not a valid value for <field>`, and asks again.                                                                                          |

A sensitive field never quotes the value in that message, and a close match is treated as a miss.

### Table sources

| Source       | Where the values live                                                           | Key settings                      |
| ------------ | ------------------------------------------------------------------------------- | --------------------------------- |
| `inline`     | A list in the table definition                                                  | `values`                          |
| `collection` | Rows you upload to the project as CSV or JSON, scoped to the project and tenant | `table_name`                      |
| `api`        | Your HTTP endpoint                                                              | `endpoint`, `field`, `timeout_ms` |

Define shared tables in the project, not in the agent. In Studio, open the project's Runtime Config and go to Lookup Tables. A table defined in an agent with `LOOKUP_TABLES` still works, but the compiler warns `AGENT_LOOKUP_TABLE_EXPERIMENTAL`. A table name that exists in both places raises a conflict error.

### The API contract

For an `api` table the runtime sends a `GET` request:

```text
GET <endpoint>?value=<customer value>&field=<field>
```

Your endpoint answers with JSON:

```json
{ "found": true, "matched_value": "AB123456" }
```

- `found` is required. Return `false` when nothing matches.
- `matched_value` is the canonical value to store. Leave it out to keep the customer's value. If it differs from what the customer said, the runtime stores it without asking. An `api` table does not run fuzzy matching, so your endpoint owns any "close match" logic.
- The endpoint returns one answer. It cannot return several candidates.
- The default timeout is 5000 ms. Set `timeout_ms` to change it.
- Private and local addresses are blocked, including `localhost`, RFC 1918 ranges, and the cloud metadata address.

## Minimal working example

A returns agent checks the store code against a `store_codes` table.

`agents/store-return-intake.agent.abl`

```yaml
AGENT: Store_Return_Intake

GOAL: "Collect the store where the customer bought an item, using the project's store_codes lookup table."

PERSONA: "You are a concise returns assistant."

GATHER:
  store_code:
    prompt: "Which store did you buy from? Give the store code."
    type: string
    required: true
    semantics:
      lookup: store_codes

COMPLETE:
  - WHEN: store_code IS SET
    RESPOND: "Starting a return for store {{store_code}}."
```

Define `store_codes` in Runtime Config. This is a project-local assumption. The agent does not compile it. This block shows the fields as an illustrative fragment, not copy-paste ABL.

```yaml
lookup_tables:
  - name: store_codes
    source: api
    endpoint: https://stores.example.com/lookup
    field: store_code
    timeout_ms: 3000
    case_sensitive: false
    fuzzy_match: false
```

Variable sources:

- `store_code` is a `GATHER` field. The customer supplies it.
- `COMPLETE` reads `store_code`.

Type the table name exactly. If the agent names a table that does not exist, the compiler does not warn, and the runtime skips the check. Every value is then accepted.

## Common variations

### Check at a fixed step with a tool

Use a tool `CALL` when you need the returned data or separate messages for "not found" and "system down". The `find_order` tool is a project-local assumption. Bind it to your order system.

`agents/order-status-agent.agent.abl`

```yaml
AGENT: Order_Status_Agent

GOAL: "Check that an order exists before discussing it."

PERSONA: "You are a concise support assistant."

TOOLS:
  find_order(order_id: string) -> {found: boolean, status: string}
    description: "Look up an order in the order system"
    effect: read_only
    parameters:
      order_id:
        description: "Order number entered by the customer"

FLOW:
  entry_point: ask_order
  steps:
    - ask_order
    - check_order
    - report
    - not_found

  ask_order:
    REASONING: false
    GATHER:
      - order_id: required
        type: string
        prompt: "What is your order number?"
        validate: "^[A-Z]{2}[0-9]{6}$"
        retry_prompt: "An order number is two letters and six digits, for example AB123456."
        max_retries: 3
    THEN: check_order

  check_order:
    REASONING: false
    CALL: find_order
      WITH:
        order_id: "{{order_id}}"
      AS: order_result
    ON_RESULT:
      - IF: order_result.found == true
        THEN: report
      - ELSE:
        THEN: not_found
    ON_FAIL:
      RESPOND: "The order system is unavailable. Please try again in a few minutes."
      THEN: COMPLETE

  report:
    REASONING: false
    RESPOND: "Order {{order_id}} is {{order_result.status}}."
    THEN: COMPLETE

  not_found:
    REASONING: false
    RESPOND: "I could not find order {{order_id}}. Check the number and try again."
    THEN: COMPLETE
```

Variable sources:

- `order_id` is a `GATHER` field.
- `order_result` comes from the `find_order` tool, through `AS`.
- `report` reads `order_result.status`, and `not_found` reads `order_id`.

The format rule runs first, so the order system sees only well-formed numbers. The tool step then separates three outcomes: found, not found, and failed. A lookup table cannot tell the customer that the system is down.

To let the customer retry instead of ending, send `not_found` back to `ask_order` and add a limit with `MAX_ATTEMPTS`.

### Let a reasoning agent call the tool

A reasoning agent can call the same kind of tool. The goal tells it when to call.

```yaml
AGENT: Claim_Intake_Reasoning

GOAL: "Collect a policy number. Before you accept it, call check_policy. Accept the number only when check_policy returns active as true. Otherwise ask the customer to re-enter it."

PERSONA: "You are a concise claims assistant."

TOOLS:
  check_policy(policy_number: string) -> {active: boolean}
    description: "Check that a policy number exists and is active"
    effect: read_only
    parameters:
      policy_number:
        description: "Policy number entered by the customer"

GATHER:
  policy_number:
    prompt: "What is your policy number?"
    type: string
    required: true

COMPLETE:
  - WHEN: policy_number IS SET
    RESPOND: "Opening a claim on policy {{policy_number}}."
```

The model decides whether to call the tool. The runtime does not force the call, and it does not hold the value back until the check passes. Use this for low-risk checks. For a check that gates money, identity, or data access, use a `FLOW` step or a lookup table.

### Judge plausibility with an LLM

`validation_process: LLM` asks the model whether a value satisfies a rule you write in plain language. It has no access to your data, so it cannot confirm that a value exists. If the model call fails or its answer cannot be read, the value is accepted.

This is a section snippet.

```yaml
GATHER:
  refund_reason:
    prompt: "Why do you want a refund?"
    type: string
    required: true
    validate: "the reason must describe a problem with the product or service"
    validation_process: LLM
    retry_prompt: "Describe what went wrong with the product or service."
    max_retries: 2
```

### Keep a small list in the agent

For a short, stable list, write an inline table in the agent. The compiler warns `AGENT_LOOKUP_TABLE_EXPERIMENTAL`. The warning is expected here. Move the table to Runtime Config when other agents need it.

```yaml
AGENT: Airport_Pickup

GOAL: "Collect a pickup airport and confirm it."

PERSONA: "You are a concise travel assistant."

LOOKUP_TABLES:
  airports:
    source: inline
    values: [LAX, JFK, SFO, ORD]
    case_sensitive: false
    fuzzy_match: true
    fuzzy_threshold: 0.6

GATHER:
  airport:
    prompt: "Which airport?"
    type: string
    required: true
    semantics:
      lookup: airports

COMPLETE:
  - WHEN: airport IS SET
    RESPOND: "Pickup at {{airport}}."
```

An agent-local table also accepts a `headers:` block for an `api` source. A table defined in Runtime Config sends no custom headers. Put the endpoint behind a gateway that does not need them, or use a tool, which carries its own authentication.

## When the source fails

| Event                                     | Customer hears                             | Notes                                                   |
| ----------------------------------------- | ------------------------------------------ | ------------------------------------------------------- |
| Source says `found: false`                | "<value> is not a valid value for <field>" | The value is dropped. The field stays missing.          |
| HTTP error, timeout, or invalid response  | The same message                           | A lookup table cannot tell a miss from an outage.       |
| Three failures in a row from one endpoint | The same message, without a call           | The runtime stops calling that endpoint for 30 seconds. |
| Endpoint on a blocked address             | The same message                           | The call never leaves the runtime.                      |
| Tool call fails in a `FLOW` step          | Your `ON_FAIL` text                        | You choose the wording and the next step.               |

A lookup table fails closed. While the source is down, no customer can pass the field. If that is wrong for your case, use a `FLOW` tool call and route `ON_FAIL` to a human or a fallback.

The runtime caches an `api` answer for 5 seconds. A value that was just added to the source may still be reported missing for that time.

## Verification

Test each outcome with a known good value, an unknown value, and a failing source.

| Agent               | Customer says                              | Expected result                                        |
| ------------------- | ------------------------------------------ | ------------------------------------------------------ |
| Store_Return_Intake | A valid store code                         | `store_code` is stored. The agent confirms the return. |
| Store_Return_Intake | A code in different letter case            | `store_code` is stored in the source's spelling.       |
| Store_Return_Intake | An unknown code                            | The agent says it is not a valid value and asks again. |
| Store_Return_Intake | A valid code while the endpoint is stopped | The same "not a valid value" message.                  |
| Order_Status_Agent  | "AB123456" for an existing order           | The reply shows the order status.                      |
| Order_Status_Agent  | "AB123456" for a missing order             | The reply says the order was not found.                |
| Order_Status_Agent  | A valid number while the tool fails        | The reply says the system is unavailable.              |
| Order_Status_Agent  | "12345"                                    | The format rule rejects it before the tool runs.       |

In the session trace:

- A `lookup_validation_failed` event lists the rejected fields and messages.
- A `lookup_fuzzy_confirmation_requested` event appears when a close match needs confirmation.
- A tool step shows the tool call and its result.

Watch your endpoint's access log during testing to confirm each check reaches it.

## Production readiness checklist

- Every table name in `semantics: lookup` exists in Runtime Config or the agent. A wrong name disables the check without a warning.
- The endpoint answers within the timeout. Test with the real service, not only a stub.
- The endpoint is public or reachable through a gateway. It is not on a private address.
- The endpoint needs no custom header, or you use an agent-local table, or a tool.
- You decided what the customer should hear when the source is down. A lookup table gives only the "not a valid value" message.
- A `FLOW` tool step has `ON_FAIL` and a route for "not found".
- The endpoint accepts the customer's value safely. It treats `value` as untrusted input.
- You do not send personal data to a lookup endpoint that should not receive it. The value goes to your endpoint in the URL.
- You tested a hit, a miss, a slow response, and a stopped endpoint.
- You watch for repeated `lookup_validation_failed` events. They show a bad prompt, a stale source, or an outage.

## Common mistakes

| Mistake                                                       | Why it happens                          | How to avoid it                                                                                  |
| ------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Misspelling the table name in `semantics: lookup`             | The compiler does not check the name.   | Copy the name from Runtime Config. Test an unknown value.                                        |
| Expecting a "service unavailable" message from a lookup table | The table treats errors as misses.      | Use a `FLOW` tool step with `ON_FAIL`.                                                           |
| Defining the same table in the agent and in Runtime Config    | Both look valid.                        | Keep one definition. A duplicate name raises a conflict error.                                   |
| Returning several matches from the endpoint                   | A list looks natural.                   | Return one `found` and one `matched_value`. For candidates, use a tool and branch on its result. |
| Relying on the reasoning agent to call the tool               | The goal says "always call".            | The model chooses. Use a `FLOW` step for required checks.                                        |
| Using `validation_process: LLM` to confirm data exists        | The model sounds authoritative.         | It has no access to your data. Use a lookup or a tool.                                           |
| Putting an API key in an endpoint URL                         | It is the simplest way to authenticate. | Use a gateway, or use a tool that carries its own authentication.                                |

## Troubleshooting

| Symptom                                              | Likely cause                                                                               | What to check                                                      |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Every value is accepted                              | The table name is wrong, or the field has no `semantics: lookup`                           | Compare the name with Runtime Config.                              |
| Every value is rejected                              | The endpoint returns the wrong JSON, an HTTP error, or times out                           | Call the endpoint with a known value. Check `found`.               |
| Values are rejected for 30 seconds, then work        | The runtime stopped calling the failing endpoint                                           | Fix the endpoint. Wait for the pause to end.                       |
| A new record is still rejected                       | The runtime caches an answer for 5 seconds                                                 | Retry after a few seconds.                                         |
| A valid value is asked again with "Did you mean"     | An `inline` or `collection` table with `fuzzy_match` found a close match, not an exact one | Return the exact value from the source, or confirm the suggestion. |
| A conflict error names a lookup table                | The same table name is in the agent and in Runtime Config                                  | Remove one definition.                                             |
| The compiler warns `AGENT_LOOKUP_TABLE_EXPERIMENTAL` | The table is defined in the agent                                                          | Move it to Runtime Config.                                         |
| The endpoint is never called                         | The address is private or local                                                            | Use a public address or a gateway.                                 |

## Related HowTos

- [Validate collected fields by type](/agent-platform/abl/how-to/validate-fields-by-type)
- [Use fuzzy matching for misspelled user input](/agent-platform/abl/how-to/use-fuzzy-matching)
- [Validate fields with regex or custom patterns](/agent-platform/abl/how-to/validate-fields-with-regex)
- [Show recovery prompts when validation fails](/agent-platform/abl/how-to/recover-from-validation-failures)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
