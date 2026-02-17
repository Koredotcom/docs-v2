# Using Variables

**Variables** help you capture values that are commonly used by different tasks, nodes, and other AI Agent elements. You can configure a variable as a key-value pair once in the App settings and substitute key with value at runtime during the conversation flow. By capturing frequently used values in a single place, variables provide the advantages of reusability and consistency. For example, let’s say you are testing a flight booking app using a staging endpoint. If you configure the endpoint as a variable, it helps you to call the API from several places quickly. When you want to change the staging endpoint to production while publishing the App, it is easy. Similarly, variables can be used to externalize content for messages and prompts from the dialog flow definition. Kore.ai platform allows App developers to define two types of variables – Environment and Content.


### Environment Variables

Environment Variables are global, reusable components which can be used in multiple places to define the App configuration. Every Environment Variable is a key-value pair. The Variable Keys can be used at various places in the App configuration. The platform will resolve/replace the Variable Keys with Variables Values during the conversation. Some of the typical use cases where a developer can use environment variables are:


* To manage the app across environments having different endpoint URLs. The app can be exported and imported based on the environment, and the infrastructure team will need to modify only the variable configuration file.
* To manage **Conditions** in the **Dialog Node** Transitions. Only the left-hand side of the transition condition uses Environment Variables. The right-hand side of the transition conditions does not use Environment Variables
* To define and manage the app response that is repeated within the app configuration as variables.
* Authorization Token
* Channel-related tokens and URLs

Post the release of v8.1 of the platform, for <span style="text-decoration:underline;">on-prem installations</span>, multiple value sets can be stored for these environment variables using Collections, [refer here for more](collections.md){:target="_blank"}.

!!! Note

    Ensure that the Environment or Content variable name does not contain any hyphen.

### Restricting Sensitive Data with Environment Variables

During the AI Agent definition, developers may create **environment variables** for sensitive data like credentials/keys. These variables are useful for connecting to other systems using service nodes or as a part of authorization profiles. However, environment variables are visible to all the developers with shared access to the AI Agent, especially when its definition is exported.

The latest Kore.ai XO Platform release introduces the **Secure Variable** feature for environment variables, which encrypts the added variable when enabled. This makes only the encrypted variable value visible to others and not the original value.

**Important Considerations**


* The **secure variable** is encrypted in the database and does not require any encryption key.
* The original value is used only internally for all service calls, language translation, etc. while executing the AI Agent definition.
* During the export of a secure variable through **App** or **environment variables** import, it has an empty value, so the original value is not available in plain text.

**Leveraging Encrypted Environment Variable Values for Additional Modules**

You can use the encrypted environment variable values in the following modules in addition to the other supported modules:



* **Channel Configuration**: While configuring channels under **Channels & Flows > Channels**, you can use encrypted/regular environment variable values for all the fields including access token, access key, app ID, URLs, etc.
* **Languages**: Under **App Settings > Language Management > Translation Configurations**, while configuring the translation engine, you can use the regular/encrypted environment variable value (type `{{env.environment variable name}}`) to set up the encrypted variable name as the access key as follows:
    * The **Access Key** field for Google Translator or Microsoft Translator.  
    <img src="../images/env-and-content-variables-img1.png" alt="Translation Configurations - Access Key" title="Translation Configurations - Access Key" style="border: 1px solid gray;zoom:50%;"/>

    * The **Value** field in the **Configure Translation Engine** panel for Custom Translation Engine Configurations.  
    <img src="../images/env-and-content-variables-img2.png" alt="Configure Translation Engine - Value" title="Configure Translation Engine - Value" style="border: 1px solid gray;zoom:50%;"/>

    * **Authorization Profiles** – You can use encrypted/regular environment variables on the following fields while defining a new authorization mechanism for all types of authorizations:

        * **Authorization Check URL**, **Field Key** for form field, and **Field Key** and **Field Value Authorization Fields** for Authorization Type _Basic Auth_. [Learn more](../dev-tools/bot-authorization/setting-up-authorization-using-basic-auth.md){:target="_blank"}.
        * **Client Id**, **Client Secret Key**, and **Authorization URL** for Authorization Type _Oauth V2_. [Learn more](../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2.md){:target="_blank"}.
        * **Client Id**, **Client Secret Key**, **Token Request URL**, **Scope**, and **Refresh Token URL** for Authorization Type _Oauth V2 Client Credentials_.
        * **Consumer Key**, **Consumer Secret**, **Request Token Link**, **Access Token Link**, and **User Authorization Link** for Authorization Type _Oauth V1_. [Learn more](../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v1.md){:target="_blank"}.
        * **Authorization Check URL** and **Field Key** (for Form Field) for Authorization Type _API Key_. [Learn more](../dev-tools/bot-authorization/setting-up-authorization-using-an-api-key.md){:target="_blank"}.
        * **Field Key** for Form Field, **Token URL**, **Field Key**, and **Field Value** for Authorization Field, and **Refresh Token URL** for Authorization Type _Oauth V2 Password Grant Type_. [Learn more](../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2-password-grant.md){:target="_blank"}.

