const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello worlda!');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`); // eslint-disable-line
});
