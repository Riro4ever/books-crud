
exports.up = function(knex) {
  return knex.schema.createTable('books', function (table) {
    table.string('id').primary();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.string('publisher').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