The availability of the environment variables has been extended to the **Field Key** and **Field Value** parameters.  
<img src="../images/env-and-content-variables-img3.png" alt="Field Key and Field Value" title="Field Key and Field Value" style="border: 1px solid gray;zoom:50%;"/>

### Content Variables

App building essentially requires extensive content management efforts. When it comes to multi-language Apps, it also involves tedious coordination efforts between the developers and globally-distributed content authors or copyright team. Content variables enable you to overcome that by abstracting AI Agent flow development efforts from authoring or editing the content. Using Content Variables, programmers can avoid hard-coding the AI Agent content, such as prompts, messages, or any data presented to the user, into AI Agent components, and instead point to specific variables in centrally managed Content Variables files for each app language. You can export the language-specific content variable files to content editors, without exposing any app configurations. The writers can author the content in the exported file, which you can import back into the app.

!!! Note

    Ensure that the Environment or Content variable name does not contain any hyphen.


### Defining App Variables and Securing Them

Enabling the **secure variable** setting after defining an Environment (App) Variable, encrypts and securely stores credentials set as environment variables. To add a variable, follow the steps below:



1. Open the AI Agent for which you want to add the variables.
2. Navigate to **App Settings > Variables** on the left menu, and select **Environment Variables** tab to add Environment variables, or **Content Variables** tab to add Content Variables.
3. In the **Add Variable** panel, provide the following details:
    * **Variable Name**: Enter the environment variable name. For example, user credentials.
    * **Value**: Enter the environment variable value that is encrypted.
    * **Notes (optional)**: Any tip/note describing the environment variable.
    * **Group (optional)**: The name of the group to which the environment variable is mapped.
    * Assign a **Namespace** if enabled ([refer here for more](../managing-namespace.md){:target="_blank"}).

1. Enable the **secure variable** by switching to the **Enabled** state (**Disabled** is the default setting).  
<img src="../images/env-and-content-variables-img4.png" alt="Enable Secure variable" title="Enable Secure variable" style="border: 1px solid gray;zoom:50%;"/>

2. Click **Save**.  
<img src="../images/env-and-content-variables-img5.png" alt="Save the variable" title="Save the variable" style="border: 1px solid gray;zoom:50%;"/>


The variable and its encrypted value appear in the list.  
<img src="../images/env-and-content-variables-img6.png" alt="Environment variable and its encrypted value appear" title="Environment variable and its encrypted value appear" style="border: 1px solid gray;zoom:50%;"/>


### Entering Language-Specific Values

To add language-specific values for content variables, you first need to switch the app language. You can switch the language by clicking the name of the currently-enabled language from the top-right corner of the app’s page and then selecting another language as follows:

<img src="../images/env-and-content-variables-img7.png" alt="Select language" title="Select language" style="border: 1px solid gray;zoom:50%;"/>
 

After switching the language, go to **App Settings > Variables > Content Variables** page and click the **edit** icon next to the relevant variable. Replace the text in the **Value** field in the enabled language.


### Using Environment Variables

You can invoke an environment variable in plain text mode (Standard editor) using the following syntax: `{{env.variableName}}`. If you are using it in JavaScript mode, it is _env.variableName_ Here’s an example from an app that uses two environment variables called _appType_ and _parameters_ to determine different app environments such as development, testing, and production. The following script node in one of the app’s tasks captures the _base URL_ of the app, depending on the current app environment.

