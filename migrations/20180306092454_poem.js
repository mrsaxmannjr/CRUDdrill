exports.up = function (knex, Promise) {
  return knex.schema.createTable("poem", table => {
    table.increments("id").primary();
    table.string("title");
    table.string("author");
    table.specificType("lines", "text[]");
    table.integer("likes");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("poem");
};
