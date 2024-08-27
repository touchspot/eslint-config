declare module "@next/eslint-plugin-next" {
	import type { TSESLint } from "@typescript-eslint/utils";

	declare const plugin: TSESLint.FlatConfig.Plugin & {
		readonly configs: {
			readonly "core-web-vitals": TSESLint.FlatConfig.Config;
			readonly recommended: TSESLint.FlatConfig.Config;
		};
	};

	export default plugin;
}
