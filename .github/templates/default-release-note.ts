import type { Template } from './Template'

const hasStyleUpdate = (changes) => {
  return changes?.createdStyles?.length > 0 || changes?.modifiedStyles?.length > 0 || changes?.deletedStyles?.length > 0
}

const hasComponentUpdate = (changes) => {
  return changes?.createdComponents?.length > 0 || changes?.modifiedComponents?.length > 0 || changes?.deletedComponents?.length > 0
}

export const render: Template = ({ fileInfo, triggeredBy, description, changes }) => `
---
"${fileInfo.package}": minor
---

# Published ${new Date(fileInfo.timestamp).toLocaleDateString("en-US", {})  /*! transform to real data */}
by ${triggeredBy.handle}\
\
${description ?? ''}
\
${hasComponentUpdate(changes) ? `## Component updates` : ''}
\
${changes.createdComponents?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})

  ![Thumbnail for ${item.name}](${item.thumbnailUrl})
`).join("\n")}

${changes.modifiedComponents?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
  
  ![Thumbnail for ${item.name}](${item.thumbnailUrl})
`).join("\n")}

${changes.deletedComponents?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
`).join("\n")}
\
${hasStyleUpdate(changes) ? `## Style updates\` : ''}
${changes.createdStyles?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
`).join("\n")}

${changes.modifiedStyles?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
`).join("\n")}

${changes.deletedStyles?.map(item => `### [${item.name}](https://www.figma.com/file/${item.file_key}?node-id=${item.node_id})
`).join("\n")}
`