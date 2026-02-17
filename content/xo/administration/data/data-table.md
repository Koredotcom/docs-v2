# Data Table

You can create a data table and share it with AI Agents, apps and process assistants.

Step to create a new table:

1. Go to the **Data** tab in the Home page and select the **Data Tables** option and click **Create Data Table**.  
<img src="../images/data-table-img1.png" alt="Create Data Tables" title="Create Data Tables" style="border: 1px solid gray;zoom:80%;"/>

2. Alternatively, click **New Table** to create a new data table.  
<img src="../images/data-table-img2.png" alt="New Table" title="New Table" style="border: 1px solid gray;zoom:80%;"/>

3. In the New Table page, enter the following details:
    1. **Name** of the Data Table.
    2. **Description** of the Data Table.
    3. **Columns** to be included in the Table.
    4. **Indexes** for the Table.
    5. **Bot Assignments** to let AI Agent access data in this table.
    6. **App Assignments** to let apps access data in this table.
    7. **Process Assignments** to let a process app access data in this table.  

    <img src="../images/data-table-img3.png" alt="Data Table Details" title="Data Table Details" style="border: 1px solid gray;zoom:80%;"/>

4. Click **Create**.


## Columns

The second step in defining a Data Table is to add columns required in the table.

<img src="../images/data-table-img4.png" alt="Data table Columns" title="Data table Columns" style="border: 1px solid gray;zoom:80%;"/>

