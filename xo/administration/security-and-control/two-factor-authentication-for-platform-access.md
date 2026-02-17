# Two-Factor Authentication for Platform Access

The Kore.ai Platform provides an additional layer of security for enterprise user accounts with **Two-Factor Authentication (2FA)** using a **One-time password (OTP)** or verification code via email. OTPs are a popular choice for organizations to step up their user authentication process. These randomly generated passwords are valid only for a single login session and minimize the vulnerabilities of traditional passwords.

In addition to the username, password, and Enterprise SSO for first-factor authentication, enterprise administrators can now enable 2FA on the **Admin Console** for user accounts. When 2FA is enabled, the platform prompts the user to complete email verification via OTP to authenticate them.


## Enable Two-Factor Authentication

Only the admin user can enable 2FA for enterprise user accounts via the Admin Console. To enable 2FA, follow the steps below:

1. Log in to the **Admin Console**.
2. On the left menu, click **2FA** under **Security & Control**.  
<img src="../images/two-factor-authentication-for-platform-access-img1.png" alt="Security & Control - 2FA" title="Security & Control - 2FA" style="border: 1px solid gray;zoom:70%;"/>

3. Click **Enable 2FA** to activate 2FA via email OTP verification.  
<img src="../images/two-factor-authentication-for-platform-access-img2.png" alt="Enable 2FA" title="Enable 2FA" style="border: 1px solid gray;zoom:70%;"/>

4. Click **Save**.  
<img src="../images/two-factor-authentication-for-platform-access-img3.png" alt="2FA - Save" title="2FA - Save" style="border: 1px solid gray;zoom:70%;"/>

    !!! Important
    
        **SSO authentication** and **2FA** are mutually exclusive on the Kore.ai XO Platform. When **Enterprise SSO** is enabled, **2FA** is automatically disabled for that account, and vice-versa.

**Important Information on the Email OTP**

_You can use the OTP verification code only once. Reusing an OTP, entering the wrong OTP, or entering the OTP beyond the expiry time makes the OTP invalid and results in failed authentication or login error. The default validity of the email OTP is 10 minutes, and the users are expected to verify within that time._


## Permission Settings to Enable 2FA

For a system admin to enable 2FA on the admin console, the master administrator should grant the role permission to the user on their admin console with the steps below:

1. On the **Admin Console**, click **User Management > Role Management** on the left menu.  
<img src="../images/two-factor-authentication-for-platform-access-img4.png" alt="User Management - Role Management" title="User Management - Role Management" style="border: 1px solid gray;zoom:70%;"/>

2. Click the **edit** icon of the desired Admin user’s entry to view the **Manage Role** window.  
<img src="../images/two-factor-authentication-for-platform-access-img5.png" alt="Edit role to enable 2FA" title="Edit role to enable 2FA" style="border: 1px solid gray;zoom:70%;"/>

3. Click the **Permissions** tab.
4. Select “**YES**” for **Two-Factor Authentication**.
5. Click **Save**.  
<img src="../images/two-factor-authentication-for-platform-access-img6.png" alt="Save permission for 2FA" title="Save permission for 2FA" style="border: 1px solid gray;zoom:70%;"/>


## Two-Factor Authentication for Admin Users

To log in using 2FA on the **Admin Console** as an admin, follow the steps below:

1. Log in by entering your **email ID** and clicking **Continue**.  
<img src="../images/two-factor-authentication-for-platform-access-img7.png" alt="BAC Login - enter email id" title="BAC Login - enter email id" style="border: 1px solid gray;zoom:70%;"/>

2. Enter your account password, and click **Log in**.  
<img src="../images/two-factor-authentication-for-platform-access-img8.png" alt="BAC Login - enter password" title="BAC Login - enter password" style="border: 1px solid gray;zoom:70%;"/>

3. Enter the OTP received on your registered email address in the following screen.  
<img src="../images/two-factor-authentication-for-platform-access-img9.png" alt="BAC Login - enter OTP" title="BAC Login - OTP" style="border: 1px solid gray;zoom:70%;"/>

4. After you enter the correct OTP and the verification is successful, the following verification success message appears.  
<img src="../images/two-factor-authentication-for-platform-access-img10.png" alt="BAC Login - Verification successful" title="BAC Login - Verification successful" style="border: 1px solid gray;zoom:70%;"/>

The system redirects to the user dashboard after an OTP successful verification.


## Two-Factor Authentication for End Users

To log in using 2FA on the **App Builder Platform** as an end-user, follow the steps below:

1. Log in to the App Builder by entering your email ID. Then, click **Continue**.  
<img src="../images/two-factor-authentication-for-platform-access-img11.png" alt="Bot Builder Login - enter email id" title="Bot Builder Login - enter email id" style="border: 1px solid gray;zoom:70%;"/>

2. Enter your account password, and click **Login** to authenticate.  
<img src="../images/two-factor-authentication-for-platform-access-img12.png" alt="Bot Builder Login - enter password" title="Bot Builder Login - enter password" style="border: 1px solid gray;zoom:70%;"/>

3. Select the required AI Agent account.

    !!! Note
    
        The system does not prompt for the 2FA if you have already completed 2FA for a different account in the same session. If this is your first login session, the system prompts for 2FA.

4. Enter the OTP verification code received via email from Kore.ai when prompted.  
<img src="../images/two-factor-authentication-for-platform-access-img13.png" alt="Bot Builder Login - enter OTP" title="Bot Builder Login - enter OTP" style="border: 1px solid gray;zoom:70%;"/>

    !!! Note
    
        Click the button **Resend Code** to regenerate the email OTP verification code if you haven’t received it.

5. After the OTP is successfully verified, a success message appears, and the system redirects to your dashboard.  
<img src="../images/two-factor-authentication-for-platform-access-img14.png" alt="Bot Builder Login - verification success" title="Bot Builder Login - verification success" style="border: 1px solid gray;zoom:70%;"/>


### Switching the User Account after Initiating 2FA

The Platform introduces the **_Switch to Different Account_** option on the account verification screen to allow the user to switch to another account (from the default account) during the same session even after initiating 2FA, **without entering the verification code**.

<img src="../images/two-factor-authentication-for-platform-access-img15.png" alt="Switch to another account" title="Switch to another account" style="border: 1px solid gray;zoom:70%;"/>


!!! Note

    The **_Switch to Different Account_** option is available only for users with multiple accounts on the Platform.

When you click this option, the system redirects to the account selection page where you can select the same/different account from the list to login.

<img src="../images/two-factor-authentication-for-platform-access-img16.png" alt="Account selection page" title="Account selection page" style="border: 1px solid gray;zoom:70%;"/>


**Important Considerations**

* The system sends a new passcode via email to complete the account switch authentication.
* The expiry time for email passcode validation is two minutes.
* When you switch to a different/same account under two minutes or after two minutes, the system generates a new email passcode if the previous account is not authenticated.
* However, if you’ve completed the verification for the previously selected account in the same login session, the system does not prompt for a new verification code.
* If the wrong passcode is typed, an error message appears and access to the account is denied. You must enter the correct passcode within two minutes or click **Resend Code** to generate a new passcode.