import { writeFileSync } from "fs";
import { exec } from "shelljs";

export const addScripts = async (
  isRequiredCommitlint: boolean,
  managerCommand: string,
) => {
  exec(`npm pkg set scripts.prepare="husky install"`);
  exec(`${managerCommand} prepare`);

  exec(`npx husky add .husky/pre-commit "npx --no-install lint-staged"`);

  if (isRequiredCommitlint) {
    exec(
      'npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"',
    );

    writeFileSync(
      "commitlint.config.js",
      `module.exports = {extends: ["@commitlint/config-conventional"]};\r\n`,
    );
  }
};
