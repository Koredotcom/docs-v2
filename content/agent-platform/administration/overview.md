# Settings Console for Account Admins

Agent Platform’s **Settings** console is a centralized management interface that provides administrators with the tools and functionalities to configure, monitor, and manage the Platform’s system configurations to manage the following:

1. [Users](../settings/user-management/users.md){:target="_blank"}
2. [Roles and permissions](../settings/user-management/role-management.md){:target="_blank"}
3. [Automated synchronization](../settings/user-management/settings/active-directory.md){:target="_blank"} of user data from Enterprise AD, plus configuration of user profile fields and email notifications.
4. [Integrations](../settings/integrations/about-integrations.md){:target="_blank"} 
5. [Manage Custom Scripts](../settings/manage-custom-scripts/custom-scripts.md){:target="_blank"}
6. [Manage Guardrails](../guardrails/overview.md){:target="_blank"} 
7. [Monitoring](../settings/monitoring/overview.md){:target="_blank"}: [Audit Logs](../settings/monitoring/audit-logs.md){:target="_blank"}, [Tools Analytics Dashboard](../settings/monitoring/analytics/tools-analytics-dashboard.md){:target="_blank"}, [Model Analytics Dashboard](../settings/monitoring/analytics/model-analytics-dashboard.md){:target="_blank"}, [Model Traces](../settings/monitoring/analytics/model-traces.md){:target="_blank"}, and [Monitoring Custom Scripts](../settings/monitoring/monitoring-custom-scripts.md){:target="_blank"}.
8. Security and Control: [Single Sign On](../settings/security-and-control/single-sign-on.md){:target="_blank"}, [Authorization Profile](../settings/security-and-control/authorization-profile.md){:target="_blank"}, and [API Scopes](../settings/security-and-control/api-scopes.md){:target="_blank"}.

## Levels of Users Management 

The **Settings** Console provides administrators comprehensive control and visibility on the user management features available at the following levels, facilitating proactive and improved management.

* **Account level**: At the account level, administrators can manage users, their roles, and permissions throughout the Platform account. This includes tasks such as inviting users, establishing automatic data synchronization from the enterprise Active Directory (AD), and setting up access controls for modules including tool creation, model management (including access, deployment, and export), integrations, user management, audit logs, security controls, model guardrails, and others.

* **Tool level**: User management within the Platform is focused on tool management, emphasizing individual tool deployments and configurations. Each tool's owner has the authority to invite individual users, customize their permissions and access levels, and manage tasks such as creating and deleting tools, assigning roles, overseeing deployments, configuring guardrails, and managing API apps and keys.

This post describes how to access the **Settings** Console and summarizes the modules and features available.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Only users included as <b>Admin</b> in the system with the required permissions can access the <b>Settings</b> Console.</p>
</div>

## Actions You Can Perform on the Settings Console

The modules and the capabilities supported on the <b>Settings</b> Console include the following:

**Users**

* Add a new user to your account and assign a system role to them via email invitation or user information file import.
* View and track the summary of counts for total, active, inactive, and locked users.
* View the details of all the users linked to your account like Name, Email ID, Account Role, and Status.
* Select and delete one or more users from your account.
* Unlock the locked users.
* Reassign a default or custom role to a user.

[Learn more](../settings/user-management/users.md){:target="_blank"} about this feature.

**Roles and Permissions**

* View system-generated roles for <b>account</b> and <b>tool</b> role types.
* Duplicate the roles and make custom changes.
* View the enabled/disabled access controls for various modules and permissions for system roles.
* Add new custom roles for tool and account types, enable/disable access, and set access controls (full, view, custom, and no access) for various modules and permissions assigned to the roles. 

[Learn more](../settings/user-management/role-management.md){:target="_blank"} about this feature.

**Settings**

[Sync and import key user information](../settings/user-management/settings/active-directory.md){:target="_blank"} from your organization's AD by doing the following: 

