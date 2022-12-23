import { prompt } from "inquirer";

export const makeQuestions = async () => {
  const questions = [
    {
      type: "list",
      name: "tools",
      message: "Do you want to install Commitlint too?",
      choices: ["Yes", "No"],
      default: "Yes",
    },
  ];

  const answers = await prompt(questions);

  return answers;
};
