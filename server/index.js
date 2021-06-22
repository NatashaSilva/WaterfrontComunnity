const express = require("express");
// const knex = require('knex')(require('./knexfile'));
const cors = require("cors");
const users = require("./routes/users");
const interests = require("./routes/interests");
const skills = require("./routes/skills");
const image = require("./routes/image");
const User = require("./models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// required to use passport.js
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const session = require("express-session"),
  bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static("public"));
app.use(session({ secret: "our secret string" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
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

passport.use(
  new JwtStrategy(opts, function (jwtPayload, done) {
    User.where({ id: jwtPayload.data.id })
      .fetch()
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
  })
);

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.where({ email: username })
      .fetch()
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }

        const passwordsMatch = bcrypt.compareSync(
          password,
          user.attributes.password
        );

        if (!passwordsMatch) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      });
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use("/users", users);
app.use("/interests", interests);
app.use("/skills", skills);
app.use("/image", image);

app.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : "Login failed",
        user: user,
      });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign({ data: user }, "secret");
      return res.json({ user, token });
    });
  })(req, res);
});

app.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.send(req.user);
  }
);

app.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});

app.listen(PORT, console.log(`running at http://localhost:${PORT}`));
