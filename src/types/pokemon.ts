interface PokemonList {
	name: string;
	url: string;
}

export interface GetPokemonListResponse {
	count: number;
	next: string;
	previous: string | null;
	results: PokemonList[];
}
