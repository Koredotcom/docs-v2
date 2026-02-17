# Upload Documents

Business information is available in a variety of formats and at various locations. This information is also available as documents and files on internal servers. Search AI allows uploading and indexing files or directories hosted on local machines or remote servers. This functionality streamlines the process of locating information, eliminating the need to manually locate specific documents and sift through their contents, thus reducing manual efforts and enabling efficient information retrieval, saving users time and resources.

Search AI allows you to **upload one or more files or directories from the local device or a given URL**. The uploaded files are organized into directories in the application. A default directory is always present to store files. Once a file is successfully uploaded to the application, it is automatically indexed, and the file data is readily available to answer user queries.

!!!note
    Search AI supports files in various formats: PDF, DOCX, PPT, and TXT. However, scanned PDFs and password-protected files are not currently supported.  

## Viewing Files and Directories

Go to the **Sources** page and click the **Directory** tab. This lists all the directories configured as content sources.

![Directory Home](images/directory/documents-home.png "directory home")

For each directory, it lists the number of files present in it, its owner, the timestamp of the last update made to it, and the status of file uploads to it. By default, the **Default Directory** always exists. You can upload files to this default directory or create new directories and upload files to those directories. 

Click any of the directories in the list to view their details. The **Directory Details** page shows the directory's properties and the **Files** tab lists the files in the directory, including their type and number of pages. 

![Directory Details](images/directory/directory-details.png "Directory Details")

Click any of the files to see more details about the file, like file type, total number of pages, and a preview of the file. 

![File Summary](images/directory/file-summary.png "File Summary")

Click the **JSON view** button to see the file details extracted from the file in JSON format.

![JSON View](images/directory/file-json-view.png "JSON View")

## Uploading Files and Directories

To upload one or more files or directories, click the **Upload** button on the top right corner of the page.

![Upload](images/directory/upload-document.png "upload")

There are **three upload options** for uploading files.
![Upload options](images/directory/new-upload.png "upload options")

1. **File**: Use this option to upload one or more files to any of the existing directories from the local device. Select the directory where the files will be uploaded, drag and drop one or more files from the local device, and click Proceed.
2. **URL**: Use this option to upload a file hosted remotely via its URL. Enter a title for the file to be uploaded from the URL, select the directory to which it is to be uploaded, enter the description for the file, the URL where it is located, and click **Proceed**. 
![Upload from URL](images/directory/upload-from-URL.png "Upload from URL")

3. **Directory**: Use this option to upload a complete directory from the local device to the application. All the files under the directory are uploaded to the application under a new folder created using the source title.
![Upload Directory](images/directory/upload-directory.png "Upload Directory")

### File Upload Guidelines

By default, the application has the following limits for file uploads:

* Each file must be 15MB or smaller. 
* You can upload up to 40 files at once. 
* When uploading a directory, it can contain a maximum of 20 files, with each file not exceeding 15MB.

If you need to increase these limits to meet your specific requirements, please [contact our Support Team for assistance](https://kore.ai/support/).

## Deleting Files and Directories

To delete a complete directory from the application, click the **Actions** and select **Delete**. This will delete the directory and all the files in the directory.

![Delete Directory](images/directory/delete-document-dir.png "Delete Directory")

To delete a specific file from a directory, go to the Directory Details and select the **Delete** action corresponding to the file to be deleted.
![Delete File](images/directory/file-delete.png "Delete File")

Alternatively, you can go to the details page of the file and click the **Delete** button.
![Delete File](images/directory/file-delete-detailspage.png "Delete File")

## Searching for Directories and Files

Use the search bar at the top of the Directory page to look for a specific directory.

![Search Directory](images/directory/search-documents.png "Search Directory")

Similarly to look for a specific file in a particular directory, go to the Directory details and use the search bar at the top.
![Search File](images/directory/search-file.png "Search File")
