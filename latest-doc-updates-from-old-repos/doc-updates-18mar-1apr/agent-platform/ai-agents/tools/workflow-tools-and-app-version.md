# Workflow Tools and App Versioning

Workflow tools are automatically versioned when you create an app version. Each app version keeps its own snapshot of every workflow tool, ensuring stable and predictable behavior across environments.

Each tool snapshot includes its full configuration associated with the current draft at that moment:

* Workflow canvas
* Guardrails
* Environment variables
* Tool name and description

**How It Works**

* Creating an app version automatically versions all workflow tools used by the app.
* Each app version uses its own tool versions; these snapshots do not change after creation.
* Updating a workflow tool affects only new app versions. 
* Multiple versions of the same workflow tool can run independently across environments through different app versions.

**Example**

1. Create **App Version v2.0** → captures the workflow tool’s current draft
2. Update the workflow tool (for example, change the flow or guardrails)
3. Create **App Version v3.0** → captures the workflow tool’s updated draft

    Result:

    * **App version v2.0 (Production)** uses the workflow tool captured when Version 2.0 was created.
    * **App version v3.0 (Test/Beta)** uses the updated workflow tool state captured when Version 3.0 was created.

Each app version runs with the workflow tool configuration captured when it was created—no conflicts, no unintended updates.
