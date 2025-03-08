import { colorLog } from "essentials-utils";

import { addDependencies, addLintStaged, addScripts, makeQuestions, packageManager } from "./utils";

const main = async () => {
  console.log(colorLog("Welcome to the Huskylint installer!", { color: "green" }));
  console.log("");
  const { tools } = await makeQuestions();

  const message = await packageManager();
  await addLintStaged();

  console.log(colorLog("Installing dependencies...", { color: "green" }));
  await addDependencies(tools === "Yes", message);

  console.log(colorLog("Adding scripts...", { color: "green" }));
  await addScripts(tools);
  console.log("");

  console.log(colorLog("Done!", { color: "green" }));
};

main();
