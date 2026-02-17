# List Management

List Management section consist of essential contact details for the campaigns. There are two subsections:

1. **Contact Lists**: Contact lists contain vital information about individuals, enabling targeted and effective communication. It's a collection of names, and contact numbers necessary for running a campaign.
2. **DNC (Do Not Contact) Lists**: These are contacts who have opted for "Do Not Contact" (DNC) or have registered on the national DNC facility, indicating their preference not to receive unsolicited calls. The DNC Lists Contacts count comprises contacts from both uploaded CSV files and contacts added directly through the AI Agent or Human Agent.

You can view the lists by going to **Contact Center** > **Campaigns** > **List Management**.  
<img src="../images/contact-lists-main-page.png" alt="List Management Page" title="List Management Page" style="border: 1px solid gray; zoom:80%;">

## Contact Lists

To view the Contact Lists, select the **Contact Lists** tab.

The following details are displayed in Contact Lists:  
<img src="../images/contact-list-page-updated.png" alt="Contact Lists Table" title="Contact Lists Table" style="border: 1px solid gray; zoom:80%;">

* **Contact Lists** - Name of the list. For example, Contact List 1.
* **Actions** - Edit and Delete lists.
* **Status** - Shows the status of the list. For example, Validating, Validated, and Invalid.
* **Contacts** - Shows the total count of contacts in the list. For example, 288.
* **Campaigns** - Name of the Campaign. For example, Post Sales Survey.
* **Last Updated** - The date when the contact list was last updated. The system sorts items by default based on the last updated date.

### Create a Contact List

There are two ways to upload contacts:

* Local Drive
* API Integration

#### Local Drive

Steps to add a contact list from the local drive:

1. Select **+ New Contact List**.

2. On the **New Contact List** pop-up window, enter the **Name**, **Description** and select **Local Drive** from the Source dropdown.

3. Select a CSV file from the local drive and upload the CSV file.

    !!! Note

        Phone numbers in the CSV must be in E.164 format with Country Code, Area Code, Subscriber Number and within double inverted quotes.

4. Select the **Mapping Fields** and select **Save**.

    !!! Note

        Phone Number is mandatory for voice campaigns.

#### Dynamic Retrieval and Reflection of CSV Column Values

Campaign managers can read, fetch, and display column and corresponding field values from a CSV file whenever required. This can be done within the message node in the start flow or by sending the necessary values to the Agent Console during an agent transfer ensuring these values are reflected in the voice campaign call.

* Mapped fields in the uploaded CSV file are readable and can be used within the start flow. These fields can be configured in the message node of the experience flow.
* When a field is configured in the experience flow, the system recognizes it and fetches the corresponding value during outbound campaigns. For example, if the `{{First Name}}` field is configured in a message node, the system retrieves and speaks the relevant value during a voice campaign call.
* The system reads data from the CSV file and transmits necessary information/values to the agent console corresponding to the Customer/Phone number. This applies to both agent transfers in an Agentless Campaign and Auto Dialers on the agent console.
* Non-mapped fields are saved in the data table for additional queries. For example, if there is a column named "Account Num" in the contact, this "Account Num" will be part of the contact data table and can be called as part of the start flow.

To retrieve user information from the context, specifically the user details from the uploaded CSV, we need to extract all the fields present in the CSV. This requires configuring the script node to capture the data from the context and store it in a variable. This allows us to use and modify the data throughout the entire workflow.

!!! Note

    The table supports up to 150 columns, with a maximum of 300 characters per column.

Steps to query the CSV fields in the start flow-node:

1. Use the following code to retrieve the data from the context.

    `
let userInfo = context?.campaignUserInfo;
setCallFlowVariable('userInfo', userInfo);
    `  
    <img src="../images/script-task.png" alt="MScript Task" title="Script Task" style="border: 1px solid gray; zoom:80%;">  
    The user information is stored in the userInfo variable and saved in the `callFlowVariable` for future use.

