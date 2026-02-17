# Chunking Strategy

Chunking is a critical aspect of RAG systems that significantly impacts both the quality of search results and system performance. The default chunk size is 1000 tokens, but you should customize this based on your specific use case.


## When to Use Smaller Chunks

Smaller chunks (typically 300-500 tokens) provide advantages for:


### Information Retrieval Scenarios



* **Precise Question Answering**: For factual or specific queries where the answer is contained in a short segment of text
* **Technical Documentation**: When working with dense, technical content where concepts are tightly packed
* **Multiple Topic Coverage**: When documents span various subjects and you need to retrieve targeted information across them


### System Optimization Scenarios



* **Limited Context Windows**: When using LLMs with smaller context limitations
* **Memory Efficiency**: When optimizing for storage and processing requirements
* **Search Relevance**: When you need finer-grained semantic matching between queries and content
* **Cost Sensitivity**: When managing token usage is a priority


## When to Use Larger Chunks

Larger chunks (typically 1000+ tokens) provide advantages for:


### Complex Information Scenarios



* **Reasoning Tasks**: When context and relationships between concepts are crucial for understanding and answering the question
* **Narrative Content**: When working with stories, case studies, or cohesive arguments that lose meaning when fragmented
* **Contextual Dependency**: When information requires surrounding text to be properly interpreted


### Structural Content Scenarios



* **Cross-Paragraph References**: When information spans multiple paragraphs with internal references
* **Multi-step Procedures**: When processes or instructions must be followed in sequence
* **Conceptual Understanding**: When grasping broader themes or arguments is more important than specific facts