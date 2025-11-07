import { defineConfig } from "eslint/config";

import { betterTailwindCSSRulesets } from "#src/rulesets/better-tailwindcss.js";

type Options = betterTailwindCSSRulesets.Options;

export const tailwindcss = (options: Options) => defineConfig(betterTailwindCSSRulesets(options));
