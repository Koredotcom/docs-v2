# Evidence: handle-multiple-intents

**Date:** 2026-08-21
**Topic:** 3.6 - Handle messages that contain multiple user intents
**Slug:** handle-multiple-intents
**Workflow:** Full fresh exploration (evidence missing; refresh workflow step 2 triggered creation-level rigor)

## Source files inspected

### Parser

- `packages/core/src/parser/agent-based-parser.ts` (lines 819-823: MULTI_INTENT section entry; lines 10265-10369: parseMultiIntentSection; line 960: valid sections list; lines 5600-5610: EXPECT_RETURN/RETURN parser)
- `packages/core/src/parser/yaml-parser.ts` (lines 322-334: multi_intent alias parsing; lines 1811-1882: parseMultiIntent, parseMultiIntentBoolean, parseMultiIntentNumber)

### Types

- `packages/core/src/types/agent-based.ts` (lines 2165-2173: MultiIntentConfig interface -- strategy, unknown_relationship_strategy, max_intents, confidence_threshold, queue_max_age_ms, enabled)

### Compiler IR

- `packages/compiler/src/platform/ir/schema.ts` (lines 2996-3018: MultiIntentStrategy type, UnknownRelationshipStrategy type, IntentRelationshipType type, IntentHandlingConfig interface)
- `packages/compiler/src/platform/ir/multi-intent-config.ts` (full file: MULTI_INTENT_STRATEGIES array, UNKNOWN_RELATIONSHIP_STRATEGIES array, all validation range constants, DEFAULT_MULTI_INTENT_CONFIG, type guard functions)
- `packages/compiler/src/platform/ir/compiler.ts` (lines 193-282: compileMultiIntentConfig function)

### Compiler constants (messages and prompts)

- `packages/compiler/src/platform/constants.ts` (lines 109-118: multi_intent_disambiguate_header, multi_intent_disambiguate_option, multi_intent_disambiguation_reprompt, multi_intent_disambiguation_paused, multi_intent_disambiguation_cancelled, multi_intent_queued_notice, multi_intent_queued_follow_up; lines 353-358: supervisor_multi_intent_header, body, synthesize, single)

### HANDOFF history default

- `packages/compiler/src/platform/contracts/contract-source-data.ts` (line 3: `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`)

### Runtime execution

- `apps/runtime/src/services/execution/multi-intent/multi-intent-types.ts` (full file: resolveMultiIntentConfig with precedence chain, resolveAgentExecutionType, DetectedIntent, ResolvedMultiIntentPlan, MultiIntentDispatchResult)
- `apps/runtime/src/services/execution/multi-intent/multi-intent-router.ts` (lines 39-44: SUPPORTED_MULTI_INTENT_STRATEGIES set; lines 232-300: resolveDetectedMultiIntentPlan with strategy fallback)
- `apps/runtime/src/services/execution/multi-intent-strategy.ts` (full file: resolveStrategy function with auto/parallel/sequential/disambiguate/primary_queue resolution rules)

### Tests and examples

- `packages/core/src/__tests__/parser/multi-intent-parse.test.ts` (full file: 7 tests covering all fields, minimal config, enabled:false, malformed literals, section boundary)
- `packages/core/src/__tests__/yaml-parser.test.ts` (lines 357-482: multi_intent parsing in YAML format)
- `apps/runtime/src/__tests__/multi-agent-orchestration.e2e.test.ts` (lines 528-610: supervisor parallel fan-out; lines 692-1276: sequential, primary_queue strategies)
- `apps/runtime/src/__tests__/reported-runtime-regressions.test.ts` (lines 288-328: MULTI_INTENT_MULTI_TURN_DSL; lines 700-768: SUPERVISOR_MULTI_INTENT_STRATEGIES matrix; lines 883-886: resolveMultiIntentConfig assertions)
- `apps/runtime/src/__tests__/project-runtime-config-resolver.test.ts` (lines 51-286: project runtime config with multi_intent resolution)
- `packages/compiler/src/__tests__/auto-guard-constraint.test.ts` (auto-guard wrapping for single-variable guards)

### Reference docs

- `docs-v2/agent-platform/abl-reference/nlu.mdx` (lines 399-434: Multi-intent handling section)
- `docs-v2/agent-platform/abl-reference/lifecycle-and-hooks.mdx` (lines 339-340: MESSAGES block multi-intent keys)

