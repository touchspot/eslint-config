import Prettier from "eslint-config-prettier";
import type { Config } from "eslint/config";
import { defineConfig } from "eslint/config";
import * as TSESLint from "typescript-eslint";

import * as languages from "./languages.js";

export const config = ({
	tsconfigRootDir,
	ignores = [".cache", ".turbo", "coverage", "dist"],
}: {
	readonly tsconfigRootDir: string;
	readonly ignores?: readonly string[];
}): readonly Config[] =>
	defineConfig(
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
			name: "@touchspot/eslint-config/config/parser",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			languageOptions: {
				ecmaVersion: "latest",
				parser: TSESLint.parser,
				parserOptions: {
					tsconfigRootDir,
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
