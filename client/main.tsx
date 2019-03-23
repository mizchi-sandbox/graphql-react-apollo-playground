import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter } from 'react-router-dom';
import { createApolloClient } from './createApolloClient';
import {
  useUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
} from './gen/graphql-client-api';

const client = createApolloClient();

function UserList() {
  const usersQuery = useUsersQuery();
  const addUserMutation = useAddUserMutation();
  const deleteUserMutation = useDeleteUserMutation();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {!usersQuery.loading &&
          usersQuery.data.users.map(user => {
            return (
              <li key={user.id}>
                {user.id}:{user.name}
                <button
                  onClick={async () => {
                    await deleteUserMutation({ variables: { id: user.id } });
                    usersQuery.refetch();
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul>
      <button
        onClick={async () => {
          await addUserMutation({
            variables: { name: Math.random().toString() },
          });
          usersQuery.refetch();
        }}
      >
        addUser
      </button>
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
