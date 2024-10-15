import type { TSESLint } from "@typescript-eslint/utils";

export { config as default } from "#pkg/config.js"; // eslint-disable-line import-x/no-default-export
export * as env from "#pkg/env.js";

export type FlatConfig = TSESLint.FlatConfig.ConfigFile;