### Delegate WHEN guard fix

- `packages/compiler/src/platform/constructs/executors/delegate-executor.ts` (lines 88, 149: whenAlreadyValidated flag)

### Guard-condition parser hardening

- `packages/core/src/parser/expression-parser.ts` (root-level single-segment path fix)

---

## Scenario and variant map

| Scenario or variant                                                       | Supported? | Evidence                                                                                                  | Article coverage                                                                    |
| ------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| MULTI_INTENT section on AGENT: declaration                                | yes        | multi-intent-parse.test.ts uses `AGENT:`                                                                  | not covered (article implies supervisor-only via `SUPERVISOR:` in example)          |
| MULTI_INTENT section on SUPERVISOR: declaration                           | yes        | multi-agent-orchestration.e2e.test.ts line 533 uses `SUPERVISOR:`                                         | covered                                                                             |
| strategy: primary_queue (default)                                         | yes        | multi-intent-config.ts line 30: default strategy is `primary_queue`; multi-intent-strategy.ts passthrough | covered                                                                             |
| strategy: sequential                                                      | yes        | multi-intent-strategy.ts line 96: passthrough; e2e test line 725                                          | covered (brief mention)                                                             |
| strategy: parallel                                                        | yes        | multi-intent-strategy.ts lines 84-94: supervisor-only with dependent/ambiguous downgrades                 | covered (brief mention)                                                             |
| strategy: disambiguate                                                    | yes        | multi-intent-strategy.ts line 96: passthrough; e2e tests                                                  | covered (brief mention)                                                             |
| strategy: auto                                                            | yes        | multi-intent-strategy.ts lines 71-79: resolves based on relationship and agent type                       | NOT covered -- article omits auto entirely                                          |
| unknown_relationship_strategy field                                       | yes        | multi-intent-config.ts line 31 default `parallel`; schema.ts line 3017; compiler.ts lines 229-237         | NOT covered -- article omits field entirely                                         |
| IntentRelationshipType: independent/dependent/ambiguous                   | yes        | schema.ts line 3007; nlu/types.ts line 272; multi-intent-strategy.ts lines 71-79                          | NOT covered                                                                         |
| Config precedence: agent DSL > project runtime config > platform defaults | yes        | multi-intent-types.ts lines 215-227 resolveMultiIntentConfig                                              | NOT covered                                                                         |
| parallel downgrade to sequential for non-supervisor agents                | yes        | multi-intent-strategy.ts lines 91-93                                                                      | partially covered (article says "runtime downgrades unsafe cases" but no specifics) |
| parallel downgrade to sequential for dependent relationships              | yes        | multi-intent-strategy.ts lines 85-87                                                                      | NOT covered                                                                         |
| parallel downgrade to disambiguate for ambiguous relationships            | yes        | multi-intent-strategy.ts lines 88-90                                                                      | NOT covered                                                                         |
| MESSAGES customization for disambiguation/queue prompts                   | yes        | constants.ts lines 109-118; nlu.mdx line 434                                                              | NOT covered                                                                         |
| max_intents validation range 1-10                                         | yes        | multi-intent-config.ts lines 21-22                                                                        | NOT covered (article shows value 3 but no range)                                    |
| confidence_threshold validation range 0-1                                 | yes        | multi-intent-config.ts lines 23-24                                                                        | NOT covered                                                                         |
| queue_max_age_ms validation range 0-3600000                               | yes        | multi-intent-config.ts lines 25-26                                                                        | NOT covered                                                                         |
| enabled: true default                                                     | yes        | multi-intent-config.ts line 29                                                                            | NOT covered (article shows enabled: true but doesn't state it's default)            |
| YAML format (multi_intent / multiIntent aliases)                          | yes        | yaml-parser.ts lines 322-334; yaml-parser.test.ts lines 357-482                                           | NOT covered (article only shows ABL-native MULTI_INTENT: syntax)                    |
| EXPECT_RETURN as legacy alias for RETURN                                  | yes        | agent-based-parser.ts lines 5608-5610                                                                     | article uses EXPECT_RETURN (legacy form); should prefer RETURN                      |
| HANDOFF history default: full (changed from auto)                         | yes        | contract-source-data.ts line 3                                                                            | NOT covered (HANDOFF omits history:, default is now `full`)                         |
| DELEGATE with WHEN guard double-validation fix (ABLP-3241)                | yes        | delegate-executor.ts line 88,149 whenAlreadyValidated                                                     | not directly relevant to this article's scope                                       |
| auto-guard on single-variable guard conditions                            | yes        | auto-guard-constraint.test.ts                                                                             | out of scope (orthogonal WHEN guard behavior)                                       |
| session memory INITIAL: canonical keyword                                 | yes        | agent-based-parser.ts line 4595                                                                           | out of scope (no memory variables in article)                                       |

