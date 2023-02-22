import type { ComponentItemData, ComponentSetData, StyleItemData, Template } from './Template'

const hasStyleUpdate = (changes: {
  componentSets: ComponentSetData[];
  styles: StyleItemData[];
}) => changes?.styles?.length > 0

const hasComponentUpdate = (changes: {
  componentSets: ComponentSetData[];
  styles: StyleItemData[];
}) => changes?.componentSets?.length > 0

const renderName = (item: StyleItemData | ComponentItemData) => {
  if (item.state === 'deleted') {
    return `~${item.name}~ (${item.state})`
  }
  return `${item.name} (${item.state})`
}

export const render: Template = ({ fileInfo, triggeredBy, description, changes }) => `
---
"${fileInfo.package}": minor
---

Published ${new Date(fileInfo.timestamp).toLocaleDateString("en-GB", {})  /*! transform to real data */}  
by ${triggeredBy.handle}${"\n\n"}    
   
${`${description}   ` ?? ''}
   
${hasComponentUpdate(changes) ? `### Component updates` : ''}

${changes.componentSets?.map(item => `#### [**${item.setName}**](https://www.figma.com/file/${fileInfo.fileKey}?node-id=${item.setId})
   
${item.components?.map(component => `- [${renderName(component)}](https://www.figma.com/file/${component.file_key}?node-id=${component.node_id})  
![Thumbnail for ${component.name}](${component.thumbnailUrl})`).join("\n\n")}
`).join("\n")}

${hasStyleUpdate(changes) ? `### Style updates
` : ''}
${changes.styles?.map(item => `- [${renderName(item)}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
`).join("\n")}
`