* Configuring the connection to your AD.
* Importing user data from all or specific organization units.
* Selecting and managing default AD user fields, or adding custom fields, and defining inclusion and exclusion rules for data import and sync.
* Configuring AD auto sync schedules to ensure user data on the Platform remains up-to-date.

Additionally, you can do the following:

* View sync history and reports to monitor successful and failed AD syncs.
* Manage the ability to view and edit default and custom user data fields.
* Configure how joining requests from new users are handled, including automatic approval options.
* Choose whether users should receive email notifications upon being added to your account via email invitation or AD sync.

[Learn more](../settings/user-management/settings/active-directory.md){:target="_blank"} about this feature.

**Integrations**

Connect to third-party services using prebuilt, secure, and configurable integrations. These connections can be used to access the linked services via the [Integration node](../ai-agents/tools/tool-flows/types-of-nodes/integration-node.md){:target="_blank"} in the Tools automation flow. [Learn more](../settings/integrations/about-integrations.md){:target="_blank"}.

**Manage Custom Scripts**

Use the script wizard in the **Settings**  console to upload a script definition file in the supported format, configure it, and import a custom script. Once configured, you can deploy the script to make it available for use across the platform.

You can also:

- Un-deploy, export, or delete a script as needed.

- Re-deploy the script after updates or changes.

- Use the script in multiple locations across the Platform, such as in the **Function node** of a tool automation flow.

Other capabilities include:

- View configuration and deployment details in the script's Overview page.

- Track deployment history and monitor version changes.

- Check deployment status and take actions like re-deploying, exporting, or deleting.

- Create and manage API keys to securely access the script’s API endpoint.

- View and copy endpoint code for use in external systems or integrations.

- Select and execute the script from the Function node when building automation flows.

**Guardrails**

View pre-deployed guardrail models that apply scanners to prompt input and output text across all tools. [Learn more](../guardrails/overview.md){:target="_blank"}.

**Monitoring**

- Track the audit logs of all user activities within your account and quickly troubleshoot issues with real-time event tracking. [Learn more](../settings/monitoring/audit-logs.md){:target="_blank"}.

- Review Tool Performance Metrics and take informed decisions on the **Tools Analytics** dashboard. [Learn more](../settings/monitoring/analytics/tools-analytics-dashboard.md){:target="_blank"}.

* Review, track, and fine tune model performance using model-specific metrics. [Learn more](../settings/monitoring/analytics/model-analytics-dashboard.md){:target="_blank"}.
* Track and monitor run-level metrics and metadata for each model execution to determine the best and worst performers. [Learn more](../settings/monitoring/analytics/model-traces.md){:target="_blank"}.
* Track custom script executions across runs and logs for deployments (endpoints), Function nodes, and API nodes. The **All Runs** section shows performance metrics (response times, failure rates) and execution details, while the **Logs** section provides runtime debugging information. Administrators can filter by date, search for runs or logs, and copy IDs to identify and resolve script issues efficiently. [Learn more](../settings/monitoring/monitoring-custom-scripts.md){:target="_blank"}.

**Security and Control**

- Enable or disable **Single Sign-On (SSO)** for your account and other users to streamline authentication and enhance password security. [Learn more](../settings/security-and-control/single-sign-on.md){:target="_blank"}.
- Set up authorization profiles that enable your tools, models, and AI agents to access external web services securely. [Learn more](../settings/security-and-control/authorization-profile.md){:target="_blank"}.
- Create and manage API-scoped apps and keys to securely authenticate and authorize access to specific endpoints based on selected scopes. [Learn more](../settings/security-and-control/api-scopes.md){:target="_blank"}.

## Access Settings Console

To access the **Settings** Console on the Platform, follow these steps:

1. Log in to your account and select the **Autonomous Agents** module.
   
