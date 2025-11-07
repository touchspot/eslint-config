import type { ExtendsElement } from "@eslint/config-helpers";
import type { Plugin } from "@eslint/core";
import Functional from "eslint-plugin-functional";
import { defineConfig } from "eslint/config";

import type { Options } from "#src/config.js";

export const functionalRuleset = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/functional",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		ignores: ["**/*.d.*"],
		plugins: {
			functional: Functional as Plugin,
		},
		rules: {
			"functional/immutable-data": [
				"error",
				{
					ignoreImmediateMutation: true,
					ignoreNonConstDeclarations: { treatParametersAsConst: true },
				},
			],
			"functional/prefer-property-signatures": "error",
			"functional/prefer-readonly-type": "error",
		},
	});

export const functionalRulesetReact = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/functional/react",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		ignores: ["**/*.d.*"],
		rules: {
			"functional/immutable-data": [
				"error",
				{
					ignoreImmediateMutation: true,
					ignoreNonConstDeclarations: { treatParametersAsConst: true },
					ignoreAccessorPattern: ["ref.current", "*Ref.current", "*Atom.*"],
				},
			],
		},
	});

export const autoDisableTypeAwareFunctionalRules = (options: Options) => {
	if (options.enableTypeAwareRules === false) {
		return defineConfig({
			name: "@touchspot/eslint-config/rulesets/functional/disable-type-aware/all",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
			extends: [Functional.configs.disableTypeChecked as ExtendsElement],
		});
	}
	if (options.enableTypeAwareRules?.js == null) {
		return defineConfig({
			name: "@touchspot/eslint-config/rulesets/functional/disable-type-aware/js",
			files: ["**/*.{js,jsx,mjs,cjs}"],
			extends: [Functional.configs.disableTypeChecked as ExtendsElement],
		});
	}
	return [];
};
