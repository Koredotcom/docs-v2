# Queue Management

Virtual waiting areas that hold conversations until agents become available.

---

## Overview

Queues are the foundation of contact center routing. They organize incoming conversations and manage the flow to available agents.

{/* Screenshot placeholder */}

---

## Creating Queues

### Basic Configuration

{/* Screenshot placeholder */}

```yaml
Queue: Technical Support
General:
  name: Technical Support
  description: Hardware and software issues
  channel_types:
    - voice
    - chat
    - email

Hours of Operation:
  timezone: America/New_York
  schedule:
    - days: [Mon, Tue, Wed, Thu, Fri]
      hours: 8:00-20:00
    - days: [Sat]
      hours: 10:00-16:00
  holidays:
    - date: 2024-12-25
      closed: true
    - date: 2024-12-24
      hours: 8:00-14:00

Settings:
  max_wait_time: 600s
  service_level_target: 80% in 60s
```

---

## Queue Settings

### Routing Configuration

{/* Screenshot placeholder */}

```yaml
Routing:
  method: standard_v2    # standard_v2, advanced_v2, load_balanced_v3

  agent_selection:
    strategy: most_skilled    # most_skilled, longest_idle, round_robin

  overflow:
    enabled: true
    trigger: wait_time > 300s
    target_queue: general_support
```

### Transfer Rules

Control which queues agents can transfer to:

```yaml
Transfer Rules:
  mode: restricted    # open, restricted

  allowed_queues:
    - Tier 2 Support
    - Billing
    - Sales Escalations

  require_notes: true
  require_disposition: false
```

### Wait Time Settings

{/* Screenshot placeholder */}

```yaml
Wait Time:
  max_wait: 600s

  messages:
    - at: 60s
      message: "Thank you for your patience. An agent will be with you shortly."
    - at: 180s
      message: "We apologize for the wait. Estimated time: {{estimated_wait}}"
    - at: 300s
      message: "Would you like to request a callback instead?"
      offer_callback: true

  timeout_action:
    type: route_to_voicemail
    message: "We're sorry we couldn't connect you. Please leave a message."
```

---

## After-Call Work (ACW)

Configure what happens after conversations end.

{/* Screenshot placeholder */}

| ACW Mode | Description |
|----------|-------------|
| **Immediate** | Slot released immediately, agent available for next call |
| **Timed** | Slot held for configured duration (10s-15min) |
| **Indefinite** | Agent manually marks ready when done |

### Configuration

```yaml
After Call Work:
  mode: timed
  duration: 60s

  allow_extend:
    enabled: true
    max_extension: 300s

  required_actions:
    - select_disposition
    - add_notes

  auto_ready:
    enabled: true
    after: 120s    # Auto-ready if agent doesn't act
```

---

## Agent Assignment

Assign agents to queues.

{/* Screenshot placeholder */}

### Individual Agents

```yaml
Queue Agents:
  individual:
    - agent_id: agent_001
      role: primary
      skills_override: null    # Use agent's default skills

    - agent_id: agent_002
      role: backup
      activation: when_primary_busy
```

### Agent Groups

```yaml
Queue Agents:
  groups:
    - group: Support Team A
      role: primary

    - group: Support Team B
      role: overflow
      activation:
        condition: queue_depth > 10
```

### Preferred Agents (Advanced Routing)

```yaml
Queue Agents:
  preferred:
    - agent_id: agent_vip_001
      timeout: 45s
      conditions:
        - customer_tier: platinum

    - agent_id: agent_specialist
      timeout: 30s
      conditions:
        - product: enterprise
```

---

## Conditional Group Routing (CGR)

Dynamically expand agent pool when wait times exceed thresholds.

{/* Screenshot placeholder */}

### Configuration

```yaml
Conditional Group Routing:
  enabled: true

  triggers:
    - metric: estimated_wait_time
      threshold: 120s

    - metric: service_level
      threshold: < 70%

  expansion_rules:
    - condition: ewt > 120s
      add_queue: General Support
      priority: secondary

    - condition: ewt > 300s
      add_queue: All Hands Support
      priority: tertiary

    - condition: service_level < 50%
      add_queue: Emergency Overflow
      priority: primary

  contraction:
    enabled: true
    condition: ewt < 60s AND service_level > 85%
    delay: 300s    # Wait before removing expansion
```

### CGR Flow

```
[Normal State]
Queue: Tech Support
Agents: Team A (5 agents)
       │
       ▼
[EWT exceeds 2 min]
       │
       ▼
[Expand to General Support]
Queue: Tech Support + General
Agents: Team A + Team B (10 agents)
       │
       ▼
[EWT exceeds 5 min]
       │
       ▼
[Expand to All Hands]
Queue: Tech Support + General + All Hands
Agents: All available (20 agents)
       │
       ▼
[EWT drops below 1 min for 5 min]
       │
       ▼
[Contract back to normal]
```

---

## Queue Metrics

### Real-Time Metrics

{/* Screenshot placeholder */}

| Metric | Description |
|--------|-------------|
| **Queue Depth** | Conversations currently waiting |
| **Estimated Wait Time (EWT)** | Predicted wait for new conversations |
| **Service Level** | % answered within target time |
| **Abandonment Rate** | % who left before answer |
| **Average Handle Time** | Avg conversation duration |
| **Agents Available** | Agents ready to take calls |

### Historical Reporting

```yaml
Queue Reports:
  - name: Daily Performance
    metrics:
      - service_level
      - abandonment_rate
      - average_wait_time
      - average_handle_time
    grouping: hourly

  - name: Agent Productivity
    metrics:
      - conversations_handled
      - average_handle_time
      - after_call_work_time
    grouping: by_agent
```

---

## Queue Administration

### Managing Multiple Queues

{/* Screenshot placeholder */}

| Action | Description |
|--------|-------------|
| **Create** | Add new queue |
| **Edit** | Modify queue settings |
| **Clone** | Duplicate queue configuration |
| **Disable** | Temporarily disable queue |
| **Delete** | Remove queue (no active campaigns) |

### Bulk Operations

- Update hours of operation across queues
- Assign agent groups to multiple queues
- Export/import queue configurations

---

## Related

- [Routing](/ai-for-service/contact-center/routing) — Routing methods and rules
- [Skills](/ai-for-service/contact-center/skills) — Agent skill management
- [Supervisor Tools](/ai-for-service/contact-center/supervisor) — Real-time monitoring
