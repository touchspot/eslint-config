import NoRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import { defineConfig } from "eslint/config";

export const noRelativeImportPathsRuleset = () =>
	defineConfig({
		name: "@touchspot/eslint-config/rulesets/no-relative-import-paths",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		ignores: ["**/*.d.*"],
		plugins: {
			"no-relative-import-paths": NoRelativeImportPaths,
		},
		rules: {
			"no-relative-import-paths/no-relative-import-paths": ["error", { allowSameFolder: true }],
		},
	});
