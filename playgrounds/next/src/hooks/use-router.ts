import { useRouter } from "next/navigation.js";

export const useRouterTest = () => {
	const router = useRouter();

	router.push("/");
};
