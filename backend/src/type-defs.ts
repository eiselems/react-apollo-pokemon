import { gql } from 'apollo-server';

export default gql`

    type Pokemon {
        id: Int!,
        name: String!
    }

  type Query {
    getAllPokemon: [Pokemon]
  }
`;