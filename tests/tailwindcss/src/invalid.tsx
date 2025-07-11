import type { FC } from "react";

export const Invalid: FC = () => (
	<>
		<div
			// prettier-ignore
			className="w-full flex" // eslint-disable-line better-tailwindcss/enforce-consistent-class-order
		/>
		<div
			className="font-[var(--display)]" // eslint-disable-line better-tailwindcss/enforce-consistent-variable-syntax
		/>
		<div
			className="pt-4 pr-4 pb-4 pl-4" // eslint-disable-line better-tailwindcss/enforce-shorthand-classes
		/>
		<div
			className="flex grid" // eslint-disable-line better-tailwindcss/no-conflicting-classes
		/>
		<div
			// prettier-ignore
			className="rounded rounded" // eslint-disable-line better-tailwindcss/no-duplicate-classes
		/>
		<div
			// prettier-ignore
			className=" text-black    underline  hover:opacity-10   " // eslint-disable-line better-tailwindcss/no-unnecessary-whitespace
		/>
		<div
			className="foo" // eslint-disable-line better-tailwindcss/no-unregistered-classes
		/>
	</>
);
