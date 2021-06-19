const express = require('express');
// const knex = require('knex')(require('./knexfile'));
const cors = require('cors');
const users = require('./routes/users');
const interests = require('./routes/interests');
const skills = require('./routes/skills');
const User = require('./models/user');

// required to use passport.js
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const session = require("express-session"),
    bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static("public"));
app.use(session({ secret: 'our secret string' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.where({ id: id })
    .fetch()
    .then(
      (user) => {
        done(null, user);
      },
      (err) => {
        done(err);
      }
    )
    .catch((err) => {
      done(err);
    });
});

// Passport strategy
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.where({ email: username })
      .fetch()
      .then(
        (user) => {
          console.log('password', password)
          console.log('user.password', user.attributes.password)
          // TODO
          // if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
          }
          if (password !== user.attributes.password) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        }
      );
  }
));

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// basic home route
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.use('/users', users);
app.use('/interests', interests);
app.use('/skills', skills);

// app.post('/login', (req, res) => {
//   res.json(req.body);
// });

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.sendStatus(200);
  });

app.listen(PORT, console.log(`running at http://localhost:${PORT}`));
