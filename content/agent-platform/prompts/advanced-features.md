# Advanced Features  

Prompt Studio offers a suite of features designed to streamline and enhance your prompt creation and management process, providing greater flexibility, collaboration, and control throughout your workflow.


## Using Test Data

The Platform provides two ways to work with test data:

* **Import test data**: Upload a CSV file with your data to  populate variables in your prompts automatically.
* **Generate test data**: Create synthetic datasets in a quick automated way significantly reducing the time required for manual data creation. AI analyzes the prompt and its variables to understand the context and then generates the corresponding values for each variable.

<img src="../images/generate_and_import_test_data.png" alt="Test data" title="Test data" style="border: 1px solid gray; zoom:80%;">

### Import Test Data

The Import test data option lets you upload datasets with variables from a CSV file. The values for variables in {{}} braces are populated from this file. For a selected column, the variable values are automatically populated from that column for up to 10 rows (if available in the dataset). You can manually edit these entries as needed.

To correctly map the values, ensure the column names in the .csv file match the variables exactly (case-sensitive), such as {{Name}} for a column named "Name." Also, ensure the data starts from the first row and first column of the CSV file so that your variables are pulled in correctly.

!!! note

    You can import a maximum of 10 rows of data simultaneously.

**Steps to import data:**

1. On the prompt canvas, click **Test data > Import test data**.

2. In the **Import test data** dialog, upload the CSV file from your local computer or select from existing datasets.

    <img src="../images/import_test_data.png" alt="Import test data dialog" title="Import test data dialog" style="border: 1px solid gray; zoom:80%;">

3. Once you upload the file, you can see a preview of all the data in your CSV file. Click **Proceed** to accept the file.

    <img src="../images/import_test_data_preview.png" alt="Import test data preview" title="Import test data preview" style="border: 1px solid gray; zoom:80%;">

The system will directly fetch the row data from the CSV file and display it in the Variables window. The variables are substituted with their assigned values during prompt execution, and the generated output reflects these values accordingly. You can now easily utilize the data in your prompts, managing and executing multiple variables at once.

### Generate Test Data

You can easily generate custom test datasets without manually creating data. By providing a prompt with defined variables (like "name","age", or "location"), the system automatically creates the dataset based on these variables. This feature saves time on manual data preparation, allowing you to focus on testing and experimenting with your AI models.

!!! note

    You can generate a maximum of 5 rows of data simultaneously.

**Steps to generate custom test data:**

1. **Define the prompt**: In the prompt canvas, enter your prompt describing the dataset you want to generate. For example, "Generate a job description with job title, experience, and location."
2. **Add the variables**: Include variables in double curly braces. For example, {{Job Title}}, {{Experience}}, and {{Location}}. Once you add the variables, the **Test data** option is displayed.
3. **Generate dataset**: Click **Test data > Generate test data**. In the Generate test data dialog, specify the type of model and number of rows and click **Generate**. The system generates the dataset based on the prompt and number of data points.

    <img src="../images/generate_test_data_dialog.png" alt="Import test data dialog" title="Import test data dialog" style="border: 1px solid gray; zoom:80%;">

4. **Preview the dataset**: Check the preview of the generated data.
5. **Apply dataset to prompt studio**: After confirming the preview, click **Apply value to the variables**. The dataset is applied to the prompt canvas, and the data is filled into the correct rows and columns for testing.

    <img src="../images/generate_test_data_values_applied.png" alt="Import test data dialog" title="Import test data dialog" style="border: 1px solid gray; zoom:80%;">



## Prompt Sharing

Prompt Sharing lets users collaborate on prompt creation by sharing prompts, inputs, outputs, and settings with other users. This enhances teamwork, improves efficiency, and helps track changes through version history.

**Key Scenarios**:

1. **Sharing without committing a version**:
    * When a user shares a prompt without saving (committing) a version - all inputs, outputs, and settings are shared with the new user. Version history is not shared as no versions have been saved.
    * Both users work on the same draft version without affecting each other's drafts.
2. **Sharing after committing a version**
    * When a user shares a prompt after saving (committing) a version - the new user will receive the full version history and can see all the changes made.
    * The new user starts with the latest draft but can view all previous versions.
3. **Sharing with multiple users and versions**
    * When multiple users have contributed to a prompt, the original creator is designated as the ‘Owner’.
    * The new user can access all versions and see which user made each change.

**Steps to share a prompt and manage roles:**

