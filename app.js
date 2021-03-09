const express = require('express');
const routes = require('./routes/server');

const app = express();
app.use('/', routes);

module.exports = server;