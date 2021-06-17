import "./User.scss";
import React, {Component} from "react";
// import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import axios from "axios";

class User extends Component {

    state = {
        showSkills: false,
        showInterest: false,
        user: null,
        failedAuth: false,
        users: [
            {
                name: 'Andrea Andrade',
                birth: '02/10/1993',
                bio: 'I love puzzles and solving problems. Currently working on improving my painting skills.',
                skills: ['Software Engineer'],
                interest: ['Learning Languages', 'Painting'],
                email: 'carolinacabral@gmail.com',
                password: '123'
            },
            {
                name: 'Carolina Cabral',
                birth: '04/17/1990',
                bio: 'Love talking about politics and music. My dream is to become a musician.',
                skills: ['Musician', 'Software Engineer'],
                interest: ['Music'],
                email: 'carolinacabral@gmail.com',
                password: '123'
            },
            {
                name: 'Manoela Brito',
                birth: '08/17/1988',
                bio: 'I love to spend time in the nature, camping, reading, and meeting new people.',
                skills: ['Basic Furniture Assembler'],
                interest: ['Outdoor Activities', 'Camping', 'Traveling','Indoor Activities'],
                email: 'manoelabrito@gmail.com',
                password: '123'
            },
            {
                name: 'Marina Abreu',
                birth: '05/24/1991',
                bio: 'Exploring the world and myself. I love to spend time outside chatting with friends',
                skills: ['Babysitter', 'Basic Cooking'],
                interest: ['Movies', 'Hiking', 'Traveling'],
                email: 'marinaabreu@gmail.com',
                password: '123'
            },
            {
                name: 'Natasha da Silva',
                birth: '08/21/1991',
                bio: 'Just moved to Toronto, love to spend time in the nature and learning new things.',
                skills: ['Basic photographer'],
                interest: ['Movies', 'Camping', 'Traveling', 'Yoga', 'Cycling'],
                email: 'natashasilva@gmail.com',
                password: '123'
            }           
        ]
    }

    // componentDidMount () {

    //     const token = sessionStorage.getItem('token');

    //     if (!token) {
    //         return this.setState({
    //             failedAuth: true,
    //         });
    //     }

    //     axios.get('http://localhost:8080/api/users/current'), {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //     }
    //     .then((response) => {
    //         console.log(response.data)
    //         this.setState({
    //             user: response.data,
    //         });
    //     })
    //     .catch((error) => {
    //         this.setState({
    //             failedAuth: true,
    //         });
    //     });
    // }

    handleSkillsClick = (event) => {
        event.preventDefault();

        if (!this.state.showSkills) {
            this.setState ({showSkills: true})
        } else {
            this.setState ({showSkills: false})
        }        
    }

    handleInterestClick = (event) => {
        event.preventDefault();

        if (!this.state.showInterest) {
            this.setState ({showInterest: true})
        } else {
            this.setState ({showInterest: false})
        }        
    }

    render () {

        // if (!this.state.user) {
        //     return <p>Loading...</p>
        // }

        console.log(this.state.users);
        return (
            <div className='user'>
                <Header />
                <div className='user-card'>
                    {this.state.users.map((user)=> (
                        <div key={user.name} className='user-card__info'>
                            <div className='user-card__info--title'>
                                <img className="user-card__info--img"></img>
                                <h2 className="user-card__info--name">{user.name}</h2>
                            </div>
                            <div className='user-card__info--bio'>
                                <p>{user.bio}</p>
                            </div>
                            <div className='user-card__info--option'>
                                <div className='user-card__info--skills'>
                                    <button to="/skills" className="user-card__info--button" onClick={this.handleSkillsClick}>
                                        Skills
                                    </button>
                                    <ul className={ this.state.showSkills ? "user-card__info--list" : "user-card__info--hidden"}>
                                        {user.skills.map((skill)=>(
                                            <li>{skill}</li>
                                        ))}
                                    </ul>                                    
                                </div>
                                <div className='user-card__info--interest'>
                                    <button to="/interest" className="user-card__info--button" onClick={this.handleInterestClick}>
                                        Interest
                                    </button>
                                    <ul className={ this.state.showInterest ? "user-card__info--list" : "user-card__info--hidden"}>
                                        {user.interest.map((skill)=>(
                                            <li>{skill}</li>
                                        ))}
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        )
    }
}

export default User;