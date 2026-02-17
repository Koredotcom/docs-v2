# Data as Service

Kore.ai’s Data offering lets you define Data Tables, Table Views, and manipulate them from your AI Agent. You can also view the definition of the data table or table view assigned to the AI Agent and provide correct data mappings based on the data types for the table columns.

This section deals with the manipulation aspect using the [Service Node](../../automation/use-cases/dialogs/node-types/working-with-the-service-node.md){:target="_blank"} within a Dialog Task of your AI Agent. For details on the data definition, [refer here](data-services.md){:target="_blank"}.


## Service Call – Table

From the assigned Apps for any given data table/table view, you can query and manipulate the data using the Service Node in the Dialog Tasks.

**Steps to configure the Service node:**

1. Open the App and the Dialog Task where you want to access the data.
2. Add a Service Node at the appropriate location in the process flow.
3. [Click here](../../automation/use-cases/dialogs/node-types/working-with-the-service-node.md){:target="_blank"} for details on Service Node. Here we will be listing the configurations for Data Table integration.
4. Component Properties configuration
    1. **General Settings** section
        
        * **Name** – enter a name for the node;
        * **Display Name** – enter a display name for the node;
        * **Service Type** – choose _Data Service_;
        * **Type** – select _Table_.  
        <img src="../images/data-as-service-img1.png" alt="Component properties - General settings" title="Component properties - General settings" style="border: 1px solid gray;zoom:80%;"/>

    2. **Request Definition** – define the service request by clicking the _Define Request_ link. In the slide-out page configure the following:
        
        * **Choose a Data Table** – You can choose from the list, these are the data tables assigned to this app.
        * **Actions** – Select the action you would like to perform:
            * _Add Data_ – to add data ([see below for details](#add-data));
            * _Get Data_ – to fetch data from the table ([see below for details](#get-data));
            * _Update Data_ – to modify existing data ([see below for details](#update-data));
            * _Delete data_ – to delete rows from the data table ([see below for details](#delete-data)).

            <img src="../images/data-as-service-img2.png" alt="Component properties - Request definition" title="Component properties - Request definition" style="border: 1px solid gray;zoom:80%;"/>

        * You can **Test** the service request. Remember testing with context reference will fail as they will be evaluated at run time and the data will not be available till then.
        * **Save** the service request definition
        * You can set the Instance and Connections properties as per your app requirements.
        * The data returned from the data table can be accessed from the context object and used in your task as per your need.


### Add Data

To add data, you need to:

* provide values for each column in the data table;
* these values can be static or a reference to a context object  for example `{{context.entities.&lt;entity-name>}}`  
<img src="../images/data-as-service-img3.png" alt="Add Data" title="Add Data" style="border: 1px solid gray;zoom:80%;"/>

The response from this call would be:

```
"stringTable": {
    "response": {
      "body": {
        "CustId": 1,
        "Type": "Preferred",
        "Address": "New York",
        "CustomerName": "John Smith",
        "Updated_On": 1593687904111,
        "Created_On": 1593687904111,
        "Updated_By": "st-b1376ff2-1111-1111-aa34-973ef73212f5",
        "Created_By": "st-b1376ff2-1111-1111-aa34-973ef73212f5",
        "sys_Id": "sys-5c46e351-ee51-5c27-80cf-c6c1e8f8f066",
        "_id": "5efdbf602de5bb5f3f54f728"
      }
    }
  }
```

### Get Data

To filter and fetch data from the table, you can:

* **Choose Filters** to define filter criteria using:
    * the column names – pick from the drop-down list;
    * an operator – choose from the list;
    * comparison value – these values can be static or a reference to a context object  for example `{{context.entities.&lt;entity-name>}}`.
    * Multiple filter criteria can be defined using AND/OR connectors.
    * In the absence of filter criteria, all rows are fetched limited by the limit and offset values mentioned below.

* **Limit** property can be used to set a limit on the number of records to be fetched. If not specified then 10 records would be fetched by default;
* **Offset** property can be used to specify the records to be skipped from the result data set.  
<img src="../images/data-as-service-img4.png" alt="Get Data" title="Get Data" style="border: 1px solid gray;zoom:80%;"/>

* Data values can be accessed using: `{{context.&lt;service_node_name>.response.body.queryResult[&lt;index>].&lt;column_name>}}`

The response from this service call would be:

```
"customerdetails": {
    "response": {
      "body": {
	    "hasMore": true,
	    "total": 4,
	    "metaInfo": [
          {
            "name": "City",
            "type": "string"
          },
          {
            "name": "Name",
            "type": "string"
          },
          {
            "name": "sys_Id",
            "type": "string"
          },
          {
            "name": "Created_On",
            "type": "date"
          },
          {
            "name": "Updated_On",
            "type": "date"
          },
          {
            "name": "Created_By",
            "type": "string"
          },
          {
            "name": "Updated_By",
            "type": "string"
          }
        ],
        "queryResult": [
          {
            "CustId": 1,
            "Type": "Preferred",
            "Address": "New York",
            "CustomerName": "John Smith",
            "sys_Id": "sys-b088ab59-7640-5a8f-8999-61a265dd2bee",
            "Created_On": 1593152119161,
            "Updated_On": 1593152119161,
            "Created_By": "st-b1376ff2-2384-5541-aa34-973ef73212f5",
            "Updated_By": "st-b1376ff2-2384-5541-aa34-973ef73212f5"
          },
          {
            "CustId": 2,
            "Type": "Privileged",
            "Address": "Chicago",
            "CustomerName": "Jane Doe",
            "sys_Id": "sys-632c69ef-f6dd-5d83-ab32-f7837c8b63f9",
            "Created_On": 1593152443035,
            "Updated_On": 1593152443035,
            "Created_By": "st-b1376ff2-2384-5541-aa34-973ef73212f5",
            "Updated_By": "st-b1376ff2-2384-5541-aa34-973ef73212f5"
          }
	 ]
      }
    }
  }
```


### Update Data

To modify existing you can:

* **Assign Values** against each column to be updated.  
  If you check a particular column for the update and leave the value field blank, then the corresponding column original values will NOT be retained but will be set as empty.  
  <img src="../images/data-as-service-img5.png" alt="Update Data" title="Update Data" style="border: 1px solid gray;zoom:80%;"/>

* The columns which are not checked for updating will retain the original values.
* These values can be static or a reference to a context object.
* **Choose Filters** to define the _filter criteria_ to specify the rows to be updated using
    * the column names,
    * an operator and
    * filter value – these values can be static or a reference to a context object  for example `{{context.entities.&lt;entity-name>}}`.
    * Multiple filter criteria can be defined using AND/OR connectors.  
    <img src="../images/data-as-service-img6.png" alt="Update data - Choose filters" title="Update data - Choose filters" style="border: 1px solid gray;zoom:80%;"/>

The response from this service call would be:

```  
"customerdetails": {
    "response": {
      "body": {
        "records": []
      }
    }
}
```


### Delete data

To delete rows from the data table you need to define filter criteria to specify the rows to be deleted using

* the column names,
* an operator and
* filter value, these values can be static or a reference to a context object  for example `{{context.entities.&lt;entity-name>}}`. Multiple filter criteria can be defined using AND/OR connectors.
 
<img src="../images/data-as-service-img7.png" alt="Delete data" title="Delete data" style="border: 1px solid gray;zoom:80%;"/>

The response from this service request would be:

```  
"customerdetails": {
    "response": {
      "body": {
        "nDeleted": 1
      }
    }
 }
```


## Service Call – View

From the assigned apps for any given data table/table view, you can query and manipulate the data using the Service Node in the Dialog Tasks.

**Steps to configure the Service node:**

1. Open the App and the Dialog Task where you want to access the data.
2. Add a Service Node at the appropriate location in the process flow.
3. [Click here](../../automation/use-cases/dialogs/node-types/working-with-the-service-node.md){:target="_blank"} for details on Service Node. Here we will be listing the configurations for Data Table integration.
4. Component Properties configuration
    1. **General Settings** section
        * **Name** – enter a name for the node;
        * **Display Name** – enter a display name for the node;
        * **Service Type** – choose _Data Service_;
        * **Type** – select _View_.

    2. **Request Definition** – define the service request by clicking the _Define Request_ link.
    3. In the slide-out page configure the following:
        * **Choose a Table View** – You can choose from the list, these are the table views assigned to this App.
        * Filter the results – you can further define _filter criteria_ using
            * the column names,
            * an operator and
            * filter value – these values can be static or a reference to a context object  for example `{{context.entities.&lt;entity-name>}}`.
        * Multiple filter criteria can be defined using AND/OR connectors.
        * In the absence of filter criteria, all rows are fetched limited by the limit and offset values mentioned below.
    
    4. You can set a limit on the number of records fetched and
    5. You can choose to skip a few records from the result data set by specifying the offset value.
    6. You can **Test** the service request. Remember testing with context reference will fail as they will be evaluated at run time and the data will not be available till then.
    7. **Save** the service request definition

5. You can set the Instance and Connections properties as per your app requirements.
6. The data returned from the data table can be accessed from the context object and used in your task as per your need, using: `{{context.&lt;service_node_name>.response.body.queryResult[&lt;index>].&lt;column_name>}}`

The response from this service call would be:  
  
```
"CustomerView": {
  "response": {
    "body": {
      "hasMore": true,
      "total": 4,
      "metaInfo": [
      {
          "name": "type",
          "type": "string"
      },
      {
          "name": "address",
          "type": "string"
      }
      ],
      "queryResult": [
      {
          "type": "Gold",
          "address": "New York"
      },
      {
          "type": "Gold",
          "address": "Chicago"
      },
      {
          "type": "Gold",
          "address": "Chicago"
      }
      ]
    }
  }  
}
```