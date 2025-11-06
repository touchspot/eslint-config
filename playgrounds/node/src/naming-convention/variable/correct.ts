const obj1 = {
	foo: 1,
	bar: 2,
};

const { foo: _foo, ...obj2 } = obj1;

export { obj2 };

const f = <T>(callback: (a: number, b: number) => T) => callback(1, 2);

export const g = f((_a, b) => b);
