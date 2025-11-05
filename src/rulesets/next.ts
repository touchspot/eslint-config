import Next from "@next/eslint-plugin-next";
import { defineConfig, globalIgnores } from "eslint/config";

export const nextRuleset = () =>
	defineConfig(globalIgnores([".next/", "out/"]), {
		name: "@touchspot/eslint-config/rulesets/next",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		extends: [Next.configs["core-web-vitals"]],
	});
