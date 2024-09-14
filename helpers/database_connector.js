const {Client} = require('pg');

require('dotenv').config();

const client = new Client({
    host: 'localhost',
    user: 'yashas',
    password: 'password',
    database: 'workouts',
    port: 5432,
});

// Connect to PostgreSQL
// client.connect()
//     .then(() => console.log('Connected to PostgreSQL'))
//     .catch(err => console.error('Connection error', err.stack));

module.exports = {
    client
};