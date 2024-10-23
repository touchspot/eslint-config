import { useEffect, experimental_useEffectEvent as useEffectEvent } from "react";

export const useRouterTest = () => {
	const foo = useEffectEvent(() => {
		// noop
	});

	useEffect(() => {
		foo();
	}, []);
};