2. Select **Settings** on the top navigation bar. The Platform redirects you to the **Users** page in **Users Management**.

   <img src="../images/access-settings-menu.png" alt="access settings" title="access settings" style="border: 1px solid gray; zoom:75%;">

## Modules and Features

The following modules and features are supported on the **Settings** Console:

<table>
  <tr>
   <td><strong>Module</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Features</strong>
   </td>
  </tr>
  <tr>
   <td><a href="../../settings/user-management/overview/">Users Management</a></td>
   <td><p>Helps add, remove, and manage admin, member, and viewer users, roles, and permissions for accounts, tools, and models.</p>
<p>Manage user settings for AD sync, profile visibility and configuration, and email notifications to users.</p></td>
<td><p><a href="../../settings/user-management/users/">Users</a></p>
<ul>
<li>All users across your enterprise network accounts are listed here.</li> 
<li>A summarized view of the total invited users, active, inactive, and locked users is displayed.</li>
<li>The user listing with information on all the users across the Platform accounts is displayed with the Name, Email ID, Account Role, and Status is displayed. The account owner is highlighted.</li>
<li>You can add a new user by sending bulk or individual email invites. Alternatively,  import the user information file directly to the console.</li>
<li>Set user role when sending the email invite to one of the following:
<ul>
<li>Master Admin</li>
<li>Admin</li>
<li>Member</li>
<li>Viewer</li>
<li>Custom roles</li>
</li>
<li>Select one or multiple users to change access permissions or delete a user.</li>
<li>Click a user entry to manage their profile, models, and tools, including modifying and deleting roles within each model or tool. A model or tool can be added for a specific role.</li></ul></ul>
<p><a href="../../settings/user-management/role-management/">Role Management</a></p>
<ul>
<li>A summarized view of the total roles available in the system and the number of system and custom roles are displayed.</li>
<li>View, assign, and reassign system/ default or custom roles. <strong>You can't edit or delete system roles.</strong></li>
<li>Create a copy or duplicate of a system role as a custom role and manage its permissions and access levels.</li>
<li>Add, delete, edit permissions’ access for, and duplicate custom roles.</li>
<li>For tool and account role types, assign/unassign permissions and set access levels for various module aspects like tools, models, prompts, billing, integrations, guardrails, security and control settings, and user management tasks.</li>
</ul>

<p><a href="../../settings/user-management/settings/active-directory/">Settings</a></p>
<ul>
<li><strong>Active Directory</strong>: Configure sync with your organization's AD to import user information for the required organization units to the Platform seamlessly. Enable automatic data sync between the AD and the Platform daily, weekly, or monthly.</li>
<li><strong>User Settings</strong>: Set up the visibility of user profile information across the Platform. Select profile fields and allow edits by the end user.
</li>
<li><strong>Email Notifications</strong>: Select if and when the users should receive email notifications when they're added to your account.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><a href="../../settings/integrations/about-integrations/">Integrations</a></td>
   <td>Manage 130+ pre-built integrations for third-party services in one place.</td>
   <td>
<ul>
<li>Create and configure secure connections across multiple categories like marketing, AI, sales, and more.</li>
<li>Pre-authorize the connection using the required auth method.</li>
<li>Add authorization credentials to secure the connection when users interact with the tool.</li>
<li>Use the configured connection in the <a href="../../ai-agents/tools/tool-flows/types-of-nodes/integration-node/">Integration node</a> to seamlessly access third-party services while building the Tool flow.</li>
</ul>
   </td>
  </tr>
  <tr>
   <tr>
   <td><a href="../../settings/manage-custom-scripts/custom-scripts/">Manage Custom Scripts</a></td>
   <td>Import custom scripts with reusable functions that can be invoked from anywhere in the platform using isolated container capabilities.</td>
   <td>
