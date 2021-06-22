import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { API_URL_ROOT, API_LOGOUT_PATH } from "../../pages/apiLink";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  const logOut = () => {
    axios.get(`${API_URL_ROOT}/${API_LOGOUT_PATH}`).then((response) => {
      localStorage.removeItem("token");
      history.push("/");
    });
  };

  console.log(props.user.profile_image);

  return (
    <header>
      <div className="header">
        <nav className="header__nav">
          <div className="header__left">
            <Link to="/dashboard">
              <img
                className="header__placeholder"
                src={"http://localhost:5000/" + props.user.profile_image}
                alt=""
              ></img>
            </Link>
            {props.user?.name && <h3>Hi, {props.user.name}</h3>}
          </div>
          <div className="header__right">
            {/* <Link to="/skills" className="header__navOption">
                Skills
            </Link>
            <Link to="/interest" className="header__navOption">
                Interest
            </Link> */}
            <button className="header__navOption" onClick={logOut}>
              Log out
            </button>
            {/* <Link to="/" className="header__navOption" onClick={logOut}>
              
            </Link> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
