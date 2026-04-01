# Privacy Policy for AI for Process Browser Automation Extension

*Last updated: March 27, 2026*

## Overview

The Kore.ai AI for Process browser extension ("Extension") is a browser automation tool that allows users to record and replay browser interactions as reusable automation workflows. This privacy policy explains what data the Extension collects, how that data is used, how it is stored, when it may be shared, and what permissions the Extension requires in order to function. The Extension is designed to operate only when the user explicitly initiates recording or execution. It is not intended to passively monitor browsing activity in the background.

## Data Collection

The Extension collects the following data **only when the user explicitly starts recording or executes a workflow on websites they choose to automate**:

* **Page interactions** — Clicks, typing, scrolling, hovering, keyboard actions, tab actions, and navigation steps performed during recording or replay.
* **Typed and form values** — Text entered into supported fields during active recording may be captured as part of a workflow step. This can include usernames, email addresses, search terms, URLs, and other values entered by the user on pages they choose to automate. If a user types sensitive information, including passwords, while actively recording, that information may be captured as part of the recorded workflow so the step can be replayed.
* **Page URLs and navigation context** — URLs of pages visited during recording or execution, including navigation flow information needed to create accurate navigate steps and replay workflows reliably.
* **DOM element attributes and limited page content** — Element IDs, class names, ARIA labels, placeholder text, visible text content, and data attributes used to generate stable selectors for replay.
* **Workflow metadata** — Recorded steps, selector metadata, timestamps, ordering information, execution-related state, and related automation configuration needed to save and replay workflows.

!!!note "Note on sensitive data categories"

    Because the Extension can record interactions on any website the user explicitly chooses to automate, recorded workflow data may incidentally include sensitive categories of information depending on the websites the user records on. For example, if a user records interactions on a healthcare portal, the workflow may capture health-related form values. If a user records interactions on a banking or financial services website, the workflow may capture financial information. If a user records interactions on an email or messaging platform, the workflow may capture personal communications. This data is captured only because the user explicitly initiated recording on that page, is stored locally in the browser, and is not transmitted to any server unless the user explicitly publishes or syncs the workflow to the Kore.ai AI for Process platform.


## Data NOT Collected

* No data is collected when the Extension is idle and not recording or executing.
* No cookies, analytics, or telemetry are collected by default.
* No data is collected from pages the user does not explicitly choose to automate.
* No passive browsing history is collected outside of pages visited during active recording or execution.
* No credentials or form values are collected outside of active recording sessions.
* The Extension does not collect passwords, usernames, or other form values when it is idle or when the user has not explicitly started recording.
* No user data is sold to third parties.
* The Extension does not use or transfer user data for advertising, creditworthiness, lending decisions, or unrelated profiling purposes.

## How Data Is Used

The data collected by the Extension is used only for the following purposes:

* To create and save automation workflows based on user-recorded browser actions.
* To replay recorded workflows on the websites the user has chosen to automate.
* To generate and maintain selectors that help the Extension locate page elements reliably during replay.
* To support navigation tracking, multi-tab workflows, and workflow execution continuity.
* To display recorded steps, execution state, and editing controls in the Extension side panel.
* To support optional publish, sync, or platform-backed execution actions initiated by the user.

## Data Storage

