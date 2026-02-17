# Code Tools

Code tools are specialized functions that process user input based on predefined business logic. They're designed to help agents complete tasks by executing custom scripts as part of their regular operations. This ensures that responses are tailored to the user's specific needs. Code tools primarily utilize JavaScript and Python to process the input data and generate the appropriate output.

**Example**

SQL Query Processor - This tool is designed to run SQL queries on a specified database instance. It leverages Supabase APIs to dynamically execute SQL queries, allowing for flexible and efficient data retrieval and manipulation.

To create a code tool, click **+Create Tool** in the Tools page while creating the agent and select Code Tool. Provide the following details for the tool.

**Name**: Enter a **unique and descriptive name** for the tool to help identify its purpose. 

**Example**: SQL Query Processor

**Description**

Provide a **clear and detailed description** of the tool’s functionality. This helps the agent understand:

* What the tool does.
* When to use it.
* How to use it.

**Example for SQL Query Processor**:

"This tool will execute an SQL query and return the result."

This field is used by the LLMs to identify when to invoke the tool. 

**Added Parameters**

Define the **input parameters** required by the tool to perform its task. For each parameter, specify:

* **Name:** A unique identifier for the parameter.
* **Description:** Explains the parameter’s purpose to help the agent extract relevant data from user input.
* **Type:** The expected data type (e.g., string, number, boolean).

**Example for SQL Query Processor**:

* **Parameter Name**: query
* **Type**: String
* **Description**: The SQL query to be executed.

**Definition**

This is the core **logic of the tool**, written in **JavaScript**. The tool executes this code when invoked with the provided parameters.

For the SQL Query processor, below is a sample JavaScript code. 

```javascript
const fetch = require('node-fetch');

async function executeSQL(query) {
    const url = 'https://bldrhpiodbmcvhywchhd.supabase.co/rest/v1/rpc/execute_dynamic_query';
    const headers = {
        'Content-Type': 'application/json',
        'apikey': 'your-api-key-here'
    };
    const body = JSON.stringify({ query });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        const responseData = await response.json();
        return JSON.stringify(responseData);
    } catch (error) {
        console.error('Error:', error.message);
        return JSON.stringify({ error: 'Error in using API' });
    }
}

// Execute with query parameter
const query = $query;
return executeSQL(query);
```

**Response Preview**

Before finalizing the tool, you can test its functionality to ensure it works as expected. Click **Execute Tool** and provide the required input parameters. View the generated response to verify the correct execution of the tool.

Once the tool is defined and successfully tested, click **Create Tool** to add it and use it to complete agent actions.
