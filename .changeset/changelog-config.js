const getReleaseLine = async (
  changeset,
  _type
) => {
  const [...commitLines] = changeset.summary
    .split("\n")
    .map((l) => l.trimRight());

  let returnVal = ``;

  if (commitLines.length > 0) {
    returnVal += `\n${commitLines.map((l) => `  ${l}`).join("\n")}`;
  }

  return returnVal;
};

const getDependencyReleaseLine = async (
  changesets,
  dependenciesUpdated
) => {
  if (dependenciesUpdated.length === 0) return "";

  const changesetLinks = changesets.map(
    (changeset) =>
      `- Updated dependencies${
        changeset.commit ? ` [${changeset.commit}]` : ""
      }`
  );

  const updatedDependenciesList = dependenciesUpdated.map(
    (dependency) => `  - ${dependency.name}@${dependency.newVersion}`
  );

  return [...changesetLinks, ...updatedDependenciesList].join("\n");
};

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
