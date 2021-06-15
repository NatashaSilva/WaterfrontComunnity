import "./Header.scss";
import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo/logo9.png"

function Header() {
	
	return (
		<header>
            <div className="container">
                <nav className="container__nav">
                    <div className="container__left">
                        <Link to="/">
                            <img src={Logo} className="container__logo" alt="Waterfront community Logo"/>
                        </Link>
                    </div>
                    <div className="container__right">
                        <Link to="/logIn" className="container__navOption">
                            Log In
                        </Link>
                        <Link to="/signIn" className="container__navOption">
                            Sign In
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
	)
}

export default Header;