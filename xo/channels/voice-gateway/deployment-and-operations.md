# Deployment and Operations

This section covers the infrastructure requirements and operational aspects of the Voice Gateway.

## IPs, Ports, and Protocols

This document contains all the region wise IPs, ports, and protocols for Voice Gateway. It's useful for transferring calls from respective Contact Centres to Contact Center AI. [Learn more](./configure-voice-gateway.md#sip-trunk-setup).

### Regions

#### United States of America (US) - East

Enable inward and outward traffic to the following IPs and respective ports:

| **Component**       | SIP Server-1       |
| :------------------ | :----------------- |
| **IP Address**      | 3.224.189.218      |
| **FQDN**            | `savg-sbc1.kore.ai`|
| **TCP / UDP Port**  | 5060               |
| **TLS Port**        | 5061               |

For example: sip:savg-sbc1.kore.ai:5060

| **Component**       | SIP Server-2       |
| :------------------ | :----------------- |
| **IP Address**      | 35.174.41.205      |
| **FQDN**            | `savg-sbc2.kore.ai`|
| **TCP / UDP Port**  | 5060               |
| **TLS Port**        | 5061               |

For example: sip:savg-sbc2.kore.ai:5060

| **Component**   | RTP Server-1    |
| :-------------- | :-------------- |
| **IP Address**  | 44.215.230.111  |
| **RTP Ports**   | 6000-65535      |

| **Component**   | RTP Server-2    |
| :-------------- | :-------------- |
| **IP Address**  | 54.210.75.166   |
| **RTP Ports**   | 6000-65535      |

For Agent transfers, enable inward and outward traffic to the following IPs and respective ports:  

| **Component**   | WebRTC Session Border Controller (SBC)     |
| :-------------- | :----------------------------------------- |
| **IP Address**  | 3.224.189.218<br>35.174.41.205             |
| **FQDN**        | `savg-sbc1.kore.ai`,<br>`savg-sbc2.kore.ai`|
| **HTTPS**       | 443                                        |
| **WSS Port**    | 8443                                       |

For example: sip:savg-sbc1.kore.ai:443

| **Component**   | WebRTC RTP Servers               |
| :-------------- | :------------------------------- |
| **IP Address**  | 44.215.230.111<br>54.210.75.166  |
| **RTP Ports**   | 6000-65535                       |

#### United States of America (US) - West

Enable inward and outward traffic to the following IPs and respective ports:

| **Component**       | SIP Server-1            |
| :------------------ |:----------------------- |
| **IP Address**      | 54.67.69.12             |
| **FQDN**            | `usw-savg-sbc1.kore.ai` |
| **TCP / UDP Port**  | 5060                    |
| **TLS Port**        | 5061                    |

For example: sip:usw-savg-sbc1.kore.ai:5060

| **Component**       | SIP Server-2             |
| :------------------ | :----------------------- |
| **IP Address**      | 54.177.21.117            |
| **FQDN**            | `usw-savg-sbc2.kore.ai`  |
| **TCP / UDP Port**  | 5060                     |
| **TLS Port**        | 5061                     |

For example: sip:usw-savg-sbc2.kore.ai:5060

| **Component**   | RTP Server-1    |
| :-------------- | :-------------- |
| **IP Address**  | 54.67.69.12     |
| **RTP Ports**   | 6000-65535      |

| **Component**   | RTP Server-2    |
| :-------------- | :-------------- |
| **IP Address**  | 54.177.21.117   |
| **RTP Ports**   | 6000-65535      |

For Agent transfers, enable inward and outward traffic to the following IPs and respective ports:

| **Component**  | WebRTC Session Border Controller (SBC)              |
| :-------------- | :------------------------------------------------- |
| **IP Address**  | 54.67.69.12<br>54.177.21.117                       |
| **FQDN**        | `usw-savg-sbc1.kore.ai`<br>`usw-savg-sbc2.kore.ai` |
| **HTTPS**      | 443                                                 |
| **WSS Port**   | 8443                                                |

For example: sip:usw-savg-sbc1.kore.ai:443

