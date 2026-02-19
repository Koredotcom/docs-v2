# Hours of Operation

The Hours of Operation feature helps set the standard hours when agents are available for customers based on business operating hours, non-operating hours, and holidays.

In Contact Center AI, you can define the standard working hours for each day of the week and set the non-working hours for weekends and public holidays in different time zones.  [Default Flows](../../flows-and-routing/conditional-flows.md) are handled by Contact Center AI based on your configuration for Hours of Operation,

You can reach the Hours of Operation feature by going to **Contact Center AI** > **CONFIGURATIONS** > **Hours of Operation**.
<img src="../images/hours-of-operation-page.png" alt="
Hours of Operation Page" title="Hours of Operation Page" style="border: 1px solid gray; zoom:80%;"/>

The Hours of Operation section displays the following details:

* A `Name` for each configuration;
* **Actions**: Here is where you can `Edit` or `Delete` a configuration.
* **Timezone**: Lists the timezone for which the hours of operation are configured;
* **Special** Days: Lists any configured special days or holidays.

## Add Hours of Operation

To add Hours of Operation, follow these steps:

1. Click `+ Add New` to add a new Hours of Operation entry.
<img src="../images/add-new.png" alt="
Add Hours of Operation" title="Add Hours of Operation" style="border: 1px solid gray; zoom:80%;"/>

2. In the New Hours of Operation panel, configure the following fields:
    1. **Name:** Add a name to identify the Hours of Operation profile. For example, Official Working Hours.
    2. **Time Zone:** Select the time zone for which these hours apply.
    3. **Work Days, Holidays, and Special Days**: Configure the days and hours of operation per day, and set up holidays and special days as follows:

## Standard Working Hours

Set the standard working hours explicitly or opt for the pre-selected hours (9 AM to 6 PM). By default, the weekdays are open, and weekends are closed. The status for Saturday or Sunday can be enabled or disabled using the toggle.
<img src="../images/new-hours-of-operation.png" alt="
New Hours of Operation" title="New Hours of Operation" style="border: 1px solid gray; zoom:80%;"/>

## Holidays and Special Days

Set the Date, Name, Period, Start Work Time, and End Work Time for holidays or special days.

To add a new entry, click the `+ Add New` button.
<img src="../images/holidays-and-special-days.png" alt="
Add Holidays & Special Days" title="Add Holidays & Special Days" style="border: 1px solid gray; zoom:80%;"/>

* Enter the `Date` of the holiday or special day;
* Enter a `Name`;
* Toggle the `Period` to either Partial or Full. When set to Partial, you can adjust the working hours for the day. When set to Full, the day is considered a holiday.
* To add more hours of operation for holidays and special days, click `+ Add Another`.
* To delete an entry, click the `Delete` icon next to it.
* Click `Save`.
<img src="../images/configure-holiday-hours.png" alt="
Configure Holiday Hours" title="Configure Holiday Hours" style="border: 1px solid gray; zoom:80%;"/>

## Edit Hours of Operation

To edit Hours of Operation, click the `Edit` icon under Actions.
<img src="../images/edit-button.png" alt="
Edit Hours of Operation" title="Edit Hours of Operation" style="border: 1px solid gray; zoom:80%;"/>

## Delete Hours of Operation

To delete an Hours of Operation, click the `Delete` icon under Actions and confirm your choice.
<img src="../images/delete-button.png" alt="
Delete Hours of Operation" title="Delete Hours of Operation" style="border: 1px solid gray; zoom:80%;"/>