'use strict';
 
const express = require('express');
 
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users/:userId', (req, res) => {
    console.log(`Received GET request for /users/:userId`);
    res.send(require(`./users${req.params.userId}.json`));
});

app.post('/users', (req, res) => {
  console.log(`Received POST request for /users`);
  const user = req.body;
  user.userId = 1;
  res.send(user);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});