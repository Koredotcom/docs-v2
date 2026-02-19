In the Agent AI widget, the Disposition Summary (end-of-conversation summary) is automatically generated at the end of a conversation using a GenAI model. You can select either the out-of-the-box (**OOTB**) **Kore Summarization** model or the **Custom Dialog Task** model. By default, the OOTB Kore Summarization option uses Kore’s GenAI model, but you can configure your own model by creating a **Custom LLM**. This document describes the process for creating and using a Custom LLM.

## Steps to Create a Custom LLM

1. Sign in to **AI for Service**.
2. Go to **Agent AI**, and click **Generative AI Tools** from the left navigation.
3. Click **Models Library** > **New Model**, and select **Custom Integration** from the dropdown list.  
<img src="../custom-llm-genai/new-model-1.png" alt="new-model" title="new-model" style="border: 1px solid gray; zoom:80%;"/> 

4. Click **Configurations** in the **Custom Integration** page.  
<img src="../custom-llm-genai/configurations-2.png" alt="configurations" title="configurations" style="border: 1px solid gray; zoom:80%;"/> 

5. Enter the following inputs:  
    * **Integration Name**: Any name to identify the provider or LLM Models group you want to integrate with.  
    * **Model Name**: Enter an LLM name connected to using the above mentioned integration. You can add multiple models with the same endpoint.  
    * **Endpoint (POST)**: Enter an URL to connect to the interface to interact with the LLM through API requests. 
6. Click the **Headers** option, and enter values in the **Key** and **Value** fields: 
    * **Key**: Enter a key name; for example, api-key. 
    * **Value**: Enter a value for the key. For example, `3d4f1cOdxxxxxxxxxxxxxxx`. 
7. Select the **LLM and Generative Policy guidelines** checkbox. 
8. Click **Next**.  
<img src="../custom-llm-genai/configuration-details-next-3.png" alt="configuration-details-next" title="configuration-details-next" style="border: 1px solid gray; zoom:80%;"/>  

9. Enter a **JSON** request body (can consist of the model, prompt, or any other relevant parameter), and click **Test**.  
<img src="../custom-llm-genai/request-prompt-test-4.png" alt="request-prompt-test" title="request-prompt-test" style="border: 1px solid gray; zoom:80%;"/> 

10. The following screen appears. Click **Save**.  
<img src="../custom-llm-genai/connection-save-5.png" alt="connection-save" title="connection-save" style="border: 1px solid gray; zoom:80%;"/>  

11. Click the **Create a Custom Prompt** button.  
<img src="../custom-llm-genai/create-a-custom-prompt-6.png" alt="create-a-custom-prompt" title="create-a-custom-prompt" style="border: 1px solid gray; zoom:80%;"/>  

12. In the **Conversation Summary** page:
    1. **Name**: Enter a name. For example, Summary Prompt.
    2. **Feature**: Select **Conversation Summary** from the dropdown list.
    3. **Choose Model**: Select the custom model you created from the dropdown list. For example, Custom test mode - gpt-4o.
    4. **JSON**: Enter your JSON content.  
    <img src="../custom-llm-genai/conversation-summary-page-7.png" alt="conversation-summary-page" title="conversation-summary-page" style="border: 1px solid gray; zoom:80%;"/>  

    5. Click **Test**.
    6. Enter your JSON content in the **Text Response Path** field. For example, choices[0].message.content.
    7. Click **Lookup Path**. Summary gets generated.
    8. Click **Save**.  
    <img src="../custom-llm-genai/lookup-path-save-8.png" alt="lookup-path-save" title="lookup-path-save" style="border: 1px solid gray; zoom:80%;"/>  

## Steps to Select Custom Model

1. Sign in to **AI for Service**.
2. Go to **Agent AI**, and click **Generative AI Tools** from the left navigation.
3. Click **GenAI Features**. 
4. Search for “conversation summary” in the search box.
5. Select your model and prompt from the **MODEL** and **PROMPT** dropdown lists.  
<img src="../custom-llm-genai/genai-features-model-selection-9.png" alt="genai-features-model-selection" title="genai-features-model-selection" style="border: 1px solid gray; zoom:80%;"/>  
