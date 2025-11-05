import config from "@touchspot/eslint-config";
import next from "@touchspot/eslint-config/addons/next";

export default config(
	{
		tsconfigRootDir: import.meta.dirname,
	},
	next(),
);
