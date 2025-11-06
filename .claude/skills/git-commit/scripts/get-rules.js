#!/usr/bin/env zx

import { $ } from "zx";

const printConfig = await $`commitlint --print-config=json`
	.pipe($`jq '{rules: (.rules | with_entries(select(.value[0] != 0)))}'`)
	.pipe($`prettier --stdin-filepath=config.json`);

console.log(printConfig.stdout);
