import "react";

declare module "react" {
	interface CSSProperties {
		readonly [`--${string}`]?: string;
	}
}
