# Icon

::: agenticai_core.designtime.models.icon.Icon
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Usage Examples

### Basic Icon

```python
from agenticai_core.designtime.models.icon import Icon

icon = Icon(
    name="avatar1",
    color="#B2CCFF",
    type="human"
)
```

### Logo with Gradient

```python
logo = Icon(
    name="logo18",
    color="linear-gradient(45deg, #528BFF 0%, #004EEB 100%)",
    type="logo"
)
```

### Tool Icon

```python
tool_icon = Icon(
    name="calendar-check-01",
    color="linear-gradient(45deg, #528BFF 0%, #004EEB 100%)",
    type="icon"
)
```

## Icon Types

### human

Avatar-style icons for agents or users

```python
Icon(name="avatar1", color="#B2CCFF", type="human")
Icon(name="avatar2", color="#D9D6FE", type="human")
Icon(name="avatar3", color="#FEE4E2", type="human")
```

### logo

Application or brand logos

```python
Icon(name="logo18", color="#528BFF", type="logo")
```

### icon

General purpose icons for tools and features

```python
Icon(name="calendar-check-01", color="#32D583", type="icon")
Icon(name="briefcase-02", color="#717BBC", type="icon")
Icon(name="credit-card-02", color="#E478FA", type="icon")
```

## Color Formats

### Hex Colors

```python
Icon(name="avatar1", color="#B2CCFF", type="human")
```

### Gradients

```python
Icon(
    name="logo", 
    color="linear-gradient(45deg, #528BFF 0%, #004EEB 100%)",
    type="logo"
)
```

## Common Icon Names

### Avatars

- `avatar1`, `avatar2`, `avatar3`

### Actions

- `calendar-check-01`
- `link-external-01-alt`
- `briefcase-02`
- `credit-card-02`
- `thermometer-cold`
- `microphone-01`

### Logos

- `logo1` through `logo20`

## Serialization

```python
# To dict
icon_dict = icon.to_dict()
# {"name": "avatar1", "color": "#B2CCFF", "type": "human"}

# From dict
icon = Icon.from_dict({
    "name": "avatar1",
    "color": "#B2CCFF",
    "type": "human"
})

# To/from JSON
json_str = icon.to_json()
icon = Icon.from_json(json_str)
```

## Related Models

- [Agent](agent.md) - Agents use icons for visual identification
- [App](app.md) - Applications have app icons
- [Tool](tool.md) - Tools can have icons

