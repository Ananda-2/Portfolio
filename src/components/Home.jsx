// rafce
import React from "react";
import "./Home.css";
import Button from "./Button";
import linkedin from "../images/linkedin-logo-24.png";
import github from "../images//github.png";
import twitter from "../images//twitter-logo-24.png";
import download from "../images//download.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div className="HomePage" id="Home__page">
        <div className="textArea">
          <h1> MERN Developer </h1>
          <p>
            {" "}
            Hi, I'm Ananda , A passionate Full Stack Web Developer based in
            Kolkata , India. 📍{" "}
          </p>

          <div className="social_media">
            <a href="https://www.linkedin.com/in/ananda-sau/" target="_black">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Ananda-2" target="_black">
              <img src={github} alt="github" />
            </a>
            <a href="https://twitter.com/hexagon_02" target="_black">
              <img src={twitter} alt="twitter" />
            </a>
          </div>

          <Button name="Download CV" icon={faDownload} />
        </div>

        <div className="photoArea">
          {/* <div className="profile_picture"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
