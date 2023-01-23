import fs from "fs";
import path from "path";
const { Octokit } = require("@octokit/action");
import * as github from "@actions/github";
import unified from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
// @ts-ignore
import mdastToString from "mdast-util-to-string";
import type { Package } from "@manypkg/get-packages";

import { name, version } from "../../package.json";

export const BumpLevels = {
  dep: 0,
  patch: 1,
  minor: 2,
  major: 3,
} as const;

export function getChangelogEntry(changelog: string, version: string) {
  let ast: any = unified().use(remarkParse).parse(changelog);

  let highestLevel: number = BumpLevels.dep;

  let nodes = ast.children as Array<any>;
  let headingStartInfo:
    | {
        index: number;
        depth: number;
      }
    | undefined;
  let endIndex: number | undefined;

  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node.type === "heading") {
      let stringified: string = mdastToString(node);
      let match = stringified.toLowerCase().match(/(major|minor|patch)/);
      if (match !== null) {
        let level = BumpLevels[match[0] as "major" | "minor" | "patch"];
        highestLevel = Math.max(level, highestLevel);
      }
      if (headingStartInfo === undefined && stringified === version) {
        headingStartInfo = {
          index: i,
          depth: node.depth,
        };
        continue;
      }
      if (
        endIndex === undefined &&
        headingStartInfo !== undefined &&
        headingStartInfo.depth === node.depth
      ) {
        endIndex = i;
        break;
      }
    }
  }
  if (headingStartInfo) {
    ast.children = (ast.children as any).slice(
      headingStartInfo.index, // prev +1
      endIndex
    );
  }
  return {
    content: unified().use(remarkStringify).stringify(ast),
    highestLevel: highestLevel,
  };
}

const createRelease = async (
  octokit: ReturnType<typeof github.getOctokit>,
  { pkg, tagName }: { pkg: Package; tagName: string }
) => {
  try {
    let changelogFileName = path.join(pkg.dir, "CHANGELOG.md");

    await fs.readFile(changelogFileName, "utf8", async (error, changelog) => {
      if (changelog) {
        if (typeof changelog === "string") {
          let changelogEntry = getChangelogEntry(
            changelog,
            pkg.packageJson.version
          );
          if (!changelogEntry) {
            throw new Error(
              `Could not find changelog entry for ${pkg.packageJson.name}@${pkg.packageJson.version}`
            );
          }
          try {
            const { owner, repo } = github.context.repo;
            await octokit.rest.git.getRef({
              owner,
              repo,
              ref: `tags/${tagName}`,
            });
          } catch (error: any) {
            if (error.status === 404) {
              console.log(`Tag ${tagName} does not exist`);
              await octokit.rest.repos.createRelease({
                name: tagName,
                tag_name: tagName,
                body: changelogEntry.content,
                prerelease: pkg.packageJson.version.includes("-"),
                ...github.context.repo,
              });
            }
          }
        }
      }
    });
  } catch (err: any) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }
};

const octokit = new Octokit();

const pkg = {
  packageJson: {
    name,
    version,
  },
  dir: path.join(__dirname, "../../"),
};

createRelease(octokit, {
  pkg,
  tagName: `${pkg.packageJson.name}@${pkg.packageJson.version}`,
});
