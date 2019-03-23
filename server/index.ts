import setup from './setup';
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { resolvers } from './resolvers';

const typeDefs = fs
  .readFileSync(path.join(__dirname, '../graphql/schema.graphql'))
  .toString();

const PORT = 3333;
const app = express();

const apolloServer = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers: resolvers as any,
});

apolloServer.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.send('It works');
});

setup().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:3333`);
  });
});
