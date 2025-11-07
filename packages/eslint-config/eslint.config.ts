import config from "@touchspot/eslint-config";

export default config(
	{
		rootDir: import.meta.dirname,
	},
	{
		files: ["lib/**"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
);
