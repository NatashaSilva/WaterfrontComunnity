const express = require ('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile'));

router.get('/', (req, res) => {
    knex
      .select('*')
      .from('users')
      .then((users) => {
        const userDataPromise = users.map((user) => {
          const skillsPromise = knex.select('name')
            .from('users_skills')
            .join('skills', 'skills.id', 'users_skills.skills_id')
            .where('user_id', user.id)

          const interestsPromise = knex.select('name')
            .from('users_interest')
            .join('interest', 'interest.id', 'users_interest.interest_id')
            .where('user_id', user.id)
          
          return Promise.all([skillsPromise, interestsPromise]).then(res => {
            user.skills = res[0].map((skill)=> skill.name);
            user.interests = res[1].map((int)=> int.name);
            return user;
          })
        });

        Promise.all(userDataPromise).then((values) => {
            res.json(values);
        });
      })
      .catch((err) => res.send('Error getting users data'));
});

router.post('/add-users', (req,res) => {

  console.log(req.body)

})

module.exports = router;