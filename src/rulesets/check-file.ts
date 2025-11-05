import CheckFile from "eslint-plugin-check-file";
import { defineConfig } from "eslint/config";

export const checkFileRuleset = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/check-file",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		ignores: ["**/*.d.*"],
		plugins: {
			"check-file": CheckFile,
		},
		rules: {
			"check-file/folder-naming-convention": ["error", { "**": "KEBAB_CASE" }],
			"check-file/filename-naming-convention": ["error", { "**": "KEBAB_CASE" }, { ignoreMiddleExtensions: true }],
		},
	});

export const checkFileRulesetNext = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/check-file/next",
		files: ["{src/,}app/**/*.{ts,tsx}"],
		rules: {
			"check-file/folder-naming-convention": ["error", { "**": "NEXT_JS_APP_ROUTER_CASE" }],
		},
	});
