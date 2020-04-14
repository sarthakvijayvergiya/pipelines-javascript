'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Node.js Sample Azure Pipelines Deployment!\n');
});

app.get('/sarthak', (req, res) => {
  res.send('Hello Sarthak Sample Azure Pipelines Deployment!\n');
});
var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
