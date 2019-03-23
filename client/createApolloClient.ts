import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Note you don't have to use any particular http server, but
// we're using Express in this example
export const createApolloClient = () =>
  new ApolloClient({
    // ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: createHttpLink({
      uri: 'http://localhost:3333/graphql',
      // credentials: 'same-origin',
      // headers: {
      //   cookie: req.header('Cookie'),
      // },
    }),
    cache: new InMemoryCache(),
  });
