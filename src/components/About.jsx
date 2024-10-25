import React from "react";
import "./About.css";
import profile_photo from "../images//working.jpg";
import About_box from "./About_box";
import img1 from "../images//experience.png";
import img3 from "../images//briefing.png";

const About = () => {
  return (
    <div className="About_page" id="About__page">
      <h1 className="aboutTop , aboutTop-h1">About Me</h1>

      <div className="About_content">
        <div>
          <img className="About-Img" src={profile_photo} alt="Logo" />
        </div>

        <div className="box-container">
          <div className="box">
            <About_box icon={img1} main="Experience" subtitle="<1 years" />
            <About_box icon={img3} main="Completed" subtitle="10+ Projects" />
          </div>

          <div className="text-Items">
            <h3>
              A dynamic computer science enthusiast and software developer
              specializing in AI/ML and blockchain technologies. With hands-on
              experience in building innovative applications, I strive to push
              the boundaries of technology and create meaningful solutions that
              address real-world challenges
            </h3>

            <p>
              connect and collaborate on exciting projects—let’s get in touch
              !!!
            </p>
            {/* <Button button_name = "Know More" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
