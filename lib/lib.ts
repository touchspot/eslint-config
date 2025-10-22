import type * as EslintConfig from "eslint/config";

export type Config = EslintConfig.Config | EslintConfig.Config[] | readonly EslintConfig.Config[]; // eslint-disable-line functional/prefer-readonly-type

export { config as default } from "#pkg/config.js"; // eslint-disable-line import-x/no-default-export
export * as env from "#pkg/env.js";
