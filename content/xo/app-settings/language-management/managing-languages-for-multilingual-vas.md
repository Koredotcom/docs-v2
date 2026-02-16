# Managing Languages for Multilingual AI Agent

You can enable a language for an existing assistant or update the language configuration for an existing assistant. Besides these functionalities, this article also shows you how to switch between languages and how to enable or disable a language.

## Adding a language to an AI Agent

The default App language is **English**. Follow these steps to add a new language for your AI Agent:

1. Go to **App Settings > Configurations > Language Management**.
2. On the Language Management page, in the **_Standard Languages_** section, click the **+ Add Language** to add languages.  
<img src="../images/mlva-img4-add-lang.png" alt="Add Language" title="Add Language" style="border: 1px solid gray;zoom:50%;"/>

3. The Platform displays all the 100 plus languages that are supported. You can click on the **Configure** button to enable a language.  
<img src="../images/mlva-img5-config-new-lang.png" alt="Enable Language" title="Enable Language" style="border: 1px solid gray;zoom:50%;"/>  
  
    **Note:** You can also search for a language by entering its name in the Search field.

4. After you click configure, you can setup the following language configurations:  
<img src="../images/mlva-img6-new-lang-config.png" alt="Setup language configurations" title="Setup language configurations" style="border: 1px solid gray;zoom:50%;"/>  
  
    a. **Choose the NLU Language** – Allows you to select any supported language as the NLU model to train your assistant.

    b. **Select the Language Definition Mode** - You can choose any of the following options to copy the language definitions:

      * **Basic Mode** – Lets you only copy dialog prompts and messages.  
         **Note:** A base language is a language that is already enabled in the assistant. You need to choose a Base Language for your assistant from which you want to copy your assistant’s data for both Basic and Advanced modes.  
         <img src="../images/mlva-img7-base-lang.png" alt="Basic mode" title="Basic mode" style="border: 1px solid gray;zoom:50%;"/>    

      * **Advanced Mode** – Lets you copy dialog prompts, messages, knowledge graph, small talks, traits, and training data as per your need.  
        <img src="../images/mlva-img8-advanced-mode.png" alt="Advanced mode" title="Advanced mode" style="border: 1px solid gray;zoom:50%;"/> 

      * **Use Language Pack** – Lets you upload the language definitions after adding manually translating a JSON file. You can download a JSON language pack of any of the already-enabled languages and then edit the dialog prompts and messages in the JSON file. Upload the updated JSON file to enable the new language for the assistant.  
        <img src="../images/mlva-img9-lang-pack.png" alt="Language pack" title="Language pack" style="border: 1px solid gray;zoom:50%;"/> 

    c. **Manage Translations** – In case the Translation Engine is not configured, click the **Configure** link to set up the translation engine for your assistant. To learn how to enable Input Translation or Runtime Response Translation, [refer to this article](managing-translation-services.md){:target="_blank"}.  
    <img src="../images/mlva-img10-enable-translation.png" alt="Manage translations" title="Manage translations" style="border: 1px solid gray;zoom:50%;"/>

5. After you have configured translations, click **Enable** to add/enable a new language for the assistant.


## Updating a language for an existing AI Agent

If you want to enable/disable input translation, change the NLU language of the already enabled language for an assistant or modify the dialog prompts then you can use the update feature. 

To update an already enabled language for an assistant, follow the below steps:

1. Go to **App Settings > Configurations > Language Management**.
2. The platform displays all the languages under the **Standard Languages** section.
3. Click on the language that is already enabled in the AI Agent. The _Manage Language_ dialog appears, here you can:

    a. **Update the NLU language** – Updating the NLU language needs training for the AI Agent again.

    b. **Update the dialog prompts** – You can update the language pack file and upload it to update the dialog prompts.

    c. **Update Manage Translations** – You can enable/disable input translation or runtime response translation based on your needs.  
  <img src="../images/mlva-img11-update-lang.png" alt="Manage language" title="Manage language" style="border: 1px solid gray;zoom:50%;"/>

4. Click the **Update** after all the necessary changes are made.

!!! note

    - After you have configured a new language, to make the new language work, you must re-publish the AI Agent. Until then, the AI Agent continues to function with the previously published languages.  
    - The default Synonym library is available only for English, French, Spanish, German, and Chinese languages. However, you can add custom synonyms for any language.

## Adding a language to a Dialog GPT-enabled AI Agent

The default App language is **English**. Follow these steps to add a new language for your Dialog GPT-enabled AI Agent:

