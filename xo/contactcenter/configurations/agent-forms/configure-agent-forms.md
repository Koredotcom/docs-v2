# Agent Forms

In the Contact Center, Agent Forms provide a range of input fields that allow capturing required information from customers.

To reach the _Agent Forms_ section, go to **Contact Center AI > CONFIGURATIONS > Agent Forms**. Here, you can view and search existing forms and create new ones.  
<img src="../images/agent-forms-page.png" alt="
Agent Forms Page" title="Agent Forms Page" style="border: 1px solid gray; zoom:80%;"/>

## The Agent Forms Live Board

You can access the following features and information within the Agent Forms section:

1. **Search**: Use this field to search forms using name-level keywords.
2. **Name**: Lists the name of a form.
3. **Actions**: Lets you Edit, Publish, or Delete a form.
4. **Status**: Lists the form status as follows:
    1. **In-development** displays when a form is created and is still being worked on. This status is also shown for previously published forms modified after publishing.
    2. **Published** displays when a form has been approved and published.
5. **Last Updated**: Displays the date and time when the form was last updated.  
<img src="../images/agent-form-columns.png" alt="
Agent Forms Columns" title="Agent Forms Columns" style="border: 1px solid gray; zoom:80%;"/>

### Create an Agent Form

Steps to create an Agent form:

1. Click **+ New Form**.  
<img src="../images/add-new-form.png" alt="
Add New Form Button" title="Add New Form Button" style="border: 1px solid gray; zoom:80%;"/>

2. The **New Form** window opens, and you can configure the following:
    1. Enter the **Name** of the form, the **Display Name** of the form, and the **Description**.
    2. Enable **Agent Form Data** to redact form information from the App Context, Debug Logs, Service Calls, Agent Transfer, and the BotKit. Once enabled, the XO Platform will replace the user input with a unique, random, system-generated alphanumeric value in all the modules.
    3. Select an **Assignment**:
        1. **Assign to Queues** lets you make forms available for conversations in all or selected queues.
        2. **Assign to Agent Groups** allows you to make forms available for agents in specific agent groups.
    4. Click **Save & Proceed**.  
    <img src="../images/new-form.png" alt="Save New Form" title="Save New Form" style="border: 1px solid gray; zoom:80%;"/>

### Build an Agent Form

You can build Agent Forms by adding individual components, such as text fields, checkboxes, radio buttons, date fields, etc. Please see the form-building process explained in detail in [Digital Forms](../../../automation/use-cases/digital-skills/configure-digital-forms.md) within the XO Platform documentation.

### Edit an Agent Form

#### Edit Form Fields

If you want to update the fields that an agent form contains, follow these steps:

1. Find the form in the **Contact Center AI > CONFIGURATIONS > Agent Forms** section.
2. **Click on the form record**. This action will open the form builder, where you can make changes.

#### Edit Form Settings

There are two ways to edit form settings (Name, Description, Form Data Security or Assignments):

1. **From the Agent Forms Live Board**:
    1. Find the form in the **Contact Center AI > CONFIGURATIONS > Agent Forms** section.
    2. Click the **Edit** icon under _Actions_.  
    <img src="../images/edit-button.png" alt="Edit Form Button" title="Edit Form Button" style="border: 1px solid gray; zoom:80%;"/>
2. **From the Form Builder**:
    3. From the top toolbar of the form builder, click the **More Options** button.
    4. Select **Form Setting**.  
    <img src="../images/form-setting-button.png" alt="Form Setting Button" title="Form Setting Button" style="border: 1px solid gray; zoom:80%;"/>

### Publish an Agent Form

Publishing a form means making it available for agents to select within the Agent Console and send to customers, as shown below. See [Agent Forms for Handling Sensitive Information](../../../console/interacting-with-customers.md#agent-forms-for-handling-sensitive-information) for detail.  
<img src="../images/agent-form-console.png" alt="Send Agent Form" title="Send Agent Form" style="border: 1px solid gray; zoom:80%;"/>

Steps to publish a form:

1. Find the form in the **Contact Center AI > CONFIGURATIONS > Agent Forms** section.
2. Click the **More Options** icon under _Actions_.
3. Select **Publish**.  
<img src="../images/publish-button.png" alt="Publish Button" title="Publish Button" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        If you edit the form after publishing it, you must re-publish it for the change to reflect.

### Delete an Agent Form

There are two ways to delete an Agent Form:

1. **From the Agent Forms Live Board**:
    1. Find the form in the **Contact Center AI > CONFIGURATIONS > Agent Forms** section.
    2. Click the **More Options** icon under _Actions_.
    3. Select **Delete**.  
    <img src="../images/delete-button.png" alt="Delete Button" title="Delete Button" style="border: 1px solid gray; zoom:80%;"/>

2. **From the Form Builder**:  
    4. From the top toolbar of the form builder, click the **More Options** button.  
    5. Select **Delete**.  
    <img src="../images/delete-button-form-builder.png" alt="Form Builder Delete Button" title="Form Builder Delete Button" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        You cannot restore deleted forms. Please proceed with caution.