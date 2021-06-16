import "./SignIn.scss";
import React from "react";
import { Link } from "react-router-dom";

function SignIn() {

        return (
                <section className='signIn-section'>
                        <div className='signIn-section__container'>
                                <div className='signIn-section__title'>
                                        <h2>Sign in to your account</h2>
                                </div>
                                <form className='signIn-section__form'>
                                        <div className='signIn-section__form--field'>
                                                <label htmlFor><h4>Email address</h4>
                                                        <input
                                                        type='email'
                                                        name='email'
                                                        id='email'
                                                        placeholder='Email address'  
                                                        className='signIn-section__form--input'                                              
                                                        />
                                                </label>
                                                <label htmlFor><h4>Password</h4>
                                                        <input
                                                        type='password'
                                                        name='password'
                                                        id='password'
                                                        placeholder='Password'    
                                                        className='signIn-section__form--input'                                            
                                                        />
                                                </label>
                                        </div>
                                        <div className='signIn-section__form--button'>
                                                <input type='submit' value='SIGN IN' className='signIn-section__form--submit'/>  
                                                <Link to={'/'}><input className='signIn-section__form--cancel' type='submit' value='CANCEL'/> </Link>
                                        </div>
                                </form>  
                        </div>
                </section>
        )
}

export default SignIn;