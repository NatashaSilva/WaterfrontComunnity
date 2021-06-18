
exports.up = function(knex) {
    return knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('bio').notNullable();
      table.string('postal').notNullable();
      table.string('password').notNullable();
    })
    .createTable('skills', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
    })    
    .createTable('users_skills', (table) => {
        table.increments('id').primary()
        table
          .integer('user_id')
          .references('id')
          .inTable('users')
        table
          .integer('skills_id')
          .references('id')
          .inTable('skills')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('skills')
    .dropTableIfExists('users_skills')
    .catch(err => {
      console.error(err)
      throw err
    })
};
