const express = require('express');
const app = express();
const knex = require('knex')(require('./knexfile'));
const PORT = process.env.PORT || 5000;

// basic home route
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// get all warehouses data
// app.get('/users', (req, res) => {
//   knex
//     .select('*')
//     .from('users')
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => res.send('Error getting users data'));
// });

app.get('/users', (req, res) => {
      knex
        .select('*')
        .from('users')
        .then((users) => {
            const promisesSkills = users.map((user) => {
              return knex.select('name')
                .from('users_skills')
                .join('skills', 'skills.id', 'users_skills.skills_id')
                .where('user_id', user.id)
                .then((skills) => {
                  user.skills = skills.map((skill)=> skill.name);
                  console.log(skills)
                  return user;
                });
            });
            const promisesInterest = users.map((user) => {
                return knex.select('name')
                  .from('users_interest')
                  .join('interest', 'interest.id', 'users_interest.interest_id')
                  .where('user_id', user.id)
                  .then((interest) => {
                    user.interest = interest.map((int)=> int.name);
                    console.log(interest)
                    return user;
                  });
              });
            Promise.all(promisesInterest).then((values)=> {
                res.json(values);
            });
        })
        .catch((err) => res.send('Error getting users data'));
});

// getFlowersInBouquets(){
//     return database('bouquets')
//         .then(bouquets => {
//             const promises = bouquets.map(bouquet => {
//                 return database('bouquets-flowers')
//                     .join('flowers', 'flowers.id', 'bouquets-flowers.flower_id')
//                     .where('bouquet_id', bouquet.id)
//                     .then(flowers => {
//                         bouquet.flowers = flowers
//                         return bouquet
//                     })
//             })
//             return Promise.all(promises)
//         })
// }

// // get all inventories data
// app.get('/inventories', (req, res) => {
//   knex
//     .select('*')
//     .from('inventories')
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => res.send('Error getting inventories data'));
// });

app.listen(PORT, console.log(`running at http://localhost:${PORT}`));
