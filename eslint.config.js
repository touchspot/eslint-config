import config from "./dist/lib/lib.js";

/** @type {import("typescript-eslint").Config} */
export default [{ ignores: ["dist", "tests"] }, ...config()];
