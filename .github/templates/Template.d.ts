export type Template = (args: TemplateArguments) => string

export type TemplateArguments = {
  fileInfo: {
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
    createdStyles: LibraryItemData[];
    deletedStyles: LibraryItemData[];
    modifiedStyles: LibraryItemData[];
    createdComponents: LibraryItemData[];
    deletedComponents: LibraryItemData[];
    modifiedComponents: LibraryItemData[];
  };
}

export type LibraryItemData = {
  key: string
  name: string
}