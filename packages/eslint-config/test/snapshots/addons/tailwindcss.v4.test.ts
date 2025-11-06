import config from "@touchspot/eslint-config";
import tailwindcss from "@touchspot/eslint-config/addons/tailwindcss";

import { runSnapshotTest } from "#test/helpers.js";

runSnapshotTest(import.meta.filename)(
	config(
		{
			tsconfigRootDir: "/path/to/dir",
		},
		tailwindcss({ entryPoint: "tailwind.css" }),
	),
);
