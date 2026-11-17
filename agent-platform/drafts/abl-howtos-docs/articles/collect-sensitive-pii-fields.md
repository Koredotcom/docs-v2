# Collect sensitive or PII fields safely

Use this pattern when the agent must collect a value such as an email address, a national ID fragment, or a PIN, and the value must not appear in traces, history, or model prompts.

## Concept

Mark a field sensitive and the platform protects it in several places. Some protection is always on. Some depends on the project PII protection setting.

| Protection | Depends on project PII protection |
| ---------- | --------------------------------- |
| Trace output masks the value in collection and completion events | No. Always on for `sensitive: true`. |
| The customer reply that answers a sensitive question is saved as a token or `[redacted]` in the history | No |
| Validation and lookup error messages never quote the value | No |
| A child agent that collects a sensitive field does not copy its customer messages to the parent history | No |
| The stored value becomes a reversible vault token, and the model sees a token | Yes. The project setting must be on. |
| The customer-facing rendering is masked | Yes |

Platform defaults differ by environment. PII protection is off by default in development, and on by default in staging and production. A project or tenant setting overrides the default. With protection off, `sensitive: true` does not stop the raw value from being stored in the session. It also does not hide the value from the model prompt. For example, an agent with `inline_gather: true` lists each collected value in its prompt under "Already collected". Turn protection on in every environment that handles real data. See [PII protection](/agent-platform/pii-protection).

## Minimal working example

An identity verifier collects an email address, the last four digits of a national ID, and a support PIN. Each field is sensitive. Each uses a different display mode.

The `verify_identity` tool is a project-local assumption. Bind it to your identity service in Project Tools.

`agents/identity-verifier.agent.abl`

```yaml
AGENT: IdentityVerifier
GOAL: "Verify a customer's identity with their email, last four SSN digits, and support PIN."

TOOLS:
  verify_identity(customer_email: string = null, ssn_last4: string = null, support_pin: string = null) -> {verified: boolean}
    description: "Checks the identity details against the customer record."
    confirm: never

GATHER:
  customer_email:
    type: email
    prompt: "What is your email address?"
    sensitive: true
    sensitive_display: mask
    pii_type: email
    mask_config:
      show_first: 1
      show_last: 0
      char: "*"
  ssn_last4:
    type: string
    prompt: "What are the last four digits of your SSN?"
    sensitive: true
    sensitive_display: redact
    pii_type: ssn
    transient: true
    validate: "^[0-9]{4}$"
    retry_prompt: "Enter exactly four digits."
    max_retries: 3
  support_pin:
    type: passcode
    prompt: "What is your support PIN?"
    sensitive: true
    sensitive_display: replace

COMPLETE:
  - WHEN: customer_email IS SET AND ssn_last4 IS SET AND support_pin IS SET
    RESPOND: "Thanks. I am verifying your details now."
```

Variable sources:

- All three variables are `GATHER` fields that the customer supplies.
- The tool reads them. The `COMPLETE` reply does not repeat any of them.

## How it works

Properties that control protection:

| Property | Values | Effect |
| -------- | ------ | ------ |
| `sensitive` | `true` or `yes` | Turns on protection. Any other spelling, such as `True` or `1`, reads as `false` without an error. |
| `sensitive_display` | `redact`, `mask`, `replace` | How the value appears outside the collection step. The default is `redact`. |
| `mask_config` | `show_first`, `show_last`, `char` | Sets the mask. Active only with `sensitive_display: mask`. |
| `pii_type` | `email`, `phone`, `ssn`, `credit_card`, `address`, `name`, `custom` | Shapes the mask and the vault token. An unknown value is dropped. |
| `pii_pattern_ref` | A project PII pattern name | Binds the field to a named project pattern. A name that matches nothing falls back to `pii_type`. |
| `transient` | `true` or `yes` | Removes the value from the session after the agent completes. See the limits below. |

What each display mode shows:

| Mode | Result for `4111111111111111` |
| ---- | ------------------------------ |
| `redact` | `[REDACTED]` |
| `mask` with no `mask_config` | `*************111` (last 3 characters) |
| `mask` with `show_first: 1`, `show_last: 2`, `char: "#"` | `4#############11` |
| `replace` | `[CARD_NUMBER]`, the field name in capitals |

How the runtime handles a sensitive value:

1. The customer's reply to a pending sensitive question is saved in the history as the vault token, or `[redacted]` when no vault exists.
2. With PII protection on, the runtime stores the value as a vault token. The raw value stays in the session vault.
3. Tools receive the original value by default. Each time the runtime hands out a raw value, it records a `pii_plaintext_dispensed` event.
4. Trace events for collection mask the value. Extraction traces redact a PIN or a CVV fully.
5. Responses and other agents' prompts have the exact stored value replaced by `[redacted]`. The match is exact. There is no detection.
6. On a handoff, the context is tokenized. A child that collects a sensitive field is skipped when the runtime copies customer messages to the parent.

The field types `password` and `passcode` also count as sensitive for history, handoff, and response protection. They do not get vault tokenization or trace masking unless you also set `sensitive: true`. Write `type: passcode` and `sensitive: true` together.

## Common variations

### Sensitive field inside a FLOW step

Inside a step, keys are case-insensitive and fields use the list form. Pair the sensitive field with a tool call in the next step. The check step reads the value through the template, and the value reaches the tool through the vault.

`agents/pin-verification.agent.abl`

