import { useEffect, useEffectEvent } from "react";

export const useRouterTest = () => {
	const foo = useEffectEvent(() => {
		// noop
	});

	useEffect(() => {
		foo();
	}, []);
};
