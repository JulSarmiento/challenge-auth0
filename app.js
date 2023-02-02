const express = require('express');
const logs = require('morgan');
const app = express();


const indexRouter = require('./src/routes/index');
const errorHandler = require('./src/middlewares/error.midlleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logs('dev'));

app.use('/', indexRouter);

app.use(errorHandler)

module.exports = app;