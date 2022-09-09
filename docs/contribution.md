# We love contributions to figma/primer

If you find a bug or issue, feel free to leave a comment in Figma and mention @ashygee.

If you want to add a new component it is best to first [create an issue](https://github.com/primer/figma/issues/new) to discuss any overlap with the maintainers.

## Adding or updating components

When updating componenents it is best to [create a new branch in Figma](https://www.youtube.com/watch?v=tbNCGEC2G1E) with your changes. 
In most cases you will need to create a branch on [Primer Web](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=136%3A1805).

Before requesting a review from @ashygee, make sure that you have taken care of all the points below:

## Component checklist

- [ ] Changes to the component API (props, variants, etc.) are reflected in the documentation sheet
- [ ] Properties are sorted in sensible order
- [ ] When adding a component the default variant is used
- [ ] Changes are [accessible](https://primer.style/design/accessibility/guidelines)
- [ ] Properties and behavior is as close to code as possible
- [ ] All layers are named and don't use defaults (e.g. no `Frame 23`)

#### Only when adding new components

- [ ] Component name matches the name used for the code component but uses [`PascalCase`](https://techterms.com/definition/pascalcase) (see ["Spelling of component names"](https://github.com/github/primer/blob/main/adrs/2022-02-15-spelling-of-component-names.md#consequences))
- [ ] Component is added to the [overview page](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4398%3A2354)
- [ ] Component is in light mode
- [ ] Component uses [primitives](https://primer.style/design/foundations/color) by using styles from `Primer Primitives` Figma library
- [ ] Properties are designed according to [property guidelines](https://github.com/primer/figma/blob/main/docs/authoring-components.md#writing-properties)
- [ ] The component adheres to the [authoring components guidelines](https://github.com/primer/figma/blob/main/docs/authoring-components.md#authoring-components-in-figma)