# Data Table

Kore.ai takes care of your data needs, without having to depend on external services for it. Data offering lets you define Data Tables, Table Views, and manipulate them from your AI Agent and Process Apps.

**Data Tables** allow you to persist custom data and retrieve it whenever needed. These can be used as data points collection for ‘feedback’ or ‘survey’ tasks, collecting user inputs that can be retrieved at a later point, etc.


## Highlights

* Create **custom Data Tables** for any business needs
* Joining two or more tables to create **custom Data Views**.
* Support for **secure fields**, **indexing**, and **references**.
* **APIs** to read, write, update, and delete data.
* Ability to **scope** tables and views to specific apps. process apps and apps.


## Overview

Data Table offering on XO Platform is split into two parts:

* **Data Definition** which includes:
    * Defining **Data Tables** and **Views**.
    * **Granting access** to the apps, and processes for manipulating data from these Tables and Views.
    * **Defining Apps** for securely exporting and importing definitions and for querying the data from views or data tables.

    <img src="../images/data-services-img1.png" alt="Define data" title="Define data" style="border: 1px solid gray;zoom:80%;"/>

* **Data Manipulation** allows performing CRUD operations on data from any of the data tables by making **API calls**.

In the document, we will be elaborating on each of these aspects. A brief knowledge of RDBMS is essential for working with this feature. You can refer to the glossary, [listed below](#glossary), to refresh your concepts.


## Data Definition

For Data Definition, you need to access the **Data tab** of the App Builder Landing Page.

From here you can:

* Create Data Tables, [refer here for more](data-table.md){:target="_blank"};
* Define Table Views, [refer here for more](table-views.md){:target="_blank"}; and
* Create Apps for access, [refer here for more](app-definition.md){:target="_blank"}.

<img src="../images/data-services-img2.png" alt="Data Definition" title="Data Definition" style="border: 1px solid gray;zoom:80%;"/>


## Data Manipulation

APIs can be used to access the data in the data tables and data views are as follows:

* Data Insert API – [See here for more](../../apis/automation/data-insert.md){:target="_blank"}
* Data Update API – [See here for more](../../apis/automation/data-update.md){:target="_blank"}
* Data Delete API – [See here for more](../../apis/automation/data-delete.md){:target="_blank"}
* Query Data from Table – [See here for more](../../apis/automation/query-table-data.md){:target="_blank"}
* Query Data from View – [See here for more](../../apis/automation/query-data-table-view.md){:target="_blank"}


## Glossary

Following are the terms and their definitions as used by the platform


<table border="1">
  <tr>
   <td><strong>TERM</strong>
   </td>
   <td><strong>DEFINITION</strong>
   </td>
  </tr>
  <tr>
   <td>Data Definition
   </td>
   <td>Data Definition deals with defining how the data gets stored in terms of tables, columns, views, etc.
   </td>
  </tr>
  <tr>
   <td>Data Manipulation
   </td>
   <td>Data Manipulation refers to the basic CRUD operations that can be performed against the date ie. retrieve, update, and delete the data.
   </td>
  </tr>
  <tr>
   <td>Data Table
   </td>
   <td> Data storage wherein the data can be accessed in a tabular form, with rows and/or columns named.
   </td>
  </tr>
  <tr>
   <td>Columns
   </td>
   <td>The column name refers to the individual field value that is stored in the table.
   </td>
  </tr>
  <tr>
   <td>Reference Table and Column
   </td>
   <td>This represents the domain for the columns that reference it, ie the values of the referenced column should be contained in the reference table column.
   </td>
  </tr>
  <tr>
   <td>Index
   </td>
   <td>An index is a pointer to data in a table and is used to speed up data retrieval. Assign a column that you think best identifies a row in the table.
   </td>
  </tr>
  <tr>
   <td>Table View
   </td>
   <td>A virtual table which can be used to access a subset of information from a single table or combine data from two or more table, using joins.
   </td>
  </tr>
  <tr>
   <td>Filter Criteria
   </td>
   <td>When defining views, this property can be used to define the resultant data set, ie. the rows to be included in the view based on the values in specified columns.
   </td>
  </tr>
  <tr>
   <td>Group By
   </td>
   <td>When defining views, this property can be used to arrange identical data into groups from the resultant data set.
   </td>
  </tr>
  <tr>
   <td>Sort By
   </td>
   <td>When defining views, this property can be used to arrange the rows in the resultant data set based on the specified columns.
   </td>
  </tr>
  <tr>
   <td>Join
   </td>
   <td>When defining views, join can be used to fetch data from two or more tables and joined to appear as single set of data.
   </td>
  </tr>
  <tr>
   <td>Inner Join
   </td>
   <td>This is a simple join in which the result is based on matched data from the two tables as per the equality condition.
   </td>
  </tr>
  <tr>
   <td>Right Outer Join
   </td>
   <td>The right outer join returns a result set with the matched data from the two tables and then the remaining rows of the right table and null from the corresponding left table’s columns.
   </td>
  </tr>
  <tr>
   <td>Left Outer Join
   </td>
   <td>The left outer join returns a result set with the matched data from the two tables and then the remaining rows of the left table and null from the corresponding right table’s columns.
   </td>
  </tr>
</table>