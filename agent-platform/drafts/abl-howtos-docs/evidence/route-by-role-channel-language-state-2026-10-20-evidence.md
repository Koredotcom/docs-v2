# Evidence: route-by-role-channel-language-state

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-role-channel-language-state.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/route-by-role-channel-language-state-2026-10-20-review.md`
**Topic:** 3.3 - How to route users by role, channel, language, or session state
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. The previous refresh used `hotfix_Artemis_1.4.4`. The 2026-08-21 evidence ran no harness.
**Verdict:** update-needed

## Validation harness

Same harness as the 3.1 evidence (`.../scratchpad/s3/`). `evaluateRoutingPrimitiveWhen` ran each channel, language, role, and state condition on sample session contexts. The code repo was not modified. Runtime services were not started.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/runtime-executor.ts` (`initialData` near 8259) | `session.channel` is `options.channelType` or `digital`. Caller data and `identityTier` spread into `session.*`. Platform fields win. |
| `apps/runtime/src/services/execution/interaction-context.ts` (`applyResolvedInteractionContextToSessionData`, `canonicalizeLanguage`) | `session.interaction.current` holds `language`, `locale`, `timezone`, `source`, `confidence`, `resolvedAt`. Language is the lowercase primary subtag. |
| `packages/shared-kernel/src/types/index.ts` (`InteractionContext`) | Field list. There is no `channel` field. |
| `apps/runtime/src/channels/manifest.ts` | Channel types. Nine have `isVoice: true`. |
| `packages/shared-auth/src/types/index.ts` (`CallerContext`) | No role field. `identityTier`, `customerId`, `channel`, others. |
| `apps/runtime/src/services/execution/routing-executor.ts` (guard near 10100, `evalCtx` near 18480) | Guard context is thread or session values. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | Outcome kinds. `intent` is a semantic root. |
| `apps/runtime/src/services/execution/routing-availability.ts`, `routing-availability-snapshot.ts` | `ENABLED_WHEN` reads session values. Missing means disabled. |
| `apps/runtime/src/services/execution/prompt-builder.ts` | One action per target. `[Priority N]`. |
| `packages/compiler/src/platform/ir/compiler.ts` | `priority: idx + 1`. `compileFailureHandling`. `default_agent`. |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx`, `behavior-profiles.mdx` (secondary) | `channel.name` is for behavior profiles. `ENABLED_WHEN` may read `session.*`. |

Existing published articles read for consistency: `design-supervisor-routing-agent.md`, `use-agent-execution-pipeline.md`, `initialize-session-before-first-turn.md`, `run-auth-profile-lookup-on-start.md`, `design-channel-specific-welcome.md`.

## Drift analysis (1.4.4 to 1.8.1)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| `session.interaction.current.*` | New in 1.8.1. `applyResolvedInteractionContextToSessionData` is absent from 1.4.4. | The language paths in the old article are valid in 1.8.1. |
| Route admission, availability | New in 1.8.1. | `ENABLED_WHEN` variation. Guard explanation. |
| `routing_primitive_when` trace event | Absent from 1.4.4 and 1.8.1 code. The old article named it. | Replaced with `handoff_condition_check` fields `result`, `whenOutcome`, `evaluatedContext`. |
| Channel types | `workflow` added to the manifest in 1.8.1. The voice family is nine types. | Voice `IN [...]` list. |
| `PRIORITY:` | Parsed, never compiled, in both versions. | Old variation removed. |
| `ON_FAILURE: "text"` | Fails with `INVALID_HANDOFF_FAILURE_ACTION` in both versions. | Old example fixed. |
| `CEL_CONDITION_UNRESOLVED_CALL` | New in 1.8.1. Warns on `a == "x" AND "phrase"`. | Old combined example removed. |
| `map` direction | Child to parent in both versions. | Corrected. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `session.channel == "voice"` | yes | `deterministic_pass` with `session.channel` set (harness). | covered |
| Voice family with `IN [...]` | yes | `deterministic_pass` for `voice_twilio` (harness). Nine `isVoice` types in the manifest. | covered |
| `channel.name`, `system.channel` in `WHEN` | no | `deterministic_fail`. `channel.name` compiles silently. `system.channel` gives `UNDEFINED_CONDITION_VAR`. | covered (mistakes) |
| `session.interaction.current.channel` | no | Type has no such field. | covered (concept) |
| Language `session.interaction.current.language == "es"` | yes | `deterministic_pass`. Value is the primary subtag. | covered |
| Locale and time zone paths | yes | Type fields. Harness clean for locale. | covered (locale variation, table for time zone) |
| `session.identityTier` | yes | Evaluator and harness. | covered |
| Role from caller data (`session.user_role`) | yes | Caller data spreads into `session.*`. Evaluator pass and fail. | covered |
| Role from a lookup or `GATHER` | yes | Session variable path. | covered (table row) |
| State from a child return | yes | Harness clean. `map` direction error (harness). | covered (variation) |
| Combined `AND`/`OR` conditions | yes | Evaluator pass. Harness clean. | covered |
| Quoted phrase inside `AND` | no | Compiler warns `CEL_CONDITION_UNRESOLVED_CALL`. Evaluator passes it as true. | covered (warning) |
| `IS NOT SET` on a dotted path | no (unreliable) | Evaluator: false for a null path (harness). | covered (variation note, mistake) |
| `ENABLED_WHEN` by channel | yes | Harness clean. | covered |
| Ties between true routes | yes | Prompt builder `[Priority N]`. Model chooses. | covered |
| `WHEN: true` fallback | yes | Harness clean. | covered |
| `router` role asks one question | yes | Design article evidence (1.3). | covered (one sentence) |
| `ON_FAILURE` | yes | Harness clean. Bare string error. | covered |
| Behavior profiles by context | yes | Different feature. | out of scope: related article |
| Remote targets, `ASYNC` | yes | Parser. | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Evaluator results on sample contexts. Guard close-read. | covered | Not run end to end. |
| Required companion resources identified | Five-file project. Variation companions named. | covered | None. |
| Referenced variables have sources | Table "Values you can test". `session.user_role` labeled a project assumption. | covered | None. |
| Fallback/failure/ambiguity behavior verified | `WHEN: true`, ties, `ON_FAILURE`, `router` role. | covered | None. |
| Customer verification path defined | Six steps naming trace fields. | covered | None. |
| Production readiness checklist included | Eight items. | covered | None. |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 5 (supervisor plus four agents) | full-document set | `validateABL` harness, validated together (`chk.py`) | pass | none | rewritten. The old example was one block, used semantic role and fallback routes, and relied on `PASS` fields with no source. |
| Block 6 (combined channel and language) | section-snippet | Entries replaced, project validated with `Spanish_Voice_Agent` | pass | none | new |
| Block 7 (locale) | section-snippet | Same method with `Mexico_Service_Agent` | pass | none | kept |
| Block 8 (state from a child return) | section-snippet | Same method with `Language_Choice_Agent` | pass | none | rewritten. The old route used a quoted phrase and a reversed `map`. |
| Block 9 (`ENABLED_WHEN`) | section-snippet | Same method | pass | none | new |
| Block 10 (`ON_FAILURE`) | section-snippet | Same method | pass | none | rewritten. The old bare string fails to compile. |

Negative tests: `ENABLED_WHEN: intent.category == "voice"` gives `ENABLED_WHEN_SEMANTIC_REFERENCE`. `WHEN: system.channel == "web_chat"` gives `UNDEFINED_CONDITION_VAR`. `WHEN: session.channel == "voice" AND "the user is a VIP"` gives `CEL_CONDITION_UNRESOLVED_CALL`.

Evaluator results used in the article: `session.identityTier == 2 AND session.user_role == "admin"` is pass with tier `2`, fail with tier `0`, and fail when `user_role` sits outside the `session` namespace. `session.channel IN ["voice","voice_twilio"]` passes for `voice_twilio` and fails for `web_chat`. `session.interaction.current.language == "es"` passes for `es` and fails with no value.

## Lessons check

| Lesson | Result |
| ------ | ------ |
| 1. Bare quoted `WHEN` is truthy | Applied. Quoted fallback and role routes removed. Phrase inside `AND` is covered. |
| 2. Channel values | Applied. `session.channel` in `HANDOFF` and `ENABLED_WHEN`. `channel.name` is for profiles. `system.channel` is for escalation routing. `session.interaction.current.channel` does not exist. |
| 3. Quoted `TIMEOUT` | Not used. |
| 4. History default `full` | One line in How it works. |
| 5. `ESCALATE` | Listed as an `ON_FAILURE` value only. |
| 6. Settings compiled, not only parsed | `PRIORITY` is parsed only. Applied. |
| 7. Trace events emitted | `routing_primitive_when` is not emitted. Removed. `handoff_condition_check` is emitted. |
| 8. `!= ""` and `IS SET` | `IS NOT SET` limits documented. |
| 9. `AGENTS:` discarded | Not used. |
| 10. `COMPLETE WHEN: true` stubs | Stand-ins have a goal only. |
| 11. Entry flow `THEN: COMPLETE` | Not applicable. |
| 12. `ENABLED_WHEN`, `MULTI_INTENT` | `ENABLED_WHEN` covered. |
| 13. Delegate child input | Not applicable. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Removed the invented trace event, the semantic-AND claim, and the semantic role route. Added manifest-based channel values. | 5 |
| Depth of conceptual explanation | 3 | Values table, `WHEN` versus `ENABLED_WHEN`, tie rule, role trust. | 5 |
| Readability and usability | 4 | Tables for values and mistakes. | 4 |
| Coverage of examples | 2 | Five-file project and five validated snippets. | 4 |
| Search and discovery quality | 4 | Channel, language, role terms in headings and tables. | 5 |
| Completeness of workflow and failure modes | 3 | Fallback, `ON_FAILURE`, refusal, router role. | 4 |
| Customer/partner self-service readiness | 3 | Companion agents defined. Assumptions labeled. | 4 |
| Scenario comprehensiveness | 3 | All `yes` rows covered or scoped out. | 4 |
| Article completeness | 4 | Template sections present. | 5 |

**Gate result:** pass (minimum score 4)

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, types, compiler, runtime, tests, and examples? | pass | See source table. |
| Did I search synonyms and neighboring constructs? | pass | `channel`, `channelType`, `language`, `locale`, `interaction`, `identityTier`, `role`, `callerData`, `ENABLED_WHEN`, `BEHAVIOR_PROFILE`. |
| Did I identify every authoring style, alias, default, and fallback? | pass | Deterministic, combined, `IN`, `WHEN: true`, `ENABLED_WHEN`. |
| Did I separate helpers from executable configuration? | pass | `HANDOFF` and `ENABLED_WHEN` execute. |
| Did I explain how the reasoning layer uses guidance? | pass | Model path, tie rule, `Use when:` text. |
| Did I avoid making one pattern the only one? | pass | Three guard styles. Profiles named as an alternative. |
| Could a customer build the scenario another supported way? | pass | Behavior profiles, ON_START branching, and flows are named or in related articles. |
| What evidence shows all scenarios are considered? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Correct paths and namespaces. Spoofing risk named. Voice family. | None blocking. Channel values for SDK channels need a trace check, which the article tells the reader to do. |
| Senior content writer | ready | Values table first, short sections. | None. |
| Product manager/customer enablement | ready | Verification names fields to read. Mistakes table covers common path errors. | None. |

## Documentation discrepancies for human review

- The published 1.3 article uses `ENABLED_WHEN: channel.name == "voice"`. Availability evaluates session values. `channel.name` is absent there, so the route would be disabled. Use `session.channel`.
- Public reference `behavior-profiles.mdx` documents `channel.name` for behavior profile `WHEN`. That is correct for profiles and wrong for `HANDOFF`.
- Public reference says `ENABLED_WHEN` is evaluated "once before any turn". The code recomputes when the referenced values change.
- Public reference `ENABLED_WHEN` text lists `_metadata.*`, `env.*`, `caller.*`, `session.*`, `user.*` as readable. Only `session.*` and memory fields were verified here.
- The compiler warns `CEL_CONDITION_UNRESOLVED_CALL` ("can never be true") for `a == "x" AND "phrase"`. The runtime evaluator treats the phrase as true. Engineering should reconcile the two.
- `IS NOT SET` is true for a missing key in `nullSafeEvaluateCondition` and false in `evaluateRoutingPrimitiveWhen` after null injection. Engineering should confirm the intended meaning.
- Public reference `multi-agent-and-supervisor.mdx` documents `ROUTING:` with `CONSTRAINTS: channels: [voice]`. The parser rejects `ROUTING:` with `E104`.
- Published page `agent-platform/abl/how-to/route-by-role-channel-language-state.mdx` needs the same changes after approval.

## Open questions

- Which `session.channel` strings do SDK channels send? The manifest lists the registered types. `web` and `digital` are not manifest keys. The article tells readers to read the value in a trace.
- How does a deployment supply a verified role? No platform role field exists. The article names caller data, a lookup, or `GATHER`.
- The pipeline-on path was not run. Context routes without `intent.category` do not use the classifier, per the pipeline article.
