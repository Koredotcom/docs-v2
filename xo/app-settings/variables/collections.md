# Collections

Collections enable you to store multiple value sets for Environment Variables so that you can select the appropriate variable set while promoting the bot definition to a different environment without manual intervention.

!!! note

    This feature was enabled in v8.1 of the platform and is available only for the <span style="text-decoration:underline;">on-prem installation.</span>

Environment variables are a primary type of bot variable where you define a key-value pair and use the variable across the bot. As the variables are declared globally, they can be used at any point in the bot configuration. These can be used to manage the bot variables with environment-specific values. For example, you might have _authCode_ for authenticating a service that your bot uses. This authCode may have different values in the _test, uat,_ and _prod_ environments. The bot can be exported and imported based on the environment, and the values need to be modified at one place in the variable configuration file. [Refer here for more on Bot Variables](using-bot-variables.md#environment-variables){:target="_blank"}.

Using collections, you can define multiple value sets for these variables and designate an active collection for the values to be used while bot execution. Instead of changing the values manually while moving the bot from one environment to another, you can define the values during bot development and set the active collection in different environments to use the appropriate values.


## Creation

Following are the steps in creating Collections

1. From the left navigation menu, select **App Settings > Variables**.
2. Click the **Environment Variables** tab.
3. On the top left click the more/ellipses to access the **Manage Collections**.  
<img src="../images/collections-img1.png" alt="Environment Variables - Manage Collections" title="Environment Variables - Manage Collections" style="border: 1px solid gray;"/> 

4. This would open the Manage Collections page
5. Click **Add New Collection**
6. Enter the following details:
    1. _Collection Name_,
    2. _Description,_
    3. Select the Collection you want to _Clone From_ – This would create the new collection with all the values from the selected clone, you can later edit the values as per requirement.

    The first time you create a collection, a **Default** collection is created by the platform and is set as the Active Collection.  
    <img src="../images/collections-img2.png" alt="Enter details for the new collection" title="Enter details for the new collection" style="border: 1px solid gray;zoom:60%;"/>

7. **Save** the collection


## Adding Values

Create Environment Variables and add collection-specific values using the following steps:

1. From the left navigation menu, select **Settings -> Config Settings**.
2. Click the **Environment Variables** option.
3. Click **Add Environment Variable.** You can also use the edit icon against an existing Environment Variable to add values.
4. This would open the Add/Edit Environment Variable page
5. Enter the following details:
    1. _Variable Name_,
    2. Against the listed _Collection Name,_ enter the appropriate _Value,_
    3. Enter developer notes in the _Notes _field. While this is an optional field, entering useful notes can help the developer working on the target bot to understand and provide relevant values.
    4. _Group_ can be used to categorize the variable.
    5. Assign a _Namespace_ if enabled ([refer here for more](../managing-namespace.md){:target="_blank"}).  
    <img src="../images/collections-img3.png" alt="Enter details for the new variable" title="Enter details for the new variable" style="border: 1px solid gray;"/>

6. **Save** the Variable


## Active Collection

1. Click **Manage Collections** to access the Collections listing window
2. **Mark as Active** any one of the Collections created. The values from the Active collection are while executing the bot definition.  
<img src="../images/collections-img4.png" alt="Mark collection as Active" title="Mark collection as Active" style="border: 1px solid gray;"/>

3. When exporting the bot definition, you can mark as Active the collection to be set for the target bot. The export file would contain the details of all the collections as well as the collection-specific values.  
<img src="../images/collections-img5.png" alt="Choose collection to be marked as Active" title="Choose collection to be marked as Active" style="border: 1px solid gray;"/>

4. Bot Import
    1. To a New bot – All the collections, collection-specific values, and the active collection information would be imported into the newly created bot
    2. Full Bot Import – All the details as available in the export file would be imported into the newly created bot. Any existing collections and the collection-specific values would be overwritten with the details present in the export file.If the file has multiple collections but the target bot has does not have any collections, then the collections from the file would be imported into the target bot.
    
        If the file does not have collections but the target bot has collections, then the collections would be removed from the target bot.
    
    3. Incremental Bot Import – The ‘incremental import’ will be allowed only when the collections from the file exactly match with the collections in the target botWhen the collections in the export file and bot are the same, the values from the file would override the values in the target bot, and any additional variables in the file will be imported into the target bot with the corresponding values. Any additional variables in the bot target bot would be retained as-is.


## Import & Export



1. The **Bot Export** file would contain the details of all the collections as well as the collection-specific values. The setting of a collection as ‘active’ would be reflected in the export file
2. **Bot Import**
    1. To a New bot – All the collections, collection-specific values, and the active collection information would be imported into the newly created bot
    2. Full Bot Import – All the details as available in the export file would be imported into the newly created bot. Any existing collections and the collection-specific values would be overwritten with the details present in the export file.If the file has multiple collections but the target bot has does not have any collections, then the collections from the file would be imported into the target bot.
    
        If the file does not have collections but the target bot has collections, then the collections would be removed from the target bot.
    
    3. Incremental Bot Import – The ‘incremental import’ will be allowed only when the collections from the file exactly match with the collections in the target botWhen the collections in the export file and bot are the same, the values from the file would override the values in the target bot, and any additional variables in the file will be imported into the target bot with the corresponding values. Any additional variables in the bot target bot would be retained as-is.

3. Variable Import – The ‘variables import’ would be allowed only when the collections from the file exactly match with the collections in the target bot.When the collections in the export file and bot are the same the values from the file would override the values in the target bot. Any additional variables in the file will be imported into the target bot with the corresponding values. Any additional variables in the bot target bot will be retained as-is.
4. Variable Export – The Variables export would include all the collections available in the bot and mapping of variables to collections. Note if the bot does not have any collections but the account has ‘collections enabled’, the export would be restricted.