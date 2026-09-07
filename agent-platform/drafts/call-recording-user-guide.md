# Call Recording — User Guide

**Audience**: workspace admins, project admins, and project developers
**Applies to**: server-side voice call recording
**Last updated**: 2026-08-12

This guide tells you how to turn on call recording and how to use the
recordings. It uses simple language. Each step gives the exact screen and the
exact control name.

> **Not the same as the softphone Record call switch.** The Studio softphone has
> its own **Record call** switch. That switch makes a temporary audio file in
> your browser for one test call. You can only download it, and it is lost when
> you close the popover. It is not stored, and it does not appear on the session
> page. Everything else in this guide is about server-side recording.

---

## 1. What call recording does

When recording is on, a copy of the call audio is captured while the call runs.
After the call ends, the platform:

1. Creates a recording entry with the state **Pending**.
2. Collects the audio file. The state becomes **Fetching**.
3. Stores the audio and sets the state to **Completed**.
4. Deletes the audio after the retention period, unless the recording is
   locked.

You then play or download the audio from the session page.

---

## 2. Before you start — the two switches

Recording needs **both** of these switches on:

| Order | Switch | Who sets it | Where |
| ----- | ------ | ----------- | ----- |
| 1 | Workspace switch | Workspace admin | Studio → **Workspace Settings** → **Call Recording** |
| 2 | Project switch | Project admin or developer | Studio → project **Settings** → **Recording** |

The workspace switch comes first. While it is off, the project **Recording**
page does not appear at all. It is hidden, not greyed out. So if you cannot find
the project Recording page, start with section 3.

Call recording is an **Enterprise** feature. If the **Call Recording** section
does not appear in Workspace Settings, your workspace does not have the feature
yet. Contact your Kore representative to have it added. Nothing in Studio lets
you add it yourself.

---

## 3. Step 1 — Workspace admin: turn on the workspace switch

You need the workspace **manage settings** permission.

1. In Studio, open **Workspace Settings**.
2. Scroll to the **Call Recording** section.

   > "Control whether projects in this workspace can enable server-side call
   > recording."

3. Turn on **Enable call recording for this workspace**.
4. Click **Save Changes**.

Every change here is written to the audit log with your user, the old value, and
the new value.

**Important:** turning this switch **off** hides all recording settings and all
recorded audio in every project in the workspace. It does not delete the
recordings. Turn it back on and everything is visible again.

---

## 4. Step 2 — Turn on recording for the project

You need the **recording write** permission. Project **admin** and **developer**
roles have it. **Tester** and **viewer** roles can only read.

1. Open the project in Studio.
2. Go to **Settings** → **Recording**.
3. Read the grey notice at the top of the card. It tells you the current state:

   | Notice | Meaning |
   | ------ | ------- |
   | "Project-level recording settings are active for this project." | This project has its own saved settings. |
   | "This project is currently using workspace recording defaults..." | No project settings are saved yet. |
   | "Workspace-level recording is disabled..." | Go back to section 3. |

4. Turn on **Enable call recording**.
5. Set **Retention days**. This is how many days a completed recording is kept.
   - Default: **90** days.
   - Allowed range: **1** to **2555** days (about 7 years).
   - Locked recordings are not deleted when the retention period ends.
   - Do not leave this field empty. An empty field is read as **1 day**, which
     is the shortest retention there is.
6. Click **Save changes**. You see the message "Recording settings saved".

**Reset** puts the form back to the last saved values. It changes nothing that
is already saved.

> **About the "Override account default" switch.** You do not need this switch.
> Turning on **Enable call recording** and clicking **Save changes** is enough
> to make this project use its own recording settings. Leave the override switch
> as it is.

---

## 5. Step 3 — Make a call and find the recording

Recording is applied when the call starts. Calls that were already running when
you saved the setting are **not** recorded. Make a new call.

To find the recording:

1. In the project's left navigation, click **Sessions** (in the **Operate**
   group).
2. Open the voice session you want.
3. Look for the **Call recording** panel. It is below the engagement panel and
   above the session tabs (**Overview**, **Traces**, **Conversation**, and the
   others).

The panel shows the call ID, the length, the storage size, and the expiry date.

If the panel says "No recording is available for this session yet.", the audio
is not ready. Wait, then click **Refresh**. See section 6.

> Recordings are reached one session at a time. There is no single list of every
> recording in a project. If you do not know which session you want, use the
> **Sessions** filters to find the voice session first.

---

## 6. Recording states

| State | Badge colour | What it means | What to do |
| ----- | ------------ | ------------- | ---------- |
| **Pending** | Blue | The call ended. The audio is queued for collection. | Wait, then **Refresh**. |
| **Fetching** | Accent, pulsing | The audio is being collected now. | Wait, then **Refresh**. |
| **Completed** | Green | The audio is stored and ready to play. | Play or download it. |
| **Failed** | Red | The audio could not be collected or stored. | Read the failure reason on the panel, then contact support. |
| **Deleted** | Grey | The audio is gone. Only the entry remains. | Nothing. This is final. |

