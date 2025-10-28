import type { Plugin } from "@eslint/core";
import Functional from "eslint-plugin-functional";
import React from "eslint-plugin-react";
import ReactHooks from "eslint-plugin-react-hooks";
import type { Config } from "eslint/config";
import { defineConfig } from "eslint/config";

export const react = (): readonly Config[] =>
	defineConfig(
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
				functional: Functional as Plugin,
			},
			rules: {
				"functional/immutable-data": [
					"error",
					{
						ignoreImmediateMutation: true,
						ignoreNonConstDeclarations: { treatParametersAsConst: true },
						ignoreAccessorPattern: ["ref.current", "*Ref.current", "*Atom.*"],
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
			extends: [ReactHooks.configs.flat["recommended-latest"]],
			rules: {
				"react-hooks/exhaustive-deps": "error",
				"react-hooks/incompatible-library": "error",
				"react-hooks/unsupported-syntax": "error",
			},
		},
	);
