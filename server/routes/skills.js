const express = require ('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile'));

router.get('/', (_req, res) => {
    knex
      .select('*')
      .from('skills')
      .then((skills) => {
          res.json(skills);
      })
      .catch((err) => res.send('Error getting skills', err));
});

module.exports = router;