## TestApp

react, apollo, graphql-codegen playground

## Stack

- graphql-codegen
- react-apollo
- apollo-server
- typeorm
- docker
  - mysql
  - redis

## TODO

- react-router
- SSR
- apollo-link-state
- production build
- deployment
- subscription

## Setup

```
$ docker-compose up -d
$ docker exec -it (your-cloned-dirname)-graphql_mysql_1 bash
# root@01f9ce595ad9:/# mysql -u root -p # Enter password
mysql> CREATE DATABASE IF NOT EXISTS dev;
```

## Development

```
$ docker-compose up -d
$ yarn dev
```

## Deployment

- Edit `.env`'s mysql password

WIP

## License

Nest is [MIT licensed](LICENSE).
