'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send("Hello World! New AWS ECS!");
})

app.listen(3000, () => {
  console.log('Server is listening on PORT: 3000');
});
