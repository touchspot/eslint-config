import { defineConfig } from "eslint/config";

import * as env from "#pkg/env.js";
import { functionalRulesetReact } from "#pkg/rulesets/functional.js";
import { reactHooksRuleset } from "#pkg/rulesets/react-hooks.js";
import { reactRuleset } from "#pkg/rulesets/react.js";

export const reactAddon = () =>
	defineConfig(env.browser(), reactRuleset(), reactHooksRuleset(), functionalRulesetReact());
