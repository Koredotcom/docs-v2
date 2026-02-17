
# Best Practices for Training Your AI Agent

You can train your AI Agent to provide exact answers to specific questions from customers. Consider the following best practices for training your AI Agent:

1. **FAQs** (Frequently Asked Questions)
    * FAQs are the most frequently asked questions by customers and visitors. Add the most common questions and their brief answers.
    * Provide quick solutions in the answers for customers to self-serve
    * Best practices:
        * Collect top questions from various channels
        * Anticipate customer queries based on their decision-making journey
        * Seek input from your Support team
        * Keep language simple and answers concise
        * Add alternate questions for each primary question
        * Include relevant links for more information
        * Regularly update FAQs

2. **Generative AI Answers from Documents**
    * Upload relevant documents (e.g., policies, terms & conditions)
    * AI Agent analyzes the question, finds relevant content from the documents, and generates answers using Generative AI. The AI Agent is automatically trained after uploading the documents to make it capable of answering questions from the documents.

    * Useful for providing more detailed answers not found in FAQs
    * Best practices for document preparation:
        * During onboarding, limit files to 5MB. (After onboarding, the file size limit depends on your plan - 100MB max for Essential, 300MB max for Advanced.)
        * Use single-column format and clear section headings.
        * Do not include scanned PDFs, encrypted files, or compressed PDFs.

3. **FAQs vs. Generative AI Answers from Documents**
    * How FAQs and Generative AI Answers from Documents Work Together?  
    First, your  AI Agent will generate AI Answers from Documents—it will look for answers in the uploaded/added documents using Generative AI. If the documents don’t have an answer, it will use Automation AI (Dialog Tasks/FAQs) to answer customer questions. So, the default order is - Generative AI Answers from Documents first and Automation (FAQs) second. You can change the default order from the App Settings. [Learn more](./../searchai/setup-search-ai.md).

    * How to Avoid Conflict Between FAQs and Generative AI Answers from Documents?  
    To ensure your AI Agent generates answers from documents, avoid adding questions on the same topic to your FAQs. If a question exists in the FAQs, the  AI Agent will always prioritize the FAQ response over searching the documents. For example, if you have a detailed document about your return policies, don't add a question like "What is your return policy?" to the FAQs. This allows the AI Agent to use the comprehensive document to answer customer questions instead of relying on a potentially incomplete FAQ answer.
 