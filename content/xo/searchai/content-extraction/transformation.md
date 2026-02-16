# Content Transformation

SearchAI's content transformation process transforms raw extracted text into high-quality data that ensures better searchability, understanding, and usability. This enrichment occurs after the extraction phase, allowing users to enhance the data while maintaining the structural and contextual integrity of the original content. The raw ingested content often requires further processing to make the data accurate, contextual, and useful. Issues such as incomplete metadata, formatting inconsistencies, or missing context can hinder the effectiveness of search and retrieval systems. This process addresses these issues by refining the extracted content.

Content Transformations, immediately after extraction, ensure that the noise and irrelevant information from raw data are removed, and the input to vectorization is clean and optimized for retrieval and analysis. This vectorized data is then given to the AI models for processing, resulting in optimum and accurate results. 

Search AI allows you to add multiple different types of stages to the transformation process to input content. The stages are processed in sequence such that the output of one is the input of the next. The following types of transformation stages are offered via Document Workbench. 
 

1. Field Mapping 
2. Custom Script
3. Exclude Documents
4. LLM Stage
5. API Stage


## Benefits

* **Improved Data Quality**
    Fix errors, standardize fields, and add contextual information to enhance the overall quality of the processed data. High-quality input directly translates to better query results and user experience.
* **Enhanced Control and Customization**
    Adapt the enrichment process via multiple stages to specific business needs, making the tool suitable for diverse industries and applications. 
* **Bulk Transformation**
    Define rules to select all the content on which the transformation is to be applied. This allows users to make changes to the applicable content at once. 

## Example

Consider a scenario where a blog website is being crawled. Each blog page contains the main blog content but also includes additional elements such as:

* Advertisements inviting users to try products.
* References to recent posts.
* Author information, appended at the end of the blog post.

While these elements are important for the website's functionality, they can introduce noise during search operations. For example, references to recent posts may cause irrelevant results when users search through blog content; embedding author information within the main blog content instead of storing it in a separate metadata field reduces the content's structure.

These issues can be resolved through transformations after extraction. 

* Remove Redundant Sections: Add a stage to delete irrelevant parts of the webpage, such as advertisements and recent posts references, ensuring that only the core blog content is processed.
* Map Author Information: Introduce a field mapping stage to extract the author information from the blog content and map it to a new metadata field.

**Note that types of content transformation stages vary depending on the extraction strategy. Refer to the table below to learn more.**

## Transformation Stages and Configuration

Currently, Search AI offers following types of stages for transformation at this step. 

### Field Mapping Stage

This stage is used to add, update, or delete specific fields from the input content. For instance, if some pages are missing a title, you can use this stage to add a relevant title to such pages based on predefined rules or extracted content. This ensures uniformity across all pages, making the content more structured and improving its discoverability during search operations.

To add this stage, provide the following details.

   * **Name**:  Provide a unique name for stage identification.
   * **Type**: Set it to Field Mapping. 
   * **Description**: Describe the purpose of adding this stage. 
   * **Condition**: Define the rules or criteria used to select the content on which the transformation will be applied. The Primary Condition is automatically inherited from the conditions configured during extraction. You can refine this further by adding one or more sub-conditions to filter and target specific content. To define a sub-condition using the following properties.
       * Field Name: Fields of ingested content on which the rule is applied.
       * Operator: Determines the condition to evaluate on the selected field (for example, equals, contains, greater than).
       * Value: Specifies the comparison value for the selected field, based on the chosen operator. 	
   * **Outcome**: The transformation to be performed on the content selected using the above conditions.
       * Action: Action to be taken if the above condition is true. This can take the following values:
           * Set - Sets the given value as the value of the target field.
           * Delete - Deletes the target field.
           * Copy - Copies the value of one field into another.
        * You can define one or more actions to be taken on the selected content.  

### Custom Script Stage

Custom Script Stage offers the flexibility to implement custom changes to the content, allowing you to process the data according to your specific business needs. For example, if you wish to prepend the title of all the content extracted from a particular source, you can write a **JavaScript** to do the same. 
    
