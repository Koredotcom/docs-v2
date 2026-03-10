--8<-- "includes/firewall-rules-back-link.md"

# Japan (JP) Firewall Rules

## AudioCodes

| Component                              | Protocol | Source IP | Source Port † | Allowed Destinations                          | Destination Port |
|:----------------------------------------|:----------|:-----------|:---------------|:-----------------------------------------------|:-----------------|
| Session Border Controller (SBC) <br>(Automation, HA SBC) | TCP/UDP  | ANY       | ANY           | 18.177.19.211                                  | 5060            |
|                                        | TCP      | ANY       | ANY           | audiocodes-jp-sbc-prod.kore.ai                | 5060            |
|                                        | TLS      | ANY       | ANY           | 18.177.19.211                                  | 5061            |
|                                        | TLS      | ANY       | ANY           | audiocodes-jp-sbc-prod.kore.ai                | 5061            |
|                                        | TCP      | ANY       | ANY           | 18.177.19.211                                  | 10081           |
|                                        | UDP      | ANY       | ANY           | 18.177.19.211                                  | 6000-65535      |
| Session Border Controller (SBC) <br>(Agent SBC)       | TCP/UDP  | ANY       | ANY           | 18.182.77.145                                  | 5060            |
|                                        | TCP      | ANY       | ANY           | audiocodes-jp-webrtc-prod.kore.ai             | 5060            |
|                                        | TLS      | ANY       | ANY           | 18.182.77.145                                  | 5061            |
|                                        | TLS      | ANY       | ANY           | audiocodes-jp-webrtc-prod.kore.ai             | 5061            |
|                                        | UDP      | ANY       | ANY           | 18.182.77.145                                  | 6000-65535      |
|                                        | TCP      | ANY       | ANY           | 18.182.77.145                                  | 10081           |

## Voice Gateway (VG)

| Component                            | Protocol | Source IP | Source Port | Destination IP / FQDN | Destination Port Range |
|:--------------------------------------|:----------|:-----------|:-------------|:------------------------|:------------------------|
| Session Border Controller (SBC) <br>(Agent SBC) |          |           |             |                        |                        |
| ↳                                    | TCP/UDP  | ANY       | ANY         | 35.76.183.247          | 5060                   |
| ↳                                    | TLS      | ANY       | ANY         | 35.76.183.247          | 5061                   |
| ↳                                    | TCP      | ANY       | ANY         | 35.76.183.247          | 8443                   |
| ↳                                    | TCP/UDP  | ANY       | ANY         | 54.248.11.38           | 5060                   |
| ↳                                    | TLS      | ANY       | ANY         | 54.248.11.38           | 5061                   |
| ↳                                    | WSS      | ANY       | ANY         | 54.248.11.38           | 8443                   |
| ↳                                    | UDP      | ANY       | ANY         | 35.76.183.247          | 6000-65535             |
| ↳                                    | UDP      | ANY       | ANY         | 54.248.11.38           | 6000-65535             |

## Media Twilio Gateway

| Secure Media (ICE/STUN/SRTP) Edge Locations | Protocol | Source IP | Source Port † | Destination IP Ranges | Destination Port Range |
|:---------------------------------------------|:----------|:-----------|:---------------|:------------------------|:------------------------|
| ↳ Stun server                               | UDP      | ANY       | ANY           | 168.86.128.0/18        | 10000-65535           |

## FQDN

| Component       | Protocol          | Source IP | Source Port † | Destination IP Ranges              | Destination Port Range |
|:-----------------|:-------------------|:-----------|:---------------|:------------------------------------|:------------------------|
| Kore Domain     | TCP               | ANY       | ANY           | *.kore.ai                          | 443, 8443              |
| Twilio Domain   | TCP               | ANY       | ANY           | *.twilio.com                       | 443, 8443              |

## Twilio STUN

| Component       | Protocol          | Source IP | Source Port † | Destination IP Ranges              | Destination Port Range |
|:-----------------|:-------------------|:-----------|:---------------|:------------------------------------|:------------------------|
| ↳               | TCP (TURN TLS)    | ANY       | ANY           | 13.115.244.0 - 13.115.244.31       | 443/5349               |
| ↳               | TCP (TURN TLS)    | ANY       | ANY           | 18.180.220.128 - 18.180.220.255    | 443/5349               |
| ↳               | TCP (TURN TLS)    | ANY       | ANY           | 54.65.63.192 - 54.65.63.255        | 443/5349               |
| ↳               | TCP, UDP          | ANY       | ANY           | 13.115.244.0 - 13.115.244.31       | 3478                   |
| ↳               | TCP, UDP          | ANY       | ANY           | 18.180.220.128 - 18.180.220.255    | 3478                   |
| ↳               | TCP, UDP          | ANY       | ANY           | 54.65.63.192 - 54.65.63.255        | 3478                   |