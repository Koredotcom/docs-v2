# Attachment Support in User Interactions

Agentic Applications support real-time document sharing during interactions. Users can upload files directly into the chat, allowing agents to analyze and use document content dynamically when generating responses.

The platform handles uploaded files in two ways, depending on the file types:

* Content Extraction - For specific file types, extracts and uses content as context.
* Metadata Storage - For all supported file types, stores file information for reference.

## Content Extraction and Contextual Use

For selected file types, the platform extracts the content and uses it as context to generate accurate and personalized agent responses. This allows the assistant to dynamically understand and respond based on the content of the uploaded file. This feature reduces the manual effort of users and eliminates the need for them to summarize or type out content from documents. It saves time and improves response accuracy. 

**How it works**:

1. Users upload documents using the attachment option.
2. The platform automatically extracts content from supported files.
3. Agents use the extracted content to provide contextually relevant responses.


!!!abstract "Examples"

  When applying for a job through an HR Assistant agent, users can simply upload their resume instead of manually entering personal and professional details. The assistant automatically extracts the necessary information and uses it in the conversation.

## File Metadata extraction

For all supported file types, the platform captures and stores file metadata as **artifacts** in the metadata field of the system memory, sessionMeta. It captures the following metadata fields for each uploaded file.

### Stored Metadata Fields

* fileId: Unique identifier for the uploaded file
* type: Type of data. 
* filename: Original filename as uploaded by the user.
* mimetype: MIME type of the uploaded file.
* isActive: Indicates if the document is applicable for the current conversation.[ Learn More](#file-state-management).
* downloadUrl: Direct access URL for file content. This is a temporary link and is *valid and accessible for 30 days* from the date of upload. 

This metadata is stored in the system memory, sessionMeta, in the artifacts field under the metadata field as shown below. ` `


```json
 "artifacts": [
    {
      "fileId": "f-1558ea9e-xxxxxxxxxxxx-a283-c0bef1dec83a",
      "type": "file",
      "filename": "app-export.json",
      "mimetype": "application/json",
      "isActive": false,
      "downloadUrl": "https://localhost/api/v1/getMediaStream/orgFiles/public?h=dHkwTlA3QmxxxxxxxxxxxxxxxxxxxxLV1Y1dUtrNFV6cU5IdWpycXZPbz0$"
    }
  ]
```


This metadata can be used in *Agent and orchestrator prompts* and *code tools* for further processing. 


### Accessing File Metadata from Artifacts 

#### In Code Tools

**Example**: A user uploads a .csv sales report and needs to assess the data. In this case, the file URL can be accessed in a code tool that uses a custom script to download and analyze the data.

This is a sample code script that retrieves the download URL of a file when only a single file is uploaded.

```javascript
//access the sessionMeta memory store
retrieved = memory.get_content("sessionMeta") 

//access the download URL of the file.
download_url = retrieved["content"]["artifacts"][0]["downloadUrl"] 

// Download the file from the URL and do further processing
```



#### In Prompts

To refer to the uploaded file information in the supervisor and agent prompts, use:


```json
{{memory.sessionMeta.artifacts}}
```



## Supported File formats for Document upload


<table>
  <tr>
   <td><strong>File Formats</strong>
   </td>
   <td><strong>Content Extraction</strong>
   </td>
   <td><strong>URL Generation</strong>
   </td>
  </tr>
  <tr>
   <td>PDF (.pdf)
   </td>
   <td>✅ Yes
   </td>
   <td>✅ Yes
   </td>
  </tr>
  <tr>
   <td>Microsoft Word (.docx)
   </td>
   <td>✅ Yes
   </td>
   <td>✅ Yes
   </td>
  </tr>
  <tr>
   <td>Text files (.txt)
   </td>
   <td>✅ Yes
   </td>
   <td>✅ Yes
   </td>
  </tr>
  <tr>
   <td>JSON files (.json)
   </td>
   <td> ✅Yes
   </td>
   <td>✅ Yes
   </td>
  </tr>
  <tr>
   <td>Spreadsheets (.csv, .xls, .xlsx)
   </td>
   <td>❌ No
   </td>
   <td>✅ Yes
   </td>
  </tr>
  <tr>
   <td>Presentations (.ppt, .pptx)
   </td>
   <td>❌ No
   </td>
   <td>✅ Yes
   </td>
  </tr>
  <tr>
   <td>Web files(.htm, .html)
   </td>
   <td>❌ No
   </td>
   <td>✅ Yes
   </td>
  </tr>
  <tr>
   <td>Images(.gif, .png, .jpg, .jpeg, .bmp)
   </td>
   <td>❌ No
   </td>
   <td>✅ Yes
   </td>
  </tr>
  <tr>
   <td>Rich Text(.rtf)
   </td>
   <td>❌ No
   </td>
   <td>✅ Yes
   </td>
  </tr>
</table>



## Using the Attachment Feature

### In Playground

Use the **attach** option in the chat widget to upload files while testing your application. 

![alt_text](images/attachments/attach-option.png "image_tooltip")


This allows you to upload the files. Refer to [this for file limits](settings/app-configurations.md#attachment-configuration) .


## File State Management

Each file has an associated state with it that indicates whether the content extracted from the uploaded file should be used in the current conversation or not. 

* **Active state**: By default, when a file is uploaded, it is in *active* state. This means the content of the file is eligible for use in the current conversation. 
* **Inactive state**: Uncheck the file in the attachment list to make it *inactive*, which means that the content extracted from the document shouldn't be used for the current conversation. Setting a file to inactive doesn't delete or remove it. The file remains available and can be checked again when required.  

For example, if a user uploads multiple documents but only wants the agent to refer to one of them, he can uncheck the irrelevant files, ensuring only the intended file is used for that interaction.

![alt_text](images/attachments/file-status.png "image_tooltip")



## Important Points

* Attachment Availability: You can attach files at any time during a conversation.  
* Limitations: There is a limit on the number and size of files that can be uploaded. Refer to [this for more info](settings/app-configurations.md). 
* Download URLs: Generated URLs are temporary and expire after 30 days.
* Supported Content:  Only supported for specific file types. Refer to the [table above for supported file formats](#supported-file-formats-for-document-upload).
