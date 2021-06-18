const skillsData = require('../seed_data/skills');
const usersData = require('../seed_data/users');
const usersSkillsData = require('../seed_data/users_skills');

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(usersData);
    })
    .then(function () {
      return knex('skills').del();
    })
    .then(function () {
      return knex('skills').insert(skillsData);
    })
    .then(function () {
        return knex('users_skills').del();
      })
      .then(function () {
        return knex('users_skills').insert(usersSkillsData);
    });
};