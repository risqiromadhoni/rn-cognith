import { Typography } from "@/constants/Typography";
import { Link, Stack } from "expo-router";
import type { FC } from "react";
import { Text, View } from "react-native";
import type { NotFoundContainerProps } from "./type";

export const NotFoundContainer: FC<NotFoundContainerProps> = (props) => {
	const { title = Typography.notFound.default.title } = props;

	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<View>
				<Text>{title}</Text>
				<Link href="/">
					<Text>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
};
