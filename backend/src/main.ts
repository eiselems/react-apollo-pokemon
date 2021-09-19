import { ApolloServer } from "apollo-server";

import { environment } from "./env";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection
});

server.listen(environment.port).then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
