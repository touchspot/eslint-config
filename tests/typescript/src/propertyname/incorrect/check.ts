export const object = {
	_foo: 1, // eslint-disable-line @typescript-eslint/naming-convention
};

export type Type = {
	readonly _foo: 1; // eslint-disable-line @typescript-eslint/naming-convention
};

export class Class {
	readonly _foo = 1; // eslint-disable-line @typescript-eslint/naming-convention
}
