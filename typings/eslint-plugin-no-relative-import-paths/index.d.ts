declare module "eslint-plugin-no-relative-import-paths" {
	import type { TSESLint } from "@typescript-eslint/utils";

	declare const plugin: TSESLint.FlatConfig.Plugin;

	export default plugin;
}
