// @ts-check

import Next from "@next/eslint-plugin-next";
import CheckFile from "eslint-plugin-check-file";
import Functional from "eslint-plugin-functional";
import ImportX from "eslint-plugin-import-x";
import React from "eslint-plugin-react";
import ReactHooks from "eslint-plugin-react-hooks";
import TailwindCSS from "eslint-plugin-tailwindcss";
import TSESLint from "typescript-eslint";

import * as env from "./env.js";

export const react = () =>
	TSESLint.config(
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
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
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
			plugins: {
				react: React,
			},
			settings: {
				react: {
					version: "detect",
				},
			},
			rules: {
				...React.configs.recommended.rules,
				...React.configs["jsx-runtime"].rules,
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

export const next = () =>
	TSESLint.config(
		{
			name: "@touchspot/eslint-config/frameworks/next/ignore",
			ignores: [".next/**"],
		},
		{
			name: "@touchspot/eslint-config/frameworks/next/parser",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			extends: [...env.browser(), ...env.node(), ...react()],
		},
		{
			name: "@touchspot/eslint-config/frameworks/next/next",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			plugins: {
				"@next/next": Next,
			},
			rules: {
				...Next.configs.recommended.rules,
				...Next.configs["core-web-vitals"].rules,
			},
		},
		{
			name: "@touchspot/eslint-config/frameworks/next/check-file",
			files: ["{src/,}app/**/*.{ts,tsx}"],
			plugins: {
				"check-file": CheckFile,
			},
			rules: {
				"check-file/folder-naming-convention": ["error", { "**": "NEXT_JS_APP_ROUTER_CASE" }],
			},
		},
		{
			name: "@touchspot/eslint-config/frameworks/next/import-x",
			files: ["{src/,}app/**/*.{ts,tsx}"],
			plugins: {
				"import-x": ImportX,
			},
			rules: {
				"import-x/no-default-export": "off",
			},
		},
	);

export const tailwindcss = () =>
	TSESLint.config({
		name: "@touchspot/eslint-config/frameworks/tailwindcss/tailwindcss",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		plugins: {
			tailwindcss: TailwindCSS,
		},
		settings: {
			tailwindcss: {
				callees: ["classnames", "clsx", "cn", "ctl", "cva", "twJoin", "twMerge", "tv"],
			},
		},
		rules: {
			"tailwindcss/enforces-negative-arbitrary-values": "error",
			"tailwindcss/enforces-shorthand": "error",
			"tailwindcss/migration-from-tailwind-2": "error",
			"tailwindcss/no-custom-classname": "error",
			"tailwindcss/no-contradicting-classname": "error",
			"tailwindcss/no-unnecessary-arbitrary-value": "error",
		},
	});
