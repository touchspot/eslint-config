import config from "@touchspot/eslint-config" with { conditions: "development" };
import next from "@touchspot/eslint-config/next";
import tailwindcss from "@touchspot/eslint-config/tailwindcss";

export default config(
	{
		tsconfigRootDir: import.meta.dirname,
	},
	next(),
	tailwindcss({ entryPoint: "tailwind.css" }),
);
