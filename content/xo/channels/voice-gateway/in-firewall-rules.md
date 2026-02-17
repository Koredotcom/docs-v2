--8<-- "includes/firewall-rules-back-link.md"

# India (IN) Firewall Rules

## Voice Gateway

| Component                                      | Protocol       | Source IP | Source Port † | Destination       | Destination Port |
|:-----------------------------------------------|:----------------|:-----------|:----------------|:-------------------|:-------------------|
| **Session Border Controller (SBC)**<br>(Agent SBC) | TCP/UDP        | ANY       | ANY            | 20.244.87.83     | 5060              |
|                                               | TLS            | ANY       | ANY            | 20.244.87.83     | 5061              |
|                                               | TCP            | ANY       | ANY            | 20.244.87.83     | 8443              |
|                                               | TCP/UDP        | ANY       | ANY            | 20.197.5.84      | 5060              |
|                                               | TLS            | ANY       | ANY            | 20.197.5.84      | 5061              |
|                                               | TLS            | ANY       | ANY            | 20.197.5.84      | 8443              |
|                                               | UDP            | ANY       | ANY            | 20.244.87.83     | 6000-65535        |
|                                               | UDP            | ANY       | ANY            | 20.197.5.84      | 6000-65535        |

## Media Twilio Gateway

| Secure Media (ICE/STUN/SRTP) Edge Locations    | Protocol | Source IP | Source Port † | Destination IP Ranges | Destination Port Range |
|:--------------|:----------|:-----------|:----------------|:------------------------|:-------------------------|
| ↳ Stun server  | UDP      | ANY       | ANY            | 168.86.128.0/18       | 10000-65535            |

## FQDN

| Domain         | Protocol | Source IP | Source Port † | Destination       | Destination Port |
|:----------------|:----------|:-----------|:----------------|:-------------------|:-------------------|
| Kore Domain    | TCP      | ANY       | ANY            | *.kore.ai        | 443, 8443        |
| Twilio Domain  | TCP      | ANY       | ANY            | *.twilio.com     | 443, 8443        |

## Twilio STUN

| Protocol         | Source IP | Source Port † | Destination IP Ranges           | Destination Port Range |
|:-------------------|:-----------|:----------------|:----------------------------------|:-------------------------|
| TCP (TURN TLS)   | ANY       | ANY            | 3.7.35.128 - 3.7.35.255         | 443/5349               |
| TCP (TURN TLS)   | ANY       | ANY            | 52.66.193.96 - 52.66.193.127    | 443/5349               |
| TCP (TURN TLS)   | ANY       | ANY            | 52.66.194.0 - 52.66.194.63      | 443/5349               |
| TCP (TURN TLS)   | ANY       | ANY            | 3.7.35.128 - 3.7.35.255         | 3478                   |
| TCP (TURN TLS)   | ANY       | ANY            | 52.66.193.96 - 52.66.193.127    | 3478                   |
| TCP (TURN TLS)   | ANY       | ANY            | 52.66.194.0 - 52.66.194.63      | 3478                   |