Use the following properties to configure this stage.

* **Stage Type:** Set this field to Custom Script
* **Stage Name**: Provide a unique name for the stage.
* **Description**: Describe the purpose of adding this stage. 
* **Condition**: The primary condition used while extraction is automatically applied for enrichment. 
* **Outcome**: Define the outcome of the stage using script. 

For Custom Script stage, include the sub-conditions, if any and the outcome in the same script.

Examples:

```javascript
    // count of the total number of pages in a given file and add it as another field
    int temp_total_pages = 0;
    if(context.file_content_obj != null){
        for (def item: context.file_content_obj) {
            if (item!="") {
                temp_total_pages = temp_total_pages+1;
                }
        }
    }
    context.total_pages = temp_total_pages;
```

```javascript
  // Only work on the Web pages and remove the ratings related section from the html page

  if (context.sys_content_type == "web") { // sub-condition
  context.page_html = context.page_html.replace( /<div[^>]*class=["'][^"']*rating-wrapper[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,'' );
}
```



### Exclude Documents Stage

The **Exclude Stage** in the Document Workbench allows you to **filter out unnecessary or irrelevant content** before it is ingested into Search AI. If a document is not required for search, you can create custom filters at this stage to prevent its ingestion. By excluding irrelevant documents, you can:

* Reduce unnecessary chunk generation
* Improve search accuracy by minimizing the risk of generating incorrect or irrelevant results.
* Enhance indexing efficiency by focusing on valuable and relevant content.

Define filters for the documents to be excluded using the Primary Conditions. 

* Field - Select the document field on which the condition should be applied (e.g., creation date, file type).
* Operator - Choose the comparison operator (e.g., greater than, less than, equals).
* Value - Specify the value that the selected field should be compared against.

For instance, If you want to exclude documents created before a specific date (e.g., outdated files that may not be relevant for users), you can:

* Select **Created On** as the field.
* Choose **less than** as the operator.
* Enter the **cutoff date** as the value.

### API Stage

This stage allows you to invoke an external API to modify, enrich, or analyze content during the transformation stage. When the API Stage is configured, the system sends the content to the specified external API. The transformed content received in the API response can be saved in any content field for further processing or indexing.

This can be particularly useful for enriching documents with metadata via custom models or using external summarization or translation pipelines to add a summary of the content. 


**Configuration**

**Endpoint**: The URL to which the content should be sent (must be a POST endpoint). It can include chunk-level fields as either path parameters or query parameters. These parameters are dynamically resolved at runtime. 

To reference a dynamic field in the URL, enclose the field name in double braces  {{<field-name>}}. 
  
