[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Knowledge Graph Analysis

A careful analysis of the Knowledge Graph helps in detecting errors in your questions and the path associated with them that hamper the user experience.

The Knowledge Graph (KG) Diagnosis tool helps you identify any inefficiencies in your KGs and suggests possible corrective actions. These are just guidelines and you need to further analyze the recommendations before going ahead with any changes.

The KG provides an option to initiate an inspection, as follows:

* This option is available only for the in-development version of the KG where there are one or more FAQs added.
* The analysis considers the thresholds and other configurations of the KG.
* The analysis issues a warning if any node contains more than 25 questions and an advisory to the effect that the training fails if there are more than 100 questions in any node.
* You can invoke the diagnosis, by clicking **Inspect** on the KG screen.

   <img src="../images/KG_Inspect.png" alt="KG Inspect" title="KG Inspect" style="border: 1px solid gray; zoom:75%;">

* You can also add patterns as alternate questions for an FAQ to provide better coverage, which helps in detecting the right FAQs for a user question. KG Inspect helps in identifying any syntax errors that occur knowingly or unknowingly while defining patterns. 
The platform analyzes the KG and provides a report of the analysis. The identified incorrect patterns in KG are displayed in the report.

* You have an option to **Re-run** the analysis or **Export** the report. The export option downloads the report in JSON format.

   <img src="../images/re-run-analysis.png" alt="re-run analysis" title="re-run analysis" style="border: 1px solid gray; zoom:75%;">

* The inspect report shows an overview of the number of issues found under various categories. Please read below to learn more.
* The various categories are grouped as:
    * **Error** – Errors are incorrect graph definitions that need an immediate fix.
    * **Warnings** – When rectified, it help improves intent detection. A maximum of 50 warnings are displayed.
    * **Suggestions** – When implemented, it helps in the better organization of your KG. A maximum of 10 suggestions are displayed.
* Click each category to view the detailed report

In the example below, the details of all the patterns with invalid syntaxes are shown:

<img src="../images/example-patterns-with-invalid-syntaxes.png" alt="example of patterns with invalid syntaxes" title="example of patterns with invalid syntaxes" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>There can be more than 50 warnings or 10 suggestions, but only the first 50/10 occurrences of the issue are listed. You must fix the same and re-run the analysis to view the next set.</p>
</div>

### Report Fields for Ontology Knowledge Graphs

The following table details the fields that are displayed in the report:

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <th><strong>ISSUE TYPE</strong>
   </th>
   <th><strong>CATEGORY</strong>
   </th>
   <th><strong>DETAILS</strong>
   </th>
   <th><strong>SUGGESTION</strong>
   </th>
  </tr>
  <tr>
   <td>Patterns with Invalid Syntax
   </td>
   <td bgcolor="#fad1d0">Error
   </td>
   <td>
<ul>

<li>Current Path

<li>Pattern

<li>Error

<li>Question
</li>
</ul>
   </td>
   <td>Rectify the incorrect patterns for better FAQ detection.
   </td>
  </tr>
  <tr>
   <td>Questions added to incorrect paths
   </td>
   <td bgcolor="#fad1d0">Error
   </td>
   <td>
<ul>

<li>Question

<li>Path
</li>
</ul>
   </td>
   <td>Modify the path to include the terms in the question.
   </td>
  </tr>
  <tr>
   <td>Long-chain of terms with the questions present only at the last term in the chain
   </td>
   <td bgcolor="#FFFFED">Suggestion
   </td>
   <td>
<ul>

<li>Question

<li>Path
</li>
</ul>
   </td>
   <td>Reduce the path by avoiding unimportant terms or merge relevant terms.
   </td>
  </tr>
  <tr>
   <td>Identical terms with a common ancestor
   </td>
   <td bgcolor="#FFFFED">Suggestion
   </td>
   <td>
<ul>

<li>Common Parent

<li>Child Paths (only for the largest repeated child trees)
</li>
</ul>
   </td>
   <td>Move the child terms above their parent terms to avoid duplication
   </td>
  </tr>
  <tr>
   <td>Paths without any questions
   </td>
   <td bgcolor="#FFFFED">Suggestion
   </td>
   <td>
<ul>

<li>Path
</li>
</ul>
   </td>
   <td>Remove the path if you do not intend to add any questions to this path
   </td>
  </tr>
  <tr>
   <td>Redundant alternate questions
   </td>
   <td bgcolor="#FFFFED">Suggestion
   </td>
   <td>
<ul>

<li>Question

<li>Alternate Question (multiple)

<li>Path
</li>
</ul>
   </td>
   <td>Rephrase alternate questions to include wider coverage
   </td>
  </tr>
  <tr>
   <td>A large number of questions added to the root term
   </td>
   <td bgcolor="#FFFFED">Suggestion
   </td>
   <td>
<ul>

<li>Question

<li>Path
</li>
</ul>
   </td>
   <td>Move the questions to the appropriate paths
   </td>
  </tr>
  <tr>
   <td>Unusually long paths
   </td>
 <td bgcolor="#ADD8E6">Warning
   </td>
   <td>
<ul>

<li>Path
</li>
</ul>
   </td>
   <td>Reduce the path by avoiding unnecessary terms or merging relevant terms.
   </td>
  </tr>
  <tr>
   <td>Questions at the root node that can be moved to better paths
   </td>
   <td bgcolor="#ADD8E6">Warning
   </td>
   <td>
<ul>

<li>Question

<li>Current Path

<li>Suggested Path
</li>
</ul>
   </td>
   <td>Move the question to the suggested path
   </td>
  </tr>
  <tr>
   <td>Questions with common words that are not used as terms
   </td>
    <td bgcolor="#ADD8E6">Warning
   </td>
   <td>
<ul>

<li>Question (multiple)

<li>Path

<li>Suggested Extension
</li>
</ul>
   </td>
   <td>Extend the current path using the suggested extension
   </td>
  </tr>
  <tr>
   <td>Questions that match multiple paths
   </td>
   <td bgcolor="#ADD8E6">Warning
   </td>
   <td>
<ul>

<li>Question

<li>Current path

<li>Other Paths (multiple)
</li>
</ul>
   </td>
   <td>Review the paths to avoid possible ambiguity scenarios
   </td>
  </tr>
  <tr>
   <td>Identical sibling nodes
   </td>
   <td bgcolor="#ADD8E6">Warning
   </td>
   <td>
<ul>

<li>Path

<li>Identical Term
</li>
</ul>
   </td>
   <td>Merge the identical terms
   </td>
  </tr>
</table>

## Report Fields for Few-Shot Knowledge Graphs

For Few-Shot Knowledge Graphs, nothing regarding paths and keywords requires analysis; since these are not used by the model to detect intent. The only report fields you will see when inspecting such a graph are the following: 
<table border="1.5">
<tr bgcolor="#ECECEC">
   <td><strong>ISSUE TYPE</strong>
   </td>
   <td><strong>CATEGORY </strong>
   </td>
   <td><strong>DETAILS</strong>
   </td>
   <td><strong>SUGGESTION</strong>
   </td>
  </tr>
  <tr>
   <td>Patterns with Invalid Syntax
   </td>
   <td bgcolor="#fad1d0">Error
   </td>
   <td>
<ul>

<li>Current Path

<li>Pattern

<li>Error

<li>Question
</li>
</ul>
   </td>
   <td>Rectify the incorrect patterns for better FAQ detection.
   </td>
  </tr>
  <tr>
   <td>Paths without any questions
   </td>
   <td bgcolor="#FFFFED">Suggestion
   </td>
   <td>
<ul>

<li>Path
</li>
</ul>
   </td>
   <td>Remove the path if you do not intend to add any questions to this path.
   </td>
  </tr>
  <tr>
   <td>Redundant alternate questions
   </td>
   <td bgcolor="#FFFFED">Suggestion
   </td>
   <td>
<ul>

<li>Question

<li>Alternate Question (multiple)

<li>Path
</li>
</ul>
   </td>
   <td>Rephrase alternate questions to include wider coverage.
   </td>
  </tr>
</table>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Every time a KG is inspected, the following details get updated in a scenario where any FAQs are modified or any new FAQs are added:
<ul><li>Total checks</li>
<li>Count of errors, warnings, suggestions</li>
<li>Count and the list of various checkpoints.</li></ul></p>
</div>