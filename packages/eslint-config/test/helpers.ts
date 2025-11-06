import Path from "node:path";

import { ESLint } from "eslint";
import type { Config } from "eslint/config";
import { describe, expect, it } from "vitest";

const sourceTypes = ["js", "jsx", "mjs", "cjs", "ts", "tsx", "mts", "cts", "d.ts", "d.cts", "d.mts", "d.css.ts"];

export const runSnapshotTest = (filename: string) => (config: readonly Config[]) => {
	const testDir = Path.resolve(import.meta.dirname, "snapshots");
	const variant = Path.relative(testDir, filename).replace(/\.test\.ts$/, "");

	describe(`snapshot (${variant})`, () => {
		it.each(sourceTypes)("should match snapshot (%s)", async (sourceType) => {
			const cwd = Path.resolve("/tmp");
			const linter = new ESLint({ cwd, overrideConfigFile: true, overrideConfig: [...config] });
			const resolved: unknown = await linter.calculateConfigForFile(Path.join(cwd, `source.${sourceType}`));

			expect.assert.isNotEmpty(resolved);
			expect(resolved).toMatchSnapshot();
		});
	});
};
