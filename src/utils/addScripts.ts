import { execSync } from "child_process";
import { existsSync, writeFileSync } from "fs";

export const addScripts = async (isRequiredCommitlint: boolean) => {
  if (!existsSync(".git")) {
    execSync("git init");
  }

  execSync(`npx husky init`, { stdio: "inherit" });
  execSync('echo "npx --no-install lint-staged" > .husky/pre-commit', { stdio: "inherit" });

  if (isRequiredCommitlint) {
    execSync('echo "npx --no -- commitlint --edit \\$1" > .husky/commit-msg', { stdio: "inherit" });

    writeFileSync(
      "commitlint.config.js",
      `module.exports = { extends: ["@commitlint/config-conventional"] };\r\n`,
    );
  }

  console.log("Scripts added successfully!");
};
