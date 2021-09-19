const ServiceResolvers = {
    Query: {
      getAllPokemon: async (_: any, args: any) => {
        try {
          const mockPokemon = [{ id: 1, name: "Bulbasaur" }, { id: 2, name: "Ivysaur" }];
          return mockPokemon;
        } catch (error) {
          //TODO: throw
        }
      },
    },
  };
  
  export default ServiceResolvers;