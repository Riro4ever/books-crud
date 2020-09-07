const { Router } = require('express');

const booksRouter = require('./booksRouter');

const routes = Router();

routes.use('/books', booksRouter);

module.exports = routes;