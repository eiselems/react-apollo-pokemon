//TODO: move to database
const pokemons = [
  { id: 1, name: "Bulbasaur" },
  { id: 2, name: "Ivysaur" },
];

module.exports = {
  Query: {
    getAllPokemon: (_: any, __: any, {dataSources}:{dataSources: any}) => dataSources.pokemonAPI.getAllPokemons(),
    getPokemonDetail: (_: any, { id }: { id: number }) => pokemons[id - 1],
  }
};