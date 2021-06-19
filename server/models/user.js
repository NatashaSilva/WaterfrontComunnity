const bookshelf = require('../bookshelf');

const User = bookshelf.model('User', {
  tableName: 'users',
  interests: function () {
    return this.belongsToMany('Interest');
  },
  skills: function () {
    return this.belongsToMany('Skill');
  },
});

module.exports = User;
