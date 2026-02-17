--8<-- "includes/firewall-rules-back-link.md"

# United States (US) Firewall Rules

## AudioCodes

|                              | Your Intranet |               | Allowed Destinations |              | Destination Port |
|:------------------------------|:----------------|:---------------|:-----------------------|:--------------|:-------------------|
|                              | Protocol       | Source IP     | Source Port †        | Destination* |                   |
| **Session Border Controller (SBC) (Automation, HA SBC)** | TCP/UDP        | ANY           | ANY                   | 54.161.251.110 | 5060              |
|                              | TLS            | ANY           | ANY                   | 54.161.251.110 | 5061              |
|                              | TCP            | ANY           | ANY                   | 54.161.251.110 | 10081             |
|                              | UDP            | ANY           | ANY                   | 54.161.251.110 | 6000-65535        |
| **Session Border Controller (SBC) (Agent SBC)** | TCP/UDP        | ANY           | ANY                   | 52.4.142.107   | 5060              |
|                              | TLS            | ANY           | ANY                   | 52.4.142.107   | 5061              |
|                              | UDP            | ANY           | ANY                   | 52.4.142.107   | 6000-65535        |
|                              | TCP            | ANY           | ANY                   | 52.4.142.107   | 10081             |

## Voice Gateway

|                              | Protocol       | Source IP     | Source Port †        | Destination*      | Destination Port |
|:------------------------------|:----------------|:---------------|:-----------------------|:--------------------|:-------------------|
| **Session Border Controller (SBC) (Agent SBC)** | TCP/UDP        | ANY           | ANY                   | 3.224.189.218     | 5060              |
|                              | TLS            | ANY           | ANY                   | 3.224.189.218     | 5061              |
|                              | WSS            | ANY           | ANY                   | 3.224.189.218     | 8443              |
|                              | TCP/UDP        | ANY           | ANY                   | 35.174.41.205     | 5060              |
|                              | TLS            | ANY           | ANY                   | 35.174.41.205     | 5061              |
|                              | WSS            | ANY           | ANY                   | 35.174.41.205     | 8443              |
|                              | UDP            | ANY           | ANY                   | 44.215.230.111    | 6000-65535        |
|                              | UDP            | ANY           | ANY                   | 54.210.75.166     | 6000-65535        |
| public FQDN                 |                |               |                       | *.kore.ai         | 443               |
| public FQDN                 |                |               |                       | *.twilio.com      | 443               |

## STUN SERVER & MEDIA RELAY

| Secure Media (ICE/STUN/SRTP) Edge Locations | Protocol | Source IP | Source Port † | Destination IP Ranges | Destination Port Range |
|:-----------------------------------------------|:----------|:-----------|:----------------|:------------------------|:------------------------|
| Media                                         | UDP      | ANY       | ANY            | 168.86.128.0/18       | 10000-65535            |

## Twilio STUN

|                              | Protocol         | Source IP | Source Port † | Destination IP Ranges                  | Destination Port Range |
|:------------------------------|:------------------|:-----------|:----------------|:------------------------------------------|:------------------------|
|                              | TCP (TURN TLS)  | ANY       | ANY            | 34.203.254.0 - 34.203.254.255          | 443/5349              |
|                              | TCP (TURN TLS)  | ANY       | ANY            | 54.172.60.0 - 54.172.61.255            | 443/5349              |
|                              | TCP (TURN TLS)  | ANY       | ANY            | 34.203.250.0 - 34.203.251.255          | 443/5349              |
|                              | TCP (TURN TLS)  | ANY       | ANY            | 3.235.111.128 - 3.235.111.255          | 443/5349              |
|                              | TCP (TURN TLS)  | ANY       | ANY            | 34.216.110.128 - 34.216.110.159        | 443/5349              |
|                              | TCP (TURN TLS)  | ANY       | ANY            | 54.244.51.0 - 54.244.51.255            | 443/5349              |
|                              | TCP (TURN TLS)  | ANY       | ANY            | 44.234.69.0 - 44.234.69.127            | 443/5349              |
|                              | TCP, UDP (TURN) | ANY       | ANY            | 34.203.254.0 - 34.203.254.255          | 3478                  |
|                              | TCP, UDP (TURN) | ANY       | ANY            | 54.172.60.0 - 54.172.61.255            | 3478                  |
|                              | TCP, UDP (TURN) | ANY       | ANY            | 34.203.250.0 - 34.203.251.255          | 3478                  |
|                              | TCP, UDP (TURN) | ANY       | ANY            | 3.235.111.128 - 3.235.111.255          | 3478                  |
|                              | TCP, UDP (TURN) | ANY       | ANY            | 34.216.110.128 - 34.216.110.159        | 3478                  |
|                              | TCP, UDP (TURN) | ANY       | ANY            | 54.244.51.0 - 54.244.51.255            | 3478                  |
|                              | TCP, UDP (TURN) | ANY       | ANY            | 44.234.69.0 - 44.234.69.127            | 3478                  |