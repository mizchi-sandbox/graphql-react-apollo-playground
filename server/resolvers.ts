import { ulid } from 'ulid';
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers,
} from '../gen/graphql-types';
import { User } from './entity/User';

const Query: QueryResolvers = {
  async user(_parent, args, _context, _info) {
    const user = await User.findOne({ id: args.id });
    return user || null;
  },
  async users() {
    const users = await User.find();
    return users;
  },
};

const Mutation: MutationResolvers = {
  async addUser(_parent, args, _context, _info) {
    const newUser = new User();
    newUser.id = ulid();
    newUser.name = args.name;
    await User.save(newUser);
    return newUser;
  },
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
};
