# Test Case Assertion

A test case assertion is a statement specifying a condition that must be satisfied for a test case to be considered successful. In the context of conversational systems, test case assertions can be used to validate various aspects of the conversation, such as the correctness of the response to a user’s input, the correctness of the conversation flow, and the correctness of the conversation context. By including multiple assertions in a test case, you can thoroughly test the behavior of a conversational system and ensure that it is functioning as expected.


## Types of Assertions

This section describes the types of assertions available for different intent types.

**Dialog Node Assertions**

If the app’s response is from a Dialog node, then the following assertions are available:

* **Flow Assertion:** A Flow assertion tests the flow of the path traversed by every user input during a conversation to check whether the responses are provided from the correct node or not. It helps to detect and handle any deviations from the expected flow.
    * It refers to the tasks, nodes, FAQs, or standard responses that were triggered during the flow execution. This ensures that the app has traversed the same path as expected.
    * It is enabled by default. You can disable it if required.
    * This section shows the summary on the right side of the Test Suite panel:
        * Expected Node
        * Expected Intent
        * Transitions  
          
        <img src="../images/tca-img1.png" alt="Flow Assertion" title="Flow Assertion" style="border: 1px solid gray;zoom:50%;"/>

* **Text Assertion:** A Text assertion tests the content presented to the user (string-to-string match), and provides support for dynamic values. Text assertions compare the text of the expected output with the actual output.
    * It is enabled by default. You can disable it if required.
    * This section shows the summary on the right side of the Test Suite panel:
        * **Expected Response**: Contains all possible responses/variations with the annotated dynamic values.  

            <img src="../images/tca-img2.png" alt="Text Assertion" title="Text Assertion" style="border: 1px solid gray;zoom:50%;"/>  
        
        !!! note
            
            In case of text assertion, if the expected output has dynamic values, then it should be annotated using [Dynamic Text Marking](#dynamic-text-marking). If not marked, the text assertion fails and eventually leads to failure of the test case. For the test case to pass, the text for that specific output must be dynamically marked.  
      
    For example, in the following test case, the city name entered by the user can be different every time. It is marked as dynamic for that specific test case to pass.  
    <img src="../images/tca-img3.png" alt="Example-Test case details" title="Example-Test case details" style="border: 1px solid gray;zoom:50%;"/>  
      
    The test case and text assertion can be seen as passed in the [Result Summary](test-case-execution-summary.md#result-summary){:target="_blank"}. If the text is not marked as dynamic, the test case would fail.  
    <img src="../images/tca-img4.png" alt="Result summary" title="Result summary" style="border: 1px solid gray;zoom:50%;"/>

* **Context Assertion:** A context assertion can be used to test the presence of specific context variables during a conversation. By using a context assertion, you can verify that the correct context variables are present at a specific point in the conversation, which can be helpful for ensuring the smooth and successful execution of the conversation flow.  
    * It is disabled by default. You can enable it if required.  
          <img src="../images/tca-img5.png" alt="Context assertion disabled by default" title="Context assertion disabled by default" style="border: 1px solid gray;zoom:50%;"/>

    * Once enabled, you can click the Add button to add key-value pairs of context variables.  
    <img src="../images/tca-img6.png" alt="Context assertion enabled" title="Context assertion enabled" style="border: 1px solid gray;zoom:50%;"/>  
      
        <img src="../images/tca-img7.png" alt="Add new context variables" title="Add new context variables" style="border: 1px solid gray;zoom:50%;"/>  

    * This section shows a summary of added variables:
        * Key
        * Value  

        !!! note
        
            The Context assertion label is added or removed to the test case in a validated chat based on whether it is enabled or disabled. As you add one pair, text boxes to add another pair get displayed. Once added, the saved key-value pairs are retained even if the assertion is disabled. 
            If the app response is from a **FAQ** or **Small Talk or Standard Response**, the Flow assertion has only **Expected Node**. The behavior of Text and Context assertions is the same as how it is for Dialog intent.



## Dynamic Text Marking

The dynamic text annotation feature in the **Expected Output** allows you to annotate a section of the text. You can add one or more annotations for a app response.  

During test execution, the annotated portion of the text is ignored by the platform for text assertion. You can view all the added annotations of app’s responses and be able to remove them.

!!! note

    Even if the value of the specific marked text is different, the test cases are marked as a success during execution. This feature is handy when different values are expected every time you interact with the app.


The following steps explain the dynamic text marking with an example:

1. Click any Test Suite on the Conversation Testing page.
2. In the **Test Editor** tab, navigate to the **Test Suite Details** Panel.
3. In the **Test Suite Details** panel, select a text in the **Expected Output** for a test case and click the Dynamic Marker icon (see the following screenshots).

    <img src="../images/tca-img8.png" alt="Test suite details-Expected output" title="Test suite details-Expected output" style="border: 1px solid gray;zoom:50%;"/>  
  
    <img src="../images/tca-img9.png" alt="Clicked Dynamic marker" title="Clicked Dynamic marker" style="border: 1px solid gray;zoom:50%;"/>  
  
    !!! Note
    
        The selected state variable in the Expected Output is annotated and highlighted in blue. One or multiple words can be marked as dynamic text.  

4. You can again click the Dynamic Marker icon to deselect the text and remove the dynamic marking.
5. Click the Dynamic Marker icon next to the list to expand and see the list of dynamic values.  
<img src="../images/tca-img10.png" alt="Dynamic values" title="Dynamic values" style="border: 1px solid gray;zoom:50%;"/>


## Test Coverage

The **Test Coverage** captures details like how many transitions or Intents are covered for this test suite. It helps add more test cases to cover the missed intents and transitions.

This section explains how to access the Test Coverage and its details.  
<img src="../images/tca-img11.png" alt="Test coverage" title="Test coverage" style="border: 1px solid gray;zoom:50%;"/>  

On the Conversation Testing landing page, in the **Test Suite Details** grid, click any Test Suite and then click the **Test Coverage** tab. Test Coverage contains the following three sub-tabs:

  * [Dialog Intents](#dialog-intents)
  * [FAQs](#faqs)
  * [Small Talks](#small-talk)


### Dialog Intents

This page provides transition coverage information and details of transitions across the Dialog intents.

**Transition Coverage**

The following details are displayed in the **Transition Coverage** section:  

  * **Total Transitions** – Total number of unique transitions available in the app definition across all the intents.  
  * **Covered** – Count and percentage of unique transitions covered as part of the Test Case definition against the Total Transitions list.  
  * **Not Covered** – Count and percentage of unique transitions not covered as part of the Test Case definition against the Total Transitions list.  
  
<img src="../images/tca-img12.png" alt="Transition coverage" title="Transition coverage" style="border: 1px solid gray;zoom:50%;"/>

For example, the app has total 292 transitions, out of which the coverage is as follows:

  * Covered – 15 Transitions and 5.14%
  * Not Covered – 277 Transitions and 94.86%

!!! note

    If you delete the node transition in a particular intent, then such transitions are displayed as Not Valid in the Coverage Status column.

**Intent Coverage**

All the intents and their transition coverage details are displayed in this section.  

The following details are displayed in the grid:

  * Intent Name  
  * Coverage Status  
  * Total Transitions  
  * Transition Covered  
  * Transition Coverage (%)

<img src="../images/tca-img13.png" alt="Intent coverage" title="Intent coverage" style="border: 1px solid gray;zoom:50%;"/>

You can obtain Node transition details of an intent by clicking the **View Transitions** slider. The **Node Transitions** pop-up displays the following details:  

  * From Node  
  * To Node  
  * Coverage Status

<img src="../images/tca-img14.png" alt="Node Transitions" title="Node Transitions" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    A transition must have one of the following three values displayed in the Coverage Status column:

      - Covered  
      - Not Covered  
      - Not Valid


You can sort, search, and filter the data for all the columns in the Intent coverage grid.  

<img src="../images/tca-img15.png" alt="Intent Coverage Operations" title="Intent Coverage Operations" style="border: 1px solid gray;zoom:50%;"/>

### FAQs

In the FAQs tab of Test Coverage, all the unique FAQ names covered in this test suite are displayed.  

<img src="../images/tca-img16.png" alt="FAQ" title="FAQ" style="border: 1px solid gray;zoom:50%;"/>


### Small Talk

All the Small Talks covered in the test cases are displayed in this tab in two columns:  

  * Pattern  
  * Group

To know more about Patterns and Groups, see [Small Talk](../../../use-cases/small-talk.md){:target="_blank"}.

<img src="../images/tca-img17.png" alt="Small talk" title="Small talk" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    You can filter and sort the details displayed in the Small Talks grid.


On the main page, the Test Suite is marked as **Passed** only when all the test cases are passed; else, it is marked as **Failed**.