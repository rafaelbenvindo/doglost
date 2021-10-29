import Knex = require('knex');

export async function up(knex: Knex) {
  return knex.schema.createTable('dogs', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('gender').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('dogs');
}