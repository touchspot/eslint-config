declare module "@next/eslint-plugin-next" {
	import type * as TSESLint from "typescript-eslint";

	const plugin: typeof TSESLint.plugin & {
		readonly configs: {
			readonly "core-web-vitals": TSESLint.ConfigArray[number];
			readonly recommended: TSESLint.ConfigArray[number];
		};
	};

	export default plugin;
}
