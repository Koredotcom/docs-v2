# Personal Workspace

Personal Workspace is an environment that empowers end users to create, manage, and publish custom agents within their dedicated workspace environment. This feature provides administrators with granular control over user permissions, agent types, and publishing capabilities while maintaining security and governance standards.

## Feature Summary

Personal Workspace enables organizations to democratize agent creation by allowing end users to build custom agents tailored to their specific needs. Administrators retain full oversight and control through comprehensive management tools, usage analytics, and configurable permissions.

<img src="../images/personal_workspace_1.png" alt="admin-console" title="admin-console" style="border: 1px solid gray; zoom:80%;">

Key Benefits

* Enable end users to create custom agents.
* View and manage all personal workspaces and agents from a centralized interface.
* Allow users to build agents that address their specific workflow requirements.

Agent Creation and Management

* End users can create multiple agent types within their personal workspace.
* Support for 7 distinct agent types to meet diverse use cases.
* Users can share agents with other account members based on administrator settings.
* Each user maintains their own dedicated workspace environment.

## Settings

**Agent Creation Control**

**Setting**: Allow end users to create agents.

**Options**: Enabled/Disabled (toggle).

**Description**: Controls whether users can create new agents in their personal workspace.

Access Control Options:

* Everyone in the account: All users receive personal workspace access.
* Selected users: Only designated users can access personal workspaces.
* Excluded users: All users except selected ones receive access.

<img src="../images/personal_workspace_2.png" alt="admin-console" title="admin-console" style="border: 1px solid gray; zoom:80%;">

**Publishing Configuration**

**Setting**: Allow end users to publish agents to others.

**Options**: Enabled/Disabled (toggle).

**Description**: Determines whether users can share their agents with other account members.

Publishing Limit Settings:

* No Limit
* 5 users
* 10 users
* 20 users
* 30 users

<img src="../images/personal_workspace_3.png" alt="admin-console" title="admin-console" style="border: 1px solid gray; zoom:80%;">

**Agent Type Restrictions**

**Setting**: Allowed agent types.

**Description**: Administrators can select which agent types users are permitted to create.

Available Agent Types:

* Search Agent
* API Agent
* Prompt Agent
* Autonomous Agent
* Agentic Flow
* Bot Agent
* Workflow Agent

<img src="../images/personal_workspace_4.png" alt="admin-console" title="admin-console" style="border: 1px solid gray; zoom:80%;">

## Collaboration and Sharing

**Collaboration Features**

* Publishers can assign Editor, Viewer, or No Access permissions to collaborators.
* Automatic notification system for new collaborator access assignments.
* Centralized shared agent discovery through workspace switcher.
* Universal agent analytics and usage logging across all workspace types.

**Publishing to Collaborators**

When users publish agents to collaborators within their permitted limits, the system automatically assigns default Viewer access to newly added users. Publishers receive confirmation notifications to ensure transparency in collaboration workflows.

Publishers can manage collaborator permissions through the Collaborators interface:

**Access Levels**

* **Editor** -- Full configuration editing capabilities.
* **Viewer** -- Read-only agent interaction.
* **No Access** -- Agent visibility without interaction permissions.

**Shared Agent Discovery**

Users can access shared agents through the enhanced workspace switcher, which displays a dedicated **Shared Agents** section containing all agents shared by other users within the organization.

## Administrative Views

### Workspace View

* **Functionality**: Display all personal workspaces created by end users.
* **Purpose**: Provide administrators with workspace-level oversight. Ability of admins to disable agents, view the agent metrics.

### Agent View

* **Functionality**: Consolidated list of all agents across personal workspaces.
* **Filtering Options**:
    * Created By (user filter)
    * Agent Type (category filter)
    * Sort By (customizable sorting)
* **Purpose**: Enable efficient agent management across the organization.

All agents now feature comprehensive management tools accessible through the 3-dot menu that provides consistent management experiences across all agent types, enabling administrators and users to access detailed insights and usage patterns for effective governance and optimization.

**Available Options:**

* **Agent Details** -- Access detailed agent metrics and performance data.
* **Agent Usage Logs** -- View comprehensive usage analytics and activity history.

**Scope:** These management features apply universally across both account workspace and personal workspace agents.


## Dashboard

* **Pre-built Widgets**: Display insights about user-created agents.
* **Filtering Options**:
    * All Personal Workspaces
    * Selected Personal Workspaces
* **Data Visualization**: Present usage patterns and trends through intuitive charts.

## Logs

* **Metadata Logging**: Record timestamps, user actions, and agent usage.
* **Audit Trail**: Maintain comprehensive activity records for compliance.