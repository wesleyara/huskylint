import { platform } from "os";
import { exec } from "shelljs";

export const platformValidation = async () => {
  const currentPlatform = platform();

  if (currentPlatform === "linux") {
    exec("chmod +x .husky/*");
  }
};
