
# Select and Deploy an Open-Source Model

AI for Process supports thirty-plus open-source models and provides them as a service. If you select the Platform-hosted model, you can optimize it before deployment.  
   For more information on the list of models supported, see [Supported models](../supported-models.md#supported-open-source-models).

To select and deploy a model, follow these steps:

1. Go to **Models** > **Open-source models** and click **Deploy a model**. 
<img src="../images/deploy-a-model.png" alt="Deploy a Model" title="Deploy a Model" style="border: 1px solid gray; zoom:80%;">


2. The **Deploy** dialog is displayed. In the **General details** section:
    * If you choose hosted models, select the **model** from the dropdown menu. Add a **Description** and provide **tags** to ease the search for the model and click **Next**.
    
      <img src="../images/image8.png" alt=" " title=" " style="border: 1px solid gray; zoom:80%;">

   For more information on the list of models supported, see [Supported models](../supported-models.md#supported-open-source-models).


  * If you choose to **Import from Hugging Face**, select the **Hugging Face connection** type from the dropdown and paste the **model name**.
    For more information about connecting to your Hugging Face account, see [How to Connect to your Hugging Face Account](../../settings/integrations/enable-hugging-face.md){:target="_blank"}.

    !!! note

        In the case of public mode, selecting a connection is not necessary.  


    <img src="../images/image7.png" alt=" " title=" " style="border: 1px solid gray; zoom:80%;">

3.Based on the selected Platform-hosted model, the Optimization section is displayed. Choose the optimization option as required and then click **Next**. [Learn more](../open-source-models/model-optimization.md).

* **Skip optimization**: It skips the model optimization.
* **CTranslate2**: Select Quantization from the dropdown menu if applicable. [Learn more](model-optimization.md#ctranslate2). 
* **vLLM**: Select Quantization from the dropdown menu if applicable. [Learn more](model-optimization.md#vllm).  


<img src="../images/image1.png" alt=" " title=" " style="border: 1px solid gray; zoom:80%;">   


<ol start="4"><li>In the <b>Parameters</b> section:</li>  

<ul><li>Select the Sampling <b>Temperature</b> to use for deployment.</li>
<li>Select the <b>Maximum length</b>, which implies the maximum number of tokens to generate.</li>
<li>Select the <b>Top p</b>, an alternative to sampling with the temperature where the model considers the results of the tokens with top_p probability mass.</li>
<li>Select the <b>Top k</b> value, the highest probability vocabulary tokens to keep for top-k-filtering.</li>
<li>Enter the <b>Stop sequences</b>, which tells the model when to stop generating further tokens.</li>
<li>Enter the <b>Inference batch size</b>, which is used to batch the concurrent requests at the time of model inferencing.</li>
<li>Select the <b>Min replicas</b>, which indicates the minimum number of model replicas to be deployed.</li>
<li>Select the <b>Max replicas</b>, which indicates the maximum number of model replicas to auto-scale.</li>
<li>Select the <b>Scale-up delay (in seconds)</b>, which indicates how long to wait before scaling up replicas.</li>
<li>Select the <b>Scale down replicas (in seconds)</b>, which indicates how long to wait before scaling down replicas.</li>  

<img src="../images/image2.png" alt=" " title=" " style="border: 1px solid gray; zoom:80%;"></ul>
<li>Click <b>Next</b>.</li>
<li>In the Hardware section, select the required hardware for deployment from the dropdown menu and click <b>Next</b>. 
<img src="../images/image6.png" alt=" " title=" " style="border: 1px solid gray; zoom:80%;"></li>

<li>In the <b>Review</b> section, verify all the details before starting the fine-tuning. To modify previous steps, click <b>Back</b>. Go through the terms and conditions and tick the checkbox <b>I accept all the Terms and Conditions</b>.

<img src="../images/image3.png" alt=" " title=" " style="border: 1px solid gray; zoom:80%;"></li>
<li>Click <b>Deploy</b>.</li></ol>

      
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You will be charged for deployment and inferencing-related costs for each open-source model. </p></div> 

If you have selected optimization, the model optimization starts, and the status changes to “Optimization”. If not, the model is deployed. After deployment, the status changes to "Deployed." You can now use this model across AI for Process and externally.

Hover over the deployed model to view **more** icons (three dots) which provide access to the model **API endpoint** and **Configurations**. Selecting the API endpoint option shows the API endpoint, deployment history, API keys, and other details. Selecting the Configuration option allows you to add a description, tags, and deploy or delete the model.


<img src="../images/image4.png" alt=" " title=" " style="border: 1px solid gray; zoom:80%;">

#### Re-deploy a Deployed Model

After the initial deployment, if you wish to update the model’s parameters, hardware, or both, you must redeploy the updated model.


To re-deploy a deployed model, follow these steps:


1. Go to **Models** > **Open-source models** and select a **model** to redeploy.
2. Click the **Deploy model**. The **Model Configuration** page is displayed.
3. Modify the required fields and click the **Deploy**. Once deployed, the status changes to “Deployed”.


