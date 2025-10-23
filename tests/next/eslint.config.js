import config from "@touchspot/eslint-config";
import next from "@touchspot/eslint-config/presets/next";

/** @type {import("@touchspot/eslint-config").ConfigArray} */
export default [...config({ tsconfigRootDir: import.meta.dirname }), ...next()];
