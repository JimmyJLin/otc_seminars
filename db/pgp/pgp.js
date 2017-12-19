const pgp = require('pg-promise')();

const keys = require('../../config/keys');

const connection = keys.DATABASE_URL;

const db = pgp(connection);

module.exports = db;
