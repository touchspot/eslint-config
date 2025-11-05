import { defineConfig } from "eslint/config";
import Globals from "globals";

export const browser = ({
	files = ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
}: {
	readonly files?: readonly string[];
} = {}) =>
	defineConfig({
		name: "@touchspot/eslint-config/env/browser",
		files: [...files],
		languageOptions: {
			globals: {
				...Globals.browser,
			},
		},
	});

export const node = ({
	files = ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
}: {
	readonly files?: readonly string[];
} = {}) =>
	defineConfig({
		name: "@touchspot/eslint-config/env/node",
		files: [...files],
		languageOptions: {
			globals: {
				...Globals.node,
			},
		},
	});
