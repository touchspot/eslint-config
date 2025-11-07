import type { Matcher } from "eslint-plugin-better-tailwindcss/api/types";
import { defineConfig } from "eslint/config";

import { betterTailwindCSSRulesets } from "#src/rulesets/better-tailwindcss.js";

export declare namespace tailwindcss {
	type CommonOptions = {
		readonly attributes?: readonly Matcher[] | undefined;
		readonly callees?: readonly Matcher[] | undefined;
		readonly variables?: readonly Matcher[] | undefined;
		readonly tags?: readonly Matcher[] | undefined;
	};

	type V4Options = {
		readonly version?: 4;
		readonly entry: string;
	};

	type V3Options = {
		readonly version: 3;
		readonly config?: string;
	};

	type Options = CommonOptions & (V3Options | V4Options);
}

export const tailwindcss = (options: tailwindcss.Options) => defineConfig(betterTailwindCSSRulesets(options));