<ul>
<li>Import a custom script by configuring its general details, uploading the script file in the allowed format, and providing the runtime settings, and resource allocation (hardware and memory) details.</li>
<li>Review and deploy the custom script into the platform.</li>
<li>Perform actions like re-deploy, delete, export and more on the deployed scripts based on the current status.</li>
<li>View and manage the Overview, Deployment history, Endpoint, and API Keys pages for the script.</li>
<li>Select and execute the configured custom script through the <a href="../../ai-agents/tools/tool-flows/types-of-nodes/function-node/">Function node</a> of the Tools flow.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><a href="../../guardrails/overview/">Manage Guardrails</a></td>
   <td>View the list of pre-deployed guardrail models available across the platform. 
   </td>
   <td>
<ul>
<li><strong>Anonymize</strong>: Prevents the exposure of sensitive information in documents, emails, messages, or any other text data in prompts using techniques like redaction, Pseudonymization, and generalization.
</li>
<li><strong>Ban Topics</strong>: Restricts sensitive and controversial topics like religion or corporate politics in prompts to maintain content moderation, enforce community guidelines, and ensure compliance with organizational policies.</li>
<li><strong>Prompt Injection</strong>: Guards against attacks where malicious input is crafted to influence the behavior of a language model, causing it to generate harmful, misleading, or unintended responses using input sanitization, context control, role-based access, instruction clarity, and more.</li>
<li><strong>Toxicity</strong>: Set up mechanisms to detect and manage toxic content, such as harmful, offensive, or abusive language. Implement warnings, content removal, or user-banning actions to prevent the dissemination of harmful content and maintain a safe and positive user environment.</li>
<li><strong>Bias Detection</strong>: Ensure fairness and equality by AI tools towards users through output evaluation for systematic prejudices or pre-defined biases and behavior and automatic neutralization of responses.</li>
<li><strong>Relevance</strong>: Ensure that prompt outputs are accurate to the input context, meet the user’s intent, and satisfy their query or need. The scanner provides a confidence score to indicate the degree of context relevance.
</li>
</ul>
 </td>
  </tr>
  <tr>
   <td><a href="../../settings/monitoring/audit-logs/">Monitoring - Audit Logs</a></td>
   <td>Gain complete visibility into all account activities and efficiently troubleshoot issues by tracking real-time account and tool-level event logs.</td>
   <td><ul><li>Select the date range and view periodic, event-based logs related to the following categories:</li>
   <ul><li>Login/Logout</li>
   <li>Roles</li>
   <li>Integrations</li>
   <li>Models</li>
   <li>Tools</li>
   <li>Users Management</li>
   <li>Prompts</li>
   <li>Dataset</li>
   <li>Guardrails</li></ul>
   <li>Set one or more levels of custom filters to view only specific audit logs.</li>
   <li>Search for the required audit log from the listed entries.</li></ul></td>
  </tr>
    <tr>
   <td><a href="../../settings/monitoring/analytics/tools-analytics-dashboard/">Monitoring - Tools Analytics Dashboard</a></td>
   <td>Get actionable insights into successful and failed tool runs, average tool response time, and drill down into nodes execution data to enable informed decisions on tool deployments, optimize their performance, and accelerate system efficiency.</td>
   <td><ul><li>Select a single date or date range to view periodic tool performance metrics.</li>
   <li>Make performance comparison between different tool versions.</li>
   <li>Keep track of failed execution runs and investigate the reason for the same.</li>
   <li>Monitor the average response times of tools for various requests.</li>
   <li>Monitor node executions across different types and ensure tool flow runs stay within your account's rate limits.</li>
   <li>Optimize tool performance with real-time metrics.</li></ul></td>
  </tr>
      <tr>
   <td><a href="../../settings/monitoring/analytics/model-analytics-dashboard/">Monitoring - Model Analytics Dashboard</a></td>
   <td>Review and monitor key performance indicators for open-source, fine-tuned, and external models deployed in your account to ensure regulatory and ethical compliance, as well as optimal performance.</td>
      <td><ul><li>Select a single date or date range to view specific, time-based model performance metrics.</li>
