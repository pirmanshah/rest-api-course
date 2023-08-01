const cors = require('cors');
const express = require('express');
const router = require('@routers/router');
const errorController = require('@controllers/errorController');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', router);
app.all('*', errorController.notFound);
app.use(errorController.serverError);

module.exports = app;
