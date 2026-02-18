# Proactive Web Campaigns

Web campaigns are online strategic initiatives to promote a product, service, cause, or brand. They harness the power of web engagement to reach and engage target audiences. Their utility lies in their ability to amplify visibility, generate leads, foster brand awareness, and achieve predefined objectives with precision and measurable outcomes.

You can access the Proactive Web Campaigns by going to Campaign Management > Proactive Web.
<img src="../images/campaign-management-page.png" alt="Proactive Web Page" title="Proactive Web" style="border: 1px solid gray; zoom:80%;"/>

## Proactive Web Campaign Types

| **Type** | **Description**                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------|
| `Chat`     | A message appears on the web page. This action pushes the configured messages to the chat widget message channel.     |
| `Banner`   | A banner appears to the customer at the top or bottom of a web page.                                                   |
| `Post`     | A post appears as a pop-up at the center of the web page.                                                               |
| `Button`   | A button appears to the customer on the web page. This button can remain static or trigger based on a customer action, and you can place it on either the right or left side of the web page. |

On this page, the following details of the web campaigns appear in a table:  
<img src="../images/campaign-management-page-details.png" alt="Campaign Details" title="Campaign Details" style="border: 1px solid gray; zoom:80%;"/>

* **Name** - The campaign name and Type.
* **Actions** - Play/Pause/Replay, Stop, Edit, Clone campaign.
* **Status** - Status of the campaign.
    * **Ready**: When a saved campaign is ready to run.
    * **Active**: The campaign starts and runs.
    * **Paused**: The campaign pauses.
    * **Completed**: The campaign exhausts, and sends all the proactive messages.
* **Type** - Chat, Post, Banner, or Button.
* **Sent** -  The count of proactive messages sent to website visitors.
* **Goals** - The count of campaign goals achieved.

## Filters

Campaign Managers can create, duplicate, mark as default, delete and edit filters for the campaigns.

### Create a Filter

Steps to create a filter:

1. Select `Filters` in the top corner.  
    <img src="../images/filters-dropdown.png" alt="Filters" title="Filters" style="border: 1px solid gray; zoom:70%;">

2. Select `+ Add New Filter`.  
3. Select the `Web Campaign Type` and `Status`, and choose their respective sub-filters.  
    <img src="../images/filter-by-web.png" alt="Filter by" title="Filter by" style="border: 1px solid gray; zoom:70%;">

4. Select `Save & Apply`.
5. On the pop-up window, enter a name  (up to 20 characters) for the filter and select `Save & Apply`.

    Turn on the `Make this the default view toggle` to view the filter as the default filter on the voice campaigns tab.  
        <img src="../images/default-view-web.png" alt="Default View" title="Default View" style="border: 1px solid gray; zoom:70%;"> 

6. Select the `Filters` dropdown to view Saved Filters. Hover over the saved filter to view the following options:
    * Duplicate
    * Mark as Default
    * Delete
    * Edit

#### Duplicate a Filter

Steps to duplicate a Filter:

1. Select `Duplicate`.  
    <img src="../images/duplicate-web.png" alt="Duplicate" title="Duplicate" style="border: 1px solid gray; zoom:70%;">

2. Enter a name for the duplicate filter and select `Save`. A notification appears, creating the duplicate filter with the same attributes as the original filter.

#### Mark as Default

Step to mark a filter as default:

1. Select `Mark as Default`.  
    <img src="../images/mark-as-default-web.png" alt="Mark as Default" title="Mark as Default" style="border: 1px solid gray; zoom:70%;">

    A notification appears, and marks the filter as default.  

    !!! Note

        Selecting the Mark as Default again un-marks the filter.

#### Delete a Filter

Steps to delete a filter:

1. Select `Delete`.  
    <img src="../images/delete-sms.png" alt="Delete" title="Delete" style="border: 1px solid gray; zoom:70%;">

2. Select `Delete` on the confirmation pop-up.

#### Edit a Filter

Steps to edit a filter:

