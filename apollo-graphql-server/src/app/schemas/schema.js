const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }
    type Quote {
        id: ID!
        quote: String
        author: String
    }
    type Query {
        users: [User!]!

        loginUser(email: String!): String!
        quotes: [Quote!]!
        quote(id: ID!): Quote
    }
    type Mutation {
        createUser( name: String!, email: String!, password: String! ): User 
        createQuote( quote: String!, author: String! ): Quote 

    }
`;

module.exports = typeDefs;
