---
title: Artemis release notes
description: Stay up to date with the latest platform updates, new features, and enhancements.
rss: true
mode: center
---

<Update label="August 23, 2026" description="v1.5.0, Major release">

<p className="rn-title">Agent Building (ABL/Studio)</p>

<p className="rn-subtitle">Artemis CLI</p>

A new customer-facing CLI is now available, letting developers automate the full Agentic lifecycle, including authentication, project sync, eval runs, and deployment, from external systems, without Studio.
<br />[Learn more →](/agent-platform/install-cli)

<p className="rn-subtitle">Recurring evaluation run schedules</p>

Eval runs can now be scheduled to recur daily, weekly, or monthly, with time zone selection and flexible start and end conditions.

<p className="rn-title">Voice, Escalation, and Agent Transfer</p>

<p className="rn-subtitle">Voice Playground for softphone-based voice testing in Studio</p>

Playground now supports voice testing alongside text testing, allowing developers and QA teams to initiate a softphone interaction, speak with the agent, view the live transcript and call state, and open the session in Observatory for detailed voice debugging.

<p className="rn-title">Safety and Guardrails</p>

<p className="rn-subtitle">Entity-based PII detection and anonymization</p>

PII detection and anonymization now support entity-based detection, using a locally hosted AI model. Authors can create PII patterns using entity recognition (built-in or model-backed) instead of regex. A new project-level PII tier setting controls which detection engines are available, and an ignore-values list suppresses false positives.

<p className="rn-title">Analytics and Insights</p>

<p className="rn-subtitle">Public analytics APIs for sessions, traces, and LLM usage</p>

External systems can now pull conversation history, session and session-summary reporting data, messages, execution traces, and LLM cost and usage ledger data directly through public APIs.

<p className="rn-title">Channels and Web SDK</p>

<p className="rn-subtitle">Auto-disconnect idle chat widget sessions</p>

The embedded chat widget can now be configured to automatically disconnect or end a session after a period of user inactivity.

<p className="rn-title">LLM Providers and Model Management</p>

<p className="rn-subtitle">Microsoft Foundry Model Catalog support</p>

Microsoft Foundry is now available as a unified provider, replacing the previous Anthropic-only integration. Select models from multiple publishers, including OpenAI, Meta, Mistral, Cohere, and Anthropic, or enter custom deployments. The configuration also supports Azure AD Service Principal authentication with automatic token discovery.

<p className="rn-title">Workflows</p>

<p className="rn-subtitle">Support workflow expressions in Data Entry default values</p>

Data Entry nodes in workflows now support a Default Value field that can contain workflow expressions, referencing trigger payloads or previous step outputs. This lets form fields be pre-filled with upstream data when a human task is presented.

<p className="rn-title">Knowledge Base</p>

<p className="rn-subtitle">Improved OCR and language handling for SearchAI document extraction</p>

* SearchAI now automatically detects a document's language and selects the corresponding RapidOCR model, rather than relying on a single fixed model regardless of script. This improves results for Arabic, Thai, Urdu, and Latin-script scans.
* Mixed-language documents are kept in their source language rather than translated.
* SearchAI detects pages with unusable or sparse text (scanned images, glyph-name artifacts, collapsed text, or vertical right-to-left output) and runs a full-page OCR fallback to recover readable text.
* Explicit language and OCR-language settings now carry through the SDK, connectors, and every extraction path (sync, async, split-PDF, streaming URL, extraction-only), so configured language hints are honored consistently.
* Automatic OCR now runs only when a PDF's embedded text layer is genuinely unusable, is disabled for pure-text formats by default, and caps fallback retries rather than retrying indefinitely.
* A visual enrichment or OCR failure no longer causes the whole document to fail — extraction continues downstream with any usable text.

<p className="rn-title">Security and Compliance</p>

<p className="rn-subtitle">Allow Project Auth Profile fields to reference deployment environment variables</p>

Project Auth Profile fields — Token URL, Refresh Token URL, Scopes, Client ID, and Client Secret — can now be populated from environment variables defined under Deployments, instead of requiring these values to be entered directly into the Auth Profile.

</Update>




<Update label="August 17, 2026" description="v1.4.4, Patch release">

<p className="rn-title">Voice</p>

<p className="rn-subtitle">Configure a minimum STT confidence threshold</p>

You can now set a project-level minimum speech-to-text (STT) confidence threshold for voice interactions. Transcripts below the threshold are treated as no input, preventing low-confidence speech recognition results from triggering agent responses. Set the threshold between 0 and 1; set it to 0 to disable it. 
<br />[Learn more →](/agent-platform/administration/general-settings#runtime-configuration)

<p className="rn-title">Tools</p>

<p className="rn-subtitle">Build dynamic batch payloads with HTTP body templates</p>

HTTP tools now support `{{#each input.X}}` in body templates, letting you dynamically generate batch payloads from array inputs in a single request. You can also use session secrets in the generated payload, while keeping secret values protected from the model. 
<br />[Learn more →](/agent-platform/abl-reference/tools#reuse-secrets-across-tools-secretref)

<p className="rn-title">Security and Compliance</p>

<p className="rn-subtitle">Simplified Azure BYOK setup with a platform-owned identity</p>

Azure Bring-Your-Own-Key (BYOK) encryption for same-tenant Azure Key Vault no longer requires customers to register or maintain their own Entra app registration or a federated credential configuration. Artemis now uses a platform-owned Workload Identity Federation application — customers grant it a scoped Key Vault role and provide their key location, with no client ID, secret, or certificate ever entered or stored. 
<br />[Learn more →](/agent-platform/administration/workspace-and-team#azure-key-vault)

</Update>
