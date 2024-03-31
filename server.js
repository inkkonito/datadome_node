// server.js
const DataDome = require('@datadome/node-module');
const express = require('express');

//Create an app
const app = express();
const datadomeClient = new DataDome('tcukRE5XiZCumB2', 'api.datadome.co');

app.use(function(req, resp, next) {
    datadomeClient.authCallback(req, resp, function() {
        // apiserver passed request, move forward
        next();
    }, function() {
        // nothing to do when blocked
    });
});

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);