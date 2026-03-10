# Attachment Settings

Attachment Settings allow administrators to control whether end users can upload file attachments in the compose bar and configure how the platform processes those attachments. You can access Attachment Settings from the **Admin Console** under **Assistant Configurations**.

## Accessing Attachment Settings

1. Navigate to the **Admin Console**.
2. Under **Assistant Configurations**, click **Attachment Settings**.

The Attachment Settings page displays all configuration options for managing attachment uploads and file processing behavior across your account.

**Enable Uploading Attachments in Compose Bar**

Use the **Enable Uploading Attachments** in Compose Bar toggle to control whether end users can upload files when asking queries.

* **On** — End users see the attachment option in the compose bar and can upload files alongside their queries.
* **Off** — The platform hides the attachment option from the compose bar for all end users.

!!! note
    You can enable attachment uploads only if at least one LLM model is configured in the platform. If no LLM model is available, the toggle remains disabled and the platform displays a banner prompting you to configure an LLM model first.

**LLM Model Selection**

When you enable attachment uploads, the platform displays an **LLM model selection** dropdown below the toggle.

* The platform selects the **default LLM model** automatically.
* You can change the LLM model used for processing attachments at any time.
* Changes to the LLM model take effect immediately for all subsequent queries.

**Allow Attachments Larger Than Model Context**

A separate toggle controls whether end users can upload files that exceed the selected model's context size.

* **Off** — The platform restricts uploaded files to the selected model's context size limit.
* **On** — The platform accepts files larger than the model's context size and processes them using RAG (Retrieval-Augmented Generation).

When you enable this toggle, you must select one of the following RAG processing options.

* **Platform Built-in RAG**: Select this option to use the platform's built-in RAG capability to process and retrieve content from large attachments. When you select Platform Built-in RAG, the platform displays a **Select Embedding Model** dropdown:
    * The platform selects the **Kore embedding model** by default.
    * Only embedding-capable models appear in the dropdown for selection.
* **LLM-Provided RAG**: Select this option to use the selected LLM's native RAG or file-handling capabilities to process large attachments. This option is available only if the chosen LLM model supports the required APIs. If the selected LLM does not support the required APIs, the platform disables this option and displays helper text explaining the limitation.

!!! note
    Switching between RAG options or changing the embedding model removes all currently uploaded files across the account. The platform prompts you to confirm before applying the change.

