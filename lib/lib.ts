import type * as EslintConfig from "eslint/config";
import type * as TsEslint from "typescript-eslint";

export type Config = EslintConfig.Config | TsEslint.FlatConfig.Config;
export type ConfigArray = Config | Config[] | readonly Config[]; // eslint-disable-line functional/prefer-readonly-type

export { config as default } from "#pkg/config.js"; // eslint-disable-line import-x/no-default-export
export * as env from "#pkg/env.js";
