# Domain Management

This document provides instructions on managing domains within your account. Domain management allows administrators to configure domains, enabling controlled access to the account via organization SSO for verified domains.

<img src="../images/domain-management-main.png" alt="service-account" title="service-account" style="border: 1px solid gray; zoom:80%;">

## Domain Types

Administrators can add domains to extend access to approved domains within the organization. Domains are categorized into two types:

* **Company Domain**: Domains owned by the organization.
* **Partner Domain**: External domains used by trusted partners, vendors, or collaborators.


## Steps to Add a Domain

1. Click **Add New**. A pop-up window appears where you can enter the new domain details.
2. Select the domain type:
    * Choose **Company Domain** for domains owned by your organization.
    * Choose **Partner Domain** for external domains used by trusted partners. 
<img src="../images/domain-management-1.png" alt="service-account" title="service-account" style="border: 1px solid gray; zoom:80%;">

3. Once the details are entered, submit the domain for verification. The system will review and verify the domain.
4. Successfully verified domains will be added to the account. Users from these domains can access the account based on their domain type permissions. If a domain is rejected, it will not be added to the account. However, it will be listed with a **Rejected** status for record purposes.

## Sign-In and Access Rules

<table>
  <tr>
   <td>
        <strong>Company Domain Users</strong>
   </td>
   <td>
        <strong>Partner Domain Users</strong>
   </td>
  </tr>
  <tr>
   <td>Can sign in when domain-based user enrollment is enabled
   </td>
   <td>Cannot sign in even if domain-based enrollment is enabled
   </td>
  </tr>
  <tr>
   <td>Cannot be associated with more than one tenant (single-account restriction)
   </td>
   <td>Can be associated with multiple tenants (multi-account access)
   </td>
  </tr>
  <tr>
   <td>Automatically gain access to the account once domain-based enrollment is configured
   </td>
   <td>Must be explicitly invited to each account
   </td>
  </tr>
</table>

## User Management Features


### User Invitation Behavior

When inviting users from different domain types:

* **Company Domain Users**: Follow standard invitation process with automatic access upon domain enrollment.
* **Partner Domain Users**: Require explicit invitation and display with a ***Partner*** label in User Management.

### Multi-Tenant Account Switching

Partner domain users have access to multiple accounts. They can switch between accounts by clicking the profile button in the top-right corner of the screen, which reveals a **Switch Account** option that lists the assigned accounts.

Partner users can effortlessly navigate between multiple tenant accounts. Each accessible account is listed by its primary domain name. User can access this feature from:

* The Admin Console
* The Application UI

