import BetterTailwindCSS from "eslint-plugin-better-tailwindcss";
import type { Matcher } from "eslint-plugin-better-tailwindcss/api/types";
import { defineConfig } from "eslint/config";

export declare namespace betterTailwindCSSRulesets {
	type CommonOptions = {
		readonly attributes?: readonly Matcher[] | undefined;
		readonly callees?: readonly Matcher[] | undefined;
		readonly variables?: readonly Matcher[] | undefined;
		readonly tags?: readonly Matcher[] | undefined;
	};

	type V4Options = {
		readonly version?: 4;
		readonly entryPoint: string;
	};

	type V3Options = {
		readonly version: 3;
		readonly tailwindConfig?: string;
	};

	type Options = CommonOptions & (V3Options | V4Options);
}

export const betterTailwindCSSRulesets = ({
	attributes,
	callees,
	variables,
	tags,
	...options
}: betterTailwindCSSRulesets.Options) =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/better-tailwindcss",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		plugins: {
			"better-tailwindcss": BetterTailwindCSS,
		},
		settings: {
			"better-tailwindcss": {
				...(options.version === 3
					? { tailwindConfig: options.tailwindConfig ?? "tailwind.config.js" }
					: { entryPoint: options.entryPoint }),
				...(attributes == null ? null : { attributes }),
				...(callees == null ? null : { callees }),
				...(variables == null ? null : { variables }),
				...(tags == null ? null : { tags }),
			},
		},
		rules: {
			"better-tailwindcss/enforce-consistent-class-order": "off",
			"better-tailwindcss/enforce-consistent-important-position": "error",
			"better-tailwindcss/enforce-consistent-line-wrapping": "off",
			"better-tailwindcss/enforce-consistent-variable-syntax": "error",
			"better-tailwindcss/enforce-shorthand-classes": "error",
			"better-tailwindcss/no-conflicting-classes": "error",
			"better-tailwindcss/no-deprecated-classes": "error",
			"better-tailwindcss/no-duplicate-classes": "error",
			"better-tailwindcss/no-restricted-classes": "off",
			"better-tailwindcss/no-unnecessary-whitespace": ["error", { allowMultiline: false }],
			"better-tailwindcss/no-unregistered-classes": "error",
		},
	});
