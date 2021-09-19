const ServiceResolvers = {
    Query: {
      getAllPokemon: async (_: any, args: any) => {
        try {
          const mockPokemon = [{ id: 1, name: "xyz" }, { id: 2, name: "abc" }];
          return mockPokemon;
        } catch (error) {
          //TODO: throw
        }
      },
    },
  };
  
  export default ServiceResolvers;