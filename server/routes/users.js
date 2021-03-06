const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  knex
    .select("*")
    .from("users")
    .then((users) => {
      const userDataPromise = users.map((user) => {
        const skillsPromise = knex
          .select("*")
          .from("users_skills")
          .join("skills", "skills.id", "users_skills.skills_id")
          .where("user_id", user.id);

        const interestsPromise = knex
          .select("*")
          .from("users_interest")
          .join("interest", "interest.id", "users_interest.interest_id")
          .where("user_id", user.id);

        return Promise.all([skillsPromise, interestsPromise]).then((res) => {
          user.skills = res[0].map((skill) => ({
            name: skill.name,
            id: skill.id,
          }));
          user.interests = res[1].map((int) => ({
            name: int.name,
            id: int.id,
          }));
          console.log(res);
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
  const {
    name,
    bio,
    email,
    postal,
    password,
    skills,
    interests,
    profile_image,
  } = req.body;

  // console.log("profile_image", imagePath);
  const passwordHashed = bcrypt.hashSync(password, 8);
  console.log(passwordHashed);

  const user = {
    name,
    email,
    bio,
    postal,
    password: passwordHashed,
    profile_image,
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
