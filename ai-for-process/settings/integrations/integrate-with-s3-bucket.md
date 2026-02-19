# Integrate with S3 Bucket

The S3 Storage Integration functionality broadens AI for Process' capabilities by enabling connectivity with your AWS S3 account. It empowers you to import files from S3 and leverage them in developing high-quality AI applications for enterprises.

**To integrate with your S3 account, follow these steps**:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings" style="border: 1px solid gray; zoom:75%;">

2. Click **Integrations** on the left menu.

3. Click the **AWS S3 bucket** option from the list of Integrations. The AWS S3 bucket section is expanded.

    <img src="../images/add-s3-connection.png" alt="Add S3 Connection" title="Add S3 Connection" style="border: 1px solid gray; zoom:80%;"/>

4. Click **Add connection**. The **AWS S3 bucket** dialog is displayed.

    <img src="../images/aws-s3-bucket-connection.png" alt="AWS S3 Bucket Connection" title="AWS S3 Bucket Connection" style="border: 1px solid gray; zoom:60%;">

5. Enter the following details in the dialog to create a connection:
    * Provide a **Connection name**.
    * Enter an **Access key** which is a unique identifier associated with your AWS account.
    * Enter a **Secret key** which is a confidential key paired with the Access Key ID.
    * Enter a **Bucket name** which is configured in the S3 console.
6. Click **Confirm** to create a connection.


## Testing your connection to S3

You can test your connection after you provide the details to verify the accuracy of the details.

**To test your connection, follow these steps**:

1. Click the Test button on the **AWS S3 bucket** dialog.

    Once the connection is tested, you will receive feedback information.

1. If the connection is successful, you can click **Confirm** and complete the connection process.
2. If the connection fails, you can verify the details entered or cancel the set-up process.
3. From the connections table, you can test the connection by clicking the **Play** button.

    !!! note

        If the connection fails a red icon is displayed corresponding to the name of the connection on the Connections list.


## **How to use files from the connected S3 Buckets in the Workflow Builder**

Once a connection is created and the integration of S3 Bucket is successful you can use the files in the Flow builder canvas.

**To use the files in the Workflow builder, follow these steps**:

1. Create an **Input variable** with type **Remote File**. 

2. Add an API node and point to the remote file in the API node using the URL field. 

    The file content will be available in the context object. You can access the file content in any other nodes using the context object.