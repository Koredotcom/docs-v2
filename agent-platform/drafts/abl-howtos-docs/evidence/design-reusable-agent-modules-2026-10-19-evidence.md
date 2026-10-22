# Evidence: design-reusable-agent-modules

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-reusable-agent-modules.md`
**Topic:** 1.9 - How to design reusable agents and modules for large projects
**Workflow:** Refresh against branch `hotfix_Artemis_1.8.1`. Previous refresh baseline: `hotfix_Artemis_1.4.4`.
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/design-reusable-agent-modules-2026-10-19-review.md`

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseHandoff`, `parseHandoffConfig` near line 7909, `E720` sites near lines 5813 to 5906, `normalizeHandoffHistoryValue`, `parseHandoffHistoryBlock`) | Handoff syntax (`TO`, `WHEN`, `PASS`, `SUMMARY`, `HISTORY`, `RETURN`, `LOCATION`, `ENDPOINT`, `PROTOCOL`, `ON_RETURN`). Removed tool import syntax. |
| `packages/core/src/types/agent-based.ts` (`HandoffConfig`, `HandoffContext`, `RemoteAgentConfig`) | Typed AST. |
| `packages/compiler/src/platform/ir/compiler.ts` (`compileHistoryStrategy`, `resolvePassFields`, W721 near line 743, handoff lowering near line 3623) | History strategies. `PASS` fields typed from `MEMORY` when declared. Signature drift warning. |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` | Handoff target must exist in the compilation. Remote handoffs skip the existence check. |
| `packages/compiler/src/platform/ir/validate-field-refs.ts` | `PASS` field names are consumer references without a producer warning. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts`, `abl-contract-registry.ts` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`. Compatibility note for `summary_only` and `auto`. |
| `apps/runtime/src/services/execution/routing-executor.ts` (history application near lines 12730 and 15500) | `full`, `last_n`, `none`, and `summary_only` handling at handoff. |
| `packages/project-io/src/module-names.ts`, `module-symbols.ts`, `module-release/module-agent-stubs.ts` | Mounted name `alias__symbol`. Stub agents let cross-agent validation accept module targets. |
| `packages/project-io/src/module-release/module-contract.ts` | Contract extraction: provided agents and tools, required env vars, auth profiles, connectors, MCP servers, config keys, mounted references to peer modules. |
| `packages/project-io/src/module-release/module-peer-validator.ts`, `config-overrides-validator.ts` | Peer requirements (exact or minimum version, non-transitive). Blocking and warning outcomes. Config override rules. |
| `packages/project-io/src/module-release/module-contract-diff.ts` | Breaking, non-breaking, and warning classification for upgrades. |
| `packages/project-io/src/module-release/module-publish-safety.ts` | Blocking checks for literal credentials. Non-portable warnings. |
| `packages/project-io/src/module-release/module-selector.ts` | Release selection by version or environment. |
| `packages/project-io/src/types.ts` (`ProjectManifest`, `ManifestAgent`, `DependencyValidation`), `dependencies/dependency-graph.ts` | Manifest fields. Missing and circular reference validation. |
| `examples/retail`, `examples/a2a-demo` | Real supervisor and specialist usage, remote handoff with `LOCATION: REMOTE`. |

## Drift since hotfix_Artemis_1.4.4

| Change | Impact on article |
| ------ | ----------------- |
| Handoff history default is `full` (already noted in the 2026-08-21 article). `auto` falls back to a bounded raw slice. | Article keeps the note and lists the options. |
| `E720` now also names `USE TOOL:` and implementation properties in agent `TOOLS`. | Article extends the tool guidance. |
| `validate-cross-agent.ts` grew by about 360 lines, including executable handoff authority checks. The target-exists rule is unchanged. | No article change beyond naming `INVALID_HANDOFF_TARGET`. |
| Module release features in `project-io` (contract, peers, diff, publish safety, selectors). | New article variation. The published article described only in-project reuse. |

The 2026-08-21 refresh checked only the `E720` rejection and the history default. It did not look at module release code.

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Supervisor plus reusable specialists through `HANDOFF` | yes | Harness: three-block set passes | covered |
| One specialist shared by several supervisors | yes | Cross-agent validation is per target | covered |
| Channel-specific wrapper supervisor | yes | Same mechanism | covered |
| Shared standalone behavior profile | yes | `USE BEHAVIOR_PROFILE:` | covered (short, links to the behavior profiles article) |
| `HISTORY` options (`full`, `summary_only`, `last_N`, `none`, `auto`) | yes | `compileHistoryStrategy`, harness compile output | covered |
| Remote specialist (`LOCATION: REMOTE`) | yes | Parser, harness validation passes | covered in prose. No code block, to avoid an example URL. |
| `DELEGATE` to a shared agent | yes | `validate-cross-agent.ts` delegate checks | gap: not covered. Delegation is a separate routing topic in the topic list. Listed in open questions. |
| Project manifest composition | yes | `ProjectManifest` | covered |
| Tool reuse through Project Tools | yes | `E720`, `W721`, `resolvedToolImplementations` merge in `compiler.ts` | covered |
| `FROM ... USE` and `USE TOOL:` imports | no (removed, error) | Harness: `E720` | covered |
| Module release and import across projects | yes | `project-io/src/module-release/*` | covered |
| Mounted names `alias__AgentName` in handoff targets | yes | Harness with stub agent passes | covered with snippet |
| Peer modules | yes | `module-peer-validator.ts` | covered |
| Module upgrade diff | yes | `module-contract-diff.ts` | covered |
| Module publish safety | yes | `module-publish-safety.ts` | covered |
| Module bundled knowledge assets, tables, workflows | yes | `module-contract.ts`, `knowledge-asset-materializer.ts`, `workflow-materializer.ts` | out of scope for this article: they belong to knowledge and workflow topics. Named in open questions. |
| Studio screens for publish and import | not verified | No UI code read | out of scope. Article avoids click paths. |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | History handling in `routing-executor.ts`. Mounted stubs in validation. | covered | Module runtime resolution of mounted names not traced beyond validation. See open questions. |
| Required companion resources identified | Specialists defined in the example. Module snippet states the alias and release assumption. | covered | none |
| Referenced variables have sources | `customer_id`, `locale`, and `order_id` have no declared source in the example. The article states the assumption. `validate-field-refs.ts` raises no warning for `PASS` fields. | covered as project-local assumption | none |
| Fallback/failure/ambiguity behavior verified | `INVALID_HANDOFF_TARGET`, `E720`, `W721`, peer blocking, publish blocking | covered | Reuse article does not cover no-match routing. It links to the supervisor article. |
| Customer verification path defined | Validate together, entry point tests, trace, module prerequisites, contract diff | covered | none |
| Production readiness checklist included | Present and extended with module items | covered | none |

