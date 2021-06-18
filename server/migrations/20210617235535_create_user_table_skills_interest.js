
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
    .createTable('interest', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
    }) 
    .createTable('users_interest', (table) => {
        table.increments('id').primary()
        table
          .integer('user_id').unsigned().notNullable()
          .references('id')
          .inTable('users')
        table
          .integer('interest_id').unsigned().notNullable()
          .references('id')
          .inTable('interest')
    })
    .createTable('users_skills', (table) => {
        table.increments('id').primary()
        table
          .integer('user_id').unsigned().notNullable()
          .references('id')
          .inTable('users')
        table
          .integer('skills_id').unsigned().notNullable()
          .references('id')
          .inTable('skills')
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users_skills')
    .dropTableIfExists('users_interest')
    .dropTableIfExists('users')
    .dropTableIfExists('skills')
    .dropTableIfExists('interest')
    .catch(err => {
      console.error(err)
      throw err
    });
};
