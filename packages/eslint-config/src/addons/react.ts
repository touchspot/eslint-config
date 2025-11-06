import { defineConfig } from "eslint/config";

import * as env from "#src/env.js";
import { functionalRulesetReact } from "#src/rulesets/functional.js";
import { reactHooksRuleset } from "#src/rulesets/react-hooks.js";
import { reactRuleset } from "#src/rulesets/react.js";

export const reactAddon = () =>
	defineConfig(env.browser(), reactRuleset(), reactHooksRuleset(), functionalRulesetReact());
