import config from "@touchspot/eslint-config";
import tailwindcss from "@touchspot/eslint-config/tailwindcss";

import { runSnapshotTest } from "#test/helpers.js";

runSnapshotTest(import.meta.filename)(
	config(
		{
			rootDir: "/path/to/dir",
		},
		tailwindcss({ version: 3 }),
	),
);
