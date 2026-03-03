# Digital Forms

AI Agents engage end-users primarily using a conversational interface that typically includes an exchange of a series of messages. But oftentimes, there is a need to gather information from the end-user to proceed further. Examples include providing delivery address while interacting with an eCommerce agent, details of an issue while reporting to ITSM agent, opportunity details while creating a CRM opportunity, capturing customer details to book a flight, etc.

In a standard Dialog Task, this scenario is designed by placing a series of Entity Nodes connected back-to-back and the user is asked for values for each of these entities sequentially, which is quite tedious and frustrating. Digital Forms mitigate this issue by presenting users with an interactive interface that they can use to provide the information they are asked for in one go.

**Digital Forms** provide a range of input fields that allow your AI Agent to capture the required details from end-users. After the users complete the form, the input is submitted to the AI Agent to proceed with the task at hand.

In this article, we discuss the features and implementation of Digital Forms in the Platform. For a use case example and a step-by-step implementation of a Digital Form click [here](configure-digital-forms.md){:target="_blank"}.

## Features

* Improved user experience with a single interface for input collection.
* Easy form creation using simple drag and drop actions.
* Vast component library to cater to all your form requirements.
* Provision to define rules for input validations and visibility suiting your use case.
* Automatic dialog task generation from the _Form_ enabling switching between Form or Conversation experience based on the channel of interaction.

## General Setup

You can access **Digital Forms** from **Automation AI > Digital Skills**.

<img src="../../images/access-digital-forms.png" alt="Access Digital Forms" title="Access Digital Forms" style="border: 1px solid gray; zoom:75%;">

Here is the overall usage process for Digital Forms within the Platform

* **Form Creation**: Define a Digital Form by adding components and configuring their properties.
* **Form Invocation**: Forms are invoked from inside a task or process:
   * A form is included as a component in the task. The dialog task offers a Form Experience and Conversation Experience based on the channel of interaction. Learn more by reading about the [Form Node](../dialogs/node-types/working-with-the-form-node.md){:target="_blank"}.
   * A Digital Form is added to a Digital View with a dialog task triggered when a form is submitted from there.

* **Form Submission**: When it is submitted, the component values are validated and any errors are highlighted. Based on the mode of invocation, post successful validation:
   * The AI Agent execution proceeds as per dialog flow in case of dialog task invocation.
   * The selected task is triggered.

## Create a Form

A Digital Form includes a definition and various components to capture user input.

To create forms, follow the steps below:

1. Under **Automation AI > Digital Skills**, select **Digital Forms**.
2. On the **Digital Forms** screen, click **New Form**.
3. On the **New Form** page, enter the following:
   
      * **Name** of the Form.
      * **Display Name** for the Form.
      * **Description** of the Form.

      <img src="../../images/create-new-form.png" alt="Create New Form" title="Create New Form" style="border: 1px solid gray; zoom:75%;">

4. **Select form’s Header Style**: You can choose a specific header style from the listed illustrations – the circle indicates the position of logo/icon with respect to the title of the form in the header. Click the card to select the style. If it has a logo, you can upload an image file (jpg or png) for the logo.
    
    !!! Note

        During the Export of the app, the logo is not exported along with Digital Forms. So, when importing this App, you need to separately copy the logo image file and then manually reupload the logo.

5. Turn on the **Description** toggle if you want to show a description of the form in the header.

    <img src="../../images/description-toggle-turn-on.png" alt="Description Toggle" title="Description Toggle" style="border: 1px solid gray; zoom:75%;">