<img src="../images/env-and-content-variables-img8.png" alt="Script to capture Base URL of app" title="Script to capture Base URL of app" style="border: 1px solid gray;zoom:50%;"/>


The URL in the following service node changes based on the captured URL

<img src="../images/env-and-content-variables-img9.png" alt="URL changes based on the captured URL" title="URL changes based on the captured URL" style="border: 1px solid gray;zoom:50%;"/>


### Updating the Environment Variable

For on-premise deployments, the user can update the encryption key/secured variable value with a new one. To edit the value, follow these steps:

1. Click the **Edit** icon of the secure variable listing.  
<img src="../images/env-and-content-variables-img10.png" alt="Click Edit icon corresponding to variable to be updated" title="Click Edit icon corresponding to variable to be updated" style="border: 1px solid gray;zoom:50%;"/>

2. In the **Edit Environment Variable** panel, click the **Edit** icon next to the **Value** textbox.  
<img src="../images/env-and-content-variables-img11.png" alt="Edit Environment Variable - Click Edit" title="Edit Environment Variable - Click Edit" style="border: 1px solid gray;zoom:50%;"/>

3. Enter the new variable value to be encrypted and click **Done**.
4. Click **Save**.

The new encrypted secure variable value is updated in the list as shown below:
<img src="../images/env-and-content-variables-img12.png" alt="secure variable value is updated" title="secure variable value is updated" style="border: 1px solid gray;zoom:50%;"/>


### Using Content Variables

You can invoke a content variable in plain text mode (Standard editor) using the following syntax. `{{content.variableName}}`. If you are using it in JavaScript mode, it is _content.variableName_ Here’s an entity node of a multi-language flight booking app that captures the source airport of the users. It uses a content variable instead of a hard-coded user prompt.

<img src="../images/env-and-content-variables-img13.png" alt="Entity node containing content variable" title="Entity node containing content variable" style="border: 1px solid gray;zoom:50%;"/>

When the app reaches this node as a part of the user interaction, the user prompt changes depending on the language of the interaction (provided you entered the respective variable values for all the enabled languages).


### Importing and Exporting

You can import and export variables between apps.

1. On any of the  Variables page accessible from **App Settings > Variables > (Environment/Content) Variables**,
2. Click the **ellipses next to Add Variables**
3. _To Import_: Select **Import** to import variables from a JSON or CSV file
    1. Since the import will replace the existing variables, you are advised to take a backup of the same.
    2. After taking a Backup, **Proceed** with the Import
    3. Select a JSON or CSV file to import (see below for the file format)

4. _To Export_: Select either **Export CSV** or **Export JSON** as the preferred format for the export file:
    4. App variables are exported in the form of a JSON or CSV file based upon your selection.
    5. This file includes both environment and content variables.

<img src="../images/env-and-content-variables-img14.png" alt="Bot variable import/export" title="Bot variable import/export" style="border: 1px solid gray;zoom:50%;"/>

The **App Variable file** contains the following information, the same needs to be present in your Import file. CSV files need a header row. You are advised to refer to the Export (or backup) file and use the same format for the Import file.

* **key** (mandatory) – name of the variable
* **scope**  – the scope of the variable corresponds to the Setup Option at the time of variable declaration (if not provided will be set to prePopulated) and can be
    * prePopulated,
    * askOnInstall, or
    * hidden

* **value** – the value of the variables
* **variableType** (if not set will default to env)-
    * env for Environment and
    * locale for Content Variable

* **audioTag** -for the player details in case IVR enabled
* **group** – group name
* **hint** – description of the variable
* **propagateVAlue** – true or false
* **Namespace** – the namespace associated to the variable
* **Language-specific variable**

**Sample CSV file**:

<img src="../images/env-and-content-variables-img15.png" alt="Sample CSV file" title="Sample CSV file" style="border: 1px solid gray;"/>  


**Sample JSON file**:

```
[
  {"key":"hosturl",
   "value":"https://platform.kore.ai",
   "hint":"This is the URL of environment which can be used across the endpoints configured in the app",
   "audioTag":"",
   "variableType":"env",
   "scope":"prePopulated",
   "group":"URLS"}
]
```
