# Workspace 

A *workspace* represents a logical grouping of applications, tools, and configurations, typically organized by teams or projects. Workspaces bring organization and structure to how apps are grouped and accessed. It determines *what apps and data are accessible*, *what actions are allowed*, and *which configurations apply* based on the selected workspace.

Workspaces provide:

* Isolation between teams and projects. 
* Independent configuration management for models, tools, and settings.
* Controlled access based on user roles.
* Clear ownership and accountability.

## Workspace Scope

* By default, when a new account is created, a default workspace is created and assigned.
* When a new app is created, it is automatically associated with the workspace.
* Every app belongs to exactly one workspace.
* Apps and tools (under development) are not shared across workspaces by default.
* Tools created within a workspace are only available to apps in that workspace.
* Configurations, including AI Model configurations, settings, auth profiles and permissions, and environments are workspace-specific.
* To move apps or tools between workspaces, use import/export.


The current workspace is displayed at the top right corner in the platform. 

![alt_text](images/home.png "Workspace")

## Switching between Workspaces

Switching workspaces changes the entire operational context of the platform. Click the workspace name to see the list of all accessible workspaces.

The workspace switcher provides visibility into:

* Workspaces you have access to
* Workspaces owned by other users
* Your role within each workspace

Click on *Browse all Workspaces* to view the complete list of workspaces. On switching between workspaces, 

* The apps and tools are refreshed to show the ones from the new workspace. 
* Permissions are also based on the user's role in the new workspace. 
* Settings, memory stores, models, and deployment environments reflect workspace-specific configurations. 

**Features of Workspace Switcher**

* Default workspace: Users can mark any workspace as their default. This workspace loads automatically when logging into a new session.
* Search and Browse Workspaces: Easily locate workspaces using the search bar or browse through the full list using pagination controls. 
* Request access to inaccessible workspaces: My Workspaces tab lists the workspaces that the user has access to, and inaccessible ones are listed under Other Workspaces. Users can directly request access to a workspace from this list.
* User Role: The workspace switcher indicates the total number of members in the workspace and the user’s role in the workspace. In the workspace list view, each workspace entry indicates the owner, helping users understand workspace ownership clearly.