1. Open the prompt you want to share.
2. On the prompt canvas, click the **three dots** icon and select **Share**.

    <img src="../images/share_option.png" alt="Share option" title="Share option" style="border: 1px solid gray; zoom:80%;">

3. In the **Share** dialog, select the users you want to share the prompt with.  

    Ensure the user is part of your account; if not, you can add them in **Settings**.  

4. Assign a role to the user: **Full**, **Edit**, or **View**.

    <img src="../images/share_dialog.png" alt="Share dialog" title="Share dialog" style="border: 1px solid gray; zoom:80%;">


5. Click **Share**.
The system sends appropriate notifications to the users involved in the sharing process, informing them about the shared prompt and their assigned permissions.

### Prompts Roles and Permissions

The roles in Prompt Studio control user access to prompts. Assign users the appropriate roles to ensure effective collaboration and control over your prompts. Review and adjust user roles regularly as needed.

Below are the roles and their associated permissions:

1. **Full (Owner):**
    * Has full control over prompts - view, edit, restore, commit, delete.
    * Can manage users and API keys, and generate and manage data.
2. **Edit (Collaborator)**:
    * Has all 'Full' role permissions except deletion.
    * Can edit prompts but cannot delete prompts.
3. **View (Viewer)**:
    * Can only view prompts and versions.
    * Cannot do any actions in the prompt, such as editing, deleting, or committing versions.


## Prompt Versioning

Prompt versioning in the Platform improves the experimentation process and promotes collaboration among team members. It allows users to create a shareable roadmap of prompt iterations within a repository, tracking each version as the prompt evolves. With prompt versioning, you can track and manage changes by committing updates at any stage, creating a repository that logs all modifications for easy reference and control. This feature helps evolve prompts to better suit specialized use cases.

**Committing Prompts** - You can save the current prompt only after generating the output. Committing the prompt without first generating the output is not allowed. When you commit the prompt, a new version is created that includes both the prompt and its corresponding output.

**Version naming** - When you commit a prompt, the first version is created and automatically labeled (e.g., V1). Subsequent versions are sequentially named V2, V3, and so forth. Users are not allowed to manually assign names to the versions.

**Version Management** - You can view the number of versions available for a particular prompt and access the content of each version. You can also restore a previous version. The latest committed version becomes the default version, but you can manually change it by selecting your preferred prompt version and clicking the 'Mark as a default version' option.
 
You can also view versions created by others, which helps understand how prompts have changed over time. Additionally, you can use any version as a draft without altering the original. You can edit the draft and commit the changes to create a new version, which will be visible to others.

!!! note

    You can create and generate as many versions as you need.

**Steps to commit a version:**

1. To save the current prompt version, click the **Commit** button on the prompt canvas.
The current prompt, system prompt, and the preferred model is recorded as a version.

    After you commit a version, a record is created in Versions. The number of versions is displayed in the **Versions** button, next to the **Commit** button.

    <img src="../images/prompt_no_of_versions_example.png" alt="Prompts commit" title="Prompt commit" style="border: 1px solid gray; zoom:80%;">

2. If you click the Versions button, the **Versions** dialog opens with details of the different saved versions.

    <img src="../images/prompt_versions_example.png" alt="Prompt versions" title="Prompt versions" style="border: 1px solid gray; zoom:80%;">
 
To use a particular prompt version, select it and click **Use as a draft**. The prompt canvas automatically opens with selected prompt and system prompts.

!!! note

    You can select the 'Mark as a default version' option to set a preferred prompt as the default version. 

## Prompt API Endpoint

The Prompt API enables seamless sharing of prompts outside of the Platform by using version-specific API keys. Users can fetch prompts via API calls, eliminating the need for repetitive copy-pasting.

Each prompt has an associated API endpoint. When a user commits the first version of a created prompt, the API endpoint is automatically generated for that specific prompt's latest version. The endpoint becomes active only after a version is committed. Users can designate a specific version as the default. If no default version is selected, the endpoint will call the latest version.

When a request is made to the API endpoint using the correct API key, the API responds with both the system prompt (labeled as “SystemPrompt”) and human prompt (labeled as “HumanPrompt”) from the specified version. 

**Editing API Endpoints** - Users can edit the endpoint to specify a different version in the query parameters. If no version is mentioned, it will call the default version of the prompt. This helps users to easily access the version they need.

**Deleting API Keys** - When a user deletes an API key, any external locations where the API key was used will be affected, rendering the key invalid.

**API Request Options** - Users can access various request methods for active API endpoints: cURL, Python, and Node.js. This provides users with multiple options for integrating the API into their applications.

