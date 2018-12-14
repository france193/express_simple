const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => hello_API(req, res));

app.get('/bye', (req, res) => bye_API(req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let hello_API = function (req, res) {
    res.send('Hello World!');
};

let bye_API = function (req, res) {
    res.send('Bye Bye!');
};

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
