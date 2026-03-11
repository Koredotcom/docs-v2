
# XO GPT Feedback Submission

We value your feedback to help refine and improve our XO GPT models. This document explains how to provide effective feedback and outlines the steps we follow to incorporate it.

## Providing Effective Feedback


### Assess Frequency of Occurrence:

* Measure how often issues occur across a wide range of samples.
* Prioritize issues that appear frequently, as they're more likely to affect overall model performance.
* Use occurrence rates to determine whether an issue requires immediate attention or further monitoring.


### Identify Recurring Patterns:

* Focus on issues that appear consistently rather than isolated or rare errors, unless the issue is critical.
* Highlight any patterns for a more accurate evaluation of model behavior.


### Categorize the Issues:

To provide structured and actionable feedback, categorize the errors into types such as:

* Misinterpretation: The model misunderstands the intent or meaning of the input.
* Negation: The model incorrectly processes negation terms (e.g., "not," "never").
* Omission: The model fails to include critical information in the response.
* Redundancy: The model provides excessive or unnecessary information.
* Repetition: The model repeats phrases or ideas unnecessarily.


### Identify the Use Cases:

Specify the context in which the error occurs, such as ‘Address Update’, ‘Medical Claim Processing’, ‘Customer Support Queries’, or ‘Financial Transactions’.


### Lock Sample Sets for Evaluation:

* Once a problematic sample set is identified, use it for consistent testing and evaluation.
* Track new issues separately with fresh sample sets to avoid overlap.


### Submit a Support Ticket


* When recurring issues are identified, [submit a support ticket](https://support.kore.ai/hc/en-us/requests) with the relevant sample set, identified patterns, and other helpful information for further analysis. 
* Use the following format:

<table>
  <tr>
   <td>
<strong>LLM Input</strong>
   </td>
   <td><strong>Actual Response</strong>
   </td>
   <td><strong>Expected Response</strong>
   </td>
   <td><strong>Error Category</strong>
   </td>
   <td><strong>Use Case</strong>
   </td>
   <td><strong>Comments (if any)</strong>
   </td>
  </tr>
  <tr>
   <td>"Update my address to 1234 Elm St"
   </td>
   <td>"Your address has not changed"
   </td>
   <td>"Your address has been updated to 1234 Elm St"
   </td>
   <td>Negation
   </td>
   <td>Address Update
   </td>
   <td>Model failed to process negation correctly.
   </td>
  </tr>
  <tr>
   <td>"Process my medical claim for surgery"
   </td>
   <td>"Your claim has been denied"
   </td>
   <td>"Your claim is under review"
   </td>
   <td>Misinterpretation
   </td>
   <td>Medical Claim
   </td>
   <td>Incorrect understanding of claim status.
   </td>
  </tr>
</table>

!!! note

    When sharing data, ensure that sensitive information is masked and no real customer data is included, as the data is used for training purposes. We strictly prohibit the use of actual customer data for model training.

All processes and outputs adhere to company-wide standards, and changes beyond these established guidelines may not be possible.

If you have any questions regarding data handling or standards, please contact our support team for assistance.


## Feedback Workflow and Next Steps

**Step 1:** Submit Feedback: Provide detailed feedback with relevant examples, context, and the expected output.

**Step 2:** Analysis and Scope Definition: Our team will review the feedback to determine the scope of necessary improvements.

**Step 3:** Data Collection (if required): We may request additional data from your end to improve the model's accuracy.

**Step 4:** Model Training and Refinement: The model will be updated and fine-tuned based on the feedback and any new data provided.


## Continuous Improvement Cycle

We encourage ongoing feedback as your business needs evolve. Each feedback round should focus on new issues and use updated sample sets for accurate evaluations.
