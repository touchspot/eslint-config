import { defineConfig } from "eslint/config";

import { reactAddon } from "#pkg/addons/react.js";
import * as env from "#pkg/env.js";
import { checkFileRulesetNext } from "#pkg/rulesets/check-file.js";
import { importXRulesetNext } from "#pkg/rulesets/import-x.js";
import { nextRuleset } from "#pkg/rulesets/next.js";

export const nextAddon = () =>
	defineConfig(env.browser(), env.node(), reactAddon(), nextRuleset(), checkFileRulesetNext(), importXRulesetNext());
