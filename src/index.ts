import {
  addDependencies,
  addLintStaged,
  addScripts,
  colorLog,
  makeQuestions,
  packageManager,
  platformValidation,
} from "./utils";

const main = async () => {
  colorLog.green("Welcome to the Huskylint installer!");
  console.log("");
  const { tools } = await makeQuestions();

  const { message, command } = await packageManager();
  await addLintStaged();

  colorLog.green("Installing dependencies...");
  console.log("");
  await addDependencies(tools === "Yes", message);

  colorLog.green("Adding scripts...");
  console.log("");
  await addScripts(tools, command);
  await platformValidation();

  colorLog.green("Done!");
};

main();
