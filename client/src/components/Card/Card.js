import { useState } from "react";
import "./Card.scss";

const Card = ({ u }) => {
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

  // console.log(u.profile_image);

  if (!u) return null;
  console.log("http://localhost:5000/" + u.profile_image);
  return (
    <div key={u.id} className="user-card__info">
      <div className="user-card__info--title">
        <img
          className="user-card__info--img"
          src={"http://localhost:5000/" + u.profile_image}
          alt=""
        ></img>
        <h2 className="user-card__info--name">{u.name}</h2>
      </div>
      <div className="user-card__info--bio">
        <p>{u.bio}</p>
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
            {hasSkills(u.skills) ? (
              u.skills?.map(({ id, name }) => <li key={id}>{name}</li>)
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
            {hasInterests(u.interests) ? (
              u.interests?.map(({ id, name }) => <li key={id}>{name}</li>)
            ) : (
              <p>This user has no interests.</p>
            )}
          </ul>
        </div>
      </div>
      <div className="user-card__info--contact">
        <a className="user-card__info--email" href={"mailto:" + u.email}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Card;