2. The userInfo data can be used depending on the use case. For example, if we want to create a message to play when calling a customer, we can add the following in a message node:

    `
hi {{context.userInfo.firstName}} {{context.userInfo.lastName}}, your balance on the phoneNumber {{context.userInfo.phoneNumber}} is {{context.userInfo.balance}}, please recharge before the due date {{context.userInfo.dueDate}} {{context.userInfo.month}}  
    `
    <img src="../images/script-task-customized.png" alt="Customized Script Task" title="Customized script Task" style="border: 1px solid gray; zoom:80%;">  

3. The user details provided in the CSV are fetched as `context.userInfo.firstName` (where `firstName` is the header in the CSV). Similarly, all the other fields can be accessed.

    <img src="../images/insights-to-logs.png" alt="Insights to Logs" title="Insights to Logs" style="border: 1px solid gray; zoom:80%;">  

    <img src="../images/csv.png" alt="CSV Fields" title="CSV Fields" style="border: 1px solid gray; zoom:80%;">  

#### Time Zone

* The **Timezone** field of the CSV is validated against the Calling Hours Timezone.
* The time zone mentioned for a contact in the CSV gets preference over Calling Hours.
* When setting up the time zones for an Outbound campaign's contact list or specifying contactable timings, use the format mentioned in the Tz database. [Tz Identifiers](./tz-identifiers.md).
* Each location identifies in the Tz database by its continent or ocean, followed by the largest city in that area. For example,
    * America/Phoenix
    * Asia/Hong_Kong
    * Pacific/Fiji
* If a contact has a timezone mentioned, the system validates the timezone or converts before dialing. If the contact’s timezone doesn’t fall under calling hours then skips the contacts.
* If a the system skips a contact, then it's considered a check and the Campaign is "**Completed**" and dials all other contacts successfully.
* Contacts skipped due to timezone mismatch appear as "**Unconnected Calls**" on the Campaign Dashboard.

#### API Integration

Steps to pull  the contacts using API Integration:

1. Select **+ New Contact List**.

2. On the **New Contact List** pop-up window, enter the **Name**, **Description**, and select **API Integration** from the Source dropdown.

3. Select **API Integration** to select to configure the API and add records to the contact list. 
4. Select the Method and enter the URL.  
    <img src="../images/get-url.png" alt="Get URL" title="Get URL" style="border: 1px solid gray; zoom:80%;">

5. Select the **Data Sync Interval** from the dropdown. The system uses the interval to automatically update contact lists with database changes, eliminating the need for a manual refresh. You can choose an interval of up to 24 hours.

6. Select the **Data Sync Mode**. You can choose from the following options:
    1. **Append contacts and don’t show duplicates**: Selecting this option removes duplicate contacts from the list, and they're not contacted again.
    2. **Append contacts and allow duplicates**: Selecting this option lets duplicate contacts in the list and they're contacted again.

7. Configure the authorization profile for the request.  
    <img src="../images/authorization.png" alt="Authorization" title="Authorization" style="border: 1px solid gray; zoom:80%;">

8. If you select Header in the Add to field, go to the Headers tab and select **Click here to add headers**. 
    <img src="../images/header.png" alt="Headers" title="Headers" style="border: 1px solid gray; zoom:80%;">

9. Enter the **Key-Value** pairs and select **Next**.  
    <img src="../images/key-value-pairs.png" alt="Key-Value Pairs" title="Key-Value Pairs" style="border: 1px solid gray; zoom:80%;">

10. Select **Validate**. The response displays.  
    <img src="../images/validate.png" alt="Validate" title="Validate" style="border: 1px solid gray; zoom:70%;">

11. Select the **Mapping Fields**. For each field you want to map (First Name, Last Name, etc.), identify the corresponding key name in the API response:

    * If the data is at the root level of the JSON, simply use the key name as is. For example, if the JSON contains "firstName":"John," you would enter "firstName" in the field mapping.
    * Specify the full path to navigate the JSON hierarchy when the data is nested. Use dot notation to access nested objects. For example, if the name data is located as follows:

        ```json
            {
            "contact": {
            "name": {
            "first": "John",
            "last": "Doe"
                }
              }
            }
        ```
        You would enter "contact.name.first" and "contact.name.last" in the First Name and Last Name fields.  
            <img src="../images/field-mapping.png" alt="API Integration" title="API Integration" style="border: 1px solid gray; zoom:80%;">
    * Ensure that the phone numbers are in E.164 format with Country Code, Area Code, Subscriber Number, and within double inverted quotes.

    !!! Note

        You can get the API key value from environment variables (plain or encrypted) when adding contacts.

