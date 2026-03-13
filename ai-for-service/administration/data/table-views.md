# Table Views

Table Views let you create custom datasets by joining one or more Data Tables. These definitions get converted to queries to extract data from one or more data tables by using the required joins.


## Definition

Steps to create a table view:

1. Go to the **Data** tab in the Home page and select the **Table Views** option and click **Create Table View**.  
<img src="../images/table-views-img1.png" alt="Create table view" title="Create table view" style="border: 1px solid gray;zoom:80%;"/>

2. Alternatively, go to **Data > Table Views** and click **New View**.  
<img src="../images/table-views-img1.png" alt="New view" title="New view" style="border: 1px solid gray;zoom:80%;"/>

3. Enter the following view details:
    1. **Name** for the table view.
    2. **Description** of the table view. The description cannot exceed the limit of 100 characters.  
    <img src="../images/table-views-img3.png" alt="Table view name, description" title="Table view name, description" style="border: 1px solid gray;zoom:80%;"/>

    3. **Assignment** of Bot and Apps to access the View  
    <img src="../images/table-views-img4.png" alt="Assigning bots and apps to the view" title="Assigning bots and apps to the view" style="border: 1px solid gray;zoom:80%;"/>

    4. A View can be built from a **Single Table** or **Multiple Tables**.  
    <img src="../images/table-views-img5.png" alt="View build options" title="View build options" style="border: 1px solid gray;zoom:80%;"/>

        * For both types, you need to
            * select the **table;**
            * select the **columns** to be included in the view, you can use aggregation functions like `sum, avg, min, max and count`. Usage example: `count(&lt;table_name>.&lt;column_name>)`

            * the **criteria for filtering** the results using
                * column name – select from the drop-down list;
                * comparison operator – select from =, !=, &lt; or >
                * comparison value
                * you can have multiple filter criteria connected by AND/OR operators

            * the **Group By** columns for arranging the identical data into groups as `&lt;table_name>.&lt;column_name>`, and
            * the **Sort By** columns to order the results as `&lt;table_name>.&lt;column_name> asc/desc  
            <img src="../images/table-views-img6.png" alt="Manage view" title="Manage view" style="border: 1px solid gray;zoom:80%;"/>

        * In addition, for multiple tables view, you need to specify the **Join** criteria by configuring
            * **Table** to be joined;
            * the **type of join**– inner, right outer or left outer;
            * the **join columns** – pick from the drop-down list and
            * specify the **join criteria** using the operation =, !=, > or &lt; operators.
            * You can have multiple Join Rules. You can have up to 4 join rules.  
            <img src="../images/table-views-img7.png" alt="Create Join criteria" title="Create Join criteria" style="border: 1px solid gray;zoom:80%;"/>

## Import & Export

You can export and import Table view definitions as JSON format files.


### Export a Table View

Steps:

1. Hover over the table view that you want to **Export**.
2. Click the more (ellipses) icon and select **Export View**.  
<img src="../images/table-views-img8.png" alt="Export view" title="Export view" style="border: 1px solid gray;zoom:80%;"/>

3. A JSON file is generated and downloaded.
4. Click **Confirm** on the Export View dialog.  
<img src="../images/table-views-img9.png" alt="Confirm view export" title="Confirm view export" style="border: 1px solid gray;zoom:80%;"/>


### Import a Table View

Steps:

1. Click the **down arrow** next to the **New View** button.
2. Select the **Import View** option.  
<img src="../images/table-views-img10.png" alt="Import view" title="Import view" style="border: 1px solid gray;zoom:80%;"/>

3. Enter a **View Name** and select the JSON file containing the table view.
4. Click **Import.**  
<img src="../images/table-views-img11.png" alt="Import view from JSON" title="Import view from JSON" style="border: 1px solid gray;zoom:80%;"/>

5. In the import View dialog, select the table view and the column to which this view is transferred.


## Change View Ownership

The table view owner can transfer the ownership to another user to let them manage the table’s view and app assignments. An account administrator can also change the view owner.

Steps to change the view owner:

1. Hover over the table view for which you want to change owner.
2. Click the more (ellipses) icon and select **Change Owner** option.  
<img src="../images/table-views-img12.png" alt="Change owner" title="Change owner" style="border: 1px solid gray;zoom:80%;"/>

3. In the Change View Owner dialog, select the new owner from the list and click **Proceed**.  
<img src="../images/table-views-img13.png" alt="Select new owner" title="Select new owner" style="border: 1px solid gray;zoom:80%;"/>

4. Once the ownership changes, a successful completion message will appear.
5. Review the related views associated with this view which may have changes in ownership.


## Share Table Views

AI for Service allows you to share Table Views by assigning them to bots, process apps, or apps.

!!! Note

    In the Shared Views tab, you can view only the views shared with a user who has permission to view. When you share the tables views with users, they cannot edit or update the view definitions.

The bot or process developers can see the table view definitions using a [Service node](data-as-service.md){:target="_blank"}.
