import Prettier from "eslint-config-prettier";
import * as TSESLint from "typescript-eslint";

import * as languages from "./languages.js";

export const config = ({
	ignores = [".cache", ".turbo", "coverage", "dist"],
}: {
	readonly ignores?: readonly string[];
} = {}) =>
	TSESLint.config(
		{
			name: "@touchspot/eslint-config/config/ignore",
			ignores: ignores.map((ignore) => `${ignore}/**`),
		},
		{
			name: "@touchspot/eslint-config/config/linter",
			linterOptions: {
				reportUnusedDisableDirectives: "error",
			},
		},
		{
			name: "@touchspot/eslint-config/config/parser/javascript",
			files: ["**/*.{js,jsx,mjs,cjs}"],
			languageOptions: {
				ecmaVersion: "latest",
				parser: TSESLint.parser,
			},
		},
		{
			name: "@touchspot/eslint-config/config/parser/typescript",
			files: ["**/*.{ts,tsx,mts,cts}"],
			languageOptions: {
				ecmaVersion: "latest",
				parser: TSESLint.parser,
				parserOptions: {
					projectService: true,
				},
			},
		},
		{
			name: "@touchspot/eslint-config/config/esm",
			files: ["**/*.{js,jsx,mjs,ts,tsx,mts}"],
			languageOptions: {
				sourceType: "module",
			},
		},
		{
			name: "@touchspot/eslint-config/config/cjs",
			files: ["**/*.{cjs,cts}"],
			languageOptions: {
				sourceType: "commonjs",
			},
		},
		...languages.javascript(),
		...languages.typescript(),
		Prettier,
	);
