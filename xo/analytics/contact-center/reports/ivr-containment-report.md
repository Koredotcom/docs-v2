--8<-- "includes/ccai-reports-back-link.md"

# IVR Containment Report

## Generating the IVR Containment Report

The IVR Containment Report shows data on all incoming calls. It is a comprehensive report covering all calls made, callers identified, and shows per intent data and outcomes of these conversations on a daily basis. This report requires that the bot designer use certain predefined message tags to be emitted during the execution of intents. This report is applicable for voice calls only.

To generate the IVR Containment Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the **IVR Containment Report**.
3. Enter the **Report Name** and **Report Description**.
4. Select the **Time Period**.
5. Select the **Data Filters**.
6. Select Report Generation and choose from the following options:
    * Schedule
        * Run On Demand
        * Schedule
        * Run On Demand
        * Schedule
            * You can create up to six schedules (only one if you select Hourly).  
                <img src="../images/schedule-options.png" alt="Schedule Options" title="Schedule Options" style="border: 1px solid gray; zoom:70%;">
    * Select Format
        * CSV
    * Send To (single email address or a mailing list)
7. Click **Create**.
8. The IVR Containment Report is generated.  
<img src="../images/ivr-containment-report-generated.png" alt="IVR Containment Report Generated" title="IVR Containment Report Generated" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
<img src="../images/run-ivr-containment-report.png" alt="Run IVR Containment Report" title="Run IVR Containment Report" style="border: 1px solid gray; zoom:100%;">

While generating reports you have two options, Run On Demand and Schedule.

**Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.

**Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.

10. Click the **CSV** icon and generate the output of that report, as shown below.  
<img src="../images/csv-ivr-containment-report.png" alt="IVR Containment Report CSV Format" title="IVR Containment Report CSV Format" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        * The IVR containment report is available only in CSV format.
        * The red dot beside the report indicates that it was generated within the last 24 hours.

11. The IVR Containment Report is generated and is available for download.  
<img src="../images/ivr-containment-report-output.png" alt="IVR Containment Report Output" title="IVR Containment Report Output" style="border: 1px solid gray; zoom:100%;">

## Message Tags for Bots

<table>
  <tr>
   <td>Pre-defined Message Tags
   </td>
   <td>Place in bot where message tag should be emitted
   </td>
  </tr>
  <tr>
   <td>{didUserAskForAgent: true}
   </td>
   <td>When the caller has made at least one request for an agent.
   </td>
  </tr>
  <tr>
   <td>{wasTransferredOnRequest: true}
   </td>
   <td>When the caller was transferred after making at least one request for an agent
   </td>
  </tr>
  <tr>
   <td>{isCallerIdentified: true}
   </td>
   <td>When the Caller was successfully identified
   </td>
  </tr>
  <tr>
   <td>{isCallerIdentified: false}
   </td>
   <td>When the Caller identification process failed.
   </td>
  </tr>
  <tr>
   <td>{iDFailure: true}
   </td>
   <td>When the caller identification failed with specific errors
   </td>
  </tr>
  <tr>
   <td>{iDIncomplete: true}
   </td>
   <td>When the Caller identification failed, non-specified errors and the customer utterances were greater than zero.
   </td>
  </tr>
  <tr>
   <td>{errorMessage: true}
   </td>
   <td>When a call had at least one Pega error.
   </td>
  </tr>
  <tr>
   <td>{errorDuringTransfer: true}
   </td>
   <td>When the first Pega error occurred during the transfer.
   </td>
  </tr>
  <tr>
   <td>{errorContainsTransferReason: true}
   </td>
   <td>When the error contained a specified transfer reason
   </td>
  </tr>
  <tr>
   <td>{ANImatchNotIdentified: false}
   </td>
   <td>When the Caller ID process was not successful, but the ANI did match.
   </td>
  </tr>
  <tr>
   <td>{paymentTriggered: true }
   </td>
   <td>transferred to payment
   </td>
  </tr>
  <tr>
   <td>{completedTransactionNotTransfered:true}
   </td>
   <td>Completed Self-Service Transaction; AND
    Not transferred to Payment; AND
    Not transferred to Contact Center AI;
   </td>
  </tr>
  <tr>

   </td>
  </tr>
  <tr>
   <td>Per-intent Message Tags
   </td>
   <td>Within Every Business Relevant DialogTask, Please Use These Message Tags
   </td>
  </tr>
  <tr>
   <td>{showBalance: attempted}
   </td>
   <td>The intent name is key, (showBalance is just an example). Show this when the main PEGA script is attempted.
   </td>
  </tr>
  <tr>
   <td>{showBalance: success}
   </td>
   <td>The intent name is key, (showBalance is just an example). Show this when main PEGA script returns success.
   </td>
  </tr>
</table>

#### Related Link

* [Reports List](../reports/reports-list.md)