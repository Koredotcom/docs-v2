# Tool Templates

Instead of building a tool flow from scratch, **Tool Templates** enable you to access pre-configured tool flows that are pre-configured tool flows that are designed and tailored to your business use case from the Tools library/marketplace. These pre-built integrations across various domains provide a fast, no-code way to automate repetitive tasks and streamline operations, requiring minimal setup.

You can customize the tool’s actions (how the tool responds) and enhance the automation flow. Simply select a template and import it into the Tools dashboard with zero coding efforts. The template types you can leverage include:

* **Pre-built templates**: These ready-to-deploy templates come with use-case scenarios and pre-configured integrations, like an email auto-replier or an automated grading system.
* **Customizable templates**: The various node types in the tool flow on the Platform allow you to tailor the tool flow to your business needs.

Tool templates are the foundation for building AI tools. They provide a structure for workflows, ensuring a smooth user experience. They're a reliable and efficient starting point for automating tasks like lead capture, order scheduling, and customer support.  

**Key Benefits**

* **Quick Set Up**

    Pre-built and customizable tool flows enable effortless AI tool deployment, significantly reducing time and costs while ensuring efficiency and adaptability to specific needs.

* **Customizable**

    You can customize tool flows on the canvas by retaining essential prebuilt elements and removing unnecessary ones from the tool template while leveraging proven automation patterns.

* **Seamless Integration**

    Within minutes, your tool template can seamlessly integrate into existing tool flows and automate key actions, such as directly adding prospective leads to your CRM. 

* **Enhanced Developer Experience**

    These prebuilt templates eliminate repetitive tasks, ensuring smooth, uninterrupted automation while letting you build unique tool flows with minimal effort and no coding.

## Tools Library Marketplace 

The **Tools Library Marketplace** offers more than 50 prebuilt tool templates for the following categories and AI tasks the associated LLM should perform:

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The Platform integrates with the XO Platform marketplace.</p>
</div>

**Categories**

* Brand Insights
* Brand Monitoring
* CRM
* Competitive Analysis
* Competitor Insights
* Content
* Customer Support
* Digital Marketing
* Finance
* Horizontal
* Marketing
* Operations
* Retail
* Sales
* Social Media
* Social Media Management
* Social Media Monitoring
* Speech to text

**AI Tasks**

* topic
* sentiment
* summarization
* tagging
* intent
* content generation
<img src="../images/tools-library.png" alt="tools library" title="tools library" style="border: 1px solid gray; zoom:60%;">

## Access and Install a Tool Template

To access a tool template, follow the steps below:

1. Log in to your account and click **Tools** from the list of modules.
2. Click **Tools** on the top navigation bar to access the **Tools** dashboard.
3. If you are adding your first tool, click **Tool templates**.
<img src="../images/first-tool-template.png" alt="first tool" title="first tool" style="border: 1px solid gray; zoom:60%;">

      Otherwise, click either the **All Tools** or **My Tools** tab. Then, click **Tool Templates** to access the Tools library/Marketplace.

    <img src="../images/tools-template-nav.png" alt="tools template section" title="tools template section" style="border: 1px solid gray; zoom:60%;">

4. Scroll down to the **Tools** section.
5. Select the required **Categories** and **Tasks** from the left filter to view the relevant templates.

    <img src="../images/select-category-tasks.png" alt="Select category and task" title="Select category and task" style="border: 1px solid gray; zoom:60%;" />

6. Click the required template to view its information window.

       The information window includes the following details:

       * Tool template name
       * Template description
       * Categories the tool belongs to and the compatible LLM model
       * Configuration status
       * Prebuilt tool flow preview
       * Related or similar templates
       * Developer details, last updated timestamp, language used, and number of installations
       * **Install** button

