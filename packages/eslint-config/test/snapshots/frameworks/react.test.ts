import config from "@touchspot/eslint-config";
import react from "@touchspot/eslint-config/react";

import { runSnapshotTest } from "#test/helpers.js";

runSnapshotTest(import.meta.filename)(
	config(
		{
			rootDir: "/path/to/dir",
		},
		react(),
	),
);
