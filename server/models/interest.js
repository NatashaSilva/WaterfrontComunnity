const bookshelf = require('../bookshelf');

const Interest = bookshelf.model('interest', {
  tableName: 'interest',
  user: function () {
    return this.belongsToMany('User');
  },
});

module.exports = Interest;
