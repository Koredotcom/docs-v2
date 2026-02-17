--8<-- "includes/firewall-rules-back-link.md"

# Australia (AU) Firewall Rules

## Voice Gateway

| Component                                      | Protocol       | Source IP | Source Port † | Destination       | Destination Port |
|:-----------------------------------------------|:----------------|:-----------|:----------------|:-------------------|:-------------------|
| **Session Border Controller (SBC)**<br>(Agent SBC) | TCP/UDP        | ANY       | ANY            | 54.153.137.7     | 5060              |
|                                               | TLS            | ANY       | ANY            | 54.153.137.7     | 5061              |
|                                               | TCP            | ANY       | ANY            | 54.153.137.7     | 8443              |
|                                               | TCP/UDP        | ANY       | ANY            | 13.237.170.233   | 5060              |
|                                               | TLS            | ANY       | ANY            | 13.237.170.233   | 5061              |
|                                               | TLS            | ANY       | ANY            | 13.237.170.233   | 8443              |
|                                               | UDP            | ANY       | ANY            | 54.153.137.7     | 6000-65535        |
|                                               | UDP            | ANY       | ANY            | 13.237.170.233   | 6000-65535        |

## Media Twilio Gateway

| Secure Media (ICE/STUN/SRTP) Edge Locations       | Protocol | Source IP | Source Port † | Destination IP Ranges | Destination Port Range |
|:-----------------|:----------|:-----------|:----------------|:------------------------|:-------------------------|
| ↳ Stun server     | UDP      | ANY       | ANY            | 168.86.128.0/18       | 10000-65535            |

## FQDN

| Domain         | Protocol | Source IP | Source Port † | Destination       | Destination Port |
|:----------------|:----------|:-----------|:----------------|:-------------------|:-------------------|
| Kore Domain    | TCP      | ANY       | ANY            | *.kore.ai        | 443, 8443        |
| Twilio Domain  | TCP      | ANY       | ANY            | *.twilio.com     | 443, 8443        |

## Twilio STUN

| Protocol         | Source IP | Source Port † | Destination IP Ranges              | Destination Port Range |
|:-------------------|:-----------|:----------------|:--------------------------------------|:-------------------------|
| TCP (TURN TLS)   | ANY       | ANY            | 3.25.42.128 - 3.25.42.255           | 443/5349               |
| TCP (TURN TLS)   | ANY       | ANY            | 13.210.2.128 - 13.210.2.159         | 443/5349               |
| TCP (TURN TLS)   | ANY       | ANY            | 54.252.254.64 - 54.252.254.127      | 443/5349               |
| TCP (TURN TLS)   | ANY       | ANY            | 3.25.42.128 - 3.25.42.255           | 3478                   |
| TCP (TURN TLS)   | ANY       | ANY            | 13.210.2.128 - 13.210.2.159         | 3478                   |
| TCP (TURN TLS)   | ANY       | ANY            | 54.252.254.64 - 54.252.254.127      | 3478                   |