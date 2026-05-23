import type { FC } from "react";

export const TailwindCSSValidExamples: FC = () => (
	<>
		<div className="text-red-500!" />
		<div className="font-(--display)" />
		<div className="block-full inline-full" />
		<div className="mx-4" />
		<div className="rounded-sm" />
	</>
);

export const TailwindCSSInvalidExamples: FC = () => (
	<>
		<div
			className="!text-red-500" // eslint-disable-line better-tailwindcss/enforce-canonical-classes
		/>
		<div
			className="font-[var(--display)]" // eslint-disable-line better-tailwindcss/enforce-canonical-classes
		/>
		<div
			className="size-full" // eslint-disable-line better-tailwindcss/enforce-logical-properties
		/>
		<div
			className="ms-4 me-4" // eslint-disable-line better-tailwindcss/enforce-shorthand-classes
		/>
		<div
			className="rounded" // eslint-disable-line better-tailwindcss/no-deprecated-classes
		/>
		<div
			className="data-[is-selected]:opacity-100" // eslint-disable-line better-tailwindcss/enforce-canonical-classes
		/>
		<div
			className="flex grid" // eslint-disable-line better-tailwindcss/no-conflicting-classes
		/>
		<div
			className="rounded-sm rounded-sm" // eslint-disable-line better-tailwindcss/no-duplicate-classes
		/>
		<div
			// prettier-ignore
			className=" text-black    underline  hover:opacity-10   " // eslint-disable-line better-tailwindcss/no-unnecessary-whitespace
		/>
		<div
			className="foo" // eslint-disable-line better-tailwindcss/no-unknown-classes
		/>
	</>
);
