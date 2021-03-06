import "./Register.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  API_URL_ROOT,
  API_ADD_USERS_PATH,
  API_USERS_PATH,
  API_INTERESTS_PATH,
  API_SKILLS_PATH,
} from "../apiLink.js";

function Register() {
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [userSkills, setUserSkills] = useState([]);
  const [userInterests, setUserInterests] = useState([]);
  const [profileImage, setProfileImage] = useState();
  const [imageUploaded, setImageUploaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  const handleDropDownSelectSkills = (_event, { value }) => {
    setUserSkills(value);
  };

  const handleDropDownSelectInterest = (_event, { value }) => {
    setUserInterests(value);
  };

  // const styleLink = document.createElement("link");
  // styleLink.rel = "stylesheet";
  // styleLink.href =
  //   "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  // document.head.appendChild(styleLink);

  const handleSubmit = (event) => {
    setSubmitting(true);
    event.preventDefault();
    const { name, email, bio, postal, password } = event.target;
    const user = {
      name: name.value,
      email: email.value,
      bio: bio.value,
      postal: postal.value,
      password: password.value,
      skills: userSkills,
      interests: userInterests,
      profile_image: profileImage,
    };

    axios
      .post(`${API_URL_ROOT}/${API_USERS_PATH}/${API_ADD_USERS_PATH}`, user)
      .then((res) => {
        console.log(res);
        setSubmitting(false);
        setImageUploaded(false);
        history.push("/signIn");
      });
  };

  useEffect(() => {
    // fetch all interests
    axios.get(`${API_URL_ROOT}/${API_INTERESTS_PATH}`).then((response) => {
      const formattedInterests = response.data.map((interest) => {
        return {
          text: interest.name,
          value: interest.id,
        };
      });
      setInterests(formattedInterests);
    });

    // fetch all skills
    axios.get(`${API_URL_ROOT}/${API_SKILLS_PATH}`).then((response) => {
      const formattedSkills = response.data.map((skill) => {
        return {
          text: skill.name,
          value: skill.id,
        };
      });
      setSkills(formattedSkills);
    });
  }, []);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post(`${API_URL_ROOT}/image/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const imagePath = res.data.image.replace("uploads/", "");
        console.log("new image path", imagePath);
        setProfileImage(imagePath);
        setImageUploaded(true);
        console.log(res);
      });
  };

  return (
    <section className="register-section">
      <div className="register-section__container">
        <div className="register-section__box">
          <div className="register-section__title">
            <h2>Create a new account</h2>
          </div>
          <form className="register-section__form" onSubmit={handleSubmit}>
            <div className="register-section__form--field">
              <label htmlFor="name">
                <h4>Name</h4>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="register-section__form--input"
                  required
                />
              </label>
              <label htmlFor="email">
                <h4>Email address</h4>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="signIn-section__form--input"
                  required
                />
              </label>
              <label htmlFor="bio">
                <h4>Bio</h4>
                <textarea
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder="Add about yourself"
                  className="signIn-section__form--input"
                  required
                />
              </label>
              <label htmlFor="postal">
                <h4>Postal Code</h4>
                <input
                  type="text"
                  name="postal"
                  id="postal"
                  placeholder="Postal Code"
                  className="signIn-section__form--input"
                  required
                />
              </label>
              <label htmlFor="password">
                <h4>Password</h4>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="register-section__form--input"
                  required
                />
              </label>
              <label htmlFor="skills">
                <h4>Skills</h4>
                <Dropdown
                  onChange={handleDropDownSelectSkills}
                  placeholder="Skills"
                  name="skills"
                  fluid
                  multiple
                  selection
                  options={skills}
                />
              </label>
              <label htmlFor="interest">
                <h4>Interest</h4>
                <Dropdown
                  onChange={handleDropDownSelectInterest}
                  name="interest"
                  placeholder="Interest"
                  fluid
                  multiple
                  selection
                  options={interests}
                />
              </label>
              <div className="register-section__form--upload">
                <label
                  htmlFor="profile_pic"
                  className="register-section__form--pic"
                >
                  <h4
                    className={
                      imageUploaded
                        ? "register-section__form--hidden"
                        : "register-section__form--show"
                    }
                  >
                    Upload image
                  </h4>
                  <h4
                    className={
                      imageUploaded
                        ? "register-section__form--show"
                        : "register-section__form--hidden"
                    }
                  >
                    Image uploaded successfully ???{" "}
                  </h4>
                  <input
                    type="file"
                    id="profile_pic"
                    name="profile_pic"
                    accept=".jpg, .jpeg, .png"
                    className="register-section__form--photo"
                    multiple={false}
                    onChange={imageHandler}
                  />
                </label>
              </div>
            </div>
            <div className="register-section__form--button">
              <button
                type="submit"
                className="register-section__form--submit"
                disabled={submitting}
              >
                REGISTER
              </button>
              <Link to={"/"}>
                <input
                  className="register-section__form--cancel"
                  type="submit"
                  value="CANCEL"
                />{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
