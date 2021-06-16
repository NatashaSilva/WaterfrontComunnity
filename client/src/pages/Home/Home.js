import "./Home.scss";
import React from "react";
import {Link} from "react-router-dom";
import Header from '../../components/Header/Header'

function Home() {
	
	return (
        <main>
            {/* <Header /> */}
            <section className='home-section'>
                <h1 className='home-section__text'>
                    Welcome to the Waterfront Community
                </h1>
                <div className="container__right">
                    <Link to="/SignIn" className="container__navOption">
                        Sign In
                    </Link>
                    <Link to="/signUp" className="container__navOption">
                        Register
                    </Link>
                </div>
            </section>
        </main>		
	)
}

export default Home;