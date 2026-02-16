# Accessing Prompt Studio 

Steps to access Prompts:

1. [Log in](../getting-started/sign-up-sign-in.md){:target="_blank"} to your Platform account and click **Prompt Studio** from the list of modules.
 
2. On the **Prompts** dashboard, you can see the following tabs:
    * **All prompts**: Displays all available prompts.
    * **My prompts**: Displays only the prompts that you have created or saved.
    * **Shared prompts**: Displays prompts that others have shared with you for use or collaboration. 

    <img src="../images/prompt_dashboard.png" alt="Prompts dashboard" title="Prompts dashboard" style="border: 1px solid gray; zoom:80%;"> 

    Each tab displays the title or name of each prompt, the exact text of the prompt, and the name of the individual who created the prompt.

3. To create a new prompt, click **New prompt**.
4. On the **New prompt** dialog, enter a name for your prompt, and click **Proceed**. The Prompt landing page is displayed.

    <img src="../images/prompt_entertext.png" alt="New prompt dialog" title="New Prompt dialog" style="border: 1px solid gray; zoom:80%;">

5. On the Prompts landing page, choose one of the three options to start your prompt creation journey:
    * **Generate a prompt**
    * **Start from scratch**
    * **Prompt library**  

    <img src="../images/prompts_landing_page.png" alt="Prompts landing page" title="Prompts landing page" style="border: 1px solid gray; zoom:80%;">
 

## Generate a Prompt

The Generate a prompt option takes a basic prompt (one or two sentences) and expands it into a more detailed and elaborative prompt. This helps create prompts that are more comprehensive, allowing large language models (LLMs) to better understand the full context and perform the task more effectively. It simplifies the prompt creation process and improves the quality of results by providing a clearer, more structured prompt.

!!! note

    Currently, only OpenAI and Anthropic models are supported for both generative tasks: prompt generation and test data generation.

Steps to create prompts using the Generate a prompt option:

1. On the Prompts landing page, click **Generate a prompt**.
2. In the Prompt generator dialog, select a model and enter your instruction.  

    <img src="../images/generate_a_prompt.png" alt="Generate prompt" title="Generate prompt" style="border: 1px solid gray; zoom:80%;">

3. Review the AI-generated prompt.
4. Once you click **Proceed**, the prompt will be copied to the prompt canvas. You can then customize the prompt as needed.

!!! note

    You also have the option to generate prompts directly on the Prompt Canvas. You can click the **Generate Prompt** option in the Prompt field. This feature assists users in creating more elaborate and comprehensive prompts, helping to enhance the prompt creation process and ensure more detailed and effective results.


## Start From Scratch

The Start from Scratch option gives you complete flexibility to create custom prompts. When you select this option, you will be directed to a blank prompt canvas, where you can add your prompts, add variables manually or by importing data, add models, and generate your output.

Additionally, you can generate AI responses and incorporate templates from the prompt library to enhance your prompt creation process. This flexibility ensures you can tailor prompts to meet your specific needs effectively.

For more information on how to create prompts on the prompts canvas, see [Using Prompt Studio](./using-prompt-studio.md).

## Prompt Library

The Prompt library includes a collection of 65+ built-in templates, each featuring pre-designed prompts ready for use. You can easily import these templates and  start crafting your own prompts by choosing from a variety of carefully designed templates tailored for various use cases. The prompt library simplifies the prompt creation process and enhances your productivity by enabling you to access high-quality prompts.

The prompt library contains a variety of optimized prompts for different scenarios (For example, code generation, summarization, content creation, or Q&A), significantly speeding up experimentation and reducing prompt development time.

The prompt library includes a search functionality, where users can easily find prompts by keywords in their names. It also includes a filtering functionality where users can dynamically filter the prompt list by predefined use case categories, enhancing usability and relevance.

Steps to create prompts from prompt library:

1. On the Prompts landing page, click **Prompt library**.
2. On the Prompt library dialog, select any of the available options.  
**My templates**:  View and manage your saved templates. If you have not saved any templates, this section will be empty.  
**All templates**:  Browse a list of available templates.

    <img src="../images/prompt_library_templates.png" alt="Prompt library" title="Prompt library" style="border: 1px solid gray; zoom:30%;">

3. Click your desired template. A dialog box with the system prompt and prompt is displayed. To use the template, click **Use template**.

    <img src="../images/prompt_template_dialog.png" alt="Prompt library dialog" title="Prompt library dialog" style="border: 1px solid gray; zoom:30%;">

4. Once you click **Use template**, the prompts will be copied to the prompt canvas. You can then customize the prompts as needed.

    <img src="../images/prompt_canvas_library.png" alt="Prompt library canvas" title="Prompt library canvas" style="border: 1px solid gray; zoom:30%;">
  
!!! note

    All the prompt templates are read-only, preventing direct editing of predefined prompts. You can edit the content only when you use the template in the prompt canvas.

For more information on how to create prompts on the prompts canvas, see [Using Prompt Studio](./using-prompt-studio.md).
