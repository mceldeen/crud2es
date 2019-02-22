const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 8080;
app.listen(
  port,
  () => console.log(`Listening on port ${port}!`),
);
