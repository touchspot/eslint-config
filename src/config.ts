import Prettier from "eslint-config-prettier";
import TSESLint from "typescript-eslint";

import * as languages from "./languages.js";

const config = ({
	ignores = ["build", "dist"],
}: {
	readonly ignores?: readonly string[];
} = {}) =>
	TSESLint.config(
		{
			name: "@touchspot/eslint-config/config/base",
			ignores: ignores.map((ignore) => `**/${ignore}/**`),
			linterOptions: {
				reportUnusedDisableDirectives: "error",
			},
		},
		{
			name: "@touchspot/eslint-config/config/parser",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			languageOptions: {
				parser: TSESLint.parser,
				parserOptions: {
					ecmaVersion: "latest",
				},
			},
		},
		{
			name: "@touchspot/eslint-config/config/esm",
			files: ["**/*.{js,jsx,mjs,ts,tsx,mts}"],
			languageOptions: {
				parserOptions: {
					sourceType: "module",
				},
			},
		},
		{
			name: "@touchspot/eslint-config/config/cjs",
			files: ["**/*.{cjs,cts}"],
			languageOptions: {
				parserOptions: {
					sourceType: "commonjs",
				},
			},
		},
		...languages.javascript(),
		...languages.typescript(),
		Prettier,
	);

export default config; // eslint-disable-line import-x/no-default-export
