# Answer Configuration

Search AI uses LLM to generate answers from the ingested chunks. The efficacy of the response depends on the Chunk Retrieval method and the Answer Generation configuration among other things. 

![Answer Configuration](images/answer-configuration.png "Answer Configuration")

## Chunk Retrieval

This section allows you to configure the chunk retrieval strategy and the corresponding thresholds. 

### Chunk Retrieval Strategy

Choose the preferred chunk retrieval strategy for retrieving answer chunks from the answer index for a given query. Search AI supports **vector retrieval**, which uses cosine similarity scores, and **hybrid retrieval**, which considers patterns and structures in the text. The choice between using vector retrieval and hybrid retrieval depends on various factors, including the nature of the data, the specific requirements of the application, and the available resources. 

1. **Vector Retrieval**: In this type of retrieval, at the time of query, we compute the cosine similarity between the query vector, and each chunk vector, and the resulting scores are used to filter and sort the results. The score ranges from 0 to 1, where 0 indicates no match and 1 represents a complete match. 
2. **Hybrid Retrieval**: In this type of retrieval, multiple approaches are used to find the most relevant chunk corresponding to the query. 

### Thresholds

This section defines the thresholds for filtering retrieved answer chunks based on similarity scores and proximity. 

* **Similarity Score Threshold**: This setting allows users to specify the minimum similarity score required for an answer chunk to be considered relevant. Chunks with scores below this threshold are discarded. This parameter can take any value between 0 and 100. The greater the value of this field, more is the similarity score required. 
* **Proximity Threshold:**  This parameter can be used to determine how closely retrieved chunks should be located to the highest-ranking chunk. Chunks beyond this threshold are discarded. This parameter can take any value between 0 and 50. The lower the value of the proximity threshold, the closer the chunks are.

### Top Chunks

This field specifies the maximum number of qualified answer chunks to be considered for generating answers. In the case of generative answers, these number of top chunks are sent to the LLM as the context for generating an answer to the user query. 


## Answers Generation

This section is used to configure the type of answers to be presented to the users. There are two types of Answer generation techniques supported:

* **Extractive Answers**: The topmost chunk retrieved in response to the user query is directly presented to the user as answers. The extractive answers are exact content retrieved from the chunks without any change in text. Provide the following configurations for extractive answers. 
    * **Response Length**- This is the expected length of the answer, in tokens. 
* **Generative Answers**: The top chunks retrieved in response to the user query are sent to the configured LLM which generates a paraphrased answer from the content in the chunks. Use the following fields to configure Generative Answers. 
    * **LLM Model**: Select the LLM Model to be used for Answer Generation. Refer to [this](../generative-ai-tools/models-library.md) to learn more about how to integrate the application with an LLM. 
    * **Answer Prompt**: Select the answer prompt to be sent to the LLM along with the chunks. The prompt can influence the accuracy and relevance of the generated response. Refer to [this](../generative-ai-tools/prompts-library.md) to learn more about how to write and edit prompts. 
    * **Temperatures**: This parameter controls the randomness or creativity of the generated text. The higher the temperature, the more the randomness. 
    * **Response Length**: The number of tokens in the generated response. 