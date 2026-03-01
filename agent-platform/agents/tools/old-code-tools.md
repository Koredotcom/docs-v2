# About Code Tools

Code tools are specialized functions that process user input based on predefined business logic. They're designed to help agents complete tasks by executing custom scripts as part of their regular operations. This ensures that responses are tailored to the user's specific needs. 

Code tools offer fine-grained control over how data is handled or external services are accessed. They're useful when agent decisions require logic, computations, or dynamic API interactions that go beyond static rules.

**Supported languages**: Code tools can be designed using **JavaScript** and **Python** to process the input data and generate the appropriate output.  


## Example Use Case: SQL Query Processor

This tool is designed to run SQL queries on a specified database instance. It leverages Supabase APIs to dynamically execute SQL queries, allowing for flexible and efficient data retrieval and manipulation. 

**Example prompt:** “Show me all customer orders from last week.”

The tool will convert the input into a query and return results dynamically by calling a Supabase RPC endpoint. The tool executes this task by implementing the business logic directly in the script. 


