import "./Home.scss";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="home-section">
        <h1 className="home-section__text">
          Welcome to the Waterfront Community
        </h1>
        <div className="container__right">
          <Link to="/signIn" className="container__navOption">
            Sign In
          </Link>
          <Link to="/register" className="container__navOption">
            Register
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
