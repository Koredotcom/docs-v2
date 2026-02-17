# Enable Exact KNN Match

KNN stands for K-Nearest Neighbors. In RAG applications, KNN matching retrieves the most relevant information from indexed data based on semantic similarity, i.e., finding the closest chunks matching a given query. There are two types of KNN matching methods:

1. **Exact KNN** - Finds the truly exact neighbors by comparing the query with every vector of the indexed content. This type of matching guarantees higher accuracy, and precision but can be computationally expensive and can affect performance. 
2. **Approximate KNN** - Uses different techniques to find the nearest neighbors quickly rather than comparing with every vector. This method may provide a close match rather than the best one, but it's faster and more scalable for large datasets.

**Enable Exact KNN Match configuration** is used to enable the Exact KNN matching technique instead of the Approximate KNN Match method. By default, the approximate KNN matching is enabled. 

!!!note
    Enabling Exact KNN Match can introduce some latency and thereby increase the average Response Time.
