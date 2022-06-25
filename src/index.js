const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'Hello, Express with JSON'});
})

app.listen(3000);