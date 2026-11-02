# Evidence: design-reusable-agent-modules

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-reusable-agent-modules.md`
**Topic:** 1.9 - How to design reusable agents and modules for large projects
**Workflow:** Refresh against `release_Artemis_1.9.0` (target release). Previous scan: `hotfix_Artemis_1.8.1`, evidence `design-reusable-agent-modules-2026-10-19-evidence.md`.
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/design-reusable-agent-modules-2026-11-01-review.md`

## Branch relationship

`release_Artemis_1.9.0` is not a descendant of `hotfix_Artemis_1.8.1` (merge base `15eeb40ef77`). A diff shows hotfix-only commits as removals. Every claim below is checked against the 1.9.0 source.

## Source files inspected

| File (code repo) | Purpose |
| ---------------- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`normalizeHandoffHistoryValue` line 9188, `parseHandoffHistoryBlock` line 9192, `E720` near line 6493) | `HISTORY` string and block forms. Block errors `E328`, `E329`, `E330`, `E331`. Removed tool import syntax. |
| `packages/core/src/types/agent-based.ts` (`HandoffConfig`, `HandoffContext`) | Typed AST. Diff: only the `ON_RETURN` comment area and the pipeline `parentReturn` type changed. |
| `packages/compiler/src/platform/ir/compiler.ts` (`compileHistoryStrategy` line 4698, W721 near line 777) | History lowering. An unrecognized value returns `undefined` with no diagnostic. |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` | No diff. Handoff target must exist in the compilation (`INVALID_HANDOFF_TARGET`). |
| `packages/compiler/src/platform/ir/validate-field-refs.ts` | `turn_input` and constraint display condition changes. `PASS` field behavior unchanged. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts`, `abl-contract-registry.ts` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`, `DEFAULT_AUTO_HANDOFF_HISTORY_FALLBACK_LAST_N = 5`. `handoff.on_return` is now `support: 'wired'` with syntax `ON_RETURN: { action\|handler, resume_with?, map?, set? }`. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`resolveHistoryStrategy` line 28000, history application near lines 13416 and 16422) | `full`, `last_n`, `none`, `summary_only`, `auto` handling. `resolveHistoryStrategy` is identical to 1.8.1. |
| `packages/project-io/src/module-names.ts`, `module-symbols.ts`, `module-release/*` | No diff except `module-peer-validator.ts` (zod compatibility wrappers only). Mounted names `alias__symbol`. Contract, peers, diff, publish safety, selector unchanged. |
| `packages/project-io/src/module-release/module-contract.ts` | Contract extraction also covers workflows and knowledge assets (parameters `workflows`, `knowledgeAssets`). |
| `packages/project-io/src/dependencies/dependency-extractor.ts`, `dependency-graph.ts`, `circular-detector.ts`, `import/import-validator.ts` | Changed: `profile_use` edges now come from the parser (underscore spelling, indent rules). `validateDependencies` reports missing handoff and delegate targets, missing profiles, and cycles. Import validity requires all three to be clear. |
| `packages/project-io/src/types.ts` (`ProjectManifest`, `ProjectManifestV2`, `ManifestAgent`) | Manifest fields. New `strict_validation` on V2. |
| `examples/retail`, `examples/a2a-demo` | Real supervisor and specialist usage (checked in the previous scan, no change needed). |

## Drift analysis 1.8.1 to 1.9.0

| Change | Evidence | Impact on article |
| ------ | -------- | ----------------- |
| `handoff.on_return` moves from `partial` to `wired` and gains `resume_with` and `set`. | `abl-contract-registry.ts` diff | The article did not mention `RETURN` or `ON_RETURN`. Added one short paragraph in "Shared specialist agent". |
| `profile_use` dependency detection uses the parser. Prose or flow-step mentions no longer count. Missing profile blocks import. | `dependency-extractor.ts` diff, `dependency-graph.ts` | Added to the shared behavior profile variation. |
| Parser warns `W498` for `USE BEHAVIOR_PROFILE:` inside a flow step. | Parser diff | Added "at the agent level" wording. Details live in the profile article. |
| `ProjectManifestV2.strict_validation` | `types.ts` diff | Not added. Not a reuse concern. |
| `LAYER_SIZE_LIMITS.evals` changed to 498 entries. | `types.ts` diff | None. |
| Module release code unchanged (contract, peers, diff, publish safety, selector, config overrides). | `git diff --stat` shows only `module-peer-validator.ts`, zod wrapper change. | All module claims re-verified, no change. |
| `E720`, `W721`, `INVALID_HANDOFF_TARGET`, history default `full`, `auto` fallback 5 | Source and harness | Unchanged. Article text refined for `auto` (summary when declared, else last 5). |
| Handoff `HISTORY` block form and silent drop of unknown values existed before but were not in the article. | Parser, harness | Added. |
| Contract also provides workflows and knowledge assets. | `module-contract.ts` | One sentence added. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Supervisor plus reusable specialists through `HANDOFF` | yes | Harness: three-file set passes | covered |
| One specialist shared by several supervisors | yes | Cross-agent validation per target | covered |
| Return control with `RETURN: true` and `ON_RETURN` | yes | Harness `retsup.abl` passes. Registry `wired`. | covered (new, short) |
| Channel-specific wrapper supervisor | yes | Same mechanism | covered |
| Shared standalone behavior profile | yes | `USE BEHAVIOR_PROFILE:`, dependency validation | covered |
| `HISTORY` string values (`full`, `summary_only`, `last_N`, `none`, `auto`) | yes | `compileHistoryStrategy`, harness IR | covered |
| `HISTORY` block (`MODE`, `COUNT`) | yes | Harness IR: `last_n` 3 | covered (new) |
| Unknown `HISTORY` value | silently ignored (default `full`) | Harness IR: no `history` field, no diagnostic | covered (new) |
| Remote specialist (`LOCATION: REMOTE`) | yes | Harness `remote.abl` passes | covered in prose |
| `DELEGATE` to a shared agent | yes | `validate-cross-agent.ts` | gap: delegation topics own it. Open question. |
| Project manifest composition | yes | `ProjectManifest`, `ProjectManifestV2` | covered |
| Tool reuse through Project Tools | yes | `E720`, `W721` | covered |
| `FROM ... USE` and `USE TOOL:` imports | no (error) | Harness: `E720` | covered |
| Module release and import across projects | yes | `project-io/src/module-release/*` | covered |
| Mounted names `alias__AgentName` | yes | Harness with stub passes. Without stub: `INVALID_HANDOFF_TARGET`. | covered |
| Peer modules, upgrade diff, publish safety, config overrides | yes | Source files above | covered |
| Module bundled workflows and knowledge assets | yes | `module-contract.ts` | named in one sentence, details out of scope |
| Import-time dependency validation (missing targets, missing profiles, cycles) | yes | `dependency-graph.ts`, `import-validator.ts` | covered (new) |
| Studio screens for publish and import | not verified | No UI code read | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | History handling in `routing-executor.ts`. Mounted stubs in validation. | covered | Runtime resolution of mounted names not traced beyond validation. |
| Required companion resources identified | Specialists defined in the example. Module snippet states alias and release assumption. | covered | none |
| Referenced variables have sources | `customer_id`, `locale`, `order_id` are project-local assumptions stated in the article. | covered | none |
| Fallback/failure/ambiguity behavior verified | `INVALID_HANDOFF_TARGET`, `E720`, `W721`, peer blocking, publish blocking, silent `HISTORY` drop | covered | No-match routing is in the supervisor article. |
| Customer verification path defined | Validate together, entry point tests, history check, trace, module prerequisites, contract diff | covered | none |
| Production readiness checklist included | Present | covered | none |

## Example validation

Harness: `validate.mjs` from the session scratchpad on 1.9.0 package sources. Run from `/tmp`. Scratch files in `scratchpad/t19/`. IR inspection with `scratchpad/t19/ir.mjs`.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 3 (`Commerce_Supervisor`, `Product_Advisor`, `Order_Status_Agent`) | full-document set | `validate.mjs sup.abl adv.abl ord.abl` | pass | none | kept |
| Block 4 (`HANDOFF` to `orders__Order_Status_Agent`) | section-snippet | Wrapped in `SUPERVISOR: Shop_Supervisor` with stub agent `orders__Order_Status_Agent` (`mounted.abl`, `stub.abl`) | pass | none | kept |

Other checks on 1.9.0:

| Input | Result |
| ----- | ------ |
| Block 1 alone | `INVALID_HANDOFF_TARGET` and `INVALID_ROUTING_TARGET` (six errors) |
| Mounted handoff without stub | `INVALID_HANDOFF_TARGET`, `INVALID_ROUTING_TARGET` |
| `HISTORY: last_5` and block `MODE: last_n`, `COUNT: 3` | No diagnostics. IR `history` `{last_n: 5}` and `{last_n: 3}`. |
| `HISTORY: lastfive` | No diagnostics. IR has no `history`. Runtime default `full` applies. |
| `RETURN: true` with `ON_RETURN: action: continue` | No diagnostics |
| `FROM "./shared.tools.abl" USE: lookup_order` in `TOOLS` | `E720` |
| Remote handoff with `LOCATION: REMOTE`, an `ENDPOINT`, `PROTOCOL: A2A` (harness-only endpoint) | No errors, no warnings |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Files above. Module code read again, unchanged. |
| Did I search synonyms and neighboring constructs? | pass | `module`, `mounted`, `alias__`, `peer`, `contract`, `manifest`, `REMOTE`, `DELEGATE`, `RETURN`, `ON_RETURN`, `USE BEHAVIOR_PROFILE`, `coordination_defaults`, `autoHistoryFallbackLastN`. |
| Did I identify every supported style, alias, default, and fallback? | pass | `HISTORY` string and block forms, default, `auto` fallback. `coordination_defaults` (project default history) has plumbing in the runtime but no authoring path found. Recorded as an open question. |
| Did I distinguish optional from required configuration? | pass | `HISTORY`, `PASS`, `RETURN` optional. |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Quoted semantic `WHEN` text in examples. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Six reuse variations plus modules. |
| Could a customer build the scenario another supported way? | pass | `DELEGATE` to a shared agent not covered, listed as a gap. |
| If asked "Are you not considering all scenarios?", what would I show? | pass | Scenario map. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Same-compilation rule shown with harness result. History behavior matches the runtime resolver. Import validation behavior stated. | none |
| Senior content writer | ready | Reuse level table before examples. Added text is short. | none |
| Product manager/customer enablement | ready | The article names the silent `HISTORY` failure and the import-time checks a partner meets. | none |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Added history block form, `auto` fallback detail, `RETURN`, import validation with file evidence. | 5 |
| Depth of conceptual explanation | 5 | Kept four reuse levels. | 5 |
| Readability and usability | 4 | Kept structure. | 4 |
| Coverage of examples | 4 | Revalidated all blocks on 1.9.0. | 4 |
| Search and discovery quality | 4 | Added `HISTORY` troubleshooting row. | 5 |
| Completeness of workflow and failure modes | 4 | Added silent `HISTORY` drop and import validation. | 4 |
| Customer/partner self-service readiness | 5 | No repo paths. | 5 |
| Scenario comprehensiveness | 4 | Added `RETURN`, block `HISTORY`. `DELEGATE` and bundled assets scoped out. | 4 |
| Article completeness | 5 | Template sections present. | 5 |

**Minimum final score:** 4

**Gate result:** pass

## Doc discrepancies for human review

- Carried over: Product owners must confirm that "module release", "alias", and "contract" match the Studio UI.
- Carried over: mounted-name runtime resolution was checked at validation level only.
- Carried over: `PASS` fields have no producer check. A `PASS` field with no source compiles silently.
- New: an unrecognized `HISTORY` value is dropped without any diagnostic. Consider an engineering ticket for a compile warning.
- New: `coordination_defaults.defaultHistoryStrategy` and `autoHistoryFallbackLastN` are read by the runtime but this scan found no authoring path. The article does not mention them.
- New: the `ON_RETURN` paragraph is brief. The registry marks the construct `wired`. A fuller treatment belongs in the supervisor and handoff articles.

## Open questions

- Should `DELEGATE` to a shared specialist appear in this article?
- Should the article cover module bundled assets (workflows, knowledge) beyond one sentence?
- Does Studio use the words alias, release, and contract?
- Is there a customer-facing way to set the project default history strategy?
