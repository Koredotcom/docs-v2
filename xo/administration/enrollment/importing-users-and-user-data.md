# Importing Users and User Data

If you need to invite multiple Kore.ai users and you have information about users in addition to the email address, such as the **First Name**, **Last Name**, **Department**, **Phone**, and **Job Title**, you can use the **Import** page to add new users and update existing users based on a list that contains additional user information. The following illustration is an example of the **Import** page in the **Enrollment** module.

<img src="../images/importing-users-and-user-data-img1.png" alt="Enrollment - Import" title="Enrollment - Import" style="border: 1px solid gray;zoom:70%;"/>

The import file can be a basic text file and saved as a .txt or .csv file format. After you create an import file, you can upload the file to add or update the Kore.ai users in your account.


### File Requirements

When you create an import file, you must adhere to the following guidelines:

* The first row identifies the name of the field under which the data is stored within Kore.ai, kind of header row.
* The following Kore.ai account fields are required:
    * **Email ID** – mandatory
    * **First Name** – mandatory
    * **Last Name** – mandatory
    * **Alternate ID**, **Work Phone**, **Title**, **Department** – optional
    * **User Status** – – mandatory – One of
        * **New**
        * **Update**
        * **Delete**
        * **Activate**

* Create one row for each Kore.ai user
* Valid field delimiters are comma, pipe, semicolon, and tab

When using an import file, the following validation rules are applied:

* Entries with invalid email formats are ignored.
* Each successful import of an email address generates an invitation email to become a Kore.ai user.
* Existing users in your Kore.ai account are not sent invitation emails.
* Imported users with status set to **Activate** are sent a notification that the Kore.ai account is activated.

**Sample File**

For a .txt file:

```
Email ID, First Name, Last Name, Alternate ID, Work Phone, Title, Department, User Status
john.doe@example.com., John,Doe, 800-555-1212,President,Executive,New
jane.doe@example.com., Jane,Doe, 800-555-5555,VicePresident,Executive,New
```

### Create and Upload an Import File

You can create a file to invite users in your organization to become Kore.ai users that you can manage as an Admin. This topic describes how to create a file that contains the email addresses and user information, such as first and last name, phone number, department, and so forth, for the users that you want to invite to become Kore.ai users in your account. If you only have email address information for your users, you should create and [import a bulk invite file](enrolling-many-users.md){:target="_blank"} instead. **To create an import file**

1. In a text editor or spreadsheet, enter the field IDs on the first line, and then enter a complete email address and data on each following line or in a comma-separated list as shown in the following example:  
  
    **For a .txt file:**

    ```
    Email ID, First Name, Last Name, Alternate ID, Work Phone, Title, Department, User Status
    user1@example.com,User1FirstName,User1LastName,User1AlternateID,800-555-1212,President,Executive,New
    user2@example.com,User2FirstName,User2LastName,User2AlternateID,800-555-5555,VicePresident,Executive,New
    user3@example.com,User3FirstName,User1LastName,,,,New
    ```

our account users.

After you have created an import file, you need to upload the import file. This topic describes how you can upload your import file of users of your account. **To upload a user import file**



1. In the **Enrollment > Import** page, click **Choose File**.
2. Navigate to your import file, and then click **Open**. The filename is displayed to the right of the **Choose File** button.
3. Click **Import File**. The status of the import is described immediately following the **Import File** button.
4. You can click the _File Based Bulk User Import History_ link to review an import status from a prior import.  
<img src="../images/importing-users-and-user-data-img2.png" alt="File Based Bulk User Import History" title="File Based Bulk User Import History" style="border: 1px solid gray;zoom:70%;"/>


### View Results

You can review the import operation results on a per-user basis if needed. This topic describes how to view the results of the current import report. **To view the results of the current user import**

1. On the **Enrollment > Import** page, click the _here_ link, as shown below.  
<img src="../images/importing-users-and-user-data-img3.png" alt="File Based Bulk User Import History" title="File Based Bulk User Import History" style="border: 1px solid gray;zoom:70%;"/>

2. The **Report On File Import** dialog opens.  
<img src="../images/importing-users-and-user-data-img4.png" alt="Report on File Import" title="Report on File Import" style="border: 1px solid gray;zoom:70%;"/>


### View History

After you create and import a list of users in your account, you may want to review the results of the import. This topic describes how to view the historical list of file-based user imports. **To view historical import reports**

1. In the **Enrollment** module, on the **Import** page, click _File Based Bulk User Import History_ as shown in the following illustration.

    <img src="../images/importing-users-and-user-data-img5.png" alt="Click 'File Based Bulk User Import History'" title="Click 'File Based Bulk User Import History'" style="border: 1px solid gray;zoom:70%;"/>

2. In the **File Based Import History** dialog, to view the results of an import, in the **Report** column for the import that you want to view, click Results. The individual user results for the import are displayed in the **File Based Import Results** dialog as shown in the following illustration.

    <img src="../images/importing-users-and-user-data-img6.png" alt="File Based Import Results" title="File Based Import Results" style="border: 1px solid gray;zoom:70%;"/>
