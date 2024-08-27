declare module "eslint-plugin-react-hooks" {
	import type { TSESLint } from "@typescript-eslint/utils";

	declare const plugin: TSESLint.FlatConfig.Plugin;

	export default plugin;
}
