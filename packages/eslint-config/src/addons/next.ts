import { defineConfig } from "eslint/config";

import { reactAddon } from "#src/addons/react.js";
import * as env from "#src/env.js";
import { checkFileRulesetNext } from "#src/rulesets/check-file.js";
import { importXRulesetNext } from "#src/rulesets/import-x.js";
import { nextRuleset } from "#src/rulesets/next.js";

export const nextAddon = () =>
	defineConfig(env.browser(), env.node(), reactAddon(), nextRuleset(), checkFileRulesetNext(), importXRulesetNext());
