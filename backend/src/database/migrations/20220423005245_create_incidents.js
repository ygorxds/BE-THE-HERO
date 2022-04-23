/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('incidents', function (table) {

    table.increments(); // adiciona os ids de forma randomica
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ong_id').notNullable() //criei esse campo pra gerar a relação com o banco ong

    table.foreign('ong_id').references('id').inTable('ongs') //a chave forasteira é usada pra só liberar pra cadastrar o dado caso o elemento desejado esteja cadastrado como ongs
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('incidents');

};
