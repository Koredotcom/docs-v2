--8<-- "includes/searchai-api-back-link.md"

# Answer Generation API

This API allows you to fetch answers to a query from SearchAI corresponding to the input query and the meta filters sent in the request body. Additionally, this API also returns debug information about the qualified chunks used to generate answers.

| **Method**       | POST |
|-------------------|------|
| **Endpoint**      | `https://{{host}}/api/public/stream/{{AppID}}/advancedSearch` |
| **Content Type**  | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**     | Answer Generation |


## Query Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
  </tr>
  <tr>
   <td>App ID
   </td>
   <td>Required
   </td>
   <td>Unique Identifier of your application. To view your App ID, go to the <strong>Dev Tools</strong> under <strong>App Settings</strong>. You can view the AppID under the API scopes.

   </td>
  </tr>
</table>

## Sample Request

```
curl --location 'https://platform.kore.ai/api/public/stream/st-3beea617-cfd5-5224-b70b-656c4eef768e/advancedSearch' \
--header 'auth: <your-auth-key>' \
--header 'Content-Type: application/json' \
--data '{
 "query": "Info on Conversational AI",
 "metaFilters":  [{
  "condition": "AND",
  "rules": [
    {
      "fieldName": "sourceType",
      "fieldValue": [
        "file"
      ],
      "operator": "contains"
    }
  ]
}]
}'
```



## Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>query
   </td>
   <td>Yes
   </td>
   <td>Query string for search
   </td>
  </tr>
  <tr>
   <td>metaFilters
   </td>
   <td>No
   </td>
   <td>This parameter can be used to define rules to filter out the results from the Answer Index before using them for generating the answer. This parameter takes an array of rules with conditions. For instance, to use only web pages to answer a query, set the filters as shown below.
   
  <pre>
   <code>
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
    </code>
   </td>
  </tr>
   <tr>
   <td>answerSearch
   </td>
   <td>No
   </td>
   <td>This can be set to true or false. When set to ‘true’, the response will include answers. Conversely, when set to ‘false’, the response will omit the answer to the query. However, you can still use the includeChunksInResponse field to see the qualified chunks in the response. By default, it's set to true.
   </td>
  </tr>
    <tr>
   <td>includeChunksInResponse</td>
   <td>No</td>
   <td>This can be set to true or false. When set to true, the response will also include a list of qualified chunks along with other parameters. The chunk information is stored in the response's chunk_result field.</td>
  </tr>
  <tr>
   <td>IncludeMetaDataAnswers</td>
   <td>No </td>
   <td>This field can fetch specific chunk metadata fields in the response along with the default fields. The requested fields are returned as part of the <b>graph_answer</b> field in the response. If a metadata field listed in this object doesn't exist, the field is returned in the response with a null value.
   
   For instance, to fetch the author name(a metadata field) and subtitle(a custom field) additionally from the chunks, include the following in the request payload. 
      
   <pre>
   "IncludeMetaDataAnswers": ["chunkMeta.author", “subtitle”]. 
   </pre>
   Note that for metadata fields, use the field name along with the root name, such as <pre>chunkMeta.x</pre>, as shown in the above example. 

   </td>
  </tr>
  <tr>
   <td>raclEntityIds</td>
   <td>No </td>
   <td>Array of RACL values

This field specifies the <strong>RACL (Role-Based Access Control List)</strong> values to be used to determine accessible content. It can include both <strong>user identities</strong> (for example, email addresses) and <strong>permission entity IDs </strong>(for example, user groups).

When raclEntityIds is passed in the API request, Search AI exclusively uses the provided values in raclEntityIds to identify accessible content. No additional mapping between user identities and permission entities is performed to resolve content accessibility. For each value in raclEntityIds, only the content where the sys_racl field contains a matching value will be accessible in the response.

For instance,

<pre>
raclEntityIds: [

“123234”, // Permission Entity ID
“user@example.com” // User Identity

]</pre>

