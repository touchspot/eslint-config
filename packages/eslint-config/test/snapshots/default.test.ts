import config from "@touchspot/eslint-config";

import { runSnapshotTest } from "#test/helpers.js";

runSnapshotTest(import.meta.filename)(
	config({
		rootDir: "/path/to/dir",
	}),
);
