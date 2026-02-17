# Set up your Search AI application

Search AI empowers you to efficiently manage and utilize vast amounts of data from various sources to provide the users a seamless experience in locating and accessing relevant information. This documentation will guide you through the various steps involved in setting up your Search AI experience.

## Step-by-step Guide

### Step 1: Content Ingestion

Search AI allows you to ingest content in different formats and from various sources. You can upload files, crawl web pages, and also connect to third-party applications for content ingestion. Users can now use this ingested data to quickly and easily locate all pertinent information in a user-friendly format without having to seek it through many sources. [Learn more about the supported content sources and how to ingest content into Search AI](content-sources/introduction.md).


### Step 2: Chunk Extraction

Chunk extraction aims to segment the content to preserve its semantic structure and facilitate relevant and efficient answer generation. Search AI supports Text-based extraction and Rule-based extraction. Based on the characteristics of the content and the requirements, you can define one or more extraction strategies on the **Extraction** page. To learn more about the strategies and how to define them, refer to the detailed documentation [here](content-extraction/extraction.md). You can view and enhance the generated chunks using the [**Chunk Browser**](chunk-browser.md).


### Step 3: Content Enhancement 

The chunks generated using the extraction strategies can be further enhanced for specific requirements using the **Workbench** tool. Workbench allows updates, additions, exclusions, and other custom operations on the fields using Workbench Stages. Find more information [here](workbench/introduction.md). 


### Step 4: Index Configuration

Search AI gives you the flexibility to choose the vector model and the fields used for generating embeddings. Choose your preferred model from the supported models for vector generation. Find more information [here](index-configuration.md). 


### Step 5: Answer Configuration

To generate Answers, configure the chunk retrieval strategy for your application and integrate Search AI with your preferred LLM. For more information on the supported configuration, refer to [this](answer-configuration.md). 


### Step 6: Train 

The next step is to train the application. Training allows Search AI to generate an Answer Index from the ingested content based on the configurations provided. You can use the **Train** button on the Index Configuration page to initiate the training process. 


### Step 7: Test and Debug

To Test Answers, go to the **Answer Configuration** page and use the **Test Answers** option. Enter a query and verify the application's answers. Use the debug option to understand the application's behavior and the generated answers.

With these steps, your Search AI setup is complete and ready to provide answers to your users. For specific details and scenarios, refer to the detailed documentation on different topics. Note that the AI Agents use SearchAI to answer user queries based on a specific fallback setting discussed below. 

## Enabling Answers in Automation AI

The following configuration is used to enable the integration of Search AI with Automation AI. You can also configure the AI Agent's behavior to define Search AI as its primary or fallback response method.

**Answers Configuration**:
Go to the **App Profile** under **App Settings** in the Automation AI module and enable the Answers feature.
![Enabling Answers](images/enable-answers.png "Enabling Answers")

Use the following options to configure the use of Search AI. 

**Intent Identification Priority**: This priority is used when the AI Agent needs to identify the intent from the initial user utterances. This can take the following values:

* Automation first, Search AI as Fallback:
    The AI Agent prioritizes the automation framework for identifying the intent and answering the user input. If intent identification or action fails, the agent uses the Search AI to generate a response.

* Search AI first, Automation as Fallback:
    The AI Agent first uses the Search AI application to answer. If no satisfactory match is found within the Search AI sources, the agent uses the automation framework to handle the user inputs.

**Use Search AI for Unrecognized Inputs During Dialogs**: This option enhances the AI Agent's ability to handle diverse user inputs during Dialog Tasks. If the NLP Engine fails to recognize an utterance, the system passes unidentified user inputs to Search AI, allowing access to the knowledge base mid-dialog. This improves conversation flow, reduces "I don't understand" responses, and allows for more diverse and comprehensive assistance throughout the dialog.

!!!note
    The fallback method should be chosen carefully, considering the nature of the queries and the desired user experience.
