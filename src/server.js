import {ApolloServer} from 'apollo-server';
import typeDefs from './Schemas/typeDefs';
import resolvers from './Resolvers/index';
require('dotenv/config');

import mongoose from 'mongoose';

const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME, APP_PORT} = process.env;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});


const server = new ApolloServer({
  typeDefs, 
  resolvers
});

server.listen({port: APP_PORT}).then(() => {
  console.log(`Server is running in port ${APP_PORT}`);
});