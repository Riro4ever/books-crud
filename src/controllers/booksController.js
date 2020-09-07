const connection = require('../database/connection');
const { uuid } = require('uuidv4');

module.exports = {
  async index(request, response) {
    const books = await connection('books')
      .select([
        'id',
        'title',
        'author',
        'publisher'
      ]);
    return response.json(books);
  },

  async create(request, response) {
    const { title, author, publisher } = request.body;
    const id = uuid();

    await connection('books').insert({
      id,
      title,
      author,
      publisher,
    });

    return response.json({ id });
  },

  async update(request, response) {
    const { id } = request.params;
    const { title, author, publisher } = request.body;

    const books = await connection('books')
      .where('id', id)
      .select('id')
      .first();

    if(!books) {
      return response.status(400).json({ error: "Id not found" });
    }

    await connection('books')
      .where('id', id)
      .update({
        title,
        author,
        publisher,
      });

    return response.status(204).send();
  },

  async delete(request, response) {
    const { id } = request.params;

    const books = await connection('books')
      .where('id', id)
      .select('id')
      .first();

    if(!books) {
      return response.status(400).json({ error: "Id not found" });
    }

    await connection('books')
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
};