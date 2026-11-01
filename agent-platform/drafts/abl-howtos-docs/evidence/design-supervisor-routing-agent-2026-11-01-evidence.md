# Evidence: design-supervisor-routing-agent

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-supervisor-routing-agent.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/design-supervisor-routing-agent-2026-11-01-review.md`
**Topic:** 1.3 - How to design a supervisor that routes users to specialist agents
**Workflow:** Refresh against `release_Artemis_1.9.0`. The previous scan used `hotfix_Artemis_1.8.1` (evidence `design-supervisor-routing-agent-2026-10-19-evidence.md`).
**Verdict:** update-needed (small)

**Validation harness:** `node /private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/9ea46136-0cae-4156-8653-b15e7af1a4e3/scratchpad/harness/validate.mjs <files>` from `/tmp`. It runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators over the files as one project at `release_Artemis_1.9.0`. The code repo was not modified and no branch was switched. Runtime services were not started, so runtime behavior is close-read.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`readRouteCondition`, `applyRouteCondition`, `parseAgentsSection`, role parsing near line 13813) | Route condition reading, `ENABLED_WHEN_EMPTY`, discarded `AGENTS:`, role values |
| `packages/core/src/parser/condition-quotes.ts` (new in 1.9.0) | `maskConditionLineComments`, `isCommentOnlyCondition`, `unwrapWholeQuotedCondition`, `normalizeRoutingConditionAtomTrivia` |
| `packages/compiler/src/platform/ir/compiler.ts` (comment-only guard on `doc.handoff` and `doc.delegate`, role checks near line 1320 to 1360, `E728`) | Compile-time rejection, role rules |
| `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` | Structured versus plain-language `WHEN` |
| `packages/compiler/src/platform/ir/multi-intent-config.ts` | Multi-intent defaults (unchanged) |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | `WHEN` evaluation, comment masking, quoted expression unwrap |
| `apps/runtime/src/services/execution/routing-executor.ts` (`resolveHistoryStrategy`, `resolveHandoffAncestorResume`) | History default, completed permanent parent hand-back |
| `apps/runtime/src/services/execution/route-admission/handoff-machine.ts`, `types.ts` | New `completedPermanentParentFound`, `completed_parent_already_unwound_in_flight` |
| `apps/runtime/src/services/execution/prompt-builder.ts` (clarification action near line 5045, `isOrdinaryInformationChildCompletion`, `buildNoVisibleRouteGuidancePromptSection`) | Router clarification, message-only child exit under a multi-intent supervisor, no-route guidance |
| `apps/runtime/src/services/execution/supervisor-route-catalog.ts` | Explicit supervisor catalog refactor (`resolveExplicitSupervisorRouteCatalog`) |
| `apps/runtime/src/services/execution/agent-execution-role.ts` | Accepts IR 1.3 |
| `packages/compiler/src/platform/ir/schema.ts` | `ir_version` 1.3, `pipeline.parentReturn` |
| `apps/runtime/src/__tests__/execution/ablp-6062-flow-entry-turn-handback.test.ts` | FLOW specialist hand-back to supervisor |
| `examples/device-care-support` | No change since 1.8.1 |

Files with no diff since 1.8.1: `routing-availability.ts`, `routing-availability-snapshot.ts`, `route-admission/surface.ts`, `validate-cross-agent.ts`, `validate-preflight.ts`, `validate-authored-gate-facts.ts`, `multi-intent-config.ts`, example agents.

## Drift analysis (1.8.1 to 1.9.0)

`git diff hotfix_Artemis_1.8.1 HEAD` over the routing files: 13 files, +4772 / -750. `git log` shows 3351 commits on the release range. Every article claim was re-checked against current code, not only the diff.

| Item | Finding | Impact |
| ---- | ------- | ------ |
| Comment-only `WHEN` or `ENABLED_WHEN` | New. A condition holding only a `//` comment fails to compile. `WHEN` gives `AGENT_COMPILATION_FAILED` with message `WHEN is required`. `ENABLED_WHEN` gives `ENABLED_WHEN_EMPTY` plus `ENABLED_WHEN is required`. A blank `WHEN:` still compiles | One paragraph and one troubleshooting row added |
| `//` trailing comment in a route expression | New. The runtime masks the comment before it evaluates `customer_id IS SET // known customer`. Harness compiles clean | Covered by the same paragraph |
| `//` inside a quoted phrase | Stays text. Harness `c3` compiles clean | Covered |
| Quote handling in `WHEN` | `unwrapWholeQuotedCondition` replaces the old first and last character check. Two quoted operands count as an expression. The classifier patterns for `AND`, `OR`, `NOT`, comparisons, and `contains` family are unchanged | No change. Existing quoted-phrase rule stands |
| Completed `RETURN: false` parent hand-back | New. A child that a `RETURN: false` handoff started may hand back to its completed direct parent, when the child declares a route to it. Test covers a FLOW specialist on the supervisor entry turn | Out of scope. Return handling topics. Listed in doc review |
| Multi-intent child exit | New. A stateless information specialist under a supervisor that authors `MULTI_INTENT` gets a message-only exit. The article's specialists use `GATHER`, so they are not affected | No article change. Belongs to the multi-intent article |
| `pipeline.parentReturn` (`minConfidence`, `ignoreAmbiguous`) | New project setting. The pipeline classifier may return a caller from a specialist to the supervisor. Diagnostic `EXECUTION_PIPELINE_PARENT_RETURN_CONFIDENCE_RANGE` | Out of scope. `EXECUTION.pipeline` topics |
| `ir_version` 1.3 | New IR version. `hasCoordinationExecutionRole` accepts it | No customer impact |
| Supervisor route catalog | Refactor into `resolveExplicitSupervisorRouteCatalog`. Same selection rules | None |
| `E728`, `UNDECLARED_INTENT_CATEGORY`, `ENABLED_WHEN_SEMANTIC_REFERENCE`, `ENABLED_WHEN_ALL_DISABLED_RISK`, router clarification, `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR` | Unchanged. `git diff -S` shows no change to the code names, and the harness reproduces `E728` | None |
| History default `full`, project override | Unchanged (`resolveHistoryStrategy`, `DEFAULT_HANDOFF_HISTORY_STRATEGY`) | None |
| Multi-intent defaults | Unchanged: enabled, `primary_queue`, `max_intents` 3 | None |
| `AGENTS:` discarded | Unchanged (`parseAgentsSection`) | None |
| Roles | `router` and `orchestrator` only. `router` needs a `HANDOFF`. Non-orchestrator roles cannot use `DELEGATE`. Unchanged | None |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Declared intent category routing | yes | Harness clean on blocks 1 to 4 | covered |
| Inferred categories when `INTENTS:` is absent | yes | Unchanged compiler branch | covered |
| Undeclared category warning | yes | `UNDECLARED_INTENT_CATEGORY` unchanged | covered |
| Structured field condition | yes | `evaluateRoutingPrimitiveWhen` | covered |
| Quoted plain-language `WHEN` | yes | Harness blocks 5 to 7 clean | covered |
| Unquoted plain-language `WHEN` | yes, with warnings | Unchanged from 1.8.1 | covered |
| Quoted phrase with `AND`, `OR`, `NOT`, comparison, keywords | yes (expression) | Classifier unchanged. `EXPRESSION_SHAPED_ROUTING_GUARD` | covered |
| `//` line comment in a condition | yes (new) | `maskConditionLineComments`. Harness `c2`, `c3` clean | covered (new) |
| Comment-only condition | no (compile error) | Harness `c1`, `c4` | covered (new) |
| `WHEN: true` default route | yes | `UNCONDITIONAL_ROUTING_GUARDS` | covered |
| `RETURN: true` or `false` | yes | Parser, prompt builder | covered |
| `PASS` as typed inputs | yes | `buildHandoffInputSchema` | covered |
| `HISTORY` modes and project default | yes | `resolveHistoryStrategy` | covered |
| Roles `router`, `orchestrator`, no `BEHAVIOR` | yes | Compiler lines 1320 to 1360. Harness `s8` clean | covered |
| `ENABLED_WHEN` with `ON_FAILURE` | yes | Harness `s9` clean | covered |
| `MULTI_INTENT` `strategy: disambiguate` | yes | Harness `s10` clean | covered |
| `ESCALATE` human route | yes | Harness block 4 clean | covered |
| One supervisor per project | yes | Harness reproduces `E728` | covered |
| Specialist hand-back to supervisor (completed `RETURN: false` parent) | yes (new) | `resolveHandoffAncestorResume`, ABLP-6062 test | out of scope: return handling topics |
| `pipeline.parentReturn` | yes (new) | `schema.ts`, `flow-step-executor.ts` line 5756 | out of scope: `EXECUTION.pipeline` topics |
| `PRIORITY`, `ON_RETURN`, `CONTEXT:` form, remote targets, flow-based supervisors, pipeline classifier categories | yes | Unchanged from 1.8.1 | out of scope with the same reasons as 1.8.1 |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Routing action text, admission, availability, roles, comment masking read in the files above | covered | Close-read, not run |
| Required companion resources identified | Supervisor, three specialists, `Live_Agent`. Billing set defines both specialists | covered | None |
| Referenced variables have sources | `customer_id` is a `PASS` field the model fills and each specialist gathers again | covered | None |
| Fallback, failure, ambiguity behavior verified | `human_help` route, router clarification, `WHEN: true`, `MULTI_INTENT`, `ENABLED_WHEN` plus `ON_FAILURE` | covered | None |
| Customer verification path defined | Seven steps with utterances and trace event names | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 4 (support supervisor, three agents) | full-document set | Harness, one project | pass | none | kept |
| Blocks 5 to 7 (billing supervisor, two agents) | full-document set | Harness, one project | pass | none | kept |
| Block 8 (`BEHAVIOR: ROLE: router`) | section-snippet | Appended to block 1, with blocks 2 to 4 | pass | none | kept |
| Block 9 (`ENABLED_WHEN` entry) | section-snippet | Replaces first `HANDOFF` entry of block 1, with blocks 2 to 4 | pass | none | kept |
| Block 10 (`MULTI_INTENT`) | section-snippet | Appended to block 1, with blocks 2 to 4 | pass | none | kept |
| Blocks 1 to 7 together | negative check | Harness, one project | 1 error `E728` | as documented | documented |
| Comment-only `WHEN` (scratch `c1`) | negative check | Harness | error `WHEN is required` | as documented | documented |
| Comment-only `ENABLED_WHEN` (scratch `c4`) | negative check | Harness | errors `ENABLED_WHEN_EMPTY`, `ENABLED_WHEN is required` | as documented | documented |
| Trailing `//` comment (`c2`), quoted `//` (`c3`) | negative check | Harness | pass | none | documented |

