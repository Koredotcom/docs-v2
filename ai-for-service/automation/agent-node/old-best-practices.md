

# Agent Node: Best Practices


## Model Selection and Configuration


### Choosing the Right Model



* **Match model capabilities to your use case**: Consider the complexity of your tasks. More complex conversations may benefit from advanced models like GPT-4o.
* **Consider performance requirements**: Balance capabilities with response time needs. More powerful models may have longer processing times.
* **Start with system models first**: For initial development, leverage the pre-configured system models before investing time in a custom model setup.
* **Use XO GPT models for specialized tasks**: These are optimized for specific features like DialogGPT and Answer Generation.


### Custom Model Integration



* **Name models meaningfully**: Create clear, descriptive names for your custom models and integrations that indicate their purpose and capabilities.
* **Test thoroughly before production**: Always validate custom model performance with various test prompts before deploying to production.
* **Document API credentials securely**: Maintain a secure record of API keys and authentication details outside the platform.
* **Monitor usage and costs**: Regularly review API usage to manage costs, especially when using third-party models.


## Prompt Engineering


### General Prompt Design



* **Be specific and clear**: The more precise your prompt, the better your results. Vague instructions lead to inconsistent responses.
* **Include examples**: Where possible, include examples of desired inputs and outputs within your prompts.
* **Layer your instructions**: Structure prompts with general guidance first, followed by specific requirements and constraints.
* **Use consistent formatting**: Maintain consistent structure in your prompts to make them easier to update and maintain.


### Version Selection Strategy



* **Use Version 2 for new development**: Version 2 prompts offers superior flexibility and integration with tools for most new projects.
* **Reserve Version 1 for simpler tasks**: Use Version 1 for straightforward interactions without tool integration.
* **Use JavaScript mode for complex scenarios**: JavaScript mode offers more flexibility than JSON mode, especially for tool-based workflows.
* **Start with templates**: Use the platform's templates as a foundation, especially for Version 2 prompts, which include pre-configured post-processors.


### Testing and Iteration



* **Test with diverse inputs**: Verify prompt performance across a range of expected user inputs, including edge cases.
* **Iterate based on test results**: Refine prompts based on testing outcomes, gradually improving performance.
* **Document changes**: Maintain a change log for prompt versions to track improvements and issues.
* **A/B test critical prompts**: For high-volume interactions, compare different prompt versions to find optimal formulations.


## Tool Design and Implementation


### Creating Effective Tools



* **Name tools intuitively**: Choose names that clearly communicate the tool's purpose to the language model.
* **Write comprehensive descriptions**: The description is crucial for the LLM to understand when to use the tool. Be detailed and specific.
* **Define parameters precisely**: Clearly describe what each parameter is for and how it should be used, including expected formats.
* **Keep tools focused**: Design each tool to perform a specific, well-defined function rather than combining multiple capabilities.


### Parameter Design



* **Limit parameters to what's necessary**: Only include parameters essential to the tool's function.
* **Use appropriate data types**: Match parameter types (string, integer, boolean) to their intended content.
* **Mark parameters as required judiciously**: Only mark parameters as mandatory if they're truly essential.
* **Include format guidance**: For parameters with specific format requirements, include this in the parameter description.


### Action Node Configuration



* **Reuse action nodes when possible**: Leverage existing nodes to reduce duplicate code and simplify maintenance.
* **Chain actions thoughtfully**: When using multiple action nodes, ensure they flow logically and handle errors appropriately.
* **Test action nodes independently**: Verify that each action node works correctly before integrating it into a tool.
* **Document dependencies**: Note any external dependencies or services your action nodes rely on.


### Transitions



* **Choose appropriate transition types**: Select the transition that creates the most natural conversation flow:
    * Use Default transition when the conversation should continue naturally
    * Use Exit Out when the tool marks the end of the LLM's work
    * Use Jump to Node for complex workflows that require specific routing
* **Plan for failure cases**: Define how transitions should handle errors or unexpected results from tool execution.