| **Component**   | WebRTC RTP Servers            |
| :-------------- | :---------------------------- |
| **IP Address**  | 54.67.69.12<br>54.177.21.117  |
| **RTP Ports**   | 6000-65535                    |

#### Australia (AU)

Enable inward and outward traffic to the following IPs and respective ports:

| **Component**       | SIP Server-1               |
| :------------------ | :------------------------- |
| **IP Address**      | 54.153.137.7               |
| **FQDN**            | `au-prod-savg-sbc1.kore.ai`|
| **TCP / UDP Port**  | 5060                       |
| **TLS Port**        | 5061                       |

For example: sip:au-prod-savg-sbc1.kore.ai:5060

| **Component**       | SIP Server-2            |
| :------------------ | :------------------------- |
| **IP Address**      | 13.237.170.233             |
| **FQDN**            | `au-prod-savg-sbc2.kore.ai`|
| **TCP / UDP Port**  | 5060                       |
| **TLS Port**        | 5061                       |

For example: sip:au-prod-savg-sbc2.kore.ai:5060

| **Component**   | RTP Server-1    |
| :-------------- | :-------------- |
| **IP Address**  | 54.153.137.7    |
| **RTP Ports**   | 6000-65535      |

| **Component**   | RTP Server-2    |
| :-------------- | :-------------- |
| **IP Address**  | 13.237.170.233  |
| **RTP Ports**   | 6000-65535      |

For Agent transfers, enable inward and outward traffic to the following IPs and respective ports:

| **Component**   | WebRTC Session Border Controller (SBC)                     |
| :-------------- | :--------------------------------------------------------- |
| **IP Address**  | 54.153.137.7<br>13.237.170.233                             |
| **FQDN**        | `au-prod-savg-sbc1.kore.ai`,<br>`au-prod-savg-sbc2.kore.ai`|
| **HTTPS**       | 443                                                        |
| **WSS Port**    | 8443                                                       |

For example: sip:au-prod-savg-sbc1.kore.ai:443

| **Component**   | WebRTC RTP Servers              |
| :-------------- | :------------------------------ |
| **IP Address**  | 54.153.137.7<br>13.237.170.233  |
| **RTP Ports**   | 6000-65535                      |

#### India (IN)

Enable inward and outward traffic to the following IPs and respective ports:

| **Component**       | SIP Server-1            |
| :------------------ | :---------------------- |
| **IP Address**      | 20.244.87.83            |
| **FQDN**            | `ind-savg-sbc1.kore.ai` |
| **TCP / UDP Port**  | 5060                    |
| **TLS Port**        | 5061                    |

For example: sip:ind-savg-sbc1.kore.ai:5060

