# Create Projects

Before running any evaluations, you need to create a project in Evaluation Studio. A project serves as a workspace dedicated to a single Agentic app, where all related evaluations and session data are organized.

<Note> Projects are scoped to a single Agentic app. All evaluations related to that app will remain part of this project. You can continue to import more sessions to the same project as needed. However, projects are limited to sessions from the same app version and environment. </Note>

**Steps to create a new project:**

1. Log in to the Platform and go to Evaluation Studio.
2. In the left pane, select **Agentic Evaluation**.


    ![Create project](./../agentic-evaluation/images/create_project.png "Create project")



3. Select **New Project**.
    1. Enter a name for your project.
    2. Select the Agentic app for which you are creating the project.
    3. Select the environment for the app (for example, Draft, Testing, or Production). The selected environment determines which version of the agent is used when running simulations.


    ![New project dialog](./../agentic-evaluation/images/new_project.png "New project dialog")



4. On the Quick Overview page, if you want to use:
    1. **Simulated data:** Create **Personas** → Define **Test Scenarios** → Run **Simulations** to import simulated sessions into an evaluation.
    2. **Production data:** Select **Evaluations** to directly import sessions from deployed Agentic apps.


    ![quick overview](./../agentic-evaluation/images/mainscreen.png "quick overview")