* **Name** of the column ([see here](#reserve-words) for reserve words which cannot be used as the name of a column);
* **Type** of the data that can be stored in this column. It can be:
    * string;
    * date; or
    * number.

* **Required** flag to mark the column as mandatory.
* **Encrypted** flag to secure the data in this column.
* **Reference Column** to create a dependency with a column from another table i.e. to add a foreign key constraint. This would ensure that the value entered for this column exists in the referenced table column.
* **Max Length** to limit the maximum length for the column values.
* **Default Values** to be taken in case the value is missing while adding a row.

By default, the platform defines the following columns:

* **sys_Id**: A platform generated unique identifier for each row in the table.
* **Created_On**: Timestamp when this table was created.
* **Updated_On**: Timestamp when this table was updated.
* **Created_By**: User id of the developer who created this table.
* **Updated_By**: User id of the developer who last updated this table.


## Index

For an improved performance during Data search and retrieval, you can define Indices for your Data Table.

This includes:

* **Index Name** for reference.
* **Is Unique** flag to define if the index is expected to contain unique values.
* **Column & Sort Order** – List of columns to be included in the index; you can select multiple columns and specify the sort order (ascending or descending) for each of the selected columns.

<img src="../images/data-table-img5.png" alt="Data table Index" title="Data table Index" style="border: 1px solid gray;zoom:80%;"/>


## Assignments

You can define the assignments for each of the data tables as follows:

* **Assign apps:**
    * Assign apps with Read, Write, and Delete permissions. You can select the apps from the list presented, these will be the list of apps owned by you and shared with you.
    * Only the assigned apps will be allowed to access the data from the data table using the Service Nodes in the Dialog Tasks of that app.

* **Assign apps:**
    * Assign apps with Read, Write, and Delete permissions.
    * You can select from the list or create a new app.
    * The data table CRUD APIs will be restricted to access only the tables that are assigned to the app.

* **Assign process apps:**
    * Assign process apps with Read, Write, and Delete permissions. You can select the process apps from the list presented, these will be the list of process apps owned by you and shared with you.

<img src="../images/data-table-img6.png" alt="Data table Assignments" title="Data table Assignments" style="border: 1px solid gray;zoom:80%;"/>


## Import & Export

You can export and import Data Table definitions as JSON format files.


### Export a Data Table

Steps:

1. Hover over the table definition that you want to Export
2. Click the more (ellipses) icon and select **Export Definition**
3. A JSON file is generated and downloaded.

<img src="../images/data-table-img7.png" alt="Export Data Tables" title="Export Data Tables" style="border: 1px solid gray;zoom:80%;"/>


### Import a Data Table

Steps:

1. Click the **down arrow** next to the New Table button.
2. Select the **Import Table Definition** option.
3. Enter a **Table Name** and select the JSON file containing the table definition.
4. Click **Import.**

<img src="../images/data-table-img8.png" alt="Import Data Tables" title="Import Data Tables" style="border: 1px solid gray;zoom:80%;"/>


**Sample Data Definition in the JSON file**

```
{"name":"customertable",
 "description":"Table containing customer details",
 "indexes":[],
 "schemaDef":[{"name":"CustEmail",
               "type":"string",
               "isRequired":false,
               "isEncrypted":false,
               "reference":{},
               "maxLength":"",
               "default":""},
	      {"name":"CustType",
               "type":"string",
               "isRequired":false,
               "isEncrypted":false,
               "reference":{},
               "maxLength":"",
               "default":"Preferred"},
	      {"name":"Address",
               "type":"string",
               "isRequired":false,
               "isEncrypted":false,
               "reference":{},
               "maxLength":"",
               "default":""},
	      {"name":"CustName",
               "type":"string",
               "isRequired":true,
               "isEncrypted":false,
               "reference":{},
               "maxLength":"",
               "default":""},
	      {"name":"CustId",
               "type":"number",
               "isRequired":true,
               "isEncrypted":true,
               "reference":{},
               "maxLength":"5",
               "default":""},
	      {"name":"sys_Id","type":"string","isRequired":true,"readOnly":true},
	      {"name":"Created_On","type":"date","isRequired":true,"readOnly":true},
	      {"name":"Updated_On","type":"date","isRequired":true,"readOnly":true},
	      {"name":"Created_By","type":"string","isRequired":true,"readOnly":true},
	      {"name":"Updated_By","type":"string","isRequired":true,"readOnly":true}]}
```



## Change Table Owner

The table owner can transfer the ownership to another user to let them manage the table’s definition and app assignments. An account administrator can also change the table owner.

Steps to change the table owner:

1. Hover over the data table for which you want to change owner.
2. Click the more (ellipses) icon and select **Change Owner** option.  
<img src="../images/data-table-img9.png" alt="Change Data table Owner" title="Change Data table Owner" style="border: 1px solid gray;zoom:80%;"/>

3. In the Change Table Owner dialog, select the new owner from the list and click **Proceed**.  
<img src="../images/data-table-img10.png" alt="Select new owner" title="Select new owner" style="border: 1px solid gray;zoom:80%;"/>

4. Review the related tables associated with this table which may have changes in ownership.
5. Once the ownership changes, a successful completion message will appear.
6. Once the Ownership is changed, all related tables and views ownership is also transferred to the new owner. The table is moved to the new owner, and all the app assignments of these tables are lost.  
  
    The Related tables and views refer to any associated table or view to a particular table based on the foreign key relations or view definitions. Following are the examples:

    1. **View 1** is based on **Table A** and **Table B**.
    2. **View 2** is based on **Table A** and **Table C**.
    3. **View 3** is based on **Table D**.
    4. **Table E** is not used in any **View**.
    5. **Table F** column is referenced to a column in **Table A**.

7. **Scenario 1**: Change Owner action on **Table A** indicates that the ownership of **Table B**, **Table C**, **Table F**, **View 1**, and **View 2** is transferred.  
  
    **Scenario 2**: Change Owner action on **Table F** indicates that the ownership of **Table A**, **Table B**, **Table C**, **View 1**, and **View 2** is transferred.


## Share Data Tables

The Kore.ai XO Platform allows you to share Data Tables by assigning them to bots, process apps, or apps.

**Note**: In the **Shared Tables** tab, you can view only the tables shared with a user who has permission to view. When you share the data tables with users, they cannot edit or update the table or view definitions.

The bot or process developers can see the data table definitions using a [Service node](data-as-service.md){:target="_blank"}.

* From the Data Service Request Definition, users can select the Get Data action and click Test to view metadata. For more information, read the [Get Data](data-as-service.md#get-data){:target="_blank"} section in Data as a Service post.
* Users can also see all column names while configuring Add Data or Update Data actions. For more information, read the [Add Data](data-as-service.md#add-data){:target="_blank"} section in the Data as a Service post.


## Reserve Words

Following is the list of words that are reserved and cannot be used as the names for a column:


<table>
  <tr>
   <td>
<ul>

<li>ACCESS
</li>
</ul>
   </td>
   <td>
<ul>

<li>ADD
</li>
</ul>
   </td>
   <td>
<ul>

<li>ALL
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>ALTER
</li>
</ul>
   </td>
   <td>
<ul>

<li>AND
</li>
</ul>
   </td>
   <td>
<ul>

<li>ANY
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>AS
</li>
</ul>
   </td>
   <td>
<ul>

<li>ASC
</li>
</ul>
   </td>
   <td>
<ul>

<li>AUDIT
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>BETWEEN
</li>
</ul>
   </td>
   <td>
<ul>

<li>BY
</li>
</ul>
   </td>
   <td>
<ul>

<li>CHAR\
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>CHECK
</li>
</ul>
   </td>
   <td>
<ul>

<li>CLUSTER
</li>
</ul>
   </td>
   <td>
<ul>

<li>COLUMN
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>COMMENT
</li>
</ul>
   </td>
   <td>
<ul>

<li>COMPRESS
</li>
</ul>
   </td>
   <td>
<ul>

<li>CONNECT
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>CREATE
</li>
</ul>
   </td>
   <td>
<ul>

<li>CURRENT
</li>
</ul>
   </td>
   <td>
<ul>

<li>DATE
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>DECIMAL
</li>
</ul>
   </td>
   <td>
<ul>

<li>DEFAULT
</li>
</ul>
   </td>
   <td>
<ul>

<li>DELETE
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>DESC
</li>
</ul>
   </td>
   <td>
<ul>

<li>DISTINCT
</li>
</ul>
   </td>
   <td>
<ul>

<li>DROP
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>ELSE
</li>
</ul>
   </td>
   <td>
<ul>

<li>EXCLUSIVE
</li>
</ul>
   </td>
   <td>
<ul>

<li>EXISTS
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>FILE
</li>
</ul>
   </td>
   <td>
<ul>

<li>FLOAT
</li>
</ul>
   </td>
   <td>
<ul>

<li>FOR
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>FROM
</li>
</ul>
   </td>
   <td>
<ul>

<li>GRANT
</li>
</ul>
   </td>
   <td>
<ul>

<li>GROUP
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>HAVING
</li>
</ul>
   </td>
   <td>
<ul>

<li>IDENTIFIED
</li>
</ul>
   </td>
   <td>
<ul>

<li>IMMEDIATE
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>IN
</li>
</ul>
   </td>
   <td>
<ul>

<li>INCREMENT
</li>
</ul>
   </td>
   <td>
<ul>

<li>INDEX
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>INITIAL
</li>
</ul>
   </td>
   <td>
<ul>

<li>INSERT
</li>
</ul>
   </td>
   <td>
<ul>

<li>INTEGER
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>INTERSECT
</li>
</ul>
   </td>
   <td>
<ul>

<li>INTO
</li>
</ul>
   </td>
   <td>
<ul>

<li>IS
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>LEVEL
</li>
</ul>
   </td>
   <td>
<ul>

<li>LIKE
</li>
</ul>
   </td>
   <td>
<ul>

<li>LOCK
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>LONG
</li>
</ul>
   </td>
   <td>
<ul>

<li>MAXEXTENTS
</li>
</ul>
   </td>
   <td>
<ul>

<li>MINUS
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>MLSLABEL
</li>
</ul>
   </td>
   <td>
<ul>

<li>MODE
</li>
</ul>
   </td>
   <td>
<ul>

<li>MODIFY
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>NOAUDIT
</li>
</ul>
   </td>
   <td>
<ul>

<li>NOCOMPRESS
</li>
</ul>
   </td>
   <td>
<ul>

<li>NOT
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>NOWAIT
</li>
</ul>
   </td>
   <td>
<ul>

<li>NULL
</li>
</ul>
   </td>
   <td>
<ul>

<li>NUMBER
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>OF
</li>
</ul>
   </td>
   <td>
<ul>

<li>ONLINE
</li>
</ul>
   </td>
   <td>
<ul>

<li>ON
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>OFFLINE
</li>
</ul>
   </td>
   <td>
<ul>

<li>OPTION
</li>
</ul>
   </td>
   <td>
<ul>

<li>ON
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>ORDER
</li>
</ul>
   </td>
   <td>
<ul>

<li>PCTFREE
</li>
</ul>
   </td>
   <td>
<ul>

<li>PRIOR
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>PRIVILEGES
</li>
</ul>
   </td>
   <td>
<ul>

<li>PUBLIC
</li>
</ul>
   </td>
   <td>
<ul>

<li>RAW
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>RENAME
</li>
</ul>
   </td>
   <td>
<ul>

<li>RESOURCE
</li>
</ul>
   </td>
   <td>
<ul>

<li>REVOKE
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>ROW
</li>
</ul>
   </td>
   <td>
<ul>

<li>ROWID
</li>
</ul>
   </td>
   <td>
<ul>

<li>RONUM
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>ROWS
</li>
</ul>
   </td>
   <td>
<ul>

<li>SELECT
</li>
</ul>
   </td>
   <td>
<ul>

<li>SESSION
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>SET
</li>
</ul>
   </td>
   <td>
<ul>

<li>SHARE
</li>
</ul>
   </td>
   <td>
<ul>

<li>SIZE
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>SMALLINT
</li>
</ul>
   </td>
   <td>
<ul>

<li>START
</li>
</ul>
   </td>
   <td>
<ul>

<li>SUCCESSFUL
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>SYNONYM
</li>
</ul>
   </td>
   <td>
<ul>

<li>SYSDATE
</li>
</ul>
   </td>
   <td>
<ul>

<li>TABLE
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>THEN
</li>
</ul>
   </td>
   <td>
<ul>

<li>TO
</li>
</ul>
   </td>
   <td>
<ul>

<li>TRIGGER
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>UID
</li>
</ul>
   </td>
   <td>
<ul>

<li>UNION
</li>
</ul>
   </td>
   <td>
<ul>

<li>UNIQUE
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>UPDATE
</li>
</ul>
   </td>
   <td>
<ul>

<li>USER
</li>
</ul>
   </td>
   <td>
<ul>

<li>VALIDATE
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>VALUES
</li>
</ul>
   </td>
   <td>
<ul>

<li>VARCHAR
</li>
</ul>
   </td>
   <td>
<ul>

<li>VARCHAR2
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>VIEW
</li>
</ul>
   </td>
   <td>
<ul>

<li>WHENEVER
</li>
</ul>
   </td>
   <td>
<ul>

<li>WHERE
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>WITH
</li>
</ul>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>