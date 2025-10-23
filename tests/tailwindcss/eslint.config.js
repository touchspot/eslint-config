import config from "@touchspot/eslint-config";
import tailwindcss from "@touchspot/eslint-config/presets/tailwindcss";

/** @type {import("@touchspot/eslint-config").ConfigArray} */
export default [...config({ tsconfigRootDir: import.meta.dirname }), ...tailwindcss({ entryPoint: "tailwind.css" })];
