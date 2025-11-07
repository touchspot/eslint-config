import BetterTailwindCSS from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "eslint/config";

import type { tailwindcss } from "#src/frameworks/tailwindcss.js";

export const betterTailwindCSSRulesets = ({ attributes, callees, variables, tags, ...options }: tailwindcss.Options) =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/better-tailwindcss",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		plugins: {
			"better-tailwindcss": BetterTailwindCSS,
		},
		settings: {
			"better-tailwindcss": {
				...(options.version === 3
					? { tailwindConfig: options.config ?? "tailwind.config.js" }
					: { entryPoint: options.entry }),
				...(attributes == null ? null : { attributes }),
				...(callees == null ? null : { callees }),
				...(variables == null ? null : { variables }),
				...(tags == null ? null : { tags }),
			},
		},
		rules: {
			"better-tailwindcss/enforce-consistent-important-position": "error",
			"better-tailwindcss/enforce-consistent-variable-syntax": "error",
			"better-tailwindcss/enforce-shorthand-classes": "error",
			"better-tailwindcss/no-conflicting-classes": "error",
			"better-tailwindcss/no-deprecated-classes": "error",
			"better-tailwindcss/no-duplicate-classes": "error",
			"better-tailwindcss/no-unnecessary-whitespace": ["error", { allowMultiline: false }],
			"better-tailwindcss/no-unregistered-classes": "error",
		},
	});