## Example validation

Harness: copy of the repo packages loaded through a Node module loader that transpiles TypeScript sources with esbuild. It runs `validateABL`, `parseAgentBasedABL`, and `compileABLtoIR` on branch `hotfix_Artemis_1.8.1` sources. Harness files are in the session scratchpad, not in the repo.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 3 (`Commerce_Supervisor`, `Product_Advisor`, `Order_Status_Agent`) | full-document set | `validateABL`, parse, compile | pass | none | kept unchanged |
| Block 4 (`HANDOFF` to `orders__Order_Status_Agent`) | section-snippet | Wrapped in `SUPERVISOR: Shop_Supervisor` with a stub agent `orders__Order_Status_Agent`, the same stub the platform builds from a module dependency | pass | none | added |

Other harness checks:

| Input | Result |
| ----- | ------ |
| Block 1 validated alone | `INVALID_HANDOFF_TARGET` and `INVALID_ROUTING_TARGET` (six errors) |
| Handoff to `orders__Order_Status_Agent` with no stub | `INVALID_HANDOFF_TARGET`, known agents listed |
| `FROM "./shared.tools.abl" USE: lookup_order` in `TOOLS` | `E720` |
| `HISTORY` omitted, `last_5`, `auto`, `none`, `summary_only`, `full` | IR history: undefined (runtime default `full`), `{last_n: 5}`, `auto`, `none`, `summary_only`, `full`. No errors. |
| Remote handoff with `LOCATION: REMOTE`, an `ENDPOINT`, and `PROTOCOL: A2A` (harness-only HTTPS endpoint) | No errors, no warnings |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Files above. The module code is in `project-io`, outside the original source list. Added after a search for `module`, `mounted`, `alias`. |
| Did I search synonyms and neighboring constructs? | pass | `module`, `mounted`, `alias__`, `peer`, `contract`, `manifest`, `REMOTE`, `DELEGATE`, `USE BEHAVIOR_PROFILE`, `FROM ... USE`. |
| Did I identify every supported style, shorthand, alias, default, and fallback? | pass | History options and default. Two handoff syntax forms for `PASS` and `SUMMARY` (shorthand and `CONTEXT:` block). The article uses the shorthand form only. |
| Did I distinguish optional from required configuration? | pass | `HISTORY` is optional. `PASS` is optional in the parser. |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Quoted semantic `WHEN` text is used in the examples. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Six reuse variations plus modules. |
| Could a customer build the scenario another supported way? | pass | `DELEGATE` to a shared agent is not covered. Listed as a gap. |
| If asked "Are you not considering all scenarios?", what would I show? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Same-compilation rule shown with the harness result. Module contract and peer behavior come from release code. Defaults match the compiler registry. | none |
| Senior content writer | ready | Reuse level table before examples. Module bullets are short and bold labels are limited. | none |
| Product manager/customer enablement | ready | A partner learns when to use a module, what the importing project must provide, and what counts as a breaking change. | none |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Added `E720` scope, `W721`, history options, and module behavior with file evidence. | 5 |
| Depth of conceptual explanation | 4 | Added the four reuse levels and the module concept. | 5 |
| Readability and usability | 4 | Level table and `HISTORY` table. | 4 |
| Coverage of examples | 3 | Added a validated mounted-name snippet. Remote handoff has no example. | 4 |
| Search and discovery quality | 4 | Troubleshooting rows use error codes. | 5 |
| Completeness of workflow and failure modes | 3 | Added target validation, drift, peer blocking, and publish blocking paths. | 4 |
| Customer/partner self-service readiness | 4 | No repo paths. Project-local assumptions stated. | 5 |
| Scenario comprehensiveness | 3 | Added modules, remote, profiles, manifest. `DELEGATE` and bundled assets scoped out. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Minimum final score:** 4

**Gate result:** pass

## Doc discrepancies for human review

- The article now describes module release behavior from `project-io` code. Product owners must confirm the customer-facing names (module release, alias, contract) match the Studio UI.
- Mounted-name runtime resolution was checked at validation level only. The runtime path that executes a handoff to `alias__Agent` was not traced.
- The 2026-08-21 evidence listed the "project manifest" variation as accurate. The manifest does list agents and the entry agent, and it also records owners and references. The article now says so.
- `PASS` fields have no producer check in `validate-field-refs.ts` (the call omits the reference path). A `PASS` field with no source compiles silently.

## Open questions

- Should `DELEGATE` to a shared specialist appear in this article, or only in the delegation topics?
- Should the article cover module bundled assets (knowledge, tables, workflows) or leave them to the knowledge and workflow articles?
- Does the module import flow in Studio use the words alias, release, and contract? Confirm before publication.
