# Managing Translation Services

The Kore.ai XO Platform offers multiple ways to train your AI Agent for language understanding. One of the ways is to use translation services to translate the user input. In this approach, you can train the AI Agent in a language (NLU Language) other than the interaction language. For example, you can enable Spanish as an interaction language but train the assistant using English language training data.

Translation services can also be used for translating the AI Agent responses if they are defined in a language other than the conversation language. The Platform allows you to define language-specific responses for each of the languages enabled for the assistant. However, you may choose to write responses in a language other than the enabled language.

The Platform provides out-of-the-box support for Microsoft Translator and Google Translation APIs. You can also use the Custom Translation Engine feature to integrate with any other translation services or your in-house translation services.


## Configuring Microsoft Translator Service

To enable automatic translation using Microsoft Translation Services, please follow the steps below:

1. Go to **App Settings > Language Management > Translation Configurations**.
2. Select **Microsoft Translator**.
3. Provide the **API Key** of your Microsoft Translator API service.[ Learn More.](https://www.microsoft.com/en-us/translator/business/){:target="_blank"}
4. Click **Save** to complete the setup.

<img src="../images/mts-img1-microsoft-translation-config.png" alt="Translation configurations - Microsoft" title="Translation Configurations - Microsoft" style="border: 1px solid gray;zoom:50%;"/>


## Configuring Google Translation Service

To enable automatic translation using Google Translation Services, please follow the steps below: 

1. Go to **App Settings > Language Management > Translation Configurations**.
2. Select **Google Translator**.
3. Provide the **API Key** (Eg: AIzaXXXXXXXXXXXXXXXXXXXEpeW4xa0) of your Google Translation API service in the **Access Key** field [Learn More.](https://cloud.google.com/translate){:target="_blank"}
    * **Note** that the Platform does not validate the key. It is highly recommended that the key is **validated beforehand and is active and working**. A tool like Postman can be used to validate the key.
    * You can also save the translator key in an **environment / content variable** and provide that variable name enclosed in double curly braces while setting up the configuration.
4. Click **Save** to complete the setup.

<img src="../images/mts-img2-google-translation-config-1.png" alt="Translation configurations - Google" title="Translation Configurations - Google" style="border: 1px solid gray;zoom:50%;"/>

To know how to use the service, please visit [KoreUtil Libraries – autoTranslate.](../../apis/automation/koreutil-libraries.md#koreutilautotranslate){:target="_blank"}


## Configuring Custom Translation Service

The **Custom Translation Service** allows you to use translation services by integrating with other translation providers or to integrate with any in-house translation services you may have.


### How it works

Here is how custom translation services work:

1. Follow the instructions below to enable the **Custom Translation Engine** feature.
2. You can set up the integration with your translation service APIs using the **Get** or **Post** method.
3. Refer to your translation service documentation for the authentication mechanism, request payload, and response payload.
4. This integration is used for translating both the user input as well as the AI Agent responses. The platform will automatically make the following information available in the context during runtime.
5. It will make use of the following functions while defining the request payload.
    1. koreUtil.conversation.sourceText()– This function will return the text to be translated.
        1. If the user’s input is being translated, then the function will return the user’s input.
        2. If the AI Agent response is being translated, then the function will return the AI Agent response.

    2. For translating user input, this function will return the user input. For translating the AI Agent response, the function will return the AI Agent response text.

    3. koreUtil.conversation.getSourceLanguage() – This function returns the current language of the text to be translated.
        1. If the user input is being translated, then the function will return the language in which the user is interacting.
        2. If the AI Agent response is being translated, then the function will return the language in which the response is written.

    4. koreUtil.conversation.getTargetLanguage() – This function returns the language to which the text should be translated to.
        1. If the user input is being translated, then the function will return the language to which the input should be translated.
        2. If the AI Agent response is being translated, then the function will return the language to which the response should be translated.The platform invokes the translation service using the defined configurations.

6. The translation engine should share the translated text as part of the API response.
7. Map the relevant field from the response payload to be used as the translated text.


### Enabling a Custom Translation Engine

1. Go to **App Settings > Language Management > Translation Configurations**.
2. Select **Custom**, and choose **Add Custom Engine** from the dropdown.  
<img src="../images/mts-img3-custom-translation-config-2.png" alt="Add custom engine" title="Add custom engine" style="border: 1px solid gray;zoom:50%;"/>

3. Provide a name for the **Custom Translation Engine**.
4. Define the request payload for sending the text to be translated. Refer to the details provided above for defining the request payload.
5. Refer to the [Service Node](../../automation/use-cases/dialogs/node-types/working-with-the-service-node.md#define-a-custom-service){:target="_blank"} documentation to learn more about how to configure service integrations.  
<img src="../images/mts-img4-custom-translation-config-1.png" alt="Define Request payload" title="Define request payload" style="border: 1px solid gray;zoom:50%;"/>

6. After defining the request payload, you can test the integration by providing the required details from the Test Request tab. Provide the sample values for the variables shown under the Sample Context Values sections, click **Test** to verify if the custom translation connection is established.  
<img src="../images/mts-img5-config-custom.png" alt="Test the integration" title="Test the integration" style="border: 1px solid gray;zoom:50%;"/>

7. After a successful test, the platform displays the API response received from the translation service.
8. Verify the response payload and map the translated text from the payload in the **Translated Output** field.  
<img src="../images/mts-img6-custom-config2.png" alt="Verify response payload" title="Verify response payload" style="border: 1px solid gray;zoom:50%;"/>

9. Click the **Extract** button to verify if the translation output is correctly mapped.  
<img src="../images/mts-img7-extract-button-1.png" alt="Verify translation mapping" title="Verify translation mapping" style="border: 1px solid gray;zoom:50%;"/>

10. Click **Save & Exit** to return to the Languages page.
11. Click **Save** to complete the configuration.  
<img src="../images/mts-img8-save-translation-1.png" alt="Save" title="Save" style="border: 1px solid gray;zoom:50%;"/>
