import ESLint from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import CheckFile from "eslint-plugin-check-file";
import Functional from "eslint-plugin-functional";
import ImportX from "eslint-plugin-import-x";
import NoRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import Perfectionist from "eslint-plugin-perfectionist";
import Unicorn from "eslint-plugin-unicorn";
import UnusedImports from "eslint-plugin-unused-imports";
import * as TSESLint from "typescript-eslint";

export const javascript = () =>
	TSESLint.config(
		{
			name: "@touchspot/eslint-config/languages/javascript/eslint",
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
		},
		{
			name: "@touchspot/eslint-config/languages/javascript/import-x",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			extends: [ImportX.flatConfigs.recommended],
			settings: {
				"import-x/internal-regex": "^#[^/]+/",
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
			name: "@touchspot/eslint-config/languages/javascript/import-x/cjs",
			files: ["**/*.{cjs,cts}"],
			rules: {
				"import-x/no-import-module-exports": "error",
			},
		},
		{
			name: "@touchspot/eslint-config/languages/javascript/perfectionist",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			plugins: {
				perfectionist: Perfectionist,
			},
			rules: {
				"perfectionist/sort-exports": ["error", { type: "natural" }],
				"perfectionist/sort-imports": [
					"error",
					{
						type: "natural",
						internalPattern: ["^#.+"],
						groups: [
							"side-effect",
							"builtin",
							"external",
							"internal",
							["parent", "sibling", "index"],
							"object",
							"unknown",
						],
					},
				],
				"perfectionist/sort-named-exports": ["error", { type: "natural" }],
				"perfectionist/sort-named-imports": ["error", { type: "natural" }],
			},
		},
		{
			name: "@touchspot/eslint-config/languages/javascript/unicorn",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			extends: [Unicorn.configs["flat/recommended"]],
			rules: {
				"unicorn/consistent-function-scoping": ["error", { checkArrowFunctions: false }],
				"unicorn/filename-case": "off",
				"unicorn/no-array-callback-reference": "off",
				"unicorn/no-array-reduce": "off",
				"unicorn/no-null": "off",
				"unicorn/prefer-object-from-entries": "off",
				"unicorn/prevent-abbreviations": "off",
			},
		},
		{
			name: "@touchspot/eslint-config/languages/javascript/unicorn/cjs",
			files: ["**/*.{cjs,cts}"],
			rules: {
				"unicorn/prefer-module": "off",
			},
		},
		{
			name: "@touchspot/eslint-config/languages/javascript/unused-imports",
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
		},
		{
			name: "@touchspot/eslint-config/languages/javascript/check-file",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			ignores: ["**/*.d.*"],
			plugins: {
				"check-file": CheckFile,
			},
			rules: {
				"check-file/folder-naming-convention": ["error", { "**": "KEBAB_CASE" }],
				"check-file/filename-naming-convention": ["error", { "**": "KEBAB_CASE" }, { ignoreMiddleExtensions: true }],
			},
		},
	);

export const typescript = () =>
	TSESLint.config(
		{
			name: "@touchspot/eslint-config/languages/typescript/typescript-eslint",
			files: ["**/*.{ts,tsx,mts,cts}"],
			ignores: ["**/*.d.*"],
			extends: [...TSESLint.configs.strictTypeChecked, ...TSESLint.configs.stylisticTypeChecked],
			settings: {
				"import-x/resolver-next": [createTypeScriptImportResolver()],
			},
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
				"@typescript-eslint/no-import-type-side-effects": "error",
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": ["error", { allow: ["_"] }],
				"@typescript-eslint/no-unnecessary-condition": ["error", { allowConstantLoopConditions: true }],
				"@typescript-eslint/no-unnecessary-qualifier": "error",
				"@typescript-eslint/no-unused-vars": "off",
				"@typescript-eslint/no-useless-empty-export": "error",
				"@typescript-eslint/parameter-properties": "error",
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
			name: "@touchspot/eslint-config/languages/typescript/functional",
			files: ["**/*.{ts,tsx,mts,cts}"],
			ignores: ["**/*.d.*"],
			plugins: {
				functional: Functional,
			},
			rules: {
				"functional/immutable-data": [
					"error",
					{
						ignoreImmediateMutation: true,
						ignoreNonConstDeclarations: { treatParametersAsConst: true },
					},
				],
				"functional/prefer-property-signatures": "error",
				"functional/prefer-readonly-type": "error",
			},
		},
		{
			name: "@touchspot/eslint-config/languages/typescript/import-x",
			files: ["**/*.{ts,tsx,mts,cts}"],
			ignores: ["**/*.d.*"],
			extends: [ImportX.flatConfigs.typescript],
			rules: {
				"import-x/consistent-type-specifier-style": "error",
				"import-x/no-default-export": "error",
			},
		},
		{
			name: "@touchspot/eslint-config/languages/typescript/no-relative-import-paths",
			files: ["**/*.{ts,tsx,mts,cts}"],
			ignores: ["**/*.d.*"],
			plugins: {
				"no-relative-import-paths": NoRelativeImportPaths,
			},
			rules: {
				"no-relative-import-paths/no-relative-import-paths": ["error", { allowSameFolder: true }],
			},
		},
	);
