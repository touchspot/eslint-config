type Value = string | number | boolean | null | undefined;
declare const f: (arg: unknown) => void;

declare const a: Value;
declare const b: Value;
f(a != null && a !== false ? a : b);
