import { User } from './entity/user';
import {
  Column,
  createConnection,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

const main = async () => {
  const conn = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'dev',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
  });
  const u = new User();
  u.name = 'aaa';
  // conn.manager.insert(u);
};

main();
