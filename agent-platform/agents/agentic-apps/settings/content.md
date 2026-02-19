# Content Variables

Agentic apps frequently need access to contextual information, such as user profiles, customer IDs, and employee IDs, to generate accurate responses and perform appropriate actions. This information exists in the application but must be manually configured into prompts, tools, and workflows. 

Content variables provide a centralized way to declare and manage this contextual data at the app level as key-value pairs. Once defined, developers can reference these variables across the entire app, including agent and supervisor prompts, agent definitions, code tools, workflow tools, events, and knowledge. 

Content variables are placeholders that allow you to bundle related key–value pairs into a single content object that can be resolved and injected into the app context in one step. Instead of rewriting the same content in multiple prompts or agents, you store it once as a content variable and reference it wherever needed. When referenced, typically by the Supervisor or an Agent, the platform automatically evaluates all the keys inside that content object, fetches any dynamic values (such as memory variables), and makes the resolved data available in the session history. 

This eliminates the need for each agent or tool to query memory or repeat the same contextual logic individually. It speeds up execution and ensures consistency.

Example: Suppose multiple agents need access to user details such as user name, location, or preferred language.

Instead of having every agent fetch these values from the memory store (userdetails) separately, create a content Variable group called *UserContext* containing keys like:

* username → {{memory.userdetails.name}}
* location → {{memory.userdetails.location}}
* preferredLang → {{memory.userdetails.preferredLang}}

When the Supervisor references *UserContext*, as shown below, the platform resolves all the keys at once. 


```
The user details are available as {{content.UserContext}}.
```

The complete set of user details is fetched from memory and added to the session history, which is available to every downstream agent. Each agent no longer performs repeated memory lookups. They simply reference the already resolved values from the context, as shown below. 


```
Use the user's preferred language to answer the queries.
```


In this case, the agent learns the user preference using the UserContext variable already in the context. 


## When to use Content

Use Content Variables when you need to centralize, reuse, or efficiently inject contextual information across agents, prompts, and workflows—especially when multiple components depend on the same set of values.



* Multiple agents need shared contextual data
* Bundle multiple related fields into one logical object
* Store reusable content


## Creating Content variables

To create  content variables, 



1. Go to the *Content* page under the app's Settings.
2. Click *+New Content*. 
3. Provide the details of the content. 
    1. Name: Unique name for the content.
    2. Display Name: Display name for the content
    3. Description: Brief description of the purpose of the content
    4. Contextual Information: Add key-value pairs that define the variables in this content. The value can be static strings or a dynamic values that reference memory stores or environment variables. 
4. Click Create to save the content. This creates a content object containing all the specified key–value pairs.


## Accessing Content Variables

To access content variables, use the following format.

{{content.&lt;content-name>.&lt;key>}}

Example: if a content field is created with the name ‘guidelines’ and has a key prefLang that stores the preferred language of the user, use the following format to access it in the agent prompt to set it as a guideline for the LLM. 


```
{{content.guidelines.prefLang}}
```
