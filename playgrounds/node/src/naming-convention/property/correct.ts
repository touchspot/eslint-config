export const object = {
	foo: 1,
	_tag: 2,
	__typename: 3,
};

export type Type = {
	readonly foo: 1;
	readonly _tag: 2;
	readonly __typename: 3;
};

export class Class {
	readonly foo = 1;
	readonly _tag = 2;
	readonly __typename = 3;
}
