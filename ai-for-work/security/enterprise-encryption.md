# Enterprise Encryption

**Enterprise Encryption** secures organizational data with flexible, enterprise-grade encryption options that meet both compliance and operational needs. Administrators can choose between a **system-generated Default Key** for quick setup or **Bring Your Own Key (BYOK)** for maximum control.

<img src="../images/enterprise-encryption_1.png" alt="enterprise-encryption" title="enterprise-encryption" style="border: 1px solid gray; zoom:80%;"/>

## Default Encryption Key Management

Default encryption keys provide a quick and secure setup without additional configuration.

**Viewing Default Key**

The default encryption key is displayed in the main interface, providing immediate visibility into your current encryption configuration.

### Managing Keys

* **Copy** -- Click **Copy** to add the key to your clipboard.
* **Refresh** -- Click **Refresh** to generate a new key instantly.

!!! note

    Default keys remain active and functional only when BYOK is not activated.

## Bring Your Own Key (BYOK) Configuration

Bring Your Own Key (BYOK) encryption for public cloud SaaS deployments allows enterprises to encrypt their entire account data while retaining full control over their encryption keys. Enterprises can use their own Customer Master Keys (CMKs) for encrypting all organizational data.

**Important Security Considerations**:

* Upon configuring BYOK, you cannot revert to default keys.
* You must safeguard your encryption key to prevent data loss.
* BYOK configurations cannot be deleted or changed once activated - contact support if modifications are needed.

### Prerequisites

Before configuring BYOK, ensure you have:

* An active **AWS** or **Azure** account with encryption services enabled.
* Permissions to create and manage ARNs (AWS) or Key Vault credentials (Azure).
* Access to the required resource identifiers.
* Completed setup steps in your **Azure tenant** or **AWS account** (refer to [Azure](../security/azure-enterprise-encryption.md) and [AWS](../security/aws-enterprise-encryption.md) developer documentation for details).

### BYOK Setup Process

Follow this guided configuration to integrate your cloud provider's encryption services seamlessly. The setup process includes validation steps to ensure your configuration works correctly before activation.

### Implementation Steps

1. **Start Setup**
    1. Navigate to **Admin Console > Enterprise Encryption**.
    2. Under **Bring Your Own Key**, click **Create Key**.
2. **Configure Cloud Provider Details**
    3. **Select Provider**: Choose **AWS** or **Azure**.
    4. **Enter Your Identifiers**:
         -  AWS:
             - **Key ARN**: Your KMS Customer Managed Key ARN.
             - **Assume Role ARN**: The IAM role ARN you created in AWS.
         - Azure:
             - **Key Vault URL**: Your Azure Key Vault URL.
             - **Tenant ID**: Your Azure tenant ID.
    5. **Review Pre-populated Values**:
         - AWS: The system displays the **Service Role ARN** and **Assume Role External ID** with a copy option. These values are required for configuring your IAM role trust policy in AWS.
         - Azure: The system displays the **Client ID** and **App Name** with a copy option. These values are required for configuring your Azure Key Vault access.
3. **Test Connection**
    1. Click **Test Connection** to validate:
        1. Key accessibility
        2. Correct permissions
        3. Authentication credentials
    2. If successful, click **Next**.
4. **Finalize Setup**: Click **Proceed** to complete the configuration.

!!!note
    The pre-populated values (Service Role ARN, External ID for AWS; Client ID, App Name for Azure) are provided by the system and must be used when configuring your cloud provider settings. Use the copy button to ensure accuracy.
   
## Post-Activation Key Management

Once BYOK is active:

* The system automatically enforces BYOK for all encryption operations.
* **View Only** -- Key details can be viewed but not edited, ensuring integrity. Default key actions (copy, refresh) are disabled.
* **No Removal Option** -- BYOK configurations are permanent once activated. Contact support if you need to make changes to your encryption setup.

## Configuration Flow Summary

### AWS Configuration

1. View pre-populated **Service Role ARN** and **External ID** in the admin console.
2. Complete AWS IAM role and KMS key setup using these values.
3. Return to admin console and enter your **Key ARN** and **Assume Role ARN**.
4. Test and activate the configuration.


### Azure Configuration

1. View pre-populated **Client ID** and **App Name** in the admin console.
2. Complete Azure Key Vault setup using these values.
3. Return to admin console and enter your **Key Vault URL** and **Tenant ID**.
4. Test and activate the configuration.