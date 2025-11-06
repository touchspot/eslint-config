import { atom } from "jotai";

const FooAtom = atom(0);
FooAtom.debugLabel = "FooAtom";
FooAtom.onMount = () => void 0;
