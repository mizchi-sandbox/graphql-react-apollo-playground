import path from 'path';
import dotenv from 'dotenv';
import { createConnection, BaseEntity } from 'typeorm';
import { User } from './entity/User';

const ensureConnection = async () => {
  const conn = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User],
    synchronize: false,
    logging: true,
  });
  BaseEntity.useConnection(conn);
};

export default async () => {
  dotenv.config({ path: path.join(__dirname, '../.env') });
  ensureConnection();
};
