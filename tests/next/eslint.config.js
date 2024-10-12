import config, { frameworks } from "@touchspot/eslint-config";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [...config(), ...frameworks.next()];
