import { QUERY_KEYS } from "@/constants/Config";
import { getPokemonList } from "@/services/pokemons";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetPokemonList = () => {
	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.GET_POKEMON_LIST],
		initialPageParam: 0,
		queryFn: ({ pageParam }) =>
			getPokemonList({
				limit: 100,
				offset: pageParam,
			}),
		getNextPageParam: (lastPage, allPages) => {
			const nextOffset = allPages.length * 20;
			return nextOffset;
		},
		getPreviousPageParam: (firstPage, allPages) => {
			const prevOffset = allPages.length * 20;
			return prevOffset;
		},
	});
};