For instance, the following endpoint uses two chunk fields.  [https://api.external.com/metadata/{{chunkTitle}}?type={{](https://api.external.com/metadata/{{doc.id}}?lang={{doc.language)cfs1}}. 
  
In this example,

  * {{chunkTitle}} is used as a path parameter.
  * {{cfs1}} is used as a query parameter.
  
**Headers**: Key-value pairs to be sent to the API as headers ( for authentication and other required headers)

**Request Body**: Content to be sent to the API.  To pass content fields in the request , use the following format **{{field_name}}**. During a request to the API, this is dynamically replaced with the value of the field. For instance, in the following example where a request is sent to Open AI for extracting metadata from the source, {{content}} is replaced with the actual value of the content field for the doc under processing. 

```
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
**Testing and Mapping API Response**

Click the **Test** button to send a request to the configured API. The **Response** tab displays the data returned by the API. You can map fields from this response to **Search AI schema fields**.

Refer to the [default field mappings documentation] for a list of fields extracted from the source (based on the standard Search AI schema) and available for mapping.

![alt_text](images/map-fields.png "image_tooltip")


**Points to Note**

* Only POST APIs are currently supported.
* Only Sync APIs are currently supported. 
* You can map one or more API response fields to the Search AI schema fields corresponding to the doc. 

### LLM Stage 

This stage allows you to leverage the capabilities of an external LLM to refine, update, or enrich the ingested content. This can include tasks such as improving readability, summarizing lengthy documents, adding missing context, or reformatting text to align with organizational standards. For example, when a product manual is ingested, an  LLM Stage can be configured to generate a simplified summary or FAQs using the manual content, making the content readily available for end users while still preserving the original technical details.


#### Prerequisites

* [Set up the required LLM](../../generative-ai-tools/models-library.md).
* [Create a custom prompt](../../generative-ai-tools/prompts-library.md) for the feature ‘Transform Documents with LLM’.
* In the[ Gen AI features page](../../generative-ai-tools/genai-features-searchai.md), enable the feature, ‘Transform Documents with LLM’. 

#### Configuration

* **LLM**: Select the LLM to be used for document processing. 
* **Prompt**: Select the custom prompt that will instruct the LLM on how to process the content. 
* **Target Field**: Select the field where the enriched content, received as a response from the LLM, will be stored. 


## Stages available for different Extraction Strategies

<table>
  <tr>
   <td>
   </td>
   <td>Field Mapping </td>
   <td>Custom Script</td>
   <td>Exclude Documents</td>
   <td>API Stage  </td>
   <td>LLM Stage </td>
  </tr>
  <tr>
   <td>Text Extraction  </td>
   <td>Yes  </td>
   <td>Yes  </td>
   <td>Yes  </td>
   <td>Yes  </td>
   <td>Yes  </td>
  </tr>
  <tr>
   <td>Advanced HTML Extraction  </td>
   <td>Yes   </td>
   <td>Yes   </td>
   <td>Yes   </td>
   <td>Yes   </td>
   <td>Yes   </td>
  </tr>
  <tr>
   <td>Layout Aware Extraction  </td>
   <td>NA   </td>
   <td>NA   </td>
   <td>NA   </td>
   <td>NA   </td>
   <td>NA   </td>
  </tr>
  <tr>
   <td>Markdown Extraction

   </td>
   <td>NA 

   </td>
   <td>NA 

   </td>
   <td>NA

   </td>
   <td>NA
   </td>
    <td>NA   </td>
  </tr>
  <tr>
   <td>Image-based Document Extraction

   </td>
   <td>NA

   </td>
   <td>NA 

   </td>
   <td>NA

   </td>
   <td>NA

   </td><td>NA

   </td>
  </tr>
</table>
  
## Adding a New Stage

To add a new stage, click the **+New Stage** link on the left, configure the stage as required and click on **Save**.  By default, when a stage is added, it is enabled. Hence, the transformation process through the stage happens on the next application training. 

![alt_text](./images/add-stage.png "image_tooltip")

## Testing the Stage

You can test content transformation logic within the **Document Workbench** using the **Simulate** option. This opens a simulator that allows you to validate any of the configured transformation stages. This simulation helps verify and debug stage transformations before applying them to production data.

To begin testing:

* Select the specific stage you want to test.
* Choose the number of documents you wish to run the test on.


Once executed, the transformed content is displayed in the **Chunk Viewer**. The output is a JSON object, named after the corresponding transformation stage. If any errors occur during the transformation process, they will be captured and listed under the simulate_errors object within the JSON output.


## Enabling/Disabling a Stage

To enable or disable a stage, click on the ellipsis icon on the right of the stage, and select the enable or disable option. When a stage is disabled, the output of the previous stage in the sequence is directly sent as input to the next stage without deleting the current stage. This can be used for testing or troubleshooting the content transformation process. 

![alt_text](./images/disable-stage.png "image_tooltip")

## Deleting a Stage

Deleting a stage permanently deletes it from the application. To delete a stage, click the ellipsis icon and select the Delete option. 

![alt_text](./images/delete-stage.png "image_tooltip")

## Sequencing the Stages

The content is processed in the order of the stages. The processed document at the end of one stage is given as input to the next stage. Hence, the outcome of the stages is affected by the sequence in which the stages are designed. To change the order of execution of the stages, use the draggable dots icon to move and place the stage as required.
