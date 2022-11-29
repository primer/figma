# We love contributions

We're thrilled that you want to contribute to this primer/figma. Your help is essential for keeping it great.

If you need support with your contribution, please reach out via [#primer-figma](https://github.slack.com/archives/C049REXSRBQ).

This repository contains the following Figma libraries:
- [Primer Web](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web)
- [Primer Brand](https://www.figma.com/file/BJ95AjraesmRCWsKA013GS/Primer-Brand)

## Bug reports
If you find a bug in any of the libraries that are part of primer/figma please create a detailed [bug report](https://github.com/primer/figma/issues/new?assignees=&labels=bug%2Ctriage&template=bug.yml&title=%5BBug%5D%3A+).

**Guidelines for bug reports:**

1. Use the issue search to check if the issue has already been reported.

1. Check that you have updated to the latest Figma library release.

2. Use our [issue template](https://github.com/primer/figma/issues/new?assignees=&labels=bug%2Ctriage&template=bug.yml&title=%5BBug%5D%3A+) to help you report bugs

## Contribute new components or updates

Good contributions are a fantastic help. Make sure to keep [pull requests](https://help.figma.com/hc/en-us/articles/360063144053-Guide-to-branching) focused in scope and avoid changes unrelated to the problem or component you're adding.

If you want to change or add multiple things, create multiple branches to send multiple pull requests.

Please [create an issue](https://github.com/primer/figma/issues/new) discussing your intended change before embarking on any significant pull request (e.g., adding a new component or changing existing components in significant ways); otherwise, you risk spending a lot of time working on something that we might not be able to merge into the libraries.

**Guidelines for contributions:**

1. If it's a bigger change, [create an issue](https://github.com/primer/figma/issues/new) to discuss it first

1. Create a [new branch in figma](https://www.youtube.com/watch?v=tbNCGEC2G1E)

1. Make your changes in the new branch

1. Make sure your changes fulfil the requirements from the [checklist](#component-checklist)

2. If you created an issue, add a comment mentioning that the PR is ready for review.

3. Assign the DRI from the table below to review and merge your branch

Figma library | DRI
--- | ---
[Primer Web](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web) | @lukasoppermann
[Primer Brand](https://www.figma.com/file/BJ95AjraesmRCWsKA013GS/Primer-Brand) | @danielguillan

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