# Authoring components in Figma

This document covers the guidelines on how to author new components, variants, and their properties within Figma. For questions and additional support, please reach out in the #primer channel in Slack.

> **Edit 2022 May 13:** With the introduction of new component property features in Figma, the design systems team will be restructuring and renaming component/variant properties to closer align to the component APIs seen in code.

---

## General guidelines

- Write component names as reflected in code as a component name but not after utility names. For example use `Button` instead of `btn` .
- List any reference to a CSS class, React component name, or ViewComponent name in the component's description.
- Use [Figma variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants) for component states or variants/types. For example, a variant property could be for "State: rest, focus, hover, selected, disabled".
- Use [Figma component properties](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties) to control the different options for hide/show layers (hide/show a leadingVisual), instance swapping (such as between an icon or avatar for a leadingVisual), and for text properties (headings, descriptions, etc).

## Variants

In Primer, variants and component properties are used to quickly select different states and/or visual options of a component. 

### Variant properties

When creating a new component apply variant properties that follow existing parameters seen in other implementations where the component exsists, [Primer React](https://primer.style/react/) and [Primer ViewComponents](https://primer.style/view-components/). If a parameter exists but cannot be expressed in Figma (e.g. `alt` or `href`) it is not necessary to include. Variant properties will always appear above component properties in the properties panel and can only be reordered with other variant properties.

![Example: Avatar component in Figma](https://user-images.githubusercontent.com/10384315/131897226-b5253552-f13f-4e85-8226-d6ca2b34d938.png)

### Component properties

Certain visual options can be controlled with Figma's component properties. Apply component properties when controlling the visibility of a layer, swapping between specific instance options, or controlling the content of a text layer. Below is a list of common properties and the types of items they control. When ordering component properties, order them from the start to end to how they would be seen within the DOM. 

As a reminder, variant properties will always appear above component properties in the properties panel.

| Name | Description | Component property type |
| :--: | :--: | :--: |
| ⬅️ visual? | Show/hide the leading visual which is a the start of the component (left-side) | [Boolean](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties#h_01G2Q5GA6DEB604H2E5H5C5TA4) |
| title | Text content for "Title" layer | [Text](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties#h_01G2Q5G3FV0EQP9RZFZG7GVWEG) |
| leadingAction | Swap between different interactive options (such as checkbox, checkmark, bullet) | [Instance swap](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties#h_01G2Q5FYN2ADEDQ3ZSB1KKY8Z0) |

## Writing properties

- When properties, either variant or component, write them as they are seen or would be written in code. For example, the prop for an icon or avatar in the action list component is written as `leadingVisual`.
- When writing variants, keep the property name in as written in code with lower or camelCase and the values in lowercase.
- Use emoji can add more context to a property. For example using arrows "⬅️" can help to indicate which side an item will be placed.
- When indicating a boolean property add a "?". For example, the property to show/hide the title of a component is written as "title?"

**Examples**

| Property name | Values |
|--------|--------|
| **⬅️ leadingVisual** | `off` `on` | 
| **label?** | `true` `false` |
| **state** | `rest` `focust` `hover` |
| **visual** | `octicon` `avatar` |

#### Properties table

The following table includes a list of common properties used within the Figma components in [Primer Web](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=179%3A3870). Please note that not all components will contain all properties contained within this list. Use your best judgement as to which properties should be implemented.

| Category | Description | Included values |
|--------|--------|--------|
| `type` | A variation of the component or a specific part | text, single select, multi-select, danger, header, item, footer | 
| `state` | The state of the component's interactivity | default (rest), hover, selected, disabled | 
| `size` | Size variations of the component | small, medium, large OR pixel values | 
| `⬅️ leading[Accessory]` | The leading visual accessory of a component placed to the **left** of a text label or description | icon, avatar |
| `➡️ trailing[Accessory]` | The trailing visual accessory of a component placed to the **right** of a text label or description | icon, avatar, label, counter |
| `description` | Descriptive text within a component; can be a toggle (boolean) set of values or a dropdown selection | on/off [boolean], short/long, inline/block |
|  `selected` | Mark the component as selected; toggle (boolean) the selection marker, typically a check mark | on/off |

## Multiple components vs Multiple variants

Some components may feel connected enough that using the variants feature of Figma makes sense. Within Primer, our main distinction between using variants or adding additional related components is to ask, "Will this change only visual styling or will this also change function/purpose of the component?".

### Examples of when to use multiple components

- [Alerts](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=142%3A597): Flash alert and Toast
- [Avatars](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=179%3A3870): Avatar and AvatarStack
- [Form select items](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=1143%3A1104)

### Examples of when to use variants

- [Buttons](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=136%3A1805)
- [Outline labels](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=3813%3A3)
- [Navigation > Header](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4287%3A7)

## Slots

![_Slot component](https://user-images.githubusercontent.com/10384315/137150003-9d731aac-3c26-4fdb-88d0-468e9e8399bc.png)


The `_Slot` component is a local component to the Primer Web library and is added as a placeholder for any customizeable content where the designers have more flexibility.

![Examples of slot placement](https://user-images.githubusercontent.com/10384315/137150107-fe5ab70d-4235-44a7-bb18-daceca77c1f9.png)

Areas where using this slot workflow is recommended include headers, main content, footers. Slots should be used within a container that has autolayout in order to dynamically fit its parent container*.

When using a component that contains slots within your own design file, create a local component that has the specific contents needed and replace the `_Slot` with an instance of the local component. 

![replacing the slot component](https://user-images.githubusercontent.com/10384315/137149864-84a32917-4a33-44a9-8079-b0485edfc537.png)

* Note: Due to certain bugs in Figma, if a `_Slot` is replaced and does not flex, the auto layout properties will need to be manually updated. 