Scratch files: `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/9ea46136-0cae-4156-8653-b15e7af1a4e3/scratchpad/supervisor-design`. The article adds no new fenced `abl` block.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Source table |
| Did I search synonyms and neighboring constructs? | pass | `HANDOFF`, `routing`, `handoff_to_`, `delegate`, `ENABLED_WHEN`, `BEHAVIOR`, `ESCALATE`, `MULTI_INTENT`, `AGENTS`, `parentReturn`, `completedPermanentParent` |
| Did I identify every supported style, alias, default, fallback? | pass | Scenario map |
| Did I distinguish optional helpers from required configuration? | pass | `AGENTS:` ignored, `INTENTS:` optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | "How routing works" |
| Did I avoid making one pattern sound like the only one? | pass | Four condition styles, two roles |
| Could a customer build this another supported way? | pass | New hand-back and `parentReturn` listed as out of scope with reasons |
| What evidence answers "are you not considering all scenarios"? | pass | Scenario map and drift table |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Claims re-verified on 1.9.0. Comment rule matches parser, compiler, and runtime | None |
| Senior content writer | ready | Change is two sentences and one row. Voice kept | None |
| Product manager/customer enablement | ready | Error text is searchable. Examples unchanged and valid | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified every claim on 1.9.0. Added comment rule with harness proof | 5 |
| Depth of conceptual explanation | 5 | None needed | 5 |
| Readability and usability | 5 | None needed | 5 |
| Coverage of examples | 4 | Revalidated all ten blocks | 4 |
| Search and discovery quality | 4 | Added `WHEN is required` and `ENABLED_WHEN_EMPTY` row | 5 |
| Completeness of workflow and failure modes | 4 | Added comment-only failure | 5 |
| Customer/partner self-service readiness | 5 | No repo paths | 5 |
| Scenario comprehensiveness | 4 | New hand-back and `parentReturn` scoped out | 4 |
| Article completeness | 5 | Template sections present | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- Published page `agent-platform/abl/how-to/design-supervisor-routing-agent.mdx` needs the same two edits after approval.
- A quoted phrase such as "customer in good standing" matches the classifier `in` pattern and runs as an expression. The article lists the main triggers only. Carried over from 1.8.1. Decide whether to list it.
- Article 1.4 (`define-agent-responsibilities`) used a `Live_Agent` stub that only prints text. Article 1.3 uses `ESCALATE`. The 1.4 refresh aligns it.
- The article tells readers that `RETURN: false` means the target keeps ownership. In 1.9.0 a child can hand back to its completed parent when it declares a route to it. Decide whether a return handling article should state this.

## Open questions

- Does a supervisor `GATHER` with `required: true` ever stop routing? Carried over. The article tells readers not to rely on it.
- The ESCALATE link target `/agent-platform/abl/reference/multi-agent-and-supervisor#escalate` exists (section at line 847 of the reference). The page is the current public reference.
