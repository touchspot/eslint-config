import TailwindCSS from "eslint-plugin-tailwindcss";
import { config } from "typescript-eslint";

export const tailwindcss = () =>
	config({
		name: "@touchspot/eslint-config/presets/tailwindcss/tailwindcss",
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
		plugins: {
			tailwindcss: TailwindCSS,
		},
		settings: {
			tailwindcss: {
				callees: ["classnames", "clsx", "cn", "ctl", "cva", "twJoin", "twMerge", "tv"],
			},
		},
		rules: {
			"tailwindcss/enforces-negative-arbitrary-values": "error",
			"tailwindcss/enforces-shorthand": "error",
			"tailwindcss/migration-from-tailwind-2": "error",
			"tailwindcss/no-custom-classname": "error",
			"tailwindcss/no-contradicting-classname": "error",
			"tailwindcss/no-unnecessary-arbitrary-value": "error",
		},
	});
