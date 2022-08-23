require('dotenv').config();

const {Client, Pool} = require('pg');

const client = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});


client
    .connect()
    .then(() => console.log('connected'))
    .catch((err) => console.error('connection error', err.stack));

module.exports.client = client;