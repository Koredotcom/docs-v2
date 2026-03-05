# Test Editor

You can use the Test Editor to view the test cases and their metadata. This section explains the steps to access the test editor and use the available options:

1. On the **Conversation Testing** page, click on any **Test Suite** to go to the **Test Editor**.  

   <img src="../images/te-img1-window.png" alt="Navigate to Test Editor" title="Navigate to Test Editor" style="border: 1px solid gray;zoom:50%;"/>

2. In the **Test Editor**, the platform shows the validated chat along with its metadata and assertions for each test case.  

   <img src="../images/te-img2.png" alt="Test Editor" title="Test Editor" style="border: 1px solid gray;zoom:50%;"/>

3. To see the details, choose a test case in the right side pane – **Test Suite Details**, or click the test case in the Validated Chat of the left pane.  

   <img src="../images/te-img3.png" alt="Choose a test case" title="Choose a test case" style="border: 1px solid gray;zoom:50%;"/>

A test case consists of: 

    * One user input  
    * One or more app responses for a user input  
    <img src="../images/te-img4.png" alt="Test case details" title="Test case details" style="border: 1px solid gray;zoom:50%;"/>

4. If the app response is from a dialog intent, the following details are displayed:  

    * Intent name  
    * Node name
	    * Error Prompt/User Prompt for Entity node. For more information, see [Entity Node](../../../../automation/use-cases/dialogs/node-types/working-with-the-entity-node.md#component-properties){:target="_blank"}.

    * Transitions
    * User Input  
    * Expected Output  
        * All the variations of the node prompt are added as expected output  
        * If a node has more than one variation, then the OneOf operator is added by default  
      
            !!! note
            
                The **OneOf** operator is used to test randomization scenarios where a node can have multiple app responses. For any node in which multiple responses are configured, the operator is activated by default. If one of the multiple responses is obtained from the app during the test execution, then the assertion will be passed.  


        <img src="../images/te-img5.png" alt="Response" title="Response" style="border: 1px solid gray;zoom:50%;"/>

5. If the app response is from **FAQ/Small Talk/Standard Responses**, the following details are captured:  

    * Intent Name (FAQ Name, Small Talk Pattern, Standard Response)  
    * User Input  
    * Expected Output: It has the same details displayed as in Dialog Intent.  
    * Assertions  
        * Flow (Enabled by default)  
        * Text (Enabled by default)  
        * Context  
    
    <img src="../images/te-img6.png" alt="Navigate to Test Editor" title="Navigate to Test Editor" style="border: 1px solid gray;zoom:50%;"/>

    <img src="../images/te-img7.png" alt="Navigate to Test Editor" title="Navigate to Test Editor" style="border: 1px solid gray;zoom:50%;"/>  

6. You can export the entire test suite to your local directory as a **JSON** file. The downloaded test suites include the user inputs and app responses.  
<img src="../images/te-img8.png" alt="Test suite operations" title="Test suite operations" style="border: 1px solid gray;zoom:50%;"/>  
  
    !!! Note
    
        You can also clone the test suite or delete it as per the requirement.