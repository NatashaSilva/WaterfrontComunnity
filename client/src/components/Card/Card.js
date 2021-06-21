import { useState } from "react";
import "./Card.scss";

const Card = ({ user }) => {
  const [showSkills, setShowSkills] = useState(false);
  const [showInterest, setShowInterest] = useState(false);

  const handleSkillsClick = (event) => {
    event.preventDefault();
    setShowSkills(!showSkills);
  };

  const handleInterestClick = (event) => {
    event.preventDefault();
    setShowInterest(!showInterest);
  };

  const hasInterests = (interests) => interests?.length > 0;

  const hasSkills = (skills) => skills?.length > 0;

  if (!user) return null;

  return (
    <div key={user.id} className="user-card__info">
      <div className="user-card__info--title">
        <img className="user-card__info--img" alt=""></img>
        <h2 className="user-card__info--name">{user.name}</h2>
      </div>
      <div className="user-card__info--bio">
        <p>{user.bio}</p>
      </div>
      <div className="user-card__info--option">
        <div className="user-card__info--skills">
          <button
            to="/skills"
            className="user-card__info--button user-card__info--skills"
            onClick={handleSkillsClick}
          >
            Skills
          </button>
          <ul
            className={
              showSkills ? "user-card__info--list" : "user-card__info--hidden"
            }
          >
            {hasSkills(user.skills) ? (
              user.skills?.map((skill) => <li key={skill.id}>{skill}</li>)
            ) : (
              <p>This user has no skills.</p>
            )}
          </ul>
        </div>
        <div className="user-card__info--interest">
          <button
            to="/interest"
            className="user-card__info--button user-card__info--interest"
            onClick={handleInterestClick}
          >
            Interest
          </button>
          <ul
            className={
              showInterest ? "user-card__info--list" : "user-card__info--hidden"
            }
          >
            {hasInterests(user.interests) ? (
              user.interests?.map((interest) => (
                <li key={interest.id}>{interest}</li>
              ))
            ) : (
              <p>This user has no interests.</p>
            )}
          </ul>
        </div>
      </div>
      <div className="user-card__info--contact">
        <a className="user-card__info--email" href={"mailto:" + user.email}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Card;
