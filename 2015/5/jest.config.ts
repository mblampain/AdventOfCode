import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    verbose: true,
    testMatch: ["**/index.test.ts"],
    testEnvironment: "node",
  };
};
