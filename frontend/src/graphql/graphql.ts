import { gql } from 'apollo-boost';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export const query_deal = gql`
  query deal {
    deal {
      number
    }
  }
`

export const mutation_reset = gql`
  mutation reset {
    reset {
      success
      cards {
        number
      }
    }
  }
`