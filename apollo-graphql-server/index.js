const { ApolloServer } = require('apollo-server-lambda');
// const { ApolloServer } = require('apollo-server');
const resolvers = require('./src/app/controllers/resolvers');
const mongoose = require('mongoose');

const typeDefs = require('./src/app/schemas/schema');


mongoose.connect("mongodb+srv://vinidias:vini1234@inspiringp-unqzz.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const server = new ApolloServer({
    
    typeDefs,
    resolvers,
    
});


exports.graphqlHandler = server.createHandler({
    cors: {
      origin: '*',
      credentials: true,
    },
});
