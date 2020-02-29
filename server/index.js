const express = require('express');
const morgan = require('morgan');
const client = require('../database/index.js');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../client/')));



app.get('/api/quotes', (req, res) => {
  client.db('mvp').collection('quotes').find({}).toArray()
    .then((quotes) => res.send(quotes))
    .catch(() => res.send(404));
});

app.post('/api/quotes', (req, res) => {
  const { quote, author, contributor, dateAdded, dateModified } = req.body;
  client.db('mvp').collection('quotes').insertOne({
    quote,
    author,
    contributor,
    dateAdded,
    dateModified
  })
    .then((response) => res.send(response))
    .catch(() => res.send(404));
});

app.put('/api/quotes', (req, res) => {
  // client.db()
});



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));