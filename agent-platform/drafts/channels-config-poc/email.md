# New Email Connection

*Email channel setup*

## Connect inbound and outbound email

Create a generated inbound address, route SMTP mail to it, configure the outbound SMTP or Microsoft Graph transport, and validate threading, attachments, templates, and loop prevention.

> **The generated recipient selects the connection**
>
> Runtime resolves an Active Email connection during SMTP RCPT TO using its generated inbound address. Message-ID, In-Reply-To, and References identify the conversation thread; no HTTP Request URL is used.

### Create the Email connection

1. **Name the mailbox route**

   Use a name that identifies the business mailbox and environment, such as Customer Support Production. The display name helps operators; it is not the inbound email address.

2. **Choose where the agent runs**

   Select the environment whose active deployment should process incoming email, or use the working-copy default while developing the agent.

3. **Create the connection as Active**

   SMTP accepts mail only for an address that resolves to an Active connection. An Inactive connection is rejected as an unknown recipient.

4. **Create the connection**

   Email has no credential or identifier field during creation. Runtime generates a random local part under the platform's configured inbound domain.

5. **Copy the generated inbound address**

   After creation, copy the full Inbound Email Address from the populated connection row or Overview. Keep the complete local part and domain; do not substitute the display name or your public support mailbox.

6. **The inbound address is platform-generated**

   EMAIL_INBOUND_DOMAIN is an administrator-owned Runtime setting. If the generated domain is not publicly routable or approved for your environment, stop and ask the platform administrator to complete SMTP and DNS setup.

![Inbound reference: create first, copy the generated address, and route mail through the platform SMTP ingress while preserving thread headers.](/agent-platform/drafts/channels-config-poc/images/email-inbound-reference.svg)

*Inbound reference: create first, copy the generated address, and route mail through the platform SMTP ingress while preserving thread headers.*

![Outbound reference: use the managed SMTP relay or provide all four Microsoft Graph values, then configure the optional email experience.](/agent-platform/drafts/channels-config-poc/images/email-outbound-reference.svg)

*Outbound reference: use the managed SMTP relay or provide all four Microsoft Graph values, then configure the optional email experience.*

### Route inbound email through SMTP

1. **Send directly or forward a dedicated mailbox**

   Send customer mail to the generated address, or configure the provider for a dedicated address such as support@example.com to route or forward to it. Confirm the forwarded message retains the original sender and thread headers.

2. **Have the platform administrator validate SMTP ingress**

   Production requires the inbound domain's mail routing to reach the Runtime SMTP service. Port 2525 is the default internal and development listener; public MX delivery normally reaches an approved edge on port 25 and is forwarded internally.

3. **Preserve RFC 5322 thread headers**

   Message-ID records each inbound message. In-Reply-To and References let Runtime find the existing active conversation. A reply client that strips them falls back to normalized Re:/Fwd: subject matching.

4. **Use one generated channel recipient per SMTP transaction**

   Runtime rejects unknown addresses with 550. It also rejects an SMTP transaction that mixes recipients belonging to different channel connections, preventing one message from crossing project or connection boundaries.

5. **Email does not use a Request URL**

   Do not look for an Events Request URL or configure an HTTP webhook. Inbound delivery enters through SMTP and is queued after the recipient, message, and attachments are parsed.

### Configure outbound replies

1. **Open the saved connection's Configuration tab**

   Choose the outbound transport after the connection exists. The same configuration also controls the optional email header, footer, and CSAT rating block.

2. **Use SMTP when the platform relay is already managed**

   SMTP is the default and uses the administrator-owned SMTP_RELAY settings. No per-connection SMTP credentials appear in Studio, so confirm the relay, sender policy, SPF, DKIM, DMARC, and deliverability with the platform administrator.

3. **Use Microsoft Graph for a dedicated Microsoft 365 sender**

   Select Microsoft Graph API and enter Azure AD Tenant ID, Application Client ID, Sender Mailbox Address, and Client Secret. Runtime uses the client-credentials flow and the Graph .default scope to create and send a draft as that mailbox.

4. **Configure the optional email experience**

   Add trusted Header HTML or Footer HTML and optionally include the signed five-point CSAT rating block. Review the resulting HTML in common mail clients before production.