Users can create multiple API keys for each endpoint. Each API key can be copied once and later deleted, but cannot be reused. This functionality streamlines prompt updates and reduces the manual effort required in managing API keys, while enhancing security when used externally.

The following image displays the window when you click the prompt API icon. It features tabs for the API endpoint and API keys.

<img src="../images/prompt_api_keys.png" alt="Prompt API" title="Prompt API" style="border: 1px solid gray; zoom:80%;">
 

## Bookmark a Model

When testing a prompt with multiple models, if one model consistently provides the best response, you can bookmark that model. When you bookmark a model, it is set as your preferred model. If you have not bookmarked any model, you will be asked to select a preferred model while committing a version.

This preferred model will produce the expected output for a given input set (system prompt and human prompt). Choosing a different model may result in varied outputs.

Steps to bookmark a model:

1. On the prompt canvas, click the **Bookmark model with its settings** icon.

    <img src="../images/bookmark_model.png" alt="Bookmark model" title="Bookmark model" style="border: 1px solid gray; zoom:80%;">
 
    After you bookmark a model, the icon changes to **Model bookmarked with its settings**.

2. If you try to commit a version without bookmarking a model, you will be asked to select a preferred model. Select your preferred model in the dialog that appears.

    <img src="../images/prompt_bookmark_select_example.png" alt="Select preferred model" title="Select preferred model" style="border: 1px solid gray; zoom:80%;">
 
    Once you select a preferred model, your version is committed successfully, and the number of committed versions is displayed.

    <img src="../images/committed_version.png" alt="Versions committed" title="Versions committed" style="border: 1px solid gray; zoom:70%;">

3. If you click Versions, the **Versions** dialog opens. You can see the model you bookmarked as the **Preferred model**.

    <img src="../images/versions_dialog_preferred_model.png" alt="Versions dialog" title="Versions dialog" style="border: 1px solid gray; zoom:70%;">



## Draft History

The Draft history option saves the current state of the entire prompt canvas. Draft history captures the prompt canvas at different points in time, preserving all input, output, and model information.

 <img src="../images/draft_history_new.png" alt="Draft history" title="Draft history" style="border: 1px solid gray; zoom:70%;">

Once you click on Draft History, a dialog appears displaying the different drafts saved at various points in time. This dialog includes the system and human prompts, associated variables, the prompt window, and the generated output for each draft. If you click ‘Restore’, you can revert to the original prompt and the corresponding output generations.

 <img src="../images/draft_history_dialog_new.png" alt="Draft history preview" title="Draft history preview" style="border: 1px solid gray; zoom:70%;">
 
You can utilize each version as a draft without altering the saved version of the prompt. While using a version as a draft, you can edit the prompt content (both human and system prompts) in the current prompt canvas. Any edits made in draft mode do not affect the saved version of the prompt.


!!! note

    
    **Draft History** includes both the input and the output, capturing the entire progression of the prompt, including any generated responses.   
    **Versions** focus only on the development of the prompt itself, tracking and retaining only the input without considering the generated outputs.  
    This distinction helps in more detailed tracking of prompt changes (via Versions) while still preserving the full context of input-output iterations (via Draft History).

## Regenerating Output

Regenerating output is a cost-effective way to run the same prompt and generate responses again without the need for additional model generations. This feature helps reduce costs associated with multiple model generations by allowing you to do selective regenerations. Regeneration options are available at both the cell and column levels. This approach is particularly useful in cases involving multiple models and rows. 

After generating the initial output, review each output to determine if it meets your expectations. If you find an issue in a specific cell, you can tweak the prompt slightly and regenerate it for improved results. Similarly, if a particular model is not performing well, you can modify the prompt to reduce any potential bias and regenerate the output. 

You can experiment with specific cells or columns, adjust variables, and preserve desired outputs ultimately enhancing user experience and optimizing token usage.

**Useful for:**

* Improving Prompts: Fine-tune prompts for better quality.
* Comparing Models: Assess different models with the same prompt.
* Reducing Bias: Adjust prompts to improve performance.
* Targeted Changes: Experiment with specific areas while preserving other outputs.

Cell-level regeneration:

 <img src="../images/prompt_regenerate_cell_example.png" alt="Regenerate cell level" title="Regenerate cell level" style="border: 1px solid gray; zoom:70%;">

Column-level regeneration:

 <img src="../images/prompt_regenerate_model_example.png" alt="Regenerate model level" title="Regenerate model level" style="border: 1px solid gray; zoom:70%;">
 