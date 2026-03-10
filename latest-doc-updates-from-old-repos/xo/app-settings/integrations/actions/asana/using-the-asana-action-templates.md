
# Using the Asana Action Templates

You can use the **Prebuilt Action Templates** from your Asana integration to auto-create dialog tasks and test them using the **Test** option.

Steps to create a dialog task using Asana action templates:

1. Ensure that you have configured [Asana](configuring-the-asana-action.md){:target="_blank"} and [installed templates](configuring-the-asana-action.md#step-2-install-the-asana-action-templates){:target="_blank"} successfully.

2.  Go to **Automation AI** > **Use Cases** > **Dialogs**. All the dialogs are displayed.  


3. Click the auto-created dialog. The the canvas opens with all required entity nodes, service nodes, and message scripts.

## Asana Actions

The following Asana action is supported in the latest version of the XO Platform:

<table border="1">
  <tr>
   <td><strong>Supported Actions</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Method</strong>
   </td>
  </tr>
  <tr>
   <td>Get a Task by ID
   </td>
   <td>Retrieves a task from the Asana integration using the task ID.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Find Tasks Created By a User
   </td>
   <td>Retrieves tasks created by a user from the Asana integration.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Find Tasks Assigned to User
   </td>
   <td>Retrieves tasks assigned to a user from the Asana integration.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>List All Projects
   </td>
   <td>Shows all projects in the Asana integration.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>List All Users
   </td>
   <td>Shows all users in the Asana integration.
   </td>
   <td>POST
   </td>
  </tr>
</table>



### Get Task by ID

Steps to fetch a task with ID from the Asana integration:

1. Refer to the [Installing the Asana Templates](configuring-the-asana-action.md#step-2-install-the-asana-action-templates){:target="_blank"} section to install this template.
2. The _Get Task by Id_ dialog task is added with the following components:  
<img src="../images/asana-action-img13.png" alt="Dialog task is added" title="Dialog task is added" style="border: 1px solid gray;zoom:50%;"/>  
    1. **getTaskById**: A user intent to fetch a task with ID from the Asana space.
    2. **taskId** – An entity node for entering the task ID.
    3. **getTaskByIdService** – A bot action service to fetch the task with the ID from the Asana integration. Click the **Plus** icon to expand to view the getTaskByIdService bot action component properties. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/asana_template-img5.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>  
      
        To add one or more responses, scroll down and click the **+Add Response** button:  
        <img src="../images/asana_template-img6.png" alt="Add Response" title="Add Response" style="border: 1px solid gray;zoom:50%;"/>  
          
        **Sample Response**

        ```
        {
                "data": {
                    "gid": "1204307990977944",
                    "assignee": {
                        "gid": "1204191722074650",
                        "name": "Alan Walker"
                    },
                    "created_at": "2023-03-31T11:11:44.658Z",
                    "created_by": {
                        "gid": "1204191722074650",
                        "name": "Alan Walker"
                    },
                    "name": "NEW TASK",
                    "notes": "The description",
                    "permalink_url": "https://app.asana.com/0/1xx60369/1XXX944",
                    "projects": [
                        {
                            "gid": "1204191735460369",
                            "name": "Int1"
                        }
                    ],
                    "workspace": {
                        "gid": "21968248715756",
                        "name": "xyz.com"
                    }
                }
            } 

        ```



    4. **getTaskByIdMessage** – A message node with script to display responses to find tasks with ID. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the AI Agent console to find a task with ID on Asana.
6. Enter the task ID when prompted by the AI Agent as shown below:  
<img src="../images/asana_template-img7.png" alt="Enter Task ID" title="Enter Task ID" style="border: 1px solid gray;zoom:50%;"/>

7. You will notice that a task is found with the ID on Asana. Expand and click the **View Task** button.  
<img src="../images/asana_template-img8.png" alt="Task found with ID" title="Task found with ID" style="border: 1px solid gray;zoom:50%;"/>

8. You can view the task on Asana.  
<img src="../images/asana_template-img9.png" alt="View task" title="View task" style="border: 1px solid gray;zoom:50%;"/>


### Find Tasks Created by a User

Steps to fetch tasks created by a user from the Asana integration:

1. Refer to the [Installing the Asana Templates](configuring-the-asana-action.md#step-2-install-the-asana-action-templates){:target="_blank"} section to install this template.
2. The _Find Tasks Created by User_ dialog task is added with the following components:  
<img src="../images/asana-template-img10-find_tasks.png" alt="Add dialog task to find tasks" title="Add dialog task to find tasks" style="border: 1px solid gray;zoom:50%;"/>

    1. **findTasksCreatedByUser**: A user intent to retrieve tasks created by a user from the Asana space.
    2. **workSpaceId** – An entity node for entering the workspace ID of your Asana account.
    3. **userId** – An entity node for entering the user ID of your Asana account.
    4. **findCreatedTasksService** – A bot action service to find tasks created by a user from the Asana integration. Click the **Plus** icon to expand to view the findCreatedTasksService bot action component properties. In the **Component Properties** window, to add one or more responses, scroll down and click the **+Add Response** button:  
    <img src="../images/asana-template-img11-find_tasks2.png" alt="Bot action service created" title="Bot action service created" style="border: 1px solid gray;zoom:50%;"/>  

        **Sample Response**

        ```
        {
                "data": [
                    {
                        "gid": "1204325494675011",
                        "assignee": {
                            "gid": "12041917XXX0",
                            "name": "Alan Walker"
                        },
                        "created_at": "2023-04-03T20:32:00.270Z",
                        "created_by": {
                            "gid": "1204191722074650",
                            "name": "Alan Walker"
                        },
                        "name": "30Apr NEW TASK",
                        "notes": "The description",
                        "Permalink_url": "https://app.asana.com/0/12XX369/1XXX11",
                        "projects": [
                            {
                                "gid": "1204191735460369",
                                "name": "Int1"
                            }
                        ],
                        "workspace": {
                            "gid": "21968248715756",
                            "name": "xyz.com"
                        }
                    },
                    {
                        "gid": "1204326178006294",
                        "assignee": {
                            "gid": "1204191722074650",
                            "name": "Alan Walker"
                        },
                        "created_at": "2023-04-03T22:28:25.171Z",
                        "created_by": {
                            "gid": "1204191722074650",
                            "name": "Alan Walker"
                        },
                        "name": "30Apr NEW TASK",
                        "notes": "The description",
                        "permalink_url": "https://app.asana.com/0/1XXX9/12XXX294",
                        "projects": [
                            {
                                "gid": "1204191735460369",
                                "name": "Int1"
                            }
                        ],
                        "workspace": {
                            "gid": "21968248715756",
                            "name": "xyz.com"
                        }
                    }
                ]
            } 
        }

        ```



3. **createdTaskMessage** – A message node with script to display responses to find tasks by a user.
4. Click the **Train** tab to complete the Dialog task training.
5. Click the **Talk to Bot** icon to test and debug the dialog task.
6. Follow the prompts in the App console to find tasks created with user ID on Asana as shown below:  
<img src="../images/asana-template-img12-find_tasks5.png" alt="Find tasks with user ID" title="Find tasks with user ID" style="border: 1px solid gray;zoom:50%;"/>

7. Enter the user ID when prompted by the AI Agent as shown below:  
<img src="../images/asana-template-img13-find_tasks6.png" alt="Enter user ID" title="Enter user ID" style="border: 1px solid gray;zoom:50%;"/>

8. You will notice that a task is found with the ID on Asana. Expand and click the **View Task** button.
9. You can view the task on Asana.  
<img src="../images/asana_template-img14.png" alt="View task" title="View task" style="border: 1px solid gray;zoom:50%;"/>


### Find Tasks Assigned to a User

Steps to fetch tasks created by a user from the Asana integration:

1. Refer to the [Installing the Asana Templates](configuring-the-asana-action.md#step-2-install-the-asana-action-templates){:target="_blank"} section to install this template.
2. The _FindTasks Assigned to a User_ dialog task is added with the following components:  
<img src="../images/asana-template-img15-find_task_assigned.png" alt="Dialog task to find task assigned to user is added" title="Dialog task to find task assigned to user is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **findTasksAssignedToUser**: A user intent to retrieve tasks assigned to a user from the Asana space.
    2. **workSpaceId** – An entity node for entering the workspace ID of your Asana account.
    3. **userId** – An entity node for entering the user ID of your Asana account.
    4. **findAssignedTasksService** – A bot action service to fetch the assigned tasks to a user from the Asana integration. Click the **Plus** icon to expand to view the findAssignedTasksService bot action component properties. In the **Component Properties** window, to add one or more responses, scroll down and click the **+Add Response** button:  
    <img src="../images/asana-template-img16-find_task_assigned1.png" alt="Bot action service created" title="Bot action service created" style="border: 1px solid gray;zoom:50%;"/>  
      
    
        **Sample Response**  

        ```
        {
                "data": [
                    {
                        "gid": "1204325494675011",
                        "assignee": {
                            "gid": "1204191722074650",
                            "name": "Alan Walker"
                        },
                        "created_at": "2023-04-03T20:32:00.270Z",
                        "created_by": {
                            "gid": "1204191722074650",
                            "name": "Alan Walker"
                        },
                        "name": "30Apr NEW TASK",
                        "notes": "The description",
                        "Permalink_url": "https://app.asana.com/0/1X69/1XX1",
                        "projects": [
                            {
                                "gid": "1204191735460369",
                                "name": "Int1"
                            }
                        ],
                        "workspace": {
                            "gid": "21968248715756",
                            "name": "xyz.com"
                        }
                    },
                    {
                        "gid": "1204326178006294",
                        "assignee": {
                            "gid": "1204191722074650",
                            "name": "Alan Walker"
                        },
                        "created_at": "2023-04-03T22:28:25.171Z",
                        "created_by": {
                            "gid": "1204191722074650",
                            "name": "Alan Walker"
                        },
                        "name": "30Apr NEW TASK",
                        "notes": "The description",
                        "permalink_url": "https://app.asana.com/0/1369/1294",
                        "projects": [
                            {
                                "gid": "1204191735460369",
                                "name": "Int1"
                            }
                        ],
                        "workspace": {
                            "gid": "21968248715756",
                            "name": "xyz.com"
                        }
                    }
                ]
            } 

        ```



3. **assignedTaskMessage** – A message node with script to display responses to find tasks assigned to the user.
4. Click the **Train** tab to complete the Dialog task training.
5. Click the **Talk to Bot** icon to test and debug the dialog task.
6. Follow the prompts in the App console to find a task with ID on Asana as shown below:  
<img src="../images/asana-template-img17-find_task_assigned3.png" alt="Find task" title="Find task" style="border: 1px solid gray;zoom:50%;"/>

7. Enter the user ID when prompted by the AI Agent as shown below:  
<img src="../images/asana-template-img18-find_task_assigned4.png" alt="Enter task ID" title="Enter task ID" style="border: 1px solid gray;zoom:50%;"/>

8. You will notice that a task is found with the ID on Asana. Expand and click the **View Task** button.


### List All Projects

Steps to retrieve all projects from the Asana integration:

1. Refer to the [Installing the Asana Templates](configuring-the-asana-action.md#step-2-install-the-asana-action-templates){:target="_blank"} section to install this template.
2. The _List All Projects_ dialog task is added with the following components:  
<img src="../images/asana-template-img19-list_all_projects.png" alt="Dialog task for listing tasks" title="Dialog task for listing tasks" style="border: 1px solid gray;zoom:50%;"/>

    1. **listAllProjects**: A user intent to retrieve tasks assigned to a user from the Asana space.
    2. **listAllProjectsService** – A bot action service to retrieve all projects from the Asana integration. Click the **Plus** icon to expand to view the listAllProjectsService bot action component properties. In the **Component Properties** window, to add one or more responses, scroll down and click the **+Add Response** button:  
    <img src="../images/asana-template-img20-list_all_projects1.png" alt="Bot action service for listing tasks" title="Bot action service for listing tasks" style="border: 1px solid gray;zoom:50%;"/>  
      

        **Sample Response**

        ```
        {
                "data": [
                    {
                        "gid": "1190334540433515",
                        "created_at": "2020-08-24T13:09:10.888Z",
                        "due_on": null,
                        "name": "integration",
                        "owner": {
                            "gid": "1190337001098545",
                            "name": "Alan"
                        },
                        "permalink_url": "https://app.asana.com/0/1xx5/1xx5",
                        "workspace": {
                            "gid": "21968248715756",
                            "name": "xyz.com"
                        }
                    },
                    {
                        "gid": "1199516117757228",
                        "created_at": "2021-01-07T14:21:04.105Z",
                        "due_on": null,
                        "name": "test",
                        "owner": {
                            "gid": "1190339858363088",
                            "name": "John Doe"
                        },
                        "permalink_url": "https://app.asana.com/0/1xx8/1xx8",
                        "workspace": {
                            "gid": "21968248715756",
                            "name": "xyz.com"
                        }
                    }
                ]
            }

        ```


3. **listProjectMessage** – A message node with script to display responses to find all projects..
4. Click the **Train** tab to complete the Dialog task training.
5. Click the **Talk to Bot** icon to test and debug the dialog task.
6. Follow the prompts in the App console to view all projects on Asana as shown below:  
<img src="../images/asana-template-img21-list_all_projects2.png" alt="VA prompt to list projects" title="VA prompt to list projects" style="border: 1px solid gray;zoom:50%;"/> 

7. You will notice that all projects are found on Asana. Expand and click the **View Project** button.


### List All Users

Steps to retrieve all users from the Asana integration:

1. Refer to the [Installing the Asana Templates](configuring-the-asana-action.md#step-2-install-the-asana-action-templates){:target="_blank"} section to install this template.
2. The _List All Users_ dialog task is added with the following components:  
<img src="../images/asana-template-img22list_all_users.png" alt="Dialog task to list users" title="Dialog task to list users" style="border: 1px solid gray;zoom:50%;"/> 

    1. **listAllUsers**: A user intent to retrieve tasks assigned to a user from the Asana space.
    2. **listAllUsersService** – A bot action service to find all users from the Asana integration. Click the **Plus** icon to expand to view the listAllUsersService bot action component properties. In the **Component Properties** window, to add one or more responses, scroll down and click the **+Add Response** button:  
    <img src="../images/asana-template-img23-list_all_users1.png" alt="Bot action service to find users" title="Bot action service to find users" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**

        ```
        {
                "data": [
                    {
                        "gid": "11xxxx674034",
                        "email": "alan.walker@xyz.com",
                        "name": "Alan Walker",
                        "workspaces": [
                            {
                                "gid": "219xxx756",
                                "name": "xyz.com"
                            }
                        ]
                    }
                ]
            }

        ```


3. **listAllUsersMessage** – A message node with script to display responses to find all projects.
4. Click the **Train** tab to complete the Dialog task training.
5. Click the **Talk to Bot** icon to test and debug the dialog task.
6. Follow the prompts in the App console to view all users on Asana as shown below:  
<img src="../images/asana-template-img24-list_all_users2.png" alt="Prompt in VA" title="Prompt in VA" style="border: 1px solid gray;zoom:50%;"/>

7. You will notice that all users are found on Asana. Expand and click the **View User** button.
