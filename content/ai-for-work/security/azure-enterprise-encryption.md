# Azure Key Vault BYOK Integration Setup

Integrating Azure Key Vault with our application establishes a secure connection between your encryption keys and our multi-tenant platform, enabling Bring Your Own Key (BYOK) functionality. This document provides step-by-step instructions for the following:

1. Authorize our application in your Azure tenant.
2. Configure your Key Vault and encryption key.
3. Grant the necessary access permissions to our application.
4. Complete the integration by sharing required information and approving connections. 

## Authorize our application in your Azure tenant

To enable our application to operate within your Azure environment, you need to grant it access by registering it as a service principal. Follow these steps:

1. **Sign in to the Azure portal** using an account with Global Administrator privileges for your tenant.
2. **Grant admin consent** using one of the following methods: 

*   **Option A: Admin Consent URL** Navigate to the following URL in your browser after logging in as Global Administrator, replacing `<your-tenant-id>` with your tenant ID (found in **Microsoft Entra ID** > **Properties**): ``https://login.microsoftonline.com/<your-tenant-id>/adminconsent?client_id=<our-app-client-id>``.
*   **Option B: Azure CLI** Run the following command as Global Administrator, replacing `<our-app-client-id>` with our application's client ID (provided by our team): ``az ad sp create --id '<our-app-client-id>'``.

This step registers our application in your tenant, enabling it to interact with your Key Vault securely.

## Configure your Key Vault and encryption key

Set up or select an existing Azure Key Vault to store the encryption key for BYOK functionality. For detailed guidance, refer to the [Azure Key Vault documentation](https://learn.microsoft.com/en-us/azure/key-vault/general/overview).

1. **Ensure you have a Key Vault and RSA Key** prepared in your Azure subscription.
2. **Note the following details** that you'll share with our team:
    * **Key Vault URI**: The vault's URI (e.g., `https://<your-vault-name>.vault.azure.net/`).
    * **Key Identifier**: The full URI of the key, including its name and optional version (e.g., `https://<your-vault-name>.vault.azure.net/keys/<key-name>/<key-version>`).

## Grant access permissions to the application

Authorize the application to perform cryptographic operations with your key by assigning the appropriate roles.

1. **Navigate to your Key Vault** in the Azure portal and select **Access control (IAM)**.
2. **Add role assignments** by selecting **Add role assignment** and choosing the appropriate roles for our application's service principal (search application name or service principal):
    * **Key Vault Crypto User**: Allows cryptographic operations like wrapping and unwrapping keys, required for BYOK functionality
    * **Key Vault Reader**: Allows reading metadata about the Key Vault and its resources
3. **Save the changes** to grant access permissions.

## Complete the integration setup

Finalize the integration by sharing the required information and approving network connections.

Share required information:

Provide our team with the following details to complete the integration:

* Your **Tenant ID** (found in **Microsoft Entra ID** > **Properties** in the Azure portal).
* The **Key Vault URI** from step 2.
* The **Key Name**.


Approve the private endpoint connection:

After we configure the connection on our end:

1. Navigate to your **Key Vault** > **Networking** > **Private endpoint connections**.
2. Find and approve the pending connection request.

These steps ensure the application can securely access your Key Vault key for BYOK functionality without requiring your credentials or compromising security.
