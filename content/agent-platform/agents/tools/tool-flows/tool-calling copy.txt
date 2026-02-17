# Tool Calling in Agent Platform

Tools enable language models to perform tasks or retrieve external information during tool flows. This empowers developers to build dynamic workflows that combine LLM capabilities with custom business logic. A tool can be any external or internal service, API, or a function that the model uses to perform specific tasks. Examples of tools include third-party APIs, AI models, databases, or built-in functions that enhance the flow’s capabilities. In Agent Platform, tools are essentially deployed agents.

## What is Tool Calling?

Tool calling is the process of invoking tools during flow execution. With tool calling, tools perform tasks by connecting the LLM to external tools, like APIs or functions, which can be used as needed. The model determines which tools to use based on the task at hand, making it more flexible and capable of handling different types of requests.

During the flow, when the model reaches a step that requires a tool, it triggers the tool with the appropriate inputs. The tool then performs the task and sends the results back to the model, which can use the output to continue the process or provide the information to the user. For example, the node might call an external resource, such as a web browser, to search the internet, or an image generation tool to create images based on a prompt.

Tool calling helps the tool access additional resources, retrieve data, and perform tasks, making it more powerful and able to handle complex workflows effectively.

## How Tool Calling Works in Agent Platform

In Agent Platform, the tool calling feature within the AI nodes expands the model’s capabilities by integrating additional tools for more efficient and precise task completion. Within a tool workflow, the AI node can invoke additional resources to complete tasks enhancing the node's capabilities beyond its internal functions.  
 
The following outlines the typical steps involved in a tool calling process:

1. **Input Data**: The model receives a query or input from the user.
2. **Processing**: The model analyzes the request and determines which tools or additional resources are needed. It then maps the user's query to predefined tools configured in the AI node.
3. **Tool Call**: Agent Platform triggers the mapped tool with the necessary arguments.
4. **Tool Execution**: The called tool performs its tasks, such as running a search, generating an image, or fetching specific information.
5. **Output**: The tool's result is returned to the AI node, which may process it further or deliver the final output to the user. The model combines the results from the various tools and generates a cohesive, informative response for the user.

### Using Multiple Tools in AI Nodes

In a single AI node, multiple tools can be called together to handle more complex tasks. Multiple tool calling refers to the model’s ability to interact with and use multiple tools or external systems in a single session. These tools can be called sequentially or in parallel, depending on the workflow.

* **Sequential tool calling**: Tools are triggered one after another, with each tool waiting for the previous one to finish. This ensures tasks are done in a specific order.
For example, if a user asks for weather data for a city and a recommendation based on that data, the weather tool would run first, followed by the recommendation tool.
* **Parallel tool calling**: Multiple tools are triggered simultaneously, allowing tasks to run in parallel speeding up the overall process. 
For example, if a user requests weather information for various cities, the model can call weather APIs for all cities at once and retrieve data in parallel.

This flexibility enables AI nodes to handle more complex workflows efficiently, combining the best of both approaches depending on the situation.


### **Use Case: Weather and travel advice for Paris**

For example, a user requests information about the current weather in Paris and whether it’s a good time to visit. In this example, two tools are used to provide a comprehensive response. The system maps the user input to relevant functions/tools, gathers the necessary data, and combines the weather information with travel advice.

**Step 1: User input (Initial query)**  
The user enters a query: *"What's the weather in Paris like, and is it a good time to visit?"*

**Step 2:** **Query processing - clarifying and mapping tools**  
The model processes the query and identifies two distinct tools based on the user's request:

1. *Get Weather* – To check the current weather in Paris.
2. *Get Travel Advice* – To provide travel recommendations based on the weather.

The model maps the query to these tools and prepares a response to clarify the intent: *"I will check the weather in Paris and provide travel advice based on the current conditions."*

**Step 3: Model response - Preparing tool call for weather API**  
The model generates the tool call for the Get Weather API, which includes the necessary arguments:

* Function Name: `get_weather`
* Arguments:
    * `location: "Paris"`
    * `unit: "Celsius"`

The model sends this information in the response body, asking Agent Platform to trigger the weather tool.

**Step 4: Tool Call 1 - Weather API**  
The Get Weather tool is triggered, and the external Weather API returns the following data:

* *Temperature: 16°C*
* *Condition: Partly cloudy*
* *Forecast: Light rain later*

The model then prepares to trigger the next tool based on the weather data.
In a sequential execution, the tool sends the data to the model, which then processes it and determines the next tool or function to execute.

**Step 5: Model response - Preparing tool call for travel advice**  
The model now generates the tool call for Get Travel Advice based on the weather conditions, including:

* Function Name: `get_travel_advice`
* Arguments:
    * `location: "Paris"`
    * `weather_condition: "Partly cloudy with light rain"`

The model sends this information in the response body, and the AI node calls the Get Travel Advice tool.

**Step 6: Tool Call 2 - Travel Recommendation tool**  
The Get Travel Advice tool is triggered and returns:

* *Best Time to Visit: Spring or Fall is ideal*
* *Current Advice: It’s okay to visit, but bring an umbrella due to rain.*

The model processes this information and prepares the final response.

**Step 7: Model response generation - combining results**  
The model combines the output from both tools and formats the response:  
*"The weather in Paris is 16°C, partly cloudy, with light rain later. It’s a good time to visit, but bring an umbrella."*  
The model sends this response back to the tool, which maps the output to the end node.

**Step 8: Final output to the user**  
The user receives the final output, which includes both the weather update and travel advice in a single, cohesive response.


## Why is Tool Calling Important?

1. **Extended capabilities**: Tool calling enables the LLM to go beyond its core capabilities by calling external tools, making them more versatile. For example, the model can generate text and simultaneously call a text-to-speech tool to read it aloud.

2. **Increased efficiency**: With tool calling, the model uses specialized tools to complete tasks faster. For example, quickly translate text using a translation tool, speeding up the process compared to manual translation.

3. **Real-time updates**: Tool calling enables the model to fetch real-time information, such as weather or stock data, through APIs or web scraping tools, ensuring up-to-date information.

4. **More autonomy**: Tool calling allows the model to automatically decide when to use tools, reducing manual input and allowing for faster, smarter interactions with users.

5. **Better user experience**: By automatically calling the right tools, the model can respond more dynamically, providing quicker, more accurate, and relevant answers, leading to better user satisfaction.


## Supported Models for Tool Calling

Tool calling functionality is available when commercial models are added to an AI node. However, only specific commercial models support this feature. Currently, Platform-hosted and Hugging Face models do not support tool calling. 

Below is a list of models across various platforms that currently support tool calling in Agent Platform:

**OpenAI**

* gpt-4
* gpt-3.5-turbo
* gpt-3.5-turbo-1106
* gpt-4-0613
* gpt-4-0125-preview
* gpt-4-turbo-preview
* gpt-4-1106-preview
* gpt-4o

**Azure OpenAI**

* gpt-4
* gpt-3.5-turbo

**Anthropic**

* Claude 3 Opus
* Claude 3 Haiku
* Claude 3 Sonnet
* Claude 3.5 Sonnet

**Google**

* Gemini-1.5-flash-latest
* Gemini-1.5-pro
