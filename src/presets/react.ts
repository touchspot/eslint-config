import Functional from "eslint-plugin-functional";
import React from "eslint-plugin-react";
import ReactCompiler from "eslint-plugin-react-compiler";
import ReactHooks from "eslint-plugin-react-hooks";
import { config } from "typescript-eslint";

export const react = ({ compiler = true }: { readonly compiler?: boolean } = {}) =>
	config(
		{
			name: "@touchspot/eslint-config/presets/react/parser",
			files: ["**/*.{js,jsx,tsx}"],
			languageOptions: {
				parserOptions: {
					jsxPragma: null,
				},
			},
		},
		{
			name: "@touchspot/eslint-config/presets/react/functional",
			files: ["**/*.{ts,tsx,mts,cts}"],
			plugins: {
				functional: Functional,
			},
			rules: {
				"functional/immutable-data": [
					"error",
					{
						ignoreImmediateMutation: true,
						ignoreNonConstDeclarations: { treatParametersAsConst: true },
						ignoreAccessorPattern: ["ref.current", "*Ref.current"],
					},
				],
			},
		},
		{
			name: "@touchspot/eslint-config/presets/react/react",
			files: ["**/*.{js,jsx,tsx}"],
			extends: [React.configs.flat["recommended"] ?? {}, React.configs.flat["jsx-runtime"] ?? {}],
			settings: {
				react: {
					version: "detect",
				},
			},
			rules: {
				"react/button-has-type": "error",
				"react/iframe-missing-sandbox": "error",
				"react/jsx-boolean-value": "error",
				"react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
				"react/jsx-sort-props": [
					"error",
					{ callbacksLast: true, noSortAlphabetically: true, reservedFirst: ["key", "ref"] },
				],
				"react/self-closing-comp": "error",
			},
		},
		{
			name: "@touchspot/eslint-config/presets/react/react-hooks",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			plugins: {
				"react-hooks": ReactHooks,
			},
			rules: {
				"react-hooks/rules-of-hooks": "error",
				"react-hooks/exhaustive-deps": "error",
			},
		},
		compiler
			? {
					name: "@touchspot/eslint-config/presets/react/react-compiler",
					files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
					plugins: {
						"react-compiler": ReactCompiler,
					},
					rules: {
						"react-compiler/react-compiler": "error",
					},
				}
			: {},
	);