1. Select `Edit`.  
    <img src="../images/edit-sms.png" alt="Edit" title="Edit" style="border: 1px solid gray; zoom:70%;">

2. Make the required changes and select `Save & Apply`. A confirmation appears, and updates the filter.

## Create Proactive Web Campaigns

Creating proactive web campaigns involves strategizing and implementing initiatives to anticipate and address user needs before they arise, enhancing user experience and engagement. Campaign managers are crucial in orchestrating these efforts, utilizing data-driven insights and innovative techniques to craft compelling content and optimize campaign performance.

Steps to create a proactive web campaign:

1. Go to `Campaign Management > Proactive Web`.
2. Select `+ New Campaign`.  
<img src="../images/new-campaign-button-proactive.png" alt="New Campaign Button" title="New Campaign Button" style="border: 1px solid gray; zoom:80%;"/>

### Chat

1. On the `New Proactive Web Campaign` page, select `Chat`.  
<img src="../images/chat.png" alt="Chat Button" title="Chat Button" style="border: 1px solid gray; zoom:80%;"/>

2. Select the `General` tab and enter the `Campaign Name` and `Description`.  

3. Select the `Layout Design` tab. Under the `Message Header` select the `Edit` icon to enter the header `Text` and `Image` used along with the displayed message, and select `Save`.  
<img src="../images/message-header.png" alt="Message Header" title="Message Header" style="border: 1px solid gray; zoom:80%;"/>

4. Select the `Edit` icon and enter the message that displays to the website visitor. You can select the font size, make the text bold, italics, underline, select, add links,  text color, or add variables, and select `Save`.  
<img src="../images/messages.png" alt="Messages" title="Messages" style="border: 1px solid gray; zoom:80%;"/>

5. Select `+ Add Button` to add a new button.

    Select the `Edit` icon to edit the details of an existing button. You can enter the Text for the button, select the Action performed on selecting the button, Background Color, Text Color for the button, and select `Save`.  
    <img src="../images/buttons.png" alt="Buttons" title="Buttons" style="border: 1px solid gray; zoom:80%;"/>  
    The following options are available for the Actions:  
        1. **Send to URL** - Selecting this option displays the URL field where the system redirects the user.
        2. **Send to AI Agent** - The system redirects the conversation to the AI Agent.
        3. **Dismiss** - Dismiss the proactive chat offer.

6. Under the `Appearance` section, select the `Message Bubble Alignment`, `Bubble Alignment`, and `Dark Shadow`.  
<img src="../images/appearance.png" alt="Appearance" title="Appearance" style="border: 1px solid gray; zoom:80%;"/>

