# Password Policy | Kore.ai Platforms

---

This document outlines the password requirements and security policies for accessing the Kore.ai Platforms, including AI for Service (XO), AI for Process, and Agent Platform.

## User Authentication Types

The Kore.ai Platform supports two authentication methods:

* [Non-SSO Users](#for-non-sso-users): Users who sign in directly to the Platform using email and password credentials.

* [Enterprise SSO Users](#for-enterprise-sso-users): Users whose organizations use Single Sign-On (SSO) for authentication through an enterprise identity provider.


## For Non-SSO Users

The following policies apply to users who authenticate directly with the Kore.ai Platform.


### Password Requirements

All user passwords must meet the following criteria:

* Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character and contain no spaces.


### Password Expiration and Rotation

* **Password Validity**: Passwords expire after **90 days**.
* **Password History**: You cannot reuse any of your last **5 passwords**.

### Account Security


#### Failed Login Attempts

* **Lockout Threshold**: After **5 consecutive failed login attempts**, your account will be temporarily locked.
* **Lockout Duration**: **30 minutes** or until an administrator unlocks the account.

#### Two-Factor Authentication (2FA)

For enhanced security, enable Two-Factor Authentication on your account. When 2FA is enabled, you'll need both your password and a verification code to sign in.

### Password Reset

#### Self-Service Password Reset

1. Click **Forgot Password** on the sign-in page.
2. You'll receive a password reset link via email within **5 minutes**. 
3. Follow the link to create a new password that meets all requirements.

#### Reset Token Expiration

* Password reset links are valid for **15 minutes** from the time of request.
* If the link expires, request a new password reset.


### Password Change Process

To change your password while signed in:

1. Navigate to your **Profile** settings.
2. Select **Change Password**.
3. Enter your current password.
4. Enter and confirm your new password.
5. Select **Update**.


## For Enterprise SSO Users

If your organization uses Single Sign-On (SSO) for authentication:

* Password policies are managed by your enterprise identity provider.
* Contact your IT administrator for password requirements and reset procedures.

## Support

If you experience issues with password reset or account access:

* Community:[ https://community.kore.ai/](https://community.kore.ai/)
* Customer Support:[ https://support.kore.ai/](https://support.kore.ai/)