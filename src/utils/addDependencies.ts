import { exec } from "shelljs";
import { delay } from "utils-react";

import { IDependencies } from "../@types";
import { commitlintDependencies, huskyDependencies, lintStagedDependencies } from "./constants";

export const addDependencies = async (isRequiredCommitlint: boolean, managerMessage: string) => {
  const dependenciesObject: IDependencies = {
    dependencies: [],
    dev_dependencies: [],
  };

  dependenciesObject.dev_dependencies.push(...huskyDependencies, ...lintStagedDependencies);

  if (isRequiredCommitlint) {
    dependenciesObject.dev_dependencies.push(...commitlintDependencies);
  }

  const dependencies = dependenciesObject.dev_dependencies.join(" ");
  const addMessage = `${managerMessage} ${dependencies} -D`;

  await delay(1000);
  exec(addMessage);
};
