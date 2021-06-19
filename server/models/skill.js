const bookshelf = require('../bookshelf');

const Skill = bookshelf.model('skills', {
  tableName: 'skills',
  user: function () {
    return this.belongsToMany('User');
  },
});

module.exports = Skill;
