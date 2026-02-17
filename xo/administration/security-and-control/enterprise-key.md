# Enterprise Key Management

Enterprise Key Management is a crucial security feature on the platform designed to safeguard data through encryption. The feature provides organizations with extensive control over their data encryption strategies. Administrators can utilize the Enterprise Key page to manage data encryption keys, which protect sensitive information stored on Kore.ai servers. This encompasses all enterprise data, user information, and app-related content. 

The platform offers two primary approaches to key management:

* **Default Encryption** - Automatic encryption using platform-managed keys.
* **Bring Your Own Key (BYOK)** - Custom encryption using organization-controlled keys.

## Default Encryption Key Management

### How It Works

By default, the platform automatically encrypts all enterprise data using a platform-managed encryption key. This includes:

* User data and profiles
* Bot configurations and conversations
* Enterprise settings

### Key Rotation

The encryption key follows a regular rotation schedule to maintain security:

* **Automatic rotation**: Every 60 days
* **Manual rotation**: Available on demand through the admin console

### Managing Default Keys

To generate a new enterprise data encryption key:

1. Navigate to the **Enterprise Key** page in the **Security & Control** module.  
<img src="../images/bac-enterprise-key.png" alt="Enterprise key" title="Enterprise key" style="border: 1px solid gray;zoom:70%;"/>

2. Click the **Refresh** button. The system will generate and apply a new encryption key immediately.

## Bring Your Own Key (BYOK)

Bring Your Own Key (BYOK) encryption in Kore’s public cloud SaaS gives enterprises complete control over their encryption keys while protecting sensitive data. With BYOK, organizations use their own Customer Master Keys (CMKs) to encrypt application and bot data, ensuring stronger security and compliance.

Kore’s BYOK solution integrates with external key management systems such as AWS Key Management Service (KMS) and Azure Key Vault. Customers retain ownership of their encryption keys while leveraging Kore’s secure, scalable cloud platform with HSM-backed keys.


