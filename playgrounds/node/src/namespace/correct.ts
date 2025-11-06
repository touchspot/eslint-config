export class Foo {
	readonly name = "bar";
}

export declare namespace Foo {
	type Bar = "bar";
}

export type Baz = Foo.Bar;
