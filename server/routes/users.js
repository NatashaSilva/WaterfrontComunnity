const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  knex
    .select("*")
    .from("users")
    .then((users) => {
      const userDataPromise = users.map((user) => {
        const skillsPromise = knex
          .select("name")
          .from("users_skills")
          .join("skills", "skills.id", "users_skills.skills_id")
          .where("user_id", user.id);

        const interestsPromise = knex
          .select("name")
          .from("users_interest")
          .join("interest", "interest.id", "users_interest.interest_id")
          .where("user_id", user.id);

        return Promise.all([skillsPromise, interestsPromise]).then((res) => {
          user.skills = res[0].map((skill) => skill.name);
          user.interests = res[1].map((int) => int.name);
          return user;
        });
      });

      Promise.all(userDataPromise).then((values) => {
        res.json(values);
      });
    })
    .catch((err) => res.send("Error getting users data"));
});

router.post("/add-users", async (req, res) => {
  const { name, email, bio, postal, password, skills, interests } = req.body;

  // const passwordHashed = bcrypt.hash(password, 8).then((hashedPassword) => {
  //   return hashedPassword;
  // });
  // console.log(passwordHashed);

  const user = {
    name,
    email,
    bio,
    postal,
    password,
  };

  const createUserRes = await knex("users").insert(user);
  const userId = createUserRes?.[0];

  if (!userId) res.status(500).json(err);

  let interestsPromises = [];
  let skillsPromises = [];

  // INTERESTS
  // insert na junction table users-interest
  if (interests?.length > 0) {
    interestsPromises = interests.map((interestId) => {
      return knex("users_interest").insert({
        user_id: userId,
        interest_id: interestId,
      });
    });
  }

  // SKILLS
  // insert na junction table users-skills
  if (skills?.length > 0) {
    skillsPromises = skills.map((skill) => {
      return knex("users_skills").insert({
        user_id: userId,
        skills_id: skill,
      });
    });
  }

  Promise.all([...interestsPromises, ...skillsPromises])
    .then((promisesRes) => {
      res.sendStatus(200);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
