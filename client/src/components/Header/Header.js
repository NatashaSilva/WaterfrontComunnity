import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header">
        <nav className="header__nav">
          <div className="header__left">
            <Link to="/user">
              <div className="header__placeholder"></div>
            </Link>
          </div>
          <div className="header__right">
            {/* <Link to="/skills" className="header__navOption">
                            Skills
                        </Link>
                        <Link to="/interest" className="header__navOption">
                            Interest
                        </Link> */}
            <Link to="/" className="header__navOption">
              Log out
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