1. Go to **App Settings > Configurations > Language Management**.
2. On the Language Management page, in the ***Standard Languages*** section, click the **+ Add Language** to add languages.
3. The Platform displays all the languages that are supported. Click **Configure** to enable a language.
4. After you click configure, you can set up the following language configurations:  
<img src="../images/dgpt_language_management.png" alt="Multilingual setting" title="Multilingual setting" style="border: 1px solid gray;zoom:50%;"/>  

    a. Under Input, choose one of the following options:  

      * Use original user input to process input in its original language using Dialog GPT’s multi-lingual models.  
      * Translation Engine to translate user input into the AI Agent’s default language using a translation service.
  
    b. Under Output, choose one of the following options:  
  
      * GenAI: Rephrase Responses to transform responses into the primary language of your AI Agent using rephrasing features.  
      * Translation Engine to translate responses into the AI Agent’s default language using a    translation service.  
  
      To configure the translation engine, refer to [Manage Translation Services](managing-translation-services.md).

5. Select Save to apply your changes.

To edit the language configuration, select the language that's already enabled in the ***Standard Languages*** section, or select **Edit** in the ***Localization Configurations*** section.

Update the configurations and then click **Save**.  
<img src="../images/localization_configuration.png" alt="Manage language" title="Manage language" style="border: 1px solid gray;zoom:50%;"/>

## Localization Configurations

The **Localization Configuration** section provides a consolidated workspace for managing all language-specific components used across both DialogGPT-based and NLP-based applications. It gives users a unified view of every dialog component that supports localization and allows them to review, edit, and maintain all language-dependent prompts, messages, and responses in one place. This section simplifies configuration by listing each component, its associated text (messages, prompts, etc.), and the languages enabled in the application.

Select **Configure** under **Manage language-specific responses** to override specific words or phrases and tailor responses for a chosen language.  

<img src="../images/localization_configuration_configure.png" alt="localization_configuration" title="localization_configuration" style="border: 1px solid gray;zoom:50%;"/>

### Response Specific Localisation

This section includes the following categories of language-specific components:

* Dialog Components
* Standard Responses
* Small Talk
* Content Variables

Users can update the localized content for each enabled language directly from this section.  

<img src="../images/rephrase_specific.png" alt="rephrase_specific" title="rephrase_specific" style="border: 1px solid gray;zoom:50%;"/>

Select the **edit** icon in any component row to open the Component Properties panel for that component. The panel displays all language-dependent properties associated with that node, including:

* Component properties
* IVR properties
* JavaScript prompts (treated like any other language-specific prompt)

### Filters

Users can filter the list using:

**Component Type**   
  
 Only component types that contain prompts appear in the dropdown. Applicable node types include:

  * Agent Node (IVR properties) 
  * Entity Node (component and IVR properties; overrides create node-specific prompts)
  * Digital Forms
  * Message Node (component and IVR properties)
  * Confirmation Node (component and IVR properties)

**Language**

 Only languages enabled in the app are available for editing. You can update prompts for any enabled language from here.  

**Dialog Name**

By default, the filter is set to **All Dialogs**. You can select a specific dialog from the dropdown.

 <img src="../images/filter.png" alt="Filter" title="Filter" style="border: 1px solid gray;zoom:50%;"/>
 
## Switching Languages 

If you have configured multiple languages for an AI Agent, you can switch the language to configure the AI Agent from the top right corner (language dropdown) from within any area of your AI Agent. The dropdown displays all the other supported languages with the corresponding NLU model that's configured for the language. 

<img src="../images/mlva-img12-switch-language-1.png" alt="Switch language" title="Switch language" style="border: 1px solid gray;zoom:50%;"/>  


!!! note

    The language dropdown displays the App Language and NLU language for the languages where the App Language is not equal to NLU language. If the App Language and the NLU language are the same then the language drop down displays only the App Language.


## Disabling/Enabling Languages

Languages can be enabled or disabled by going to **Build > Configurations > Languages > Standard Languages.** Use the toggle to enable/disable a language.

<img src="../images/mlva-img13-enable-disable-lang.png" alt="Enable or disable language" title="Enable or disable language" style="border: 1px solid gray;zoom:50%;"/>  
    

After you have configured and enabled a language you can:

  * Disable or deactivate a language that's previously enabled for the AI Agent. The actual language-specific data that has been added while enabling the language continues to exist in the AI Agent even after disabling the language. Disabling would prevent the users from talking  to the assistant in that language (can be viewed in the AI Agent export copy)
  * If a language is disabled you can enable it again, since the data is preserved, you need not enter all the details.

!!! note

    Any change in language settings needs to be published before it can take effect in the published assistant.
