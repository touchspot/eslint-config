import config, { env } from "@touchspot/eslint-config";

export default config(
	{
		rootDir: import.meta.dirname,
	},
	env.node(),
);
