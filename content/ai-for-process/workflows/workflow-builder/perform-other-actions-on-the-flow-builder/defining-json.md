[:octicons-arrow-left-24: Back to AI node](../types-of-nodes/image-to-text-node.md#step-3-configure-the-node)

# Defining JSON Schema

You can refer to the following JSON schema format to define your schema:

```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "<property_name_1>": {
      "type": "<data_type>", 
      "description": "<description_of_the_property>"
    },
    "<property_name_2>": {
      "type": "<data_type>",
      "format": "<optional_format>", 
      "enum": ["<value1>", "<value2>", "<value3>"], 
      "description": "<description_of_the_property>"
    }
  },
  "required": ["<required_property_1>", "<required_property_2>"]
}
```


**Here is a step-by-step guide to help you define your JSON schema:**

1. **Create the schema object:**
    - Set `type: "object"` to specify the root level as an object type.
    - Add a `properties` object to define all fields.
2. **Define property names:**
    - Create an object for each property, including `type` and `description`.
    - Common types: `string`, `number`, `boolean`, `array`, `object`.
    - For arrays, use `items` to define element types.
3. **Set constraints:**
    - Add a `required` array at each level, listing all required fields.
4. **Handle special fields:**
    - Use `enum` to restrict optional values.