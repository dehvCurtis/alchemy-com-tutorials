const express = require('express');
const app = express();
const port = 3000;
const things = [];

app.get('/', (req, res) => {
    res.send(things);
});

app.post('/', (req, res) => {
    things.push(req.body);
    res.send(things);
  });

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});