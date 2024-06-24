import type { Pagination } from "@/types/pagination";
import type { GetPokemonListResponse } from "@/types/pokemon";
import axios from "./axios";

type GetPokemonListParams = Pagination;

export const getPokemonList = (
	param: GetPokemonListParams = {
		limit: 20,
		offset: 0,
	},
) => {
	return axios.get<GetPokemonListResponse>("/pokemon", {
		params: {
			...param,
		},
	});
};
