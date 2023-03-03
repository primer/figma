import { readFileSync, writeFileSync } from 'fs';
import { packages } from '../config/packages'
import { v4 as uuidv4 } from 'uuid';

const createChangeset = async () => {
  const figmaJson = readFileSync('./temp-api-response.json')
  const parsedJson = JSON.parse(figmaJson.toString())

  const packageData = packages[parsedJson.fileInfo.fileKey]

  if (packageData === undefined) {
    console.error(`No package data defined for library with key: ${parsedJson.fileInfo.fileKey}`)
    return
  }
  // get template
  const { render } = await import(`../templates/${packageData.template || 'default-release-note'}`)
  // add package name to json
  parsedJson.fileInfo.package = packageData.name 
  // build changeset
  const changeset = render(parsedJson).replace(/\n{2,}/g, "\n")
  writeFileSync(`.changeset/${parsedJson.fileInfo.fileName}-${uuidv4()}.md`, changeset)
}

createChangeset()