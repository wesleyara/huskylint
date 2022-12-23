import chalk from "chalk";

export const colorLog = {
  green: (message: string) => {
    console.log(chalk.green(message));
  },
  red: (message: string) => {
    console.log(chalk.red(message));
  },
  yellow: (message: string) => {
    console.log(chalk.yellow(message));
  },
  blue: (message: string) => {
    console.log(chalk.blue(message));
  },
  magenta: (message: string) => {
    console.log(chalk.magenta(message));
  },
  cyan: (message: string) => {
    console.log(chalk.cyan(message));
  },
  white: (message: string) => {
    console.log(chalk.white(message));
  },
};