---

## Operational readiness map

| Requirement                                  | Evidence                                                                                                                                        | Article coverage                                                                                                                                             | Gap or action                                                                                            |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Runtime behavior verified                    | multi-intent-strategy.ts resolveStrategy; multi-intent-router.ts resolveDetectedMultiIntentPlan; multi-intent-types.ts resolveMultiIntentConfig | partially covered; auto strategy and downgrade rules missing                                                                                                 | update needed                                                                                            |
| Required companion resources identified      | Article references Balance_Agent, Bill_Payment_Agent, Address_Update_Agent; all defined inline                                                  | covered                                                                                                                                                      | none                                                                                                     |
| Referenced variables have sources            | customer_id, account_id used in CONTEXT pass -- no source stated                                                                                | not covered                                                                                                                                                  | update needed: must state these are project-local assumptions (gathered, runtime, or external variables) |
| Fallback/failure/ambiguity behavior verified | IntentRelationshipType (independent/dependent/ambiguous) drives auto strategy; parallel downgrade logic; disambiguate prompt flow               | not covered                                                                                                                                                  | update needed: disambiguation flow, queue expiry, no-match behavior                                      |
| Customer verification path defined           | Article says "Parse... Compile... Test utterances... Inspect traces"                                                                            | partially covered but too generic; should mention trace event types (multi_intent_plan_built, multi_intent_queue_surfaced, multi_intent_disambiguate_choice) | update needed                                                                                            |
| Production readiness checklist included      | Article has a checklist but misses: validation ranges, queue expiry behavior, MESSAGES customization, unknown_relationship_strategy             | partially covered                                                                                                                                            | update needed                                                                                            |

---

## Example validation

| Article block                                    | Classification | Validation method                       | Result          | Warnings or errors                                                                                                                                                                                                 | Action                         |
| ------------------------------------------------ | -------------- | --------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| Block 1 (lines 23-69): SUPERVISOR + 3 AGENT docs | full-document  | Close reading of parser/compiler source | fail (2 issues) | 1. Uses `EXPECT_RETURN: true` (legacy alias; canonical is `RETURN: true`). 2. Does not include `unknown_relationship_strategy` -- valid omission (defaults to `parallel`) but article doesn't explain the default. | update: change to RETURN: true |

No runnable parse/compile harness was found in this sandbox (no CLI entry point or pnpm script confirmed reachable). Validation was performed by close reading of the ABL parser source (`parseMultiIntentSection`, HANDOFF parser with EXPECT_RETURN case, and the SUPERVISOR/AGENT header parser). The DSL structure is syntactically valid: SUPERVISOR: declaration, GOAL:, MULTI_INTENT: section with valid fields, INTENTS: section, HANDOFF: array with TO/WHEN/EXPECT_RETURN/CONTEXT sub-keys, and companion AGENT: declarations. The compiler would accept this; the only issue is the legacy `EXPECT_RETURN` form.

---

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                                                                                                     | Final score |
| ------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 2             | Missing auto strategy, unknown_relationship_strategy, relationship types, validation ranges, downgrade rules, config precedence, MESSAGES customization                               | 2           |
| Depth of conceptual explanation            | 3             | Missing: how auto strategy resolves based on relationships; how parallel downgrades work; config precedence chain; that MULTI_INTENT works on AGENT: too                              | 3           |
| Readability and usability                  | 4             | Article is concise and scannable; starts with user goal                                                                                                                               | 4           |
| Coverage of examples                       | 2             | Only one example (primary_queue); no auto, sequential, parallel, or disambiguate examples; no MESSAGES customization example                                                          | 2           |
| Search and discovery quality               | 4             | Title and headings are search-friendly                                                                                                                                                | 4           |
| Completeness of workflow and failure modes | 2             | Missing: queue expiry, disambiguation prompt flow, parallel downgrade, no-match behavior, unknown_relationship_strategy                                                               | 2           |
| Customer/partner self-service readiness    | 3             | No internal repo paths; but insufficient guidance to actually configure all supported modes                                                                                           | 3           |
| Scenario comprehensiveness                 | 2             | 7 of 17 scenario variants not covered at all                                                                                                                                          | 2           |
| Article completeness                       | 3             | Missing Concept section (per template); Common variations are bullet points only (no examples); Troubleshooting is prose not table; missing Related HowTos links to existing articles | 3           |

