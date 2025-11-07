import config from "@touchspot/eslint-config";
import next from "@touchspot/eslint-config/next";
import tailwindcss from "@touchspot/eslint-config/tailwindcss";

export default config(
	{
		rootDir: import.meta.dirname,
	},
	next(),
	tailwindcss({ entryPoint: "tailwind.css" }),
);
