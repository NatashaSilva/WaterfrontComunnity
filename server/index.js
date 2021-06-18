const express = require('express');
const app = express();
const knex = require('knex')(require('./knexfile'));
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const users = require('./routes/users');
const interests = require('./routes/interests');
const skills = require('./routes/skills');

app.use(cors());
app.use(express.json());

// basic home route
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.use('/users', users);
app.use('/interests', interests);
app.use('/skills', skills);

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

// app.get('/users', (req, res) => {
//       knex
//         .select('*')
//         .from('users')
//         .then((users) => {
//           const userDataPromise = users.map((user) => {
//             const skillsPromise = knex.select('name')
//               .from('users_skills')
//               .join('skills', 'skills.id', 'users_skills.skills_id')
//               .where('user_id', user.id)

//             const interestsPromise = knex.select('name')
//               .from('users_interest')
//               .join('interest', 'interest.id', 'users_interest.interest_id')
//               .where('user_id', user.id)
            
//             return Promise.all([skillsPromise, interestsPromise]).then(res => {
//               user.skills = res[0].map((skill)=> skill.name);
//               user.interests = res[1].map((int)=> int.name);
//               return user;
//             })
//           });

//           Promise.all(userDataPromise).then((values) => {
//               res.json(values);
//           });
//         })
//         .catch((err) => res.send('Error getting users data'));
// });

// app.post('/add-users', (req,res) => {

//     console.log(req.body)

// })

app.listen(PORT, console.log(`running at http://localhost:${PORT}`));
