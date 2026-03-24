
# Best Practices for FAQs and Answers Generation

You can train your AI Agent to provide exact answers to specific questions from customers. There are two ways to train your agent to do so:

1. **FAQs** (Frequently Asked Questions)
    * Add the most common questions and their brief answers
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
    * AI Agent analyzes the question, finds relevant content from the documents, and generates answers using Generative AI
    * Useful for providing more detailed answers not found in FAQs
    * Best practices for document preparation:
        * During onboarding, limit files to 5MB. (After onboarding, the file size limit depends on your plan - 100MB max for Essential, 300MB max for Advanced.)
        * Use single-column format and clear section headings.
        * Do not include scanned PDFs, encrypted files, or compressed PDFs

3. **FAQs vs. Generative AI Answers from Documents**  
    
    To ensure your agent generates answers from documents, avoid adding questions on the same topic to your FAQs. If a question exists in the FAQs, the agent will always prioritize the FAQ answer over searching the documents.
    (For example, if you have a detailed document about your return policies, don't add a question like "What is your return policy?" to the FAQs. This allows the agent to use the comprehensive document to answer customer questions completely instead of relying on a potentially incomplete FAQ answer.) 

## Generative AI Answers from Content/Document

Answer from Documents allows the agent to analyze the customer/visitor’s question, look for the answer in the uploaded documents, and, if not found, look in the FAQs. Your agent is automatically trained after uploading the files to make it capable of answering from the documents.

### Why to Use Generative Answers from Documents

* Text-heavy answers - heavier text can be picked from documents and presented as answers.
* If the answer to a question is not available in the FAQs but is present in the document, the agent can extract and present an answer.

A few examples of documents that can be added/uploaded for generating answers: Policies, Do’s and Don’ts, Terms & Conditions, Plans or Subscription comparison, etc.

## FAQs

FAQs are the most frequently asked questions by customers and visitors. They usually have short answers or are utilized for intent identification. The purpose of FAQs is to provide quick answers to common questions your business can anticipate. FAQs empower customers and visitors to self-serve, enabling them to find solutions quickly on their own.

For example, the screenshot below shows FAQs added to an agent for a bank:  
<img src="../images/setup-guide-faq.png" alt="Adding FAQs" title="Adding FAQs" style="border: 1px solid gray; zoom:70%;">


## How FAQs and Generative AI Answers from Documents Work Together?

First, your agent will generate AI Answers from Documents—it will look for answers in the uploaded/added documents using Generative AI. If the documents don’t have an answer, it will use Automation AI (Dialog Tasks/FAQs) to answer customer questions. So, the default order is - Generative AI Answers from Documents first and Automation (FAQs) second. You can change the default order from the App Settings. [Learn more](./../searchai/setup-search-ai.md).

## How to Avoid Conflict Between FAQs and Generative AI Answers from Documents?

To ensure your agent generates answers from documents, avoid adding questions on the same topic to your FAQs. If a question exists in the FAQs, the agent will always prioritize the FAQ response over searching the documents.
For example, if you have a detailed document about your return policies, don't add a question like "What is your return policy?" to the FAQs. This allows the agent to use the comprehensive document to answer customer questions completely instead of relying on a potentially incomplete FAQ answer. 

