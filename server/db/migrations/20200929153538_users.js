exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('email')
    table.binary('hash')
    table.boolean('isAdmin')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
