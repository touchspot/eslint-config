import Perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";

export const perfectionistRuleset = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/perfectionist",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		plugins: {
			perfectionist: Perfectionist,
		},
		rules: {
			"perfectionist/sort-exports": ["error", { type: "natural" }],
			"perfectionist/sort-imports": [
				"error",
				{
					type: "natural",
					groups: ["side-effect", "builtin", "external", "subpath", ["parent", "sibling", "index"], "unknown"],
				},
			],
			"perfectionist/sort-named-exports": ["error", { type: "natural" }],
			"perfectionist/sort-named-imports": ["error", { type: "natural" }],
		},
	});
