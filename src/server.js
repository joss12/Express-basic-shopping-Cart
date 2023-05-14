

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const AppRouter = require('./router/index')

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(cookieParser());


app.use('/', AppRouter);
// app.use(AppRouter)

module.exports = app