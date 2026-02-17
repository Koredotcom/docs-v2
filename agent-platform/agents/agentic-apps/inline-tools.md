# Code Tools

Code tools are agent-specific functions that process user input using a predefined business logic. They enable the completion of tasks by executing custom scripts as part of system operations, ensuring tailored responses. Code tools use Javascript code to process the input and generate the response.


!!!abstract "Example"
    
    * SQL Query Processor - a tool that runs the SQL queries on a given database instance. 

To create a code  tool, Click **+Create Tool** in the Tools page while creating the agent and select Code Tool. Provide the following details for the tool.
 

**Name** 

Enter a **unique and descriptive name** for the tool to help identify its purpose.

---

**Description**

Provide a **clear and detailed description** of the tool’s functionality. This helps the agent understand:


* What the tool does.
* When to use it.
* How to use it.

This field is used by the LLMs to identify when to invoke the tool. 

---
**Added Parameters**

Define the **input parameters** required by the tool to perform its task. For each parameter, specify:

* **Name:** A unique identifier for the parameter.
* **Description:** Explains the parameter’s purpose to help the agent extract relevant data from user input.
* **Type:** The expected data type (for example: string, number, boolean).

---
**Definition**

This is the core **logic of the tool**, written in **JavaScript or Python**. The tool executes this code when invoked with the provided parameters.

---
**Response Preview**

Before finalizing the tool, you can test its functionality. Click **Execute Tool** and provide the required input parameters. View the generated response to verify the correct execution of the tool. 

Once the tool is defined and successfully tested, click **Create Tool** to add it and use to complete agent actions.
