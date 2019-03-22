## TestApp

## Setup

```
$ docker-compose up -d
$ docker exec -it try-typeorm-graphql_mysql_1 bash
# root@01f9ce595ad9:/# mysql -u root -p # Enter password
mysql> CREATE DATABASE IF NOT EXISTS dev;
```

## License

Nest is [MIT licensed](LICENSE).
