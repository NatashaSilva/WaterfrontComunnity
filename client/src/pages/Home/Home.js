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
                    <Link to="/logIn" className="container__navOption">
                        Log In
                    </Link>
                    <Link to="/signIn" className="container__navOption">
                        Sign In
                    </Link>
                </div>
            </section>
        </main>		
	)
}

export default Home;