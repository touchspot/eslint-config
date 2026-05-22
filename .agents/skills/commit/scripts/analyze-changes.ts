import { $, fs, path } from "zx";

const WORKSPACE_ROOT = await $`printf %s "$(pnpm --workspace-root exec pwd)"`.text();

const dependencyTypes = ["dependencies", "devDependencies", "optionalDependencies", "peerDependencies"] as const;

type DependencyType = (typeof dependencyTypes)[number];

type DependencyUsage = {
	readonly scope: string;
	readonly dependencyTypes: readonly DependencyType[];
};

type DependenciesAnalysis = Record<string, readonly DependencyUsage[]>;

type AnalysisResult = {
	readonly scopes: readonly string[];
	readonly hasProductionDependencyUpdates: boolean;
};

const detectFileScopes = async (): Promise<ReadonlySet<string>> => {
	const workspaces = await $`pnpm --recursive list --depth=-1 --parseable`.lines();
	const stagedFilePaths = await $`pnpm --workspace-root exec git diff --staged --name-only`.lines();

	const detectScope = (filePath: string) => {
		for (const workspace of workspaces) {
			if (workspace === WORKSPACE_ROOT) continue;
			const workspacePrefix = `${path.relative(WORKSPACE_ROOT, workspace)}/`;
			if (filePath.startsWith(workspacePrefix)) {
				return path.basename(workspace);
			}
		}
		return "global";
	};

	const scopes = new Set<string>();
	for (const filePath of stagedFilePaths) {
		scopes.add(detectScope(filePath));
	}
	return scopes;
};

const listUpdatedDependencies = async (): Promise<ReadonlySet<string>> => {
	const dependencies = new Set<string>();

	const diff =
		await $`git diff --staged --exit-code -- ${path.resolve(WORKSPACE_ROOT, "pnpm-workspace.yaml")}`.nothrow();
	if (diff.exitCode === 0) return dependencies;

	const lines = diff.lines().filter((line) => /^[+-]/.test(line));
	for (const line of lines) {
		const match = /^[+-]\s*"?([^":]+)"?\s*:/.exec(line);
		const dependency = match?.[1];
		if (dependency != null && dependency !== "catalog") {
			dependencies.add(dependency);
		}
	}

	return dependencies;
};

const analyzeDependencies = async (dependencies: ReadonlySet<string>): Promise<DependenciesAnalysis> => {
	type Workspace = { readonly name: string; readonly path: string };
	const workspacesJson = await $`pnpm --recursive list --depth -1 --json`.text();
	const workspaces = JSON.parse(workspacesJson) as unknown as readonly Workspace[];

	const analysis: DependenciesAnalysis = {};
	for (const dependency of dependencies) {
		const usages = new Set<DependencyUsage>();
		for (const workspace of workspaces) {
			const directoryName = path.relative(path.resolve(workspace.path, ".."), workspace.path);
			const scope = workspace.path === WORKSPACE_ROOT ? "global" : directoryName;
			type PackageJson = Partial<Record<DependencyType, Record<string, string>>>;
			const packageJson = JSON.parse(
				fs.readFileSync(path.resolve(workspace.path, "package.json"), "utf8"),
			) as PackageJson;
			const matchedDependencyTypes = dependencyTypes.filter(
				(type) => packageJson[type] != null && dependency in packageJson[type],
			);
			if (matchedDependencyTypes.length > 0) {
				usages.add({ scope, dependencyTypes: matchedDependencyTypes });
			}
		}
		if (usages.size > 0) {
			analysis[dependency] = [...usages];
		}
	}
	return analysis;
};

const mergeScopes = (fileScopes: ReadonlySet<string>, dependencyAnalysis: DependenciesAnalysis): readonly string[] => {
	const scopes = new Set(fileScopes);
	for (const usages of Object.values(dependencyAnalysis)) {
		for (const usage of usages) {
			scopes.add(usage.scope);
		}
	}
	return [...scopes];
};

const hasProductionUpdates = (analysis: DependenciesAnalysis): boolean =>
	Object.values(analysis).some((usages) => usages.some((usage) => usage.dependencyTypes.includes("dependencies")));

const fileScopes = await detectFileScopes();
const dependencies = await listUpdatedDependencies();
const dependencyAnalysis = await analyzeDependencies(dependencies);

const result: AnalysisResult = {
	scopes: mergeScopes(fileScopes, dependencyAnalysis),
	hasProductionDependencyUpdates: hasProductionUpdates(dependencyAnalysis),
};

console.log(JSON.stringify(result, null, 2));
