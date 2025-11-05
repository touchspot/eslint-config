import config from "@touchspot/eslint-config";
import tailwindcss from "@touchspot/eslint-config/addons/tailwindcss";

export default config(
	{
		tsconfigRootDir: import.meta.dirname,
	},
	tailwindcss({ entryPoint: "tailwind.css" }),
);
