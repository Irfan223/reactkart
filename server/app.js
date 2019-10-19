var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var cors = require('cors');
var cookieParser = require('cookie-parser');
app.use(cors());
var routes = require('./CustomerAPI/routes/index.js');
app.use('/api', routes);
var port = process.env.PORT || 4000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
.then(client => {
  const db = client.db('printing');
  const collection = db.collection('login');
  app.locals.collection = collection;
  console.log("MongoDB Database Connected Successfully!");
  app.listen(port, () => console.info(`REST API running on port ${port}`));
}).catch(error => console.error(error));