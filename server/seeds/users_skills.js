const skillsData = require('../seed_data/skills');
const usersData = require('../seed_data/users');
const interestData = require('../seed_data/interest');
const usersSkillsData = require('../seed_data/users_skills');
const usersInterestData = require('../seed_data/users_interest');

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
    })
    .then(function () {
        return knex('interest').del();
    })
    .then(function () {
    return knex('interest').insert(interestData);
    })
    .then(function () {
        return knex('users_interest').del();
    })
    .then(function () {
        return knex('users_interest').insert(usersInterestData);
    });
};