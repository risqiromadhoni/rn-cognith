import type { OnPressEvent } from "@/types/event";
import { Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import type { FC } from "react";
import { Platform } from "react-native";
import type { LinkExternalProps } from "./type";

export const ExternalLink: FC<LinkExternalProps> = ({ href, ...rest }) => {
	const _handleOnPress = async (event: OnPressEvent<HTMLAnchorElement>) => {
		if (Platform.OS !== "web") {
			event.preventDefault();
			await openBrowserAsync(href);
		}
	};

	return (
		<Link target="_blank" {...rest} href={href} onPress={_handleOnPress} />
	);
};
