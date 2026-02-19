# Frequently Asked Questions (FAQ)

* **What is the difference in the resumption behavior of a paused and a completed campaign when using the 'Rerun' icon?**

    When you pause and resume a running campaign, it will restart from where it left off. However, if a campaign has dialed the last record and is then resumed by clicking the 'Rerun' icon, it will start dialing from the beginning of the dial list and will be a new instance of the same campaign. The new instance will not maintain data from the previous run.

* **How does the system handle contact lists in campaigns, and what are the limitations when sharing contact lists or running campaigns concurrently with the same list?**

    Each campaign can have its contact list. Campaigns also can share contact lists. However, it is not possible for campaigns to simultaneously operate with the same contact list.

* **Is there a limit to the number of call lists per campaign?**

    A campaign can have a maximum of 10 Call Lists.

* **Is there a limit on the number of Do Not Contact (DNC) lists per campaign?**

    The maximum number of DNC lists per campaign is one.

* **How many contact lists are permitted to be created?**

    Each account can create a maximum of 1000 contact lists.

* **What are the limitations on DNC lists in terms of the number of records allowed per DNC list and account?**

    There is a limit of one million records for each DNC list and two million is the total limit for DNC records for each account.

* **How many DNC lists are permitted to be created?**

    Each account can create a maximum of 1000 DNC lists.

* **How many voice campaigns can be run concurrently?**

    You can run a maximum of 50 voice campaigns concurrently.

* **What is the maximum number of contacts per account?**

    Each account can have a maximum of five million contacts.

* **What is the maximum number of contacts that can be added to a contact list?**

    Each contact list can contain a maximum of one million contacts, or up to a 5 MB file size limit.

* **How does priority work in Voice Campaigns?**

    Assigning percentages to campaigns facilitates managing campaigns with varying priorities. A higher percentage implies more contacts will be dialed for that specific campaign. However, it's important to note that a higher priority doesn't guarantee that the campaign will be completed first.

    A Campaign Manager can oversee multiple campaigns with similar or different priorities. The campaign management system can automatically select and transfer contacts to the dialer.

    **Priority Percentage** = (Sum of Priority Value of each Campaign / Number of Campaigns) * 100

    **Scenario 1:** Two campaigns with priorities 5 and 3 respectively

    Percentage allocation to campaign 1 = (5 / (5+3)) * 100 = 62.5%

    Percentage allocation to campaign 2 = (3 / (5+3)) * 100 = 37.5%

    **Execution in this case**: 62.5% of calls will be picked from campaign 1 and 37.5% of calls will be picked from campaign 2.
  
    Dialer will randomly dial from the 62.5% of calls from campaign 1 and the 37.5% of calls from campaign 2.

    **Scenario 2:** Two campaigns with the same priorities of 5.

    Percentage allocation to campaign 1 = (5 / (5+5)) * 100 = 50%

    Percentage allocation to campaign 2 = (5 / (5+5)) * 100 = 50%

    **Execution in this case**: 50% of calls will be picked from campaign 1 and 50% of calls will be picked from campaign 2.

    Dialer will randomly dial from the 50% of calls from campaign 1 and 50% of calls from campaign 2.

* **Can agents transfer a call to another agent or to a queue during outbound campaigns with auto-dialers (Progressive and Preview)?**

    No, agents cannot transfer a call either to another agent or to a queue during outbound campaigns with auto-dialers.

* **Can I use the same number for both voice and SMS flows?**  

    Yes, you can attach the same number to both a voice flow and an SMS flow. This setup ensures that the appropriate flow is triggered based on how the customer interacts with the number. If a customer calls the number, the **voice flow** will be triggered. If a customer sends an SMS to the number, the **SMS flow** will be triggered. However, you can’t associate the same number to flows of the same type; for example - you can’t associate the same number to two voice flows.