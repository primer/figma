# Authoring components in Figma

This document covers the guidelines on how to author new components, variants, and their properties within Figma. For questions and additional support, please reach out in the #primer channel in Slack.

---

## General guidelines

- Write component names in human speak. For example use `Button` instead of `btn`.
- List any reference to a CSS class, React component name, or ViewComponent name in the component's description.
- Use [Figma variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants) when authoring complex components

## Creating variants

When adding variant properties to a component, always capitalize the property name and lowercase the property value. When writing variants, keep the property name in sentence case and the values in lowercase. This helps to quickly discern properties and values from each other when creating complex components containing multiple properties. Using emoji arrows to show on which side an item will be placed is also helpful.

**Examples**

| Property name | Values |
|--------|--------|
| **State** | `default` `hover` `active` |
| **⬅️ Leading visual** | `off` `on` | 

### Variant properties

You should aim to use variant properties that follow existing system component options. The following table includes a list of common properties. Please note that not all components will contain every property.

| Category | Description | Included values |
|--------|--------|--------|
| `Type` | A variation of the component or a specific part | text, single select, multi-select, danger, header, item, footer | 
| `State` | The state of the component's interactivity | default (rest), hover, selected, disabled | 
| `Size` | Size variations of the component | small, medium, large OR pixel values | 
| `⬅️  Leading  [accessory]` | The leading visual accessory of a component placed to the left of a text label or description | icon, avatar |
| `➡️  Trailing [accessory]` | The trailing visual accessory of a component placed to the **right** of a text label or description | icon, avatar, label, counter |
| `Description` | Descriptive text within a component; can be a toggle (boolean) set of values or a dropdown selection | on/off [boolean], short/long, inline/block |
|  `Selected` | Mark the component as selected; toggle (boolean) the selection marker, typically a check mark | on/off |

