# Deploy an imported model from Hugging Face

You can deploy an open-source model by selecting the Hugging Face option in the deployment process.

<Note> The Platform supports models compatible with Transformers library version lower than or equal to 4.43.1 and not the models that require a higher version of the Transformers library. </Note>


To deploy a model from Hugging Face, follow these steps:


1. Click **Models** on the top navigation bar of the application. The **Models** page is displayed.
2. Click the **Open-source models** tab on the **Models** page.


    ![Deploy a Model](./images/deploy-a-model.png "Deploy a Model")



1. Click the **Deploy a model**. A pop-up with a list of available models is displayed.


    ![Deploy using Hugging Face](./images/deploy-using-hugging-face.png "Deploy using Hugging Face")



1. Click the **Hugging Face** option from the list. The **Hugging Face** dialog is displayed.
1. In the **General details** section:

    * Enter a **Deployment name** and **Description** for your model.


        ![Deploy Hugging Face General Details Section](./images/deploy-hugging-face-general-details-section.png "Deploy Hugging Face General Details Section")



    * Provide tags to ease the search for the model and click **Next**.

1. In the **Import** model section:

    * Select the **Hugging Face connection to use** from the drop-down list.  For more information about enabling your Hugging Face account, see [How to Connect to your Hugging Face Account](../../settings/integrations/enable-hugging-face.md).


        ![Deploy Hugging Face Import Model Section](./images/deploy-hugging-face-import-model-section.png "Deploy Hugging Face Import Model Section")



    * Enter the **Hugging Face model name** from Hugging Face that you wish to import and click **Next**.

1. In the **Parameters** section:

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


        ![Deploy Hugging Face Parameters Section](./images/deploy-hugging-face-parameters-section.png "Deploy Hugging Face Parameters Section")



2. Click **Next**.
3. Select the required **Hardware** for deployment from the dropdown menu and click **Next**. 


     ![Deploy Hugging Face Hardware Section](./images/deploy-hugging-face-hardware-section.png "Deploy Hugging Face Hardware Section")



1. In the **Review** step, verify all the details that you provided earlier. Select the **I accept all the terms and conditions** check box.


    ![Deploy Hugging Face Review Section](./images/deploy-hugging-face-review-section.png "Deploy Hugging Face Review Section")



    <Note> If you want to make any modifications, you can go to the previous step by clicking the **Back** button or a particular step indicator on the left panel. </Note>

    
4. Click **Deploy**.