7. The `Preview Section` on the left side shows the configured layout.
8. Select the `Engagement Strategy` tab and configure the following:

    1. **Website**: Select `+ Add Website` and select the `URL` or `Page Name`. URLs are crucial for directing users to specific web pages, tracking campaign performance, and optimizing user experience, enhancing audience engagement and conversion rates. Select the URL and the condition about what the URL contains.  
        <img src="../images/engagement-strategy.png" alt="Engagement Strategy" title="Engagement Strategy" style="border: 1px solid gray; zoom:80%;"/>

    2. **Rules**: Rules define when a Proactive Web Campaign (PWC) engages with a website visitor. Use rules to target visitors based on who they're, what they're doing, and where they're on the site.

        To add rules:  

        1. Select `+ Add Rule`.  
        2. Define the rules.  

            You can use multiple rules together to build complex engagement strategies.  
                <img src="../images/rule.png" alt="Engagement Strategy" title="Engagement Strategy" style="border: 1px solid gray; zoom:70%;">

            **Available Built-in Rule Fields and Supported Operators**

            | **Field**            | **Data Type** | **Supported Operators**            |
            |------------------|-----------|----------------------------------------|
            | `Page Visit Count` | Number    | Equals, Greater Than or Equal To                                 |
            | `Time Spent`       | Number    | Equals                                 |
            | `User`             | String    | Is (known / anonymous)                 |
            | `Country`          | String    | Is                                     |
            | `State`            | String    | Is                                     |
            | `City`             | String    | Is                                     |
            | `Device`           | String    | Is (Mobile / Laptop / Tablet)          |
            | `URL`              | String    | Contains, Ends With                    |
            | `Page Name`        | String    | Is, Contains                           |
            | `Hover On`         | String    | ID, Class, and Query Selector                           |

            You can apply the NOT operator at any condition level to invert the condition.

            **To find a selector**:

            * Right-click the element on the page and select Inspect.
            * Use the id, class, or right-click to Copy selector.

        !!! Note

            The above steps are specific to Chrome browser and might vary for other web browsers.  

    3. **Exclusions** Use exclusion rules to define conditions that prevent a campaign from triggering.

        To add exclusions:  

        * Go to the Exclusions section.  
        * Add rules using the same fields and options available in the main rule section.  
        <img src="../images/exclusions.png" alt="Exclusions" title="Exclusions" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        When creating a campaign using an existing template, any predefined rules from the template appears in the Rules section as a single group. You can view and edit them during campaign creation.

    **Custom Condition**

    If your site sends additional visitor information, you can use it in rules. These appear as selectable fields when adding a rule/exclusion.

    Select `+ Add Custom Condition` to create your own rule. Campaign managers can configure the custom values (in JSON format) as:

    `Custom Field Name(Key Name), operator from the defined operators list, and value`  
    <img src="../images/custom-condition.png" alt="Custom Condition" title="Custom Condition" style="border: 1px solid gray; zoom:70%;">

    **Supported Custom Condition Operators**

    Depending on the selected field, the following operators may appear:

    * Equal
    * Begins With
    * Ends With
    * Contains
    * Greater Than
    * Greater or Equal
    * Less Than
    * Less or Equal
    * Between
    * In

    Example Field Names

    ```
    name
    details.location
    details.cart[0].productName
    ```

    Sample JSON

    ```
    {
    "name": "Example",
    "details": {
        "location": "India",
        "cart": [{
        "productName": "AI as Service",
        "isActive": true
        },
        {
        "productName": "AI as Work",
        "isActive": true
        }]
    }
    }
    ```

9. **Goals**: The purpose is to provide clear objectives and measurable targets to guide the campaign's strategy and assess its effectiveness in achieving desired outcomes. Select `+ Add Goal` and select the goals.  

10. **Channel**: Channels in a web campaign designate the medium used to deliver the campaign message and support targeted outreach and engagement with the intended audience. Select the channel for the campaign from the dropdown.

11. **Engagement Hours**: Select the time duration for running the campaign. You can select from the following:
    1. **Anytime**: The campaign will be visible 24 hours, 7 days a week.
    2. **Custom**: The campaign will be visible in the chosen time zone only during the set days and times.

12. Select `Save`.

### Post

1. On the `New Proactive Web Campaign` page, select `Post`.  
    <img src="../images/post.png" alt="Post Button" title="Post Button" style="border: 1px solid gray; zoom:80%;"/> 
