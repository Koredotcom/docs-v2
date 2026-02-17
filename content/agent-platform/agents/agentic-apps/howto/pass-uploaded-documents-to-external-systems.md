# Pass Files Uploaded By Users to External Services or LLMs

This guide explains how to work with files uploaded by users in an Agentic App, either through the Playground or APIs, and how to pass them to an external model for further processing or as context. 

## Overview

When users upload documents to the agent, the Platform stores them and makes the metadata of the files available in the system memory, sessionMeta. This enables tools to access the uploaded files and pass on the file URL and metadata to upstream systems or the data stores. 


## How It Works

1. Users upload documents to the the Platform. Files can be uploaded via the Agentic App Playground or programmatically using APIs.
2. The Platform handles uploaded files in two ways, depending on the file types: 
    1. **Content Extraction** - [For specific file types](../attachment-support.md#supported-file-formats-for-document-upload), the platform extracts the content and uses it as context.
    2. **Metadata Storage** - [For all supported file types](../attachment-support.md#supported-file-formats-for-document-upload), the platform captures and stores file metadata as artifacts in the metadata field of the system memory, sessionMeta. It captures the following metadata fields for each uploaded file.
        * fileId: Unique identifier for the uploaded file
        * type: Type of data.
        * filename: Original filename as uploaded by the user.
        * mimetype: MIME type of the uploaded file.
        * isActive: Indicates if the document is applicable for the current conversation. [Learn more](../attachment-support.md#file-state-management).
        * downloadUrl: Direct access URL for file content. This is a temporary link and is **valid and accessible for 30 days** from the date of upload.
3. The metadata stored in the system memory can be accessed in agent and supervisor prompts or code tools. From thereon, it can be passed to third-party services for further processing as per the use cases.  [Learn more](../attachment-support.md#file-metadata-extraction).


## Accessing and Using Uploaded Files

1. Access the Artifacts from the system memory and get the metadata of the required document as follows.

    ```{{memory.sessionMeta.artifacts}}```


    For example, to access the downloadURL of a file (when only a single file is uploaded), use the following syntax in prompts. 


    ```{{memory.sessionMeta.artifacts[0].downloadUrl}}```

2. Download the file using the *downloadUrl* field and retrieve the required information from it. Alternatively, you can also pass on the URL to a third-party service to take further actions using the file. 


## Sample Use Case

A user uploads a document for an insurance claim. The insurance provider requires the document for verification and future reference. In this case, the Platform sends the URL of the file to the insurance provider, who can download the file and use it as required.  

1. User uploads the supporting documents for the insurance claim. 
2. The assistant uploads the file and stores its metadata along with the downloadable URL in the system memory. 
3. A tool shares file metadata and download URL with the client’s insurance system (a third-party system/service). 
4. The third-party service downloads the file and processes or stores it for future reference.
5. The assistant presents the confirmation to the user that the document was successfully shared with the insurer. 
