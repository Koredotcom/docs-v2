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

<Note>The Platform integrates with the XO Platform marketplace.</Note>

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

![tools library](./images/tools-library.png "tools library")



## Access and Install a Tool Template

To access a tool template, follow the steps below:

1. Log in to your account and click **Tools** from the list of modules.
2. Click **Tools** on the top navigation bar to access the **Tools** dashboard.
3. If you are adding your first tool, click **Tool templates**.

![first tool](./images/first-tool-template.png "first tool")



      Otherwise, click either the **All Tools** or **My Tools** tab. Then, click **Tool Templates** to access the Tools library/Marketplace.


    ![tools template section](./images/tools-template-nav.png "tools template section")



4. Scroll down to the **Tools** section.
5. Select the required **Categories** and **Tasks** from the left filter to view the relevant templates.


    ![Select category and task](./images/select-category-tasks.png "Select category and task")



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

    ![install tool](./images/click-tool-install.png "install tool")

    The system redirects you to the **Tool Flow** page. Click **Go to Flow** to view and manage the prebuilt tool flow canvas. [Learn more](../tools/tool-templates.md#view-and-manage-tool-flow).

**Important Considerations** 

* Once you install a **tool template**, it's listed in the **My Tools** section.
* A *PDF* document with the key details listed below is displayed. You can download and save this page for future reference.

    * Input to the Agent
    * Output from the Agent
    * Configuring Environment Variables
    * How to Use the Agent
    * Key components
    * Additional configuration guidelines

      ![tools pdf](./images/tools-pdf.png "tools pdf")



* **Naming Convention**
    
    * The first installation of a template retains its original name and description.

    ![first tool installation](./images/first-tool-installation.png "first tool installation")



    * When you reinstall the same template, the system notifies you of a duplicate and appends a unique number to the name to prevent conflicts in the format: `<em>Tool Template Name + "_" + System-Generated Sequential Number</em>`
    * Example: <em>Automatic grading system_1743151769005</em>

      ![tool seq numbering](./images/tool-seq-numbering.png "tool seq numbering")



## Managing the Tool Template

To modify your tool's general details, such as its name and description, asynchronous configuration, and environment variables, or to undeploy, and delete the tool, follow these steps:

1. Access the **Tools** dashboard and click the required tool.
2. On the left navigation menu, click **Configurations**.

   ![configurations](./images/configurations-tools.png "configurations")

  

3. Perform the required action on the page like tool renaming or [deletion](../tools/tool-templates.md#delete-a-tool-template). To configure other tool options, refer [here](../tools/configure-a-tool.md).

### View and Manage Tool Flow

Once you install a tool template, you can access its prebuilt flow and modify it based on your business requirements. To access the [tool flow](./tool-flows/flows-overview.md), follow the steps below:

1. Click the required tool template on the <b>Tools</b> dashboard.
2. Click **Go to Flow**.


      ![go to flow](./images/go-to-flow-automatic-grading.png "go to flow")



  The prebuilt flow is displayed on the canvas.

   <Note>Appropriate canvas-level errors are displayed (in the error log) with a fresh installation of templates since models won't be connected in Gen AI nodes, the API nodes will be empty, etc. You can view and fix the errors by clicking the <b>warning</b> icon.</Note>


   ![canvas level errors](./images/canvas-level-errors.png "canvas level errors")



   Each node available on the prebuilt flow canvas is automatically mapped to the relevant node type. You can view the node configurations on the **General Settings** panel, as shown below.

   ![node mapping](./images/node-mapping.png "node mapping")



3. <a href="../tool-flows/manage-flow-nodes/">Manage nodes and their configurations</a> in the flow, <a href="../tool-flows/perform-other-actions-on-the-flow-builder/manage-input-and-output">edit input and output</a>, and <a href="../tool-flows/perform-other-actions-on-the-flow-builder/run-the-flow">run the flow</a> as required to customize the tool flow. To view the changes made to the tool flow, use the change log. <a href="../tool-flows/tool-canvas-change-log">Learn more</a>.

### Delete a Tool Template

To delete a tool template, follow the steps below:

1. Scroll down to the **Delete tool** section on the **Configurations** page.
2. Click **Proceed to delete**.

   ![proceed to delete](./images/proceed-to-delete.png "proceed to delete")

  

3. Click **Delete** in the confirmation dialog.


      ![delete tool confirm](./images/delete-tool-confirm.png "delete tool confirm")

  

<Note>Deleting the tool is irreversible and removes all the associated data.</Note>
