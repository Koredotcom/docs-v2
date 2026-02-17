# Workbench Simulator

The Workbench comes with a built-in simulator that provides an interactive preview of how a stage affects a document and data manipulations before it’s indexed. This simulator serves as a valuable tool to test Workbench stages' behavior and fine-tune outputs according to requirements before deploying the application.

## Features

* The simulator allows you to test and verify the output of individual stages.
* If multiple stages are configured, the simulator enables testing the cumulative effect of all stages on the result.
* You can test changes on any type of data source, ensuring versatility in testing scenarios.

## Running a Simulation

Click the **Simulate** button at any point to test the changes made to the source data due to the workbench stages. 

![Simulator](images/simulate-option.png "Simulator")


The simulation is performed on a sample set of documents. The output of the simulator is in JSON format as shown below. 

![Simulator Output](images/simulator-output.png "Simulator Output")

**Points to Note**

* The simulator shows the changes made to the source data through various stages of Workbench in the order in which they're listed, starting from the first stage.
* When you click Simulate on a specific stage, the simulator shows the cumulative transformations applied up to that stage. For example, If the pipeline contains three stages and you run the simulator from the second stage, the output reflects changes from Stage 1 and Stage 2 only.
* You can also **test individual stages** of the pipeline by disabling the other stages temporarily.

!!!note "Tip"
    Use the Workbench Simulator frequently during configuration to catch errors early and ensure data is indexed exactly as expected.