<ul>
<li>Content with a sys_racl field that includes either "123234" or "user@example.com" will be accessible.</li>
<li> The API will not perform additional lookups to identify content accessible to other related permission entities for "user@example.com."</li>
</ul>
This parameter enables granular control over content accessibility by explicitly specifying allowed entities. It ensures strict adherence to the provided values without relying on broader permission mappings.

The raclEntityIds parameter takes precedence over any keys configured through the RACL Resolver API. If raclEntityIds is provided, it will be used exclusively, and any configuration from the RACL Resolver API will be ignored.


   </td>
  </tr>

  <tr>
   <td>customData</td>
   <td>No </td>
   <td>Custom data to be sent in the request. This data can be used to further process or filter the search results in the application. This can also be used to pass previous conversations as context or to set user context like user identity, location, etc. Refer to [the following section](#example-of-using-custom-data-request-parameter) for examples on how to use custom data.
   </td>
  </tr>
  <tr>
  <td>dynamicPromptSelection </td><td> No </td>
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
        <li>The model must be set to "XO-GPT".</li>
        <li>The prompt must be "Default" (custom prompts aren't supported).</li>
      </ul>
    </li>
  </ul>
  </td>
  
  </tr>
</table>

### Sample Response


```json
{
    "query": "What is RAG?",
    "requestType": "answer_search",
    "response": {
        "answer": "RAG (Retrieval-Augmented Generation) is a technique where a language model retrieves relevant information from external sources and uses it to generate more accurate and context-aware responses. It helps combine up-to-date knowledge with natural language generation.",
        "isValidAnswer": true,
        "answer_payload": {
            "center_panel": {
                "type": "active_citation_snippet",
                "data": [
                    {
                        "snippet_title": "",
                        "snippet_content": [
                            {
                                "answer_fragment": "RAG (Retrieval-Augmented Generation) is a technique where a language model retrieves relevant information from external sources and uses it to generate more accurate and context-aware responses. It helps combine up-to-date knowledge with natural language generation.",
                                "sources": [
                                    {
                                        "title": "MyFile.pdf",
                                        "url": "https://domain/file/d/1vEZTjr9VtQrFePRCJGimfX5cs5y7ITGP/view?usp=drivesdk",
                                        "chunk_id": "chk-1651c9c2-696e-44aa-bac7-29319c33e308",
                                        "doc_id": "fc-4f2ef8b5-e05d-555a-8fb9-dc8a1ceb514b",
                                        "source_id": "fs-bbb11259-a8a4-5863-90c9-179151592cd3",
                                        "source_type": "googleDrive",
                                        "image_url": ""
                                    },
                                    {
                                        "title": "Company.pdf",
                                        "url": "https://host/api/getMediaStream/findly/f-24ba7502-4ad1-51b1-94f4-02e11b56014b.pdf?e=1770012730&n=8912679777&s=IkNDRTQ1VFZkejE1bE5oNkFRMXlyZUlIWWF4QmNSNEV6VXhjdEFtaTFhQkU9Ig%24%24#page=2",
                                        "chunk_id": "chk-8f6ee241-57c0-4520-a5f5-4a1448534d36",
                                        "doc_id": "fc-8ebb5fd1-02ee-553b-b455-83afc5ca47c2",
                                        "source_id": "fs-51067fe5-beab-593b-9bf4-8aca374aaa06",
                                        "source_type": "file",
                                        "image_url": [
                                           ...............
                                        ]
                                    },
                                    {
                                        "title": "Company.pdf",
                                        "url": "https://host/api/getMediaStream/findly/f-24ba7502-4ad1-51b1-94f4-02e11b56014b.pdf?e=1770012730&n=8095856058&s=Ik9sRXdBSGE2dEhPYy8reDNVMjNCa3Z2Y2dXZUVHeklLRTlBa1dJcUFvQ3M9Ig%24%24#page=11",
                                        "chunk_id": "chk-4d8ec29f-f3ff-4d66-acdf-6b245b5e10d6",
                                        "doc_id": "fc-8ebb5fd1-02ee-553b-b455-83afc5ca47c2",
                                        "source_id": "fs-51067fe5-beab-593b-9bf4-8aca374aaa06",
                                        "source_type": "file",
                                        "image_url": [
                                          --------
                                        ]
                                    },
                                    {
                                        "title": "Company.pdf",
                                        "url": "https://host/api/getMediaStream/findly/f-24ba7502-4ad1-51b1-94f4-02e11b56014b.pdf?e=1770012730&n=9889417899&s=IkptajBZSEtHNEJEZjdJdEhPVnRKSGtUT3BLTTFhaHUrbHFNbWRwckttUXM9Ig%24%24#page=2",
                                        "chunk_id": "chk-de76cd5c-5542-4c42-a465-a5fe7b069216",
                                        "doc_id": "fc-8ebb5fd1-02ee-553b-b455-83afc5ca47c2",
                                        "source_id": "fs-51067fe5-beab-593b-9bf4-8aca374aaa06",
                                        "source_type": "file",
                                        "image_url": [
                                            "https://cxxxxxxxxxxxxxxx/api/getMediaStream/findly/f-9103285c-3999-57b0-b3d4-a5dc42f88b0f.jpg?n=216203261&s=IkN5MVNiVG9RNFVNalJiNVBka2hSejUxY0R2YmRrMWp0bTJFNVBSVW9ZNGs9Ig$$",
                                        ]
                                    },
                                    {
                                        "title": "MyFile.pdf",
                                        "url": "https://domain/file/d/1vEZTjr9VtQrFePRCJGimfX5cs5y7ITGP/view?usp=drivesdk",
                                        "chunk_id": "chk-ae495f46-ffa3-40a2-8af2-a7b56f3fa420",
                                        "doc_id": "fc-4f2ef8b5-e05d-555a-8fb9-dc8a1ceb514b",
                                        "source_id": "fs-bbb11259-a8a4-5863-90c9-179151592cd3",
                                        "source_type": "googleDrive",
                                        "image_url": ""
                                    }
                                ]
                            }
                        ],
                        "snippet_type": "generative_model",
                        "snippet_model_name": "",
                        "meta_info": {},
                        "timeTaken": "5600.00ms",
                        "message": "Presented Answer",
                        "isPresentedAnswer": true,
                        "score": "0.0000%"
                    }
                ]
            }
        }
    },
    "resultType": "Answer",
    "chunk_result": {
        "extractive": [],
        "generative": [
            {
                "_index": "answer_index",
                "_type": "_doc",
                "_id": "dZ6RS5UBY6hZN8s7a60G",
                "_score": 0.32623625,
                "_ignored": [
                    "chunkText.keyword"
                ],
                "_source": {
                    "sourceId": "fs-bbb11259-a8a4-5863-90c9-179151592cd3",
                    "pageNumber": 7,
                    "docId": "fc-4f2ef8b5-e05d-555a-8fb9-dc8a1ceb514b",
                    "lastSyncAt": "2025-02-04T08:11:30.870Z",
                    "doc_updated_by_name": "john",
                    "searchIndexId": "sidx-6dab30f2-450c-5272-8c5f-33ea7d96cc8f",
                    "type": "pdf",
                    "chunkId": "chk-1651c9c2-696e-44aa-bac7-29319c33e308",
                    "createdOn": "2025-02-05T08:35:29.667Z",
                    "sourceUrl": "https://domain/file/d/1vEZTjr9VtQrFePRCJGimfX5cs5y7ITGP/view?usp=drivesdk",
                    "chunkText": "<Content>...............",
                    "extractionMethodType": "token",
                    "doc_created_on": "2025-01-10T15:55:08.060Z",
                    "extractionStrategy": "Strategy3",
                    "recordTitle": "MyFile.pdf",
                    "sys_content_type": "googleDrive",
                    "sys_source_name": "gdrive",
                    "doc_path": [
                        "1WwUhdGPqWnQgPgKI_xpa9Ts_pjK1ijOs"
                    ],
                    "recordUrl": "https://domain/file/d/1vEZTjr9VtQrFePRCJGimfX5cs5y7ITGP/view?usp=drivesdk",
                    "updatedOn": "2025-02-05T08:35:29.667Z",
                    "sourceAcl": [
                        "*"
                    ],
                    "chunkType": "Text",
                    "doc_id": "1vEZTjr9VtQrFePRCJGimfX5cs5y7ITGP",
                    "doc_updated_on": "2025-01-10T15:55:08.060Z",
                    "cfs1": "Manasa",
                    "sys_file_type": "pdf",
                    "createdBy": "u-fec9538c-98b8-5503-a2ed-679de486e3d9",
                    "sourceType": "googleDrive",
                    "extractionMethod": "text",
                    "sourceName": "gdrive",
                    "chunkQualified": true,
                    "score": 0.32623625,
                    "sentToLLM": true,
                    "usedInAnswer": true,
                    "chunk_id": "chk-1651c9c2-696e-44aa-bac7-29319c33e308"
                }
            },
            
                "_index": "answer_index",
                "_type": "_doc",
                "_id": "bj6TS5UBELb8Ef94IhBW",
                "_score": 0.111074924,
                "_ignored": [
                    "chunkText.keyword"
                ],
                "_source": {
                    "sourceId": "fs-51067fe5-beab-593b-9bf4-8aca374aaa06",
                    "recordTitle": "Company.pdf",
                    "sys_content_type": "file",
                    "sys_source_name": "new directory",
                    "pageNumber": 9,
                    "docId": "fc-8ebb5fd1-02ee-553b-b455-83afc5ca47c2",
                    "recordUrl": "https://host/api/getMediaStream/findly/f-24ba7502-4ad1-51b1-94f4-02e11b56014b.pdf?e=1770012730&n=7889409483&s=IndWVERlTWJDc1ppOVRqSWV2dS9SZ25aM2U1ZTZjNExtZS9BeTJZVHgxYlk9Ig%24%24#page=9",
                    "searchIndexId": "sidx-6dab30f2-450c-5272-8c5f-33ea7d96cc8f",
                    "updatedOn": "2025-02-28T08:00:35.312Z",
                    "sourceAcl": [
                        "*"
                    ],
                    "chunkType": "Text",
                    "chunkId": "chk-fcd7da0c-e3e3-4a41-9c60-00e4253cc0bf",
                    "createdOn": "2025-02-28T08:00:35.312Z",
                    "cfs1": "Manasa",
                    "sys_file_type": "pdf",
                    "sourceUrl": "https://host/api/getMediaStream/findly/f-24ba7502-4ad1-51b1-94f4-02e11b56014b.pdf?e=1770012730&n=8147623433&s=ImJ6R2tESjdxK09oTzdmVWdtK0xvRFRKZFBMckRwTHUydVpxU2pLakkzNjA9Ig%24%24",
                    "chunkText": "investment positive for these companies and the Communications Equipment industry.Switching vs Routing Market Share Figures 16 and 17 below show Company’s dominance in terms of market share for both routers and switches, the legacy products of networking infrastructure. The market share data is from Q2 2020.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxng infrastructure and are the same areas where the newer players have focused their R&D expenses, which is an",
                    "sourceType": "file",
                    "chunkMeta": {
                        ....
                    },
                    "extractionMethod": "layout",
                    "extractionMethodType": "general",
                    "sourceName": "new directory",
                    "extractionStrategy": "Strategy4",
                    "chunkQualified": true,
                    "score": 0.111074924,
                    "sentToLLM": true,
                    "usedInAnswer": false,
                    "chunk_id": "chk-fcd7da0c-e3e3-4a41-9c60-00e4253cc0bf"
                }
            }
        ]
    },
    "indexPipelineId": "fip-8918ab9c-522d-5802-add6-1ee06751490f",
    "searchIndexId": "sidx-6dab30f2-450c-5272-8c5f-33ea7d96cc8f",
    "searchRequestId": "fsh-ae4d8c24-7098-55ae-8324-3b778ceb76ae",
    "queryPipelineId": "fqp-2641bfc8-2b02-5c6b-9335-d3076d7fbaf7"
}
```

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
