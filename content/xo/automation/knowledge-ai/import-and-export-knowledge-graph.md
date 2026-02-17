[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Import and Export a Knowledge Graph

You can build a Knowledge Graph in a CSV or JSON file and upload it to an AI Agent. Similarly, you can export the existing Knowledge Graph to CSV or JSON. Exporting a Knowledge Graph helps you edit it in a spreadsheet or import it to another AI Agent.

The allowed limit is a maximum of 50k FAQs spread across a maximum of 20k nodes.

The XO Platform allows you to import any AI Agent with a file size up to 50MB. If you try to import an AI Agent with more than 50MB size, the import process fails.

## Import

<div class="admonition warning">
<p class="admonition-title">Caution</p>
<p>Importing a Knowledge Graph replaces the existing one. Please proceed with caution and follow the steps below carefully.</p>
</div>

To import a Knowledge Graph, follow the steps below:

1. To import the KG and go to **Automation AI** > **Knowledge AI** > **FAQs**.
2. In the top right corner, click **more** icon.
3. Click **Import** option on the respective Knowledge Graph.
    ![alt_text](images/kg-more.png )


5. In the **Import FAQs** dialog, do one of the following based on the scenario:
    * For a new Knowledge Graph, click **Proceed**.
    * For an existing Knowledge Graph, take a backup CSV or JSON file, and then click **Proceed**.
     ![alt_text](images/import-faq.png )

6. Drag and drop the file to the **Import** window or click **Browse** to locate the file.
7. Click **Next** to begin the import.
<img src="../images/click-begin-import.png" alt="click begin import" title="click begin import" style="border: 1px solid gray; zoom:75%;">

After the import is complete, the success message appears in a dialog box. 
8. Click **Done**.

The hierarchy is displayed in the Knowledge Graph which you can edit and use to train your AI Agent.

## Export

To export a Knowledge Graph, follow the below steps:

1. To export the KG and go to **Automation AI** > **Knowledge AI** > **FAQs**.
2. In the top right corner, click **more** icon.
     ![alt_text](images/kg-more.png )

3. Based on the preferred format: click **Export JSON** or **Export CSV**.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>Please read the warning message shown below before clicking <b>Confirm</b>. To learn more about caching challenges and strategies, click <a href="https://aws.amazon.com/builders-library/caching-challenges-and-strategies/#:~:text=Caches%20are%20also%20susceptible%20to%20poisoning%20attacks%2C%20in%20which%20a,will%20see%20the%20malicious%20value">here</a>.</p>
    </div>

    <img src="../images/export-caching-notice-message.png" alt="export caching message" title="export caching message" style="border: 1px solid gray; zoom:75%;">

    When these steps are completed, the Knowledge Graph file is downloaded to your machine.
