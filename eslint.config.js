import config from "@touchspot/eslint-config";
import react from "@touchspot/eslint-config/presets/react";

/** @type {import("typescript-eslint").Config} */
export default [{ ignores: ["dist", "tests"] }, ...config({ tsconfigRootDir: import.meta.dirname }), ...react()];
