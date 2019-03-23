import fs from 'fs';
import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import setup from './setup';

const typeDefs = fs
  .readFileSync(path.join(__dirname, '../graphql/schema.graphql'))
  .toString();

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';

const PORT = 3333;
const app = express();

const apolloServer = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers: resolvers as any,
});
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

apolloServer.applyMiddleware({ app });

// const pubsub = new PubSub();
// const server = createServer(app);

setup().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:3333`);

    // new SubscriptionServer(
    //   {
    //     execute,
    //     subscribe,
    //     schema,
    //   },
    //   {
    //     server: app,
    //     path: '/subscriptions',
    //   },
    // );
  });
});
