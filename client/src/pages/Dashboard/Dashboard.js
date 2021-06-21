import "./Dashboard.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import axios from "axios";
import { Dropdown } from "semantic-ui-react";
import {
  API_URL_ROOT,
  API_USERS_PATH,
  API_INTERESTS_PATH,
  API_SKILLS_PATH,
} from "../apiLink.js";
import Card from "../../components/Card/Card";

const User = () => {
  const [skills, setSkills] = useState([]);
  const [interest, setInterest] = useState([]);
  const [showSkills, setShowSkills] = useState([]);
  const [showInterest, setShowInterest] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  useEffect(() => {
    axios.get(`${API_URL_ROOT}/${API_USERS_PATH}`).then((response) => {
      setUsers(response.data || []);
    });
  }, []);

  useEffect(() => {
    axios.get(`${API_URL_ROOT}/${API_INTERESTS_PATH}`).then((response) => {
      const formattedInterests = response.data.map((interest) => {
        return {
          text: interest.name,
          value: interest.id,
        };
      });
      setInterest(formattedInterests);
    });

    axios.get(`${API_URL_ROOT}/${API_SKILLS_PATH}`).then((response) => {
      const formattedSkills = response.data.map((skill) => {
        return {
          text: skill.name,
          value: skill.id,
        };
      });
      setSkills(formattedSkills);
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${API_URL_ROOT}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {});
  }, []);

  const handleDropDownSelectSkills = (event, { value }) => {
    setShowSkills(value);
  };

  const handleDropDownSelectInterest = (event, { value }) => {
    setShowInterest(value);
  };

  const arrayHasValue = (arr, key, listOfValues) => {
    return arr
      ? arr.filter((item) => listOfValues.includes(item[key])).length > 0
      : false;
  };

  const isValidUser = (user) => {
    console.log("user", user);
    if (!(showSkills.length > 0) && !(showInterest.length > 0)) return true;
    const hasAtLeastOneSkill = arrayHasValue(user.skills, "id", showSkills);
    const hasAtLeastOneInterest = arrayHasValue(
      user.interests,
      "id",
      showInterest
    );

    return hasAtLeastOneSkill || hasAtLeastOneInterest;
  };

  if (!users) {
    return <p>No users yet.</p>;
  }

  if (!localStorage.token) {
    return (
      <div className="redirect">
        <h2>You need to sign in to access this page.</h2>
        <Link to="/" className="redirect__navOption">
          Home Page
        </Link>
      </div>
    );
  }

  return (
    <div className="user">
      <Header user={user} />
      <div className="user-card">
        <form className="user-card__form">
          <Dropdown
            onChange={handleDropDownSelectSkills}
            className="user-card__form--search"
            placeholder="Skills"
            name="skills"
            fluid
            multiple
            selection
            options={skills}
          />
          <Dropdown
            onChange={handleDropDownSelectInterest}
            className="user-card__form--search"
            placeholder="Interest"
            name="interest"
            fluid
            multiple
            selection
            options={interest}
          />
        </form>
        {users
          .filter((user) => isValidUser(user))
          .map((user) => (
            <Card user={user} />
          ))}
      </div>
    </div>
  );
};

export default User;
