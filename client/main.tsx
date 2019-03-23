import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter } from 'react-router-dom';
import { createApolloClient } from './createApolloClient';
import { useUsersQuery } from './gen/graphql-query-types';

const client = createApolloClient();

function UserList() {
  const { data } = useUsersQuery();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {data.users &&
          data.users.map(user => {
            return (
              <li key={user.id}>
                {user.id}:{user.name}
              </li>
            );
          })}
      </ul>
    </>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <BrowserRouter>
          <UserList />
        </BrowserRouter>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('.root'));
