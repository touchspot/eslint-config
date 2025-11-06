import config, { env } from "@touchspot/eslint-config";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
	globalIgnores(["packages/", "playgrounds/"]),
	config(
		{
			tsconfigRootDir: import.meta.dirname,
		},
		env.node(),
	),
);
