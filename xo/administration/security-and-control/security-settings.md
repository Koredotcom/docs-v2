# Security Settings

Apart from the sign-on, and other security settings, you can modify the following default security & control settings for your account:

* Data retention period
* Context persistence
* IP address restriction
* Active URLs Revocation


## Data Retention

The end-user interaction data from **Standard** accounts/workspaces is removed as per Kore.ai’s retention policy. It is usually 7 years and can be revised at periodic intervals.

The end-user interaction data for **Enterprise** accounts is retained for 7 years. Enterprises can customize the retention period to suit their policies using the Data Retention Period option.

**Steps**:

1. Go to **Security & Control** > **Settings** on the left menu.
2. Under **Data Retention Period**, you have two options:
    1. _Use the default retention period – 7 years._
    2. _Use the custom data retention period and set the duration between 1 month to 7 years._

    <img src="../images/bac-security-settings-img1.png" alt="Security Settings - Data Retention" title="Security Settings - Data Retention" style="border: 1px solid gray;zoom:70%;"/>


The following data would no longer be available post the data retention period:

* Conversation History / Messages
* Usage Information
* Task Execution and Performance Metrics
* Session and Message Tags
* Alert Instances
* Debug Logs

!!! Note

    The custom data retention period cannot be set if your account has a large volume of messages. In such a case, you are requested to reach out to Kore.ai Support for setting Custom Retention Period.


## Context Persistence

By default, the XO Platform stores the context of the end-users’ conversations with the assistant. This context information can be used for debugging and analysis purposes.

However, you might not want the Platform to store this information due to the presence of sensitive data about customers or other security-related reasons. You can opt not to store the same using the **Context Persistence** option.

**Steps**:

1. Go to **Security & Control** > **Settings** on the left menu.
2. Under **Context Persistence**, you have two options:
    1. _Store end users’ conversation context information and allow authorized developers to view this information_ – this is the default setting.
    2. _Do not store end users’ conversation context information_ – this will ensure that:
        1. the Platform does not store the context information
        2. Option to view context information in the XO Platform, like Metrics and any other places, is disabled.

    <img src="../images/bac-security-settings-img1.png" alt="Security Settings - Context Persistence" title="Security Settings - Context Persistence" style="border: 1px solid gray;zoom:70%;"/>


## IP Address Restriction

By default, users can access the XO Platform, and the Admin Console from any IP address, as long as they have valid credentials.

Additionally, you can restrict access to a specified range of IP addresses. When you specify a list of IP addresses in the IP Address Restriction section, users within your account attempting to access the Platform from any other IP addresses will be restricted. 

The XO Platform enables you to use a **Regular Expression (Regex)** pattern to define the list of IP addresses, eliminating errors, and the need to add each IP address individually. [Learn more](https://www.regextutorial.org/regex-for-ip-address-match.php){target="_blank"} about IP address Regex patterns.

**Examples of IP address patterns**

* `157.47.6[0-9].5[0-4]`
* `115.114.88.(1[0-9][0-9]|200|222)`
* `1[3-5]7.47.6[0-9]`
* `1\d7.4[1-7].6[0-9]`

During runtime, the system evaluates the regex to determine if an IP address is included in the defined list and takes the appropriate action, allowing access to IP addresses in the list and denying access to others.

If a developer belongs to another account, their access to the Platform using that account are not restricted.

### Steps to Configure IP Restriction

1. Go to **Security & Control** > **Settings** on the left menu.
2. Under **IP Address Restriction**, select one of the following options:
    * **No restriction** – This is the default selection that does not restrict access to any IP address.
    * **Restrict** – This selection allows you to define the list of allowed IP addresses. You must add a Regex to automatically determine the allowed IP Addresses.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <ul><li>Your current IP Address should be part of the allowed IP Addresses list.</li>
    <li>Even if the IP address of your current system is a part of the Regex pattern, it should be added separately after the regex pattern in the <b>Restrict</b> text field following a comma separator. For example: <i>115.114.88.(1[0-9][0-9]|200|222), 115.114</i>.88.222.</li></ul></div>


<ol start="3"><li>Click <b>Save</b>.</li>

<img src="../images/IP-address-restriction.png" alt="IP Address Restriction" title="IP Address Restriction" style="border: 1px solid gray;zoom:80%;"/></ol>

## Active URLs Revocation

This section provides an emergency security control to immediately invalidate all active secure URLs generated by the app.

Click **Revoke All Active URLs** to instantly revoke all existing chat history and attachment URLs generated up to that point, regardless of where or how they are being used (agent transfer, portals, or integrations).

Any link generated after the revocation will be valid without any disruption


⚠️ **Warning:** This action cannot be undone. Use only when an immediate revoke is required. There could be a disruption to ongoing work/flows with a dependency on these URLs.

<img src="../images/active-url-revocation.png" alt="Security Settings - Context Persistence" title="Security Settings - Context Persistence" style="border: 1px solid gray;zoom:70%;"/>