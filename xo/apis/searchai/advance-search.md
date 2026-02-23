--8<-- "includes/searchai-api-back-link.md"

# Advance Search API - V2

This API enables you to retrieve answers and search results related to a specific query. By default, the API returns answers. Along with the search results and answers, the API also provides details about the chunks used and metadata information associated with those chunks.  


<table>
  <tr>
   <td>Method
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>https://{{host}}/api/public/bot/&lt;AppId>/search/v2/advanced-search
   </td>
  </tr>
  <tr>
   <td>Content-Type
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td>Authorization
   </td>
   <td>auth: &lt;JWT Token>
   </td>
  </tr>
  <tr>
   <td>API Scope
   </td>
   <td>Answer Generation
   </td>
  </tr>
</table>

## Query Parameters


<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>AppID
   </td>
   <td>Provide your application ID here. To view your App ID, go to the <strong>Dev Tools </strong>under <strong>App Settings. </strong>You can view the AppID under the API scopes.
   </td>
   <td>Yes
   </td>
  </tr>
</table>

## Request Parameters


<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>query
   </td>
   <td>Query string for search. 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>answerSearch
   </td>
   <td>This field can be true or false. When it is set to true, the response includes an answer to the query. 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>searchResults
   </td>
   <td>This field can be true or false. When it is set to true, the response includes search results corresponding to the query. 
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>metaFilters
   </td>
  
   <td>This parameter can be used to define rules to filter out the results from the Answer Index before using them for generating the answer. This parameter takes an array of rules with conditions. For instance, to use only web pages to answer a query, set the filters as shown below.
   
  <pre>
    "metaFilters": [
        {
        "condition": "AND",
        "rules": [
            {
            "fieldName": "sourceType",
            "fieldValue": [
                "web"
            ],
            "operator": "contains"
            }]
        }]
    </pre>
   </td> <td>No
   </td>
  </tr>

  <tr>
   <td>isFacetsEnable
   </td>
   <td>This field can be true or false. When it is set to true, the facets configured in the Search AI application are enabled and applicable to the response. 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>customData
   </td>
   <td>Custom data to be sent in the request. This data can be used to further process or filter the search results in the application. This can also be used to pass previous conversations as context or to set user context like user identity, location, etc. 
   </td>
   <td>No
   </td>
  </tr>
   <tr>
   <td>raclEntityIds</td>
  
   <td>Array of RACL values. This field specifies the <strong>RACL (Role-Based Access Control List)</strong> values to be used to determine accessible content. It can include both <strong>user identities</strong> (for example, email addresses) and <strong>permission entity IDs </strong>(for example, user groups).
   
   When raclEntityIds is passed in the API request, Search AI exclusively uses the provided values in raclEntityIds to identify accessible content. No additional mapping between user identities and permission entities is performed to resolve content accessibility. For each value in raclEntityIds, only the content where the sys_racl field contains a matching value will be accessible in the response. For instance,
  
  <pre>
  raclEntityIds: [
    “123234”, // Permission Entity ID
    “[user@example.com](mailto:user@example.com)” // User Identity
  ]</pre>
  
  <ul>
  <li>Content with a sys_racl field that includes either "123234" or "user@example.com" will be accessible.</li>
  <li> The API won't perform additional lookups to identify content accessible to other related permission entities for "user@example.com."</li>
  </ul>
  This parameter enables granular control over content accessibility by explicitly specifying allowed entities. It ensures strict adherence to the provided values without relying on broader permission mappings.

 When raclEntityIds is provided, the system prioritizes it over any keys configured through the RACL Resolver API and ignores those configurations.


   </td>
    <td>No </td>
  </tr>

  <tr>
  <td>dynamicPromptSelection </td>
  <td>Specifies the prompt and model to be used to generate the answer in this API call. If not provided, the API will use the default model and prompt configured at the application level. This field accepts the following three parameters:
  
  <ul>
  <li><strong>integrationName:</strong> Specifies the name of the GenAI provider. Supported values include:
    <ul>
      <li>"openai"</li>
      <li>"azure"</li>
      <li>"korexo"</li>
      <li>custom integration name (must exactly match the name defined in the configuration)</li>
    </ul>
  </li>
  <li><strong>model:</strong> Name of the specific LLM model to be used for answer generation. This must match the model name defined in the GenAI configuration exactly.</li>
  <li><strong>promptName:</strong> Name of the prompt to be used to generate the answer. Use "Default" to apply the default prompt configured in the application.</li>
  </ul>

  <p><strong>Example:</strong></p>
  <pre>
  "dynamicPromptSelection" : {
    "integrationName" : "openai",
    "model" : "GPT-3.5
  "promptName" : "testprompt"
  }
  </pre>

  <p><strong>Note:</strong></p>
  <ul>
    <li>This field is optional. If omitted, the system uses the default model and prompt configured at the application level.</li>
    <li>All values, integrationName, model, and promptName, are <strong>case sensitive</strong>.</li>
    <li>Ensure that the specified model and prompt are correctly <strong>configured and published under GenAI settings.</strong></li>
    <li>When using a <strong>custom LLM</strong>, the integrationName must match the exact name defined in the custom integration settings.</li>
    <li>To use the <strong>default prompt configured in the application</strong>, set promptName as “Default.”</li>
    <li>Since you can't add a new prompt for Kore XO GPT, set prompt=”Default”.</li>
    <li>For Kore XO GPT:
      <ul>
        <li>The model must be set to "XO-GPT."</li>
        <li>The prompt must be "Default" (custom prompts aren't supported).</li>
      </ul>
    </li>
  </ul>
  </td>
  <td> No </td>
  </tr>
   <tr>
   <td> includeMetaDataAnswers</td>
<td>This field can fetch specific chunk metadata fields in the response along with the default fields. The requested fields are returned as part of the graph_answer field in the response. If a metadata field listed in this object doesn't exist, the field is returned in the response with a null value. For instance, to fetch the author name(a metadata field) and subtitle(a custom field) additionally from the chunks, include the following in the request payload. 
<pre>
"IncludeMetaDataAnswers": ["chunkMeta.author", “subtitle”]. 
</pre>
Note that for metadata fields, use the field name along with the root name, such as <pre>chunkMeta.x</pre>, as shown in the above example.
</td>
<td>No</td>
</tr>
<tr>
   <td> includeChunksInResponse </td>
<td>This can be set to true or false. When set to true, the response will also include a list of qualified chunks. The chunk information is stored in the response's chunk_result field.</td>
<td>No</td>


   </tr>
</table>

**Sample Request**

```json
{
    "query": "History_of_Data_Science",
    "answerSearch": true,
    "searchResults": true,
    "isFacetsEnable": true
} 
```


## Response

The response to the API is in JSON format. Some key fields in the response, which are part of the `template` field, are listed below.

* **results**: This field contains the details of the search results. The results are grouped by source type as the key value. The chunks from a document are grouped together. For instance, if the relevant chunks include 3 from one document in Google Drive and one from a file, the results would be listed as shown below. 

```json
"results": {
  "googleDrive": {
    "data": [
      {
        "docId": "fc-4f2ef8b5-e05d-555a-8fb9-dc8a1ceb514b",
        "recordTitle": "Copy of Microsoft.pdf",
        "recordUrl": "https://drive.google.com/file/d/1vEZTjr9VtQxxxxxxxxxxxxxxxxxxxxxxTGP/view?usp=drivesdk",
        "chunkResults": [
          "chk-f6bf3fb8-5adf-427e-b97a-0893af7be94f",
          "chk-864bf33b-bfad-4c08-9b93-bff1a663ae07",
          "chk-6f949cdb-33c3-446b-8a20-9cdd7cdab9a4"
        ]
      }
    ],
    "doc_count": 1
  },
  "file": {
    "data": [
      {
        "docId": "fc-e1d1181b-4b23-58df-8346-e4c728259c4d",
        "recordTitle": "SampleFile_20230130_0000.pdf",
        "recordUrl": "https://domain.com/api/getMediaStream/******/f-7ead54e7-f34b-5858-bb26-b6295f39fa4e.pdf?n=2345813963&s=IjZZeXA4M1ZzZTVCT0k3Z3NMxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdnRVU9Ig$$",
        "chunkResults": [
          "chk-84e2c8ca-dc0f-4372-b3ff-36368ab4dea3"
        ]
      }
    ],
    "doc_count": 1
  }
}
```

* **answer_details**: This field contains the answer to the query along with metadata about the answer. 

```json
"answer_details": {
  "query": "Microsoft",
  "requestType": "answer_search",
  "response": {
    "answer": "Microsoft is a multinational technology company that has been in operation since 1975. The company is known for its contributions to the field of technology, particularly in the areas of software, services, and hardware. Here are some key points about Microsoft:  \n1. Microsoft offers a range of products and services, including operating systems, productivity software, servers, business solution software, development tools, and video games.  \n2. The company is committed to providing cloud-based solutions and consulting services for its customers.  \n3. Microsoft's business also encompasses the design and sale of smart devices.  \n4. The company's stock is available for repurchase under its stock repurchase program, with $8.7 billion allocated for this purpose as of June 30, 2021.  \n5. Microsoft's dividend payout has been steadily increasing over time, with the company aiming to grow its dividend payment.  \n6. According to the company's 10K report, as of June 30, 2021, $8.7 billion of stock is available for repurchase under the company's stock repurchase program.  \n7. Microsoft's GAAP earnings per share for 2022 are estimated to be $9.52.  \n8. The company's products include operating systems, productivity applications, servers, business solution applications, software development tools, and video games.  \n9. Microsoft's business also includes the design and sale of smart devices.  \n10. The company's stock is listed on the NASDAQ stock exchange under the ticker symbol MSFT.  \n11. Microsoft's revenue for 2022 is estimated to be around $250 billion.  \n12. The company's net income for 2022 is estimated to be around $50 billion.  \n13. Microsoft's market capitalization is estimated to be around $2 trillion.  \n14. The company has a strong presence in the technology industry and is considered one of the leading companies in the field.  \n15. Microsoft's products and services are widely used by individuals, businesses, and organizations around the world.  \n16. The company has a large and diverse workforce, with employees located in many countries around the globe.  \n17. Microsoft has a strong commitment to innovation and research, and invests heavily in these areas.  \n18. The company has a significant presence in the fields of artificial intelligence, machine learning, and cloud computing.  \n19. Microsoft has a strong focus on sustainability and corporate social responsibility.  \n20. The company has a large and loyal customer base, with",
    "answer_payload": {
      "center_panel": {
        "type": "citation_snippet",
        "data": [
          {
            "snippet_title": "",
            "snippet_content": [
              {
                "answer_fragment": "Microsoft is a multinational technology company that has been in operation since 1975. The company is known for its contributions to the field of technology, particularly in the areas of software, services, and hardware. Here are some key points about Microsoft:  \n1. Microsoft offers a range of products and services, including operating systems, productivity software, servers, business solution software, development tools, and video games.  \n2. The company is committed to providing cloud-based solutions and consulting services for its customers.  \n3. Microsoft's business also encompasses the design and sale of smart devices.  \n4. The company's stock is available for repurchase under its stock repurchase program, with $8.7 billion allocated for this purpose as of June 30, 2021.  \n5. Microsoft's dividend payout has been steadily increasing over time, with the company aiming to grow its dividend payment.  \n6. According to the company's 10K report, as of June 30, 2021, $8.7 billion of stock is available for repurchase under the company's stock repurchase program.  \n7. Microsoft's GAAP earnings per share for 2022 are estimated to be $9.52.  \n8. The company's products include operating systems, productivity applications, servers, business solution applications, software development tools, and video games.  \n9. Microsoft's business also includes the design and sale of smart devices.  \n10. The company's stock is listed on the NASDAQ stock exchange under the ticker symbol MSFT.  \n11. Microsoft's revenue for 2022 is estimated to be around $250 billion.  \n12. The company's net income for 2022 is estimated to be around $50 billion.  \n13. Microsoft's market capitalization is estimated to be around $2 trillion.  \n14. The company has a strong presence in the technology industry and is considered one of the leading companies in the field.  \n15. Microsoft's products and services are widely used by individuals, businesses, and organizations around the world.  \n16. The company has a large and diverse workforce, with employees located in many countries around the globe.  \n17. Microsoft has a strong commitment to innovation and research, and invests heavily in these areas.  \n18. The company has a significant presence in the fields of artificial intelligence, machine learning, and cloud computing.  \n19. Microsoft has a strong focus on sustainability and corporate social responsibility.  \n20. The company has a large and loyal customer base, with",
                "sources": [
                  {
                    "title": "",
                    "url": "",
                    "chunk_id": "",
                    "doc_id": "",
                    "source_id": "",
                    "source_type": "",
                    "image_url": ""
                  }
                ]
              }
            ],
            "snippet_type": "generative_model",
            "snippet_model_name": "",
            "meta_info": {
              
            },
            "timeTaken": "8368.00ms",
            "message": "Presented Answer",
            "isPresentedAnswer": true,
            "score": "0.0000%"
          }
        ]
      }
    }
  },
  "resultType": "Answer",
  "indexPipelineId": "fip-8918ab9c-522d-5802-add6-1ee06751490f",
  "searchIndexId": "sidx-6dab30f2-450c-5272-8c5f-33ea7d96cc8f",
  "searchRequestId": "fsh-49d40f77-3a8d-5747-91dd-4d1aa43a293d",
  "queryPipelineId": "fqp-2641bfc8-2b02-5c6b-9335-d3076d7fbaf7"
}
```


* **chunk_result**: This field contains the array of all the chunks used for answers or search results. Each item in the array contains the details of the chunks and their metadata. This information can be used for reference to the chunks using the chunk id. 

```json
"chunk_result": [
  {
    "_index": "answer_index",
    "_type": "settings",
    "_id": "2pxA1ZQBY6hZN8s7ElhV",
    "_score": 2.9723904,
    "_ignored": [
      "chunkText.keyword"
    ],
    "_source": {
      "sourceId": "fs-bbb11259-a8a4-5863-90c9-179151592cd3",
      "pageNumber": 1,
      "docId": "fc-4f2ef8b5-e05d-555a-8fb9-dc8a1ceb514b",
      "lastSyncAt": "2025-02-04T08:11:30.870Z",
      "doc_updated_by_name": "Search Assist",
      "searchIndexId": "sidx-6dab30f2-450c-5272-8c5f-33ea7d96cc8f",
      "type": "pdf",
      "chunkId": "chk-f6bf3fb8-5adf-427e-b97a-0893af7be94f",
      "createdOn": "2025-02-05T08:35:29.652Z",
      "sourceUrl": "https://drive.google.com/file/d/1vEZTjr9VtQrFePRCJGimfX5cs5y7ITGP/view?usp=drivesdk",
      "chunkText": [
        "17.2%  8.6%  18.1%    12 Month Performance  Company Description    Founded  in  1975,  <span class=\"highlightText\">Microsoft</span>  is  dedicated  to  providing  customers with  cloud­based  solutions  and consulting services for software, services, and  platforms.8    Microsoft&#x27;s  products  include  operating  systems,  productivity  applications,  servers,  business  solution  applications,  software  development  tools,  and  video  games.  In  addition, Microsoft&#x27;s  business also includes the design and sale of smart  devices.8    33.6   47.1   24.6   45.3   20.2   46.7   35.1   20.6 24.8   P&#x2F;E ROE EV&#x2F;EBITDA   MSFT Industry Sector   ­10%   0%   10%   20%   30%   40%   50%   N D J F M A M J J A S O   MSFT S&amp;P 500   Source: FactSet    Source: Yahoo! Finance"
      ],
      "extractionMethodType": "token",
      "doc_created_on": "2025-01-10T15:55:08.060Z",
      "extractionStrategy": "Strategy3",
      "recordTitle": "Copy of Microsoft.pdf",
      "sys_content_type": "googleDrive",
      "sys_source_name": "gdrive",
      "doc_path": [
        "1WwUhdGPqWnQgPgKI_xpa9Ts_pjK1ijOs"
      ],
      "recordUrl": "https://drive.google.com/file/d/1vEZTxxxxxxxxxxxxxxxxxs5y7ITGP/view?usp=drivesdk",
      "updatedOn": "2025-02-05T08:35:29.652Z",
      "sourceAcl": [
        "*"
      ],
      "chunkType": "Text",
      "doc_id": "1vEZTjr9VtQrFePRCJGimfX5cs5y7ITGP",
      "doc_updated_on": "2025-01-10T15:55:08.060Z",
      "cfs1": "test value",
      "sys_file_type": "pdf",
      "createdBy": "u-fec9538c-98b8-5503-a2ed-679de486e3d9",
      "sourceType": "googleDrive",
      "extractionMethod": "text",
      "sourceName": "gdrive",
      "chunkQualified": true,
      "score": 2.9723904,
      "sentToLLM": true,
      "usedInAnswer": false,
      "chunk_id": "chk-f6bf3fb8-5adf-427e-b97a-0893af7be94f"
    }
  },
  {
    "_index": "answer_index",
    "_type": "settings",
    "_id": "4jtA1ZQBELb8Ef94Fsof",
    "_score": 2.968822,
    "_ignored": [
      "chunkText.keyword"
    ],
    "_source": {
      "sourceId": "fs-bbb11259-a8a4-5863-90c9-179151592cd3",
      "pageNumber": 13,
      "docId": "fc-c96dc94c-0c75-577a-9ba5-4eac363ba05e",
      "lastSyncAt": "2025-02-04T08:11:30.870Z",
      "doc_updated_by_name": "Search Assist",
      "searchIndexId": "sidx-6dab30f2-450c-5272-8c5f-33ea7d96cc8f",
      "type": "pdf",
      "chunkId": "chk-2f50e2c3-f332-4416-b22b-7c260cfd1c4a",
      "createdOn": "2025-02-05T08:35:28.883Z",
      "sourceUrl": "https://drive.google.com/file/d/1KSixxxxxxxxxxxxxx2fS3uSK9R5L/view?usp=drivesdk",
      "chunkText": [
        "Page\t13    Source: Henry Fund Model1    <span class=\"highlightText\">Microsoft</span>  has  continued  to  grow  its  dividend  payout  steadily in the past. As it released its first quarter earnings  for fiscal 2022, we used the first quarter dividend times 4  to forecast the annual dividend for the current fiscal year.  Microsoft&#x27;s dividend increases fluctuate between 0.12 and  0.24, and we took the more frequently occurring value of  0.20 for future dividend increases. See the chart below for  a forecast of the dividend.1    Source: Henry Fund Model1    We learned from Microsoft&#x27;s 10K report that as of June 30,  2021, $8.7 billion of stock is available for repurchase under  the company&#x27;s stock repurchase program. The repurchase  program  is subject  to  liquidity needs, market, regulatory requirements,  and other  factors. As  shown  in  the  chart  below, we  followed the company&#x27;s guidance amount  for  the repurchase forecast.    Source: Henry Fund Model1    According to our model, <span class=\"highlightText\">Microsoft</span> Corp. has 2022 GAAP  earnings  per  share  of  $9.52, "
      ],
      "extractionMethodType": "token",
      "doc_created_on": "2024-06-26T11:49:23.321Z",
      "extractionStrategy": "Strategy3",
      "recordTitle": "Microsoft.pdf",
      "sys_content_type": "googleDrive",
      "sys_source_name": "gdrive",
      "doc_path": [
        "0APDb_kca5iWJUk9PVA"
      ],
      "recordUrl": "https://drive.google.com/file/d/1KSxxxxxxxxxxxxxxxxxxxxSK9R5L/view?usp=drivesdk",
      "updatedOn": "2025-02-05T08:35:28.883Z",
      "sourceAcl": [
        "*"
      ],
      "chunkType": "Text",
      "doc_id": "1KSitTWrY9iBIJT3yD9P2k2fS3uSK9R5L",
      "doc_updated_on": "2024-11-25T14:03:09.256Z",
      "cfs1": "Sample Value",
      "sys_file_type": "pdf",
      "createdBy": "u-fec9538c-98b8-5503-a2ed-679de486e3d9",
      "sourceType": "googleDrive",
      "extractionMethod": "text",
      "sourceName": "gdrive",
      "chunkQualified": true,
      "score": 2.968822,
      "sentToLLM": true,
      "usedInAnswer": false,
      "chunk_id": "chk-2f50e2c3-f332-4416-b22b-7c260cfd1c4a"
    }
  }
```


* **facets**: This field contains information about the filters configured on the UI. Corresponding to each unique value of the selected field in a filter, a bucket is created. Each bucket has a key value that identifies its contents, along with a count of the total chunks and total documents associated with that bucket. For example, if a filter is applied to the field "createdBy," buckets will be generated containing the unique values of this field. 

```json
"facets": [
  {
    "fieldName": "createdBy",
    "multiselect": false,
    "name": "Created By",
    "subtype": "value",
    "buckets": [
      {
        "key": "u-fec9538c-xxxx-xxxx-xxxx-679de486e3d9",
        "chunk_count": 240,
        "doc_count": 14
      }, 
      {
        "key": "u-fec9538c-xxxx-xxxx-xxxx-679de34323ed",
        "chunk_count": 100,
        "doc_count": 4
      }

    ]
  }]
```

* **tabFacet**: This field contains the content corresponding to the static filter for creating tabs. Each bucket corresponds to a unique value of the field used for creating the filter. For example, if the field `sourceType` is used to create tabs, the response might look like this when the search results include three different sources.

```json
"tabFacet": {
            "fieldName": "sourceType",
            "buckets": [
                {
                    "key": "file",
                    "name": "Files",
                    "chunk_count": 347,
                    "doc_count": 7
                },
                {
                    "key": "googleDrive",
                    "name": "Google Drive",
                    "chunk_count": 168,
                    "doc_count": 3
                },
                {
                    "key": "web",
                    "name": "Web Results",
                    "chunk_count": 44,
                    "doc_count": 10
                }
            ]
        },
```
Additionally, the response also includes the following fields, not within the template field.

* **llmResponseTime**: This field records the time taken(in milliseconds) by the language model to generate the response (in case of Generative Answers). 
* **retrievalResponseTime**: This field records the time taken(in milliseconds) by Search AI to retrieve the relevant chunks and process them.

## Example of Using Custom Data Request parameter

**Example 1. To pass user information**
```json
  "customData": {
        "userContext": {
              "userName": "John",
              "userId": "john.smith@example.com",
              "emailId": "john.smith@example.com"
            }
    }
```

**Example 2. To pass user location**

```json
  "customData": {
    "userContext": {
    "location": "Germany"
      }
  }
```

**Example 3. To pass the previous conversation as context to the Query Rephrasing Agent.**

```json
  "customData": {
    "previousConversation": [
    {
    "query": "What is the leave policy for America?",
    "answer": "The leave policy in the U.S. varies by employer, but the Family and Medical Leave Act (FMLA) allows eligible employees to take up to 12 weeks of unpaid leave for certain family and medical reasons. Paid leave policies depend on the employer."
    },
    {
    "query": "How do I reset my company email password?",
    "answer": "You can reset your company email password by visiting the IT support portal and selecting 'Forgot Password.' Follow the instructions to reset your password. If you need further assistance, contact the IT helpdesk."
    }]
  }
```
