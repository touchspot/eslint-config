import ReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export const reactHooksRuleset = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/react-hooks",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		extends: [ReactHooks.configs.flat["recommended-latest"]],
		rules: {
			"react-hooks/exhaustive-deps": "error",
			"react-hooks/incompatible-library": "error",
			"react-hooks/unsupported-syntax": "error",
		},
	});
