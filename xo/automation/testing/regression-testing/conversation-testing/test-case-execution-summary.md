# Test Case Execution Summary

The Test Case Execution Summary allows you to view the test case results, identify the failed test cases, and resolve the flow of the app. It gives complete details of the overall test results and the defects found.

The following sections explain the options available on the Conversation Testing to execute the test cases and interpret the results, which help analyze the performance of the test suite as a whole and the individual test cases.


## Test Case Execution

You can execute test cases on the Conversation Testing Landing Page and the individual Test Case details page.  
Follow these steps for test execution:

1. On the **Test Suite Details** page, select the test suite and then click the **Run Test Suite** button for that specific suite.  
<img src="../images/tces-img1.png" alt="Test Suite Details" title="Test Suite Details" style="border: 1px solid gray;zoom:50%;"/>  

    **Note:** You can also execute the test cases by clicking the Run Test button on the Test Suite Details page.  
  
    <img src="../images/tces-img2.png" alt="Run test" title="Run test" style="border: 1px solid gray;zoom:50%;"/>  


2. Choose the Version of the app you want to test.  
  
    **Note:** Ensure that you have valid authorization tokens for the app to make the service calls that would be part of the test suite.  
    
    <img src="../images/tces-img3.png" alt="Choose Version" title="Choose Version" style="border: 1px solid gray;zoom:50%;"/>

3. You can monitor the progress of the test suite in the **Result** column and the status docker. The Result column displays the **Passed** or **Failed** status upon successful execution.  
<img src="../images/tces-img4.png" alt="Result" title="Result" style="border: 1px solid gray;zoom:50%;"/>

When a test case is executed, the test case result is determined with the features like assertions, dynamic texts, OneOf, and so on. To know more, see [Test Case Assertion](test-case-assertion.md){:target="_blank"}.

The platform simulates all the user inputs against the current app definition in sequence, as available in the test case. For every user input, the app’s responses are captured along with the metadata. See Capture Test Suite Metadata under [Validate Test Suite](create-a-test-suite.md#validate-test-suite){:target="_blank"} to know more.


### Test Assertions Execution

The platform performs the assertions tagged to each app response of a test case. For example, a app’s response can have Flow, Text, and Context Assertions tagged. The platform performs all three assertions to determine their assertion results.  
<img src="../images/tces-img5.png" alt="Test Assertion" title="Test Assertion" style="border: 1px solid gray;zoom:50%;"/>


#### Flow Assertion

* For any app response in a test case, the assertion is determined as pass when the following conditions are true:

    * The Intent ID of the Expected and Actual responses is the same.
    * The Node ID of the Expected and Actual responses is the same.
    * The Transition(s) of the Expected and Actual responses are the same.
    * The Prompt type (Error or User Prompt) is the same in case of Entity nodes.

* If the above conditions are not met, the assertion is determined as Failed.


#### Text Assertion

* For any app response in a test case, the assertion is determined as passed when the following condition is true:

    * The expected and actual responses are the same (string comparison).

* Dynamic text values are not considered when performing the comparison.
* In case of multiple responses in the Expected Output (when a node has multiple variations), one of the expected responses must match for the assertion to pass.


#### Context Assertion

* For any app response in a test case, the context assertion is determined as passed when the following conditions are true:

    * The expected and actual values are the same for the added context variable.
    * A app response has multiple context assertions and multiple context assertion results.

* A context assertion fails if the expected value and the actual value of the variable are not the same.

!!! note

    The test case result is determined as Pass only when all the assertions of all the app responses of the test case are passed.


## Past Test Executions

The **Past Executions** tab is available on the Test Suite summary page, which displays the test result summary of all past executions. The details help in referring to test executions and understanding the results.  
<img src="../images/tces-img6.png" alt="Past test executions" title="Past test executions" style="border: 1px solid gray;zoom:50%;"/>


### Result Summary

The following steps show how to access the test result summary and the details displayed.

1. Click the **Result Summary** button to view the summary of all the executions.  
<img src="../images/tces-img7.png" alt="Result Summary button" title="Result Summary button" style="border: 1px solid gray;zoom:50%;"/>

2. Two chat panels are displayed:
    * **Ideal Test Suite** – It shows Test Cases with metadata and assertions from the test editor.
    * **Test Suite Execution** – It shows Test results along with the metadata and assertion results identified during Test Exec  
  <img src="../images/tces-img8.png" alt="Result summary" title="Result summary" style="border: 1px solid gray;zoom:50%;"/>


3. The test result summary is displayed with the following details:

    * Total test cases
    * Breakdown of Passes, Failed, and Not Executed test cases
    * Duration of test case execution
    * The status of the Test Suite – Passed or Failed  
    <img src="../images/tces-img9.png" alt="Test result details" title="Test result details" style="border: 1px solid gray;zoom:50%;"/>


4. The test case details and their assertion result summary are also displayed.  
<img src="../images/tces-img10.png" alt="Test case details and assertion result" title="Test case details and assertion result" style="border: 1px solid gray;zoom:50%;"/>
