import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import resolvers from './resolvers.js';
import { Data } from './data.js';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' })

export interface MyContext {
  contextData: {
    card: Data
  }
}

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

const myData = new Data()

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      contextData: {
        card: myData
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);