import { defineConfig } from "eslint/config";

import { betterTailwindCSSRulesets } from "#pkg/rulesets/better-tailwindcss.js";

type Options = betterTailwindCSSRulesets.Options;

export const tailwindcssAddon = (options: Options) => defineConfig(betterTailwindCSSRulesets(options));
