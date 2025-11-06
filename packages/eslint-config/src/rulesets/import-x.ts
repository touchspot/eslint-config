import type { ConfigObject } from "@eslint/core";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import ImportX from "eslint-plugin-import-x";
import { defineConfig } from "eslint/config";

export const importXRuleset = () =>
	defineConfig(
		{
			name: "@touchspot/eslint-config/rulesets/import-x",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			extends: [ImportX.flatConfigs.recommended as ConfigObject],
			settings: {
				"import-x/internal-regex": "^#.+",
				"import-x/resolver-next": [createTypeScriptImportResolver()],
			},
			rules: {
				"import-x/export": "off",
				"import-x/first": "error",
				"import-x/namespace": "off",
				"import-x/newline-after-import": "error",
				"import-x/no-anonymous-default-export": ["error", { allowArray: true, allowObject: true }],
				"import-x/no-duplicates": "error",
				"import-x/no-named-as-default": "off",
				"import-x/no-named-as-default-member": "off",
				"import-x/no-unresolved": "off",
				"import-x/no-useless-path-segments": "error",
			},
		},
		{
			name: "@touchspot/eslint-config/rulesets/import-x/typescript",
			files: ["**/*.{ts,tsx,mts,cts}"],
			extends: [ImportX.flatConfigs.typescript as ConfigObject],
			rules: {
				"import-x/consistent-type-specifier-style": "error",
				"import-x/no-default-export": "error",
			},
		},
		{
			name: "@touchspot/eslint-config/rulesets/import-x/typescript/allow-default-export",
			files: ["*.config.ts", "*.config.*.ts", "**/*.d.*"],
			rules: {
				"import-x/no-default-export": "off",
			},
		},
		{
			name: "@touchspot/eslint-config/rulesets/import-x/cjs",
			files: ["**/*.{cjs,cts}"],
			rules: {
				"import-x/no-import-module-exports": "error",
			},
		},
	);

export const importXRulesetNext = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/import-x/next",
		files: ["{src/,}app/**/*.{ts,tsx}"],
		rules: {
			"import-x/no-default-export": "off",
		},
	});
