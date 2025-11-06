import config from "@touchspot/eslint-config";

import { runSnapshotTest } from "#test/helpers.js";

runSnapshotTest(import.meta.filename)(
	config({
		tsconfigRootDir: "/path/to/dir",
	}),
);
