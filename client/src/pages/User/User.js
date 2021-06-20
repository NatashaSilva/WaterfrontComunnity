import "./User.scss";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import axios from "axios";
import { API_URL_ROOT, API_USERS_PATH } from "../apiLink.js";
import Card from "../../components/Card/Card";

const User = () => {
  // const [showSkills, setShowSkills] = useState(false);
  // const [showInterest, setShowInterest] = useState(false);
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

  if (!users) {
    return <p>No users yet.</p>;
  }

  console.log(users);

  return (
    <div className="user">
      <Header user={user} />
      <div className="user-card">
        {users.map((user) => (
          <Card user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;
