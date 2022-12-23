import { readFileSync, writeFileSync } from "fs";

const packagePath = "./package.json";

export const addLintStaged = async () => {
  const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));

  packageJson["lint-staged"] = {
    "src/**/*.{js,ts,jsx,tsx}": [
      "prettier --write .",
      "eslint --ext js,ts . --fix",
    ],
  };

  const data = JSON.stringify(packageJson, null, 2);

  writeFileSync(packagePath, data);
};
