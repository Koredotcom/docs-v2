--8<-- "includes/digital-channels-back-link.md"

# Email

Email is a communication channel through which customers can send inquiries, feedback, or requests to the customer service team for resolution or assistance. It allows for asynchronous communication, maintains a record of interactions, and efficiently handles customer inquiries. By adding the email channel to your AI Agent, end users can interact with it using any standard email client, such as *Microsoft Outlook* or *Yahoo*.

The email channel offers the following functionalities:

* Threaded email structure
* Collapsible email tiles
* Distribution to multiple recipients
* Standard Responses
* Attachments
* Drafts. [Learn more](../console/interacting-with-customers.md#emails).

You can use the Kore.ai Email domain or create your custom Email Domain to configure your email addresses.

To configure the email domains, go to **Flows & Channels** > **Channels** > **Digital** > **All** > **Email**.  
<img src="../images/email-digital-page.png" alt="Email Icon" title="Email Icon" style="border: 1px solid gray; zoom:80%;"/>

To manage the channel session settings, click settings (gear icon) on the Email channel page.  
<img src="../images/email-settings.png" alt="Email Settings" title="Email Settings" style="border: 1px solid gray; zoom:80%;"/>



## Session Creation Settings


**Channel-Based Sessions**: When enabled, the platform creates a new session for each unique "To" email address. Emails sent to the same address continue the existing session, while emails sent to different addresses automatically start new sessions. This keeps issues organized and separate.

**Thread-Based Sessions**: When enabled, the platform creates sessions based on email thread reference headers. Replies within the same thread continue the existing session, while new threads always start fresh sessions. When users or agents add recipients mid-thread, the platform maintains the existing email thread and preserves conversation context. This option is only available when Channel-Based Sessions is enabled.  

<img src="../images/email-session-settings.png" alt="Email Settings" title="Email Settings" style="border: 1px solid gray; zoom:80%;"/>



## Kore.ai Email Domain

Contact centers need to enable forwarding to the email address configured in the Contact Center AI system. This ensures that any email received by the contact center from its end customer is automatically forwarded to the Kore domain. The Kore domain is linked to the experience flow, allowing seamless integration and management of customer inquiries.

With the capabilities of the experience flow, we can efficiently route incoming emails to appropriate agents, analyze customer intents, execute automation, and more. This streamlined process ensures that each customer query is addressed promptly and accurately.

Any reply email managed by either the Human Agent or the AI Agent is directly sent to the end customer. To maintain transparency and accountability, the customer contact center domain is included in the BCC (Blind Carbon Copy) field and the Reply-to field. This configuration ensures that communication remains open and accessible to all relevant parties.

Whenever the customer responds to the email thread, it is directed back to the customer contact center domain. From there, it is seamlessly forwarded to the Kore domain, ensuring a continuous and efficient communication loop.  
<img src="../images/email-flow.png" alt="Email Flow" title="Email Flow" style="border: 1px solid gray; zoom:80%;"/>

### Create a Kore Domain Email Address

Steps to create an email address in the Kore domain:

1. Click the **+ New Email Address**.  
    <img src="../images/new-kore-email.png" alt="+ New Email Address" title="+ New Email Address" style="border: 1px solid gray; zoom:80%;"/>

2. Enter the following details.
    1. Email Address
    2. Display Name
    3. Choose whether to use the custom email for inbound, outbound, or both under **Additional Settings**.
    4. Choose whether you want to send a contact card to all users as a part of the introduction message under **Send contact card (.VCF)**.
    5. Under the Enable Channel section, select **Yes** to enable the channel.  
        <img src="../images/kore-email-configuration.png" alt="Email Configuration" title="Email Configuration" style="border: 1px solid gray; zoom:80%;"/>

    6. Turn on the **Email Template Design (Optional)** toggle to configure the header and footer of the emails that are sent via the configured email address, and do the following:
        1. Click **Edit Header** and **Edit Footer** to configure the header and footer details.  
            <img src="../images/email-template-design.png" alt="Email Template Design" title="Email Template Design" style="border: 1px solid gray; zoom:80%;"/>

        2. In the **Edit** window, change the header and footer details, and click **Save**.

    7. Click **Preview** to see a preview of the Email template.  
        <img src="../images/email-template-preview.png" alt="Email Template Preview" title="Email Template Preview" style="border: 1px solid gray; zoom:50%;">

3. Click **Save.**
4. A success message is displayed and the email address is created.  
    <img src="../images/kore-email-created.png" alt="Email Address Created" title="Email Address Created" style="border: 1px solid gray; zoom:80%;"/>  

    !!! Note

        The option to link a flow directly from the Email Channels list is excluded. Users would need to return to the Experience Flows section, locate the linked flow, and publish it again for any changes to take effect. This option is omitted to maintain a consistent user experience and avoid unnecessary steps.

### Publish Kore Domain Email Addresses

Steps to publish email addresses in the Kore domain:

1. Go to **Deploy** > **Deploy Management** > **Publish**.  
    <img src="../images/publish-page.png" alt="Publish Page" title="Publish Page" style="border: 1px solid gray; zoom:60%;">

2. Select the email address under channels and click **Proceed**.  
    <img src="../images/select-email.png" alt="Select Email" title="Select Email" style="border: 1px solid gray; zoom:60%;">

3. Enter the Comments and click **Confirm**.  
    <img src="../images/comments-publish.png" alt="Comments" title="Comments" style="border: 1px solid gray; zoom:60%;">

4. A success message is displayed and the email address is published.  
    <img src="../images/email-published.png" alt="Email Address Published" title="Email Address Published" style="border: 1px solid gray; zoom:80%;"/>

## Custom Email Domain

Custom email domains add a professional look to your email communications, reinforcing your brand identity with every email you send or receive. Customers perceive custom emails as established, reliable, and legitimate compared to generic email addresses. For example, You can create [help@yourbusiness.com](mailto:help@yourbusiness.com), a branded email account that uses your organization's domain name instead of a domain provided platform. You can add up to three email accounts (sales@, support@, info@, etc.) in each custom domain for better organization and delegation. By granting access to your email accounts within the domain, you can track the activity of the configured accounts, respond to incoming emails, and send outbound emails. Email filters are less likely to flag emails from custom domains as spam, ensuring better deliverability rates.

Currently, we support two types of custom domains: Standard and Advanced. The Standard has a limitation of 5 domains and 5 emails per domain, whereas the Advanced supports 50 domains and 50 emails per domain.

### Standard Custom Domain

Follow these steps to set up a standard custom domain and add an email ID to it.

#### Step 1: Create a Standard Custom Domain

1. Navigate to **Flows & Channels** > **Channels** > **Digital** > **All** > **Email**.
2. Click **+ New Domain** and select **Custom Domain**.
3. Enter the **Domain Name**. Select the domain type as Standard, and click **Create**.  
<img src="../images/email-stddomain.png" alt="Standard Custom Domain" title="Standard Custom Domain" style="border: 1px solid gray; zoom:80%;"/>

4. The domain created a success message is displayed.

#### Step 2: Create a Custom Email Address

1. On the Email Channel page, click **+ New Email ID**.
2. On the email configuration tab, enter the following details.
    1. Email Address
    2. Display Name
    3. +Add User Name (If a User Name is added, the system uses it for authentication instead of the email address)
    4. Password
    5. Enter the following details to set up the mail SSL connection for Incoming and Outgoing emails.
        * Protocol
        * Incoming/Outgoing email server
        * Port
        * Select “Use SSL to connect” if you want to use a Secure Socket Layer.
    6. Choose whether to use the custom email for inbound, outbound, or both under **Additional Settings**.
    7. Choose whether you want to send a contact card to all users as a part of the introduction message under **Send contact card (.VCF)**.
    8. Under the Enable Channel section, select **Yes** to enable the channel.  
        <img src="../images/custom-email-config.png" alt="Email Configuration" title="Email Configuration" style="border: 1px solid gray; zoom:50%;">

    9. Turn on the **Email Template Design (Optional)** toggle to configure the header and footer of the emails that are sent via the configured email address, and do the following:
        1. Click **Edit Header** and **Edit Footer** to configure the header and footer details.  
            <img src="../images/email-template-design.png" alt="Email Template Design" title="Email Template Design" style="border: 1px solid gray; zoom:80%;"/>

        2. In the **Edit** window, change the header and footer details, and click **Save**.  
            <img src="../images/edit-window-change-header-footer.png" alt="Edit Header-Footer" title="Edit Header-Footer" style="border: 1px solid gray; zoom:80%;"/>  

            <img src="../images/edit-window-click save.png" alt="Save Header-Footer" title="Save Header-Footer" style="border: 1px solid gray; zoom:80%;"/>

    9. Click **Preview** to see a preview of the Email template.  
        <img src="../images/custom-template-preview.png" alt="Template Preview" title="Template Preview" style="border: 1px solid gray; zoom:80%;"/>

3. Click the **Test Connection** to verify the domain ownership. A success message is displayed.  
    <img src="../images/test-connection.png" alt="Test Connection" title="Test Connection" style="border: 1px solid gray; zoom:80%;"/>

4. Click **Save**.

#### Step 3: Email Blocklist

Email blocklisting allows admins to specify a list of blocklisted email addresses during email address creation preventing blocking interactions originating from blocklisted email addresses, automations, and subsequent agent transfers are prevented, reducing unnecessary processing, and ensuring that resources are allocated to valid interactions.

**Blocklist Verification**

Upon receiving a new interaction, the system checks the incoming email address against the blocklist associated with the receiving email address.

* If a match is found between the incoming email address and the blocklist, any pre-configured automations linked to the receiving email address will be disabled for that specific interaction. Automated agent transfers triggered by the interaction will be prevented, ensuring that blocklisted emails do not initiate further actions within the system.
* If no match is found, the system will continue with the usual automation processes and agent transfer rules, handling the  interaction normally.

**Configure Email Blocklist**

Steps to Configure Email Blocklist:

1. Click the **Email Blocklist** tab and turn on the **Enable Email Blocklist** toggle.  
    <img src="../images/email-blocklist-tab.png" alt="Email Blocklist Tab" title="Email Blocklist Tab" style="border: 1px solid gray; zoom:80%;"/>

2. You can add email addresses manually or using bulk upload.
    1. **Manual entry**:
        1. Enter the email address in the search dialog box and click **Add**.  
            <img src="../images/manual-blocklist-upload.png" alt="Manual Entry" title="Manual Entry" style="border: 1px solid gray; zoom:80%;"/>  

            !!! Note

                The search box can be used to find existing email addresses or to add a new one.

        2. The email address is updated successfully.  
            <img src="../images/manual-blocklist-updated.png" alt="Manual Entry Updated" title="Manual Entry Updated" style="border: 1px solid gray; zoom:80%;"/>

    2. **Bulk Upload**:
        1. Click **Bulk Upload**.  
            <img src="../images/bulk-upload-button.png" alt="Bulk Upload Button" title="Bulk Upload Button" style="border: 1px solid gray; zoom:80%;"/>

        2. A pop-up window is displayed. Click **Select a CSV file to Upload** and upload the CSV file. You can download a sample CSV file by clicking **Download sample CSV file**.  
            <img src="../images/select-csv.png" alt="Select CSV File" title="select CSV File" style="border: 1px solid gray; zoom:80%;"/>

        3. The upload progress is displayed.  
            <img src="../images/upload-progress.png" alt="Upload Progress" title="Upload Progress" style="border: 1px solid gray; zoom:80%;"/>

        4. On completion, map the CSV file fields with system fields.  
            <img src="../images/map-fields.png" alt="Map Fields" title="Map Fields" style="border: 1px solid gray; zoom:80%;"/>  

            !!! Note

                If the CSV file contains only one column, field mapping is not required and will not be displayed.

        5. Click **Validate**.  
            <img src="../images/validate.png" alt="Validate" title="Validate" style="border: 1px solid gray; zoom:80%;"/>

        6. The details of the mapped contacts, duplicates, and errors (if any) are displayed. Click **Save**.  
            <img src="../images/save-mapped-fields.png" alt="Save Button" title="Save Button" style="border: 1px solid gray; zoom:80%;"/>

        7. A success message is displayed and the email blocklist is updated.  
            <img src="../images/bulk-upload-button.png" alt="Bulk Blocklist Updated" title="Bulk Blocklist Updated" style="border: 1px solid gray; zoom:80%;"/>


### Advanced Custom Domain

AI for Service now enhances custom domains with advanced capabilities, including email forwarding, domain setup, DKIM, and Flow mapping to improve scalability and brand alignment in enterprise email automation.

Key enhancements:



* Email Forwarding: Centralize email processing by forwarding emails from enterprise domains to a single Kore.ai mailbox.
* Advanced Custom Domain Setup: This new option, in addition to the existing Standard setup, supports up to 50 custom domains and 50 email addresses per domain.
* DomainKeys Identified Mail (DKIM) Support: Secure email authentication is now provided for each advanced custom email domain.
* Flow Mapping by Email ID: Route incoming emails accurately by linking custom domain email addresses to specific Flows.

Follow these steps to set up a standard custom domain and add an email ID to it.


#### Step 1: Generate DKIM

Generate and Configure DKIM for this domain by providing your own private key. The Private key must use 1024-bit to 2048-bit RSA encryption, and be PEM-encoded. Refer [Generating DKIM keys using OpenSSL](generate-dkim.md). 

1. Generate RSA key pair (2048-bit recommended).
2. Extract the public key in the proper format.
3. Enter the private key in the DKIM Key field in the Verification screen.
4. Configure public key in DNS.



#### Step 2: DKIM Verification

1. Navigate to **Flows & Channels** > **Channels** > **Digital** > **All** > **Email**.
2. Click **+ New Domain** and select **Custom Domain**.
3. Enter the **Domain Name**. Select the domain type Advanced, then click **Create**.  
<img src="../images/email-advdomain.png" alt="Advanced Custom Domain" title="Advanced Custom Domain" style="border: 1px solid gray; zoom:80%;"/>

4. On the verification tab, enter the **DKIM Private Key**, **Selector Name**, and click **Verify Domain**.


    A DKIM selector is a string that identifies which DKIM public key to use for signature verification. It's part of the DKIM DNS record structure.

    **DNS Record Format**: <code>[selector]._domainkey.[domain.com]</code>.

    **Example**: If your selector is "ses2024" and the domain is "example.com," the DNS record would be: <code>ses2024._domainkey[.example.com]</code>.
    
    <img src="../images/email-custom-dkim.png" alt="Advanced Custom Domain" title="Advanced Custom Domain" style="border: 1px solid gray; zoom:80%;"/>

5. The Verification in Progress message is displayed.  
<img src="../images/email-vip.png" alt="Advanced Custom Domain" title="Advanced Custom Domain" style="border: 1px solid gray; zoom:80%;"/>

6. Click **Confirm**. You can navigate to the Email Channels page to check the latest status. This might take up to 72 hours. The status can be one of the following: 
    * **Pending**: DNS records not yet detected.
    * **Success**: DKIM successfully verified.
    * **Failed**: DNS records incorrect or missing.
    * **Temporary Failure**: DNS issues, will retry automatically.  
    <img src="../images/email-domain.png" alt="Advanced Custom Domain" title="Advanced Custom Domain" style="border: 1px solid gray; zoom:80%;"/>

#### Step 3: Complete Configuration

After successful DKIM verification, follow these steps:



1. On the Email Channel page, click **Complete Configuration** for a domain.  
<img src="../images/email-custom-config-new.png" alt="Advanced Custom Domain" title="Advanced Custom Domain" style="border: 1px solid gray; zoom:80%;"/>

2. Click **+ New Email ID** to add an email to the domain. 
3. Enter the **Display Name**, add the **Email ID**  from which emails have to be forwarded or sent, and select the **Usage**.
4. Click **Save**. The configuration saved message is displayed.






## Microsoft Exchange

Follow these steps to set up a Custom Microsoft Exchange domain and add an email ID to it.


### Step 1: Generate DKIM

Generate and Configure DKIM for this domain by providing your own private key. The Private key must use 1024-bit to 2048-bit RSA encryption, and be PEM-encoded. Refer[ Generating DKIM keys using OpenSSL](generate-dkim.md).



1. Generate RSA key pair (2048-bit recommended).
2. Extract the public key in the proper format.
3. Enter the private key in the DKIM Key field in the Verification screen.
4. Configure the public key in DNS.


### Step 2: Domain Verification



1. Navigate to **Flows & Channels** > **Channels** > **Digital** > **All** > **Email**.
2. Click **+ New Domain** and select **Microsoft Exchange**.
3. On the verification tab, enter the following details and then click  **Verify Domain**.
    * **Domain Name**: This is the domain for which you want to subscribe to the mailboxes using the Graph API.
    * **DKIM Private Key**: The DKIM key generated before.
    * **Selector Name**: A DKIM selector is a string that identifies which DKIM public key to use for signature verification. It's part of the DKIM DNS record structure.

        **DNS Record Format**: <code>[selector]._domainkey.[[domain.com](http://domain.com)]</code>


        **Example**: If your selector is "ses2024" and the domain is "example.com," the DNS record would be: <code>ses2024._domainkey[.example.com](http://.example.com)</code>  
        
        
        <img src="../images/msexchange1.png" alt="Microsoft Exchange" title="Microsoft Exchange" style="border: 1px solid gray; zoom:80%;"/>




4. The Verification in Progress message is displayed.  
<img src="../images/msexchange2.png" alt="Microsoft Exchange" title="Microsoft Exchange" style="border: 1px solid gray; zoom:80%;"/>

5. Click **Confirm**. You can navigate to the Email Channels page to check the latest status. This might take up to 72 hours. The status can be one of the following:
    * **Pending**: DNS records not yet detected.
    * **Success**: DKIM successfully verified.
    * **Failed**: DNS records are incorrect or missing.
    * **Temporary Failure**: DNS issues, will retry automatically.  
    <img src="../images/msexchange3.png" alt="Microsoft Exchange" title="Microsoft Exchange" style="border: 1px solid gray; zoom:80%;"/>




### Step 3: Microsoft 365 Setup Instructions for Integration


**1: Create a Microsoft 365 Group**



1. Sign in to the[ Microsoft 365 Admin Center](https://admin.microsoft.com).
2. Navigate to **Groups > Active groups**.
3. Click on **Add a group**.
4. Choose **Microsoft 365 or security** as the group type.
5. Provide a **Group Name** (for example, `BotMailboxGroup`).
6. Complete the required fields and click **Create**.
7. After creation, **add users** (mailboxes you want to monitor, cloud-based inboxes) to this group as members.


**2: Register an Azure AD Application**



1. Go to the[ Azure Portal](https://portal.azure.com) and navigate to **Azure Active Directory > App registrations**.
2. Click **New registration**.
3. Enter a name for the app (e.g., `KoreAI Email Integration`).
4. Select **Accounts in this organizational directory only**.
5. Click **Register**.


**3: API Permissions**



1. After registration, you'll be redirected to the app's overview page
2. Navigate to **API Permissions > Add a permission**.
3. Select **Microsoft Graph > Application permissions**.
4. Add the following permissions:

    * `Group.Read.All`
    * `Mail.Read`
    * `Mail.ReadWrite`
    * `Mail.Send`
    * `MailboxSettings.Read`
    * `User.Read`
    * `User.Read.All`

    <img src="../images/msexchange4.png" alt="Microsoft Exchange" title="Microsoft Exchange" style="border: 1px solid gray; zoom:80%;"/>


5. Click **Add permissions**.
6. **Important**: Click **Grant admin consent for [Your Organization]**.
7. Confirm by clicking **Yes** in the dialog box.


**4: Generate Client Secret**



1. Navigate to **Certificates & secrets** in your registered app.
2. Under the **Client secrets** section, click **+ New client secret**.
3. Provide a description for the secret (for example, Graph API Secret).
4. Select an expiration period (recommended: 24 months or less for security)
5. Click **Add**.
6. **Important**: Copy the **Value** of the client secret immediately and store it securely. This value will not be displayed again once you navigate away.


**5: Retrieve Required Configuration Values**

After completing the setup, you'll need the following values to complete the setup:



* **Group Name(s)** created
* **Client ID** (Application ID)
* **Client Secret** (value)
* **Tenant ID** 


### Step 4: Complete Configuration and Subscribe to Groups

After successful domain verification, follow these steps:



1. On the Email Channel page, click **Complete Configuration** for a domain.
2. On the Configuration tab, enter **Client ID**, **Client Secret Key**, **Tenant ID**, and enable the channel.  
<img src="../images/msexchange5.png" alt="Microsoft Exchange" title="Microsoft Exchange" style="border: 1px solid gray; zoom:80%;"/>




3. Click **+New Group** and enter the **Group Name** that you would like to subscribe to via the Graph API. You can add up to 50 domains and 50 email addresses per domain.  
<img src="../images/msexchange6.png" alt="Microsoft Exchange" title="Microsoft Exchange" style="border: 1px solid gray; zoom:80%;"/>


4. Click **Sync** to fetch all the email id of the group.  
<img src="../images/msexchange7.png" alt="Microsoft Exchange" title="Microsoft Exchange" style="border: 1px solid gray; zoom:80%;"/>


5. Click **Save**. The configuration saved message is displayed.  
<img src="../images/msexchange8.png" alt="Microsoft Exchange" title="Microsoft Exchange" style="border: 1px solid gray; zoom:80%;"/>


6. Click **Edit** to sync up the emails of a group or to add.  
<img src="../images/msexchange9.png" alt="Microsoft Exchange" title="Microsoft Exchange" style="border: 1px solid gray; zoom:80%;"/>




**Test Your Configuration**

It's recommended to test your app registration using a tool like:



* Microsoft Graph Explorer:[ https://developer.microsoft.com/en-us/graph/graph-explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
* Postman with Microsoft Graph API collections
* Custom application code