**How long does Pending last?** Usually a few minutes. It can take up to about
**15 minutes** for a recording to become **Completed**. The page does not
refresh itself, so click **Refresh** to check. Only treat a recording as a
problem after about 15 minutes.

---

## 7. Using a recording

All of these are in the **Call recording** panel on the session page.

### Play

Click the **play** button. The audio loads on the first click, so the first play
has a short delay. Use the round buttons to go **Back 10 seconds** and
**Forward 10 seconds**. Use the **Speed** dropdown for 0.75x to 2x.

### Read the waveform

The panel draws two rows of bars — the caller on top (green) and the agent below
(purple). The filled part shows how far playback has gone. Use the **+** and
**−** buttons to zoom from 1x to 4x for a closer look.

### Match the audio to the transcript and the traces

The **Synced to** bar shows which message and which trace step match the current
playback position. Click **Open conversation** or **Open traces** to jump to that
point in the **Conversation** or **Traces** tab. From those tabs you can also use
**Jump to audio** to move playback to a message or a trace step.

This is the fastest way to answer "what did the agent do at this moment in the
call?".

### Download

Click **Download**. The button works only when the state is **Completed**.

Every playback and every download is written to the audit log.

---

## 8. Keeping and deleting recordings

### Automatic deletion

A completed recording is deleted when its retention period ends. The audio is
removed and the entry is marked **Deleted**. The entry stays, so you keep the
history. Deletion runs on a schedule, so the audio can remain for up to an hour
after the expiry date.

Retention comes from the project **Retention days** value. Your workspace can
also set a minimum and a maximum, and the project value is kept inside those
limits.

> **A change to Retention days applies only to recordings made after you save.**
> Each recording keeps the retention period that was set when it was created.
> Lowering the value from 90 days to 30 days does **not** shorten the life of
> audio that already exists.

### Locking a recording (legal hold)

A locked recording is never deleted — not by retention, and not by a delete
request. A delete attempt on a locked recording is refused.

Locking needs the **mark immutable** permission. Only the project **admin** role
has it, and it must be granted on its own — a general admin grant does not
include it.

### Deleting on request

Deleting needs the **recording delete** permission (project **admin** and
**developer** roles). The audio is removed first, then the entry is marked
**Deleted**.

> **Lock and delete are not yet available as buttons in Studio.** The session
> panel has play, download, and refresh only. To lock a recording for legal hold,
> or to delete one for a customer request, use the platform recording API or ask
> Kore support. Plan for this before you promise a customer a self-service
> deletion or a legal hold.

---

## 9. Who can do what

| Task | Roles |
| ---- | ----- |
| Add the Call Recording feature to a workspace | Kore only — contact your representative |
| Turn the workspace switch on or off | Workspace admin |
| See recording settings | Project admin, developer, tester, viewer |
| Change recording settings | Project admin, developer |
| Play and download audio | Project admin, developer, tester, viewer |
| Delete a recording | Project admin, developer |
| Lock a recording | Project admin, with the permission granted on its own |

Access is always checked against your workspace. A request for a recording in
another workspace returns "not found".

---

## 10. If recording does not start

Work down this list. The first "no" is your cause.

1. **Is the Call Recording section in Workspace Settings?**
   No → the feature is not on your plan. Contact your Kore representative.
2. **Is the workspace switch on and saved?**
   No → do section 3.
3. **Is the Recording page in the project Settings?**
   No → the workspace switch is off. Do section 3.
4. **Is Enable call recording on, and did you click Save changes?**
   No → do section 4.
5. **Was the call new?**
   Recording is applied when a call starts. Make a fresh call.
6. **Did you wait about 15 minutes and click Refresh?**
   The recording can still be collecting. See section 6.

If all six are yes and there is still no recording, contact Kore support. Give
them the project name, the session ID, and the time of the call. There are
platform-side settings behind these switches that only Kore can check, and a
problem there produces no message in Studio.

---

## 11. Compliance notes

- **Tell the caller yourself.** The platform plays no "this call is recorded"
  announcement and shows the caller no recording indicator. If your region needs
  consent or a notice, add it to your agent's opening prompt. This is your
  responsibility, not the platform's.
- **Storage location.** Recordings are stored in the storage configured for your
  workspace. Use your own storage account if the audio must stay in a region.
  The session panel shows whether storage is Kore-managed or customer-managed.
- **Audit trail.** Setting changes, playback, downloads, lock changes, and
  deletes are all written to the audit log.
- **Retention is not retroactive.** See the note in section 8 before you rely on
  a retention change for a data-minimisation requirement.

---

## 12. Turning recording off

| Goal | Do this | Effect |
| ---- | ------- | ------ |
| Stop recording new calls in one project | Turn off **Enable call recording** in project **Settings** → **Recording** | New calls are not recorded. Existing audio stays and is still playable. |
| Hide recording across a whole workspace | Turn off the workspace **Call Recording** switch | All recording settings and all audio are hidden in every project. Nothing is deleted. |
| Remove the feature completely | Contact your Kore representative | Every recording surface disappears. |

Turning a switch off never deletes audio. Audio is only removed by retention or
by an explicit delete.
