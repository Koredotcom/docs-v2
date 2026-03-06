# Co-Browse Settings

Co-Browse is a feature that lets agents navigate the same web page simultaneously with the customer.

The co-browse setting allows businesses to automatically mask any field on the web page while collecting information from the customer. This feature helps prevent any sensitive or confidential data from being visible to agents while co-browsing with the customer.

Steps to configure co-browse settings:

1. Go to **Contact Center AI** > **CONFIGURATIONS** > **Settings** >  **System Settings** > **Co-Browse**.
2. Turn on the **Enable Co-Browse** toggle. Agents will see a co-browse option in their compose bar when interacting with customers in supported channels if enabled.
3. Enter the List of **Allowed Domains** (comma separated) to identify the domains that can run co-browse sessions.
4. Enter **Mask Patterns** (regular expressions, semicolon separated) to identify values that must be masked from the agent’s view.
5. Enter **Mask CSS Classes** to identify known CSS classes containing content that must be masked from the agent’s view.
6. Click **Save**.  

   <img src="../images/co-browse-system.png" alt="Co-Browse" title="Co-Browse" style="border: 1px solid gray; zoom:70%;">
