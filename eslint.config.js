import config from "./dist/lib/lib.js";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [{ ignores: ["dist", "tests"] }, ...config()];
