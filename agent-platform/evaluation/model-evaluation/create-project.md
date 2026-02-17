# Projects

In Evaluation Studio, projects act as the core containers for organizing evaluations. Each project can store multiple evaluations, and each evaluation contains a distinct dataset.

### Key Features

* **Project Management**: Users can create, rename, and delete projects as needed. When a project is deleted, all associated evaluations and datasets are also removed, ensuring a clean slate.
* **Collaboration**: Projects can be easily shared with collaborators, enabling seamless teamwork and collaborative model assessments. User invitations are limited to the project level; users cannot be invited at the evaluation level.
* **Permissions**: Permissions determine who can create, view, or manage evaluations within the project. Permissions are applied consistently across all evaluations within a project. Once users are invited to a project and begin creating evaluations, they will have access to all evaluations within that project based on their role.

## Roles and Permissions in Evaluation Studio

In Evaluation Studio, roles and permissions help manage who can access and modify projects and evaluations.

**Key Roles:**

* **Admin**: Full access to create, modify, and delete projects and evaluations. Admins can also manage user permissions and invite new users.
* **Editor**: Can create and modify evaluations within a project, but cannot manage users or project-level settings.
* **Viewer**: Read-only access. Viewers can:
    * View all evaluations and scores
    * View score explanations
    * View evaluator properties

## Creating a New Project

Steps to create a new project:

1. Navigate to Model Evaluation.
2. On the Projects tab, click **New Project**.
<img src="../../images/project.png" alt="Projects" title="Projects" style="border: 1px solid gray; zoom:80%;"/> 

3. In the **Create a new project** dialog, enter a name for the new project. Ensure the project name does not exceed the predefined character limit (e.g., 100 characters).
    <img src="../../images/create_new_project.png" alt="Create project" title="Create project" style="border: 1px solid gray; zoom:80%;"/> 

4. Click **Create** to submit the project creation request.
Once the project is created successfully, the system will redirect you to the newly created project’s main page.

5. On the Project page, click the More options icon (three dots) in the row of the project you want to manage for the following options:
    * **Rename**: Use this option to change the project name. 
    * **Delete**: Use this option to delete the project. A confirmation message appears, asking for confirmation to delete the project. If the user confirms, the project and all its associated datasets will be permanently deleted.
    * **Share**: Use this option to share the project with other users by providing email addresses or user identifiers.

    <img src="../../images/project_threedots.png" alt="Create project" title="Create project" style="border: 1px solid gray; zoom:80%;"/> 


## Key Highlights

* Users can create, delete, and share projects.
* Users can add evaluations under a project. When a project is deleted, all associated evaluations and datasets will be deleted as well.
* Each project has an accessible evaluation section where users can manage multiple evaluations.
* Projects enable seamless teamwork through collaboration, with permissions defining user access to create, view, or manage evaluations based on their role within the project.