12. Select **Save**. The system fetches the contact-list from the third-party database.

    !!! note "Schema changes for API contact lists"
 
        When a contact list with the source type API Integration is updated, and its schema differs from the previous version, the system displays a warning pop-up if the list is linked to a campaign. Selecting Confirm accepts the latest schema.

#### Accessing Contact List Field Labels and Values

Advanced SMS and Agentless Dialer Campaigns can use mapped and unmapped contact fields for enhanced personalization. The `UserSession` [context object](../../../automation/intelligence/context-object.md) provides access to all mapped and unmapped fields from Contact List records within Dialog Tasks and Experience Flows, ensuring seamless integration across workflows. Campaign managers can use these fields to build more effective SMS campaigns.

#### Extracting Contact List Field Labels

Steps to retrieve the label names of all available fields in a contact record:

1. Go to an [Experience Flow](../../../flows/introduction-to-flows.md) or [Dialog Task](../../../automation/use-cases/dialogs/dialog-tasks-overview.md).
2. Enter the following function in the [Message Node](../../../automation/use-cases/dialogs/node-types/working-with-the-message-nodes.md).
`{{JSON.stringify(context.session.UserSession.campaignUserInfo)}}`
    1. You can get the labels from the [Transcripts](../../../analytics/overview/conversations.md#insights-to-logs) tab of the Interactions Dashboard.
    2. You can also use the same function in the [Script Node](../../../automation/use-cases/dialogs/node-types/working-with-the-script-node.md) to access the data.  
        <img src="../images/message-node.png" alt="Message Node" title="Message Node" style="border: 1px solid gray; zoom:80%;">

3. Publish the App to apply the changes. [Learn more](../../../deploy/publishing-bot.md).
4. Run the campaign associated with the contact list for which you need the field label names.  
    <img src="../images/run-campaign.png" alt="Run Campaign" title="Run Campaign" style="border: 1px solid gray; zoom:80%;">

5. On the **Interactions** page, click the desired Campaign's record to view transcriptions and access the string representation of all fields.  
    <img src="../images/insights-to-logs (2).png" alt="Insights to Logs" title="Insights to Logs" style="border: 1px solid gray; zoom:80%;">

#### Accessing the Contact List Fields Through Their Labels

You can use the extracted labels to access specific contact list fields within your flow.

**Example 1**: Using a Script Node (Experience Flow & Dialog Task)

1. Go to an [Experience Flow](../../../flows/introduction-to-flows.md) or [Dialog Task](../../../automation/use-cases/dialogs/dialog-tasks-overview.md).
2. In the [Message Node](../../../automation/use-cases/dialogs/node-types/working-with-the-message-nodes.md) or [Script Node](../../../automation/use-cases/dialogs/node-types/working-with-the-script-node.md), add the following JavaScript function to retrieve campaign user details:

```
const campaignUserInfo = context.session.UserSession.campaignUserInfo;
```

// Accessing all fields, including mapped and unmapped ones

3. After retrieving the user information, implement custom logic as needed. In this example, the script extracts the user’s phone number and stores it in the context for use in future flows.

```
const number = campaignUserInfo.phoneNumber;
```

// Extracting the user’s phone number and assigning to a  variable

```
context.campaignUserInfoNumber=number;
```

// Storing the number in context for later use 


```
    if (number === "+919876543210") {
     context.testingNumberValue="John"
} else 
	{
    context.testingNumberValue="other"
    }
```

**Example 2**: Accessing Fields in a Confirmation Node (Dialog Task)

1. Go to an [Experience Flow](../../../flows/introduction-to-flows.md) or [Dialog Task](../../../automation/use-cases/dialogs/dialog-tasks-overview.md).
2. Use the extracted field labels to define logic in a [Confirmation Node](../../../automation/use-cases/dialogs/node-types/working-with-the-confirmation-nodes.md). For example, you can validate the user’s response based on a specific contact field.  
<img src="../images/confirmation-node.png" alt="Confirmation Node" title="Confirmation Node" style="border: 1px solid gray; zoom:80%;">

### Edit a Contact List

#### Local Drive

Steps to edit a contact list from the local drive:

1. Select the **Edit** icon beside the contact list name.  
    <img src="../images/edit-call-list-button.png" alt="Edit Contact List" title="Edit Contact List" style="border: 1px solid gray; zoom:80%;">

2. Upload the call list and select **Save**.  
    <img src="../images/append-contact-list.png" alt="Append Contact List" title="Append Contact List" style="border: 1px solid gray; zoom:80%;">

    !!! Note

        You can only append a contact list; you cannot edit an existing contact list.  

#### API Integration

Steps to  edit an API-integrated contact list:

1. Select the **Edit** icon beside the contact list name.  
    <img src="../images/edit-api.png" alt="Edit Contact List Button" title="Edit Contact List Button" style="border: 1px solid gray; zoom:80%;">

2. Select the 🖉 at the right corner of the URL.  
    <img src="../images/edit-api-new-list.png" alt="API Integration" title="API Integration" style="border: 1px solid gray; zoom:80%;">

3. Do the changes and select **Next**.  
    <img src="../images/edit-api-sync-mode.png" alt="API Integration" title="API Integration" style="border: 1px solid gray; zoom:80%;">

4. Make changes to the mapping fields (if required) and select **Save**.  
    <img src="../images/edit-api-mapping.png" alt="API Integration" title="API Integration" style="border: 1px solid gray; zoom:80%;">  

### Delete a Contact List

#### Local Drive

Steps to delete a contact list from the local drive:

1. Select the **Edit** icon beside the contact list name and select the **Delete** icon at the left corner of the edit window.  
    <img src="../images/delete-call-list.png" alt="Delete Contact List" title="Delete Contact List" style="border: 1px solid gray; zoom:80%;">

    !!! Note

        You cannot delete a contact list if it is associated with any campaign.

2. A confirmation message displays. Select **Delete**.  
    <img src="../images/delete-list-confirmation.png" alt="Delete Contact List Confirmation" title="Delete Contact List Confirmation" style="border: 1px solid gray; zoom:80%;">  

#### API Integration

Steps to delete an API-integrated contact list:

1. Select the **Edit** icon beside the contact list name and select the **Delete** icon at the left corner of the edit window.  
    <img src="../images/delete-api-list.png" alt="Delete Contact List" title="Delete Contact List" style="border: 1px solid gray; zoom:80%;">

2. A confirmation message displays. Select **Delete**.

## DNC Lists

To view the Do Not Call (DNC) Lists, select the **DNC Lists** tab.

The system displays the following details:
<img src="../images/dnc-lists-tab.png" alt="DNC List Page" title="DNC List Page" style="border: 1px solid gray; zoom:80%;">

* **DNC Lists** - Name of the list. For example, DNC List 1.
* **Status** - Shows the status of the list. For example, Validating, Validated, and Invalid.
* **Contacts** - Shows the total count of contacts in the list. For example, 288.
* **Campaigns** - Name of the Campaign. For example, Post Sales Survey.
* **Last Updated** - Shows the date when the list was last updated. The system sorts the lists by this date by default.
* **Actions** - Allows you to view, edit, delete, or mark a list as global.

### Create a DNC List

Steps to create a new DNC list:

1. Select **+ New DNC List**.
2. On the **New DNC List** pop-up window, enter the **Name** and **Description**.

    !!! Note

        As of now, the default DNC List Type is Internal.

3. Select **Select a CSV file to upload**. 

    !!! Note

        You can download the template for the CSV file by clicking the CSV Template.

4. The file upload progress appears.
5. Choose the Mapping Fields and select **Next**. The system creates the DNC List.

### View a DNC List

Select the 👁 icon. The DNC list appears with the phone numbers, validity, and options to edit or delete the phone numbers. Campaign managers can add new contacts to the DNC list.

### Edit a DNC List

Steps to edit a DNC list:

1. Select 🖉.

    !!! Note

        You cannot delete a DNC list when it is "In use".

2. Upload the DNC list and select Save after the system appends the list.

### Delete a DNC List

Steps to delete a DNC list:

1. Select the 🖉 icon next to the DNC list name, and then select the Delete icon in the left corner of the edit window. 

    !!! Note

        You cannot delete a DNC list when it is "In use".

2. A confirmation message appears. Select **Delete** to remove the DNC list.

### Mark as Global

Steps to Mark as Global:

1. Select ⋮ and then select Mark as Global.
2. Select Confirm on the pop-up. The system marks a Global DNC list by changing its color and adding the label Global.

!!! note 
 
    * The platform creates a default Global DNC list when Campaigns is enabled. The list contains no phone numbers and is named Default Global DNC.
    * A DNC list can only be marked as Global. After it is marked, it cannot be unmarked until another DNC list is marked as Global. When this happens, the previous Global list is automatically unmarked.
    * A DNC list is mandatory during Voice Campaign creation through both the UI and the API.

## Handling of DNCs-Global and Non-Global

* Global DNC lists automatically apply to Voice campaigns and don't need to be explicitly added.  
* For any Voice campaign:  
    1. The campaign contact list is first scrubbed against the Global DNC list.  
    2. The contact list is then scrubbed against any DNC lists explicitly associated with the campaign.  
* The system scrubs other campaign types (SMS, Proactive) only against DNC lists explicitly linked to them; it doesn't apply the Global DNC list.  
* Editing a DNC list or marking it non-global doesn't require Active or Paused campaigns to modify their current call lists.

## Agent Mapping

The Contact Lists support assigning each customer to a corresponding agent and defining Customer Priority. Adding an Agent Key to each contact ensures that the system can route or connect the correct agent to the customer when required. Customer Priority lets campaigns to focus on high-value or high-importance customers first. This helps manage customer communication during voice campaigns.

### Add a Mapping List

Steps to add a mapping list:

1. Select + New Mapping List.  
2. Enter the name and description, and select Upload CSV from local drive.  
3. Choose the file to upload.  
4. Select Save.

### View a Mapping List

Steps to view a mapping list:

1. Select the 👁 icon to display a mapping list.  
2. Select + Add New Contact Mapping to add a contact to the list.

### Edit a Mapping List

Steps to edit a mapping list:

1. Select the 🖉 icon to edit a mapping list.
2. Make the required changes and select Save.

### Delete a Mapping List

Steps to delete a mapping list:

1. Select the 🗑 icon to delete a mapping list.  
2. Select Delete to confirm.

## Logs

When the system fetches contact logs through the API, it stores the information in the logs.

### Accessing the Logs

Campaign Managers can access the logs by going to:

**Contact Center AI** > **Campaigns** > **List Management** > **Logs**.  
    <img src="../images/logs-tab.png" alt="Logs Tab" title="Logs Tab" style="border: 1px solid gray; zoom:80%;">  

The following information is available on the logs page:  
<img src="../images/logs-details.png" alt="Logs Tab" title="Logs Tab" style="border: 1px solid gray; zoom:80%;">

* **Date & Time** - The date and time when the API call was made to the contact lists. For example, 30 Mar, 2025 10:54 AM.
* **Contact Lists** - Names of the contact lists. For example, Credit card customers.
* **Campaigns** - Names of the campaigns. For example, Premium card holders.
* **Status** - The status of the campaign (Completed/Failed).
* **Description** - Description of the campaign status. For example, Successfully fetched 100 contact records.
* **Export** - Export the contacts fetched through API as a JSON text file.

### Search and Date Filter

Users can search for records using the following:  
<img src="../images/search.png" alt="Search" title="Search" style="border: 1px solid gray; zoom:60%;">

* Contact List Name
* Campaign Name
* Description
* Status

The date filter enables users to filter the logs based on the selected dates and time. The following options are available:  
<img src="../images/calendar.png" alt="Calendar" title="Calendar" style="border: 1px solid gray; zoom:80%;">

* Today (default selection)
* Yesterday
* Last 7 Days
* Last 28 Days
* Last 90 Days
* Custom Range

You can set a time duration filter for the selected dates to retrieve records within the specified period.

## Refresh Logs

When you click the refresh button, the data updates based on the current search phrase and time filters.  
<img src="../images/refresh.png" alt="Logs Tab" title="Logs Tab" style="border: 1px solid gray; zoom:80%;">