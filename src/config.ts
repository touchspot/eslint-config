import Prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

import { checkFileRuleset } from "#pkg/rulesets/check-file.js";
import { eslintRuleset } from "#pkg/rulesets/eslint.js";
import { functionalRuleset } from "#pkg/rulesets/functional.js";
import { importXRuleset } from "#pkg/rulesets/import-x.js";
import { noRelativeImportPathsRuleset } from "#pkg/rulesets/no-relative-import-paths.js";
import { perfectionistRuleset } from "#pkg/rulesets/perfectionist.js";
import { tseslintRuleset } from "#pkg/rulesets/tseslint.js";
import { unicornRuleset } from "#pkg/rulesets/unicorn.js";
import { unusedImportsRuleset } from "#pkg/rulesets/unused-imports.js";

type Options = tseslintRuleset.Options;

export const config = (options: Options, ...addons: Parameters<typeof defineConfig>) =>
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
		Prettier,
	);
