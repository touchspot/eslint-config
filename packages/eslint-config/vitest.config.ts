import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

const frameworkEntryRoot = fileURLToPath(new URL("lib/frameworks/", import.meta.url));
const packageEntry = fileURLToPath(new URL("lib/index.ts", import.meta.url));

export default defineConfig({
	resolve: {
		alias: [
			{
				find: /^@touchspot\/eslint-config$/,
				replacement: packageEntry,
			},
			{
				find: /^@touchspot\/eslint-config\/(.+)$/,
				replacement: `${frameworkEntryRoot}$1.ts`,
			},
		],
	},
	test: {
		reporters: ["tree"],
		coverage: {
			include: ["src/"],
			reporter: ["text-summary", "lcov", "json", "json-summary"],
			reportOnFailure: true,
		},
	},
});
