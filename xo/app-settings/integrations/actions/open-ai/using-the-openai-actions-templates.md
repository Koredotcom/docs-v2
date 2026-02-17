# Using the OpenAI Action Templates

You can use the **Prebuilt Action Templates** from your OpenAI integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using OpenAI action templates:

1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  


2. On the Dialog Task pop-up, under the **Integration**, select the **OpenAI** option to view the action templates.  
<img src="../images/open-ai-tem-img2.png" alt="Integration -- OpenAI" title="Integration -- OpenAI" style="border: 1px solid gray;zoom:50%;"/>  
  
If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the **Actions** page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.  
  <img src="../images/open-ai-tem-img3.png" alt="Explore Integrations" title="Explore Integrations" style="border: 1px solid gray;zoom:50%;"/>


## OpenAI Actions

The following OpenAI actions are supported in this release:

<table border="1">
  <tr>
   <td><strong>Supported Actions</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Method</strong>
   </td>
  </tr>
  <tr>
   <td>Generate Answers from Context
   </td>
   <td>Generates answers for your questions based on the given context.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Extract Skills from resume
   </td>
   <td>Extracts skills from your resume using the content that is provided as an input.
   </td>
   <td>POST
   </td>
  </tr>
</table>



### Generate Answers from Context

Steps to generate answers from context task using the OpenAI integration:

