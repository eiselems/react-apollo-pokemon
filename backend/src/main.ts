import { ApolloServer } from "apollo-server";

import { environment } from "./env";
import * as typeDefs from './type-defs.graphql';

const resolvers = require('./resolvers');
const PokemonAPI = require('./datasources/pokemon');


const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources: () => ({
    pokemonAPI: new PokemonAPI(),
  }),
  introspection: environment.apollo.introspection
});

server.listen(environment.port).then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
