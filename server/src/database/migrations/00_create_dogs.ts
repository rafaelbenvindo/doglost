import Knex = require('knex');

export async function up(knex: Knex) {
  return knex.schema.createTable('dogs', table => {
    table.increments('id').primary();
    table.string('name', 40).notNullable();
    table.string('gender', 1).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('dogs');
}