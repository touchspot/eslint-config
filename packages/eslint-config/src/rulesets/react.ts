import React from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export const reactRuleset = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/react",
		files: ["**/*.{jsx,tsx}"],
		extends: [React.configs.flat["recommended"] ?? {}, React.configs.flat["jsx-runtime"] ?? {}],
		languageOptions: {
			parserOptions: {
				jsxPragma: null,
			},
		},
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
	});
