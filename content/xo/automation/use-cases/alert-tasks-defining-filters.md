# Alert Task – Defining Filters

You can define filters for end-users to limit the results of an alert task to the results an end-user needs. For example, you can define a filter for the name, or account, or business. 

When the alert is set up by the end-user, and the filter applied, only alert messages that meet the filter specifications are displayed to the end-user. [Alert task](../use-cases/alert-tasks.md).

## Defining Filters

To get started with defining filters for a task, on the **Settings** tab, click the **Expand** icon in the **Filters** section, and then click **Add** as shown in the following illustration.

<img src="../images/defining-filters.png" alt="defining filters" title="defining filters" style="border: 1px solid gray; zoom:75%;">

When you click **Add**, the **Alert Task Filter** dialog is displayed as shown in the following illustration.

<img src="../images/alert-task-filter.png" alt="alert task filter" title="alert task filter" style="border: 1px solid gray; zoom:75%;">

Define the fields described in the following table to create a new filter for a task.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>PARAMETER NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Name
   </td>
   <td>Specify the name of the <strong>Filter</strong> displayed to the end-user in the <strong>Filters</strong> section when configuring the task, for example, Notify me only when the below user tweets.
   </td>
  </tr>
  <tr>
   <td>Field Name
   </td>
   <td>Enter the name of the field to filter the task on, or click <strong>Select Field</strong> to display a drop-down list of field names parsed from the <strong>Response Sample</strong> defined on the task <strong>API Request</strong> tab.
   </td>
  </tr>
  <tr>
   <td>Field Type
   </td>
   <td>Select the type of input field to collect the user input.
<ul>

<li><strong>Textbox</strong> – Displays a text box to the user. In the <strong>Placeholder</strong> field, enter a description for the field. 

<li><strong>Textarea</strong> – Displays a text area box to the user, typically allowing them to enter several sentences. In the <strong>Placeholder</strong> field, enter a description for the text area.

<li><strong>Static Dropdown</strong> – Displays a drop-down list of choices to the user. Click <strong>Add Option</strong> to begin adding the list of items, with the following parameters: 
<ul>
 
<li><strong>Option Name </strong>– The name of the option displayed to the user.
 
<li><strong>Option Value</strong> – The value associated with the option.
 
<li>Click <strong>Save</strong>. To add additional items, click <strong>Add Option</strong> again. Edit or remove options in the <strong>Actions</strong> column for options.
</li> 
</ul>

<li><strong>Dynamic Dropdown</strong> – Displays a drop-down list dynamically populated at runtime based on the response from a URL for your App, for example, a list of projects for a <em>JIRA</em> task notification. Define the following properties for a dynamically populated drop-down. 
<ul>
 
<li><strong>Endpoint URL</strong> – The AI Agent’s endpoint URL, for example, https://app.asana.com/api/1.0/workspaces.
 
<li><strong>Endpoint Content Type</strong> – One of these content types expected from the specified endpoint URL: JSON, RSS, XML, Encoded JSON, CSV, or Text.
 
<li><strong>Endpoint Method</strong> – Select one of the following:  
<ul>
  
<li><strong>GET</strong> – Specifies an HTTP Request GET method for the task field.
  
<li><strong>POST</strong> – Specifies an HTTP Request POST method for the task field.
</li>  
</ul>
 
<li><strong>Response Path</strong> – The path in the response that contains the desired drop-down list values, for example, data.
 
<li><strong>Label Key</strong> – The key for the label of the drop-down option, for example, name.
 
<li><strong>Optional Value Key</strong> – The key for the value of the drop-down option, for example, id.
</li> 
</ul>

<li><strong>Checkbox</strong> – Displays a list of choices that the user can select from – one or more. Click <strong>Add Option</strong> to begin adding the list of items to display, with the following parameters: 
<ul>
 
<li><strong>Option Name </strong>– The name of the option displayed to the end-user.
 
<li><strong>Option Value</strong> – The corresponding value for the option name.
</li> 
</ul>

<li><strong>Type Ahead</strong> – Displays a dynamically populated drop-down list of choices to the user at runtime when the user enters three or more characters that match the search results based on the response from the URL defined for the task. For example, a list of projects for a <em>JIRA</em> task notification message. Define the following properties for a dynamically populated drop-down. 
<ul>
 
<li><strong>Endpoint URL</strong> – The AI Agent’s endpoint URL, for example, https://app.asana.com/api/1.0/workspaces.
 
