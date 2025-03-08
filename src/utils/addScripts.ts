import { existsSync, writeFileSync } from "fs";
import { exec } from "shelljs";

export const addScripts = async (isRequiredCommitlint: boolean) => {
  if (!existsSync(".git")) {
    exec("git init");
  }

  exec(`npx husky init`);
  exec('echo "npx --no-install lint-staged" > .husky/pre-commit');

  if (isRequiredCommitlint) {
    exec('echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg');

    writeFileSync(
      "commitlint.config.js",
      `module.exports = { extends: ["@commitlint/config-conventional"] };\r\n`,
    );
  }
};
