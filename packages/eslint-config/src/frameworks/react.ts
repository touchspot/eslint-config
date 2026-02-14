import { defineConfig } from "eslint/config";

import { functionalRulesetReact } from "#src/rulesets/functional.js";
import { reactHooksRuleset } from "#src/rulesets/react-hooks.js";
import { reactRuleset } from "#src/rulesets/react.js";

export const react = () => defineConfig(reactRuleset(), reactHooksRuleset(), functionalRulesetReact());