5. **Save and preserve the existing secret on later edits**

   Save the configuration before testing. When a Graph Client Secret is already stored, leave the field blank to retain it; enter a new value only when intentionally rotating the credential.

6. **Graph needs application permission to send as the mailbox**

   Configure and administratively consent the Microsoft Graph application permission required to create and send mail for the Sender Mailbox Address. Restrict application access to the intended mailbox when your Microsoft 365 policy supports it.

### Test a complete email conversation

1. **Send a new message with a unique subject**

   Send plain text from a real external address to the business mailbox or generated address. Confirm the Active connection receives it and the agent sends one Re: reply to the original From address.

2. **Reply in the same mail thread**

   Reply to the agent email without changing the thread. Confirm the mail client preserves In-Reply-To and References and Runtime resumes the same session instead of starting a new conversation.

3. **Verify CC and BCC behavior**

   CC recipients are copied onto outbound replies except the channel's own address. BCC recipients from inbound mail are recorded for context but intentionally are not included on agent replies.

4. **Send an allowed attachment and an over-limit sample**

   Confirm an allowed file reaches the agent as an uploaded attachment. SMTP rejects messages larger than 25 MB; individual files are also governed by the project attachment policy, with a 20 MB fallback when no policy is available.

5. **Test an automatic reply safely**

   Verify messages marked Auto-Submitted with a value other than no are ignored. Agent replies include X-ABL-Source and are also dropped if they return to the inbound service, preventing mail loops.

### Threading, content, and attachment behavior

**Reply Text**

Runtime extracts the newest visible reply and removes common quoted history, signatures, and forwarded-message headers before agent execution.

**Threading**

Thread continuity prefers RFC 5322 message identifiers. Subject-based Re:/Fwd: matching is a compatibility fallback, not the primary identity mechanism.

**Subject**

Outbound subject uses the inbound subject and adds Re: only when it is not already present.

**Cc**

Outbound replies preserve original CC recipients except the channel address. BCC is never forwarded on replies.

**Attachments**

Inbound attachments are uploaded before the message is queued. An attachment upload failure is non-blocking, so text can still reach the agent without the failed file.

**Rich Output**

The adapter is non-streaming and text-oriented. Agent markdown is rendered to sanitized email HTML; action widgets and other channel-native rich controls are not emitted.

### Security and environment boundaries

**Ingress**

The embedded SMTP receiver does not require SMTP AUTH, so the production edge, DNS, network policy, recipient validation, rate controls, and abuse protection must be managed deliberately.

**Graph**

Store the Graph Client Secret only in encrypted connection credentials. Use a separate Azure application and sender mailbox policy per environment, and rotate exposed credentials immediately.

**Html**

Header and Footer HTML are administrator-authored trusted configuration. Keep scripts, forms, remote resources, and sensitive data out of templates and verify client-side rendering.

**Tracking**

Agent markdown images are emitted as text links instead of image tags to avoid adding remote tracking pixels. Dangerous javascript, vbscript, and data link schemes are neutralized.

**Environments**

Use separate generated inbound addresses, business routing rules, outbound senders, and Studio connections for development, staging, and production.

> **Quick troubleshooting checklist**
>
> - Sender receives 550 No such recipient: copy the exact generated address, confirm the connection is Active, and verify the message reached the correct environment's SMTP ingress.
> - Inbound mail reaches the agent but no reply arrives: verify the SMTP relay is configured or complete every Microsoft Graph field, then inspect the connection's delivery diagnostic.
> - Graph returns authorization or configuration errors: confirm Tenant ID, Client ID, Sender Mailbox Address, encrypted Client Secret, application permission, admin consent, and mailbox access policy.
> - A reply starts a new conversation: inspect In-Reply-To and References after forwarding. Avoid providers or rules that rebuild messages and remove original RFC 5322 headers.
> - Text arrives but the attachment does not: compare the 25 MB total email limit with the project attachment count, size, MIME, and extension policy, then inspect upload logs.
> - Expected mail is silently ignored: confirm it is not marked Auto-Submitted and does not contain X-ABL-Source, both of which are intentionally dropped for loop prevention.
