--8<-- "includes/firewall-rules-back-link.md"

# Europe (EU) Firewall Rules

## Voice Gateway

| Component                                      | Protocol       | Source IP | Source Port † | Destination       | Destination Port |
|:-----------------------------------------------|:----------------|:-----------|:----------------|:-------------------|:-------------------|
| **Session Border Controller (SBC)**<br>(Agent SBC) | TCP/UDP        | ANY       | ANY            | 18.133.179.73    | 5060              |
|                                               | TLS            | ANY       | ANY            | 18.133.179.73    | 5061              |
|                                               | TCP            | ANY       | ANY            | 18.133.179.73    | 8443              |
|                                               | TCP/UDP        | ANY       | ANY            | 13.43.133.73     | 5060              |
|                                               | TLS            | ANY       | ANY            | 13.43.133.73     | 5061              |
|                                               | TLS            | ANY       | ANY            | 13.43.133.73     | 8443              |
|                                               | UDP            | ANY       | ANY            | 18.133.179.73    | 6000-65535        |
|                                               | UDP            | ANY       | ANY            | 13.43.133.73     | 6000-65535        |

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

| Protocol        | Source IP | Source Port † | Destination IP Ranges           | Destination Port Range |
|:-----------------|:------------|:---------------|:----------------------------------|:------------------------|
| TCP (TURN TLS)  | ANY        | ANY           | 18.156.18.128 - 18.156.18.255    | 443/5349              |
| TCP (TURN TLS)  | ANY        | ANY           | 18.195.48.224 - 18.195.48.255    | 443/5349              |
| TCP (TURN TLS)  | ANY        | ANY           | 52.59.186.0 - 52.59.186.31       | 443/5349              |
| TCP (TURN TLS)  | ANY        | ANY           | 3.249.63.128 - 3.249.63.255      | 443/5349              |
| TCP (TURN TLS)  | ANY        | ANY           | 54.171.127.192 - 54.171.127.255  | 443/5349              |
| TCP (TURN TLS)  | ANY        | ANY           | 52.215.127.0 - 52.215.127.255    | 443/5349              |
| TCP (TURN TLS)  | ANY        | ANY           | 52.215.253.0 - 52.215.253.63     | 443/5349              |
| TCP (TURN TLS)  | ANY        | ANY           | 18.156.18.128 - 18.156.18.255    | 3478                  |
| TCP (TURN TLS)  | ANY        | ANY           | 18.195.48.224 - 18.195.48.255    | 3478                  |
| TCP (TURN TLS)  | ANY        | ANY           | 52.59.186.0 - 52.59.186.31       | 3478                  |
| TCP (TURN TLS)  | ANY        | ANY           | 3.249.63.128 - 3.249.63.255      | 3478                  |
| TCP (TURN TLS)  | ANY        | ANY           | 54.171.127.192 - 54.171.127.255  | 3478                  |
| TCP (TURN TLS)  | ANY        | ANY           | 52.215.127.0 - 52.215.127.255    | 3478                  |
| TCP (TURN TLS)  | ANY        | ANY           | 52.215.253.0 - 52.215.253.63     | 3478                  |