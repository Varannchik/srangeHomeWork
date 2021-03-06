const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);



module.exports = app;
