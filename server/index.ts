import fs from 'fs';
import path from 'path';
// import express from 'express';
// import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import setup from './setup';

const typeDefs = fs
  .readFileSync(path.join(__dirname, 'schema.graphql'))
  .toString();

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// const app = express();

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     graphiql: true,
//   }),
// );

// app.get('/', (req, res) => {
//   res.send('ok');
// });

// setup().then(() => {
//   app.listen(3333, () => {
//     console.log(`🚀 Server ready at http://localhost:3333`);
//   });
// });

import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';
// import { myGraphQLSchema } from './my-schema';

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
