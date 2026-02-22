



# Agent Flows Overview

**Agent Flows** are intelligent conversational workflows built by combining Dialog Tasks with Agent Nodes to deliver autonomous, goal-driven customer service experiences.

At their core, Agent Flows leverage DialogGPT as the orchestration layer for intent identification and routing, while Agent Nodes handle the execution of the conversation within individual use cases. This combination enables AI Agent to autonomously plan, reason, and execute multi-step actions - much like a skilled human agent.


## Key Components



* **Dialog Tasks** define the scope and structure of a use case, establishing clear boundaries for what the flow handles (such as "Web Check-In Assistance" or "Account Balance Inquiry").
* **Agent Nodes** within these flows bring agentic capabilities, natural language understanding, slot filling, confirmation handling, and tool invocation, all within defined business rules and exit scenarios.
* The hybrid design allows developers to use **deterministic nodes** (entity, message, service nodes) for regulated or compliance-critical steps, and **Agent Nodes** for flexible, natural conversation handling.

This architecture balances control with flexibility - DialogGPT intelligently routes users to the right Dialog Task based on their intent, and Agent Nodes within those tasks deliver human-like, contextually aware responses while adhering to business constraints.






## Deciding the Right Approach: Deterministic vs. Agentic vs. Hybrid

Agent Flows represent a powerful approach to building conversational AI that combines the reliability of structured dialog design with the flexibility of LLM-powered Agent Nodes. 

Success depends on the following:



* Choosing the right approach: Match deterministic, agentic, or hybrid designs to your use case requirements.
* Scoping effectively: Define clear semantic boundaries that balance breadth with precision.
* Writing strong descriptions: Enable accurate retrieval through rich, goal-oriented use case descriptions.

This balance ensures your AI Agent delivers natural, intelligent conversations while maintaining control and predictability.


### When to Use Deterministic Dialog Tasks

Choose deterministic flows when:



* Regulatory compliance is critical: Exact wording and predictable behavior are non-negotiable (e.g., legal disclaimers, financial disclosures).
* Audit trails are required: Every step must be traceable and reproducible.
* Simple, linear flows: The conversation follows a fixed path with minimal branching.
* Predictability is paramount: Consistent responses matter more than natural conversation.

**Example scenarios**: Account verification, payment processing, medical symptom triage, loan application forms, etc.


### When to Use Agentic Dialog Tasks

Choose agentic flows when:



* Natural conversation is the priority: Users expect fluid, human-like interactions.
* High variation in user inputs: The same intent can be expressed in many different ways.
* Ease of maintenance matters: A single Agent Node can handle increasing complexity without proportional node growth.
* You're planning for an agentic future: Building toward more autonomous experiences.

**Example scenarios**: Product search and recommendations, general customer inquiries, travel planning, content discovery


### When to Use a Hybrid Approach

Choose a hybrid design when:



* Mixed requirements exist: Some parts need strict control, others benefit from flexibility.
* Transitioning strategies: Moving gradually from deterministic to fully agentic.
* Complex enterprise applications: Different use cases within the same app have different needs.

**Example scenarios**:



* Banking apps where transactions are deterministic but general inquiries are agentic.
* Healthcare assistants where appointment booking is deterministic but general health information is agentic.


### Trade-off Considerations

Choosing the right approach involves balancing performance, cost, scalability, and user experience. The right choice depends on your specific use case requirements and priorities.


| Factor           | Deterministic     | Agentic     |
|:-----------|:-----------|:--------------------|
| Performance      | Faster, predictable latency                   | Dependent on LLM response times, potential for multiple tool calls   |
| Cost             | Lower operational costs (no LLM calls for responses) | Higher LLM API costs, but reduced development and maintenance costs  |
| Scalability      | Scales linearly with conversation complexity  | Single agent handles increasing complexity without proportional node growth |
| User experience  | Consistent but potentially robotic            | Natural and engaging, but requires careful prompt engineering        |



## Scoping Agent Flows Effectively

Avoid use cases that are either too granular or too broad; instead, find the optimal middle ground.



* Too Granular: Dialog bloat, maintenance overhead, and poor scalability.
* Too Broad: Poor accuracy, weak semantic matching, and confused AI Agent responses.
* Just Right: Clear semantic boundaries, manageable scope, and high accuracy.


### When to Split a Use Case

Split into separate flows when you have:



* Distinct user goals: "Book appointment" vs. "Cancel appointment".
* Different fulfillment logic: Separate backend APIs or workflows.
* Non-overlapping training phrases: Utterances are semantically distinct.
* Different required information: Different mandatory slots/entities.
* Separate business rules: Different validation or authorization requirements.


### When to Keep Use Cases Together

Keep as a single flow when you have:



* Variations of the same goal: "What's my balance?" vs. "How much do I have?" vs. "Show my account balance."
* Same fulfillment endpoint: Same API with different parameters.
* High semantic overlap: Training phrases would confuse the model if split.
* Same required slots: Collected information is identical or nearly so.


### Writing Effective Use Case Descriptions

Good descriptions should be:



* Semantically rich: More embedding dimensions activated.
* Action and goal-oriented: Include the primary action and desired outcome.
* Contextual: Explain when users typically need this.


#### Example: Poor Scoping (High Collision Risk)

The following use cases will all be retrieved for queries like "where is my order?"—causing confusion:



* Check_Order_Status
* Track_Order
* View_Order_Details
* Get_Order_Information


#### Example: Well-Scoped, Semantically Separated Use Cases



1. **Track_Order_Shipment**

    Track shipping and delivery status for orders in transit. Users want to know WHERE their package is and WHEN it will arrive. Includes tracking numbers, carrier information, and estimated delivery dates.

2. **View_Order_History**

    View past completed orders and their details. Users want to see WHAT they ordered previously, when each purchase was made, and the final order totals. For historical reference, NOT for active in-transit shipments.

3. **Modify_Pending_Order**

    Make changes to an order that hasn't shipped yet. Users want to UPDATE their order—change address, cancel items, or adjust quantities. Only applicable to orders that are still processing and have not yet been dispatched.


