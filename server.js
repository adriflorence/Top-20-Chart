const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');

app.use(cors());

app.get('/', function (req, res) {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response => response.json())
    .then(response => {
        res.setHeader('Content-type', 'application/json')
        res.send(response.feed.entry);
    });
});

app.listen(3001, function () {
    console.log('App is running');
});