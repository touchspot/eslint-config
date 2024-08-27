declare module "eslint-plugin-react" {
	import type { TSESLint } from "@typescript-eslint/utils";

	declare const plugin: TSESLint.FlatConfig.Plugin & {
		readonly configs: {
			readonly recommended: TSESLint.FlatConfig.Config;
			readonly "jsx-runtime": TSESLint.FlatConfig.Config;
		};
	};

	export default plugin;
}
