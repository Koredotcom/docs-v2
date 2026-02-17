# Agent Version Control

The Agent Version Control system allows you to safely develop and test agent configurations without affecting your live, published agents. This dual-version approach ensures production stability while enabling continuous improvement and experimentation.
<img src="../images/agent_version_1.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">

## Two-Version System

Every agent maintains two distinct versions:

* **Draft Version**: Contains your latest edits and modifications.
* **Published Version**: The live version accessible to end users.

This separation ensures that your experimental changes don't impact the production environment until you're ready to deploy them.

## Making Changes

When you edit a published agent:

1. Your changes are automatically saved to the **Draft Version.**
2. The **Published Version** remains unchanged.
3. An **Unpublished Changes** banner appears at the top of your screen.

## Unpublished Changes Banner

The banner displays: *You have unpublished changes that haven't been applied to the published agent.*

**Available Actions:**

* **Discard Changes** - Remove all draft modifications.
* **Publish** - Deploy your changes to the live version.

## Discarding Changes

If you want to abandon your draft modifications:

1. Click **Discard Changes** in the banner.
2. A confirmation pop-up appears with options:
    * **Confirm** - Permanently discard all changes and revert to the published version.
    * **Cancel** - Keep your changes and dismiss the popup.

## Publishing Changes

To deploy your draft modifications:

1. Click **Publish** in the banner.
2. You'll redirect to the **Publish screen**.
3. Review the **Include unpublished changes for publishing** checkbox:
    * **Checked (Default)**: Publishes your draft version with all modifications.
    * **Unchecked**: Only applies user list updates, keeping draft changes separate.
<img src="../images/agent_version_2.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">
