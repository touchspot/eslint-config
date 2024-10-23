declare module "eslint-plugin-react-compiler" {
	import type { TSESLint } from "@typescript-eslint/utils";

	declare const plugin: TSESLint.FlatConfig.Plugin;

	export default plugin;
}
