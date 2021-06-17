import "./SignIn.scss";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignIn extends Component{

        state = {
                error: ''
        }

        handleSubmit = (event) => {
                event.preventDefault();

                axios.post('http://localhost:8080/api/users/login', {
                        email: event.target.email.value,
                        password: event.target.password.value
                })
                .then((response) => {
                        if(this.state.error) {
                                this.setState({ error: ''})
                        }
                        sessionStorage.setItem('token', response.data.token)

                })
                .catch((error)=> {
                        this.setState({ error: error.response.data })
                })
        }

        render() {
                return (
                        <section className='signIn-section'>
                                <div className='signIn-section__container'>
                                        <div className='signIn-section__title'>
                                                <h2>Sign in to your account</h2>
                                        </div>
                                        <form className='signIn-section__form' onSubmit={this.handleSubmit}>
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
                                                {/* check style in the lab - class: client-side Auth */}
                                                {this.state.error && <div className='signIn-section__form--error'>{this.state.error}</div>}
                                        </form>  
                                </div>
                        </section>
                )

        }

        
}

export default SignIn;