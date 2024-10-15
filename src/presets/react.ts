import type { TSESLint } from "@typescript-eslint/utils";
import Functional from "eslint-plugin-functional";
import React from "eslint-plugin-react";
import ReactHooks from "eslint-plugin-react-hooks";
import { config } from "typescript-eslint";

export const react = () =>
	config(
		{
			name: "@touchspot/eslint-config/frameworks/react/parser",
			files: ["**/*.{js,jsx,tsx}"],
			languageOptions: {
				parserOptions: {
					jsxPragma: null,
				},
			},
		},
		{
			name: "@touchspot/eslint-config/frameworks/react/functional",
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
			name: "@touchspot/eslint-config/frameworks/react/react",
			files: ["**/*.{js,jsx,tsx}"],
			extends: [
				React.configs.flat.recommended as TSESLint.FlatConfig.Config,
				React.configs.flat["jsx-runtime"] as TSESLint.FlatConfig.Config,
			],
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
			name: "@touchspot/eslint-config/frameworks/react/react-hooks",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			plugins: {
				"react-hooks": ReactHooks,
			},
			rules: {
				"react-hooks/rules-of-hooks": "error",
				"react-hooks/exhaustive-deps": "error",
			},
		},
	);
