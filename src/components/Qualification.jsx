import React, { useState } from "react";
import "./Qualification.css";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      title: "Computer Science",
      institution: "MIT University",
      location: "USA",
      period: "2016 - 2020",
    },
    {
      title: "Web Development",
      institution: "Coding Bootcamp",
      location: "Spain",
      period: "2020 - 2021",
    },
  ];

  const experienceData = [
    {
      title: "Product Designer",
      institution: "Microsoft",
      location: "Spain",
      period: "2021 - Present",
    },
    {
      title: "UX Designer",
      institution: "Apple Inc",
      location: "Spain",
      period: "2020 - 2021",
    },
    {
      title: "Web Designer",
      institution: "Figma",
      location: "Spain",
      period: "2018 - 2020",
    },
  ];

  const renderQualification = (item, index, isLeft) => (
    <div
      className={`qualification__info qualification__info--${
        isLeft ? "left" : "right"
      }`}
    >
      <h3 className="qualification__title-role">{item.title}</h3>
      <p className="qualification__institution">
        {item.institution} - {item.location}
      </p>
      <div
        className={`qualification__calendar ${
          isLeft ? "qualification__calendar--left" : ""
        }`}
      >
        <Calendar size={14} />
        <span>{item.period}</span>
      </div>
    </div>
  );

  return (
    <section className="qualification">
      <div className="qualification__header">
        <h1 className="heading">Qualifications</h1>
        <span className="qualification__subtitle">My personal journey</span>
      </div>

      <div className="qualification__tabs">
        <button
          className={`qualification__button ${
            activeTab === "education" ? "active" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          <GraduationCap className="qualification__icon" size={24} />
          <span>Education</span>
        </button>

        <button
          className={`qualification__button ${
            activeTab === "experience" ? "active" : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
          <Briefcase className="qualification__icon" size={24} />
          <span>Experience</span>
        </button>
      </div>

      <div className="qualification__sections">
        <div
          className={`qualification__content ${
            activeTab === "education" ? "active" : ""
          }`}
        >
          {educationData.map((item, index) => (
            <div className="qualification__data" key={index}>
              {renderQualification(item, index, true)}
              <div className="qualification__dot" />
              <div />
            </div>
          ))}
        </div>

        <div
          className={`qualification__content ${
            activeTab === "experience" ? "active" : ""
          }`}
        >
          {experienceData.map((item, index) => (
            <div className="qualification__data" key={index}>
              <div />
              <div className="qualification__dot" />
              {renderQualification(item, index, false)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
