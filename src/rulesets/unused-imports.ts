import UnusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";

export const unusedImportsRuleset = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/unused-imports",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		plugins: {
			"unused-imports": UnusedImports,
		},
		rules: {
			"no-unused-vars": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"error",
				{ args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" },
			],
		},
	});
