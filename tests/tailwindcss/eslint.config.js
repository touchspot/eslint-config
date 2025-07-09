import config from "@touchspot/eslint-config";
import tailwindcss from "@touchspot/eslint-config/presets/tailwindcss";

/** @type {import("@touchspot/eslint-config").Config} */
export default [...config(), ...tailwindcss({ entryPoint: "tailwind.css" })];
