declare module "@next/eslint-plugin-next" {
	import type { Plugin } from "@eslint/core";
	import type { Config } from "eslint/config";

	const plugin: Plugin & {
		readonly configs: {
			readonly "core-web-vitals": Config;
			readonly recommended: Config;
		};
	};

	export default plugin;
}
