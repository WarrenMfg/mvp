const MongoClient = require('mongodb').MongoClient;
const URL = require('./URL.js');

const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();

module.exports = client;