const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const PORT = 3001;
const URL = "mongodb://127.0.0.1:27017/MoviesDB";

const server = express();

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

mongoose    
    .connect(URL)
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

server.listen(PORT, err => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});