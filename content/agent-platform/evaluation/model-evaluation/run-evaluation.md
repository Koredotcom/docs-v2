# Run Evaluations 

After setting up the evaluators and mapping the variables, you can begin the evaluation process to assess your model’s performance against the defined criteria. You also have the flexibility to stop an evaluation at any point, depending on your needs.

## Starting an Evaluation

To start an evaluation, click **Run** on the Evaluation page. The system will then assess the model’s output based on the provided input with the configured evaluators.

Once the evaluation is complete, the evaluator columns will be populated with scores, giving you a clear overview of the model’s performance.

<img src="../../images/results.png" alt="Results" title="Results" style="border: 1px solid gray; zoom:80%;">

The evaluator tiles for each evaluator you've set up will also appear at the top in the Evaluation Insights section. This layout provides an easy, visual way to assess model performance against the defined thresholds.

## Stopping an Evaluation

If you decide to stop an evaluation midway, before it completes—perhaps because you're working with a large dataset and no longer wish to continue—you can stop the process to avoid unnecessary token consumption.

**To stop the evaluation while it's running:**

1. Click the **Stop** button at the top of the page.
2. A confirmation message asks if you're sure you want to stop. Click 'Continue' to confirm. The evaluation will keep running in the background until you click 'Continue'.
3. Once you click 'Continue', the evaluation will be fully stopped, and all evaluators and rows will be halted.

    <img src="../../images/stop_button.png" alt="Stopping evaluation" title="Stopping evaluation" style="border: 1px solid gray; zoom:80%;">




**If you stop the evaluation before it’s finished, keep in mind:**

* The number of generations processed up until the stop point will be calculated and displayed in the evaluation table.
* The data shown in Evaluation Insights will reflect the results generated up until the stop point.
* Tokens will be consumed for all generations processed up until the stop, even if the evaluation is not completed.


## Tracking Evaluation Progress

Tracking the progress of an evaluation is crucial to understanding how long an evaluation will take and what stage it’s currently in. The Evaluation Progress feature in Evaluation Studio provides a comprehensive and real-time view of the evaluation process, making it easier to track and manage your evaluations efficiently. This feature offers full visibility into the status of your evaluations, helping you stay informed about how much time has passed, how many rows have been processed, and the current state of the evaluation.

During the evaluation, simply click the progress ring icon in the top corner to quickly view detailed progress information and real-time updates on the evaluation.

<img src="../../images/eval_progress_final.png" alt="Evaluation progress" title="Evaluation progress" style="border: 1px solid gray; zoom:80%;">

**Why is this useful?**

1. **Real-time monitoring**: The progress feature updates in real time, showing the **elapsed time** and the **number of rows** being processed during the evaluation. This allows users to easily track progress and understand how far along the process is.

2. **Visibility into evaluation status**: Users can instantly see the status of the evaluation, whether it is **stopped**, **in progress**, or **completed**. This helps in determining if further action is needed, or if the evaluation completed successfully.

3. **Efficient management**: The progress ring lets users know exactly when the evaluation has started, how much has been completed, and when it is finished.

4. **Handling interruptions**: If the evaluation is stopped for any reason, users can view how much work was completed before the stop and can easily restart the evaluation. The system tracks both elapsed time and row count, and when restarted, resets to reflect the new process, ensuring a seamless continuation of the task.

5. **Comprehensive reporting**: Once an evaluation is completed, the **total elapsed time** is displayed, combining the time from any restarted evaluations. Additionally, the **user** who ran the evaluation and the **start time** are also recorded.
