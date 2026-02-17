# Skills Management

Agent capabilities used for intelligent routing.

---

## Overview

Skills represent agent expertise and are used by the routing engine to match conversations with qualified agents.

{/* Screenshot placeholder */}

---

## Skill Structure

Organize skills into groups for better management:

```
Skill Groups
├── Languages
│   ├── English
│   ├── Spanish
│   ├── French
│   └── German
├── Products
│   ├── Enterprise Software
│   ├── Consumer Products
│   └── Hardware
├── Expertise
│   ├── Technical Support
│   ├── Billing
│   ├── Sales
│   └── Account Management
└── Certifications
    ├── Product Certified
    └── Advanced Support
```

---

## Creating Skill Groups

{/* Screenshot placeholder */}

### Configuration

```yaml
Skill Group: Product Knowledge
Description: Skills related to product expertise
Color: #3B82F6    # For visual identification

Settings:
  allow_multiple: true    # Agents can have multiple skills from this group
  required_for_routing: false
```

---

## Creating Skills

{/* Screenshot placeholder */}

### Configuration

```yaml
Skill: Enterprise Software
Group: Product Knowledge
Description: Knowledge of enterprise product line

Proficiency Levels:
  - level: 1
    name: Novice
    description: Basic awareness, can handle simple questions

  - level: 2
    name: Average
    description: Can handle common questions and issues

  - level: 3
    name: Good
    description: Handles complex issues, minimal escalation

  - level: 4
    name: Expert
    description: Deep expertise, can mentor others

Settings:
  default_proficiency: 2
  auto_assign: false
  expiration: null    # Or set days until skill expires
```

---

## Proficiency Levels

Define what each proficiency level means:

{/* Screenshot placeholder */}

| Level | Name | Description | Routing Weight |
|-------|------|-------------|----------------|
| 1 | Novice | Basic knowledge, needs guidance | 1.0 |
| 2 | Average | Handles common scenarios | 1.5 |
| 3 | Good | Handles complex issues | 2.0 |
| 4 | Expert | Deep expertise, can train others | 2.5 |

### Custom Proficiency Scales

```yaml
Custom Proficiency Scale:
  levels: 5

  definitions:
    - level: 1
      name: Trainee
      description: In training, shadowing only

    - level: 2
      name: Junior
      description: Handles basic inquiries with supervision

    - level: 3
      name: Intermediate
      description: Independent handling of standard cases

    - level: 4
      name: Senior
      description: Complex cases, mentors juniors

    - level: 5
      name: Subject Matter Expert
      description: Escalation point, creates documentation
```

---

## Agent Skill Assignment

### Manual Assignment

{/* Screenshot placeholder */}

```yaml
Agent: agent_001
Name: John Smith

Skills:
  - skill: Enterprise Software
    proficiency: Expert
    assigned_date: 2024-01-15

  - skill: Technical Support
    proficiency: Good
    assigned_date: 2024-01-15

  - skill: Spanish
    proficiency: Average
    assigned_date: 2024-02-01

Languages:
  - code: en
    proficiency: native
  - code: es
    proficiency: fluent
```

### Bulk Assignment

Assign skills to multiple agents:

{/* Screenshot placeholder */}

1. Select agents from list
2. Choose skill(s) to assign
3. Set proficiency level
4. Apply to selected agents

### Skill Inheritance from Groups

```yaml
Agent Group: Enterprise Support Team
Skills:
  - skill: Enterprise Software
    min_proficiency: Good

  - skill: Technical Support
    min_proficiency: Average

Members inherit:
  - All group skills at group-defined proficiency
  - Individual skills can override
```

---

## Dynamic Skill Assignment

Programmatically assign skills during conversations.

### API Methods

```javascript
// Add skills to current conversation
setSkills([
  { skillId: "enterprise_software", required: true },
  { skillId: "billing", required: false }
]);

// Get current conversation skills
const currentSkills = getSkills();
// Returns: [{ skillId: "enterprise_software", required: true, proficiency: null }]

// Remove specific skill
deleteSkillById("billing");

// Remove multiple skills
deleteSkills(["skill_1", "skill_2"]);

// Clear all skills
clearSkills();
```

### Flow-Based Assignment

In dialog flows, use Script nodes to set skills:

```javascript
// Set skills based on customer input
if (context.session.product === "enterprise") {
  setSkills([
    { skillId: "enterprise_software", required: true }
  ]);
}

if (context.session.issue_type === "billing") {
  setSkills([
    { skillId: "billing", required: true }
  ]);
}

// Transfer to queue with skills attached
transferToQueue("support");
```

---

## Skill-Based Routing

How skills are used in routing decisions.

{/* Screenshot placeholder */}

### Routing Configuration

```yaml
Routing Rule: Enterprise Technical Issue
Trigger:
  - intent: technical_issue
  - product: enterprise

Required Skills:
  - skill: Enterprise Software
    min_proficiency: Good    # Level 3+

  - skill: Technical Support
    min_proficiency: Average    # Level 2+

Preferred Skills:
  - skill: Account Management
    weight: 1.5    # Bonus for having this skill

Language:
  required: true    # Must match conversation language

Routing:
  method: advanced_v2
  preferred_agent_timeout: 30s
```

### Skill Matching Logic

```
[Conversation Skills]
Required: Enterprise Software (Good+), Technical Support (Average+)
Preferred: Account Management
Language: Spanish

                    │
                    ▼

[Find Matching Agents]
Agent A: Enterprise (Expert), Tech Support (Good), Spanish ✓
Agent B: Enterprise (Good), Tech Support (Average), Spanish ✓
Agent C: Enterprise (Average), Tech Support (Expert), Spanish ✗ (proficiency)

                    │
                    ▼

[Rank by Proficiency + Preferred]
1. Agent A: Score 4 + 3 = 7
2. Agent B: Score 3 + 2 = 5

                    │
                    ▼

[Route to Agent A]
```

---

## Skill Expiration

Set skills to expire automatically:

```yaml
Skill: Product Certification
Expiration:
  enabled: true
  duration: 365d
  warning: 30d    # Notify before expiration

  on_expiration:
    action: remove_skill
    notification:
      - agent
      - supervisor
    require_recertification: true
```

---

## Skill Reports

### Agent Skill Matrix

{/* Screenshot placeholder */}

View all agents and their skills in a matrix format:
- Rows: Agents
- Columns: Skills
- Cells: Proficiency level

### Skill Coverage

```yaml
Skill Coverage Report:
  metrics:
    - skill_name
    - total_agents
    - agents_by_proficiency
    - coverage_hours
    - gaps

  filters:
    - queue
    - time_period
    - shift
```

---

## Related

- [Routing](/ai-for-service/contact-center/routing) — How skills affect routing
- [Queue Management](/ai-for-service/contact-center/queues) — Queue configuration
- [Agent Console](/ai-for-service/contact-center/agent-console) — Agent experience
