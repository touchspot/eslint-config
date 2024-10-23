import Next from "@next/eslint-plugin-next";
import CheckFile from "eslint-plugin-check-file";
import { config } from "typescript-eslint";

import * as env from "#pkg/env.js";
import { react } from "#pkg/presets/react.js";

export const next = ({ reactCompiler = true }: { readonly reactCompiler?: boolean } = {}) =>
	config(
		...env.browser(),
		...env.node(),
		...react({ compiler: reactCompiler }),
		{
			name: "@touchspot/eslint-config/frameworks/next/ignore",
			ignores: [".next/**"],
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
			rules: {
				"import-x/no-default-export": "off",
			},
		},
	);
