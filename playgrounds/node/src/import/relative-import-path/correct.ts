import "./fixture.js";

import * as i1 from "node:assert";
import i2 from "node:path";

import * as i3 from "@dummy/package";
import * as i4 from "dummy-package";

import * as i5 from "#src/import/fixture.js";

import * as i6 from "./fixture.js";

export const exports = { i1, i2, i3, i4, i5, i6 };
