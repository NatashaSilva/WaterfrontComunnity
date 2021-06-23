const skillsData = require("../seed_data/skills");
const interestData = require("../seed_data/interest");

exports.seed = function (knex) {
  return knex("skills")
    .del()
    .then(function () {
      return knex("skills").insert(skillsData);
    })
    .then(function () {
      return knex("interest").del();
    })
    .then(function () {
      return knex("interest").insert(interestData);
    });
};