| **Component**      `| SIP Server-2           |
| :------------------ | :--------------------- |
| **IP Address**     | 20.197.5.84             |
| **FQDN**           | `ind-savg-sbc2.kore.ai` |
| **TCP / UDP Port** | 5060                    |
| **TLS Port**       | 5061                    |

For example: sip:ind-savg-sbc2.kore.ai:5060

| **Component**   | RTP Server-1    |
| :-------------- | :-------------- |
| **IP Address**  | 20.244.87.83    |
| **RTP Ports**   | 6000-65535      |

| **Component**   | RTP Server-2   |
| :-------------- | :------------- |
| **IP Address**  | 20.197.5.84    |
| **RTP Ports**   | 6000-65535     |

For Agent transfers, enable inward and outward traffic to the following IPs and respective ports:

| **Component**   | WebRTC Session Border Controller (SBC)              |
| :-------------- | :-------------------------------------------------- |
| **IP Address**  | 20.244.87.83                                        |
| **FQDN**        | `ind-savg-sbc1.kore.ai`,<br>`ind-savg-sbc2.kore.ai` |
| **HTTPS**       | 443                                                 |
| **WSS Port**    | 8443                                                |

For example: sip:ind-savg-sbc1.kore.ai:443

| **Component**   | WebRTC RTP Servers  |
| :-------------- | :------------------ |
| **IP Address**  | 20.244.87.83        |
| **RTP Ports**   | 6000-65535          |

#### London (EU)

Enable inward and outward traffic to the following IPs and respective ports:

| **Component**       | SIP Server-1           |
| :------------------ | :--------------------- |
| **IP Address**      | 18.133.179.73          |
| **FQDN**            | `eu-savg-sbc1.kore.ai` |
| **TCP / UDP Port**  | 5060                   |
| **TLS Port**        | 5061                   |

For example: sip:eu-savg-sbc1.kore.ai:5060

| **Component**       | SIP Server-2          |
| :------------------ | :-------------------- |
| **IP Address**      | 13.43.133.73          |
| **FQDN**            | `eu-savg-sbc2.kore.ai`|
| **TCP / UDP Port**  | 5060                  |
| **TLS Port**        | 5061                  |

For example: sip:eu-savg-sbc2.kore.ai:5060

| **Component**   | RTP Server-1    |
| :-------------- | :-------------- |
| **IP Address**  | 18.133.179.73   |
| **RTP Ports**   | 6000-65535      |

| **Component**   | RTP Server-2    |
| :-------------- | :-------------- |
| **IP Address**  | 13.43.133.73    |
| **RTP Ports**   | 6000-65535      |

For Agent transfers, enable inward and outward traffic to the following IPs and respective ports:

| **Component**   | WebRTC Session Border Controller (SBC)           |
| :-------------- | :----------------------------------------------- |
| **IP Address**  | 18.133.179.73<br>13.43.133.73                    |
| **FQDN**        | `eu-savg-sbc1.kore.ai`,<br>`eu-savg-sbc2.kore.ai`|
| **HTTPS**       | 443                                              |
| **WSS Port**    | 8443                                             |

For example: sip:eu-savg-sbc1.kore.ai:443

| **Component**   | WebRTC RTP Servers            |
| :-------------- | :---------------------------- |
| **IP Address**  | 18.133.179.73<br>13.43.133.73 |
| **RTP Ports**   | 6000-65535                    |

#### Germany (DE)

Enable inward and outward traffic to the following IPs and respective ports:

| **Component**       | SIP Server-1          |
| :------------------ | :-------------------- |
| **IP Address**      | 3.70.125.14           |
| **FQDN**            | `de-savg-sbc1.kore.ai`|
| **TCP / UDP Port**  | 5060                  |
| **TLS Port**        | 5061                  |

For example: sip:de-savg-sbc1.kore.ai:5060

| **Component**       | SIP Server-2          |
| :------------------ | :-------------------- |
| **IP Address**      | 18.158.223.171        |
| **FQDN**            | `de-savg-sbc2.kore.ai`|
| **TCP / UDP Port**  | 5060                  |
| **TLS Port**        | 5061                  |

For example: sip:de-savg-sbc2.kore.ai:5060

| **Component**   | RTP Server-1    |
| :-------------- | :-------------- |
| **IP Address**  | 3.70.125.14     |
| **RTP Ports**   | 6000-65535      |

| **Component**   | RTP Server-2   |
| :-------------- | :------------- |
| **IP Address**  | 18.158.223.171 |
| **RTP Ports**   | 6000-65535     |

For Agent transfers, enable inward and outward traffic to the following IPs and respective ports:

| **Component**   | WebRTC Session Border Controller (SBC)           |
| :-------------- | :----------------------------------------------- |
| **IP Address**  | 3.70.125.14<br>18.158.223.171                    |
| **FQDN**        | `de-savg-sbc1.kore.ai`,<br>`de-savg-sbc2.kore.ai`|
| **HTTPS**       | 443                                              |
| **WSS Port**    | 8443                                             |

For example: sip:de-savg-sbc1.kore.ai:443

| **Component**   | WebRTC RTP Servers             |
| :-------------- | :----------------------------- |
| **IP Address**  | 3.70.125.14<br>18.158.223.171  |
| **RTP Ports**   | 6000-65535                     |

#### Japan (JP)

Enable inward and outward traffic to the following IPs and respective ports:

| **Component**       | SIP Server-1           |
| :------------------ | :--------------------- |
| **IP Address**      | 35.76.183.247          |
| **FQDN**            | `jp-savg-sbc1.kore.ai` |
| **TCP / UDP Port**  | 5060                   |
| **TLS Port**        | 5061                   |

For example: sip:jp-savg-sbc1.kore.ai:5060

| **Component**       | SIP Server-2       |
| :------------------ | :-------------------- |
| **IP Address**      | 54.248.11.38          |
| **FQDN**            | `jp-savg-sbc2.kore.ai`|
| **TCP / UDP Port**  | 5060                  |
| **TLS Port**        | 5061                  |

For example: sip:jp-savg-sbc2.kore.ai:5060

| **Component**   | RTP Server-1   |
| :-------------- | :------------- |
| **IP Address**  | 35.76.183.247  |
| **RTP Ports**   | 6000-65535     |

| **Component**   | RTP Server-2 |
| :-------------- | :----------- |
| **IP Address**  | 54.248.11.38 |
| **RTP Ports**   | 6000-65535   |

For Agent transfers, enable inward and outward traffic to the following IPs and respective ports:

| **Component**   | WebRTC Session Border Controller (SBC)          |
| :-------------- | :---------------------------------------------- |
| **IP Address**  | 35.76.183.247<br>54.248.11.38                   |
| **FQDN**        | `jp-savg-sbc1.kore.ai`<br>`jp-savg-sbc2.kore.ai`|
| **HTTPS**       | 443                                             |
| **WSS Port**    | 8443                                            |

For example: sip:jp-savg-sbc2.kore.ai:443

| **Component**   | WebRTC RTP Servers            |
| :-------------- | :---------------------------- |
| **IP Address**  | 35.76.183.247<br>54.248.11.38 |
| **RTP Ports**   | 6000-65535                    |

#### United Arab Emirates (UAE)

Enable inward and outward traffic to the following IPs and respective ports:

| **Component**       | SIP Server-1           |
| :------------------ | :--------------------- |
| **IP Address**      | 40.172.158.151         |
| **FQDN**            | `uae-savg-sbc1.kore.ai`|
| **TCP / UDP Port**  | 5060                   |
| **TLS Port**        | 5061                   |

For example: sip:uae-savg-sbc1.kore.ai:5060

| **Component**       | SIP Server-2           |
| :------------------ | :--------------------- |
| **IP Address**      | 40.172.133.71          |
| **FQDN**            | `uae-savg-sbc2.kore.ai`|
| **TCP / UDP Port**  | 5060                   |
| **TLS Port**        | 5061                   |

For example: sip:uae-savg-sbc2.kore.ai:5060

| **Component**   | RTP Server-1    |
| :-------------- | :-------------- |
| **IP Address**  |  3.28.132.111   |
| **RTP Ports**   | 6000-65535      |

| **Component**   | RTP Server-2    |
| :-------------- | :-------------- |
| **IP Address**  | 3.28.124.143    |
| **RTP Ports**   | 6000-65535      |

For Agent transfers, enable inward and outward traffic to the following IPs and respective ports:

| **Component**   | WebRTC Session Border Controller (SBC)             |
| :-------------- | -------------------------------------------------- |
| **IP Address**  | 40.172.158.151<br>40.172.133.71                    |
| **FQDN**        | `uae-savg-sbc1.kore.ai`<br>`uae-savg-sbc2.kore.ai` |
| **HTTPS**       | 443                                                |
| **WSS Port**    | 8443                                               |

For example: sip:uae-savg-sbc1.kore.ai:443

| **Component**   | WebRTC RTP Servers             |
| :-------------- | :----------------------------- |
| **IP Address**  | 40.172.158.151<br>40.172.133.71|
| **RTP Ports**   | 6000-65535                     |

## Infrastructure Setup Guide

Use the following steps and checklist to verify your company's network preparedness for voice and video.

To assist in preparing your network, a Network Readiness checklist is available at the end of this document.

### Site Infrastructure Specifications

#### Network cabling

For optimal connectivity within your company network, use Cat 5e or higher network cables for all system connections, including Edges (routers and routing switches).

Cables usually have their type printed on them. If you are unsure, an electrical contractor can test the type of cabling you have. Most network cables purchased in the last five years are Cat 5e or better.

#### Appliance Power Source

For enhanced resilience, plug each Edge appliance into a separate power outlet. Ideally, these outlets are serviced by different power circuits.

#### Installation Site Conditions

Before installing office equipment, it's essential to verify that your office environment meets the necessary conditions for optimal operation.

### End-User/Client and SIP provider Specifications

#### End-User System Specifications

Refer to the [Cloud requirements](../voice-gateway/minimum-system-requirements-and-supported-browsers.md) for the minimum technical requirements to run the application.

!!! Note

    To ensure successful usage of our Cloud, make sure to configure the necessary ports and services on your company firewall. Complete details can be found in the "Firewall Requirements" section within the above-provided link.

#### End-User Safety Guidelines

To maintain uninterrupted access to our Cloud, we recommended to directly let our Cloud connectivity on your device. This is due to security services, such as antivirus, firewalls, or intrusion protection, installed by some companies on users' computers that might block access to our Cloud. Your IT administrator can also allow the connectivity. For a list of our common Cloud ports, protocols, and destinations, refer to the "Firewall Requirements" section [here](../voice-gateway/minimum-system-requirements-and-supported-browsers.md). 

#### SIP Trunking Requirements

Verify that the features provided by your SIP trunking provider adhere to the following minimum requirements.  
Also, select a compatible SIP provider, customers are strongly advised to conduct thorough interoperability testing between their specific Edge device and the chosen SIP provider's infrastructure. This testing is essential to identify and resolve any potential compatibility issues, ensuring seamless communication and optimal performance between the customer's Edge device and the SIP provider's network.

* Provide the list of the carrier's source IP addresses to us for SIP and RTP traffic configuration

#### Functionality Specifications

* Out-of-Band DTMF (RFC2833)
* Inbound calls with and without ANI (Automatic Number Identification)
* Outbound calls with ANI (Automatic Number Identification)
* Early Media 
* Hold Support (re-invite to 0.0.0.0)
* Incoming call forwarding
* Always in Audio
* Service unavailable (503 response from carrier)

#### SIP/RTP Traffic Requirements

* The carrier must let SIP and RTP traffic from your Edge Appliance IP Addresses
* Sequential trunk failover is recommended for multi-edge deployments
* SIP port 5060 (TCP, UDP) and 5061 (TLS) for all inbound/outbound SIP traffic
* Recommended to use the PCMU, PCMA, OPUS Codec for voice traffic inbound and outbound between you and the carrier
* SIP OPTION requests to the primary Edge ONLY

### SIP Provider Assessment Checklist

* Does your service provider maintain Quality of Service (QoS) markings on SIP and/or RTP traffic?
    * Our recommendation: Yes, they should maintain
* What's the maximum call per second (CPS) capacity supported on a trunk by your provider?
* What's the maximum number of concurrent calls (CCP) that your provider supports on a trunk?
* Does your provider support/require SIP authentication?
    * Our recommendation: Yes, it should support
* Does your provider have SIP header requirements for network access or billing?
    * Our recommendation: Yes, they should support SIP headers
* What are the SIP provider’s inbound IP addresses?
* Does your SIP provider require registration for their SIP trunk?
* What's the inbound protocol the SIP provider is using (that is, UDP / TCP / TLS)?
    * Our recommendation: UDP/TLS for the best experience
* Does your SIP provider require a P-Asserted identity?
* Does your SIP provider require outbound digest authentication?
* Does your SIP provider support SIP diversion headers?

## Connecting Your Network, Clients, and Appliances to our Cloud

### Internet connectivity

A dependable internet connection is necessary for our Cloud. Most internet connectivity issues are related to the "last mile," which is the physical link between your location and your carrier's network. If available, we suggest a "fully diverse" internet connection from your provider. Diversity means that your internet connection has multiple "last mile" paths to connect to various points on your internet service provider's network. Diversity and Redundancy are different concepts in the carrier world.

#### Network firewalls and security devices

To maintain uninterrupted access to our Cloud, verify that your network firewalls and security devices permit our Cloud connectivity. Company firewalls may occasionally block network traffic between our Cloud and your users.

For a list of our common Cloud ports, protocols, and destinations, see the "Firewall Requirements" section [here](../voice-gateway/minimum-system-requirements-and-supported-browsers.md).

#### Wide Area Network (WAN)

##### Private Circuit Connectivity

Many companies take advantage of private connectivity between their company offices. Private connectivity includes Multi-Protocol Label Switching (MPLS) and point-to-point connections. When using private circuit connectivity for voice and video services, the physical connection between your company office and your carrier’s network is a critical component. The industry refers to this connection as the “last mile.”

We suggest that you collaborate with your provider to obtain a `fully diverse` private circuit connection, if available in your area. Having diversity guarantees that your connectivity utilizes multiple “last mile” paths to reach different access points on your provider's network.

To ensure a consistent user experience for voice and video communications over private circuit WAN connections, which typically have lower bandwidth than local office networks, it's recommended to enable Quality of Service (QoS). QoS prioritizes voice and video traffic over other network traffic. Contact your private circuit carrier to configure QoS on your circuits.

#### VPN Connectivity

If your organization utilizes VPNs to connect remote workers, ensure that all necessary Cloud network ports and protocols are allowed on the VPN connections. Our Cloud supports voice and video services over VPN.

For a list of our common Cloud ports, protocols, and destinations, see the "Firewall Requirements" section [here](../voice-gateway/minimum-system-requirements-and-supported-browsers.md/).

#### Local Area Network (LAN)

Connectivity issues often arise when the speed and duplex of devices connected to your LAN are mismatched. Ensure that your network ports and trunks register the correct speed and duplex settings for each connected device. Most devices on a typical LAN have a speed/duplex of `100/full` or `1000/full`.

#### Wireless Local Area Network (WLAN)

For optimal performance of the Cloud real-time communications services over WLAN, use 802.11n or superior wireless hardware, and operate your wireless network on the 5 GHz band to minimize signal interference.

To identify areas with weak wireless signals (`dead spots`) in your facility, consider using available Wi-Fi surveying tools or hiring a network services company to conduct a professional site survey of your wireless network.

#### Network bandwidth

Ensure consistent bandwidth across your LAN and WAN to support voice calls. The required bandwidth is specified on this [page](../voice-gateway/minimum-system-requirements-and-supported-browsers.md ).

Our Cloud utilizes OPUS, an adaptive voice codec, for voice traffic to agent WebRTC phones. OPUS automatically adjusts sampling rates in response to varying network conditions. To ensure optimal call quality, we recommend allocating 32–128 Kbps of bi-directional network voice bandwidth per expected/supported concurrent call. Higher bandwidth allocation results in higher sampling rates and improved voice quality. Bandwidth must also be allocated for SIP control traffic. It's recommended that 5% of the high voice bandwidth value be allocated to SIP.

#### Network Quality of Service (QoS)

##### Prioritizing Voice Traffic

Prioritize voice and video traffic on all your network devices to maintain voice quality. This prioritization, also referred to as network Quality of Service (QoS), is crucial for managing network traffic and ensuring optimal performance for real-time communications.

The manufacturer's documentation for your specific network hardware setup details the network QoS process, as it varies depending on the vendor and model.

| **Traffic Description** | **Protocol** | **DSCP (Diffserv Code Point) Value** |
| ----------------------- | ------------ | ------------------------------------ |
| Voice traffic           | RTP          | 46 (EF)                              |
| Signaling traffic       | SIP          | 24 (CS3)                             |

**Performance target metrics**

| **Connection**       | **Target Metric**                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client connectivity  | Our Cloud requires round-trip latency of less than 1 second and packet loss of less than 10%.                                                                                                     |
| Edge connectivity    | Our Cloud requires round-trip latency of less than 300 ms and packet loss of less than 5%.                                                                                                        |
| External phone calls | When the agent is on WAN/Internet, the one-way latency between the agent and Edge should be less than 150 ms, with packet loss less than 1% and end-to-end latency less than 150 ms.               |
| Internal phone calls | When the agent and Edge are on the same LAN, the one-way latency must be less than 75 ms, packet loss less than 1%, and the end-to-end latency between the agent and Edge must be less than 75 ms. |

### Check List

* Does your firewall support the Pinhole feature or not? (Firewalls performing a network address translation (NAT) function, the mapping between the external IP address, port socket, and the internal IP address, port socket is a pinhole). 
    - [ ] Yes
    - [ ] No

* If your firewall has a Pinhole feature, does it have the support of the following modules: 
    - [ ] NAT hole punching
    - [ ] NAT traversal
    - [ ] TCP hole punching
    - [ ] UDP hole punching

* Will you be able to enable WSS support in your Firewall to establish a WebSocket over an encrypted TLS connection? 
    - [ ] Yes
    - [ ] No

* Are you connecting to the internet through the router? 
    - [ ] Yes
    - [ ] No

* Are you using any proxy server to connect to the internet? 
    - [ ] Yes
    - [ ] No

* If you are using a proxy server, will you be able to remove or skip (bypass) your proxy server from our configuration environment? 
    - [ ] Yes
    - [ ] No

* Will you be able to allocate and configure one test number to us? 
    - [ ] Yes
    - [ ] No

* Will you let and bypass traffic for *. [Kore](https://kore.ai/) and *.[twilio.com](https://twilio.com/) domains (HTTPS) on 443, 8443, 3478, and 5349 ports? 
    - [ ] Yes
    - [ ] No

* Per the [firewall requirements](../voice-gateway/minimum-system-requirements-and-supported-browsers.md), will you be able to whitelist and let the traffic to all IP addresses and domains (SBCs, STUN/TURN, etc.)? 
    - [ ] Yes
    - [ ] No

* As per the [firewall requirements](../voice-gateway/minimum-system-requirements-and-supported-browsers.md), will you be able to let all mentioned UDP ports in a bi-directional way? 
    - [ ] Yes
    - [ ] No

* Are you using any anti-virus software? 
    - [ ] Yes
    - [ ] No

* If you are using any anti-virus software, does it need to follow any federation rules? 
    - [ ] Yes
    - [ ] No

* Can you run the latency test using the [AWS latency test](https://aws-latency-test.com/) from your Agent's office premises and share the latency test results with Kore? 
    - [ ] Yes
    - [ ] No

* Are you using any internal firewall for each and every agent in their systems, like ZScaler? 
    - [ ] Yes
    - [ ] No

* If you are using any internal firewall like ZScaler, will you be able to let all mentioned UDP ports in a bi-directional way? 
    - [ ] Yes
    - [ ] No

## Ports and services for WebRTC

Our Cloud WebRTC (Agent Desktop) requires specific port and service configurations that must be considered before configuring a firewall in different network scenarios. The following diagrams show how to configure the ports and services for each scenario.

When reviewing the diagrams to identify the one that best matches the WebRTC (Agent Desktop) setup, consider the following questions:

* Are Kore.ai Cloud Voice Edges used?
* Are agents:

  * Inside the same network or firewall as the Edges?
  * Outside or in a separate network or firewall from the Edges?
  * In both locations (some inside and some outside)?
* Is the firewall configured as Endpoint Dependent (Symmetric) or Endpoint Independent (Asymmetric)?

### Call Flow

<img src="../images/call-flow-diagram.png" alt="Call Flow Diagram" title="Call Flow Diagram" style="border: 1px solid gray; zoom:70%;">

### Agent Desktop Architecture (Client Inside Firewall-Asymmetric NAT)

<img src="../images/agent-desktop-architecture.png" alt="Agent Desktop Architecture-Asymmetric" title="Agent Desktop Architecture-Asymmetric" style="border: 1px solid gray; zoom:70%;">

### Agent Desktop Architecture (Client Inside Firewall-Symmetric NAT)

<img src="../images/agent-desktop-architecture-symmetric.png" alt="Agent Desktop Architecture-Symmetric" title="Agent Desktop Architecture-Symmetric" style="border: 1px solid gray; zoom:70%;">

### Firewall Requirements

* [US Region](../voice-gateway/us-firewall-rules.md)
* [Japan (JP) Region](../voice-gateway/japan-firewall-rules.md)
* [Germany (DE) Region](../voice-gateway/germany-firewall-rules.md)

### User Diagnostics

If connectivity issues, screen freezing, or lag occur in Agent Desktop, perform the following troubleshooting steps: 
 
* First, verify the network connection. This applies whether working in the office or remotely.  
* Ensure the network strength meets our defined parameters. See [Minimum System Requirements and Supported Browsers](../voice-gateway/minimum-system-requirements-and-supported-browsers.md) for reference.  
* After completing these steps, run [User Diagnostics](../../console/manage-layout.md#user-diagnostics).

### Checklist

| Description | Impact |
|-------------|--------|
| Does your firewall support the pinhole feature? | Firewalls that perform Network Address Translation (NAT) map an external IP address and port to an internal IP address and port. This is a pinhole mapping. |
| If your firewall supports the pinhole feature, does it support the following modules? <br><br> **NAT hole punching** <br> **NAT traversal** <br> **TCP hole punching** <br> **UDP hole punching** | **NAT hole punching:** Without support, the system can't establish a direct connection between peers when one or both are behind firewalls or NAT-enabled routers. <br><br> **NAT traversal:** Without support, devices behind a NAT can't communicate with external devices. NAT traversal enables direct communication without port forwarding or manual configuration. <br><br> **TCP hole punching:** Without support, the system can't establish TCP connections between peers using NAT traversal. <br><br> **UDP hole punching:** Without support, the system can't establish bidirectional UDP connections between peers using NAT traversal. |
| Can you enable WSS support on your firewall to establish a WebSocket over an encrypted TLS connection? | Without WSS support, the system can't establish a secure WebSocket connection to transmit data securely over TLS. |
| Do you connect to the internet through a router? | If required ports aren't opened as described in the firewall requirements, the system can't establish peer connections and blocks traffic. |
| Do you use a proxy server to connect to the internet? | When a proxy server is in use, the system can't perform direct NAT traversal with the customer. |
| If you use a proxy server, can you bypass it in the Kore configuration environment? | When you bypass the proxy, NAT traversal occurs directly with the customer, and data transmission proceeds. |
| Can you allocate and configure one test number? | A test number enables end-to-end testing, ensures successful delivery, and helps troubleshoot future issues. |
| Can you let and bypass traffic for `*.kore.ai` and `*.twilio.com` domains (HTTPS) on ports 443, 8443, 3478, and 5349? | Without allowing this traffic, the system can't establish connections, perform NAT traversal, or transmit audio and data packets between peers. |
| Can you whitelist and let traffic to all required IP addresses and domains (SBCs, STUN/TURN, and others) as specified in the firewall requirements? | Without whitelisting, the system can't establish connections, perform NAT traversal, or transmit IP packets between peers. |
| Can you let all required UDP ports in a bidirectional manner as specified in the firewall requirements? | Without bidirectional UDP ports, the system can't transmit data in both directions, which results in one-way audio issues. |
| Do you use any antivirus software? | Antivirus software can block traffic and must let data through the required ports. |
| If you use antivirus software, does it require federation rules? | If federation rules apply, let traffic must according to Kore requirements and local regulations. |
| Can you run the AWS latency test from the agent office premises and share the results? | Latency up to 150 ms is acceptable. Latency more than 150 ms degrades call quality, and latency between 150 ms and 300 ms remains within acceptable limits. |
| Do you use an internal firewall on each agent system, such as Zscaler? | Open required UDP ports. Otherwise, RTP audio packets can't transmit between peers and blocks audio traffic. |
| If you use an internal firewall such as Zscaler, can you let all required UDP ports in a bidirectional manner? | Without bidirectional UDP ports, the system can't transmit RTP audio packets and blocks audio traffic. |