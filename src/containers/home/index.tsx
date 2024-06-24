import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useGetPokemonList } from "@/hooks/queries/pokemons";
import React from "react";
import { Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const HomeContainer = () => {
	const resPokemonList = useGetPokemonList();

	if (resPokemonList.isLoading) return <ThemedText>Loading...</ThemedText>;

	const pokemons =
		resPokemonList?.data?.pages?.flatMap((page) => page.data.results) ?? [];

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/partial-react-logo.png")}
					className="h-[178px] w-[290px] bottom-0 left-0 absolute"
				/>
			}
		>
			<ThemedView>
				<ThemedText type="title">Cognith Pokemon</ThemedText>
			</ThemedView>
			<ThemedView
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					gap: 10,
				}}
			>
				{pokemons.map((pokemon) => (
					<ThemedText key={pokemon.name}>{pokemon.name}</ThemedText>
				))}
			</ThemedView>
		</ParallaxScrollView>
	);
};

export default HomeContainer;
