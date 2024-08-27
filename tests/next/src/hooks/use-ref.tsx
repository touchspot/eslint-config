import { useRef } from "react";

export const useRefTest = () => {
	const textRef = useRef("foo");
	textRef.current = "bar";
};