<li><strong>Endpoint Content Type</strong> – The content type expected from the specified endpoint URL. One of: JSON, RSS, XML, URL Encoded JSON, CCV, Text, Twitter Encoded JSON, Multipart/Form-data, or Multipart/Related.
 
<li><strong>Endpoint Method</strong> – Select one of the following:  
<ul>
  
<li><strong>GET</strong> – Specifies an HTTP Request GET method for the task field.
  
<li><strong>POST</strong> – Specifies an HTTP Request POST method for the task field.
</li>  
</ul>
 
<li><strong>Response Path</strong> – The path in the response that contains the desired drop-down list values, for example, data.
 
<li><strong>Option Label Key</strong> – The key for the label of the drop-down option, for example, name.
 
<li><strong>Option Value Key</strong> – The key for the value of the drop-down option, for example, id.
</li> 
</ul>

<li><strong>Dynamic Checkbox</strong> – Displays a list of choices that the end-user can select one or more from, which are dynamically populated at runtime based on the response from a URL for your AI Agent , for example, a list of projects for a <em>JIRA</em> task notification. Define the following properties for a dynamically populated list of choices as checkboxes. 
<ul>
 
<li><strong>Endpoint URL</strong> – The AI Agent’s endpoint URL, for example, https://app.asana.com/api/1.0/workspaces.
 
<li><strong>Endpoint Content Type</strong> – The content type expected from the specified endpoint URL. One of: JSON, RSS, XML, Encoded JSON, CSV, or Text.
 
<li><strong>Endpoint Method</strong> – Select one of the following:  
<ul>
  
<li><strong>GET</strong> – Specifies an HTTP Request GET method for the task field.
  
<li><strong>POST</strong> – Specifies an HTTP Request POST method for the task field.
</li>  
</ul>
 
<li><strong>Response Path</strong> – The path in the response that contains the desired drop-down list values, for example, data.
 
<li><strong>Label Key</strong> – The key for the label of the drop-down option, for example, name.
 
<li><strong>Box Value Key</strong> – The key for the value of the drop-down option, for example, id.
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
  <tr>
   <td>Data Type
   </td>
   <td>The data type for the content received from the endpoint URL. One of:
<ul>

<li><strong>Text</strong> – The user input for this filter is expected as text.

<li><strong>Number</strong> – The user input for this filter is expected as an integer.

<li><strong>Date</strong> – The user input for this filter is a date.

<li><strong>List</strong> – The user input for this filter is a comma-separated list.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Operators
   </td>
   <td>Select one or more filter operations that the end-user can select to apply to the filter. Depending on the <strong>Data Type</strong> selected, one or more of the following options are available to select to display to the end-user in the filter.
<ul>

<li><strong>Contains</strong> – The response object filtered text contains all of the specified values.

<li><strong>Doesn’t Contain</strong> – The response object filtered text does not contain all of the specified values.

<li><strong>Exact Match</strong> – The response object filtered text only contains the specified values.

<li><strong>Not an exact match</strong> – The response filtered text object does not contain the specified value.

<li><strong>Included</strong> – The response object filtered text contains any of the specified values.

<li><strong>Not Included</strong> – The response object filtered text does not contain any of the specified values.

<li><strong>Starts with</strong> – The response object filtered text begins with the specified value.

<li><strong>Doesn’t start with</strong> – The response object filtered text does not begin with the specified value.

<li><strong>Ends with</strong> – The response object filtered text ends with the specified value.

<li><strong>Doesn’t end with</strong> – The response object filtered text does not end with the specified value.

<li><strong>Equal to</strong> – The response object filtered numbers or dates are equal to the specified value.

<li><strong>Greater than</strong> – The response object filtered numbers or dates are greater than the specified value.

<li><strong>Less than</strong> – The response object filtered numbers or dates are less than the specified value.

<li><strong>Exists</strong> – The response object filtered list contains the specified value.

<li><strong>Doesn’t exist</strong> – The response object filter list does not contain the specified value.
</li>
</ul>
   </td>
  </tr>
</table>

For multiple filters, you can order the filters in an order the end-user expects, shown in numerical order in the following illustration.
<img src="../images/multiple-filters.png" alt="multiple filters" title="add password field multiple filters" style="border: 1px solid gray; zoom:75%;">

* Use the **Move Up** icon and the **Move Down** icon in the **Actions** column in the **Filters** section to reorder the filters if needed.
* Click the **Edit** icon to modify the settings for an existing filter.
* Click the **Delete** icon to delete an existing filter.

<div class="admonition warning">
<p class="admonition-title">Warning</p>
<p>This operation is permanent and cannot be undone.</p></div>
