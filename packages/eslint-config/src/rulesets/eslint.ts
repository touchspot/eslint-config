import ESLint from "@eslint/js";
import { defineConfig } from "eslint/config";

export const eslintRuleset = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/eslint",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		extends: [ESLint.configs.recommended],
		rules: {
			"arrow-body-style": ["error"],
			eqeqeq: ["error", "always", { null: "never" }],
			"max-params": "error",
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"no-lone-blocks": "error",
			"no-lonely-if": "error",
			"no-loop-func": "error",
			"no-param-reassign": "error",
			"no-restricted-imports": [
				"error",
				{ patterns: [{ group: ["**/_*", "!./_*"], message: "Do not import directory-private module." }] },
			],
			"no-useless-rename": "error",
			"object-shorthand": "error",
			"prefer-destructuring": "error",
		},
	});
