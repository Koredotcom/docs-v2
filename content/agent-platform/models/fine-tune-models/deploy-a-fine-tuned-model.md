# Deploy a fine-tuned model

Once the fine-tuning process is completed, you can deploy your fine-tuned model.

To deploy your fine-tuned model, follow these steps:


1. Do one of the following:

    * Go to **Models** > **Fine-tuned models** and click the required model from the list.  
    <img src="../images/deploy-a-fine-tuned-model-new.png" alt="Deploy-Fine-Tuned Model" title="Deploy-Fine-Tuned Model" style="border: 1px solid gray; zoom:80%;"> 
    
    The model's **Overview** page is displayed. Click **Deploy model** at the top-right corner of the page.  
    <img src="../images/deploy-fine-tuned-model.png" alt="Deploy-Fine-Tuned Model" title="Deploy-Fine-Tuned Model" style="border: 1px solid gray; zoom:80%;">

    Or

    * Click **Model Endpoint** in the left navigation and then click **Deploy model** at the top-right corner of the page.  
    <img src="../images/deploy-fine-tuned-model-from-overview.png" alt="Deploy Fine-Tuned Model from Overview" title="Deploy Fine-Tuned Model from Overview" style="border: 1px solid gray; zoom:80%;">

2. The **Deploy** dialog is displayed. In the **General details** section:

    * Enter a **Deployment name** and **Description** for your model.

        <img src="../images/deploy-fine-tuned-general-details-section.png" alt="Deploy Fine-Tuned General Details Section" title="Deploy Fine-Tuned General Details Section" style="border: 1px solid gray; zoom:80%;">

    * Add tags and click **Next**. Tags can help search the model quickly.

3. In the **Parameters** section:

    * Select the Sampling **Temperature** to use for deployment.

    * Select the **Maximum length** which implies the maximum number of tokens to generate.

    * Select the **Top p** which is an alternative to sampling with temperature where the model considers the results of the tokens with top_p probability mass.

    * Select the **Top k** value which is the number of highest probability vocabulary tokens to keep for top-k-filtering.

    * Enter the **Stop sequences** which implies that where the model will stop generating further tokens.

    * Enter the **Inference batch size** which is used to batch the concurrent requests at the time of model inferencing.

    * Select the **Min replicas** which is the minimum number of model replicas to be deployed.

    * Select the **Max replicas** which is the maximum number of model replicas to auto-scale.

    * Select the **Scale up delay (in seconds)** which is how long to wait before scaling-up replicas.

    * Select the **Scale down replicas (in seconds)** which is how long to wait before scaling down replicas.  
    <img src="../images/deploy-fine-tuned-parameters-section.png" alt="Deploy Fine-Tuned Parameters Section" title="Deploy Fine-Tuned Parameters Section" style="border: 1px solid gray; zoom:80%;">

4. Click **Next**.

5. Select the required **Hardware** for deployment from the dropdown menu and click **Next**.  
<img src="../images/deploy-fine-tuned-hardware-section.png" alt="Deploy Fine-Tuned Hardware Section" title="Deploy Fine-Tuned Hardware Section" style="border: 1px solid gray; zoom:80%;">

6. In the **Review** step, verify all the details that you provided earlier. Select the **I accept all the terms and conditions** check box.  
<img src="../images/deploy-fine-tuned-review-section.png" alt="Deploy Fine-Tuned Review Section" title="Deploy Fine-Tuned Review Section" style="border: 1px solid gray; zoom:80%;">

    !!! note

        If you want to make any modifications, you can go to the previous step by clicking the **Back** button or a particular step indicator on the left panel.

7. Click **Deploy**.

    After the deployment process is complete the status is changed to “Deployed”. You can now infer this model across the Platform and externally. The deployment of your model will start and after the deployment process is complete, you can find the API endpoint created for your fine-tuned model.
