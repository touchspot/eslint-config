import BetterTailwindCSS from "eslint-plugin-better-tailwindcss";
import type { Matcher } from "eslint-plugin-better-tailwindcss/api/types";
import type { Config } from "eslint/config";
import { defineConfig } from "eslint/config";

type Options = {
	readonly entryPoint?: string | undefined;
	readonly tailwindConfig?: string | undefined;
	readonly attributes?: readonly Matcher[] | undefined;
	readonly callees?: readonly Matcher[] | undefined;
	readonly variables?: readonly Matcher[] | undefined;
	readonly tags?: readonly Matcher[] | undefined;
};

export const tailwindcss = ({
	entryPoint,
	tailwindConfig,
	attributes,
	callees,
	variables,
	tags,
}: Options = {}): readonly Config[] =>
	defineConfig({
		name: "@touchspot/eslint-config/presets/tailwindcss/tailwindcss",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		plugins: {
			"better-tailwindcss": BetterTailwindCSS,
		},
		settings: {
			"better-tailwindcss": {
				...(entryPoint == null ? null : { entryPoint }),
				...(tailwindConfig == null ? null : { tailwindConfig }),
				...(attributes == null ? null : { attributes }),
				...(callees == null ? null : { callees }),
				...(variables == null ? null : { variables }),
				...(tags == null ? null : { tags }),
			},
		},
		rules: {
			...BetterTailwindCSS.configs["recommended-error"]?.rules,
			"better-tailwindcss/enforce-consistent-class-order": "off",
			"better-tailwindcss/enforce-consistent-important-position": "error",
			"better-tailwindcss/enforce-consistent-line-wrapping": "off",
			"better-tailwindcss/enforce-consistent-variable-syntax": "error",
			"better-tailwindcss/enforce-shorthand-classes": "error",
			"better-tailwindcss/no-deprecated-classes": "error",
			"better-tailwindcss/no-unnecessary-whitespace": ["error", { allowMultiline: false }],
		},
	});
