import {
  NewChangesetWithCommit,
  VersionType,
  ChangelogFunctions,
  ModCompWithPackage,
} from "@changesets/types";

const getReleaseLine = async (
  changeset: NewChangesetWithCommit,
  _type: VersionType
) => changeset.summary

const getDependencyReleaseLine = async (
  changesets: NewChangesetWithCommit[],
  dependenciesUpdated: ModCompWithPackage[]
) => {
  if (dependenciesUpdated.length === 0) return "";

  const changesetLinks = changesets.map(
    (changeset) =>
      `- Updated dependencies${changeset.commit ? ` [${changeset.commit}]` : ""
      }`
  );

  const updatedDependenciesList = dependenciesUpdated.map(
    (dependency) => `  - ${dependency.name}@${dependency.newVersion}`
  );

  return [...changesetLinks, ...updatedDependenciesList].join("\n");
};

const defaultChangelogFunctions: ChangelogFunctions = {
  getReleaseLine,
  getDependencyReleaseLine,
};

export default defaultChangelogFunctions;