# Lookup Settings

Employee Lookup Settings let administrators configure how the AI assistant answers employee-related queries. By selecting a lookup source, administrators decide which data the assistant uses when users ask for contact details, reporting structure, or department information.

## Access Lookup Settings

1. Open the **Admin Console**. 
2. In the left navigation pane, go to **Employees**. 
3. Click **Lookup Settings**. 

## Enable Employee Lookup

The system enables Employee Lookup by default. When enabled, the AI assistant answers employee-related queries using the selected lookup source.

To disable Employee Lookup, turn off the **Enable Employee Lookup** toggle. Once disabled, the assistant stops answering employee-related queries.

## Configure the Lookup Source

When you enable Employee Lookup, select one lookup source to define where the assistant retrieves employee data.

### Employee Directory

Choose this option to let the assistant answer queries using your configured Enterprise Directory data.

The system makes this source available only after you configure a directory under **Directory Configurations** and publish at least one record. The system does not allow you to use draft directories or directories without data.

Before selecting this option, complete the directory setup, configure the required field mappings, and sync the data.

If you have not configured a directory, go to **Employees > Directory Configurations** and set it up.

### Service Account

Choose this option to let the assistant retrieve employee data directly from your identity provider through a connected service account.

The system makes this source available only after you configure at least one service account under **Security > Service Accounts**.

After selecting this option, choose a service account from the list (for example, a Google or Microsoft service account).

If you have not configured a service account, go to **Security > Service Accounts** and set one up.

### From User Data

Choose this option to let the assistant answer queries using the account’s user management data.

The system selects this option by default when you enable Employee Lookup for the first time or when you have not configured a directory or service account.

With this source, the assistant uses only the data available within the logged-in user’s account context to resolve employee queries.


## How Employee Lookup Works

When users ask about other employees, the assistant’s response depends on the operating mode and the selected lookup source.

* In **agentic mode**, the Work agent handles contact lookup as a tool and delivers responses inline within the conversation. 

* When you do not enable agentic mode, the system runs contact lookup as a standalone agent and attributes responses to **Contact Lookup**. 


## Enable Lookup from Directory Configuration

To enable Employee Lookup while configuring the Enterprise Directory:

1. Go to **Employees > Directory Configurations**.
2. Follow the guided steps to enable Employee Lookup.
3. Complete the setup on the **Lookup Settings** page.