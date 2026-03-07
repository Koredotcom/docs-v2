# API Stage

The API Stage for chunk enrichment enables you to connect with any third-party service and dynamically update or enrich content chunks. This is particularly useful when you need to augment chunks with external metadata, perform lookups, or apply additional transformations based on business logic. 

You can invoke any RESTful API during this stage, and the response can be used to enhance the chunk before it proceeds further in the chunk processing pipeline. 


## API Stage Configuration

Use the following properties to configure this stage. 



* **Stage Type:** Set this field to API Stage.
* **Stage Name**: Set a unique name for the stage.
* **Condition**: Define a condition for selecting the documents to be processed using this stage. You can define any number of conditions with the AND operator between the conditions to find the exact set of data to be excluded. For example, if you want to process only the uploaded files content, use the sys_source_name field to define the condition.
* **Outcome**: use this section to provide the details of the service to be used for processing the content. 
  
  **Endpoint**: The URL to which the content should be sent (must be a POST endpoint). It can include chunk-level fields as either path parameters or query parameters. These parameters are dynamically resolved at runtime. 

  To reference a dynamic field in the URL, enclose the field name in double braces  {{<field-name>}}. 
  
  For instance, the following endpoint uses two chunk fields.  [https://api.external.com/metadata/{{chunkTitle}}?type={{](https://api.external.com/metadata/{{doc.id}}?lang={{doc.language)cfs1}}. 
  
  In this example,
    * {{chunkTitle}} is used as a path parameter.
    * {{cfs1}} is used as a query parameter.
  
  **Headers**: Key-value pairs to be sent to the API as headers ( for authentication and other required headers)

  **Request Body**: Content to be sent to the API.  To pass content fields in the request , use the following format **{{field_name}}**. During a request to the API, this is dynamically replaced with the value of the field. For instance, in the following example where a request is sent to Open AI for extracting metadata from the source, {{content}} is replaced with the actual value of the content field for the doc under processing. 
  
  ```json
  {
    "model": "gpt-4o-mini",
    "temperature": 0.3,
    "max_tokens": 650,
    "messages": [
      {
        "role": "system",
        "content": "You are an expert at extracting metadata from a document for augmenting existing data. Extract metadata from the document and return it in a structured format."
      },
      {
        "role": "user",
        "content": "{{content}}"
      }
    ]
  }
  ```

### Testing and Mapping API Response

Click the **Test** button to send a request to the configured API. Enter the values of the context variables or inputs required, if any and click on **Pass Values**. The **Response** tab displays the data returned by the API. 

![alt_text](images/api-stage.png "image_tooltip")


You can map fields from this response to **Search AI schema fields**. Enter the path of the field in the response required to be saved as Source.JSON path and provide the target field name where its values are to be saved. 


### Points to Note:

* Only POST APIs are currently supported.
* Only Sync APIs are currently supported. 
* You can map one or more API response fields to the Search AI schema fields that correspond to the document. 
