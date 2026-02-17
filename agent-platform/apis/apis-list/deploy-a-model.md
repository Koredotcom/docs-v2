[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Deploy a Model API

This API deploys an open-source or fine-tuned model in the ***Ready to Deploy*** state. Users can configure deployment parameters, including hyperparameters, scaling, and optimization settings, allowing for flexible model scaling and performance tuning.

The API response includes the **model ID** and the **model deployment status**. After receiving the response, use the <code>dockStatusId</code> to call the [Get Dock Status API](../apis-list/get-dock-status.md)  and verify the successful deployment of the model.

<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{host}/api/public/models/:{<i>modelId</i>}/deploy?modelType={<i>modelType</i>}</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><strong><code>X-api-key</code></strong> - The API key used for authentication.
   </td>
  </tr>
</table>

**Where can I find the API key?**

To use the API, you will need an API key. [Learn more](../../apis/overview.md#how-to-create-the-api-key).

## Query Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>ENUM VALUES</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://agent-platform.domain.ai/</code>.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><strong>modelId</strong>
   </td>
   <td>The model ID to deploy.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><strong>modelType</strong>
   </td>
   <td>Type of model being deployed.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
   <td>["openSource", "fineTune"]
   </td>
  </tr>
</table>

## Sample Request

**For an Opensource Model Source**

```js
curl --location 'https://{host}/api/public/models/cm-2xxxxxxxxxxxxxxxxxx0/deploy?modelType=openSource' 
--header 'x-api-key: kg-axxxxxxx-5xx3-5xx8-bxxb-9xxxxxxxxxx-ebxxxxxx-5xxb-4xxb-9xx5-cxxxxxxxxx3' 
--header 'Content-Type: application/json' 
--data '{
    "name": "Flant5_model",
    "hyperParameters": {
      "temperature": 1,
      "maxTokens": 512,
      "topP": 1,
      "topK": 50,
      "stopSequence": []
    },
    "scalingParameters": {
      "maxBatchSize": 10,
      "minReplicas": 1,
      "maxReplicas": 2,
      "scaleUpDelay": 30,
      "scaleDownDelay": 600
    },
    "deviceType": "g5.xlarge",
    "optimizationInfo": {
      "optimizationType": "",
      "quantizationType": ""
    },
    "isDeployedPreviously": true
  }'
```

**For a Fine-tune Model Source**

```js
curl --location ' https://{host}/api/public/models/cm-6xxxxxxxxxxxxxxxxxx9/deploy?modelType=fineTune' 
--header 'x-api-key: kg-2xxxxxxxxxxxxxxxxxxf-7xxxxxxx-7xx8-4xxf-8xx7-dxxxxxxxxxx3' 
--header 'Content-Type: application/json' 
--data '{
    "name": "gpt2",
    "hyperParameters": {
      "temperature": 1,
      "maxTokens": 512,
      "topP": 1,
      "topK": 50,
      "stopSequence": []
    },
    "scalingParameters": {
      "maxBatchSize": 10,
      "minReplicas": 1,
      "maxReplicas": 2,
      "scaleUpDelay": 30,
      "scaleDownDelay": 600
    },
    "deviceType": "g5.xlarge",
    "optimizationInfo": {
      "optimizationType": "",
      "quantizationType": ""
    },
    "isDeployedPreviously": true
  }'
```

## Body Parameters

The following deployment parameters can be configured and passed in the body:

**General Parameters**

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>ENUM VALUES</strong>
   </td>
  </tr>
  <tr>
   <td><strong>name</strong>
   </td>
   <td>Name of the model to deploy.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><strong>isDeployedPreviously</strong>
   </td>
   <td>Indicates if the model was deployed before.
   </td>
   <td>Boolean
   </td>
   <td>Optional
   </td>
   <td>[true, false]
   </td>
  </tr>
</table>


**Hyperparameters**


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>ENUM VALUES</strong>
   </td>
  </tr>
  <tr>
   <td><strong>temperature</strong>
   </td>
   <td>Controls randomness of output.
   </td>
   <td>Float
   </td>
   <td>Required
   </td>
   <td>0-2
   </td>
  </tr>
  <tr>
   <td><strong>maxTokens</strong>
   </td>
   <td>Maximum tokens allowed.
   </td>
   <td>Int
   </td>
   <td>Required
   </td>
   <td>0-512
   </td>
  </tr>
  <tr>
   <td><strong>topP</strong>
   </td>
   <td>Controls nucleus sampling.
   </td>
   <td>Float
   </td>
   <td>Required
   </td>
   <td>0-1
   </td>
  </tr>
  <tr>
   <td><strong>topK</strong>
   </td>
   <td>Controls top-K sampling.
   </td>
   <td>Int
   </td>
   <td>Required
   </td>
   <td>1-100
   </td>
  </tr>
  <tr>
   <td><strong>stopSequence</strong>
   </td>
   <td>Stop sequences for the model.
   </td>
   <td>Array
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
</table>


**Scaling Parameters**


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>RANGE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>maxBatchSize</strong>
   </td>
   <td>Maximum batch size.
   </td>
   <td>Int
   </td>
   <td>Optional
   </td>
   <td>1-256
   </td>
  </tr>
  <tr>
   <td><strong>minReplicas</strong>
   </td>
   <td>Minimum replicas.
   </td>
   <td>Int
   </td>
   <td>Optional
   </td>
   <td>1-10
   </td>
  </tr>
  <tr>
   <td><strong>maxReplicas</strong>
   </td>
   <td>Maximum replicas.
   </td>
   <td>Int
   </td>
   <td>Optional
   </td>
   <td>1-50
   </td>
  </tr>
  <tr>
   <td><strong>scaleUpDelay</strong>
   </td>
   <td>Delay before scaling up (ms).
   </td>
   <td>Int
   </td>
   <td>Optional
   </td>
   <td>1-1000
   </td>
  </tr>
  <tr>
   <td><strong>scaleDownDelay</strong>
   </td>
   <td>Delay before scaling down (ms).
   </td>
   <td>Int
   </td>
   <td>Optional
   </td>
   <td>50-2000
   </td>
  </tr>
</table>


**Deployment Device & Optimization**


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>ENUM VALUES</strong>
   </td>
  </tr>
  <tr>
   <td><strong>deviceType</strong>
   </td>
   <td>Device type for deployment.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
   <td>["g4dn.xlarge", "g5.xlarge", "g5.2xlarge", "g6e.xlarge", "g4dn.12xlarge", "g5.12xlarge", "g5.48xlarge", "g4dn.metal"]
   </td>
  </tr>
  <tr>
   <td><strong>optimizationInfo</strong>
   </td>
   <td>Optimization details.
   </td>
   <td>Object
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><strong>optimizationType</strong>
   </td>
   <td>Type of optimization.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>["ctranslate2", "vllm"]
   </td>
  </tr>
  <tr>
   <td><strong>quantizationType</strong>
   </td>
   <td>Type of quantization.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>["no_quantization", "int8_float16"]
   </td>
  </tr>
</table>

## Sample Response

```js
{
  "dock-statusId": "ds-d0xxxxxd-bxx9-5xx0-8xx5-5bxxxxxxxxx1",
  "modelId": "cm-77xxxxxb-exx9-5xxc-8xx6-5xxxxxxxxxx1",
  "jobType": "MODELS",
  "action": "DEPLOY",
  "status": "IN_PROGRESS"
}
```

## Response Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
  </tr>
  <tr>
   <td><b>dockStatusId</b>
   </td>
   <td>The unique identifier for tracking the model deployment.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><b>modelId</b>
   </td>
   <td>The model that was deployed.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><b>jobType</b>
   </td>
   <td>Specifies the type of job (e.g., "<em>MODELS</em>").
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><b>action</b>
   </td>
   <td>Indicates the performed action ("<em>DEPLOY</em>").
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><b>status</b>
   </td>
   <td>Deployment status ("<em>SUCCESS</em>", "<em>IN_PROGRESS</em>", or "<em>FAILED</em>").
   </td>
   <td>String
   </td>
  </tr>
</table>
