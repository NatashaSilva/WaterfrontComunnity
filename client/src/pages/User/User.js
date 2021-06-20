import "./User.scss";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import axios from "axios";
import { API_URL_ROOT, API_USERS_PATH } from "../apiLink.js";

const User = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showInterest, setShowInterest] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // TODO
    axios.get(`${API_URL_ROOT}/${API_USERS_PATH}`).then((response) => {
      setUsers(response.data || []);
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // if (!token) {
    //   return this.setState({
    //     failedAuth: true,
    //   });
    // }

    axios
      .get(`${API_URL_ROOT}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        // TODO
      });
  }, []);

  const handleSkillsClick = (event) => {
    event.preventDefault();
    setShowSkills(!showSkills);
  };

  const handleInterestClick = (event) => {
    event.preventDefault();
    setShowInterest(!showInterest);
  };

  if (!users) {
    return <p>No users yet.</p>;
  }

  console.log(users);

  return (
    <div className="user">
      <Header user={user} />
      <div className="user-card">
        {users.map((user) => (
          <div key={user.id} className="user-card__info">
            <div className="user-card__info--title">
              <img className="user-card__info--img" alt=""></img>
              <h2 className="user-card__info--name">{user.name}</h2>
            </div>
            <div className="user-card__info--bio">
              <p>{user.bio}</p>
            </div>
            <div className="user-card__info--option">
              <div className="user-card__info--skills">
                <button
                  to="/skills"
                  className="user-card__info--button"
                  onClick={handleSkillsClick}
                >
                  Skills
                </button>
                <ul
                  className={
                    showSkills
                      ? "user-card__info--list"
                      : "user-card__info--hidden"
                  }
                >
                  {user.skills?.map((skill) => (
                    <li key={skill.id}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="user-card__info--interest">
                <button
                  to="/interest"
                  className="user-card__info--button"
                  onClick={handleInterestClick}
                >
                  Interest
                </button>
                <ul
                  className={
                    showInterest
                      ? "user-card__info--list"
                      : "user-card__info--hidden"
                  }
                >
                  {user.interest?.map((interest) => (
                    <li key={interest.id}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