```yaml
AGENT: PinVerification
GOAL: "Verify a caller with a PIN before sharing account details."

TOOLS:
  verify_pin(account_id: string = null, pin: string = null) -> {verified: boolean}
    description: "Checks the account PIN against the account system."
    confirm: never

FLOW:
  ask_pin -> check_pin -> done

  ask_pin:
    REASONING: false
    GATHER:
      - account_id:
          type: string
          prompt: "What is your account number?"
          required: true
      - pin:
          type: passcode
          prompt: "Please say or type your 4-digit PIN."
          required: true
          sensitive: true
          sensitive_display: redact
          pii_type: custom
          validate: "^[0-9]{4}$"
          retry_prompt: "The PIN must be four digits."
          max_retries: 3
    THEN: check_pin

  check_pin:
    REASONING: false
    CALL: verify_pin
      WITH:
        account_id: "{{account_id}}"
        pin: "{{pin}}"
      AS: pin_result
    ON_RESULT:
      - IF: pin_result.verified == true
        THEN: done
      - ELSE:
        RESPOND: "That PIN does not match. Please try again."
        THEN: ask_pin

  done:
    REASONING: false
    RESPOND: "Thanks. You are verified."
```

### Inherit protection from an entity

A field with `entity_ref` inherits `sensitive` from the entity. A field that sets `sensitive: false` overrides the entity.

### Card and PIN entry by keypad on voice

A `FLOW` step can use `SECURE_INPUT` for payment card data on a live voice session. The digits never reach the model, the trace, or the session state. The step fails closed to its `ON_FAIL` route when no voice session exists. Treat it as a separate feature from `GATHER`.

## Verification

1. Run the validator. Expect no errors and no warnings.
2. Confirm that PII protection is on for the project in the environment you test.
3. Give a sample email, last four digits, and PIN.
4. In the trace, open the `dsl_collect` and `completion_check` events. Expect `[REDACTED]` or a masked value, never the raw value.
5. Open the conversation history. Expect the reply to the PIN question to show a token or `[redacted]`.
6. Give a wrong format for the last four digits. Expect the retry message not to quote the value.
7. Check that the tool receives the original value, and look for the `pii_plaintext_dispensed` event.
8. Turn PII protection off in a test project. Compare the stored session values. Expect raw values.

## Production readiness checklist

- PII protection is on for the project in every environment that handles real data.
- Every sensitive field sets `sensitive: true`, not only a `password` or `passcode` type.
- Every sensitive field sets `sensitive_display` on purpose. No field relies on the default.
- `sensitive` is a lowercase `true`.
- No reply template echoes a sensitive value.
- A tool or `COMPLETE` rule reads each sensitive field. Otherwise the compiler warns `UNUSED_REQUIRED_GATHER_FIELD`.
- A PII pattern name in `pii_pattern_ref` exists in the project.
- Tests cover a valid value, an invalid value, and a correction.
- Trace and log retention follow your data policy.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Writing `sensitive: True` or `sensitive: 1` | Other languages accept these. | Write lowercase `true`. |
| Writing `sensitive_display: hide` or `MASK` | The compiler accepts any text. | Use lowercase `redact`, `mask`, or `replace`. An unknown value shows the raw value. |
| Writing `showLast` in `mask_config` | Camel case is common. | Write `show_first`, `show_last`, and `char`. A camel-case key gives warning `W170`. |
| Writing `mask_config: {show_last: 2}` on one line | Flow style looks natural. | Write the block form. The one-line form is dropped without an error. |
| Setting `mask_config` without `sensitive_display: mask` | The settings look independent. | Set `sensitive_display: mask`. |
| Using `mask` on a list or range field | The mode looks general. | Use `redact` for non-text values. |
| Relying on `transient` in a `FLOW` step | The property parses there. | Move the field to a top-level `GATHER`, and expect the cleanup only when the agent completes or hands off. |
| Echoing a sensitive value in `RESPOND` | The reply feels friendly. | Confirm that the step is done without repeating the value. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| A raw value appears in the stored session | PII protection is off for the project. | The project and tenant PII settings. |
| A raw value appears in the model prompt | PII protection is off, so the value is not tokenized. | The PII settings, and the "Already collected" list when `inline_gather` is on. |
| A raw value appears in a trace | The field is not marked `sensitive: true`. | The property spelling. |
| A mask shows the full value | `sensitive_display` has an unknown value, or `show_last` is not a number. | The `sensitive_display` and `mask_config` values. |
| The `transient` value is still there | The field is in a `FLOW` step, or the agent has not completed. | The field location and the agent state. |
| A trace shows `pii_pattern_ref_unresolved` | The pattern name matches no project pattern. | The pattern name. |
| The compile warns `ESCALATE_ROUTING_USER_INFO_SENSITIVE_REFERENCE` | An `ESCALATE` rule references a sensitive field. | The `routing.user_info` values. |
| The extraction model still reads the raw message | `sensitive: true` does not stop the extraction stage. | Your model and data processing policy. |

{{related}}

- [Collect information with global GATHER](/agent-platform/abl/how-to/collect-with-global-gather)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
- [Minimize context for privacy and compliance](/agent-platform/abl/how-to/minimize-agent-context)
- [Confirm inferred values before using them](/agent-platform/abl/how-to/confirm-inferred-values)
- [Silently extract values without asking the user](/agent-platform/abl/how-to/silently-extract-values)
- [Package context for a human escalation](/agent-platform/abl/how-to/package-human-escalation-context)
