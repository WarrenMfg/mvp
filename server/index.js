const express = require('express');
const morgan = require('morgan');
const client = require('../database/index.js');
const ObjectId = require('mongodb').ObjectId;
const path = require('path');

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.get('/api/quotes', (req, res) => {
  client.db('mvp').collection('quotes').find({}).toArray()
    .then((quotes) => res.send(quotes))
    .catch(() => res.send(404));
});

app.post('/api/quotes', (req, res) => {
  const { quote, student, cohort, dateAdded, dateModified } = req.body;
  client.db('mvp').collection('quotes').insertOne({
    quote,
    student,
    cohort,
    dateAdded,
    dateModified
  })
    .then((response) => res.send(response.ops[0]))
    .catch(() => res.send(404));
});

app.put('/api/quotes', (req, res) => {
  const id = req.body[1];
  const { quote, student, cohort, dateAdded, dateModified } = req.body[0];
  const replacement = {
    quote,
    student,
    cohort,
    dateAdded,
    dateModified
  };
  client.db('mvp').collection('quotes').findOneAndReplace({ _id: ObjectId(id) }, replacement, { returnOriginal: false })
    .then((result) => res.send(result))
    .catch(() => res.send(404));
});

app.delete('/api/quotes', (req, res) => {
  client.db('mvp').collection('quotes').deleteOne({ _id: ObjectId(req.body.id) })
    .then((result) => res.send(result))
    .catch(() => res.send(404));
});


app.use('/', express.static(path.resolve(__dirname, '../client/')));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));