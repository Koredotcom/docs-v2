# Enterprise Key Management 

Enterprise Key Management is a core security feature that protects data on the Platform through encryption. It allows organizations to control how encryption is implemented and managed for their data, ensuring the security of sensitive enterprise data, user information, and other content captured by the Platform.  

The Platform offers two primary approaches to key management:

* **Platform-managed encryption**, which uses the built-in key management service, or
* **Bring Your Own Keys (BYOK),** which allows integration with external Key Management Systems.

## Inbuilt Key for Encryption

The platform automatically encrypts all data using built-in, platform-managed keys. It handles key rotation and the entire key lifecycle without user intervention. Encryption keys are automatically rotated every 90 days to maintain a high level of security.

## Bring Your Own Key

This feature enables custom encryption using keys controlled by the organization. The encryption and decryption processes depend on keys stored in the organization's Key Management System (KMS). The platform securely communicates with the external KMS to perform cryptographic operations. Third-party Key Management Systems are responsible for managing the lifecycle of these keys. The Platform integrates with the KMS to retrieve the encryption keys.

Whenever custom encryption is available via the configured key management system, it's used for all content encryption. Else, the default encryption serves as the fallback. 

!!!note
    In the Platform, the encryption key configuration is implemented at the account level, unlike in the AI for Service platform, where it's applied at the app level. As a result, all apps within a given account in the Platform use the same encryption key. 


### Supported providers

* AWS KMS
* Azure Key Vault


### Prerequisites

* Access to a supported KMS provider.


### Configure BYOK

When configuring Bring Your Own Key (BYOK), you must provide specific details based on the cloud provider managing your encryption keys. These parameters allow the platform to securely access and manage encryption operations.

1. Navigate to Settings -> Key Management.
2. Click Configure BYOK.
3. Select the Cloud provider and provide the configuration details. Currently, the platform supports 
    1. Azure Key Management System
    2. AWS


#### Azure Key Vault Configuration

Ensure that the service principal has the following permissions:


* Key Vault Crypto Service Encryption User
* Microsoft.KeyVault/vaults/keys/encrypt/action
* Microsoft.KeyVault/vaults/keys/decrypt/action
* Microsoft.KeyVault/vaults/keys/wrap/action
* Microsoft.KeyVault/vaults/keys/unwrap/action
* Microsoft.KeyVault/vaults/keys/read

Provide the following configuration details:

* Key Vault URL — The endpoint of your Azure Key Vault instance that stores the encryption key.
* Tenant ID —The unique identifier of the Microsoft Entra ID tenant that is associated with the Azure subscription where the Key Vault is created. 
* Key Nickname — A user-defined name to easily identify the key within the platform.
* Lifecycle Settings — Defines how the key is managed throughout its lifecycle, including activation.
    * Activation Date — The date from which the key becomes active and available for use.


#### AWS KMS Configuration

Ensure that the service principal has the following permissions. Below is an AWS IAM policy snippet that lists the required permissions to access the KMS.


```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:Encrypt",
        "kms:Decrypt",
        "kms:DescribeKey",
        "kms:GenerateDataKey"
      ],
      "Resource": "arn:aws:kms:*:*:key/*",
      "Condition": {
        "StringEquals": {
          "kms:EncryptionContext:tenant_id": "${aws:RequestedRegion}"
        }
      }
    }
  ]
}
```


Provide the following configuration details:

* ARN — The Amazon Resource Name (ARN) that uniquely identifies your AWS KMS key.
* Role ARN — The ARN of the IAM role that grants permission for the platform to access and use your KMS key.
* Key Nickname — A user-friendly label to identify the key within the platform.
* Lifecycle Settings — Defines the key’s lifecycle management rules.
    * Activation Date — The date from which the key becomes active and can be used for encryption and decryption operations.
