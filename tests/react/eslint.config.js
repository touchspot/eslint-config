import config from "@touchspot/eslint-config";
import react from "@touchspot/eslint-config/addons/react";

export default config(
	{
		tsconfigRootDir: import.meta.dirname,
	},
	react(),
);
