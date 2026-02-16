# Writing Effective Instructions

Instructions define how your agent behaves—its personality, communication style, decision-making approach, and operational boundaries. Well-written instructions or prompts are critical to ensuring that an AI agent adheres to the instructions, stays within scope, and produces accurate, useful responses. 


## Instruction Structure

A complete instruction set covers the following components. Together, they define what the agent is, what it should or shouldn’t do, and how it should respond.


```
## Role
Who is this agent? What's their expertise?
 
## Goal
What the agent can achieve?
 
## Context
What is the context for the agent?
 
## Constraints
What are the boundaries and rules for the agent?
 
## Output Format
How should the agent respond?

## Examples(Optional)
Concrete examples of good responses.
```



## Writing the Role 

**Describes  - Who Is the Agent?**

Define the agent’s identity and area of expertise to guide tone and decision-making.

✅Good Role


```
 "You are a customer support specialist for an e-commerce platform, trained in order management and returns."
```


❌Vague Role


```
 "You are a helpful assistant."
```



## Defining the Goal 

**Describes -What Should the Agent Achieve?**

State a specific objective and how success should be measured.

✅Good example


```
 "Your goal is to resolve customer issues within three exchanges or escalate when required."
```


❌Poor example


```
 "Help users."
```



## Providing Context 

**Describes - What Information Does the Agent Need?**

Provide relevant background information and available data sources.

Typical context includes:



* Platform or domain
* Target audience
* Available memory variables
* Tools or knowledge sources

Adequate context reduces assumptions and improves accuracy.


## Setting Constraints 

**Describes - What Are the Boundaries?**

Define clear rules to control behavior and ensure compliance.

✅Good Examples:


```
## Constraints

Do not invent information.
Escalate issues beyond approval limits.
Keep responses under a defined length.
Ask a limited number of clarifying questions.
```


Constraints help prevent unsafe or undesired behavior.


## Output Format 

**Describes - How Should Responses Be Structured?**

Specify how responses should be organized to ensure consistency.

Example structure:



1. Acknowledgment
2. Analysis or understanding
3. Solution steps
4. Next actions

Defined formats make responses predictable and easier to consume.


### Handling Edge Cases

Prepare agents for unusual situations.


```
### When you don't know the answer
"I don't have that information, but I can connect youwith someone who does. Would you like me to do that?" 

### When the user is frustrated
Acknowledge their frustration, apologize for theinconvenience, and focus immediately on resolution.Don't be defensive or make excuses.
```



## Sample Prompt

Refer to this example as a starting point for your agent prompts:


```
# ROLE
You are a Personal Finance Assistant for the "SmartWallet" banking platform. You specialize in expense tracking, budget analysis, and financial wellness. Your tone is professional, encouraging, and data-driven, but you never sound judgmental about spending habits[cite: 30].

# GOAL
Your goal is to help the user understand their spending patterns and stay within their budget. Success means providing accurate insights based *only* on the provided transaction data and offering one actionable tip per interaction.

# CONTEXT
You are assisting the following user:
- Name: {{user_profile.name}}
- User ID: {{user_profile.id}}
-Financial Persona: {{memory.financial_goals}} (e.g., "Aggressive Saver" or "Debt Reduction") 
**Current Data Snapshot (Injected by Preprocessor):**
- [cite_start]Recent Transactions (Last 30 days): {{recent_transactions_summary}} 
- Current Budget Status: {{memory.budget_thresholds}}
**Available Tools:**
- `generate_spending_report(month, category)`: Use when user asks for deep dives into specific timeframes.
- `set_budget_alert(category, amount)`: Use when user wants to limit spending.
- `knowledge_base_search(query)`: Use for general financial literacy questions (e.g., "What is an APR?").

# CONSTRAINTS
- **Financial Safety:** DO NOT provide specific investment advice (stocks, crypto) or predict market movements. [cite_start]For these, suggest consulting a certified financial advisor
- **Data Integrity:** DO NOT invent transaction details. If a transaction is not in `{{recent_transactions_summary}}` or accessible via tools, state explicitly that you cannot see it.
- **Privacy:** DO NOT repeat the User ID (`{{user_profile.id}}`) in the final output; it is for your internal tracking only.
- **Clarity:** Keep responses under 150 words unless a detailed report is requested.
- **Interaction:** Ask only one clarifying question at a time if user intent is ambiguous.

# OUTPUT FORMAT
Structure your response as follows:
1. **Acknowledgment:** A brief, personalized greeting using `{{user_profile.name}}`.
2. **Analysis:** Direct answer to the query using bullet points for clarity.
3. **Insight:** A one-sentence observation based on their `{{user_memory.financial_goals}}`.
4. **Action:** (Optional) A proposed next step or tool usage (e.g., "Shall I set a budget alert for this?").
```


## Common Prompt Issues That Cause Inaccurate Results

The following issues frequently lead to poor or wrong outputs. Use the prompt framework to write efficient prompts. 

* Vague roles or goals
* Missing or incomplete context
* Unstated constraints
* No defined output structure
* Conflicting or overly broad instructions
* Unclear distinction between instructions and context

Examples:


```
# Bad
Be helpful and professional.
 
# Good
Respond within 2-3 sentences. Verify order details
before providing status. Offer specific next steps.
```



```
# Bad
Be concise. Also, thoroughly explain every detail.
 
# Good
Be concise for simple questions. Provide thorough
explanations for complex processes.
```



```
# Bad
Check the value of the variable FLAG: {{memory.sessionMeta.metadata.FLAG}}
If the "FLAG"="true", then run the x tool.
# Good

Context
FLAG: {{memory.sessionMeta.metadata.FLAG}}

Instructions
Determine the appropriate action based on the FLAG value provided in context.
- If the FLAG value is CUSTOMER, run the X tool.
- For any other value, do not run the tool.
```

