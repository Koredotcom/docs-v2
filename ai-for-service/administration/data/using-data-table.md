# Guidelines for Using Data Tables in AI Agents

Data tables provide a structured way to store and access low-volume, conversation-relevant information that can significantly improve the quality and efficiency of user interactions. While offering flexibility, Data Tables come with specific guidelines and best practices to ensure optimal performance and appropriate usage within the platform. This document outlines the Data Tables' purpose, recommended practices, and limitations, helping platform users leverage this feature effectively while maintaining system integrity and performance.


## Purpose of Data Tables



* **Facilitate Conversational Context**: Data Tables are designed to store information that enhances the quality and efficiency of conversations within your AI Agent.
* **Low-Volume Data Storage**: The Data Tables are optimized for low-volume data that is directly relevant to improving user interactions and experiences.
* **Low-Frequency Usage**: The Data Tables are designed for low-frequency usage (reads or writes) 


## Guidelines



1. **Use for Conversational Data**:
    * Data tables should be used exclusively to store information that facilitates better conversations with the AI Agent.
    * Examples include user preferences, conversation context, and small lookup tables for quick reference.
2. **Data Volume**:
    * Do not use Data Tables to store large datasets or persistent business data unrelated to conversations.
    * Data storage should be limited to low volumes only.
    * The platform does not guarantee optimal performance for tables that do not adhere to the above mentioned recommendations. 
    * Consider using a dedicated database or storage solution for larger or unrelated datasets.
    * Generally, the platform recommends the following limits for optimal performance.
    
        Table Limits - Recommended volume

        * Row Limit: Restrict the number of rows to a maximum of 10,000 per table.
        * Column Limit: Limit each table to no more than 20 columns.
        * Row Size: Ensure that the data size for each row does not exceed 100 KB.
        * Table Size: Maintain the overall table size below 100MB.

        Workspace/Account Limits - Recommended volume

        * Cumulative data: The sum of data across all tables should not exceed 500MB

3. **Data Types and Mappings**:
    * Ensure that data mappings are accurate according to the data types defined in your table columns. This prevents data integrity issues and facilitate smooth interactions.
4. **Optimize Data Storage**:
    * Regularly review and clean up outdated or unnecessary data from your tables.
    * Limit the number of records to what is necessary for effective conversation management.
5. **Best Practices**
    *  Use clear, consistent naming conventions for tables and columns.
    *  Document the purpose and structure of each Data Table.
    *  Regularly backup important data stored in Data Tables.
    * Avoid storing JSON objects in the Data Tables. 
    * Frequent large-scale operations on Data Tables may impact AI Agent performance.
    * Performing bulk operations is not recommended.


## Alternatives for Larger Data Needs

For use cases requiring larger data storage or more complex operations, consider the following alternatives:

* Traditional relational databases
* NoSQL databases
* Data warehouses
* Cloud storage solutions


## Compliance and Monitoring

We monitor the usage of Data Tables to ensure compliance with these guidelines. Misuse may result in restrictions or loss of access to this feature.
