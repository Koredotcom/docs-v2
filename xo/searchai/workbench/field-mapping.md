# Field Mapping

The Field Mapping stage allows you to transform and manage fields within a chunk and map them to target fields in the Answer Index. Fields refer to the Chunk Fields that store the source content in the Answer Index. These fields are like the schema of a database. Use this stage to modify field values, restructure data, or apply business-specific rules before indexing. Field Mapping also supports conditional logic, enabling you to apply transformations only when defined conditions are met.

**Supported Operations**

The Field Mapping stage supports the following operations:

* Set the value of a field
* Rename a field
* Copy the value of one field to another
* Remove a field

![Field Mapping Stage](images/field-mapping.png "Field Mapping")

The Field Mapping stage can be defined using the following three properties:

1. **STAGE DEFINITION**
    1. Stage Type: This property is automatically set to ‘Field Mapping’.
    2. Stage Name: Provide a unique name for identification of the stage. 
2. **CONDITION** states the rules or criteria to select the data on which field mapping is to be performed. You can add one or more rules to select the dataset. Define a condition using the following two properties. 
    1. Field Name: Fields of a chunk on which the rule is to be applied.
    2. Operator: Condition to be applied on the selected field. Based on the chosen operator, provide the value field for comparison with the selected field.
3. **OUTCOME** states the operation to be performed when the above conditions are satisfied. 
    1. Action: Action to be taken if the above condition is true. This can take the following values:
        * Set - Sets the given value as the value of the target field. 
        * Delete - Deletes the target field for the chunk. 
        * Copy - Copies the value of one field into another. 
        * Rename - Renames the selected field. 

 Example: If you want to assign a chunk source as its title in case the title is missing, you can define the stage as shown below.
 ![Example](images/field-mapping-example.png "Example")
