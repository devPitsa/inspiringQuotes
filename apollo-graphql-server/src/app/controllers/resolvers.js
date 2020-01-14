const User = require('../models/User');
const Quote = require('../models/Quote');

module.exports = {
    Query: {
        users: () => User.find(),
        loginUser: async (_, { email }) =>  { 
            let user = await User.findOne({ email })
            if (user) {
                return Buffer.from(email).toString('base64')
            } 
        },
        
        quotes: () => Quote.find(),
        quote: (_, { id }) => Quote.findById(id),
    },  
    Mutation: {
        createUser:  (_, { name, email, password }) => User.create({ name, email, password }),
        createQuote: (_, { quote, author }) => Quote.create({ quote, author }),
        
    },
};