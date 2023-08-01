const cors = require('cors');
const express = require('express');
const router = require('@routers/router');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', router);

module.exports = app;
