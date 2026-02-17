## Intent Extraction from Summary

**Q: How do you configure the “Intent Extraction from Summary” feature?**

**A:** Follow these steps to configure the **Intent Extraction from Summary** feature:

1. Go to **Bot Builder** > **Dialog Tasks**.
2. Click to open a **Dialog Task** node against which you want to set intent extraction.
3. Click **Component Properties** > **Edit Script** (click **Define Script**, if you are creating a new dialog task).
4. Add the context variable `context.session.BotUserSession.landingSummary` in the **Edit Script** field.  
<img src="../faq/edit-script.png" alt="edit-script" title="edit-script" style="border: 1px solid gray; zoom:80%;">
5. Click **Save**.
6. Go to **Welcome Event > Configure On-Connect Dialog Task**, and enable it.
7. Select the relevant dialog task from the **Select Dialog** dropdown list, and enable the **Extract intents from On Connect Dialog Task** checkbox.
8. Click **Save**.  
<img src="../faq/welcome-events-extract-intents.png" alt="welcome-events-extract-intents" title="welcome-events-extract-intents" style="border: 1px solid gray; zoom:80%;">
