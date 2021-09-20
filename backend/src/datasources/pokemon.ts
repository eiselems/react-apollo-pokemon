const { RESTDataSource } = require("apollo-datasource-rest");

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2/";
  }

  async pokemonReducer(
    pokemon: { name: string; url: string },
    pokemonNumber: number
  ) {
    //TODO: we could also use the url contained in the pokemon var - would be more stable, need to check how we call absolute urls here
    // using a static url prefix fixes the n+1 issue here
    // const singleDetails = (await this.get(`pokemon/${pokemonNumber}`)) as { sprites: { other: { "official-artwork": string } } };
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png` 

    let result = {
      id: pokemonNumber,
      name: pokemon.name,
      img: imageUrl
    };

    console.log(result);


    return result;
  }

  async getAllPokemons() {
    const response = await this.get("pokemon", {
      limit: 151,
    }) as {results: Array<{name: string, url: string}>};
    return Array.isArray(response.results)
      ? response.results.map((pokemon, index) =>
          this.pokemonReducer(pokemon, index + 1)
        )
      : [];
  }
}

module.exports = PokemonAPI;
