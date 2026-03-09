import { defineConfig } from "eslint/config";

import { functionalRulesetReact } from "#src/rulesets/functional.js";
import { reactHooksRuleset } from "#src/rulesets/react-hooks.js";
import { reactRuleset } from "#src/rulesets/react.js";
import type { ConfigArray } from "#src/types.js";

export const react = (): ConfigArray => defineConfig(reactRuleset(), reactHooksRuleset(), functionalRulesetReact());
