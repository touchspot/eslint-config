import config from "@touchspot/eslint-config";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
	globalIgnores(["tests/"]),
	config({
		tsconfigRootDir: import.meta.dirname,
	}),
);
