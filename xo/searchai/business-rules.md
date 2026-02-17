
# Business Rules

Every business has specific requirements and strategies to handle user searches and display results. Search AI enables you to define business rules to fine-tune and personalize answers based on your business needs. Business Rules are a set of guidelines or policies that ensure that the generated answers meet the specific criteria and align with the goals of the organization.


## Significance of Business Rules

Business rules can play a significant role in shaping the user experience and the effectiveness of the application. Business rules define how results are promoted, positioned, or filtered. You can use business rules for personalized recommendations for products or services, promotional offers, content filtering, access control, etc.  

The versatility of business rules allows you to design the required search experience for your users easily. For instance, you can define business rules for language-based answer generation where you want to prioritize content in the user's preferred language while ensuring that relevant information is also available in other languages to cater to a diverse user base. Similarly, you can also use business rules to control data access. You can use business rules to hide content as per the role of the user.  


## Understanding Business Rules in the Answer Generation Process

In the context of the Search AI application, when a user query is received, the application finds the relevant information from the Answer Index. This information is in the form of chunks. At this point, business rules come into play to refine the response further and deliver precise answers. Based on the condition or criteria defined by business rules, the chunks are filtered and used for answer generation. 


## Defining Business Rules

Search AI allows you to define **Contextual Rules** that use the context information available to the application to specify the conditions under which certain actions should be taken, like the user profile, geography, search history, etc. 

Search AI offers a dedicated interface for managing business rules, allowing users to organize, monitor, and adjust rules as needed. You can manage the rules from the **Business Rules** page under the **Configuration** tab. 


![Business Rules](images/businessrules/home.png "business rules")


If there are any existing rules, those rules are listed here on this page. 

## Adding Business Rules

Click the **+Contextual Rule** button to add a new rule. 

![Add Business Rules](images/businessrules/add-rule.png "Add business rules")


Defining a business rule involves specifying the **conditions** to trigger the rule and the **outcome** of the rule if the conditions are met.

![New Business Rules](images/businessrules/new-rule.png "New business rules")

Enter a **name** for the rule. 


Use the **Condition** section to specify the criteria for triggering the rule. These conditions are formulated based on various types of contextual information and the values assigned to parameters. Specify the relevant context variable in the designated **Select Context** textbox. This feature provides dynamic suggestions, presenting the available variables that can be used to define conditions.

Note that you can also use the **customData** field while using the Search APIs to set up business rules. For example, if the user's location is included in the userContext of the customData field in the API, you can reference it in the Select Context field as customData.userContext.location and set the necessary conditions as required. 

Use the **Outcome** section to specify the actions to be performed when the conditions are met. 

The **Action** field can take the following values:


<table>
  <tr>
   <td>Field
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>Boost
   </td>
   <td>Prioritize the chunks by the boost factor. The boost factor can take values between 1 and 5, where 5 being the maximum boost and 1 being the lowest.
   </td>
  </tr>
  <tr>
   <td>Lower 
   </td>
   <td>De-prioritize the search results by the lower factor. This factor can take values between 1 and 5. 
   </td>
  </tr>
  <tr>
   <td>Hide
   </td>
   <td>Hide the response from the search results
   </td>
  </tr>
  <tr>
   <td>Filter
   </td>
   <td>Filter the search results as per the response 
   </td>
  </tr>
</table>


Use the **Response** section to describe the set of results on which the Action is to be taken. This can be defined using any of the chunk fields and their corresponding values. For example, to take action on all the chunks where Chunk Title has the keyword ‘Confidential’, set the response parameters as: 

![Response](images/businessrules/response.png "Response Parameter")


You can see the list of available chunk fields from the [Chunk Browser.](chunk-browser.md) 

**Sample Business Rule**

Consider that you want to control the access of certain information to only managers only in a specific dept in your organization, you can create a business rule that is triggered if the user dept does not match the given dept and hides the information from the user. 




![Example](images/businessrules/add-rule-example.png "Sample Business Rule")


!!! Note

    * You can add any number of conditions to define the criteria for triggering the business rule. A logical AND operation is performed on the conditions defined. This implies that the business rule is triggered only when all the specified conditions are satisfied. 
    * You can add any number of outcomes as part of the business rule. A logical AND operation is performed on the outcomes defined. This implies that all the outcomes are applied when a business rule is triggered. 
    * The values provided in both the condition and outcome are case sensitive and work on entire word matching. For example, if the response is set as shown below, it will only affect chunks where title has the complete word in camel case as “Confidential” and will not work if it contains “confidential” or “confidentially”.
    ![Response](images/businessrules/response.png "Response Parameter")


## Activating /Deactivating a Business Rule

Deactivating a business rule temporarily disables the rule. When a rule is disabled, it does not affect the answers in any way. To deactivate a rule, go to the list of rules and use the slider button to change the status. 

![Disable Rule](images/businessrules/disable-rule.png "Disable Rule")



## Editing a Business Rule

To edit an existing rule, go to the list of rules under _Business Rules_ and select the rule to be updated. Make changes as required and click **Save**.


## Deleting a Business Rule

To delete an existing rule, go to the details view of the rule and click the **Delete** button. 


![Delete Rule](images/businessrules/delete-rule.png "Delete Rule")
