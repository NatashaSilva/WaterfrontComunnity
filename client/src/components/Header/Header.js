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

  return (
    <header>
      <div className="header">
        <nav className="header__nav">
          <div className="header__left">
            <Link to="/user">
              <div className="header__placeholder"></div>
            </Link>
            {props.user?.name && <p>Hi, {props.user.name}</p>}
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
