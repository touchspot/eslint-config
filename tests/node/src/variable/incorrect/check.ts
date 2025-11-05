const obj1 = {
	foo: 1,
	bar: 2,
};

const { foo: __foo, ...obj2 } = obj1; // eslint-disable-line @typescript-eslint/naming-convention

export { obj2 };

const f = <T>(callback: (a: number, b: number) => T) => callback(1, 2);

export const g = f((__a, b) => b); // eslint-disable-line @typescript-eslint/naming-convention
