import type { ConfigWithExtendsArray } from "@eslint/config-helpers";
import Prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

import { checkFileRuleset } from "#src/rulesets/check-file.js";
import { eslintRuleset } from "#src/rulesets/eslint.js";
import { autoDisableTypeAwareFunctionalRules, functionalRuleset } from "#src/rulesets/functional.js";
import { importXRuleset } from "#src/rulesets/import-x.js";
import { noRelativeImportPathsRuleset } from "#src/rulesets/no-relative-import-paths.js";
import { perfectionistRuleset } from "#src/rulesets/perfectionist.js";
import { autoDisableTypeAwareTseslintRules, tseslintRuleset } from "#src/rulesets/tseslint.js";
import { unicornRuleset } from "#src/rulesets/unicorn.js";
import { unusedImportsRuleset } from "#src/rulesets/unused-imports.js";

export type Options = {
	readonly rootDir: string;
	readonly tsconfig?: string;
	readonly enableTypeAwareRules?: { readonly js?: "all" | "auto" } | false;
};

export const config = (options: Options, ...addons: ConfigWithExtendsArray) =>
	defineConfig(
		globalIgnores([".cache/", ".turbo/", "coverage/", "dist/"]),
		{
			name: "@touchspot/eslint-config/linter",
			linterOptions: {
				reportUnusedDisableDirectives: "error",
			},
		},
		{
			name: "@touchspot/eslint-config/language",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			languageOptions: {
				ecmaVersion: "latest",
			},
		},
		{
			name: "@touchspot/eslint-config/language/esm",
			files: ["**/*.{js,jsx,mjs,ts,tsx,mts}"],
			languageOptions: {
				sourceType: "module",
			},
		},
		{
			name: "@touchspot/eslint-config/language/cjs",
			files: ["**/*.{cjs,cts}"],
			languageOptions: {
				sourceType: "commonjs",
			},
		},
		eslintRuleset(),
		tseslintRuleset(options),
		unicornRuleset(),
		importXRuleset(),
		unusedImportsRuleset(),
		noRelativeImportPathsRuleset(),
		functionalRuleset(),
		perfectionistRuleset(),
		checkFileRuleset(),
		addons,
		autoDisableTypeAwareTseslintRules(options),
		autoDisableTypeAwareFunctionalRules(options),
		Prettier,
	);
