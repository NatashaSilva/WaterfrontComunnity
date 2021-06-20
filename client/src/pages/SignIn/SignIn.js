import "./SignIn.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL_ROOT, API_LOGIN_PATH } from "../apiLink.js";

const SignIn = () => {
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API_URL_ROOT}/${API_LOGIN_PATH}`, {
        username: event.target.email.value,
        password: event.target.password.value,
      })
      .then((response) => {
        if (response.error) {
          setError({ error: "" });
        }
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        setError({ error: error.response.data });
      });
  };

  return (
    <section className="signIn-section">
      <div className="signIn-section__container">
        <div className="signIn-section__title">
          <h2>Sign in to your account</h2>
        </div>
        <form className="signIn-section__form" onSubmit={handleSubmit}>
          <div className="signIn-section__form--field">
            <label htmlFor="email">
              <h4>Email address</h4>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="signIn-section__form--input"
              />
            </label>
            <label htmlFor="password">
              <h4>Password</h4>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="signIn-section__form--input"
              />
            </label>
          </div>
          <div className="signIn-section__form--button">
            <input
              type="submit"
              value="SIGN IN"
              className="signIn-section__form--submit"
            />
            <Link to={"/"}>
              <input
                className="signIn-section__form--cancel"
                type="submit"
                value="CANCEL"
              />{" "}
            </Link>
          </div>
          {/* check style in the lab - class: client-side Auth */}
          {error && (
            <div className="signIn-section__form--error">
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignIn;
