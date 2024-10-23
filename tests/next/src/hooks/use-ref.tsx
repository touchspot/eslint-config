import { useEffect, useRef } from "react";

export const useRefTest = () => {
	const textRef = useRef("foo");

	useEffect(() => {
		textRef.current = "bar";
	}, []);
};
