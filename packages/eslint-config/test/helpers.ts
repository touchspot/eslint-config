import Path from "node:path";

import { ESLint } from "eslint";
import type { Config } from "eslint/config";
import { describe, expect, it } from "vitest";

const sourceTypes: Record<string, readonly string[]> = {
	js: ["js", "jsx", "mjs", "cjs"],
	ts: ["ts", "tsx", "mts", "cts", "d.ts", "d.cts", "d.mts", "d.css.ts"],
};

export const runSnapshotTest = (filename: string) => (config: readonly Config[]) => {
	const testDir = Path.resolve(import.meta.dirname, "snapshots");
	const variant = Path.relative(testDir, filename).replace(/\.test\.ts$/, "");

	const cases = Object.entries(sourceTypes).flatMap(([language, extensions]) =>
		extensions.map((extension) => [variant, language, extension] as const),
	);

	describe("Snapshot testing", () => {
		describe.each(cases)("[%s][lang:%s][ext:%s]", (_v, _l, extension) => {
			it("should match snapshot", async () => {
				const cwd = Path.resolve("/tmp");
				const linter = new ESLint({ cwd, overrideConfigFile: true, overrideConfig: [...config] });
				const resolved: unknown = await linter.calculateConfigForFile(Path.join(cwd, `source.${extension}`));

				expect.assert.isNotEmpty(resolved);
				expect(resolved).toMatchSnapshot();
			});
		});
	});
};