## Agent Node Design


### System Context



* **Define the agent's role clearly**: Be specific about what the agent is and what it's designed to do.
* **Set appropriate behavioral guidelines**: Include clear instructions on tone, style, and behavioral boundaries.
* **Include domain-specific knowledge**: Provide relevant background information for the agent's area of expertise.
* **Balance brevity and completeness**: Include enough detail for effective operation without overwhelming the model with unnecessary information.


### Business Rules



* **Define scope boundaries**: Clearly articulate what the agent should and should not do.
* **Implement data validation**: Include specific format and validation requirements for collected information.
* **Prioritize compliance requirements**: Ensure business rules enforce necessary regulatory and policy compliance.
* **Document rule rationales**: Record the business reasons behind specific rules for future reference.


### Entity Collection



* **In Version 2, use tools for entity collection**: Design tools with parameters that naturally capture the entities you need.
* **Make entity collection contextual**: Frame entity collection within the purpose of the interaction to improve accuracy.
* **Group related entities**: Collect logically related information together for a more natural conversation flow.
* **Validate entities efficiently**: Implement immediate validation where possible to avoid collecting incorrect information.


### Exit Scenarios



* **Define clear exit conditions**: Specify precisely when the agent should exit the conversation.
* **Include frustration detection**: Always include exit scenarios for user frustration to prevent negative experiences.
* **Set appropriate volley limits**: Configure maximum retry attempts that balance task completion with user patience.
* **Plan post-exit routes**: Define appropriate next steps after each exit scenario (e.g., human handoff, alternate process).


## Conversation Flow Design


### Natural Dialog Design



* **Minimize unnecessary volleys**: Design conversations to collect information efficiently without excessive back-and-forth.
* **Handle context switching gracefully**: Allow the agent to recognize when users change topics and respond appropriately.
* **Support multi-intent utterances**: Configure the agent to recognize and process multiple requests within a single user message.
* **Maintain conversation context**: Leverage conversation history effectively to create coherent, contextual interactions.


### Error Handling and Recovery



* **Design for ambiguity**: Prepare the agent to handle unclear or incomplete user inputs gracefully.
* **Implement elegant fallbacks**: Create natural fallback responses when the agent cannot fulfill a request.
* **Provide clear correction paths**: Make it easy for users to correct misunderstood information.
* **Use confirmation strategically**: Confirm critical information without making the conversation tedious.


### Integration with Dialog Flow



* **Map agent nodes to business processes**: Align agent node functionality with specific stages in your business workflows.
* **Plan transitions between nodes**: Design smooth handoffs between different agent nodes and other dialog components.
* **Use pre/post processors for customization**: Leverage these scripts to implement business-specific logic and transformations.
* **Document the overall flow**: Maintain clear documentation of how different nodes interact within the complete dialog.


## Testing and Quality Assurance


### Comprehensive Testing



* **Test with realistic user inputs**: Use actual user utterances or close approximations for testing.
* **Verify entity collection accuracy**: Confirm the agent correctly identifies and captures all required entities.
* **Validate business rule enforcement**: Test boundary conditions to ensure business rules are properly applied.
* **Check tool integration**: Verify tool calling works correctly and handles both success and failure scenarios.


### Performance Monitoring



* **Track completion rates**: Monitor how often users successfully complete interactions without abandonment.
* **Measure response times**: Ensure agent responses remain within acceptable time limits.
* **Analyze exit scenarios**: Review which exit scenarios occur most frequently to identify improvement opportunities.
* **Review conversation logs**: Regularly examine real conversations to identify patterns and improvement areas.


### Iterative Improvement



* **Prioritize high-impact enhancements**: Focus improvements on the most common or problematic interactions.
* **A/B test significant changes**: Compare performance between different agent configurations for major updates.
* **Gather user feedback**: Implement mechanisms to collect and analyze user satisfaction and suggestions.
* **Establish regular review cycles**: Schedule periodic reviews of agent performance and implement improvements.