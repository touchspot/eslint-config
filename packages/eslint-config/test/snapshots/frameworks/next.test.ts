import config from "@touchspot/eslint-config";
import next from "@touchspot/eslint-config/next";

import { runSnapshotTest } from "#test/helpers.js";

runSnapshotTest(import.meta.filename)(
	config(
		{
			tsconfigRootDir: "/path/to/dir",
		},
		next(),
	),
);
