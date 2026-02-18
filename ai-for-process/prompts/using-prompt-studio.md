# Using Prompt Studio

Prompt Studio offers three distinct prompt creation journeys to enhance your AI experimentation process. You can select any of the three prompt creation journeys (Generate a prompt, Start from scratch, Prompt library) to initiate your prompt experimentation process. A prompt experiment involves testing and comparing the performance of different AI models using a specific input, known as a prompt. This input can be a phrase, a question, or a paragraph of data, which the AI model uses to generate an output. Prompt experiments are useful for testing and comparing AI models for specific use cases and applications.

On the prompt canvas, you can easily input prompts and select from configured models to automatically generate outputs. You can also add variables, import your dataset, and use in-built prompt templates to get optimized results. You also have access to various enhanced options on the prompt canvas. For more information, see [More options on the Prompt Canvas](./options-prompt-canvas.md).

Here are the steps to create prompts on the prompt canvas:

1. **Add prompts** - Enter your prompts into the designated area.
2. **Apply variables** - Introduce any necessary variables to customize your prompts. You can add variables manually or import variables from a dataset.
3. **Add models** - Select and add the appropriate models you want to use to generate output.
4. **Generate output** - Initiate the output generation process based on your configured prompts and models.


## Add Prompts

1. The **System prompt** field helps you assign a role to the model. 
System prompts are optional. You can use the toggle to enable or disable it as needed.

    <img src="../images/promptcanvas-systemprompt.png" alt="System prompt" title="System prompt" style="border: 1px solid gray; zoom:80%;"/>
	
2. In the **Prompt** field, you can provide the instructions that you want the model to follow.
For assistance, you can click "Generate prompt" to help expand your prompt into a more detailed and elaborative prompt.  

    <img src="../images/promptcanvas_human_prompt.png" alt="Human prompt" title="Human prompt" style="border: 1px solid gray; zoom:80%;"/>

3. In the **Response JSON schema** field, you can define a JSON schema to structure the model's responses.

    This step is optional and depends on the selected model. If the chosen model supports the response format, you can use this feature. If not, the schema will be included with the prompt, allowing the model to determine whether it can respond in the requested format. By default, if no schema is provided, the model will respond with plain text.

    Supported JSON schema types include: String, Boolean, Number, Integer, Object, Array, Enum, and anyOf. Ensure the schema follows the standard outlined here: [Defining JSON schema](../workflows/workflow-builder/perform-other-actions-on-the-flow-builder/defining-json.md). If the schema is invalid or mismatched, errors will be logged, and you must resolve them before proceeding.


    <img src="../images/prompts_json.png" alt="JSON schema" title="JSON schema" style="border: 1px solid gray; zoom:80%;"/>


You can also click the "Prompt library" icon (highlighted in yellow in the image above) to explore a selection of templates that contain carefully crafted prompts designed for various use cases.

!!! note

    **System Prompts**: These are instructions to guide how the model should respond. They define the overall behavior or tone of the model. For example: "You are a helpful assistant."   
    **Human Prompts**: These are the questions or requests made by the user. They specify what the user wants the model to do or answer. For example: "Summarize this error log and tell me the likely cause of the issue."

## Apply Variables

You can incorporate variables into your prompt. A variable represents the 'key' part of the 'key-value' pair. For datasets, you can use the columns of an uploaded CSV file as variables in the prompt. For a limited number of variables, you can manually type in the values and test the output. 

Variables enable you to run prompts with different values simultaneously, generating answers for all of them at once. By attaching variables to your prompts and defining their values, you can execute multiple prompts concurrently.

You can create variables anywhere in the prompt window or system prompt window. To add variables to your prompt, you must use the syntax {{variable}} and then assign a value to the variable. The variables are substituted with their assigned values during prompt execution, and the generated output reflects these values accordingly.

**Steps to add variables:**

1. In the **Prompt** field, add the variables in double curly braces. For example, {{**xyz**}}.
When you add variables in the Prompt field, the **Variables** column appears, displaying the added variables.

2. In the **Variables** window, assign the variables a value (name/text).

    <img src="../images/promptcanvas_variable.png" alt="Variables column" title="Variables column" style="border: 1px solid gray; zoom:80%;"/>
 
    You can click **Add an empty row** to add multiple rows in the Variables window.

3. In the **Prompt** window, check how your entered prompt appears.
The variables are substituted with their assigned values.

    <img src="../images/prompt_window_example.png" alt="Prompt column" title="Prompt column" style="border: 1px solid gray; zoom:80%;"/>


## Select Models

Test your prompts with different AI models to identify which one best aligns with your  needs. You can add and compare multiple models to determine which model provides the most suitable output. You can evaluate factors like accuracy, tone, and relevance to identify the model that provides the most suitable and effective output for your specific use case.

!!! note

    You can add a maximum of 5 models for comparison.

**Steps to add a model:**

1. In the prompt canvas, click the **Select Model** field.
A list of models is displayed in the drop-down list.
2. Select your preferred model and connection for your prompts.
3. To add multiple models, select different models in the columns on the right.  

    <img src="../images/prompt_studio_models.png" alt="Select model" title="Select model" style="border: 1px solid gray; zoom:80%;"/>

    You can also click the model settings icon to adjust the model parameters like temperature, top k, top p, and max tokens.

    For more information on other model-related options such as model settings, bookmarking a model, or removing a model, see [More options on the Prompt Canvas](./options-prompt-canvas.md).


## Generate output

After selecting your models, you can generate the output for your prompt. Ensure you have added the desired number of models for comparison before generating the results.  
 
!!! note

    You can generate a maximum of 10 rows of data simultaneously.

**Steps to generate the output:**

1. On the prompt canvas, click **Run** to generate the output.

    <img src="../images/prompt_outputscreen_example.png" alt="Select model" title="Select model" style="border: 1px solid gray; zoom:80%;"/>

2. Once the generation is complete, the output is displayed in the model column of the prompt canvas. You can review the matrix in the generated output area to determine which prompt and model best meet your needs.

    The following data is displayed:
    
    * The response/output from the models.
    * The total number of tokens sent to the model and returned in the response.
    * The time taken by the model to respond with the answer.  

For more information on the available options on the prompts canvas, see [More options on the Prompt Canvas](./options-prompt-canvas.md).