1. Refer to the[ Installing the OpenAI templates](configuring-the-openai-action.md#step-2-install-the-openai-action-templates){:target="_blank"} section to install this template.
2. The _Generate answers from context_ dialog task is added with the following components:  
<img src="../images/open-ai-tem-img4.png" alt="Generate answers from context dialog task is added" title="Generate answers from context dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    * **answerGeneration** - A user intent to generate answers.
    * **paragraph** and **question** – Entity nodes for gathering the required answer generation details.
    * **answerGenerationService** – A bot action service to generate answers from the context in an external integration. Click the **Plus** icon to expand to view the answerGenerationService bot action component properties.
    * In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/open-ai-tem-img5.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request:**

        ```
        {
        "model": "text-davinci-003",
        "prompt": "Context: This policy applies to exempt employees who are required to relocate because they are being permanently transferred (for no less than 12 months) at the Company's request to a location within the Company (within the United States [including possessions and territories] and Canada) that is at least fifty (50) miles farther from their residence than their former job location.Reimbursement for relocation will be limited to expenses enumerated below incurred by the employee and legally-recognized, immediate family members who currently live with the employee.Eligibility must be approved by the supervising manager, functional Vice President and Human Resources Department.Prior written approval is required for exceptions to this policy, either in determining eligibility or extent of coverage.This prior written approval must be obtained from the Human Resources Department.Benefits under the plan will cease if the employee resigns his/her employment or is terminated for cause, including for poor performance.In addition, if an employee resigns from his/her employment, or is terminated for cause, including for poor performance, within 12 months of having been transferred, the employee will be required to reimburse the Company for relocation expenses paid for by the Company under this policy.In order to address the financial concerns you may have regarding a move, the Company has put together the following relocation package of up to a maximum of $20,000, inclusive of tax gross-up.Included in this package are some items that may help to address some personal concerns you may also have.Nothing in this policy should be construed as a contract for employment for any period of time or as altering the at-will nature of the employment relationship.The Company has the right to terminate employees for any or no reason at all, at any time.This plan is administered by the Human Resources Department.The Company will not be responsible for any action taken which is beyond the scope of this plan. Q: How much maximum relocation reimbursement can i avail under this policy?'",
        "temperature": 0,
        "max_tokens": 256,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
        }
        ```
        
        !!! note

            You can enter a maximum of 1500 words with no line breaks, single or double quotes in the content.

        To add one or more responses, scroll down and click the **+Add Response** button:  
        <img src="../images/open-ai-tem-img6.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>


        **Sample Response:**

        ```
        {
        "id": "cmpl-6f2Q0ZeQIOoSpX428wUr3rp7T7zgc",
        "object": "text_completion",
        "created": 1675238764,
        "model": "text-davinci-003",
        "choices": [
        {
        "text": "\n\nA: Under this policy, you can avail a maximum relocation reimbursement of up to $20,000, inclusive of tax gross-up.",
        "index": 0,
        "logprobs": null,
        "finish_reason": "stop"
        }
        ],
        "usage": {
        "prompt_tokens": 396,
        "completion_tokens": 30,
        "total_tokens": 426
        }
        }
        ```

    * **answerGenerationMessage** – A message node with script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to generate answers from context as shown below:  
<img src="../images/open-ai-tem-img7.png" alt="VA prompt to generate answer from context" title="VA prompt to generate answer from context" style="border: 1px solid gray;zoom:50%;"/>

6. Enter a question based on context when prompted by the VA as shown below:  
<img src="../images/open-ai-tem-img8.png" alt="Enter question" title="Enter question" style="border: 1px solid gray;zoom:50%;"/>	 

7. You will notice an answer is generated from the context for your question.


### Extract Skills from Resume

Steps to extract skills from the resume using OpenAI integration:

1. Refer to the[ Installing the OpenAI templates](configuring-the-openai-action.md#step-2-install-the-openai-action-templates){:target="_blank"} section to install this template.
2. The _Extract Skills from resume_ dialog task is added with the following components:  
<img src="../images/open-ai-tem-img9.png" alt="Extract Skills from resume dialog task is added" title="Extract Skills from resume dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    * **extractSkills** - A user intent to extract skills from the resume content.
    * **resume** – Entity nodes for extracting the skills.
    * **extractSkillsService** – A bot action script to extract skills from the resume content in an OpenAI integration. Click the **Plus** icon to expand to view the extractSkillsService bot action component properties.
    * In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/open-ai-tem-img10.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request:**

        ```
        {
        "model": "text-davinci-002",
        "prompt": "Worked on a leaflet Efficient Multi-camera Positioning. Researched, designed and developed a system that uses AI plus Mathematical techniques to assist users in producing on-stage video content using various Machine Learning and Deep Learning algorithms and frameworks like Tensorflow, NumPy, Pandas, Scikit-Learn, etc. Worked on application software development and NLP analysis at a Global-level Project. Used KMeans Clustering Algorithm for Customer Request Analytics on a data consisting of more than million text words.Worked on two project leaflets that were built and deployed using Python and Tensorflow. The first one was a Neural Network based approach for text-to-speech (TTS) synthesis that can generate real-time voice cloning (speech audio) in the voice of different speakers. The second model involves the use of object detection and pose estimation to count the number of workout steps done. Worked as Research Intern mainly on design and prototype of advanced automated aerated system using normal mobile application and Wi-Fi technology. In this project, sensor coding and a flexible Automated Aerated System using Arduino micro-controller and NodeMCU ESP8266 Wi-Fi Module was proposed and implemented.",
        "temperature": 0.7,
        "stop": "Q:"
        }
        ```

        !!! note

            You can enter a maximum of 1500 words with no line breaks, single or double quotes in the content.

        To add one or more responses, scroll down and click the **+Add Response** button:  
        <img src="../images/open-ai-tem-img11.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>


        **Sample Response:**

        ```
        {
        "id": "cmpl-6U8OZ4pJmLgGliKfCgfBjzgUgEV5Q",
        "object": "text_completion",
        "created": 1672640131,
        "model": "text-davinci-002",
        "choices": [
        {
        "text": "\n\n-Advanced automated aerated system-Wi-Fi technology-ESP8266 Wi-Fi module-Personal Computer-Database",
        "index": 0,
        "logprobs": null,
        "finish_reason": "stop"
        }
        ],
        "usage": {
        "prompt_tokens": 163,
        "completion_tokens": 27,
        "total_tokens": 190
        }
        }
        ```

    *  **extractSkillsMessage** – A message node with script to display responses for various scenarios.

1. Click the **Train** tab to complete the Dialog task training.
2. Click the **Talk to Bot** icon to test and debug the dialog task.
3. Follow the prompts in the App console to extract skills.
4. Enter the resume content when prompted by the AI Agent.  
<img src="../images/open-ai-tem-img12.png" alt="Enter resume content" title="Enter resume content" style="border: 1px solid gray;zoom:50%;"/>

5. The VA now extracts the skills based on the resume content entered.  
<img src="../images/open-ai-tem-img13.png" alt="Extracted Skills from resume content" title="Extracted Skills from resume content" style="border: 1px solid gray;zoom:50%;"/>
