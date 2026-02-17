# AWS KMS BYOK Integration Setup

Integrating AWS Key Management Service (KMS) with our application establishes a secure connection between your encryption keys and our multi-tenant platform, enabling Bring Your Own Key (BYOK) functionality.

For detailed guidance on AWS KMS, refer to the [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html).


## Prerequisites

Information pre-populated in the interface:

When you initiate the BYOK setup in the admin console, the following values are automatically displayed and available for you to copy:

* **Service Role ARN**: `arn:aws:iam::<account-id>:role/<role-name>` (required to configure the IAM role trust policy).
* **External ID**: A unique value that you add to your IAM role trust policy to securely allow our service to assume the role in your AWS BYOK setup.

These pre-populated values ensure secure and accurate configuration of your IAM role.

Information you need to provide:

* **Role ARN**: The ARN of the IAM role you create (e.g., `arn:aws:iam::<your-account-id>:role/<role-name>`).
* **CMK ARN**: The ARN of your KMS Customer Managed Key (e.g.,`arn:aws:kms:<region>:<your-account-id>:key/<key-id>`).

## Step: 1 Ensure you have a KMS Customer Managed Key

Verify that you have a Customer Managed Key (CMK) in AWS KMS for encryption purposes.

1. Note the CMK ARN (e.g., `arn:aws:kms:<region>:<your-account-id>:key/<key-id>`), which can be found on the key's details page in the KMS console.
2. Save this ARN as you will share it with our team during the integration process.


## Step 2: Create an IAM role for our application

Set up an IAM role that our application can assume to access your KMS key.

1. Navigate to **IAM** > **Roles** > **Create role** in the AWS Console.
2. Select **Another AWS account** and enter our AWS Account ID (provided via email or customer portal).
3. Name the role (e.g., `YourAppAccessRole`) and create it.
4. Note the Role ARN (e.g., `arn:aws:iam::<your-account-id>:role/AIforWorkByokAccessRole`).

**Configure the trust policy**

1. Go to **IAM** > **Roles** > **Your role** > **Trust relationships** > **Edit trust policy**.
2. **Set the trust policy** as follows:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::<account-id>:role/<role-name>"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "<Provided-External-ID>"
        }
      }
    }
  ]
}
```

**Create and attach a permissions policy**

1. Navigate to **IAM** > **Policies** > **Create policy** > **JSON**.

2. Create a permissions policy with the following JSON:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowKMSActions",
      "Effect": "Allow",
      "Action": [
        "kms:Encrypt",
        "kms:Decrypt",
        "kms:ReEncrypt*",
        "kms:GenerateDataKey*",
        "kms:DescribeKey"
      ],
      "Resource": "<your-cmk-arn>"
    }
  ]
}
```

1. Name the policy (e.g., AIforWorkKMSPolicy) and create it.

2. Attach the policy to the role by going to **IAM** > **Roles** > **Your role** > **Add permissions** > **Attach policies**.

## Step: 3 Grant the role access to your Customer Managed Key

Authorize the IAM role to access your CMK by updating the key policy.

1. Navigate to the **KMS console** > **Customer managed keys** and select your CMK.
2. Go to the **Key policy tab** and switch to **Edit** mode.
3. Add the following policy statement to the existing policy's Statement array, replacing `<your-role-arn>` with the Role ARN.
```json
{
  "Sid": "AllowYourAppAccess",
  "Effect": "Allow",
  "Principal": {
    "AWS": "<your-role-arn>"
  },
  "Action": [
    "kms:Encrypt",
    "kms:Decrypt",
    "kms:ReEncrypt*",
    "kms:GenerateDataKey*",
    "kms:DescribeKey"
  ],
  "Resource": "*"
}
```

## Step 4: Validate IAM and KMS Configuration (Optional)

Run the following AWS CLI commands to validate that your IAM role and CMK key policy are configured correctly. This step is optional and does not validate the full BYOK integration.
```
aws sts assume-role \
  --role-arn arn:aws:iam::<YOUR-ACCOUNT-ID>:role/<ROLE-NAME> \
  --role-session-name test-session

aws kms describe-key \
  --key-id <YOUR-CMK-ARN> \
  --region <YOUR-REGION>

```

## Step 5: Service-Side Configuration

Contact [Kore.ai support](https://support.kore.ai/) to complete this step.

After you share your **Role ARN** with us, we configure our AWS account to assume the role and securely access your **KMS CMK** for BYOK. Once this is done, the BYOK configuration and test will work successfully.


## Step 6: Share required information

Provide the team with the following details to complete the integration:

* Your **CMK ARN** from step 1 (e.g., `arn:aws:kms:<region>:account-id>:key/<key-id>`).
* Your **Role ARN** from step 2 (e.g., `arn:aws:iam::<account-id>:role/<role-name>`).

These steps ensure the application can securely access your CMK for BYOK functionality while maintaining the highest security standards.
