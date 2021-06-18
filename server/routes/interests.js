const express = require ('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile'));

router.get('/', (_req, res) => {
    knex
      .select('*')
      .from('interest')
      .then((interests) => {
          res.json(interests);
      })
      .catch((err) => res.send('Error getting interests', err));
});

module.exports = router;