6. **Form Security** – Enable **Secure Form Data** to redact form data from the App Context, Debug Logs, Service Calls, Agent Transfer, and the Bot Kit.

    <img src="../../images/secure-form-data.png" alt="secure form data" title="secure form data" style="border: 1px solid gray; zoom:75%;">
   
    While enabling, you can also choose whether to display the **Secure Form icon** to your end users.

    <img src="../../images/enable-redact-form-data.png" alt="enable redact form data" title="enable redact form data" style="border: 1px solid gray; zoom:75%;">
   
    Once enabled, the Platform will replace the user input with a unique random system-generated alphanumeric value in all the modules. Also, the **Secure Form** icon and a tip will be displayed, notifying the user that the form is secure.

    <img src="../../images/secure-form-icon.png" alt="secure form icon" title="secure form icon" style="border: 1px solid gray; zoom:75%;">

    Secure Form feature ensures data security at form level. You can achieve securing data at component level too. [Read here](configure-digital-forms.md#form-editor){:target="_blank"} to know more.

7. **Pre-Processor script**—The Pre-Processor script in the form settings can be used by the developer to manipulate all the data required for the form that cannot be customized from the UI design view.

    For example, in the case of a multilingual AI Agent, the user can customize the form UI  & standard responses of the components in the digital form so that they appear based on the selected app language. 

    Moreover, you can provide dynamic variables to replace the static content in the pre-processor script for use in the form using environment, content, and context variables.

    The platform processes and resolves the pre-processor script as the first step in the form node execution. The same can be seen in the debug log. As part of this, the updated definition from the pre-processor script is passed to webUI to render the form.

    **Example:**

    Suppose you want to change the standard response of a field of URL type in a digital form based on the app language. You have added English, Spanish, German, and Japanese as your app languages.

    ```
    let formDef = koreUtil.getFormDefinition();
    if(context.currentLanguage === 'en'){
        formDef.formMsgMeta.URL_INVALID_FORMAT = 'Invalid URL';
    }
    elseif(context.currentLanguage === 'de'){
        formDef.formMsgMeta.URL_INVALID_FORMAT = 'ungültige URL';
    }
    elseif(context.currentLanguage === 'es'){
        formDef.formMsgMeta.URL_INVALID_FORMAT = 'URL invalida';
    }
    else{
        formDef.formMsgMeta.URL_INVALID_FORMAT = '無効なURL';
    }
    ```

    <img src="../../images/xop-8553-pre-processor-script.png" alt="Digital form - Pre processor script" title="Digital form - Pre processor script" style="border:1px solid gray; zoom:60%;">

    !!! Note

        * This field will be available **only while updating** the form and not at the creation time.
        * Defining a pre-processor script is **not mandatory**. The default standard responses will always be present.
        * This feature is available **only for Automation AI**.

    Please click here to learn more about the digital form’s pre-processor script.

8. Click **Save & Proceed**.

    <img src="../../images/save-digital-form.png" alt="save digital form" title="save digital form" style="border: 1px solid gray; zoom:75%;">


### Configuration setup using Pre-Processor script

Earlier, our digital forms can be created only in one language and hence multiple forms need to be created to provide the flexibility to render the forms in different languages for multi lingual app. Also the  messages and errors were  available only in English and cannot be customized. This posed a limitation as it didn't support all app languages. Additionally, users lacked the ability to customize the forms using the dynamic data from context.

The pre-processor script has been introduced to counter the above limitations. You can provide values to the relevant keys based on the app language or any other condition that requires customization of aspects like field labels or standard responses.

To get the form definition that is provided as a response in the `koreUtil.getFormDefinition` and keys that need to be customized, refer to the digital form's **JSON view**. Navigate to **Automation AI > Digital Skills > Digital forms** and open the form that you wish to configure. Click **Test** on the Form Design view, then select the **JSON** tab.

<img src="../../images/xop-8553-json-preview.png" alt="Digital Form Preview - JSON" title="Digital Form Preview - JSON" style="border:1px solid gray; zoom:60%;">

The pre-processor script allows you to:

* Make Language specific customizations
* Populate Dynamic data from external sources (Eg: data file or API)
* Populate Dynamic data using variables
* Pre-fill the form with static or dynamic data (default value using value or context variable)

!!! Important

    Remember that you must create a form definition object using `koreUtil.getFormDefinition` before adding any code to customize any field’s property or standard response. This object consists of the form meta, form components & form messages. Make sure that this is the first line in your javascript code, with the syntax:

    ```
    let formDef = koreUtil.getFormDefinition();
    ```

The below sections contain the keys that you may need to manipulate:

* **Components**: for field and form level customizations like Form Header, Description, Field Names, Descriptions, Default Text, Validation rules etc.
* **formMsgMeta**: for customizing Standard Messages and Standard Error Responses

!!! Tip

    The entire JSON is usually large, and it may be a challenge to find out the keys that need to be manipulated. You may consider copying the entire JSON, pasting it in any JSON Viewer application wherein you can collapse and expand the sections. You can expand only the components and formMsgMeta sections for convenience.

<img src="../../images/xop-8553-json-sections-collapsed.png" alt="Components and Metadata sections in the JSON viewer" title="Components and Metadata sections in the JSON viewer" style="border:1px solid gray; zoom:60%;">

#### Components

The **Components** section is a container for all the fields on the form and the keys that can be manipulated in the pre-processor script for customization.

Upon expanding the **components** section, which appears as an array in the JSON viewer, you see an indexed sub-sections that indicates the number of fields in the form. For example, the components section in the below screenshot shows that there are 12 fields in the form.

<img src="../../images/xop-8553-components.png" alt="JSON - Components section" title="JSON - Components section" style="border:1px solid gray; zoom:70%;">

You can see any field’s keys and their values by expanding the sub-section, and then expanding **metaData**. Usually the index of sub-sections represents the sequence of the fields on the form.

<img src="../../images/xop-8553-expanded-sub-section.png" alt="JSON - Component sub section expanded" title="JSON - Component sub section expanded" style="border:1px solid gray; zoom:70%;">

You can customize the properties of a field by referencing it using its index number within the array using the below syntax:

```
formDef.components[<<index>>].metaData.<<keyName>> = '<<value>>';
```
**Example:** to customize the **displayName** of the first field in the form, below is the code:

```
formDef.components[0].metaData.displayName = '名前';
```

Here’s a list of keys and their purpose:

<table border="1">
<tr>
   <td><strong>Key</strong>

   </td>
   <td><strong>Form Setting</strong>

   </td>
   <td><strong>Purpose</strong>

   </td>
  </tr>
  <tr>
   <td>metaData.displayName

   </td>
   <td>Display Name

   </td>
   <td>The field name visible to the user

   </td>
  </tr>
  <tr>
   <td>metaData.placeHolder

   </td>
   <td>Placeholder

   </td>
   <td>The text pre-populated in the field, but is not captured as field data

   </td>
  </tr>
  <tr>
   <td>metaData.toolTip

   </td>
   <td>Tooltip Text

   </td>
   <td>The tooltip text associated with the field

   </td>
  </tr>
  <tr>
   <td>metaData.isVisible

   </td>
   <td>Is visible

   </td>
   <td>To change the visibility setting; it can be true or false.

   </td>
  </tr>
  <tr>
   <td>metaData.required

   </td>
   <td>Required

   </td>
   <td>To establish whether the field is a mandatory one

   </td>
  </tr>
  <tr>
   <td>metaData.defaultvalueInput

   </td>
   <td>Default Value

   </td>
   <td>To provide a default value to the field

   </td>
  </tr>
  <tr>
   <td>metaData.validateOn

   </td>
   <td>Validate

   </td>
   <td>To mention the event that would trigger validation. Can be onChange or onBlur.

   </td>
  </tr>
  <tr>
   <td>metaData.description

   </td>
   <td>Description

   </td>
   <td>Description of the field

   </td>
  </tr>
  <tr>
   <td>metaData.disabled

   </td>
   <td>Read-only

   </td>
   <td>To establish whether the field is read only.

   </td>
  </tr>
  <tr>
   <td>metaData.options.locale.format
<br>
(Only for <strong>Date</strong> fields)

   </td>
   <td>Date Format and Time Format

   </td>
   <td>To choose the format of date and time

   </td>
  </tr>
  <tr>
   <td>metaData.options.timePicker
<br>
(Only for <strong>Date</strong> fields)

   </td>
   <td>Time

   </td>
   <td>To show/hide the time picker within the date picker

   </td>
  </tr>
  <tr>
   <td>metaData.options.timePicker24Hour
<br>
(Only for <strong>Date</strong> fields)

   </td>
   <td>Time Format

   </td>
   <td>To choose the time format between 12 Hour or 24 Hour

   </td>
  </tr>
  <tr>
   <td>metaData.options.locale.applyLabel
<br>
(Only for <strong>Date</strong> fields)

   </td>
   <td>–

   </td>
   <td>The label of <strong>Apply</strong> button on the date-time picker; visible only if timePicker is set to true

   </td>
  </tr>
  <tr>
   <td>metaData.options.locale.cancelLabel
<br>
(Only for <strong>Date</strong> fields)

   </td>
   <td>–

   </td>
   <td>The label of <strong>Cancel</strong> button on the date-time picker; visible only if timePicker is set to true

   </td>
  </tr>
  <tr>
   <td>metaData.countryCode
<br>
(Only for <strong>Phone Number</strong> fields)

   </td>
   <td>Default Country Code

   </td>
   <td>The Default Country code Eg: +1

   </td>
  </tr>
  <tr>
   <td>metaData.countryName
<br>
(Only for <strong>Phone Number</strong> fields)

   </td>
   <td>Default Country Code

   </td>
   <td>The default Country Name (Eg: United States)

   </td>
  </tr>
  <tr>
   <td>metaData.enableDropDownSearch
<br>
(Only for <strong>Dropdown</strong> fields)

   </td>
   <td>–

   </td>
   <td>To establish whether search box is available in the dropdown

   </td>
  </tr>
  <tr>
   <td>metaData.isMultiSelect
<br>
(Only for <strong>Dropdown</strong> and <strong>Radio Button</strong> fields)

   </td>
   <td>Multi Select

   </td>
   <td>To establish whether multiple items can be selected from the dropdown

   </td>
  </tr>
  <tr>
   <td>metaData.minSelection
<br>
(Only for <strong>Dropdown</strong> fields)

   </td>
   <td>–

   </td>
   <td>To establish the minimum number of items to be selected. If metaData.isMultiSelect is <strong>false</strong>, this value will be ignored.

   </td>
  </tr>
  <tr>
   <td>metaData.maxSelection
<br>
(Only for <strong>Dropdown</strong> fields)

   </td>
   <td>–

   </td>
   <td>To establish the maximum number of items that can be selected. Works only if metaData.isMultiSelect is <strong>true.</strong>

   </td>
  </tr>
  <tr>
   <td>metaData.values
<br>
(Only for <strong>Dropdown</strong> and <strong>Radio Button</strong> fields)

   </td>
   <td>Dropdown values

   </td>
   <td>An array containing the items in the dropdown. Every item is represented by an index number.

   </td>
  </tr>
  <tr>
   <td>metaData.values[&lt;<index>>].value
<br>
(Only for <strong>Dropdown</strong> and <strong>Radio Button</strong> fields)

   </td>
   <td>Dropdown values > Edit Values > Value

   </td>
   <td>The dropdown item

   </td>
  </tr>
  <tr>
   <td>metaData.values[&lt;<index>>].selected
<br>
(Only for <strong>Dropdown, Checkbox</strong> and <strong>Radio Button</strong> fields)

   </td>
   <td>Dropdown values > Edit Values > Default

   </td>
   <td>To establish whether the dropdown item is selected by default

   </td>
  </tr>
  <tr>
   <td>metadata.toggleDefaultValue
<br>
(Only for <strong>Toggle</strong> fields)

   </td>
   <td>–

   </td>
   <td>Default state of the toggle, can be <strong>true</strong> or <strong>false</strong>

   </td>
  </tr>
  <tr>
   <td>metaData.toggleEnabledValue
<br>
(Only for <strong>Toggle</strong> fields)

   </td>
   <td>Value > Yes

   </td>
   <td>Value to be read by platform if the toggle is enabled

   </td>
  </tr>
  <tr>
   <td>metaData.toggleDisabledValue
<br>
(Only for <strong>Toggle</strong> fields)

   </td>
   <td>Value > No

   </td>
   <td>Value to be read by platform if the toggle is disabled

   </td>
  </tr>
  <tr>
   <td>metaData.minRange
<br>
(Only for <strong>Range Slider</strong> fields)

   </td>
   <td>Value > Min

   </td>
   <td>Minimum value of the range slider

   </td>
  </tr>
  <tr>
   <td>metaData.maxRange
<br>
(Only for <strong>Range Slider</strong> fields)

   </td>
   <td>Value > Max

   </td>
   <td>Maximum value of the range slider

   </td>
  </tr>
  <tr>
   <td>metaData.defaultvalueInput
<br>
(Only for <strong>Range Slider</strong> fields)

   </td>
   <td>Default value

   </td>
   <td>Default value of the range slider

   </td>
  </tr>
  <tr>
   <td>metaData.buttonAction
<br>
(Only for <strong>Button</strong> component)

   </td>
   <td>Button Action

   </td>
   <td>The action triggered on clicking the button. Can be <strong>submit, cancel, reset or goToUrl</strong>

   </td>
  </tr>
  <tr>
   <td>metaData.url
<br>
(Only for <strong>Button</strong> component)

   </td>
   <td>URL

   </td>
   <td>URL to navigate to when user clicks the button if Button Action is goToUrl.

   </td>
  </tr>
</table>

#### formMsgMeta

The formMsgMeta section contains the keys that contain the Standard Responses and Error Messages. If you want to customize these messages and responses, or customize them based on the AI Agent’s language, you can do so in the pre-processor script by manipulating the values of these keys.

These messages and responses cannot be customized from the form design UI. The pre-processor script provides you the required mechanism to create status or dynamic responses based on your requirements.

Upon expanding the **formMsgMeta** section, you can see the keys that you can customize.

<img src="../../images/xop-8553-formmsgmeta-keys.png" alt="Digital Form JSON - formMsgMeta Keys"title="Digital Form JSON - formMsgMeta Keys" style="border:1px solid gray; zoom:70%;">

!!! Note

    You will need to set useFormMsgMeta to **yes** to ensure that the customized formMsgMeta values are passed on to WebUI for rendering the form. This is an optional key, but not mentioning it will make the form display the system default responses and error messages.

    The syntax to set it is `formDef.formMsgMeta.useFormMsgMeta = 'yes';`

The syntax to provide value to a key of the formMsgMeta section is `formDef.formMsgMeta.<<KEY>> = '<<value>>';`

The response message customizations are at the form level, that is, a response message of a particular nature will be applicable to all the fields across the form. For example, the customized response message for invalid URL will be the same for all the fields of URL type within the form.

**Example:** Suppose you want to customize the system response for mandatory fields. The default system response is ‘This field is required’, but you want the response to be ‘This is a mandatory field; please provide a value’. This is how you can do it:

```
formDef.formMsgMeta.FIELD_MANDATORY = 'This is a mandatory field; please provide a value';
```

Here’s a list of keys and their purpose:

<table border="1">
  <tr>
   <td><strong>Key</strong>
   </td>
   <td><strong>Purpose</strong>
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FIELD_MANDATORY
   </td>
   <td>Response message if no data is provided in a mandatory field
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FIELD_INVALID_FORMAT
   </td>
   <td>Response message if the data provided in the field is not valid.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.URL_INVALID_FORMAT
   </td>
   <td>Response message if the url entered in the field is of invalid format.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FIELD_TOO_LONG
   </td>
   <td>Response message if the data entered in the field exceeds the maximum permitted length..
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FIELD_TOO_SHORT
   </td>
   <td>Response message if the data entered in the field falls below the required minimum length.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.EMAIL_INVALID_FORMAT
   </td>
   <td>Response message if the data entered in an Email type field in invalid format.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.ERROR_PREVIEW
   </td>
   <td>Response message if error occurs in preview.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.ERROR_DOWNLOAD_ATTACHMENT
   </td>
   <td>Response message if error occurs while downloading attachment.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FILE_SIZE_EXCEED
   </td>
   <td>Response message if file size exceeds the maximum limit.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FILE_UPLOAD_EXISTING
   </td>
   <td>Response message if the file has already been uploaded.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FILE_UPLOAD_ERROR
   </td>
   <td>Response message if error occurs while uploading a file.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FILE_TYPES_SUPPORTED
   </td>
   <td>Response message if user tries to upload a file of unsupported type.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.INVALID_PHONE_NUMBER
   </td>
   <td>Response message if user enters an invalid phone number in a field of Phone Number type.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.ERROR_PROCESS_APP.PUBLISH
   </td>
   <td>Response message when process app is not published
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.ERROR_PROCESS_APP.EXPIRE_INVALID
   </td>
   <td>Response message when the process app being accessed has expired or is invalid.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DISCARD.CONFIRM
   </td>
   <td>Header text of the popup that appears on discarding a form
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DISCARD.DESC
   </td>
   <td>Text within the popup that appears on discarding the form
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DISCARD.SUBMIT
   </td>
   <td>Caption of the ‘Confirm’ button of the popup. Confirms the action.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DISCARD.CLOSE
   </td>
   <td>Caption of the ‘Close’ button of the popup. Closes the popup without discarding the form.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_SUBMISSION_CONFIRMATION.HEADER
   </td>
   <td>Header text of the popup that appears on submitting a form
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_SUBMISSION_CONFIRMATION.DESC
   </td>
   <td>Text within the popup that appears on submitting the form
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_SUBMISSION_CONFIRMATION.CLOSE
   </td>
   <td>Caption of the ‘Confirm’ button of the popup. Confirms the action.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_SUBMISSION_CONFIRMATION.CONFIRM
   </td>
   <td>Caption of the ‘Close’ button of the popup. Closes the popup without submitting the form.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_SUBMISSION_FAILED
   </td>
   <td>Message that is displayed when form submission fails
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_LINK_EXPIRY
   </td>
   <td>Message that is displayed when the form link expires.
   
   <strong>Note</strong>:
   <ul>
      <li>The expiry message of the digital form cannot be customized.</li>
      <li>The expiry message will be displayed according to the app's language settings.
      </li>
   </ul>
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_CANCEL
   </td>
   <td>Message that is displayed when the form is canceled.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.DROPDOWN_MESSAGE
   </td>
   <td>Message displayed on dropdown
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_LOADING
   </td>
   <td>Message displayed when the form is loading
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DATE_PICKER.FORMAT
   </td>
   <td>The format in which the date entered in the date picker will be saved
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DATE_PICKER.CONFIRM
   </td>
   <td>Caption of the Confirm button on date picker
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DATE_PICKER.CANCEL
   </td>
   <td>Caption of the Cancel button of the date picker
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DATE_PICKER.DAYS_OF_WEEK[ ]
   </td>
   <td>Array containing the names of weekdays. They can be customized using the array index based on language or which day does the user want to be the start of the week on the form.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DATE_PICKER.MONTHS[ ]
   </td>
   <td>Array containing the names of months.
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_DATE_PICKER.TIME
   </td>
   <td>Caption of the ‘Time’ part of date picker
   </td>
  </tr>
  <tr>
   <td>formDef.formMsgMeta.FORM_SUBMIT_SUCCESS
   </td>
   <td>Message displayed when form submission is successful
   </td>
  </tr>
  <tr>
   <td>formDef.formMsgMeta.FORM_SUBMIt_FAILURE
   </td>
   <td>Message displayed when form submission fails
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_CLOSE_MESSAGE
   </td>
   <td>Message displayed when form is closed
   </td>
  </tr>
  <tr>
   <td>formMsgMeta.FORM_CLOSE_BUTTON
   </td>
   <td>Caption of the Form Closing button
   </td>
  </tr>
</table>

The below use cases explain the steps to make various customizations using the pre-processor script. The digital form to gather data for opening a bank account is being used as an example. Japanese and German languages have been added to the AI Agent.

<img src="../../images/xop-8553-case-study-form.png" alt="formMetaData - Case study form" title="formMetaData - Case study form" style="border:1px solid gray; zoom:70%;">

#### Use Case 1: Language specific customizations

**Components:**

Suppose you want to customize the display names of the Name and Date of Birth fields based on the selected App language.

Since these are the first two fields on the form, their index values are 0 and 1, respectively.

Below is the code to customize the display names:

```
let formDef = koreUtil.getFormDefinition();
if(context.currentLanguage === 'en'){
   	formDef.components[0].metaData.displayName = 'Name';
formDef.components[1].metaData.displayName = 'Date of Birth';
}
else if(context.currentLanguage=== 'de'){
	formDef.components[0].metaData.displayName = 'Name';
formDef.components[1].metaData.displayName = 'Geburtsdatum';
}
else{
	formDef.components[0].metaData.displayName = '名前';
formDef.components[1].metaData.displayName = '生年月日';
}
```

Let’s assume that currently the App language is Japanese. This is how the form would look in the run-time:

<img src="../../images/xop-8553-form-fields-in-japanese.png" alt="formMetaData - Customized field labels" title="formMetaData - Customized field labels" style="border:1px solid gray; zoom:70%;">

**formMsgMeta:**

Suppose you want to customize the standard response for mandatory fields based on the App language. Below is the pre-processor script for that:

```
let formDef = koreUtil.getFormDefinition();
if(context.currentLanguage === 'en'){
    formDef.formMsgMeta.FIELD_MANDATORY = 'This is a mandatory field. Please provide a value';
}
else if(context.currentLanguage === 'de'){
    formDef.formMsgMeta.FIELD_MANDATORY = 'Dies ist ein Pflichtfeld. Bitte geben Sie einen Wert ein';
}
else{
    formDef.formMsgMets.FIELD_MANDATORY = 'これは必須フィールドです。値を入力してください';
}
```

This is how the standard message would look if the app language is Japanese:

<img src="../../images/xop-8553-field-level-standard-response-japanese.png" alt="formMetaData - Customized field level response messages" title="formMetaData - Customized field level response messages" style="border:1px solid gray; zoom:70%;">

#### Use case 2: Dynamically generating form text and data using Variables

**Component**

Suppose you want to ask the user’s name and pre-fill it in the form fields and labels. In this example, the user’s name is captured in an entity node, and that name is used to: 

* Pre-fill the **name** field
* Personalize the labels of the other fields

<img src="../../images/xop-8553-creating-context-var.png" alt="Component - Creating context variable" title="Component - Creating context variable" style="border:1px solid gray; zoom:70%;">

You can use the value captured in the entity node using the context variable in the pre-processor script to pre-populate the **Name** field using the below code:

```
formDef.components[0].metaData.defaultvalueInput = context.entities.entName;
```

This is how it would look at the time of run:

<img src="../../images/xop-8553-enter-name-open-account.png" alt="Component - Getting the value for context variable through entity node" title="Component - Getting the value for context variable through entity node" style="border:1px solid gray; zoom:70%;">

<img src="../../images/xop-8553-name-field-pre-populated-using-variable.png" alt="Component - Pre-populating field using context variable" title="Component - Pre-populating field using context variable" style="border:1px solid gray; zoom:70%;">

To personalize the labels of other fields like Date of Birth, Phone Number, Email etc. as well, you can add the below code to manipulate the **displayName**:

```
formDef.components[1].metaData.displayName = context.entities.entName + ''s Date of Birth';
formDef.components[2].metaData.displayName = context.entities.entName + ''s Phone Number';
formDef.components[3].metaData.displayName = context.entities.entName + ''s E-Mail';
formDef.components[4].metaData.displayName = context.entities.entName + ''s Address for Correspondence';
```

This is how it would look at run time:

<img src="../../images/xop-8553-field-labels-customized-using-variable.png" alt="Component - Field labels customized using context variable" title="Component - Field labels customized using context variable" style="border:1px solid gray; zoom:70%;">

**formMsgMeta:**

Suppose, in addition to personalizing the field labels and pre-filling the Name field, you want to personalize the form’s Response Message text for Mandatory fields by adding the user’s name so that it becomes **<&lt;User’s Name>>, this is a mandatory field. Please provide a value**. You can achieve this by adding the below code:

```
formDef.formMsgMeta.useFormMsgMeta = 'yes';
formDef.formMsgMeta.FIELD_MANDATORY = context.entities.entName + ', this is a mandatory field. Please provide a value.';
```

This is how it would look at run time:

<img src="../../images/xop-8553-response-message-customized-using-variable.png" alt="Component - Field level response customized using context variable" title="Component - Field level response customized using context variable" style="border:1px solid gray; zoom:70%;">

#### Use Case 3: Dynamically generating form data from external sources

You can use external sources of data, like data tables, data fetched from API etc to dynamically generate form data.

The syntax to do that is:

```
var resultSet = context.<<NameOfService>>.response.body.queryResult;
for (var i=0; i<resultSet.length; i++) {
	formDef.components[<<componentIndex>>].metaData.<<keyName>> = context.<<NameOFService>>.response.body.queryResult[i].<<AttributeName>>
}
```

Please note that in such scenarios you will need to add a service node prior to the digital form node, that will fetch the data to be used for dynamically generating the form data.

### Add Components

Once you configure the basic details for your form, the Platform takes you to the form builder, where you can add the components you require.

You can drag and drop the components available on the left pane to the canvas and configure their properties to build the form. For details of the available components & their properties [see here](configure-digital-forms.md#form-editor){:target="_blank"}.

<img src="../../images/drag-component.gif" alt="Drag and drop component" title="Drag and drop component" style="border: 1px solid gray; zoom:75%;">

You can search for a given component, or scroll through the list to find what you require.

<img src="../../images/search-component.gif" alt="search component" title="search component" style="border: 1px solid gray; zoom:75%;">

You can view the components list in a grid format by clicking the icon on the top right of the list.

If you hover in-between components within the form itself, you can find an in-form **Add Component** button which also allows you to search and add new components without having to navigate to the left-side list.

<img src="../../images/add-component-in-form.png" alt="add component" title="add component" style="border: 1px solid gray; zoom:75%;">

### Add Form Sections

If you are working with a longer and more complex form, you can split it into sections. Hover your cursor in-between form components to reveal an **Add Section** button. Clicking it will add a title and description to your form, which you can use to organize the other fields into sections.

<img src="../../images/add-section.png" alt="add form section" title="add form section" style="border: 1px solid gray; zoom:75%;">

### Form Actions

From the Forms Listing page, you can:

* Create a **New Form**, as seen above.
* **[Edit](#edit)** the Form.
* Use the **[Branding](#branding)** option to customize a form.
* **[Test](#test)** forms.
* **Delete** forms.

<img src="../../images/form-actions.png" alt="form actions" title="form actions" style="border: 1px solid gray; zoom:75%;">

#### Edit

You can use the **Edit** option from the form listing to edit the form. The following actions are performed on the Form in edit mode:

<img src="../../images/form-editor.png" alt="form editor" title="form editor" style="border: 1px solid gray; zoom:75%;">

* **_The Component Listing_** is used for selecting and adding components to the Form by simple drag and drop action.
* Use the **View Toggler** to switch between **Desktop View** and **Mobile View**.
* Use the Move Component _Handle Bar_ against each of the components to change its location by a simple drag and drop action;
* Use *Form Actions* to:

     * **Test** the form to see the preview of the Digital Form in the Platform.
     * **Delete** the Form. Please keep in mind that deleted forms cannot be restored.
     * Change the Form **Settings** such as name, display name, and description.

* Use the **Component Actions** to access the **Settings**, **Duplicate,** and **Delete** options for each of the form’s components.
* You can change the components’ properties from the **Component Settings** popup:
   
     * Use the **Component Docker** to dock/undock the settings pane to the screen.
     * Use the **Component Selector** to navigate through the components on the Form.

#### Branding

Use the **Branding** option to change the look and feel of the form to reflect your organization’s standards. 

<img src="../../images/digital-form-branding.png" alt="branding" title="branding" style="border: 1px solid gray; zoom:75%;">

An instant preview gives you an idea of how the form would look with the new colors and you have the option to **Save** or **Restore Default** scheme.

<img src="../../images/branding-flight-search.gif" alt="branding" title="branding" style="border: 1px solid gray; zoom:75%;">

#### Test

**Test** the form to see a preview of what it would look like to the end user. You can do this at any point while you work on the form.

<img src="../../images/test-preview.png" alt="test preview" title="test preview" style="border: 1px solid gray; zoom:75%;">

## Invoke a Form

A digital form can be invoked as follows:

1. **From a Task**: You may include a form as a component in a dialog task for defining the task. The dialog task offers _Form Experience_ and the usual _Conversation Experience_ for filling the form data. You can choose the preference based on the _channel of interaction_ or any other criteria based on your requirements.
2. **From a UI flow**: You can add a Digital Form to a pane and choose a dialog task to trigger when the form is submitted from the pane.

In the following sections, we discuss each of the above invocation processes.

### Invocation from Dialog Tasks

Digital Forms are used inside Dialog Tasks for capturing user inputs through a Form Node.

To invoke a form from a dialog task, follow the below steps:

1. Create/open the dialog from where you want to invoke the Digital Form.
2. Click the **+** icon next to the node where you want to add the Form.
3. Select the **Digital Form** option and then the form from the list. You can choose to add a Digital Form directly or use an existing Form Node.
4. You are prompted to select the **Form Experience**, it can be:

    <img src="../../images/configuration-form-node.png" alt="configure form node" title="configure form node" style="border: 1px solid gray; zoom:75%;">

    * **Only Form UI** – This creates a Form Node and associates it with the Digital Form selected. This is the default option.

        <img src="../../images/only-ui.png" alt="only form ui" title="only form ui" style="border: 1px solid gray; zoom:75%;">

    * **Both Form UI and Conversation Experience (DRAFT)** – This further prompts you to choose a channel. When a user is using one of the selected channels they are presented with a Form UI, the rest of the channel users get a conversation experience. 

        This option creates:
   
        * A **Bot Action Node** to determine the transitions to the Form Node and the Sub-dialog Node based on the channels selected.
        * A **Form Node** for the Digital Form, same as was generated for the Only Form UI above.
        * A **Sub-dialog Node** to capture the required entities (as defined in the Digital Form using components) for the conversational experience. 
        * A **Group** encompassing the following nodes. This grouping can be renamed and/or deleted. [Learn more](../dialogs/node-connections/grouping-nodes.md#add-a-node-group){:target="_blank"}.

        <img src="../../images/form-experience-nodes.png" alt="form experience node" title="form experience node" style="border: 1px solid gray; zoom:75%;">

5. You can set the **Properties** for each of the nodes added.

    * The [Form Node](../dialogs/node-types/working-with-the-form-node.md){:target="_blank"}. Following Component Properties are of special interest:
        * **Submit Message** – Message displayed to the end-user on successful submission of the form
        * **Web/Mobile SDK Form Behavior** – Using this option you can either have the form displayed *inline* the chat window or *open on a full page*. Also, you can either go ahead with the default submit prompt or configure the setting to display a custom and more specific message to be shown in chat. [Learn more](../dialogs/node-types/working-with-the-form-node.md#component-properties){:target="_blank"}.
    
        * **Bot Action Node,** in case of the conversation experience flow, can also be configured in the [Logic Node](../dialogs/node-types/working-with-the-logic-node.md){:target="_blank"} as follows:

        * **Manage Context Variables** is used to create and set values for the context variables. Remember to use the full path of the variable in the _key_ field ie. ```context.BotUserSession.<variable_name>```

            !!! Note
      
                We urge you not to make changes to the connection settings as this affects the AI Agent's performance.

    * **Sub-dialog Node** is configured as a normal [Dialog Node](../dialogs/node-types/working-with-the-dialog-node.md){:target="_blank"} as follows:

        * Use the **Entity Post-assignment** to capture the user input.
        * In case you modify the sub-dialog or the source form, you are presented with an option to **Regenerate Dialog**. This ensures that the changes are reflected in the task without having to rebuild the entire task. Be aware that the changes are reflected in all places this sub-dialog is used.

        <img src="../../images/subdialog-node-configuration.png" alt="sub dialog node" title="sub dialog node" style="border: 1px solid gray; zoom:75%;">

6. The user input can be accessed as follows:

   * Form component values are accessed from the Context Object using ```{{context.forms.form_name.component_name}}```
   * In the case of the sub-dialog, the variables used in the post-assignment settings as ```{{context.<variable_name>}}```

7. You can continue with the Dialog Task as per your business needs. For example, you can use the Form Component values as input to a **Service Node** to update the data or use the **Script Node** to process it further. If you are using the conversation experience too, remember to connect the auto-generated sub-dialog to the process flow.

### Invocation from Panels

Digital Forms are rendered in Digital Views by configuring Widgets & Panels. [Learn more](digital-views.md){:target="_blank"}.

To invoke a form using Widgets and Panels, follow the below steps:

1. **Create a widget** to invoke the Digital Form within **Digital Views** from **Automation AI > Digital Skills**.
2. Enter the name.
3. Select _Digital Forms_ as the **Source.**
4. **Add a Form** by selecting it from the drop-down list.
5. Select the **Dialog to Invoke on Submit** from the drop-down list.
6. Click **Save**.

      <img src="../../images/invoke-form-in-widget.png" alt="invoke form in widget" title="invoke form in widget" style="border: 1px solid gray; zoom:75%;">

7. **Add the Widget** to an existing panel or create a new panel. 
You can add a form directly to a panel, it creates a widget by default.
8. You can **Test** the panel.
9. Follow the steps provided [here](../../../app-settings/dev-tools/kore-ai-web-sdk.md){:target="_blank"} to publish and host the panels.

    !!! Note

        While a Digital Form is used to define multiple Widgets and also add to multiple panels, it will be associated with a single Dialog Task across all Widgets and Panels.

## The User Experience

When the end-user initiates the dialog and reaches the node connecting to the Form node, the following events take place. Depending upon the experience selected at design time and the channel of invocation, the flow is the following:

### Form Experience

A **link to the form** is presented to the user. Note that for a synchronous WebHook channel, instead of a link the complete form definition is sent [here](../../../channels/add-webhook-channel.md){:target="_blank"}.

<img src="../../images/UIForms-linkmessage.png" alt="link to form message" title="link to form message" style="border: 1px solid gray; zoom:75%;">

Clicking the link opens the form in either full-screen or inline mode, based on the selection. Please note the following details about the link:

* The link is active only for a certain duration of time, it becomes inactive after that.
* Even within the active period, it can be used only a limited number of times.

End-users can fill in the values for the components/fields.

<img src="../../images/test-preview-fill-form.png" alt="test preview" title="test preview" style="border: 1px solid gray; zoom:75%;">

Every form comes with a default **Submit** button. This validates the form entries, prompts for any missing values. 

<img src="../../images/validation-form.png" alt="form validation" title="form validation" style="border: 1px solid gray; zoom:75%;">

Once the form is validated and submitted, the values are available in the context variable and accessed using the following code: `context.forms.<form_name>.<component_name>`

Here we are capturing the user entry and displaying it using a message node.

<img src="../../images/user-bot-form-experience.png" alt="form experience" title="form experience" style="border: 1px solid gray; zoom:75%;">

### Conversation Experience

From the channel of operation, the end-user is prompted to enter values for every component in the form.

The values are available in the sub-dialog context and are captured using Entity Post Assignment as mentioned above.

Following is the user experience in Conversation mode:

<img src="../../images/conversation-experience.png" alt="user experience" title="user experience" style="border: 1px solid gray; zoom:75%;">

### Exceptions

When exceptions are encountered during the dialog execution with a Form Node, they are handled as follows:

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>EXCEPTION</strong>
   </td>
   <td><strong>EXCEPTION BEHAVIOR</strong>
   </td>
  </tr>
  <tr>
   <td>The user tries to continue the conversation without opening the form link.
   </td>
   <td>The AI Agent asks if the user wants to switch to a new task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>The user tries to continue the conversation (in the chat window) without submitting the form responses.
   </td>
   <td>The AI Agent asks if the user wants to switch to a new task.
   </td>
  </tr>
  <tr>
   <td>The user closes the form or browser without submitting responses.
   </td>
   <td>If the app is configured to cancel the ongoing task, the form displays a warning message that the task will be canceled. If the user accepts, the form will be closed, and a message is displayed saying that the previous task is canceled.
<br>
Otherwise, the ongoing task goes on, and based on the configuration, the user is taken to the next step of the task.
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td>The user tries to relaunch the form while the form is already open.
   </td>
   <td>The form link will not open the form and a message will be displayed saying that the form link is no longer valid.
   </td>
  </tr>
  <tr>
   <td>The user tries to relaunch the form after moving ahead in the conversation.
   </td>
   <td>The form link will not open the form and a message will be displayed saying that the form link is no longer valid.
   </td>
  </tr>
</table>

### Panel Flow

Users can access the form using **Panels & Widgets**. The experience is the same as for the Process Flow with Form experience.

Once the form is validated and submitted, the values are available in the context variable and accessed using the following code: context.forms.<form_name>.<component_name>

## Manage AI Agents with Digital Forms

### Publish

The publishing flow for an App with Digital Forms has the following special cases:

As with any AI Agent, the Digital Forms exist in the following states:

* **_In-development_** when a form is created.
* **_Awaiting approval_** when a form is submitted to Publish and the request is waiting for the admin to take action.
* **_Rejected_** when the Publish request is rejected by the admin.
* **_Published_** In the Platform, the status of a Digital Form remains In Development even after publishing.

    <img src="../../images/publish-status.png" alt="publish status" title="publish status" style="border: 1px solid gray; zoom:75%;">

    On publishing the form, you can see the form listed under **Publish Status → View Publishing Summary**, but the status on the Digital Forms main page remains as _In Development_.

    <img src="../../images/form-status.png" alt="form status" title="form status" style="border: 1px solid gray; zoom:75%;">

    The _In Development_ and _Published_ versions of the AI Agent can be viewed by toggling between the respective statuses in the top search-bar.

    <img src="../../images/va-status-search.png" alt="va status search" title="va status search" style="border: 1px solid gray; zoom:75%;">
 

    !!! Note
   
        If any edits are done to the Digital Form while it is In Development, the changes would be reflected in the Published version as soon as you publish the form.

* **_Suspended_** when a published form is suspended by the admin.

### Pre-publishing Validations

The following validations are performed before a Publish request is processed:

A Dialog Task that contains a Digital Form can be published only if:

* The corresponding Digital Form is already published, or
* The corresponding Digital Form is also selected for publishing.

A Digital Form that is configured to trigger a Dialog Task is published only if:

* The corresponding Dialog Task is already published, or
* The corresponding Dialog Task is selected for publishing.

While the dependencies are published together, chances are that all the dependencies might not be available at run-time, in such cases:

* If the Dialog Task is in a published state, but the Digital Form is not in a published state this triggers:
* The Task Failure Event and the corresponding behavior is invoked or
* A relevant Standard Response is displayed and
* Logged as Failed Task in Analytics.
   
    * Digital Form is in a published state, but the Dialog Task is not available then on Form submission, the end-user is presented with the Form’s Error Message.

### Import

Digital Forms are included in the full and incremental import of the AI Agent.

For Full Import:

* As with all other AI Agent components, the full import replaces the entire Digital Forms and form details.

For Incremental Import:

* You can choose to include/exclude the Digital Forms in the import.
* This import fully replaces the Digital Forms that are common to the import file and the AI Agent.
* Additional forms in the file are imported into the AI Agent.
* Additional forms in the AI Agent are retained.
* Post import, any invalid Digital Form integration details are disassociated with the corresponding forms.

### Export

The App Export option is available for Digital Forms with a status of *In Development* or *Published*.

* Digital Forms can be selected/deselected from the **App Export** page under the **Bot Tasks** category.
* Choose the option to _Include dependent dialogs_ to export Dialog Tasks that are integrated with the selected Digital Forms to define widgets. 
**_Note that this does not include the Sub-dialog Tasks generated using Digital Forms._**
* Complete information for each of the selected forms are available in the export file and this includes:
   
    * Fields
    * Field properties
    * Form integrations

## Form Component Details

### Components List

Following is a list of the available components.

**BASIC**

* **Text Field** – used for single-line input.

    <img src="../../images/text-field-input.png" alt="text field" title="text field" style="border: 1px solid gray; zoom:75%;">

* **Text Area** – used for multi-line entry.

    <img src="../../images/text-area.png" alt="text area" title="text area" style="border: 1px solid gray; zoom:75%;">

* **Number** – used for numerical entries.

    <img src="../../images/number-field.png" alt="number field" title="number field" style="border: 1px solid gray; zoom:75%;">

* **Radio Button** – used as a selection option from a given list.

    <img src="../../images/radio-button.png" alt="radio button" title="radio button" style="border: 1px solid gray; zoom:75%;">

* **Dropdown** – Used as a selection option from a given list; can be multi-select.

    <img src="../../images/dropdown-list.png" alt="dropdown list" title="dropdown list" style="border: 1px solid gray; zoom:75%;">

* **Checkbox** – Used for multi-select option from a given list.

    <img src="../../images/checkbox.png" alt="checkbox" title="checkbox" style="border: 1px solid gray; zoom:75%;">

* **Date** – Used for date entries, gives a date picker for the user to choose the date.

    <img src="../../images/date-calendar.png" alt="date" title="date" style="border: 1px solid gray; zoom:75%;">

    **Note** : The Date picker displays the month and week names in Japanese characters if the app language is Japanese. This support will be extended to more languages in the future.

    <img src="../../images/digital-forms-date-picker-japanese.png" alt="date picker - Japanese" title="date picker - Japanese" style="border: 1px solid gray; zoom:75%;">

* **Date & Time** – Used for date & time entries. The system displays a date and time picker for the user to choose the date and time.
Use the **Date component** and set the _Time option_ to _yes_; choose from _12_ or _24-hour_ format.

    <img src="../../images/date-time.png" alt="date and time" title="date and time" style="border: 1px solid gray; zoom:75%;">

* **Phone Number** – Used for phone number entries, allows the user to choose the country code.

    <img src="../../images/phone-number.png" alt="phone number" title="phone number" style="border: 1px solid gray; zoom:75%;">

* **Email** – Used for email address entries, validates for _xxx@uuu.com_ format.

    <img src="../../images/email-field.png" alt="email" title="email" style="border: 1px solid gray; zoom:75%;">

* **Toggle** – Used for switching between two values, ideal for yes/no type of inputs.

    <img src="../../images/toggle-field.png" alt="toggle" title="toggle" style="border: 1px solid gray; zoom:75%;">

* **Address** – Used for address entries.

    <img src="../../images/address-field.png" alt="address" title="address" style="border: 1px solid gray; zoom:75%;">

* **URL** – Used for web URL entries, validates for _xxx.com_ format.

    <img src="../../images/url-field.png" alt="url" title="url" style="border: 1px solid gray; zoom:75%;">

* **Range Slider** – Value selection between specified min and max values; can be represented as a percentage.

    <img src="../../images/range-slider.png" alt="range slider" title="range slider" style="border: 1px solid gray; zoom:75%;">

* **Password** - Used to display passwords in their masked form ```*****```

**ADVANCED**

* **Button** – Used as a clickable component to submit reset, or open an external URL the form. Choose from _Primary_, _Secondary_, _Tertiary_, _Ghost,_ or _Danger_.

    <img src="../../images/button-field.png" alt="button" title="button" style="border: 1px solid gray; zoom:75%;">

* **Label** – Used to display a static text box, no action required from the user.

    <img src="../../images/label-field.png" alt="label" title="label" style="border: 1px solid gray; zoom:75%;">

* **Protip** – Used to mark important information for the end-user, no user action required.

    <img src="../../images/protip-field.png" alt="protip" title="protip" style="border: 1px solid gray; zoom:75%;">

* **Note** - Used to mark information for the end-user, no user action required.

    <img src="../../images/note-field.png" alt="note" title="note" style="border: 1px solid gray; zoom:75%;">

### Component Properties

The following are the properties that can be set for each of the components.

!!! Note

    Not all the properties are valid for all the components, refer to the [Property Matrix](#component-properties) for the mapping.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>PROPERTY</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Display Name</strong>
   </td>
   <td>This is the text which appears against the component for the end-users.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Name</strong>
   </td>
   <td>This is the reference name that can be used for referencing the component in the other components of the form and form level operations
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>Help information about a field to be displayed to the end-user.
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Placeholder Text</strong>
   </td>
   <td>A prompt message for the end-user
   </td>
  </tr>
  <tr>
   <td><strong>Button Style</strong>
   </td>
   <td>For button component, can be:
<ul>

<li>Primary,

<li>Secondary,

<li>Tertiary,

<li>Ghost, or

<li>Danger
</li>
</ul>
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Button Action</strong>
   </td>
   <td>For button component, can be:
<ul>

<li>Submit,

<li>Reset, or

<li>Go to URL – in this case, you need to enter a URL in the corresponding field.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Read Only</strong>
   </td>
   <td>To mark the component value is not changeable
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Required</strong>
   </td>
   <td>To define whether input for this field is necessary or optional for the end-user entry.
   </td>
  </tr>
  <tr>
   <td><strong>Tool-tip</strong>
   </td>
   <td>Additional information about a field to be shown on demand to the end-user. Has three entries:
<ul>

<li>Tip Text – text message for the additional information about the component

<li>Tool-tip Type – whether the tip appears on hover or click

<li>Tool-tip Position – where the tooltip should be displayed
</li>
</ul>
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Date Format</strong>
   </td>
   <td>Time format to be presented to the end-user can be
<ul>

<li>mm/dd/yyyy – default

<li>dd/mm/yyyy

<li>yyyy/mm/dd

<li>yyyy/dd/mm
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Time</strong>
   </td>
   <td>To enable the end-user to enter Time along with Date
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Time Format</strong>
<br>
Used in conjunction with the above Time property
   </td>
   <td>Time format to be presented to the end-user can be 12 hrs or 24 hrs
   </td>
  </tr>
  <tr>
   <td><strong>Default Country Code</strong>
   </td>
   <td>Choose the desired default country code that should be shown to the end-user. Default is United States +1
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Secure Field Data</strong>
   </td>
   <td>To Secure the user information collected by this field.
   </td>
  </tr>
  <tr>
   <td><strong>Masking Type</strong>
<br>
Available only when Secure Field Data is enabled
   </td>
   <td>Choose how to display the redacted data in the App Context, Debug Logs, Service Calls, Agent Transfer and the Bot Kit. Following actions are available:
<ul>

<li>Redaction – The platform will replace the user input with a unique random system-generated alphanumeric value. This is the default setting when the Secure Field Data is enabled

<li>Replacement – The platform will replace the user input with a static value or reference to a context object as entered in the replacement value field.

<li>Mask with Character – The platform will replace the first few and last few characters of the user input with symbols. You can specify the number and position of characters to mask, symbol for masking (+ or #).
</li>
</ul>
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Mask Input</strong>
<br>
Available only when Secure Field Data is enabled
   </td>
   <td>Enable this option to mask the end-user’s input for this field in the chat window.
   </td>
  </tr>
  <tr>
   <td><strong>Checkbox Layout</strong>
   </td>
   <td>Choose the number of columns to present the checkbox values in the grid view. You can select a minimum of 1 and a maximum of 4 columns, with 4 columns being the default selection.
   </td>
  </tr>
   <tr bgcolor="#ECECEC">
   <td colspan="2" ><strong>Data Settings</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Default Value</strong>
   </td>
   <td>In case the component needs to be pre-populated with a default value
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Values</strong>
   </td>
   <td>For Radio Button, Dropdown and Checkbox, add values to be given for selection by the end-user. You can mark one value as a default value
   </td>
  </tr>
  <tr>
   <td><strong>Multi-Select</strong>
   </td>
   <td>For Dropdown, if the user can select multiple values.
   </td>
  </tr>
   <tr bgcolor="#ECECEC">
   <td colspan="2" ><strong>Validation Settings</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Default Error Message</strong>
   </td>
   <td>To be displayed in case user entry fails validation
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Validate</strong>
   </td>
   <td>To define when the validations defined for a field are to be checked. Options are:
<ul>

<li>On blur – Validations would be done when the end-user moves away from the component

<li>On change – Validations would be done when the component value is changed
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Validation Rule</strong>
   </td>
   <td>Rules in the following format can be added
<ul>

<li><b>Operator</b> – Choose the required option based on the validation condition you want to set for the input field. Each component type supports specific operators that enable the validation.

<div class="admonition note">
<p class="admonition-title">Note</p>
<ul><li>The Platform now supports <b>Regular Expression (Regex)</b> for more complex validations. It provides a powerful and flexible pattern-matching capability, allowing for precise validation of input formats.</li>
<li>Regex checks the input field against the specified pattern, which includes the format and conditions that the input must meet. For example, if the age limit should be 18 and above for vaccination, the regular expression is <code>/^(1[89]|[2-9]\d)$/gm</code>.</li><ul>
</div></li>
<li><b>Comparison Type</b> – Set to either value or field/component or value type.</li>
<li><b>Comparison With</b> – The value or component name or type, as per the above selection.</li></ul>
<p>
Multiple rules added to an existing rule would be taken as an AND condition, whereas a new rule would be an OR condition. You can add multiple Simple rules or a single Advanced rule by toggling between Simple and Advanced Modes.</p>
</li>
</ul>
   </td>
  </tr>
   <tr bgcolor="#FAFAFA">
   <td><strong>Custom Error Message</strong>
   </td>
   <td>This would be displayed when a particular validation fails
   </td>
  </tr>
   <tr bgcolor="#ECECEC">
   <td colspan="2" ><strong>Visibility Settings</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Is Visible</strong>
   </td>
   <td>Whether the given component is visible to the end-user or not
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Visibility Rules</strong>
   </td>
   <td>You can define conditions when a particular component would be visible or hidden
<ul>

<li>Hide or Visible

<li>Add Visibility Rules by defining the following: 
<ul>
 
<li>Component/Field which determines this component behavior- choose from the list
 
<li>Operator – choose from the list
 
<li>Comparison Type – set to either value or field/component or value type
 
<li>Comparison  With – the value or component name or type, as per the above selection

<br>
Multiple rules added to an existing rule would be taken as an AND condition, whereas a new rule would be an OR condition. You can add multiple Simple rules or a single Advanced rule by toggling between Simple and Advanced Modes
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
   <tr bgcolor="#ECECEC">
   <td colspan="2" ><strong>Auto Populate</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Auto Population</strong>
   </td>
   <td>Whether the given component should be auto-populated or not
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Auto population rules</strong>
   </td>
   <td>
<ul>
<li>Field or Value from which to auto-populate

<li>Field name or the actual value based on the above selection
</li>
</ul>
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="2" ><strong>Custom Validation</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Custom Validation</strong>
   </td>
   <td><p>Perform complex field and form level validations on dynamic variables by defining a JavaScript code for the Post Processor script. When the <b>Submit</b> button is clicked, the script runs to perform custom validations on multiple form fields before the form submission.</p>
   
   <p>For example, create a script that ensures the phone number field accepts only 10-digit numbers and rejects any alphabets or special characters.</p>   
   <p><b>Failure Scenario</b></p>
   <ul><li>If the defined Post-Processor script fails, a task failure event is triggered, and the reason for the failure is logged under <b>Task Execution Logs</b> > <b>Debug Log</b> for the <b>Form</b> node.</li>
   <li><p>When a field-level validation error occurs, the specific error field is highlighted, and the error message defined in the script is displayed below the field and above the <b>Submit</b> button.</p></li></ul>   
   </td>
  </tr>
</table>

### Component Mapping Properties

#### Basic

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>PROPERTY</strong>
   </td>
   <td><strong>TEXT FIELD</strong>
   </td>
   <td><strong>TEXT AREA</strong>
   </td>
   <td><strong>NUMBER</strong>
   </td>
   <td><strong>RADIO BUTTON</strong>
   </td>
   <td><strong>CHECK</strong>
<br>
<strong>BOX</strong>
   </td>
   <td><strong>DROP</strong>
<br>
<strong>DOWN</strong>
   </td>
   <td><strong>DATE</strong>
   </td>
   <td><strong>PHONE NUMBER</strong>
   </td>
   <td><strong>EMAIL</strong>
   </td>
   <td><strong>ADDRESS</strong>
   </td>
   <td><strong>URL</strong>
   </td>
   <td><strong>TOGGLE</strong>
   </td>
   <td><strong>RANGE SLIDER</strong>
   </td>
  </tr>
   <tr bgcolor="#ECECEC">
   <td colspan="12" ><strong>General Settings</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Display Name</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Name</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Placeholder Text</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Read Only</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Required</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
   <tr bgcolor="#ECECEC">
   <td colspan="12" ><strong>Tool-tip</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Tip Text</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Tool-tip Type</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Tool-tip Position</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Date Format</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Time &</strong>
<br>
<strong>Time Format</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Default Country Code</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Checkbox Layout</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Secure Data</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Masking Type</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Mask Input</strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
   <tr bgcolor="#ECECEC">
   <td colspan="12" ><strong>Data Settings</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Data Source</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Default Value</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Multiselect</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="12" ><strong>Auto Fill</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Auto Populate</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Auto Populate Settings</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="12" ><strong>Visibility Settings</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Is Visible</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Visibility Settings</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="12" ><strong>Validations</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Default Error Message</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Validate</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Equals To</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>TBD
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Not equal to</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Contains</strong></td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Does not contain</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Regex</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Max Length</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Min Length</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Part of</strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Not part of</strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Greater than</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Less than</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Greater than or equal to</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Less than or equal to</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
</table>

#### Advanced

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>PROPERTY</strong>
   </td>
   <td><strong>BUTTON</strong>
   </td>
   <td><strong>RICHTEXT</strong>
   </td>
   <td><strong>PRO-TIP</strong></td>
   </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="5" ><strong>General Settings</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Display Name</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Name</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Placeholder Text</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Tool-tip</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Error Message</strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Required</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Validate</strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Read Only</strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Action Type</strong> (Submit, Reset, Clear)
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="5" ><strong>Data Settings</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Data Source</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Default Value</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="5" ><strong>Auto Fill</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Auto-Populate</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Auto-Populate Settings</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="5" ><strong>Visibility Settings</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Is Visible</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Visibility Settings</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
</table>

#### Dialog Node

The following mapping gives the type of entities included in the sub-dialog when it is auto-generated from a Digital Form.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>FORM COMPONENT PROPERTY</strong>
   </td>
   <td><strong>DIALOG TASK NODE PROPERTY</strong>
   </td>
  </tr>
  <tr>
   <td>Name
   </td>
   <td>Name
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Display Name
   </td>
   <td>Display Name
   </td>
  </tr>
  <tr>
   <td>Placeholder Text
   </td>
   <td>Entity Prompt
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Error Message
   </td>
   <td>Error Prompt
   </td>
  </tr>
</table>


<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>DIGITAL FORM COMPONENT TYPE</strong>
   </td>
   <td><strong>DIALOG TASK</strong>
<br>
<strong>NODE TYPE</strong>
   </td>
  </tr>
  <tr>
   <td>Text Field
   </td>
   <td>String
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Text Area
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>Number
   </td>
   <td>Number
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Radio Button
   </td>
   <td>LoI (Enum) with each of the options in the radio button group copied as list items
   </td>
  </tr>
  <tr>
   <td>Dropdown
   </td>
   <td>LoI (Enum) with each of the values in the dropdown list copied as list items.
<br>
Multi-select would be enabled based on the ‘is multi-select’ option of the Form Component
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Checkbox
   </td>
   <td>LoI (Enum) with each of the options in the checkbox group copied as list items
<br>
Multi-select is enabled by default
   </td>
  </tr>
  <tr>
   <td>Date
   </td>
   <td>Date
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Phone Number
   </td>
   <td>Phone Number
   </td>
  </tr>
  <tr>
   <td>Email
   </td>
   <td>Email
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Address
   </td>
   <td>Address
   </td>
  </tr>
  <tr>
   <td>URL
   </td>
   <td>URL
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Toggle
   </td>
   <td>LoI (Enum) with each of the options in the toggle copied as list items
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="2" ><strong>Advanced</strong>
   </td>
  </tr>
  <tr>
   <td>Button
   </td>
   <td>Not Applicable
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Label
   </td>
   <td>Not Applicable
   </td>
  </tr>
  <tr>
   <td>Protip
   </td>
   <td>Not Applicable
   </td>
  </tr>
  <<tr bgcolor="#FAFAFA">
   <td>Note
   </td>
   <td>Not Applicable
   </td>
  </tr>
</table>

#### Context Object

The following mapping gives the context object to capture the component value along with a sample context object.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>COMPONENT TYPE</strong>
   </td>
   <td><strong>CONTEXT OBJECT</strong>
   </td>
  </tr>
  <tr>
   <td>Text Field
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Text Area
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
   </td>
  </tr>
  <tr>
   <td>Number
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Radio Button
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
   </td>
  </tr>
  <tr>
   <td>Dropdown
   </td>
   <td><code>context.forms.<form_name>.<component_name>[<index>]</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Checkbox
   </td>
   <td><code>context.forms.<form_name>.<component_name>[<index>]</code>
   </td>
  </tr>
  <tr>
   <td>Date
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
<br>
In mm/dd/yyyy format
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Date & Time
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
<br>
In mm/dd/yyyy hh:mm AM/PM format
   </td>
  </tr>
  <tr>
   <td>Phone Number
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
<br>
prefixed with the area code of the country selected by the user
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Email
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
   </td>
  </tr>
  <tr>
   <td>Address
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>URL
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
   </td>
  </tr>
  <tr>
   <td>Toggle
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
<br>
Yes/No values
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Range Slider
   </td>
   <td><code>context.forms.<form_name>.<component_name></code>
   </td>
  </tr>
</table>

**SAMPLE CONTEXT OBJECT**

```js
"forms": {
    "basicpropertieslist": {
      "TextField": "text",
      "Textarea": "text area",
      "Number": 123,
      "Radio": "Male",
      "Dropbox": [
        "UnderGrad",
        "Other"
      ],
      "Checkbox": [
        "Education",
        "Technology"
      ],
      "Date": "07/08/2020",
      "Date&Time": "07/08/2020 19:00 PM",
      "PhoneNumber": "+919999999999",
      "Email": "john.doe@example.com",
      "toggle": "Yes",
      "Address": "Address",
      "Url": "test.com",
      "rangeSlider": 26.1
    }
  }
```

### Prefill Form

You can specify data that can be used to pre-populate the form fields. Platform will check for the availability of any form prefill information before launching the form. If any information is available, then the corresponding fields in the form are pre-populated before presenting the form to the user. The values can be static or from a context object.

You can specify pre-fill form data using the following context object: `context.prefillForms`.

You can use the following in Javascript to populate the above-mentioned context object:

```js
context.prefillForms = {
  <form_name>: {
     fields: {
        <form_field1>: "<value1>",
        <form_field2>: <context.session.....>,
        <form_array_field2>: [
             <array_value1&gt,
             <array_value2&gt,
        ],
     },
  },
};
```

## Limitations

* Digital Forms will not work as expected on the following channels:
   
    * Amazon Alexa
    * Cisco Jabber
    * Google Assistant
    * IVR Voice
    * Twilio Voice

* You are advised to choose the Conversation Experience for these channels.
* Digital Forms created in the parent app are not inherited into **Smart Apps**.
* The Digital Forms functionality is not applicable for **Dynamic Routing**.