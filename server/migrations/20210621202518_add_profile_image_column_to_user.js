exports.up = function (knex) {
  return knex.schema.alterTable("users", (table) => {
    table.string("profile_image");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("users", (table) => {
    table.dropColumn("profile_image");
  });
};