7. Click **Install** to connect to the Marketplace and import the tool template, including its pre-configured flow.

    <img src="../images/click-tool-install.png" alt="install tool" title="install tool" style="border: 1px solid gray; zoom:60%;"></ol>

    The system redirects you to the **Tool Flow** page. Click **Go to Flow** to view and manage the prebuilt tool flow canvas. [Learn more](../tools/tool-templates.md#view-and-manage-tool-flow){:target="_blank"}.

**Important Considerations** 

* Once you install a **tool template**, it's listed in the **My Tools** section.
* A *PDF* document with the key details listed below is displayed. You can download and save this page for future reference.
    * Input to the Agent
    * Output from the Agent
    * Configuring Environment Variables
    * How to Use the Agent
    * Key components
    * Additional configuration guidelines
      <img src="../images/tools-pdf.png" alt="tools pdf" title="tools pdf" style="border: 1px solid gray; zoom:75%;">

* **Naming Convention**
    
    * The first installation of a template retains its original name and description.
    <img src="../images/first-tool-installation.png" alt="first tool installation" title="first tool installation" style="border: 1px solid gray; zoom:75%;">

    * When you reinstall the same template, the system notifies you of a duplicate and appends a unique number to the name to prevent conflicts in the format: <code><em>Tool Template Name + "_" + System-Generated Sequential Number</em></code>
    * Example: <em>Automatic grading system_1743151769005</em>
      <img src="../images/tool-seq-numbering.png" alt="tool seq numbering" title="tool seq numbering" style="border: 1px solid gray; zoom:75%;">

## Managing the Tool Template

To modify your tool's general details, such as its name and description, asynchronous configuration, and environment variables, or to undeploy, and delete the tool, follow these steps:

1. Access the **Tools** dashboard and click the required tool.
2. On the left navigation menu, click **Configurations**.
   <img src="../images/configurations-tools.png" alt="configurations" title="configurations" style="border: 1px solid gray; zoom:75%;">  

3. Perform the required action on the page like tool renaming or [deletion](../tools/tool-templates.md#delete-a-tool-template){:target="_blank"}. To configure other tool options, refer [here](../tools/configure-a-tool.md){:target="_blank"}.

### View and Manage Tool Flow

Once you install a tool template, you can access its prebuilt flow and modify it based on your business requirements. To access the [tool flow](./tool-flows/flows-overview.md), follow the steps below:

1. Click the required tool template on the <b>Tools</b> dashboard.
2. Click **Go to Flow**.

      <img src="../images/go-to-flow-automatic-grading.png" alt="go to flow" title="go to flow" style="border: 1px solid gray; zoom:75%;">

  The prebuilt flow is displayed on the canvas.

   <div class="admonition note">
   <p class="admonition-title">Note</p>
   <p>Appropriate canvas-level errors are displayed (in the error log) with a fresh installation of templates since models won't be connected in Gen AI nodes, the API nodes will be empty, etc. You can view and fix the errors by clicking the <b>warning</b> icon.</p>
   </div>

   <img src="../images/canvas-level-errors.png" alt="canvas level errors" title="canvas level errors" style="border: 1px solid gray; zoom:75%;">

   Each node available on the prebuilt flow canvas is automatically mapped to the relevant node type. You can view the node configurations on the **General Settings** panel, as shown below.
   <img src="../images/node-mapping.png" alt="node mapping" title="node mapping" style="border: 1px solid gray; zoom:75%;">

<ol start="3"><li><a href="../tool-flows/manage-flow-nodes/">Manage nodes and their configurations</a> in the flow, <a href="../tool-flows/perform-other-actions-on-the-flow-builder/manage-input-and-output">edit input and output</a>, and <a href="../tool-flows/perform-other-actions-on-the-flow-builder/run-the-flow">run the flow</a> as required to customize the tool flow. To view the changes made to the tool flow, use the change log. <a href="../tool-flows/tool-canvas-change-log">Learn more</a>.</li></ol>

### Delete a Tool Template

To delete a tool template, follow the steps below:

1. Scroll down to the **Delete tool** section on the **Configurations** page.
2. Click **Proceed to delete**.
   <img src="../images/proceed-to-delete.png" alt="proceed to delete" title="proceed to delete" style="border: 1px solid gray; zoom:75%;">  

3. Click **Delete** in the confirmation dialog.

      <img src="../images/delete-tool-confirm.png" alt="delete tool confirm" title="delete tool confirm" style="border: 1px solid gray; zoom:75%;">  

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Deleting the tool is irreversible and removes all the associated data.</p></div>
