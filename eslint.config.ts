import config, { env } from "@touchspot/eslint-config";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
	globalIgnores(["packages/", "playgrounds/"]),
	config(
		{
			tsconfigRootDir: import.meta.dirname,
		},
		env.node(),
		{
			files: [".claude/**"],
			rules: {
				"no-console": "off",
				"check-file/folder-naming-convention": ["error", { "**": "KEBAB_CASE" }, { ignoreWords: [".claude"] }],
			},
		},
	),
);