**Gate result:** blocked (multiple criteria below 4; article requires substantial update)

---

## Red-team coverage pass

| Question                                                                                                  | Result     | Evidence or correction                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime/prompt/tool execution, tests, and examples for this topic?  | pass       | Parser: agent-based-parser.ts + yaml-parser.ts. Types: agent-based.ts MultiIntentConfig. Compiler: multi-intent-config.ts, compiler.ts compileMultiIntentConfig. Runtime: multi-intent-types.ts, multi-intent-router.ts, multi-intent-strategy.ts. Tests: multi-intent-parse.test.ts, yaml-parser.test.ts, multi-agent-orchestration.e2e.test.ts, reported-runtime-regressions.test.ts, project-runtime-config-resolver.test.ts. |
| Did I search for synonyms and neighboring constructs?                                                     | pass       | Searched MULTI_INTENT, multi_intent, MultiIntent, multiIntent, primary_queue, sequential, parallel, disambiguate, auto, unknown_relationship_strategy, IntentRelationship, intent.category, EXPECT_RETURN, RETURN, history, HANDOFF                                                                                                                                                                                              |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback?           | pass       | YAML aliases (multi_intent/multiIntent), ABL MULTI_INTENT: section, EXPECT_RETURN legacy alias, all 5 strategies, unknown_relationship_strategy, all defaults from DEFAULT_MULTI_INTENT_CONFIG                                                                                                                                                                                                                                   |
| Did I distinguish optional helper sections from required executable configuration?                        | pass       | MULTI_INTENT is entirely optional; all fields have defaults. unknown_relationship_strategy defaults to parallel.                                                                                                                                                                                                                                                                                                                 |
| Did I explain how the reasoning layer uses free-form guidance when the feature supports it?               | pass       | auto strategy delegates to LLM-assessed intent relationships. WHEN conditions on HANDOFF can be semantic (quoted text).                                                                                                                                                                                                                                                                                                          |
| Did I avoid making a preferred pattern sound like the only pattern?                                       | fix-needed | Article only shows primary_queue with no auto/sequential/parallel/disambiguate examples. Proposed update adds all.                                                                                                                                                                                                                                                                                                               |
| Could a customer build the same scenario in another code-supported way that the article does not mention? | fix-needed | Customer could use auto strategy, AGENT: (not SUPERVISOR:), YAML format, unknown_relationship_strategy. All must be covered.                                                                                                                                                                                                                                                                                                     |
| If the user asked, "Are you not considering all scenarios?", what exact evidence would I show?            | pass       | Scenario map covers 17 variants with evidence paths for each.                                                                                                                                                                                                                                                                                                                                                                    |

**Coverage verdict:** fix-needed

---

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                                                           | Required improvements                                                                                                                                                                                                                                      |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Correct primary_queue example; HANDOFF WHEN pattern uses intent.category correctly; companion agents defined inline | Must add auto strategy and relationship-based resolution rules; must explain parallel downgrade logic; must add unknown_relationship_strategy; must fix EXPECT_RETURN to RETURN; must add config precedence chain                                          |
| Senior content writer               | needs-improvement | Good opening scenario; concise; starts with user goal; scannable headings                                           | Missing Concept section per template; Common variations are bullets without examples; Troubleshooting should be table format per template; no range/constraint guidance for numeric fields                                                                 |
| Product manager/customer enablement | needs-improvement | Clear title; practical scenario; easy to find                                                                       | Customer cannot configure auto strategy or understand when/why parallel downgrades happen; no MESSAGES customization for UX; no queue expiry guidance; no disambiguation prompt UX customization; missing production-readiness detail on validation ranges |
