import { defineConfig } from "eslint/config";

import * as env from "#src/env.js";
import { react } from "#src/frameworks/react.js";
import { checkFileRulesetNext } from "#src/rulesets/check-file.js";
import { importXRulesetNext } from "#src/rulesets/import-x.js";
import { nextRuleset } from "#src/rulesets/next.js";

export const next = () =>
	defineConfig(env.browser(), env.node(), react(), nextRuleset(), checkFileRulesetNext(), importXRulesetNext());
