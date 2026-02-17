# Fine-Tuned Models

Fine-tuned models let you customize base models for your specific use cases by training them on your own datasets. You can fine-tune Platform-hosted models or import base models from Hugging Face, then deploy them for inference within the Platform or externally via API.


## View Models & Deployments

* Models List: Go to **Models** > **Fine-tuned models** to see all fine-tuned models with their deployment status. Click a model to open its detail view with Overview, Deployments, and Configurations tabs.

* Deployments List: Each model can have multiple independent deployments. The Deployments tab shows the name, id, status and other attributes of the models.


## Create a Fine-Tuned Model

Go to **Models** > **Fine-tuned models** > **Start fine-tuning** and complete the following steps:

### Step 1: General Details

Enter model name, description, and tags for searchability.

### Step 2: Select Base Model

Choose your base model source:

**Platform-hosted**: Select from the dropdown list (includes previously imported models).

**Import from Hugging Face**: Select your Hugging Face connection and enter the model name. See [Enable Hugging Face](../../settings/integrations/enable-hugging-face/) for connection setup.

### Step 3: Fine-Tuning Configuration

Configure training parameters:

| Parameter | Description |
|-----------|-------------|
| Fine-tuning Type | Full fine-tune, LoRA, or QLoRA (availability depends on model size) |
| Number of Epochs | How many times the model processes the entire dataset |
| Batch Size | Training examples per iteration |
| Learning Rate | Step size during optimization |

**Fine-tuning type by model size:**

| Base Model Parameters | Supported Types |
|-----------------------|-----------------|
| < 1B | Full fine-tune, LoRA, QLoRA |
| ≥ 1B and < 5B | LoRA, QLoRA |
| ≥ 5B and ≤ 8B | QLoRA only |

### Step 4: Training & Evaluation Datasets

**Training Dataset**: Select or upload the dataset to train the model. Accepts JSONL, CSV, or JSON files with at least two columns: prompt and completion.

**Evaluation Dataset** (choose one):
- **Use from training dataset**: Allocates a percentage (default 15%) for evaluation
- **Upload evaluation dataset**: Use a separate dataset
- **Skip evaluation**: Skip the evaluation step

### Step 5: Test Dataset (Optional)

Upload a test dataset to evaluate the fine-tuned model after training completes.

### Step 6: Hardware Selection

Select the hardware configuration for fine-tuning from the available options.

### Step 7: Weights & Biases Integration (Optional)

Connect your W&B account to monitor fine-tuning metrics in real-time. Select an existing connection or create a new one. See [Integrate with Weights & Biases](../../settings/integrations/integrate-with-wandb/).

### Step 8: Review & Start

Review all settings and click **Start fine-tuning**. The Overview page displays real-time progress.



## Training Overview

The Overview page displays real-time fine-tuning progress:

**General Information**: Progress status (Initializing, Training in progress, Testing in progress, Fine-tuning completed, Stopped, Failed), total time, and author.

**Base Model Information**: Source model and origin.

**Training Information**: Training type, steps, training loss, validation percentage, validation loss, start time, and duration. Click the arrows next to loss fields to view graphical trends.

**Test Data Information**: Model performance measured by BLEU score.

**Hardware Information**: CPU and GPU utilization during fine-tuning.

**Training Parameters**: Summary of configured parameters.

**Status handling:**
- If fine-tuning fails, view the reason and click **Re-trigger** to restart
- If stopped manually, click **Re-trigger** to restart from the beginning

After completion, download training files, test results, and test data for reference.


## Deploy a Fine-Tuned Model

Once fine-tuning completes, deploy the model for inference.

### Deployment Steps

1. Go to the model's **Overview** or **Model Endpoint** page and click **Deploy model**
2. Enter deployment name, description, and tags
3. Configure parameters (see below)
4. Select hardware for deployment
5. Review, accept terms, and click **Deploy**

### Deployment Parameters

**Inference Parameters:**

| Parameter | Description |
|-----------|-------------|
| Temperature | Controls randomness in output |
| Maximum Length | Maximum tokens to generate |
| Top P | Nucleus sampling threshold |
| Top K | Number of highest probability tokens to consider |
| Stop Sequences | Tokens that stop generation |
| Inference Batch Size | Concurrent request batching |

**Scaling Parameters:**

| Parameter | Description |
|-----------|-------------|
| Min Replicas | Minimum deployed replicas |
| Max Replicas | Maximum replicas for auto-scaling |
| Scale Up Delay | Seconds before scaling up |
| Scale Down Delay | Seconds before scaling down |

After deployment completes, the status changes to "Deployed" and an API endpoint is generated.



## Manage Deployed Models

### Model Endpoint

After deployment, the API endpoint enables external inferencing. Access via the **Model Endpoint** tab.

The endpoint is available in three formats: cURL, Python, and Node.js. Copy the appropriate format for your integration.

**Platform usage**: Use the deployed model in Prompt Playground or AI Nodes in tool flows.

### Deployment History

The deployment history tracks all versions of the model:

| Field | Description |
|-------|-------------|
| General Details | Name, description, tags, optimization, parameters, hardware, duration |
| Deployment Details | Deployer, timestamps, duration, status (Success/Failed/Deploying) |
| Un-deployment Details | Appears only if undeployed; shows initiator and timestamps |

**Version naming**: The system auto-increments version numbers. First deployment: `ModelName_v1`, subsequent: `ModelName_v2`, `ModelName_v3`, etc. The name persists even if edited.

The most recent deployment is marked with a green tick.

### API Keys

Generate API keys for secure external access. Keys are scoped per deployment.

1. Go to **API Keys** tab
2. Click **Create a new API key**
3. Enter a name and click **Generate key**
4. Copy the key immediately—it won't be shown again

### Configurations

**Model Endpoint Timeout**: Set timeout duration from 30-180 seconds (default: 60 seconds). Timeout precedence: Tool > Node > Model.

**Undeploy**: Disconnects the model from all active instances immediately. Click **Proceed to undeploy**.

**Delete**: Removes the model and all associated data. Only available for undeployed models. Click **Proceed to delete**.



## Re-deploy a Model

To update deployment parameters or hardware:

1. Go to the deployed model's **Model Endpoint** page
2. Click **Deploy model**
3. Modify parameters as needed
4. Complete the deployment wizard

The system creates a new version in the deployment history.



## Export a Model

Export fine-tuned models for backup or reference:

1. On the **Models** page, click the three-dot menu next to the model name
2. Select **Export model**
3. The ZIP file downloads to your local machine



## Iterative Fine-Tuning

You can fine-tune on top of an existing fine-tuned model:

1. When selecting a base model, choose a previously fine-tuned model from the Platform-hosted dropdown
2. Continue with the standard fine-tuning process

This enables iterative improvement of your models.



## Related

- [Enable Hugging Face](../../settings/integrations/enable-hugging-face/)
- [Integrate with Weights & Biases](../../settings/integrations/integrate-with-wandb/)
- [Open-Source Models](../open-source-models/open-source-summary/)
- [External Models](../external-models/managing-external-models/)
