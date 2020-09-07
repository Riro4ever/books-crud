const { Router } = require('express');

const validator = require('../middlewares/validator');
const controller = require('../controllers/booksController');

const routes = Router();

routes.get('/',controller.index);

routes.post('/', controller.create);

routes.put('/:id', validator.validateId, controller.update);

routes.delete('/:id', validator.validateId, controller.delete);

module.exports = routes;