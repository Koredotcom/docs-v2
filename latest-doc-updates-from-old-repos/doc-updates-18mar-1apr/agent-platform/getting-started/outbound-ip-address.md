# Agent Platform Outbound IP Addresses

The Platform makes outbound requests to a fixed set of IP addresses. If your systems or third-party services enforce IP allowlisting, you must add these IPs to your firewall or network's allowlist. The allowlisting lets traffic originating from the Agent Platform to be permitted by your network or external service endpoints.

The Platform sends requests to a fixed set of IP addresses. If your systems use IP restrictions, then add the following IPs to your allowlist to permit Platform traffic.


| Region  | Product URL                       | IPs                                                                                     |
|---------|------------------------------------|------------------------------------------------------------------------------------------|
| USA     | https://agent-platform.kore.ai     | • 54.225.127.87<br /> • 44.216.129.184<br /> • 34.201.194.187<br /> • Lambda IPs for code build: 52.7.57.24 |
| Germany | https://de-agent-platform.kore.ai  | • 3.75.73.144 <br /> • 18.198.171.44 <br /> • 63.176.211.25 <br /> • Lambda IPs for code build: 52.57.41.155 |
| Japan   | https://jp-agent-platform.kore.ai  | • 18.180.133.211 <br /> • Lambda IP for code build: 18.179.141.6 |