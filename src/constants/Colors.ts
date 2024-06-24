/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import type { Theme } from "@react-navigation/native";
import colors from "tailwindcss/colors";

export const APP_COLORS: Readonly<typeof colors> = {
	...colors,
} as const;

export const NAVIGATION_COLORS: Record<"light" | "dark", Theme> = {
	light: {
		dark: false,
		colors: {
			primary: APP_COLORS.blue[500],
			background: APP_COLORS.white,
			card: APP_COLORS.white,
			text: APP_COLORS.gray[900],
			border: APP_COLORS.gray[200],
			notification: APP_COLORS.pink[500],
		},
	},
	dark: {
		dark: true,
		colors: {
			primary: APP_COLORS.blue[500],
			background: APP_COLORS.gray[900],
			card: APP_COLORS.gray[800],
			text: APP_COLORS.gray[100],
			border: APP_COLORS.gray[700],
			notification: APP_COLORS.pink[500],
		},
	},
};

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
	light: {
		text: "#11181C",
		background: "#fff",
		tint: tintColorLight,
		icon: "#687076",
		tabIconDefault: "#687076",
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: "#ECEDEE",
		background: "#151718",
		tint: tintColorDark,
		icon: "#9BA1A6",
		tabIconDefault: "#9BA1A6",
		tabIconSelected: tintColorDark,
	},
};
