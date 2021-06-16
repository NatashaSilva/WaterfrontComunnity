import "./Register.scss";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'
import Skills from '../../components/Skills/Skills'
import Interest from '../../components/Interest/Interest'

function Register () {

    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);

    return (
        <section className='register-section'>
            <div className='register-section__container'>
                <div className='register-section__title'>
                    <h2>Create a new account</h2>
                </div>
                <form className='register-section__form'>
                    <div className='register-section__form--field'>
                        <label htmlFor='name'><h4>Name</h4>
                            <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Name'  
                            className='register-section__form--input'                                              
                            />
                        </label>
                        <label htmlFor='email'><h4>Email address</h4>
                            <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email address'  
                            className='signIn-section__form--input'                                              
                            />
                        </label>
                        <label htmlFor='birth'><h4>Date of Birth</h4>
                            <input
                            type='date'
                            name='birth'
                            id='birth' 
                            className='signIn-section__form--input'                                              
                            />
                        </label>
                        <label htmlFor='password'><h4>Password</h4>
                            <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'    
                            className='register-section__form--input'                                            
                            />
                        </label>
                        <label htmlFor='skills'><h4>Skills</h4>
                            <Skills /> 
                        </label>
                        <label htmlFor='interest'><h4>Interest</h4>
                            <Interest />  
                        </label>
                          
                                            
                        {/* <select name='skills' multiple='' class='signIn-section__form--input'>
                            <option value=''>Skills</option>
                            <option value='basicAssembler'>Basic Furniture Assembler</option>
                            <option value='advancedAssembler'>Professional Furniture Assembler</option>
                            <option value='basicCooker'>Basic Cooking</option>
                            <option value='advancedCooker'>Professional Cooking</option>
                            <option value='basicPhoto'>Basic Photographer</option>
                            <option value='advancedPhoto'>Professional Photographer</option>
                            <option value='babysitter'>Babysitter</option>
                            <option value='accountant'>Accountant</option>
                            <option value='financial'>Financial Planner</option>
                            <option value='mech'>Mechanical</option>
                            <option value='repair'>Kitchen Repair</option>
                            <option value='plumbing'>Plumber</option>
                            <option value='software'>Software Engineer</option>
                            <option value='musician'>Musician</option>
                            <option value='writer'>Writer</option>
                            <option value='gardener'>Gardener</option>
                            <option value='design'>Interior Designer</option>
                            <option value='yoga'>Yoga Instructor</option>
                        </select>
                        <select name='interest' multiple='' class='signIn-section__form--input'>
                            <option value=''>Interest</option>
                            <option value='book'>Books</option>
                            <option value='camping'>Camping</option>
                            <option value='cooking'>Cooking</option>
                            <option value='cycling'>Cycling</option>
                            <option value='dancing'>Dancing</option>
                            <option value='gardening'>Gardening</option>
                            <option value='hiking'>Hiking</option>
                            <option value='indoor'>Indoor Sports</option>
                            <option value='languages'>Learning Languages</option>
                            <option value='movie'>Movies</option>
                            <option value='music'>Music</option>
                            <option value='outdoor'>Outdoor Sports</option>
                            <option value='painting'>Painting</option>
                            <option value='travel'>Traveling</option>
                            <option value='winter'>Winter Activities</option>
                            <option value='writing'>Writing</option>
                            <option value='yoga'>Yoga</option>                              
                        </select> */}
                    </div>
                    <div className='register-section__form--button'>
                        <input type='submit' value='REGISTER' className='register-section__form--submit'/>  
                        <Link to={'/'}><input className='register-section__form--cancel' type='submit' value='CANCEL'/> </Link>
                    </div>
                </form>  
            </div>
        </section>
    )  
}

export default Register;