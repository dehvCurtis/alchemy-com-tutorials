const express = require('express');
const app = express();
const port = 3000;
const things = ["this is a thing","also this"];

app.get('/', (req, res) => {
    res.send(things);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});