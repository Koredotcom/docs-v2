# Using the BambooHR Templates

You can use the **Prebuilt Action Templates** from your BambooHR integration to auto create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using the BambooHR action templates:

1. Ensure that you have configured [Bamboo HR](configuring-the-bamboohr-action.md){:target="_blank"} and [installed templates](configuring-the-bamboohr-action.md#step-2-install-the-bamboohr-action-templates){:target="_blank"} successfully.

2. Go to **Automation AI** > **Use Cases** > **Dialogs**. All the dialogs are displayed.


3. Click the auto-created dialog. The the canvas opens with all required entity nodes, service nodes, and message scripts.

## Bamboo HR Actions

The following BambooHR actions are supported:

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
   <td>Create an employee
   </td>
   <td>Creates an employee in the BambooHR system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Get employee by ID
   </td>
   <td>Find an employee using the employee ID.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>List all employee
   </td>
   <td>Retrieves all employees from the BambooHR system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Update an employee
   </td>
   <td>Updates an employee details in the BambooHR system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Get all time off requests
   </td>
   <td>Retrieves all time off requests from the BambooHR system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Get a list of who is out
   </td>
   <td>Find employees who are out on company holidays and for a period of time sorted by date.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Update a request status
   </td>
   <td>Updates a time off request’s status in the BambooHR system.
   </td>
   <td>POST
   </td>
  </tr>
</table>



### Create an Employee

Steps to create an employee in the BambooHR integration:

1. Refer to the [Installing the BambooHR templates](configuring-the-bamboohr-action.md#step-2-install-the-bamboohr-action-templates){:target="_blank"} section to install this template.
2. The Create an Employee dialog task is added with the following components:  
<img src="../images/bamboo-hr-tem-img4-create-employee.png" alt="Create Employee dialog task" title="Create Employee dialog task" style="border: 1px solid gray;zoom:50%;"/>

    1. **createEmployee** – A user intent to create an employee.
    2. **companyDomain**, **firstName**, and **lastName** – Entity nodes for gathering the required employee details.
    3. **createEmployeeService** – A bot action service to create an employee in an external integration. Click the **Plus** icon to expand to view the _createEmployeeService_ bot action component properties.
    4. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/bamboo-hr-tem-img5-create-employee.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>  
      
        **Sample Request**:

        ```
        {  
        "firstName":"Alen",
        "lastName":"walker"
        }
        ```

    5. **createEmployeeMessage** – A message node with script to display responses for various scenarios.
3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create an employee as shown below:  
<img src="../images/bamboo-hr-tem-img6-create-employee1.png" alt="Employee creation" title="Employee creation" style="border: 1px solid gray;zoom:50%;"/>

6. Click View Employee to view employee details in the BambooHR:  
<img src="../images/bamboo-hr-tem-img7-create-employee2.png" alt="Employee details" title="Employee details" style="border: 1px solid gray;zoom:50%;"/>

### Get Employee by ID

Steps to find an employee by ID from the BambooHR integration:

1. Refer to the [Installing the BambooHR templates](configuring-the-bamboohr-action.md#step-2-install-the-bamboohr-action-templates){:target="_blank"} section to install this template.

2. The _Get Employee by ID_ dialog task is added with the following components:  
<img src="../images/bamboo-hr-tem-img8-get-employee.png" alt="Get Employee ID task" title="Get Employee ID task" style="border: 1px solid gray;zoom:50%;"/>

    1. **getEmployeeByID** – A user intent to find an employee by ID.
    2. **companyDomain** and **id**– Entity nodes for gathering the required employee details.
    3. **getEmployeeByIdService** – A bot action service to find an employee by an ID from an external integration. Click the **Plus** icon to expand to view the _getEmployeeByIdService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/bamboo-hr-tem-img9-get-employee1.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>  
      
        **Sample Request**:  
        
            {
            "id": "114",
            "firstName": "Alen",
            "lastName": "walker"
            }
        

    5. **getEmployeeMessage** – A message node with script to display responses for various scenarios.
3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to find an employee as shown below:  
<img src="../images/bamboo-hr-tem-img10-get-employee2.png" alt="Find an employee" title="Find an employee" style="border: 1px solid gray;zoom:50%;"/>

6. Click View Employee to view employee details in the BambooHR.


### List All Employees

Steps to view all employees in the BambooHR integration:

1. Refer to the [Installing the BambooHR templates](configuring-the-bamboohr-action.md#step-2-install-the-bamboohr-action-templates){:target="_blank"} section to install this template.
2. The _List All Employees_ dialog task is added with the following components:  
<img src="../images/bamboo-hr-tem-img11-list-employees.png" alt="List all employees" title="List all employees" style="border: 1px solid gray;zoom:50%;"/>

    1. **listAllEmployees** – A user intent to create an employee.
    2. **companyDomain** – Entity nodes for gathering the required employee details.
    3. **listAllEmployeesService** – A bot action service to fetch all employees from an external integration. Click the **Plus** icon to expand to view the _listAllEmployeesService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/bamboo-hr-tem-img12-list-employees1.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>  
      
        **Sample Request**:
        ```
        {  
            "fields": [ 
            "firstName", 
            "lastName" 
        ] }
        ```

        To add one or more responses, scroll down and click **Add Response**.  
          
          **Sample Response**:  
          ```
          { 
            "title": "Report",
            "fields": [ 
            { 
            "id": "firstName", 
            "type": "text", 
            "name": "First Name" 
            }, 
            { 
            "id": "lastName", 
            "type": "text", 
            "name": "Last Name" 
            } 
            ], 
            "employees": [ 
            { 
            "id": "112", 
            "firstName": "John", 
            "lastName": "Smith" 
            }, 
            { 
            "id": "113", 
            "firstName": "Harry", 
            "lastName": "Anthony" 
            }, 
            { 
            "id": "114", 
            "firstName": "Alen", 
            "lastName": "walker" 
            } 
          ] }
          ```
 
    5. **listAllEmployeesMessage** – A message node with script to display responses for various scenarios.
3. Click the **Talk to Bot** icon to test and debug the dialog task.
4. Follow the prompts in the App console to view all employees as shown below:
<img src="../images/bamboo-hr-tem-img13-list-employees2.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>


### Update an Employee

Steps to update an employee in the BambooHR integration:

1. Refer to the [Installing the BambooHR templates](configuring-the-bamboohr-action.md#step-2-install-the-bamboohr-action-templates){:target="_blank"} section to install this template.
2. The _Update an Employee_ dialog task is added with the following components:  
<img src="../images/bamboo-hr-tem-img14-update-employee.png" alt="Update Employee dialog task" title="Update Employee dialog task" style="border: 1px solid gray;zoom:50%;"/>

    1. **updateEmployee** – A user intent to update an employee.
    2. **companyDomain**, **id**, **chooseField**, **firstName**, and **lastName** – Entity nodes for gathering the required employee details.
    3. **updateEmployeeScript** – A bot action service to update an employee in an external integration. Click the **Plus** icon to expand to view the _updateEmployeeScript_ bot action component properties.  
    <img src="../images/bamboo-hr-tem-img15-update-employee1.png" alt="View component properties" title="View component properties" style="border: 1px solid gray;zoom:50%;"/>

    4. **updateEmployeeService** – A bot action service to update an employee in an external integration. Click the **Plus** icon to expand to view the _updateEmployeeService_ bot action component properties.
    5. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/bamboo-hr-tem-img16-update-employee2.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>  
      
          **Sample Request**:  
          ```
          { 
            "firstName":"Alen", 
            "lastName":"walker" 
          }
          ```

    6. **getEmployeeByIdService** – A bot action service to find an employee by an ID from an external integration. Click the Plus icon to expand to view the getEmployeeByIdService bot action component properties.
    7. **updateEmployeeMessage** – A message node with script to display responses for various scenarios.
3. Click the **Talk to Bot** icon to test and debug the dialog task.
4. Follow the prompts in the App console to update an employee as shown below:  
<img src="../images/bamboo-hr-tem-img17-update-employee3.png" alt="Update employee" title="Update employee" style="border: 1px solid gray;zoom:50%;"/>

5. Click View Employee to view employee details in the BambooHR.


### Get All Time Off Requests

Steps to fetch all time off requests from the BambooHR integration:

1. Refer to the [Installing the BambooHR templates](configuring-the-bamboohr-action.md#step-2-install-the-bamboohr-action-templates){:target="_blank} section to install this template.
2. The Get All Time Off Requests dialog task is added with the following components:  
<img src="../images/bamboo-hr-tem-img18-get-time-off.png" alt="Get Time Off Request dialog" title="Get Time Off Request dialog" style="border: 1px solid gray;zoom:50%;"/>

    1. **getTimeoffRequests** – A user intent to get time off requests.
    2. **companyDomain**, **startDate**, and **endDate**– Entity nodes for gathering the required employee details **getTimeoffRequestsService** – A bot action service to fetch time off requests in an external integration. Click the **Plus** icon to expand to view the _getTimeoffRequestsService_ bot action component properties.
    3. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/bamboo-hr-tem-img19-get-time-off1.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>  
    To add one or more requests, scroll down and click **+Add Response**.  
      
          **Sample Response**:  
        ```
          [ 
            { 
            "id": "1649", 
            "employeeId": "112", 
            "status": { 
            "lastChanged": "2022-12-22", 
            "lastChangedByUserId": "2385", 
            "status": "approved" 
            }, 
            "name": "Mark Anderson", 
            "start": "2022-12-14", 
            "end": "2022-12-15", 
            "created": "2022-12-22", 
            "type": { 
            "id": "83", 
            "name": "Vacation", 
            "icon": "palm-trees" 
            }, 
            "amount": { 
            "unit": "hours", 
            "amount": "16" 
            }, 
            "actions": { 
            "view": true, 
            "edit": true, 
            "cancel": false, 
            "approve": false, 
            "deny": false, 
            "bypass": false 
            }, 
            "dates": { 
            "2022-12-14": "8", 
            "2022-12-15": "8" 
            }, 
            "notes": {} 
            }, 
            { 
            "id": "1650", 
            "employeeId": "112", 
            "status": { 
            "lastChanged": "2022-12-22", 
            "lastChangedByUserId": "2385", 
            "status": "requested" 
            }, 
            "name": "John Smith", 
            "start": "2022-12-12", 
            "end": "2022-12-13", 
            "created": "2022-12-22", 
            "type": { 
            "id": "85", 
            "name": "Allan Walker", 
            "icon": "sales" 
            }, 
            "amount": { 
            "unit": "hours", 
            "amount": "16" 
            }, 
            "actions": { 
            "view": true, 
            "edit": true, 
            "cancel": true, 
            "approve": true, 
            "deny": true, 
            "bypass": true 
            }, 
            "dates": { 
            "2022-12-12": "8", 
            "2022-12-13": "8" 
            }, 
            "notes": {} 
            } 
            ]   
        ```

    4. **getTimeoffRequestsMessage** – A message node with script to display responses for various scenarios.
3. Click the Talk to Bot icon to test and debug the dialog task.
4. Follow the prompts in the App console to get all time off requests as shown below:  
<img src="../images/bamboo-hr-tem-img20-get-time-off2.png" alt="Get all time off requests" title="Get all time off requests" style="border: 1px solid gray;zoom:50%;"/>


### Get a List of Who is Out

Steps to get a list of who is out from the BambooHR integration:

1. Refer to the [Installing the BambooHR templates](configuring-the-bamboohr-action.md#step-2-install-the-bamboohr-action-templates){:target="_blank"} section to install this template.
2. The _Get a List of Who Is Out_ dialog task is added with the following components:  
<img src="../images/bamboo-hr-tem-img21-get-who-out.png" alt="Get a list of Who is Out dialog task" title="Get a list of Who is Out dialog task" style="border: 1px solid gray;zoom:50%;"/>

    1. **getListWhoisOut** – A user intent to get a list of who is out.
    2. **companyDomain** – Entity nodes for gathering the required employee details.
    3. **getListWhoOutService** – A bot action service to get a list who is out in an external integration. Click the **Plus** icon to expand to view the **getListWhoOutService** bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/bamboo-hr-tem-img22-get-who-out.png" alt="Request" title=Request" style="border: 1px solid gray;zoom:50%;"/>
    5. **getListWhoIsOutMessage** – A message node with script to display responses for various scenarios.

3. Click the **Talk to Bot** icon to test and debug the dialog task.
4. Follow the prompts in the App console to get a list of who is out.


### Update a Request Status

Steps to update a request status in the BambooHR integration:

1. Refer to the [Installing the BambooHR templates](configuring-the-bamboohr-action.md#step-2-install-the-bamboohr-action-templates){:target="_blank"} section to install this template.
2. The _Update a Request Status_ dialog task is added with the following components:  
<img src="../images/bamboo-hr-tem-img23-update-request-status.png" alt="Update Request Status dialog task" title="Update Request Status dialog task" style="border: 1px solid gray;zoom:50%;"/>

    1. **updateRequestStatus** – A user intent to update a request.
    2. **companyDomain**, **requestID**, and **requestStatus** – Entity nodes for gathering the required employee details.
    3. **updateRequestStatusScript** – A bot action service to update a request in an external integration. Click the **Plus** icon to expand to view the _updateRequestStatusScript_ bot action component properties.  
    <img src="../images/bamboo-hr-tem-img24-update-request-status.png" alt="Update Request Status script" title="Update Request Status script" style="border: 1px solid gray;zoom:50%;"/>

    4. **updateRequestStatusService** – A bot action service to update an employee in an external integration. Click the **Plus** icon to expand to view the _updateRequestService_ bot action component properties.
    5. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/bamboo-hr-tem-img25-update-request-status.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>  
      
        **Sample Request**:  
        ```
        { 
        "status": "approved", 
        "note": "Have fun!" 
        }
        ```

    6. **updateRequestStatusMessage** – A message node with script to display responses for various scenarios.
3. Click the **Talk to Bot** icon to test and debug the dialog task.
4. Follow the prompts in the App console to update a request as shown below:  
<img src="../images/bamboo-hr-tem-img26-update-request-status.png" alt="Update Request" title="Update Request" style="border: 1px solid gray;zoom:50%;"/>
