# Enterprise Directory

Enterprise Directory enables centralized employee contact management across your organization. This feature streamlines workflows by providing users with quick access to colleague information through intelligent search, customizable filters, and rich contact profiles, while giving administrators flexible configuration options for data sources, field mapping, and display settings.

## Accessing the Enterprise Directory

Follow these steps to access and use the Enterprise Directory:

1. Access the Directory
    1. Navigate to the application.
    2. Select **Enterprise Directory** to view the contact list.
    3. Alternatively, access your personal contact card through the **Profile** section.
2. Browse Contacts
    4. Upon opening the directory, see a list of contacts ranked by designation.
    5. The interface displays contacts in an organized, hierarchical view based on organizational structure.

## Searching and Filtering Contacts

Locate colleagues efficiently using the directory's search and filter capabilities.

* **Search Bar**: Enter keywords in the search bar with real-time suggestions as you type. The system provides instant results matching names, designations, departments, or other searchable fields.
* **Apply Filters**: Use default filters to narrow your search: **Department**, **Designation**, **First Name**, **Location**, and any additional custom filters your admin configures.

**Contact Cards**

Search results display compact contact cards showing Name, Designation, Team, Phone number, Email address, and other fields your admin configures.

**Viewing Detailed Information**: Click any contact card to open a side panel view. The side panel includes an option to expand to full-page view for comprehensive details.

The detailed contact view displays the Profile Picture, default fields (Name, Designation, Team, Email, Phone, Location, Time Zone, Employee ID, Manager, Reportees, and Team Members), and any additional custom fields that the admin configures.

<img src="../images/view-details-ed.png" alt="user-details" title="user-details" style="border: 1px solid gray; zoom:80%;"/> 

## Admin Setup and Configuration

Follow these steps to configure the Enterprise Directory:

1. Access the Admin Console
    1. Navigate to **Admin Hub** in the left pane.
    2. Select **Connections** to access integration options.
    3. Choose **Enterprise Directory**.
2. Initiate Directory Setup
    4. Click **Add Directory Source** to begin configuration.
    5. The Enterprise Directory Configuration Wizard guides you through the setup process.

### Step 1: Source Configuration

Configure the directory using the Push Data to Directory through the API method. This enables your system to push employee data directly to the API.

1. Select **Push Data to Directory through API** as your data source method.
2. Click **Get API Details to Push Data** to view integration instructions, including API endpoint URL, authentication credentials, required data format and schema, and sample API request payload.
<img src="../images/ed-1.png" alt="user-details" title="user-details" style="border: 1px solid gray; zoom:80%;"/> 

3. Implement the API integration in your system to push employee data to the directory.

### Step 2: Field Configuration

Customize fields to capture relevant employee information for your organization.

**Field Management for Push API**

Simplified field management without a mapping interface.

* Add fields as needed to capture organization-specific information.
* Remove custom fields that are not required.
* The system protects default fields (Name, Designation, Phone, and Email) from deletion.
* Configure at least the four mandatory fields: Name, Designation, Phone, and Email.

**Custom Fields**: Add any additional fields relevant to your organization. You can add or remove custom fields at any time.

### Step 3: Data Synchronization

Monitor data synchronization status and activity using the API.

**API Integration for Data Sync**

The directory updates automatically when your system pushes data through the API.

* **API Token Management**: Access your API authentication token from the **Get API Details to Push Data** section. Store the token securely in your system, include the token in the auth header of all API requests, and regenerate tokens periodically for security compliance.

* **Display Information**: The **Last updated timestamp** shows when data was last pushed to the directory. The **Summary of records** displays the number of records added, updated, or deleted in the last push.

* **Manual Updates**: Trigger data updates from your system by calling the Push API endpoint with updated employee information.

### Step 4: Display Settings

Configure how contacts appear to end users after completing data setup.

**Hide Conditions**:

Control contact visibility using hide conditions:

* **Full string match**: Hide contacts where the field exactly matches the specified value.
* **Starts with**: Hide contacts where the field begins with the specified prefix.
* Use hide conditions to exclude test accounts, inactive employees, or specific user groups from the end-user view.

*Example*: To hide all test accounts, create a hide condition where Email "starts with" "test@" or where Name "full string match" equals "Test User".

**Detail Card Layout**:

Customize the contact detail card appearance and field order.

* The system displays a preview of the Detail Contact card with an **Edit Layout** option.
* Click **Edit Layout** to customize:
    * **Reorder field display** (except Name, Designation, Phone, Email – these are fixed at the top).
    * **Hide non-essential fields** (four mandatory fields cannot be hidden: Name, Designation, Phone, Email).

**Reordering Fields**:

1. Drag and drop fields to the desired position in the layout.
2. Preview changes in real-time.
3. Ensure critical information appears prominently for end users.

**Filter Settings**:

Configure which fields are available as search filters for end users.

* Select single-select fields to expose as filters.
* Common filter options include Department, Designation, First Name, and Location.
* Enable filters for the most commonly searched attributes to improve user experience.
* Only fields with discrete values (not free text) are configured as filters.

### Step 5: Publishing the Directory

Publish your directory and define access permissions.

1. **Complete Configuration**: Ensure you push data through the API and complete the display configuration. The system prompts you to publish the directory.
2. **Choose Publishing Scope**: **Publish to all users** makes the directory immediately available to everyone in the account, or **Keep unpublished** saves configuration for later activation.

**Publishing Requirements**: At least one contact record must be available in the directory before the system enables publishing. Ensure you push employee data through the API before attempting to publish.

**Admin View After Publishing**: View the publish status indicator (Published/Unpublished), data settings summary showing last updated date when data was last pushed through API and record count summary (total contacts, recently added, updated, or deleted), display settings overview, and live preview of how the directory appears to users.

**Managing Individual Contacts**: Administrators can hide individual contacts from the live preview. Navigate to the preview section in the admin console, hover over any contact card to reveal the hide option, and click the hide icon to exclude that specific contact from the user view. Hidden contacts remain in the directory data but are not visible to users.

**Finalize Deployment**: Click **Publish** to make the directory available to users. The directory appears in the application menu for users based on the selected publishing scope.
