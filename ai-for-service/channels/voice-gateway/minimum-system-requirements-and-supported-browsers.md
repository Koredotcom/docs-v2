# Minimum System Requirements and Supported Browsers

## System Requirements

### Minimum System Requirements

* x64-based processor with four CPU cores (Quad-core processor).
* 64-bit operating system (Windows 11 or higher, MacOS Monterey or higher).
* At least 8 GB of RAM (Recommendations specify 16 GB RAM).
* 50 GB of free hard disk space.
* Network Interface Card (NIC) with 1 Gigabytes per second (Gbps).

The software may also work on any desktop operating system that meets the other system requirements and can install a supported web browser, such as Linux and Chrome OS. Testing and certification don't cover all such combinations.

## Additional Requirements

* Network Bandwidth: 5 Megabits per second (Mbps) for voice, video calls, and co-browse sessions.
* Minimum screen resolution: 1024 x 768 at 20 frames per second (FPS).
* We recommend that each computer includes antimalware protection.

    !!! Note

        Some antivirus software runs real-time inspection on HTTPS and audio packets, and may lower the audio quality of WebRTC.

## Web Browser Requirements

### Browser Matrix

The Contact Center Agent and Supervisor Console support the following web browsers.

| Browser | Core features | Video chat | Screen sharing | WebRTC calling |
|---------|---------------|------------|----------------|----------------|
| Chrome  | Supported     | Supported  | Supported      | Supported      |
| Edge    | Supported     | Supported  | Supported      | Supported      |
| Safari  | Supported     | Supported  | Supported      | Supported      |

### Full Support

* Chrome - Requires a current major release or one previous version.
* Microsoft Edge Chromium - Requires current release.

Internal testing results determine the version recommendations. The software may work without issues on older browser versions as well. The customer must update browser versions if an issue arises due to a browser version mismatch.

!!! Note

    * The latest version of Chrome, Safari, or Edge.
    * JavaScript and cookies must be enabled.
    * Grant permissions and allow access to the camera and microphone when prompted by the browser.
    * Turn off the pop-up blocker, and allow a separate WebRTC window to open.
    * Grant permissions and allow users to share their screen, a specific window, or the entire desktop when prompted.
    * Allow Transport Layer Security (TLS) v.1.2 protocol (TLS versions 1.0, 1.1, and 1.3 are not supported).
    * Do not minimize the active call tab or window. If you minimize the active window, then the client stops working properly.  
    For example, you may experience a delay when you answer a call or are unable to answer a call. Restore the minimized window for the client to function properly.
    * Chrome updates automatically. Versions of Chrome are only an issue if the customer’s IT department restricts automatic updates.
    * Running Microsoft Edge in IE compatibility mode is not supported.

### Disable Your Browser’s Sleep Mode Setting

When using the Contact Center AI console in a browser with multiple tabs open, you may experience connection issues when the console isn’t the active tab. To prevent this from happening, consider disabling your browser’s sleep mode setting. See the following sections for more information.

#### Microsoft Edge

In Microsoft Edge, you can disable sleep mode for specific sites.

1. Start Microsoft Edge.
2. Select **Settings and more…**.
3. Select **Settings**. The Settings tab appears.
4. Select **System and performance**.
5. Under **Never put these sites to sleep**, select **Add**. The Add a site dialog appears.
6. Type your region domain in the **Site** box using this format **[*].domain**. For example, [*.]example.com.
7. Select **Add**.

#### Google Chrome

In Google Chrome, you can disable sleep mode for specific sites.

1. Start Google Chrome.
2. Select **Customize and Control Google Chrome…**.
3. Select **Settings**. The Settings tab appears.
4. Select **Performance**.
5. On the Memory tile, locate the **Always keep these sites active** setting and select **Add**. The Add Sites dialog appears.
6. Select **Add Sites manually**.
7. Type your region domain in the Site box. For example, example.com.
8. Select **Add**.

## Firewall Requirements

Permit traffic and whitelist the listed ports in the respective firewalls based on the Session Border Controller (SBC) they connect to.

### Region - Australia (AU)

| SBC IP Address                        | Firewall Rules                                                                 |
|---------------------------------------|--------------------------------------------------------------------------------|
| 13.237.170.233<br>(or)<br>54.153.137.7 | [Learn more](./au-firewall-rules.md) |

### Region - Europe (EU)

| SBC IP Address                        | Firewall Rules                                                                 |
|---------------------------------------|--------------------------------------------------------------------------------|
| 13.43.133.73<br>(or)<br>18.133.179.73 | [Learn more](./eu-firewall-rules.md) |

### Region - Germany (DE)

| SBC IP Address                        | Firewall Rules                                                                 |
|---------------------------------------|--------------------------------------------------------------------------------|
| 13.70.125.14<br>(or)<br>18.158.223.171 | [Learn more](./germany-firewall-rules.md) |

### Region - India (IN)

| SBC IP Address                        | Firewall Rules                                                                 |
|---------------------------------------|--------------------------------------------------------------------------------|
| 20.197.5.84<br>(or)<br>20.244.87.83 | [Learn more](./in-firewall-rules.md) |

### Region - Japan (JP)

| SBC IP Address                        | Firewall Rules                                                                 |  
|---------------------------------------|--------------------------------------------------------------------------------|
| 35.76.183.247<br>(or)<br>54.248.11.38 | [Learn more](./japan-firewall-rules.md) |

### Region - United Arab Emirates (UAE)

| SBC IP Address                        | Firewall Rules                                                                 |
|---------------------------------------|--------------------------------------------------------------------------------|
| 40.172.158.151<br>(or)<br>40.172.133.71 | [Learn more](./uae-firewall-rules.md) |

### Region - United Kingdom (UK)

| SBC IP Address                        | Firewall Rules                                                                 |
|---------------------------------------|--------------------------------------------------------------------------------|
| 13.43.133.73<br>(or)<br>18.133.179.73 | [Learn more](./uk-firewall-rules.md) |

### Region - USA

| SBC IP Address                        | Firewall Rules                                                                 |
|---------------------------------------|--------------------------------------------------------------------------------|
| 13.224.189.218<br>(or)<br>35.174.41.205 | [Learn more](./us-firewall-rules.md) |