# Options on the Prompt canvas

The Prompt canvas offers a range of options to help you customize the generated responses. These settings give you more control over the output, allowing you to tailor it to your specific needs. Whether you want to adjust the model, change the style, or manage the generated content, these additional options make the process more flexible and efficient.

## Model column options

The options in the Model column enable users to tailor their experience based on specific needs, providing flexibility and control over how the outputs are produced.

![Model column options](./images/model_column_options.png "Model column options")

The following table lists the options available in the Model column:

| Icon | Feature | Description |
|:------ |:------ |:------ |
| ![](./images/drag_drop.png) | Rearrange | Move the model column anywhere on the canvas by clicking and dragging the icon. |
| ![](./images/remove_model.png) | Remove Model | Remove a model from comparison. |
| ![](./images/bookmark.png) | Bookmark a model | Set a model as your preferred model for consistent output. If no model is bookmarked, you must select one when committing a prompt version. |
| ![](./images/model_settings.png) | Model Settings | Customize output generation by adjusting model parameters like temperature, top k, top p, and max tokens. The default values are top p: 1, top k: 5, temperature: 1, and max tokens: 256. |
| ![](./images/play.png) | Play | Regenerates the output for that single column. |
| ![](./images/avg_response_time.png) | Average Response Time | Displays the average time taken for the model to generate a response. |
| ![](./images/avg_tokens.png) | Average Tokens | Shows the mean number of input and output tokens used during interactions with the model. |
| ![](./images/copy.png) | Copy | Copy the generated output to your clipboard. |
| ![](./images/view_in_json.png) | View in JSON format | View the prompt and response in JSON format. Clicking this icon opens a separate dialog displaying the request and response in JSON. |
| ![](./images/regenerate.png) | Re-generate | Regenerates the output for that single cell. |

## Top toolbar options

The options available in the top toolbar of the prompt canvas are essential for efficiently generating and managing outputs. These options help to organize and share generated data, enhancing the overall user experience in the output generation process.

![Top toolbar options](./images/top_toolbar_options.png "Top toolbar options")

The following table lists the options available on the top toolbar of the prompt canvas:

| Icon | Feature | Description |
|:------ |:------ |:------ |
| ![](./images/prompt_library.png) | Prompt library | Access a collection of around 70 templates for prompt creation, providing users with ready-to-use options. Click the icon to browse and select a template to customize or use as a base for your prompt. |
| ![](./images/prompt_api.png) | Prompt API | Enable seamless sharing of prompts using version-specific API keys. Fetch and manage prompts through API calls without repetitive copying. <br /> Click to open a dialog with API endpoints and select your preferred format (cURL, Python, Node.js) to integrate with your applications. |
| ![](./images/three_dots.png) | Save to prompt library | Saves the current prompt to the library for future use. Click the three dots icon and save your prompt as a template in the "My Templates" section of the prompt library. |
| ![](./images/three_dots.png) | Draft history | Capture and restore the state of the prompt canvas at different times, including inputs and outputs. Click the three dots icon and save the prompt canvas in draft history. |
| ![](./images/three_dots.png) | Export as CSV | Exports the entire prompt canvas (including inputs, outputs, and metadata) into a CSV file for offline analysis or sharing. Click the three dots icon and export the prompt canvas as a CSV file. |
| ![](./images/three_dots.png) | Share | Easily share prompts within the prompt canvas allowing you to collaborate with others or reuse them for future sessions. Click the three dots icon and share the prompt with others. |
| ![](./images/versions.png) | Versions | Track and manage iterations of prompts. Click to view all versions of prompts. Select a version to compare, restore, or use as a draft for further editing. |
| ![](./images/commit.png) | Commit | Finalize and save the current prompt version. <br /> Click to commit the current prompt as a new version, creating a record in Versions. When you save the current version, it will be labeled (for example, V1, V2), and you will be able to track its evolution. |
| ![](./images/run.png) | Run | Executes the prompt to generate a response or output based on the current prompt settings. |