2. Select the `General` tab, and enter the `Campaign Name` and `Description`. Steps to add the name and description are same for all proactive web campaign types. [Learn more](#chat).
3. Select the `Layout Design` tab. Select the `Edit` icon under Message, enter a message, and select `Save`. You can use the options available in the editor to design the layout. Under Appearance, select the `Size`.  <img src="../images/layout-design-post.png" alt="Layout Design Post" title="Layout Design Post" style="border: 1px solid gray; zoom:80%;"/> 

4. Select the `Engagement Strategy` tab and configure the `Website`, `Rules`, `Exclusions`, `Goal`, `Channel`, and `Engagement Hours`. Steps to configure the engagement strategy are same for all proactive web campaign types. [Learn more](#chat).
5. Select `Save`.

### Banner

1. On the `New Proactive Web Campaign` page, select `Banner`.  
    <img src="../images/banner.png" alt="Banner Button" title="Banner Button" style="border: 1px solid gray; zoom:80%;"/> 

2. Select the `General` tab, and enter the `Campaign Name` and **Description**. Steps to add the name and description are same for all proactive web campaign types. [Learn more](#chat).
3. Select the `Layout Design` tab. Select the `Edit` icon under Message, enter a message, and select `Save`. You can use the options available in the editor to design the layout. Under Appearance, select the `Pattern` (`Sticky`/`Floating`), `Placement` (`Top`/`Bottom`), `Background`, and `Text Color`.  
    <img src="../images/banner-layout design.png" alt="Layout Design Banner" title="Layout Design Banner" style="border: 1px solid gray; zoom:80%;"/> 

4. Select the `Engagement Strategy` tab and configure the `Website`, `Rules`, `Exclusions`, `Goal`, `Channel`, and `Engagement Hours`. Steps to configure the engagement strategy are same for all proactive web campaign types. [Learn more](#chat).
5. Select `Save`.

### Button

1. On the `New Proactive Web Campaign` page, select `Button`.  
    <img src="../images/button.png" alt="Button" title="Button" style="border: 1px solid gray; zoom:80%;"/> 

2. Select the `General` tab, and enter the `Campaign Name` and `Description`. Steps to add the name and description are same for all proactive web campaign types. [Learn more](#chat).
3. Select the `Layout Design` tab. Select the `Edit` icon on the right corner and do the following:
    1. Enter the `Text` displays on the button.
    2. Select the `Action` (Send to URL/Slide Out Message) performed on selecting the button.
    3. Upload an image if required.
    4. Enter the header `Text` that displays on selecting the button.
    5. Enter the `Message` that displays on selecting button. You can use the options available in the editor to design the layout.
    6. Select the `Background` and `Text Color`.
    7. Select the `Placement` of the button (Left/Right).  
    <img src="../images/slide-out.gif" alt="Layout Design Button" title="Layout Design Button" style="border: 1px solid gray; zoom:80%;"/> 

4. Select the `Engagement Strategy` tab and configure the `Website`, `Rules`, `Exclusions`, `Goal`, `Channel`, and `Engagement Hours`. Steps to configure the engagement strategy are same for all proactive web campaign types. [Learn more](#chat).
5. Select `Save`.

## Templates

The purpose of using templates in web campaigns is to streamline and expedite the creation of consistent and visually appealing content. Templates provide a structured framework that enables you to plug in content elements, ensuring uniformity across various campaign materials. By using templates, marketers can save time, maintain brand coherence, and efficiently produce engaging content tailored to different platforms and audience segments. Additionally, templates facilitate collaboration among team members and enable swift adjustments and iterations based on campaign performance and feedback. Overall, templates enhance productivity, brand consistency, and campaign effectiveness in the dynamic landscape of digital marketing.

You can choose templates by going to Campaign Management > Proactive Web > + New Campaign > All Templates or Choose from Templates.

### Using a Template to Create a Proactive Web Campaign

Steps to create a proactive web campaign using a template:

1. Select the template that you want to use for the campaign. For example, Banner.
2. The template format appears. Select `Use this Template`.
3. The `New Proactive Web Campaign` page appears.
4. Enter the required information and create the web campaign.

### Schedule Proactive Web Campaigns

Scheduling enables precise control to deliver your messages. You can seamlessly plan campaigns to coincide with peak engagement times, ensuring maximum impact. Whether daily, weekly, Monthly, or Yearly, tailor your schedule to optimize outreach and enhance audience responsiveness. Scheduling a campaign activates the campaign at a designated date and time.

Steps to schedule a Campaign:

1. Select the Schedule tab and turn on the `Schedule Campaign` toggle.
2. Select the campaign `Start Date & Time`. `End Date & Time` is optional.  
3. Select the `Time Zone` to dial the campaign.
4. Turn on the Recurrence toggle if you want the campaign to recur at defined intervals. You can select from the following options:
    * Daily,
    * Weekly,
    * Monthly,
    * Yearly.

    `Every “Enter Value” day(s)` is a subset of what you select, Daily, Weekly, Monthly, or Yearly.  

    <img src="../images/recurrence-duration.gif" alt="Recurrence Precedence" title="Recurrence Precedence" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        When a Scheduled campaign completes the first occurrence, it considers that run as complete so on the next recurrence it starts reaching the contacts freshly.
        For example, If a campaign is scheduled to run every week on Monday then on the first occurrence of Monday, the dialer dials as many contacts as it can and then treat the contact list as completed. The next Monday the dialer again considers dialing all contacts in the list.

5. Turning on the Allow Recurrence Precedence toggle gives the recurrence start and end time precedence over Contactable timings.
For example, if Contactable Timings are 9:00 AM to 6:00 PM but the user selects Recurrence Start Time as 8:00 AM, the campaign starts contacting from 8:00 AM.  
<img src="../images/allow-recurrence-precedence.png" alt="Allow Recurrence Precedence" title="Allow Recurrence Precedence" style="border: 1px solid gray; zoom:80%;"/>

6. Select `Save`.

    !!! Notes

        * When a timezone is selected in the `Contactable Timings` section, it automatically becomes the default timezone for scheduling in the 'Schedule' section. However, campaign managers can choose a different timezone from the dropdown if necessary.
        
        * When a campaign is scheduled, it becomes active at the specified date and time. However, the contacts are dialed according to the 'Contactable Timings' time and timezone settings.
        
        * To ensure accuracy, the contacts are scrubbed again 15 minutes before the scheduled time of a campaign.
        
        * A scheduled campaign automatically runs at the scheduled date or time but the contacts are dialed as per the contactable timings and timezone. Selecting `Run` for a scheduled campaign displays an error message.

### Stop a Scheduled Campaign

Select `Stop` under actions. Stopping a scheduled campaign ends the instance of that campaign; re-running a stopped scheduled campaign creates a new instance and dials all the contacts again.

Select`Stop` to confirm.

### Edit a Proactive Web Campaign

When you edit a proactive web campaign, you modify the campaign to meet your requirements.

Steps to edit a web campaign:

1. Select the ⋮ icon beside the campaign name and select `Edit`.  

2. Do the required changes and select `Save`.  
    <img src="../images/edit-and-save-web-campaign.png" alt="Edit and Save Web Campaign" title="Edit and Save Web Campaign" style="border: 1px solid gray; zoom:80%;"/>

### Clone a Proactive Web Campaign

Cloning a proactive web campaign creates a replica of the original campaign. This is useful when two or more similar campaigns run simultaneously.

Steps to clone a web campaign:

1. Select the ⋮ icon beside the campaign name and select `Clone`.
2. The system creates a cloned copy of the original campaign.  
    <img src="../images/cloned-web-campaign.png" alt="Cloned Web Campaign" title="Cloned WebCampaign" style="border: 1px solid gray; zoo8100%;">

### Stop a Proactive Web Campaign

Stopping a web campaign resets the data, and creates a new instance of the campaign when you rerun the campaign.

Steps to stop a web campaign:

1. Select `Stop` under Actions for the campaign you want to stop.
2. select `Stop` to confirm.

### Delete a Proactive Web Campaign

You can delete a web campaign if it has served its purpose or is no longer required.

Steps to delete a web campaign:

1. Select the ⋮ icon beside the campaign name and select `Delete`.
2. Select `Delete` to confirm.

### Run Proactive Web Campaigns

You can run a proactive web campaign by selecting `Play`.  
<img src="../images/run-web-campaign.png" alt="Run Web Campaign Button" title="Run Web Campaign Button" style="border: 1px solid gray; zoom:80%;"/> 

When the campaign runs, you can pause or stop it. You can also rerun a completed campaign.

## Export and Import Web Campaigns

The Export and Import Web Campaigns feature enables supervisors to backup, migrate, and reuse Proactive Web Campaigns between accounts. It provides flexibility in campaign management while maintaining data integrity and traceability through detailed change logs.

### Export Campaigns

Supervisors can export one or more campaigns to a file for import into another account. They can export a maximum of 50 campaigns in a single operation. To export more, users must perform multiple export actions.

Selection Modes

The Export Campaigns option provides two selection modes to manage campaign selections.

Select All (Page-Level)

* Selects all campaigns visible on the current page.
* The selection resets when navigating to another page.
* If a user modifies the selection, the mode switches to Individual Selection.

Individual Selection (Multi-Page)

* Enables selecting specific campaigns across multiple pages.
* Selections persist when navigating to another page.
* Offers precise control over which campaigns to export.

Selections automatically clear when users perform any of the following actions:

* Apply search, filters, or date range.
* Sort data.
* Refresh the page.
* Save, clone, or delete campaigns.

**Exception**: Individual selections persist only during pagination.

The system exports the file as a CSV.

Each export action generates a log entry in the [Campaign Logs](./logs.md), capturing:

* The number of campaigns exported.
* The names of the exported campaigns.

### Import Campaigns

Supervisors can import all campaigns contained in an exported file. Partial imports (selecting specific campaigns from the file) aren't supported.

Import Result Scenarios and Notifications

| **Condition** | **User Message** | **Description** |
|----------------|------------------|-----------------|
| `All campaigns imported successfully` | NN Campaigns imported successfully! | Displays the number of campaigns (`NN`) successfully imported. |
| `Partial import (some failed)` | Import partially successful. XX successfully imported, YY failed. See the Campaigns log for more details.| Displays counts of successful (`XX`) and failed (`YY`) imports. |

Duplicate Campaign Handling

* The system records the details of skipped campaigns, including their names and the reasons for skipping them, in the Campaign Logs.
* Skipped campaigns don't affect the import of other campaigns.
* The system records the details of skipped campaigns, including their names and the reasons for skipping them, in the Campaign Logs.

Each import operation creates a detailed entry in the [Campaign Logs](./logs.md), capturing:

* The total number of campaigns imported successfully and those that failed.
* For each failed campaign:
    * Campaign name
    * Reason for failure
    * Corresponding line number from the `.jsonl` file within the `.zip` archive

All successfully imported campaigns display the label `Recently imported`. This label automatically expires at the end of the day.

## Campaign Suppression and Re-evaluation

ChatGPT said:

The system suppresses a campaign for a visitor for any of the following reasons:

* A cooldown period after another campaign executes  
* An active chat is in progress  
* A template from another campaign is active  
* Any other suppression condition  

The system continues to treat the suppressed campaign as a candidate. When the suppression reason is no longer valid, the system again evaluates the campaign when the website URL matches.

Campaign configuration

* Campaign 1

    * Website: Page1  
    * Rule: Page Visit Count (PVC) ≥ 1

* Campaign 2

    * Website: Page2  
    * Rule: PVC ≥ 1

* Campaign 3

    * Website: Page1  
    * Rule: PVC ≥ 1 and Time Spent (TS) = 30 seconds

Example:

* Campaign 2 triggers when the user visits Page 2 and meets the PVC rule.  
* The system suppresses Campaign 1 when the user navigates to Page 1 because Campaign 2’s template is active.  
* Campaign 3 triggers when the user closes Campaign 2’s template before 30 seconds because both PVC ≥ 1 and TS = 30 seconds meets the PVC rule. 
* Campaign 1 doesn't trigger again when the user closes Campaign 3’s template and remains on Page 1 because the system suppresses it during the same page visit.  
* Campaign 1 triggers when the user navigates to Page 2 and then back to Page 1 because the URL matches again and the suppression condition clears.  

!!! note 
 
    The suppression and re-evaluation behavior applies to all suppression types. The system uses a consistent suppression and reconsideration flow across all cases.

## Proactive Web Campaign Plugin for the Web SDK

The Proactive Web Campaign plugin extends the Web SDK, enabling dynamic, rule-based interactions with website visitors. With this plugin, you can define campaigns that trigger actions like displaying messages or starting chats based on visitor behavior.

For installation instructions, configuration options, and examples, refer to the README file in the [GitHub repository](https://github.com/Koredotcom/web-kore-sdk/blob/v3/11.20.0/docs/plugins/proactive-web-campaign/README.md){:target="_blank"}.