# Dialogflow Engine

The Dialogflow engine is responsible for understanding user inputs and providing relevant responses based on pre-defined intents and entities. It uses natural language processing (NLP) and machine learning algorithms to identify the user’s intent and extract relevant information from their inputs. It also enables developers to build complex conversational flows, manage context, and integrate with external APIs. To use the Dialogflow engine for Natural Language Understanding, you need to create the agent and train the model on Dialogflow if you don’t have one already. The following sections detail the agent creation and training steps and also explain how to obtain the information needed to configure the Dialogflow ES Adapter. Once all the configurations are done, you can start [testing the conversation behavior/flow](test-and-debug.md){:target="_blank"} of the AI Agent using your Dialogflow ES model.


## Train the Dialogflow Engine

Dialogflow ES NLU is one of the external NLU adapters. If you want to configure the Dialogflow ES adapter, you need the Project ID and private key obtained from the JSON file in the google cloud console. See [Enable the Dialogflow API](#enable-the-dialogflow-api) and [Create Service Account Credentials](#create-service-account-credentials) to understand how to obtain the Project ID and the Private Key. These sections explain training and usage of the Dialogflow NLU engine.

**Prerequisites:** You need to have at least one agent created on the [Dialogflow Essentials](https://dialogflow.cloud.google.com/){:target="_blank"} page, to be able to configure the intent, entity nodes, or FAQs.

To enable intent and entity detection using the Dialogflow engine during a user conversation, you need to create the intents and entities on the [Dialogflow Essentials](https://dialogflow.cloud.google.com/){:target="_blank"} cloud page with the same names used during their creation on Kore.ai XO Platform.

The following steps explain how to create an agent, intent and test the configuration.



1. Go to [Dialogflow Essentials](https://dialogflow.cloud.google.com/){:target="_blank"} and click Create Agent, if you don’t have any available agent. In this example an agent with the name **Test_Dialogflow** is created.  
<img src="../images/external-nlu-dialogflow-engine-img1.png" alt="Create an agent" title="Create an agent" style="border: 1px solid gray;zoom:50%;"/>

2. Click **Create Intent** to create an intent with the same name as in your AI Agent.  
<img src="../images/external-nlu-dialogflow-engine-img2.png" alt="Create an intent with the same name as in your App" title="Create an intent with the same name as in your App" style="border: 1px solid gray;zoom:50%;"/>

3. In this example an intent with name Phone Number Verification is created as we have the same user intent in the AI Agent.
4. Under **Action and Parameters**, add Action as per the name of the entity. Add the **Parameter** Name, **Entity, Value** and the **Prompt** details.  
<img src="../images/external-nlu-dialogflow-engine-img3.png" alt="Add action, parameter, entity, value, prompt" title="Add action, parameter, entity, value, prompt" style="border: 1px solid gray;zoom:50%;"/>

5. Under **Responses → Default**, add the **Text Response** to be displayed for the user.  
<img src="../images/external-nlu-dialogflow-engine-img4.png" alt="Add text response" title="Add text response" style="border: 1px solid gray;zoom:50%;"/>

6. Click **Save** to save the configuration.
7. Go to **Training** in the left side menu and enter the intent name at **User Says**.  
<img src="../images/external-nlu-dialogflow-engine-img5.png" alt="Go to Training and enter Intent name" title="Go to Training and enter Intent name" style="border: 1px solid gray;zoom:50%;"/>

8. Enter the intent name same as it is in the AI Agent, in the top most right corner of the page in **Try Now**, to test the Dialogflow configuration.
9. The configured text response would be displayed under the **Default Response**.  
<img src="../images/external-nlu-dialogflow-engine-img6.png" alt="Configured text response displayed under Default Response" title="Configured text response displayed under Default Response" style="border: 1px solid gray;zoom:50%;"/>  
  
    !!! note

        You can configure any intents, entities or FAQ details which you require to be identified using the Dialogflow ES adapter.


### Enable the Dialogflow API

You can activate the Dialogflow API feature for your agent within Dialogflow cloud page.
Follow these steps:

1. Click the **Gear** icon next to the agent name from the top left of the Dialogflow dashboard.  
<img src="../images/external-nlu-dialogflow-engine-img7.png" alt="Click the Gear icon next to the agent name" title="Click the Gear icon next to the agent name" style="border: 1px solid gray;zoom:50%;"/>

2. The **General Settings** page is displayed. From there scroll down, to note the project ID value.  
<img src="../images/external-nlu-dialogflow-engine-img8.png" alt="Note the project ID" title="Note the project ID" style="border: 1px solid gray;zoom:50%;"/>  
  
    !!! note
        The Project ID will be used to fill the credentials while enabling the Dialogflow adapter on the Kore.AI platform.

3. Click on the project ID to open google cloud.
4. You will navigate to the Google Cloud dashboard.
5. Select **APIs & Services → Enabled APIs & Services** from the left resources menu.
6. Click **+ Enable APIs and Services** from the top of the display and find the **Dialogflow API** option.  
<img src="../images/external-nlu-dialogflow-engine-img9.png" alt="Click Enable APIs and Services" title="Click Enable APIs and Services" style="border: 1px solid gray;zoom:50%;"/>  
  
    <img src="../images/external-nlu-dialogflow-engine-img10.png" alt="Find Dialogflow API option" title="Find Dialogflow API option" style="border: 1px solid gray;zoom:50%;"/>

7. Upon activation of **Dialogflow API**, select **Manage** to open the Dialogflow API management dashboard.  
<img src="../images/external-nlu-dialogflow-engine-img11.png" alt="Dialogflow API management dashboard" title="Dialogflow API management dashboard" style="border: 1px solid gray;zoom:50%;"/>

### Create Service Account Credentials

The next step on the Dialogflow API management dashboard is to create a set of credentials to use the API, and to connect to the Dialogflow cloud from the Kore.ai platform.


#### Service Account Creation

Follow these steps to create service account:

1. Click the button **Create Credentials** at the top of the screen.

    !!! note

        If you already have service accounts with credentials, you can access them from the Credentials option in the left navigation menu.

    <img src="../images/external-nlu-dialogflow-engine-img12.png" alt="Click 'Create Credentials'" title="Click 'Create Credentials'" style="border: 1px solid gray;zoom:50%;"/>

2. In the **Create Credentials** page, the **Dialogflow API** is by default selected in the **Select an API** drop-down.  
<img src="../images/external-nlu-dialogflow-engine-img13.png" alt="Dialogflow API is by default selected in the Select an API drop-down" title="Dialogflow API is by default selected in the Select an API drop-down" style="border: 1px solid gray;zoom:50%;"/>

3. Select **Application Data** option for **What data will you be accessing?** as you are creating a service account. Click **Next**.  
<img src="../images/external-nlu-dialogflow-engine-img14.png" alt="What data will you be accessing? -  Application Data" title="What data will you be accessing? -  Application Data" style="border: 1px solid gray;zoom:50%;"/>

4. Select **No. I’m not using them** and click **Next**.  
<img src="../images/external-nlu-dialogflow-engine-img15.png" alt="No. I’m not using them" title="No. I’m not using them" style="border: 1px solid gray;zoom:50%;"/>

5. In the **Service account details** page, provide details for service account name, ID and description as shown below.  
<img src="../images/external-nlu-dialogflow-engine-img16.png" alt="Service account details - account name, ID and description" title="Service account details - account name, ID and description" style="border: 1px solid gray;zoom:50%;"/>

6. Click **Create and Continue**. The service account is created.
7. Grant access permissions to this service account and also grant users access to this service account if required in the next pages that get displayed.  
<img src="../images/external-nlu-dialogflow-engine-img17.png" alt="Grant permission to Service Account" title="Grant permission to Service Account" style="border: 1px solid gray;zoom:50%;"/>  
  
    <img src="../images/external-nlu-dialogflow-engine-img18.png" alt="Grant permission to User" title="Grant permission to User" style="border: 1px solid gray;zoom:50%;"/>


#### Private Key Generation

Follow these steps to generate the private key:

1. Click on the service account created under **Service Accounts** in the **API & Services** page as shown below.  
<img src="../images/external-nlu-dialogflow-engine-img19.png" alt="Click on the Service account" title="Click on the Service account" style="border: 1px solid gray;zoom:50%;"/>

2. The service account details are displayed as shown in the following screenshot. Go to the **Keys** tab.  
<img src="../images/external-nlu-dialogflow-engine-img20.png" alt="Service account details - Keys tab" title="Service account details - Keys tab" style="border: 1px solid gray;zoom:50%;"/>

3. Select **Create a new key** in the **Add Key** drop-down to generate the private key.  
<img src="../images/external-nlu-dialogflow-engine-img21.png" alt="Create a new private key" title="Create a new private key" style="border: 1px solid gray;zoom:50%;"/>

4. In the displayed pop-up, select **JSON** as the option to generate the private key.  
<img src="../images/external-nlu-dialogflow-engine-img22.png" alt="JSON option to create Private key" title="JSON option to create Private key" style="border: 1px solid gray;zoom:50%;"/>

    !!! note
        
        The JSON option is by default selected.


A file containing the JSON Private Key information for use in the External NLU settings of Kore.ai platform, is downloaded and saved to your computer.

<img src="../images/external-nlu-dialogflow-engine-img23.png" alt="JSON Private Key information - file created and downloaded to computer" title="JSON Private Key information - file created and downloaded to computer" style="border: 1px solid gray;zoom:50%;"/>

The file has the layout as follows:

```
{
"type": "***",
"project_id": "***",
"private_key_id": "***",
"private_key": "***",
"client_email": "***",
"client_id": "***",
"auth_uri": "***",
"token_uri": "***",
"auth_provider_x509_cert_url": "***",
"client_x509_cert_url": "***"
}
```


!!! note

    Save this JSON payload securely. You will not be able to access it again. The entire content of this JSON file must be copied into the private key field inside the Kore.AI External NLU adapter settings. See Adapter Configuration to know more.

To understand the testing and debugging of your AI Agent, to validate the working of the DialogFlow NLU, see [Test and Debug](test-and-debug.md){:target="_blank"}.
