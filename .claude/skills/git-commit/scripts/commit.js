#!/usr/bin/env zx

import { $, fs, tmpfile } from "zx";

// zx passes the first argument at argv[3]
const message = process.argv.at(3);
if (message == null || message === "") {
	console.error("Commit message is required.");
	process.exit(1);
}

const messageFile = tmpfile("message.txt", message);
try {
	const commit = await $`git commit -F ${messageFile}`;
	if (!commit.ok) {
		process.exit(commit.exitCode ?? 1);
	}
} finally {
	await fs.remove(messageFile);
}
