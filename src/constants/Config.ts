export const API_CONFIG = {
	baseApiUrl:
		process.env.EXPO_PUBLIC_POKEMON_API_URL ?? "https://pokeapi.co/api/v2",
} as const;

export const QUERY_KEYS = {
	GET_POKEMON_LIST: "GET_POKEMON_LIST",
	GET_POKEMON_DETAIL: "GET_POKEMON_DETAIL",
} as const;
