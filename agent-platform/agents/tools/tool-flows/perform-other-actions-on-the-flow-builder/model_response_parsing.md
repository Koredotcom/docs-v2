# Structured Response Parsing and Context Sharing in Workflows

When given a defined schema, the model produces structured data suitable for reuse across workflow steps. The system automatically parses the response and stores key values in a shared context object, eliminating the need for manual handling and reducing redundancy. This method enables different nodes to "communicate" by accessing shared data—ideal for workflows that involve both text and image handling.

### Key Steps

1. **Extract Structured Data**: When the model returns a structured response (e.g., JSON), relevant information is automatically parsed without manual intervention. For example,  intent, origin, destination, and date.
2. **Store in Context**: The parsed data is automatically stored in the context object of the first node, making it immediately accessible to subsequent nodes without the need for the user writing a custom logic manually and parsing the keys using code.
3. **Access and Reuse**: Later nodes can retrieve those stored keys from the context to dynamically generate messages or take further actions.
4. **Create Flexible Flows**: Using the context object to store and access parsed information streamlines data flow between nodes, making workflows quicker and easier to build by automatically handling parsing behind the scenes.

Here’s an example showing how model responses are automatically parsed, how individual keys are separated, and how context is used to pass data between nodes.

#### **Step 1: Define the Response Schema**

In the AI node, attach a **response JSON schema** to define how you want the model to structure its response.

For example, let's say you're asking for the scientific name of a flower. You can define a JSON schema that includes:

* `scientificname`
* `year`
* `scientist`

This schema guides the model to return its response in a structured JSON format that matches these keys.

<img src="../images/define_response_schema.png" alt="Define response schema Variables" title="Define response schema" style="border: 1px solid gray; zoom:80%;"/>

#### **Step 2: Automatic Parsing of the Model Response**

Once the model generates a response, the platform automatically parses the structured JSON output according to the schema you've defined. No manual parsing or code is needed—this happens in the background.

#### **Step 3: Automatic Storage in Context**

Each key from the parsed response (e.g., `scientificname`, `year`, `scientist`) is automatically stored in the **context object** of the AI node.

* To access the entire output, you can use: `{{context.steps.AI0001.output}}`
* To access specific fields/keys from the structured response, you can directly reference it. For example, `{{context.steps.AI0001.output.scientificname}}`

This gives you fine-grained control over which pieces of data are used in other nodes, without needing any extra parsing or logic.

<img src="../images/storage_context.png" alt="Automatic storage in context" title="Automatic storage in context" style="border: 1px solid gray; zoom:80%;"/>

#### **Step 4: Reuse Keys in Later Nodes**

The stored context values can now be used in any subsequent nodes. For example: `{{context.steps.AI0001.output.scientificname}}`

You no longer need to re-parse the response or write custom code to extract these values—these values are already accessible and ready for use.

<img src="../images/reuse_keys.png" alt="reuse keys" title="reuse keys" style="border: 1px solid gray; zoom:80%;"/>

#### **Step 5: View Structured Output During Execution**

When the tool runs:

* The **input section** shows the prompt sent to the AI node.
* The **response section** displays the structured JSON returned by the model.
* The **output** section automatically splits the response into separate keys based on your defined schema.

Each key is stored individually in the context, making it easy to trace, validate, and reuse specific values across the workflow.

<img src="../images/view_structured_output.png" alt="View structured Output Variables" title="View structured Output" style="border: 1px solid gray; zoom:80%;"/>

### Key Benefits

* **No manual parsing or coding required**: By attaching a response schema, the model output is automatically parsed and separated into individual keys. The AI node handles this behind the scenes—no extra logic or custom code needed.
* **Simplified workflows**: You can easily reference only the data you need using context paths like: `{{context.steps.AI0001.output.scientificname}}`. This keeps your workflows clean and focused.
* **Precise data access**: Pull specific values directly into any node—such as the End node—without writing parsing logic or using function nodes. It’s fast, accurate, and efficient.
