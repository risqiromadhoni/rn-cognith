import type { Link } from "expo-router";
import type { ComponentProps } from "react";

export type LinkExternalProps = Omit<ComponentProps<typeof Link>, "href"> & {
	href: string;
};
