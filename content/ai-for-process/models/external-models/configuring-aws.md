[:octicons-arrow-left-24: Back to Add an External Model](../external-models/add-an-external-model-using-easy-integration.md)

# Configuring Amazon Bedrock Models

To ensure secure cross-account access, this setup follows the principle of least privilege. You must create an IAM Role that grants only the required permissions to invoke Bedrock models and explicitly trusts the platform to assume this role via AWS STS.

To integrate your Bedrock models, you will need to:

1. Set up IAM credentials and a trust policy to allow access.
2. Provide the correct Model ID and deployment region.
3. Test the configuration and map the output.


## Step 1. Setting Up Credentials and Trust Policy (IAM Role and STS)

### A. Create IAM Role and Configure Trust Policy

To begin, you must create an IAM role in your AWS account that allows Agent Platform to securely access Amazon Bedrock models. This role defines permissions and establishes a trust relationship so that the platform can assume the role via AWS STS.

Follow the steps below to configure the IAM role and trust policy:

**1. Create the IAM Role in Your AWS Account**

Create a new IAM role in your AWS account that grants access to invoke Amazon Bedrock models. This role will be assumed by the platform to make Bedrock API calls on your behalf.

You can follow the IAM role creation setup in the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html).

For best practices on setting up IAM policies for Bedrock, see the
[AWS policy examples guide](https://docs.aws.amazon.com/bedrock/latest/userguide/security_iam_id-based-policy-examples.html). 

Assign the necessary permissions to the role. An example IAM policy is shown below:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel",
        "bedrock:ListFoundationModels"
      ],
      "Resource": "*"
    }
  ]
}
```

**2. Set the Trust Policy in Your AWS Account**

Set the trust policy to allow the platform to assume the IAM role. Replace `<kore-arn>` with the AWS account ID provided by the platform.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "<kore-arn>"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

For private/on-prem deployments, the trust policy should point to your internal AWS IAM role.

**3. Set the STS Endpoint**

Use the STS endpoint for the region where your IAM role resides.

You can find the full list of STS endpoints in the [AWS documentation](https://docs.aws.amazon.com/general/latest/gr/sts.html). 

For example:

```
https://sts.us-east-1.amazonaws.com/
```

Ensure the STS region matches the region of your IAM role — not necessarily the region of the model.

### B. Raise a Support Ticket to Register your IAM Role

After creating the IAM role in your AWS account, create a support ticket to update the trust policy with your IAM Role ARN. This allows the platform to assume the role and invoke Bedrock.

To complete the registration:

1. Raise a support ticket with your IAM role ARN, requesting that it be added to the trust policy.
2. Wait for confirmation from Support that the role has been registered.

**Note**: Without this step, the platform cannot assume your IAM role. Both your AWS account and Kore.ai’s environment must explicitly trust each other for secure cross-account access.



## Step 2. Finding the Right Model ID and Region

Amazon Bedrock supports different model ID formats depending on how the model is deployed. This section outlines how to find the correct values for each case.

**1. Base Foundation Models**

If you're using base foundation models provided by Bedrock, you can use their standard model IDs directly. Refer to the complete list in the [AWS Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html).


**2. Marketplace-Deployed Models**

If you’ve subscribed to a model through the AWS Marketplace:

1. Go to **Bedrock Console → Model Access → Subscriptions**.
2. Locate the **Model ARN** or a Marketplace Model ID. For example:
   ```
   arn:aws:bedrock:us-east-1::foundation-model/your-model-id
   ```
3. In the **Model ID** field, enter only the model name (after `foundation-model/`).

**3. Models with Inference Profiles (Provisioned Throughput)**

For models that do not support on-demand throughput (like Claude 3), you must create a Provisioned Throughput inference configuration.

1. Go to **Bedrock Console > Provisioned Throughput**.
2. Select or create an **inference configuration**.
3. Copy the **Inference ARN** or ID. For example:
   ```
   bedrock:provisioned-model-inference/my-throughput-id
   ```
4. Use the `my-throughput-id` value in the **Model ID** field.


## Step 3. Testing and Mapping the Model

Once you’ve provided credentials and model details, you can test your configuration and map model responses.

**1. Define Prompt Variables**

In the Prompt Variables section, add any variables used in your request payload.

For example:

* `prompt`: user input
* `system.prompt`: system instructions


**2. Define Request Body**

Use {{variableName}} to bind input fields dynamically.

Example payload:

```
{
  "prompt": "{{prompt}}",
  "max_tokens": 200,
  "temperature": 0.8
}
```

**3. Test the Configuration**

1. Provide test values for the input variables.
2. Click **Test** to invoke the model.
3. Review the raw response.

**Note**: If the call fails, ensure the IAM Role, STS endpoint, and model ID are valid.

**4. Map Output Fields**

Configure JSON paths to extract:

* Model output (e.g., response text)
* Input and output token counts

Example:

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>JSONPath</strong>
   </td>
  </tr>
  <tr>
   <td>Output Text
   </td>
   <td><code>$.output.text</code>
   </td>
  </tr>
  <tr>
   <td>Input Token Count
   </td>
   <td><code>$.usage.input_tokens</code>
   </td>
  </tr>
  <tr>
   <td>Output Token Count
   </td>
   <td><code>$.usage.output_tokens</code>
   </td>
  </tr>
</table>








