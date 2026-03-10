--8<-- "includes/firewall-rules-back-link.md"

# United Arab Emirates (UAE) Firewall Rules

## Voice Gateway

| SAVG (Agent SBC) | Protocol  | Source IP | Source Port | Destination IP   | Destination Port |
|:------------------|:-----------|:-----------|:--------------|:------------------|:------------------|
| Session Border Controller (SBC) | TCP/UDP | ANY | ANY | 40.172.158.151 | 5060 |
|                  | TLS       | ANY | ANY | 40.172.158.151 | 5061 |
|                  | TCP       | ANY | ANY | 40.172.158.151 | 8443 |
|                  | TCP/UDP   | ANY | ANY | 40.172.133.71  | 5060 |
|                  | TLS       | ANY | ANY | 40.172.133.71  | 5061 |
|                  | TLS       | ANY | ANY | 40.172.133.71  | 8443 |
|                  | UDP       | ANY | ANY | 3.28.132.111   | 6000–65535 |
|                  | UDP       | ANY | ANY | 3.28.124.143   | 6000–65535 |

## Secure Media (ICE/STUN/SRTP) Edge Locations

| Secure Media (ICE/STUN/SRTP) | Protocol | Source | Source Port | Destination (IP Range) | Destination Port Range |
|:------------------------------|:----------|:--------|:-------------|:--------------------------|:-------------------------|
| Stun server                  | UDP      | ANY    | ANY         | 168.86.128.0/18          | 10,000–65,535          |

## FQDN

| Domain Type   | Protocol | Source | Source Port | Destination (FQDN) | Destination Port |
|:---------------|:----------|:--------|:-------------|:---------------------|:------------------|
| Kore Domain   | TCP      | ANY    | ANY         | *.kore.ai           | 443, 8443 |
| Twilio Domain | TCP      | ANY    | ANY         | *.twilio.com        | 443, 8443 |

## Twilio STUN / TURN (TLS)

| Protocol (TURN TLS) | Source IP | Source Port | Destination IP Ranges              | Destination Port Range |
|:----------------------|:-----------|:-------------|:-------------------------------------|:-------------------------|
| TCP (TURN TLS)       | ANY       | ANY         | 13.229.255.0–13.229.255.31          | 443/5349 |
| TCP (TURN TLS)       | ANY       | ANY         | 18.141.157.128–18.141.157.255       | 443/5349 |
| TCP (TURN TLS)       | ANY       | ANY         | 54.169.127.128–54.169.127.191       | 443/5349 |
| TCP (TURN TLS)       | ANY       | ANY         | 13.229.255.0–13.229.255.31          | 3478 |
| TCP (TURN TLS)       | ANY       | ANY         | 18.141.157.128–18.141.157.255       | 3478 |
| TCP (TURN TLS)       | ANY       | ANY         | 54.169.127.128–54.169.127.191       | 3478 |