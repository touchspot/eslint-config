import { defineConfig } from "eslint/config";
import * as TSESLint from "typescript-eslint";

export declare namespace tseslintRuleset {
	type Options = {
		readonly tsconfigRootDir: string;
	};
}

export const tseslintRuleset = (options: tseslintRuleset.Options) =>
	defineConfig(
		{
			name: "@touchspot/eslint-config/rulesets/tseslint",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			extends: [TSESLint.configs.base],
			languageOptions: {
				parserOptions: {
					tsconfigRootDir: options.tsconfigRootDir,
					projectService: true,
				},
			},
		},
		{
			name: "@touchspot/eslint-config/rulesets/tseslint/base",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			ignores: ["**/*.d.*"],
			extends: [TSESLint.configs.strictTypeChecked, TSESLint.configs.stylisticTypeChecked],
			rules: {
				"@typescript-eslint/consistent-type-definitions": ["error", "type"],
				"@typescript-eslint/consistent-type-exports": "error",
				"@typescript-eslint/consistent-type-imports": "error",
				"@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
				"@typescript-eslint/naming-convention": [
					"error",
					{
						selector: "default",
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: ["parameter", "variable"],
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "allow",
						trailingUnderscore: "forbid",
					},
					{
						selector: "typeLike",
						format: ["PascalCase", "UPPER_CASE"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: "default",
						modifiers: ["requiresQuotes"],
						format: null,
					},
					{
						selector: "property",
						filter: {
							regex: "^(_tag|__typename)$",
							match: true,
						},
						format: null,
					},
				],
				"@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
				"@typescript-eslint/no-import-type-side-effects": "error",
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": ["error", { allow: ["_"] }],
				"@typescript-eslint/no-unnecessary-condition": ["error", { allowConstantLoopConditions: true }],
				"@typescript-eslint/no-unnecessary-qualifier": "error",
				"@typescript-eslint/no-unused-vars": "off",
				"@typescript-eslint/no-useless-empty-export": "error",
				"@typescript-eslint/parameter-properties": "error",
				"@typescript-eslint/prefer-nullish-coalescing": ["error", { ignoreTernaryTests: true }],
				"@typescript-eslint/prefer-readonly": "error",
				"@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
				"@typescript-eslint/return-await": ["error", "always"],
				"@typescript-eslint/strict-boolean-expressions": [
					"error",
					{ allowString: false, allowNumber: false, allowNullableObject: false },
				],
				"@typescript-eslint/switch-exhaustiveness-check": "error",
			},
		},
		{
			name: "@touchspot/eslint-config/rulesets/tseslint/disable-type-checked",
			files: ["**/*.{js,jsx,mjs,cjs}"],
			extends: [TSESLint.configs.disableTypeChecked],
		},
	);
