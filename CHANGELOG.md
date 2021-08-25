# Changelog

## August 25, 2021

### Primer Web

#### 🚀 Enhancement
![Example: Buttons with interactive prototyping](https://user-images.githubusercontent.com/10384315/130833227-4cca5072-63ee-4985-af16-d8b821f2425c.png)
- Buttons have interactive prototyping added. (🙏🏼 @vdepizzol)

![Example: ActionList item with hover and pressed states](https://user-images.githubusercontent.com/10384315/130876264-5d8cc77d-0831-4dff-af7c-0e9cc97cbdc5.gif)

- ActionList items (default) have interactive prototyping added. (🙏🏼 @vdepizzol)
- New section divider "overflow" property for ActionList (🙏🏼 @vdepizzol)

#### 🐛 Bug fixes
- Reordered default variant for Counter to be medium default and moved properties from counter to make "medium"  the default variant
- Some action list components were renamed to group section header and section dividers


## August 11, 2021

### Primer Web

[Figma link](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=142%3A595)

#### 🚀 Enhancement

![new global header logged out variant](https://user-images.githubusercontent.com/10384315/129090169-c22c6346-4fb8-4db8-bced-adda8a8ea205.png)
- New variant to the `Header` component to support logged out state. (🙏🏼 @ohjoycelau)

#### 🐛 Bug fixes

- Remove private `ActionList`-specific component from the published library (🙏🏼 @vdepizzol)
- Corrected `Tabnav` button alignment
- Changed default text for `Tabnav` button from "Default button" to "Button"
- Resized `filter-item` for documentation purposes. Has no effect on the component.


##### Contributors
- [@ashygee](https://github.com/ashygee)
- [@ohjoycelau](https://github.com/ohjoycelau)
- [@vdepizzol](https://github.com/vdepizzol)

## August 4, 2021

### Primer Web

[Figma link](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=142%3A595)

#### 🚀 Enhancement

**ActionList now available**

![ActionList components displayed in Primer Web](https://user-images.githubusercontent.com/10384315/128284679-05233a4b-0db4-424f-a0cc-d719bebc05e0.png)

@vdepizzol's [ActionList](https://primer.style/design/components/action-list) component is now available in [Primer Web](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=6%3A24956). They’re the foundation of menus, selection panels, and other overlay components.

The ActionList component features three different sizes, four different variations, and additional components for ActionList headers and dividers. Please note that this is still in its alpha stage and has only been implemented in [Primer React components](https://github.com/primer/react/blob/d3a463f3161049919861e72cbb891ac62e3a89c3/src/ActionList/Item.tsx).

https://user-images.githubusercontent.com/10384315/128286797-1c1aedde-2e4d-4373-9432-604180ddf41c.mp4

#### 🧽 Chores

- Library updates from Octicons


## June 2021


### Primer Interfaces

[Figma link](https://www.figma.com/file/Y2xJLFBrU7yyiDLlEkQXcF/Primer-Interfaces?node-id=2103%3A5523&viewport=-2953%2C542%2C1)

#### 🚀 Enhancement

![Select menus for Enterprise/Policies/Repositories.](https://user-images.githubusercontent.com/10384315/122585591-838c5b80-d010-11eb-97a4-92ee9a090fce.png)

- Enterprise templates added for Policies/Repositories select menus

![Enterprise audit log template with map and list of recent events
image.png ](https://user-images.githubusercontent.com/10384315/122585429-59d33480-d010-11eb-8490-360b73fe5273.png)

- Enterprise template for Settings/Audit log added (TY @asiermartinez)

### Primer Web

[Figma link](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=142%3A595)

#### 🚀 Enhancement

https://user-images.githubusercontent.com/10384315/122585307-38724880-d010-11eb-95d8-3e83daf4ff21.mp4

- Footer updates
  - Name layers
  - Fix autolayout for scaling
  - Footer improved to represent what users see
  - Removed “Report bug” property
  - Added ability to toggle between the default centered layout and full width (seen in Enterprise)
- Add Sidenav [subnav-items](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=8002%3A177)


#### 🐛 Bug fix
- Add missing "default" state to [outline labels](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=3813%3A3) (🙏 @nuthinking)

#### 🧽 Chores
- Octicons bump to v14.2.2
- Fixed color pairings where color was overridden by import

##### Contributors
- [@ashygee](https://github.com/ashygee)
- [@nuthinking](https://github.com/nuthinking)


### Octicons

[Figma link](https://www.figma.com/file/1ljgTFkT5NKNRfq5hw07JQ/Octicons?node-id=1%3A2)

#### 🚀 Enhancement
- Added new issue icons
- Added `key-asterisk`
- Added `sort-asc` and `sort-desc icons`

#### 🐛 Bug fix
- Reset colors to text-primary
- Correct rows and columns icon to correct vectors seen in code
- Corrected resizing constraints to be scale/scale for new icons

##### Contributors
- [@juliusschaeper](https://github.com/juliusschaeper)
- [@edokoa](https://github.com/edokoa)
- [@ashygee](https://github.com/ashygee)

### Primer Primitives

#### 🚀 Enhancement
- Color modes support for [dark dimmed theme](https://www.figma.com/file/3iBGLtSn36yU2XVoP4Pnfr/Primer-Primitives-Dark-dimmed)

## May 2021

### Primer Web

[Figma link](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=142%3A595)

**Major updates to form components**

![New form updates](https://user-images.githubusercontent.com/10384315/117332609-e5bc4300-ae4c-11eb-8efa-5565539dcd67.png)

All form components now use Figma's variants feature

![Example: Text input with it's properties of size, type, content, and icon](https://user-images.githubusercontent.com/10384315/117335302-dc80a580-ae4f-11eb-8043-ab5158a7973b.png)

Additional design guidelines added to showcase correct pairing for form group validation.

![Example: text input with variants](https://user-images.githubusercontent.com/10384315/117332810-2025e000-ae4d-11eb-8ee5-c4da4d015b17.png)

#### 🚀  Enhancement
- Improved Form components! All form components now use variants. 
- Text input
  - Now includes options for size, content type, variation type, option for leading icon
- Textarea
  - Removed unnecessary types
- Corrected coloring for Text input and Textarea
- Changed name of `Form group validation` to `Note`
- Added variant for emphasis to label on checkboxes and radio buttons
- Privatized text elements not necessary to component level
- Applied text styles to Text input
- Reorganized content on Form page
- Descriptions and documentation links added to components
- Toast property of `Size` changed to `Viewport` to reflect which breakpoint you would use a toast
- At small breakpoints the Toast has a max-width of 450px so the `Small screen` variant should be used
- Change autolayout configuration for Toasts
- At larger breakpoints the `Desktop` variant should be used
- Baked in margins have been corrected to use `$spacer-2/8px` for Desktop and `$spacer-3/16px` for smaller screens

#### 🧽  Chores
- Import color update from Primer Primitives
- Changed all variant uppercase property values to lowercase
- Component names are more readable.
 - Removed pascal or camel casing and use sentence case:
 - AvatarStack -> Avatar stack
 - repoNav -> Repo navigation
 - orgNav -> Org navigation

Note: none of these should be breaking changes but are to be more syntactically consistent for future component authoring.

##### Contributors
- [@ashygee](https://github.com/ashygee)

## April 2021

### Octicons

[Figma link](https://www.figma.com/file/1ljgTFkT5NKNRfq5hw07JQ/Octicons?node-id=31%3A80&viewport=376%2C10%2C1)

#### 🚀 Enhancements

![New icon set](https://user-images.githubusercontent.com/10384315/113764393-bb515b80-96cf-11eb-936e-840abe0d1d7f.png)

New icons added
- codescan
- codescan-checkmark
- codespaces
- dependabot
- browser
- table
- person-add
- blocked
- duplicate

#### 💥 Breaking changes

- Removed insights-24

#### 🐛 Bug fixes

- added "-24" suffix to 24px multi-select, number, strikethrough, and video icons.
- Normalized icon fill color to text/primary for kebab-horizontal, kebab-horizontal-24, and paper-airplane-24

##### Contributors
- [@ashygee](https://github.com/ashygee)
- [@edokoa](https://github.com/edokoa)
- [@juliusschaeper](https://github.com/juliusschaeper)

### Primer Web

[Figma link](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=136%3A1805)

#### 💥 Breaking change

![New select menu uses variants](https://user-images.githubusercontent.com/10384315/113360973-bcfdd680-92ff-11eb-88e9-2a79f447953a.gif)

- SelectMenu component enhancements
- Four new components have been created/iterated upon to enhance the usage of select menus (Menu items, Headers, Filter, Tabs)
- Each new component has related properties to quickly switch between different types.
- Interactive prototyping added to menu items and tabs
- Note: Select menus items with leading visuals (avatars and icons), counters and status indicators are still WIP

### 🚀 Enhancement

![Breadcrumb component now offers up to 10 items](https://user-images.githubusercontent.com/10384315/113361088-02220880-9300-11eb-84fd-3abd515359fe.png)

- Add variant property for breadcrumbs indicating # of items in breadcrumb (up to 10)
-  Add variant property to allow for bold text in breadcrumb-items

![Outline label component property dropdowns now have descriptive properties](https://user-images.githubusercontent.com/10384315/113361248-604eeb80-9300-11eb-8d5b-dea2fce8f852.gif)

- Cleaned up outline-label descriptions and property values to be more descriptive. (e.g. Label with color Info -> Info (blue))
- Add pixel sizes to label and counter variants

#### 🐛 Bug fix
- Combined Toast type indicators into one variant (For maintainers)
- Removed Toast type indicators from public library
- Rename Avatar / StackingCombination -> AvatarStack
- Select menu text layer name fixes to preserve overrides
- Corrected weird variant bug with swapping between default selected and unselected menu items that were swapping to hover state
- Corrected tab order for active tab sorting

#### 🧽 Chores
- Update light mode styles from Primer Primitives: Light mode

##### Contributors
- [@ashygee](https://github.com/ashygee)

## March 2021

### Primer Web

[Figma link](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=136%3A1805)

#### 🚀 Enhancement

**Note: These are 💥Breaking changes**
- The sideNav-item is refactored and now uses variants. 
  - Options for leading visual items (icon or avatar) and an optional auxiliary counter can now be toggled on/off from the inspector
  - Selected state can now be toggled on/off from the inspector
- The old sideNav-items have been removed
  - / text only
  - / textAvatar
  - / textCounter
  - / textIcon
  - / textLabel
  - / textStatus
  - / wHeading
- Improve Markdown comment
  - Added variants for size and hide/show title bar
  - Add version with title bar
- Remove unnecessary styling from Tip component
- repoNavigation now uses variants! Quickly swap the active tab in the navigation with the property dropdown.
- Org underline navigation is now a part of Primer Web! Swap the active tab using the variant property. Counters can be controlled individually at the tab level variants. 👏🏼 @pmarsceill!

#### 🐛 Bug fix

- Removed bg color from underlineNav-tab's
- Removed bg color from repoNavigation to fix the overlap with the component's bottom border.
- repoNav bg color, bg/secondary, is now set to the Repo Head (Pagehead + Footer)
- Corrected tab name for the Discussions tab in repoNavigation
- Fix Issues and Discussions tab selected text to be bold
- Correct positioning of Submit button in Markdown comment box (@brooklyno)
- Remove unnecessary background color in Markdown comment/Desktop (@brooklyno)
- Fix Button/primary/small/icon
- Swap Default for Header component to be Default variant instead of Simple
- Corrected issues icon in repoNav of Repo Head component
- correct new sideNav selected states

#### 🧪 Experimental

- Add interactive component feature to underlineNav-tab
- Refactored repoNavigation to use new underlineNav-tab with prototyping
- The sidenav-item now has the hover state built in

##### Contributors
- [@ashygee](https://github.com/ashygee)
- [@brooklyno](https://github.com/brooklyno)
- [@pmarsceill](https://github.com/pmarsceill)

## February 2021

### Primer Web

[Figma link](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=136%3A1805)

#### 🚀 Enhancement
- Added underlineNav tab for Discussions
- Updated repoNav component to now include Discussions

#### 🐛 Bug fix
- Remove Codespaces from main navigation and mobile main navigation
- Focus border added to input focus state. When Clip content is unchecked, the spread of a shadow effect no longer shows. The input focus now uses state/focus/shadow to enable the blue focus shadow. This closes [#4](https://github.com/primer/figma/issues/4)
- removed misc. search icons from the social count buttons
- color correction on Form control
- hid non-default layers in Subnav

## January 2021

### Primer Web

[Figma link](https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/?node-id=136%3A1805)


#### 🚀Enhancement

![Example showing an Avatar stack now includes properties for "Stackable" and "Square"](https://user-images.githubusercontent.com/10384315/106191020-2f670480-615f-11eb-8085-193dcccdb36d.png)

- Simplified avatars and added the property of "Stackable" which allows for the 20px stackable avatar to be enabled from the base Avatar component. 

![Having "Stackable" toggled on will force the icon to be 20px in size](https://user-images.githubusercontent.com/10384315/106191153-58879500-615f-11eb-8ca5-b03a5d0bcee0.png)
- Replaced Stackable avatar with modified Avatar component in "Stacking combination"
- Avatars now follow the same properties as seen in code. We have removed the difference between User vs Entity and have simplified to state if the avatar visually appears as a circle or a square using the variant property booleans. 

<img width="535" alt="Buttons have new properties for variants including toggles for leading icon, counter, and dropdown" src="https://user-images.githubusercontent.com/10384315/105261711-b8b97e00-5b44-11eb-87ae-20d9356741e0.png">

- Button variants have been improved to include toggles for the leading icon, counter, and dropdown
_Note: Currently icons don't correctly change color. This can be remidied for now with by resetting the icon and the button's correct icon color will appear but the icon will need to be swapped again._

![Fix icon bug by resetting the override to the icon layer and reswapping the icon](https://user-images.githubusercontent.com/10384315/105269878-9ece6a00-5b49-11eb-8de8-cd462cefc326.gif)

_Note: Descriptions are still supplied to denote correct avatar usage between the circle and square shapes._

#### 💥Breaking changes
- Removed Stackable avatar

#### 🐛Bug fix
- Avatar updates have been pushed to components that consume the Avatar
- Counters were updated to use the the new auto layout and the default size option has been changed to medium (@vdepizzol)
- Sponsor button has been fixed on Repohead component (@mkwng)
- List headers now properly use auto layout (@adrianmg)
- Components built using the Button component have been updated to use the latest button component

##### Contributors

- [@adrianmg](https://github.com/adrianmg)
- [@ashygee](https://github.com/ashygee)
- [@mkwng](https://github.com/mkwng)
- [@vdepizzol](https://github.com/vdepizzol)

### Primer Primitives

[Figma link](https://www.figma.com/file/B5XPE8IwGPIZDAvN7jqWqx/Primer-Primitives?version-id=625591668&node-id=0%3A1&viewport=243%2C186%2C0.5)

#### 🚀 Enhancement

Improvements to support new color modes in Primer. Read the [team post](https://github.com/orgs/github/teams/product-design/posts/52) for more detailed information on how we're handling color modes in Figma.

- Linked new color styles from Primer Primitives: Light mode library
- Removed old color styles
- Improved examples to showcase light/dark mode variations

## December 2020
### Primer Web
#### 🚀 Enhancement

#### Color modes

![example of color modes implementation in alert component showing all of the color values matching success alert variables](https://user-images.githubusercontent.com/10384315/101843649-88bb9b80-3aff-11eb-8ddc-72e19ac791eb.png)

Support for GitHub's new color modes has been implemented into the individual components to correspond to the functional color values supplied by [primer/primitives](https://github.com/primer/primitives).

To use be sure to turn on the [`Primer Primitives: light beta` library](https://www.figma.com/file/9vhDNyQpOono1vgi0qSViZ/Primer-Primitives-light-beta) as that is now the source of truth for all component color styling. 


#### Variants

![example of variants with the primary button showing all of the variant options in a dropdown](https://user-images.githubusercontent.com/10384315/101843779-d1735480-3aff-11eb-9d1d-526c5d23f11f.png)


Components have been updated to use the new variants feature in Figma. 

- Flash alerts
- Toasts
- Avatars
- Buttons
- Branch name
- Blankslate
- Breadcrumbs
- Contribution graph
- Cursors
- Forms
- Labels
- Markdown
- Navigation
- Pagehead
- Popovers
- Select menus
- Subhead
- Text contents

## November 2020

#### ✨New features

<img src="https://user-images.githubusercontent.com/10384315/99002751-ca9df580-24f1-11eb-808f-cfdb53e6137c.png" alt="form controls now utilize variant menus" width="500" />

Introducing variants to Primer Web! In this first update we've implemented the Figma variants feature into the following components:

- Alerts
- Avatars
- Branch name
- Breadcrumbs
- Contribution: activity squares
- Cursors
- Form components
- Labels

#### 🐛 Bug fixes
- Add disabled state to form controls (radio and checkboxes)
- Refactored form control to allow for [disabled versions of both selected/unselected radio and checkboxes](https://pxlc.at/post/ckhb64s1kfdbj0726bfk5gz3x)
- Fixed resizing and alignment for text placeholders
- Renamed and added descriptions for cursor variants to match CSS properties. Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
- Fix resizing for Markdown/Text editor
- Update breadcrumb spacing
- Update breadcrumb current page to be bold


## October 2020

### Primer Web

#### 🐛 Bug fixes

- Restructure avatar organization
- Formatting and organization of cursors, markdown toolbar components, and form controls
- Added autolayout to Repo sidedbar/Contributor 🙏 @mkwng
- Octicons bump: Icons can now be swapped and retain fill color
- Fixed Issue closed state labels to use the correct issue-closed icon
- Fixed Issue closed state labels to use the correct issue-closed icon

#### 🧪 Experiments

<img src="https://user-images.githubusercontent.com/10384315/99000097-9c1e1b80-24ed-11eb-8b2c-656d4b9fbf5f.png" alt="alerts and toast now utilize variant menus" width="500" />

- Alerts are now reconfigured to use Variants!
  - Flash alerts now have properties to choose type and with the option for CTA buttons to be hidden or shown
  - Toasts now have properties to select size and state

<img src="https://user-images.githubusercontent.com/10384315/99000320-ec957900-24ed-11eb-9c9c-51f5aea2123a.png" alt="branch name components now use Figma variants to choose options for type and enabling icons" width="250" />

- Branch name now reconfigured to use Variants!
  - Select type of (default or link) and toggle the branch icon on/off

#### 🗑Removed:
- 16px Avatar stack components have been removed as they are not a part of the system in code

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@mkwng](https://github.com/mkwng)

### Primer Primitives

#### 🐛 Bug fixes

- Removed "00" suffix to match primer/primitives sass file

##### Contributors

- [@ashygee](https://github.com/ashygee)

### Primer Interfaces

#### 🧪 Experiments

- Issue detail page

## September 2020

### Primer Web

#### 🚀 Enhancement

- Usage notes for primary button groups
- Primary button groups/split buttons to the buttons page
- Blankslate components
  - modify `blankslates` to use new components and stylings
  - Updating `blankslate` to use primitives styles and refresh web components
- Template components for Dashboard items
- Added `muted-link` component
- Added `btn-invisible` buttons
- Pull request
  - PR rows
- Repo
  - Sidebar components
- Issues
  - Row components
  - List components
- Avatar stack - 20px
- Subnav search items

#### 🐛 Bug fixes

- Fixed text resizing for medium dark gray outline label
- Restored text-red to components using the style
- Improve button description metadata to add sizing and change btn to btn-secondary
- Re-added in orange variant of label-outlined component
- Added CSS class names and React component name to label descriptions
- Add positioning keywords to button groups
- Add CSS button size classes to Buttons
- Added missing CSS classes to button components
- moved markdown comment box templates to markdown page
- updated naming and description for button groups to define `CSS: BtnGroup-item` and `React: ButtonGroup`
- Added updated title/docs links to every page
- Changed the h1 in breadcrumbs to breadcrumbs instead of branch name
- Corrected `Pagehead/basic` typo (thx [@thedamianhdez](https://github.com/thedamianhdez))
- Renamed `btnGroup` to `btn-group` to be in line with CSS class name
- Removed old blankslate variants
- Corrected main nav height. Originally was too tall (thank you [@brooklyno](https://github.com/brooklyno))
- Rearrange navbar links
- Fixed L/R padding on navbar to match dotcom
- Simplify social button naming
- add GitHub data fields to box list components
- Rename and move lists for issues and PRs to Box page
- Modified 16px avatar stack
- Clean up borders used in effects

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@auareyou](https://github.com/auareyou)
- [@brooklyno](https://github.com/brooklyno)
- [@thedamianhdez](https://github.com/thedamianhdez)

<hr>

### Primer Primitives

#### 🐛 Bug fixes

- Corrected character spacing to be same as browser
- Added hex values to color scale

##### Contributors

- [@ashygee](https://github.com/ashygee)

<hr>

### Primer Interfaces

#### 🚀 Enhancement

- [Dashboard template](https://www.figma.com/file/Y2xJLFBrU7yyiDLlEkQXcF/?node-id=1802%3A19) now available
- [Repo - Code/File Viewer] template now available (🙇 [@mkwng](https://github.com/mkwng))
- [Repo - Issue list view](https://www.figma.com/file/Y2xJLFBrU7yyiDLlEkQXcF/Primer-Interfaces?node-id=1748%3A2162) template now available
- [Repo - Pull request list view](https://www.figma.com/file/Y2xJLFBrU7yyiDLlEkQXcF/Primer-Interfaces?node-id=1760%3A3290) template now available

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@mkwng](https://github.com/mkwng)

<hr>

### Octicons

#### 🌐 Community release

- Published to Figma community (September 10, 2020)

#### 🐛 Bug fixes

- Fixed color style for file badge (000000 to \$gray-dark)
- Change `lightbulb` icon to be consistent with [primer.style/octicons](https://primer.style/octicons)

##### Contributors

- [@edokoa](https://github.com/edokoa)

## August 2020

### Primer Web

#### 🚀 Enhancement

- Label/diffstat
  - diffstat squares (addition, deletion, neutral)
  - diffstat color styles
- Add tab nav component to select menu
- Add labels to select menu
- Add separate comment box component
- Markdown desktop components

#### 🐛 Bug fixes

- Simplify label naming and add descriptions
- Remove purple and orange labels (deprecated)
- Reorganize buttons
- Restore repohead
- Fix broken icon in unselected tab (🙇🏻‍♂️ [@califa](https://github.com/califa))
- Fix broken tab icon
- Add counters to TabNav (🙇🏻‍♂️ [@califa](https://github.com/califa))
- Create main components to hold tab states for repo navigation
- Fix repohead for reponame to use autolayout
- Fix positioning for sideNav accessories
- Fix sideNav-item with counter now has counter pinned to the right.
- Layer naming updates
- Improved layer naming conventions
- Added background back to large outline button (🙇🏻‍♂️ [@auareyou](https://github.com/auareyou))
- Fix tooltip pointer color
- Fix markdown text area

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@auareyou](https://github.com/auareyou)
- [@califa](https://github.com/califa)
-

<hr>

### Primer Primitives

#### 🌐 Community release

- Published to Figma community (August 31, 2020)

#### 🚀 Enhancement

- Added hex values to color scale
- Added source reference to color utilities
  - (e.g. "Text/text-blue = Source: blue-500")

##### Contributors

- [@ashygee](https://github.com/ashygee)

<hr>

### Primer Interfaces

#### ✨ Introducing Primer Interfaces

Primer Interfaces is a new template library containing templates and design "snippets" for UI commonly seen across GitHub.com. For its first release we have the following available:

**Common UI patterns**

- [Feature onboarding](https://www.figma.com/file/Y2xJLFBrU7yyiDLlEkQXcF/?node-id=2%3A2) (🙇 [@dthoma1](https://github.com/dthoma1), [@ohjoycelau](https://github.com/ohjoycelau), [@sezhan1229](https://github.com/sezhan1229))
  - UI patterns commonly used to introduce new features to our users. Design guidelines for these patterns are available on [https://primer.style/design](https://primer.style/design/).

**Feature templates**

- [Repo - Home (Code)](https://www.figma.com/file/Y2xJLFBrU7yyiDLlEkQXcF/Primer-Interfaces?node-id=284%3A1081) template (🙇 [@mkwng](https://github.com/mkwng))

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@dthoma1](https://github.com/dthoma1)
- [@mkwng](https://github.com/mkwng)
- [@ohjoycelau](https://github.com/ohjoycelau)
- [@sezhan1229](https://github.com/sezhan1229)

## July 2020

### Primer Web

#### 🚀 Enhancement

- Markdown support label to markdown desktop components
- Primary button styled button group available
- Added `IssuePinned` (naming subject to change)
- Added `kbd` component for markdown formatting
- Added markdown `comment` component
- Added `Tip` components
- Added markdown `textarea` component
- Added `TabNav` component

#### 🐛 Bug fixes

- Fixed pop over triangle stroke
- Update full desktop component to use new comment box
- Removed stretch from button default.
  - _Usage note_: Please press stretch when making a block button.
- Updated text to green from change in primitives (🙇🏻‍♂️ [@auareyou](https://github.com/auareyou))
- Fixed navbar constraints and pinned to right (🙇🏻‍♂️ [@auareyou](https://github.com/auareyou))
- fix horizontal resizing for gray buttons
- modify right dropdown arrows for button groups
- removed icon instances in select-icon
- Fixed textArea an removed auto layout
- Updated `Avatar` descriptions to include "Avatar:" for search filtering
- Paired toast text color to what is in production (using black)

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@auareyou](https://github.com/auareyou)

<hr>

### Primer Primitives

#### 🐛 Bug fixes

- Updated `.text-green` from `green-500` to `green-600` to match component refresh fixes.

##### Contributors

- [@auareyou](https://github.com/auareyou)

<hr>

### Octicons

#### 🌐 Community release

- Published to Figma community (June 15, 2020)

#### 🚀 Enhancement

- Added `policy-16` icon for policies feature
- Added `share` icon to match symbol for iOS

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@edokoa](https://github.com/edokoa)

## June 2020

### Primer Web

#### 🌐 Community release

- Published to Figma community (June 26, 2020)

#### 🚀 Enhancement

- Introducing 🍞 Toasts!
  - New `toast` components added
- You can now search for labels with `label: [term]`
- Links to Primer CSS and Primer React documentation added to headers for component pages
- Add new button group stylings for middle button strokes
- Added markdown toolbars and markdown toolbar subcomponents
  - There are now two version, the full bar for desktop and the responsive bar which includes the type formatting dropdown
- Added pagination navbar
- Added `branch name` component
- Mobile navbar updated
  - Resized search bar on `navbar/mobile`
  - Added expanded nav
- Added `sideNav` component
- Added `Button with Counter` component
- Added repo header navigation
- Added `Subheading` components
- Added `select menu` forms
- Added `tooltip` components

#### 🐛 Bug fixes

- Update middle button group strokes to use `border-15%`
- Removed `border-12%` and replaced with `border-15%`
- `flash-banner` description updated
- Updated dropdown `caret-down` octicon in text components
- Push primitive: `text-mono` update
- Add more search filter descriptions: `nav`, `pagehead`, `subhead`
- Updated descriptions for labels for new search filtering
- Updated `link-tag` labels
- Autolayout fixed in labels
- Swapped vectors to use octicons in `select` icon
- Fixed form validation tooltips
- Fixed skewed form controls
- Imported in octicons updated with new search descriptions
- reorganized private styles
- updated sidenav to use border-top instead of bottom
- added descriptions to sidenav, text contents, and breadcrumbs
- updated component descriptions for avatars
- removed incomplete box components to working file
- Fixed `navbar/default` to pair with dotcom
  - Updated icons to use 16px icons
- Review and pushed Primer Primitive updates and also `caret` octicon changes
- Removed `socialCount` component
- Moved `box-shadow` to Box page
- Added `btnStroke` style for top and bottom border on `btnWithCount`
- renamed `verticalNav-XXX` to `menu-XXX`
- Modified flash to stretch manually and removed autolayout
- Renamed `btnGroup/default/small/left`
  - Note: we need to shorten these names/groupings
- GitHub Data plugin compatibility update
  - remove `__owner.avatar_url` to make more accessible for orgs.
  - documented to use `__owner.avatar_url` for repos
  - update avatar components to be flexible for github data plugin
    - updated entity avatars to `use __owner.avatar_url`
- Refactored `flash-full` and `flash-banner`
  - Added autolayout to `flash-banner`
- Replaced missing border style for buttons

#### 🚧 In progress

- Started adding `box` components and refreshing visuals from legacy styling
- Started adding in dropdown components

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@auareyou](https://github.com/auareyou)

<hr>

### Primer Primitives

#### 🌐 Community release

- Published to Figma community (June 26, 2020)

#### 🐛 Bug fixes

- Added description to type styles
  - `text-blue` usage for text links
  - `text-gray-dark` usage for body text
  - `text-red` usage for danger text
- Re-ordered text color styles to put more commonly used styles first
- Update letter spacing for `text-mono`
- Add markdown keywords to `link`, `code`, and `tasklist`

##### Contributors

- [@ashygee](https://github.com/ashygee)

<hr>

### Octicons

#### 🌐 Community release

- Published to Figma community (June 15, 2020)

#### 🚀 Enhancement

- Added keywords to octicons
  - Changed description "keyword:" to "icon:" for better filtering
- New icons added:
  - `square`
  - `square-fill`
  - `squirrel`
  - `meter`
  - `paintbrush`
  - `report`
  - `sun`
  - `moon`
  - `sun-24`
  - `moon-24`
  - `ruby`
  - `zap`
  - `briefcase`
  - `circle` icons
  - `ellipsis`
  - `squirrel`
  - `meter`
  - `paintbrush`

#### 🐛 Bug fixes

- Added descriptions to `carets` and `north-star`
- Fixed `dash` and `plus` alignment
- Modified `stopwatch-24`
- Added "collapse" to `chevron` icons description to indicate use for progressive disclosure
- Adjust caret-down to match dev vertical alignment
- Renamed `caret-[direction]` icons to `triangle-[direction]` to follow naming in production

#### 🚧 WIP

- Start modifying `octoface` to new refresh version

##### Contributors

- [@ashygee](https://github.com/ashygee)

## May 2020

### Primer Web

#### 🚀 Enhancement

- Added `textValue` layers to text are components
  - Note: `textArea/disabled` contains no `textValue` layer)
- Added `popover` component
- Added `.text-box-white`, `.text-box-large-white`, and `.text-box-small-white` components to private sheet and swapped text-box instances in buttons.
  - This should eliminate weirdness with colors for buttons that have white text.

#### 🐛 Bug fixes

- Swapped color and type styles to use Primer Primitives library
- Polished form validation tooltip components
- Renamed form validation tooltip layer
- Changed color names to be more semantic
- Updated `svg`'s to use new [Octicons](https://www.figma.com/community/file/809920999413919915/Octicons---GitHub's-icon-set)
- Updated `.dropdown-caret` fill to be `text-gray-dark`
- Provided placeholder text options for text areas
- Polished inputs
- Updated `bg-counter` color style to now use `gray-300` at 50%
- Fix radio and checkbox inputs to use auto layout
- Modified style names for borders
  - Will move to primitives once fully defined
- Updated select menu hover to use `bg/hover-gray`

**Buttons**

- Fixed button constraints to be used for block buttons
- Fixed styles for selected state on default button and created a style for it.
- Fixed default and primary buttons to auto-size with text.
  - Note: For block buttons please click into the button and change from center to stretch.
- Fixed outline and danger buttons to auto-size with text.
  - Note: for block buttons please click into the button and change from center to stretch.
- Fixed dropdown carets on buttons

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@auareyou](https://github.com/auareyou)
- [@vdepizzol](http://github.com/vdepizzol)

<hr>

### Primer Primitives

### 🚀 Enhancement

- Added `border-white`
- Added `coral` accent to color system

### 🐛 Bug fixes

- Removed descriptions on background colors as it cluttered tooltip in color selection
- moved the text color styles to the top of the list, so it's easier to reach (🙇🏻‍♂️ [@vdepizzol](https://github.com/vdepizzol))

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@vdepizzol](http://github.com/vdepizzol)

### Octicons

#### 🌐 Community release

- Published to Figma community (May 4, 2020)

#### 🚀 Enhancement

#### 🐛 Bug fixes

- Changed base color for octicons from `#000` to Primer Primitives color style `text-gray-dark` to match body text color
- Renamed 16px `triangle` icons to `caret` for parity with 24px
- Flattened `grabber` icon
- Moved `link` to "Symbols" to be paired next to `link-external`

##### Contributors

- [@ashygee](https://github.com/ashygee)

## April 2020

### Primer Web

#### ✨ Introducing Primer Web

Primer Web is now available internally to our GitHub team. This is a full component library of all of the refreshed UI components seen in GitHub's desktop experience. These components are also available for implementation using Primer's [CSS](https://primer.style/css) and [React component](https://primer.style/components) packages.

This is an ongoing project and more components will become available in the future.

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@auareyou](https://github.com/auareyou)
- [@vdepizzol](http://github.com/vdepizzol)

<hr>

### Primer Primitives

#### ✨ Introducing Primer Primitives

Primer Primitives is now available internally to our GitHub team. This is file contains all of the color, type, and layout styles used in Primer CSS's utility classes. For more information please refer to our Primer [CSS](https://primer.style/css) documentation.

This is an ongoing project and updates to our styles will be available as we continue to iterate on the design of GitHub.

##### Contributors

- [@ashygee](https://github.com/ashygee)

<hr>

### Octicons

#### 🌐 Community release

- Published to Figma community (April 29, 2020)

#### 🚀 Enhancement

- All icons now have their constraints set to "Scale"

#### 🐛 Bug fixes

- Removed grids from icon library
- Removed 16px and 24px `vertical-kebab`

##### Contributors

- [@ashygee](https://github.com/ashygee)

## March 2020

### Octicons

#### 🌐 Community release

- Published to Figma community (March 16, 2020)

#### 🚀 Enhancement

- Introducing 24px icons
  - Octicons are now available in both 16px and 24px sizes

#### 🐛 Bug fixes

- Updated `grabber` icon
- Updated `terminal-24` to rectangular shape
- added new arrows to complete both 16px and 24px parity
- corrected 16px arrow component name
- fixed 24px arrow swapping
- swapped people/person for 24px back to normal

##### Contributors

- [@ashygee](https://github.com/ashygee)

## February 2020

### Octicons

#### ✨ Introducing a new look for Octicons

The Primer team has been busy developing a new look for Octicons, GitHub's icon set! Here is a sneak preview with more to come in the near future. This project is a work in progress, stay tuned for more updates!

For more details about this project visit https://github.com/primer/octicons-v2

To see the icons in action, download the GitHub Mobile app for iOS or Android. https://github.com/mobile

##### Contributors

- [@ashygee](https://github.com/ashygee)
- [@colebemis](https://github.com/colebemis)
- [@edokoa](https://github.com/edokoa)
