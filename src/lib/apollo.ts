import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cli1qsgdb02c301ul33ocdhsa/master',
  cache: new InMemoryCache()
});