* **Browser-local storage** — Recorded workflows, selector metadata, recording state, and related extension data are stored locally in the browser using `chrome.storage.local`.
* **Session storage** — Temporary execution progress and in-flight runtime state may be stored using chrome.storage.session to support replay, navigation resumption, and side panel status updates during the current browser session.
* **Platform sync or publish** — When users explicitly choose to publish or sync workflows with the Kore.ai AI for Process platform, workflow data may be transmitted to Kore.ai servers over encrypted HTTPS connections. This server-side handling is governed by the [Kore.ai Privacy Policy](https://kore.ai/privacy-policy/).

## Data Sharing

The Extension does not sell user data. Workflow data is transmitted to Kore.ai servers only when the user explicitly initiates one of the following actions:

* publishing a workflow.
* syncing a workflow.
* starting a platform-backed execution flow.

The Extension does not use or transfer user data for advertising, sale, credit-worthiness, lending decisions, or unrelated third-party purposes.

## User Control

* Users can view, edit, and delete all stored workflows through the Extension's side panel.
* Users can export workflows as .json files for backup or transfer.
* Users can choose whether to keep workflows local or explicitly publish or sync them to the Kore.ai Platform.
* Uninstalling the Extension removes browser-local extension data, subject to Chrome's standard extension data removal behavior.

## Permissions

The Extension requests the following browser permissions solely to provide its recording, replay, navigation, and side panel functionality on pages the user explicitly chooses to automate:

* **storage** — Used to save recorded workflows, selector metadata, recording state, and related extension data locally in the browser.
* **tabs** — Used to detect tab creation, activation, and URL changes needed for multi-tab recording and replay.
* **activeTab** — Used to gain temporary access to the current tab when the user explicitly starts recording or runs a workflow.
* **scripting** — Used to inject content scripts into tabs that need recording or replay functionality. Scripts are injected only after the user explicitly starts recording or executes a workflow from the Extension UI.
* **webNavigation** — Used to detect navigations, redirects, browser back or forward actions, single-page application route changes, and related page transitions during recording and execution.
* **unlimitedStorage** — Used to support larger workflow libraries, execution history, and related local extension data that may exceed Chrome's default storage quota.
* **sidePanel** — Used because the Extension's primary interface runs in the Chrome side panel and displays recording controls, captured steps, workflow management, and the step editor alongside the web page being automated.
* **Host permissions `http://*/*` and `https://*/*`** — Used so the Extension can record and replay interactions on any website the user explicitly chooses to automate. Content scripts are activated only after explicit user action, such as starting a recording or executing a workflow from the Extension UI. The Extension does not automatically browse websites, scrape pages in the background, or collect data from sites unless the user has actively initiated automation on that tab.

## AI Features

The Extension uses AI-powered selector scoring to prioritize stable CSS selectors, such as data-testid and ARIA labels, over fragile selectors such as dynamically generated class names. This selector scoring runs entirely within the browser. No user data is sent to any AI or machine learning service for selector generation.

Server-side AI execution, including autonomous mode, is available only when the user explicitly publishes a workflow to the Kore.ai AI for Process platform and initiates a run. Data handling for server-side execution is governed by the [Kore.ai Privacy Policy](https://kore.ai/privacy-policy/).

## Data Use Disclosure Alignment

This privacy policy is intended to align with Chrome Web Store data use disclosures for the Extension. The following data categories may be collected depending on the websites the user chooses to automate:

* **Personally identifiable information** — Names, email addresses, or other identifiers entered during active recording.
* **Health information** — May be captured if the user records on healthcare portals or health-related websites.
* **Financial and payment information** — May be captured if the user records on banking, payment, or financial services websites.
* **Authentication information** — Passwords or credentials typed during active recording sessions.
Personal communications — May be captured if the user records on email, messaging, or communications platforms.
* **Web history** — URLs and navigation context captured during active recording or execution only.
* **User activity** — Clicks, typing, scrolling, and keyboard events captured during recording.
* **Website content** — DOM attributes and visible text used to generate stable selectors for replay.

All or some of this data is collected exclusively during user-initiated recording or execution sessions. None of this data is sold or transferred for unrelated purposes.

## Changes to This Policy

We may update this privacy policy from time to time. The date of change to this policy is reflected in the "Last updated" date above. Continued use of the Extension after changes constitutes acceptance of the updated policy.

## Contact

For questions about this privacy policy or the Extension's data practices, contact us at:

* [Email: support@kore.ai](mailto:support@kore.com)
* [Website: https://www.kore.ai/contact-us](https://www.kore.ai/contact-us)
