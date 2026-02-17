# Overview

The model overview page displays real-time progress of the Fine-tuned models. 

To access the model’s overview page, log in to your Platform account and click **Model Hub** under Modules.

On the Fine-tuned models tab, click the desired model to view the following information:  
<img src="../images/model-overview.png" alt="Model Overview" title="Model Overview" style="border: 1px solid gray; zoom:60%;"/>

* **General Information**: This section displays the model's progress status, Total time, and Author details.  

    * The progress statuses include Initializing, Training in progress, Testing in progress, Fine-tuning completed, Stopped, and Failed.

        !!! note

            If fine-tuning fails, the status changes to "Failed." View the reason, make necessary changes, and click the Re-trigger to restart fine-tuning.

    * If necessary, you can stop the process in the middle and resume it later; then, the status is changed to “Stopped.” Click Re-trigger to initiate the fine-tuning process again from the beginning.

* **Base model information**: This section shows the base model used for fine-tuning and its source.

* **Training information**: This shows important details like training type, number of training steps, training loss, percentage of validation data, validation loss, training start time, and duration. Click the downward arrows next to the training loss and validation loss fields to see their graphical trends.

* **Test data information**: It indicates the model performance on the test dataset using the BiLingual Evaluation Understudy (BLEU) score.

* **Hardware information**: This displays CPU and GPU utilization during fine-tuning.

* **Training parameters**: Displays the summary of the parameters provided.
