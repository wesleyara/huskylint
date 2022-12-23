import { existsSync } from "fs";

export const packageManager = async () => {
  const manager = {
    message: "",
    command: "",
  };

  if (existsSync("yarn.lock")) {
    manager.message = "yarn add";
    manager.command = "yarn";
  } else {
    manager.message = "npm install";
    manager.command = "npm run";
  }

  return manager;
};
