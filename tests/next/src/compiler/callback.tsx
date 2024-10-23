import type { FC } from "react";

export const Component: FC = () => {
	const handleClick = () => {
		// noop
	};

	return <div onClick={handleClick} />;
};
