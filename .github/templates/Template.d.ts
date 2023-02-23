export type Template = (args: TemplateArguments) => string

export type TemplateArguments = {
  fileInfo: {
    package: string,
    fileKey: string;
    fileName: string;
    timestamp: number;
  };
  description: string;
  triggeredBy: {
    id: string;
    handle: string;
  };
  changes: {
    componentSets: ComponentSetData[];
    styles: StyleItemData[];
  };
}

export type ComponentSetData = {
  setId: string,
  setName: string,
  components: ComponentItemData[]
}

export type GenericItemData = {
  key: string
  file_key: string
  state: "created" | "modified" | "deleted",
  name: string
  thumbnailUrl: string
  node_id: string
  description: string
  lastModifiedBy: {
    id: string,
    handle: string,
    img_url: string
  },
}

export type ComponentItemData = GenericItemData & {
  setName: string
  setId: string
}
export type StyleItemData = GenericItemData & {
  style_type: string
}