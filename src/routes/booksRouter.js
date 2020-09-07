const { Router } = require('express');
const { isUuid } = require('uuidv4');

const controller = require('../controllers/booksController');

const routes = Router();

function validateId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid id' });
  }
  return next();
}

routes.get('/',controller.index);

routes.post('/', controller.create);

routes.put('/:id', validateId, controller.update);

routes.delete('/:id', validateId, controller.delete);

module.exports = routes;