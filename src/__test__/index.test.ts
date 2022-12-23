import { describe, it, expect } from "vitest";

import { packageManager } from "../utils";

describe("package tests", () => {
  it("package manager", async () => {
    expect(await packageManager()).toEqual({
      message: "yarn add",
      command: "yarn",
    });
  });
});
