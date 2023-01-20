import type { Template } from './Template'

export const render: Template = ({ fileInfo, triggeredBy, description, changes }) => `
---
"${fileInfo.package}": minor
---

# Published ${new Date(fileInfo.timestamp).toLocaleDateString("en-US", {})  /*! transform to real data */}
by ${triggeredBy.handle}

${description ?? ''}

## Component updates

${changes.createdComponents?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
  Created by ${item.lastModifiedBy.handle}  


  ![Thumbnail for ${item.name}](${item.thumbnailUrl})
`).join("\n")}

${changes.modifiedComponents?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
  Modified by ${item.lastModifiedBy.handle}  

  
  ![Thumbnail for ${item.name}](${item.thumbnailUrl})
`).join("\n")}

${changes.deletedComponents?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
  Removed by ${item.lastModifiedBy.handle}
`).join("\n")}

## Style updates
${changes.createdStyles?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
  Created by ${item.lastModifiedBy.handle}
`).join("\n")}

${changes.modifiedStyles?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
  Modified by ${item.lastModifiedBy.handle}
`).join("\n")}

${changes.deletedStyles?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
  Removed by ${item.lastModifiedBy.handle}
`).join("\n")}
`