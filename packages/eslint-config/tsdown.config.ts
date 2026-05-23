import { defineConfig } from "tsdown";

export default defineConfig({
	entry: {
		index: "lib/index.ts",
		"frameworks/next": "lib/frameworks/next.ts",
		"frameworks/react": "lib/frameworks/react.ts",
		"frameworks/tailwindcss": "lib/frameworks/tailwindcss.ts",
	},
	outDir: "dist",
	deps: {
		skipNodeModulesBundle: true,
	},
	sourcemap: true,
	dts: {
		sourcemap: true,
	},
	clean: true,
});
