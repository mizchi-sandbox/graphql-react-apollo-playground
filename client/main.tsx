import React from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import { ApolloProvider, Query } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { createApolloClient } from './createApolloClient';

const client = createApolloClient();

const GET_USERS = gql`
  {
    users {
      id
      name
    }
  }
`;

function UserList() {
  return (
    <Query query={GET_USERS}>
      {data => {
        return <div>data: {JSON.stringify(data.data)}</div>;
      }}
    </Query>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <UserList />
      </BrowserRouter>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('.root'));
