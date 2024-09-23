import type { TSESLint } from "@typescript-eslint/utils";

export { default } from "#pkg/config.js"; // eslint-disable-line import-x/no-default-export
export * as env from "#pkg/env.js";
export * as frameworks from "#pkg/frameworks.js";

export type FlatConfig = TSESLint.FlatConfig.ConfigFile;
