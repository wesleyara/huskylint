import { existsSync, writeFileSync } from "fs";
import { exec } from "shelljs";

export const addScripts = async (isRequiredCommitlint: boolean) => {
  if (!existsSync(".git")) {
    exec("git init");
  }

  exec(`npx husky init`);
  exec(`npx husky add .husky/pre-commit "npx --no-install lint-staged"`);

  if (isRequiredCommitlint) {
    exec('npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"');

    writeFileSync(
      "commitlint.config.js",
      `module.exports = { extends: ["@commitlint/config-conventional"] };\r\n`,
    );
  }
};
