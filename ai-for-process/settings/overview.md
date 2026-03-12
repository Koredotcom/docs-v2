# Settings Console for Account Admins

AI for Process' **Settings** console is a centralized management interface that provides administrators with the workflows and functionalities to configure, monitor, and manage AI for Process' system configurations to manage the following:

1. [Users](../settings/user-management/users.md)
2. [Roles and permissions](../settings/user-management/role-management.md)
3. [Automated synchronization](../settings/user-management/settings/active-directory.md#step-4-schedule-automatic-ad-sync) of user data from Enterprise AD, plus configuration of user profile fields and email notifications.
4. [Integrations](../settings/integrations/about-integrations.md)
5. [Manage Custom Scripts](../settings/manage-custom-scripts/custom-scripts.md)
6. [Monitoring](../settings/monitoring/overview.md): [Audit Logs](../settings/monitoring/audit-logs.md), [Workflows Analytics Dashboard](../settings/monitoring/analytics/workflows-analytics-dashboard.md), [Model Analytics Dashboard](../settings/monitoring/analytics/model-analytics-dashboard.md), [Model Traces](../settings/monitoring/analytics/model-traces.md), and [Monitoring Custom Scripts](../settings/monitoring/monitoring-custom-scripts.md).
7. Security and Control: [Single Sign On](../settings/security-and-control/single-sign-on.md), [Authorization Profile](../settings/security-and-control/authorization-profile.md), and [API Scopes](../settings/security-and-control/api-scopes.md).

## Levels of Users Management

The **Settings** Console provides administrators comprehensive control and visibility on the user management features available at the following levels, facilitating proactive and improved management.

* **Account level**: At the account level, administrators can manage users, their roles, and permissions throughout the entire AI for Process account. This includes tasks such as inviting users, establishing automatic data synchronization from the enterprise Active Directory (AD), and setting up access controls for modules including workflow creation, model management (including access, deployment, and export), integrations, user management, audit logs, security controls, model guardrails, and others.

* **Workflow level**: User management within the AI for Process is focused on workflow management, emphasizing individual workflow deployments and configurations. Each workflow's owner has the authority to invite individual users, customize their permissions and access levels, and manage tasks such as creating and deleting workflows, assigning roles, overseeing deployments, configuring guardrails, and managing API apps and keys.

This post describes how to access the **Settings** Console and summarizes the modules and features available.

> **Note:** Only users included as **Admin** in the system with the required permissions can access the **Settings** Console.

## Actions You Can Perform on the Settings Console

The modules and the capabilities supported on the **Settings** Console include the following:

**Users**

* Add a new user to your account and assign a system role to them via email invitation or user information file import.
* View and track the summary of counts for total, active, inactive, and locked users.
* View the details of all the users linked to your account like Name, Email ID, Account Role, and Status.
* Select and delete one or more users from your account.
* Unlock the locked users.
* Reassign a default or custom role to a user.

[Learn more](../settings/user-management/users.md) about this feature.

**Roles and Permissions**

* View system-generated roles for **account** and **workflow** role types.
* Duplicate the roles and make custom changes.
* View the enabled/disabled access controls for various modules and permissions for system roles.
* Add new custom roles for workflow and account types, enable/disable access, and set access controls (full, view, custom, and no access) for various modules and permissions assigned to the roles.

[Learn more](../settings/user-management/role-management.md) about this feature.

**Settings**

[Sync and import key user information](../settings/user-management/settings/active-directory.md) from your organization's AD by doing the following:

* Configuring the connection to your AD.
* Importing user data from all or specific organization units.
* Selecting and managing default AD user fields, or adding custom fields, and defining inclusion and exclusion rules for data import and sync.
* Configuring AD auto sync schedules to ensure user data on AI for Process remains up-to-date.

Additionally, you can do the following:

* View sync history and reports to monitor successful and failed AD syncs.
* Manage the ability to view and edit default and custom user data fields.
* Configure how joining requests from new users are handled, including automatic approval options.
* Choose whether users should receive email notifications upon being added to your account via email invitation or AD sync.

[Learn more](../settings/user-management/settings/active-directory.md) about this feature.

**Integrations**

Connect to third-party services using prebuilt, secure, and configurable integrations. These connections can be used to access the linked services via the [Integration node](../workflows/workflow-builder/types-of-nodes/integration-node.md) in the workflows automation flow. [Learn more](../settings/integrations/about-integrations.md).

**Manage Custom Scripts**

Use the script wizard in the **Settings**  console to upload a script definition file in the supported format, configure it, and import a custom script. Once configured, you can deploy the script to make it available for use across the platform.

You can also:

- Un-deploy, export, or delete a script as needed.

- Re-deploy the script after updates or changes.

- Use the script in multiple locations across the AI for Process, such as in the **Function node** of a workflow automation flow.

Other capabilities include:

- View configuration and deployment details in the script's Overview page.

- Track deployment history and monitor version changes.

- Check deployment status and take actions like re-deploying, exporting, or deleting.

- Create and manage API keys to securely access the script's API endpoint.

- View and copy endpoint code for use in external systems or integrations.

- Select and execute the script from the Function node when building automation flows.

**Guardrails**

Deploy and undeploy guardrail models to apply scanners to prompt input and output text across all workflows.

**Monitoring**

- Track the audit logs of all user activities within your account and quickly troubleshoot issues with real-time event tracking. [Learn more](../settings/monitoring/audit-logs.md).
- Review workflow performance metrics and take informed decisions on the **Workflows Analytics** dashboard. [Learn more](../settings/monitoring/analytics/workflows-analytics-dashboard.md).

* Review, track, and fine tune model performance using model-specific metrics. [Learn more](../settings/monitoring/analytics/model-analytics-dashboard.md).
* Track and monitor run-level metrics and metadata for each model execution to determine the best and worst performers. [Learn more](../settings/monitoring/analytics/model-traces.md).
* Track custom script executions across runs and logs for deployments (endpoints), Function nodes, and API nodes. The **All Runs** section shows performance metrics (response times, failure rates) and execution details, while the **Logs** section provides runtime debugging information. Administrators can filter by date, search for runs or logs, and copy IDs to identify and resolve script issues efficiently. [Learn more](../settings/monitoring/monitoring-custom-scripts.md).

**Security and Control**

- Enable or disable **Single Sign-On (SSO)** for your account and other users to streamline authentication and enhance password security. [Learn more](../settings/security-and-control/single-sign-on.md).
- Set up authorization profiles that enable your workflows, models, and AI agents to access external web services securely. [Learn more](../settings/security-and-control/authorization-profile.md).
- Create and manage API-scoped apps and keys to securely authenticate and authorize access to specific endpoints based on selected scopes. [Learn more](../settings/security-and-control/api-scopes.md).

## Access Settings Console

To access the **Settings** Console on AI for Process, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   ![access settings](../images/aip-settings-access.png)

   The system redirects to the **Users** page under **Users Management**.

   ![access settings menu](../images/access-settings-menu-aip.png)

## Modules and Features

The following modules and features are supported on the **Settings** Console:

**Module** | **Description** | **Features**

---

**[Users Management](../../settings/user-management/overview/)**

Helps add, remove, and manage admin, member, and viewer users, roles, and permissions for accounts, workflows, and models.

Manage user settings for AD sync, profile visibility and configuration, and email notifications to users.

[Users](../../settings/user-management/users/)

- All users across your enterprise network accounts are listed here.
- A summarized view of the total invited users, active, inactive, and locked users is displayed.
- The user listing with information on all the users across the AI for Process accounts is displayed with the Name, Email ID, Account Role, and Status is displayed. The account owner is highlighted.
- You can add a new user by sending bulk or individual email invites. Alternatively,  import the user information file directly to the console.
- Set user role when sending the email invite to one of the following:
  - Master Admin
  - Admin
  - Member
  - Viewer
  - Custom roles
- Select one or multiple users to change access permissions or delete a user.
- Click a user entry to manage their profile, models, and workflows, including modifying and deleting roles within each model or workflow. A model or workflow can be added for a specific role.

[Role Management](../../settings/user-management/role-management/)

- A summarized view of the total roles available in the system and the number of system and custom roles are displayed.
- View, assign, and reassign system/ default or custom roles. **You can't edit or delete system roles.**
- Create a copy or duplicate of a system role as a custom role and manage its permissions and access levels.
- Add, delete, edit permissions' access for, and duplicate custom roles.
- For workflow and account role types, assign/unassign permissions and set access levels for various module aspects like workflows, models, prompts, billing, integrations, guardrails, security and control settings, and user management tasks.

[Settings](../../settings/user-management/settings/active-directory/)

- **Active Directory**: Configure sync with your organization's AD to import user information for the required organization units to AI for Process seamlessly. Enable automatic data sync between the AD and AI for Process daily, weekly, or monthly.
- **User Settings**: Set up the visibility of user profile information across AI for Process. Select profile fields and allow edits by the end user.
- **Email Notifications**: Select if and when the users should receive email notifications when they're added to your account.

---

**[Integrations](../../settings/integrations/about-integrations/)**

Manage 130+ pre-built integrations for third-party services in one place.

- Create and configure secure connections across multiple categories like marketing, AI, sales, and more.
- Pre-authorize the connection using the required auth method.
- Add authorization credentials to secure the connection when users interact with the workflow.
- Use the configured connection in the [Integration node](../../workflow-builder/types-of-nodes/integration-node.md) to seamlessly access third-party services while building the workflow.

---

**[Manage Custom Scripts](../../settings/manage-custom-scripts/custom-scripts/)**

Import custom scripts with reusable functions that can be invoked from anywhere in the platform using isolated container capabilities.

- Import a custom script by configuring its general details, uploading the script file in the allowed format, and providing the runtime settings, and resource allocation (hardware and memory) details.
- Review and deploy the custom script into the platform.
- Perform actions like re-deploy, delete, export and more on the deployed scripts based on the current status.
- View and manage the Overview, Deployment history, Endpoint, and API Keys pages for the script.
- Select and execute the configured custom script through the [Function node](../../workflow-builder/types-of-nodes/function-node/) of the workflows flow.

---

**[Manage Guardrails](../workflows/guardrails/manage-guardrails.md)**

Deploy models to make them available for anomaly scanners in all the workflows.

- **Anonymize**: Prevents the exposure of sensitive information in documents, emails, messages, or any other text data in prompts using techniques like redaction, Pseudonymization, and generalization.
- **Ban Topics**: Restricts sensitive and controversial topics like religion or corporate politics in prompts to maintain content moderation, enforce community guidelines, and ensure compliance with organizational policies.
- **Prompt Injection**: Guards against attacks where malicious input is crafted to influence the behavior of a language model, causing it to generate harmful, misleading, or unintended responses using input sanitization, context control, role-based access, instruction clarity, and more.
- **Toxicity**: Set up mechanisms to detect and manage toxic content, such as harmful, offensive, or abusive language. Implement warnings, content removal, or user-banning actions to prevent the dissemination of harmful content and maintain a safe and positive user environment.
- **Bias Detection**: Ensure fairness and equality by AI workflows towards users through output evaluation for systematic prejudices or pre-defined biases and behavior and automatic neutralization of responses.
- **Relevance**: Ensure that prompt outputs are accurate to the input context, meet the user's intent, and satisfy their query or need. The scanner provides a confidence score to indicate the degree of context relevance.

---

**[Monitoring - Audit Logs](../../settings/monitoring/audit-logs/)**

Gain complete visibility into all account activities and efficiently troubleshoot issues by tracking real-time account and workflow-level event logs.

- Select the date range and view periodic, event-based logs related to the following categories:
  - Login/Logout
  - Roles
  - Integrations
  - Models
  - workflows
  - Users Management
  - Prompts
  - Dataset
  - Guardrails
- Set one or more levels of custom filters to view only specific audit logs.
- Search for the required audit log from the listed entries.

---

**[Monitoring - Workflows Analytics Dashboard](../../settings/monitoring/analytics/workflows-analytics-dashboard/)**

Get actionable insights into successful and failed workflow runs, average workflow response time, and drill down into nodes execution data to enable informed decisions on workflow deployments, optimize their performance, and accelerate system efficiency.

- Select a single date or date range to view periodic workflow performance metrics.
- Make performance comparison between different workflow versions.
- Keep track of failed execution runs and investigate the reason for the same.
- Monitor the average response times of workflows for various requests.
- Monitor node executions across different types and ensure workflow flow runs stay within your account's rate limits.
- Optimize workflow performance with real-time metrics.

---

**[Monitoring - Model Analytics Dashboard](../../settings/monitoring/analytics/model-analytics-dashboard/)**

Review and monitor key performance indicators for open-source, fine-tuned, and external models deployed in your account to ensure regulatory and ethical compliance, as well as optimal performance.

- Select a single date or date range to view specific, time-based model performance metrics.
- Analyze credit consumption for deployment and fine-tuning requests, and monitor model replica generation within subscription limits to ensure optimal usage.
- Compare successful versus failed requests over time and identify failure patterns.
- Explore latency, requests, token generation, and scaling metrics through dedicated, expandable widgets.
- Optimize model performance with access to real-time metrics.

---

**[Monitoring - Model Traces](../../settings/monitoring/analytics/model-traces/)**

Review and monitor key performance indicators for each run executed by different versions of the open-source, fine-tuned, and external models deployed in your account to ensure regulatory and ethical compliance, as well as optimal performance.

- Select a single date or date range to view specific, time-based run performance metrics.
- Analyze failed runs by exporting performance metrics into a *csv* file and identify failure patterns.
- Analyze hosting credits vs each successful/failed run to ensure optimal usage.
- Identify and isolate model runs with low response times for further investigation.
- Analyze requests, model outputs, response times, and sources to gain performance insights, diagnose errors, and optimize usage and experience.

---

**[Monitoring - Custom Scripts](../../settings/monitoring/monitoring-custom-scripts/)**

Review and monitor key performance indicators for each internal or external script run that's executed on AI for Process via API endpoint, or Function/API node. View and trace default and Korelogger-based execution logs from input and output editors, as configured in your script. Apply time-based and column filters to get a custom view of run-level and log-specific metrics and metadata.

- Select a single date or date range to view specific, time-based script performance metrics.
- Analyze failed runs and identify failure patterns.
- Analyze each successful/failed run to ensure optimal usage.
- Identify and isolate script runs with low response times for further investigation.
- Analyze log-level data and troubleshoot script issues based on various log level and record-level metrics.

---

**[Security and Control - Single Sign On](../../settings/security-and-control/single-sign-on/)**

By centralizing authentication for your enterprise account users, SSO enhances user convenience and strengthens security through streamlined password management. SSO helps improve efficiency, reduce password fatigue, and safeguard sensitive information.

- Configure and enable SSO for the available IdP providers.
- Disable SSO for the required account users.
- Exclude specific users from the SSO requirement to provide an alternative way to access their accounts.

---

**[Security and Control - Authorization Profile](../../settings/security-and-control/authorization-profile/)**

Allows users to configure authorization profiles using the **OAuth2** industry standard. With auth profiles, users can efficiently manage and reuse authentication and permission settings across the AI for Process, eliminating the need to create new authentication mechanisms each time secure access is required.

- Set up new authorization field for your authorization profiles.
- Configure the required auth parameters, including additional auth fields.
- Edit or delete existing auth profiles.

---

**[Security and Control - API Scopes](../../settings/security-and-control/api-scopes/)**

Create and manage API-scoped apps, assign API keys, and select scopes to control access to specific endpoints. Restrict access to authorized users and prevent unauthorized use across the AI for Process.

- Create an API app.
- Select the required API scopes while configuring the app.
- Generate one or more API keys to provide secure access for authorized users.
- Copy API keys for use or delete them when no longer needed.
- Edit or delete the app as required.
