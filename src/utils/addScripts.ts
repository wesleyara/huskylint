import { execSync } from "child_process";
import { existsSync, writeFileSync } from "fs";

export const addScripts = async (isRequiredCommitlint: boolean) => {
  if (!existsSync(".git")) {
    execSync("git init");
  }

  execSync(`npx husky init`);
  execSync('echo "npx --no-install lint-staged" > .husky/pre-commit');

  if (isRequiredCommitlint) {
    execSync('echo "npx --no -- commitlint --edit \\$1" > .husky/commit-msg');

    writeFileSync(
      "commitlint.config.js",
      `module.exports = { extends: ["@commitlint/config-conventional"] };\r\n`,
    );
  }
};
