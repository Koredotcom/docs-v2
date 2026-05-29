# Release Update Audit — Artemis 1.0.4

**Document:** 104-release-update.md
**Generated:** 2026-05-29 16:28:26 (UTC+05:30)
**Author:** Documentation audit (automated review of code vs. public docs)
**Releases compared:** Artemis 1.0.3 → Artemis 1.0.4
**Source repository:** abl-platform (release branches)
**Public docs repository:** v2docs / agent-platform

---

## 1. Purpose of this report

This is a record-keeping document for the documentation team. It explains, in plain
language, what changed in the platform between the previous release (Artemis 1.0.3) and
the new release (Artemis 1.0.4), and which public-facing documentation pages still need
to be updated to reflect those changes.

The goal of the original exercise was to:

1. Identify every feature created or updated since the last release.
2. Compare that list against the public-facing documentation.
3. Report where documentation is missing or out of date.
4. Identify the Jira tickets tied to the code changes so the work can be tracked.

---

## 2. Headline finding

Between Artemis 1.0.3 and Artemis 1.0.4, the two releases have effectively the **same
content except for one new capability**. Earlier work from 1.0.3 was folded into 1.0.4,
so the only genuinely new addition in 1.0.4 is a single feature enhancement.

> **In one line:** Artemis 1.0.4 = Artemis 1.0.3 + the "Contextual Filler History"
> enhancement.

Nothing was removed. The change is purely additive and is switched **off by default**,
so existing projects behave exactly as before unless an administrator opts in.

---

## 3. What changed

### 3.1 New features added

None. There are no brand-new, standalone features in this release.

### 3.2 Existing features enhanced

**Filler Messages (Contextual Filler History)** — the one change in this release.

- **What it is today:** "Filler Messages" are the short interim/wait-time messages the
  platform plays to a user (for example, during voice interactions) while the AI is still
  preparing its full response. This keeps the conversation feeling responsive instead of
  silent.
- **What's new:** Filler messages can now be generated *with awareness of the recent
  conversation*. Two new settings let an administrator control how much context is fed
  into the filler-generation step:
  - **Conversation History** — how many recent user/assistant messages to include
    (a whole number from 0 to 20; default **0**).
  - **Previous Fillers** — how many previously played filler messages to include
    (a whole number from 0 to 20; default **0**). This helps avoid repeating the same
    filler phrasing.
- **Where users see it:** Studio → project **Settings → Runtime Config → Filler**, as two
  new numeric fields labelled "Conversation History" and "Previous Fillers".
- **For prompt authors:** the customizable filler prompt now supports two additional
  placeholders — `{{conversationHistory}}` and `{{previousFillers}}` — in addition to the
  existing `{{userMessage}}`.
- **Default behavior:** both settings default to 0, meaning the feature is dormant until
  explicitly enabled. No change for existing projects.

### 3.3 Bug fixes

- **Filler context counts were not being saved correctly.** A fix ensures the two new
  settings (Conversation History and Previous Fillers) are reliably stored and read back
  for each project. This was part of the same work item as the feature above.

There were no other independent bug fixes in the 1.0.3 → 1.0.4 delta.

---

## 4. Jira tickets involved

| Jira ticket | Title / scope | Type | Notes |
| ----------- | ------------- | ---- | ----- |
| **ABLP-1395** | Contextual Filler History | Feature enhancement + fix | The single work item covering the entire 1.0.4 delta. Includes both the new capability and the persistence fix. |

> No other tickets are associated with code changes in this release delta. The remaining
> commit in the range was an internal branch sync (no functional change).

---

## 5. Code-source feature updates (for the record)

These are the areas of the product source that changed for ABLP-1395. Listed here in
non-technical terms for traceability; no action is required from the docs team on these.

- **Project settings & validation** — the two new numeric settings were added and bounded
  to a 0–20 range with a default of 0.
- **Studio interface** — two new input fields added to the Runtime Config / Filler
  settings screen.
- **Filler prompt template** — extended to support the new conversation-history and
  previous-filler placeholders.
- **Runtime behavior** — the system now assembles recent conversation context and prior
  fillers (according to the configured counts) when generating a filler message.
- **Data storage** — the project configuration store was updated to persist the two new
  values.
- **Diagnostics/tracing** — filler generation now records the configured vs. actually-used
  context counts for troubleshooting.

A formal internal data-flow review was completed for this change and recorded **no
blocking issues**; the settings propagate correctly across all layers, with safe 0
defaults.

---

## 6. Public documentation impact — gaps to close

The new capability is **not yet documented** in the public-facing docs. The following
`.mdx` files in the docs repository are impacted and should be reviewed/updated.

| # | Public doc file (agent-platform/...) | Current state | Required update |
| - | ------------------------------------ | ------------- | --------------- |
| 1 | **(new file — to be created)** A dedicated "Filler Messages" feature/settings page | Does not exist | Create a page documenting all Filler settings, including the two new fields and the three prompt placeholders. *(Agreed location: a new dedicated feature page.)* |
| 2 | `drafts/files-not-in-toc-at-go-live/features/catalog.mdx` (entry #73) | Describes Filler Messages as "Typing indicators and interim messages during LLM processing." Stale. | Update the description to mention context-aware generation; broaden the owning-area list. |
| 3 | `drafts/files-not-in-toc-at-go-live/features/status-matrix.mdx` (entry #73) | Listed as STABLE. | Refresh the description text to match the new capability (status itself can remain). |
| 4 | `drafts/files-not-in-toc-at-go-live/release-notes.mdx` | Stub — intro line only, no version entries. | Add an **Artemis 1.0.4** section summarizing Contextual Filler History, and establish the per-version structure for future releases. |
| 5 | `v1/howto/voice-interactions.mdx` | Mentions fillers only at a high level. | Optional — this is a v1 (previous-generation) doc; flag for awareness, likely out of scope for the new release. |

**Summary of the gap:** the contextual-filler capability is undocumented everywhere, the
existing catalog/status descriptions are stale, and there is no 1.0.4 release-notes entry.

---

## 7. Decisions recorded

- **Documentation placement:** the detailed filler settings documentation will live on a
  **new dedicated feature page** (not appended to the v1 voice-interactions how-to).
- **Doc updates:** deferred — this report is for record-keeping; no doc edits have been
  made yet.
- **Jira action:** none taken at this time (ticket key recorded above for tracking only).

---

## 8. Suggested next actions (when ready)

1. Create the new "Filler Messages" feature page and document all filler settings,
   including Conversation History, Previous Fillers, and the three prompt placeholders.
2. Update catalog entry #73 and status-matrix entry #73 descriptions.
3. Add the Artemis 1.0.4 release-notes section.
4. Optionally, record the doc-sync against ABLP-1395 for traceability.

---

*End of report.*
