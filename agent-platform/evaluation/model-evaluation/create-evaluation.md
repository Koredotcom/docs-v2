# Evaluations

Evaluations are central components within a project where users can test model performance against datasets. Each evaluation resides within a project and includes one dataset.

The addition of a dedicated evaluations folder under Projects eliminates the need to rename uploaded datasets according to the evaluation use case. Users can directly name the evaluation.

Evaluations provide flexible testing across different scenarios, supporting complete or incomplete CSV data such as input-output columns or handling missing outputs by later generating through a user-defined model. Once datasets are imported and mapped with the evaluators, users can run evaluations to gain insights into their model's performance, helping identify areas needing improvement.

## Creating an Evaluation

Each project contains an Evaluations section, which is visible and accessible once the project is created. The Evaluations section displays all evaluations associated with the project. A project can have multiple evaluations, and users can add datasets to any evaluation.

Steps to create an evaluation:

1. Navigate to Model Evaluation.
2. Click the **Projects** tab, and click the row of the project you want.
3. To create an evaluation, click **Create evaluation**.
    <img src="../../images/create_evaluation.png" alt="Create evaluation" title="Create evaluation" style="border: 1px solid gray; zoom:80%;"/> 

4. If there are existing evaluations for a project, the Evaluations section is displayed and users can view all evaluations associated with the project. To create a new evaluation, click **New evaluation**.  
    <img src="../../images/evaluations_landing.png" alt="Evaluation" title="Evaluation" style="border: 1px solid gray; zoom:80%;"/> 

5. In the **Create evaluation** dialog, enter a name for the evaluation and click **Done**.
Once the evaluation is created successfully, the system will redirect the user to the **Import dataset** page.
6. On the Evaluation page, click the three dots icon in the row of the evaluation you want to manage for the following options:
    * **Rename**: Use this option to change the name of the evaluation.
    * **Delete**: Use this option to delete the evaluation.


## Key Highlights

* Evaluations acts as a container or folder, organizing datasets within a project.
* Users can create multiple evaluations within a project to efficiently organize and manage different datasets.
* Evaluations can include multiple datasets, allowing comparison across different sets of data.
