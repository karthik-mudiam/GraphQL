import express from 'express';
import schema from './schema';
import {graphql} from 'graphql';
import bodyParser from 'body-parser';

var app = express();

// parse POST body as text
app.use(bodyParser.text({ type: 'application/graphql' }));

app.get('/', function (req, res) {
  console.log('Root call'); 
});

app.post('/graphql', function (req, res) {
  console.log('Received a GraphQL request');
  graphql(schema,req.body).then(result => res.send(result));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

