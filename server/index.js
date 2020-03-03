const express = require('express');
const morgan = require('morgan');
const client = require('../database/index.js');
const ObjectId = require('mongodb').ObjectId;
const path = require('path');
const fs = require('fs');
const zlib = require('zlib');
const { getChart } = require('billboard-top-100');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());

const stream = fs.createReadStream(path.resolve(__dirname, '../client/bundle.js'));


app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/images/hr.png'));
});

app.get('/bundle.js', (req, res) => {
  const gzip = zlib.createGzip();
  res.set({'Content-Encoding': 'gzip'});
  stream.pipe(gzip).pipe(res);
});

app.use('/', express.static(path.resolve(__dirname, '../client/')));

app.get('/loading.gif', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/images/loading.gif'));
});

app.get('/api/top100', (req, res) => {
  getChart((err, chart) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.set({'Cache-Control': 'max-age=86400'});
      res.send(chart);
    }
  });
});

app.get('/api/quotes', (req, res) => {
  client.db('mvp').collection('quotes').find({}).toArray()
    .then((quotes) => res.send(quotes))
    .catch(() => res.sendStatus(404));
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
    .catch(() => res.sendStatus(404));
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
    .catch(() => res.sendStatus(404));
});

app.delete('/api/quotes', (req, res) => {
  client.db('mvp').collection('quotes').deleteOne({ _id: ObjectId(req.body.id) })
    .then((result) => res.send(result))
    .catch(() => res.sendStatus(404));
});



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));