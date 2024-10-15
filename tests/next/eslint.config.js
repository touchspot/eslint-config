import config from "@touchspot/eslint-config";
import next from "@touchspot/eslint-config/presets/next";

/** @type {import("@touchspot/eslint-config").FlatConfig} */
export default [...config(), ...next()];
