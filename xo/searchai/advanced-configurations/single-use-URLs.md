# Single-Use URLs for Uploaded Documents

When a file is ingested into Search AI for indexing, a signed URL is automatically generated for the uploaded document on the server. These URLs are used as references or citations when search results or answers are derived from the corresponding document.

The signed URL provides secure, temporary access to the document. It is valid for **a single use** or **5 minutes**, whichever comes first. This ensures controlled access and prevents unauthorized sharing.

By default, **Single-Use URLs** are enabled in Search AI. You can manage this setting using the **‘Signed URL for File Upload’** option in the **Advanced Configuration** settings.

!!! note
    This applies only to uploaded documents. References for data from connectors or web pages include a direct link to the corresponding web page or third-party application.