<li>Analyze credit consumption for deployment and fine-tuning requests, and monitor model replica generation within subscription limits to ensure optimal usage.</li>
   <li>Compare successful versus failed requests over time and identify failure patterns.</li>
   <li>Explore latency, requests, token generation, and scaling metrics through dedicated, expandable widgets.</li>
   <li>Optimize model performance with access to real-time metrics.</li></ul></td>
  </tr>
        <tr>
   <td><a href="../../settings/monitoring/analytics/model-traces/">Monitoring - Model Traces</a></td>
   <td>Review and monitor key performance indicators for each run executed by different versions of the open-source, fine-tuned, and external models deployed in your account to ensure regulatory and ethical compliance, as well as optimal performance.</td>
      <td><ul><li>Select a single date or date range to view specific, time-based run performance metrics.</li>
      <li>Analyze failed runs by exporting performance metrics into a <i>csv</i> file and identify failure patterns.</li>
<li>Analyze hosting credits vs each successful/failed run to ensure optimal usage.</li>
   <li>Identify and isolate model runs with low response times for further investigation.</li>
   <li>Analyze requests, model outputs, response times, and sources to gain performance insights, diagnose errors, and optimize usage and experience.</li></ul></td>
  </tr>
          <tr>
   <td><a href="../../settings/monitoring/monitoring-custom-scripts/">Monitoring - Custom Scripts</a></td>
   <td>Review and monitor key performance indicators for each internal or external script run that's executed on the Platform via API endpoint, or Function/API node. View and trace default and Korelogger-based execution logs from input and output editors, as configured in your script. Apply time-based and column filters to get a custom view of run-level and log-specific metrics and metadata.</td>
      <td><ul><li>Select a single date or date range to view specific, time-based script performance metrics.</li>
      <li>Analyze failed runs and identify failure patterns.</li>
<li>Analyze each successful/failed run to ensure optimal usage.</li>
   <li>Identify and isolate script runs with low response times for further investigation.</li>
   <li>Analyze log-level data and troubleshoot script issues based on various log level and record-level metrics.</li></ul></td>
  </tr>
   <tr>
   <td><a href="../../settings/security-and-control/single-sign-on/">Security and Control - Single Sign On</a></td>
   <td>By centralizing authentication for your enterprise account users, SSO enhances user convenience and strengthens security through streamlined password management. SSO helps improve efficiency, reduce password fatigue, and safeguard sensitive information.</td>
      <td><ul><li>Configure and enable SSO for the available IdP providers.</li>
<li>Disable SSO for the required account users.</li>
<li>Exclude specific users from the SSO requirement to provide an alternative way to access their accounts.</li></ul></td>
  </tr>
     <tr>
   <td><a href="../../settings/security-and-control/authorization-profile/">Security and Control - Authorization Profile</a></td>
   <td>Allows users to configure authorization profiles using the <b>OAuth2</b> industry standard. With auth profiles, users can efficiently manage and reuse authentication and permission settings across the Platform, eliminating the need to create new authentication mechanisms each time secure access is required.</td>
      <td><ul><li>Set up new authorization field for your authorization profiles.</li>
<li>Configure the required auth parameters, including additional auth fields.</li>
<li>Edit or delete existing auth profiles.</li></ul></td>
  </tr>
  <tr>
   <td><a href="../../settings/security-and-control/api-scopes/">Security and Control - API Scopes</a></td>
   <td>Create and manage API-scoped apps, assign API keys, and select scopes to control access to specific endpoints. Restrict access to authorized users and prevent unauthorized use across the Platform.</td>
      <td><ul><li>Create an API app.</li>
      <li>Select the required API scopes while configuring the app.</li>
<li>Generate one or more API keys to provide secure access for authorized users.</li>
<li>Copy API keys for use or delete them when no longer needed.</li>
<li>Edit or delete the app as required.</li></ul></td>
  </tr>
</table>
