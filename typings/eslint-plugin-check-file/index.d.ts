declare module "eslint-plugin-check-file" {
	import type { TSESLint } from "@typescript-eslint/utils";

	declare const plugin: TSESLint.FlatConfig.Plugin;

	export default plugin;
}
