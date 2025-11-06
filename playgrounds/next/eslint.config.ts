import config from "@touchspot/eslint-config" with { conditions: "development" };
import next from "@touchspot/eslint-config/addons/next";
import tailwindcss from "@touchspot/eslint-config/addons/tailwindcss";

export default config(
	{
		tsconfigRootDir: import.meta.dirname,
	},
	next(),
	tailwindcss({ entryPoint: "tailwind.css" }),
);
