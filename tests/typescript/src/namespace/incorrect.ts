export class Foo {
	readonly name = "bar";
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Foo {
	export type Bar = "bar";
}
