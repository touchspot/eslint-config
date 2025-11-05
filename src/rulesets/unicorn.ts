import Unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";

export const unicornRuleset = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/unicorn",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		extends: [Unicorn.configs.recommended],
		rules: {
			"unicorn/consistent-function-scoping": ["error", { checkArrowFunctions: false }],
			"unicorn/filename-case": "off",
			"unicorn/no-array-callback-reference": "off",
			"unicorn/no-array-reduce": "off",
			"unicorn/no-null": "off",
			"unicorn/prefer-object-from-entries": "off",
			"unicorn/prevent-abbreviations": "off",
		},
	});
