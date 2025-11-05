import config, { env } from "@touchspot/eslint-config";

export default config(
	{
		tsconfigRootDir: import.meta.dirname,
	},
	env.node(),
);
