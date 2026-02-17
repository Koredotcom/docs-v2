# View Results in Evaluation Insights

In the Evaluation Insights section, you can view a detailed overview of your model's performance. The results are displayed through evaluator tiles, which provide a quick visual summary of how well your model’s outputs meet predefined criteria.

Each evaluator tile represents a specific evaluator and is updated based on the results . These results are shown in a bar graph format, where the color and length of the bar indicate whether the output meets or fails the defined criteria. The evaluator tile displays the bar graph, showing the number of records that have passed or failed the evaluation. The pass/fail status depends on the user-defined threshold set during the evaluator configuration or Boolean logic.

* **Pass**: The output meets the evaluation criteria (e.g., no bias, no toxicity)
* **Fail**: The output does not meet the evaluation criteria (e.g., contains bias, contains toxicity).

    <img src="../../images/bias.png" alt="Evaluator" title="Evaluator" style="border: 1px solid gray; zoom:50%;"/>

**Quality evaluators** like Groundness, Query Relevance, Coherence, Fluency, Paraphrasing, and Completeness generally use *Continuous Scoring*. This method uses a numerical scale (e.g., 1-5 or 1-10). When you set a threshold, records above the threshold are marked as 'Pass', and those below the threshold are marked as 'Fail'.

For example:

* For **Coherence** (regarded as a positive evaluator): If the threshold is set to 2.5, records with scores above this threshold will be marked as 'Pass', indicating they meet the quality standard. Records below the threshold will be marked as 'Fail'.
* For **Toxicity** (regarded as negative evaluator): If the threshold is set to 2.5, records with scores above this threshold will be marked as 'Fail' (indicating toxic content). Records below the threshold will be marked as 'Pass', indicating they meet the desired quality level.


**Safety evaluators** like Bias Detection and Banned Topics use *Boolean Scoring*. This method returns either a pass (1) or fail (0), depending on whether the evaluation criteria are met. 

For example, for **Bias Detection**:

* **1 (Pass)**: The text does not contain bias
* **0 (Fail)**: The text contains bias. 

Thus, Evaluation Studio displays the evaluation results using a simple pass/fail system, providing a clear and concise assessment of model performance.


## Export Evaluation Results

You can export the evaluation table to a CSV file for offline analysis or further use. The export includes all relevant data and summary metrics.

**To export an evaluation:**

1. Go to **Evaluation Studio** and open your desired project.
2. Select the **evaluation** you want to export.
3. Click the **three-dot menu** at the top-right corner of the evaluation table.
4. Select **Export**.

 <img src="../../images/export_new.png" alt="Export" title="Export" style="border: 1px solid gray; zoom:80%;"/>

A CSV file containing the evaluation table is automatically downloaded to your system. The CSV file includes:

* All column data and score values.
* Footer metrics, including:
    * Boolean columns: pass%, fail%
    * Score columns: pass%, fail%, average, min, max

**Note:** The exported CSV file follows the same format and structure used across the platform for consistency.
