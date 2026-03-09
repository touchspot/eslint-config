import type { defineConfig } from "eslint/config";

export type ConfigArray = ReturnType<typeof defineConfig>;
export type Config = ConfigArray[number];
